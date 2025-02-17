import redBike from '../../media/red-bike.png'


export default function DescriptionSection() {
  return (
    <section className="description">
      <div className="description-text">
        <h2>Что мы предлагаем</h2>
        <p>
          В нашей мастерской можно выполнить 
          комплексное техническое обслуживание 
          велосипеда, ремонт и настройку всех его узлов, 
          шиномонтажные работы. Вовремя проведенное 
          ТО велосипеда помогает избежать многих 
          проблем и дорогого ремонта.  
          Все работы выполняем качественно и с душой. 
        </p>
      </div>
      <img src={ redBike } alt="Red Bike" />
    </section>
  )
}