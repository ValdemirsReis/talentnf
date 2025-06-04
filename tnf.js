// Corrigir campo incorreto "municipio" e manter consistência com "concelho"
const jobseekers = [
    {
        nome: "Ana Maria Galvão",
        distrito: "Faro",
        concelho: "Albufeira",
        setor: "Tecnologias da informação",
        regime: "Full-time",
        modalidade: "Remoto",
        cv: "https://drive.google.com/file/d/13c89PCZRJaF8W4T1d6SEllXjhq-2jiIu/view",
        foto: "img/ana.jpg",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        nome: "António Silva",
        distrito: "Porto",
        concelho: "Gaia",
        setor: "Educação",
        regime: "Part-time",
        modalidade: "Presencial",
        cv: "https://drive.google.com/file/d/13c8CV",
        foto: "img/Vitor.jpg",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        nome: "Maria Sousa",
        distrito: "Lisboa",
        concelho: "Vila Franca de Xira",
        setor: "Turismo",
        regime: "Full-time",
        modalidade: "Misto",
        cv: "https://drive.google.com/file/d/13c89C",
        foto: "img/maria.jpg",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        nome: "Carlos Andrade",
        distrito: "Braga",
        concelho: "Braga",
        setor: "Engenharia",
        regime: "Full-time",
        modalidade: "Presencial",
        cv: "https://drive.google.com/file/d/13C879",
        foto: "img/Paulo.jpg",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        nome: "Sofia Ferreira",
        distrito: "Madeira",
        concelho: "Funchal",
        setor: "Psicologia",
        regime: "Part-time",
        modalidade: "Remoto",
        cv: "https://drive.google.com/file/d/13c89xyz",
        foto: "img/Júlia.jpg",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        nome: "Valdemir Silva",
        distrito: "Lisboa",
        concelho: "Odivelas",
        setor: "Tecnologias da informação",
        regime: "Full-time",
        modalidade: "Remoto",
        cv: "https://drive.google.com/file/d/1HkS4htmlSZO_7a-AGETw-aRyAtzK7ixy/view",
        foto: "img/Me.jpg",
        descricao: "programador front-end especialista em UX/UI Design e audiovisual."
    },
    {
        nome: "Ana Rita",
        distrito: "Lisboa",
        concelho: "Lisboa",
        setor: "Saúde",
        regime: "Full-time",
        modalidade: "Presencial",
        cv: "https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing",
        foto: "img/Rita.png",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        nome: "Samuel Cascais",
        distrito: "Santarém",
        concelho: "Entroncamento",
        setor: "Educação",
        regime: "Full-time",
        modalidade: "Presencial",
        cv: "https://drive.google.com/file/d/10E7xQ7nYnu0cRMPrg01SPE4x6cav1jlK/view",
        foto: "img/Samuel.png",
        descricao: "Profissional multifacetado, com experiência em diversas áreas e engajamento em causas sociais."
    },
];

