exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
	  var listOfFiles = [];
	    var dirs = [];

	    processDir(data);

	    function processDir(dir) {
	      var i, len, file;
	      var files = dir.files;

	      dirs.push( dir.dir );

	      for (i = 0, len = files.length; i < len; i++) {
	        file = files[i];
	        if (typeof file === 'string') {
	          if (!dirName || dirs.indexOf(dirName) > -1) {
	            listOfFiles.push(files[i]);
	          }
	        } else {
	          processDir(files[i]);
	        }
	      }

	      dirs.pop();
	    }

	    return listOfFiles;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
	  calcFiboNth(n);
	  function calcFiboNth(num) {
	        if (num > 2) {
	            return calcFiboNth(num - 2) + calcFiboNth(num - 1);
	        } else {             
	            return 1;
	        }
	    }
  },

  validParentheses: function(n) {

  }
};
