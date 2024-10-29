
<script setup>
import { ref } from 'vue';
import { InertiaLink, Link } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia';
import { route } from 'ziggy-js';


const deleteItem = (id) => {
  if (confirm('Are you sure you want to delete this item?')) {
    Inertia.delete(`/holders/destroy/${id}`); 
  }
};





const props = defineProps({
  asset: Array
});

</script>

<template>
  <div class="container shadow p-3">
    <div class="bg-dark d-flex justify-content-between p-1">
      <h3 class=" text-white">Assets</h3>
      <Link :href="`/holders/create`" class="btn btn-link text-decoration-none mt-3">Create New Item</Link>  
    </div>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Parent</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in asset" :key="item.id">
          <td>{{ index + 1 }} .</td>
          <td>{{ item.name }}</td>
          <td>{{ item.parent }}</td>
          <td class="text-nowrap">
            <Link :href="`/holders/edit/${item.id}`" class="btn btn-secondary btn-xs m-2">Edit</Link>
            <button @click="() => deleteItem(item.id)" class="btn btn-danger  btn-xs m-2">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.btn {
  margin-left: 10px;
}
</style>


