import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import { ITithe } from "src/Interfaces/tithe.interface";
import { meetingTypesSetter } from "src/enums/meeting_types";
import { Button } from "flowbite-react";
import TitheService from "src/services/titthe.service";

const titheValidationSchema = Yup.object({
  meetingType: Yup.number().required("Required"),
  collectedAmount: Yup.number().required(),
  date: Yup.date().required("Required"),
});

const TitheForm: React.FC<{}> = () => {
  const initialValues: ITithe = {
    meetingType: null,
    collectedAmount: 0,
    date: new Date(),
  };
  let [meeting, setMeeting] = useState<number>();

  const handleMeetingTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMeeting(parseInt(e.target.value));
    try {
      initialValues.meetingType = parseInt(e.target.value);
    } catch (e) {
      console.error(e);
    }
  };

  let inputClass =
    "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  let fieldClass = "mt-4";
  let textDanger = "text-red-500 font-semibold";

  return (
    <div className="flex justify-center w-full ">
      <Formik
        initialValues={initialValues}
        validationSchema={titheValidationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log({ values });
          TitheService.createTithe(JSON.stringify(values, null, 2));
          resetForm({});
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col w-6/12 ">
            <div className={`${fieldClass}`}>
              <label htmlFor="meetingType">Select Meeting Type</label>
              <Field
                type="select"
                name="meetingType"
                id="meetingType"
                as="select"
                placeholder="select meeting"
                className={`${inputClass}`}
                onChange={handleMeetingTypeChange}
                value={meeting}
              >
                {meetingTypesSetter.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              {errors.meetingType && touched.meetingType ? (
                <div className={`${textDanger}`}>{`Please select meeting`}</div>
              ) : null}
            </div>
            <div className={`${fieldClass}`}>
              <label htmlFor="firstName">Amount Collected</label>
              <Field
                id="collectedAmount"
                name="collectedAmount"
                placeholder="enter amount"
                className={`${inputClass}`}
              />
              {errors.collectedAmount && touched.collectedAmount ? (
                <div className={`${textDanger}`}>{errors.collectedAmount}</div>
              ) : null}
            </div>
            <div className={`${fieldClass}`}>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                <label htmlFor="firstName">Select Date</label>
                <input
                  type="date"
                  className={`${inputClass}`}
                  placeholder="Select date"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center my-8 items-center gap-2">
              <Button
                type="submit"
                className="p-2 text-center text-white w-64 bg-blue-500"
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TitheForm;
