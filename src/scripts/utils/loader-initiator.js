const hideLoading = () => {
  const loadingContainer = document.querySelector('#loadingContainer');
  const loader = document.querySelector('#loading');

  setTimeout(() => {
    loader.classList.remove('visible');
    loadingContainer.classList.add('hidden');
  }, 500);
};

const showLoading = () => {
  const loadingContainer = document.querySelector('#loadingContainer');
  const loader = document.querySelector('#loading');

  loader.classList.add('visible');
  loadingContainer.classList.remove('hidden');
};

export { hideLoading, showLoading };
