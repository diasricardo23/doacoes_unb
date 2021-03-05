<template>
    <div class="containerPage">
        <Sidebar/>
            <div class="containerDashboard">
                <v-data-table
                    :headers="headers"
                    :items="beneficiaries"
                    :items-per-page="5"
                    class="elevation-1"
                >
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-toolbar-title> Beneficiarios </v-toolbar-title>
                            <v-divider
                                class="mx-4"
                                inset
                                vertical
                            ></v-divider>

                            <v-dialog
                                v-model="dialog"
                                max-width="500px"
                            >

                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        color="primary"
                                        dark
                                        text
                                        class="mb-2"
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                    Cadastrar Beneficiário
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">{{ formTitle }}</span>
                                    </v-card-title>

                                    <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-text-field v-model="editedItem._id.$oid" disabled label="Identificador"/>
                                            </v-col>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-text-field v-model="editedItem.name" label="Nome"/>
                                            </v-col>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-text-field v-model="editedItem.email" label="Email"/>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.cpf" label="CPF"/>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.phone" label="Telefone"/>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-divider/>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.address.address" label="Endereço"/>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.address.cep" label="CEP"/>
                                            </v-col>
                                            <v-col cols="12" sm="4" md="4">
                                                <v-text-field v-model="editedItem.address.city" label="Cidade"/>
                                            </v-col>
                                            <v-col cols="12" sm="4" md="4">
                                                <v-text-field v-model="editedItem.address.number" label="Número"/>
                                            </v-col>
                                            <v-col cols="12" sm="4" md="4">
                                                <v-text-field v-model="editedItem.address.state" label="Estado"/>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-divider/>
                                            </v-col>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-text-field v-model="editedItem.bank.bank" label="Banco"/>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.bank.account" label="Conta"/>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.bank.agency" label="Agência"/>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.bank.pix_type" label="Pix (Email, CPF, Telefone)"/>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.bank.pix_key" label="Chave Pix"/>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-divider/>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="close">
                                        Cancel
                                    </v-btn>
                                    <v-btn v-if="editedIndex === -1" @click="createBeneficiary" color="blue darken-1" text> Criar </v-btn>
                                    <v-btn v-if="editedIndex !== -1" @click="editBeneficiary" color="blue darken-1" text> Modificar </v-btn>
                                    </v-card-actions>
                                </v-card>
                                </v-dialog>
                                <v-dialog v-model="dialogDelete" max-width="500px">
                                    <v-card>
                                        <v-card-title class="headline">
                                            <h4>Você tem certeza que quer deletar este usuário?</h4> <br>
                                        </v-card-title>
                                        <v-card-text>
                                            Nome: {{ editedItem.name }} <br>
                                            E-mail: {{ editedItem.email }} <br>
                                            CPF: {{ editedItem.cpf }} <br>
                                        </v-card-text>
                                        <v-card-actions>
                                            <h6>Esta operação é permanente </h6>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="closeDelete" class="grey--text">Cancelar</v-btn>
                                            <v-btn color="blue darken-1" text @click="deleteItemConfirm" class="red--text">Deletar</v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            <v-spacer/>
                        </v-toolbar>
                    </template>

                    <template v-slot:item.actions="{ item }">
                        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
                        <v-icon small class="mr-2" @click="deleteItem(item)"> mdi-trash-can </v-icon>
                    </template>
                    
                    <template v-slot:no-data>
                        <v-btn color="primary" @click="getBeneficiaries()">
                            Reset
                        </v-btn>
                    </template>
                </v-data-table>
            </div>
        <Nav/>
    </div>
</template>

<script>
import Sidebar from '../../components/Sidebar.vue'
import Nav from "../../components/AdminNavigation.vue"
import { Administrator } from "../../functions/administrator.js"

