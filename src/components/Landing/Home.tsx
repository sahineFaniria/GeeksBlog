import { Button } from "../ui/button";
import { ArrowRight, Sun, Code, Database, Network, Server, Moon, ChartNetwork } from "lucide-react";
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
    <div className="w-full dark:bg-black/95 h-full ">
      <header className="fixed top-0 w-full flex items-center justify-between px-4 py-3 shadow shadow-blue-200 dark:shadow-blue-400 bg-white dark:bg-black/85 z-50">
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
              <Button className="h-7 dark:bg-blue-500 dark:text-white">Login</Button>
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
            className="text-4xl mb-4 text-black dark:text-white font-bold text-center"
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
            <p className=" text-xl text-neutral-900 dark:text-white/95">Explorez un univers riche en technologies et <br /> en connaissances numériques</p>
            <p className="text-neutral-700 dark:text-white/80">
            Que vous soyez passionné de <strong>développement, administration réseau</strong> ou <br /> curieux technophile, ce blog est fait pour vous...
          </p>
          <p className="text-neutral-700 dark:text-white/80">Commencez votre aventure tech dès maintenant !</p>
          <p className="text-neutral-700 dark:text-white/80">Connectez-vous pour publier, commenter, ou poser votre candidature aux publications.</p>
          </ScrambledText>
          
          <Link to="/geeksblog.com/accueil">
            <Button className="h-8 mt-4 bg-white dark:bg-white/90 hover:bg-blue-50 text-blue-600 border border-blue-200">
              Get started <ArrowRight className="w-6 h-6 text-blue-500 ml-1" />
            </Button>
          </Link>
        </section>
        

        {/* Cartes */}
        <section className="relative w-full overflow-hidden py-6">
          <div className="animate-scroll flex gap-4 w-max">
            {/* Cartes dupliquées pour effet boucle */}
            {[...Array(2)].map((_, index) => (
              <>
                  <div className="w-[250px] h-36 p-2 bg-white dark:bg-neutral-900 border border-blue-300 rounded-lg">
                    <div className="flex flex-row justify-between ">
                      <p className="text-blue-700 font-semibold">Frontend</p>
                      <Code className="text-blue-700" />
                    </div>
                    <p className="text-neutral-700 text-sm dark:text-white/60">Création de l'interface utilisateur visible</p>
                    <p className="text-black text-sm font-medium dark:text-white">HTML, CSS, JavaScript</p>
                    <p className="text-black text-sm font-medium dark:text-white">React.js, Vue.js, Angular</p>
                    <p className="text-black text-sm font-medium dark:text-white">Tailwind CSS, Bootstrap, jQuery</p>
                  </div>
                  <div className="w-[250px] h-36 p-2 bg-white dark:bg-neutral-900 border border-blue-300 rounded-lg">
                    <div className="flex flex-row justify-between ">
                      <p className="text-blue-700 font-semibold">Backend</p>
                      <ChartNetwork className="text-blue-700" />
                    </div>
                    <p className="text-neutral-700 text-sm dark:text-white/60">Gestion de la logique métier, API et base de données.</p>
                    <p className="text-black text-sm font-medium dark:text-white">Node.js, PHP, Java, Python</p>
                    <p className="text-black text-sm font-medium dark:text-white">Express, Spring Boot, Django</p>
                    <p className="text-black text-sm font-medium dark:text-white">JWT, REST API, GraphQL</p>
                    </div>
                  <div className="w-[250px] h-36 p-2 bg-white dark:bg-neutral-900 border border-blue-300 rounded-lg">
                    <div className="flex flex-row justify-between ">
                      <p className="text-blue-700 font-semibold">Réseau</p>
                      <Network className="text-blue-700" />
                    </div>
                    <p className="text-neutral-700 text-sm dark:text-white/60">Configuration et sécurité des réseaux informatiques.</p>
                    <p className="text-black text-sm font-medium dark:text-white">TCP/IP, DNS, DHCP</p>
                    <p className="text-black text-sm font-medium dark:text-white">Cisco, Mikrotik, VLAN</p>
                    <p className="text-black text-sm font-medium dark:text-white">Firewall, VPN, Wireshark</p>
                  </div>
                  <div className="w-[250px] h-36 p-2 bg-white dark:bg-neutral-900 border border-blue-300 rounded-lg">
                    <div className="flex flex-row justify-between ">
                        <p className="text-blue-700 font-semibold">Base de données</p>
                        <Database className="text-blue-700" />
                      </div>
                      <p className="text-neutral-700 text-sm dark:text-white/60">Stockage, gestion et sécurisation des données.</p>
                    <p className="text-black text-sm font-medium dark:text-white">MySQL, PostgreSQL, Oracle</p>
                    <p className="text-black text-sm font-medium dark:text-white">MongoDB, Firebase</p>
                    <p className="text-black text-sm font-medium dark:text-white">SQL, NoSQL, ORM (Sequelize)</p>
                  </div>
                  <div className="w-[250px] h-36 p-2 bg-white dark:bg-neutral-900 border border-blue-300 rounded-lg">
                    <div className="flex flex-row justify-between ">
                      <p className="text-blue-700 font-semibold">DevOps & Cloud</p>
                      <Server className="text-blue-700" />
                    </div>
                    <p className="text-neutral-700 text-sm dark:text-white/60">Déploiement, CI/CD, conteneurs et services cloud.</p>
                    <p className="text-black text-sm font-medium dark:text-white">Docker, Kubernetes</p>
                    <p className="text-black text-sm font-medium dark:text-white">GitHub Actions, Jenkins</p>
                    <p className="text-black text-sm font-medium dark:text-white">AWS, Azure, GCP</p>
                  </div>
                  </>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

