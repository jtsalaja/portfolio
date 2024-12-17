import { Container, Nav, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/font/img/project-img1.png";
import colorSharp2 from "../assets/font/img/color-sharp2.png";

    export const Projects = () => {

        const projects = [
            {
                title: "Business Startup",
                description: "Web Development",
                imgUrl: projImg1,
            },
            {
                title: "Business Startup",
                description: "Web Development",
                imgUrl: projImg1,
            },
            {
                title: "Business Startup",
                description: "Web Development",
                imgUrl: projImg1,
            },
            {
                title: "Business Startup",
                description: "Web Development",
                imgUrl: projImg1,
            },
            {
                title: "Business Startup",
                description: "Web Development",
                imgUrl: projImg1,
            },
            {
                title: "Business Startup",
                description: "Web Development",
                imgUrl: projImg1,
            },
        ];
        return (
            <section className="project" id="projects">
               <Container>
                    <Row>
                        <Col>
                            <h2>
                                Projects
                            </h2>
                            <p>This is a paragraph about projects. I need to write it out!</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Data Analysis</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Software Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" >Web Development</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                               projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                               })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">Some Text</Tab.Pane>
                                    <Tab.Pane eventKey="third">Some Text 2</Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container> 
                <img className="background-image-right" src={colorSharp2}></img>
            </section>
        )
    };