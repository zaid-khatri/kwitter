
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD7nJcChKaZrOuKmyM6BthyJC5qAPEMvcQ",
      authDomain: "kwitter-fb3ee.firebaseapp.com",
      databaseURL: "https://kwitter-fb3ee-default-rtdb.firebaseio.com",
      projectId: "kwitter-fb3ee",
      storageBucket: "kwitter-fb3ee.appspot.com",
      messagingSenderId: "862374422424",
      appId: "1:862374422424:web:f92247796c1a2a55696ded"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML  = "welcome" + user_name + "!" ;

      //Start code
function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("room name" + Room_names);
row="<div class='room_name' id= "+ Room_names+"  onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location("index.html");
}
