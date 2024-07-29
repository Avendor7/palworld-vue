<template>
  <main>
    <h1>HomeView</h1>
  </main>
</template>

<script setup lang="ts">

import axios from 'axios';
import { onMounted } from 'vue';

// Define the API endpoint URL
const apiUrl = 'http://100.100.47.33:8213/v1/api/players'

// Define the base configuration for Axios
const instance = axios.create({
  baseURL: `${apiUrl}`, // Base URL is set to the defined API endpoint URL
  timeout: 1000 // Timeout after 1 second
});

// Function to handle HTTP GET request to a specific endpoint (e.g., "users")
const getUsers = async () => {
  try {
    const response = await instance.get('users'); // Replace 'users' with your actual endpoint
    return response.data; // Return the data received from the API
  } catch (error) {
    throw new Error(); // Handle any errors that may occur during the GET request
  }
}

onMounted{
  getUsers();
}

</script>

<style>

</style>