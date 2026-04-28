<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const sectionRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const ctx = gsap.context(() => {
    // Image Parallax & Reveal
    gsap.fromTo(imageRef.value, 
      { y: 100, opacity: 0, scale: 0.95 },
      { 
        y: 0, opacity: 1, scale: 1, 
        duration: 1.5, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 70%',
        }
      }
    )

    gsap.to(imageRef.value, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

    // Text Stagger Reveal
    const texts = textRef.value!.querySelectorAll('.reveal-text')
    gsap.fromTo(texts,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.value,
          start: 'top 80%',
        }
      }
    )

  }, sectionRef.value!)

  return () => ctx.revert()
})
</script>

<template>
  <section ref="sectionRef" id="editorial" class="relative w-full py-32 bg-brand-cream overflow-hidden">
    <div class="container mx-auto px-6 md:px-12">
      <div class="flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        <!-- Left: Image -->
        <div class="w-full md:w-1/2 relative">
          <div ref="imageRef" class="relative w-full aspect-[4/5] overflow-hidden shadow-2xl">
            <img 
              src="/images/campaigns/glossy-lips.png" 
              alt="Crafting the Perfect Pout" 
              class="w-full h-full object-cover scale-110"
            />
            
            <!-- Overlay Text on Image -->
            <div class="absolute bottom-8 left-8 text-white z-10 pointer-events-none">
              <h3 class="font-serif italic text-3xl mb-2 text-shadow-md">The Resin Finish</h3>
              <p class="text-sm font-sans opacity-90 max-w-xs text-shadow-sm">
                Mimicking the crystalline shine of urban charms. Non-sticky, pure digital-tactile delight.
              </p>
            </div>
            
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

        <!-- Right: Text Content -->
        <div ref="textRef" class="w-full md:w-1/2 flex flex-col justify-center">
          <span class="reveal-text text-xs tracking-[0.2em] font-semibold text-brand-pink uppercase mb-6">
            Chapter 04 // Reflection
          </span>
          
          <h2 class="text-5xl md:text-7xl font-serif text-brand-dark leading-[1.1] mb-2 reveal-text">
            Crafting the
          </h2>
          <h2 class="text-5xl md:text-7xl font-serif italic text-brand-pink leading-[1.1] mb-8 reveal-text">
            Perfect Pout
          </h2>

          <p class="text-brand-text/70 leading-relaxed max-w-md mb-10 reveal-text font-sans text-lg">
            Inspired by Japanese editorial magazine spreads, our new formula prioritizes visual structural integrity and high-fashion minimalism.
          </p>

          <div class="reveal-text">
            <NuxtLink to="#archives" class="inline-block bg-brand-pink text-white font-bold text-xs tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:bg-brand-dark transition-all duration-300 transform hover:scale-105 shadow-[0_10px_30px_rgba(209,18,97,0.3)]">
              Explore the Archive →
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
