import Util from './util'

class LinkedList {

    constructor() {
        this.nElement = 0;
        this.firstNode = null;
        this.lastNode = null;
    }

    add(item, index) {
        let newNode, prev;
        if (Util.isUnfefined(index)) {
            index = this.nElement;
        }

        if (index < 0 || index > this.nElement || Util.isUnfefined(item)) {
            return false;
        }
        newNode = {
            element : item,
            next : null
        };

        if (this.nElement === 0) {
            this.firstNode = newNode;
            this.lastNode = newNode;
        } else if (index === this.nElement) {
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        } else if (index === 0) {
            newNode.next = this.firstNode;
            this.firstNode = newNode;
        } else {
            prev = this.nodeAtIndex(index - 1);
            newNode.next = prev.next;
            prev.next = newNode;
        }
        this.nElement += 1;
        return true;
    }

    remove(element, equalFunc) {
        let eqaulsF = equalFunc || Util.defaultEqual;
        let currentNode = this.firstNode;
        let prevNode = null;

        if (this.nElement < 1 || Util.isUnfefined(element)) {
            return false;
        }

        while (currentNode !== null) {
            if (eqaulsF(currentNode.element, element)) {
                if (currentNode === this.firstNode) {
                    this.firstNode = this.firstNode.next;
                    if (currentNode === this.lastNode) {
                        this.lastNode = null;
                    }
                } else if (currentNode === this.lastNode) {
                    this.lastNode = prevNode;
                    prevNode.next = currentNode.next;
                    currentNode.next = null;
                } else {
                    prevNode.next = currentNode.next;
                    currentNode.next = null;
                }
                this.nElement -= 1;
                return true;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        return false;
    }

    removeAtIndex(index) {
        let elem, prev;
        if (index < 0 || index >= this.nElement) {
            return null;
        }
        if (this.nElement === 1) {
            elem = this.firstNode.element;
            this.firstNode = null;
            this.lastNode = null;
        } else {
            prev = this.nodeAtIndex(index - 1);
            if (prev === null) {
                elem = this.firstNode.element;
                this.firstNode = this.firstNode.next;
            } else if (prev.next === this.lastNode) {
                elem = this.lastNode.element;
                this.lastNode = prev;
            } else {
                elem = prev.next.element;
                prev.next = prev.next.next;
            }
        }
        this.nElement -= 1;
        return elem;
    }

    clear() {
        this.nElement = 0;
        this.firstNode = null;
        this.lastNode = null;
    }

    nodeAtIndex(index) {
        let node, i;
        if (index < 0 || index >= this.nElement) {
            return null;
        }
        if (index === (this.nElement-1)) {
            return this.lastNode;
        }
        node = this.firstNode;
        for (i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }

    elementAtIndex(index) {
        let node = this.nodeAtIndex(index);
        if (node === null) {
            return null;
        }
        return node.element;
    }

    include(element, equalFunc) {
        return this.indexOf(element, equalFunc) >= 0;
    }

    indexOf(element, equalFunc) {
        let eqaulsF = equalFunc || Util.defaultEqual;
        let currentNode = this.firstNode;
        let index = 0;
        if (Util.isUnfefined(element)) {
            return -1;
        }
        while (currentNode !== null) {
            if (eqaulsF(currentNode.element, element)) {
                return index;
            }
            index += 1;
            currentNode = currentNode.next;
        }
        return -1;
    }

    forEach(callBack) {
        let currentNode = this.firstNode;
        while (currentNode !== null) {
            if (callBack(currentNode.element) === false) {
                break;
            }
            currentNode = currentNode.next;
        }
    }

    first() {
        if (this.firstNode !== null) {
            return this.firstNode.element;
        }
        return null;
    }

    last() {
        if (this.lastNode !== null) {
            return this.lastNode.element;
        }
        return null;
    }

    size() {
        return this.nElement;
    }

}

export default LinkedList;