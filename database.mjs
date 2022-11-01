export class Folder {
    name = "";
    type = "Folder";
    data = {};
    get items() {
        return this.data;
    }
    set items(_multi_) {
        if (!Array.isArray(_multi_)) throw new TypeError(`Tag is not an Array`);
        else if (_multi_.length == 0) throw new RangeError(`Array contains no Items or Folders`);
        else {
            if (Item.isItemArray(_multi_)) throw new TypeError(`Array contains a value that is not a Database Item or Folder`);
            else this.data = _multi_;
        }
    }
    remove(_name_) {
        if (!this.data.contains(_name_)) throw new ReferenceError(`'${_name_}' does not exist in this ${this.type}`);
        else delete this.data[_name_];
    }
    add() {
        if (arguments.length == 2) {
            let _tag_;
            if (Array.isArray(arguments[1]))
                if (Item.isItemArray(arguments[1])) _tag_ = Folder.from(...arguments);
            else _tag_ = Item.from(...arguments);
            if (!this.data.contains(_tag_.name)) throw new ReferenceError(`'${_tag_.name}' already exists in this ${this.type}`);
            else this.data[_tag_.name] = _item_;
        } else if (arguments.length == 1) {
            let _tag_ = arguments[0];
            if (!(_tag_ instanceof Item || _tag_ instanceof Folder)) throw new TypeError(`Tag is not a Database Item or Folder`);
            else if (!this.data.contains(_tag_.name)) throw new ReferenceError(`'${_tag_.name}' already exists in this ${this.type}`);
        }
    }
    static from(_name_, _data_) {
        if (typeof _name_ != "string") throw new TypeError(`Folder name '${_name_}' must be a String`);
        else if (!Array.isArray(_data_)) throw new TypeError(`Folder data is not an Array`);
        else if (!Item.isItemArray(_data_)) throw new TypeError(`Folder data contains a value that is not a Database Item or Folder`);
        else {
            let _folder_ = new Folder();
            _folder_.name = _name_;
            _folder_.data = _data_;
            return _folder_;
        }
    }
}

export class Item {
    name = "";
    type;
    data;
    get value() {
        return this.data;
    }
    set value(_single_) {
        if (typeof _single_ != this.type) throw new TypeError(`${_single_} is not a ${this.type}`);
        else this.data = _single_;
    }
    static from(_name_, _data_) {
        if (typeof _name_ != "string") throw new TypeError(`Item name '${_name_}' must be a String`);
        else {
            let _item_ = new Item();
            _item_.name = _name_;
            _item_.type = typeof _data_;
            _item_.data = _data_;
            return _item_;
        }
    }
    static isItemArray(_array_) {
        let _any_ = true;
        for (let i = 0; i < _array_.length; i++)
            if ((_array_[i] instanceof Item || _array_[i] instanceof Folder)) _any_ = false;
        return _any_;
    }
}

export class Pool extends Folder {
    type = "Pool";
    write_ready = false;
}

export class Database {
    name = "";
    cache = "";
    pools = {};
    constructor(_cache_, _name_) {
        if (typeof _name_ != "string") throw new TypeError(`Database name '${_name_}' must be a String`);
            else this.name == _name_;
        if (typeof _cache_ != "string") throw new TypeError(`Database path '${_cache_}' must be a String`);
            else this.cache = _cache_;
    }
    createPool(_name_) {
        if (typeof _name_ != "string") throw new TypeError(`Pool name '${_name_}' must be a String`);
        else if (this.pools.contains(_name_)) throw new ReferenceError(`Pool '${_name_}' already exists`);
        else {
            let _pool_ = new Pool();
            _pool_.name = _name_;
            this.pools[_name_] = _pool_;
        }
    }
    removePool(_name_) {
        if (typeof _name_ != "string") throw new TypeError(`Pool name '${_name_}' must be a String`);
        else if (this.pools.contains(_name_)) delete this.pools[_name_];
    }
}