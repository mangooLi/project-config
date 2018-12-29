// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportConfig from '../../../app/controller/config';
import ExportHome from '../../../app/controller/home';
import ExportItem from '../../../app/controller/item';
import ExportLogin from '../../../app/controller/login';
import ExportProject from '../../../app/controller/project';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    config: ExportConfig;
    home: ExportHome;
    item: ExportItem;
    login: ExportLogin;
    project: ExportProject;
    user: ExportUser;
  }
}
