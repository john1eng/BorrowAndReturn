import React from "react";
import { connect } from "react-redux";
import classes from "./Borrows.module.css";

import Borrow from "./Borrow";
import * as actionCreator from '../../store/actions/borrow';

function Borrows({borrowed, onSortBorrow}) {
  const borrowBooks = borrowed.map((book, i) => (
    <Borrow bookAttr={book} index={i} />
  ));

  return (
    <div className={classes.Borrow_container}>
      <h1 className={classes.Title}>Borrowed</h1>
      <div className={classes.Borrows}>
        {borrowBooks}
      </div>
      <svg className={classes.img_container}>
        {/* <image className={classes.img} href={tableSVG} alt="table" /> */}
        <rect x="0" y="0" width="270" height="15" />
          <rect x="8" y="14" width="20" height="150" />
          <rect x="242" y="14" width="20" height="150" />

      </svg>
      <button className ={classes.sortBorrow_btn} onClick={onSortBorrow}>sort</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    borrowed: state.borrow.borrowed,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSortBorrow: ()=> dispatch(actionCreator.sortBorrow())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Borrows);
