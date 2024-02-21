export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  rating: number;
  image: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  },
  {
    id: 4,
    name: 'MSI GF65 Gaming Laptop',
    price: 1199.18,
    description: 'FHD (1920x1080), IPS-Level 144Hz 3ms, NVIDIA GeForce RTX 3060 Max-Q 6G GDDR6 GPU Core i7-10750H Processor (2.6-5.0GHz), Windows 10 Home Operating System',
    link: 'https://www.amazon.com/MSI-GE76-i7-11800H-GeForce-Windows/dp/B09JS61RC6/ref=sr_1_2?keywords=gaming%2Blaptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=0PM5QXV766TBEPTKTA05&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647180185&sr=8-2&th=1',
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/7126dTwVNML._AC_SX355_.jpg"
  },
  {
    id: 5,
    name: 'Acer Predator Helios 300 PH315-54-760S Gaming Laptop',
    price: 1269.99,
    description: 'Extreme Performance: Crush the competition with the impressive power and speed of the 11th Generation Intel Core i7-11800H processor, featuring 8 cores and 16 threads to divide and conquer any task or run your most intensive games',
    link: 'https://www.amazon.com/Acer-Predator-PH315-54-760S-i7-11800H-Keyboard/dp/B092YHJLS6/ref=sr_1_3?keywords=gaming+laptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=0PM5QXV766TBEPTKTA05&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647180185&sr=8-3',
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/71nz3cIcFOL._AC_SX355_.jpg"
  },
  {
    id: 6,
    name: 'ASUS TUF Dash 15 ',
    price: 1039.14,
    description: 'NVIDIA GeForce RTX 3050 Ti 4GB GDDR6 up to 1585MHz at 60W (75W with Dynamic Boost 2.0 Intel Core i7-11370H processor (12M Cache, up to 4.8GHz)',
    link: 'https://www.amazon.com/ASUS-GeForce-i7-11370H-Windows-TUF516PE-AB73/dp/B08XPC3WFQ/ref=sr_1_4?keywords=gaming+laptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=0PM5QXV766TBEPTKTA05&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647180185&sr=8-4',
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/81Tx3MJBkSL._AC_SY355_.jpg"
  },
  {
    id: 7,
    name: 'MSI GL66 Gaming Laptop',
    price: 1621.20,
    description: 'The 11th Gen. Intel Core i7 processor, delivers high performance to take on any games and applications with ease.',
    link: 'https://www.amazon.com/MSI-GL66-Gaming-Laptop-i7-11800H/dp/B09127DDVT/ref=sr_1_5?keywords=gaming+laptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=0PM5QXV766TBEPTKTA05&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647180185&sr=8-5',
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/61Ze2wc9nyS._AC_SY355_.jpg"
  },
  {
    id: 8,
    name: 'Acer Nitro 5 Gaming Laptop',
    price: 741.99,
    description: 'Dominate the Game: With the 10th Gen Intel Core i5-10300H processor, your Nitro 5 is packed with incredible power for all your games',
    link: 'https://www.amazon.com/Acer-AN515-55-53E5-i5-10300H-GeForce-Keyboard/dp/B092YHJGMN/ref=sr_1_1?keywords=gaming+laptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=0PM5QXV766TBEPTKTA05&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647180185&sr=8-1',
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_SX355_.jpg"
  },
  {
    id: 9,
    name: 'Logitech MK345 Wireless Combo Full-Sized Keyboar',
    price: 49.83,
    description: 'Full-size Keyboard Layout: Comfortable, quiet typing on a familiar keyboard layout with generous palm rest, spill-resistant design (2), and easy-access media keys like mute, volume, and play',
    link: 'https://www.amazon.com/Logitech-MK345-Wireless-Combo-Right-Handed/dp/B00QXT5T3U/ref=sr_1_16?qid=1647180131&s=computers-intl-ship&sr=1-16',
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/61S0sV1a57L._AC_SY450_.jpg"
  },
  {
    id: 10,
    name: 'HP 24mh FHD Monitor - Computer',
    price: 211,
    description: 'OUTSTANDING VISUALS – This FHD display with IPS technology gives you brilliant visuals and unforgettable quality; with a maximum resolution of 1920 x 1080 at 75 Hz, you’ll experience the image accuracy and wide-viewing spectrums of premium tablets and mobile devices',
    link: 'https://www.amazon.com/HP-24mh-FHD-Monitor-Built/dp/B08BF4CZSV/ref=sr_1_10?qid=1647180131&s=computers-intl-ship&sr=1-10',
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SX450_.jpg"
  },
  {
    id: 11,
    name: 'Apple Pencil (2nd Generation)',
    price: 119,
    description: 'Apple Pencil (2nd generation) brings your work to life. With imperceptible lag, pixel-perfect precision, and tilt and pressure sensitivity, it transforms into your favorite creative instrument, your paint brush, your charcoal, or your pencil.',
    link: 'https://www.amazon.com/Apple-MU8F2AM-A-Pencil-Generation/dp/B07K1WWBJK/ref=lp_16225007011_1_1',
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/41S3MKU9TjL._AC_SX342_.jpg"
  },
  {
    id: 12,
    name: 'CeraVe Hydrating Facial Cleanser ',
    price: 13.59,
    description: 'Gentle cleansing lotion with hyaluronic acid, ceramides, and glycerin to help hydrate skin without stripping moisture. Removes face makeup, dirt, and excess oil, provides 24-hour hydration and leaves a moisturized, non-greasy feel.',
    link: 'https://www.amazon.com/CeraVe-Hydrating-Facial-Cleanser-Fragrance/dp/B01MSSDEPK/ref=sr_1_10?pd_rd_r=8fc4af06-98f5-4b5c-8351-1f02c5068d1d&pd_rd_w=Yn9Vy&pd_rd_wg=WqLea&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=P9SE5X05CT7FQZGZ7QCR&qid=1647180065&s=beauty-intl-ship&sr=1-10',
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/51DbQev1thL._SY355_.jpg"
  },
  {
    id: 13,
    name: 'TruSkin Vitamin C Serum for Face',
    price: 19.99,
    description: 'ANTI AGING FACE SERUM - Vitamin C blends with Botanical Hyaluronic Acid, Vitamin E, Witch Hazel, and Jojoba Oil in an anti aging, skin brightening formula designed to improve wrinkles and dark spots',
    link: 'https://www.amazon.com/TruSkin-Naturals-Vitamin-Topical-Hyaluronic/dp/B01M4MCUAF/ref=sr_1_7?pd_rd_r=8fc4af06-98f5-4b5c-8351-1f02c5068d1d&pd_rd_w=Yn9Vy&pd_rd_wg=WqLea&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=P9SE5X05CT7FQZGZ7QCR&qid=1647180065&s=beauty-intl-ship&sr=1-7',
    rating: 4.3,
    image: "https://m.media-amazon.com/images/I/61nD93IEBKL._SY355_.jpg"
  }
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/