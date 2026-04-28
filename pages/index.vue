<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import Editorial from '~/components/Editorial.vue'
import ShadeSelector from '~/components/ShadeSelector.vue'
import Philosophy from '~/components/Philosophy.vue'
import GlossyEdit from '~/components/GlossyEdit.vue'
import BoldSection from '~/components/BoldSection.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <main class="w-full relative bg-brand-cream selection:bg-brand-pink selection:text-white">
    <Navbar />
    <Hero />
    <Editorial />
    <ShadeSelector />
    <Philosophy />
    <GlossyEdit />
    <BoldSection />
    <Footer />
  </main>
</template>
