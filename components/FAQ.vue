<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { Plus, Minus } from 'lucide-vue-next'
import { useHead } from '#imports'

const sectionRef = ref<HTMLElement | null>(null)
const openIndex = ref<number | null>(null)

const faqs = [
  {
    question: "Apakah Raecca Glow Up Tint tahan lama (long-lasting)?",
    answer: "Ya, formula inovatif kami dirancang untuk transferproof dan tahan seharian. Stain yang dihasilkan sangat kuat namun tetap menjaga kelembapan bibir berkat kandungan Jojoba Oil."
  },
  {
    question: "Apakah produk kosmetik Raecca aman untuk bibir kering & sensitif?",
    answer: "Pasti! Semua lini produk Raecca diformulasikan bebas paraben, vegan, dan cruelty-free. Kami menggunakan agen hidrasi tingkat tinggi untuk mencegah bibir pecah-pecah."
  },
  {
    question: "Shade Glow Up Tint mana yang paling direkomendasikan untuk kulit sawo matang?",
    answer: "Untuk kulit sawo matang, kami merekomendasikan shade 'Confidence' (Deep Maroon) untuk tampilan berani, dan 'Joyful' untuk kesan natural yang elegan sehari-hari."
  },
  {
    question: "Bagaimana cara mendapatkan efek 'Glass Lips' yang maksimal?",
    answer: "Aplikasikan satu layer tipis, diamkan selama 30 detik agar stain menyerap, lalu timpa dengan layer kedua tanpa dikatupkan. Hasilnya akan terlihat sangat glossy dan bervolume seperti kaca."
  }
]

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

// Generate JSON-LD for SEO Maxxing (Google Rich Snippets)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(faqSchema)
    }
  ]
})

onMounted(() => {
  const ctx = gsap.context(() => {
    gsap.from('.faq-item', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 75%',
      }
    })
  }, sectionRef.value!)

  return () => ctx.revert()
})
</script>

<template>
  <section ref="sectionRef" class="w-full py-24 md:py-32 bg-brand-cream relative z-10" id="faq">
    <div class="container mx-auto px-6 max-w-4xl">
      <!-- Section Header -->
      <div class="text-center mb-16 md:mb-24">
        <h2 class="text-xs tracking-[0.3em] font-semibold uppercase text-brand-pink mb-4">FAQ & Information</h2>
        <h3 class="text-5xl md:text-7xl font-serif italic text-brand-dark mb-6">Frequently Asked.</h3>
        <p class="text-brand-text/70 max-w-xl mx-auto text-lg">Segala hal yang perlu kamu ketahui tentang formula ajaib Raecca, koleksi shade pilihan, dan tips perawatan bibir terbaik.</p>
      </div>

      <!-- FAQ Accordion -->
      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="faq-item group bg-white/50 backdrop-blur-sm border border-brand-pink/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-pink shadow-sm"
        >
          <button 
            @click="toggleFaq(index)"
            class="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
          >
            <h4 class="text-lg md:text-xl font-semibold text-brand-dark pr-8 transition-colors duration-300" :class="{ 'text-brand-pink': openIndex === index }">
              {{ faq.question }}
            </h4>
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-pink transition-all duration-300" :class="{ 'rotate-180 bg-brand-pink text-white shadow-md': openIndex === index }">
              <Minus v-if="openIndex === index" :size="20" />
              <Plus v-else :size="20" />
            </div>
          </button>
          
          <!-- Answer Content (Animated Height) -->
          <div 
            class="grid transition-all duration-500 ease-in-out"
            :class="openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="overflow-hidden">
              <p class="px-6 md:px-8 pb-6 md:pb-8 text-brand-text leading-relaxed text-base md:text-lg">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
