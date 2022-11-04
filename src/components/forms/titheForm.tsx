import React, { useState } from "react";
import * as Yup from "yup";
import {
  withFormik,
  Formik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
} from "formik";

import * as HiIcons from "react-icons/hi";
import * as FcIcons from "react-icons/fc";

import { ITithe } from "src/Interfaces/tithe.interface";
import { meetingTypesSetter } from "src/enums/meeting_types";
import { Button } from "flowbite-react";
import TitheService from "src/services/titthe.service";

interface OtherProps {
  message: string;
}

const TitheForm: React.FC<{}> = () => {
  const initialValues: ITithe = {
    meetingType: 0,
    collectionedAmount: 0,
    date: new Date(),
  };
  const [meeting, setMeeting] = useState<number>();

  const handleMeetingTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeeting(parseInt(e.target.value));
  };

  let inputClass =
    "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          TitheService.createTithe(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="flex flex-col ">
          <label htmlFor="meetingType">Select Meeting Type</label>
          <Field
            type="select"
            name="meetingType"
            id="meetingType"
            as="select"
            className={`${inputClass}`}
            onChange={handleMeetingTypeChange}
            value={initialValues.meetingType}
          >
            {meetingTypesSetter.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Field>
          <label htmlFor="firstName">Amount Collected</label>
          <Field
            id="collectionedAmount"
            name="collectionedAmount"
            placeholder="enter amount"
            className={`${inputClass}`}
          />

          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
            <label htmlFor="firstName">Select Date</label>
            <input
              type="date"
              className={`${inputClass}`}
              placeholder="Select date"
            />
          </div>
          {/* <Field name="amountUncollected" type="datepicker"></Field> */}

          <div className="flex flex-wrap items-center gap-2">
            <Button type="submit">
              Submit
              <HiIcons.HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default TitheForm;
