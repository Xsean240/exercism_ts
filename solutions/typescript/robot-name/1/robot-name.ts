export class Robot {
  //作为类的属性来进行维护，类型用 Set 便于验证是否重复和清空
  static usedNames = new Set<string>()

  //保证属性在真正使用前一定被赋值（初始化）
  private currentName !: string
  constructor() {
    this.resetName()
  }

  public get name(): string {
    //throw new Error('Remove this line and implement the function')
    return this.currentName
  }

  static generateRandomName() : string {
    let result = ''
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (let i = 0; i < 2; i++) {
      result += letters[Math.floor(Math.random() * 26)]
    }

    for (let i = 0; i < 3; i++) {
      result += Math.floor(Math.random() * 10)
    }

    return result
  }

  public resetName(): void {
    //throw new Error('Remove this line and implement the function')
    let result = Robot.generateRandomName()
    while (Robot.usedNames.has(result)) {
      result = Robot.generateRandomName()
    }
    Robot.usedNames.add(result)
    this.currentName = result
  }

  public static releaseNames(): void {
    //throw new Error('Remove this line and implement the function')
    Robot.usedNames.clear()
  }
}
