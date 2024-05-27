import React,{memo,Fragment} from 'react'

//react-bootstrap
import {Container,Image} from 'react-bootstrap'

//router
import {Link} from 'react-router-dom'

// img
import error500 from '../../../assets/images/error/500.png'

 const Error500 = memo(() => {
    return (
        <Fragment>
            <div className="gradient">
                <Container>
                    <Image src={error500} className="img-fluid mb-4 w-50" alt=""/>
                    <h2 className="mb-0 mt-4 text-white">Oops! This Page is Not Found.</h2>
                    <p className="mt-2 text-white">The requested page dose not exist.</p>
                    <Link className="btn btn-light text-primary d-inline-flex align-items-center" to="/dashboard">Back to Home</Link>
                </Container>
                <div className="box">
                    <div className="c xl-circle">
                        <div className="c lg-circle">
                            <div className="c md-circle">
                                <div className="c sm-circle">
                                    <div className="c xs-circle">                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
)

Error500.displayName="Error500"
export default Error500;
