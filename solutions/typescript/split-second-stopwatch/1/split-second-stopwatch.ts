type StopwatchState = 'ready' | 'running' | 'stopped'

export class SplitSecondStopwatch {
  private _state: StopwatchState
  private _currentLap: number
  private _total: number
  private _previousLaps: number[]

  constructor() {
    this._state = 'ready'
    this._currentLap = 0
    this._total = 0
    this._previousLaps = []

    //throw new Error('Remove this line and implement the function')
  }

  //采用联合类型限制合法值
  public get state(): StopwatchState {
    return this._state
    //throw new Error('Remove this line and implement the function')
  }

  public get currentLap(): string {
    return this.numToStr(this._currentLap)
    //throw new Error('Remove this line and implement the function')
  }

  public get total(): string {
    return this.numToStr(this._total)
    //throw new Error('Remove this line and implement the function')
  }

  //返回副本，防止外部直接访问
  public get previousLaps(): string[] {
    //map() 返回一个新数组
    return this._previousLaps.map(sec => this.numToStr(sec))
    //throw new Error('Remove this line and implement the function')
  }

  public start(): void {
    if(this._state === 'running') {
      throw new Error('cannot start an already running stopwatch')
    }else {
      this._state = 'running'
    }
    //throw new Error('Remove this line and implement the function')
  }

  public stop(): void {
    if(this._state === 'running') {
      this._state = 'stopped'
    }else {
      throw new Error('cannot stop a stopwatch that is not running')
    }
    //throw new Error('Remove this line and implement the function')
  }

  public lap(): void {
    //将当前圈记录到过去圈后清除
    if(this._state === 'running') {
      this._previousLaps.push(this._currentLap)
      this._currentLap = 0
    }else {
      throw new Error('cannot lap a stopwatch that is not running')
    }
    //throw new Error('Remove this line and implement the function')
  }

  public reset(): void {
    if(this._state === 'stopped') {
      this._state = 'ready'
      this._currentLap = 0
      this._total = 0
      this._previousLaps = []
    }else {
      throw new Error('cannot reset a stopwatch that is not stopped')
    }
    //throw new Error('Remove this line and implement the function')
  }

  public advanceTime(duration: string): void {
    if(this._state === 'running') {
      this._total += this.strToNum(duration)
      this._currentLap += this.strToNum(duration)
    }
    //throw new Error('Remove this line and implement the function')
  }

  private numToStr(sec:number): string {
    const hour = Math.floor(sec / 3600)
    sec %= 3600
    const minute = Math.floor(sec / 60)
    sec %= 60
    //
    return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(sec).padStart(2,'0')}`
  }

  private strToNum(str:string): number {
    //根据 : 分割字符串成字符数组，再转换为数字数组
    const time: number[] = str.split(':').map(Number)

    //数组重构
    //const [hour, minute, second] = str.split(':').map(Number)

    return time[0] * 3600 + time[1] * 60 + time[2]
  }
}
