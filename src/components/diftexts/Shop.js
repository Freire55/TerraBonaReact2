import React from 'react'
import './Shop.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Shop() {
  return (
    <div className='container-fluid'>
    <div className='cards row'>
        <div className="card col-ms-4">
            <div className="imagecard"><span className="textcard"></span></div>
            <h2 className="titlecard">Pack Terra Bona Family Harvest 2020</h2>
            <span className="pricecard">30.00 €</span>
        </div>
        <div className="card col-ms-4">
            <div className="imagecard1"><span className="textcard"></span></div>
            <h2 className="titlecard">Pack Terra Bona Family Harvest 2020</h2>
            <span className="pricecard">42.50 €</span>
        </div>
        <div className="card col-ms-4">
            <div className="imagecard2"><span className="textcard"></span></div>
            <h2 className="titlecard">Terra Bona All-Colection</h2>
            <span className="pricecard">Esgotado</span>
        </div>
    </div>
    </div>
  )
}

export default Shop