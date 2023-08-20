// src/apiService.js
import axios from 'axios';

export async function getApi(path: string) {
  try {
    const response = await axios.get(`api/${path}`);
    if (response.status !== 200) throw new Error()

    return response.data;
  } catch (error) {
    console.error('Error fetching Di:', error);
    throw error;
  }
}

