<template>
    <div>

        <div class="container w-90 max-w-[600px] mx-auto my-24 px-6 py-6 border-gray-200 ">
            <h1 class="font-bold font-sans text-2xl text-center">Create your account</h1>
            <p class="text-center">Already registered? <router-link to="/login" class="text-indigo-500">Log In</router-link></p>
            
            <form class="shadow px-6 rounded-lg py-3 mt-3" @submit.prevent="onSignup()">
                <div class="flex flex-col my-5">
                    <label class="my-3 font-bold" for="uname">Username</label>
                    <input type="text" id="uname" v-model="username" name="uname" class="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500" />
                    <div class="text-red-500">{{ errors.username }}</div>

                    <label class="my-2 font-bold" for="email">Email Address</label>
                    <input type="email" id="email" v-model='email' name="email" class="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500"/>
                    <div class="text-red-500">{{ errors.email }}</div>

                    <label class="my-2 font-bold" for="psw">Password</label>
                    <input type="password" id="psw" v-model="password" name="psw" class="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500"/>
                    <div class="text-red-500">{{ errors.password }}</div>
                    
                    <label class="my-2 font-bold" for="psw2">Confirm Password</label>
                    <input type="password" id="psw2" v-model="password2" name="psw2" class="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500"/>
                    <div class="text-red-500">{{ errors.password2 }}</div>
                </div>
                <div class="text-center mt-3">
                    <button class="bg-indigo-400 hover:bg-indigo-500 duration-300 font-sm text-white rounded py-1.5 px-4 w-[200px]">Sign Up</button>
                </div>
                
            </form>
            
        </div>
        
        
    </div>
        
</template>

<script>
import { mapActions } from 'vuex'
import validateRegisterInput from '@/services/validateRegisterInput'

export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            password2: '',
            errors: {},
            

        }
    },

    methods: {
        ...mapActions('auth', ['setUser']),
        onSignup() {
            let user = {
                username: this.username,
                email: this.email,
                password: this.password,
                password2: this.password2  
            }

            const { isInvalid, errors } = validateRegisterInput(user)

            if (isInvalid) {
                this.errors = errors
            } else {
                this.errors = {}
                //store user in vuex
                this.setUser(user)

                this.username = ''
                this.email = '' 
                this.password = ''
                this.password2 = ''
                this.$router.push('/login')
                // window.location.reload()

                

        
            }
        }
    }
}
</script>