export function score(x: number, y: number): number {
  //throw new Error('Remove this line and implement the function')
  const length = Math.sqrt(x**2 + y**2)
  if(length > 10) {
    return 0
  } else if(length > 5) {
    return 1
  } else if(length > 1) {
    return 5
  } else {
    return 10
  }
}
