import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap'
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, quo reiciendis? Delectus, ea odit.</p>
                        </div>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1}  alt=""/>
                                <span>UI/UX Design</span>
                            </div>
                            <div className="item">
                                <img src={meter2}  alt=""/>
                                <span>UI Development</span>
                            </div>
                            <div className="item">
                                <img src={meter3}  alt=""/>
                                <span>Web Development</span>
                            </div>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    )
}