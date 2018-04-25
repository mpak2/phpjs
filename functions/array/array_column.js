function array_column(input, column_key, index_key){ // search_value, argStrict
  // https://github.com/mpak2/phpjs/
  console.log("input:", input);
  var search = typeof search_value !== 'undefined',
    tmp_obj = {},
    include = true,
    key = 0;

  for(key in Object(input)){
    if(!input.hasOwnProperty(key)){// console.error("ОШИБКА ключ `"+ key+ "` не анйден в массиве");
    }else if("object" != typeof(input[key])){// console.log("Не верный тип элемента");
    }else if(!input[key].hasOwnProperty(column_key)){// console.error("ОШИБКА поле в массиве не установлено");
    }else if(!(value = input[key][column_key])){ console.error("ОШИБКА получения значения массива");
    }else if(!(num = ("undefined" == typeof(index_key) ? index_key : ++key))){ console.error("ОШИБКА автоинкремента ключа");
    }else{// console.log("num:", num, "value:", value);
      tmp_obj[num] = value;
    }
  } return tmp_obj;
}
