/*
console.log("halhal lo");

var arr = [1,2,3,4,5];

var filter = function(list, predi){
    var new_list = [];
    for(var i = 0; i < list.length; i++){
        if(predi(list[i])) new_list.push(list[i]);
    }
    return new_list;
}

var x = function(list){return list > 3};

console.log(filter(arr, x));

var map = function(list, predi){
    var new_list = [];
    for(var i = 0; i < list.length; i++){
        new_list.push(predi(list[i]));
    }
    return new_list;
}

var y = function(a){return a*4;}

console.log(map(arr, y));



var arr1 = [1, 2, 3, 4, 5];

var each = function(list, iter){
    for(var i = 0; i < list.length; i++){
        iter(list[i]);
    }
    return list;
}

var x1 = function(a){return a>=3;}

var _filter = function(list, predi){
    var new_list = [];
    each(list, function(val){
        if(predi(val)) new_list.push(val);
    });
    return new_list;
}

console.log(_filter(arr1, x1));

var _map = function(list, predi){
    var new_list = [];
    each(list, function(val){
        new_list.push(predi(val));
    });
    return new_list;
}
*/




















