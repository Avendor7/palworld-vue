<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    <main class="container mt-3">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

/* Style the navbar */
nav {
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
  }
  
  /* Style the content container */
  .container {
    padding: 20px;
    margin-top: 50px; /* space between navbar and content */
  }
</style>
