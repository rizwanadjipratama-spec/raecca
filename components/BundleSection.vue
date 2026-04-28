<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ChevronRight } from 'lucide-vue-next'

const sectionRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const ctx = gsap.context(() => {
    // Gentle floating reveal for the entire content
    gsap.fromTo(contentRef.value,
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 1.2,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 75%',
        }
      }
    )

    // Parallax effect on clouds
    gsap.to('.cloud-layer', {
      yPercent: -20,
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
  <section ref="sectionRef" class="relative w-full py-32 md:py-48 overflow-hidden bg-[#FFC5D3] flex items-center justify-center">
    
    <!-- Cloud & Dreamy Background System (Zero Lag CSS) -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden cloud-layer">
      <!-- Soft ambient gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#FFE8EE] via-transparent to-[#FFB5C9] opacity-70"></div>
      
      <!-- CSS Clouds -->
      <div class="absolute -top-20 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/70 blur-[80px] md:blur-[120px] rounded-full animate-[float_10s_ease-in-out_infinite]"></div>
      <div class="absolute top-1/4 -right-20 md:-right-40 w-[400px] md:w-[600px] h-[300px] md:h-[400px] bg-white/60 blur-[100px] md:blur-[140px] rounded-full animate-[float_14s_ease-in-out_infinite_reverse]"></div>
      <div class="absolute -bottom-32 left-1/3 w-[350px] md:w-[700px] h-[350px] md:h-[500px] bg-white/50 blur-[90px] md:blur-[150px] rounded-full animate-[float_12s_ease-in-out_infinite]"></div>
      
      <!-- Sparkles / Stars -->
      <div class="absolute top-16 right-[15%] md:right-[25%] animate-pulse">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" fill="currentColor"/>
        </svg>
      </div>
      <div class="absolute bottom-24 left-[15%] md:left-[25%] animate-[pulse_3s_ease-in-out_infinite] scale-75">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" fill="currentColor"/>
        </svg>
      </div>
    </div>

    <!-- Main Content Box -->
    <div ref="contentRef" class="relative z-10 flex flex-col items-center justify-center px-4 w-full">
      
      <!-- 3D Gel Typography -->
      <div class="flex flex-col items-center text-center select-none mb-12">
        <!-- "Bundle" - Cursive Font -->
        <h2 class="gel-text-bundle text-6xl md:text-8xl lg:text-[7rem] mb-[-1rem] md:mb-[-2rem] z-20" data-text="Bundle">
          Bundle
        </h2>
        <!-- "Product" - Bubbly Sans Font -->
        <h2 class="gel-text-product text-6xl md:text-8xl lg:text-[8rem] uppercase z-30" data-text="Product">
          Product
        </h2>
      </div>

      <!-- Glass Pill Button -->
      <button class="glass-pill-btn group z-40">
        <span class="relative z-10 flex items-center justify-center gap-2 text-[#D73562] font-sans font-black text-sm md:text-lg uppercase tracking-widest">
          SEE MORE <ChevronRight class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" stroke-width="3" />
        </span>
      </button>

    </div>
  </section>
</template>

<style scoped>
/* Pure CSS Cloud Floating Animation */
@keyframes float {
  0% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
  100% { transform: translateY(0px) scale(1); }
}

/* 
  Advanced 3D Gel/Plastic Text Effect 
  Using -webkit-text-stroke on a pseudo-element behind the main text 
  guarantees a perfectly clean outline without jagged edges, 
  combined with gradients and drop-shadows for extreme 3D volume.
*/

.gel-text-bundle, .gel-text-product {
  position: relative;
  display: inline-block;
}

/* "Bundle" Script Font Setup */
.gel-text-bundle {
  font-family: 'Pacifico', cursive;
  background: linear-gradient(180deg, #FFAEC2 0%, #F53A6A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 8px 10px rgba(220, 20, 80, 0.3));
}
.gel-text-bundle::before {
  content: attr(data-text);
  position: absolute;
  left: 0; top: 0;
  z-index: -1;
  background: none;
  -webkit-text-fill-color: white;
  -webkit-text-stroke: 10px white; /* Thick white rim */
}

/* "Product" Bubbly Font Setup */
.gel-text-product {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  letter-spacing: 0.05em;
  background: linear-gradient(180deg, #FF9FB7 0%, #DF275A 60%, #B81543 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 10px 15px rgba(200, 10, 60, 0.4));
}
.gel-text-product::before {
  content: attr(data-text);
  position: absolute;
  left: 0; top: 0;
  z-index: -1;
  background: none;
  -webkit-text-fill-color: white;
  -webkit-text-stroke: 14px white; /* Thicker white rim for larger text */
}

/* Glassmorphism Pill Button */
.glass-pill-btn {
  position: relative;
  padding: 1rem 3rem;
  border-radius: 9999px;
  background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 100%);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.8);
  box-shadow: 
    inset 0px 4px 8px rgba(255,255,255,1), /* Inner top highlight */
    inset 0px -4px 6px rgba(220, 30, 80, 0.15), /* Inner bottom shadow */
    0px 10px 25px rgba(220, 30, 80, 0.2); /* Outer drop shadow */
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.glass-pill-btn:hover {
  transform: translateY(-4px) scale(1.05);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 100%);
  box-shadow: 
    inset 0px 4px 10px rgba(255,255,255,1), 
    inset 0px -4px 8px rgba(220, 30, 80, 0.2), 
    0px 15px 35px rgba(220, 30, 80, 0.3);
}

.glass-pill-btn:active {
  transform: translateY(2px) scale(0.98);
}
</style>
