function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

const buttonLDorElement = document.getElementById('buttonLivreDor');

const inputLivreDor = document.getElementById('msgLiDor');

const mainElement = document.querySelector('#livredor');


buttonLDorElement.addEventListener('click', function () {
    const newParagrapheElement = document.createElement('p');
    mainElement.appendChild(newParagrapheElement);
    newParagrapheElement.innerHTML = '- ' + inputLivreDor.value;
    newParagrapheElement.style.padding = "20px";
<<<<<<< HEAD
});
=======
})

// START HAROLD - script for LOGIN BUTTON
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
// END HAROLD - script for LOGIN BUTTON
>>>>>>> master
