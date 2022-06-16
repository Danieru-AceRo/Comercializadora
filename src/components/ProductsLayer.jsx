import ProductCart from './ProductCart'

const products = [
  {
    "id": 1,
    "title": "M24 Cedro",
    "price": 240,
    "image": "" 
  },
  {
    "id": 2,
    "title": "CA8 Cobre",
    "price": 260,
    "image": ""
  },
  {
    "id": 3,
    "title": "CA8 Negro/Dorado",
    "price": 260,
    "image": ""
  },
  {
    "id": 4,
    "title": "CA9 COBRE",
    "price": 250,
    "image": ""
  },
  {
    "id": 5,
    "title": "CA9 Negro/Dorado",
    "price": 250,
    "image": ""
  },
  {
    "id": 6,
    "title": "CA9  Negro/Blanco COBRE",
    "price": 250,
    "image": ""
  },
  {
    "id": 7,
    "title": "KAS Negra Aurora",
    "price": 830,
    "image": ""
  },
  {
    "id": 8,
    "title": "K1 Satin M Cafe",
    "price": 830,
    "image": ""
  },
  {
    "id": 9,
    "title": "K1 Satin M Blanco",
    "price": 830,
    "image": ""
  },
  {
    "id": 10,
    "title": "C2 Satin M Cafe",
    "price": 830,
    "image": ""
  },
  {
    "id": 11,
    "title": "C2 M Cafe ",
    "price": 280,
    "image": ""
  },
  {
    "id": 12,
    "title": "C2 M Blanco",
    "price": 280,
    "image": ""
  },
  {
    "id": 13,
    "title": "CB2 M Cafe ",
    "price": 235,
    "image": ""
  },
  {
    "id": 14,
    "title": "CB1 M Cafe",
    "price": 280,
    "image": ""
  },
  {
    "id": 15,
    "title": "CB1 M Blanco",
    "price": 280,
    "image": ""
  },
  {
    "id": 16,
    "title": "LED 1  Chocolate Marmol",
    "price": 140,
    "image": ""
  },
  {
    "id": 17,
    "title": "LED 1 Cedro Cuadricola",
    "price": 140,
    "image": ""
  },
  {
    "id": 18,
    "title": "LED 1 Caoba Marmol",
    "price": 140,
    "image": ""
  },
  {
    "id": 19,
    "title": "LED 1 Nogal Transparencia",
    "price": 140,
    "image": ""
  },
  {
    "id": 20,
    "title": "Pañuelo Chico Nogal N",
    "price": 240,
    "image": ""
  },
  {
    "id": 21,
    "title": "Pañuelo Mediano Nogal N",
    "price": 325,
    "image": ""
  },
  {
    "id": 22,
    "title": "Piña Nogal",
    "price": 370,
    "image": ""
  },
  {
    "id": 23,
    "title": "M46 Chocolate",
    "price": 260,
    "image": ""
  },
  {
    "id": 24,
    "title": "M45 Chocolate",
    "price": 370,
    "image": ""
  },
  {
    "id": 25,
    "title": "M40 Nogal N",
    "price": 240,
    "image": ""
  },
  {
    "id": 26,
    "title": "M30 Chocolate",
    "price": 260,
    "image": ""
  },
  {
    "id": 27,
    "title": "M29 Chocolate",
    "price": 355,
    "image": ""
  },
  {
    "id": 28,
    "title": "L2 Pañuaelo Satin",
    "price": 205,
    "image": ""
  },
  {
    "id": 29,
    "title": "L2 Redondo Satin",
    "price": 205,
    "image": ""
  },
  {
    "id": 30,
    "title": "OVNI Satin ",
    "price": 320,
    "image": ""
  },
  {
    "id": 31,
    "title": "L15 Plata",
    "price": 210,
    "image": ""
  },
  {
    "id": 32,
    "title": "L14 Plata",
    "price": 210,
    "image": ""
  },
  {
    "id": 33,
    "title": "L14 Plata",
    "price": 300,
    "image": ""
  },
  {
    "id": 34,
    "title": "L12 Blanca Cocina ",
    "price": 300,
    "image": ""
  },
  {
    "id": 35,
    "title": "L20 Cafe",
    "price": 205,
    "image": ""
  },
  {
    "id": 36,
    "title": "L2 Redondo Cafe Cocina",
    "price": 205,
    "image": ""
  },
  {
    "id": 37,
    "title": "L2 Flor Cafe Cocina",
    "price": 205,
    "image": ""
  },
  {
    "id": 38,
    "title": "L2  Redondo Cafe",
    "price": 205,
    "image": ""
  },
  {
    "id": 39,
    "title": "L2 Flor Cafe",
    "price": 205,
    "image": ""
  },
  {
    "id": 40,
    "title": "L2 Redondo Blanco Cocina",
    "price": 205,
    "image": ""
  },
  {
    "id": 41,
    "title": "L2 Flor Blanca Cocina",
    "price": 205,
    "image": ""
  },
  {
    "id": 42,
    "title": "L2 Redondo Blanco",
    "price": 205,
    "image": ""
  },
  {
    "id": 43,
    "title": "L2 Flor Blanca",
    "price": 205,
    "image": ""
  },
  {
    "id": 44,
    "title": "M23 Cedro",
    "price": 340,
    "image": ""
  },
  {
    "id": 45,
    "title": "M22 Chocolate",
    "price": 240,
    "image": ""
  },
  {
    "id": 46,
    "title": "M21 Chocolate",
    "price": 340,
    "image": ""
  },
  {
    "id": 47,
    "title": "M16 Chocolate",
    "price": 215,
    "image": ""
  },
  {
    "id": 48,
    "title": "M14 Cedro",
    "price": 240,
    "image": ""
  },
  {
    "id": 49,
    "title": "M13 Cedro",
    "price": 355,
    "image": ""
  },
  {
    "id": 50,
    "title": "M12 Caoba Cocina",
    "price": 340,
    "image": ""
  },
  {
    "id": 51,
    "title": "M4 Chocolate",
    "price": 240,
    "image": ""
  },
  {
    "id": 52,
    "title": "M3 Chocolate",
    "price": 340,
    "image": ""
  },
  {
    "id": 53,
    "title": "Cocina 3 M cafe",
    "price": 255,
    "image": ""
  },
  {
    "id": 54,
    "title": "Claraboya Negra",
    "price": 190,
    "image": ""
  },
  {
    "id": 55,
    "title": "Claraboya Blanca",
    "price": 190,
    "image": ""
  },
  {
    "id": 56,
    "title": "Claraboya Satin",
    "price": 190,
    "image": ""
  },
  {
    "id": 57,
    "title": "Claraboya rojo oxido",
    "price": 250,
    "image": ""
  },
]

const ProductsLayer = () => {
  return (
    <div>
      <section class="inner_page_head">
    <div class="container_fuild">
       <div class="row">
          <div class="col-md-12">
             <div class="full">
                <h3>Casa Eléctrica</h3>
             </div>
          </div>
       </div>
    </div>
 </section>
    <section className="product_section layout_padding">
    <div className="container">
      <div className="row">
        {products.map(product => (
                <ProductCart product={product} key={product.id} />
            ))
        }
      </div>
    </div>
  </section>
    </div>
  )
}

export default ProductsLayer