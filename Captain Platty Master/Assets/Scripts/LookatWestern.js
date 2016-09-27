public var target: Transform;

public var negativeTarget : Vector3;

function Update () {

	negativeTarget = transform.position - target.position;

	transform.LookAt(transform.position + negativeTarget);

}