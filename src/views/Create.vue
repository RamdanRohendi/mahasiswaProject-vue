<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <form @submit.prevent="storeMhsData()">
                            <div class="mb-3">
                                <label class="form-label fw-bold">NPM</label>
                                <input type="text" class="form-control" v-model="nim" placeholder="NIM/NPM">
                                <div v-if="errors.nim" class="alert alert-danger mt-2">
                                    <span>{{ errors.nim[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Nama</label>
                                <input type="text" class="form-control" v-model="nama" placeholder="Nama Lengkap">
                                <div v-if="errors.nama" class="alert alert-danger mt-2">
                                    <span>{{ errors.nama[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Tanggal Lahir</label>
                                <input type="date" class="form-control" v-model="ttl" placeholder="yyyy-mm-dd">
                                <div v-if="errors.ttl" class="alert alert-danger mt-2">
                                    <span>{{ errors.ttl[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Gender</label>
                                <input type="text" class="form-control" v-model="gender" placeholder="Jenis Kelamin (P/L)">
                                <div v-if="errors.gender" class="alert alert-danger mt-2">
                                    <span>{{ errors.gender[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Alamat</label>
                                <input type="text" class="form-control" v-model="alamat" placeholder="Alamat Domisili">
                                <div v-if="errors.alamat" class="alert alert-danger mt-2">
                                    <span>{{ errors.alamat[0] }}</span>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-md btn-primary rounded-sm shadow border-0">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import api from '../api/index.js';

    const router = useRouter();

    const nim = ref("");
    const nama = ref("");
    const ttl = ref("");
    const gender = ref("");
    const alamat = ref("");
    const errors = ref([]);

    const storeMhsData = async () => {
        let formDataMhs = new FormData();

        formDataMhs.append("nim", nim.value);
        formDataMhs.append("nama", nama.value);
        formDataMhs.append("ttl", ttl.value);
        formDataMhs.append("gender", gender.value);
        formDataMhs.append("alamat", alamat.value);
        
        await api.post('/api/mahasiswa', formDataMhs)
        .then(() => {
            router.push({ path: "/mahasiswa" });
        })
        .catch((error) => {
            errors.value = error.response.data;
        });
    }
</script>