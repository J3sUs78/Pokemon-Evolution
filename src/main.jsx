import ReactDOM from "react-dom/client";
import { App } from "./App";

const rootElement = document.querySelector('#root') //obtener el div root con id 'root'

const root = ReactDOM.createRoot(rootElement) //crear un elemento raiz para mostrar la pagina

console.log(root)

//root.render(<h1>Hola </h1>) // manera sencilla de dibujar algo en la pagina atravez de un componente

root.render(
  <App/>
)