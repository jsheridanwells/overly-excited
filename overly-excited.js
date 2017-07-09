//the sentence
var words = ' The walrus danced through the trees in the light of the moon'

// Create an array that contains the words in the sentence
var sentence = words.split(' ');

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
     var message = ''
     for (var i = 1; i < theWordArray.length; i++) {
     	if (i % 3 === 0) {
     		message += theWordArray[i] + '! ';
     	} else {
			message += theWordArray[i] + ' ';
     	}
		console.log(message);
     }
}

// Invoke the function and pass in the array
addExcitement(sentence);