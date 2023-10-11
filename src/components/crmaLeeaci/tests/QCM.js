import Form from "react-bootstrap/Form"

function QCM(props) {

    const responses = props.response

    return(
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{props.question}</Form.Label>
                {
                    responses.map((response , index) => <Form.Check 
                                                key={index}
                                                name={props.question}
                                                type="radio"
                                                id={props.question}
                                                label={response}
                                                value={response}
                                            />)
                }
        </Form.Group>
    )
}

export default QCM