"use client";

import React from 'react';
import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-brand-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="GymOnHands Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-white">GymOnHands</span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed">
              Transformando educadores físicos em embaixadores de marca através de tecnologia, gamificação e desenvolvimento humano.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/60 hover:text-brand-orange transition-colors cursor-pointer">
                <Mail className="h-4 w-4" /> contato@gymonhands.com
              </li>
              <li className="flex items-center gap-3 text-white/60 hover:text-brand-orange transition-colors cursor-pointer">
                <Phone className="h-4 w-4" /> (11) 99999-9999
              </li>
              <li className="flex items-center gap-3 text-white/60 hover:text-brand-orange transition-colors cursor-pointer">
                <Instagram className="h-4 w-4" /> @gymonhands
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li className="text-white/60 hover:text-brand-orange transition-colors cursor-pointer">Termos de Uso</li>
              <li className="text-white/60 hover:text-brand-orange transition-colors cursor-pointer">Privacidade</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-sm">
            © {new Date().getFullYear()} GymOnHands. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 opacity-30 hover:opacity-100 transition-opacity">
            <span className="text-xs text-white">Made with</span>
            <a href="https://www.dyad.sh/" target="_blank" className="text-xs font-bold text-white underline">Dyad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};