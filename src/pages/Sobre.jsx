import Header from '../components/Header'
import sobre from '../assets/sobre.svg'
import Card from '../components/Card'
import styles from '../styles/pages/sobre.module.css'

const Sobre = () => {
  return (
    <>
      <Header title="Sobre o projeto" image={sobre} />
      <h1 className={styles.texto}>O Navega Recife veio trazer aos recifenses informações sobre diversos cursos de informática básica e programação na nossa cidade. Abaixo você encontra os locais e os contatos.</h1>
      <section className={styles.lista}>
        <Card 
        title="Movimento Procriança"
        content="
        Capacita adolescentes e jovens promovendo a inclusão digital a formação de jovens de baixa renda em situação de vulnerabilidade social com a oferta de oficinas, cursos como robótica, recondicionamento de computadores, jogos digitais e iniciação à informática, além de treinamentos e outras atividades formativas.
        Contato: ascom@movimentoprocrianca.org.br
        (81) 3412.8989"
        linkUrl="https://www.movimentoprocrianca.org.br/educacionais"
        />
        <Card 
        title="IOS Instituto da Oportunidade Social"
        content="Oferece o curso Microsoft Essencial na modalidade presencial.
        Os requisitos são ter entre 15 e 29 anos, morar em Recife e estar cursando ou já ter concluído o ensino médio prioritariamente na rede pública de ensino.
        Contato: inscricoes@ios.org.br
        (81) 98147-7179"
        linkUrl="https://ios.org.br/cursos-ios/"
        />
        <Card 
        title="Senac PE"
        content="O Senac oferece diversos cursos gratuitos através do Programa Senac de Gratuidade, entre eles:
        Fundamentos do Design para Web, Html e Css - Criação de Websites, Informática Básica com Internet e Mídias Sociais, Javascript - Interatividade para Web - PSG, Lógica de Programação, Operador de Computador, Php com Mysql, Programação em Java. Os cursos disponíveis podem ser consultados no link abaixo. "
        linkUrl="https://www.ead.senac.br/gratuito?gad=1&gclid=Cj0KCQjw_O2lBhCFARIsAB0E8B_DIBsXo5F-e9AgkRyjDP0Rqyb_owZd7ngBG0AJAuUMIKamUln7kK4aAlSaEALw_wcB"
        />
        <Card 
        title="Cecine - UFPE"
        content="O Cecine oferece curso de Informática Básica. O curso tem 30 horas e confere certificado aos participantes.
        Contato: cecine@ufpe.com.br
        (81) 2126-7030"
        linkUrl="https://www.ufpe.br/cecine/noticias/-/asset_publisher/1TGhkdmvueQy/content/inscricoes-abertas-curso-de-informatica-basica/600739"
        />
        <Card 
        title="CENTRO DE EDUCAÇÃO PROFISSIONAL JORNALISTA CRISTIANO DONATO"
        content="Oferece diversos cursos entre informática, línguas estrangeiras e Libras.
        Contato:(81) 3355-3592
        Endereço: Rua da Imperatriz Tereza Cristina, 182 – Boa Vista – Recife/PE (RPA 01)"
        linkUrl="https://www2.recife.pe.gov.br/servico/escolas-profissionalizantes"
        />
        <Card 
        title="ESCOLA PROFISSIONAL MARIA SAMPAIO DE LUCENA"
        content="Contato: (81) 3355-6903
        Endereço: Avenida Rio Grande, s/n – UR 1 Ibura – Recife/PE (RPA 06)."
        linkUrl="https://www2.recife.pe.gov.br/servico/escolas-profissionalizantes"
        />
        <Card 
        title="ESCOLA PROFISSIONAL MAGALHÃES BASTOS"
        content="Contato: (81) 3355-6006
        Endereço: Rua Francisco Lacerda, s/n – Várzea - Recife/PE (RPA 04)."
        linkUrl="https://www2.recife.pe.gov.br/servico/escolas-profissionalizantes"
        />
      </section>
      
    </> 
    
  )
}

export default Sobre