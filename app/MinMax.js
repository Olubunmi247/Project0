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
}