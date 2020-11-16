import httpClient from '@/core/api/httpClient';
import { Component, Vue } from 'vue-property-decorator';
import DataTable from '@/components/dataTable/dataTable.vue';
import { Action } from 'vuex-class';

@Component({
    components: {
        DataTable
    }
})
export default class Permission extends Vue{
    @Action setLoading!: (loading: boolean) => void;
    items: any[] = [];
    fields: any[] = [];

    created() {
        this.initData();
    }

    private async initData() {
        try {
            this.setLoading(true);
            const response: any[] = await httpClient.get('permission');
            this.fields = [
                {
                    key: 'id',
                    label: 'Código',
                },
                {
                    key: 'employeeName',
                    label: 'Nombre del Empleado',
                    formatter: (value: any, key: any, item: any) => {
                        return `${value} ${item.employeeLastName}`;
                    }
                },
                
                {
                    key: 'permissionType',
                    label: 'Permiso',
                },
                {
                    key: 'permissionDate',
                    label: 'Fecha del Permiso',
                    formatter: (value: any) => {
                        return new Date(value).toLocaleDateString();
                    }
                },
            ];
            this.items = response.map(r => ({
                id: r.id,
                employeeName: r.employeeName,
                employeeLastName: r.employeeLastName,
                permissionDate: r.permissionDate,
                permissionTypeId: r.permissionTypeId,
                permissionType: r.permissionType.description
            }));
            console.log(response);
        } catch (err) {
            console.error(err);
        } finally {
            this.setLoading(false);
        }
    }

    navigate(id: any) {
        this.$router.push({ name: 'permission-crud', params: { id } });
    }

    async deleteItem(id: any) {
        try {
            this.setLoading(true);
            await httpClient.delete(`permission/${id}`);
            this.$router.go(0);
        } catch (err) {
            console.error(err);
        } finally {
            this.setLoading(false);
        }
    }
}