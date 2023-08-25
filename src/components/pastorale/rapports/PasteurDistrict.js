import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import RepeatChamps from './RepeatChamps';
import "./rapport.css"

function PasteurDistrict() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return(
        <>
            <section className='d-flex flex-column align-items-center  justify-content-center py-5 rapport-header'>
                <h3 className='text-center' style={{color : "green"}}>Formulaire de soumission de rapport du pasteur titulaire</h3>
                <Container className="mt-3 fw-semibold" style={{textAlign : "justify"}}>Tous les pasteurs titulaires des districts de la Communauté Missionnaire Galilée sont conviés de déposer leur rapport chaque fin de semaine et périodiquement en remplissant l’un des formulaires ci-dessous.</Container>
            </section>
            <section className='rapport'>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='rapport-form'>
                    <RepeatChamps />
                    <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom15">
                        <Form.Label>Période couvrant le rapport</Form.Label>
                        <Form.Control
                            required
                            type="text"
                        />
                        <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom14">
                        <Form.Label>Rapport / Compte rendu </Form.Label>
                        <Form.Control as="textarea" placeholder="Message"  style={{ height: '150px' , resize: "none"}} required />
                        <Form.Control.Feedback type="invalid" className='fw-bold'>
                            Please provide a valid Message.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom15">
                        <Form.Label>Date de soumission</Form.Label>
                        <Form.Control
                            required
                            type="date"
                        />
                        <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
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
        </>
    )
}

export default PasteurDistrict