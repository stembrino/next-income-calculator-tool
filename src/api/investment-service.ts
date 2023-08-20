// src/apiService.js
import axios from 'axios';

export async function fetchGovSaving() {
  try {
    const response = await axios.get(
      'https://api.bcb.gov.br/dados/serie/bcdata.sgs.195/dados/ultimos/1?formato=json'
    );
    const govSaving = parseFloat(response.data[0].valor);
    return govSaving;
  } catch (error) {
    console.error('Error fetching govSaving:', error);
    throw error;
  }
}

export async function fetchCDI() {
  try {
    const response = await axios.get(
      'https://www2.cetip.com.br/ConsultarTaxaDi/ConsultarTaxaDICetip.aspx'
    );
    const cdi = parseFloat(response.data.taxa.replace(/[.]/g, '').replace(',', '.'));
    return cdi;
  } catch (error) {
    console.error('Error fetching Di:', error);
    throw error;
  }
}

export async function fetchSelic() {
  try {
    const response = await axios.get(
      'https://www.bcb.gov.br/api/servico/sitebcb/historicotaxasjuros'
    );
    const selic = response.data.conteudo[0].MetaSelic;
    return selic;
  } catch (error) {
    console.error('Error fetching Di:', error);
    throw error;
  }
}
