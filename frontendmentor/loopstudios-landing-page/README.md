# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./design/solution/desktop-design.png)
![](./design/solution/mobile-design.png)

### Links

- Solution URL: [Github repo](https://github.com/vickbk/vickbk.github.io/tree/main/frontendmentor/loopstudios-landing-page)
- Live Site URL: [Hosted on github pages](https://vickbk.github.io/frontendmentor/loopstudios-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS

### What I learned

In this section I learnt to use CSS only to open and close modal with the help of checkbox and sibling selectors

```html
<input type="checkbox" id="nav-controller" class="sr-only" />
<label for="nav-controller">Hamburger Icon</label>
<nav class="mobile-nav">
  <ul>
    <li>First</li>
    <li>Second</li>
    <li>Other</li>
  </ul>
</nav>
```

```css
.mobile-nav {
  display: none;
}
#nav-controller:checked ~ .mobile-nav {
  display: block; // or whatever display you are using
}
```

The key here is to keep the checkbox ahead of the controlled element within the same parent since the sibling selector does not check previous sibling elements.

### Continued development

I am currently learning advanced css techniques and I want to know some more.

### Useful resources

- [Roadmap](https://roadmap.io) - Helped me get started with this journey and still leading me throughout the process
- [Kevin Powell](https://courses.kevinpowell.co/conquering-responsive-layouts) - These ressources got my steps into basics of modern responsive design :)
- [Frontend Mentor](https://www.frontendmentor.io) - Currently working with frontend mentor is upskilling me and I want to learn more here... Im not yet to leave
- [Coding with Robby](https://www.youtube.com/watch?v=ub5ngVE4yq0) - CSS-only Hamburger menus, modals, and toggles (no JavaScript!)

## Author

- Github - [@vickbk](https://github.com/vickbk)
- Frontend Mentor - [@vickbk](https://www.frontendmentor.io/profile/vickbk)
- Twitter - [@Vick_bk8](https://x.com/Vick_bk8)

## Acknowledgments

For this project I use most of the knowlegde I got from the frontend roadmap, frontendmentor for HTML & css tricks and technics, accessibility and various developement techniques...
