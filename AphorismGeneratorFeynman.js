 // This array holds the quotes that will be randomly displayed 
let quotes = [ 'The first principle is that you must not fool yourself and you are the easiest person to fool.',
'For a successful technology, reality must take precedence over public relations, for Nature cannot be fooled.',
'It doesn\'t matter how beautiful your theory is, it doesn\'t matter how smart you are. If it doesn\'t agree with experiment, it\'s wrong.',
'Nature uses only the longest threads to weave her patterns, so that each small piece of her fabric reveals the organization of the entire tapestry.',
'If I could explain it to the average person, it wouldn\'t have been worth the Nobel Prize.',
'Once I get on a puzzle, I can\'t get off.',
'Reality must take precedence over public relations, for nature cannot be fooled.',
'I was born not knowing and have had only a little time to change that here and there.',
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
    var random= Math.floor(Math.random() * 9) + 0;
    var bigSize = [
                   "url('beach-1852945_1280.jpg')",
                
                   "url('woman-591576_1280.jpg')",
                   "url('beach-2179183_1280.jpg')",
                   "url('beach-1236581_1280.jpg')",
                   "url('sunset-3726030_1280.jpg')",
                   "url('beach-6292382_1280.jpg')",
                   "url('to-stage-7345735_1280.jpg')",
                   "url('waves-3194377_1280.jpg')",
                   "url('beach-1852945_1280.jpg')",
                   
                   ];
    document.getElementById("random").style.backgroundImage=bigSize[random];
    document.getElementById("navigator").style.backgroundImage=bigSize[navigator];
  }

