<template>
  <div>
    <h1>product page</h1>
    <h2>{{ item.title }}</h2>
    <p>{{ item.description }}</p>
    <img :src=item.thumbnail >
    <!-- {{ item }} -->
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();
const item = computed(() => store.state.item);

onMounted(() => store.dispatch('fetchItem', parseInt(route.params.id)));


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