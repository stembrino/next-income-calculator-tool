import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await axios.get(
            'https://www2.cetip.com.br/ConsultarTaxaDi/ConsultarTaxaDICetip.aspx'
        );
        const cdi = parseFloat(response.data.taxa.replace(/[.]/g, '').replace(',', '.'));

        return NextResponse.json(cdi)
    } catch (error) {
        console.error('Error fetching Di:', error);
        return NextResponse.json({ error: 'An error occurred' });
    }
}