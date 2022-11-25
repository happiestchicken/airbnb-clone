import './index.css';
import {Nav} from "./components/nav.js";
import {Main} from "./components/card.js";
import {data} from "./data.js"

export default function App() {

  const cards = data.map(item => {
    return (
      <Main
        // key={item.id}
        // image={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
        // can do it the way above, but doing it in the following way is cleaner when dealing with a lot of different items
        item={item}
        // or could do
        // {...item}
        // this way would not have to include the item part of the reference in the card.js file
        // either way is fine really
      />
    )
  })

  return (
    <div>
      <Nav />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  )
}