import { useState } from 'react'
import './style.scss'
import imagemLampada from "./assets/lampada.png"
import imagemGenioLamp from "./assets/genio.png"

function App() {

  const [imagemGenio, setImagemGenio] = useState(imagemLampada)

  const alteraImagem = () => {
    setImagemGenio(imagemGenioLamp);
    if (imagemGenio == imagemGenioLamp) {
      setImagemGenio(imagemLampada)
    }
  }

  return (
   <main>
    <h1>"Liberte a magia da programação com a lâmpada de Aladim."</h1>
    <img src={imagemGenio} alt="" />
    <button onClick={alteraImagem}>Clique aqui</button>
   </main>
  )
}

export default App
