import React, { useEffect, useState, useCallback } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from "react-bootstrap/Form"
import Question from './Question';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button"
import QuestionsCultureGenerale from './QuestionsCultureGenerale';

function CultureGenerale() {

    const [seconde, setSeconde] = useState(0);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormSubmit = useCallback((e) => {
        e.preventDefault()
        var data = {}
        for(let question of e.target.elements) {
            data[question.name] = question.value
        }

        console.log(data)
        setFormSubmitted(true);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconde(prevSeconde => prevSeconde + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (seconde === 3600 && !formSubmitted) {
            const button = document.getElementById("buttonCultureGenerale")
            button.click()
        }
    }, [seconde, formSubmitted, handleFormSubmit]);

    const questions = QuestionsCultureGenerale();

    return (
        <>
            {
                seconde < 3600 ?
                    <Container className='test'>
                        <h3 className='text-center'>Culture Generale</h3>
                        <div>
                            <p className='mb-2 fw-medium'>Temps écoulé</p>
                            <ProgressBar now={100 * seconde / 3600} animated label={`${Math.floor(seconde/60)} min`} />
                        </div>
                        <Form className='questions' onSubmit={handleFormSubmit}>
                            <div className='mb-3'>
                                Toute ma vie je me suis consacré à la lutte pour le peuple africain. J'ai combattu contre la domination blanche et j'ai combattu contre la domination noire. J'ai chéri l'idéal d'une société libre et démocratique dans laquelle toutes les personnes vivraient ensemble en harmonie et avec les mêmes opportunités. C'est un idéal pour lequel j'espère vivre et agir. Mais, si besoin est, c'est un idéal pour lequel je suis prêt à mourir. <b>Nelson Mandela- MASTER LICENCE</b>
                            </div>
                            {
                                questions.map((question, index) => (
                                    <Question key={index} question={question} />
                                ))
                            }
                            <Button type="submit" id="buttonCultureGenerale">Envoyer</Button>
                        </Form>
                    </Container>
                :
                    <div className='d-flex align-items-center justify-content-center fs-5 fw-medium'>
                        Temps écoulés !!!
                    </div>
            }
        </>
    );
}

export default CultureGenerale;