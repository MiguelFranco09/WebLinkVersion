import React from "react";
import "./GridCards.css"
import Card from "../Cards/Cards";

const content_card = [
    {
        "name" : "Adobe After Effects para animación de personajes - Domestika",
        "image" : "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,pg_1,t_base_params/v1608224744/course-covers/000/001/571/1571-original.jpg?1608224744",
        "link" : "https://www.mediafire.com/file/si96rifs5biie4l/Adobe_After_Effects_para_animaci%25C3%25B3n_de_personajes.txt/file"
    },
    {
        "name" : "Linkedin - Contruye tu marca personal - Domestika",
        "image" : "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_674,pg_1,t_base_params,w_1200/v1561111943/course-covers/000/000/672/672-original.jpg?1561111943",
        "link" : "https://www.mediafire.com/file/5aipjg27086sioo/LinKedIn-_Contruye_tu_marca_personal.txt/file"
    },
    {
        "name" : "Animacion motion graphics con after effects - domestika",
        "image" : "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_152,pg_1,t_base_params,w_270/v1591197277/course-covers/000/000/088/88-original.jpg?1591197277",
        "link" : "https://www.mediafire.com/file/t3ev59g0wz4ymaa/3D_max_Cortometrajes_animados_en_3D_para_redes_sociales.txt/file"
    },
    {
        "name" : "3D max Cortometrajes animados en 3D - domestika",
        "image" : "https://i.ytimg.com/vi/4J-iRS8M83Y/maxresdefault.jpg",
        "link" : "https://www.mediafire.com/file/t3ev59g0wz4ymaa/3D_max_Cortometrajes_animados_en_3D_para_redes_sociales.txt/file"
    },
    {
        "name" : "Curso Definitivo de Html y Css - Platzi",
        "image" : "https://descargasmegatotal.com/wp-content/uploads/2021/03/Curso-Definitivo-de-HTML-y-CSS.jpg",
        "link" : "https://n9.cl/187kw"
    },
    {
        "name" : "Curso Profecional de Git y Github - Platzi",
        "image" : "https://i.pinimg.com/originals/45/1d/7b/451d7bed0baa1948c85fb9606bd7c189.png",
        "link" : "https://n9.cl/61nh4"
    },
    {
        "name" : "Curso Fundamentos de AWC Cloud - Platzi",
        "image" : "https://static.platzi.com/media/courses/OG-Fundamentos-AWS-Cloud.png",
        "link" : "https://n9.cl/obxfi"
    },
    {
        "name" : "Curso Profesional de Javascript - Platzi",
        "image" : "https://static.platzi.com/cdn-cgi/image/width=1024,quality=20,format=auto/media/diplomas/Diploma-Profesional-Javascript-e5cad28d-f867-41fb-abbe-7af925d014e1.jpg",
        "link" : "https://n9.cl/onpbz"
    },
    {
        "name" : "Curso de Node.js - Platzi",
        "image" : "https://pbs.twimg.com/media/EAtZWb5XkAI0ipY.jpg",
        "link" : "https://n9.cl/egpfm"
    },
    {
        "name" : "Curso Practico de Html y Css - Platzi",
        "image" : "https://pbs.twimg.com/media/Exg-m_IXMAIHmrv?format=jpg&name=4096x4096",
        "link" : "https://n9.cl/6cunz"
    },
    {
        "name" : "Curso Practico de React Js - Platzi",
        "image" : "https://descargasmegatotal.com/wp-content/uploads/2021/03/Curso-Practico-de-React-JS.jpg",
        "link" : "https://n9.cl/fon2c1"
    },
    {
        "name" : "Cuso de Economia Digital Bitcoin y criptomonedas - Platzi",
        "image" : "https://static.platzi.com/media/user_upload/Screenshot%202021-06-04%20at%2015-58-15%20Curso%20de%20Bitcoin%20y%20Criptomonedas%20-%20Platzi-0198a239-ea9d-4c0a-846c-926b53e782d3.jpg",
        "link" : "https://n9.cl/l47t0"
    },
    {
        "name" : "Curso de creacion de NFT - Platzi",
        "image" : "https://static.platzi.com/media/user_upload/Piezas_Mail-09be0fa3-f192-4640-96a9-f4260ec281e9.jpg",
        "link" : "https://exe.io/Nilxmv"
    },
    {
        "name" : "Curso de Css grid basico - PLatzi",
        "image" : "https://static.platzi.com/media/blog/blog_aprender-cssgrid-platzi-og-89f07a62-b721-42df-977a-a1a0531d22e0.png",
        "link" : "https://exe.io/sah0DO"
    },
    {
        "name" : "Curso manipulacion del DOM - Platzi",
        "image" : "https://static.platzi.com/cdn-cgi/image/width=1024,quality=20,format=auto/media/diplomas/Diploma-manipulacion-DOM-e64aba99-6996-4f07-951f-722b7dcdb7c3.jpg",
        "link" : "https://exe.io/E9Tvdm"
    },
    {
        "name" : "Curso Intermedio de POO Javascript - Platzi",
        "image" : "https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/https://mdstrm.com/thumbs/512e13acaca1ebcd2f000279/thumb_60b7a2a3bc05610831e17942_60b7a2a3bc05610831e1794e_15s.jpg",
        "link" : "https://exe.io/B4KN"
    },
    {
        "name" : "Curso Animacion con Css - Platzi",
        "image" : "https://static.platzi.com/cdn-cgi/image/width=1024,quality=20,format=auto/media/diplomas/Diploma-Animacion-CSS-329ae6d1-9c05-4007-abf6-f5ec7e2847b4.jpg",
        "link" : "https://exe.io/bKv9m"
    },
    {
        "name" : "Escuela de Ingles, Basico - Intermedio - Avanzado. Platzi",
        "image" : "https://static.platzi.com/media/blog/og-escuela-ingles-910797f6-f315-463e-9362-e8037664af7d.png",
        "link" : "https://exe.io/Octp0"
    },
    {
        "name" : "Curso Profesional de Python - Platzi",
        "image" : "https://static.platzi.com/media/courses/og-profesional-de-python.png",
        "link" : "https://exe.io/yQSp5"
    },
    {
        "name" : "Curso Intermedio de Python: Comprehe...- Platzi",
        "image" : "https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/https://mdstrm.com/thumbs/512e13acaca1ebcd2f000279/thumb_5ee5247e77666b071994bcda_5ee5247f77666b071994bce6_52s.jpg",
        "link" : "https://exe.io/mysA"
    },
    {
        "name" : "Curso de Flask - Platzi",
        "image" : "https://i.ytimg.com/vi/YVEYVJw2hxg/maxresdefault.jpg",
        "link" : "https://exe.io/b1qPhuf"
    },
    {
        "name" : "Curso Profesional de React Hook - Platzi",
        "image" : "https://static.platzi.com/media/courses/OG-Profesional-React-Hooks.png",
        "link" : "https://exe.io/qXOVAZw"
    },
    {
        "name" : "Curso de React Native - Platzi",
        "image" : "https://static.platzi.com/media/courses/opengraph-curso-react-native.png",
        "link" : "https://exe.io/xLKuk2"
    },
    
]


function GridCards(){
    return(
      <>  <div className="container_gridcards">
            <div className="gridcards">
                   {content_card.map ( c => <Card title={c.name} image={c.image} link={c.link}  /> )} 
            </div>
        </div>
        
       </>
    );
}

export default GridCards


