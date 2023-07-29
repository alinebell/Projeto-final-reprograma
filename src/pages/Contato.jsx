import React, { useState} from 'react'
import database from '../service/firebase'
import {ref, push, set} from 'firebase/database'
import Header from '../components/Header'
import contato from '../assets/contato.svg'
import styles from '../styles/pages/contato.module.css'

const Contato = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail  ] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleInputNome(e) {
    setNome(e.target.value)
  }

  function handleInputEmail(e) {
    setEmail(e.target.value)
  }

  function handleInputMensagem(e) {
    setMensagem(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    
    const messageListRef = ref(database, 'mensagens')
    const newMessageRef = push(messageListRef) 
    set(newMessageRef, {
      nome: nome,
      email: email,
      texto: mensagem
    })
  }

  return (
    <>
      <Header title="Nosso Contato" 
      image={contato} 
      />
      <main>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input 
          className={styles.formInput}
          type="text"
          placeholder="digite seu nome"
          onChange={handleInputNome}
          value={nome}
          />
          <input 
          className={styles.formInput}
          type="email"
          placeholder="digite seu e-mail"
          onChange={handleInputEmail}
          value={email}
          />
          <textarea
          className={styles.formInput}
          placeholder="digite sua mensagem"
          onChange={handleInputMensagem}
          value={mensagem}
          />

          <button 
          className={styles.formButton}
          type="submit">Enviar Mensagem
          </button>

        </form>
      </main>
    </>
  )
}

export default Contato