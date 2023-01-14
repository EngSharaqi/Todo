import { Row, Button, Form, Input, Label } from "reactstrap";
import styles from '../styles/Home.module.css';
import Blury from '../public/blury.svg'
import axios from "axios";
import { useEffect } from "react";

export default function Register() {
    
    let handleRegister = (e) => {
        e.preventDefault();

        const headers = {
            'Access-Control-Allow-Credentials':true,
            "Access-Control-Allow-Origin": "*",
            "content-type": " application/json"
        }
        
        const data = {
            name: document.getElementById('rName').value,
            email: document.getElementById('rEmail').value,
            password: document.getElementById('rPassword').value,
            age: document.getElementById('rAge').value,
        }

        axios.post('https://api-nodejs-todolist.herokuapp.com/user/registe', headers, data)
        .then(res => {
            // window.location.href = '/login'
            console.log(res)
        })
        .catch(error => {
            alert(`Please make sure that you have entered all fields correctly, also this can do because of ${error}`)
        })
    }

    return (
        <div className={'container ' + styles.registerContainer}>
            <Form
                className={styles.register}
                onSubmit = {handleRegister}
            >
                <img src={Blury.src} alt='Blury' />
                <Row className={styles.formF}>
                    <Row>
                        <h4>Register a new user</h4>
                        <small>All fields have the * are required</small>
                    </Row>
                    <Label for="rName">Name <span style={{ 'color': 'red' }}>*</span></Label>
                    <Input
                        type='text'
                        id="rName"
                        placeholder='John Doe'
                        required
                    />
                    <Label for="rEmail">Email <span style={{ 'color': 'red' }}>*</span></Label>
                    <Input
                        type='email'
                        id="rEmail"
                        placeholder='example@example.com'
                        required
                    />
                    <Label for="rPassword">Password <span style={{ 'color': 'red' }}>*</span></Label>
                    <Input
                        type='password'
                        id="rPassword"
                        placeholder='Your password is our top secret!'
                        required
                    />
                    <Label for="rAge">Age <span style={{ 'color': 'red' }}>*</span></Label>
                    <Input
                        type='number'
                        min={8}
                        id="rAge"
                        placeholder='You have to be older than 7 years!'
                        required
                    />

                    <h6>You have already registerd? <a href='/login'>Login</a></h6>
                    <Button color='primary'>Sign Up</Button>
                </Row>
            </Form>
        </div>
    )
}