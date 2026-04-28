<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Heart, ShoppingBag, Menu } from 'lucide-vue-next'

const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out',
      isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
    ]"
  >
    <div class="container mx-auto px-6 md:px-12 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl font-bold tracking-tighter text-brand-pink italic uppercase">
        Raecca
      </NuxtLink>

      <!-- Desktop Links -->
      <div class="hidden md:flex space-x-12 items-center text-xs font-semibold tracking-[0.2em] text-brand-text/80 uppercase">
        <NuxtLink to="#collections" class="hover:text-brand-pink transition-colors">Collections</NuxtLink>
        <NuxtLink to="#the-gloss" class="hover:text-brand-pink transition-colors">The Gloss</NuxtLink>
        <NuxtLink to="#editorial" class="hover:text-brand-pink transition-colors">Editorial</NuxtLink>
        <NuxtLink to="#archives" class="hover:text-brand-pink transition-colors">Archives</NuxtLink>
      </div>

      <!-- Icons -->
      <div class="flex items-center space-x-6 text-brand-text/80">
        <button class="hover:text-brand-pink transition-colors transform hover:scale-110">
          <Heart :size="20" stroke-width="1.5" />
        </button>
        <button class="hover:text-brand-pink transition-colors transform hover:scale-110 relative">
          <ShoppingBag :size="20" stroke-width="1.5" />
          <span class="absolute -top-1 -right-1.5 flex h-3.5 w-3.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-pink text-[8px] font-bold text-white items-center justify-center">2</span>
          </span>
        </button>
        <button class="md:hidden hover:text-brand-pink transition-colors">
          <Menu :size="24" stroke-width="1.5" />
        </button>
      </div>
    </div>
  </nav>
</template>
