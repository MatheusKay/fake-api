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
        id: 1,
        foto: mediaPath + 'delicias_doces_cafe/' + '/Entrada_1.png',
        nome: "Salada de Frutas com Vinagrete de Mel e Hortelã",
        preco: 69.9,
        descricao:
          "Uma salada de frutas frescas, como morangos, abacaxi e kiwi, regada com um vinagrete de mel e hortelã para um toque de doçura e frescor.",
        categoria: 'Entrada',
        nota: 4.7,
      },
      {
        id: 2,
        foto: mediaPath + 'delicias_doces_cafe/' + '/Entrada_2.png',
        nome: "Bruschetta de Tomate e Morango",
        preco: 69.9,
        descricao:
          "Fatias de pão crocante cobertas com tomates frescos, morangos, manjericão e um toque de redução de vinagre balsâmico adocicado.",
        categoria: 'Entrada',
        nota: 4.8,
      },
      {
        id: 3,
        foto: mediaPath + 'delicias_doces_cafe/' + '/Entrada_3.png',
        nome: "Rolinhos de Camarão com Molho de Manga e Pimenta",
        preco: 69.9,
        descricao:
          "Camarões grelhados envoltos em folhas de arroz, servidos com um molho agridoce de manga e pimenta para um contraste de sabores.",
        categoria: 'Entrada',
        nota: 4.8,
      },
      {
        id: 4,
        foto: mediaPath + 'delicias_doces_cafe/' + '/Entrada_4.png',
        nome: "Carpaccio de Beterraba com Queijo de Cabra e Mel",
        preco: 69.9,
        descricao:
          "Finas fatias de beterraba crua marinadas em azeite de oliva e limão, servidas com queijo de cabra cremoso, nozes torradas e regadas com mel para um toque adocicado.",
        categoria: 'Entrada',
        nota: 4.9,
      },
      {
        id: 5,
        foto: mediaPath + 'delicias_doces_cafe/' + '/Principal_1.png',
        nome: "Massa com Molho de Caramelo e Nozes",
        preco: 69.9,
        descricao:
          "Massa fresca, como linguine, servida com um molho rico de caramelo, nozes tostadas e uma pitada de sal marinho.",
        categoria: 'Prato principal',
        nota: 4.6,
      },
      {
        id: 6,
        foto: mediaPath + 'delicias_doces_cafe/' + '/Principal_2.png',
        nome: "Costeletas de Porco com Molho de Abacaxi e Coco",
        preco: 69.9,
        descricao:
          "Costeletas de porco grelhadas, regadas com um molho tropical de abacaxi e coco, acompanhadas de arroz de coco e feijão-preto.",
        categoria: 'Prato principal',
        nota: 4.6,
      },
      {
        id: 7,
        foto: mediaPath + 'delicias_doces_cafe/' + '/Principal_3.png',
        nome: "Frango ao Curry com Abacaxi",
        preco: 69.9,
        descricao:
          "Peitos de frango grelhados em um molho de curry suave e cremoso, com pedaços de abacaxi caramelizados, servidos com arroz basmati.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        id: 8,
        foto: mediaPath + 'delicias_doces_cafe/' + '/Principal_4.png',
        nome: "Salmão Grelhado com Molho de Laranja e Gengibre",
        preco: 69.9,
        descricao:
          "Filé de salmão grelhado coberto com um molho cítrico de laranja e gengibre, acompanhado de legumes salteados.",
        categoria: 'Prato principal',
        nota: 4.9,
      },
      {
        id: 9,
        foto: mediaPath + 'delicias_doces_cafe/' + '/Sobremesa_1.png',
        nome: "Torta de Maçã com Caramelo Salgado",
        preco: 69.9,
        descricao:
          "Uma torta de maçã caseira com uma generosa camada de caramelo salgado por cima, servida com uma bola de sorvete de baunilha.",
        categoria: 'Sobremesa',
        nota: 4.7,
      },
      {
        id: 10,
        foto: mediaPath + 'delicias_doces_cafe/' + '/Sobremesa_2.png',
        nome: "Crepes de Chocolate com Morangos e Chantilly",
        preco: 69.9,
        descricao:
          "Crepes recheados com calda de chocolate, morangos frescos e uma generosa porção de chantilly.",
        categoria: 'Sobremesa',
        nota: 4.9,
      },
      {
        id: 11,
        foto: mediaPath + 'delicias_doces_cafe/' + '/Sobremesa_3.png',
        nome: "Panna Cotta de Framboesa",
        preco: 69.9,
        descricao:
          "Uma panna cotta de baunilha coberta com uma compota de framboesa doce e um toque de hortelã fresca.",
        categoria: 'Sobremesa',
        nota: 4.8,
      },
      {
        id: 12,
        foto: mediaPath + 'delicias_doces_cafe/' + '/Sobremesa_4.png',
        nome: "Tiramisu de Café e Chocolate Branco",
        preco: 69.9,
        descricao:
          "Uma versão única do clássico tiramisu, com camadas de biscoitos embebidos em café, creme de queijo mascarpone e raspas de chocolate branco.",
        categoria: 'Sobremesa',
        nota: 4.9,
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
        id: 1,
        foto: mediaPath + 'sabor_tempero_bistro/' + '/Entrada_1.png',
        nome: "Sashimi de Salmão e Atum",
        preco: 69.9,
        descricao:
          "Fatias finas de salmão fresco e atum, servidas com molho de soja, wasabi e gengibre em conserva.",
        categoria: 'Entrada',
        nota: 4.9,
      },
      {
        id: 2,
        foto: mediaPath + 'sabor_tempero_bistro/' + '/Entrada_2.png',
        nome: "Edamame Grelhado com Flor de Sal",
        preco: 69.9,
        descricao:
          "Grãos de edamame grelhados na chapa, polvilhados com flor de sal e servidos com limão.",
        categoria: 'Entrada',
        nota: 4.5,
      },
      {
        id: 3,
        foto: mediaPath + 'sabor_tempero_bistro/' + '/Entrada_3.png',
        nome: "Sunomono de Pepino",
        preco: 69.9,
        descricao:
          "Fatias finas de pepino japonês marinadas em vinagre de arroz, açúcar e gengibre, com uma pitada de sementes de gergelim.",
        categoria: 'Entrada',
        nota: 4.6,
      },
      {
        id: 4,
        foto: mediaPath + 'sabor_tempero_bistro/' + '/Entrada_4.png',
        nome: "Gyoza de Camarão e Legumes",
        preco: 69.9,
        descricao:
          "Bolinhos japoneses recheados com camarão, legumes e especiarias, cozidos no vapor e depois grelhados para um toque crocante, servidos com molho de soja.",
        categoria: 'Entrada',
        nota: 4.9,
      },
      {
        id: 5,
        foto: mediaPath + 'sabor_tempero_bistro/' + '/Principal_1.png',
        nome: "Sushi e Sashimi Omakase",
        preco: 69.9,
        descricao:
          "Um prato principal que destaca a arte do sushi e sashimi, onde o chef escolhe e prepara uma seleção variada de peixes frescos e frutos do mar, servidos com arroz temperado e molhos complementares.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        id: 6,
        foto: mediaPath + 'sabor_tempero_bistro/' + '/Principal_2.png',
        nome: "Tempurá de Camarão e Legumes",
        preco: 69.9,
        descricao:
          "Camarões e vegetais frescos empanados em massa leve de tempurá e fritos até ficarem crocantes, servidos com molho de mergulho tentsuyu.",
        categoria: 'Prato principal',
        nota: 4.6,
      },
      {
        id: 7,
        foto: mediaPath + 'sabor_tempero_bistro/' + '/Principal_3.png',
        nome: "Yakitori Misto",
        preco: 69.9,
        descricao:
          "Espetinhos de frango grelhado com molho teriyaki, vegetais, cogumelos shiitake e cebolinhas verdes, acompanhados de arroz de sushi.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        id: 8,
        foto: mediaPath + 'sabor_tempero_bistro/' + '/Principal_4.png',
        nome: "Yakizakana com Molho de Missô",
        preco: 69.9,
        descricao:
          "Peixe grelhado (como salmão ou robalo) com uma crosta de missô, servido com legumes grelhados e arroz de jasmim.",
        categoria: 'Prato principal',
        nota: 4.9,
      },
      {
        id: 9,
        foto: mediaPath + 'sabor_tempero_bistro/' + '/Sobremesa_1.png',
        nome: "Mochi de Chá Verde",
        preco: 69.9,
        descricao:
          "Bolinhos de mochi recheados com sorvete de chá verde e servidos com uma pitada de matcha em pó.",
        categoria: 'Sobremesa',
        nota: 4.9,
      },
      {
        id: 10,
        foto: mediaPath + 'sabor_tempero_bistro/' + '/Sobremesa_2.png',
        nome: "Pudim de Tofu com Caramelo",
        preco: 69.9,
        descricao:
          "Um pudim de tofu aveludado, regado com calda de caramelo e decorado com frutas vermelhas.",
        categoria: 'Sobremesa',
        nota: 4.8,
      },
      {
        id: 11,
        foto: mediaPath + 'sabor_tempero_bistro/' + '/Sobremesa_3.png',
        nome: "Dorayaki de Pasta de Feijão Vermelho",
        preco: 69.9,
        descricao:
          "Bolos macios recheados com pasta doce de feijão vermelho, uma sobremesa tradicional japonesa.",
        categoria: 'Sobremesa',
        nota: 4.8,
      },
      {
        id: 12,
        foto: mediaPath + 'sabor_tempero_bistro/' + '/Sobremesa_4.png',
        nome: "Tempura de Sorvete",
        preco: 69.9,
        descricao:
          "Uma bola de sorvete coberta com uma fina camada de massa de tempurá crocante e frita, servida quente com calda de chocolate.",
        categoria: 'Sobremesa',
        nota: 4.9,
      },
    ],
  },

  {
    id: 3,
    logo: mediaPath + 'ristorante_la_trattoria/' + '/ristorante_trattoria.png',
    capa: mediaPath + 'ristorante_la_trattoria/' + '/capa_trattoria.png',
    titulo: "Ristorante La Trattoria",
    tipo: "Italiano",
    avaliacao: 4.8,
    descricao:
      "O Ristorante La Trattoria é um refúgio gastronômico que oferece uma rica variedade de pratos inspirados em diferentes países. Apesar de não ser muito elegante em termos de decoração, este restaurante é um verdadeiro tesouro para os amantes da comida internacional.",
    destacado: false,
    cardapio: [
      {
        id: 1,
        foto: mediaPath + 'ristorante_la_trattoria/' + '/Entrada_1.png',
        nome: "Carpaccio de Carne",
        preco: 69.9,
        descricao:
          "Finas fatias de carne (como carne bovina ou carne de vitelo) servidas com rúcula fresca, lascas de queijo parmesão, azeite de oliva extra virgem e suco de limão.",
        categoria: 'Entrada',
        nota: 4.9,
      },
      {
        id: 2,
        foto: mediaPath + 'ristorante_la_trattoria/' + '/Entrada_2.png',
        nome: "Bruschetta de Tomate e Mozzarella",
        preco: 69.9,
        descricao:
          "Fatias de pão rústico grelhado, cobertas com tomate fresco, mozzarella de búfala, manjericão e um fio de azeite de oliva.",
        categoria: 'Entrada',
        nota: 4.9,
      },
      {
        id: 3,
        foto: mediaPath + 'ristorante_la_trattoria/' + '/Entrada_3.png',
        nome: "Polenta com Funghi Porcini",
        preco: 69.9,
        descricao:
          " Polenta cremosa coberta com um rico molho de cogumelos porcini, finalizada com queijo parmesão ralado.",
        categoria: 'Entrada',
        nota: 4.7,
      },
      {
        id: 4,
        foto: mediaPath + 'ristorante_la_trattoria/' + '/Entrada_4.png',
        nome: "Salada Caprese de Burrata",
        preco: 69.9,
        descricao:
          "Uma variação da clássica salada Caprese, com burrata fresca, tomates maduros, manjericão, azeite de oliva e vinagre balsâmico reduzido.",
        categoria: 'Entrada',
        nota: 4.8,
      },
      {
        id: 5,
        foto: mediaPath + 'ristorante_la_trattoria/' + '/Principal_1.png',
        nome: "Fettuccine Alfredo com Camarões",
        preco: 69.9,
        descricao:
          "Fettuccine fresco em um molho cremoso de queijo parmesão, servido com camarões grandes grelhados.",
        categoria: 'Prato principal',
        nota: 4.6,
      },
      {
        id: 6,
        foto: mediaPath + 'ristorante_la_trattoria/' + '/Principal_2.png',
        nome: "Osso Buco com Risoto Milanês",
        preco: 69.9,
        descricao:
          "Um prato tradicional de Osso Buco, carne de vitelo cozida lentamente em molho de tomate, servido com risoto Milanês (à base de açafrão).",
        categoria: 'Prato principal',
        nota: 4.9,
      },
      {
        id: 7,
        foto: mediaPath + 'ristorante_la_trattoria/' + '/Principal_3.png',
        nome: "Ravióli de Abóbora com Manteiga e Sálvia",
        preco: 69.9,
        descricao:
          "Ravióli caseiro recheado com purê de abóbora, regado com manteiga derretida e folhas de sálvia fritas.",
        categoria: 'Prato principal',
        nota: 4.5,
      },
      {
        id: 8,
        foto: mediaPath + 'ristorante_la_trattoria/' + '/Principal_4.png',
        nome: "Saltimbocca alla Romana",
        preco: 69.9,
        descricao:
          "Escalopes de vitela cobertos com presunto de Parma e folhas de sálvia, cozidos em vinho branco e servidos com um molho de redução de vinho.",
        categoria: 'Prato principal',
        nota: 4.9,
      },
      {
        id: 9,
        foto: mediaPath + 'ristorante_la_trattoria/' + '/Sobremesa_1.png',
        nome: "Tiramisu",
        preco: 69.9,
        descricao:
          "O clássico tiramisu, com camadas de biscoitos de champanhe embebidos em café e mascarpone, polvilhado com cacau em pó.",
        categoria: 'Sobremesa',
        nota: 4.7,
      },
      {
        id: 10,
        foto: mediaPath + 'ristorante_la_trattoria/' + '/Sobremesa_2.png',
        nome: "Panna Cotta com Frutas Vermelhas",
        preco: 69.9,
        descricao:
          "Uma panna cotta de baunilha, servida com um coulis de frutas vermelhas e frutas frescas.",
        categoria: 'Sobremesa',
        nota: 4.8,
      },
      {
        id: 11,
        foto: mediaPath + 'ristorante_la_trattoria/' + '/Sobremesa_3.png',
        nome: "Cannoli Siciliani",
        preco: 69.9,
        descricao:
          "Tubos crocantes recheados com um creme doce de ricota, chocolate e frutas cristalizadas.",
        categoria: 'Sobremesa',
        nota: 4.7,
      },
      {
        id: 12,
        foto: mediaPath + 'ristorante_la_trattoria/' + '/Sobremesa_4.png',
        nome: "Torta de Limão com Merengue Italiano",
        preco: 69.9,
        descricao:
          "Uma torta de limão com uma camada generosa de merengue italiano dourado por cima.",
        categoria: 'Sobremesa',
        nota: 4.9,
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
        id: 1,
        foto: mediaPath + 'fogo_brasa_churrascaria/' + '/Entrada_1.png',
        nome: "Pão de Alho com Queijo Coalho",
        preco: 69.9,
        descricao:
          "Fatias de pão de alho grelhadas e cobertas com queijo coalho derretido, servidas com molho de pimenta.",
        categoria: 'Entrada',
        nota: 4.9,
      },
      {
        id: 2,
        foto: mediaPath + 'fogo_brasa_churrascaria/' + '/Entrada_2.png',
        nome: "Salada de Feijão-Fradinho com Vinagrete",
        preco: 69.9,
        descricao:
          "Feijão-fradinho cozido, temperado com vinagrete, cebola roxa e salsinha, servido como uma entrada refrescante.",
        categoria: 'Entrada',
        nota: 4.9,
      },
      {
        id: 3,
        foto: mediaPath + 'fogo_brasa_churrascaria/' + '/Entrada_3.png',
        nome: "Mandioca Frita",
        preco: 69.9,
        descricao:
          "Palitos de mandioca fritos até ficarem dourados e crocantes, acompanhados de um molho de maionese com ervas.",
        categoria: 'Entrada',
        nota: 4.8,
      },
      {
        id: 4,
        foto: mediaPath + 'fogo_brasa_churrascaria/' + '/Entrada_4.png',
        nome: "Costelinhas de Porco com Molho Barbecue",
        preco: 69.9,
        descricao:
          "Costelinhas de porco grelhadas e revestidas com molho barbecue caseiro, servidas como um aperitivo suculento.",
        categoria: 'Entrada',
        nota: 4.8,
      },
      {
        id: 5,
        foto: mediaPath + 'fogo_brasa_churrascaria/' + '/Principal_1.png',
        nome: "Rodízio de Carnes",
        preco: 69.9,
        descricao:
          " A estrela da churrascaria, um rodízio de carnes grelhadas na brasa, incluindo picanha, alcatra, fraldinha, costela e linguiças, servido à vontade na sua mesa.",
        categoria: 'Prato principal',
        nota: 4.9,
      },
      {
        id: 6,
        foto: mediaPath + 'fogo_brasa_churrascaria/' + '/Principal_2.png',
        nome: "Frango à Passarinho",
        preco: 69.9,
        descricao:
          "Pedaços de frango temperados e fritos até ficarem crocantes, servidos com limão.",
        categoria: 'Prato principal',
        nota: 4.7,
      },
      {
        id: 7,
        foto: mediaPath + 'fogo_brasa_churrascaria/' + '/Principal_3.png',
        nome: "Pernil de Cordeiro Grelhado",
        preco: 69.9,
        descricao:
          "Pernil de cordeiro marinado e grelhado, servido com molho de hortelã.",
        categoria: 'Prato principal',
        nota: 4.8,
      },
      {
        id: 8,
        foto: mediaPath + 'fogo_brasa_churrascaria/' + '/Principal_4.png',
        nome: "Peixe Grelhado com Molho de Manteiga de Ervas",
        preco: 69.9,
        descricao:
          "Filé de peixe grelhado, regado com molho de manteiga de ervas e limão.",
        categoria: 'Prato principal',
        nota: 4.9,
      },
      {
        id: 9,
        foto: mediaPath + 'fogo_brasa_churrascaria/' + '/Sobremesa_1.png',
        nome: "Pudim de Leite Condensado",
        preco: 69.9,
        descricao:
          "Uma sobremesa clássica brasileira, um pudim de leite condensado com uma calda de caramelo.",
        categoria: 'Sobremesa',
        nota: 4.8,
      },
      {
        id: 10,
        foto: mediaPath + 'fogo_brasa_churrascaria/' + '/Sobremesa_2.png',
        nome: "Abacaxi Grelhado com Canela e Sorvete de Creme",
        preco: 69.9,
        descricao:
          "Rodelas de abacaxi grelhadas com uma pitada de canela, servidas com uma bola de sorvete de creme.",
        categoria: 'Sobremesa',
        nota: 4.8,
      },
      {
        id: 11,
        foto: mediaPath + 'fogo_brasa_churrascaria/' + '/Sobremesa_3.png',
        nome: "Mousse de Maracujá",
        preco: 69.9,
        descricao:
          "Uma mousse leve e refrescante de maracujá, decorada com sementes da fruta.",
        categoria: 'Sobremesa',
        nota: 4.4,
      },
      {
        id: 12,
        foto: mediaPath + 'fogo_brasa_churrascaria/' + '/Sobremesa_4.png',
        nome: "Banana Flambada com Sorvete de Baunilha",
        preco: 69.9,
        descricao:
          "Bananas caramelizadas na frigideira com açúcar e rum, servidas com uma bola de sorvete de baunilha.",
        categoria: 'Sobremesa',
        nota: 4.9,
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
        id: 1,
        foto: mediaPath + 'pizza_vegan/' + '/Entrada_1.png',
        nome: "Bruschettas de Tomate e Manjericão",
        preco: 69.9,
        descricao:
          "Fatias de pão italiano grelhadas, cobertas com tomate fresco, manjericão, alho, azeite de oliva e vinagre balsâmico.",
        categoria: 'Entrada',
        nota: 4.7,
      },
      {
        id: 2,
        foto: mediaPath + 'pizza_vegan/' + '/Entrada_2.png',
        nome: "Rolinhos de Abobrinha com Creme de Tofu",
        preco: 69.9,
        descricao:
          "Finas fatias de abobrinha grelhadas recheadas com creme de tofu, ervas e alho, assadas até dourarem.",
        categoria: 'Entrada',
        nota: 4.4,
      },
      {
        id: 3,
        foto: mediaPath + 'pizza_vegan/' + '/Entrada_3.png',
        nome: "Caponata de Berinjela",
        preco: 69.9,
        descricao:
          "Um prato de berinjela cozida com pimentões, cebolas, azeitonas e alcaparras em um molho de tomate, servido com pão crocante.",
        categoria: 'Entrada',
        nota: 4.5,
      },
      {
        id: 4,
        foto: mediaPath + 'pizza_vegan/' + '/Entrada_4.png',
        nome: "Batatas Bravas Veganas",
        preco: 69.9,
        descricao:
          "Batatas cortadas em cubos e assadas, servidas com molho picante de tomate e maionese vegana.",
        categoria: 'Entrada',
        nota: 4.8,
      },
      {
        id: 5,
        foto: mediaPath + 'pizza_vegan/' + '/Principal_1.png',
        nome: "Pizza Vegana de Margherita",
        preco: 69.9,
        descricao:
          "Uma pizza com molho de tomate, queijo vegano, tomates fatiados e manjericão fresco.",
        categoria: 'Prato principal',
        nota: 4.9,
      },
      {
        id: 6,
        foto: mediaPath + 'pizza_vegan/' + '/Principal_2.png',
        nome: "Lasanha de Legumes e Molho Bechamel Veganos",
        preco: 69.9,
        descricao:
          "Camadas de massa de lasanha intercaladas com legumes grelhados, molho bechamel vegano e molho de tomate.",
        categoria: 'Prato principal',
        nota: 4.3,
      },
      {
        id: 7,
        foto: mediaPath + 'pizza_vegan/' + '/Principal_3.png',
        nome: "Risoto de Cogumelos",
        preco: 69.9,
        descricao:
          "Risoto cremoso feito com cogumelos, caldo de vegetais, arroz arbóreo e vinho branco.",
        categoria: 'Prato principal',
        nota: 4.7,
      },
      {
        id: 8,
        foto: mediaPath + 'pizza_vegan/' + '/Principal_4.png',
        nome: "Massa ao Pesto de Manjericão e Pinhão",
        preco: 69.9,
        descricao:
          "Massa (como penne) com um pesto de manjericão e pinhões, regada com azeite de oliva e levedura nutricional.",
        categoria: 'Prato principal',
        nota: 4.9,
      },
      {
        id: 9,
        foto: mediaPath + 'pizza_vegan/' + '/Sobremesa_1.png',
        nome: "Brownie Vegano de Chocolate",
        preco: 69.9,
        descricao:
          "Um brownie rico e decadente feito com cacau, açúcar mascavo e substitutos de ovos, servido com uma bola de sorvete vegano.",
        categoria: 'Sobremesa',
        nota: 4.7,
      },
      {
        id: 10,
        foto: mediaPath + 'pizza_vegan/' + '/Sobremesa_2.png',
        nome: "Sorbet de Frutas Tropicais",
        preco: 69.9,
        descricao:
          "Uma mistura refrescante de sorbet de frutas tropicais, como manga, abacaxi e maracujá.",
        categoria: 'Sobremesa',
        nota: 4.9,
      },
      {
        id: 11,
        foto: mediaPath + 'pizza_vegan/' + '/Sobremesa_3.png',
        nome: "Torta de Limão Vegana",
        preco: 69.9,
        descricao:
          "Uma torta de limão feita com um creme de limão vegano, coberta com chantilly de coco.",
        categoria: 'Sobremesa',
        nota: 4.8,
      },
      {
        id: 12,
        foto: mediaPath + 'pizza_vegan/' + '/Sobremesa_4.png',
        nome: "Panna Cotta de Coco com Calda de Frutas Vermelhas",
        preco: 69.9,
        descricao:
          "Panna cotta vegana de coco, coberta com uma calda de frutas vermelhas e hortelã.",
        categoria: 'Sobremesa',
        nota: 4.9,
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
        id: 1,
        foto: mediaPath + 'saveurs_bourgogne/' + '/Entrada_1.png',
        nome: "Sopa de Cebola Gratinada",
        preco: 69.9,
        descricao:
          "Uma clássica sopa de cebola francesa, com cebolas caramelizadas, caldo de carne vegetal, croutons e queijo gruyère gratinado, servida com uma taça de vinho branco seco.",
        categoria: 'Entrada',
        nota: 4.7,
      },
      {
        id: 2,
        foto: mediaPath + 'saveurs_bourgogne/' + '/Entrada_2.png',
        nome: "Tartare de Salmão com Caviar",
        preco: 69.9,
        descricao:
          "Salmão cru picado finamente, temperado com cebola roxa, alcaparras, azeite de oliva e limão, servido com uma colher de caviar e torradas.",
        categoria: 'Entrada',
        nota: 4.8,
      },
      {
        id: 3,
        foto: mediaPath + 'saveurs_bourgogne/' + '/Entrada_3.png',
        nome: "Foie Gras com Geléia de Vinho Tinto",
        preco: 69.9,
        descricao:
          "Foie gras grelhado, acompanhado de uma geléia rica de vinho tinto, servido com fatias de pão brioche tostado.",
        categoria: 'Entrada',
        nota: 4.7,
      },
      {
        id: 4,
        foto: mediaPath + 'saveurs_bourgogne/' + '/Entrada_4.png',
        nome: "Salada de Endívias e Peras com Molho de Vinho Tinto",
        preco: 69.9,
        descricao:
          "Endívias crocantes, peras fatiadas, nozes e queijo roquefort, regados com um molho à base de vinho tinto e xerez.",
        categoria: 'Entrada',
        nota: 4.8,
      },
      {
        id: 5,
        foto: mediaPath + 'saveurs_bourgogne/' + '/Principal_1.png',
        nome: "Coq au Vin",
        preco: 69.9,
        descricao:
          "Peito de frango cozido lentamente em vinho tinto com cogumelos, cebolas pérola e bacon, servido com purê de batata.",
        categoria: 'Prato principal',
        nota: 4.9,
      },
      {
        id: 6,
        foto: mediaPath + 'saveurs_bourgogne/' + '/Principal_2.png',
        nome: "Boeuf Bourguignon",
        preco: 69.9,
        descricao:
          "Um clássico da culinária francesa, carne bovina cozida lentamente em vinho tinto com cebolas, cenouras e cogumelos, servida com batatas douradas.",
        categoria: 'Prato principal',
        nota: 4.7,
      },
      {
        id: 7,
        foto: mediaPath + 'saveurs_bourgogne/' + '/Principal_3.png',
        nome: "Truta com Amêndoas e Vinho Branco",
        preco: 69.9,
        descricao:
          "Truta grelhada com amêndoas tostadas e um molho de vinho branco com ervas, acompanhada de aspargos cozidos no vapor.",
        categoria: 'Prato principal',
        nota: 4.7,
      },
      {
        id: 8,
        foto: mediaPath + 'saveurs_bourgogne/' + '/Principal_4.png',
        nome: "Ratatouille com Tofu Assado",
        preco: 69.9,
        descricao:
          "Um prato vegano com legumes frescos, como berinjela, abobrinha, pimentões e tomates, cozidos lentamente em molho de vinho branco, servido com tofu assado.",
        categoria: 'Prato principal',
        nota: 4.9,
      },
      {
        id: 9,
        foto: mediaPath + 'saveurs_bourgogne/' + '/Sobremesa_1.png',
        nome: "Crème Brûlée de Vinho Tinto",
        preco: 69.9,
        descricao:
          "Uma variação do clássico crème brûlée, com um toque de vinho tinto, queimado até ficar dourado e crocante.",
        categoria: 'Sobremesa',
        nota: 4.7,
      },
      {
        id: 10,
        foto: mediaPath + 'saveurs_bourgogne/' + '/Sobremesa_2.png',
        nome: "Tarte Tatin de Maçã com Sorvete de Vinho",
        preco: 69.9,
        descricao:
          "ma torta de maçã caramelizada, servida com uma bola de sorvete de vinho tinto.",
        categoria: 'Sobremesa',
        nota: 4.8,
      },
      {
        id: 11,
        foto: mediaPath + 'saveurs_bourgogne/' + '/Sobremesa_3.png',
        nome: "Mousse de Chocolate com Calda de Vinho do Porto",
        preco: 69.9,
        descricao:
          "Uma mousse de chocolate rica e aveludada, coberta com uma calda de vinho do Porto.",
        categoria: 'Sobremesa',
        nota: 4.8,
      },
      {
        id: 12,
        foto: mediaPath + 'saveurs_bourgogne/' + '/Sobremesa_4.png',
        nome: "Queijo Roquefort com Figos em Calda de Vinho Tinto",
        preco: 69.9,
        descricao:
          "Queijo roquefort emparelhado com figos em calda de vinho tinto e nozes torradas.",
        categoria: 'Sobremesa',
        nota: 4.7,
      },
    ],
  },
];

export default items
