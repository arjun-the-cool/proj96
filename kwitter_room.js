var firebaseConfig = {
  apiKey: "AIzaSyCWswHnFt2U4zKvQ51ZQsX-QOMBUi4tkw0",
  authDomain: "lets-chat-web-app-f89fb.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-f89fb-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-f89fb",
  storageBucket: "lets-chat-web-app-f89fb.appspot.com",
  messagingSenderId: "292664086771",
  appId: "1:292664086771:web:5fbeb7fc2680a602462786"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  username= localStorage.getItem("User Name"); 
  document.getElementById("username").innerHTML= "Welcome " + username + "!";
  function addRoom()
  {
    roomname = document.getElementById("room").value;
    localStorage.setItem("Room Name", roomname);
    firebase.database().ref("/").child(roomname).update({
      purpose: "adding room name"
    });
    window.location = 'kwitter_page.html'
  }
  function getData()
  {
    firebase.database().ref("/").on('value', function(snapshot) 
    {
      document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
      {
        childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function logout()
{
  localStorage.removeItem("User Name");
  localStorage.removeItem("Room Name");
  window.location = 'kwitter.html'
}