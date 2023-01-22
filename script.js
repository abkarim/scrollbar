/**
 * Generate animation time
 * @param {number} content_width width in px
 * @param {number} speed
 * @return {number} animation seconds
 */
function generateAnimationSeconds(content_width, speed) {
  // Multiply speed by 10
  let modifiedSpeed = parseInt(speed * 100);
  // Generate seconds
  let seconds = Math.round(content_width / modifiedSpeed);
  return seconds;
}

/**
 * Set property on document
 * @param {String} property name
 * @param {*} property value
 */
function setPropertyOnDocument(property_name, property_value) {
  document.documentElement.style.setProperty(property_name, property_value);
}

// Scrolling speed
const speed = 0.5;

// Get  wrapper
const scrollbarWrapper = document.querySelector(".scrollbar-wrapper");
// Generate seconds
const animationSeconds = generateAnimationSeconds(
  scrollbarWrapper.scrollWidth,
  speed
);

// Set animation time
setPropertyOnDocument("--scrollbar-animation-time", `${animationSeconds}s`);
// Set position
setPropertyOnDocument(
  "--scrollbar-move-left-end",
  `-${scrollbarWrapper.scrollWidth}px`
);
setPropertyOnDocument(
  "--scrollbar-move-right-start",
  `-${scrollbarWrapper.scrollWidth}px`
);
