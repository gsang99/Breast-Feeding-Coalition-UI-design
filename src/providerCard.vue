<template>
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <li v-for="person in people" :key="person.email" class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow dark:divide-white/10 dark:bg-gray-800/50 dark:shadow-none dark:outline dark:outline-1 dark:-outline-offset-1 dark:outline-white/10">
      <div class="flex flex-1 flex-col p-8">
        <img class="mx-auto size-32 shrink-0 rounded-md bg-gray-300 outline outline-1 -outline-offset-1 outline-black/5 dark:bg-gray-700 dark:outline-white/10" :src="person.svgClass" alt="" />
        <h3 class="mt-4 text-sm font-medium text-gray-900 dark:text-white">{{ person.name }}</h3>
        <dl class="mt-1 flex grow flex-col justify-between">
          <dt class="sr-only">Title</dt>
          <dd class="text-sm text-gray-500 dark:text-gray-400">{{ person.title }}</dd>
          <dt class="sr-only">Role</dt>
          <dd class="mt-3">
            <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-500/10 dark:text-green-500 dark:ring-green-500/10">{{ person.role }}</span>
          </dd>
        </dl>
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200 dark:divide-white/10">
          <div class="flex w-0 flex-1">
            <a :href="`mailto:${person.email}`" class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 dark:text-white">
              <EnvelopeIcon class="size-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
              Email
            </a>
          </div>
          <div class="-ml-px flex w-0 flex-1">
            <a :href="`tel:${person.telephone}`" class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 dark:text-white">
              <PhoneIcon class="size-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
              Call
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid'

const people = [
  {
    name: 'Nancy Nurse',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    svgClass: 'src/assets/imagesFolder/Image.svg',
  },
  {
    name: 'Cody Fisher',
    title: 'Lead Security Associate',
    role: 'Admin',
    email: 'codyfisher@example.com',
    telephone: '+1-202-555-0114',
    svgClass: 'src/assets/imagesFolder/image(1).svg',
  },
  {
    name: 'Esther Howard',
    title: 'Assurance Administrator',
    email: 'estherhoward@example.com',
    telephone: '+1-202-555-0143',
    role: 'Admin',
    svgClass: 'src/assets/imagesFolder/image(2).svg',
  },
  {
    name: 'Jenny Wilson',
    title: 'Chief Accountability Analyst',
    role: 'Admin',
    email: 'jennywilson@example.com',
    telephone: '+1-202-555-0184',
    svgClass: 'src/assets/imagesFolder/image(3).svg',
  },
  {
    name: 'Kristin Watson',
    title: 'Investor Data Orchestrator',
    role: 'Admin',
    email: 'kristinwatson@example.com',
    telephone: '+1-202-555-0191',
    svgClass: 'src/assets/imagesFolder/image(4).svg',
  },
  {
    name: 'Cameron Williamson',
    title: 'Product Infrastructure Executive',
    role: 'Admin',
    email: 'cameronwilliamson@example.com',
    telephone: '+1-202-555-0108',
    svgClass: 'src/assets/imagesFolder/image(5).svg',
  },
  {
    name: 'Courtney Henry',
    title: 'Investor Factors Associate',
    role: 'Admin',
    email: 'courtneyhenry@example.com',
    telephone: '+1-202-555-0104',
    svgClass: 'src/assets/imagesFolder/image(6).svg',
  },
  {
    name: 'Theresa Webb',
    title: 'Global Division Officer',
    role: 'Admin',
    email: 'theresawebb@example.com',
    telephone: '+1-202-555-0138',
    svgClass: 'src/assets/imagesFolder/image(7).svg',
  },
]
</script>