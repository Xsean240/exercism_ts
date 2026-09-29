export function find(haystack: number[], needle: number): number {
  //throw new Error('Remove this line and implement the function')
  let left: number = 0
  let right: number = haystack.length - 1 

  while(left <= right) {
    let middle: number = Math.floor((left + right) / 2)
    if(haystack[middle] === needle) {
      return middle
    }else if(haystack[middle] > needle) {
      //注意排除
      right = middle - 1
    }else {
      left = middle + 1
    }
  }

  throw new Error('Value not in array')
}
