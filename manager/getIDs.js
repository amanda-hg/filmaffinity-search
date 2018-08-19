'use strict';

/**
 * 
 * Es lo mismo que 'request' pero en vez de devolver una callback (error, response)
 * devuelve una promesa, la respuesta, si sale todo bien, se coge en el then,
 * y el error, si sale mal, se recoge en el catch
 * 
 **/
const Request = require ('request-promise');

const makeOptions = (params) => ({
    method: 'GET',
    uri: `https://api-filmaffinity.herokuapp.com/api/busqueda/${params}`,
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
});

const request = ( params ) => {
    const options = makeOptions(params);
    return  Request(options);
}


// module.exports = function ( params ) {
//     return request(params);
// }                    ESTO ES LO MISMO QUE LO DE ABAJO

module.exports = async ( params ) => request(params);
//NO TIENE RETURN POR QUE ES UNA SOLA LINEA, MAS LINEAS --> SI

//module.exports = ( request );
//ESTO ES EXACTAMENTE LO MISMO QUE LA DE ARRIBA