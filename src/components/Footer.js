import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/font/img/logo.svg";
import navIcon1 from "../assets/font/img/nav-icon1.svg";
import navIcon2 from "../assets/font/img/nav-icon2.svg";
import navIcon3 from "../assets/font/img/nav-icon3.svg";
import Sustainability_Intern_Resume from '../assets/font/Sustainability_Intern_Resume.pdf';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon icon-footer">
              <a href="https://www.linkedin.com/in/jelizaveta-tsalaja/ " target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/jtsalaja" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href={Sustainability_Intern_Resume} target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved. Thanks for visiting!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}