import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpSubscribe";
import Logo from "../assets/img/logo.svg"
import icon1 from "../assets/img/nav-icon1.svg"
import icon2 from "../assets/img/nav-icon2.svg"
import icon3 from "../assets/img/nav-icon3.svg"

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm/>
                    <Col sm= {6}>
                        <img src={Logo} alt="logosvg" />
                    </Col>
                    <Col className="text-center text-sm-end" sm={6}>
                        <div className="social-icon">
                            <a href="#"><img src={icon1} alt="" /></a>
                            <a href="#"><img src={icon2} alt="" /></a>
                            <a href="#"><img src={icon3} alt="" /></a>
                        </div>
                        <p>Copyright 2023</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}