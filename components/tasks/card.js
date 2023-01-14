import styles from '../../styles/Home.module.css'
import {
    Row,
    Card
} from 'reactstrap'

export default function (props) {
    return (
        <Row>
            {
                props.data?.map(todo => 
                    <Card className={todo.completed == true ? `${styles.card} completed` : `${styles.card} inCompleted`}>
                        <div>
                            <h5>{todo.title}</h5>
                        </div>
                        <small>
                            {
                                todo.completed == true
                                ?
                                <span className={styles.faComplete}>
                                    <i className={`fas fa-check-circle`}></i>
                                    Completed
                                </span>
                                :
                                    <span className={styles.faNotComplete}>
                                        <i className={`fas fa-exclamation-triangle`}></i>
                                        Oh, this task isn't completed!
                                    </span>
                            }
                        </small>
                    </Card>
                    )
            }
            
        </Row>
    )
}