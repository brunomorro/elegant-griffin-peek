import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { submitLead } from "@/utils/lead-service";
import { showSuccess, showError } from "@/utils/toast";
import { Loader2, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório"),
  academia: z.string().min(2, "Nome da academia é obrigatório"),
  numero_unidades: z.string().min(1, "Informe o número de unidades"),
  whatsapp: z.string().min(10, "WhatsApp inválido"),
  email: z.string().email("E-mail inválido"),
});

export const LeadForm = ({ dark = false }: { dark?: boolean }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      academia: "",
      numero_unidades: "",
      whatsapp: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const success = await submitLead(values);
    setIsSubmitting(false);

    if (success) {
      setIsSuccess(true);
      showSuccess("Diagnóstico solicitado com sucesso!");
      form.reset();
      // Opcional: Redirecionar para WhatsApp após 2 segundos
      // setTimeout(() => window.open('https://wa.me/SEUNUMERO', '_blank'), 2000);
    } else {
      showError("Erro ao enviar. Tente novamente.");
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center space-y-4 bg-white/5 rounded-3xl border border-[#F46A35]/20">
        <CheckCircle2 className="h-16 w-16 text-[#F46A35]" />
        <h3 className="text-2xl font-bold text-white">Solicitação Enviada!</h3>
        <p className="text-white/60">Em breve nossa equipe entrará em contato para o seu diagnóstico gratuito.</p>
        <Button 
          onClick={() => setIsSuccess(false)} 
          variant="outline" 
          className="border-[#F46A35] text-[#F46A35] hover:bg-[#F46A35] hover:text-white rounded-full"
        >
          Enviar outro
        </Button>
      </div>
    );
  }

  return (
    <div className={`p-8 rounded-3xl border ${dark ? 'bg-[#171717] border-white/10' : 'bg-white border-black/5 shadow-2xl'}`}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={dark ? "text-white/70" : "text-black/70"}>Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} className={dark ? "bg-white/5 border-white/10 text-white" : ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="academia"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={dark ? "text-white/70" : "text-black/70"}>Nome da Academia</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Gym Fit" {...field} className={dark ? "bg-white/5 border-white/10 text-white" : ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="numero_unidades"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={dark ? "text-white/70" : "text-black/70"}>Nº de Unidades</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: 3" type="number" {...field} className={dark ? "bg-white/5 border-white/10 text-white" : ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={dark ? "text-white/70" : "text-black/70"}>WhatsApp</FormLabel>
                <FormControl>
                  <Input placeholder="(00) 00000-0000" {...field} className={dark ? "bg-white/5 border-white/10 text-white" : ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={dark ? "text-white/70" : "text-black/70"}>E-mail Corporativo</FormLabel>
                <FormControl>
                  <Input placeholder="seu@email.com" {...field} className={dark ? "bg-white/5 border-white/10 text-white" : ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[#F46A35] hover:bg-[#d45a2a] text-white h-14 rounded-xl font-bold text-lg shadow-lg shadow-[#F46A35]/20 transition-all active:scale-95"
          >
            {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : null}
            Quero meu diagnóstico gratuito
          </Button>
        </form>
      </Form>
    </div>
  );
};