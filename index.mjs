import { Database } from "./database.mjs";
import * as fs from 'fs';

let tdb = new Database("cache.jsdb", "Test Database");

tdb
    .createPool("Pool0")
    .createPool("Pool1")

tdb.pools.Pool0
    .add("Test", "Some Miscellaneous Data here")
    .add("Second_Test", 1236742)

console.log(tdb.pools.Pool0);
