<template>
<div class="min-h-screen bg-gray-100">

<section class="md:h-full flex items-center text-gray-600">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex items-center justify-center" v-if="isLoading">
            <div
                class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span
                >
            </div>
        </div>
        <div class="flex flex-wrap -m-4 md:mt-5 " v-else >
    
            <div class="p-4 sm:w-1/2 lg:w-1/3" v-for="item in items" :key="item.id">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <router-link :to="`/products/${item.id}`">
                        <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                            :src=item.thumbnail>
                        <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                            <h2 class="text-base font-medium text-indigo-300 mb-1">{{item.category}}</h2>
                            <h1 class="text-2xl font-semibold mb-3">{{item.title}}</h1>
                            <p class="leading-relaxed mb-3">{{ item.description }}</p>
                            <div class="flex items-center flex-wrap ">
                                <a class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">$ {{ item.price }}
                                </a>
                                
                                
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

            

        
    </div>
    </div>

</section>
</div>
</template>
<style>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}</style>


<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const isLoading = computed(()=> store.state.products.isLoading)


    store.dispatch('products/fetchItems')


const items = computed(() => store.state.products.items)
</script>
