class Queue {

    constructor() {

        this.array = [];
        
    }

    enqueue(...items) {

        this.array.push(...items);

    }

    dequeue() {

        return this.array.shift();

    }

    front() {

        return this.array[0];

    }

    isEmpty() {

        return this.array.length === 0;

    }

    size() {

        return this.array.length;

    }

    print() {

        console.log(this.array.toString());

    }
}

export default Queue;