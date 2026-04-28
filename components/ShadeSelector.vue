<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const sectionRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

const products = [
  {
    id: 1,
    image: '/images/products/cherry-latex.png',
    tag: 'NEW SHADE',
    title: '01 // CHERRY LATEX',
    desc: 'A deep, seductive maroon with a high-shine crystalline finish.',
    price: '$24.00',
    color: 'text-brand-dark'
  },
  {
    id: 2,
    image: '/images/products/peach-charm.png',
    tag: 'BEST SELLER',
    title: '02 // PEACH CHARM',
    desc: 'Soft coral-toned apricot for an effortless daily gloss.',
    price: '$24.00',
    color: 'text-brand-pink',
    offset: true
  },
  {
    id: 3,
    image: '/images/products/crystal-heart.png',
    tag: 'LIMITED',
    title: '03 // CRYSTAL HEART',
    desc: 'The signature clear glass with microscopic pink shimmers.',
    price: '$26.00',
    color: 'text-brand-pink'
  }
]

onMounted(() => {
  const ctx = gsap.context(() => {
    // Staggered Card Reveal
    const cards = gridRef.value!.querySelectorAll('.product-card')
    
    gsap.fromTo(cards, 
      { y: 100, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 60%',
        }
      }
    )

    // Parallax on Middle Card
    gsap.to(cards[1], {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

  }, sectionRef.value!)

  return () => ctx.revert()
})
</script>

<template>
  <section ref="sectionRef" id="collections" class="w-full py-32 bg-white overflow-hidden">
    <div class="container mx-auto px-6 md:px-12">
      
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-20">
        <h2 class="text-6xl md:text-8xl font-sans font-light text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-blush tracking-tighter uppercase mb-4 md:mb-0">
          Shade Selector
        </h2>
        <div class="text-right">
          <span class="text-xs tracking-[0.2em] font-semibold text-brand-dark uppercase block mb-2">2026 ISSUE • VOL. 02</span>
          <p class="font-serif italic text-2xl text-brand-text/60">Twelve New Hues for the Modern Romantic</p>
        </div>
      </div>

      <!-- Grid -->
      <div ref="gridRef" class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        <NuxtLink 
          v-for="product in products" 
          :key="product.id"
          to="#"
          class="product-card group flex flex-col relative block cursor-pointer"
          :class="product.offset ? 'md:-mt-10' : ''"
        >
          <!-- Image Container -->
          <div class="relative w-full aspect-[4/5] overflow-hidden bg-brand-cream mb-6">
            <img 
              :src="product.image" 
              :alt="product.title" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <!-- Tag -->
            <div class="absolute top-4 left-4">
              <span class="bg-white/80 backdrop-blur-sm px-3 py-1 text-[10px] tracking-[0.1em] font-bold uppercase rounded-full shadow-sm text-brand-dark">
                {{ product.tag }}
              </span>
            </div>
            
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-brand-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <!-- Product Info -->
          <div class="flex justify-between items-baseline mb-2">
            <h4 :class="['text-sm font-bold tracking-[0.15em] uppercase', product.color]">
              {{ product.title }}
            </h4>
            <div class="flex gap-1">
              <div class="w-3 h-3 rounded-full border border-brand-text/20"></div>
              <div class="w-3 h-3 rounded-full border border-brand-text/20"></div>
              <div class="w-3 h-3 rounded-full border border-brand-text/20"></div>
            </div>
          </div>
          
          <p class="font-serif italic text-brand-text/70 mb-4 h-12">
            {{ product.desc }}
          </p>
          
          <span class="font-sans font-bold text-lg text-brand-dark">{{ product.price }}</span>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>
