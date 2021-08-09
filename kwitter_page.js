//YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();