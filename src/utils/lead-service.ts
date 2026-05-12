import { LeadData } from "../types/lead";

// URL do Google Apps Script (deve ser gerada pelo usuário no console do Google Sheets)
// Instruções: Extensões > Apps Script > Colar código de recebimento > Implantar como Web App
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz_placeholder/exec'; 

export const submitLead = async (data: LeadData): Promise<boolean> => {
  try {
    const payload = {
      ...data,
      data_envio: new Date().toLocaleString('pt-BR'),
    };

    // Nota: Em produção, você usaria o SCRIPT_URL real. 
    // Para fins de demonstração e funcionamento imediato, simularemos o sucesso.
    console.log("Enviando lead para Google Sheets:", payload);
    
    // Simulação de delay de rede
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    /* 
    // Código real para quando o SCRIPT_URL estiver configurado:
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Necessário para Google Apps Script
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    */

    return true;
  } catch (error) {
    console.error("Erro ao enviar lead:", error);
    return false;
  }
};