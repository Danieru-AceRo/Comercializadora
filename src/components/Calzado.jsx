import React from "react";
import ProductCart from "./ProductCart";

const products = [
  {
    id: 1,
    title: "Armada modelo 6115",
    talla: "22 ,23 ,24 ,25 ,26 ,27 ,28 ,29 ,30 ,31 ,",
    image: "",
  },
  {
    id: 2,
    title: "Armada modelo 157",
    talla: "22 ,23 ,24 ,25 ,26 ,27 ,28 ,29 ,30 ,31 ,32",
    image: "",
  },
  {
    id: 3,
    title: "Armada modelo 156",
    talla: "22 ,23 ,24 ,25 ,26 ,27 ,28 ,29 ,30 ,31 ,32",
    image: "",
  },
  {
    id: 4,
    title: "Armada modelo 155 azul y rojo",
    talla: "22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,",
    image: "",
  },
  {
    id: 5,
    title: "Armada modelo 158",
    talla: "22 , 23,24 ,25 ,26 ,27 ,28 ,29 ,30 ,31 ,32 ,",
    image: "",
  },
  {
    id: 6,
    title: "Armada modelo 5039",
    talla: "22 ,23 ,24 ,25 ,26 ,27 ,28 ,29 ,30 ,31 ,32,",
    image: "",
  },
  {
    id: 7,
    title: "Armada modelo 5035",
    talla: "22 ,23 ,24 ,25 ,26 ,27 ,28 ,29 ,30 ,31, 32,",
    image: "",
  },
  {
    id: 8,
    title: "Armada 5045",
    talla: "22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,",
    image: "",
  },
  {
    id: 9,
    title: "Armada modelo 5047",
    talla: "22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,",
    image: "",
  },
  {
    id: 10,
    title: "Armada modelo 5047",
    talla: "22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,",
    image: "",
  },
  {
    id: 11,
    title: "Armada modelo 5010 ",
    talla: "22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32",
    image: "",
  },
  {
    id: 12,
    title: "Armada modelo 5020",
    talla: "22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,",
    image: "",
  },
  {
    id: 13,
    title: "Armada modelo 5015 ",
    talla: "22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,",
    image: "",
  },
  {
    id: 14,
    title: "Armada modelo 5017",
    talla: "22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,",
    image: "",
  },
  {
    id: 15,
    title: "Armada modelo 5021",
    talla: "22, 23, 24, 25, 26, 27, 28 ,29 ,30 ,31 ,32,",
    image: "",
  },
  {
    id: 16,
    title: "Armada modelo 5022",
    talla: "22,23,24,25,26,27,28,29,30,",
    image: "",
  },
  {
    id: 17,
    title: "Armada modelo 5011",
    talla: "22,23,24,25,26,27,28,29,30,31,32,",
    image: "",
  },
  {
    id: 18,
    title: "Armada modelo 5012",
    talla: "22,23,24,25,26,27,28,29,30,31,32,",
    image: "",
  },
  {
    id: 19,
    title: "Armada modelo 5026 rosa y azul",
    talla: "22,23,24,25,26,27,",
    image: "",
  },
  {
    id: 20,
    title: "Armada modelo 154 verde",
    talla: "22,23,24,25,26,27,",
    image: "",
  },
  {
    id: 21,
    title: "Armada modelo 154 morado",
    talla: "22,23,24,25,26,27,",
    image: "",
  },
  {
    id: 22,
    title: "Armada modelo 110",
    talla: "22,23,24,25,26,27,",
    image: "",
  },
  {
    id: 23,
    title: "Armada modelo 158",
    talla: "22,23,24,25,26,27,",
    image: "",
  },
  {
    id: 24,
    title: "Armada modelo 158",
    talla: "22,23,24,25,26,27,",
    image: "",
  },
  {
    id: 25,
    title: "Armada modelo 103",
    talla: "22,23,24,25,26,27,28,29,30,",
    image: "",
  },
  {
    id: 26,
    title: "Armada modelo 101",
    talla: "22,23,24,25,26,27,28,29,30,",
    image: "",
  },
];

