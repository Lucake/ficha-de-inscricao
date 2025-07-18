// Project data:
// name: nome do projeto
// logo: url do logo do projeto
// image: url da imagem de capa da página
// color: cor da página do projeto em hexadecimal
// message: Mensagem que aparece ao finalizar o cadastro (aceita html, podendo inserir links para grupos, etc),
// howDidYouKnow: Adiciona items a "como soube do projeto", ideal colocar os financiadores
// cities: array com as cidades onde o projeto é realizado. Deve conter um objeto com estado e cidade

export const projects = {
  restart: {
    name: "AWS Restart",
    logo: "./images/logos/restart.png",
    image: "./images/photos/esv.jpg",
    color: "#027DBA",
    message: "Para dar continuidade no processo, aguarde o contato da equipe",
    howDidYouKnow: ["Amazon", "Softex"],
    disabledFieldsId: ["input-escolaridade-2"],
    cities: [
      {
        state: "Pernambuco",
        city: "Recife",
      },
    ],
  },

  cdd: {
    name: "Com.Dominio Digital 4.0",
    logo: "./images/logos/cdd.png",
    image: "./images/photos/cdd.jpg",
    color: "#027DBA",
    message: "Para dar continuidade no processo, aguarde o contato da equipe",
    howDidYouKnow: [],
    disabledFieldsId: [],
    cities: [
      {
        state: "Pernambuco",
        city: "Recife",
      },
    ],
  },

  esv: {
    name: "Escola Social do Varejo",
    logo: "./images/logos/esv.png",
    image: "./images/photos/esv.jpg",
    color: "#17428B",
    message: `
      Entre no grupo de WhatsApp para dar continuidade à seleção.<br><br>
      <a href='https://chat.whatsapp.com/JGsQf8WQr9D6lcjq7Wsd1r'>Whatsapp - Bahia (clique aqui)</a><br>
      <a href='https://chat.whatsapp.com/Gj5KavGwe3S4paf97cx8El'>Whatsapp - Ceará (clique aqui)</a><br>
      <a href='https://chat.whatsapp.com/FGD5wZNUWjB12FFWfr3Cqv'>Whatsapp - Pernambuco (clique aqui)</a><br><br>
      <b>*é obrigatório acessar o grupo do WhatsApp para participar das etapas processo seletivo e obter mais informações<b>
    `,
    howDidYouKnow: ["Carrefour"],
    disabledFieldsId: [],
    cities: [
      {
        state: "Bahia",
        city: "Salvador",
      },
      {
        state: "Ceará",
        city: "Fortaleza",
      },
      {
        state: "Pernambuco",
        city: "Recife",
      },
    ],
  },

  rotas: {
    name: "Rotas e Travessias",
    logo: "./images/logos/rotas.png",
    image: "./images/photos/rotas.jpg",
    color: "#f1872d",
    message: `
      Entre no grupo de WhatsApp para dar continuidade à seleção.<br><br>
      <a href='https://chat.whatsapp.com/CkUJ2iMiYwE8tQdIQ7srMZ'>Whatsapp - Bahia (clique aqui)</a><br>
      <a href='https://chat.whatsapp.com/DZjptsiXl3yBxA62eKBq2O'>Whatsapp - Ceará (clique aqui)</a><br>
      <a href='https://chat.whatsapp.com/CkUJ2iMiYwE8tQdIQ7srMZ'>Whatsapp - São Paulo (clique aqui)</a><br><br>
      <b>*é obrigatório acessar o grupo do WhatsApp para participar das etapas processo seletivo e obter mais informações<b>
    `,
    howDidYouKnow: ["Suzano", "Zurich Seguros", "Zurich Santander"],
    disabledFieldsId: [],
    cities: [
      {
        state: "Bahia",
        city: "Salvador",
      },
      {
        state: "Bahia",
        city: "Teixeira de Freitas",
      },
      {
        state: "São Paulo",
        city: "São Paulo",
      },
      {
        state: "Ceará",
        city: "Itaitinga",
      },
    ],
  },
  partiufuturo: {
    name: "Partiu Futuro",
    logo: "./images/logos/partiu.png",
    image: "./images/photos/partiu.png",
    color: "#FF8930",
    message: "Para dar continuidade no processo, aguarde o contato da equipe",

    // `
    //   Entre no grupo de WhatsApp para dar continuidade à seleção.<br><br>
    //   <a href='https://chat.whatsapp.com/CkUJ2iMiYwE8tQdIQ7srMZ'>Grupo do Whatsapp (clique aqui)</a><br><br>
    //   <b>*é obrigatório acessar o grupo do WhatsApp para participar das etapas processo seletivo e obter mais informações<b>
    // `,
    howDidYouKnow: ["Boulevard Shopping", "Zurich Seguros", "Zurich Santander"],
    disabledFieldsId: [],
    cities: [
      {
        state: "Pará",
        city: "Belém",
      },
    ],
  },
};
