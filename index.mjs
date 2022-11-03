import { Database, Item } from "./database.mjs";
import * as fs from 'fs';

let tdb = new Database("cache.jsdb", "Test Database");

tdb
    .createPool("Pool0")
    .createPool("Pool1")

tdb.pools.Pool0
    .add("Pool_Item_0", "string")
    .add("Pool_Item_1", 1236742)

tdb.pools.Pool1
    .add("Folder_Test", [
        Item.from("Folder_Item_0", false),
        Item.from("Folder_Item_1", 3.14159)
    ]);

console.log(tdb.pools);
