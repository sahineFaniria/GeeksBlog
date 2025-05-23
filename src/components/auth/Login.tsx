import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

function Login() {
  return (
    <div className="flex flex-col items-center justify-center md:h-screen px-4">
      <h1 className="text-blue-600 font-bold text-xl mb-6">CONNEXION</h1>

      <div className="w-full max-w-sm space-y-4">
        <div className="grid items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="rakotoarisoa85@gmail.com" />
        </div>

        <div className="grid items-center gap-1.5">
          <Label htmlFor="motdepasse">Mot de passe</Label>
          <Input type="password" id="motdepasse" placeholder="*********" />
        </div>

        <div className="flex justify-between">

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-sm">Accepte la condition</Label>
        </div>

        <p className="text-sm text-blue-600 hover:underline cursor-pointer">
          Termes et conditions
        </p>

        </div>

        <Button className="w-full">Connectez</Button>

        <div className="text-sm text-center">
          <p className="mb-1">Vous n’avez encore de compte GeeksGlob ?</p>
          <p className="text-blue-600 font-bold hover:underline cursor-pointer">Créez un compte GeeksGlob</p>
        </div>
      </div>
    </div>
  )
}

export default Login
