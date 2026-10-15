// T作为泛型参数，可适配任意元素类型
type LinkedListNode<T> = {
  value: T
  next: LinkedListNode<T> | null
  prev: LinkedListNode<T> | null
}

//element 作为值参数，TElement为类型参数占位符
export class LinkedList<TElement> {
  //初始声明为空
  private head: LinkedListNode<TElement> | null = null
  private tail: LinkedListNode<TElement> | null = null
  private size: number = 0

  public push(element: TElement) {
    const newNode: LinkedListNode<TElement> = {
      value: element,
      next: null,
      prev: this.tail
    }
    if(this.tail === null) {
      this.head = newNode
    }else{
      this.tail.next = newNode
    }
    this.tail = newNode
    this.size ++
  }

  public pop(): TElement {
    //不要拿隐含关系来作判断条件，编译器不知道
    if(this.tail === null) {
      throw new Error('The LinkedList is empty.')
    }

    const res = this.tail.value

    //只有一个节点
    if(this.tail.prev === null) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
    }

    this.size --
    return res
  }

  public shift(): TElement {
    if(this.head === null) {
      throw new Error('The LinkedList is empty.')
    }

    const res = this.head.value

    if(this.head.next === null) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.prev = null
    }

    this.size --
    return res
  }

  public unshift(element: TElement) {
    const newNode: LinkedListNode<TElement> = {
      value: element,
      next: this.head,
      prev: null
    }
    if(this.head === null) {
      this.head = this.tail = newNode
    }else{
      this.head.prev = newNode
      this.head = newNode
    }

    this.size ++
  }

  public delete(element: TElement) {
    let current = this.head

    while (current !== null) {
      if (current.value === element) {
        if (current.prev === null) {
          this.head = current.next
        } else {
          current.prev.next = current.next
        }
        if (current.next === null) {
          this.tail = current.prev
        } else {
          current.next.prev = current.prev
        }

        this.size--
        return
      }
      current = current.next
    }
  }

  public count(): number {
    return this.size
  }
}
