const initSearchWidget = () => {
  const search = document.querySelector('.search');
  const button = document.querySelector('.search-button');
  const input = document.querySelector('.input');

  button.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
  });
}

export { initSearchWidget };
