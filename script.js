

// function submitted(){
// 	alert("Your workout has been logged! Great job!");
// }

firebase.auth().onAuthStateChanged(function(user){
	window.signedInUser=user
})

function logout(){
	firebase.auth().signOut()
	.then(function(){
		window.signedInUser=null
		console.info("Signed out.")
		window.location="index.html"
	}).catch(console.error)
}

function goToApp(){
	window.location="app.html"
}

function goToLogs(){
	window.location="logs.html"
}

function goToSubmission(){
	window.location="submission.html"
}

function getStarted(){
	window.location="signup.html"
}