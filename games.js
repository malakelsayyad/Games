import { Ui } from "./ui.js";
import { Details } from "./details.js";

export class Games {
   constructor() {
      this.getGames("mmorpg");

      document.querySelectorAll(".menu a").forEach((link) => {
         link.addEventListener("click", (e) => {
            document.querySelector(".menu .active").classList.remove("active");
            e.target.classList.add("active");
            this.getGames(e.target.dataset.category);
         });
      });

      this.ui = new Ui();
   }

   async getGames(category) {
      const loading = document.querySelector(".loading");
      loading.classList.remove("d-none");
      const options = {
         method: 'GET',
         headers: {
            'x-rapidapi-key': '2a344bc262msh55f45d23946eb4cp195846jsn7119bb6a0d3c',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
         }
      };

      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      const response = await api.json();
      
      this.ui.displayGames(response);
      this.getId();
      loading.classList.add("d-none");
   }
   getId() {
      document.querySelectorAll(".card").forEach((item) => {
         item.addEventListener("click", () => {
            const id = item.dataset.id;
            this.details(id);
            console.log(id)
         });
      });
   }
  details(id){
    let det= new Details(id);
    document.querySelector(".games").classList.add("d-none");
    document.querySelector(".details").classList.remove("d-none")
    
  }
}
new Games();
