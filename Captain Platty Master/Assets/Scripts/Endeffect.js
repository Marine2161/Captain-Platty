﻿ var delay = 2.0; //This implies a delay of 2 seconds.
 
 function Start(){
 	WaitAndDestroy();
 }

 function WaitAndDestroy(){
    yield WaitForSeconds(delay);
    Destroy (gameObject);
    print ("End");
 }