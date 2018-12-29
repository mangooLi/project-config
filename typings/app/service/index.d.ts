// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportConfig from '../../../app/service/Config';
import ExportItem from '../../../app/service/Item';
import ExportProject from '../../../app/service/Project';
import ExportTest from '../../../app/service/Test';
import ExportUser from '../../../app/service/User';

declare module 'egg' {
  interface IService {
    config: ExportConfig;
    item: ExportItem;
    project: ExportProject;
    test: ExportTest;
    user: ExportUser;
  }
}
