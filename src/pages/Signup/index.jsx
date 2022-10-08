import React, {useState} from 'react';
import './Signup.css';
import Helmet from "../../components/Helmet";
import {Col, Container, Form, FormGroup, Row} from "reactstrap";
import {Link} from "react-router-dom";

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    return (
        <Helmet title='Signup'>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' className='m-auto text-center'>
                            <h3 className='fw-bold fs-4 mb-4'>Signup</h3>
                            <Form className='auth__form'>
                                <FormGroup className='form__group'>
                                    <input type='text' placeholder='Enter your name'
                                           value={userName} onChange={event => setUserName(event.target.value)}/>
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type='email' placeholder='Enter your email'
                                           value={email} onChange={event => setEmail(event.target.value)}/>
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type='password' placeholder='Enter your password'
                                           value={password} onChange={event => setPassword(event.target.value)}/>
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type='file'
                                           value={password} onChange={event => setFile(event.target.files[0])}/>
                                </FormGroup>
                                <button type='submit' className='buy__btn auth__btn'>Create on Account</button>
                                <p>Already have an account? <Link to='/login'>Login</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Signup;

