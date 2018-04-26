function array_column(input, column_key, index_key){ // search_value, argStrict
  // https://github.com/mpak2/phpjs/
  var search = typeof search_value !== 'undefined',
    tmp_obj = {},
    include = true,
    key = 0;
	if("undefined" == typeof(column_key)){ console.error("Не указан обязательный ключ массива `column_key`");
	}else{
		for(key in Object(input)){
			if(!input.hasOwnProperty(key)){// console.error("ОШИБКА ключ `"+ key+ "` не анйден в массиве");
			}else if("object" != typeof(input[key])){ console.error("Не верный тип элемента ожидается объект", input[key]);
			}else if(!input[key].hasOwnProperty(column_key)){// console.error("ОШИБКА поле в массиве не установлено");
			}else if("undefined" == (column_value = input[key][column_key])){ console.error("ОШИБКА получения значения массива", input[key], column_key);
			}else if(isNaN(index_value = (input[key].hasOwnProperty(index_key) ? input[key][index_key] : "undefined"))){ console.log("ОШИБКА расчета значения ключа");
			}else{ tmp_obj[index_value] = column_value; }
		}
	} return tmp_obj;
}
