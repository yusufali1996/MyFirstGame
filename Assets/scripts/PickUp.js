var target : Transform;

function Update(){
}

function OnMouseDown(){
	this.transform.position = target.position;
	this.transform.parent = GameObject.Find("ThirdPersonController").transform;
	this.transform.parent = GameObject.Find("ThirdPersonController").transform;

	}

function OrMouseUp() {
	this.transform.parent = GameObject.Find("ThirdPersonController").transform;
	this.transform.parent = null;
	}