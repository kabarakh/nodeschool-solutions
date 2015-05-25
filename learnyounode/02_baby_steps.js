//** BABY STEPS **//
var sum = 0;
process.argv.forEach(function(value, key) {
	if (key > 1) {
		sum += Number(value);
	}
});

console.log(sum);