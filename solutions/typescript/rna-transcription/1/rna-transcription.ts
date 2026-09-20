export function toRna(InString:string):string {
  //throw new Error('Remove this line and implement the function')
  let OutString = ''

  for(let i = 0; i < InString.length; i++) {
    switch(InString[i]) {
      case 'G':
        OutString += 'C'
        break
      case 'C':
        OutString += 'G'
        break
      case 'A':
        OutString += 'U'
        break
      case 'T':
        OutString += 'A'
        break

      default:
        throw new Error('Invalid input DNA.')
    }
  }

  return OutString
}
