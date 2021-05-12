import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.scss';
import App from './views/app';
import './data/restaurant';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#drawerElement'),
  content: document.querySelector('#mainContent'),
});
