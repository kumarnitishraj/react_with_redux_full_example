import React, { Component } from 'react'
// import {connect} from 'react-redux'
import {Grid,Row,Col,Button,Modal} from 'react-bootstrap'

import bookImage from '../assets/book.png'
import '../GlobalStyle.css'
import UpdateModel from '../components/Modal'
import ModelDetails from '../components/Modal/ModalAutherDetails'
import AlertSweet from '../components/Alert'

export default class AfterLogin extends Component{
    constructor(){
        super()
        this.state={ 
            show:false
        }
       
    }
    render(){
      //  const { sideData } = this.state;
   //  debugger;
        return(
            <Grid style = {{marginTop:50,width:'50%',padding:10}} className="card">
                
                <Row >
                    {/* ------- Start Book Image section ------------ */}
                    <Col lg={4} md={4} sm={4} xs={4}>
                        <img src={bookImage}  />
                    </Col>
                    {/* ------- End Book Image section ------------ */}

                    {/* ------- Start Book Details section ------------ */}
                    <Col  lg={8} md={8} sm={8} xs={8} className="text-left" >
                        <Row  >
                            <Col lg={6} />
                            <Col lg={3} >
                                {/* <Button bsStyle="danger" style = {{marginLeft:20}} >Delete</Button> */}
                                <div style = {{marginLeft:20}} ><AlertSweet /></div>
                            </Col>
                            <Col lg={3} >
                                <UpdateModel /> 
                            </Col>
                        </Row>

                        <Row  >
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <h3>Outcasts of Order (Saga of Recluce)</h3>
                            </Col>
                        </Row>

                        <Row style = {{marginTop:10}}>
                            <Col lg={3} md={3} sm={3} xs={3}>
                                <strong>Auther</strong>
                            </Col>
                            <Col lg={9} md={9} sm={9} xs={9} >
                                <Col lg={6} style = {{marginLeft:-18}} >
                                    <span>Mr. Rk Agrawal</span>
                                </Col>
                                <Col lg={3}>
                                    <AlertSweet />
                                </Col>
                                <Col lg={3}>
                                    <ModelDetails /> 
                                </Col>
                               
                           </Col>
                        </Row>

                        <Row style = {{marginTop:10}}>
                            <Col lg={3} md={3} sm={3} xs={3}>
                                <strong>ISBN No</strong>
                            </Col>
                            <Col lg={9} md={9} sm={9} xs={9}>
                               <span>0310348277</span> 
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={3} md={3} sm={3} xs={3}>
                                <strong>Description</strong>
                            </Col>
                            <Col lg={9} md={9} sm={9} xs={9}>
                                <span>
                                James Joyce’s semiautobiographical tale of his alter ego, Stephen Dedalus, is a coming-of-age story like no other. A bold, innovative
                                </span>
                            </Col>
                        </Row>
                    </Col>
                    {/* ------- End Book Details section ------------ */}
                </Row>
                
            </Grid>

        )
    }
}

