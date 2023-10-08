function bigToSmall(arr){

  let str = [].concat(...arr).sort( (a,b) => b - a ).join('>')

  return str
  
}

console.log(bigToSmall(  [[4,5,1],[2,9,7]]  ))

// parameter: arr
// return: string    // w/ numbers in descending order and separated by >
// e.g. bigToSmall([4,5,1], [2,9,7])
// results in 9>7>5>4>2>1

// declare a variable str and assign it to arr.concat().sort(b - a).join('>')
// return str