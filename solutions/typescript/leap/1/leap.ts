export function isLeap(year : number) : boolean {
  //throw new Error('Remove this line and implement the function')
  if (year % 4 == 0){
    if (year % 100 == 0){
      if (year % 400 == 0){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return true;
    }
  }
  else{
    return false;
  }
}
