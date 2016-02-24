exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {

  },

  alterObjects : function(constructor, greeting) {

  },

  iterate : function(obj) {
	  var retVal = [];

	    for (var prop in obj) {
	      if (obj.hasOwnProperty(prop)) {
	    	  retVal.push(prop + ': ' + obj[prop]);
	      }
	    }

	    return retVal;
  }
};
