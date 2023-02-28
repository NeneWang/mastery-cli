
class StorableQueue {
    constructor({ name = "" }) {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
        this.name = name
    }

    async load() {

        const { JsonDB, Config } = await import('node-json-db');

        var db = new JsonDB(new Config(this.name, true, false, '/'));
        this.elements = await db.getData('/elements');
        this.tail = this.elements?.length??0;
    }

    async save() {

        const { JsonDB, Config } = await import('node-json-db');

        var db = new JsonDB(new Config(this.name, true, false, '/'));
        db.push('/elements', this.elements);
        db.push('/tail', this.tail);

    }


    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
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
    get length() {
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.length === 0;
    }
}


module.exports = { StorableQueue };

