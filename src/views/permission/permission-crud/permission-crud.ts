import httpClient from '@/core/api/httpClient';
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { ValidationObserver, ValidationProvider } from "vee-validate";

@Component({
    components: {
        ValidationObserver: ValidationObserver,
        ValidationProvider: ValidationProvider
    }
})
export default class PermissionCrud extends Vue {
    @Action setLoading!: (loading: boolean) => void;

    private get permissionId(): string {
        return this.$route.params.id || "0";
    }

    permission: any = {};
    options: any[] = [];
    invalid: boolean = false;

    created() {
        this.initData();
    }

    private async initData() {
        try {
            this.setLoading(true);
            const permission = (Number(this.permissionId) > 0) 
                ? await httpClient.get(`permission/${this.permissionId}`) : { permissionTypeId: null};
            const permissionType: any[] = await httpClient.get('permissionType');
            this.permission = permission;
            this.options = this.options
                .concat(
                    permissionType.map(p => ({
                        text: p.description,
                        value: p.id
                    }))
                );
        } catch (err) {
            console.error(err);
        } finally {
            this.setLoading(false);
        }
    }

    cancel() {
        this.$bvModal.msgBoxConfirm('Estás seguro de cancelar esta acción?', {
            title: 'Confirmar',
            size: 'sm',
            buttonSize: 'sm',
            okVariant: 'danger',    
            okTitle: 'Si',
            cancelTitle: 'No',
            footerClass: 'p-2',
            centered: true
        }).then( value => {
            if (value) {
                this.$router.go(-1);
            }
        }).catch(err => {
            console.error(err);
        });
    }

    validateState(ref: string) {
        const field: any = this.$validator.fields.find({ name: ref });
        if (field && (field.dirty || field.validated)) 
        {
            return !this.$validator.errors.has(ref);
        }
        return null;
    }

    throwError(ref: string) {
        return this.$validator.errors.items.find(e => e.field == ref)?.msg;
    }

    onSubmit() {
        try {
            this.$validator.validateAll().then(async result => {
                if (!result) {
                    this.invalid = true;
                    return;
                }

                this.setLoading(true);
                delete this.permission.permissionType;
                if (this.permission.id > 0) {
                    await httpClient.put(`permission/${this.permission.id}`,this.permission);
                } else  {
                    await httpClient.post(`permission`,this.permission);
                }
                this.$router.go(-1);
            });
        } catch (err) {
            console.error(err);
        } finally {
            this.setLoading(false);
        }
    }

}