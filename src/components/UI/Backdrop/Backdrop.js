import React from 'react'
import classes from './Backdrop.module.css';
import { useDispatch } from 'react-redux'
import * as actionCreator from '../../../store/actions/dialog';

const Backdrop = ({show}) => {
    console.log("render backdrop");

    const dispatch = useDispatch();

    const onRemoveDialog = () => dispatch(actionCreator.removeDialog());

    return (
    <>
        {show ? <div className={classes.Backdrop} onClick={onRemoveDialog}></div> : null}
    </>
    )};

export default Backdrop
