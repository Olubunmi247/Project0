'use strict'

module.exports = {

	findMinMax: function(arrayList) {
		var minMaxArray = [];
		var minValue = Math.min.apply(null, arrayList);
		var maxValue = Math.max.apply(null, arrayList);
		if(minValue === maxValue){
			  minMaxArray.push(minValue)
			}
		else{
			  minMaxArray.push(minValue);
			  minMaxArray.push(maxValue);}
	
		return minMaxArray;
	}
		
	
	aritGeo: function(arrayList){
		if (arrayList.length === 0){
			return 0;
		}
		else if (arrayList[2] - arrayList[1] === arrayList[3] - arrayList[2]){
			return "Arithmetic";
		}
		else if (arrayList[2]/arrayList[1] === arrayList[3]/arrayList[2]){
			return "Geometric";
		}
		else{
			return -1;
		}
	}

	fizzBuzz: function(number){
		if (number%3 === 0 && number%5 === 0){
			return 'FizzBuzz';
		}
		else if (number%3 === 0) {
			return 'fizz';
		}
		else if (number%5 === 0 ){
			return 'Buzz';
		}
		else{
			return number;
		}
	}
}
