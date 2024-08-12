import React from 'react';
import { useState } from 'react';
import '../css/AboutUs.css';

import {Card, Col, Image, ListGroup, Nav, Row} from "react-bootstrap";
import  order from '../assets/aboutus1.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/tab';
import {observer} from "mobx-react-lite";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const mainPage = observer(() => {
    const [index, setIndex] = useState(0); 

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);}
    const [toggle,setToggle]=useState(1)
    function updateToggle(id){
      setToggle(id)
    }
    

    return (     
      <body >  
        <div class="space2"></div> 
        <div class="wrapper1">
       <div class="first-block">
         
        <div class="first-left">
          <div class="shape-pic">
          <div class="left-shape"></div>

          <Image className='left-image'  src={order} /></div>
          <div class="left-under-caption"> Уфимский завод железобетонных изделий
          "Эколог" БСНС ведет свою историю с марта 1962 г</div>
        </div>


        <div class="first-right">
          <div class="first-caption"> Узжби "Эколог" Бснс – это современная компания, специализирующаяся на производстве и поставке железобетонных изделий высокого качества в соответствии с ГОСТом.
          <br/><br/>Мы имеем производственные площади, складскую инфраструктуру, и собственный отдел логистики с автопарком специализированной техники, благодаря которому вы экономите на доставке.
          </div>
        </div></div>
       </div>

       

     


<div class="ben">
<YMaps  >     
      <Map  className='map' 
    defaultState={{  
      
      center: [54.745848569907125,55.92078250000001],  
      zoom: 17, 
      controls: ["zoomControl", "fullscreenControl"],
      
       
    }}
    modules={["control.ZoomControl", "control.FullscreenControl"]}   
  >
    <Placemark defaultGeometry={[54.745848569907125,55.92078250000001]} /> 
  </Map>
</YMaps> 
<div class="map-desc"><div class="mtext">
<div class="mheader">АО УЗЖБИ "Эколог" БСНС</div>

Телефон:<br/> 
<div><a class="contacts" href="tel:+73472767734">+7 (347) 276-77-34</a></div>
<div ><a class="contacts" href="tel:+73472715529">+7 (347) 271-55-29</a> (факс)</div>
<div >E-mail: <a class="contacts" href="mailto:zhbz_ufa@mail.ru">zhbz_ufa@mail.ru</a>

</div>Адрес: <a class="contacts" href="https://yandex.ru/maps/-/CDv-NGl4">г. Уфа, ул. Силикатная, 7</a>
</div></div>
</div>


      
      



   
 


    
      
      </body>
      

    );
}
)



export default mainPage