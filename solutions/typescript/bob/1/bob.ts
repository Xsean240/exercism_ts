export function hey(message: string): string {
  //throw new Error('Remove this line and implement the function')
  const f_message = message.trim()
  if(f_message[f_message.length-1] === '?') {
    //yell a question 判断全大写
    if(/[A-Za-z]/.test(message) && message === message.toUpperCase()) {
      return "Calm down, I know what I'm doing!"
    } else {
      return "Sure."
    }
  } else if(/[A-Za-z]/.test(message) && message === message.toUpperCase()) {
    return "Whoa, chill out!"
  } else if(f_message === '') {
    return "Fine. Be that way!"
  } else {
    return "Whatever."
  }
}
