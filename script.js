'use strict';



// add Event on multiple elment

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



// PRELOADING

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  document.body.classList.remove("active");
});



// MOBILE NAV TOGGLE

const [navTogglers, navLinks, navbar, overlay] = [
  document.querySelectorAll("[data-nav-toggler]"),
  document.querySelectorAll("[data-nav-link]"),
  document.querySelector("[data-navbar]"),
  document.querySelector("[data-overlay]")
];

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElements(navLinks, "click", closeNav);



// HEADER

const header = document.querySelector("[data-header]");

const activeElementOnScroll = function () {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);



/**
 * TEXT ANIMATION EFFECT FOR HERO SECTION
 */

const letterBoxes = document.querySelectorAll("[data-letter-effect]");

let activeLetterBoxIndex = 0;
let lastActiveLetterBoxIndex = 0;
let totalLetterBoxDelay = 0;

const setLetterEffect = function () {

  // loop through all letter boxes
  for (let i = 0; i < letterBoxes.length; i++) {
    // set initial animation delay
    let letterAnimationDelay = 0;

    // get all character from the current letter box
    const letters = letterBoxes[i].textContent.trim();
    // remove all character from the current letter box
    letterBoxes[i].textContent = "";

    // loop through all letters
    for (let j = 0; j < letters.length; j++) {

      // create a span
      const span = document.createElement("span");

      // set animation delay on span
      span.style.animationDelay = `${letterAnimationDelay}s`;

      // set the "in" class on the span, if current letter box is active
      // otherwise class is "out"
      if (i === activeLetterBoxIndex) {
        span.classList.add("in");
      } else {
        span.classList.add("out");
      }

      // pass current letter into span
      span.textContent = letters[j];

      // add space class on span, when current letter contain space
      if (letters[j] === " ") span.classList.add("space");

      // pass the span on current letter box
      letterBoxes[i].appendChild(span);

      // skip letterAnimationDelay when loop is in the last index
      if (j >= letters.length - 1) break;
      // otherwise update
      letterAnimationDelay += 0.05;

    }

    // get total delay of active letter box
    if (i === activeLetterBoxIndex) {
      totalLetterBoxDelay = Number(letterAnimationDelay.toFixed(2));
    }

    // add active class on last active letter box
    if (i === lastActiveLetterBoxIndex) {
      letterBoxes[i].classList.add("active");
    } else {
      letterBoxes[i].classList.remove("active");
    }

  }

  setTimeout(function () {
    lastActiveLetterBoxIndex = activeLetterBoxIndex;

    // update activeLetterBoxIndex based on total letter boxes
    activeLetterBoxIndex >= letterBoxes.length - 1 ? activeLetterBoxIndex = 0 : activeLetterBoxIndex++;

    setLetterEffect();
  }, (totalLetterBoxDelay * 1000) + 3000);

}

// call the letter effect function after window loaded
window.addEventListener("load", setLetterEffect);



/**
 * BACK TO TOP BUTTON
 */

const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  const bodyHeight = document.body.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollEndPos = bodyHeight - windowHeight;
  const totalScrollPercent = (window.scrollY / scrollEndPos) * 100;

  backTopBtn.textContent = `${totalScrollPercent.toFixed(0)}%`;

  // visible back top btn when scrolled 5% of the page
  if (totalScrollPercent > 5) {
    backTopBtn.classList.add("show");
  } else {
    backTopBtn.classList.remove("show");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0; i < revealElements.length; i++) {
    const elementIsInScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15;

    if (elementIsInScreen) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);

scrollReveal();



/**
 * CUSTOM CURSOR
 */

const cursor = document.querySelector("[data-cursor]");
const anchorElements = document.querySelectorAll("a");
const buttons = document.querySelectorAll("button");

// change cursorElement position based on cursor move
document.body.addEventListener("mousemove", function (event) {
  setTimeout(function () {
    cursor.style.top = `${event.clientY}px`;
    cursor.style.left = `${event.clientX}px`;
  }, 100);
});

// add cursor hoverd class
const hoverActive = function () { cursor.classList.add("hovered"); }

// remove cursor hovered class
const hoverDeactive = function () { cursor.classList.remove("hovered"); }

