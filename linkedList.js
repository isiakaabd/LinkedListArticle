class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  prepend(data) {
    const NewNode = new Node(data, this.head)
    this.head = NewNode
    if (!this.tail) this.tail = NewNode
    this.length++
  }

  append(data) {
    const NewNode = new Node(data, null)
    if (!this.head) {
      this.head = NewNode
    }

    let currNode = this.tail
    if (currNode) {
      currNode.next = NewNode
    }
    this.tail = NewNode

    this.length++
  }

  delete(data) {
    if (!this.head) return this.length
    else {
      while (this.head && this.head.value === data) {
        this.head = this.head.next
      }

      let currNode = this.head

      while (currNode.next) {
        if (currNode.next.value === data) {
          currNode.next = currNode.next.next
          this.length--
        } else {
          currNode = currNode.next
        }
      }
      if (this.tail.value === data) {
        this.tail = currNode
      }
    }
  }

  find(data) {
    if (!this.head) return null
    let currNode = this.head
    while (currNode) {
      if (currNode.value === data) {
        return currNode
      }
      currNode = currNode.next
    }
    return null
  }
  data() {
    let array = ''
    let currNode = this.head
    while (currNode) {
      array += `${currNode.value} -> `
      currNode = currNode.next
    }
    return `${array}null`
  }

  insertAfter(current, value) {
    let findValue = this.find(current)

    if (findValue) {
      const NewNode = new Node(value, findValue.next)
      findValue.next = NewNode
    }
  }
}

class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}
