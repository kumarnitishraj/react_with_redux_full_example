import React from 'react'
import { Grid, Row,Col} from 'react-bootstrap'
import { connect } from 'react-redux'

import Header from '../../components/Header';
import { getGuest } from '../../redux/actions/guest'
import UiGuest from '../../components/UiComponent/Guest';

class Guest extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const { match, auth, getGuest } = this.props;

        let params = {
            id: match.params.id,
            token:auth.token
        }
        getGuest(params)
    }

    render(){
        const { match, guest } = this.props;
        return(
            <div className="home">
                <Header 
                    createButton={true}
                    onCreateClick = {()=>window.location.pathname='/add/guest/post/'+match.params.id}
                />
                <div>
                    <Grid>
                        <Row >
                            <UiGuest guestList={guest.guestList} />

                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
	return {
        auth: state.auth,
        guest: state.guest
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		getGuest: (params) => {
			dispatch(getGuest(params))
        },
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Guest);