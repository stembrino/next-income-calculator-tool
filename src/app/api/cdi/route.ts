import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get(
      'https://www2.cetip.com.br/ConsultarTaxaDi/ConsultarTaxaDICetip.aspx'
    );
    const cdiPercentage = parseFloat(response.data.taxa.replace(/[.]/g, '').replace(',', '.'));
    const cdiRate = cdiPercentage / 100;
    
    return NextResponse.json(cdiRate)
  } catch (error) {
    console.error('Error fetching Di:', error);
    return NextResponse.json({ error: 'An error occurred' });
  }
}