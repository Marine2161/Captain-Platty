import UnityEngine.SceneManagement;
/*var resetHealth: int;
resetHealth = gameScript.health;

var resetScore: int;
resetScore = gameScript.score;

var resetLevel: int;
resetLevel = gameScript.currlevel;*/

function OnGUI () {
    // Make a background box
    GUI.Box (Rect (400,60,110,200), "Captain Platty");

    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect (405,130,100,30), "New Game")) {
        /*gameScript.Health = resetHealth; 
        gameScript.Score = resetScore;
        gameScript.currLevel = resetLevel;*/
        SceneManager.LoadScene("Scene 1", LoadSceneMode.Single);
    }

    // Make the second button.
    if (GUI.Button (Rect (405,190,100,30), "Continue")) {
        //SceneManager.LoadScene("Scene 1", LoadSceneMode.Single);
    }

    if (GUI.Button (Rect (405,250,100,30), "Options")) {
        //Application.LoadLevel ("Options");
        //SceneManager.LoadScene("Scene 1", LoadSceneMode.Single);
    }

    if (GUI.Button (Rect (405,310,100,30), "Exit")) {
        //Application.Quit;
        //SceneManager.LoadScene("Scene 1", LoadSceneMode.Single);
    }
}