import React, { Component } from 'react';
import { connect } from "react-redux";
import { Grid, Row,Col, Alert} from 'react-bootstrap'
import { Redirect } from "react-router-dom";

import  Header from "../Header"
import { pgDetail, updatePg, deletePg, addPg } from "../../redux/network";
import AlertModel from "../../components/Alert"


class Form extends Component {

    constructor(props){
        super(props)
        this.add = false;
        if(!props.match.params.id){
            this.add = true;
        }
        this.state = {
            pg_name:'',
            address: '',
            success: false,
            error:false,
            modelShow:false,
        }
    }

    submitForm =  (e) => {
        e.preventDefault()

        const { match, auth } = this.props;
        const { pg_name, address } = this.state;
        let params =  {
            token: auth.token,
            userId: auth.data._id,
            pg_name,
            address
        }

        if(this.add){

            addPg(params).then(res=>{
                console.log(res)
                this.setState({success:true,error:false})
            }).catch(error=>{
                this.setState({error:true,success:false})
            })
        }else{

            params = {
                ...params,
                id: match.params.id
            }

            updatePg(params).then(res=>{
                this.setState({success:true,error:false})
            }).catch(error=>{
                this.setState({error:true,success:false})
            })
        }
       
    }

    handleChangeName = (event) => {
        this.setState({pg_name: event.target.value,success:false,error:false});
    }

    handleChangeAddress = (event) => {
        this.setState({address: event.target.value,success:false,error:false});
    }

    componentDidMount(){
        const { match, auth } = this.props;
        if(!this.add){
            
            let params =  {
                id: match.params.id,
                token: auth.token
            }
            console.log(params)
            pgDetail(params).then(res=>{
                console.log(res)
                this.setState({
                    pg_name: res.data.pg_name,
                    address: res.data.address,
                    id: res.data._id
                })
            }).catch((error) => {
            console.log(error)
            })
        }
    }

    handleHideShow = () => this.setState({modelShow:!this.state.modelShow})

    handleConfirmDelete = () =>{
        const { match, auth } = this.props;
        let params =  {
            id: match.params.id,
            token: auth.token
        }
        deletePg(params).then(res=>{
            window.location.pathname='/'
        }).catch(error=>{
            alert('ops some Error')
        })
    }

    render() {
        console.log(this.state.success)
        return (
            <div>
                <Header />
                <Grid className = "align-center" >
                    <Col md={8} sm={12} xs={12} className="card">

                        <h3 className="text-center">{this.add?"Add PG":"Update PG"}</h3>
                        
                        <AlertModel 
                            show={this.state.modelShow}
                            onHide={()=>this.handleHideShow()}
                            onConfirm={()=>this.handleConfirmDelete()}
                            container = {this}
                        />
                        {!this.add?
                            <button className="button-delete" onClick={()=>this.handleHideShow()} >Delete</button>
                        :null}

                        <form onSubmit={(e)=>this.submitForm(e)}>
                            <input type="text"  name="name" value={this.state.pg_name} onChange={this.handleChangeName} placeholder="Enter Your PG Name" required/>
                                <br/>
                            <textarea type="text"  name="name" value={this.state.address} onChange={this.handleChangeAddress} placeholder="Address" required></textarea>
                            <input type="submit"  />
                        </form> 
                        <br/>
                        {
                            this.state.success?
                            <Alert bsStyle="success">
                                Success
                            </Alert>:null
                            
                        }

                        {
                            this.state.error?
                            <Alert bsStyle="danger">
                                Ops ! Some Error
                            </Alert>:null
                            
                        }
                        
                    </Col>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
	return {
        auth: state.auth,
        pg: state.pg
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return{}
	// return {
	// 	loginUser: (params) => {
	// 		dispatch(loginUser(params))
    // },

    // registerUser: (params) => {
	// 		dispatch(registerUser(params))
    // },
    
    // checkLogin: (token, auth) => {
    //   dispatch({
    //     type:LOGIN_SUCESS,
    //     data : JSON.parse(auth),
    //     token: token
    //   })
    // }
	// }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);

