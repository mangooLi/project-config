// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportConfig from '../../../app/model/config';
import ExportProject from '../../../app/model/project';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Config: ReturnType<typeof ExportConfig>;
    Project: ReturnType<typeof ExportProject>;
    User: ReturnType<typeof ExportUser>;
  }
}
