import { Database, Item, Folder } from "./index.mjs";
import * as util from 'util';

let tdb = new Database("./cache.jsdb", "Test Database");

tdb
    .createPool("Pool0")
    .createPool("Pool1")

tdb.pools.Pool0
    .add("Pool_String", "Hello World")
    .add("Pool_Number", 3.14159)

tdb.pools.Pool1
    .add("Folder_Test", [
        Item.from("Folder_Boolean", false),
        Folder.from("Sub_Folder_Test", [
            Item.from("Sub_Folder_Array", ["Hello", 123, "Foo", 456])
        ])
    ]);

console.log(util.inspect(tdb.pools, false, null, true));

tdb.removePool("Pool1");

console.log(util.inspect(tdb.pools, false, null, true));

tdb.store();

let db = await Database.load('./cache.jsdb').then((data) => {
    console.log(data)
})