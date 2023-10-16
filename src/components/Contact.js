import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import ContactImg from "../assets/img/contact-img.svg"

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }


    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} >
                        <img src={ContactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6} >
                        <h2>Get In Touch</h2>
                        <form>
                            <Row>
                                <Col className="px-1" sm={6} >
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col className="px-1" sm={6} >
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
} 