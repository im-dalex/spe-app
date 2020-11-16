import BaseModel from './base/base-model';
import PermissionTypeModel from './permission-type-model';

export default class PermissionModel extends BaseModel {
    public employeeName: string = "";
    public employeeLastName: string = "";
    public permissionDate: Date = new Date(0);
    public permissionTypeId: number = 0;
    // public permissionType: PermissionTypeModel = undefined;
}