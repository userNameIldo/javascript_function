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

var each = function(list, iter){
    for(var i = 0; i < list.length; i++){
        iter(list[i]);
    }
    return list;
}

var users = [{ id : 1, name : 'ID' , age : 36}
            ,{ id : 2, name : 'BJ' , age : 32}
            ,{ id : 3, name : 'JM' , age : 34}
            ,{ id : 4, name : 'PJ' , age : 24}
            ,{ id : 5, name : 'HA' , age : 27}
            ,{ id : 6, name : 'JE' , age : 40}
            ,{ id : 7, name : 'JI' , age : 41}
            ,{ id : 8, name : 'MP' , age : 24}
            ]


var _filter = function(list, predi){
    var new_list = [];
    each(list, function(val){
        if(predi(val)) new_list.push(val);
    });
    return new_list;
}

var _map = function(list, predi){
    var new_list = [];
    each(list, function(val){
        new_list.push(predi(val));
    });
    return new_list;
}

var a = function(arr){ return arr.age > 30}

var x = function(arr){ return arr.name + "님 안녕하세요";}

console.log(_map(users, x));
console.log(_filter(users, a));

//메소드는 배열로만 가능, But 함수형은 다형성을 가지고 있다. 배열이 아니여도 동작이 가능 함수형의 장점
//데이터가 먼저 나오는 방식은 데이터가 있어야 기능을 수행할 수 있다.
//함수는 먼저 만들 수 있고, 데이터가 생기지 않아도 가능함으로 평가시점이 자유롭다.


console.log([1,2,3,4,5].filter(function(val){
    return val >= 3
}))

console.log([1,2,3,4,5].map(function(val){
    return val * 10;
}))

console.log((document.querySelectorAll('*')));

console.log(_map(document.querySelectorAll('*'), function(node){
    return node.nodeName + "무야호";
}));

console.log(_map([1,2,3,4,5] , function(v){
    return v + 20;
}));


//curry 함수와 인자를 다루는 기법. 함수에 인자를 하나씩 적용 후 필요한 인자가 채워지면 함수 본채를 실행
function _curry(fn){
    return function(a, b){ 
        return arguments.length == 2 ? fn(a, b) : function(b){ return fn(a, b)};
    }
    
}

var add1 = function(a, b){
    return a + b;
}

console.log(add1(10, 5));

var add = _curry(function (a, b){
    return a+b;
});

var add10 = add(10);

console.log(add10(5));
console.log(add(10)(5));

console.log(add(10, 1));