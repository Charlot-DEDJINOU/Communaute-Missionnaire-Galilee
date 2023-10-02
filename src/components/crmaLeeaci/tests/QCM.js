import Form from "react-bootstrap/Form"

function QCM(props) {

    const responses = props.responses

    return(
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{props.question}</Form.Label>
                {
                    responses.map(response => <Form.Check 
                                                type="radio"
                                                id={props.question}
                                                label={response}
                                            />)
                }
        </Form.Group>
    )
}

export default QCM