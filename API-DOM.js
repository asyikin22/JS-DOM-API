

// Codes to switch image:

let myFoto = document.querySelector ('img')

myFoto.onclick = function () {
    let mySrc = myFoto.getAttribute('src');
    if (mySrc === 'IMAGES/mhha-logo.jpg') {
        myFoto.setAttribute ('src', 'IMAGES/mh.jpg')
    } else {
        myFoto.setAttribute ('src', 'IMAGES/mhha-logo.jpg');
    }
}

// Codes to personalize welcome message 

document.addEventListener("DOMContentLoaded", function() {
    let namaPengguna = window.prompt("Hi, what is your name?");
    if (namaPengguna) {
        document.getElementById("myHeading").textContent =`Take care of your mental health, ${namaPengguna}!`;
    }

    //codes to allow user to submit a new name
    document.getElementById("mySubmit").addEventListener("click", function() {
        let newName = window.prompt("Enter your new name:");
        if (newName !== null && newName !== "") {
            document.getElementById("myHeading").textContent = `Take care of your mental health, ${newName}!`;
        }
    });

});






