import { JSX } from "react";

export function Postuler(): JSX.Element {
    return (
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-bold text-blue-700">Ajouter un guide</h2>
        <form className="space-y-3">
          <div>
            <label className="text-sm font-medium">Titre du guide</label>
            <input type="text" className="w-full mt-1 border rounded px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium">Contenu</label>
            <textarea className="w-full mt-1 border rounded px-3 py-2 text-sm h-32" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Publier
          </button>
        </form>
      </div>
    );
  }
  