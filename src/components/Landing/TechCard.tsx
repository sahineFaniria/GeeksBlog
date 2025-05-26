// components/TechCard.tsx
import { FC, ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TechCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: ReactNode;
}

export const TechCard: FC<TechCardProps> = ({
  title,
  description,
  technologies,
  icon,
}) => (
  <Card className="w-64 m-2 flex-shrink-0">
    <CardHeader className="flex items-center justify-between">
      <CardTitle className="text-blue-600">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardDescription className="px-4">{description}</CardDescription>
    <CardContent>
      <ul className="list-disc list-inside space-y-1">
        {technologies.map((tech, index) => (
          <li key={index} className="font-bold">{tech}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);
