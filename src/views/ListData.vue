<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>DATA MAHASISWA</h4>
                        <hr>

                        <router-link :to="{name: 'create'}" class="btn btn-md btn-success">TAMBAH DATA MAHASISWA</router-link>
                        <table class="table table-striped table-bordered mt-4">
                            <thead class="bg-dark text-white">
                                <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">NIM</th>
                                    <th scope="col">NAMA</th>
                                    <th scope="col" style="15%">OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(list, index) in ListMhs" :key="index">
                                    <td>{{ index+1 }}</td>
                                    <td>{{ list.nim }}</td>
                                    <td>{{ list.nama }}</td>
                                    <td class="text-center">
                                        <router-link :to="{name: 'edit', params:{id: list.id}}" class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">
                                            EDIT
                                        </router-link>
                                        <button @click.prevent="deleteMhsData(list.id)" class="btn btn-sm btn-danger ml-1">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from "vue";
    import api from '../api/index.js';

    const ListMhs = ref([]);

    const fetchDataMhs = async () => {
        await api.get('/api/mahasiswa')
        .then(response => {
            ListMhs.value = response.data.data.data
        })
    }

    const deleteMhsData = async (id) => {
        await api.delete(`/api/mahasiswa/${id}`)
        .then(() => {
            fetchDataMhs();
        })
    }

    onMounted(() => {
        fetchDataMhs();
    });
</script>
