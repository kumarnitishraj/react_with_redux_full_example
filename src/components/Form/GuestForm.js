import React, { Component } from 'react';
import { connect } from "react-redux";
import { Grid, Row,Col, Alert} from 'react-bootstrap'


import  Header from "../Header"
import { addGuest, getGuest, updateGuest, deleteGuest } from "../../redux/network";
import AlertModel from "../../components/Alert";
import { isValidNumber } from '../../utails';


class Form extends Component {

    constructor(props){
        super(props)
        console.log(props)
        this.add = false;
        if(!!props.match.params.method){
            props.match.params.method === 'post'?this.add = true:this.add = false;
        }
        this.state = {
            name:'',
            address: '',
            aadhar:'',
            pan:'',
            success: false,
            error:false,
            modelShow:false,
        }
    }

    submitForm =  (e) => {
        e.preventDefault()

        const { match, auth } = this.props;
        const { name, address, aadhar, pan, id, pgId } = this.state;
        let params =  {
            token: auth.token,
            pgId: match.params.id,
            name,
            aadhar,
            pan,
            address
        }
        if(isValidNumber(aadhar)){
            if(this.add){

                addGuest(params).then(res=>{
                    console.log(res)
                    this.setState({success:true,error:false})
                }).catch(error=>{
                    this.setState({error:true,success:false})
                })
            }else{
    
                params = {
                    ...params,
                    id: id,
                    pgId
                }
    
                updateGuest(params).then(res=>{
                    this.setState({success:true,error:false})
                }).catch(error=>{
                    this.setState({error:true,success:false})
                })
            }
        }else{
            alert('aAdhar number is not vlaid')
        }
        
       
    }

    handleChangeName = (event) => {
        this.setState({name: event.target.value,success:false,error:false});
    }

    handleChangeaAdhar = (event) => {
        this.setState({aadhar: event.target.value,success:false,error:false});
    }

    handleChangePan = (event) => {
        this.setState({pan: event.target.value,success:false,error:false});
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
            getGuest(params).then(res=>{
                console.log(res)
                this.setState({
                    name: res.data.name,
                    address: res.data.address,
                    pan:res.data.pan,
                    aadhar:res.data.aadhar,
                    id: res.data._id,
                    pgId: res.data.pgId,
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
        deleteGuest(params).then(res=>{
            window.location.pathname='/guests/'+this.state.pgId
        }).catch(error=>{
            alert('ops some Error')
        })
    }

    render() {
        console.log(this.state.aadhar)
        return (
            <div>
                <Header />
                <Grid className = "align-center" >
                    <Col md={8} sm={12} xs={12} className="card">

                        <h3 className="text-center">{this.add?"Add Guest":"Update Guest"}</h3>
                        
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
                            <input type="text"  name="name" value={this.state.name} onChange={this.handleChangeName} placeholder="Enter Guest Name" required/>
                                <br/>
                            <input type="number"  name="name" value={this.state.aadhar} onChange={this.handleChangeaAdhar} placeholder="Enter Adhar Number" required/>
                                <br/>
                            <input type="text"  name="name" value={this.state.pan} onChange={this.handleChangePan} placeholder="Enter PAN Number" required/>
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


export default connect(mapStateToProps)(Form);

