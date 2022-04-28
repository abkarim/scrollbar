/**
 * Generate animation time
 * 
 * @param {Number} text width in px
 * @param {Number} speed
 * 
 * @return {Number} animation seconds
 */
function generateAnimationSeconds(content_width, speed) {

    // Multiply speed by 10
    let modifiedSpeed = parseInt(speed * 100);

    // Generate seconds
    let seconds = Math.round( content_width / modifiedSpeed );

    // Return seconds
    return seconds;

}

/**
 * Set property on document
 * 
 * @param {String} property name
 * @param {*} property value
 */
function setPropertyOnDocument(property_name, property_value) {
    document.documentElement.style.setProperty( property_name, property_value);
}

// Animation property
const tickerSpeed = 0.5;
const tickerDirection = 'left';
const tickerDelay = 0;
const tickerOnHover = 'paused';

// Styling property
const containerBackgroundColor = 'black';
const itemTextColor = 'yellow';
const itemFontSize = '1.3rem';
const itemFontWeight = 500;
const itemLetterSpacing = '1px';
const itemLineHeight = '1.6em';
const itemPaddingTop = '10px';
const itemPaddingBottom = '10px';

// Message styling data
const messageContainerBackgroundColor = 'white';
const messageContainerPosition = 'right';
const messageTextColor = 'black';
const messageFontSize = '1rem';
const messageFontWeight = 800;
const messageLetterSpacing = '1px';
const messageLineHeight = '1.6em';
const messagePaddingTop = '10px';
const messagePaddingBottom = '10px';
const messagePaddingLeft = '10px';
const messagePaddingRight = '10px';


// Styling
setPropertyOnDocument( '--oqtave-custom-ticker-container-background-color', containerBackgroundColor );
// Item text color
setPropertyOnDocument( '--oqtave-custom-ticker-item-text-color', itemTextColor );
// Item font size
setPropertyOnDocument( '--oqtave-custom-ticker-item-font-size', itemFontSize );
// Item font weight
setPropertyOnDocument( '--oqtave-custom-ticker-item-font-weight', itemFontWeight );
// Item letter spacing
setPropertyOnDocument( '--oqtave-custom-ticker-item-letter-spacing', itemLetterSpacing );
// Item line height
setPropertyOnDocument( '--oqtave-custom-ticker-item-line-height', itemLineHeight );
// Item padding top
setPropertyOnDocument( '--oqtave-custom-ticker-item-padding-top', itemPaddingTop );
// Item padding bottom
setPropertyOnDocument( '--oqtave-custom-ticker-item-padding-bottom', itemPaddingBottom );

// Styling message
// Position
setPropertyOnDocument( '--oqtave-custom-ticker-message-section-position-left', messageContainerPosition == 'left' ? 0 : 'auto' );
setPropertyOnDocument( '--oqtave-custom-ticker-message-section-position-right', messageContainerPosition == 'right' ? 0 : 'auto' );
// Background color
setPropertyOnDocument( '--oqtave-custom-ticker-message-section-background-color', messageContainerBackgroundColor );
// Text
setPropertyOnDocument( '--oqtave-custom-ticker-message-text-color', messageTextColor );
setPropertyOnDocument( '--oqtave-custom-ticker-message-font-size', messageFontSize );
setPropertyOnDocument( '--oqtave-custom-ticker-message-font-weight', messageFontWeight );
// Spacing
setPropertyOnDocument( '--oqtave-custom-ticker-message-letter-spacing', messageLetterSpacing );
setPropertyOnDocument( '--oqtave-custom-ticker-message-line-height', messageLineHeight );
// Padding
setPropertyOnDocument( '--oqtave-custom-ticker-message-padding-top', messagePaddingTop );
setPropertyOnDocument( '--oqtave-custom-ticker-message-padding-bottom', messagePaddingBottom );
setPropertyOnDocument( '--oqtave-custom-ticker-message-padding-left', messagePaddingLeft );
setPropertyOnDocument( '--oqtave-custom-ticker-message-padding-right', messagePaddingRight );


// Get ticker wrapper
const oqtaveCustomTickerWrapper = document.querySelector('.oqtave-custom-ticker-wrapper');

// Generate seconds
const animationSeconds = generateAnimationSeconds( oqtaveCustomTickerWrapper.scrollWidth, tickerSpeed );

// Set ticker animation time 
setPropertyOnDocument( '--oqtave-custom-ticker-animation-time', `${animationSeconds}s`);
// Set ticker position
setPropertyOnDocument( '--oqtave-custom-ticker-move-left-end', `-${oqtaveCustomTickerWrapper.scrollWidth}px`);
setPropertyOnDocument( '--oqtave-custom-ticker-move-right-start', `-${oqtaveCustomTickerWrapper.scrollWidth}px`);
// Set ticker animation name
setPropertyOnDocument( '--oqtave-custom-ticker-animation-name', `oqtaveCustomTickerMove${tickerDirection.charAt(0).toUpperCase() + tickerDirection.slice(1)}`);
// Set ticker animation delay
setPropertyOnDocument( '--oqtave-custom-ticker-animation-delay', `${tickerDelay}s`);
// Set ticker start position
setPropertyOnDocument( '--oqtave-custom-ticker-start', `var(--oqtave-custom-ticker-move-${tickerDirection == 'right' ? 'right-start': 'left-start'})`);
// Set ticker on hover
setPropertyOnDocument( '--oqtave-custom-ticker-animation-on-hover', tickerOnHover );

// Play ticker animation
setPropertyOnDocument( '--oqtave-custom-ticker-animation-state', `playing`);


// ! Fetch data asc on right animation