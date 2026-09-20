export function isPangram(sentence: string):boolean {
  //throw new Error('Remove this line and implement the function')
  //统一大小写
  const lower_s = sentence.toLowerCase()

  //过滤非英文字符
  //...分为展开和收集的作用
  //正则表达式进行判断
  const filtered_s = [...lower_s].filter((letter) => /[a-z]/.test(letter))
  //对代码进行去重，注意set返回的结果不是数组而是集合
  const set_s = new Set(filtered_s)
  return set_s.size === 26
}
