import { Col, Spinner, Row } from 'reactstrap'
import Card from './card'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
export default function Tasks() {
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
            <Col xs={12} md={12} lg={12}>
                {
                    data == '' ?
                        <div className={styles.spinner}>
                            <Spinner
                            color="primary"
                            style={{
                                height: '6rem',
                                width: '6rem'
                            }}
                        >Loading...
                        </Spinner>
                        </div>
                             :
                        <Card data={data} />
                }
            </Col>
        </Row>
    )

} 