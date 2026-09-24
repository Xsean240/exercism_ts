//定义一个类型
type Roster = {
  [grade: number]: string[]
}

//另一种定义方式 Record 是 TS 自带的工具类型，描述键值对象结构
//type Roster = Record<number, string[]>

export class GradeSchool {
  //Array<T> 只能传一个类型参数，初始化空数组只需要 []
  private rosterData : Roster

  constructor() {
    this.rosterData = {}
  }


  //做复制，防止从外层访问修改数据！
  roster():Roster {
    //throw new Error('Remove this line and implement the function')
    const result: Roster = {}

    for (const [grades, students] of Object.entries(this.rosterData)) {
      result[Number(grades)] = [...students]
    }
    return result
  }



  //干脆在添加时就进行名称排序，另外要解决修改问题
  add(name: string, grade: number): void {
    //throw new Error('Remove this line and implement the function')
    //检查重名
    for (const [grades, students] of Object.entries(this.rosterData)) {
      if(students.includes(name)) {
        this.rosterData[Number(grades)] = students.filter((student) => student !== name)
      
        //如果删除后该年级没有学生了，则删除本年级
        if(this.rosterData[Number(grades)].length === 0) {
          delete this.rosterData[Number(grades)]
        }
      }
    }


    if(this.rosterData[grade]) {
      this.rosterData[grade].push(name)
    }else {
      this.rosterData[grade] = [name]
    }

    //排序
    this.rosterData[grade].sort()

  }

  //注意需要名称首字母排序
  grade(grade: number): string[]{
    //throw new Error('Remove this line and implement the function')
    if(this.rosterData[grade]){
      return [...this.rosterData[grade]]
    }else {
      return []
    }
  }
}
