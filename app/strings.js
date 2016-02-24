exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
	  
  },
  wordWrap: function(str, cols) {
	  var newLineStr = "\n"; done = false; res = '';
	    do {                    
	        found = false;
	        // Inserts new line at first whitespace of the line
	        for (var i = cols - 1; i >= 0; i--) {
	            if (testWhite(str.charAt(i))) {
	                res = res + [str.slice(0, i), newLineStr].join('');
	                str = str.slice(i + 1);
	                found = true;
	                break;
	            }
	        }
	        // Inserts new line at cols position, the word is too long to wrap
	        if (!found) {
	            res += [str.slice(0, cols), newLineStr].join('');
	            str = str.slice(cols);
	        }

	        if (str.length < cols)
	            done = true;
	    } while (!done);

	    return res;
	    

	    function testWhite(x) {
	        var white = new RegExp(/^\s$/);
	        return white.test(x.charAt(0));
	    };
  },
  reverseString: function(str) {
	  var o = '';
	  for (var i = str.length - 1; i >= 0; i--)
	    o += str[i];
	  return o;
  }
};
