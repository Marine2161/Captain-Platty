var agent : NavMeshAgent;
var target : Transform;
var State : int= 0;
//Watch
var rotateSpeed : float;
//Agro Var
var aggroRange : float = 5;
//Patrol Var
var patrolWaypoint : Transform[];
var currentWaypoint : int = 0;
var waypointRadious : float = 1;

var waypointWaiting : boolean = false;
var waypointPauseLength : float = 3;
var waypointCurrPause : float = 0;

function Start () {

	agent = GetComponent.<NavMeshAgent>();

}

function Update () {

	StateMachine (target);

}

function StateMachine (stateTarget : Transform) {

	var targetRange = Vector3.Distance(transform.position, stateTarget.position);

	if (targetRange <= aggroRange) {
		State = 1;
	}
	else {
		State = 0;
	}

	if (State == 0) {
		Patrol ();
	}
	else if (State == 1){
		Watch (stateTarget);
	}

}

function Watch (watchTarget : Transform){

	agent.SetDestination (transform.position);
	agent.updateRotation = false;
	transform.LookAt (watchTarget);
	targetDir = watchTarget.position - transform.position;

	transform.rotation = Quaternion.LookRotation (Vector3.RotateTowards(transform.forward, targetDir, rotateSpeed * Time.deltaTime, 0.0));
	agent.speed = 0;
}

function Chase (chaseTarget : Transform){

	agent.SetDestination (chaseTarget.position);
	agent.updateRotation = true;
	agent.speed = 5;
	print ("Chaseing");
}

function Aggro (aggroTarget : Transform){

	if (Vector3.Distance(transform.position, aggroTarget.position) < aggroRange){
		Chase (aggroTarget);
		print ("Aggroed");
	}
	else {
		Chase (transform);
	}
}

function Patrol (){

	
	if(!waypointWaiting){
		Chase (patrolWaypoint[currentWaypoint]);
	
		//if (Vector3.Distance(transform.position, patrolWaypoint[currentWaypoint].position) == waypointRadious - 1){
		//	print ("yield");
		//	yield WaitForSeconds (1);
		//}

		if (Vector3.Distance(transform.position, patrolWaypoint[currentWaypoint].position) < waypointRadious){
			waypointWaiting = true;
			waypointCurrPause = 0.0;
		}
	}

	if(waypointWaiting){

		waypointCurrPause += Time.deltaTime;

		if(waypointCurrPause >= waypointPauseLength){
			currentWaypoint ++;
			waypointWaiting = false;
			print ("Patroling");
		}
	}
	
	if (currentWaypoint >= patrolWaypoint.Length) {
		currentWaypoint = 0;
	}

}