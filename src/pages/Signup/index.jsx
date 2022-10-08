import React, {useState} from 'react';
import './Signup.css';
import {useNavigate} from 'react-router-dom';
import Helmet from "../../components/Helmet";
import {Col, Container, Form, FormGroup, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {setDoc, doc} from 'firebase/firestore';

import {auth, storage, db} from "../../firebase.config.js";

import {toast} from "react-toastify";

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const signup = async(e) =>{
        e.preventDefault();
        setLoading(true);

        try{
            const userCredential = await  createUserWithEmailAndPassword(auth,email, password);

            const user = userCredential.user;

            const storageRef = ref(storage, `images/${Date.now() + userName}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on((error)=>{
                toast.error(error.message);
            }, ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) =>{
                    //update user profile
                    await updateProfile(user,{
                        displayName: userName,
                        photoURL: downloadUrl,
                    });
                    //store user data in firestore database
                    await setDoc(doc(db, 'users', user.uid),{
                        uid: user.uid,
                        displayName: userName,
                        email,
                        photoUrl: downloadUrl
                    });
                });
            });
            setLoading(false);
            toast.success('Account created');
            navigate('/login');
        }catch (e){
            setLoading(false);
            toast.error('something went wrong')
        }
    };
    return (
        <Helmet title='Signup'>
            <section>
                <Container>
                    <Row>
                        {
                            loading? (<Col lg='12' className='text-center'><h6 className='fw-bold'>Loading......</h6></Col>):
                                (<Col lg='6' className='m-auto text-center'>
                                    <h3 className='fw-bold fs-4 mb-4'>Signup</h3>
                                    <Form className='auth__form' onSubmit={signup}>
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
                                </Col>)
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Signup;

