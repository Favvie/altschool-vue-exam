<template>

    <div class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center absolute top-0 w-[100%] ">
        <div class="flex items-center cursor-pointer">
            <span class="text-indigo-500 text-4xl mr-1">
                <i class="bi bi-valentine"></i>
            </span>

            <h1 class="text-xl">Faye</h1>
        </div>

        <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
            <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
        </span>

        <ul class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-700 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']">
            <li class="md:mx-4 md:my-0 my-6" v-if="!user.username">
                <router-link to="/login" class="text-xl hover:text-indigo-500">Log In</router-link>
            </li>
            <li class="md:mx-4 md:my-0 my-6" v-if="user.username">
                <router-link to="/" class="text-xl hover:text-indigo-500">Home</router-link>
            </li>
            
            <li class="md:mx-4 md:my-0 my-6" v-if="user.username">
                <router-link to="/products" class="text-xl hover:text-indigo-500">Products</router-link>
            </li>
            
            <ButtonComponent v-if="!user.username">
                 <router-link to="/signup" class="text-xl hover:text-white-500">Sign Up</router-link>
             </ButtonComponent>

            <ButtonComponent v-if="user.username">
                 <router-link to="/login" class="text-xl" v-if="user.username" @click.prevent="logout()">Logout</router-link>
                <!-- <a href="" v-if="user.username" @click.prevent="logout()"> Logout</a>  -->
             </ButtonComponent>
        </ul>

    </div>
  
  <!-- <nav class="nav flex justify-between max-w-5xl m-auto p-5">
    <div>Logo</div>
    <div class="nav-links flex gap-4">
    <router-link to="/signup" v-if="!user.username">Sign Up</router-link> 
    <router-link to="/login" v-if="!user.username">Login</router-link> 
    <a href="" v-if="user.username" @click.prevent="logout()">hello, {{user.username}} Logout</a> 

    </div>
  </nav> -->

</template>
 
<style scoped>
</style>


<script>
import ButtonComponent from '@/components/ButtonComponent.vue'
export default {
    components: {
        ButtonComponent
    },
    data() {
        return {
            user: {},
            open: false
        }
    },
  mounted() {
    // this.$store.commit('initializeStore')
    if (localStorage.activeUser) {
      let activeUser = localStorage.activeUser
        this.user = JSON.parse(activeUser)
    }
  },
  methods: {
    logout() {
      // this.$store.commit('logout')
      localStorage.removeItem('activeUser')
      this.$router.push('/login')
      // window.location.reload()

    }, 
      MenuOpen() {
        this.open = !this.open
    }
  },  
  
}
</script>