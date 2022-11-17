const firebaseConfig = {
      apiKey: "AIzaSyB6wj6Pd-Hl9odNgmZI8lqX45TJzMpXngU",
      authDomain: "kwitter-27859.firebaseapp.com",
      databaseURL: "https://kwitter-27859-default-rtdb.firebaseio.com",
      projectId: "kwitter-27859",
      storageBucket: "kwitter-27859.appspot.com",
      messagingSenderId: "51408295710",
      appId: "1:51408295710:web:de59ed2521274ab6ed1b0f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem ("username");
document.getElementById("welcome").innerHTML = "Welcome  " + user_name + "  !:)";

function roomadding(){
      rn = document.getElementById("room").value;
      firebase.database().ref("/").child(rn).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", rn );

      window.location = "kwitter_page.html";
      
} 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectroom(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectroom(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
      }