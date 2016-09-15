var currentCam : int = 0;
var cams : Camera[];
var splitScreen : boolean = false;

function Update () {


	

	if (Input.GetKeyUp (KeyCode.Mouse1)){
			currentCam = 1;
		
		/*if (currentCam > cams.Length){
			currentCam = 0;
		}*/

	currentCam = currentCam % cams.Length;

	cams[0].enabled = false;
	cams[1].enabled = false;
	//cams[2].enabled = false;
	//cams[3].enabled = false;
	//cams[4].enabled = false;
	//cams[5].enabled = false;
	//cams[6].enabled = false;
	
	cams[currentCam].enabled = true;

	}

	if (Input.GetKeyDown (KeyCode.Mouse1)){
			currentCam = 0;
		
		/*if (currentCam > cams.Length){
			currentCam = 0;
		}*/

	currentCam = currentCam % cams.Length;

	cams[0].enabled = false;
	cams[1].enabled = false;
	//cams[2].enabled = false;
	//cams[3].enabled = false;
	//cams[4].enabled = false;
	//cams[5].enabled = false;
	//cams[6].enabled = false;
	
	cams[currentCam].enabled = true;

	}

	/*if (Input.GetKeyDown (KeyCode.E)){
		splitScreen = !splitScreen;

		Split(splitScreen);

	}*/

}

function Split (isOn : boolean){

	currentCam = 0;

	if (isOn) {
		cams[0].enabled = false;
		cams[1].enabled = true;
		//cams[2].enabled = true;
	
		cams[1].rect = Rect(0, 0, 1, 0.5);
		//cams[2].rect = Rect(0, 0.5, 1, 0.5);
	}

	else {
		cams[0].enabled = true;
		cams[1].enabled = false;
		//cams[2].enabled = false;
	
		cams[1].rect = Rect(0, 0, 1, 1);
		//cams[2].rect = Rect(0, 0, 1, 1);	
	}

}

//function OnGUI() {

//	if (GUI.Button(Rect(10,170,120,30),"Main Camera")){
//		currentCam++;

//	GUI.DrawTexture(Rect(20,20+botID*60,200.0*(health/1000.0),200), useTexture, ScaleMode.ScaleToFit, true, 10.0*(health/1000.0));
	
	//GUI.Label (Rect (20, 80+botID*60, 200, 200), botName);
	
//	}
//}