import "./styles.sass";
import Cart from '../../assets/img/shopcart.png'
import Star from '../../assets/img/star.svg'
import Book from '../../assets/img/open-book.svg'
import Reloj from '../../assets/img/reloj.svg'
import Close from '../../assets/img/close.png'
import { useState } from "react";

const IntroducerCourse = () => {
  return (
    <div className='introducer_course'>
      <div className='introducer_course_video'>
        <iframe className='introducer_course_video_video' src="https://www.youtube.com/embed/zkJ3E9p1urc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className='introducer_course_info'>
        <div className='introducer_course_info_description'>
          <p className='introducer_course_info_description_title'>Diseño y elaboración de circuitos impresos</p>
          <p className='introducer_course_info_description_text'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
        </div>
        <div className='introducer_course_info_data'>
          <div className='introducer_course_info_data_btn'>
            <img className='introducer_course_info_data_btn_img' src={Cart} alt=""></img><p>Comprar: S/.39.90</p>
          </div>
          <div className='introducer_course_info_data_infodes'>
            <img src={Star} alt=""></img><p>Nivel: Intermedio</p>
          </div>
          <div className='introducer_course_info_data_infodes'>
            <img src={Book} alt=""></img><p>5 módulos</p>
          </div>
          <div className='introducer_course_info_data_infodes'>
            <img src={Reloj} alt=""></img><p>28 horas</p>
          </div>
        </div>
      </div>
      <div className='introducer_course_close'>
        <div className='introducer_course_close_btn'>
          <img className='introducer_course_close_btn_img' src={Close} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default IntroducerCourse;
