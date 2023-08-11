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