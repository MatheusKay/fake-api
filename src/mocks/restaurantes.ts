const mediaPath = 'https://fake-api-rose.vercel.app/efood/'

const items = [
  {
    id: 1,
    logo: mediaPath + 'delicias_doces_cafe/' + '/doces_cafe.png',
    capa: mediaPath + 'delicias_doces_cafe/' + '/capa_doces.png',
    titulo: "Delicias Doces Café",
    tipo: "Doceria",
    avaliacao: 4.5,
    descricao:
      "Localizado no coração da cidade, o Delícias Doces Café é um refúgio celestial para os amantes de sobremesas. Este encantador restaurante é especializado em criar experiências culinárias verdadeiramente doces e memoráveis.",
    destacado: true,
    cardapio: [
      {
        foto: mediaPath + 'delicias_doces_cafe/' + '/doces_cafe.png',
        preco: 69.9,
        id: 1,
        nome: "Ravioli al Tartufo Nero",
        descricao:
          "O Ravioli al Tartufo Nero é um requintado prato de massa artesanal, que celebra os sabores ricos e terrosos da trufa negra italiana. Cada ravióli é cuidadosamente recheado com uma mistura saborosa de ricota fresca, parmesão e trufas negras raladas, proporcionando uma combinação de texturas suaves e aromas irresistíveis.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        foto: mediaPath + 'bella_tavola_italiana/' + '/2.jpg',
        preco: 56.9,
        id: 2,
        nome: "Spaghetti alla Carbonara",
        descricao:
          "O Spaghetti alla Carbonara é um clássico prato italiano, feito com massa spaghetti al dente, coberto com um molho rico e cremoso à base de ovos, queijo pecorino romano, pancetta e pimenta-do-reino. Um prato saboroso e reconfortante que leva você diretamente para a Itália.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        foto: mediaPath + 'bella_tavola_italiana/' + '/3.jpg',
        preco: 74.9,
        id: 3,
        nome: "Risotto ai Funghi Porcini",
        descricao:
          "O Risotto ai Funghi Porcini é uma iguaria italiana feita com arroz Arborio de alta qualidade e cogumelos porcini secos, que são reidratados para liberar seu sabor intenso e terroso. O arroz é cozido lentamente em um caldo de legumes, com vinho branco e queijo parmesão, resultando em um risoto cremoso e delicioso.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        foto: mediaPath + 'bella_tavola_italiana/' + '/4.jpg',
        preco: 89.9,
        id: 4,
        nome: "Ossobuco alla Milanese",
        descricao:
          "O Ossobuco alla Milanese é um tradicional prato italiano, originário de Milão, que consiste em um suculento pedaço de vitela cozido lentamente em um molho à base de tomate, vinho branco e legumes. O prato é acompanhado por uma porção de polenta cremosa ou risoto alla Milanese, feito com açafrão.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        foto: mediaPath + 'bella_tavola_italiana/' + '/5.jpg',
        preco: 62.9,
        id: 5,
        nome: "Melanzane alla Parmigiana",
        descricao:
          "Melanzane alla Parmigiana é um delicioso prato à base de berinjelas, em camadas com molho de tomate caseiro, queijo muçarela e parmesão, assado até ficar dourado e borbulhante. Uma opção saborosa e reconfortante, perfeita para os amantes de legumes e queijo.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        foto: mediaPath + 'bella_tavola_italiana/' + '/6.jpg',
        preco: 84.9,
        id: 6,
        nome: "Frutti di Mare Linguine",
        descricao:
          "O Frutti di Mare Linguine é uma verdadeira celebração dos sabores do mar, apresentando uma generosa mistura de frutos do mar frescos, como camarões, lulas, mariscos e vieiras, combinados com massa linguine al dente e um saboroso molho de tomate e vinho branco. Uma opção deliciosa para os amantes de frutos do mar.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        foto: mediaPath + 'bella_tavola_italiana/' + '/7.jpg',
        preco: 49.9,
        id: 7,
        nome: "Insalata Caprese",
        descricao:
          "A Insalata Caprese é uma refrescante e deliciosa salada italiana, feita com tomates maduros e suculentos, fatias frescas de mozzarella di bufala, folhas de manjericão e um fio de azeite extra virgem de oliva. Uma opção leve e saborosa, perfeita como entrada ou acompanhamento.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
    ],
  },

  {
    id: 2,
    logo: mediaPath + 'sabor_tempero_bistro/' + '/sabor_tempero.png',
    capa: mediaPath + 'sabor_tempero_bistro/' + '/capa_sabor.png',
    titulo: "Sabor & Tempero Bistrô",
    tipo: "Japonês",
    avaliacao: 4.9,
    descricao:
      "O Sabor & Tempero Bistrô é o epítome da elegância culinária em nossa cidade. Este requintado restaurante combina sofisticação e sabor de uma forma que é verdadeiramente única. Com um ambiente encantador e uma decoração que evoca um charme clássico, este bistrô oferece uma experiência gastronômica inesquecível.",
    destacado: false,
    cardapio: [
      {
        foto: mediaPath + 'casa_delicias_arabes/' + '/1.jpg',
        preco: 49.9,
        id: 8,
        nome: "Mezze Platter",
        descricao:
          "O Mezze Platter é uma seleção de aperitivos tradicionais árabes, incluindo homus, babaganush, tabule, falafel, azeitonas e pão pita fresco. Uma combinação deliciosa de sabores e texturas que proporciona uma experiência gastronômica única e diversificada.",
          categoria: 'Prato principal',
          nota: 4.8,
      },
      {
        foto: mediaPath + 'casa_delicias_arabes/' + '/2.jpg',
        preco: 54.9,
        id: 9,
        nome: "Kebab de Cordeiro",
        descricao:
          "O Kebab de Cordeiro é feito com pedaços de cordeiro marinados em especiarias e ervas, grelhados à perfeição e servidos com arroz basmati perfumado, salada e molho de iogurte. Uma opção saborosa e suculenta para quem aprecia a autêntica cozinha árabe.",
          categoria: 'Prato principal',
          nota: 4.8,
      },
      {
        foto: mediaPath + 'casa_delicias_arabes/' + '/3.webp',
        preco: 45.9,
        id: 10,
        nome: "Shawarma de Frango",
        descricao:
          "O Shawarma de Frango é preparado com finas fatias de frango marinadas em uma mistura de especiarias e grelhadas lentamente. Servido com pão pita, salada e molho tahine, este prato é uma opção saborosa e satisfatória para quem deseja saborear a autêntica comida de rua árabe.",
          categoria: 'Prato principal',
          nota: 4.8,
      },
    ],
  },

  {
    id: 3,
    logo: mediaPath + 'ristorante_la_trattoria/' + '/ristorante_trattoria.png',
    capa: mediaPath + 'ristorante_la_trattoria/' + '/capa_trattoria.png',
    titulo: "Ristorante La Trattoria",
    tipo: "",
    avaliacao: 4.8,
    descricao:
      "O Ristorante La Trattoria é um refúgio gastronômico que oferece uma rica variedade de pratos inspirados em diferentes países. Apesar de não ser muito elegante em termos de decoração, este restaurante é um verdadeiro tesouro para os amantes da comida internacional.",
    destacado: false,
    cardapio: [
      {
        foto: mediaPath + 'sakura_sushi_house/' + '/1.jpg',
        preco: 89.9,
        id: 11,
        nome: "Sushi e Sashimi Combinado",
        descricao:
          "O Sushi e Sashimi Combinado é uma seleção de peças cuidadosamente elaboradas por nossos sushimen, incluindo atum, salmão, peixe branco, camarão e outros frutos do mar frescos. Acompanha uma porção de wasabi, gengibre em conserva e molho shoyu, para realçar os sabores naturais dos ingredientes.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        foto: mediaPath + 'sakura_sushi_house/' + '/2.jpg',
        preco: 79.9,
        id: 12,
        nome: "Tempura de Legumes e Camarão",
        descricao:
          "O Tempura de Legumes e Camarão é uma opção deliciosa e crocante, composta por uma variedade de legumes e camarões frescos empanados em uma massa leve e frita até a perfeição. Acompanha um molho tentsuyu, à base de dashi, shoyu e mirin, para dar um toque especial ao prato.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        foto: mediaPath + 'sakura_sushi_house/' + '/3.jpg',
        preco: 69.9,
        id: 13,
        nome: "Teishoku de Tonkatsu",
        descricao:
          "O Teishoku de Tonkatsu é um prato tradicional japonês composto por uma fatia de lombo de porco empanado e frito, servido com arroz japonês, misoshiru (sopa de pasta de soja) e tsukemono (legumes em conserva). O molho tonkatsu, à base de frutas e legumes, adiciona um sabor agridoce irresistível.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
    ],
  },

  {
    id: 4,
    logo: mediaPath + 'fogo_brasa_churrascaria/' + '/fogo_brasa.png',
    capa: mediaPath + 'fogo_brasa_churrascaria/' + '/capa_fogo_brasa.png',
    titulo: "Fogo & Brasa Churrascaria",
    tipo: "português",
    avaliacao: 4.8,
    descricao:
      "O Cantinho Lusitano é um charmoso e tradicional restaurante português, que celebra a rica herança culinária de Portugal. Neste aconchegante espaço, os visitantes podem desfrutar dos autênticos sabores portugueses, preparados com ingredientes frescos e de alta qualidade, respeitando as receitas clássicas.",
    destacado: false,
    cardapio: [
      {
        foto: mediaPath + 'cantinho_lusitano/' + '/1.jpeg',
        preco: 74.9,
        id: 14,
        nome: "Bacalhau à Gomes de Sá",
        descricao:
          "O Bacalhau à Gomes de Sá é um prato tradicional português, que consiste em lascas de bacalhau cozido, batatas, cebola, alho, azeite e azeitonas pretas. Finalizado com salsa picada e ovos cozidos, este prato é um clássico da culinária portuguesa, que agrada a todos os paladares.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        foto: mediaPath + 'cantinho_lusitano/' + '/2.jpg',
        preco: 64.9,
        id: 15,
        nome: "Arroz de Pato",
        descricao:
          "O Arroz de Pato é um delicioso prato português, feito com arroz, carne de pato desfiada, chouriço e cenoura. Cozido lentamente no forno para absorver todos os sabores e aromas, o resultado é um prato saboroso e reconfortante que conquista os corações dos apaixonados pela gastronomia lusitana.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        foto: mediaPath + 'cantinho_lusitano/' + '/3.png',
        preco: 54.9,
        id: 16,
        nome: "Alheira de Mirandela",
        descricao:
          "A Alheira de Mirandela é um emblemático prato português, que consiste em uma deliciosa alheira grelhada, acompanhada de batatas fritas, arroz e uma salada fresca. A alheira é uma saborosa e suculenta mistura de carnes e pão, com um toque de alho e especiarias, que agrada a todos os gostos.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
    ],
  },

  {
    id: 5,
    logo: mediaPath + 'pizza_vegan/' + '/pizza_vegan.png',
    capa: mediaPath + 'pizza_vegan/' + '/capa_vegan.png',
    titulo: "Pizza Vegan",
    tipo: "pizzaria vegana",
    avaliacao: 4.7,
    descricao:
      "A Piazza Vegan é uma pizzaria acolhedora e autêntica que se orgulha de suas raízes italianas. Aqui, você encontrará pizzas artesanais preparadas com ingredientes frescos e assadas em forno a lenha, proporcionando sabores inigualáveis e uma crosta crocante e deliciosa.",
    destacado: false,
    cardapio: [
      {
        foto: mediaPath + 'piazza/' + '/1.jpg',
        preco: 49.9,
        id: 17,
        nome: "Pizza Margherita",
        descricao:
          "A Pizza Margherita é um clássico italiano, preparada com molho de tomate caseiro, muçarela fresca, folhas de manjericão e um fio de azeite. Simples e deliciosa, esta pizza é a perfeita representação da culinária italiana em sua forma mais pura.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        foto: mediaPath + 'piazza/' + '/2.webp',
        preco: 59.9,
        id: 18,
        nome: "Pizza Quatro Queijos",
        descricao:
          "A Pizza Quatro Queijos é uma combinação irresistível de muçarela, gorgonzola, parmesão e provolone, derretidos harmoniosamente sobre uma massa fina e crocante. Perfeita para os amantes de queijo que desejam uma experiência gastronômica rica e saborosa.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        foto: mediaPath + 'piazza/' + '/3.jpg',
        preco: 64.9,
        id: 19,
        nome: "Pizza Calabresa",
        descricao:
          "A Pizza Calabresa é uma opção saborosa e suculenta, feita com rodelas de calabresa, cebola roxa fatiada, azeitonas pretas e muçarela derretida. Assada em forno a lenha, esta pizza é a escolha perfeita para quem deseja saborear uma pizza tradicional e deliciosa.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
    ],
  },

  {
    id: 6,
    logo: mediaPath + 'saveurs_bourgogne/' + '/saveurs_bourgogne.png',
    capa: mediaPath + 'saveurs_bourgogne/' + '/capa_saveurs_bourgogne.png',
    titulo: "Saveurs de Bourgogne",
    tipo: "Françês",
    avaliacao: 4.9,
    descricao:
      "Saveurs de Bourgogne é muito mais do que um restaurante. É um pedaço de Borgonha, uma região famosa por sua rica tradição culinária e vinhos excepcionais, situado no coração de São Paulo. Nossa missão é levar você a uma jornada gastronômica autêntica, onde cada prato é uma celebração dos sabores, aromas e técnicas de cozinha da Borgonha.",
    destacado: true,
    cardapio: [
      {
        foto: mediaPath + 'jardim_terra/' + '/1.webp',
        preco: 38.9,
        id: 20,
        nome: "Hambúrguer de Grão-de-Bico",
        descricao:
          "Nosso Hambúrguer de Grão-de-Bico é feito com grão-de-bico, cenoura, cebola e especiarias, servido em um pão vegano fresco com alface, tomate e nosso delicioso molho caseiro. Acompanha batatas rústicas assadas e uma salada fresca e colorida.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        foto: mediaPath + 'jardim_terra/' + '/2.jpeg',
        preco: 42.9,
        id: 21,
        nome: "Lasanha de Berinjela",
        descricao:
          "A Lasanha de Berinjela é uma opção saborosa e reconfortante, preparada com camadas de berinjela grelhada, molho de tomate caseiro e um creme de castanha-de-caju. Assada até ficar dourada, esta lasanha vegana é a escolha perfeita para quem busca uma refeição saudável e deliciosa.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        foto: mediaPath + 'jardim_terra/' + '/3.jpg',
        preco: 35.9,
        id: 22,
        nome: "Bowl de Cogumelos e Quinoa",
        descricao:
          "O Bowl de Cogumelos e Quinoa é uma combinação nutritiva e saborosa de quinoa cozida, cogumelos salteados, espinafre, abacate e tomates-cereja. Servido com um molho de ervas frescas e limão, este prato é ideal para quem busca uma refeição leve e saudável.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
    ],
  },
];

export default items
