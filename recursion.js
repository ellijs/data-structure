function sumUpTo(n){
	if(n > 1){
		sumUpTo(n - 1) + n
	} else {
		return 1
	}
}