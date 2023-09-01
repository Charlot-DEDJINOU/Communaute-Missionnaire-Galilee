import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import "./evenement.css"

function FormaulaireEvenement() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    }

    return(
        <section className='event'>
            <h3 className='text-center'>INSCRIPTION POUR LA CONFERENCE DE COMBAT SPIRITUEL 2023</h3>
            <h5>Réserve cette date</h5>
            <p className='text-justify'>Rejoignez-nous pour expérimenter la grâce de la démonstration de la puissance du Saint-Esprit et de l’amour de Dieu, qui se tiendra le mardi 01er Août 2023.</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='event-form'>
                <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom05">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" required />
                    <Form.Control.Feedback type="invalid" className='fw-bold'>
                    Please provide a valid nom.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom05">
                    <Form.Label>Date de naissnace</Form.Label>
                    <Form.Control type="date" required />
                    <Form.Control.Feedback type="invalid" className='fw-bold'>
                    Please provide a valid date.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom05">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control type="password" required />
                    <Form.Control.Feedback type="invalid" className='fw-bold'>
                    Please provide a valid telephone.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom04">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="exemple@gmail.com" required />
                    <Form.Control.Feedback type="invalid" className='fw-bold'>
                    Please provide a valid Email.
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
                <button type="submit" className='eventbutton'>S'inscrire</button>
            </Form>
    </section>
    )
}

export default FormaulaireEvenement