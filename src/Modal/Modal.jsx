import React, { Component } from 'react'
import "./modal.css"

const Modal=({active, setActive,children})=> {
  const block="asdasdfg";
  switch (active) {
    case 1:
      children=
      <div class="modal-body">
      <div class="modal-header">Колонны</div>
      <div class="modal-desc">
      Колонны - это вертикальные железобетонные элементы, предназначенные для поддержания перекрытий или других конструкций зданий. Они обеспечивают необходимую жесткость и устойчивость конструкции, а также распределяют нагрузку от верхних этажей на фундамент.
      </div>
      <table class="tableizer-table">
<thead><tr class="tableizer-firstrow"><th>Номенклатура</th><th>объем</th><th>Марка бетона</th><th>цена за 1 шт</th><th>цена за куб.м</th></tr></thead><tbody>
 <tr><td>КС 7-6</td><td>0,1</td><td>В15</td><td>2 139 ₽</td><td>21 394 ₽</td></tr>
 <tr><td>КС 7-9</td><td>0,15</td><td>В15</td><td>2 961 ₽</td><td>19 740 ₽</td></tr>
 <tr><td>КС 10-6</td><td>0,16</td><td>В15</td><td>3 032 ₽</td><td>18 949 ₽</td></tr>
 <tr><td>КС 10-9</td><td>0,24</td><td>В15</td><td>4 522 ₽</td><td>18 843 ₽</td></tr>
 <tr><td>КС 15-6</td><td>0,27</td><td>В15</td><td>4 934 ₽</td><td>18 276 ₽</td></tr>
 <tr><td>КС 15-9</td><td>0,4</td><td>В15</td><td>7 282 ₽</td><td>18 205 ₽</td></tr>
 <tr><td>КС 20-6</td><td>0,39</td><td>В15</td><td>7 684 ₽</td><td>19 703 ₽</td></tr>
 <tr><td>КС 20-9</td><td>0,59</td><td>В15</td><td>11 639 ₽</td><td>19 727 ₽</td></tr>
</tbody></table>       </div>;
      break;
    case 2:
      children=
      <div class="modal-body">
      <div class="modal-header">Кольца бетонные</div>
      <div class="modal-desc">
      Кольца бетонные - это круглые железобетонные элементы, используемые для создания колодцев, канализационных систем или других инженерных сооружений. Они обеспечивают прочность и герметичность сооружений, а также служат для укрепления и защиты трубопроводов.

      </div>
      
	 

<table class="tableizer-table">
<thead><tr class="tableizer-firstrow"><th>Номенклатура</th><th>объем</th><th>Марка бетона</th><th>цена за 1 шт</th><th>цена за куб.м</th></tr></thead><tbody>
 <tr><td>КС 7-6</td><td>0,1</td><td>В15</td><td>2 139 ₽</td><td>21 394 ₽</td></tr>
 <tr><td>КС 7-9</td><td>0,15</td><td>В15</td><td>2 961 ₽</td><td>19 740 ₽</td></tr>
 <tr><td>КС 10-6</td><td>0,16</td><td>В15</td><td>3 032 ₽</td><td>18 949 ₽</td></tr>
 <tr><td>КС 10-9</td><td>0,24</td><td>В15</td><td>4 522 ₽</td><td>18 843 ₽</td></tr>
 <tr><td>КС 15-6</td><td>0,27</td><td>В15</td><td>4 934 ₽</td><td>18 276 ₽</td></tr>
 <tr><td>КС 15-9</td><td>0,4</td><td>В15</td><td>7 282 ₽</td><td>18 205 ₽</td></tr>
 <tr><td>КС 20-6</td><td>0,39</td><td>В15</td><td>7 684 ₽</td><td>19 703 ₽</td></tr>
 <tr><td>КС 20-9</td><td>0,59</td><td>В15</td><td>11 639 ₽</td><td>19 727 ₽</td></tr>
</tbody></table>      </div>;
      break;
      break;
    case 3:
      children=
      <div class="modal-body">
      <div class="modal-header">Лотки</div>
      <div class="modal-desc">
      Лотки - это горизонтальные железобетонные элементы, применяемые для прокладки кабелей, труб или других коммуникаций под землей. Они обеспечивают защиту и укладку коммуникаций, а также обеспечивают устойчивость и долговечность инженерных систем.
      </div>
      <table class="tableizer-table">
<thead><tr class="tableizer-firstrow"><th>Номенклатура</th><th>объем</th><th>Марка бетона</th><th>цена за 1 шт</th><th>цена за куб.м</th></tr></thead><tbody>
 <tr><td>КС 7-6</td><td>0,1</td><td>В15</td><td>2 139 ₽</td><td>21 394 ₽</td></tr>
 <tr><td>КС 7-9</td><td>0,15</td><td>В15</td><td>2 961 ₽</td><td>19 740 ₽</td></tr>
 <tr><td>КС 10-6</td><td>0,16</td><td>В15</td><td>3 032 ₽</td><td>18 949 ₽</td></tr>
 <tr><td>КС 10-9</td><td>0,24</td><td>В15</td><td>4 522 ₽</td><td>18 843 ₽</td></tr>
 <tr><td>КС 15-6</td><td>0,27</td><td>В15</td><td>4 934 ₽</td><td>18 276 ₽</td></tr>
 <tr><td>КС 15-9</td><td>0,4</td><td>В15</td><td>7 282 ₽</td><td>18 205 ₽</td></tr>
 <tr><td>КС 20-6</td><td>0,39</td><td>В15</td><td>7 684 ₽</td><td>19 703 ₽</td></tr>
 <tr><td>КС 20-9</td><td>0,59</td><td>В15</td><td>11 639 ₽</td><td>19 727 ₽</td></tr>
</tbody></table>       </div>;
      break;
      case 4:
        children=
        <div class="modal-body">
        <div class="modal-header">Перекрытия</div>
        <div class="modal-desc">
        Перекрытия - это горизонтальные железобетонные плиты, устанавливаемые между этажами зданий для создания перекрытий. Они обеспечивают несущую способность и жесткость конструкции здания, а также служат для равномерного распределения нагрузки от верхних этажей.      
        </div>
        <table class="tableizer-table">
  <thead><tr class="tableizer-firstrow"><th>Номенклатура</th><th>объем</th><th>Марка бетона</th><th>цена за 1 шт</th><th>цена за куб.м</th></tr></thead><tbody>
   <tr><td>КС 7-6</td><td>0,1</td><td>В15</td><td>2 139 ₽</td><td>21 394 ₽</td></tr>
   <tr><td>КС 7-9</td><td>0,15</td><td>В15</td><td>2 961 ₽</td><td>19 740 ₽</td></tr>
   <tr><td>КС 10-6</td><td>0,16</td><td>В15</td><td>3 032 ₽</td><td>18 949 ₽</td></tr>
   <tr><td>КС 10-9</td><td>0,24</td><td>В15</td><td>4 522 ₽</td><td>18 843 ₽</td></tr>
   <tr><td>КС 15-6</td><td>0,27</td><td>В15</td><td>4 934 ₽</td><td>18 276 ₽</td></tr>
   <tr><td>КС 15-9</td><td>0,4</td><td>В15</td><td>7 282 ₽</td><td>18 205 ₽</td></tr>
   <tr><td>КС 20-6</td><td>0,39</td><td>В15</td><td>7 684 ₽</td><td>19 703 ₽</td></tr>
   <tr><td>КС 20-9</td><td>0,59</td><td>В15</td><td>11 639 ₽</td><td>19 727 ₽</td></tr>
  </tbody></table>       </div>;
        break;
        case 5:
        children=
        <div class="modal-body">
        <div class="modal-header">Плиты дорожные</div>
        <div class="modal-desc">
        Плиты дорожные - это железобетонные элементы, используемые для укладки на дорожных покрытиях с целью укрепления и увеличения прочности. Они обеспечивают долговечность и устойчивость дорожного покрытия, а также защищают его от воздействия внешних факторов.     
        </div>
        <table class="tableizer-table">
  <thead><tr class="tableizer-firstrow"><th>Номенклатура</th><th>объем</th><th>Марка бетона</th><th>цена за 1 шт</th><th>цена за куб.м</th></tr></thead><tbody>
   <tr><td>КС 7-6</td><td>0,1</td><td>В15</td><td>2 139 ₽</td><td>21 394 ₽</td></tr>
   <tr><td>КС 7-9</td><td>0,15</td><td>В15</td><td>2 961 ₽</td><td>19 740 ₽</td></tr>
   <tr><td>КС 10-6</td><td>0,16</td><td>В15</td><td>3 032 ₽</td><td>18 949 ₽</td></tr>
   <tr><td>КС 10-9</td><td>0,24</td><td>В15</td><td>4 522 ₽</td><td>18 843 ₽</td></tr>
   <tr><td>КС 15-6</td><td>0,27</td><td>В15</td><td>4 934 ₽</td><td>18 276 ₽</td></tr>
   <tr><td>КС 15-9</td><td>0,4</td><td>В15</td><td>7 282 ₽</td><td>18 205 ₽</td></tr>
   <tr><td>КС 20-6</td><td>0,39</td><td>В15</td><td>7 684 ₽</td><td>19 703 ₽</td></tr>
   <tr><td>КС 20-9</td><td>0,59</td><td>В15</td><td>11 639 ₽</td><td>19 727 ₽</td></tr>
  </tbody></table>       </div>;
        break;
        case 6:
        children=
        <div class="modal-body">
        <div class="modal-header">Плиты днищ </div>
        <div class="modal-desc">
        Плиты днищ - это железобетонные элементы, предназначенные для укрепления днищ резервуаров, колодцев или других емкостей. Они обеспечивают прочность и герметичность днищ сооружений, а также защищают их от разрушения и коррозии.
        </div>
        <table class="tableizer-table">
  <thead><tr class="tableizer-firstrow"><th>Номенклатура</th><th>объем</th><th>Марка бетона</th><th>цена за 1 шт</th><th>цена за куб.м</th></tr></thead><tbody>
   <tr><td>КС 7-6</td><td>0,1</td><td>В15</td><td>2 139 ₽</td><td>21 394 ₽</td></tr>
   <tr><td>КС 7-9</td><td>0,15</td><td>В15</td><td>2 961 ₽</td><td>19 740 ₽</td></tr>
   <tr><td>КС 10-6</td><td>0,16</td><td>В15</td><td>3 032 ₽</td><td>18 949 ₽</td></tr>
   <tr><td>КС 10-9</td><td>0,24</td><td>В15</td><td>4 522 ₽</td><td>18 843 ₽</td></tr>
   <tr><td>КС 15-6</td><td>0,27</td><td>В15</td><td>4 934 ₽</td><td>18 276 ₽</td></tr>
   <tr><td>КС 15-9</td><td>0,4</td><td>В15</td><td>7 282 ₽</td><td>18 205 ₽</td></tr>
   <tr><td>КС 20-6</td><td>0,39</td><td>В15</td><td>7 684 ₽</td><td>19 703 ₽</td></tr>
   <tr><td>КС 20-9</td><td>0,59</td><td>В15</td><td>11 639 ₽</td><td>19 727 ₽</td></tr>
  </tbody></table>       </div>;
        break;
        case 7:
        children=
        <div class="modal-body">
        <div class="modal-header">Плиты перекрытия</div>
        <div class="modal-desc">
        Плиты перекрытия - это горизонтальные железобетонные элементы, устанавливаемые между стенами зданий для создания перекрытий. Они обеспечивают несущую способность и жесткость конструкции здания, а также служат для равномерного распределения нагрузки от верхних этажей.
        </div>
        <table class="tableizer-table">
  <thead><tr class="tableizer-firstrow"><th>Номенклатура</th><th>объем</th><th>Марка бетона</th><th>цена за 1 шт</th><th>цена за куб.м</th></tr></thead><tbody>
   <tr><td>КС 7-6</td><td>0,1</td><td>В15</td><td>2 139 ₽</td><td>21 394 ₽</td></tr>
   <tr><td>КС 7-9</td><td>0,15</td><td>В15</td><td>2 961 ₽</td><td>19 740 ₽</td></tr>
   <tr><td>КС 10-6</td><td>0,16</td><td>В15</td><td>3 032 ₽</td><td>18 949 ₽</td></tr>
   <tr><td>КС 10-9</td><td>0,24</td><td>В15</td><td>4 522 ₽</td><td>18 843 ₽</td></tr>
   <tr><td>КС 15-6</td><td>0,27</td><td>В15</td><td>4 934 ₽</td><td>18 276 ₽</td></tr>
   <tr><td>КС 15-9</td><td>0,4</td><td>В15</td><td>7 282 ₽</td><td>18 205 ₽</td></tr>
   <tr><td>КС 20-6</td><td>0,39</td><td>В15</td><td>7 684 ₽</td><td>19 703 ₽</td></tr>
   <tr><td>КС 20-9</td><td>0,59</td><td>В15</td><td>11 639 ₽</td><td>19 727 ₽</td></tr>
  </tbody></table>       </div>;
        break;
        case 8:
        children=
        <div class="modal-body">
        <div class="modal-header">Стеновые панели</div>
        <div class="modal-desc">
        Стеновые панели - это вертикальные железобетонные элементы, используемые для возведения стен зданий. Они обеспечивают несущую способность и устойчивость стен здания, а также служат для создания внешнего облицовочного слоя.      
        </div>
        <table class="tableizer-table">
  <thead><tr class="tableizer-firstrow"><th>Номенклатура</th><th>объем</th><th>Марка бетона</th><th>цена за 1 шт</th><th>цена за куб.м</th></tr></thead><tbody>
   <tr><td>КС 7-6</td><td>0,1</td><td>В15</td><td>2 139 ₽</td><td>21 394 ₽</td></tr>
   <tr><td>КС 7-9</td><td>0,15</td><td>В15</td><td>2 961 ₽</td><td>19 740 ₽</td></tr>
   <tr><td>КС 10-6</td><td>0,16</td><td>В15</td><td>3 032 ₽</td><td>18 949 ₽</td></tr>
   <tr><td>КС 10-9</td><td>0,24</td><td>В15</td><td>4 522 ₽</td><td>18 843 ₽</td></tr>
   <tr><td>КС 15-6</td><td>0,27</td><td>В15</td><td>4 934 ₽</td><td>18 276 ₽</td></tr>
   <tr><td>КС 15-9</td><td>0,4</td><td>В15</td><td>7 282 ₽</td><td>18 205 ₽</td></tr>
   <tr><td>КС 20-6</td><td>0,39</td><td>В15</td><td>7 684 ₽</td><td>19 703 ₽</td></tr>
   <tr><td>КС 20-9</td><td>0,59</td><td>В15</td><td>11 639 ₽</td><td>19 727 ₽</td></tr>
  </tbody></table>       </div>;
        break;
        case 9:
        children=
        <div class="modal-body">
        <div class="modal-header">Фундамент</div>
        <div class="modal-desc">
        Фундамент - это железобетонная конструкция, служащая для распределения нагрузки от здания на грунт и обеспечения его устойчивости. Фундаменты обеспечивают надежное закрепление здания на грунте и защищают его от деформаций и оседаний.
        </div>
        <table class="tableizer-table">
  <thead><tr class="tableizer-firstrow"><th>Номенклатура</th><th>объем</th><th>Марка бетона</th><th>цена за 1 шт</th><th>цена за куб.м</th></tr></thead><tbody>
   <tr><td>КС 7-6</td><td>0,1</td><td>В15</td><td>2 139 ₽</td><td>21 394 ₽</td></tr>
   <tr><td>КС 7-9</td><td>0,15</td><td>В15</td><td>2 961 ₽</td><td>19 740 ₽</td></tr>
   <tr><td>КС 10-6</td><td>0,16</td><td>В15</td><td>3 032 ₽</td><td>18 949 ₽</td></tr>
   <tr><td>КС 10-9</td><td>0,24</td><td>В15</td><td>4 522 ₽</td><td>18 843 ₽</td></tr>
   <tr><td>КС 15-6</td><td>0,27</td><td>В15</td><td>4 934 ₽</td><td>18 276 ₽</td></tr>
   <tr><td>КС 15-9</td><td>0,4</td><td>В15</td><td>7 282 ₽</td><td>18 205 ₽</td></tr>
   <tr><td>КС 20-6</td><td>0,39</td><td>В15</td><td>7 684 ₽</td><td>19 703 ₽</td></tr>
   <tr><td>КС 20-9</td><td>0,59</td><td>В15</td><td>11 639 ₽</td><td>19 727 ₽</td></tr>
  </tbody></table>       </div>;
        break;
        case 10:
        children=
        <div class="modal-body">
        <div class="modal-header">Перемычки</div>
        <div class="modal-desc">
        Перемычки - это горизонтальные железобетонные элементы, устанавливаемые для укрепления отдельных частей здания или сооружения. Они обеспечивают необходимую жесткость и прочность конструкции, а также служат для равномерного распределения нагрузки.      
        </div>
        <table class="tableizer-table">
  <thead><tr class="tableizer-firstrow"><th>Номенклатура</th><th>объем</th><th>Марка бетона</th><th>цена за 1 шт</th><th>цена за куб.м</th></tr></thead><tbody>
   <tr><td>КС 7-6</td><td>0,1</td><td>В15</td><td>2 139 ₽</td><td>21 394 ₽</td></tr>
   <tr><td>КС 7-9</td><td>0,15</td><td>В15</td><td>2 961 ₽</td><td>19 740 ₽</td></tr>
   <tr><td>КС 10-6</td><td>0,16</td><td>В15</td><td>3 032 ₽</td><td>18 949 ₽</td></tr>
   <tr><td>КС 10-9</td><td>0,24</td><td>В15</td><td>4 522 ₽</td><td>18 843 ₽</td></tr>
   <tr><td>КС 15-6</td><td>0,27</td><td>В15</td><td>4 934 ₽</td><td>18 276 ₽</td></tr>
   <tr><td>КС 15-9</td><td>0,4</td><td>В15</td><td>7 282 ₽</td><td>18 205 ₽</td></tr>
   <tr><td>КС 20-6</td><td>0,39</td><td>В15</td><td>7 684 ₽</td><td>19 703 ₽</td></tr>
   <tr><td>КС 20-9</td><td>0,59</td><td>В15</td><td>11 639 ₽</td><td>19 727 ₽</td></tr>
  </tbody></table>       </div>;
        break;
        case 11:
        children=
        <div class="modal-body">
        <div class="modal-header">Столбы заборные</div>
        <div class="modal-desc">
        Столбы заборные - это вертикальные железобетонные элементы, используемые для поддержания заборов или ограждений. Они обеспечивают необходимую устойчивость и прочность заборной конструкции, а также служат для создания опорной основы.      
        </div>
        <table class="tableizer-table">
  <thead><tr class="tableizer-firstrow"><th>Номенклатура</th><th>объем</th><th>Марка бетона</th><th>цена за 1 шт</th><th>цена за куб.м</th></tr></thead><tbody>
   <tr><td>КС 7-6</td><td>0,1</td><td>В15</td><td>2 139 ₽</td><td>21 394 ₽</td></tr>
   <tr><td>КС 7-9</td><td>0,15</td><td>В15</td><td>2 961 ₽</td><td>19 740 ₽</td></tr>
   <tr><td>КС 10-6</td><td>0,16</td><td>В15</td><td>3 032 ₽</td><td>18 949 ₽</td></tr>
   <tr><td>КС 10-9</td><td>0,24</td><td>В15</td><td>4 522 ₽</td><td>18 843 ₽</td></tr>
   <tr><td>КС 15-6</td><td>0,27</td><td>В15</td><td>4 934 ₽</td><td>18 276 ₽</td></tr>
   <tr><td>КС 15-9</td><td>0,4</td><td>В15</td><td>7 282 ₽</td><td>18 205 ₽</td></tr>
   <tr><td>КС 20-6</td><td>0,39</td><td>В15</td><td>7 684 ₽</td><td>19 703 ₽</td></tr>
   <tr><td>КС 20-9</td><td>0,59</td><td>В15</td><td>11 639 ₽</td><td>19 727 ₽</td></tr>
  </tbody></table>       </div>;
        break;
        case 12:
        children=
        <div class="modal-body">
        <div class="modal-header">Трубы железобетонные</div>
        <div class="modal-desc">
        Трубы железобетонные - это цилиндрические железобетонные элементы, применяемые для прокладки канализационных или водопроводных систем. Они обеспечивают прочность и герметичность трубопроводов, а также защищают их от воздействия внешних факторов.      
        </div>
        <table class="tableizer-table">
  <thead><tr class="tableizer-firstrow"><th>Номенклатура</th><th>объем</th><th>Марка бетона</th><th>цена за 1 шт</th><th>цена за куб.м</th></tr></thead><tbody>
   <tr><td>КС 7-6</td><td>0,1</td><td>В15</td><td>2 139 ₽</td><td>21 394 ₽</td></tr>
   <tr><td>КС 7-9</td><td>0,15</td><td>В15</td><td>2 961 ₽</td><td>19 740 ₽</td></tr>
   <tr><td>КС 10-6</td><td>0,16</td><td>В15</td><td>3 032 ₽</td><td>18 949 ₽</td></tr>
   <tr><td>КС 10-9</td><td>0,24</td><td>В15</td><td>4 522 ₽</td><td>18 843 ₽</td></tr>
   <tr><td>КС 15-6</td><td>0,27</td><td>В15</td><td>4 934 ₽</td><td>18 276 ₽</td></tr>
   <tr><td>КС 15-9</td><td>0,4</td><td>В15</td><td>7 282 ₽</td><td>18 205 ₽</td></tr>
   <tr><td>КС 20-6</td><td>0,39</td><td>В15</td><td>7 684 ₽</td><td>19 703 ₽</td></tr>
   <tr><td>КС 20-9</td><td>0,59</td><td>В15</td><td>11 639 ₽</td><td>19 727 ₽</td></tr>
  </tbody></table>       </div>;
        break;
        case 13:
        children=
        <div class="modal-body">
        <div class="modal-header">Фундаментные блоки</div>
        <div class="modal-desc">
        Фундаментные блоки - это железобетонные блоки, используемые для возведения фундамента зданий или сооружений. Они обеспечивают надежное закрепление конструкции на грунте, а также защищают ее от деформаций и оседаний.      
         </div>
        <table class="tableizer-table">
  <thead><tr class="tableizer-firstrow"><th>Номенклатура</th><th>объем</th><th>Марка бетона</th><th>цена за 1 шт</th><th>цена за куб.м</th></tr></thead><tbody>
   <tr><td>КС 7-6</td><td>0,1</td><td>В15</td><td>2 139 ₽</td><td>21 394 ₽</td></tr>
   <tr><td>КС 7-9</td><td>0,15</td><td>В15</td><td>2 961 ₽</td><td>19 740 ₽</td></tr>
   <tr><td>КС 10-6</td><td>0,16</td><td>В15</td><td>3 032 ₽</td><td>18 949 ₽</td></tr>
   <tr><td>КС 10-9</td><td>0,24</td><td>В15</td><td>4 522 ₽</td><td>18 843 ₽</td></tr>
   <tr><td>КС 15-6</td><td>0,27</td><td>В15</td><td>4 934 ₽</td><td>18 276 ₽</td></tr>
   <tr><td>КС 15-9</td><td>0,4</td><td>В15</td><td>7 282 ₽</td><td>18 205 ₽</td></tr>
   <tr><td>КС 20-6</td><td>0,39</td><td>В15</td><td>7 684 ₽</td><td>19 703 ₽</td></tr>
   <tr><td>КС 20-9</td><td>0,59</td><td>В15</td><td>11 639 ₽</td><td>19 727 ₽</td></tr>
  </tbody></table>       </div>;
        break;
        case 14:
        children=
        <div class="modal-body">
        <div class="modal-header">Бордюрные камни</div>
        <div class="modal-desc">
        Бордюрные камни - это железобетонные элементы, укладываемые на краях дорог или тротуаров для разделения проезжей части и пешеходной зоны. Они обеспечивают безопасность движения транспорта и пешеходов, а также служат для организации пространства дорожного покрытия.     
        </div>
        <table class="tableizer-table">
  <thead><tr class="tableizer-firstrow"><th>Номенклатура</th><th>объем</th><th>Марка бетона</th><th>цена за 1 шт</th><th>цена за куб.м</th></tr></thead><tbody>
   <tr><td>КС 7-6</td><td>0,1</td><td>В15</td><td>2 139 ₽</td><td>21 394 ₽</td></tr>
   <tr><td>КС 7-9</td><td>0,15</td><td>В15</td><td>2 961 ₽</td><td>19 740 ₽</td></tr>
   <tr><td>КС 10-6</td><td>0,16</td><td>В15</td><td>3 032 ₽</td><td>18 949 ₽</td></tr>
   <tr><td>КС 10-9</td><td>0,24</td><td>В15</td><td>4 522 ₽</td><td>18 843 ₽</td></tr>
   <tr><td>КС 15-6</td><td>0,27</td><td>В15</td><td>4 934 ₽</td><td>18 276 ₽</td></tr>
   <tr><td>КС 15-9</td><td>0,4</td><td>В15</td><td>7 282 ₽</td><td>18 205 ₽</td></tr>
   <tr><td>КС 20-6</td><td>0,39</td><td>В15</td><td>7 684 ₽</td><td>19 703 ₽</td></tr>
   <tr><td>КС 20-9</td><td>0,59</td><td>В15</td><td>11 639 ₽</td><td>19 727 ₽</td></tr>
  </tbody></table>       </div>;
        break;
       
      
    default:
      children=<div class="modal-body"></div>; 
  }
  
    return (
      <div className={active>0 ? "modal active": "modal"} onClick={()=>setActive(0)}>
        <div className={active>0 ? "modal-content active": "modal-content"}  onClick={e=>e.stopPropagation()}>
            {children}
            


        </div>
        
        </div>
    )
  }


export default Modal