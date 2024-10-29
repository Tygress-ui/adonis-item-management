<script setup>
import { ref } from 'vue';
import { Link, useForm } from '@inertiajs/inertia-vue3';


const form = useForm({
  name: '',
  parent: '',
});

const createAsset = () => {
  // this.$inertia.post(item, '/store', item.value);
  form.post('/holders/store');
};


</script>
<template>
    <div class="container p-4 ">
        <div class="bg-dark p-1 d-flex justify-content-between">
            <h3 class="text-white">create asset</h3>
            <Link :href="`/holders`" class="btn-danger text-white text-decoration-none mt-3"><i class="bi bi-arrow-left"></i> Back to Asset List</Link>
        </div>
            <div class="bg-light p-3">
                <div class="m-3">
                    <label for="name">Name</label>
                    <input v-model="form.name" type="text" placeholder="name"  id="name" class="form-control" />
                </div>
                <div class="m-3">
                    <label for="parent">Parent</label>
                    <input v-model="form.parent" type="text" placeholder="parent" id="parent" class="form-control" />
                </div>
                <button type="button" @click="createAsset" class="btn btn-xs btn-primary text-end"><i class="fa fa-save"> </i> Create Asset</button>

            </div>
    </div>
</template>
