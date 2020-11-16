<template>
    <div>
        <b-form @submit="onSubmit($event)">
            <b-row>
                <b-col>
                    <b-form-group id="input-group-2" label="Nombre del Empleado:" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        required
                        autocomplete="off"
                        v-model="permission.employeeName"
                        placeholder="Ingresar Nombre"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col> 
                    <b-form-group id="input-group-2" label="Apellido del Empleado:" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        required
                        autocomplete="off"
                        v-model="permission.employeeLastName"
                        placeholder="Ingresar Apellido"
                        ></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-form-group id="input-group-3" label="Tipo Permiso:" label-for="input-3">
                        <b-form-select
                        id="input-3"
                        :options="options"
                        required
                        v-model="permission.permissionTypeId"
                        :value="null"
                        >
                            <template #first>
                                <b-form-select-option :value="null" disabled>--Seleccione--</b-form-select-option>
                            </template>
                        </b-form-select>
                    </b-form-group>
                </b-col>

                <b-col>
                    <label for="datepicker-placeholder">Fecha del Permiso:</label>
                    <b-form-datepicker id="datepicker-placeholder" 
                        required
                        placeholder="Toma una Fecha" locale="es"
                        v-model="permission.permissionDate"></b-form-datepicker>
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