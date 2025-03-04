
(async () => {
    const { JsonDB, Config } = await import('node-json-db');


    var db = new JsonDB(new Config("myDataBase", true, false, '/'));
    await db.push("/test1", "super test");
})();


