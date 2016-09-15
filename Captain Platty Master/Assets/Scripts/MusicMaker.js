public var music: GameObject;

function Start () {
	//music = GameObject.FindGameObjectsWithTag("Music1");
	print("test");
	if(!music){
		Instantiate (music, Vector3.zero, Quaternion.indentity);
	}
}

function Update () {

}