<template>
  <main>
    <h1>HomeView</h1>
  </main>
</template>

<script setup lang="ts">

import axios from 'axios';
import { onMounted } from 'vue';
import cors from 'cors';

// Define the API endpoint URL
const apiUrl = 'http://192.168.5.210:8212/v1/api'

// Define the base configuration for Axios
const instance = axios.create({
  baseURL: `${apiUrl}`, // Base URL is set to the defined API endpoint URL
  timeout: 1000, // Timeout after 1 second
  headers: {
    Authorization: `Basic ${btoa(`admin:UPfpJEUn`)}`
  }
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // This is a security risk, see below.

// Function to handle HTTP GET request to a specific endpoint (e.g., "users")
const getUsers = async () => {
  try {
    const response = await instance.get('info'); // Replace 'users' with your actual endpoint
    return response.data; // Return the data received from the API
  } catch (error) {
    throw new Error(); // Handle any errors that may occur during the GET request
  }
}

getUsers();

</script>

<style>

</style>