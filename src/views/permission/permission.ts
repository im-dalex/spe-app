import httpClient from '@/core/api/httpClient';
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Permission extends Vue{
    msg: string = "alex";

    mounted() {
        this.initData();
    }

    private async initData() {
        const response = await httpClient.get('permissionType/2');
        console.log(response);
    }
}