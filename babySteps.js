function sum (arr) {
	// Create a numeric result variable and add all the command line 
	// arguments to it.
	var x = 0;

	for (var i = arr.length - 1; i >= 2; i--) {

		y = parseInt(arr[i]);

		x = x + y;
	}

	return x;

}

console.log(sum(process.argv));