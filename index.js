'use strict';

module.exports = function(obj){

    if (!obj) {
        throw new Error('You must supply an object to print');
    }

    var unpacked = unpackEmbeddedObjects(obj);
    return printObject(unpacked);

};

function unpackEmbeddedObjects(obj){

    var o = {};
    var spacer = '\n    ';

    for(var key in obj){
        var value = obj[key];
        var isArray = Array.isArray(value);

        if (!isArray && typeof value === 'object'){
            o[key] = spacer + printObject(value, spacer);
        } else {
            o[key] = value;
        }
    }

    return o;

}

function printObject(obj, spacer){

    if (!spacer){
        spacer = "\n";
    }

    var s = '';

    for (var i in obj){
        s += i + ": "+obj[i].toString();
        s += spacer;
    }

    return s;
}

