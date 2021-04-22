import * as types from '../../shared/types'

//find number of shelf and each shelf is an object contain from beg book index to end book index 
// ex [{beg:0, end:5},{beg:5, end:10}]
  
  const begEndShelf = (books) => {

    let total = 0;
    let beg = 0;
    let end;
    let shelfArr = [];

    for(let i = 0; i < books.length; i++){
      total += types.pageSize[books[i].page]
      //is over the current shelf capacity
      const isOverCapcity = total > types.shelfSpace
      if(isOverCapcity){
        end = i
        shelfArr.push({beg:beg,end:end})
        beg = end
        total = types.pageSize[books[i].page]
      }
    }
    shelfArr.push({beg:beg, end:beg+1})
    return shelfArr
}

export default begEndShelf