import React from "react";

import classes from "./Borrows.module.css";

import Borrow from "./Borrow";
import {useBorrow} from './useBorrow';

const tableSVG = 
<svg className={classes.img_container}>
  <rect x="0" y="0" width="270" height="15" />
  <rect x="8" y="14" width="20" height="150" />
  <rect x="242" y="14" width="20" height="150" />
</svg>

function Borrows() {
  console.log('render borrows')

  const {onSortBorrow, borrowed} = useBorrow();

  const sortHandler = () => onSortBorrow();

  const borrowedBooks = borrowed.map((book, i) => (
    <Borrow bookAttr={book} index={i} />
  ));

  return (
    <div className={classes.Borrow_container}>
      <h1 className={classes.Title}>Borrowed</h1>
      <div className={classes.Borrows}>
        {borrowedBooks}
      </div>
      {tableSVG}
      <button className ={classes.sortBorrow_btn} onClick={sortHandler}>sort</button>
    </div>
  );
}

export default Borrows;
