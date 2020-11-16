<template>
    <div>
        <b-form @submit.stop.prevent="onSubmit">
            <b-row>
                <b-col>
                    <b-form-group id="input-group-2" label="Nombre del Empleado:" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        name="input-2"
                        v-validate="'required'"
                        autocomplete="off"
                        :state="validateState('input-2')"
                        v-model="permission.employeeName"
                        placeholder="Ingresar Nombre"
                        data-vv-as="Name"
                        ></b-form-input>
                        <span class="input-error" v-if="invalid">{{ throwError('input-2') }}</span>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group id="input-group-3" label="Apellido del Empleado:" label-for="input-3">
                        <b-form-input
                        id="input-3"
                        name="input-3"
                        :state="validateState('input-3')"
                        v-validate="'required'"
                        autocomplete="off"
                        v-model="permission.employeeLastName"
                        placeholder="Ingresar Apellido"
                        data-vv-as="Last Name"
                        ></b-form-input>
                        <span class="input-error" v-if="invalid">{{ throwError('input-3') }}</span>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-form-group id="input-group-4" label="Tipo Permiso:" label-for="input-4">
                        <b-form-select
                        id="input-4"
                        name="input-4"
                        :state="validateState('input-4')"
                        v-validate="'required'"
                        :options="options"
                        data-vv-as="Permission Type"
                        v-model="permission.permissionTypeId"
                        >
                            <template #first>
                                <b-form-select-option :value="null" disabled>--Seleccione--</b-form-select-option>
                            </template>
                        </b-form-select>
                        <span class="input-error" v-if="invalid">{{ throwError('input-4') }}</span>
                    </b-form-group>
                </b-col>

                <b-col>
                    <label for="input-5">Fecha del Permiso:</label>
                    <b-form-datepicker 
                        id="input-5"
                        name="input-5"
                        v-validate="'required'"
                        :state="validateState('input-5')"
                        data-vv-as="Permission Date"
                        placeholder="Toma una Fecha" 
                        locale="es"
                        v-model="permission.permissionDate"></b-form-datepicker>
                        <span class="input-error" v-if="invalid">{{ throwError('input-5') }}</span>
                </b-col>
            </b-row>

            <div class="mt-3">
                <b-button @click="cancel()" variant="danger">Atras</b-button> | 
                <b-button type="submit" variant="primary">Guardar</b-button>
            </div>
        </b-form>
    </div>
</template>
<script lang="ts" src="./permission-crud.ts"></script>
<style lang="scss" scoped>
    .input-error {
        color: #F75454;
        font-size: rem(12px);
        line-height: 2;
        margin-top: rem(10px);
    }
</style>