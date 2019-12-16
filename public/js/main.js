const myVM = (() => {
    debugger;
    // get the user buttons and fire off an async DB query with Fetch
    let userButtons = document.querySelector(".b-link"),
    lightbox = document.querySelector('.lightbox');
      //name = document.querySelector('.name');

       function GetPortfolioData(portfolio) {

          let targetDiv = document.querySelector(' .lb-content'),
          targetImg = lightbox.querySelector('img');
        
      
           let portfolioDescription = `
        <h4 class="el-name"> Element Name:<span>${portfolio.name}<span></h4>
        <p class="desc-js">${portfolio.description}</p>
        <p class="el-abb">${portfolio.tags}</p>
        
       `;
          
        

        console.log(portfolioDescription);
        targetDiv.innerHTML = portfolioDescription;
        targetImg.src = portfolio.imgsrc;
        lightbox.classList.add('show-lb');
        

        }
  



    function getProjectData(event) {
        event.preventDefault();// kill the default a tag behaviour (dont navigate anywhere)
        

        //let param = this.id.split("_")[0];

        
        let imgSrc = this.previousElementSibling.getAttribute('src');
        let url = `/portfolio/${this.getAttribute('href')}`;
        fetch(url)// go get the data fetch boy!
          .then(res => res.json())// parse the json result into a plain object
          .then(portfolio => {
              console.log("my data resutl is: ", portfolio);

              data[0].imgsrc = imgSrc;


              GetPortfolioData(portfolio[0]);
          })
          .catch((err) => {
              console.log(err)
          });
    }

   userButtons.forEach(button => button.addEventListener('click', getProjectData));
   

    lightbox.querySelector(' .close').addEventListener('click',  function() {
        lightbox.classList.remove('show-lb');
    });

})();