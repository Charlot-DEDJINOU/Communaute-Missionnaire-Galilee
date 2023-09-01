import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import "./inscription.css"

function Login() {

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
        <h2 className='text-center'>Connexion</h2>
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
        <Form.Group className="mb-3">
            <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            />
        </Form.Group>
        <i className='mb-3'>Vous n'avez pas un compte , <u className='do-hover' onClick={() => navigate('/register')}>Inscrivez-vous</u></i>
        <button type="submit" className='registerbutton'>S'inscrire</button>
    </Form>
    </section>
    );
}

export default Login