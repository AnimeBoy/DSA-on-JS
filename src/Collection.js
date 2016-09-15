class Collection {

    constructor() {

        this.items = {};

    }

    has(item) {

        return this.items.hasOwnProperty(item);

    }

    add(item) {

        if(!this.has(item)) {

            this.items[item] = item;

            return true;

        }

        return false;

    }

    remove(item) {

        if(this.has(item)) {

            delete this.items[item];

            return true;

        }

        return false;

    }

    clear() {

        this.items = {};

        return true;

    }

    size() {

        return Object.keys(this.items).length;

    }

    values() {

        return Object.keys(this.items);

    }

    union(collection) {

        return Object.assign({}, this.items, collection);

    }

    intersection(collection) {

        let intersectionCollection = new Collection();
        let values = this.values();

        for(let i = 0; i < values.length; i++) {

            if(collection.has(values[i])) {

                intersectionCollection.add(values[i]);

            }

        }

        return intersectionCollection;

    }

    difference(collection) {

        let differenceCollection = new Collection();
        let values = this.values();

        for(let i = 0; i < values.length; i++) {

            if(!collection.has(values[i])) {

                differenceCollection.add(values[i]);

            }

        }

        return differenceCollection;

    }

    isSubCollection(collection) {

        if(this.size() > collection.size()) {

            return false;

        }

        let values = this.values();

        for(let i = 0; i < values.length; i++) {

            if(!collection.has(values[i])) {

                return false;

            }

        }

        return true;

    }

    *[Symbol.iterator]() {

        const keys = Object.keys(this.items);

        for(let i = 0; i < keys.length; i++) {

            yield this.items[keys[i]];

        }
    }

}

export default Collection;

