const { getDirAbsoluteUri } = require('./utils_functions');

class StorableQueue {
    constructor({ name = "" } = {}) {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
        this.name = name
        this.absolute_uri = (getDirAbsoluteUri(`temp/${this.name}`))
    }

    /**
     * 
     * @returns {bool} Returns upon success
     */
    async load() {
        try {
            const { JsonDB, Config } = await import('node-json-db');

            var db = new JsonDB(new Config(this.absolute_uri, true, false, '/'));
            this.elements = await db.getData('/elements');
            this.tail = await db.getData('/tail');
            console.log(`Loaded ${this.length} from  ${this.name} | ${this.absolute_uri}`);
            return true
        } catch {
            return false
        }
    }

    async save() {
        const { JsonDB, Config } = await import('node-json-db');

        var db = new JsonDB(new Config(this.absolute_uri, true, false, '/'));
        db.push('/elements', this.elements);
        db.push('/tail', this.tail);
    }

    cleanQueue() {
        delete this.elements;
        this.elements = {}
        this.head = 0;
        this.tail = 0;
    }

    has(element) {
        if (Object.values(this.elements).includes(element)) {
            return true;
        }
        return false
    }

    enqueue(element) {
        const length = Object.keys(this.elements).length;
        this.elements[length] = element;
        this.tail = length + 1;
    }

    enqueueMultiple(elements) {
        for (const element of elements) {
            this.enqueue(element);
        }
    }

    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }

    peek() {
        return this.elements[this.head];
    }

    get lastElement() {
        return this.elements[this.tail - 1];
    }

    get length() {
        return Object.keys(this.elements).length;
    }

    get isEmpty() {
        return this.length === 0;
    }
}

module.exports = { StorableQueue };
