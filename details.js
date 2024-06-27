import { Ui } from "./ui.js";

export class Details {
    constructor(id) {
        this.ui = new Ui();

            document.getElementById("btnClose").addEventListener("click", () => {
            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
        });

        this.getDetails(id);
    }

   async  getDetails(id) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '2a344bc262msh55f45d23946eb4cp195846jsn7119bb6a0d3c',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
  
        let api2 = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        let secondResponse=  await api2.json();
        console.log(secondResponse);    
        this.ui.displayDetails(secondResponse);
        loading.classList.add("d-none");
          
        }
    
}
