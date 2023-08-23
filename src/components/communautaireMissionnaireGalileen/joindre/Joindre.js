import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./joindre.css"

function Joindre() {
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
    <section className='joindre'>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='joindre-form'>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nom"
          />
          <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Prenom</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Prenom"
          />
          <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom03">
        <Form.Label>Telephone</Form.Label>
        <Form.Control type="number" placeholder="+229 67887325" required />
        <Form.Control.Feedback type="invalid" className='fw-bold'>
          Please provide a valid Telephone.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom04">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="exemple@gmail.com" required />
        <Form.Control.Feedback type="invalid" className='fw-bold'>
          Please provide a valid Email.
        </Form.Control.Feedback>
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>Ville</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ville"
          />
          <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom06">
          <Form.Label>Pays</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Pays"
          />
          <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
        </Form.Group>
      </Row>
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
      <Button type="submit" style={{backgroundColor : "green" , border : "none"}}>Envoyer</Button>
    </Form>
    </section>
  );
}

export default Joindre;