import { JSX } from "react";

export function Parametres(): JSX.Element {
    return (
      <div className="p-4 space-y-6">
        <h2 className="text-xl font-bold text-blue-700">Paramètres</h2>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Langue</label>
            <select className="mt-1 w-full border rounded px-3 py-2 text-sm">
              <option>Français</option>
              <option>Anglais</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="notifications" className="mt-1" />
            <label htmlFor="notifications" className="text-sm">Activer les notifications</label>
          </div>
        </div>
      </div>
    );
  }
  