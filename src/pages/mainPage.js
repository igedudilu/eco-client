import React from 'react';
import { useState } from 'react';
import '../css/mainPage.css';
import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from '..assets/ExampleCarouselImage.png';
import {Card, Col, Image, Row} from "react-bootstrap";
import  order from '../assets/order.jpg'
import  slide1 from '../assets/carousel/slide1.jpg'
import  slide2 from '../assets/carousel/slide2.jpg'
import  slide3 from '../assets/carousel/slide3.png'
import  slide4 from '../assets/carousel/slide4.jpg'
import kolonni from '../assets/kolonni.jpg'
import kolca from '../assets/kolca.jpg'
import bordur from '../assets/bordur.jpg'

import lotki from '../assets/lotki.jpg'
import perekritia from '../assets/perekritia.jpg'
import plitidor from '../assets/plitidor.jpg'
import plitidnish from '../assets/plitidnish.jpg'
import plitiperekritia from '../assets/plitiperekritia.jpg'
import stenpanel from '../assets/stenpanel.jpg'
import fundament from '../assets/fundament.jpg'
import peremichki from '../assets/peremichki.jpg'
import stolbi from '../assets/stolbi.jpg'
import trubi from '../assets/trubi.jpg'
import fundBloki from '../assets/fundBloki.jpg'
import ourClients from '../assets/clients.jpg'
import price from '../assets/price.xlsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {observer} from "mobx-react-lite";

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import Modal from "../Modal/Modal";
const mainPage = observer(() => {
    const [index, setIndex] = useState(0); 

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);}
    
      const[modalActive, setModalActive]=useState(0)
    
    return (    
      <body >
        <div class="space1"></div> 
        <Modal active={modalActive} setActive={setModalActive} ></Modal> 
      <Carousel  className='rounded-4 my-carousel' activeIndex={index} onSelect={handleSelect} >
        

        <Carousel.Item className='c-item'>
        
          <Image className='c-image' text="First slide"  src={slide1} />
          <div className='ccaption1'>
          
            
          <div id="container">
  <div class="skew"></div>
  <div class="skew2"></div>
  <div class='hc1'>Гражданское строительство</div>
  <div class="txt">
  Для нас важны не только крупные заказы, но и проекты частного строительства. Высококлассные специалисты нашего предприятия помогут подобрать изделия подходящие именно для вашего проекта.



   </div>
</div>
            
          </div>
          
        </Carousel.Item>

        <Carousel.Item className='c-item'>
          <Image className='c-imager' text="Second slide" src={slide4}/>
          <div className='ccaption2'>
          
            
          <div id="containerr">
  <div class="skewr"></div>
  <div class="skewr2"></div>
 
   <div class='hc2'>Инженерные системы</div>
  <div class="txtr">
  Наш опытный персонал готов
работать с задачей любой сложности, чтобы обеспечить высокое качество выполнения работы.
Если вам нужны надежные железобетонные элементы для вашего объекта инженерной системы, свяжитесь с нами уже сегодня! 
Наша команда профессиональных консультантов всегда готова помочь в выборе наилучшего решения для вашего бизнеса.


   </div>
</div>
            
          </div>
        </Carousel.Item>

        <Carousel.Item className='c-item'>
          <Image className='c-image' text="Third slide"  src={slide3}/>
          <div className='ccaption1'>
          
            
          <div id="container">
  <div class="skew"></div>
  <div class="skew2"></div>
  <div class='hc1'>Дорожное строительство</div>
  <div class="txt">
  Мы предлагаем широкий спектр 
             продукции: от бордюров и тротуарной 
           плитки до элементов забора и дренажных
          каналов. Наша продукция отличается высоким
      качеством и надежностью, что особенно
     важно в условиях интенсивной эксплуатации
    на дорогах. Мы используем только 
   сертифицированные материалы и 
  современное оборудование, чтобы 
 гарантировать безопасность и 
долговечность наших изделий.


   </div>
</div>
            
          </div>
        </Carousel.Item>

        <Carousel.Item className='c-item'>
          <Image className='c-imager' text="Third slide"  src={slide2}/>
          <div className='ccaption2'>
          
            
          <div id="containerr">
  <div class="skewr"></div>
  <div class="skewr2"></div>
  <div class='hc2'>Работа с застройщками</div>
  <div class="txtr">
  Мы имеем многолетний
опыт работы с большими 
строительными компаниями
по всей России. При заказе изделий на большой
проект, предоставляется скидка
на все виды товаров и услуг
   </div>
  
</div>
            
          </div>
        </Carousel.Item>

      </Carousel>
      




      <div class="why-us">
     
        <div class="h1us">Наши преимущества</div>
        <div class="h2us">Выбрав наc, вы получите не только качественную продукцию, но и надежного партнера для вашего строительного проекта.
        </div>
        <div class="advantages">

          <div class="advantage">
          <svg width="75px" height="75px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167C21 10.8996 21 11.4234 21 11.9914C21 17.6294 16.761 20.3655 14.1014 21.5273C13.38 21.8424 13.0193 22 12 22C10.9807 22 10.62 21.8424 9.89856 21.5273C7.23896 20.3655 3 17.6294 3 11.9914C3 11.4234 3 10.8996 3 10.4167Z" stroke="var(--dark-color)" stroke-width="1.5"/>
<path d="M9.5 12.4L10.9286 14L14.5 10" stroke="var(--dark-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            <div class="advh">Надежность и качество</div>
            <div class="adv-caption">Наш завод известен своим высоким уровнем качества продукции и надежностью в выполнении заказов.</div>

          </div>
          <div class="advantage">
          <svg width="75px" height="75px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.082 3.01787L20.1081 3.76741L20.082 3.01787ZM16.5 3.48757L16.2849 2.76907V2.76907L16.5 3.48757ZM13.6738 4.80287L13.2982 4.15375L13.2982 4.15375L13.6738 4.80287ZM3.9824 3.07501L3.93639 3.8236L3.9824 3.07501ZM7 3.48757L7.19136 2.76239V2.76239L7 3.48757ZM10.2823 4.87558L9.93167 5.5386L10.2823 4.87558ZM13.6276 20.0694L13.9804 20.7312L13.6276 20.0694ZM17 18.6335L16.8086 17.9083H16.8086L17 18.6335ZM19.9851 18.2229L20.032 18.9715L19.9851 18.2229ZM10.3724 20.0694L10.0196 20.7312H10.0196L10.3724 20.0694ZM7 18.6335L7.19136 17.9083H7.19136L7 18.6335ZM4.01486 18.2229L3.96804 18.9715H3.96804L4.01486 18.2229ZM2.75 16.1437V4.99792H1.25V16.1437H2.75ZM22.75 16.1437V4.93332H21.25V16.1437H22.75ZM20.0559 2.26832C18.9175 2.30798 17.4296 2.42639 16.2849 2.76907L16.7151 4.20606C17.6643 3.92191 18.9892 3.80639 20.1081 3.76741L20.0559 2.26832ZM16.2849 2.76907C15.2899 3.06696 14.1706 3.6488 13.2982 4.15375L14.0495 5.452C14.9 4.95981 15.8949 4.45161 16.7151 4.20606L16.2849 2.76907ZM3.93639 3.8236C4.90238 3.88297 5.99643 3.99842 6.80864 4.21274L7.19136 2.76239C6.23055 2.50885 5.01517 2.38707 4.02841 2.32642L3.93639 3.8236ZM6.80864 4.21274C7.77076 4.46663 8.95486 5.02208 9.93167 5.5386L10.6328 4.21257C9.63736 3.68618 8.32766 3.06224 7.19136 2.76239L6.80864 4.21274ZM13.9804 20.7312C14.9714 20.2029 16.1988 19.6206 17.1914 19.3587L16.8086 17.9083C15.6383 18.2171 14.2827 18.8702 13.2748 19.4075L13.9804 20.7312ZM17.1914 19.3587C17.9943 19.1468 19.0732 19.0314 20.032 18.9715L19.9383 17.4744C18.9582 17.5357 17.7591 17.6575 16.8086 17.9083L17.1914 19.3587ZM10.7252 19.4075C9.71727 18.8702 8.3617 18.2171 7.19136 17.9083L6.80864 19.3587C7.8012 19.6206 9.0286 20.2029 10.0196 20.7312L10.7252 19.4075ZM7.19136 17.9083C6.24092 17.6575 5.04176 17.5357 4.06168 17.4744L3.96804 18.9715C4.9268 19.0314 6.00566 19.1468 6.80864 19.3587L7.19136 17.9083ZM21.25 16.1437C21.25 16.8295 20.6817 17.4279 19.9383 17.4744L20.032 18.9715C21.5062 18.8793 22.75 17.6799 22.75 16.1437H21.25ZM22.75 4.93332C22.75 3.47001 21.5847 2.21507 20.0559 2.26832L20.1081 3.76741C20.7229 3.746 21.25 4.25173 21.25 4.93332H22.75ZM1.25 16.1437C1.25 17.6799 2.49378 18.8793 3.96804 18.9715L4.06168 17.4744C3.31831 17.4279 2.75 16.8295 2.75 16.1437H1.25ZM13.2748 19.4075C12.4825 19.8299 11.5175 19.8299 10.7252 19.4075L10.0196 20.7312C11.2529 21.3886 12.7471 21.3886 13.9804 20.7312L13.2748 19.4075ZM13.2982 4.15375C12.4801 4.62721 11.4617 4.65083 10.6328 4.21257L9.93167 5.5386C11.2239 6.22189
 12.791 6.18037 14.0495 5.452L13.2982 4.15375ZM2.75 4.99792C2.75 4.30074 3.30243 3.78463 3.93639 3.8236L4.02841 2.32642C2.47017 2.23065 1.25 3.49877 1.25 4.99792H2.75Z" fill="var(--dark-color)"/>
<path d="M12 5.854V20.9999" stroke="var(--dark-color)" stroke-width="1.5"/>
<path d="M5 9L9 10" stroke="var(--dark-color)" stroke-width="1.5" stroke-linecap="round"/>
<path d="M19 9L15 10" stroke="var(--dark-color)" stroke-width="1.5" stroke-linecap="round"/>
<path d="M5 13L9 14" stroke="var(--dark-color)" stroke-width="1.5" stroke-linecap="round"/>
<path d="M19 13L15 14" stroke="var(--dark-color)" stroke-width="1.5" stroke-linecap="round"/>
</svg>
          <div class="advh">Широкий ассортимент</div>
            <div class="adv-caption">Предлагаем разнообразные изделия для строительных задач, обеспечивая все необходимое для успешного проекта.
            </div>

          </div>
          <div class="advantage">
          <svg width="75px" height="75px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="6" r="4" stroke="var(--dark-color)" stroke-width="1.5"/>
<path d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" stroke="var(--dark-color)" stroke-width="1.5"/>
</svg>
          <div class="advh"> Индивидуальный подход</div>
            <div class="adv-caption"> Разрабатываем изделия по вашим требованиям и проектам, уважая уникальность каждого клиента.
            </div>

          </div>
          <div class="advantage">
          <svg width="75px" height="75px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 5.25732C2 3.45835 3.567 2 5.5 2C7.433 2 9 3.45835 9 5.25732C9 7.04219 7.88292 9.12496 6.14003 9.86978C5.73374 10.0434 5.26626 10.0434 4.85997 9.86978C3.11708 9.12496 2 7.04219 2 5.25732Z" stroke="var(--dark-color)" stroke-width="1.5"/>
<path d="M15 17.2573C15 15.4584 16.567 14 18.5 14C20.433 14 22 15.4584 22 17.2573C22 19.0422 20.8829 21.125 19.14 21.8698C18.7337 22.0434 18.2663 22.0434 17.86 21.8698C16.1171 21.125 15 19.0422 15 17.2573Z" stroke="var(--dark-color)" stroke-width="1.5"/>
<path d="M18.5 17.5H18.509" stroke="var(--dark-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.49072 5.5H5.49972" stroke="var(--dark-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0002 4.25C11.586 4.25 11.2502 4.58579 11.2502 5C11.2502 5.41421 11.586 5.75 12.0002 5.75V4.25ZM12.0002 19L12.5305 19.5303C12.8234 19.2374 12.8234 18.7626 12.5305 18.4697L12.0002 19ZM17.2059 8.68732L17.6085 9.32007L17.2059 8.68732ZM6.79459 15.3127L7.19725 15.9454H7.19725L6.79459 15.3127ZM11.0305 16.9697C10.7377 16.6768 10.2628 16.6768 9.96989 16.9697C9.67699 17.2626 9.67699 17.7374 9.96989 18.0303L11.0305 16.9697ZM9.96989 19.9697C9.67699 20.2626 9.67699 20.7374 9.96989 21.0303C10.2628 21.3232 10.7377 21.3232 11.0305 21.0303L9.96989 19.9697ZM16.1321 4.25H12.0002V5.75H16.1321V4.25ZM12.0002 18.25H7.86833V19.75H12.0002V18.25ZM16.8032 8.05458L6.39193 14.6799L7.19725 15.9454L17.6085 9.32007L16.8032 8.05458ZM12.5305 18.4697L11.0305 16.9697L9.96989 18.0303L11.4699 19.5303L12.5305 18.4697ZM11.4699 18.4697L9.96989 19.9697L11.0305 21.0303L12.5305 19.5303L11.4699 18.4697ZM7.86833 18.25C6.61778 18.25 6.14219 16.6168 7.19725 15.9454L6.39193 14.6799C4.07083 16.157 5.11709 19.75 7.86833 19.75V18.25ZM16.1321 5.75C17.3827 5.75 17.8582 7.38318 16.8032 8.05458L17.6085 9.32007C19.9296 7.843 18.8833 4.25 16.1321 4.25V5.75Z" fill="var(--dark-color)"/>
</svg>
          <div class="advh">Быстрая доставка</div>
            <div class="adv-caption">Оперативная доставка продукции на строительную площадку, минимизация времени ожидания.
            </div>

          </div>
          <div class="advantage">
          <svg width="75px" height="75px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 8V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V8" stroke="var(--dark-color)" stroke-width="1.5"/>
<path d="M10.5636 5.78311C11.4588 5.29495 12.5407 5.29495 13.436 5.78311L18.2302 8.39728C19.1942 8.92292 19.794 9.93319 19.794 11.0312V15.9688C19.794 17.0668 19.1942 18.0771 18.2302 18.6027L13.436 21.2169C12.5407 21.705 11.4588 21.705 10.5636 21.2169L5.76937 18.6027C4.80539 18.0771 4.20557 17.0668 4.20557 15.9688V11.0312C4.20557 9.93318 4.80539 8.92292 5.76937 8.39728L10.5636 5.78311Z" stroke="var(--dark-color)" stroke-width="1.5"/>
<path d="M11.1459 11.5228C11.5259 10.8411 11.7159 10.5002 12 10.5002C12.2841 10.5002 12.4741 10.8411 12.8541 11.5228L12.9524 11.6991C13.0603 11.8928 13.1143 11.9897 13.1985 12.0536C13.2827 12.1175 13.3875 12.1412 13.5972 12.1887L13.7881 12.2319C14.526 12.3988 14.895 12.4823 14.9828 12.7646C15.0706 13.0468 14.819 13.341 14.316 13.9292L14.1858 14.0814C14.0429 14.2486 13.9714 14.3322 13.9392 14.4356C13.9071 14.539 13.9179 14.6505 13.9395 14.8735L13.9592 15.0766C14.0352 15.8614 14.0733 16.2539 13.8435 16.4283C13.6136 16.6028 13.2682 16.4437 12.5773 16.1256L12.3986 16.0433C12.2022 15.9529 12.1041 15.9077 12 15.9077C11.8959 15.9077 11.7978 15.9529 11.6014 16.0433L11.4227 16.1256C10.7318 16.4437 10.3864 16.6028 10.1565 16.4283C9.92674 16.2539 9.96476 15.8614 10.0408 15.0766L10.0605 14.8735C10.0821 14.6505 10.0929 14.539 10.0608 14.4356C10.0286 14.3322 9.95713 14.2486 9.81418 14.0814L9.68403 13.9292C9.18097 13.341 8.92945 13.0468 9.01723 12.7646C9.10501 12.4823 9.47396 12.3988 10.2119 12.2319L10.4028 12.1887C10.6125 12.1412 10.7173 12.1175 10.8015 12.0536C10.8857 11.9897 10.9397 11.8928 11.0476 11.6991L11.1459 11.5228Z" stroke="var(--dark-color)" stroke-width="1.5"/>
</svg>
          <div class="advh">Профессионализм сотрудников</div>
            <div class="adv-caption">Специалисты с обширным опытом работы с железобетоном помогут выбрать оптимальное решение для проекта.</div>

          </div>
          <div class="advantage">
          <svg width="75px" height="75px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.755 2H7.24502C6.08614 2 5.50671 2 5.03939 2.16261C4.15322 2.47096 3.45748 3.18719 3.15795 4.09946C3 4.58055 3 5.17705 3 6.37006V20.3742C3 21.2324 3.985 21.6878 4.6081 21.1176C4.97417 20.7826 5.52583 20.7826 5.8919 21.1176L6.375 21.5597C7.01659 22.1468 7.98341 22.1468 8.625 21.5597C9.26659 20.9726 10.2334 20.9726 10.875 21.5597C11.5166 22.1468 12.4834 22.1468 13.125 21.5597C13.7666 20.9726 14.7334 20.9726 15.375 21.5597C16.0166 22.1468 16.9834 22.1468 17.625 21.5597L18.1081 21.1176C18.4742 20.7826 19.0258 20.7826 19.3919 21.1176C20.015 21.6878 21 21.2324 21 20.3742V6.37006C21 5.17705 21 4.58055 20.842 4.09946C20.5425 3.18719 19.8468 2.47096 18.9606 2.16261C18.4933 2 17.9139 2 16.755 2Z" stroke="var(--dark-color)" stroke-width="1.5"/>
<path d="M10.5 11L17 11" stroke="var(--dark-color)" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7 11H7.5" stroke="var(--dark-color)" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7 7.5H7.5" stroke="var(--dark-color)" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7 14.5H7.5" stroke="var(--dark-color)" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10.5 7.5H17" stroke="var(--dark-color)" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10.5 14.5H17" stroke="var(--dark-color)" stroke-width="1.5" stroke-linecap="round"/>
</svg>
          <div class="advh"> Ценовая доступность</div>
            <div class="adv-caption"> Доступные цены без ущерба качеству, стремление к взаимовыгодному сотрудничеству.</div>

          </div>


        </div>

      </div>
      




      <div class="cards-wrapper">
      <div class="cards"> 
      
      
      <div class="card" onClick={()=>setModalActive(1)}>
      <div class="card-image-container">
      <Image className='cardImage' src={kolonni}></Image>

      </div>
      <p class="card-title">Колонны</p>
      <p class="card-des">
      Колонны - это вертикальные железобетонные элементы, предназначенные для поддержания перекрытий или других конструкций зданий. Они обеспечивают необходимую жесткость и устойчивость конструкции, а также распределяют нагрузку от верхних этажей на фундамент. 
      </p>
    </div>


    <div class="card" onClick={()=>setModalActive(2)}>
      <div class="card-image-container">
      <Image className='cardImage' src={kolca}></Image>

      </div>
      <p class="card-title">Кольца бетонные</p>
      <p class="card-des">
      Кольца бетонные - это круглые железобетонные элементы, используемые для создания колодцев, канализационных систем или других инженерных сооружений. Они обеспечивают прочность и герметичность сооружений, а также служат для укрепления и защиты трубопроводов.      </p>
    </div>

    <div class="card"onClick={()=>setModalActive(3)}>
      <div class="card-image-container">
      <Image className='cardImage' src={lotki}></Image>

      </div>
      <p class="card-title">Лотки</p>
      <p class="card-des">
      Лотки - это горизонтальные железобетонные элементы, применяемые для прокладки кабелей, труб или других коммуникаций под землей. Они обеспечивают защиту и укладку коммуникаций, а также обеспечивают устойчивость и долговечность инженерных систем.
      </p>
    </div>
    <div class="card" onClick={()=>setModalActive(4)}>
      <div class="card-image-container">
      <Image className='cardImage' src={perekritia}></Image>

      </div>
      <p class="card-title" >Перекрытия</p>
      <p class="card-des">
      Перекрытия - это горизонтальные железобетонные плиты, устанавливаемые между этажами зданий для создания перекрытий. Они обеспечивают несущую способность и жесткость конструкции здания, а также служат для равномерного распределения нагрузки от верхних этажей.      </p>
    </div>

    <div class="card"  onClick={()=>setModalActive(5)}>
      <div class="card-image-container">
      <Image className='cardImage' src={plitidor}></Image>

      </div>
      <p class="card-title">Плиты дорожные</p>
      <p class="card-des">
      Плиты дорожные - это железобетонные элементы, используемые для укладки на дорожных покрытиях с целью укрепления и увеличения прочности. Они обеспечивают долговечность и устойчивость дорожного покрытия, а также защищают его от воздействия внешних факторов.     
       </p>
    </div>

    <div class="card" onClick={()=>setModalActive(6)}>
      <div class="card-image-container">
      <Image className='cardImage' src={plitidnish}></Image>

      </div>
      <p class="card-title" >Плиты днищ</p>
      <p class="card-des">
      Плиты днищ - это железобетонные элементы, предназначенные для укрепления днищ резервуаров, колодцев или других емкостей. Они обеспечивают прочность и герметичность днищ сооружений, а также защищают их от разрушения и коррозии.
      </p>
    </div>

    <div class="card" onClick={()=>setModalActive(7)}>
      <div class="card-image-container">
      <Image className='cardImage' src={plitiperekritia}></Image>

      </div>
      <p class="card-title" >Плиты перекрытия</p>
      <p class="card-des">
      Плиты перекрытия - это горизонтальные железобетонные элементы, устанавливаемые между стенами зданий для создания перекрытий. Они обеспечивают несущую способность и жесткость конструкции здания, а также служат для равномерного распределения нагрузки от верхних этажей.
      </p>
    </div>

    <div class="card"onClick={()=>setModalActive(8)}>
      <div class="card-image-container">
      <Image className='cardImage' src={stenpanel}></Image>

      </div>
      <p class="card-title" >Стеновые панели</p>
      <p class="card-des">
      Стеновые панели - это вертикальные железобетонные элементы, используемые для возведения стен зданий. Они обеспечивают несущую способность и устойчивость стен здания, а также служат для создания внешнего облицовочного слоя.      </p>
    </div>
    <div class="card" onClick={()=>setModalActive(9)}>
      <div class="card-image-container">
      <Image className='cardImage' src={fundament}></Image>

      </div>
      <p class="card-title" >Фундамент</p>
      <p class="card-des">
      Фундамент - это железобетонная конструкция, служащая для распределения нагрузки от здания на грунт и обеспечения его устойчивости. Фундаменты обеспечивают надежное закрепление здания на грунте и защищают его от деформаций и оседаний.
      </p>
    </div>
    <div class="card" onClick={()=>setModalActive(10)}>
      <div class="card-image-container">
      <Image className='cardImage' src={peremichki}></Image>

      </div>
      <p class="card-title" >Перемычки</p>
      <p class="card-des">
      Перемычки - это горизонтальные железобетонные элементы, устанавливаемые для укрепления отдельных частей здания или сооружения. Они обеспечивают необходимую жесткость и прочность конструкции, а также служат для равномерного распределения нагрузки.      </p>
    </div>
    <div class="card"onClick={()=>setModalActive(11)}>
      <div class="card-image-container">
      <Image className='cardImage' src={stolbi}></Image>

      </div>
      <p class="card-title" >Столбы заборные</p>
      <p class="card-des">
      Столбы заборные - это вертикальные железобетонные элементы, используемые для поддержания заборов или ограждений. Они обеспечивают необходимую устойчивость и прочность заборной конструкции, а также служат для создания опорной основы.      </p>
    </div>
    <div class="card" onClick={()=>setModalActive(12)}>
      <div class="card-image-container">
      <Image className='cardImage' src={trubi}></Image>

      </div>
      <p class="card-title" >Трубы железобетонные</p>
      <p class="card-des">
      Трубы железобетонные - это цилиндрические железобетонные элементы, применяемые для прокладки канализационных или водопроводных систем. Они обеспечивают прочность и герметичность трубопроводов, а также защищают их от воздействия внешних факторов.      </p>
    </div>
    <div class="card" onClick={()=>setModalActive(13)}>
      <div class="card-image-container">
      <Image className='cardImage' src={fundBloki}></Image>

      </div>
      <p class="card-title" >Фундаметные блоки</p>
      <p class="card-des">
      Фундаментные блоки - это железобетонные блоки, используемые для возведения фундамента зданий или сооружений. Они обеспечивают надежное закрепление конструкции на грунте, а также защищают ее от деформаций и оседаний.      </p>
    </div>
    <div class="card" onClick={()=>setModalActive(14)}>
      <div class="card-image-container">
      <Image className='cardImage' src={bordur}></Image>

      </div>
      <p class="card-title" >Бордюрные камни</p>
      <p class="card-des">
      Бордюрные камни - это железобетонные элементы, укладываемые на краях дорог или тротуаров для разделения проезжей части и пешеходной зоны. Они обеспечивают безопасность движения транспорта и пешеходов, а также служат для организации пространства дорожного покрытия.      </p>
    </div>
    <div></div> 
    <div></div>
    <div class="card-last">
    
      
      <p class="card-title-last"><a class="catLink" href="/price.xlsx"  download>Полный каталог</a></p>
     
    </div>
    </div>

    
    







      </div>
      <div class="our-clients"><p class="hClients">Наши клиенты</p> <Image className='clients-image' src={ourClients}></Image> </div>

      <div class="zakaz">


      <Image className='order-image'  src={order} />
      <div class="hzakaz">Изготовление изделий  по вашим чертежам</div>
      <div class="caption-zakaz">Для этого нужно предоставить:<br/>
-чертежи или эскизы изделия;<br/>
-характеристики материала;<br/>
-информацию о назначении изделия.</div>


      </div>


<div class="ymap-wrapper">
      <div class="ymap">
      <YMaps  >     
      <Map   width={800} height={550} 
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
<div class="mtext">
<div class="mheader">АО УЗЖБИ "Эколог" БСНС</div>

Телефон:<br/> 
<div><a class="contacts" href="tel:+73472767734">+7 (347) 276-77-34</a></div>
<div ><a class="contacts" href="tel:+73472715529">+7 (347) 271-55-29</a> (факс)</div>
<div >E-mail: <a class="contacts" href="mailto:zhbz_ufa@mail.ru">zhbz_ufa@mail.ru</a>

</div>Адрес: <a class="contacts" href="https://yandex.ru/maps/-/CDv-NGl4">г. Уфа, ул. Силикатная, 7</a>
</div>

</div> 
</div>
<div class="parallax">
  
</div>

      <footer></footer>
      
   
 


    
      
      </body>
      

    );
}
)



export default mainPage