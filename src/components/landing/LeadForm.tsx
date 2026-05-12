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

export const LeadForm = () => {
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
      showSuccess("Diagnóstico solicitado!");
      form.reset();
    } else {
      showError("Erro ao enviar.");
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center space-y-6 bg-white rounded-[24px]">
        <div className="w-16 h-16 bg-[#a4d4c5] rounded-full flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-[#1a3a3a]" />
        </div>
        <h3 className="text-2xl font-medium text-[#0a0a0a] tracking-tight">Solicitação Enviada!</h3>
        <p className="text-[#6a6a6a]">Em breve nossa equipe entrará em contato.</p>
        <Button 
          onClick={() => setIsSuccess(false)} 
          className="bg-[#0a0a0a] text-white rounded-[12px] w-full"
        >
          Enviar outro
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8 bg-white rounded-[24px] shadow-sm border border-[#e5e5e5]">
      <h3 className="text-xl font-medium text-[#0a0a0a] mb-6 tracking-tight">Solicite seu diagnóstico</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Nome completo" {...field} className="h-11 rounded-[12px] border-[#e5e5e5] bg-[#fffaf0]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="academia"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Academia" {...field} className="h-11 rounded-[12px] border-[#e5e5e5] bg-[#fffaf0]" />
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
                  <FormControl>
                    <Input placeholder="Unidades" type="number" {...field} className="h-11 rounded-[12px] border-[#e5e5e5] bg-[#fffaf0]" />
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
                <FormControl>
                  <Input placeholder="WhatsApp" {...field} className="h-11 rounded-[12px] border-[#e5e5e5] bg-[#fffaf0]" />
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
                <FormControl>
                  <Input placeholder="E-mail corporativo" {...field} className="h-11 rounded-[12px] border-[#e5e5e5] bg-[#fffaf0]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white h-12 rounded-[12px] font-semibold text-sm mt-2"
          >
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
            Obter diagnóstico gratuito
          </Button>
        </form>
      </Form>
    </div>
  );
};