import Header from '../components/Header'
import styles from '../styles/pages/sobre.module.css'
import home from '../assets/home.svg'

const Home = () => {
  return (
    <>
      <Header title="Navega Recife" image={home} />
      <h1 className={styles.texto}> Bem vindo ao Navega Recife, onde você encontra informações sobre vários cursos de informática gratuitos na cidade do Recife!</h1>
    </> 
  )
}

export default Home