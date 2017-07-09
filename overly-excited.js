//the sentence
var words = 'The walrus danced through the trees in the light of the moon'

// Create an array that contains the words in the sentence
var sentence = words.split(' ');

// The addExcitement function should accept the array as the sole argument
//addExcitement prints words consecutively and adds one exclamation point asfter every third word.  
function addExcitement (theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
     var message = ''
     for (var i = 0; i < theWordArray.length; i++) {
     	if ((i+ 1) % 3 === 0) {
     		message += theWordArray[i] + '! ';
     	} else {
			message += theWordArray[i] + ' ';
     	}
		console.log(message);
     }
}

//addMoreExcitement prints words consecutively and adds consecutive exclamation points 
//based on how many times the counter variable can be divided by three
function addMoreExcitement(theWordArray) {
    var message = '';
    for (var i = 0; i < theWordArray.length; i++) {

        //add a word
        message += theWordArray[i];
        
        //if the word is a multiple of 3 
        if ((i + 1) % 3 === 0) {
            //add an exclamation mark for the number of times i divides by 3
            for (j = 0; j < i/3; j++) {
                message += '!';
            }
        }
        //add a space after the word
        message += ' ';

        //print the message
        console.log(message);
    }       
}

// Invoke the functions and pass in the array
addExcitement(sentence);
addMoreExcitement(sentence);



