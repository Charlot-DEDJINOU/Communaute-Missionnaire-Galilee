import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import RepeatChamps from './RepeatChamps';
import "./rapport.css"

function Secretaire() {

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
                <Container className="mt-3 fw-semibold" style={{textAlign : "justify"}}>Tous les secrétaires des communautés, groupes cellulaires, départements d’activité (mouvement des hommes, femmes, jeunes, adolescents, enfants, intercession, chorale, groupe musical, groupe d’évangélisation, etc.), bureaux et conseils des districts, sous-régions et régions de la Communauté Missionnaire Galilée sont conviés de déposer leur rapport à la fin de chaque culte en remplissant le formulaire ci-dessous.</Container>
            </section>
            <section className='rapport'>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='rapport-form'>
                    <RepeatChamps />
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom06">
                            <Form.Label>Participation Homme</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom07">
                            <Form.Label>Participation Femme</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom08">
                            <Form.Label>Participation Jeune Homme</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom09">
                            <Form.Label>Participation Jeune Femme</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom10">
                            <Form.Label>Participation Adolescent</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom11">
                            <Form.Label>Participation Adolescente</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom12">
                            <Form.Label>Participation Garçon</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom13">
                            <Form.Label>Participation Fille</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                            <Form.Control.Feedback className='fw-bold'>Correct !</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom14">
                        <Form.Label>Compte rendu / procès-verbal </Form.Label>
                        <Form.Control as="textarea" placeholder="Message"  style={{ height: '150px' , resize: "none"}} required />
                        <Form.Control.Feedback type="invalid" className='fw-bold'>
                            Please provide a valid Message.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom15">
                        <Form.Label>Date du culte/réunion</Form.Label>
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

export default Secretaire