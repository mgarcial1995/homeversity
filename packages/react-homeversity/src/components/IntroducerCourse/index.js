import "./styles.sass";
import Cart from '../../assets/img/shopcart.png'
import Star from '../../assets/img/star.svg'
import Book from '../../assets/img/open-book.svg'
import Reloj from '../../assets/img/reloj.svg'
import Close from '../../assets/img/close.png'
import { OpenIntroCourse } from '../../views/Home';
import { useContext, useState, useEffect } from "react";

const IntroducerCourse = ({courseData}) => {
  const { showIntroCourse, setShowIntroCourse } = useContext(OpenIntroCourse);
  useEffect(() => {
    console.log(courseData, "asas")
  }, []);

  let getId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }

  return (
    <div>
      <div className='background_intro_course' onClick={()=>setShowIntroCourse(false)}>
      </div>
      <div className='introducer_course'>
        <div className='introducer_course_video'>
          <iframe className='introducer_course_video_video' src={`//www.youtube.com/embed/${getId(courseData.introducer_video)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
        </div>
        <div className='introducer_course_info'>
          <div className='introducer_course_info_description'>
            <p className='introducer_course_info_description_title'>{courseData.name}</p>
            <p className='introducer_course_info_description_text'>{courseData.description}</p>
          </div>
          <div className='introducer_course_info_data'>
            <div className='introducer_course_info_data_btn'>
              <img className='introducer_course_info_data_btn_img' src={Cart} alt=""></img><p>Comprar: S/.{courseData.price}</p>
            </div>
            <div className='introducer_course_info_data_infodes'>
              <img src={Star} alt=""></img><p>Nivel: {courseData.level}</p>
            </div>
            <div className='introducer_course_info_data_infodes'>
              <img src={Book} alt=""></img><p>{courseData.class.length} módulos</p>
            </div>
            <div className='introducer_course_info_data_infodes'>
              <img src={Reloj} alt=""></img><p>{courseData.hours} horas</p>
            </div>
          </div>
        </div>
        <div className='introducer_course_close'>
          <div onClick={()=>setShowIntroCourse(false)} className='introducer_course_close_btn'>
            <img className='introducer_course_close_btn_img' src={Close} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroducerCourse;
