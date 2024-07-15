'use client';

import './GameCard.css'
import { useState } from 'react';

function GameCard({entry: entryData}:{entry: Game}) {

const {name, author, categories, description, imgPath, link} = entryData
const [mouseOver, setMouseOver] = useState<boolean>(false)

const handleMouseOver = () => {
    setMouseOver(true)
}
const handleMouseLeave = () => {
    setMouseOver(false)
}

if(!mouseOver) {return (
    
    <div className="game-card" onMouseEnter={handleMouseOver} onFocus={handleMouseOver} onBlur={handleMouseLeave} onMouseLeave={handleMouseLeave} style={{ backgroundImage: `url(${imgPath})` }}>
        <div className='grey-filter'>
      <h3 className='fade-section'>{name}</h3>
        </div>
    </div>

  )
} else {
    return (
        <div className="detail-card " onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} onFocus={handleMouseOver} onBlur={handleMouseLeave} style={{ backgroundImage: `url(${imgPath})` }}>
          <a className='detail-link' target="_blank" href={link}>
          <div className='blue-filter'>
            <div className='fade-section'>
              <div className='detail-section'>
              <h3 className='detail-name'>{name}</h3>
                <h4 className='detail-cata'>
                    {categories.map((category, i) => <span className='catagory-name' key={i}>{category}</span>)}
                </h4>
                <p className='detail-description'>{description}</p>
                <p className='detail-author'>{author}</p>
              </div>
              </div>
            </div>
            </a>

        </div>
    
      ) 
}
}

export default GameCard