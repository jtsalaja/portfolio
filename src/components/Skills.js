import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/font/img/color-sharp.png";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoPython } from "react-icons/io";
import { BiLogoVisualStudio } from "react-icons/bi";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoTableau } from "react-icons/io5";
import { RiFileExcel2Line } from "react-icons/ri";



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
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                            I am a second-year mathematics major with a passion for analytical problem-solving and an interest in leveraging mathematical principles to address real-world challenges. 
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <IoLogoPython className="icon-skill"/>
                                    <h5>Python</h5>
                                </div>

                                <div className="item">
                                    <BiLogoVisualStudio  className="icon-skill"/>
                                    <h5>R</h5>
                                </div>

                                <div className="item">
                                    <IoLogoJavascript className="icon-skill"/>
                                    <h5>JavaScript</h5>
                                </div>

                                <div className="item">
                                     <IoLogoHtml5 className="icon-skill"/>
                                    <h5>HTML & CSS</h5>
                                </div>

                                <div className="item">
                                    <IoLogoReact className="icon-skill"/>
                                    <h5>React</h5>
                                </div>

                                <div className="item">
                                    <IoLogoTableau className="icon-skill"/>
                                    <h5>Tableau</h5>
                                </div>

                                <div className="item">
                                    <RiFileExcel2Line className="icon-skill"/>
                                    <h5>Microsoft Excel</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )

}