import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get(
      'https://www.bcb.gov.br/api/servico/sitebcb/historicotaxasjuros'
    );
    const selicPercentage = response.data.conteudo[0].MetaSelic;
    const selicRate = selicPercentage / 100;

    return NextResponse.json(selicRate)
  } catch (error) {
    console.error('Error fetching Di:', error);
    return NextResponse.json({ error: 'An error occurred' });
  }
}