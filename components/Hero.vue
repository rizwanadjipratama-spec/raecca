<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const heroContainer = ref<HTMLElement | null>(null)

// Parallax Refs
const parallax1 = ref<HTMLElement | null>(null)
const parallax2 = ref<HTMLElement | null>(null)
const parallax3 = ref<HTMLElement | null>(null)

// Floating Refs
const liptint1 = ref<HTMLElement | null>(null)
const liptint2 = ref<HTMLElement | null>(null)
const liptint3 = ref<HTMLElement | null>(null)

// Text Refs
const titleTop = ref<HTMLElement | null>(null)
const titleBottom = ref<HTMLElement | null>(null)
const titleContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  const ctx = gsap.context(() => {
    // Initial Load Animation
    const tl = gsap.timeline()
    
    tl.from([titleTop.value, titleBottom.value], {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power4.out',
      delay: 0.2
    })
    
    tl.from([parallax2.value, parallax1.value, parallax3.value], {
      y: 150,
      opacity: 0,
      rotation: 15,
      duration: 1.5,
      stagger: 0.15,
      ease: 'back.out(1.2)'
    }, "-=1")

    // Continuous Floating Animation (applied to inner elements)
    gsap.to(liptint1.value, { y: '-=15', rotation: '-=2', duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    gsap.to(liptint2.value, { y: '-=18', rotation: '-=3', duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 })
    gsap.to(liptint3.value, { y: '-=10', rotation: '-=4', duration: 4.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 })

    // Scroll Parallax Animation (applied to outer elements)
    gsap.to(parallax1.value, {
      yPercent: -60,
      ease: 'none',
      scrollTrigger: { trigger: heroContainer.value, start: 'top top', end: 'bottom top', scrub: true }
    })
    gsap.to(parallax2.value, {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: { trigger: heroContainer.value, start: 'top top', end: 'bottom top', scrub: true }
    })
    gsap.to(parallax3.value, {
      yPercent: -70,
      ease: 'none',
      scrollTrigger: { trigger: heroContainer.value, start: 'top top', end: 'bottom top', scrub: true }
    })
    
    // Text Parallax
    gsap.to(titleContainer.value, {
      yPercent: 40,
      opacity: 0,
      ease: 'none',
      scrollTrigger: { trigger: heroContainer.value, start: 'top top', end: 'bottom top', scrub: true }
    })
  }, heroContainer.value!)

  return () => ctx.revert()
})
</script>

<template>
  <section ref="heroContainer" class="relative w-full h-screen overflow-hidden bg-gradient-to-b from-brand-blush/20 to-brand-cream flex items-center justify-center">
    
    <!-- Background Gradient Blob -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[100px] mix-blend-multiply pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10 w-full h-full flex flex-col md:flex-row items-center pt-20">
      
      <!-- Typography (Left side) -->
      <div class="w-full md:w-1/2 flex flex-col justify-center relative z-30" ref="titleContainer">
        <p class="text-xs tracking-[0.3em] font-semibold uppercase text-brand-text/60 mb-4 ml-2">New Drop 2026</p>
        <div class="overflow-hidden">
          <h1 ref="titleTop" class="text-7xl md:text-[8rem] lg:text-[10rem] font-serif italic text-brand-dark leading-[0.8] drop-shadow-sm">
            Sweet
          </h1>
        </div>
        <div class="overflow-hidden ml-12 md:ml-24 mt-2">
          <h1 ref="titleBottom" class="text-6xl md:text-8xl lg:text-9xl font-sans font-black text-brand-pink tracking-tighter uppercase leading-[0.8] drop-shadow-md">
            But Sharp.
          </h1>
        </div>
      </div>

      <!-- 3D Parallax Products (Right side) -->
      <div class="w-full md:w-1/2 relative h-[400px] md:h-[700px] mt-32 md:mt-0 flex items-center justify-center pointer-events-none z-20">
        
        <!-- Center Bounding Box for tight grouping -->
        <div class="relative w-full h-[500px] md:h-[600px] flex items-center justify-center -ml-12 md:-ml-32">
          
          <!-- Back Liptint (Top Left) -->
          <div ref="parallax1" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -ml-16 -mt-32 md:-ml-24 md:-mt-48 w-[140px] md:w-[200px] z-10 opacity-90 blur-[1px]">
            <div ref="liptint1" class="w-full h-full rotate-[-15deg]">
              <img src="/images/products/hero-liptint-1.png" alt="Raecca Lip Tint 1" class="w-full h-auto drop-shadow-xl" />
            </div>
          </div>
          
          <!-- Front Center Liptint -->
          <div ref="parallax2" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -ml-12 mt-12 md:-ml-24 md:mt-24 w-[160px] md:w-[240px] z-30">
            <div ref="liptint2" class="w-full h-full">
              <img src="/images/products/hero-liptint-2.png" alt="Raecca Lip Tint 2" class="w-full h-auto drop-shadow-2xl" />
            </div>
          </div>

          <!-- Front Right Liptint (Bottom Right) -->
          <div ref="parallax3" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-24 -mt-8 md:ml-32 md:-mt-12 w-[150px] md:w-[220px] z-20 opacity-95">
            <div ref="liptint3" class="w-full h-full rotate-[15deg]">
              <img src="/images/products/hero-liptint-3.png" alt="Raecca Lip Tint 3" class="w-full h-auto drop-shadow-xl" />
            </div>
          </div>

        </div>
      </div>

    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-text/40 opacity-70 z-30">
      <span class="text-[10px] tracking-[0.2em] uppercase font-semibold">Scroll to Explore</span>
      <div class="w-[1px] h-12 bg-brand-text/20 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full bg-brand-pink animate-[slideDown_2s_ease-in-out_infinite]"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slideDown {
  0% { transform: translateY(-100%); }
  50% { transform: translateY(0); }
  100% { transform: translateY(100%); }
}
</style>
