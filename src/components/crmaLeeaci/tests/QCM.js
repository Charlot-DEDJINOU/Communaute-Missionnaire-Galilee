import Form from "react-bootstrap/Form"

function QCM(props) {

    const responses = props.response
    const letters = ['A','B','C','D','E','F','G']

    return(
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{props.question}</Form.Label>
                {
                    responses.map((response , index) => <Form.Check 
                                                key={index}
                                                name={props.question}
                                                type="checkbox"
                                                id={props.question}
                                                label={response}
                                                value={letters[index]}
                                            />)
                }
        </Form.Group>
    )
}

export default QCM