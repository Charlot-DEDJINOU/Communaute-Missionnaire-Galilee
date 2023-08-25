import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import RepeatChamps from './RepeatChamps';
import "./rapport.css"

function Tresorier() {

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
                <h3 className='text-center' style={{color : "green"}}>Formulaire de Rapport Financier des cultes / réunions</h3>
                <Container className="mt-3 fw-semibold" style={{textAlign : "justify"}}>Tous les Trésoriers, Comptables, Directeurs Financiers des communautés, églises de maison, départements d’activité (mouvement des hommes, femmes, jeunes, adolescents, enfants, intercession, chorale, groupe musical, groupe d’évangélisation, etc.), bureaux et conseils des districts, sous-régions et régions de la Communauté Missionnaire Galilée sont conviés de déposer les rapports financiers des cultes et réunions en remplissant le formulaire ci-dessous.</Container>
            </section>
            <section className='rapport'>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='rapport-form'>
                    <RepeatChamps />
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom06">
                            <Form.Label>Total Offrandes </Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom07">
                            <Form.Label>Total Offrandes spéciales</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom08">
                            <Form.Label>Total Prémices</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom09">
                            <Form.Label>Total Libéralités </Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom10">
                            <Form.Label>Total Dons volontaires</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom11">
                            <Form.Label>Total Action de grâce</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom12">
                            <Form.Label>Total Fête de la moisson</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom13">
                            <Form.Label>Total Dîmes</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom14">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" placeholder="Message"  style={{ height: '150px' , resize: "none"}} required />
                        <Form.Control.Feedback type="invalid" className='fw-bold'>
                            Please provide a valid Message.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom05">
                            <Form.Label>Totaux montant recouvré</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom15">
                            <Form.Label>Date du culte/réunion</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
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

export default Tresorier