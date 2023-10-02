import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from "react-bootstrap/Form"
import Question from './Question';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button"
import { useEffect, useState } from 'react';

function CultureBiblique() {

    const [min, setMin] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setMin(prevMin => prevMin + 1);
      }, 60000);
    
      return () => clearInterval(intervalId);
    }, []);
    


    return(
        <Container className='test'>
            <h3 className='text-center'>Culture Biblique</h3>
            <div>
                <p className='mb-2 fw-medium'>Temps écoulé</p>
                <ProgressBar now={100 * min / 60}  animated label={`${min} min`} />
            </div>
            <Form className='questions'>
                <Question question="Qui est charlot ?"/>
                <Question question="Qui est charlot ?"/>
                <Question question="Qui est charlot ?"/>
                <Question question="Qui est charlot ?"/>
                <Question question="Qui est charlot ?"/>
                <Button>Envoyer</Button>
            </Form>
        </Container>
    )
}

export default CultureBiblique