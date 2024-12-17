import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/font/img/header-img.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";



export const Banner =()=> {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Mathematics Student", "Data Analyst", "Climate Education Enthusiast"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() =>{
        let ticker = setInterval(() => {
            tick();
            
        }, delta)
        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1): fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
         } else if(isDeleting && updatedText ==='') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
         }

    }

    return(
        <Router> 
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio!</span>
                    <h1>{`Hi I'm Jelizaveta Tsalaja -- `}<span className="wrap">{text}</span></h1>
                    <p>Born and raised in cutting-edge tech center Tallinn, Estonia, I am currently pursuing my degree at Bates College. I thrive on logical reasoning and enjoy tackling complex problems with a systematic approach. Whether through data analysis, visualisation, or applying mathematical algorithms, I am eager to translate numbers into meaningful insights and narratives, contributing to positive change.</p>
                    <HashLink className="underline-no" to='#connect'><button className="underline-no" onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button></HashLink>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
        </Router>
    )
}