import * as types from '../../shared/types'

//find number of shelf and each shelf is an object contain from beg book index to end book index 
// ex [{beg:0, end:5},{beg:5, end:10}]
  
export const begEndShelf = (books) => {

    let total = 0;
    let beg = 1;
    let end;
    let shelfArr = [];

    for(let i = 1; i <= books.size; i++){
      total += types.bookPageSize[books.get(i).page]
      //is over the current shelf capacity
      const isOverCapcity = total > types.shelfSpace
      if(isOverCapcity){
        end = i
        shelfArr.push({beg:beg,end:end})
        beg = end
        total = types.bookPageSize[books.get(i).page]
      }
    }
    shelfArr.push({beg:beg, end:beg+1})
    return shelfArr
}
