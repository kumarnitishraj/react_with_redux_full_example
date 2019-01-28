import React from 'react'
import { Grid, Row,Col} from 'react-bootstrap'

import {Link } from "react-router-dom";

export default class GuestCard extends React.Component{


    render(){
        const { data } = this.props;
        console.log(data)

        return(
                <Col md={5} className="card" > 
                    <Col md={4} style={{padding:'0px'}}>
                        <img className="img-responsive"
                        src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" />
                    </Col>  
                                
                    <Col md={6}  style={{float:'left'}}>
                        {/* <Link  to={'/pg/'+data._id}>
                            <h3>{data.pg_name}</h3>
                        </Link> */}
                        <div>
                            <Link  to={'/guest/put/'+data._id}>
                                <h4>{data.name}</h4>
                            </Link>

                        </div>

                        <div>
                            <strong>Aadhar : </strong>
                            <span>{data.aadhar}</span>
                        </div>

                        <div>
                            <strong>PAN : </strong>
                            <span>{data.pan}</span>
                        </div>

                        <div>
                            <strong>Address : </strong>
                            <span>{data.address}</span>
                        </div>
                        
                    </Col>

                </Col> 
        )
    }
}