import { clickCounter, restartGame, domManipulation, continueGame} from './script.js';

/*
 * Files: Main.js                  
 * Author: Mohamedamin Mohamed          
 * Contact mohamedamin204080@gmail.com  
 * Created 09/26/2023                   
 * Modified: 09/29/2023                    
 * Description: File is an event handling script for the web-based clicker game. It handles the initialization of the game, tracks the number of clicks, and triggers various actions based on the click count. The script also manages alerts, DOM manipulation, and user interactions for restarting the game.             *
 */

/**
 * Function to initialize and handle game events when the DOM is fully loaded.
 */
document.addEventListener("DOMContentLoaded", ()=>{
  
let counter = 0;//will store the number of click counts
let imageClick = document.getElementById("imageClicker");
let text = document.getElementById("text");
let container = document.getElementsByClassName("column1");
let restartGameClick = document.getElementById("div5");
let divPlay = document.getElementById("div7");
let alertShown = false;
  
  /**
   * Event listener for click events on the image.
   */
imageClick.addEventListener("click", ()=>{
  // Update the click count and related elements.
  counter = clickCounter(text, counter, divPlay);
   // Check the click count and perform actions accordingly.
  switch(counter){
    case 10:
      domManipulation(document.getElementById("div1"), counter);
      break;
    case 30:
       domManipulation(document.getElementById("div2"), counter);
      break;
    case 60:
       domManipulation(document.getElementById("div3"), counter);
      break;
    case 100:
       domManipulation(document.getElementById("div4"), counter);
      container[0].style.backgroundColor = "green";
      
      // Show a confirmation dialog after a delay.
      setTimeout(() => {
          const playAgain = confirm("You unlocked all points, do you want to play again!!!");
          if (playAgain) {
            restartGame();
          }
        else{
          // Get the playDiv element and continue the game.
          let playDiv = document.getElementById("div8");
          continueGame(playDiv);
        }
        }, 2000);
      break;
  }
});
  
  /**
   * Event listener for mouseover on the image.
   */
   imageClicker.addEventListener("mouseover", () => {
     // Show an alert message only once.
      if (!alertShown) {
        setTimeout(() => {
          alert("Click to unlock features. Reach 100 clicks to win the game!");
          alertShown = true;
        }, 1000);
      }
    });
  
   /**
   * Event listener for the restart game button.
   */
  restartGameClick.addEventListener("click", ()=>{
    restartGame();
  });
});
