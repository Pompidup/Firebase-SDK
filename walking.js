let config = {
    apiKey: "AIzaSyCZ6PO1fnfI94RqUSuFqfNE03wND-Z-4BU",
    authDomain: "walkingdead-wcs.firebaseapp.com",
    databaseURL: "https://walkingdead-wcs.firebaseio.com",
    projectId: "walkingdead-wcs",
    storageBucket: "walkingdead-wcs.appspot.com",
    messagingSenderId: "1096869159769",
    appId: "1:1096869159769:web:b1ed06239aa845d2"
};

firebase.initializeApp(config);

let database = firebase.database().ref();

var submitCharacter = function () {
    let lname = $("#charLName").val();
    let fname = $("#charFName").val();
    let pic = $("#charPic").val();

    database.push({
        "name": lname,
        "photo": pic,
        "prenom": fname
    });
};


database.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        let childData = childSnapshot.val();
        let x = document.createElement("LI");
        let y = document.createElement("LI");
        let z = document.createElement("img");
        z.setAttribute('src',childData.photo);
        let xnode = document.createTextNode(childData.name);
        let ynode = document.createTextNode(childData.prenom);

        x.appendChild(xnode);
        y.appendChild(ynode);
  
        document.getElementById("myList").appendChild(x);
        document.getElementById("myList").appendChild(y);
        document.getElementById("myList").appendChild(z);


    });
});

$(window).load(function () {
    $("#addCharForm").submit(submitCharacter);
});