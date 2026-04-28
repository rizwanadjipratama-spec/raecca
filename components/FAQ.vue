<script setup lang="ts">
import { ref } from 'vue'
import { Plus, Minus } from 'lucide-vue-next'

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
</script>

<template>
  <section class="w-full py-24 md:py-32 bg-[#FFEBFO] relative z-10" id="faq" style="background-color: #FFF0F5;">
    <div class="container mx-auto px-6 max-w-4xl">
      <!-- Section Header -->
      <div class="text-center mb-16 md:mb-24">
        <h2 class="text-sm tracking-[0.3em] font-black uppercase text-[#D73562] mb-4 bg-white/60 inline-block px-4 py-1 rounded-full border border-[#FFAEC2]">FAQ & Information</h2>
        <h3 class="text-5xl md:text-7xl font-serif italic text-[#8A4C65] mb-6">Frequently Asked.</h3>
        <p class="text-[#A05C7B] max-w-xl mx-auto text-lg font-medium">Segala hal yang perlu kamu ketahui tentang formula ajaib Raecca, koleksi shade pilihan, dan tips perawatan bibir terbaik.</p>
      </div>

      <!-- FAQ Accordion -->
      <div class="space-y-6">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="faq-item group border-2 rounded-[2rem] overflow-hidden transition-all duration-500"
          :class="openIndex === index ? 'bg-white border-[#FFAEC2] shadow-[0_15px_40px_-10px_rgba(255,174,194,0.6)]' : 'bg-white/40 border-transparent hover:border-[#FFAEC2]/60 hover:bg-white/80'"
        >
          <button 
            @click="toggleFaq(index)"
            class="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
          >
            <h4 class="text-lg md:text-xl font-bold transition-colors duration-300 pr-4" :class="openIndex === index ? 'text-[#D73562]' : 'text-[#A05C7B] group-hover:text-[#D73562]'">
              {{ faq.question }}
            </h4>
            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm" :class="openIndex === index ? 'bg-[#D73562] text-white rotate-180 scale-110 shadow-md' : 'bg-[#FFE8EE] text-[#D73562] group-hover:scale-110 group-hover:bg-[#FFC5D3]'">
              <Minus v-if="openIndex === index" :size="24" stroke-width="3" />
              <Plus v-else :size="24" stroke-width="3" />
            </div>
          </button>
          
          <!-- Answer Content (Animated Height) -->
          <div 
            class="grid transition-all duration-500 ease-in-out"
            :class="openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="overflow-hidden">
              <p class="px-6 md:px-8 pb-8 text-[#8A4C65] leading-relaxed text-base md:text-lg font-medium">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
