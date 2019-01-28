import React from 'react'
import { Grid, Row,Col} from 'react-bootstrap'
import {Link } from "react-router-dom";

import GuestCard from '../Card/GuestCard'

export default class UiGuest extends React.Component{


    render(){
        const { guestList } = this.props;
        if(!guestList){
            return <h4> Loading .....</h4>
        }
        return(
            <Grid>
                <Row >
                    {guestList.length>0?guestList.map((data, key)=>{
                        return <GuestCard data={data} key = {key}  />
                    }):
                    <h2 className="empty-data-text"> List is empty</h2>
                    }
                    
                </Row>
            </Grid>
        )
    }
}

