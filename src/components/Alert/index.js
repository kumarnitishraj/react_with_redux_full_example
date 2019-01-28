import React, { Component } from 'react';
import { 
    Button, 
    Modal,          
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock 
} from 'react-bootstrap'

export default ({show,onHide,onConfirm,container}) => {

    return(
        <div>
            <Modal
                show={show}
                onHide={onHide}
                container={container}
                bsSize="small"
                aria-labelledby="contained-modal-title"
                >
                <Modal.Body>
                    <div className="text-center" >Are you sure ?</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Close</Button>
                    <Button bsStyle="success" onClick={onConfirm}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
    
}