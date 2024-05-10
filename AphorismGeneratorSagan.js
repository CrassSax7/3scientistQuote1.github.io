 // This array holds the quotes that will be randomly displayed 
                    let quotes = [ "Somewhere, something incredible is waiting to be known.", 
                    "We are a way for the cosmos to know itself.", 
                    "Science is a way of thinking much more than it is a body of knowledge.", 
                    "For small creatures such as we the vastness is bearable only through love.", 
                    "We're made of star stuff. We are a way for the universe to know itself.", 
                    "Extraordinary claims require extraordinary evidence.", 
                    "In science it often happens that scientists say, 'You know that's a really good argument; my position is mistaken,' and then they would actually change their minds and you never hear that old view from them again.", 
                    "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.",
                    "The beauty of a living thing is not the atoms that go into it, but the way those atoms are put together.", 
                    "It is far better to grasp the universe as it really is than to persist in delusion, however satisfying and reassuring.", 
                    "We can judge our progress by the courage of our questions and the depth of our answers, our willingness to embrace what is true rather than what feels good.", 
                    "The universe is not required to be in perfect harmony with human ambition.", 
                    "One of the saddest lessons of history is this: If we\'ve been bamboozled long enough, we tend to reject any evidence of the bamboozle. We\'re no longer interested in finding out the truth.",
                    "Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives.", 
                    "Imagination will often carry us to worlds that never were, but without it we go nowhere.", 
                    "The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.", 
                    "Who are we? We find that we live on an insignificant planet of a humdrum star lost in a galaxy tucked away in some forgotten corner of a universe in which there are far more galaxies than people.",
                    "Books break the shackles of time \- proof that humans can work magic.", 
                    "It pays to keep an open mind, but not so open your brains fall out.", 
                    "Our species needs, and deserves, a citizenry with minds wide awake and a basic understanding of how the world works.",
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
    var random= Math.floor(Math.random() * 10) + 0;
    var bigSize = [
                   "url('earth-1756274_1280.webp')",
                   "url('eclipse-1492818_1280.webp')",
                   "url('galaxy-11098_1280.jpg')",
                   "url('milky-way-67504_1280.jpg')",
                   "url('stars-67616_1280.jpg')",
                   "url('stars-2643089_1280.webp')",
                   "url('universe-2742113_1280.jpg')",
                   "url('space-5720414_1280.jpg')",
                   "url('space-7709489_1280.jpg')",
                   "url('space-1522035_1280.jpg')",
                   ];
    document.getElementById("random").style.backgroundImage=bigSize[random];
    document.getElementById("navigator").style.backgroundImage=bigSize[navigator];
  }

