export class Ui {
    displayGames(data) {
       let gamesBox = ``;
       for (let i = 0; i < data.length; i++) {
          gamesBox += `
          <div class="col">
          <div data-id="${data[i].id}"  class="card h-100 bg-transparent" role="button" ">
             <div  class="card-body">
                
                   <img class="card-img-top object-fit-cover pb-2 h-100 position-relative" src="${data[i].thumbnail}" />
                      
                   <div class="d-flex justify-content-between">
                     <h3 class="h6 small">${data[i].title}</h3>
                     <span class="badge text-bg-primary p-2">Free</span>
                  </div>
                     
                   <p class="card-text small text-center text-white pb-5">
                      ${data[i].short_description.split(" ", 5)}
                   </p>
                  
                  
             </div>
    
                <footer class="card-footer large text-white  mt-5  d-flex justify-content-between ">
    
                <span class="badge badge-color">${data[i].genre}</span>
                 <span class="badge badge-color">${data[i].platform}</span>
    
             </footer>
          </div>
       </div>
          `;
       }
 
       document.getElementById("gameData").innerHTML = gamesBox;
    }
 
    displayDetails(data) {
       const content = `
       <div class="col-md-4">
       <img src="${data.thumbnail}" class="w-100" alt="image details" />
       </div>
      <div class="col-md-8">
        <h3>Title: ${data.title}</h3>
        <p>Category: <span class="badge text-bg-"> ${data.genre}</span> </p>
        <p>Platform: <span class="badge text-bg-"> ${data.platform}</span> </p>
        <p>Status: <span class="badge "> ${data.status}</span> </p>
        <p class="small">${data.description}</p>
       <a class="btn btn-outline-info" target="_blank" href="${data.game_url}">Show Game</a>
      </div>
       
       `;
 
       document.getElementById("detailsContent").innerHTML = content;
    }
 }
 

