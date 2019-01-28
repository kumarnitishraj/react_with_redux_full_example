import React from 'react'
import { Grid, Row,Col} from 'react-bootstrap'
import {Link } from "react-router-dom";

import PgCard from '../Card/PgCard'

export default class UiCard extends React.Component{


    render(){
        const { pgList } = this.props;
        if(!pgList){
            return <h4> Loading .....</h4>
        }
        return(
            <Grid>
                <Row >
                    {pgList.length>0?pgList.map((data, key)=>{
                        return <PgCard data={data} key = {key}  />
                    }):
                    <h2 className="empty-data-text"> List is empty</h2>
                    }
                    
                </Row>
            </Grid>
        )
    }
}

