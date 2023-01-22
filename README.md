# Text scrolling

Scroll elements with css animation. JavaScript is only used for initiate the animation. This scrollbar works without affecting the site performance. Click on the **star** to reach more people

## [Demo](https://karim-scrollbar.netlify.app/)

## Change text direction

Change animation name **scrollbarMoveLeft** to **scrollbarMoveRight** in style.css

```css
/* Wrapper */
.scrollbar-container .scrollbar-wrapper {
  //...
  animation: scrollbarMoveLeft var(--scrollbar-animation-time) infinite linear;
  // ...
}
```

TO

```css
/* Wrapper */
.scrollbar-container .scrollbar-wrapper {
  //...
  animation: scrollbarMoveRight var(--scrollbar-animation-time) infinite linear;
  // ...
}
```

## Change heading position

Flip values of left and right in style.css

```css
/* Message section */
.scrollbar-container .scrollbar-message-section {
  //...
  left: 0;
  right: auto;
  // ...
}
```

TO

```css
/* Message section */
.scrollbar-container .scrollbar-message-section {
  //...
  left: auto;
  right: 0;
  // ...
}
```

## Change speed

change speed in `script.js` file

```javascript
// Scrolling speed
const speed = 0.5;
```

## Handle hover state

what will happen when user hover over a scrolling item

**Paused**

```css
/* 
* What happen on hover item
*/
.scrollbar-container .scrollbar-wrapper:hover {
  animation-play-state: paused;
}
```

**Running**

```css
/* 
* What happen on hover item
*/
.scrollbar-container .scrollbar-wrapper:hover {
  animation-play-state: running;
}
```
