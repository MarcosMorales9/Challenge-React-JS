import './App.css';
import { useState, useEffect } from 'react';

const animales = [
  "Bird",
  "Cat",
  "Dog",
  "fox",
  "kangaroo",
  "koala",
  "panda",
  "raccoon",
  "red_panda"
]
// hacemos un array con las difentes url para despues utilizarlas para sacar el index de manera aleatoria 

function App() {
  const [image, setImage] = useState('');
  const [text, setText] = useState('');
  // utilizamos el useState que en un pricipio vale '' pero despues nos va a permitir meter el dato y tambien poder actualizarlo  

  const getAnimal = () => {
    var randomAnimal = Math.floor(Math.random()*animales.length)
    // utilizamos el array que hicimos de los diferentes animales y de esta manera obtenemos el index de manera aleatoria 
    var animal = animales[randomAnimal]
    // hacemos una variable que va a tener el animal generado de manera aleatoria por su index
    fetch(`https://some-random-api.ml/animal/${animal}`)
      .then(res => res.json())
      .then(data => {
        setImage(data.image);
        setText(data.fact);
      })
      // capturamos los datos de el animal aleatorio y actualizamos el estado de image y text 
  }

  useEffect(() => {
    getAnimal()
  }, []);
  // utilizamos el useEffect para realizar la funcion en la fase de montado a actualizacion del componente 
  return (
  <div className='cardAnimal'>
    <p className='textFact'>
      {text}
    </p>
     {/*llamamos a text para que se imprima en pantalla */}
    <img
        className='fotitoGatito' 
        src={image} 
        alt={text}
    >
    </img>
     {/*llamamos a image para que la imagen aparezca en pantalla */}

    <button onClick={getAnimal}>
        Next Fact
    </button>
    {/* utilizamos el evento onClick con la funcion getAnimal para poder cambiar de foto y texto */}
  </div>
  );
}

export default App;
