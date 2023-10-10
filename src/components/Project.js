import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { First } from "react-bootstrap/esm/PageItem"

export const Project = () => {

    const projects = [
        {
            title: "Design",
            desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ad.",
            imgUrl: projImg1,
        },
        {
            title: "Design",
            desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ad.",
            imgUrl: projImg2,
        },
        {
            title: "Design",
            desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ad.",
            imgUrl: projImg3,
        },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa est esse repellendus et inventore?</p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <p> {project.title} </p>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                        Lorem
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                        Ipsum
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
