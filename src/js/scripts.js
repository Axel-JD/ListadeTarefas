const formatador = (data) => {
    return {
        dia: {
            numerico:dayjs(data).format('DD'),
            semana:{
                curto:dayjs(data).format('ddd'),
                longo:dayjs(data).format('dddd'),
            }
        },
        mes:dayjs(data).format('MMMM'),
        hora:dayjs(data).format('HH:mm')
    }
}

//OBJECT  {}

const atividade = {
    nome: "Ir ao Mercado",
    data: new Date("2024-07-18 10:00"),
    finalizada: false
}

let atividades = [
    atividade,
    {
        nome: "Jantar",
        data: new Date("2024-07-19 20:00"),
        finalizada: true
    },
    {
        nome: "Dormir",
        data: new Date("2024-07-19 23:00"),
        finalizada: false
    },
    {
        nome: "Acordar",
        data: new Date("2024-07-20 06:00"),
        finalizada: false
    }
]


criarItemDeAtividade = (atividade) => {

    let input = '<input type="checkbox" '

    if (atividade.finalizada) {
        input = input + 'checked'
    }

    input = input + '>'

    const formatar = formatador(atividade.data);

    return `<div>

        ${input}

        <span>${atividade.nome}</span>

        <time datetime="">
        ${formatar.dia.semana.longo},
        dia ${formatar.dia.numerico}
        de ${formatar.mes}
        as ${formatar.hora}h.
        </time>

        </div>`
} //função criada

const atualizarListaDeAtividades = () => {

const section = document.querySelector('section') //pegando as informações via nome de tag

section.innerHTML=''

if(atividades.length == 0) {
    section.innerHTML = "<p>Nenhuma atividade cadastrada!</p>"
}

for(let atividade of atividades) {

    section.innerHTML = section.innerHTML + criarItemDeAtividade(atividade) //informação pega da função que foi chamada

}

}

atualizarListaDeAtividades ()

const salvarAtividade = (event) => {
    event.preventDefault()

    const dadosDoFormulario = new FormData(event.target)

    const nome = dadosDoFormulario.get('atividade')

    const dia = dadosDoFormulario.get('dia')

    const hora = dadosDoFormulario.get('hora')

    const data = `${dia} ${hora}`


    const novaAtividade = {
        nome,
        data,
        finalizada: false
    }

    atividades = [novaAtividade, ...atividades]

    atualizarListaDeAtividades()

}


