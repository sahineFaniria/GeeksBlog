import { Button } from "../ui/button";
import { ArrowRight, Sun, Code, Database, Network, Server, Moon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import ScrambledText from "@/blocks/TextAnimations/ScrambledText/ScrambledText";
import { Link } from "react-router";
import { useEffect, useState } from "react";





export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Synchronisation avec le thème Tailwind
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="w-full">
      <header className="fixed top-0 w-full flex items-center justify-between px-4 py-3 shadow shadow-blue-200 bg-white z-50">
        <div className="container mx-auto flex items-center justify-between">
          <p className="font-bold text-xl text-blue-600">GeeksBlog</p>
          <div className="flex gap-1.5 items-center">
            {/* Toggle animé avec icône dedans */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300"
            >
              <div
                className={`w-4 h-4 flex items-center justify-center rounded-full shadow-md transform duration-300 ease-in-out
                  ${darkMode ? "translate-x-6 bg-blue-300" : "translate-x-0 bg-white"}`}
              >
                {darkMode ? (
                  <Moon className="w-3 h-3 text-gray-800" />
                ) : (
                  <Sun className="w-3 h-3 text-blue-400" />
                )}
              </div>
            </button>
            <Link to="/connexion">
              <Button className="h-7">Login</Button>
            </Link>
            <Link to="/inscription">
              <Button className="h-7 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200">Sign in</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Contenu principal, avec padding top pour éviter chevauchement */}
      <main className="pt-[130px] px-10">
        <section className="mb-14">
          <SplitText
            text="Bienvenue sur GeeksBlog"
            className="text-4xl mb-4 text-black font-bold text-center"
            delay={100}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <ScrambledText
            className="scrambled-text-demo"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars="10"
          >
            <p className=" text-xl text-neutral-900">Explorez un univers riche en technologies et <br /> en connaissances numériques</p>
            <p className="text-neutral-700">
            Que vous soyez passionné de <strong>développement, administration réseau</strong> ou <br /> curieux technophile, ce blog est fait pour vous...
          </p>
          <p className="text-neutral-700">Commencez votre aventure tech dès maintenant !</p>
          <p className="text-neutral-700">Connectez-vous pour publier, commenter, ou poser votre candidature aux publications.</p>
          </ScrambledText>
          
          <Link to="/geeksblog.com/accueil">
            <Button className="h-7 mt-4 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200">
              Get started <ArrowRight className="w-6 h-6 text-blue-500 ml-1" />
            </Button>
          </Link>
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

