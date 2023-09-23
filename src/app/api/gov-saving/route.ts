import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await axios.get(
      'https://api.bcb.gov.br/dados/serie/bcdata.sgs.195/dados/ultimos/1?formato=json',
    );
    const [info] = response.data;

    return NextResponse.json(Number(info.valor));
  } catch (error) {
    console.error('Error fetching Di:', error);
    return NextResponse.json({ error: 'An error occurred' });
  }
}
