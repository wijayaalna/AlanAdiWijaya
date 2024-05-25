<template>
  <div class="min-h-screen flex flex-col">
    <div class="h-8 bg-violet-900 flex items-center justify-center text-white">
      Dapatkan Diskon 50%! Sekarang
    </div>
    <nav class="bg-white dark:bg-white sticky top-0 z-50">
      <div class="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <!-- Left Section -->
        <a aria-current="page" href="#" class="router-link-active router-link-exact-active cursor-pointer ml-10">
          <img src="../assets/logo-3.png" alt="logo toko buket" class="w-14">
        </a>
        
        <!-- Middle Section -->
        <div class="flex-grow hidden lg:flex items-center justify-center gap-9">
          <a href="jaket" class="cursor-pointer hover:opacity-50">Jakets</a>
          <a href="T-shirts" class="cursor-pointer hover:opacity-50">T-shirts</a>
          <a href="Crewneck" class="cursor-pointer hover:opacity-50">Crewneck</a>
        </div>
        
        <!-- Right Section -->
        <div class="flex items-center gap-10">
          <div class="cursor-pointer hover:opacity-50">
            <i class="bi bi-search-heart text-dark text-xl"></i>
          </div>
          <a href="/cart" class="cursor-pointer hover:opacity-50 relative mr-14">
            <i class="bi bi-cart text-dark text-xl"></i>
            <div class="w-3 h-3 rounded-full text-[8px] flex justify-center items-center text-white absolute z-10 bg-violet-500 top-0 -right-1">4</div>
          </a>
        </div>
      </div>
    </nav>
    
    <!-- Hero Section -->
    <section id="section-1" class="relative">
  <img src="../assets/island1.png" alt="background toko buket" class="w-full lg:h-auto h-[265px] object-fill max-h-[550px]"> 
  <div class="absolute z-10 top-1/4 lg:top-1/2 lg:right-0 w-full lg:w-3/1 lg:px-20 px-4">
    <div class="capitalize text-white text-xl lg:text-4xl tracking-wide leading-snug text-left"> 
      <span class="font-bold">Baju</span> Bagus Dan <br>
      <span class="font-bold">Keren</span> Untuk orang <br>
      Casual
    </div>
    <div class="text-right">
    <div class="cursor-pointer bg-violet-900 lg:p-4 p-2 w-40 lg:w-52 text-center text-white rounded lg:text-base text-xs mt-4 lg:mt-8 hover:opacity-70">
      Dapatkan Sekarang
    </div>
  </div>
</div>
</section>

    <section id="section-2" class="lg:py-20 py-10 w-full bg-violet-500">
  <div class="w-full text-center text-xl text-dark">Keuntungan Yang Kami Berikan</div>
  <div class="mt-6 lg:mt-12 w-full grid grid-cols-2 lg:flex gap-6 lg:gap-10 justify-between lg:px-20 px-4">
    <div class="bg-white py-6 lg:w-[287px] rounded flex flex-col gap-2 col-span-1 px-4">
      <div class="w-full text-center text-primary">
        <i class="bi bi-truck text-5xl"></i>
      </div>
      <div class="text-dark w-full text-center lg:text-lg">Bisa Pembayaran COD</div>
    </div>
    <div class="bg-white py-6 lg:w-[287px] rounded flex flex-col gap-2 col-span-1 px-4">
      <div class="w-full text-center text-primary">
        <i class="bi bi-person-check text-5xl"></i>
      </div>
      <div class="text-dark w-full text-center lg:text-lg">Pelanggan Puas</div>
    </div>
    <div class="bg-white py-6 lg:w-[287px] rounded flex flex-col gap-2 col-span-1 px-4">
      <div class="w-full text-center text-primary">
        <i class="bi bi-check2-circle text-5xl"></i>
      </div>
      <div class="text-dark w-full text-center lg:text-lg">Kualitas Terjamin</div>
    </div>
    <div class="bg-white py-6 lg:w-[287px] rounded flex flex-col gap-2 col-span-1 px-4">
      <div class="w-full text-center text-primary">
        <i class="bi bi-shield-check text-5xl"></i>
      </div>
      <div class="text-dark w-full text-center lg:text-lg">Pembayaran Terpercaya</div>
    </div>
  </div>