const distritos = {
  "Açores": ["Corvo", "Faial", "Flores", "Graciosa", "Pico", "Santa Maria", "São Jorge", "São Miguel", "Terceira"],
  "Aveiro": ["Águeda", "Albergaria-a-Velha", "Anadia", "Arouca", "Aveiro", "Castelo de Paiva", "Espinho", "Estarreja", "Ílhavo", "Mealhada", "Murtosa", "Oliveira de Azeméis", "Oliveira do Bairro", "Ovar", "Santa Maria da Feira", "São João da Madeira", "Sever do Vouga", "Vagos", "Vale de Cambra"],
  "Beja": ["Aljustrel", "Almodôvar", "Alvito", "Barrancos", "Beja", "Castro Verde", "Cuba", "Ferreira do Alentejo", "Mértola", "Moura", "Odemira", "Ourique", "Serpa", "Vidigueira"],
  "Braga": ["Amares", "Barcelos", "Braga", "Cabeceiras de Basto", "Celorico de Basto", "Esposende", "Fafe", "Guimarães", "Póvoa de Lanhoso", "Terras de Bouro", "Vieira do Minho", "Vila Nova de Famalicão", "Vila Verde", "Vizela"],
  "Bragança": ["Alfândega da Fé", "Bragança", "Carrazeda de Ansiães", "Freixo de Espada à Cinta", "Macedo de Cavaleiros", "Miranda do Douro", "Mirandela", "Mogadouro", "Torre de Moncorvo", "Vila Flor", "Vimioso", "Vinhais"],
  "Castelo Branco": ["Belmonte", "Castelo Branco", "Covilhã", "Fundão", "Idanha-a-Nova", "Oleiros", "Penamacor", "Proença-a-Nova", "Sertã", "Vila de Rei", "Vila Velha de Ródão"],
  "Coimbra": ["Arganil", "Cantanhede", "Coimbra", "Condeixa-a-Nova", "Figueira da Foz", "Góis", "Lousã", "Mira", "Miranda do Corvo", "Montemor-o-Velho", "Oliveira do Hospital", "Pampilhosa da Serra", "Penacova", "Penela", "Soure", "Tábua", "Vila Nova de Poiares"],
  "Évora": ["Alandroal", "Arraiolos", "Borba", "Estremoz", "Évora", "Montemor-o-Novo", "Mora", "Mourão", "Portel", "Redondo", "Reguengos de Monsaraz", "Vendas Novas", "Viana do Alentejo", "Vila Viçosa"],
  "Faro": ["Albufeira", "Alcoutim", "Aljezur", "Castro Marim", "Faro", "Lagoa", "Lagos", "Loulé", "Monchique", "Olhão", "Portimão", "São Brás de Alportel", "Silves", "Tavira", "Vila do Bispo", "Vila Real de Santo António"],
  "Guarda": ["Aguiar da Beira", "Almeida", "Celorico da Beira", "Figueira de Castelo Rodrigo", "Fornos de Algodres", "Gouveia", "Guarda", "Manteigas", "Mêda", "Pinhel", "Sabugal", "Seia", "Trancoso", "Vila Nova de Foz Côa"],
  "Leiria": ["Alcobaça", "Alvaiázere", "Ansião", "Batalha", "Bombarral", "Caldas da Rainha", "Castanheira de Pêra", "Figueiró dos Vinhos", "Leiria", "Marinha Grande", "Nazaré", "Óbidos", "Pedrógão Grande", "Peniche", "Pombal", "Porto de Mós"],
  "Lisboa": ["Alenquer", "Amadora", "Arruda dos Vinhos", "Azambuja", "Cadaval", "Cascais", "Lisboa", "Loures", "Lourinhã", "Mafra", "Odivelas", "Oeiras", "Sintra", "Sobral de Monte Agraço", "Torres Vedras", "Vila Franca de Xira"],
  "Madeira": ["Calheta", "Câmara de Lobos", "Funchal", "Machico", "Ponta do Sol", "Porto Moniz", "Porto Santo", "Ribeira Brava", "Santa Cruz", "Santana", "São Vicente"],
  "Portalegre": ["Alter do Chão", "Arronches", "Campo Maior", "Castelo de Vide", "Crato", "Elvas", "Fronteira", "Gavião", "Marvão", "Nisa", "Ponte de Sor", "Portalegre", "Sousel"],
  "Porto": ["Amarante", "Felgueiras", "Gondomar", "Lousada", "Maia", "Matosinhos", "Paços de Ferreira", "Paredes", "Penafiel", "Porto", "Póvoa de Varzim", "Santo Tirso", "Trofa", "Valongo", "Vila do Conde", "Vila Nova de Gaia"],
  "Santarém": ["Abrantes", "Alcanena", "Almeirim", "Alpiarça", "Benavente", "Cartaxo", "Chamusca", "Constância", "Coruche", "Entroncamento", "Ferreira do Zêzere", "Golegã", "Mação", "Ourém", "Rio Maior", "Salvaterra de Magos", "Santarém", "Sardoal", "Tomar", "Torres Novas", "Vila Nova da Barquinha"],
  "Setúbal": ["Alcácer do Sal", "Alcochete", "Almada", "Barreiro", "Grândola", "Moita", "Montijo", "Palmela", "Santiago do Cacém", "Seixal", "Sesimbra", "Setúbal", "Sines"],
  "Viana do Castelo": ["Arcos de Valdevez", "Caminha", "Melgaço", "Monção", "Paredes de Coura", "Ponte da Barca", "Ponte de Lima", "Valença", "Viana do Castelo", "Vila Nova de Cerveira"],
  "Vila Real": ["Alijó", "Boticas", "Chaves", "Mesão Frio", "Mondim de Basto", "Montalegre", "Murça", "Peso da Régua", "Ribeira de Pena", "Sabrosa", "Santa Marta de Penaguião", "Valpaços", "Vila Pouca de Aguiar", "Vila Real"],
  "Viseu": ["Armamar", "Carregal do Sal", "Castro Daire", "Cinfães", "Lamego", "Mangualde", "Moimenta da Beira", "Mortágua", "Nelas", "Oliveira de Frades", "Penalva do Castelo", "Penedono", "Resende", "Santa Comba Dão", "São João da Pesqueira", "São Pedro do Sul", "Sátão", "Sernancelhe", "Tabuaço", "Tarouca", "Tondela", "Vila Nova de Paiva", "Viseu", "Vouzela"]
};

