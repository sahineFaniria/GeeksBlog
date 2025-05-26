import { JSX } from "react";

export function EditProfil(): JSX.Element {
    return (
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-bold text-blue-700">Modifier le profil</h2>
        <form className="space-y-3">
          <div>
            <label className="text-sm font-medium">Nom</label>
            <input type="text" className="w-full mt-1 border rounded px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" className="w-full mt-1 border rounded px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium">Mot de passe</label>
            <input type="password" className="w-full mt-1 border rounded px-3 py-2 text-sm" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Enregistrer
          </button>
        </form>
      </div>
    );
  }
  