</section>
<section id="section-2" class="py-16 lg:px-20 px-4 flex flex-col gap-10 bg-violet-50">
  <div class="w-full text-start text-xl text-dark flex justify-center items-center">Kategori Produk</div>
  <div class="w-[362px] md:w-full overflow-x-auto">
    <div class="flex w-full">
      <div class="w-full p-8 cursor-pointer hover:opacity-50 lg:h-36 flex justify-center items-center bg-violet-300">
        Jakets
      </div>
      <div class="w-full p-8 cursor-pointer hover:opacity-50 lg:h-36 flex justify-center items-center bg-violet-200">
        T-shirts
      </div>
      <div class="w-full p-8 cursor-pointer hover:opacity-50 lg:h-36 flex justify-center items-center bg-violet-300">
        Crewneck
      </div>
    </div>
  </div>
</section>
<section id="section-3" class="py-8 lg:py-16 lg:px-20 px-4 flex flex-col gap-10 bg-violet-50">
  <div class="w-full text-start text-xl text-dark">Jakets</div>
  <div>
    <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
      <div class="bg-accent3 rounded bg-violet-200 bg-violet-200">
        <div>
          <img alt="buket uang 1" class="w-full h-56 object-cover image-lazy pulse" lazy="loaded" src="../assets/stoneIsland/gm2.png">
        </div>
        <div class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-2">
          <div class="text-dark text-sm font-medium">Jakets</div>
          <div class="flex items-center gap-1">
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
          </div>
          <div class="flex justify-between w-full items-center">
            <div class="text-dark font-medium text-sm">Rp&nbsp;4.500.000</div>
            <div class="bg-violet-500 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60">
              <i class="bi bi-cart-plus text-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-accent3 rounded bg-violet-200 bg-violet-200">
        <div>
          <img alt="buket uang 1" class="w-full h-56 object-cover image-lazy pulse" lazy="loaded" src="../assets/stoneIsland/gm.png">
        </div>
        <div class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-2">
          <div class="text-dark text-sm font-medium">Jakets</div>
          <div class="flex items-center gap-1">
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
          </div>
          <div class="flex justify-between w-full items-center">
            <div class="text-dark font-medium text-sm">Rp&nbsp;4.500.000</div>
            <div class="bg-violet-500 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60">
              <i class="bi bi-cart-plus text-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-accent3 rounded bg-violet-200">
        <div>
          <img alt="buket uang 1" class="w-full h-56 object-cover image-lazy pulse" lazy="loaded" src="../assets/stoneIsland/gm1.png">
        </div>
        <div class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-2">
          <div class="text-dark text-sm font-medium">Jakets</div>
          <div class="flex items-center gap-1">
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
          </div>
          <div class="flex justify-between w-full items-center">
            <div class="text-dark font-medium text-sm">Rp&nbsp;4.500.000</div>
            <div class="bg-violet-500 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60">
              <i class="bi bi-cart-plus text-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-accent3 rounded bg-violet-200">
        <div>
          <img alt="buket uang 1" class="w-full h-56 object-cover image-lazy pulse" lazy="loaded" src="../assets/stoneIsland/gm4.png">
        </div>
        <div class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-2">
          <div class="text-dark text-sm font-medium">Jakets</div>
          <div class="flex items-center gap-1">
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
          </div>
          <div class="flex justify-between w-full items-center">
            <div class="text-dark font-medium text-sm">Rp&nbsp;4.500.000</div>
            <div class="bg-violet-500 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60">
              <i class="bi bi-cart-plus text-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-accent3 rounded bg-violet-200">
        <div>
          <img alt="buket uang 1" class="w-full h-56 object-cover image-lazy pulse" lazy="loaded" src="../assets/stoneIsland/gm3.png">
        </div>
        <div class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-2">
          <div class="text-dark text-sm font-medium">Jakets</div>
          <div class="flex items-center gap-1">
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
          </div>
          <div class="flex justify-between w-full items-center">
            <div class="text-dark font-medium text-sm">Rp&nbsp;4.500.000</div>
            <div class="bg-violet-500 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60">
              <i class="bi bi-cart-plus text-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full text-center hover:opacity-60 text-dark">
    <a href="/buket-uang">Lihat Semuanya</a>
  </div>
