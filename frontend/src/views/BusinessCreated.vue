<template>
    <div class="text-white">
         <div><HeaderComponent></HeaderComponent></div>
      <SidebarComp></SidebarComp>
     
      <div id="main">
          
            <div class=" p-3">
                <div class="w-100 bg-secondary p-2">
                    test
                </div>
            </div>
      </div>
    </div>
</template>

<script>
import SidebarComp from '@/components/SidebarComp.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: "BusinessCreated",
  data() {
    return {};
  },
  components: {
    HeaderComponent,
    SidebarComp
  },
};
</script>
