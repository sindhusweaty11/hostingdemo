// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "Your api key here",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  
  function save() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var username = document.getElementById('username').value
    var say_something = document.getElementById('say_something').value
    var favourite_food = document.getElementById('favourite_food').value
   
  
    database.ref('users/' + username).set({
      email : email,
      password : password,
      username : username,
      say_something : say_something,
      favourite_food : favourite_food
    })
  
    alert('Saved')
  }
  
  function get() {
    var username = document.getElementById('username').value
    
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
      
      alert(data.email)
      console.log(Number(data.email)  * Number( data.say_something) * Number(data.password));
      console.log(data.favourite_food);
  
    })
    alert(data.email)
    
  }
  
  function update() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
  
    var updates = {
      email : email,
      password : password
    }
  
    database.ref('users/' + username).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var username = document.getElementById('username').value
  
    database.ref('users/' + username).remove()
  
    alert('deleted')
  }


  console.log("js is here")
let value;
document.getElementById("btnl").onclick = function(){
    console.log("Button pressed")
    value=document.getElementaryId("inp").value
    console.log(value)
    document.getElementById("heading").innerHTML=value
}

