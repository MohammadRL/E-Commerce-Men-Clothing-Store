let catTitleList=document.querySelector(".selected-category"),catList=document.querySelector("ul.categories-list"),catItems=document.querySelectorAll("ul.categories-list >li"),catTitle=document.querySelector(".selected-category>h3.title"),category=document.querySelectorAll(".category"),overlay=(catTitleList&&(catTitleList.onclick=()=>{catList.classList.toggle("active")}),catItems.forEach(e=>{e.addEventListener("click",t=>{if(t.currentTarget.classList.contains("active"))return null;catItems.forEach(e=>{e.classList.remove("active")}),t.currentTarget.classList.add("active"),t.currentTarget.parentElement.classList.remove("active"),catTitle.textContent=t.currentTarget.textContent,category.forEach(e=>{e.classList.contains("active")&&e.classList.remove("active"),e.classList.contains(t.currentTarget.textContent.toLowerCase())&&e.classList.add("active")})})}),document.querySelector(".overlay")),searchIcon=document.querySelector("a.search"),searchBox=document.querySelector(".search-box .container"),closeBtn=document.querySelector(".search-box .container span.close"),burgerIcon=(searchIcon.onclick=e=>{e.preventDefault(),overlay.classList.add("active"),searchBox.classList.add("active"),searchBox.children[1].focus()},closeBtn.onclick=()=>{searchBox.classList.remove("active"),overlay.classList.remove("active")},document.querySelector(".burger-icon")),links=document.querySelectorAll("ul.links"),productsMenu=document.querySelector("a.prods-menu"),products=document.querySelector("a.prods-menu +.products-menu .products"),specials=document.querySelector("a.spec-menu"),specialsMenu=document.querySelector("a.spec-menu + .specials"),filterBtn=(burgerIcon.onclick=e=>{links.forEach(e=>{e.classList.toggle("active")})},productsMenu.onclick=e=>{e.preventDefault(),products.classList.contains("active")?(products.classList.remove("active"),links[1].classList.remove("toggled")):(products.classList.add("active"),links[1].classList.add("toggled"))},specials.onclick=e=>{e.preventDefault(),specialsMenu.classList.contains("active")?specialsMenu.classList.remove("active"):specialsMenu.classList.add("active")},document.querySelector(".cat-page-content .wrapper >i.filter-trigger")),filterMenu=document.querySelector(".cat-page-content .sidebar"),closeFilter=document.querySelector(".cat-page-content .sidebar >i.filter-close");filterBtn&&(filterBtn.onclick=()=>{filterMenu.classList.add("active")}),closeFilter&&(closeFilter.onclick=()=>{filterMenu.classList.remove("active")});const arrivalsSwiper=new Swiper(".arrivals-swiper",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{575:{slidesPerView:2,slidesPerGroup:1,centeredSlides:!1},768:{slidesPerView:3,slidesPerGroup:3,centeredSlides:!1},992:{slidesPerView:4,slidesPerGroup:4,centeredSlides:!1}}}),swiper=new Swiper(".landing",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},effect:"fade"}),thumbsSwiber=new Swiper(".thumb-imgs",{direction:"vertical",spaceBetween:15,slidesPerView:1,freeMode:!0,watchSlidesProgrees:!0}),mainImgSwiber=new Swiper(".main-image",{loop:!0,autoHeight:!0,spaceBetween:15,thumbs:{swiper:thumbsSwiber}});let productAboutList=document.querySelectorAll(".product-about .container >ul >li a"),contents=document.querySelectorAll(".product-about .content"),popBtns=(productAboutList.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),productAboutList.forEach(e=>{e.classList.contains("active")&&e.classList.remove("active")}),t.classList.add("active"),contents.forEach(e=>{e.classList.contains("active")&&e.classList.remove("active")}),contents.forEach(e=>{t.dataset.id===e.id&&e.classList.add("active")})})}),document.querySelectorAll(".pop-btn")),popups=document.querySelectorAll(".popup"),closePops=document.querySelectorAll(".popup .pop-close");function showHidePopup(e,c,t){e.forEach(t=>{t.onclick=e=>{e.preventDefault(),overlay.classList.add("active"),c.forEach(e=>{e.classList.contains(t.id)&&e.classList.add("active")})}}),closePops.forEach(t=>{t.onclick=e=>{t.parentElement.classList.remove("active"),overlay.classList.remove("active")}})}showHidePopup(popBtns,popups,closePops);
//# sourceMappingURL=main.js.map
