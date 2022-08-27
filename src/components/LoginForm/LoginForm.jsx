import { Button } from 'components/common/Button.styled';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Input,
  InputFeedback,
  Label,
  LoginFormStyled,
} from './LoginForm.styled';

const mySchema = yup.object().shape({
  email: yup.string().email().required('No email provided.'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
});

export const LoginForm = () => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={mySchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log('Logging in', values);
        setSubmitting(false);
      }, 500);
    }}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;

      return (
        <LoginFormStyled onSubmit={handleSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && 'error'}
          />
          {errors.email && touched.email && (
            <InputFeedback>{errors.email}</InputFeedback>
          )}

          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && 'error'}
          />
          {errors.password && touched.password && (
            <InputFeedback>{errors.password}</InputFeedback>
          )}

          <Button type="submit" disabled={isSubmitting}>
            Login
          </Button>
        </LoginFormStyled>
      );
    }}
  </Formik>
);
