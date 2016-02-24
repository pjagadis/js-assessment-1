exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
	  for (var i = 0, len = arr.length; i < len; i++) {
	      if (arr[i] === item) {
	        return i;
	      }
	    }

	    return -1;
  },

  sum : function(arr) {
	  var sum = 0;

	    for (var i = 0, len = arr.length; i < len; i++) {
	      sum += arr[i];
	    }

	    return sum;
  },

  remove : function(arr, item) {
	  var ret = [];

	    for (var i = 0, len = arr.length; i < len; i++) {
	      if (arr[i] !== item) {
	        ret.push(arr[i]);
	      }
	    }

	    return ret;
  },

  removeWithoutCopy : function(arr, item) {
	  
  },

  append : function(arr, item) {
	  arr.push(item);
	  return arr;
  },

  truncate : function(arr) {
	  arr.pop();
	  return arr;
  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {
	  return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
	  arr.splice(index, 0, item);
	  return arr;
  },

  count : function(arr, item) {
	  var arrCount = 0;

	    for (var i = 0, len = arr.length; i < len; i++) {
	      if (arr[i] === item) {
	    	  arrCount++;
	      }
	    }

	    return arrCount;
  },

  duplicates : function(arr) {

  },

  square : function(arr) {
	  var square = [];

	    for (var i = 0, len = arr.length; i < len; i++) {
	    	square.push(arr[i] * arr[i]);
	    }

	    return square;
  },

  findAllOccurrences : function(arr, target) {
	  var returnOccurance = [];

	    for (var i = 0, len = arr.length; i < len; i++) {
	      if (arr[i] === target) {
	    	  returnOccurance.push(i);
	      }
	    }

	    return returnOccurance;
  }
};
