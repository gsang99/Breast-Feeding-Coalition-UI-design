<script lang="js">
import {ref} from 'vue'
import providerCard from './providerCard.vue';

export default 
{
  props:
  {
    person:
    {
      type:Object,
      required: true
    },
    isOpen: 
    {
      type:Boolean,
      default:false
    }
  }

}
// make some variables
const activeProviderCard = ref(null);

const toggleProfile = (key);

</script>

<template>
    <!-- make the drop down connected to the provider card -->
     <Transition name="dropdown">
    <div v-if="isOpen">
      <p>{{ person.name }}</p>
      <p>{{ person.title }}</p>
      <p>{{ person.role }}</p>
      <p>{{ person.email }}</p>
      <p>{{ person.telephone }}</p>
    </div>
  </Transition>
</template>

<style scoped>
.profile-wrapper {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  user-select: none;
  background: #fff;
}

.profile-header:hover {
  background: #f5f5f5;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.chevron {
  margin-left: auto;
  transition: transform 0.3s ease;
  font-size: 12px;
  color: #888;
}

.chevron.open {
  transform: rotate(180deg);
}

.profile-dropdown {
  padding: 12px 16px;
  background: #f9f9f9;
  border-top: 1px solid #eee;
}

/* Dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
  max-height: 200px;
  overflow: hidden;
}

.dropdown-enter-from,
.dropdown-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>