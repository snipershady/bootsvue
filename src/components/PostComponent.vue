<script setup>
    import {ref} from 'vue';
    import {DataTable} from 'simple-datatables';

    const tableData = ref([]);

    function getData() {
        return fetch('https://apibootsvue.spinfo.it/post/get-all')
            .then(response => response.json())
            .then(json => {
                tableData.value = json;
            });
    }

    getData();
</script>

<template>
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Data Tables</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item">Tables</li>
                    <li class="breadcrumb-item active">Data</li>
                </ol>
            </nav>
        </div>
        <!-- End Page Title -->

        <section class="section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Datatables</h5>
                            <p>
                                Add lightweight datatables to your project with using the
                                <a href="https://github.com/fiduswriter/Simple-DataTables" target="_blank">
                                    Simple DataTables
                                </a>
                                library. Just add
                                <code>.datatable</code>
                                class name to any table you wish to conver to a datatable. Check for
                                <a href="https://fiduswriter.github.io/simple-datatables/demos/" target="_blank">
                                    more examples
                                </a>
                                .
                            </p>

                            <!-- Table with stripped rows -->
                            <div v-if="tableData.length > 0">
                                <table id="post-table" class="table datatable">
                                    <thead class="">
                                        <tr>
                                            <th>ID</th>
                                            <th>Titolo</th>
                                            <th>Sottotitolo</th>
                                            <th>Testo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="post in tableData" :key="post.id">
                                            <td>{{ post.id }}</td>
                                            <td>{{ post.title }}</td>
                                            <td>{{ post.subtitle }}</td>
                                            <td>{{ post.body }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div v-else>Loading...</div>
                            <!-- End Table with stripped rows -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <!-- End #main -->
</template>

<style scoped></style>
