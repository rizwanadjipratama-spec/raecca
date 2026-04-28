<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { Heart, ShoppingBag, Menu, X } from 'lucide-vue-next'
import { useRoute } from 'vue-router'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const route = useRoute()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// Close menu when route changes (e.g., clicking a link)
watch(route, () => {
  closeMenu()
})

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
      isScrolled || isMobileMenuOpen ? 'py-4 glass bg-white/70 backdrop-blur-md' : 'py-6 bg-transparent'
    ]"
  >
    <div class="container mx-auto px-6 md:px-12 flex justify-between items-center relative z-50">
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl font-bold tracking-tighter text-brand-pink italic uppercase" @click="closeMenu">
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
        <button @click="toggleMobileMenu" class="md:hidden hover:text-brand-pink transition-colors focus:outline-none">
          <X v-if="isMobileMenuOpen" :size="24" stroke-width="1.5" />
          <Menu v-else :size="24" stroke-width="1.5" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu Panel -->
    <div 
      class="absolute top-full left-0 w-full bg-white shadow-[0_20px_40px_-15px_rgba(255,174,194,0.3)] z-40 transition-all duration-500 ease-in-out md:hidden overflow-hidden origin-top border-t border-[#FFEBFO]"
      :class="isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'"
    >
      <div class="flex flex-col py-8 px-6 space-y-8 bg-[#FFF0F5]/90 backdrop-blur-md items-center text-lg font-bold tracking-[0.2em] text-[#D73562] uppercase">
        <NuxtLink @click="closeMenu" to="#collections" class="w-full text-center hover:text-[#A05C7B] hover:bg-white/50 py-3 rounded-xl transition-all">Collections</NuxtLink>
        <NuxtLink @click="closeMenu" to="#the-gloss" class="w-full text-center hover:text-[#A05C7B] hover:bg-white/50 py-3 rounded-xl transition-all">The Gloss</NuxtLink>
        <NuxtLink @click="closeMenu" to="#editorial" class="w-full text-center hover:text-[#A05C7B] hover:bg-white/50 py-3 rounded-xl transition-all">Editorial</NuxtLink>
        <NuxtLink @click="closeMenu" to="#archives" class="w-full text-center hover:text-[#A05C7B] hover:bg-white/50 py-3 rounded-xl transition-all">Archives</NuxtLink>
        
        <div class="pt-6 mt-4 flex w-full justify-center">
          <div class="border-t-2 border-[#FFAEC2]/30 pt-6 px-12 text-center flex justify-center items-center">
            <span class="text-xs tracking-[0.3em] font-black text-[#A05C7B]">RAECCA</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
