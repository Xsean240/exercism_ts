export class Matrix {
  data: number[][]

  constructor(text: string) {
    //throw new Error('Remove this line and implement the function')
    this.data = text
      .split('\n')
      .map((row) => row.split(' ').map(Number))
  }

  //getter 不能接收参数，让rows/columns 作为二维数组返回，也就不需要再传参数了
  get rows(): number[][] {
    //hrow new Error('Remove this line and implement the function')
    return this.data
  }

  //columns 本身就是一个 getter,如果在内部继续访问 this.columns 会形成递归调用
  get columns(): number[][] {
    //throw new Error('Remove this line and implement the function')
    const result: number[][] = []
    for(let i = 0; i < this.data[0].length; i++) {
      result[i] = this.data.map((row) => row[i])
    }
    return result
  }
}
