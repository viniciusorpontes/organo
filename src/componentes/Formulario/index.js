import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('');

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const salvar = (evento) => {
        evento.preventDefault()
        props.salvar({ nome, cargo, imagem, time })
    }

    return (
        <section className="formulario">
            <form onSubmit={salvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    valor={nome}
                    alterarCampo={valor => setNome(valor)}
                    label="Nome"
                    placeholder="Digite seu nome"
                    obrigatorio={true}
                />
                <CampoTexto
                    valor={cargo}
                    alterarCampo={valor => setCargo(valor)}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    obrigatorio={true}
                />
                <CampoTexto
                    valor={imagem}
                    alterarCampo={valor => setImagem(valor)}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                />
                <ListaSuspensa
                    valor={time}
                    alterarCampo={valor => setTime(valor)}
                    label="Time"
                    itens={times}
                    obrigatorio={true}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario