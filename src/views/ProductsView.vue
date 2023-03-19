<template>
<div class="min-h-screen bg-gray-100">

<section class="md:h-full flex items-center text-gray-600">
    <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 md:mt-5">    
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
   <!-- <h1>product component</h1>
    <div>
        <h1>the products</h1>
        <div v-for="item in items" :key="item.id" class='item-class'>
            <h1>{{ item.title }}</h1>
            <p>{{ item.description }}</p>
            <img :src=item.thumbnail >
        </div>
        <h3>{{ name }}</h3>
    </div> -->
</template>


<script setup>
// import PaginationComponent from '@/components/PaginationComponent.vue'
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

onMounted(() => store.dispatch('products/fetchItems'))

const items = computed(() => store.state.products.items)

// function changePage(pageOfItems) {
//             // update page of items
//     this.pageOfItems = pageOfItems;
// }

</script>


<!-- <script>
import { mapState } from 'vuex';

    export default {
    computed: {
        ...mapState(['items'])      
    },
    mounted() {
            this.$store.dispatch('fetchItems')
        }
    
    }
    
   
</script> -->

<!-- 
 <script>
 import { mapState } from 'vuex';
 export default {
    computed: {
          ...mapState('products', {
               items: (state) => state.items,
                name: (state) => state.name
        })
    }
 }
</script> -->