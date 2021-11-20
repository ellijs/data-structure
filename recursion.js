function sumUpTo(n){
	if(n > 1){
		sumUpTo(n - 1) + n
	} else {
		return 1
	}
}

// Print String with recursion

const printString = (myString) => {
    console.log(myString[0])

    if ( myString.length > 1 ) {
        let mySubstring = myString.substring(1, myString.length);
        printString(mySubstring)
    } else {
        return true;
    }
}

printString("Hello World!")