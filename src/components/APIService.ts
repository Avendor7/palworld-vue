import axios from 'axios'

// Define the API endpoint URL
const apiUrl = 'http://100.100.47.33:8212/v1/api/players'

// Define the base configuration for Axios
const instance = axios.create({
  baseURL: `${apiUrl}`, // Base URL is set to the defined API endpoint URL
  timeout: 1000 // Timeout after 1 second
})

// Function to handle HTTP GET request to a specific endpoint (e.g., "users")
const getUsers = async () => {
  try {
    const response = await instance.get('users') // Replace 'users' with your actual endpoint
    return response.data // Return the data received from the API
  } catch (error) {
    throw new Error() // Handle any errors that may occur during the GET request
  }
}

// Function to handle HTTP POST request to a specific endpoint (e.g., "create-user")
const createUser = async (userData: object) => {
  try {
    const response = await instance.post('create-user', userData) // Replace 'create-user' with your actual endpoint and the actual data being sent in the POST request
    return response.data // Return the data received from the API
  } catch (error) {
    throw new Error() // Handle any errors that may occur during the POST request
  }
}

// Function to handle HTTP PUT/PATCH request to a specific endpoint (e.g., "update-user")
const updateUser = async (userId: number, userData: object) => {
  try {
    const response = await instance.put(`update-user/${userId}`, userData) // Replace 'update-user' with your actual endpoint and the actual data being sent in the PUT/PATCH request
    return response.data // Return the data received from the API
  } catch (error) {
    throw new Error() // Handle any errors that may occur during the PUT/PATCH request
  }
}

// Function to handle HTTP DELETE request to a specific endpoint (e.g., "delete-user")
const deleteUser = async (userId: number) => {
  try {
    const response = await instance.delete(`delete-user/${userId}`) // Replace 'delete-user' with your actual endpoint and the actual ID of the user being deleted in the DELETE request
    return response.data // Return the data received from the API
  } catch (error) {
    throw new Error() // Handle any errors that may occur during the DELETE request
  }
}
