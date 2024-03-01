export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  rating: number;
  image: string;
  likes: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 15 Pro Max 256Gb серый',
    price: 631045,
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=preview-large',
    likes: 0
  },
  {
    id: 2,
    name: 'Apple 20W USB-C Power Adapter белый',
    price: 2247,
    description: 'Адаптер питания Apple USB‑C мощностью 20 Вт дает возможность быстро и эффективно заряжать гаджеты. Проверяется на основном сайте через QR на оригинальность. Этот адаптер совместим с любыми устройствами Apple, оснащенными портом USB-C: смартфон, планшет или смарт-часы.',
    link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=preview-large',
    likes: 0

  },
  {
    id: 3,
    name: 'Samsung Galaxy A24 6 ГБ/128 ГБ черный',
    price:85363,
    description: 'На 6,5-дюймовом FHD+ Super AMOLED дисплее оживают все цвета и детали. Наслаждайтесь кристально четкой видимостью при просмотре сериалов и потоковых программ благодаря яркости 1000 нит. Кроме того, благодаря улучшенной защите от синего света вы сможете комфортно смотреть контент днем и ночью.',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=preview-large',
    likes: 0

  },
  {
    id: 4,
    name: 'Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
    price: 66036,
    description: 'Он представлен в конфигурациях с 8 ГБ оперативной памяти, объём накопителя составляет 256 ГБ (можно расширить картой microSD). За автономность отвечает аккумулятор на 5000 мАч с поддержкой 18-ваттной быстрой зарядки. Дополняют список характеристик сканер отпечатков пальцев в кнопке включения и защита корпуса IP53.',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=preview-large',
    likes: 0

  },
  {
    id: 5,
    name: 'Apple iPhone 13 128Gb белый',
    price: 297183,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=preview-large',
    likes: 0
 
  },
  {
    id: 6,
    name: 'Электрочайник BEREKE BR-810 серый',
    price: 1900,
    description: 'BEREKE BR-810 - это электрический чайник, который предоставляет надежное и удобное решение для приготовления горячих напитков.',
    link: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=preview-large',
    likes: 0
 
  },
  {
    id: 7,
    name: 'Deerma DX700 белый',
    price: 17354,
    description: 'Пылесос Deerma DX700 – стильный, компактный и удобный пылесос, конструкция которого предусматривает использование в качестве портативного ручного или помощника для эффективной уборки напольных покрытий. Технология циклонной фильтрации благодаря высокой силе всасывания гарантирует быстрый сбор пыли и мусора.',
    link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=preview-large',
    likes: 0

  },
  {
    id: 8,
    name: 'SM-7700 серебристый',
    price: 9997,
    description: 'Блендер 2 в 1. Блендер + измельчитель (кофемолка), 3 скорости + импульс, стеклянная колба, серебристый цвет.',
    link: 'https://kaspi.kz/shop/p/sm-7700-serebristyi-110902818/?c=750000000',
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h78/he6/81315957440542.png?format=preview-large',
    likes: 0

  },
  {
    id: 9,
    name: 'LG F2J3NS0W белый',
    price: 161334,
    description: 'Глубина стиральной машины LG F2J3NS0W всего 44 см, благодаря чему она поместится даже в небольшую ванную комнату. Барабан вмещает 6 кг сухого белья, чего вполне достаточно для семьи из трёх-четырёх человек. Эта модель снабжена инверторным двигателем с прямым приводом, он отличается более длительным сроком службы, чем обычный, так как в его конструкции нет щёток и ремня.',
    link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=preview-large',
    likes: 0

  },
  {
    id: 10,
    name: 'Увлажнитель воздуха Maxmoll H2O Humid-300 белый',
    price: 2163,
    description: 'Ультразвуковой настольный увлажнитель воздуха с заправочной емкостью для воды в объеме 300 мл. Корпус прибора выполнен из ABS пластика черного цвета. Корпус прибора и внутренняя емкость легко моются и дезинфицируются с помощью бытовых моющих средств. Увлажнитель питается от порта USB, номинальный потребляемый ток 250 – 350 мА. Прибор оборудован таймером на 4 или 6 часов работы.',
    link: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-maxmoll-h2o-humid-300-belyi-102027263/?c=750000000',
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd0/hc4/64156819783710.jpg?format=preview-large',
    likes: 0

  },
  {
    id: 11,
    name: 'Heimish All Clean Balm бальзам 120 мл',
    price: 4301,
    description: 'All Clean Balm - это просто находка для любителей декоративной косметики, так как смыть толстые слои косметики всегда не легко. Бальзам мягко и быстро растворяет даже самые сильные водостойкие средства. Имеет легкую, нежную щербетную текстуру. Не нужно смешивать с водой при нанесении! ',
    link: 'https://kaspi.kz/shop/p/heimish-all-clean-balm-bal-zam-120-ml-100341040/?c=750000000',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h8b/h07/84675805511710.jpg?format=preview-large',
    likes: 0

  },
  {
    id: 12,
    name: 'Round Lab 1025 Dokdo Cleansing пенка 150 мл',
    price: 4209,
    description: 'Мягкая пенка для умывания с морской водой Round Lab1025 Dokdo Cleanser подходит для деликатного очищения сухой и чувствительной кожи. Нежно удаляет все загрязнения, не провоцирует появления сухости и стянутости, сохраняет кожу увлажнённой даже после умывания.',
    link: 'https://kaspi.kz/shop/p/round-lab-1025-dokdo-cleansing-penka-150-ml-105850453/?c=750000000',
    rating: 4.8,
    image:'https://resources.cdn-kaspi.kz/img/m/p/h32/h25/64365023625246.jpg?format=preview-large',
    likes: 0

  },
  {
    id: 13,
    name: 'SKIN&LAB Vitamin C Brightening сыворотка 30 мл',
    price: 5988,
    description: 'Мощная, легкая осветляющая сыворотка с 15 комплексами витаминов, концентрированная с витамином С, помогает осветлить кожу и выровнять ее тон. Витаминные пузырьковые капсулы с антиоксидантами помогают сделать кожу здоровой, молодой и сияющей.',
    link: 'https://kaspi.kz/shop/p/skin-lab-vitamin-c-brightening-syvorotka-30-ml-104829563/?c=750000000',
    rating:5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/haa/h15/64894199169054.jpg?format=preview-large',
    likes: 0

  },
  {
    id: 14,
    name: 'Anua тонер Heartleaf 77% Soothing Toner 250 мл',
    price:6830,
    description:'Средство помогает снять воспаления, раздражения, а также устранить и предотвратить появления акне. Средство имеет пониженный индекс 5,5~6 pH, что помогает поддерживать здоровый кислотно-щелочного баланс и укрепляет естественный защитный барьер кожи.',
    link: 'https://kaspi.kz/shop/p/anua-toner-heartleaf-77-soothing-toner-250-ml-113961265/?c=750000000',
    rating:5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h86/85246770348062.jpg?format=preview-large',
    likes: 0

  },
  {
    id: 15,
    name: 'Beauty of Joseon крем Relief Sun Rice Probiotics SPF50 для лица',
    price: 4600,
    description:'Солнцезащитный крем с пробиотиками Beauty Of Joseon Relief Sun : Rice + Probiotics SPF50+ PA++++ обеспечивает надёжную защиту от пагубных воздействий солнечных лучей, а также способствует успокаивающему и осветляющему действию, поможет восстановить микробиом и укрепить защитный слой кожи.',
    link: 'https://kaspi.kz/shop/p/beauty-of-joseon-krem-relief-sun-rice-probiotics-spf50-dlja-litsa-50-ml-105587876/?c=750000000',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h6f/64534636003358.jpg?format=preview-large',
    likes: 0

  },
  {
    id: 16,
    name: 'Мэнсон М.: Тонкое искусство пофигизма. Парадоксальный',
    price:1850,
    description:'Современное общество пропагандирует культ успеха: будь умнее, богаче, продуктивнее — будь лучше всех. Соцсети изобилуют историями на тему, как какой-то малец придумал приложение и заработал кучу денег, статьями в духе «Тысяча и один способ быть счастливым», а фото во френдленте создают впечатление, что окружающие живут лучше и интереснее, чем мы. Однако наша зацикленность на позитиве и успехе лишь напоминает о том, чего мы не достигли, о мечтах, которые не сбылись. Как же стать по-настоящему счастливым? Популярный блогер Марк Мэнсон предлагает свой, оригинальный подход к этому вопросу. Его жизненная философия проста — необходимо научиться искусству пофигизма. Определив то, до чего вам действительно есть дело, нужно уметь наплевать на все второстепенное, забить на трудности, послать к черту чужое мнение и быть готовым взглянуть в лицо неудачам и показать им средний палец. В своей остроумной книге, мгновенно ставшей бестселлером № 1 в Amazon, через истории жизненных неурядиц, провалов и лаж (как своих, так и известных людей) автор рассказывает, как овладеть этим тонким искусством пофигизма, зачем нужно быть менее уверенным в себе и что принцип «Делайте хоть что-нибудь» — отличная мотивация. Эта книга поможет вам жить легко вопреки всем трудностям, меньше волноваться и получать удовольствие от жизни',
    link: 'https://kaspi.kz/shop/p/menson-m-tonkoe-iskusstvo-pofigizma-paradoksal-nyi-sposob-zhit-schastlivo-26016594/?c=750000000',
    rating:5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7f/h3a/63817944662046.jpg?format=preview-large',
    likes: 0

  },
  {
    id: 17,
    name: 'Шталь С.: Ребенок в тебе должен обрести дом',
    price: 2490,
    description: 'Детские травмы и обиды не проходят бесследно. Они проявляются во взрослой жизни и часто – самым неожиданным образом: не складываются отношения, рушится карьера, возникают болезни... Проблемы ставят нас в тупик, и мы даже не подозреваем, что все ответы и решения – в нас самих. Известный немецкий психотерапевт и автор бестселлеров Стефани Шталь утверждает: если вы подружитесь со своим "внутренним ребенком", подарите ему заботу и поддержку, которой так не хватало в детстве, на место боли и бед придут спокойствие, гармония и легкость. Эффективные упражнения и рекомендации, изложенные в книге, помогут вашему "внутреннему ребенку" (а значит, и вам!) стать, наконец, счастливым.',
    link: 'https://kaspi.kz/shop/p/shtal-s-rebenok-v-tebe-dolzhen-obresti-dom-100044045/?c=750000000',
    rating:5,
    image:'https://resources.cdn-kaspi.kz/img/m/p/h9b/h5f/63835958837278.jpg?format=preview-large',
    likes: 0

  },
  {
    id: 18,
    name: 'Спаркс Н.: Дневник памяти',
    price:1071,
    description: 'Это - не "любовный роман", а роман о любви. О любви обычных мужчины и женщины - таких, как мы… Почему же эта книга стала абсолютным бестселлером во всем мире? Почему она трогает душу читателей самого разного возраста и интеллектуального уровня? Как Николасу Спарксу удалось повторить сенсационный успех "Истории любви" и "Неспящих в Сиэтле"? Почему фильм, снятый по роману "Дневник памяти", имел огромный успех во всем мире? Объяснить это невозможно.Прочитайте "Дневник памяти" - и поймете сами!',
    link:'https://kaspi.kz/shop/p/sparks-n-dnevnik-pamjati-100259727/?c=750000000',
    rating:5,
    image:'https://resources.cdn-kaspi.kz/img/m/p/h1f/he7/63886250180638.jpg?format=preview-large',
    likes: 0

  },
  {
    id: 19,
    name:'Кинг Л.: Как разговаривать с кем угодно, когда угодно и где угодно',
    price:1120,
    description:'Ларри Кинг — один из известнейших в США людей — много лет вел популярное ток-шоу телекомпании CNN, быть его гостем считали за честь виднейшие деятели политики, бизнеса, спорта и искусства. В книге «Как разговаривать с кем угодно, когда угодно и где угодно» мастер общения Ларри Кинг делится с читателями своими секретами. Рекомендуем!',
    link:'https://kaspi.kz/shop/p/king-l-kak-razgovarivat-s-kem-ugodno-kogda-ugodno-i-gde-ugodno-26001063/?c=750000000',
    rating:5,
    image:'https://resources.cdn-kaspi.kz/img/m/p/h57/h59/63813497290782.jpg?format=preview-large',
    likes: 0

  },
  {
    id: 20,
    name: 'Примаченко О.: К себе нежно',
    price:3141,
    description: '«К себе нежно» – это новый, очень честный взгляд на любовь к себе. Это книга-медитация, которая призывает к внутреннему разговору и помогает услышать собственный голос среди множества других. Автор книги Ольга Примаченко – журналист, экс-главный редактор LADY.TUT.BY и автор блога Gnezdo.by – говорит с читателем о важном: о принятии своих чувств, желаний и тела, о расставлении приоритетов и границ, о создании питательного пространства вокруг себя, а также об экологичном взаимодействии с миром и людьми. В конце книги читателя ждет 31-дневная практика нежности к себе.',
    link:'https://kaspi.kz/shop/p/primachenko-o-k-sebe-nezhno-101855237/?c=750000000',
    rating:5,
    image:'https://resources.cdn-kaspi.kz/img/m/p/h7e/h7f/64172599803934.jpg?format=preview-large',
    likes: 0

  }
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/