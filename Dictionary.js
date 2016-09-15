class Dictionary {

    constructor() {

        this.items = {};

    }

    has(key) {

        return this.items.hasOwnProperty(key);

    }

    set(key, value) {

        this.items[key] = value;

    }

    get(key) {

        return this.has(key) ? this.items[key] : undefined;

    }

    remove(key) {

        if(this.has(key)) {

            delete this.items[key];

            return true;

        }

        return false;

    }

    keys() {

        return Object.keys(this.items);
    }

    values() {

        let values = {};

        for(const k in this.items) {

            if(this.has(k)) {

                values.push(items[k]);

            }

        }

        return values;

    }

    clear() {

        this.items = {};

        return true;

    }

    getItems() {

        return this.items;

    }

    size() {

        return this.keys().length;

    }

    *[Symbol.iterator]() {

        const keys = this.keys();

        for(let i = 0; i < keys.length; i++) {

            yield { key: keys[i], value: this.items[keys[i]] };

        }
    }

}

export default Dictionary;