<script setup lang>

import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid'
import  {computed, ref} from 'vue'
//import people from './data.js'

defineProps({
  person: {
    name: String,
    title: String,
    role: String,
    email: String,
    telephone: String,
    svgClass: String
  }
})

</script>

<template>
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <!-- <li v-for="person in people" :key="person.email" class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow dark:divide-white/10 dark:shadow-none dark:outline-1 dark:"> -->
    <!-- <li v-for="person in people" :key="person.name"  ></li> -->
    <!-- v-if="person.name.toLowerCase().includes(searchData.search.toLowerCase())" -->
      <div class="flex flex-col p-8">
        <img class="flex rounded-md"  :src="person.svgClass" alt="" />
        <h3 class="mt-4 text-sm font-medium text-gray-900 dark:text-black">{{ person.name }}</h3>
        
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200 dark:divide-white/10">
          </div>
          <div class="-ml-px flex w-0 flex-1">
          </div>
        </div>
  </ul>
</template>

