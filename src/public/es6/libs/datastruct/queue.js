import LinkedList from './linkedlist'


class DeQueue {

    constructor(cap = 128) {
        this.cap = cap;
        this.list = new LinkedList();
    }

    overSize() {
        return this.size() >= this.cap;
    }

    pushBack(element) {
        if (this.overSize()) {
            this.popFont();
        }
        this.list.add(element);
    }

    pushFont(element) {
        if (this.overSize()) {
            this.popBack();
        }
        this.list.add(element, 0);
    }

    popBack() {
        var elem;
        if (this.list.size() !== 0) {
            elem = this.list.last();
            this.list.removeAtIndex(this.size() - 1);
            return elem;
        }
        return null;
    }

    popFont() {
        var elem;
        if (this.list.size() !== 0) {
            elem = this.list.first();
            this.list.removeAtIndex(0);
            return elem;
        }
        return null;
    }

    peek() {
        if (this.list.size() !== 0) {
            return this.list.first();
        }
        return null;
    }

    clear() {
        this.list.clear();
    }

    include(elem, equalsFunc) {
        return this.list.include(elem, equalsFunc);
    }

    size() {
        return this.list.size();
    }

}


export default DeQueue;