import React,{Component} from 'react'

export default class Header extends Component{

    handleLogout = () =>{
        localStorage.clear();
        window.location.pathname='/'
    }

    render(){
        const { createButton, onCreateClick } = this.props;
        return(
            <div className="header-view" >
                <div className="home-div">
                    <button onClick = {()=>window.location.pathname='/'} className="logout">Home</button>
                </div>

                <div className="logout-div">
                    <button onClick = {()=>this.handleLogout()} className="logout">Log out</button>
                </div>
                {!!createButton?
                    <div className="create-div">
                        <button onClick={onCreateClick} className="logout">Create</button>
                    </div>:null
                }
                
            </div>
        )
    }
}