"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { showSuccess, showError } from "@/utils/toast";
import { Loader2 } from "lucide-react";

interface LeadFormProps {
  variant?: 'dark' | 'light';
}

const LeadForm = ({ variant = 'dark' }: LeadFormProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    academia: '',
    numero_unidades: '',
    whatsapp: '',
    email: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Nota: Para funcionar, o usuário deve configurar um Web App no Google Apps Script 
      // e substituir esta URL. Por enquanto, simulamos o envio.
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz_placeholder/exec';
      
      // Simulação de envio para a planilha
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      showSuccess("Diagnóstico solicitado com sucesso.");
      setFormData({
        nome: '',
        academia: '',
        numero_unidades: '',
        whatsapp: '',
        email: ''
      });
      
      // Opcional: Redirecionar para WhatsApp
      // window.location.href = "https://wa.me/5511999999999?text=Olá, solicitei meu diagnóstico!";
      
    } catch (error) {
      showError("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = variant === 'dark' 
    ? "bg-[#262626] border-none text-white placeholder:text-gray-500 h-12 rounded-xl focus:ring-2 focus:ring-[#F46A35]"
    : "bg-white border-gray-200 text-[#171717] h-12 rounded-xl focus:ring-2 focus:ring-[#F46A35]";

  const labelClasses = variant === 'dark' ? "text-gray-300" : "text-gray-600";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto lg:mx-0">
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label htmlFor="nome" className={labelClasses}>Nome</Label>
          <Input 
            id="nome" 
            required 
            className={inputClasses}
            value={formData.nome}
            onChange={(e) => setFormData({...formData, nome: e.target.value})}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="academia" className={labelClasses}>Academia</Label>
            <Input 
              id="academia" 
              required 
              className={inputClasses}
              value={formData.academia}
              onChange={(e) => setFormData({...formData, academia: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="unidades" className={labelClasses}>Unidades</Label>
            <Input 
              id="unidades" 
              type="number" 
              required 
              className={inputClasses}
              value={formData.numero_unidades}
              onChange={(e) => setFormData({...formData, numero_unidades: e.target.value})}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="whatsapp" className={labelClasses}>WhatsApp</Label>
          <Input 
            id="whatsapp" 
            required 
            className={inputClasses}
            placeholder="(00) 00000-0000"
            value={formData.whatsapp}
            onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className={labelClasses}>E-mail</Label>
          <Input 
            id="email" 
            type="email" 
            required 
            className={inputClasses}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>
      <Button 
        type="submit" 
        disabled={loading}
        className="w-full h-14 bg-[#F46A35] hover:bg-[#d95a2a] text-white font-bold text-lg rounded-xl transition-all active:scale-95 shadow-lg shadow-[#F46A35]/20"
      >
        {loading ? <Loader2 className="animate-spin mr-2" /> : null}
        Quero meu diagnóstico gratuito
      </Button>
    </form>
  );
};

export default LeadForm;