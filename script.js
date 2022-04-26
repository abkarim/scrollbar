/**
 * Generate animation time
 * 
 * @param Number text width in px
 * @param Number speed
 * 
 * @return Number animation seconds
 */
function generateAnimationSeconds(content_width, speed) {

    // Multiply speed by 10
    let modifiedSpeed = parseInt(speed * 100);

    // Generate seconds
    let seconds = Math.round( content_width / modifiedSpeed );

    // Return seconds
    return seconds;

}

// Get ticker wrapper
const oqtaveCustomTickerWrapper = document.querySelector('.oqtave-custom-ticker-wrapper');

// Generate seconds
console.log( generateAnimationSeconds( oqtaveCustomTickerWrapper.scrollWidth, 1 ) );