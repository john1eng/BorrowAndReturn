import styles from "./Shelf.module.css";
import { useSelector } from "react-redux";
import { begEndShelf } from "./utility";
import * as types from '../../shared/types'
import Books from "../Book/Books";
import {ShelfStyled} from './ShelfStyled.js'

const Shelf = () => {
  console.log("render shelf")
  //styling

  const books = useSelector(state => state.book.books);

  // const shelfContainer = styles.shelfContainer;
  // const top = styles.top;
  // const sideLeft = styles.sideLeft;
  // const sideRight = styles.sideRight;
  // const bottom = styles.bottom;
  // const space = styles.space;
  const styleArr = ['shelfContainer', 'top', 'sideLeft', 'sideRight', 'bottom', 'space'];
  const [shelfContainer, top, sideLeft, sideRight, bottom, space] = [...styleArr].map((x)=>styles[x])
  
  let shelfWithBooks = [];
  
  const shelfArr = begEndShelf(books);

  for (let i = 0; i < shelfArr.length; i++) {
    shelfWithBooks.push(
      <ShelfStyled key={i} shelfSpace={types.shelfSpace.width} shelfHeight={types.shelfSpace.height}>
        <div className={top}></div>
        <div className={sideLeft}></div>
        <div className={space} >
          <Books
            books={books}
            beg={shelfArr[i].beg}
            end={shelfArr[i].end}
          />
        </div>
        <div className={sideRight}></div>
        <div className={bottom}></div>
      </ShelfStyled>
    );
  }

  return <div className={shelfContainer}>{shelfWithBooks}</div>;
};

    

export default Shelf
