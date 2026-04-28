<template>
  <footer class="w-full bg-[#FAF8F5] pt-24 pb-8 border-t border-brand-dark/5">
    <div class="container mx-auto px-6 md:px-12">
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        
        <!-- Brand -->
        <div class="md:col-span-1">
          <h2 class="text-3xl font-black italic tracking-tighter text-brand-pink uppercase mb-4">
            Raecca
          </h2>
          <p class="text-brand-text/60 font-serif italic text-sm max-w-xs leading-relaxed">
            Elevating your daily ritual with a touch of pink magic and editorial luxury.
          </p>
        </div>

        <!-- Explore Links -->
        <div>
          <h4 class="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-dark mb-6">Explore</h4>
          <ul class="space-y-4 text-xs tracking-widest text-brand-text/60 uppercase">
            <li><NuxtLink to="#" class="hover:text-brand-pink transition-colors">Shipping</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-brand-pink transition-colors">Returns</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-brand-pink transition-colors">Contact</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-brand-pink transition-colors">Privacy</NuxtLink></li>
          </ul>
        </div>

        <!-- Social Links -->
        <div>
          <h4 class="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-dark mb-6">Social</h4>
          <ul class="space-y-4 text-xs tracking-widest text-brand-text/60 uppercase">
            <li><a href="#" class="hover:text-brand-pink transition-colors">Instagram</a></li>
            <li><a href="#" class="hover:text-brand-pink transition-colors">TikTok</a></li>
            <li><a href="#" class="hover:text-brand-pink transition-colors">Pinterest</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-dark mb-6">Newsletter</h4>
          <form @submit.prevent class="relative border-b border-brand-text/20 pb-2">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              class="w-full bg-transparent text-xs tracking-[0.1em] text-brand-dark placeholder-brand-text/40 focus:outline-none"
            />
            <button type="submit" class="absolute right-0 top-0 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-pink hover:text-brand-dark transition-colors">
              Join
            </button>
          </form>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="flex flex-col md:flex-row justify-between items-center border-t border-brand-dark/5 pt-8 text-[8px] tracking-[0.2em] uppercase text-brand-text/40 font-bold">
        <p>&copy; 2026 RAECCA BEAUTY. CRAFTED FOR THE BOLD.</p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <span>YT</span>
          <span>IG</span>
          <span>TT</span>
        </div>
      </div>

    </div>
  </footer>
</template>
