"use client";

import React from 'react';
import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-[#faf5e8] pt-24 pb-12 border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <img src={logo} alt="GymOnHands Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-[#0a0a0a]">GymOnHands</span>
            </div>
            <p className="text-[#6a6a6a] max-w-sm text-lg leading-relaxed">
              Transformando educadores físicos em embaixadores de marca através de tecnologia e gamificação.
            </p>
          </div>
          
          <div>
            <h4 className="text-[#0a0a0a] font-bold mb-6 text-sm uppercase tracking-wider">Produto</h4>
            <ul className="space-y-4 text-sm font-medium text-[#3a3a3a]">
              <li className="hover:text-[#0a0a0a] cursor-pointer">Funcionalidades</li>
              <li className="hover:text-[#0a0a0a] cursor-pointer">Soluções</li>
              <li className="hover:text-[#0a0a0a] cursor-pointer">Preços</li>
              <li className="hover:text-[#0a0a0a] cursor-pointer">Clientes</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#0a0a0a] font-bold mb-6 text-sm uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-4 text-sm font-medium text-[#3a3a3a]">
              <li className="hover:text-[#0a0a0a] cursor-pointer">Sobre nós</li>
              <li className="hover:text-[#0a0a0a] cursor-pointer">Carreiras</li>
              <li className="hover:text-[#0a0a0a] cursor-pointer">Contato</li>
              <li className="hover:text-[#0a0a0a] cursor-pointer">Blog</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-[#e5e5e5] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8 text-sm font-medium text-[#6a6a6a]">
            <span>© {new Date().getFullYear()} GymOnHands</span>
            <span className="hover:text-[#0a0a0a] cursor-pointer">Privacidade</span>
            <span className="hover:text-[#0a0a0a] cursor-pointer">Termos</span>
          </div>
          <div className="flex items-center gap-6">
            <Instagram className="h-5 w-5 text-[#3a3a3a] hover:text-[#0a0a0a] cursor-pointer" />
            <Mail className="h-5 w-5 text-[#3a3a3a] hover:text-[#0a0a0a] cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};