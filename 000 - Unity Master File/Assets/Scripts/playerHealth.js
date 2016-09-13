static var health;
var level : int;

function Start(){
	health = 500;
}

function Update(){
	print("Health =" + health);
	print("hit");
	/*if(enemAI.isHit == true ){
		invincible = true;
	yield WaitForSeconds(3);
			invincible = false;
	}*/
	if(health <= 0){
		Application.LoadLevel("Level"+level);
	}
}

function OnGUI(){
	GUI.Button(Rect(40,50,health / 5,40),"" + health);
}