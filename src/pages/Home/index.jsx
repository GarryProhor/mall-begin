import React, {useState, useEffect} from 'react';
import './Home.css';
import Helmet from "../../components/Helmet";
import {Col, Container, Row} from "reactstrap";
import heroImg from '../../assets/images/hero-img.png'
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import Services from "../../components/UI/services";
import Products from "../../components/UI/Products";
import products from "../../assets/data/products";
import counterImg from '../../assets/images/counter-timer-img.png';
import Clock from "../../components/UI/CLock";


const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    const year = new Date().getFullYear();
    useEffect(()=>{
        const filteredTrendingProducts = products.filter(({category}) => category === 'chair');
        const filteredBestSalesProducts = products.filter(({category}) => category === 'sofa');
        const filteredMobileProducts = products.filter(({category}) => category === 'mobile');
        const filteredWirelessProducts = products.filter(({category}) => category === 'wireless');
        const filteredPopularProducts = products.filter(({category}) => category === 'watch');
        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
        setMobileProducts(filteredMobileProducts);
        setWirelessProducts(filteredWirelessProducts);
        setPopularProducts(filteredPopularProducts);
    }, [])
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

            <section className='trending__products'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section__title'>Trending Products</h2>
                        </Col>
                        <Products data={trendingProducts}/>
                    </Row>
                </Container>
            </section>
            <section className='best__sales'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section__title'>Best Sales</h2>
                        </Col>
                        <Products data={bestSalesProducts}/>
                    </Row>
                </Container>
            </section>
            <section className='timer__count'>
                <Container>
                    <Row>
                        <Col lg='6' md='12' className='count__down-col'>
                            <div className='clock__top-content'>
                                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                            </div>
                            <Clock />
                            <motion.button whileHover={{scale: 1.2}} className='buy__btn store__btn'>
                                <Link to='/shop'>Visit Store</Link>
                            </motion.button>
                        </Col>
                        <Col lg='6' md='12' className='text-end counter__img'>
                            <img src={counterImg} alt='counter-img'/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='new__arrivals'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h2 className='section__title'>New Arrivals</h2>
                        </Col>
                        <Products data={mobileProducts} />
                        <Products data={wirelessProducts} />
                    </Row>
                </Container>
            </section>
            <section className='popular__category'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h2 className='section__title'>Popular in Category</h2>
                        </Col>
                        <Products data={popularProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;
