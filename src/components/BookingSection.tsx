import { useState } from "react";
import { format, addDays, isBefore, isAfter, startOfDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarIcon, Clock, Check, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const treatments = [
  { id: "limpeza", name: "Limpeza de Pele Profissional", duration: "1h", price: "R$ 180" },
  { id: "botox", name: "Botox e Preenchimento", duration: "45min", price: "R$ 450" },
  { id: "depilacao", name: "Depilação a Laser", duration: "30min", price: "R$ 120" },
  { id: "skincare", name: "Skincare Avançado", duration: "1h30", price: "R$ 250" },
  { id: "rejuvenescimento", name: "Rejuvenescimento Facial", duration: "1h", price: "R$ 350" },
  { id: "corporal", name: "Tratamentos Corporais", duration: "1h30", price: "R$ 280" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
];

type Step = "treatment" | "datetime" | "info" | "confirmation";

export const BookingSection = () => {
  const [currentStep, setCurrentStep] = useState<Step>("treatment");
  const [selectedTreatment, setSelectedTreatment] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const today = startOfDay(new Date());
  const maxDate = addDays(today, 60);

  const selectedTreatmentData = treatments.find((t) => t.id === selectedTreatment);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime("");
  };

  const handleSubmit = () => {
    if (!selectedTreatment || !selectedDate || !selectedTime || !formData.name || !formData.phone) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally send the data to your backend
    setCurrentStep("confirmation");
    toast({
      title: "Agendamento Confirmado! 🎉",
      description: "Você receberá uma confirmação por WhatsApp em breve.",
    });
  };

  const resetBooking = () => {
    setCurrentStep("treatment");
    setSelectedTreatment("");
    setSelectedDate(undefined);
    setSelectedTime("");
    setFormData({ name: "", phone: "", email: "" });
  };

  const steps = [
    { id: "treatment", label: "Tratamento", number: 1 },
    { id: "datetime", label: "Data e Hora", number: 2 },
    { id: "info", label: "Seus Dados", number: 3 },
  ];

  return (
    <section id="agendar" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Agendamento Online
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mt-3">
            Agende seu <span className="text-primary">Tratamento</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Escolha o tratamento, data e horário que melhor se adequam à sua rotina.
          </p>
        </div>

        {/* Progress Steps */}
        {currentStep !== "confirmation" && (
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${
                      currentStep === step.id
                        ? "bg-primary text-primary-foreground"
                        : steps.findIndex((s) => s.id === currentStep) > index
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {steps.findIndex((s) => s.id === currentStep) > index ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span
                    className={`ml-2 text-sm hidden sm:block ${
                      currentStep === step.id ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </span>
                  {index < steps.length - 1 && (
                    <div className="w-12 h-px bg-border mx-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Booking Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 golden-glow">
            {/* Step 1: Treatment Selection */}
            {currentStep === "treatment" && (
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Escolha seu Tratamento
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {treatments.map((treatment) => (
                    <button
                      key={treatment.id}
                      onClick={() => setSelectedTreatment(treatment.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        selectedTreatment === treatment.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-foreground">{treatment.name}</h4>
                        {selectedTreatment === treatment.id && (
                          <Check className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {treatment.duration}
                        </span>
                        <span className="text-primary font-medium">{treatment.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-end pt-4">
                  <Button
                    onClick={() => setCurrentStep("datetime")}
                    disabled={!selectedTreatment}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Date & Time Selection */}
            {currentStep === "datetime" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Escolha Data e Horário
                  </h3>
                  {selectedTreatmentData && (
                    <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {selectedTreatmentData.name}
                    </span>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Calendar */}
                  <div>
                    <Label className="text-foreground mb-3 block">Selecione a Data</Label>
                    <div className="bg-background rounded-xl p-4 border border-border">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        disabled={(date) =>
                          isBefore(date, today) ||
                          isAfter(date, maxDate) ||
                          date.getDay() === 0
                        }
                        locale={ptBR}
                        className="pointer-events-auto"
                      />
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <Label className="text-foreground mb-3 block">Selecione o Horário</Label>
                    {selectedDate ? (
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                              selectedTime === time
                                ? "bg-primary text-primary-foreground"
                                : "bg-background border border-border hover:border-primary/50 text-foreground"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center text-muted-foreground bg-background rounded-xl border border-border p-8">
                        <div className="text-center">
                          <CalendarIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
                          <p>Selecione uma data primeiro</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep("treatment")}
                    className="border-border"
                  >
                    Voltar
                  </Button>
                  <Button
                    onClick={() => setCurrentStep("info")}
                    disabled={!selectedDate || !selectedTime}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Personal Info */}
            {currentStep === "info" && (
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Seus Dados
                </h3>

                {/* Summary */}
                <div className="bg-background rounded-xl p-4 border border-border mb-6">
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-2 text-foreground">
                      <Sparkles className="w-4 h-4 text-primary" />
                      {selectedTreatmentData?.name}
                    </span>
                    <span className="flex items-center gap-2 text-foreground">
                      <CalendarIcon className="w-4 h-4 text-primary" />
                      {selectedDate && format(selectedDate, "dd 'de' MMMM", { locale: ptBR })}
                    </span>
                    <span className="flex items-center gap-2 text-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      {selectedTime}
                    </span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Nome Completo *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      WhatsApp *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email (opcional)
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep("datetime")}
                    className="border-border"
                  >
                    Voltar
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.phone}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Confirmar Agendamento
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === "confirmation" && (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="font-display text-3xl font-semibold text-foreground mb-4">
                  Agendamento Confirmado!
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Seu agendamento foi realizado com sucesso. Você receberá uma confirmação
                  por WhatsApp em breve.
                </p>

                <div className="bg-background rounded-xl p-6 border border-border max-w-sm mx-auto mb-8">
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tratamento:</span>
                      <span className="text-foreground font-medium">{selectedTreatmentData?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Data:</span>
                      <span className="text-foreground font-medium">
                        {selectedDate && format(selectedDate, "dd/MM/yyyy")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Horário:</span>
                      <span className="text-foreground font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Valor:</span>
                      <span className="text-primary font-medium">{selectedTreatmentData?.price}</span>
                    </div>
                  </div>
                </div>

                <Button onClick={resetBooking} variant="outline" className="border-border">
                  Fazer Novo Agendamento
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
