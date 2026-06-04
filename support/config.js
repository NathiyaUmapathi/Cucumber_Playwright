const { setWorldConstructor } = require('@cucumber/cucumber');
require('dotenv').config({ override: true });

class CustomWorld {
    constructor() {
        this.browser = null;
        this.Context = null;
        this.page = null;
    }
}

setWorldConstructor(CustomWorld);