/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;
  function getHead() {
    return head;
  }
  function getTail() {
    return tail;
  }
  function add(value) {
    let newNode = {
      value: value,
      next: null
    }
    if (head === null && tail === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
    return newNode;
  }

  function get(num) {
    let node = head;
    for (let i = 0; i < num; i++) {
      if (node.next === null) {
        return false;
      }
      node = node.next;
    }
    return node;
  }

  function remove(num) {
    let pNode = get(num - 1);
    let nNode = get(num + 1);
    if (nNode === false) {
      pNode.next = null;
      tail = pNode;
    }
    if (get(num) === false) {
      return false;
    }
    if (num === 0) {
      head = nNode;
    }
    if (num > 0) {
      pNode.next = nNode;
    }
  }
  function insert(value, num) {
    let newNode = {
      value: value,
      next: null
    }
    let pNode = get(num - 1);
    if (num === 0) {
      newNode.next = head;
      head = newNode;
    } else if (num < 0 || get(num) === false) {
      return false;
    } else {
      newNode.next = get(num);
      pNode.next = newNode;
    }
  }
  return {
    getHead, getTail, add, remove, get, insert
  };
}