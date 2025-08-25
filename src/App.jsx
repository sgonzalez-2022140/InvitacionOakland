import { useState } from 'react'
import Letter from './Components/Letter';
import Invitation from './Components/Invitacion';
import './App.css'

export default function App() {
  const [open, setOpen] = useState(false); // inicia cerrada

  return (
    <div className="page">
      <div className="bg-gradient" />
      <Letter isOpen={open} onToggle={() => setOpen(o => !o)}>
        <Invitation />
      </Letter>

      <p className="hint">
        {open ? "Haz click en la carta para cerrarla" : "Haz click en la carta para abrirla"}
      </p>
    </div>
  );
}
