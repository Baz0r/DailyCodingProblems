const false_array = [1,0,1,0,1];
const true_array = [6,0,0,0,0,1,0,0];

const findHops = (array) => {
	let current_index = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[current_index] > 0) {
			current_index += array[i];
		}
	}
	if (current_index === array.length - 1) {
		return true;
	}
	return false;
}

console.log(`false array ${findHops(false_array)}`);
console.log(`true array ${findHops(true_array)}`);
