<template>

 <div>

        <div class="container w-90 max-w-[600px] mx-auto my-24 px-6 py-6 ">
            <h1 class="font-bold font-sans text-2xl text-center">Login</h1>
            <p class="text-center">Don't have an account? <router-link to="/signup" class="text-indigo-500 font-bold">Sign Up</router-link></p>
            
            <form class="shadow px-6 rounded-lg py-3 mt-3" @submit.prevent="onLogin()">
                <div class="flex flex-col my-5">
                    <label class="my-3 font-bold" for="uname">Username</label>
                    <input type="text" id="uname" v-model="username" name="uname" class="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500" />
                    <div class="text-red-500">{{ errors.username }}</div>

                    

                    <label class="my-2 font-bold" for="psw">Password</label>
                    <input type="password" id="psw" v-model="password" name="psw" class="w-full border border-gray-300 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500"/>
                    <div class="text-red-500">{{ errors.password }}</div>
                    
                    
                </div>
                <div class="text-center mt-3">
                    <button class="bg-indigo-400 hover:bg-indigo-500 duration-300 font-sm text-white rounded py-1.5 px-4 w-[200px]" type="submit">Login</button>
                </div>
                
            </form>
            
        </div>
        
        
    </div>

</template>

<script>
import validateLoginInput from '@/services/validateLoginInput';

export default {
    data() {
        return {
            username: '',
            password: '',
            errors: {}
        }
    },
    methods: {
        onLogin() {
            let credentials = {
                username : this.username,
                password: this.password
            }
            const { isInvalid, errors } = validateLoginInput(credentials)

            if (isInvalid) {
                this.errors = errors
            } else {
                this.errors = {}

                // login logic
                // if (localStorage.users) {
                    if(this.$store.state.auth.users) {
                        let lsUsers = this.$store.state.auth.users
                    // let lsUsers = localStorage.users;
                    // lsUsers = JSON.parse(lsUsers)
                    let userIndex = lsUsers.findIndex(
                        user => user.username === credentials.username
                        )
                        if (userIndex > -1) {
                            let passwordIndex = lsUsers.findIndex(
                                user => user.password === credentials.password)
                                
                                if (passwordIndex > -1) {
                                    let activeUser = JSON.stringify(lsUsers[userIndex])
                                    localStorage.setItem('activeUser', activeUser)
                                    
                                    this.$router.push('/products')
                                    window.location.reload()
                                } else {
                                    this.errors.password = 'Incorrect password!'
                                }

                        } else {
                                this.errors.username = 'Username does not exist!'
                            }
                            
                            
                        
                        }
            }

        }
    }
}
</script>