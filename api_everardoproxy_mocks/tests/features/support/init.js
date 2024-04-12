'use strict';

const apickli = require('apickli');
const {Before, setDefaultTimeout} = require('cucumber');

Before(function() {
    this.apickli = new apickli.Apickli('https', '');
    this.apickli.addRequestHeader('Cache-Control', 'no-cache');
    this.apickli.setGlobalVariable('host', '34.98.65.235.nip.io');
    this.apickli.setGlobalVariable('dominio', '34.98.65.235.nip.io');
});
//this.apickli.setGlobalVariable('versionApi', 'v1');

setDefaultTimeout(60 * 1000); // en milisegundos