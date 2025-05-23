import { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { FormData } from "./Sign1"; // ou importez depuis un fichier commun

interface Props {
  data: FormData;
  onChange: (field: keyof FormData, value: string | Date | null) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Sign2({ data, onChange, onNext, onBack }: Props) {
  const [email, setEmail] = useState(data.email);
  const [motdepasse, setMotdepasse] = useState(data.motdepasse);
  const [confirmPassword, setConfirmPassword] = useState(data.confirmPassword);

  useEffect(() => onChange("email", email), [email]);
  useEffect(() => onChange("motdepasse", motdepasse), [motdepasse]);
  useEffect(() => onChange("confirmPassword", confirmPassword), [confirmPassword]);

  const isValid = email && motdepasse && confirmPassword && motdepasse === confirmPassword;

  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="grid gap-1.5">
        <Label htmlFor="email">Adresse Email</Label>
        <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="password">Mot de passe</Label>
        <Input id="password" type="password" value={motdepasse} onChange={e => setMotdepasse(e.target.value)} />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="confirm">Confirmer le mot de passe</Label>
        <Input id="confirm" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
      </div>
  
      <div className="flex flex-between gap-2">
            <Button variant="outline" onClick={onBack} className="w-1/2 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 ">Précédent</Button>
            <Button disabled={!isValid} onClick={onNext} className="w-1/2">Suivant</Button>
        </div>
    </div>
  );
}
