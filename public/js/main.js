

// const myVM = (() => {
    
//     // get the user buttons and fire off an async DB query with Fetch
//     let userButtons = document.querySelectorAll( '.b-link'),
//     lightbox = document.querySelector('.lightbox');
//     //name = document.querySelector('.name');

    
    
    



//     function parseUserData(person) {// person in the database is a result//model, lightbox, loading animation, css, js magic
//         let targetDiv = document.querySelector(' .lb-content');
//             //targetImg = lightbox.querySelector('img');
            
//             let bioContent = `
            
//             <h4>Tags</h4>
//             `;
    
//             //console.log(bioContent);
//             targetDiv.innerHTML = bioContent;
//             //targetImg.src = person.imgsrc;
    

//         lightbox.classList.add('show-lb');


//     }

//     function getUserData(event) {
//         event.preventDefault();// kill the default a tag behaviour (dont navigate anywhere)
//         //debugger;

//         // find the image closet to the anchor tag and get its src property

//         //let imgSrc = this.previousElementSibling.getAttribute('src');
//         let url = `/users/${this.getAttribute('href')}`;//  /3 route in express. passing data dynamically

//         fetch(url)// go get the data fetch boy!
//           .then(res => res.json())// parse the json result into a plain object
//           .then(data => {
//               console.log("my data resutl is: ", data)

//               //data[0].imgsrc = imgSrc;


//               parseUserData(data[0]);
//           })
//           .catch((err) => {
//               console.log(err)
//           });
//     }

//     userButtons.forEach(button => button.addEventListener('click', getUserData));
//     lightbox.querySelector(' .close').addEventListener('click',  function() {
//         lightbox.classList.remove('show-lb');
//     });

// })();


