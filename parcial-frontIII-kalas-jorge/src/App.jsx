import './App.css'
import { useState } from 'react'
import Card from './components/Card'

function App() {

  //1. useState

  const [nombre, setNombre] = useState("");
  const [signo, setSigno] = useState("");
  const [anioNacimiento, setAnioNacimiento] = useState("");
  const [validationError, setValidationError] = useState("");

  //2. Handlers

  const onChangeNombre = (event) => {setNombre(event.target.value.trim())}
  const onChangeSigno = (event) => {setSigno(event.target.value.trim())}
  const onChangeAnioNacimiento = (event) => {setAnioNacimiento(event.target.value)}

  //3. Validaciones

  const validarNombre = (nombre) => {
    //Nota: el nombre ya ingresa a la validación seteado con el trim, por lo que no es necesario volver a utilizar este método
    return nombre.length >= 3;
  }

  const validarSigno = (signo) => {
    //Nota: a pesar de no solicitarlo la consigna, prefiero mantener el trim también en este input, por una cuestión de homogeneidad en los criterios de validación
    return signo.length >= 6;
  }

  const validarAnioNacimiento = (anioNacimiento) => {
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    return anioNacimiento > 1900 && anioNacimiento <= anioActual;
  }

//4. Handler para el formulario (evento submit)

  const onSubmitForm = (event) => {
    event.preventDefault();

    const esNombreValido = validarNombre(nombre);
    const esSignoValido = validarSigno(signo);
    const esAnioNacimientoValido = validarAnioNacimiento(anioNacimiento);

    if(esNombreValido && esSignoValido && esAnioNacimientoValido){
      setValidationError(false);
    } else{
      setValidationError("Por favor, chequea que la información sea correcta");
    }

  }

//5. Return

  return (
    <div className="App">

      <h1>Tu número de la suerte 🍀</h1>

      <form onSubmit = {onSubmitForm}>

        <input type="text" value={nombre} onChange={onChangeNombre} placeholder="Ingresa tu nombre" disabled={validationError===false}/>
        <input type="text" value={signo} onChange={onChangeSigno} placeholder="Ingresa tu signo" disabled={validationError===false}/>
        <input type="number" value={anioNacimiento} onChange={onChangeAnioNacimiento} placeholder="Ingresa tu año de nacimiento" disabled={validationError===false}/>
        
        <button type="submit" disabled={validationError===false}>Enviar</button>

        <div className="divError">{validationError}</div>

        {validationError===false && <Card nombre = {nombre} signo = {signo} anioNacimiento = {anioNacimiento} />}

      </form>

    </div>
  )
}

export default App;

