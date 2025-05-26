import { Button } from "../ui/button";
import { ArrowRight, Sun, Code, Database, Network, Server } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";




export default function Home() {
  return (
    <div className="w-full">
      <header className="fixed top-0 w-full flex items-center justify-between px-4 py-3 shadow bg-white z-50">
        <div className="container mx-auto flex items-center justify-between">
          <p className="font-bold text-xl text-blue-600">GeeksBlog</p>
          <div className="flex gap-1.5 items-center">
            <Sun className="w-5 text-blue-400" />
            <Button className="h-7">Login</Button>
            <Button className="h-7 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200">Sign in</Button>
          </div>
        </div>
      </header>

      {/* Contenu principal, avec padding top pour éviter chevauchement */}
      <main className="pt-[130px] px-10">
        <section className="mb-14">
          <h1 className="text-black text-4xl font-bold">Bienvenue sur GeeksBlog</h1>
          <p className="mt-4 text-xl text-neutral-900">Explorez un univers riche en technologies et <br /> en connaissances numériques</p>
          <p className="text-neutral-700">
            Que vous soyez passionné de <strong>développement, administration réseau</strong> ou <br /> curieux technophile, ce blog est fait pour vous...
          </p>
          <p className="text-neutral-700">Commencez votre aventure tech dès maintenant !</p>
          <p className="text-neutral-700">Connectez-vous pour publier, commenter, ou poser votre candidature aux publications.</p>
          <Button className="h-7 mt-4 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200">
            Get started <ArrowRight className="w-6 h-6 text-blue-500 ml-1" />
          </Button>
        </section>

        {/* Cartes */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="w-full">
              <CardHeader>
                <CardTitle className="text-blue-600" >Frontend</CardTitle>
                <CardDescription>Création de l'interface utilisateur visible</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-bold">HTML, CSS, JavaScript</p>
                <p className="font-bold">React.js, Vue.js, Angular</p>
                <p className="font-bold">Tailwind CSS, Bootstrap, jQuery</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}

