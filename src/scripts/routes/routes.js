import home from '../views/pages/home';
import favorite from '../views/pages/favorite';
import detail from '../views/pages/detail';

const routes = {
  '/': home,
  '/favorite': favorite,
  '/detail/:id': detail,
};

export default routes;
