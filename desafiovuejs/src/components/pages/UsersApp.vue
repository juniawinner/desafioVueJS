<template>
  <div class="grid m-6">
    <section class="grid">
      <h1>Usuários</h1>
      <p class="m-4 lg:m-6">Lista de usuários cadastrados no sistema.</p>

      <ul>
        <li v-for="person in users" :key="person.email">
          <span class="font-semibold">{{ person.name }}</span>
          <span class="text-xs lg:text-base italic">{{ person.company }}</span>
          <span class="text-xs lg:text-base">{{ person.email }}</span>
          <span class="text-xs lg:text-base">{{ person.telephone }}</span>
          <span class="text-xs lg:text-base">{{ person.data }}</span>
          <span>
            <button class="bg-indigo-600" type="button">Editar</button>
          </span>
        </li>
      </ul>
    </section>

    <hr class="my-10 mx-6 border-2 border-fuchsia-900 w-auto">

    <section class="grid">
      <h2>Novos Usuários</h2>
      <p class="m-4 lg:m-6">Formulário para cadastramento no sistema.</p>

      <form @submit="indexedDB" class="grid grid-cols-2 m-2 p-1 gap-2">
        <div class="grid auto-rows-min">
          <label for="user-name" class="grid gap-1">
            <span class="text-sm font-medium text-slate-800">Nome:</span>
            <div class="grid grid-cols-[5fr_1fr]">
              <input id="user-name" name="user-name" type="text" v-model="new_name" placeholder="Canção da Silva"
                pattern="^[^-\s][a-zA-ZÀ-ú ]*"
                class="peer w-full px-3 py-2 placeholder:text-xs placeholder-slate-500 bg-white border border-slate-600 rounded-md text-sm shadow-sm 
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
                invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
              <p class="m-1 invisible peer-invalid:visible text-pink-800 text-sm">
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
              <input id="user-email" name="user-email" type="email" v-model="new_email" placeholder="exemplo@gmail.com"
                class="peer w-full px-3 py-2 placeholder:text-xs placeholder-slate-500 bg-white border border-slate-600 rounded-md text-sm shadow-sm 
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
                invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
              <p class="m-1 invisible peer-invalid:visible text-pink-800 text-sm">
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
              <input id="user-telephone" name="user-telephone" type="tel" v-model="new_telephone"
                placeholder="83-1234-5678" pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
                class="peer w-full px-3 py-2 placeholder:text-xs placeholder-slate-500 bg-white border border-slate-600 rounded-md text-sm shadow-sm 
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
                invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
              <p class="m-1 invisible peer-invalid:visible text-pink-800 text-sm">
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
              <input id="user-company" name="user-company" type="text" v-model="new_company"
                placeholder="Inovação Tech10" pattern="^[^-\s][a-zA-ZÀ-ú0-9 ]*"
                class="peer w-full px-3 py-2 placeholder:text-xs placeholder-slate-500 bg-white border border-slate-600 rounded-md text-sm shadow-sm 
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
                invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
              <p class="m-1 invisible peer-invalid:visible text-pink-800 text-sm">
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
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const users = ref([])

onMounted(() => {
  users.value = [
    { name: 'Menina da Silva', company: 'E-Inov Soluções Tecnológicas', email: 'menina.silva@example.com', telephone: '88-0200-0200, 88-0201-0201', data: '2022-01-05' },
    { name: 'Beltrano da Silva', company: 'E-Inov Soluções Tecnológicas', email: 'beltrano.silva2@example.com', telephone: '89-1111-1111', data: '2022-01-16' },
    { name: 'Siclano da Silva', company: 'E-Inov Soluções Tecnológicas', email: 'siclano.silva3@example.com', telephone: '91-2222-2222', data: '2022-01-27' },
    { name: 'Fulano da Silva', company: 'E-Inov Soluções Tecnológicas', email: 'fulano.silva4@example.com', telephone: '92-3333-3333', data: '2022-02-09' },
  ]
})
</script>
