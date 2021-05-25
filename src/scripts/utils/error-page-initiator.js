import { createErrorPage } from '../views/templates/template-creator';

const showErrorPage = (error) => {
  const mainContainer = document.querySelector('#mainContent');
  let errorMessage;
  if (error.message === 'Failed to fetch') {
    errorMessage = 'Please, check your internet connection and try to refresh this page again';
  } else {
    errorMessage = 'Sorry, something wrong happened';
  }
  mainContainer.innerHTML = createErrorPage(errorMessage);
};

export default showErrorPage;
