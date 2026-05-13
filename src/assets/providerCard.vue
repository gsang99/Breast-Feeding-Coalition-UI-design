<script setup lang>

import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid'
import  {computed, ref} from 'vue'
//import people from './data.js'

defineProps({
  person: {
    key: Number,
    name: String,
    title: String,
    role: String,
    email: String,
    telephone: String,
    svgClass: String
  }
})

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}


</script>

<template>
  <div class="rounded-lg bg-white shadow dark:outline-1 overflow-hidden">

    <!-- Clickable card header -->
    <div
      class="flex flex-col p-8 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition"
      @click="toggleDropdown"
    >
      <img class="flex rounded-md" :src="person.svgClass" :alt="person.name" />
      <span class="mt-4 text-sm font-medium text-gray-900 dark:text-black">
        {{ person.name }}
      </span>

      <!-- Arrow icon -->
      <span
        class="mt-2 text-xs text-gray-400 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
      >
        ▼
      </span>
    </div>

    <!-- Dropdown component -->
    <ProviderDropdown :person="person" :isOpen="isOpen" />
  </div>
</template>

