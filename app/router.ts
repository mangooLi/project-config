import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  router.resources('user', '/api/user', controller.user);

  router.resources('project', '/api/project', controller.project);

  router.post('/api/login', controller.login.login);
};
