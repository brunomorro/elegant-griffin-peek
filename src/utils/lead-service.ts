import { LeadData } from "../types/lead";

/**
 * INTEGRAÇÃO ATIVA:
 * Os dados estão sendo enviados para:
 * https://script.google.com/macros/s/AKfycbx4j2thiJbNbD4M6AScSDBeYG3LBuicCmMdT7Gy29bZgWpngj94GRCNmJpoSt2Tknv7gA/exec
 */

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx4j2thiJbNbD4M6AScSDBeYG3LBuicCmMdT7Gy29bZgWpngj94GRCNmJpoSt2Tknv7gA/exec'; 

export const submitLead = async (data: LeadData): Promise<boolean> => {
  try {
    const payload = {
      ...data,
      data_envio: new Date().toLocaleString('pt-BR'),
    };

    console.log("Enviando lead para Google Sheets:", payload);

    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Necessário para evitar erros de CORS com Google Apps Script
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    // Com mode: 'no-cors', não conseguimos ler o corpo da resposta, 
    // mas se não houver erro no fetch, consideramos sucesso.
    return true;
  } catch (error) {
    console.error("Erro ao enviar lead:", error);
    return false;
  }
};