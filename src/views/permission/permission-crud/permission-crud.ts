import httpClient from '@/core/api/httpClient';
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component({})
export default class PermissionCrud extends Vue {
    @Action setLoading!: (loading: boolean) => void;

    private get permissionId(): string {
        return this.$route.params.id || "0";
    }

    permission: any = {};
    options: any[] = [];

    created() {
        this.initData();
    }

    private async initData() {
        try {
            this.setLoading(true);
            const permission = (Number(this.permissionId) > 0) 
                ? await httpClient.get(`permission/${this.permissionId}`) : {};
            const permissionType: any[] = await httpClient.get('permissionType');
            this.permission = permission;
            this.options = this.options
                .concat(
                    permissionType.map(p => ({
                        text: p.description,
                        value: p.id
                    }))
                );
            console.log(permission)
        } catch (err) {
            console.error(err);
        } finally {
            this.setLoading(false);
        }
    }

    cancel() {
        this.$router.go(-1);
    }

    async onSubmit(event: any) {
        event.preventDefault();
        try {
            this.setLoading(true);
            delete this.permission.permissionType;
            if (this.permission.id > 0) {
                await httpClient.put(`permission/${this.permission.id}`,this.permission);
            } else  {
                await httpClient.post(`permission`,this.permission);
            }
            this.$router.go(-1);
        } catch (err) {
            console.error(err);
        } finally {
            this.setLoading(false);
        }
    }

}