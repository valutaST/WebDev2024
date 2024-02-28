export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 15 Pro Max 256Gb серый',
    price: 631045,
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=preview-large'
  },
  {
    id: 2,
    name: 'Apple 20W USB-C Power Adapter белый',
    price: 2247,
    description: 'Адаптер питания Apple USB‑C мощностью 20 Вт дает возможность быстро и эффективно заряжать гаджеты. Проверяется на основном сайте через QR на оригинальность. Этот адаптер совместим с любыми устройствами Apple, оснащенными портом USB-C: смартфон, планшет или смарт-часы.',
    link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=preview-large'
  },
  {
    id: 3,
    name: 'Samsung Galaxy A24 6 ГБ/128 ГБ черный',
    price:85363,
    description: 'На 6,5-дюймовом FHD+ Super AMOLED дисплее оживают все цвета и детали. Наслаждайтесь кристально четкой видимостью при просмотре сериалов и потоковых программ благодаря яркости 1000 нит. Кроме того, благодаря улучшенной защите от синего света вы сможете комфортно смотреть контент днем и ночью.',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=preview-large'
  },
  {
    id: 4,
    name: 'Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
    price: 66036,
    description: 'Он представлен в конфигурациях с 8 ГБ оперативной памяти, объём накопителя составляет 256 ГБ (можно расширить картой microSD). За автономность отвечает аккумулятор на 5000 мАч с поддержкой 18-ваттной быстрой зарядки. Дополняют список характеристик сканер отпечатков пальцев в кнопке включения и защита корпуса IP53.',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=preview-large'
  },
  {
    id: 5,
    name: 'Apple iPhone 13 128Gb белый',
    price: 297183,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=preview-large' 
  },
  {
    id: 6,
    name: 'Электрочайник BEREKE BR-810 серый',
    price: 1900,
    description: 'BEREKE BR-810 - это электрический чайник, который предоставляет надежное и удобное решение для приготовления горячих напитков.',
    link: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=preview-large' 
  },
  {
    id: 7,
    name: 'Deerma DX700 белый',
    price: 17354,
    description: 'Пылесос Deerma DX700 – стильный, компактный и удобный пылесос, конструкция которого предусматривает использование в качестве портативного ручного или помощника для эффективной уборки напольных покрытий. Технология циклонной фильтрации благодаря высокой силе всасывания гарантирует быстрый сбор пыли и мусора.',
    link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=preview-large'
  },
  {
    id: 8,
    name: 'SM-7700 серебристый',
    price: 9997,
    description: 'Блендер 2 в 1. Блендер + измельчитель (кофемолка), 3 скорости + импульс, стеклянная колба, серебристый цвет.',
    link: 'https://kaspi.kz/shop/p/sm-7700-serebristyi-110902818/?c=750000000',
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h78/he6/81315957440542.png?format=preview-large'
  },
  {
    id: 9,
    name: 'LG F2J3NS0W белый',
    price: 161334,
    description: 'Глубина стиральной машины LG F2J3NS0W всего 44 см, благодаря чему она поместится даже в небольшую ванную комнату. Барабан вмещает 6 кг сухого белья, чего вполне достаточно для семьи из трёх-четырёх человек. Эта модель снабжена инверторным двигателем с прямым приводом, он отличается более длительным сроком службы, чем обычный, так как в его конструкции нет щёток и ремня.',
    link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000',
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=preview-large'
  },
  {
    id: 10,
    name: 'Увлажнитель воздуха Maxmoll H2O Humid-300 белый',
    price: 2163,
    description: 'Ультразвуковой настольный увлажнитель воздуха с заправочной емкостью для воды в объеме 300 мл. Корпус прибора выполнен из ABS пластика черного цвета. Корпус прибора и внутренняя емкость легко моются и дезинфицируются с помощью бытовых моющих средств. Увлажнитель питается от порта USB, номинальный потребляемый ток 250 – 350 мА. Прибор оборудован таймером на 4 или 6 часов работы.',
    link: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-maxmoll-h2o-humid-300-belyi-102027263/?c=750000000',
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd0/hc4/64156819783710.jpg?format=preview-large' 
  },
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/