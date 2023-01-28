import React from 'react'
import './Shop.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Shop() {
  return (
    
    <div className='cards'>
        <div class="card">
            <div class="imagecard"><span class="textcard"></span></div>
            <h2 class="titlecard">Pack Terra Bona Family Harvest 2020</h2>
            <span class="pricecard">30.00 €</span>
        </div>
        <div class="card">
            <div class="imagecard1"><span class="textcard"></span></div>
            <h2 class="titlecard">Pack Terra Bona Family Harvest 2020</h2>
            <span class="pricecard">42.50 €</span>
        </div>
        <div class="card">
            <div class="imagecard2"><span class="textcard"></span></div>
            <h2 class="titlecard">Terra Bona All-Colection</h2>
            <span class="pricecard">Esgotado</span>
        </div>
    </div>
  )
}

export default Shop