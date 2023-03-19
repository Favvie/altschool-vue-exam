<template>
  <div class="w-full h-screen">
    <div class="flex items-center justify-center w-full h-screen flex-col md:flex-row my-10">
      <div class="mx-3">
        
        <h1 class="font-bold text-4xl pb-4">{{ item.title }}</h1>
        <p class="pr-4 pb-4">{{ item.description }}</p>
        <p class="font-bold">${{ item.price }}</p>
        <button class="mt-5 bg-indigo-500 rounded p-3 text-white">Back to Products</button>
      </div>
      <div class="w-[90%] mt-10 md:mt-0 md:w-auto ">
        
        <img :src=item.thumbnail >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();
const item = computed(() => store.state.products.item);

onMounted(() => store.dispatch('products/fetchItem', parseInt(route.params.id)));


</script>












<!-- <template>
    <h1>product component</h1>

    {{ item }}
</template>

<script setup>
    // import {useRoute} from 'vue-router'
    import { computed,onMounted } from 'vue';
    import { useStore } from 'vuex';
    const store = useStore();
    // const route = useRoute()
onMounted(() => {
    store.dispatch('fetchItem')
});

const item = computed(()=> store.state.item)

























// import { mapActions } from 'vuex';
// // import { useRoute } from 'vue-router';
// import { onBeforeMount, computed, onMounted } from 'vue'
// import { useStore } from 'vuex'

// // const route = useRoute()
// const store = useStore()

// const { fetchItems } = mapActions(['fetchItems']);
// onMounted(async () => {
//   await fetchItems();
// });
// // console.log(route.params)
// const productData = computed(() => store.state.items)
// // console.log(productData)
// // const product = ref(null)
// onBeforeMount(() => {
//     // const productData = 
// })















// import {ref} from 'vue'

// const product = ref(null)

// onBeforeMount(() => {
    //     product.value = this.$store.items.find(item => item.id === parseInt(id))
    // })
    
    // export default {
    //     computed: {
    //         ...mapState(['items'])
    //     },
    //     mounted() {
    //         this.$store.dispatch('fetchItems')
    //         const { id } = this.$route.params
    //         console.log(id)
    //         const productx = this.$store.state.items.find(item => item.id === parseInt(id))
    //         console.log(productx)
    //     },
    //     beforeMount() {
    //     this.$store.dispatch('fetchItems')
    //     const { id } = this.$route.params
    //     console.log(id)
    //     // product.value = this.$store.items.find(item => item.id === parseInt(id))
    //     const product = this.$store.items.find(item => item.id === parseInt(id))
    //     console.log(product)
    // }
// }  
</script> -->