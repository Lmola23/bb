import React, { useState } from 'react';
import LoveCard from './CardLove/CardLove';
import './App.css';

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);

  const longMessage = `
    Hoy es el día en que el mundo vio caer un ángel del cielo. Hoy el mundo se volvió perfecto, o mejor dicho, mi mundo.Ese día, sin saberlo, el universo me regaló lo más hermoso que tendría jamás, aunque claro eso no lo iba a saber hasta 16 años después ,cuando apareciste en mi vida para cambiarlo todo.

Ya han pasado tres años y te miro sin dejar de preguntarme cómo un ser tan hermoso , tan puro ,tan especial ,tan perfecto me escogió a mí. Cada momento a tu lado se vuelve una película que no me importa si son de las que tienen un final feliz o triste simplemente quiero que no termine. Sentir tu cabello negro entre mis manos me hipnotiza… supongo que así se deben sentir las nubes. Esos instantes en tus hermosos ojitos chinos me atrapan y ya no puedo escapar, pero no importa, porque me quedaría la eternidad allí, sabiendo que solo me miran a mí.
Cuando siento tu boquita carnosa acercarse, tu respiración cerca y luego me besas, mi mi piel se estremece, un escalofrío me recorre la nuca y el mundo entero desaparece. Luego me abrazas, reímos y solo quiero que el reloj se congele en ese presiso instante. Tus tatuajes, que tanto me enlcoquecen, encajan tan bien en ese perfecto rompecabezas que es tu cuerpo, el cual se ha convertido en mi mision: descifrarte, conoceter y hacerte sentir lo mismo que provocas en mí , cuando me tocas y haces que este mortal pise el cielo por un efimero instante.
Pero si tu hermosura no bastara para adueñarte de mi corazón, eres también el ser más atento, detallista y cariñoso. Amas de la forma más pura que existe, me apoyas incondicionalmente en todo, eres inteligente, imaginativa, divertida… haces que el tiempo transcurra tan rápido que sé que, cuando lleguemos a viejitos en una granjita en SANAU, suspiraré resignado porque una vida no será suficiente para nuestro amor.

Mientras tanto, año tras año me encargaré de recordarte lo perfecta y especial que eres, mi amor. Haré de tu paso por la vida la película más bonita que jamás se haya escrito.

Te amo, cosita. Sé que nunca podré expresar con palabras lo que significas para mí, pero siempre me esforzaré y lo daré todo.

Feliz cumpleaños al ángel que se enamoró de un simple mortal. Te amoooo.
  `;

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <div className="app-container">
      {isStarted ? (
        <LoveCard message={longMessage.trim()} />
      ) : (
        <button className="start-button" style={{margin:"20px"}} onClick={handleStart}>
         ❤️❤️Para que nunca lo pierda , se rompa , ni lo olvides ,Te amo con todas mis cada parte de mi❤️
        </button>
      )}
    </div>
  );
};

export default App;
