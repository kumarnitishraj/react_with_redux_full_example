import React, { Component } from 'react';
import { connect } from "react-redux";
import { Grid, Row,Col, Alert} from 'react-bootstrap'
import { Redirect } from "react-router-dom";

import { loginUser, registerUser } from '../../redux/actions/auth'

import { LOGIN_SUCESS } from '../../config/Constants'

class App extends Component {

  constructor(props){

    super(props)
    this.state={
      purpose:"login"
    }
  }


  login=(e)=>{

    e.preventDefault()
    const { loginUser } = this.props;

    let params = {
      email: e.target.username.value,
      password: e.target.password.value
    }
    loginUser(params)
  }

  register=(e)=>{

    e.preventDefault()
    const { registerUser } = this.props;
    
    if(e.target.password.value == e.target.confirm_password.value){
      let params = {
        email: e.target.username.value,
        password: e.target.password.value,
        name: e.target.name.value,
      }
      registerUser(params)
    }else{
      alert('Missmatch password !')
    }
    
  }

  changeUi=(action)=>{

    this.setState({
      purpose:action
    })

  }


  render() {
    const { auth } = this.props;

    if(!!auth.token){
      return <Redirect to={'/home'} />
    }

    return (
      <Grid className="App">
      {this.state.purpose==="login"?

      <Col>

        <form className="form-login" onSubmit={(e)=>this.login(e)}>
          {!!auth.loginError?
            <div>
              <Alert bsStyle="danger">{auth.message}</Alert>
            </div>
          : null}

          <h3>Login Here </h3>
          <input type="email"      name="username" required placeholder="Enter Your Email"/>
            <br/>
          <input type="password"  name="password" required placeholder="Enter Your Password"/>
            <br/>
          <input type="submit" />
        </form>

        <div>
          <button className="button" onClick={()=>this.changeUi("signup")}>Register</button>
        </div>
        
        </Col>
:
        <Col>
          <div>
            <form className="form-login" onSubmit={(e)=>this.register(e)}>

            {!!auth.registerError?
              <div>
                <Alert bsStyle="danger">{auth.message}</Alert>
              </div>
            : null}

            <h3>Register Here </h3>
              <input type="email"     name="username" placeholder="Enter Your Email" required/>
                <br/>
              <input type="text"     name="name" placeholder="Enter Your Name" required/>
                <br/>
              <input type="password"  name="password" placeholder="Enter Your Password" required/>
                <br/>
              <input type="password"  name="confirm_password" placeholder="Confirm Password" required/>
                <br/>
              <input type="submit" />
            </form>

            <div>
              <button className="button" onClick={()=>this.changeUi("login")}>Login</button>
            </div>
            

          </div>
        </Col>
      }

        
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
	return {
		auth: state.auth,
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		loginUser: (params) => {
			dispatch(loginUser(params))
    },

    registerUser: (params) => {
			dispatch(registerUser(params))
    },
    
    checkLogin: (token, auth) => {
      dispatch({
        type:LOGIN_SUCESS,
        data : JSON.parse(auth),
        token: token
      })
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

