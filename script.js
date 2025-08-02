
const firebaseConfig = {
  apiKey: "AIzaSyBZYzA4H5gSEc3Y6TWUVHAJptiqG4LnunU",
  authDomain: "shopping-list-4e6fa.firebaseapp.com",
  databaseURL:
    "https://shopping-list-4e6fa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shopping-list-4e6fa",
  storageBucket: "shopping-list-4e6fa.firebasestorage.app",
  messagingSenderId: "298068373908",
  appId: "1:298068373908:web:edd575d6e07d0c04ecdf81",
};

firebase.initializeApp(firebaseConfig);

function add() {
  var item = document.getElementById("input").value;
  firebase.database().ref("/").child(item).update({
    purpose: "adding message",
  });
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("list").innerHTML="";
      snapshot.forEach(function (childSnapshot) {
        child_key = childSnapshot.key;
        row="<li>"+child_key+"</li>"
        document.getElementById("list").innerHTML+=row;
      });
    });
}

function delete_item() {
  var item = document.getElementById("input").value;
  firebase.database().ref("/").child(item).remove();
}
