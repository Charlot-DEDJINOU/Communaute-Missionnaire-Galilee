import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import "./inscription.css"

function Register() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    }

    const navigate = useNavigate()

    return(
    <section className='register'>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='register-form'>
        <h2 className='text-center'>Inscription</h2>
        <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom03">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid" className='fw-bold'>
             Please provide a valid username.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom03">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid" className='fw-bold'>
            Please provide a valid name.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom03">
            <Form.Label>Prenom</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid" className='fw-bold'>
            Please provide a valid prenom.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom04">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="exemple@gmail.com" required />
            <Form.Control.Feedback type="invalid" className='fw-bold'>
            Please provide a valid Email.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom05">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" required />
            <Form.Control.Feedback type="invalid" className='fw-bold'>
            Please provide a valid password.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom06">
            <Form.Label>Confirmer Mot de passe</Form.Label>
            <Form.Control type="password" required />
            <Form.Control.Feedback type="invalid" className='fw-bold'>
            Please provide a valid password.
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
        <i className='mb-3'>Vous avez deja un compte , <u className='do-hover' onClick={() => navigate('/login')}>Connectez-vous</u></i>
        <button type="submit" className='registerbutton'>S'inscrire</button>
    </Form>
    </section>
    );
}

export default Register