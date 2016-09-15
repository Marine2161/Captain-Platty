import System.IO;

var trackMe : Transform;

var trackPosition : Vector3[];
var index : int = 0;
var frames : int = 1000;

var fileName : String = "track01.txt";

function Start () {
	
	trackPosition = new Vector3[frames];

}

function Update (){

	Path(new Color(0,1,0));
	TrackFile("track01.txt", new Color(1,0,0));
	TrackFile("track02.txt", new Color(0,0,1));
	TrackFile("track03.txt", new Color(1,1,0));
	TrackFile("track04.txt", new Color(1,0,1));

	if (Input.GetKeyDown(KeyCode.E)){
		Save(fileName);
	}


}

function FixedUpdate () {
	
	if(Input.GetKey(KeyCode.Q)){
		Rewind();
	}
	
	else{
		Track();
	}
}

function Track (){

	trackPosition[index] = trackMe.position;

	index = (index+1) % trackPosition.Length;
	
}

function Rewind (){

	trackPosition[index] = new Vector3(0,0,0);
	
	index --;

	index = (trackPosition.Length + index) % trackPosition.Length;

	trackMe.position = trackPosition[index];

}

function Path (pathColor : Color){

	for (i=0; i<(trackPosition.Length - 1); i++){
		Debug.DrawLine(trackPosition[i], trackPosition[i+1], pathColor);
	}


}

function Save (writefile : String){

	//Create an instance of streamwriter to wright text to a file
	var SW = new StreamWriter(writefile);

	var myString = "";

	for (i=0; i<(trackPosition.Length); i++){
		yield WaitForSeconds (0.5);
		myString = myString + trackPosition[i].ToString("F3") + System.Environment.NewLine;
	}

	SW.Write(myString);

	SW.Close();

	print ("File Saved" + writefile);
}

function TrackFile (readFile : String, pathColor : Color){

	var SR = new StreamReader(readFile);

	if (SR == null){
		Debug.Log(readFile + "not found");
	}

	else{
		var newPath : Vector3[] = new Vector3[frames];
	
		for (i=0; i<(newPath.Length); i++){
			var txt;

			txt = SR.ReadLine();
			
			newPath[i] = Vector3FromString(txt);
		}
	}

	for (i=0; i<(newPath.Length-1); i++){
		Debug.DrawLine(newPath[i], newPath[i+1], pathColor);
	}

	SR.Close();

}

//Vector3fromString
//A useful function to convert back from a given Vector3.toString() output.  Passes back a Unity Vector3 object.
function Vector3FromString(Vector3string) {

    //get first number (x)
    startChar = 1;
    endChar = Vector3string.IndexOf(",");
    lastEnd = endChar;
    strLength = endChar-startChar;
    returnx = System.Convert.ToDecimal(Vector3string.Substring(startChar,strLength));

    //get second number (y)
    startChar = lastEnd+2;
    endChar = Vector3string.IndexOf(",", startChar);
    lastEnd = endChar;
    strLength = endChar-startChar;
    returny = System.Convert.ToDecimal(Vector3string.Substring(startChar,strLength));

    //get third number (z)
    startChar = lastEnd+2;
    endChar = Vector3string.IndexOf(")", startChar);
    lastEnd = endChar;
    strLength = endChar-startChar;
    returnz = System.Convert.ToDecimal(Vector3string.Substring(startChar,strLength));

    //build a new vector3 object using the values we've parsed
    returnvector3 = Vector3(returnx,returny,returnz);

    //pass back a vector3 type
    return returnvector3;
}