const vanvien = [
  {
    "id": 1,
    "title": " VANVIEN modelo BLU NEGRO",
    "talla": "22,23,24,25,26,27,28,29,30,31,32", 
    "image": ""
  },
  {
    "id": 2,
    "title": "VANVIEN modelo BLU CAFÉ",
    "talla": "22,23,24,25,26,27,28,29,30,31,32,",
    "image": ""
  },
  {
    "id": 3,
    "title": "VANVIEN modelo SX NEGRO",
    "talla": "22,23,24,25,26,27,28,29,30,31,32,",
    "image": ""
  },
  {
    "id": 4,
    "title": "VANVIEN modelo SX LILA",
    "talla": "22,23,24,25,26,27,28,29,30,31,32,",
    "image": ""
  },
  {
    "id": 5,
    "title": "VANVIEN modelo INTREPID NEGRO",
    "talla": "22,23,24,25,26,27,28,29,30,31,32,",
    "image": ""
  },
  {
    "id": 6,
    "title": "VANVIEN modelo INTREPID CAFÉ",
    "talla": "22,23,24,25,26,27,28,29,30,31,32,",
    "image": ""
  },
  {
    "id": 7,
    "title": "VANVIEN modelo EURO LADY",
    "talla": "22,23,24,25,26,27,",
    "image": ""
  },
  {
    "id": 8,
    "title": "VANVIEN modelo DASH GRIS",
    "talla": "22,23,24,25,26,27,28,29,30,31,32,",
    "image": ""
  },
  {
    "id": 9,
    "title": "VANVIEN modelo DASH MOSTAZA",
    "talla": "22,23,24,25,26,27,28,29,30,31,32,",
    "image": ""
  },
  {
    "id": 10,
    "title": "VANVIEN modelo ONNE AZUL",
    "talla": "22,23,24,25,26,27,28,29,30,31,32,",
    "image": ""
  },
  {
    "id": 11,
    "title": "VANVIEN modelo ONNE ROSA ",
    "talla":"22,23,24,25,26,27,",
    "image": ""
  },
  {
    "id": 12,
    "title": "VANVIEN modelo OMEGA CHOCOLATE ",
    "talla": "22,23,24,25,26,27,28,29,30,31,32,",
    "image": ""
  },
  {
    "id": 13,
    "title": "VANVIEN modelo OMEGA NEGRO",
    "talla": "22,23,24,25,26,27,28,29,30,31,32,",
    "image": ""
  },
  {
    "id": 14,
    "title": "VANVIEN modelo PLEXUS NEGRO",
    "talla": "22,23,24,25,26,27,28,29,30,31,32,",
    "image": ""
  },
  {
    "id": 15,
    "title": "VANVIEN modelo PLEXUS LILA",
    "talla": "22,23,24,25,26,27,", 
    "image": ""
  },
  {
    "id": 16,
    "title": "VANVIEN modelo EURO DX CAFÉ",
    "talla": "22,23,24,25,26,27,28,29,30,31,32,",
    "image": ""
  },
  {
    "id": 17,
    "title": "VANVIEN modelo EURO DX NEGRO",
    "talla": "22,23,24,25,26,27,28,29,30,31,32,",
    "image": ""
  },
  {
    "id": 18,
    "title": "VANVIEN modelo DIABÉTICO",
    "talla": "22,23,24,25,26,27,28,29,30,31,32,",
    "image": ""
  },
  {
    "id": 19,
    "title": "VANVIEN modelo M17",
    "talla": "22,23,24,25,26,27,28,29,30,31,32,",
    "image": ""
  },
  {
    "id": 20,
    "title": "VANVIEN modelo RANGER",
    "talla": "22,23,24,25,26,27,28,29,30,31,32,",
    "image": ""
  },
  {
    "id": 21,
    "title": "VANVIEN modelo NVG",
    "talla": "23,24,25,26,27,28,29,30,",
    "image": ""
  },
  {
    "id": 22,
    "title": "VANVIEN modelo ISIK ELECTRIC",
    "talla": "22,23,24,25,26,27,28,29,30,31,",
    "image": ""
  },
  {
    "id": 23,
    "title": "VANVIEN modelo ISIK FIRE",
    "talla": "22,23,24,25,26,27,28,29,30,31,",
    "image": ""
  },
  {
    "id": 24,
    "title": "VANVIEN modelo ISIK NAIT",
    "talla": "22,23,24,25,26,27,28,29,30,31,",
    "image": ""
  },
  {
    "id": 25,
    "title": "VANVIEN modelo ISIK INTENSE",
    "talla": "22,23,24,25,26,27,28,29,30,31,",
    "image": ""
  },
  {
    "id": 26,
    "title": "VANVIEN modelo ISIK ORANGE",
    "talla": "22,23,24,25,26,27,28,29,30,31,",
    "image": ""
  },
  {
    "id": 27,
    "title": "VANVIEN modelo ISIK SKY",
    "talla": "22,23,24,25,26,27,28,29,30,31,",
    "image": ""
  },
  {
    "id": 28,
    "title": "VANVIEN modelo ISIK JET",
    "talla": "22,23,24,25,26,27,28,29,30,31,",
    "image": ""
  },
  {
    "id": 29,
    "title": "VANVIEN modelo ISIK ROS",
    "talla": "22,23,24,25,26,27,",
    "image": ""
  },
  
];

