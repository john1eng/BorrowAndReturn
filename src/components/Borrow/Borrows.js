import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Borrows.module.css";

import Borrow from "./Borrow";
import * as actionCreator from '../../store/actions/borrow';

function Borrows() {
  console.log('render borrows')
  const dispatch = useDispatch();

  const onSortBorrow = ()=> dispatch(actionCreator.sortBorrow());

  const borrowed = useSelector(state => state.borrow.borrowed);


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

export default Borrows;
