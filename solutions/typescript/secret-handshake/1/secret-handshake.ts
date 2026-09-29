export function commands(num:number):string[] {
  //throw new Error('Remove this line and implement the function')
  let result: string[] = []
  if(num % 2 == 1) {
    result.push('wink')
  }

  if(Math.floor((num % 4) / 2) == 1) {
    result.push('double blink')
  }

  if(Math.floor((num % 8) / 4) == 1) {
    result.push('close your eyes')
  }

  if(Math.floor((num % 16) / 8) == 1) {
    result.push('jump')
  }

  if(Math.floor(num / 16) == 1) {
    result.reverse()
  }

  return result
}
