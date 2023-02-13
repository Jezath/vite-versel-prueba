//img objeto : import 1
import Img from './assets/laptop.webp'
import Img2 from './assets/laptop 2.jpg'
//img arrays : import 2
import react from './assets/react.jpg'
import javascript from './assets/javascript.jpg'
//import arrays con objetos : import 3
import port1 from './assets/port 1.webp'
import port2 from './assets/port 2.webp'
 
//import 1
export const dataImg = {
    img: Img,
    img2: Img2
}

//import 2
export const imgArray = [
    react,
    javascript 
]

//import 3
export const imgArrayObjetos = [
    {
        title: "port 1",
        img1: port1
    },
    {
        title: "port 2",
        img1: port2
    }
]

//data menu nav
export const navegation = [
    {
        name: 'About',
        href: 'About',   
    },
    {
        name: 'Services',
        href: 'Services',   
    },
    {
        name: 'Portafolio',
        href: 'Portafolio',   
    },
    {
        name: 'Contacto',
        href: 'Contacto',   
    },
]


