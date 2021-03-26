import styles from "./Shelf.module.css";
import { connect } from "react-redux";
import begEndShelf from "./utility";
import * as types from '../../shared/types'
import Books from "../Book/Books";

const Shelf = (props) => {
  //styling
  const shelfContainer = styles.shelfContainer;
  const shelf = styles.shelf;
  const top = styles.top;
  const sideLeft = styles.sideLeft;
  const sideRight = styles.sideRight;
  const bottom = styles.bottom;
  const space = styles.space;

  const styleShelf = {
    gridTemplateColumns: `20px ${types.shelfSpace}px 20px`,
    // gridTemplateRows: `20px ${types.shelfHeight}px 20px`
  }
  console.log(window.screen.width)
  
  const shelfArr = begEndShelf(props.books);
  let shelfDisplay = [];

  for (let i = 0; i < shelfArr.length; i++) {
    shelfDisplay.push(
      <div key={i} className={shelf} style={styleShelf}>
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
      </div>
    );
  }

  return <div className={shelfContainer}>{shelfDisplay}</div>;
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps)(Shelf);
