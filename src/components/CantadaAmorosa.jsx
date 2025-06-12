import { useState } from "react"

const CantadaAmorosa = () => {
    const [nome,setNome] = useState ("")
    const cantadas= [
        "Você é Wi-Fi? Porque eu estou sentindo uma conexão.",
        "Você não é Google, mas tem tudo o que eu procuro.",
        "Seu nome é mapa? Porque me perdi no brilho dos seus olhos.",
        "Você é feita de cobre e telúrio? Porque você é Cu-Te.",
        "Se beleza desse cadeia, você pegaria prisão perpétua.",
        "Seu pai é padeiro? Porque você é um sonho.",
        "Se você fosse uma estrela, seria a mais brilhante da galáxia.",
        "Você é mago(a)? Porque sempre que você aparece, tudo fica mágico.",
        "Você é a razão de eu ter esquecido o que ia dizer…",
        "Não sou fotógrafo, mas posso te imaginar em todas as minhas fotos."
    ]
    // const formCantada = nome + ', ' + cantadas[0]
    const [frase,setFrase] = useState('Coloque o nome do seu crush e veja a magica acontecer 😎');
    const numFrase = Math.floor(Math.random() * 10)
    const verificaNome = () =>{
        if (nome  == ''){
            setFrase("Preencha o nome do seu crush")
        }
        else{
            setFrase(nome + ', ' + cantadas[numFrase])
        }
    }
    return(
        <div className="container">
            <h2 className="Titulo">😍 Cantadas Amorosas Para o Seu crush</h2>
            <input type="text" placeholder="Nome do seu crush" value={nome} onChange={e => setNome(e.target.value)}/>
            <button onClick={() => verificaNome()}>Gerar Cantadas</button>
            <p>{frase}</p>
        </div>
    )
}
export default CantadaAmorosa