import ServiceItem from "./ServiceItem";


export default function ServiceSection() {
  const services = [
    {id: 1, bgColor: 'rgba(34, 53, 111, 1)', text: 'Годовое ТО'},
    {id: 2, bgColor: 'rgba(0, 82, 193, 1)', text: 'Выравнивание колес'},
    {id: 3, bgColor: 'rgba(118, 181, 139, 1)', text: 'Настройка переключателей'},
  ]
  
  return (
    <section className="services" id="services">
      <div className="services-description">
        <p>
          Приехав к нам однажды, многие наши клиенты становятся 
          постоянными, а часть из них даже друзьями.
        </p>
        <p>
          А также в нашей мастерской можно отремонтировать 
          электросамокат и электровелосипед.
        </p>
      </div>
      <div className="services-items">
        {
          services.map(
            service => <ServiceItem 
                          key={ service.id }
                          bgColor={ service.bgColor }
                          text={ service.text }
                        />
          )
        }
      </div>
    </section>
  )
}