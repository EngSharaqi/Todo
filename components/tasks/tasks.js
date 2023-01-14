import { Button, Col, Form, Input, Row } from 'reactstrap'
import Card from './card'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
export default function Tasks () {
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(todo => {
            setData(todo.data)
        })
        .catch()
    }, [])
    
    return (
        <Row className={styles.taskWrap}>
            {/* <Col xs={12} md={5} lg={4}>
                <Form onSubmit={(e) => e.preventDefault()}>
                <Input onChange={(e) => console.log(e.target.value)} type='textarea' placeholder='What is the next todo ...?' required/>
                    <select className='form-select'>
                        <option value={'completed'}>Completed</option>
                        <option value={'inCompleted'}>Not Completed</option>
                    </select>
                    <Button><i class="fas fa-plus"></i></Button>
                </Form>
            </Col> */}
            <Col xs={12} md={12} lg={12}>
                <Card data = {data} />
            </Col>
        </Row>
    )
    
} 