<template>
  <section class="grid">
    <h2>Lista de Usuários</h2>
    <p class="m-4 lg:m-6">Conheça e edite os dados dos usuários cadastrados no sistema.</p>

    <ul>
      <!-- Lista de usuários salvos no código do projeto Vue.JS (código fonte) -->
      <li v-for="person in users" :key="person.email">

        <textarea name="name" cols="20" rows="2" minlength="10" maxlength="30" :disabled="value" v-model="person.name"
          class="text-xs lg:text-base font-medium border-none rounded-md"></textarea>

        <textarea name="company" cols="20" rows="2" minlength="10" maxlength="30" :disabled="value"
          v-model="person.company" class="text-xs lg:text-base italic border-none rounded-md"></textarea>

        <textarea name="email" cols="20" rows="2" minlength="10" maxlength="30" :disabled="value" v-model="person.email"
          class="text-xs lg:text-base border-none rounded-md"></textarea>

        <textarea name="telephone" cols="20" rows="2" minlength="10" maxlength="30" :disabled="value"
          v-model="person.telephone" class="text-xs lg:text-base border-none rounded-md"></textarea>

        <textarea name="data" cols="20" rows="2" minlength="10" maxlength="30" :disabled="value" v-model="person.data"
          class="text-xs lg:text-base border-none rounded-md"></textarea>

        <button class="bg-indigo-600" type="button" @click="value = false, warning = true" @mouseup="message = `Salvar`"
          @dblclick="value = true, warning = false, message = `Editar`">
          {{ message }}
        </button>

        <small class="text-xs lg:text-base font-mono text-pink-800" v-show="warning">
          Clique duas vezes no botão para salvar as alterações.
        </small>
      </li>

      <!-- Lista de usuários salvos no Local Storage do Navegador (lado do cliente) -->
      <li v-for="t in currentUsers" :key="t.emailForm">
        <textarea name="name" cols="20" rows="2" minlength="10" maxlength="30" :disabled="value" v-model="t.nameForm"
          class="text-xs lg:text-base font-medium border-none rounded-md"></textarea>

        <textarea name="company" cols="20" rows="2" minlength="10" maxlength="30" :disabled="value"
          v-model="t.companyForm" class="text-xs lg:text-base italic border-none rounded-md"></textarea>

        <textarea name="email" cols="20" rows="2" minlength="10" maxlength="30" :disabled="value" v-model="t.emailForm"
          class="text-xs lg:text-base border-none rounded-md"></textarea>

        <textarea name="telephone" cols="20" rows="2" minlength="10" maxlength="30" :disabled="value"
          v-model="t.telephoneForm" class="text-xs lg:text-base border-none rounded-md"></textarea>

        <button class="bg-indigo-600" type="button" @click="value = false, warning = true" @mouseup="message = `Salvar`"
          @dblclick="value = true, warning = false, message = `Editar`">
          {{ message }}
        </button>

        <small class="text-xs lg:text-base font-mono text-pink-800" v-show="warning">
          Clique duas vezes no botão para salvar as alterações.
        </small>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue';

let value = ref(true)
let warning = ref(false)
let message = ref('Editar')

let { currentUsers, setUsers } = inject('currentUsers')

const users = ref([])

onMounted(() => {
  users.value = [
    { name: 'Menina da Silva', company: 'E-Inov Soluções Tecnológicas', email: 'menina.silva@example.com', telephone: '88-0200-0200, 88-0201-0201', data: '2022-01-05' },
    { name: 'Beltrano da Silva', company: 'E-Inov Soluções Tecnológicas', email: 'beltrano.silva2@example.com', telephone: '89-1111-1111', data: '2022-01-16' },
    { name: 'Siclano da Silva', company: 'E-Inov Soluções Tecnológicas', email: 'siclano.silva3@example.com', telephone: '91-2222-2222', data: '2022-01-27' },
    { name: 'Fulano da Silva', company: 'E-Inov Soluções Tecnológicas', email: 'fulano.silva4@example.com', telephone: '92-3333-3333', data: '2022-02-09' },
  ]

  setUsers
})
</script>
