static var dead : boolean = false;

var respawnNode : Transform;

function Start () {
	Spawn();

}

function Update () {
	if(dead){
		Spawn();
		dead = false;
	}
}

function Spawn() {
	transform.position = respawnNode.position;

}