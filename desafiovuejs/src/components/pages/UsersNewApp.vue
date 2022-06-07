<template>
    <div class="grid m-6">
        <section class="grid">
            <h1>Usuários</h1>
            <p class="m-4 lg:m-6">Formulário para cadastramento de novos usuários.</p>

            <form @submit="persist()" class="grid grid-cols-2 m-2 p-1 gap-2">
                <div class="grid auto-rows-min">
                    <label for="user-name" class="grid gap-1">
                        <span class="text-sm font-medium text-slate-800">Nome:</span>
                        <div class="grid grid-cols-[5fr_1fr]">
                            <input id="user-name" name="user-name" type="text" v-model="nameForm"
                                placeholder="Canção da Silva" pattern="^[^-\s][a-zA-ZÀ-ú ]*"
                                class="peer w-full px-3 py-2 placeholder:text-xs placeholder-slate-500 bg-white border border-slate-600 rounded-md text-sm shadow-sm 
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
                invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
                            <p class="m-1 invisible peer-invalid:visible">
                                ❌
                            </p>
                        </div>
                        <small>Apenas letras e acentos.</small>
                    </label>
                </div>

                <div class="grid auto-rows-min">
                    <label for="user-email" class="grid gap-1">
                        <span class="text-sm font-medium text-slate-800">E-mail:</span>
                        <div class="grid grid-cols-[5fr_1fr]">
                            <input id="user-email" name="user-email" type="email" v-model="emailForm"
                                placeholder="exemplo@gmail.com"
                                class="peer w-full px-3 py-2 placeholder:text-xs placeholder-slate-500 bg-white border border-slate-600 rounded-md text-sm shadow-sm 
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
                invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
                            <p class="m-1 invisible peer-invalid:visible">
                                ❌
                            </p>
                        </div>
                        <small>Obrigatório colocar "@".</small>
                    </label>
                </div>

                <div class="grid auto-rows-min">
                    <label for="user-telephone" class="grid gap-1">
                        <span class="text-sm font-medium text-slate-800">Telefone:</span>
                        <div class="grid grid-cols-[5fr_1fr]">
                            <input id="user-telephone" name="user-telephone" type="tel" v-model="telephoneForm"
                                placeholder="83-1234-5678" pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
                                class="peer w-full px-3 py-2 placeholder:text-xs placeholder-slate-500 bg-white border border-slate-600 rounded-md text-sm shadow-sm 
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
                invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
                            <p class="m-1 invisible peer-invalid:visible">
                                ❌
                            </p>
                        </div>
                        <small>Formato: DDD-xxxx-xxxx</small>
                    </label>
                </div>

                <div class="grid auto-rows-min">
                    <label for="user-company" class="grid gap-1">
                        <span class="text-sm font-medium text-slate-800">Empresa:</span>
                        <div class="grid grid-cols-[5fr_1fr]">
                            <input id="user-company" name="user-company" type="text" v-model="companyForm"
                                placeholder="Inovação Tech10" pattern="^[^-\s][a-zA-ZÀ-ú0-9 ]*"
                                class="peer w-full px-3 py-2 placeholder:text-xs placeholder-slate-500 bg-white border border-slate-600 rounded-md text-sm shadow-sm 
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
                invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
                            <p class="m-1 invisible peer-invalid:visible">
                                ❌
                            </p>
                        </div>
                        <small>Aceita letras, acentos e números.</small>
                    </label>
                </div>

                <button class="bg-indigo-600" type="submit">
                    Cadastrar
                </button>
            </form>
        </section>

        <hr class="my-11 mx-6 border border-indigo-700">

        <UsersApp />
    </div>
</template>

<script setup>
import { onMounted, provide, ref } from 'vue';
import UsersApp from './UsersApp.vue';

let nameForm = ref()
let emailForm = ref()
let telephoneForm = ref()
let companyForm = ref()
let usersData = ref([{ nameForm, emailForm, telephoneForm, companyForm }])
let currentUsers = ref()

function persist() {
    if (!localStorage.getItem(usersData.value)) {
        populateStorage()
    } else {
        setUsers()
    }
}

function populateStorage() {
    let parsed = JSON.stringify(usersData.value)
    localStorage.setItem('users', parsed)

    setUsers()
}

function setUsers() {
    onMounted(() => {
        currentUsers.value = JSON.parse(localStorage.getItem('users'))
    })
}

setUsers()

provide('currentUsers', { currentUsers, setUsers })
</script>
