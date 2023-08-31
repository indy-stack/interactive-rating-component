# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![mobile](./images/my-answer-(375px)-mobile.png)
![desktop](./images/my-answer-(1440px)-desktop.png)


### Links

- Solution URL: [solution URL](https://www.frontendmentor.io/solutions/interactive-rating-component-QfI1nk5Idx)
- Live Site URL: [Live site](https://indy-stack.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

During this challenge the layout was pretty easy. I usually use flexbox but this time I wanted to practice with grid and
the responsiveness was so much better. During previous challenges I had issues with the foooter staying at the bottom but with the grid it was easier since I could alocate a certain space to main and footer and it would be responsive across devices. 

Something else that I learned or practice a bit more was the javascript classList. I had to use it in order to dynamically remove and add classes for the rating buttons. If I was to select just one rating I would have to remove the ratings that were not active. Fore that I use this :

```js
cratingEls.forEach( el => {
    el.addEventListener("click", () => {
        selectedValue = el.textContent;
        ratingEls.forEach(btn => btn.classList.remove("active"));
        el.classList.add("active");
    });
});
```

Something that I found curious was the fact that the shadow color around the buttons and the icon was not included so I struggled a bit with the hsl/hsla values but I ended up creating a version as close as possible. What I did was use the opacity and alpha lebels of the given dark blue color.

```css
.rating-item {
  background: hsla(213, 19%, 60%, 0.1);
}
```

### Continued development

I want to continue improving and working on grid template so I get a hold of how it works, I'm still not confident yet. Also I want to improve my ability to manipulate the DOM in order to dynamically update the content of the wabpage. Since this is fundamental to frameworks such as REACT and ANGULAR I really want to get a hold of it before I move on.


### Useful resources

- [W3Schools](https://www.w3schools.com/) - This helped me when I was looking for a quick reference on Grid as well as javaScript event listeners.
- [CSS Tricks](https://www.css-tricks.com/snippets/css/complete-guide-grid/) - This is an amazing article and full guide on css grid concepts. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Indira Fraga](https://indy-stack.github.io/Personal-Portfolio/)
- Frontend Mentor - [@indy-stack](https://www.frontendmentor.io/profile/indy-stack)
- GitHub - [@indy-stack](https://github.com/indy-stack)

