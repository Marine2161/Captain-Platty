var level : int;

function OnGUI () {
	GUI.Button(Rect(Screen.width / 2, Screen.height / 2, 100, 50), "Start Game");

	if (Input.GetMouseButtonUp(0) == true){
		Application.LoadLevel("Level"+level);
	}
}