const crucero = [
  {
    id: 1,
    title: " CRUCERO modelo 14A",
    tallas: "22,23,24,25,26,27,28,29,30,31,",
    image: "",
  },
  {
    id: 2,
    title: "CRUCERO modelo 14B",
    talla: "22,23,24,25,26,27,28,29,30,31,",
    image: "",
  },
  {
    id: 3,
    title: "CRUCERO modelo 14D",
    talla: "22,23,24,25,26,27,28,29,30,31,",
    image: "",
  },
  {
    id: 4,
    title: "CRUCERO modelo 16A",
    talla: "22,23,24,25,26,27,28,29,30,31,",
    image: "",
  },
  {
    id: 5,
    title: "CRUCERO modelo 16B",
    talla: "22,23,24,25,26,27,28,29,30,31,",
    image: "",
  },
  {
    id: 6,
    title: "CRUCERO modelo 15A",
    talla: "22,23,24,25,26,27,28,29,30,31,32,",
    image: "",
  },
  {
    id: 7,
    title: " CRUCERO modelo 15B",
    talla: "22,23,24,25,26,27,28,19,30,31,",
    image: "",
  },
  {
    id: 8,
    title: "CRUCERO modelo Trail",
    talla: "22,23,24,25,26,27,28,29,30,31,",
    image: "",
  },
  {
    id: 9,
    title: "CRUCERO modelo PLO-42-A002",
    talla: "24,25,26,27,28,29,30,31,",
    image: "",
  },
  {
    id: 10,
    title: "CRUCERO modelo PLO-01-A003",
    talla: "24,25,26,27,28,29,30,31,",
    image: "",
  },
  {
    id: 11,
    title: "CRUCERO modelo PLO-19-A001 ",
    talla: "24,25,26,27,28,39,30,31,",
    image: "",
  },
  {
    id: 12,
    title: "CRUCERO modelo PLO-54-A005 ",
    talla: "24,25,26,27,28,29,30,31,",
    image: "",
  },
  {
    id: 13,
    title: "CRUCERO modelo PLO-25-A004",
    talla: "24,25,26,27,28,29,30,31,",
    image: "",
  },
  {
    id: 14,
    title: "CRUCERO modelo PLO-23-A007",
    talla: "24,25,26,27,28,29,30,31,",
    image: "",
  },
  {
    id: 15,
    title: "CRUCERO modelo PLO-42-A006 ",
    talla: "22,23,24,25,26,27,28,29,30,31,",
    image: "",
  },
  {
    id: 16,
    title: "CRUCERO modelo SRW",
    talla: "22,23,24,25,26,27,28,29,30,",
    image: "",
  },
  {
    id: 17,
    title: "CRUCERO modelo SRW MET",
    talla: "22,23,24,25,26,27,28,29,30,",
    image: "",
  },
  {
    id: 18,
    title: "CRUCERO modelo DUCK",
    talla: "22,23,24,25,26,27,28,29,30,31,32,",
    image: "",
  },
  {
    id: 19,
    title: "CRUCERO modelo BC4+",
    talla: "22,23,24,25,26,27,28,29,30,",
    image: "",
  },
  {
    id: 20,
    title: "CRUCERO modelo 502",
    talla: "22,23,24,25,26,27,28,29,30,31,32,",
    image: "",
  },
  {
    id: 21,
    title: "CRUCERO modelo CFE",
    talla: "23,24,25,26,27,28,29,30,31,32,",
    image: "",
  },
  {
    id: 22,
    title: "CRUCERO modelo 238 ",
    talla: "22,23,24,25,26,27,28,29,30,",
    image: "",
  },
  {
    id: 23,
    title: "CRUCERO modelo 238",
    talla: "22,23,24,25,26,27,28,29,30,",
    image: "",
  },
  {
    id: 24,
    title: "CRUCERO modelo HELIOS",
    talla: "22,23,24,25,26,27,28,29,30,",
    image: "",
  },
  {
    id: 25,
    title: "CRUCERO modelo NAVY",
    talla: "22,23,24,25,26,27,28,29,30,",
    image: "",
  },
  {
    id: 26,
    title: "CRUCERO modelo AURA",
    talla: "22,23,24,25,26,27,28,29,30,",
    image: "",
  },
  {
    id: 27,
    title: "CRUCERO modelo FIRE",
    talla: "22,23,24,25,26,27,28,29,30,31,32,",
    image: "",
  },
  {
    id: 28,
    title: "CRUCERO modelo MONSTER",
    talla: "22,23,24,25,26,27,28,29,30,31,32",
    image: "",
  },
  {
    id: 29,
    title: "CRUCERO modelo NR1 LADY",
    talla: "22,23,24,25,26,27,",
    image: "",
  },
  {
    id: 30,
    title: "CRUCERO modelo NR1 ",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 31,
    title: "CRUCERO modelo NR1 MET ",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 32,
    title: "CRUCERO modelo NR1 PU ",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 33,
    title: "CRUCERO modelo NR1 DIABÉTICO ",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 34,
    title: "CRUCERO modelo NR2",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 35,
    title: "CRUCERO modelo NR2 PU",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 36,
    title: "CRUCERO modelo NR3",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 37,
    title: "CRUCERO modelo EVEREST",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 38,
    title: "CRUCERO modelo ZIRCON",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 39,
    title: "CRUCERO modelo GAMMA",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 40,
    title: "CRUCERO modelo LITE 1",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 41,
    title: "CRUCERO modelo LITE 2",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 42,
    title: "CRUCERO modelo 930",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 43,
    title: "CRUCERO modelo SIGMA",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 44,
    title: "CRUCERO modelo SRW CONDUCTIVO",
    talla: "24,25,26,27, 28,29,30,",
    image: "",
  },
  {
    id: 45,
    title: "CRUCERO modelo VOLT 1",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 46,
    title: "CRUCERO modelo VOLT 4",
    talla: "24,25,26,27, 28,29,30,",
    image: "",
  },
  {
    id: 47,
    title: "CRUCERO modelo 800",
    talla: "22,23,24,25,26,27, 28,29,30,",
    image: "",
  },
  {
    id: 48,
    title: "CRUCERO modelo 801",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 49,
    title: "CRUCERO modelo 802",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 50,
    title: "CRUCERO modelo BC4",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 51,
    title: "CRUCERO modelo 927",
    talla: "23,24,25,26,27, 28,29,30,",
    image: "",
  },
  {
    id: 52,
    title: "CRUCERO modelo 435",
    talla: "22,23,24,25,26,27, 28,29,30,",
    image: "",
  },
  {
    id: 53,
    title: "CRUCERO modelo 435+",
    talla: "22,23,24,25,26,27, 28,29,30,",
    image: "",
  },
  {
    id: 54,
    title: "CRUCERO modelo BLUCHER",
    talla: "25,26,27, 28,29,30,",
    image: "",
  },
  {
    id: 55,
    title: "CRUCERO modelo BETA",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 56,
    title: "CRUCERO modelo GAMA TÁCTICO",
    talla: "22,23,24,25,26,27, 28,29,30,31,32,",
    image: "",
  },
  {
    id: 57,
    title: "CRUCERO modelo FPF",
    talla: "25,26,27, 28,29,30,",
    image: "",
  },
];

const Calzado = () => {
  return (
    <div>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Calzado</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product_section layout_padding mb-4">
        <h4 className="text-center subproduct">Armada</h4>
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <ProductCart product={product} key={product.id} model={"A"} talla={product.talla}/>
            ))}
          </div>
        </div>
      </section>
      <section className="product_section layout_padding mt-4">
        <h4 className="subproduct text-center mt-4">VANVIEN</h4>
        <div className="container">
          <div className="row">
            {vanvien.map((x) => (
              <ProductCart product={x} key={x.id} model={"V"} talla={x.talla}/>
            ))}
          </div>
        </div>
      </section>
      <section className="product_section layout_padding mt-4">
        <h4 className="subproduct text-center mt-4">Crucero</h4>
        <div className="container">
          <div className="row">
            {crucero.map((y) => (
              <ProductCart product={y} key={y.id} model={"C"} talla={y.talla} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calzado;
