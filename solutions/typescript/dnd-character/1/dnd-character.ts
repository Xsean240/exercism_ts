export class DnDCharacter {
  public strength: number
  public dexterity: number
  public constitution: number
  public intelligence: number
  public wisdom: number
  public charisma: number

  public hitpoints: number

  //构造函数
  constructor() {
    //由于方法是 static,只能用类名调用方法
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.constitution = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()

    this.hitpoints = DnDCharacter.getHitpoints(this.constitution)
  }

  public static generateAbilityScore(): number {
    //throw new Error('Remove this line and implement the function')
    //随机选取 1-6 的整数
    const dice1: number  = Math.floor(Math.random() * 6) + 1
    const dice2: number = Math.floor(Math.random() * 6) + 1
    const dice3: number = Math.floor(Math.random() * 6) + 1

    return dice1 + dice2 + dice3
  }

  //static 表示方法属于类本身而非某个具体角色对象
  public static getModifierFor(abilityValue: number): number {
    //throw new Error('Remove this line and implement the function')
    //向下取整
    return Math.floor((abilityValue - 10) / 2)
  }

  //构造一个函数，用来计算 hitpoints
  public static getHitpoints(constitution: number): number {
    return 10 + DnDCharacter.getModifierFor(constitution)
  }

}
