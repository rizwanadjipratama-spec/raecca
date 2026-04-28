<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const sectionRef = ref<HTMLElement | null>(null)
const polaroid1 = ref<HTMLElement | null>(null)
const polaroid2 = ref<HTMLElement | null>(null)

onMounted(() => {
  const ctx = gsap.context(() => {
    // Polaroid floating animation
    gsap.to(polaroid1.value, {
      y: -20,
      rotation: 2,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    gsap.to(polaroid2.value, {
      y: 15,
      rotation: -3,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.5
    })

    // Reveal animation
    gsap.fromTo([polaroid1.value, polaroid2.value], 
      { opacity: 0, scale: 0.8, y: 100 },
      {
        opacity: 1, scale: 1, y: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 60%',
        }
      }
    )

  }, sectionRef.value!)

  return () => ctx.revert()
})
</script>

<template>
  <section ref="sectionRef" class="w-full py-32 bg-brand-cream overflow-hidden">
    <div class="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-8">
      
      <!-- Left: Text -->
      <div class="w-full md:w-1/2 pr-0 md:pr-12">
        <span class="text-xs tracking-[0.2em] font-semibold text-brand-pink uppercase mb-4 block">Beauty as Art</span>
        <h2 class="text-5xl md:text-7xl font-serif text-brand-dark leading-[1.1] mb-8">
          The Raecca <br /> Philosophy.
        </h2>
        <p class="text-brand-text/70 leading-relaxed font-sans text-lg max-w-md">
          We believe cosmetics are more than just products; they are digital-age charms. Each component is designed to feel physical, tactile, and precious in a world that often feels too flat.
        </p>
      </div>

      <!-- Right: Polaroids -->
      <div class="w-full md:w-1/2 relative h-[500px] md:h-[600px] flex items-center justify-center">
        
        <!-- Large Polaroid -->
        <div ref="polaroid1" class="absolute right-4 md:right-12 top-0 md:top-10 z-10 w-[280px] md:w-[350px] bg-white p-4 pb-16 md:pb-20 shadow-[0_20px_40px_rgba(0,0,0,0.1)] rotate-[-2deg] transition-transform duration-500 hover:rotate-0 hover:z-30 hover:scale-105 cursor-pointer">
          <div class="w-full aspect-square bg-gray-100 overflow-hidden mb-4">
            <img src="/images/campaigns/girl-1.png" alt="Girl 1" class="w-full h-full object-cover" />
          </div>
          <div class="absolute bottom-4 left-4">
            <span class="text-[8px] uppercase tracking-[0.2em] text-brand-text/40 block mb-1">Material Charm</span>
            <span class="font-serif italic text-brand-dark text-xl">Reflections of Youth</span>
          </div>
        </div>

        <!-- Small Polaroid -->
        <div ref="polaroid2" class="absolute left-4 md:left-20 bottom-10 md:bottom-20 z-20 w-[200px] md:w-[250px] bg-white p-3 pb-12 shadow-[0_15px_30px_rgba(0,0,0,0.15)] rotate-[5deg] transition-transform duration-500 hover:rotate-0 hover:z-30 hover:scale-105 cursor-pointer">
          <div class="w-full aspect-square bg-gray-100 overflow-hidden mb-3">
            <img src="/images/campaigns/beads.png" alt="Beads" class="w-full h-full object-cover" />
          </div>
          <div class="absolute bottom-3 left-3">
            <span class="font-serif italic text-brand-dark text-lg">Tactile Details</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
