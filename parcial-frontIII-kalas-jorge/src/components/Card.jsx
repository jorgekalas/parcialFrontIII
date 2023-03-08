import styles from './Card.module.css'

const Card = ({nombre, signo, anioNacimiento}) => {

    //1. Variable para calcular el número de la suerte
    const numeroDeLaSuerte = Math.round((anioNacimiento * Math.random())/25);

    //2. Handler para recargar el sitio
    const onClickToReload = () =>{ location.reload(); }

    //3. Return
    return (
        <>
            <div className = {styles.divNumeroSuerte}>
                <p className ={styles.nombre}>¡Hola {nombre}!</p>
                <p className = {styles.textoSup}>Según tu signo ({signo}) y tu año de nacimiento ({anioNacimiento}),</p>
                <p className = {styles.textoInf}>puedo decirte que tu número de la suerte para hoy, es el:</p>
                <p className = {styles.numero}>✨ {numeroDeLaSuerte} ✨</p>
            </div>
            <marquee>🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀</marquee>
            <button onClick={onClickToReload}>Volver a empezar</button>
        </>
    )
}

export default Card;