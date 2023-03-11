/**
 * Just me goofing around with sql.js => Perphaps in the future I can use this to create sql problems to play around.
 */

// Load the SQL.js library
const initSqlJs = require('sql.js');
var fs = require('fs');

//Ditto, path module
var path = require('path');

var filebuffer = fs.readFileSync(path.join(__dirname, 'test.sqlite'));

(async () => {// Create an in-memory database
    const SQL = await initSqlJs();
    // console.log(SQL);
    const db = new SQL.Database(filebuffer);

    // const pre_result = db.exec('SELECT * FROM users');
    // console.log("pre_result", pre_result[0]?.values ?? "No users found.") //This doesnt work, I assume is creating a new db every time? that works for me I guess.


    // Create a table
    db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)');

    // Insert some data
    db.run('INSERT INTO users (name) VALUES (?)', ['Alice']);
    db.run('INSERT INTO users (name) VALUES (?)', ['Bob']);
    db.run('INSERT INTO users (name) VALUES (?)', ['Charlie']);

    // Perform a query
    const result = db.exec('SELECT * FROM users');
    console.log(result[0].values);
}
)()