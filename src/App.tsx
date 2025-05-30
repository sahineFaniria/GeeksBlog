import PrivateRoute from "./utils/PrivateRoute"
import './App.css'
import { ThemeProvider } from "./components/theme-provider"
 
function App() {
  return (
   
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <PrivateRoute/>
        </ThemeProvider>
   
    
  )
}
 
export default App