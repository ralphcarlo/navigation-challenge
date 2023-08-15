const navLinks = document.querySelectorAll('.navigation li');
const bannerContent = document.querySelector('.content img');

const navigateTo = (e) => {
  e.preventDefault();

  const currentlyActiveLink = document.querySelector('.navigation li.active');

  if (currentlyActiveLink) {
    currentlyActiveLink.classList.remove('active');
  }

  // gets the closest ancestor of the anchor tag and adds the active class
  // instead of the anchor tag itself
  e.target.closest('li').classList.add('active');

  const spanElement = e.currentTarget.querySelector('span');

  if (spanElement) {
    const filename = spanElement.innerText.replace(/ /g, '').toLowerCase();
    bannerContent.setAttribute('src', `./assets/banners/${filename}.jpg`);
    bannerContent.setAttribute('alt', `${spanElement.textContent}`);
  }
}

navLinks.forEach(nav => {
  nav.addEventListener('click', navigateTo);
})

// slider will only work if CSS properties have been set accordingly based on screen size

const slider = document.querySelector('.navigation');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});