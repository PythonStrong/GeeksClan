import React from 'react'
import { IoMdTime } from "react-icons/io";
import { FaCircle, FaStar } from "react-icons/fa6";
import SixPageTwo from './SixPageTwo';
import SixPageFour from './SixPageFour';

export default function SixPage() {
  return (
    <div className='md:px-20 px-2'>
      <div>
        <img src="https://img.freepik.com/free-photo/woman-working-pharmacy-wearing-coat_1303-26271.jpg" alt="" className='w-[100%] h-[60vh] rounded-3xl brightness-50' />
        <h1 className='absolute md:text-5xl text-2xl top-64 md:left-36 text-white font-bold'>Оставаться женщиной. Как гормональный баланс <br /> позволяет оставаться молодой и красивой?</h1>
      </div>

      <div className='flex items-center justify-between mt-10 md:flex-row flex-col'>
        <div className='flex items-center'>
          <IoMdTime />
          <h1>10 минут на чтение</h1>
        </div>

        <div>
          <h1 className='font-bold'>Название категории</h1>
        </div>

        <div className='flex items-center flex-wrap gap-6'>
          <div className='fiveActiveCard bg-gray-100 cursor-pointer p-1.5 rounded-3xl'>Производитель</div>
          <div className='fiveActiveCard bg-gray-100 cursor-pointer p-1.5 rounded-3xl'>Кратко о товаре</div>
          <div className='fiveActiveCard bg-gray-100 cursor-pointer p-1.5 rounded-3xl'>Показания</div>
        </div>

        <div className='flex items-center gap-6 md:flex-row flex-col'>
          <h1>Оценок 49</h1>
          <div className='flex text-orange-300'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
          <button className='p-2 rounded-3xl' style={{ border: '1px solid green' }}>Прочитать позже</button>
        </div>
      </div>

      <div className='flex items-center justify-between mt-24 flex-col md:flex-row mb-20'>
        <div className='bg-gray-300 p-10 flex flex-col gap-4 rounded-3xl'>
          <h1 className='text-[20px] font-bold'>Содержание</h1>

          <div className='flex flex-col gap-3'>
            <h1 className='flex items-center gap-4 text-gray-600'><FaCircle />  Посещает подготовительные курсы;</h1>
            <h1 className='flex items-center gap-4 text-gray-600'><FaCircle />  Перенимает и фильтрует информацию;</h1>
            <h1 className='flex items-center gap-4 text-gray-600'><FaCircle />  Чтение книг, просмотры обучающих ;</h1>
            <h1 className='flex items-center gap-4 text-gray-600'><FaCircle />  Занимается физической активностью;</h1>
            <h1 className='flex items-center gap-4 text-gray-600'><FaCircle />  Про последний пункт и будет речь;</h1>
            <h1 className='flex items-center gap-4 text-gray-600'><FaCircle />  Перенимает и фильтрует информацию;</h1>
          </div>
        </div>

        <div className='md:w-[800px] flex flex-col gap-10'>
          <h1 className='text-gray-600'>С другой стороны начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. Повседневная практика показывает, что рамки и место обучения кадров позволяет выполнять важные задания по разработке модели развития другой стороны начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. Повседневная практика показывает, что рамки и место обучения кадров позволяет выполнять важные задания по разработке модели развития. </h1>
          <h1 className='text-gray-600'>Повседневная практика показывает, что консультация с широким активом требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Идейные соображения высшего порядка, а также сложившаяся структура организации представляет собой интересный эксперимент проверки существенных финансовых и административных условий.</h1>
        </div>
      </div>

      <SixPageTwo />
      <SixPageFour />
    </div>
  )
}
