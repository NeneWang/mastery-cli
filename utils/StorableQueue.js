
class StorableQueue {
    constructor({ name = "", load = true } = {}) {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
        this.name = name
        if (load) {
            this.load();
        }
    }

    /**
     * 
     * @returns {bool} Returns upon success
     */
    async load() {
        try {
            const { JsonDB, Config } = await import('node-json-db');

            var db = new JsonDB(new Config(this.name, true, false, '/'));
            this.elements = await db.getData('/elements');
            this.tail = await db.getData('/tail');
            return true
        } catch {
            return false
        }
    }

    async save() {

        const { JsonDB, Config } = await import('node-json-db');

        var db = new JsonDB(new Config(this.name, true, false, '/'));
        db.push('/elements', this.elements);
        db.push('/tail', this.tail);

    }

    cleanQueue() {

        // for (let key in this.elements) {
        //     delete this.elements[key];
        // }
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
        this.elements[this.tail] = element;
        this.tail++;
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
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.length === 0;
    }
}


module.exports = { StorableQueue };

