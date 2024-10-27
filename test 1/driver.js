class Driver {
    constructor(name, points, position, constructorName, driverCountry) {
        this._name = name; 
        this._points = points;
        this._position = position;
        this._constructorName = constructorName;
        this._driverCountry = driverCountry;

    }

    get name() {
        return this._name;
    }

    get points() {
        return this._points;
    }

    get position() {
        return this._position;
    }

    get constructorName() {
        return this._constructorName;
    }

    get driverCountry() {
        return this._driverCountry;
    }

    get flagUrl() {
        return `https://flagicons.lipis.dev/flags/4x3/${this.driverCountry.toLowerCase()}.svg`;
    }

}