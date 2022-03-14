<template>
<div class="font-pupylinux flex">
  <Sidebar/>

  <div class="grow">
        <div class="flex justify-between lg:justify-end pt-7 px-5 md:px-10">
            <img src="/asset/hamburger.png" class="block lg:hidden" alt="" @click="bukaside">
            <div class="flex items-center">
                <img src="/asset/pp.png" alt="">
                <div class="ml-5 md:block hidden">
                    <p class="font-light">Wahyu Hidayat</p>
                    <p class="font-light text-sm text-slate-400">Atmint</p>
                </div>
            </div>
        </div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  computed: {
    count(){
      return this.$store.state.sidebarmobile
    }
  },
  methods: {
    bukaside(){
      this.$store.state.sidebarmobile = true
    }
  },
    components: { Sidebar }
}
</script>