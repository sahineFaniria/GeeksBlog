import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

// Type de données global utilisé dans Signin
export interface FormData {
  nom: string;
  prenom: string;
  sexe: string;
  dateNaissance: Date | null;
  email: string;
  motdepasse: string;
  confirmPassword: string;
  profession: string;
  favoris: string;
}

interface Props {
  data: FormData;
  onChange: (field: keyof FormData, value: string | Date | null) => void;
  onNext: () => void;
}

export default function Sign1({ data, onChange, onNext }: Props) {
  const [nom, setNom] = useState<string>(data.nom);
  const [prenom, setPrenom] = useState<string>(data.prenom);
  const [sexe, setSexe] = useState<string>(data.sexe);
  const [date, setDate] = useState<Date | undefined>(data.dateNaissance ?? undefined);

  // Synchronise les données dans le parent au moindre changement local
  useEffect(() => {
    onChange("nom", nom);
  }, [nom]);

  useEffect(() => {
    onChange("prenom", prenom);
  }, [prenom]);

  useEffect(() => {
    onChange("sexe", sexe);
  }, [sexe]);

  useEffect(() => {
    onChange("dateNaissance", date ?? null);
  }, [date]);

  const isValid = nom && prenom && sexe && date;

  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="grid gap-1.5">
        <Label htmlFor="nom">Nom</Label>
        <Input id="nom" value={nom} onChange={e => setNom(e.target.value)} />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="prenom">Prénom</Label>
        <Input id="prenom" value={prenom} onChange={e => setPrenom(e.target.value)} />
      </div>
      <div className="flex justify-between gap-4">
        <div className="grid gap-1.5">
          <Label>Sexe</Label>
          <Select value={sexe} onValueChange={setSexe}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sélectionnez" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Homme">Homme</SelectItem>
                <SelectItem value="Femme">Femme</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-1.5">
          <Label>Date de naissance</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-[200px] justify-start text-left", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Sélectionnez une date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <Button className="w-full" disabled={!isValid} onClick={onNext}>
        Suivant
      </Button>
    </div>
  );
}
