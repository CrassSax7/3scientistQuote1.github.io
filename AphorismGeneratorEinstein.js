 // This array holds the quotes that will be randomly displayed 
let quotes = [ "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.", 
'If you can\'t explain it simply, you don\'t understand it well enough.',
'We cannot solve our problems with the same thinking we used when we created them.',
'Coincidence is God\'s way of remaining anonymous.',
'Look deep into nature, and then you will understand everything better.',
'A person who never made a mistake never tried anything new.',
'Strive not to be a success, but rather to be of value.',
'Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.',


    // Add as many quotes as you like...
    ]; 
                      
// This function selects a random quote from the array

function getRandomQuote() { 
    let randomIndex = Math.floor(Math.random() * quotes.length); 
    return quotes[randomIndex]; } 
    
    // This function updates the text of the #quote paragraph with a new random quote 
    
function displayNewQuote() { 
    let quote = getRandomQuote(); 
    document.getElementById('quote').textContent = quote; 
} 

// This event listener calls the displayNewQuote function each time the button is clicked 

document.getElementById('new-quote-button').addEventListener('click', displayNewQuote); 
document.getElementById('new-quote-button').addEventListener('click', randombg); 

// This line displays a quote when the page is first loaded 

window.onload = displayNewQuote;
window.onload = randombg;

function randombg(){
    var random= Math.floor(Math.random() * 12) + 0;
    var bigSize = [
                    "url('road-1072821_1280.jpg')",
                    "url('woodland-8479979_1280.jpg')",
                    "url('winter-8437400_1280.jpg')",
                    "url('forest-3394066_1280.jpg')",
                    "url('forest-1867975_1280.jpg')",
                    "url('forest-1950402_1280.jpg')",
                    "url('trees-3822149_1280.jpg')",
                    "url('trees-5605176_1280.jpg')",
                    "url('treetops-2991743_1280.jpg')",
                    "url('road-1072821_1280.jpg')",
                   "url('mountains-7427623_1280.jpg')",
                   "url('nature-3151869_1280.jpg')",
                   
                   
                   ];
    document.getElementById("random").style.backgroundImage=bigSize[random];
    document.getElementById("navigator").style.backgroundImage=bigSize[navigator];
  }

