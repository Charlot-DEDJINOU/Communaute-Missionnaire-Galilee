import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';

function RepeatChamps() {
    return(
        <>
            <Form.Group md="12" as={Col} className="mb-3">
                <Form.Label>Fonction à la CMG</Form.Label>
                <Form.Select>

                </Form.Select>
            </Form.Group>
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
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="exemple@gmail.com" required />
                <Form.Control.Feedback type="invalid" className='fw-bold'>
                    Please provide a valid Email.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom04">
                <Form.Label>Telephone</Form.Label>
                <Form.Control type="number" placeholder="+229 67887325" required />
                <Form.Control.Feedback type="invalid" className='fw-bold'>
                Please provide a valid Telephone.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom05">
                <Form.Label>Objet</Form.Label>
                <Form.Control type="text" placeholder="exemple@gmail.com" required />
                <Form.Control.Feedback type="invalid" className='fw-bold'>
                    Please provide a valid objet.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="12" as={Col} className="mb-3">
                <Form.Label>Choisissez votre Région Internationale de la CMG</Form.Label>
                <Form.Select>
                    
                </Form.Select>
            </Form.Group>
            <Form.Group md="12" as={Col} className="mb-3">
                <Form.Label>Choisissez votre Sous-région Internationale de la CMG</Form.Label>
                <Form.Select>
                    
                </Form.Select>
            </Form.Group>
            <Form.Group md="12" as={Col} className="mb-3">
                <Form.Label>Choisissez le pays de résidence de votre communauté CMG</Form.Label>
                <Form.Select>
                    
                </Form.Select>
            </Form.Group>
            <Form.Group md="12" as={Col} className="mb-3">
                <Form.Label>Choisissez votre Région administrative de la CMG</Form.Label>
                <Form.Select>
                    
                </Form.Select>
            </Form.Group>
            <Form.Group md="12" as={Col} className="mb-3">
                <Form.Label>Choisissez votre Sous-région administrative de la CMG </Form.Label>
                <Form.Select>
                    
                </Form.Select>
            </Form.Group>
            <Form.Group md="12" as={Col} className="mb-3">
                <Form.Label>Choisissez votre District administratif de la CMG</Form.Label>
                <Form.Select>
                    
                </Form.Select>
            </Form.Group>
            <Form.Group md="12" as={Col} className="mb-3">
                <Form.Label>Choisissez votre Communauté / Groupe Cellulaire CMG</Form.Label>
                <Form.Select>
                    
                </Form.Select>
            </Form.Group>
            <Form.Group md="12" as={Col} className="mb-3">
                <Form.Label>Choisissez votre Département d'Activité CMG</Form.Label>
                <Form.Select>
                    
                </Form.Select>
            </Form.Group>
            <Form.Group md="12" as={Col} className="mb-3">
                <Form.Label>Choisissez votre Culte / Réunion</Form.Label>
                <Form.Select>
                    
                </Form.Select>
            </Form.Group>
        </>
    )
}

export default RepeatChamps