import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { passwordInput } from "src/styles/controls";
import { ILogin } from "src/Interfaces/login.interface";
import { textDanger } from "src/styles/text";

const submitBtn =
  "inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full";

const LoginValidationSchema = Yup.object({
  userName: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

interface AttendancePrps {
  initialValues: ILogin;
  submit: any;
  title?: string;
}

const LoginForm = ({ initialValues, submit }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="md:w-8/12 lg:w-1/4 lg:ml-20">
        <Formik
          initialValues={initialValues}
          onSubmit={submit}
          validationSchema={LoginValidationSchema}
        >
          {({ errors, touched }) => (
            <Form>
              {/* Email input  */}
              <div className="mb-6">
                <Field
                  id="userName"
                  name="userName"
                  type="text"
                  className={`${passwordInput}`}
                  placeholder="Userame"
                />
                {errors.userName && touched.userName ? (
                  <div
                    className={`${textDanger}`}
                  >{`User name is required`}</div>
                ) : null}
              </div>
              {/* Password input  */}
              <div className="mb-6">
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className={`${passwordInput}`}
                  placeholder="Password"
                />
                {errors.password && touched.password ? (
                  <div
                    className={`${textDanger}`}
                  >{`Password is required`}</div>
                ) : null}
              </div>

              {/* Submit button  */}
              {/* <Link to={`/home`}> */}
              <button
                type="submit"
                className={`${submitBtn}`}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign in
              </button>
              {/* </Link> */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