</section>
<section id="section-3" class="py-8 lg:py-16 lg:px-20 px-4 flex flex-col gap-10 bg-violet-50">
  <div class="w-full text-start text-xl text-dark">T-shirts</div>
  <div>
    <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
      <div class="bg-accent3 rounded bg-violet-200">
        <div>
          <img alt="buket uang 1" class="w-full h-56 object-cover image-lazy pulse" lazy="loaded" src="../assets/stoneIsland/gm6.png">
        </div>
        <div class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-2">
          <div class="text-dark text-sm font-medium">T-shirts</div>
          <div class="flex items-center gap-1">
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
          </div>
          <div class="flex justify-between w-full items-center">
            <div class="text-dark font-medium text-sm">Rp&nbsp;4.500.000</div>
            <div class="bg-violet-500 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60">
              <i class="bi bi-cart-plus text-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-accent3 rounded bg-violet-200">
        <div>
          <img alt="buket uang 1" class="w-full h-56 object-cover image-lazy pulse" lazy="loaded" src="../assets/stoneIsland/gm7.png">
        </div>
        <div class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-2">
          <div class="text-dark text-sm font-medium">T-shirts</div>
          <div class="flex items-center gap-1">
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
          </div>
          <div class="flex justify-between w-full items-center">
            <div class="text-dark font-medium text-sm">Rp&nbsp;4.500.000</div>
            <div class="bg-violet-500 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60">
              <i class="bi bi-cart-plus text-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-accent3 rounded bg-violet-200">
        <div>
          <img alt="buket uang 1" class="w-full h-56 object-cover image-lazy pulse" lazy="loaded" src="../assets/stoneIsland/gm8.png">
        </div>
        <div class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-2">
          <div class="text-dark text-sm font-medium">T-shirts</div>
          <div class="flex items-center gap-1">
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
          </div>
          <div class="flex justify-between w-full items-center">
            <div class="text-dark font-medium text-sm">Rp&nbsp;4.500.000</div>
            <div class="bg-violet-500 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60">
              <i class="bi bi-cart-plus text-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-accent3 rounded bg-violet-200">
        <div>
          <img alt="buket uang 1" class="w-full h-56 object-cover image-lazy pulse" lazy="loaded" src="../assets/stoneIsland/gm9.png">
        </div>
        <div class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-2">
          <div class="text-dark text-sm font-medium">T-shirts</div>
          <div class="flex items-center gap-1">
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
          </div>
          <div class="flex justify-between w-full items-center">
            <div class="text-dark font-medium text-sm">Rp&nbsp;4.500.000</div>
            <div class="bg-violet-500 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60">
              <i class="bi bi-cart-plus text-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-accent3 rounded bg-violet-200">
        <div>
          <img alt="buket uang 1" class="w-full h-56 object-cover image-lazy pulse" lazy="loaded" src="../assets/stoneIsland/gm10.png">
        </div>
        <div class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-2">
          <div class="text-dark text-sm font-medium">T-shirts</div>
          <div class="flex items-center gap-1">
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
          </div>
          <div class="flex justify-between w-full items-center">
            <div class="text-dark font-medium text-sm">Rp&nbsp;4.500.000</div>
            <div class="bg-violet-500 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60">
              <i class="bi bi-cart-plus text-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full text-center hover:opacity-60 text-dark">
    <a href="/buket-uang">Lihat Semuanya</a>
  </div>
