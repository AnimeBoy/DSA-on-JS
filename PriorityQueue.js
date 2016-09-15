import Queue from './Queue';

class PriorityQueue extends Queue {

    constructor() {

        super();

    }

    enqueue(item, priority) {

        for(let i in this.array) {

            if(priority > this.array[i].priority) {

                this.array.splice(i, 0, {item, priority});
                
                return;
            }

        }

        this.array.push({item, priority});

    }

    print() {

        let str = '[ ';

        for(let i in this.array) {
            
            str += `{ "item": "${this.array[i].item}", "priority": ${this.array[i].priority} }`;

            if(i != this.array.length - 1) {

                str += ', ';

            }

        }

        str += ' ]';

        console.log(str);
    }
}

export default PriorityQueue;