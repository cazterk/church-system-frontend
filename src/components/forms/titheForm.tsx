import * as Yup from "yup";
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";

import { ITithe } from "src/Interfaces/tithe.interface";

interface OtherProps {
  message: string;
}

const TitheForm = (props: OtherProps & FormikProps<ITithe>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <>
      <Form>
        <Field type="select" name="meetingType">
          <option></option>
        </Field>

        <Field name="amountCollected" value />
        <Field name="amountUncollected" type="checkbox"></Field>
      </Form>
    </>
  );
};

export default TitheForm;
