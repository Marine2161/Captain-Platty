var agent : NavMeshAgent;
var target : Transform;
var targetList : GameObject[];
var rotateSpeed : float;
var defaultSpeed : float = 5;
//Agro Var
var aggroRange : float = 20;
var secondsCount : float;
//Patrol Var
var patrolWaypoint : Transform[];
var currentWaypoint : int = 0;
var waypointRadious : float = 1; 
var isWorking : boolean = false;
//State Machine Var
//0 = patrol, 1 = chase, 2 = strafe, 3 = flee
var State : int = 0;
var health : float = 100.0;

function Start () {
	
	agent = GetComponent.<NavMeshAgent>();
	//RandomTarget();
}

function Update () {

/*	if (target == transform){
		RandomTarget();
	}
	if (target == null){
		RandomTarget();
	}*/	
	StateMachine(target);
	//agent.updateRotation = true;
}

function RandomTarget (){
	
var targetList = GameObject.FindGameObjectsWithTag("Player");

do{	target = targetList[Random.Range(0, targetList.length)].transform;
} while (target == transform.gameObject);

}

function Chase (chaseTarget : Transform){

	agent.SetDestination (chaseTarget.position);
	agent.updateRotation = true;
	//agent.speed = 5;
	print ("Chaseing");
}

function Watch (watchTarget : Transform){

	agent.SetDestination (transform.position);
	agent.updateRotation = false;
	transform.LookAt (watchTarget);
	targetDir = watchTarget.position - transform.position;

	transform.rotation = Quaternion.LookRotation (Vector3.RotateTowards(transform.forward, targetDir, rotateSpeed * Time.deltaTime, 0.0));
	//agent.speed = 0;


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
	if (currentWaypoint == patrolWaypoint.Length){
		Working ();
	}
}

function Working (){
	secondsCount += Time.deltaTime;
	
	if (Time.deltaTime >= 10){
		//working animation

	}
}

function StateMachine (stateTarget : Transform){
//0 = patrol, 1 = chase, 2 = strafe, 3 = flee
var targetRange = Vector3.Distance(transform.position, stateTarget.position);
	//Conditions

	if (targetRange <= aggroRange){
		//Watch
		State = 1;
	}
		else {
			//Patrol
			State = 0;
		}
	//Behaviors
	if (State == 0){
		Patrol ();
	}
		else if (State == 1){
			Watch (stateTarget);
		}
}
