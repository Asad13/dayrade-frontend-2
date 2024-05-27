import  React,{memo,Fragment} from 'react'

//Componet
import Card from '../../../../components/bootstrap/card'


const AnalyticsCard = memo((props) => {
    return (
        <Fragment>
            <Card>
                <Card.Body>
                    <div className="text-center">
                        <h2 className="text-primary mb-3">{props.count}</h2>
                        <p className="text-dark">{props.content}</p>
                        <small>
                            <span className={props.textColor}>{props.number} </span><span className='text-dark'>{props.content1}</span>
                        </small>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
})

AnalyticsCard.displayName="AnalyticsCard"
export default AnalyticsCard