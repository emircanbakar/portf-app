import {Container, Row, Col} from 'react-bootstrap'
import {ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import { useEffect, useState } from 'react'

export const Banner = () =>{
    const [loopNumb, setLoopNumb] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const rotate = ["Frontend Developer", "UI Developer", "Web Developer"];


    return(
        <section className='banner' id='banner'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1> {`Hi i'm`} <span className='wrap'> web developer</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, rerum?</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}