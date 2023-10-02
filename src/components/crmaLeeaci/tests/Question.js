import Form from "react-bootstrap/Form"

function Question({question}) {
    return(
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="fw-medium">{question}</Form.Label>
                <Form.Control as="textarea" rows={3} />
        </Form.Group>
    )
}

export default Question