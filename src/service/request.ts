// src/apiService.js
import axios from 'axios';

export enum APIRoutes {
  SELIC = 'selic',
  CDI = 'cdi',
  GOV_SAVING = 'gov-saving',
}

type Options = {
  localStorage: boolean;
};

export function cleanLocalStorage() {
  window.localStorage.clear();
}

export async function getApi(
  path: APIRoutes,
  { localStorage }: Options = { localStorage: true },
): Promise<unknown> {
  if (localStorage) {
    const localStorageElement = window.localStorage.getItem(path);
    if (localStorageElement) return localStorageElement;
  }
  try {
    const response = await axios.get(`api/${path}`);
    if (response.status !== 200) throw new Error();
    if (localStorage) window.localStorage.setItem(path, response.data);

    return response.data;
  } catch (error) {
    console.error('Error fetching Di:', error);
    throw error;
  }
}
