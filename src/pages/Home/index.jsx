import React from 'react';
import './Home.css';
import Helmet from "../../components/Helmet";
import {Col, Container, Row} from "reactstrap";
import heroImg from '../../assets/images/hero-img.png'
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import Services from "../../components/services";

const Home = () => {
    const year = new Date().getFullYear();
    return (
        <Helmet title={'Home'}>
            <section className='hero__section'>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className='hero__content'>
                                <p className='hero__subtitle'>
                                    Trending product in {year}
                                </p>
                                <h2>Make Your Interior More Minimalistic & Modern</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Alias assumenda dolor impedit in molestias necessitatibus ratione,
                                    tenetur voluptates? At deserunt ea incidunt odio porro quod
                                    quos reiciendis! Deserunt, sequi tenetur.</p>
                                <motion.button whileTap={{scale: 1.2}} className='buy__btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className='hero__img'>
                                <img src={heroImg} alt='hero-image'/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Services />
        </Helmet>
    );
};

export default Home;
