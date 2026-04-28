<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ArrowLeft, ArrowRight, Plus } from 'lucide-vue-next'

const sectionRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)

const items = [
  { id: 1, name: 'OVER CUTE', price: '$12.00', icon: '/images/icons/cat.png', bg: 'bg-[#FFF0F5]' },
  { id: 2, name: 'BUNNY PINK', price: '$12.00', icon: '/images/icons/bunny.png', bg: 'bg-[#FFF0F5]' },
  { id: 3, name: 'BERRY JELLY', price: '$12.00', icon: '/images/icons/strawberry.png', bg: 'bg-[#FFF0F5]' },
]

onMounted(() => {
  const ctx = gsap.context(() => {
    const cards = cardsRef.value!.querySelectorAll('.glossy-card')
    
    gsap.fromTo(cards, 
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 70%',
        }
      }
    )
  }, sectionRef.value!)

  return () => ctx.revert()
})
</script>

<template>
  <section ref="sectionRef" id="the-gloss" class="w-full py-32 bg-white overflow-hidden">
    <div class="container mx-auto px-6 md:px-12">
      
      <!-- Header -->
      <div class="flex justify-between items-end mb-16">
        <div>
          <span class="text-xs tracking-[0.2em] font-semibold text-brand-pink uppercase mb-2 block">[ 2026 ISSUE NO. 03 ]</span>
          <h2 class="text-4xl md:text-6xl font-serif text-brand-pink leading-tight">
            The Glossy Edit
          </h2>
        </div>
        <div class="hidden md:flex gap-4">
          <button class="w-10 h-10 rounded-full border border-brand-text/10 flex items-center justify-center text-brand-text/60 hover:border-brand-pink hover:text-brand-pink transition-colors">
            <ArrowLeft :size="16" />
          </button>
          <button class="w-10 h-10 rounded-full border border-brand-text/10 flex items-center justify-center text-brand-text/60 hover:border-brand-pink hover:text-brand-pink transition-colors">
            <ArrowRight :size="16" />
          </button>
        </div>
      </div>

      <!-- Cards -->
      <div ref="cardsRef" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="item in items" 
          :key="item.id"
          class="glossy-card group cursor-pointer"
        >
          <div :class="['w-full aspect-[4/5] p-6 flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2', item.bg]">
            
            <!-- Top Bar -->
            <div class="flex justify-between items-center text-[8px] tracking-[0.2em] font-bold text-brand-dark/40 uppercase">
              <span>LIP GLOW TINT</span>
              <span>0{{ item.id }} / 04</span>
            </div>

            <!-- Center Icon -->
            <div class="flex-1 flex items-center justify-center">
              <div class="w-40 h-40 bg-white shadow-xl flex items-center justify-center transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
                <img :src="item.icon" :alt="item.name" class="w-24 h-24 object-contain drop-shadow-md" />
              </div>
            </div>

            <!-- Bottom Info -->
            <div class="flex justify-between items-end border-t border-brand-dark/5 pt-4">
              <div>
                <h4 class="text-brand-pink/50 text-xl font-black uppercase tracking-widest mb-1">{{ item.name }}</h4>
                <h5 class="text-brand-dark font-serif italic text-lg">{{ item.name }}</h5>
                <span class="text-[10px] text-brand-dark/50 font-bold">{{ item.price }}</span>
              </div>
              <button class="text-brand-pink hover:scale-110 transition-transform">
                <Plus :size="20" stroke-width="2" />
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>
