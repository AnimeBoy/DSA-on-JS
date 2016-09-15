class Stack {

    constructor() {

        this.array = [];

    }

    pop() {

        if(this.array.length <= 0) {

            throw new Error('Stack Overflow');

        }

        return this.array.pop();
    }

    push(...item) {

        this.array.push(...item);

    }

    peek() {

        return this.array[this.array.length - 1];

    }

    isEmpty() {

        return this.array.length === 0;

    }

    clear() {

        this.array = [];

    }

    size() {

        return this.array.length;

    }

    print() {

        console.log(this.array.toString());

    }
}

export default Stack;