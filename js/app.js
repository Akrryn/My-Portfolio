gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

}


document.addEventListener('DOMContentLoaded', function(){
	var icon = document.getElementById("icon");
  
	if(localStorage.getItem("theme") == null){
		localStorage.setItem("theme", "dark");
	}
  
	let localData = localStorage.getItem("theme");
  
	if(localData == "dark"){
		icon.src = "sun.png";
		document.body.classList.remove("light-theme");
		document.querySelector('.logo img').src = "nicky.png";
		document.querySelector('.nav-open-btn img').src = "i.png"; // изменяем логотип
		
	} else {
		icon.src = "moon.png";
		document.body.classList.add("light-theme");
		document.querySelector('.logo img').src = "dark nicky.png"; 
		document.querySelector('.nav-open-btn img').src = "i2.png";// изменяем логотип
		
	}
  
	icon.onclick = function(){
		document.body.classList.toggle("light-theme");
		if(document.body.classList.contains("light-theme")){
			icon.src = "moon.png";
			localStorage.setItem("theme", "light");
			document.querySelector('.logo img').src = "dark nicky.png";
			document.querySelector('.nav-open-btn img').src = "i2.png"; // изменяем логотип
			
		} else {
			icon.src = "sun.png";
			localStorage.setItem("theme", "dark");
			document.querySelector('.logo img').src = "nicky.png";
			document.querySelector('.nav-open-btn img').src = "i.png"; // изменяем логотип
			
		}
	}
  });
 
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