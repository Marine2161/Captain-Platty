var agent : NavMeshAgent;
var target : Transform;
var targetList : GameObject[];
var rotateSpeed : float;

//Agro Var
var aggroRange : float = 20;

//Strafe Var
var strafeRange : float = 14;
var dangerRange : float = 5;
//Patrol Var
var patrolWaypoint : Transform[];
var currentWaypoint : int = 0;
var waypointRadious : float = 1; 

//State Machine Var
//0 = patrol, 1 = chase, 2 = strafe, 3 = flee
var State : int = 0;
var health : float = 100.0;

function Start () {
	
	agent = GetComponent.<NavMeshAgent>();

	//RandomTarget();
}

function Update () {

if (target == transform){
	RandomTarget();
}

if (target == null){
	RandomTarget();
}

//agent.updateRotation = true;

	StateMachine(target);

}

function RandomTarget (){
	
var targetList = GameObject.FindGameObjectsWithTag("Target");

do{	target = targetList[Random.Range(0, targetList.length)].transform;
} while (target == transform.gameObject);

}

function Chase (chaseTarget : Transform){

	agent.SetDestination (chaseTarget.position);
	print ("Chaseing");
}

function Watch (watchTarget : Transform){

	//agent.updateRotation = fales;

	targetDir = watchTarget.position - transform.position;

	transform.rotation = Quaternion.LookRotation (Vector3.RotateTowards(transform.forward, targetDir, rotateSpeed * Time.deltaTime, 0.0));
		print ("Watching");
}

function Flee (fleeTarget : Transform){

		Watch (fleeTarget);

	agent.SetDestination(transform.position + transform.forward * -1);

	/*var fleeDir = transform.position - fleeTarget.position;

	agent.SetDestination (transform.position + fleeDir);*/
		print ("Fleeing");
}

function Aggro (aggroTarget : Transform){

	if (Vector3.Distance(transform.position, aggroTarget.position) < aggroRange){
		Chase (aggroTarget);
			print ("Aggroed");
	}

	else {
		Chase (transform);		
			print ("No Target");
	}
}

function Patrol (){

	Chase (patrolWaypoint[currentWaypoint]);
	
	if (Vector3.Distance(transform.position, patrolWaypoint[currentWaypoint].position) < waypointRadious){
		currentWaypoint ++;
			print ("Patroling");
	}
	
	if (currentWaypoint >= patrolWaypoint.Length) {
		currentWaypoint = 0;
	}
}

function Strafe (strafeTarget : Transform){

	Watch (strafeTarget);

	agent.SetDestination(transform.position + transform.right);
		print ("Strafing");
}

function OnCollitionEnter () {
	var danger = GameObject.FindGameObjectsWithTag("Fire Pit");
	if(target == "Fire Pit"){
		Flee(target);
	}
}

function StateMachine (stateTarget : Transform){
//0 = patrol, 1 = chase, 2 = strafe, 3 = flee
var targetRange = Vector3.Distance(transform.position, stateTarget.position);
	//Conditions
	if (health >= 20){
		//Aggro
		if (targetRange <= aggroRange){

			if (targetRange < strafeRange){
				//Strafe
				if (targetRange < dangerRange){
					//Flee
					State = 3;
				}
				else {
					//Strafe
					State = 2;
					}
				}
			//Chase
			else {
				State = 1;
				}
			}
		else {
			//Patrol
			State = 0;
			}

		}
	else {
		//Flee
		State = 3;
		}	

//Behaviors
if (State == 0){
	Patrol ();
}
else if (State == 1){
	Chase (stateTarget);
}
else if (State == 2){
	Strafe (stateTarget);
}
else if (State == 3){
	Flee (stateTarget);
}

}









