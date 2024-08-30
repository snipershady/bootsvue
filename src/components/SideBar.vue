<script setup>
    import {RouterLink} from 'vue-router';
</script>

<template>
    <!-- ======= Sidebar ======= -->
    <!-- https://router.vuejs.org/guide/essentials/named-routes -->
    <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
            <li class="nav-item">
                <a class="nav-link collapsed" href="index.html">
                    <i class="bi bi-grid"></i>
                    <span>Dashboard</span>
                </a>
            </li>
            <!-- End Dashboard Nav -->


            <li class="nav-heading">Pages</li>

            <li class="nav-item">
                <RouterLink class="nav-link collapsed" to="/">
                    <i class="bi bi-person">

                    </i>
                    <span>Home</span>
                </RouterLink>
                
            </li>
            <!-- End Profile Page Nav -->

            <li class="nav-item">
                <RouterLink class="nav-link collapsed" :to="{ name: 'post'}">
                    <i class="bi bi-person">

                    </i>
                    <span>Post</span>
                </RouterLink>
                
            </li>
            <!-- End F.A.Q Page Nav -->

            <li class="nav-item">
                <a class="nav-link collapsed" href="pages-contact.html">
                    <i class="bi bi-envelope"></i>
                    <span>Contact</span>
                </a>
            </li>
            <!-- End Contact Page Nav -->

            <li class="nav-item">
                <a class="nav-link collapsed" href="pages-register.html">
                    <i class="bi bi-card-list"></i>
                    <span>Register</span>
                </a>
            </li>
            <!-- End Register Page Nav -->

            <li class="nav-item">
                <a class="nav-link collapsed" href="pages-login.html">
                    <i class="bi bi-box-arrow-in-right"></i>
                    <span>Login</span>
                </a>
            </li>
            <!-- End Login Page Nav -->

            <li class="nav-item">
                <a class="nav-link collapsed" href="pages-error-404.html">
                    <i class="bi bi-dash-circle"></i>
                    <span>Error 404</span>
                </a>
            </li>
            <!-- End Error 404 Page Nav -->

            <li class="nav-item">
                <a class="nav-link collapsed" href="pages-blank.html">
                    <i class="bi bi-file-earmark"></i>
                    <span>Blank</span>
                </a>
            </li>
            <!-- End Blank Page Nav -->
        </ul>
    </aside>
    <!-- End Sidebar-->
</template>

<style scoped></style>
