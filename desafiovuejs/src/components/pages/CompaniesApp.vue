<template>
    <div class="grid m-6">
        <h1>Empresas</h1>
        <p class="m-4 lg:m-6">Conheça as principais empresas de Tecnologia.</p>

        <section v-if="errored">
            <article class="text-center p-2 bg-pink-200 border-none rounded-md">
                <h3>Ops! Ocorreu um erro no servidor Web ☹️</h3>
                <p>Pedimos desculpas, não estamos conseguindo recuperar as informações no momento.</p>
                <p>Por favor, tente novamente mais tarde.</p>
            </article>
        </section>

        <section v-else>
            <div v-if="loading">
                <h3>Carregando...</h3>
            </div>

            <div v-else>
                <ul>
                    <li v-for="company in data" :key="company.id">
                        <span class="text-blue-800 underline">
                            <a :href="company.site">{{ company.name }}</a>
                        </span>
                        <span>{{ company.category }}</span>
                        <span>{{ company.country }}</span>
                        <span class="hover:bg-sky-600">
                            <a :href="company.linkedin" :title="company.name">
                                <img class="h-10 w-auto"
                                    src="https://ik.imagekit.io/x4ikoq975/%C3%ADcones/linkedin_4KBmvLHyp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653574797154"
                                    alt="Logo do LinkedIn" />
                            </a>
                        </span>
                    </li>
                </ul>
            </div>
        </section>

    </div>
</template>

<script setup>
import api from '@/services/api';
import { onMounted, ref } from 'vue'

let data = ref([])
const loading = ref(true)
const errored = ref(false)

onMounted(async () => {
    await api.get('/companies')
        .then(response => (data.value = response.data))
        .catch(function (error) {
            console.error(error)
            errored.value = true
        })
        .finally(() => loading.value = false)
})
</script>
