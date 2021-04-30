import * as types from '../../shared/types'

//find number of shelf and each shelf is an object contain from beg book index to end book index 
// ex [{beg:0, end:5},{beg:5, end:10}]
  
export const begEndShelf = (books) => {

    let total = 0;
    let beg = 0;
    let end;
    let shelfArr = [];

    let i = 0; //index
    for(let [key, value] of books){
      
      total += types.bookPageSize[value.page]
      console.log(total, types.shelfSpace.width)
      //is over the current shelf capacity
      const isOverCapcity = total > types.shelfSpace.width
      if(isOverCapcity){
        end = i
        shelfArr.push({beg:beg,end:end})
        beg = end+1
        total = types.bookPageSize[value.page]
      }
      i++
    }
    shelfArr.push({beg:beg, end:beg+1})
    console.log("***************")
    console.log(shelfArr)
    return shelfArr
}
