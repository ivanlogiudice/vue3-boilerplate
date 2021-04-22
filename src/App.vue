<template>
    <Header />

    <main class="flex-auto">
        <div class="container py-8 mx-auto">
            <h1 class="text-2xl font-semibold text-gray-700">Hello World!</h1>
        </div>
    </main>

    <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
    name: 'App',

    components: {
        Header,
        Footer
    }
})
</script>
