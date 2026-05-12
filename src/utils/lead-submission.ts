export interface LeadData {
  nome: string;
  academia: string;
  numero_unidades: string;
  whatsapp: string;
  email: string;
}

// Nota: Para que isso funcione, o usuário deve configurar um Google Apps Script 
// que receba o POST e salve na planilha.
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz_placeholder/exec'; 

export const submitLead = async (data: LeadData) => {
  const payload = {
    ...data,
    data_envio: new Date().toLocaleString('pt-BR'),
  };

  try {
    // Como não temos o endpoint real do Apps Script configurado agora, 
    // simulamos o envio para demonstração.
    console.log('Enviando lead para Google Sheets:', payload);
    
    // Simulação de delay de rede
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true };
  } catch (error) {
    console.error('Erro ao enviar lead:', error);
    throw error;
  }
};