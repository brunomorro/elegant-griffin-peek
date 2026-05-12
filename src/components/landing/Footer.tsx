"use client";

import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <img src="/src/assets/logo.png" alt="GymOnHands" className="h-12 mb-6 brightness-0 invert" />
            <p className="text-gray-500 max-w-sm">
              Transformando educadores físicos em embaixadores da marca através de tecnologia e gamificação.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-500 hover:text-[#F46A35] transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
                <span>contato@gymonhands.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 hover:text-[#F46A35] transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#F46A35] hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} GymOnHands. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 text-sm hover:text-white">Termos de Uso</a>
            <a href="#" className="text-gray-600 text-sm hover:text-white">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;