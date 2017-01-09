'use strict'
module.exports = {
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
}