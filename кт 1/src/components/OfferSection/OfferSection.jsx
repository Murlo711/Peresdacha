import dinoImage from '../../media/dino.png'


export default function OfferSection() {
  return (
    <section className="offer" id="about">
      <div className="offer-description">
        <h1>Веломастерская “Велозар”</h1>
        <p>
          Мы, мастера веломастерской «Велозар», как раз 
          те самые счастливые люди, которые смогли 
          превратить свое увлечение и хобби в профессию. 
          Мы сами любим кататься и хотим чтобы Ваш 
          двухколесный друг приносил Вам только радость 
          и удовольствие от езды.
        </p>
      </div>
      <img 
        src={ dinoImage } alt="Dino" 
        className="offer-dino-image"
        width="543" height="533" 
      />
    </section>
  )
}