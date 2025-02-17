import rentalBikes from '../../media/rental-bikes.png'


export default function RentalSection() {
  return (
    <section className="rental" id="rental">
      <img src={ rentalBikes } alt="Rental Bikes" />
      <div className="rental-description">
        <h3>Прокат велосипедов</h3>
        <p>
          У нас вы можете взять на прокат 
          хорошо обслуженные и настроенные 
          велосипеды. Как раз мы находимся в 
          прекрасном парке!
        </p>
      </div>
    </section>
  )
}