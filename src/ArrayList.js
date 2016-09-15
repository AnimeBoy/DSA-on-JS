class ArrayList extends Array {

    constructor() {

        super();
        this.array = [];

    }

    insert(index, item) {

        this.array.splice(index, 0, item);

    }

    delete(index, num) {

        this.array.splice(index, num);

    }

    concat(arr) {

        this.array.concat(arr);
        
    }


}

export default ArrayList;