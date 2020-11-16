import BaseModel from './base/base-model';
import PermissionModel from './permission-model';

export default class PermissionTypeModel extends BaseModel {
    public description: string = '';
    public permission: PermissionModel[] = [];
}