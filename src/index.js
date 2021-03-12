module.exports = function towelSort (matrix) {
  const array = [];
		if (matrix === undefined || matrix.length === 0) {
      return []
    }
		for (i = 0; i < matrix.length; i++) {
			if (i % 2 == 0) {
				let j = matrix[i].length;
				for (j = 0; j < matrix[i].length; j++) {
            array.push(matrix[i][j]);
  				}
			} else {
				for (j = matrix[i].length-1; 0 <=j; j--) {
    			  array.push(matrix[i][j]);
  				}
  			}
		}
		return array;
}