// add hover effect on cursor, when hover on any button or hyperlink
addEventOnElements(anchorElements, "mouseover", hoverActive);
addEventOnElements(anchorElements, "mouseout", hoverDeactive);
addEventOnElements(buttons, "mouseover", hoverActive);
addEventOnElements(buttons, "mouseout", hoverDeactive);

// add disabled class on cursorElement, when mouse out of body
document.body.addEventListener("mouseout", function () {
  cursor.classList.add("disabled");
});

// remove diabled class on cursorElement, when mouse in the body
document.body.addEventListener("mouseover", function () {
  cursor.classList.remove("disabled");
});



document.addEventListener('DOMContentLoaded', function() {
  var icon = document.getElementById("icon");
  var themeImage1 = document.getElementById("theme-image1");
  var themeImage2 = document.getElementById("theme-image2");
  var themeImage3 = document.getElementById("theme-image3");
  var themeImage4 = document.getElementById("theme-image4");
  var footerLogo = document.getElementById("footer-logo");

  if (localStorage.getItem("theme") == null) {
      localStorage.setItem("theme", "dark");
  }

  let localData = localStorage.getItem("theme");

  function setThemeImages(isLight) {
      if (isLight) {
          themeImage1.src = "d2.png"; // для светлой темы
          themeImage2.src = "d1.png"; // для светлой темы
          themeImage3.src = "d2(1).png"; // для светлой темы
          themeImage4.src = "d1(1).png"; // для светлой темы
          footerLogo.src = "dark nn.png"; // для светлой темы
          // Добавьте аналогичные строки для других изображений
      } else {
          themeImage1.src = "dli1.png"; // для темной темы
          themeImage2.src = "dli2.png"; // для темной темы
          themeImage3.src = "dli1(1).png"; // для темной темы
          themeImage4.src = "dli2(1).png"; // для темной темы
          footerLogo.src = "nn.png"; // для темной темы
          // Добавьте аналогичные строки для других изображений
      }
  }

    if(localData == "dark"){
        icon.src = "sun.png";
        document.body.classList.remove("light-theme");
        document.querySelector('.logo img').src = "nicky.png";
        document.querySelector('.nav-open-btn img').src = "i.png"; // изменяем логотип
        document.querySelector('.hero-banner').src = "kkkk.png"; // изменяем изображение hero-banner
        document.querySelector('.shape').src = "line2.png";
        document.querySelector('.btn-icon').src = "dli1.png";
    } else {
        icon.src = "moon.png";
        document.body.classList.add("light-theme");
        document.querySelector('.logo img').src = "dark nicky.png"; 
        document.querySelector('.nav-open-btn img').src = "i2.png";// изменяем логотип
        document.querySelector('.hero-banner').src = "dark nn.png"; // изменяем изображение hero-banner для светлой темы
        document.querySelector('.shape').src = "line.png";
        document.querySelector('.btn-icon').src = "d2.png";
      }

    icon.onclick = function(){
        document.body.classList.toggle("light-theme");
        if(document.body.classList.contains("light-theme")){
            icon.src = "moon.png";
            localStorage.setItem("theme", "light");
            document.querySelector('.logo img').src = "dark nicky.png";
            document.querySelector('.nav-open-btn img').src = "i2.png"; // изменяем логотип
            document.querySelector('.hero-banner').src = "dark nn.png"; // изменяем изображение hero-banner для светлой темы
            document.querySelector('.shape').src = "line.png";
            document.querySelector('.btn-icon').src = "d2.png";
        
          } else {
            icon.src = "sun.png";
            localStorage.setItem("theme", "dark");
            document.querySelector('.logo img').src = "nicky.png";
            document.querySelector('.nav-open-btn img').src = "i.png"; // изменяем логотип
            document.querySelector('.hero-banner').src = "kkkk.png"; // изменяем изображение hero-banner для темной темы
            document.querySelector('.shape').src = "line2.png";
            document.querySelector('.btn-icon').src = "dli1.png";
       
          }
    }

  
    document.addEventListener('DOMContentLoaded', function(){
      // Находим кнопки
      var section1Btn = document.querySelector('.section-btn[data-section="section1"]');
      var section2Btn = document.querySelector('.section-btn[data-section="section2"]');
      var section3Btn = document.querySelector('.section-btn[data-section="section3"]');
      
      // Находим изображения
      var galleryItem1 = document.querySelector('.gallery__item[src="img/img/1.jpg"]');
      var galleryItem2 = document.querySelector('.gallery__item[src="img/img/2.jpg"]');
    var galleryItem3 = document.querySelector('.gallery__item[src="img/img/3.jpg"]');
    var galleryItem4 = document.querySelector('.gallery__item[src="img/img/4.jpg"]');
    var galleryItem5 = document.querySelector('.gallery__item[src="img/img/5.jpg"]');
    
      
      // Сохраняем исходные src и alt для возврата
      var originalSrc1 = "img/img/1.jpg";
      var originalSrc2 = "img/img/2.jpg";
    var originalSrc3 = "img/img/3.jpg";
    var originalSrc4 = "img/img/4.jpg";
    var originalSrc5 = "img/img/5.jpg";
    
  
      var originalAlt1 = galleryItem1.alt;
      var originalAlt2 = galleryItem2.alt;
    var originalAlt3 = galleryItem3.alt;
    var originalAlt4 = galleryItem4.alt;
    var originalAlt5 = galleryItem5.alt;
    
  
      // Выводим найденные элементы в консоль для проверки
      console.log(section1Btn);
      console.log(section2Btn);
      console.log(section3Btn);
      console.log(galleryItem1);
      console.log(galleryItem2);
    console.log(galleryItem3);
    console.log(galleryItem4);
    console.log(galleryItem5);
  
  
      // Обработчик события для клика по кнопке section2
      section2Btn.addEventListener('click', function() {
          if (galleryItem1) {
              galleryItem1.src = "img/img/1(1).png";
              galleryItem1.alt = "New Alt 1";
          }
          if (galleryItem2) {
              galleryItem2.src = "img/img/4(1).png";
              galleryItem2.alt = "New Alt 2";
          }
      if (galleryItem3) {
              galleryItem3.src = "img/img/5(1).jpg";
              galleryItem3.alt = "New Alt 3";
          }
      if (galleryItem4) {
              galleryItem4.src = "img/img/2(1).png";
              galleryItem4.alt = "New Alt 4";
          }
      if (galleryItem5) {
              galleryItem5.src = "img/img/3(1).png";
              galleryItem5.alt = "New Alt 5";
          }
      });
  
      // Обработчик события для клика по кнопке section3
      section3Btn.addEventListener('click', function() {
          if (galleryItem1) {
              galleryItem1.src = "img/img/1(2).png";
              galleryItem1.alt = "New Alt 1 (2)";
          }
          if (galleryItem2) {
              galleryItem2.src = "img/img/2(2).png";
              galleryItem2.alt = "New Alt 2 (2)";
          }
      if (galleryItem3) {
              galleryItem3.src = "img/img/3(2).png";
              galleryItem3.alt = "New Alt 3 (2)";
          }
      if (galleryItem4) {
              galleryItem4.src = "img/img/4(2).png";
              galleryItem4.alt = "New Alt 4 (2)";
          }
      if (galleryItem5) {
              galleryItem5.src = "img/img/5(2).png";
              galleryItem5.alt = "New Alt 5 (2)";
          }
      });
  
      // Обработчик события для клика по кнопке section1
      section1Btn.addEventListener('click', function() {
          if (galleryItem1) {
              galleryItem1.src = originalSrc1;
              galleryItem1.alt = originalAlt1;
          }
          if (galleryItem2) {
              galleryItem2.src = originalSrc2;
              galleryItem2.alt = originalAlt2;
          }
      if (galleryItem3) {
              galleryItem3.src = originalSrc3;
              galleryItem3.alt = originalAlt3;
          }
      if (galleryItem4) {
              galleryItem4.src = originalSrc4;
              galleryItem4.alt = originalAlt4;
          }
      if (galleryItem5) {
              galleryItem5.src = originalSrc5;
              galleryItem5.alt = originalAlt5;
          }
      });
  });
      });





  