</section>
<section id="section-3" class="py-8 lg:py-16 lg:px-20 px-4 flex flex-col gap-10 bg-violet-50">
  <div class="w-full text-start text-xl text-dark">Crewneck</div>
  <div>
    <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
      <div class="bg-accent3 rounded bg-violet-200">
        <div>
          <img alt="buket uang 1" class="w-full h-56 object-cover image-lazy pulse" lazy="loaded" src="../assets/stoneIsland/gm11.png">
        </div>
        <div class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-2">
          <div class="text-dark text-sm font-medium">Crewneck</div>
          <div class="flex items-center gap-1">
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
          </div>
          <div class="flex justify-between w-full items-center">
            <div class="text-dark font-medium text-sm">Rp&nbsp;4.500.000</div>
            <div class="bg-violet-500 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60">
              <i class="bi bi-cart-plus text-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-accent3 rounded bg-violet-200">
        <div>
          <img alt="buket uang 1" class="w-full h-56 object-cover image-lazy pulse" lazy="loaded" src="../assets/stoneIsland/gm12.png">
        </div>
        <div class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-2">
          <div class="text-dark text-sm font-medium">Crewneck</div>
          <div class="flex items-center gap-1">
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
          </div>
          <div class="flex justify-between w-full items-center">
            <div class="text-dark font-medium text-sm">Rp&nbsp;4.500.000</div>
            <div class="bg-violet-500 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60">
              <i class="bi bi-cart-plus text-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-accent3 rounded bg-violet-200">
        <div>
          <img alt="buket uang 1" class="w-full h-56 object-cover image-lazy pulse" lazy="loaded" src="../assets/stoneIsland/gm13.png">
        </div>
        <div class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-2">
          <div class="text-dark text-sm font-medium">Crewneck</div>
          <div class="flex items-center gap-1">
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
          </div>
          <div class="flex justify-between w-full items-center">
            <div class="text-dark font-medium text-sm">Rp&nbsp;4.500.000</div>
            <div class="bg-violet-500 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60">
              <i class="bi bi-cart-plus text-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-accent3 rounded bg-violet-200">
        <div>
          <img alt="buket uang 1" class="w-full h-56 object-cover image-lazy pulse" lazy="loaded" src="../assets/stoneIsland/gm14.png">
        </div>
        <div class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-2">
          <div class="text-dark text-sm font-medium">Crewneck</div>
          <div class="flex items-center gap-1">
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
          </div>
          <div class="flex justify-between w-full items-center">
            <div class="text-dark font-medium text-sm">Rp&nbsp;4.500.000</div>
            <div class="bg-violet-500 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60">
              <i class="bi bi-cart-plus text-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-accent3 rounded bg-violet-200">
        <div>
          <img alt="buket uang 1" class="w-full h-56 object-cover image-lazy pulse" lazy="loaded" src="../assets/stoneIsland/gm15.png">
        </div>
        <div class="flex flex-col gap-1 mx-3 lg:mx-4 mb-4 mt-2">
          <div class="text-dark text-sm font-medium">Crewneck</div>
          <div class="flex items-center gap-1">
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
            <i class="bi bi-star-fill text-xs text-secondary"></i>
          </div>
          <div class="flex justify-between w-full items-center">
            <div class="text-dark font-medium text-sm">Rp&nbsp;4.500.000</div>
            <div class="bg-violet-500 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-60">
              <i class="bi bi-cart-plus text-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full text-center hover:opacity-60 text-dark">
    <a href="/buket-uang">Lihat Semuanya</a>
  </div>
