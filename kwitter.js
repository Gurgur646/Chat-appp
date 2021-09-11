// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAk_gg7lHoMJdVlisKbiUdJ35idJDg-P9s",
    authDomain: "social-e5855.firebaseapp.com",
    databaseURL: "https://social-e5855-default-rtdb.firebaseio.com",
    projectId: "social-e5855",
    storageBucket: "social-e5855.appspot.com",
    messagingSenderId: "671543009162",
    appId: "1:671543009162:web:a881fdddf02bf05c08b273"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}