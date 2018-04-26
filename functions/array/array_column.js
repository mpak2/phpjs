<<<<<<< HEAD
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
    }else if("undefined" == (column_value = input[key][column_key])){ console.error("ОШИБКА получения значения массива", input[key], column_key);
		}else if(isNaN(index_value = (input[key].hasOwnProperty(index_key) ? input[key][index_key] : "undefined"))){ console.log("ОШИБКА расчета значения ключа");
    }else{// console.log("index_key:", index_key, "index_value", index_value, "column_value:", column_value, input[key].hasOwnProperty(index_key), input[key][index_key], input[key]);
      tmp_obj[index_value] = column_value;
    }
  } return tmp_obj;
}

=======
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
>>>>>>> 325fccc4b87aaec2fa023de63130fa8f6aed8368
