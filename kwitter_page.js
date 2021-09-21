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
user_name = localStorage.getItem("User Name");
room_name = localStorage.getItem("Room Name");
function send()
{
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name, 
      message:msg,
      like:0
});
document.getElementById("msg").innerHTML = ;
}