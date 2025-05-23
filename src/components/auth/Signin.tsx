import { useState } from "react"
import Sign1 from "./Sign1"
import Sign2 from "./Sign2"
import Sign3 from "./Sign3"

interface FormData {
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

export default function Signin() {
  const [step, setStep] = useState<number>(1)

  const [formData, setFormData] = useState<FormData>({
    nom: "",
    prenom: "",
    sexe: "",
    dateNaissance: null,
    email: "",
    motdepasse: "",
    confirmPassword: "",
    profession: "",
    favoris: "",
  })

  const handleNext = () => {
    if (step === 1 && formData.nom && formData.prenom && formData.sexe && formData.dateNaissance) {
      setStep(2)
    } else if (step === 2 && formData.email && formData.motdepasse && formData.confirmPassword) {
      setStep(3)
    }
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const updateForm = (field: keyof FormData, value: string | Date | null) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const steps = [1, 2, 3]

  return (
    <div className="flex flex-col items-center justify-center md:h-screen px-4">
      <h1 className="text-blue-600 font-bold text-xl mb-6">INSCRIPTION</h1>
      <div className="flex gap-3 mb-6">
        {steps.map(n => (
          <div
            key={n}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${
              step === n
                ? "bg-blue-600 text-white"
                : "text-blue-600 border border-blue-400 bg-gray-100"
            }`}
          >
            {n}
          </div>
        ))}
      </div>

      {step === 1 && (
        <Sign1 data={formData} onChange={updateForm} onNext={handleNext} />
      )}
      {step === 2 && (
        <Sign2 data={formData} onChange={updateForm} onNext={handleNext} onBack={handleBack} />
      )}
      {step === 3 && (
        <Sign3 data={formData} onChange={updateForm} onBack={handleBack} />
      )}
    </div>
  )
}
