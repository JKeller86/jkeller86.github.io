// function submitted(){
// 	alert("Your workout has been logged! Great job!");
// }
firebase.auth().onAuthStateChanged(function(user) {
    window.signedInUser = user
})

function logout() {
    firebase.auth().signOut().then(function() {
        window.signedInUser = null
        console.info("Signed out.")
        window.location = "index.html"
    }).catch(console.error)
}

function goToApp() {
    window.location = "app.html"
}

function goToLogs() {
    window.location = "logs.html"
}

function goToSubmission() {
    window.location = "submission.html"
}

function getStarted() {
    window.location = "signup.html"
}


function hasClass(lengthCell, className) {
  if (lengthCell.classList)
    return lengthCell.classList.contains(className)
  else
    return !!lengthCell.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(lengthCell, className) {
  if (lengthCell.classList)
    lengthCell.classList.add(className)
  else if (!hasClass(lengthCell, className)) lengthCell.className += " " + className
}

function removeClass(lengthCell, className) {
  if (lengthCell.classList)
    lengthCell.classList.remove(className)
  else if (hasClass(lengthCell, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    lengthCell.className=lengthCell.className.replace(reg, ' ')
  }
}

function total(){
  var cls = document.getElementById("myLogTable").getElementsByTagName("td");
  var sum = 0;
  for (var i = 0; i < cls.length; i++){
  if(cls[i].className == "countable"){
    sum += isNaN(cls[i].innerHTML) ? 0 : parseInt(cls[i].innerHTML);
    }
  }
  alert('You have worked out for a total of ' + sum +  ' minutes!'); 
}