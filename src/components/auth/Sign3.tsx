import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormData } from "./Sign1";
import { User } from "lucide-react"; // ✅ Import de l’icône utilisateur

interface Props {
  data: FormData;
  onChange: (field: keyof FormData, value: string | Date | null) => void;
  onBack: () => void;
}

export default function Sign3({ data, onChange, onBack }: Props) {
  const [profession, setProfession] = useState(data.profession);
  const [favoris, setFavoris] = useState(data.favoris);

  useEffect(() => onChange("profession", profession), [profession]);
  useEffect(() => onChange("favoris", favoris), [favoris]);

  const isValid = profession && favoris;

  const handleSubmit = () => {
    console.log("Formulaire complet :", data);
  };

  return (
    <div className="w-full max-w-sm space-y-6">
      {/* ✅ Icône utilisateur centrée */}
      <div className="flex justify-center">
        <div className="bg-gray-100 border border-blue-500 rounded-full p-4">
          <User className="w-8 h-8 text-blue-500" />
        </div>
      </div>

      {/* Boutons Importer et Modifier */}
      <div className="flex flex-between gap-2">
        <Button className="w-1/2 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200">
          Importer
        </Button>
        <Button className="w-1/2">Modifier</Button>
      </div>

      {/* Champ Profession */}
      <div className="grid gap-1.5">
        <Label htmlFor="profession">Profession</Label>
        <Input id="profession" value={profession} onChange={(e) => setProfession(e.target.value)} />
      </div>

      {/* Select Centres d’intérêt */}
      <div className="grid gap-1.5">
        <Label htmlFor="favoris">Centres d’intérêt</Label>
        <Select value={favoris} onValueChange={setFavoris}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sélectionnez" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Frontend">Frontend</SelectItem>
              <SelectItem value="Backend">Backend</SelectItem>
              <SelectItem value="Réseau">Réseau</SelectItem>
              <SelectItem value="Cybsec">Cybsec</SelectItem>
              <SelectItem value="COO">COO</SelectItem>
              <SelectItem value="IA">IA</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Boutons Précédent / Terminer */}
      <div className="flex flex-between gap-2">
        <Button variant="outline" onClick={onBack} className="w-1/2 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200">
          Précédent
        </Button>
        <Button disabled={!isValid} onClick={handleSubmit} className="w-1/2">
          Terminer
        </Button>
      </div>
    </div>
  );
}
