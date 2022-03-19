

//each 반복하는 함수
var each = function(list, iter){
    for(var i = 0; i < list.length; i++){
        iter(list[i]);
    }
    return list;
}

//filtering 하는것
var _filter = function(list, predi){
    var new_list = [];
    each(list, function(val){
        if(predi(val)) new_list.push(val);
    });
    return new_list;
}

//mapping 시키는것
var _map = function(list, predi){
    var new_list = [];
    each(list, function(val){
        new_list.push(predi(val));
    });
    return new_list;
}

//curry 함수와 인자를 다루는 기법. 함수에 인자를 하나씩 적용 후 필요한 인자가 채워지면 함수 본채를 실행
var _curry = function(fn){
    return function(a, b){ 
        return arguments.length == 2 ? fn(a, b) : function(b){ return fn(a, b)};
    }
    
}

var _curryr = function(fn){
    return function(a, b){
        return arguments.length == 2 ? fn(a, b) : function(b){ return fn(b, a)};
    }
}

//get은 Object의 값을 안전하게 참조

var _get = _curryr(function(obj, key){
    return obj == null ? undefined : obj[key];
});