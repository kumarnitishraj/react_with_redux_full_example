import React from 'react'
import { Grid, Row,Col} from 'react-bootstrap'

import {Link } from "react-router-dom";

export default class UiCard extends React.Component{


    render(){
        const { data } = this.props;
        return(
        <Col md={5} className="card" > 
            <Col md={4} style={{padding:'0px'}}>
                <img className="img-responsive"
                src="http://www.mysoreassets.com/images/no_photo_home_pg.gif" />
        
            </Col>  
                         
            <Col md={6}  style={{float:'left'}}>
                <Link  to={'/pg/'+data._id}>
                    <h3>{data.pg_name}</h3>
                </Link>

                <div>
                    <h5>{data.address}</h5>
                    
                </div>
                
            </Col>
            
            <Col md={2}  >
                <div className="button-top">
                    <Link  to={'/guests/'+data._id}>Guests</Link>
                
                </div>
                
                
            </Col>
        </Col> 
        )
    }
}