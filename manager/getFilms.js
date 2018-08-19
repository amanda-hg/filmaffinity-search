'use strict';

const getIds = require ('./getIDs');
const getRecord = require('./getRecord');

const request = (params) => getIds(params)
    .then((arr) => {
        //Se usa un map ya que se quiere devolver una promesa por cada 'id' de cada propiedad 'item'
        const promises = arr.map((item) => getRecord(item.id));
        //Con el Promise.all, cuando se ejecute esta promesa, no pasará al then hasta que se hayan cumplido todas las promesas
        return Promise.all(promises);
    });

module.exports = (params) => request(params);
