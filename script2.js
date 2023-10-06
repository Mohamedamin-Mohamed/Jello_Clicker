/*
 * Files: Main.js                  
 * Author: Mohamedamin Mohamed          
 * Contact mohamedamin204080@gmail.com  
 * Created 09/26/2023                   
 * Modified: 09/29/2023                    
 * Description: This JavaScript file contains a set of functions and event listeners to manage and enhance the functionality of a web-based clicker game. The game involves clicking an image, and based on the click count, various features and messages are displayed in the HTML document. It also provides a way to restart the game, manipulate the DOM, and control scrolling behavior. The file is organized with proper documentation-style comments to explain the purpose and usage of each function.         
**/

/**
 * Updates the DOM and displays a message based on the click count.
 * @param {HTMLElement} div - The HTML element to be manipulated.
 * @param {number} counter - The current click count.
 */
export function domManipulation(div, counter) {
    switch (counter) {
      case 10:
        alert("Congratulations! You've unlocked Feature 1.");
        div.style.backgroundColor = "green";
        break;
      case 30:
        alert("Great progress! You've unlocked Feature 2.");
        div.style.backgroundColor = "green";
        break;
      case 60:
        alert("Almost there! You've unlocked Feature 3.");
        div.style.backgroundColor = "green";
        break;
      case 100:
        alert("Congratulations! You've unlocked all features.");
        div.style.backgroundColor = "green";
        break;
    }
  }
  
  /**
   * Displays a message and continues the game in a designated HTML element.
   * @param {HTMLElement} playDiv - The HTML element where the game continues.
   */
  export function continueGame(playDiv) {
    let textLabel = document.createElement("p");
    textLabel.textContent = "Playing for fun now, haah!";
    textLabel.style.textAlign = "center";
    textLabel.style.alignItems = "center";
    textLabel.classList.add("bouncing-text");
    playDiv.style.overflow = "hidden"; // Set overflow to hidden
    playDiv.appendChild(textLabel);
  }
  
  /**
   * Updates the click counter and displays the current click count.
   * @param {HTMLElement} text - The HTML element where the click count is displayed.
   * @param {number} counter - The current click count.
   * @param {HTMLElement} divPlay - The HTML element where game continuation messages are displayed.
   * @returns {number} The updated click count.
   */
  export function clickCounter(text, counter, divPlay) {
    text.style.display = "block";
    counter++;
    text.style.textAlign = "center";
    text.textContent = `${counter} click${counter === 1 ? '' : 's'}`;
  
    if (counter === 100) {
      let textLabel = document.createElement("p");
      textLabel.textContent = "All features unlocked!!!";
      textLabel.style.textAlign = "center";
      textLabel.style.alignItems = "center";
      divPlay.appendChild(textLabel);
      divPlay.style.backgroundColor = "green";
    }
  
    return counter;
  }
  
  /**
   * Restarts the game by reloading the page.
   */
  export function restartGame() {
    location.reload();
  }
  