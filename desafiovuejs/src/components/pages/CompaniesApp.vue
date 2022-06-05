<template>
    <div>
        <h1>Empresas</h1>
        <p><strong>Conheça as principais empresas de Tecnologia</strong></p>

        <section v-if="errored">
            <article>
                <h2>Ops! Ocorreu um erro no servidor Web ☹️</h2>
                <p>Pedimos desculpas, não estamos conseguindo recuperar as informações no momento.</p>
                <p>Por favor, tente novamente mais tarde.</p>
            </article>
        </section>

        <section v-else>
            <div v-if="loading">
                <h2>Carregando...</h2>
            </div>

            <div v-else>
                <table>
                    <thead>
                        <tr>
                            <th>Empresa</th>
                            <th>Categoria</th>
                            <th>País-sede</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="company in data" :key="company.id">
                            <td><a :href="company.link">{{ company.name }}</a></td>
                            <td>{{ company.category }}</td>
                            <td>{{ company.country }}</td>
                        </tr>
                    </tbody>
                </table>
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

<style scoped>
</style>