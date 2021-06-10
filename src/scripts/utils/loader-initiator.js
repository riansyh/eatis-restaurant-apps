import { skeletonHome } from '../views/templates/template-creator';

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

  loader.classList.remove('hidden');
  loader.classList.add('visible');
  loadingContainer.classList.remove('hidden');
};

const showSkeleton = () => {
  const skeletonContainer = document.querySelector('#skeletonLoading');
  skeletonContainer.innerHTML = skeletonHome();
};

const hideSkeleton = () => {
  const skeletonContainer = document.querySelector('#skeletonLoading');
  setTimeout(() => {
    skeletonContainer.innerHTML = '';
  }, 500);
};

export {
  hideLoading,
  showLoading,
  showSkeleton,
  hideSkeleton,
};