export default {
    components:{
        Sidebar,
        Nav
    },
    data: () => ({
        dialog: false,
        drawer: false,
        group: null,
        dialogDelete: false,
        editedIndex: -1,
        headers: [
            { text: "Nome", value: "name" },
            { text: "E-mail", value: "email" },
            { text: "Telefone", value: "phone" },
            { text: "CPF", value: "cpf" },
            { text: "Ações", value: "actions" },
        ],
        beneficiaries: [],
        defaultItem: {
            _id: {
                $oid: null
            },
            address: {
                address: null,
                cep: null,
                city: null,
                number: null,
                state: null
            },
            bank: {
                bank: null,
                account: null,
                agency: null,
                pix_type: null,
                pix_key: null,
            },
            cpf: null,
            created_time: null,
            email: null,
            name: null,
            password: null,
            phone: null
        },
        editedItem: {
            _id: {
                $oid: null
            },
            address: {
                address: null,
                cep: null,
                city: null,
                number: null,
                state: null
            },
            bank: {
                bank: null,
                account: null,
                agency: null,
                pix_type: null,
                pix_key: null,
            },
            cpf: null,
            created_time: null,
            email: null,
            name: null,
            password: null,
            phone: null
        }
    }),
    async mounted(){
        this.getBeneficiary()
    },
    watch: {
        group () {
            this.drawer = false
        },
    },
    computed: {
        formTitle () {
            return this.editedIndex === -1 ? 'Criar novo Administrador' : 'Editar Administrador'
        },
    },
    methods: {
        deleteItem(item){
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
            
        },
        closeDelete(){
            this.editedItem = Object.assign({}, this.defaultItem)
            this.dialogDelete = false
        },
        async deleteItemConfirm(){
            this.beneficiaries = ((await (new Administrator().deleteBeneficiary(this.editedItem._id.$oid))).data)
            this.editedItem = Object.assign({}, this.defaultItem)
            this.dialogDelete = false
            window.location.reload()
        },
        async getBeneficiary() {
            this.beneficiaries = ((await (new Administrator().getAllBeneficiaries())).data)
        },
        editItem(item){
            this.editedIndex = this.beneficiaries.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },
        close () {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        async createBeneficiary(){
            let beneficiary = this.editedItem
            delete beneficiary['_id']
            delete beneficiary['password']
            let res = await new Administrator().createBeneficiary(beneficiary)
            console.log(res)
            if(res.data.code == 200){
                window.location.reload()
            }else{
                alert("Erro!")
            }
        },
        async editBeneficiary(){
            let beneficiary = this.editedItem
            let id = beneficiary['_id']['$oid']
            delete beneficiary['_id']
            let res = await new Administrator().editBeneficiary(id, beneficiary)
            console.log(res)
            if(res.data.code == 200){
                window.location.reload()
            }else{
                alert("Erro!")
            }
        }
    }
}
</script>

<style>
    .containerPage {
        background-color: #DADADA;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .container {
        background-color: #DADADA;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .containerDashboard {
        width: 100% !important;
        flex: 1;
        flex-direction: column;
        align-items: center;
        padding-bottom: 30px;
        padding-top: 10px;
    }

    .containerMenu {
        width: 85%;
        display: flex;
        justify-content: space-between;
    }

    .infobox {
        background-color: white;
        color: #485550;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .total{
        width: 88%;
    }

    .totalCard{
        background-color: #717171;
    }

    .formSection{
        text-align: center;
        color: #1D2D50;
        display:flex;
        width:100%;
        justify-content: center;
    }
    .divider{
        border-bottom: #1D2D50 2px solid;
        line-height: 0.1em;
        margin-top: 5%;
        width:80%;
    }
    .side1{
        width: 20%;
        color: rgb(37, 59, 105);
        margin-top:1%;
    }
    .formSection::before{
        content:" "
    }
    .titleDivider{
        background:#dadada;
        padding: 0 2%;
    }

    .infoNumbers {
        width: 40%;
        text-align: center;
    }
  .menuIcon{
    color: white;
  }
  

</style>
