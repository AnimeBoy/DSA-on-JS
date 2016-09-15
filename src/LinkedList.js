class LinkedList {

    constructor() {

        this.head = null;
        this.length = 0;

    }

    append(item) {

        const node = new Node(item);

        let current = null;

        if(this.head == null) {

            this.head = node;

        }else {

            current = this.head;

            while(current.next) {

                current = current.next;

            }

            current.next = node;
        }

        this.length++;
    }

    insert(position, item) {

        if(position > -1 && position <= length) {

            const node = new Node(item);

            let current = this.head;
            let prev = null;
            let index = 1;

            if(position === 0) {

                node.next = current;
                this.head = node;

            }else {

                while(index < position) {

                    prev = current;
                    current = current.next;
                }

                node.next = current;
                prev.next = node;
            }

            length++;

            return true;

        }else {

            return false;

        }
    }

    remove(item) {

        let index = this.indexOf(item);

        return this.removeAt(index);
    }

    removeAt(position) {
        
        if(position > -1 && position < length) {

            let current = this.head;
            let prev = null;
            let index = 1;

            if(position === 0) {

                head = current.next;

            }else {

                while(index < position) {

                    prev = current;
                    current = current.next;

                    index++;
                }

                prev.next = current.next;
            }

            length--;

            return current.item;

        }else {

            return null;

        }
    }

    indexOf(item) {

        let current = this.head;
        let index = -1;

        while(current) {

            if(item === current.item) {

                return index;

            }

            current = current.next;
            index++;

        }

        return -1;
    }

    isEmpty() {

        return length === 0;

    }

    size() {

        return this.length;

    }

    getHead() {
        return this.head;
    }

    toString() {

        let current = this.head;
        let str = '';

        while(current) {

            str += current.item.toString();
            current = current.next;

        }

        return str;
    }

    print() {

        console.log(this.toString());

    }

    *[Symbol.iterator]() {

        let current = this.head;

        while(current) {

            yield current.item;

            current = current.next;
        }

    }

}

class Node {

    constructor(item) {

        this.item = item;
        this.next = null;

    }
}

export default LinkedList;

