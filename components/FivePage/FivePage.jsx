import React from 'react'
import FiveNavCard from './FiveNavCard';
import FIvePageCard from './FIvePageCard';

export default function FivePage() {
  return (
    <div className='md:px-20 px-2'>
      <h1 className='text-5xl font-semibold mb-12'>Блог о здоровье</h1>
      <div className='flex items-center gap-4  overflow-scroll scroll'>
        <FiveNavCard title={'COVID'} amount={14} />
        <FiveNavCard title={'Аллергия'} amount={24} />
        <FiveNavCard title={'Лечебная'} amount={124} />
        <FiveNavCard title={'Кишечник'} amount={2} />
        <FiveNavCard title={'Молочница'} amount={14} />
        <FiveNavCard title={'Избыточный'} amount={51} />
        <FiveNavCard title={'Суставы'} amount={123} />
        <FiveNavCard title={'Зрение'} amount={11} />
        <FiveNavCard title={'Подагра'} amount={13} />
        <FiveNavCard title={'Подагра'} amount={13} />
        <FiveNavCard title={'Подагра'} amount={13} />
      </div>

      <div className='h-[30vh] bg-gray-200 flex items-center justify-center mt-12 rounded-3xl'>
        <label className="input input-bordered flex items-center gap-2 w-[90%]">
          <input type="text" className="grow" placeholder="Начинайте писать или введите название товара..." />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
        </label>
      </div>

      <div className='mt-10'>
        <h1 className='text-[20px] font-bold'>Теги</h1>
        <div className='flex items-center flex-wrap gap-6 md:w-[100%]'>
          <div className='fiveActiveCard bg-gray-100 cursor-pointer p-1.5 rounded-3xl'>Производитель</div>
          <div className='fiveActiveCard bg-gray-100 cursor-pointer p-1.5 rounded-3xl'>Кратко о товаре</div>
          <div className='fiveActiveCard bg-gray-100 cursor-pointer p-1.5 rounded-3xl'>Показания</div>
          <div className='fiveActiveCard bg-gray-100 cursor-pointer p-1.5 rounded-3xl'>Как принимать, курс приема и дозировка</div>
          <div className='fiveActiveCard bg-gray-100 cursor-pointer p-1.5 rounded-3xl'>Описание</div>
          <div className='fiveActiveCard bg-gray-100 cursor-pointer p-1.5 rounded-3xl'>Функциональные преимущества </div>
          <div className='fiveActiveCard bg-gray-100 cursor-pointer p-1.5 rounded-3xl'>Условия хранения</div>
          <div className='fiveActiveCard bg-gray-100 cursor-pointer p-1.5 rounded-3xl'>Срок годности</div>
          <div className='fiveActiveCard bg-gray-100 cursor-pointer p-1.5 rounded-3xl'>С Действующее вещество</div>
          <div className='fiveActiveCard bg-gray-100 cursor-pointer p-1.5 rounded-3xl'>Лекарственная форма</div>
        </div>
      </div>

      <div>
        <div className='flex items-start justify-between flex-wrap gap-12 mt-20'>
          <div className='flex flex-col w-[800px] gap-3'>
            <img src="https://darakchi.uz/storage/1e/e6/46/219139/conversions/IMG_2376-xl.jpg" alt="" />
            <h1 className='text-[34px] font-bold'>Активная жизнь без "приливов" - все в ваших руках</h1>
            <div className='flex items-center flex-col gap-4'>
              <h1>С другой стороны рамки и место обучения кадров позволяет оценить значение форм развития. Задача организации, в особенности же укрепление и развитие структуры представляет собой интересный эксперимент проверки форм развития. </h1>
              <h1>Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение существенных финансовых и административных условий. Повседневная практика показывает.</h1>
            </div>
          </div>
          <FIvePageCard />
          <FIvePageCard />
          <FIvePageCard />
          <FIvePageCard />
          <FIvePageCard />
          <FIvePageCard />
          <FIvePageCard />
          <FIvePageCard />
          <FIvePageCard />
          <FIvePageCard />
          <FIvePageCard />
          <FIvePageCard />
          <FIvePageCard />
          <FIvePageCard />
          <FIvePageCard />
          <FIvePageCard />
        </div>
        <div className="join md:px-8 flex items-center md:justify-start justify-center md:bg-gray-100 w-[100%] mt-8">
          <button className="join-item btn bg-white">«</button>
          <button className="join-item btn bg-white">1</button>
          <button className="join-item btn bg-white">2</button>
          <button className="join-item btn bg-white">3</button>
          <button className="join-item btn text-[20px] btn-disabled">...</button>
          <button className="join-item btn bg-white">100</button>
          <button className="join-item btn bg-white">»</button>
        </div>
      </div>
    </div>


  )
}
