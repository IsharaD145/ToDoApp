import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import * as yup from 'yup';

function SignupForm() {
  const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    username: yup.string().required('Username is required').matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores').min(5, 'Username must be at least 5 characters long'),
    email: yup.string().required('Email is required').email('Enter a valid email'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
    confirmPassword: yup.string().oneOf([yup.ref("password")],"Passwords must match").required("Re-Enter the password").min(8, 'Password must be at least 8 characters long'),  
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password:'',
        confirmPassword:'',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-1">
            <Form.Group as={Col} md="4" className="d-flex flex-column mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
              className="custom-input"
                type="text"
                name="firstName"
                placeholder="First name"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={touched.firstName && !!errors.firstName}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" className="d-flex flex-column mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
              className="custom-input"
                type="text"
                name="lastName"
                placeholder="Last name"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={touched.lastName && !!errors.lastName}
                isValid={touched.lastName && !errors.lastName}
              />
              <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" className="d-flex flex-column mb-3">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                className="custom-input"
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={touched.username && !!errors.username}
                  isValid={touched.username && !errors.username}
                />
                <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-1">
            <Form.Group as={Col} className="d-flex flex-column mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
              className="custom-input"
                type="email"
                name="email"
                placeholder="john@gmail.com"
                value={values.email}
                onChange={handleChange}
                isInvalid={touched.email && !!errors.email}
                isValid={touched.email && !errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" className="d-flex flex-column mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
              className="custom-input"
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              isInvalid={touched.password && !!errors.password}
              isValid={touched.password && !errors.password}
            />
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" className="d-flex flex-column mb-3">
              <Form.Label>Re-Enter Password</Form.Label>
              <Form.Control
              className="custom-input"
              type="password"
              name="confirmPassword"
              placeholder="Re-Enter Password"
              value={values.confirmPassword}
              onChange={handleChange}
              isInvalid={touched.confirmPassword && !!errors.confirmPassword}
              isValid={touched.confirmPassword && !errors.confirmPassword}
            />
            <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          

          

          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
}

export default SignupForm;
