import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { submitLead } from "@/utils/lead-submission";
import { showSuccess, showError } from "@/utils/toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório"),
  academia: z.string().min(2, "Nome da academia é obrigatório"),
  numero_unidades: z.string().min(1, "Informe o número de unidades"),
  whatsapp: z.string().min(10, "WhatsApp inválido"),
  email: z.string().email("E-mail inválido"),
});

interface LeadFormProps {
  variant?: "hero" | "footer";
}

export const LeadForm = ({ variant = "hero" }: LeadFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    try {
      await submitLead(values);
      showSuccess("Diagnóstico solicitado com sucesso.");
      form.reset();
      // Opcional: Redirecionar para WhatsApp
      // window.location.href = "https://wa.me/55...";
    } catch (error) {
      showError("Erro ao enviar solicitação. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={`p-6 rounded-2xl ${variant === 'hero' ? 'bg-white/5 backdrop-blur-lg border border-white/10' : 'bg-gym-black border border-gym-orange/20'}`}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="academia"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Nome da academia" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="numero_unidades"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Nº de unidades" type="number" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="WhatsApp" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Seu melhor e-mail" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-gym-orange hover:bg-gym-orange-hover text-white font-bold h-12 rounded-xl transition-all active:scale-95"
          >
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Quero meu diagnóstico gratuito"}
          </Button>
        </form>
      </Form>
    </div>
  );
};