window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//POST KNJIGE
const add = () => {
  

  let cartItems = document.querySelector('.grid--3-cols')
  let nameBook = document.querySelector('#nameOfBook').value
  let genreBook = document.querySelector('#genreOfBook').value
  let authorBook = document.querySelector('#authorOfBook').value
  let urlBook = document.querySelector('#urlOfBook').value
  let idBook = document.querySelectorAll('.sviautori-id')
  let authorBookCompare = document.querySelectorAll('.sviautori-ime')
/*
  authorBookCompare = authorBookCompare[0].innerText
  authorBookCompare = authorBookCompare.substring(8)

  idBook = idBook[0].innerText
  idBook = idBook.substring(4)
  let br=0;

  authorBookCompare = authorBookCompare[0].innerText
   authorBookCompare = authorBookCompare.substring(8)

  console.log(authorBookCompare)
*/

    

  for (let i = 0; i < 20; i++) {
    authorBookCompare = authorBookCompare[i].innerText
    authorBookCompare = authorBookCompare.substring(8)

      console.log(authorBookCompare)
      console.log(authorBook)
      console.log(idBook)

    if(authorBook === authorBookCompare) {
      idBook = idBook[i].innerText
      idBook = idBook.substring(4)

      console.log(authorBookCompare)
      console.log(authorBook)
      console.log(idBook)

      break;
    } else{
      console.log('Nema pisca u bazi')
      authorBookCompare = document.querySelectorAll('.sviautori-ime')
    }
  }

  fetch('https://ptf-web-dizajn-2022.azurewebsites.net/books', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            name: nameBook,
            genre: genreBook,
            image: urlBook,
            authorId: idBook
        })
    })
    .then(res => {
      console.log(`Status code: ${res.status}`);

      if (res.ok) {
        cartItems.innerHTML += `<div class="book">
          <img
            src="${urlBook}"
            class="book-img"/>
          <div class="book-content">
            <p class="book-title">Name: ${nameBook}</p>
            <p class="book-title">Author: ${authorBook}</p>
          </div>
        </div>`
          console.log('Uspjesno00')
      } else{
        console.log(idBook)
      }
      }) 
}

const addToStore = () => {

  let imee = document.querySelector('#ime').value
  console.log(imee)
  let pas = document.querySelector('#pass').value
  console.log(pas)

  if(imee === 'root' && pas === 'root'){
    console.log('uspjeh')
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }}else{
    console.log('neuspjeh')
  }
}

//GET SVE KNJIGE
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/books')
  .then(res => {
    if(!res.ok) {
        throw Error('Dogodila se greska.');
    } 
    return res.json();
})
  .then(data =>{
    let cartItems = document.querySelector('.grid--3-cols')
    data.forEach(element => {
      
cartItems.innerHTML += `<div class="book">
  <img
    src="${element.image}"
    class="book-img"/>
  <div class="book-content">
    <p class="book-title">Name: ${element.name}</p>
    <p class="book-title">Author: ${element.author.name}</p>
  </div>
</div>`
let mjesec;
  console.log('Uspjesno')
    })
})

// GET AUTHOR
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/authors')
  .then(res => {
    if(!res.ok) {
        throw Error('Dogodila se greska.');
    } 
    return res.json();
})
  .then(data =>{
    let cartItems = document.querySelector('.sviautori')
    data.forEach(element => {
      
cartItems.innerHTML += `<p class="sviautori-ime">Author: ${element.name}</p>
            <p class="sviautori-id">Id: ${element.id}</p>
            <br>
            <br>`
let mjesec;
  console.log('Uspjesno')
    })
})

// POST AUTHOR
const addAuthor = () => {
  


  let authorBook = document.querySelector('#addAuthor').value

  fetch('https://ptf-web-dizajn-2022.azurewebsites.net/authors', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            name: authorBook
        })
    })
    .then(res => {
      console.log(`Status code: ${res.status}`);
      }) 
}