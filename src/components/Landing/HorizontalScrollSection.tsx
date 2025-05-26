// components/HorizontalScrollSection.tsx
import { TechCard } from "./TechCard";
import { Code, Database, Network, Server } from "lucide-react";

const cards = [
  {
    title: 'Frontend',
    description: "Création de l'interface utilisateur visible",
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Vue.js', 'Angular'],
    icon: <Code className="w-5 h-5 text-blue-600" />,
  },
  {
    title: 'Backend',
    description: 'Gestion de la logique métier et des bases de données',
    technologies: ['Node.js', 'Express', 'Django', 'Ruby on Rails'],
    icon: <Server className="w-5 h-5 text-green-600" />,
  },
  {
    title: 'Réseau',
    description: 'Configuration et maintenance des réseaux informatiques',
    technologies: ['Cisco', 'Juniper', 'Wireshark'],
    icon: <Network className="w-5 h-5 text-red-600" />,
  },
  {
    title: 'Base de Données',
    description: 'Stockage et gestion des données',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB'],
    icon: <Database className="w-5 h-5 text-purple-600" />,
  },
];

export const HorizontalScrollSection = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap px-4 py-6">
      <div className="flex gap-4">
        {cards.map((card, index) => (
          <TechCard
            key={index}
            title={card.title}
            description={card.description}
            technologies={card.technologies}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};