$('#distrito').change(function() {
  const distritoSelecionado = $(this).val();
  const concelhos = (distritos[distritoSelecionado] || []).sort();
  const concelhoSelect = $('#concelho');

  concelhoSelect.empty();
  concelhoSelect.append(new Option("Selecione um concelho", ""));
  concelhos.forEach(concelho => {
    concelhoSelect.append(new Option(concelho, concelho));
  });

  const filters = getFilters();
  const filtered = jobseekers.filter(candidate => matchesFilters(candidate, filters));
  renderJobseekers(filtered);
});


function getFilters() {
    return {
        distrito: $('#distrito').val()?.trim(),
        concelho: $('#concelho').val()?.trim(),
        setor: $('#setor').val()?.trim(),
        regime: $('#regime').val()?.trim(),
        modalidade: $('#modalidade').val()?.trim()
    };
}

function matchesFilters(candidate, filters) {
    return (!filters.distrito || candidate.distrito === filters.distrito) &&
           (!filters.concelho || candidate.concelho === filters.concelho) &&
           (!filters.setor || candidate.setor === filters.setor) &&
           (!filters.regime || candidate.regime === filters.regime) &&
           (!filters.modalidade || candidate.modalidade === filters.modalidade);
}

function renderJobseekers(filteredJobseekers) {
    const container = $('#jobseekers');
    const emptyMessage = $('#empty-message');
    container.empty();

    if (filteredJobseekers.length === 0) {
        emptyMessage.text("Não foram encontrados candidatos.");
        emptyMessage.show();
    } else {
        emptyMessage.hide();
        filteredJobseekers
            .sort((a, b) => a.nome.localeCompare(b.nome))
            .forEach(candidate => {
                const card = `
                    <div class="border border-blue-500 rounded-lg p-6 bg-white shadow-md text-justify">
                        <img src="${candidate.foto}" alt="${candidate.nome}" class="w-24 h-24 rounded-full object-cover mx-auto mb-4">
                        <h4 class="text-xl font-semibold text-center mb-2">${candidate.nome}</h4>
                        <p><strong>Distrito:</strong> <span class="notranslate">${candidate.distrito}</span></p>
                        <p><strong>Concelho:</strong> <span class="notranslate">${candidate.concelho}</span></p>
                        <p><strong>Setor:</strong> ${candidate.setor}</p>
                        <p><strong>Regime:</strong> ${candidate.regime}</p>
                        <p><strong>Modalidade:</strong> ${candidate.modalidade}</p>
                        <p class="mt-2">${candidate.descricao}</p>
                        <a href="${candidate.cv}" target="_blank" class="block mt-4 bg-blue-800 text-white text-center py-2 px-4 rounded hover:bg-blue-600">Ver CV</a>
                    </div>
                `;
                container.append(card);
            });
    }
}

$('#distrito').change(function () {
    const distritoSelecionado = $(this).val();
    const concelhos = distritos[distritoSelecionado] || [];
    const concelhoSelect = $('#concelho');

    concelhoSelect.empty();
    concelhoSelect.append(new Option("Selecione um concelho", ""));
    concelhos.forEach(concelho => {
        concelhoSelect.append(new Option(concelho, concelho));
    });

    const filters = getFilters();
    renderJobseekers(jobseekers.filter(candidate => matchesFilters(candidate, filters)));
});

$('#concelho, #setor, #regime, #modalidade').change(function () {
    const filters = getFilters();
    renderJobseekers(jobseekers.filter(candidate => matchesFilters(candidate, filters)));
});

$('#greeting').text(`${new Date().getHours() < 12 ? "Bom dia" : new Date().getHours() < 18 ? "Boa tarde" : "Boa noite"}. Bem vindos à TalentNF!`);

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'pt',
        includedLanguages: 'pt,en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

$(document).ready(function () {
    renderJobseekers(jobseekers);
});