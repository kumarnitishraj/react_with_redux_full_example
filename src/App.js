import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Login from './container/Auth/Login';
import PgHome from './container/Home/Pg'
import Guest from './container/Home/Guest'

import PgForm from './components/Form/PgForm'
import GuestForm from './components/Form/GuestForm'

import { LOGIN_SUCESS } from './config/Constants'

class App extends React.Component {

    constructor(props){
        super(props)
        const { checkLogin } = props;
        // Checking token from browser Storege
        checkLogin(localStorage.getItem("token"), localStorage.getItem("auth"))
    }

    render(){
        const { auth } = this.props;
        return(
            <div>
                <Router>

                    <div>
                        <Route exact path="/" component={!auth.token?Login:PgHome} />
                        <Route path="/home" component={PgHome} />
                        <Route path="/pg/:id" component={PgForm} />
                        <Route path="/add/pg" component={PgForm} />
                        <Route path="/guests/:id" component={Guest} />
                        <Route path="/guest/:method/:id" component={GuestForm} />
                        <Route path="/add/guest/:method/:id" component={GuestForm} />
                    </div>

                </Router>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
	return {
		auth: state.auth,
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		
        checkLogin: (token, auth) => {
            dispatch({
                type:LOGIN_SUCESS,
                data : JSON.parse(auth),
                token
            })
        }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
