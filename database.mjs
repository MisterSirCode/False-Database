export class Folder {
    name = "";
    type = "folder";
    get items() {
        return this.data;
    }
    set items(_multi_) {
        if (!Array.isArray(_multi_)) throw new TypeError(`${_multi_} is not an Array of Database Items / Folders`);
        else if (_multi_.length == 0) throw new RangeError(`${_multi_} contains no Items / Folders`);
        else {
            let any = false;
            for (let i = 0; i < _multi_.length; i++)
                if (!(_multi_[i] instanceof Item || _multi_[i] instanceof Folder)) any = true;
            if (any) throw new TypeError(`${_multi_} contains a value that is not a Database Item / Folder`);
            else
                this.data = _multi_;
        }
    }
}

export class Item {
    name = "";
    type = null;
    get value() {
        return this.data;
    }
    set value(_single_) {
        if (typeof _single_ != this.type) throw new TypeError(`${_single_} is not of type ${this.type}`);
        else this.data = _single_;
    }
}

export class Pool {
    write_ready = false;
    data = {};
    remove(tag) {
        if (!this.data.contains(tag)) throw new ReferenceError(`${tag} does not exist in this Pool`);
        else delete this.data[tag];
    }
}

export class Database {
    constructor(pool) {
        let _pool = new Pool();

    }

    folder() {
        return 
    }
}