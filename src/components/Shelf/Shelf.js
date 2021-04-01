import styles from "./Shelf.module.css";
import { connect } from "react-redux";
import begEndShelf from "./utility";
import * as types from '../../shared/types'
import Books from "../Book/Books";
import {ShelfStyled} from './ShelfStyled.js'

const Shelf = (props) => {
  //styling
  const shelfContainer = styles.shelfContainer;
  const top = styles.top;
  const sideLeft = styles.sideLeft;
  const sideRight = styles.sideRight;
  const bottom = styles.bottom;
  const space = styles.space;

  
  const shelfArr = begEndShelf(props.books);
  let shelfDisplay = [];

  for (let i = 0; i < shelfArr.length; i++) {
    shelfDisplay.push(
      <ShelfStyled key={i} shelfSpace={types.shelfSpace} shelfHeight={types.shelfHeight}>
        <div className={top}></div>
        <div className={sideLeft}></div>
        <div className={space} >
          <Books
            books={props.books}
            beg={shelfArr[i].beg}
            end={shelfArr[i].end}
          />
        </div>
        <div className={sideRight}></div>
        <div className={bottom}></div>
      </ShelfStyled>
    );
  }

  return <div className={shelfContainer}>{shelfDisplay}</div>;
};

const mapStateToProps = (state) => {
  return {
    books: state.book.books,
  };
};

export default connect(mapStateToProps)(Shelf);
