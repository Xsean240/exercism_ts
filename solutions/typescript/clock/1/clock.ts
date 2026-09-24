export class Clock {
  private minute : number
  private hour : number
  constructor(hour: number, minute?: number) {
    //throw new Error('Remove this line and implement the function')
    if (minute !== undefined) {
      while (minute < 0) {
        minute += 60
        hour --
      }
      while (minute >= 60) {
        minute -= 60
        hour ++
      }
    } else {
      minute = 0
    }

    while (hour < 0) {
      hour += 24
    }

    while (hour >= 24) {
      hour -= 24
    }

    this.hour = hour
    this.minute = minute
  }

  public toString(): string {
    //throw new Error('Remove this line and implement the function')
    let result = ''

    if (this.hour < 10) {
      result += '0'
    }
    result += `${this.hour}:`
    if (this.minute < 10) {
      result += '0'
    }
    result += `${this.minute}`

    //另一种方式：padStart()
    //const result = `${String(this.hour).padStart(2, '0')}:${String(this.minute).padStart(2, '0')}`

    return result
  }

  public plus(minutes: number): Clock {
    //throw new Error('Remove this line and implement the function')
    this.minute += minutes
    while (this.minute >= 60) {
      this.hour ++
      this.minute -= 60
    }

    while (this.minute < 0) {
      this.hour --
      this.minute += 60
    }

    while (this.hour < 0) {
      this.hour += 24
    }

    while (this.hour >= 24) {
      this.hour -= 24
    }
  
    return this
  }

  public minus(minutes: number): Clock {
    //throw new Error('Remove this line and implement the function')
    this.minute -= minutes
    while (this.minute >= 60) {
      this.hour ++
      this.minute -= 60
    }

    while (this.minute < 0) {
      this.hour --
      this.minute += 60
    }

    while (this.hour < 0) {
      this.hour += 24
    }

    while (this.hour >= 24) {
      this.hour -= 24
    }
  
    return this
  }

  public equals(other: Clock): boolean {
    //throw new Error('Remove this line and implement the function')
    return this.toString() === other.toString()
  }
}
