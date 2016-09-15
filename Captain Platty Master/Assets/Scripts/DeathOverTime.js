var duration : int = 10;

function Start () {

	for(index = 0; index < duration; index++){
		
		yield WaitForSeconds (0.5);

		if(index == 10){
			Destroy(gameObject); 
		}
	}

}