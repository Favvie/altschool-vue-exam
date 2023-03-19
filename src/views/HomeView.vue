<template>
  <div class="h-[90%] w-full">
    <div class="mt-24 p-10 flex flex-col md:flex-row gap-10 md:px-24">
      <div class="self-center md:mt-10">

        <h1 class="font-bold text-4xl md:text-5xl md:w-[85%]  pb-4 text-left md:leading-[50px]">  Buy premium products that elevate your lifestyle instantly.</h1>
        <p class="text-2xl">Get the best purchase with life changing offers</p>
<div class="text-center md:text-left mt-10">

      <div class="w-[200px] text-center p-3 bg-indigo-400 hover:bg-indigo-500 duration-300 font-sm text-white rounded ">
        <router-link to="/signup" class="text-xl hover:text-white-500 font-bold">Sign Up</router-link>
      </div>
    </div>
      </div>
      <div class="w-full mt-10">
        <img src="../assets/copy.png" alt="" max-w-full h-auto object-cover object-center >
      </div>
    </div>
    

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',

}
</script>
