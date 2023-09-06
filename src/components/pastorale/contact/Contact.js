import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import "./contact.css"

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section className='contact'>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='contact-form'>
        <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom03">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid" className='fw-bold'>
            Please provide a valid name.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom04">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="exemple@gmail.com" required />
            <Form.Control.Feedback type="invalid" className='fw-bold'>
            Please provide a valid Email.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom03">
            <Form.Label>Telephone</Form.Label>
            <Form.Control type="number" placeholder="+229 67887325" required />
            <Form.Control.Feedback type="invalid" className='fw-bold'>
            Please provide a valid Telephone.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom04">
            <Form.Label>Objet</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid" className='fw-bold'>
            Please provide a valid objet.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom07">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" placeholder="Message"  style={{ height: '150px' , resize: "none"}} required />
            <Form.Control.Feedback type="invalid" className='fw-bold'>
            Please provide a valid Message.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            />
        </Form.Group>
        <button type="submit" className='contactbutton'>Envoyer</button>
    </Form>
    </section>
  );
}

export default Contact;