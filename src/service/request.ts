// src/apiService.js
import axios from 'axios';

export enum APIRoutes {
  SELIC = "selic",
  CDI = "cdi",
  GOV_SAVING = "gov-saving"
}

export async function getApi(path: APIRoutes) {
  try {
    const response = await axios.get(`api/${path}`);
    if (response.status !== 200) throw new Error()

    return response.data;
  } catch (error) {
    console.error('Error fetching Di:', error);
    throw error;
  }
}

