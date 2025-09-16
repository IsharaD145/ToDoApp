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
    username: yup.string().required('Username is required'),
    email: yup.string().required('Email is required').email('Enter a valid email'),
    
    terms: yup.bool().oneOf([true], 'Terms must be accepted'),
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
        
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" className="d-flex flex-column mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
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
                type="text"
                name="lastName"
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

          <Row className="mb-3">
            <Form.Group as={Col} className="d-flex flex-column mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
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

          <Form.Group className="mb-3 d-flex flex-column">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={touched.terms && !!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
}

export default SignupForm;
