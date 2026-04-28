<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const sectionRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const ctx = gsap.context(() => {
    gsap.from(imageRef.value, {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 60%',
      }
    })

    const texts = textRef.value!.querySelectorAll('.reveal')
    gsap.from(texts, {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: textRef.value,
        start: 'top 70%',
      }
    })
  }, sectionRef.value!)

  return () => ctx.revert()
})
</script>

<template>
  <section ref="sectionRef" class="w-full py-32 bg-brand-cream overflow-hidden">
    <div class="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
      
      <!-- Left Image -->
      <div class="w-full md:w-1/2 relative">
        <div ref="imageRef" class="w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
          <!-- Using girl-3 or girl-4 for this section based on available assets -->
          <img src="/images/campaigns/girl-3.png" alt="Crafted for the bold" class="w-full h-full object-cover" />
        </div>
        <!-- Small floating element -->
        <div class="absolute -bottom-8 -right-8 w-40 h-40 bg-black rounded-lg border-4 border-white shadow-xl overflow-hidden hidden md:block transform rotate-6 hover:rotate-0 transition-transform duration-500">
           <img src="/images/campaigns/girl-4.png" alt="Detail" class="w-full h-full object-cover opacity-80" />
        </div>
      </div>

      <!-- Right Text -->
      <div ref="textRef" class="w-full md:w-1/2">
        <span class="reveal text-xs tracking-[0.3em] font-bold text-brand-pink uppercase mb-6 block">
          Crafted for the bold
        </span>
        
        <h2 class="reveal text-6xl md:text-8xl font-sans font-light text-brand-pink leading-none tracking-tighter uppercase mb-2">
          Sweet
        </h2>
        <h2 class="reveal text-6xl md:text-8xl font-sans font-black text-brand-dark leading-none tracking-tighter uppercase mb-8">
          But Sharp.
        </h2>

        <p class="reveal text-brand-text/70 leading-relaxed max-w-md font-serif italic text-xl mb-12">
          A fusion of Y2K nostalgia and editorial precision. Our formula is designed for high-shine, long-lasting digital aesthetics that translate perfectly into the physical world.
        </p>

        <div class="reveal flex items-center gap-4">
          <div class="flex -space-x-3">
            <div class="w-8 h-8 rounded-full bg-[#FFB6C1] border-2 border-brand-cream"></div>
            <div class="w-8 h-8 rounded-full bg-[#FF69B4] border-2 border-brand-cream"></div>
            <div class="w-8 h-8 rounded-full bg-[#FFC0CB] border-2 border-brand-cream"></div>
          </div>
          <span class="text-[8px] font-bold tracking-[0.2em] uppercase text-brand-text/50">+ 12 MORE SHADES</span>
        </div>
      </div>

    </div>
  </section>
</template>
