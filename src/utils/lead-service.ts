import { LeadData } from "../types/lead";

/**
 * INSTRUÇÕES PARA CONECTAR COM SUA PLANILHA:
 * 1. Na sua planilha, vá em Extensões > Apps Script.
 * 2. Apague tudo e cole o código abaixo:
 * 
 * function doPost(e) {
 *   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   var data = JSON.parse(e.postData.contents);
 *   sheet.appendRow([data.data_envio, data.nome, data.academia, data.numero_unidades, data.whatsapp, data.email]);
 *   return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
 * }
 * 
 * 3. Clique em "Implantar" > "Nova implantação".
 * 4. Selecione "App da Web". Em "Quem pode acessar", escolha "Qualquer pessoa".
 * 5. Copie a URL gerada e cole na constante SCRIPT_URL abaixo.
 */

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz_placeholder/exec'; 

export const submitLead = async (data: LeadData): Promise<boolean> => {
  try {
    const payload = {
      ...data,
      data_envio: new Date().toLocaleString('pt-BR'),
    };

    console.log("Enviando lead para Google Sheets:", payload);

    // Se a URL ainda for o placeholder, simulamos sucesso para não travar a UI
    if (SCRIPT_URL.includes('placeholder')) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return true;
    }

    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Necessário para evitar erros de CORS com Google Apps Script
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    return true;
  } catch (error) {
    console.error("Erro ao enviar lead:", error);
    return false;
  }
};