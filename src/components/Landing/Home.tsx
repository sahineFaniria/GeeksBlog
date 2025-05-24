import { Button } from "../ui/button";



export default function Home() {
  return (
    <div className="w-full">
        <header className="top-0 fixed w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow ">
            <div className=" container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="">
                    <p className="font-bold text-xl text-blue-600">GeeksBlog</p>
                </div>
                <div className="flex gap-1.5" >
                  <Button className="h-7" >Login</Button>
                  <Button className="h-7 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200" >Sign in</Button>
                </div>
            </div>
            
        </header>
        <div className=' w-full relative top-36  px-2 py-3  rounded-3xl  '>
            <div className=' container mx-auto px-4'>
                <h1 className=' text-black text-4xl font-bold'>Bienvenue sur GeeksBlog</h1>
                <p className=' mt-4 text-xl text-neutral-900'>Explorez un univers riche en technologies et <br /> en connaissances numérique</p>
                <p className='  text-neutral-700'>Que vous soyez passionné de <strong> développeur , administrateur réseau</strong> ou <br /> curieux technophile , ce blog est fait pour vous  ...</p>
                <p className=' text-neutral-700'>Commencez votre aventure tech dés maintenant !</p>
                <p className='  text-neutral-700'>Connectez-vous pour publier, commenter, ou poser votre candidature aux publicaations.</p>
            </div>
        </div>
    </div>
  )
}
