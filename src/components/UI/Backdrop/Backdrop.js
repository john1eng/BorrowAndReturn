import React from 'react'
import classes from './Backdrop.module.css';
import { connect } from 'react-redux'
import * as actionCreator from '../../../store/actions/shared';

const Backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.onRemoveDialog}></div> : null
   )
;

const mapDispatchToProp = dispatch => {
    return {
        onRemoveDialog: () => dispatch(actionCreator.removeDialog())
    }
}

export default connect(null,mapDispatchToProp)(Backdrop)