</section>
<section
    id="section-9"
    class="py-8 lg:py-16 lg:px-20 px-4 flex flex-col gap-10 bg-violet-100"
  >
    <div class="w-full text-center text-xl text-dark">Testimoni Pelanggan</div>
    <div class="flex space-x-3">
      <div class="flex-1 bg-violet-400 text-center p-8">
        <i class="bi bi-person-fill text-white text-4xl"></i>
        <div class="font-semibold text-white text-2xl">Alan Adi Wijaya</div>
        <div class="text-white">Lorem ipmsum dolar sit amet</div>
      </div>
      <div class="flex-1 bg-violet-400 text-center p-8">
        <i class="bi bi-person-fill text-white text-4xl"></i>
        <div class="font-semibold text-white text-2xl">Alan Adi Wijaya</div>
        <div class="text-white">Lorem ipmsum dolar sit amet</div>
      </div>
    </div>
  </section>
  <section
    id="section-9"
    class="py-8 lg:py-16 lg:px-20 px-4 flex flex-col gap-10 bg-gray-100"
  >
    <div class="w-full text-xl text-dark">Metode Pembayaran</div>
    <div class="flex gap-8">
      <div class="bg-white rounded p-4">
        <div>
          <img src="../assets/stoneIsland/dana.png" class="w-24 h-auto" />
        </div>
      </div>
      <div class="bg-white rounded p-4">
        <div>
          <img src="../assets/stoneIsland/bca.png" class="w-24 h-auto" />
        </div>
      </div>
    </div>
  </section>
  <section
    id="section-9"
    class="py-8 lg:py-16 px-4 lg:px-20 flex flex-col gap-10 bg-aboo bg-gray-100"
  >
    <div class="w-full text-start text-xl text-dark">Pertanyaan Umum (FAQ)</div>
    <div class="flex flex-col gap-4">
      <details class="bg-violet-100 cursor-pointer p-4 flex flex-col gap-2">
        <summary class="flex w-full justify-between items-center text-dark">
          <div class="font-medium">lorem ipsum dolor sit amet?</div>
          <div><i class="bi bi-chevron-down"></i></div>
        </summary>
        <div class="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </details>
      <details class="bg-violet-100 cursor-pointer p-4 flex flex-col gap-2">
        <summary class="flex w-full justify-between items-center text-dark">
          <div class="font-medium">lorem ipsum dolor sit amet?</div>
          <div><i class="bi bi-chevron-down"></i></div>
        </summary>
        <div class="mt-2">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </details>
      <details class="bg-violet-100 cursor-pointer p-4 flex flex-col gap-2">
        <summary class="flex w-full justify-between items-center text-dark">
          <div class="font-medium">lorem ipsum dolor sit amet?</div>
          <div><i class="bi bi-chevron-down"></i></div>
        </summary>
        <div class="mt-2">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </div>
      </details>
      <details class="bg-violet-100 cursor-pointer p-4 flex flex-col gap-2">
        <summary class="flex w-full justify-between items-center text-dark">
          <div class="font-medium">lorem ipsum dolor sit amet?</div>
          <div><i class="bi bi-chevron-down"></i></div>
        </summary>
        <div class="mt-2">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </div>
      </details>
    </div>
  </section>
  <footer>
    <div
      id="cta"
      class="bg-white py-12 w-full flex lg:flex-row flex-col gap-4 justify-between items-center px-4 lg:px-20"
    >
      <div
        class="text-xl lg:text-2xl text-center lg:text-start font-medium text-dark leading-normal tracking-tighter"
      >
        Lebih Mudah Untuk Membeli <br />
        Baju Untuk Orang Tercinta
      </div>
      <div
        class="cursor-pointer bg-violet-900 p-2 lg:p-4 w-40 lg:w-52 text-sm text-center text-white rounded hover:opacity-70"
      >
        Dapatkan Sekarang
      </div>
    </div>
    <div
      class="bg-violet-900 w-full pt-16 pb-4 px-4 lg:px-20 flex flex-col items-center lg:items-start gap-12"
    >
      <div>
        <img src="../assets/logo-3.png" alt="logo" class="w-52 h-auto" />
      </div>
      <div
        class="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-center items-center lg:justify-between w-full lg:items-start"
      >
        <div class="flex flex-col gap-4 text-white text-center lg:text-start">
          <div class="font-medium lg:text-lg">Alamat</div>
          <div class="text-sm lg:text-base">Cianjur, Jawa Barat</div>
        </div>
        <div class="flex flex-col gap-4 text-white text-center lg:text-start">
          <div class="font-medium lg:text-lg">Kategori Produk</div>
          <div class="text-sm lg:text-base">Jakets</div>
          <div class="text-sm lg:text-base">T-shirts</div>
          <div class="text-sm lg:text-base">Crewneck</div>
        </div>
        <div class="flex flex-col gap-4 text-white text-center lg:text-start">
          <div class="font-medium lg:text-lg">Kontak Kami</div>
          <div class="text-sm lg:text-base">0866-6666-6666</div>
          <div class="text-sm lg:text-base">sneakers@shop.com</div>
        </div>
      </div>
      <div class="w-full text-center text-white text-xs">
        © 2024 StoneIsland All rights reserved
      </div>
    </div>
  </footer>

</div>
</template>




<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* Additional custom styles can be added here */
</style>
