import React from "react";
import Section from "../Section";
import NavBar from "../NavBar";
import "./Experiences.css";
import Footer from "../Footer";
import { Fade } from "react-reveal";

function Experiences() {
  return (
    <>
      <NavBar />
      <Section
        title="Experiências"
        content="Lorem papspfof asowdpd painoue zixnec eihf  efu fcn"
        backgroundImg="/images/TerraBonaBottle.png"
      />
      <div className="difexp">
        <h1>As Nossas Experiências</h1>
        <div className="stay">
          <div className="expcards container-fluid">
            <h2>WINERY Tasting Moments</h2>
            <div className="cardtext row">
              <Fade left>
                <div className="expcard col-sm-4">
                  <div className="imageexp">
                    <span className="textexp"></span>
                  </div>
                  <h2 className="titleexp"></h2>
                  <span className="priceexp">Oferecido diariamente</span>
                  <span className="priceexp">1 h 30 min</span>
                  <span className="priceexp">30.00 €</span>
                </div>
              </Fade>
              <Fade right>
                <div className="cardcont col-sm-5">
                  <p>
                    Momento para conhecer a nossa Adega e o projecto Terrabona
                    Nature & Vineyards, na nossa companhia, Maria João e Marco
                  </p>

                  <p>
                    Prova dos nossos vinhos: Terra Bona Family Harvest, Heritage
                    Terra Bona French Oak Barrels
                  </p>
                  <p>
                    Degustação de iguarias caseiras e da própria propriedade
                  </p>
                  <p>
                    PREÇO: 30€/pax, com máx. de 12 pax por cada sessão de provas
                  </p>
                  <p>Todos os dias às 11: 30 ou 15:30, com marcação online</p>
                  <button className="book">Book Now</button>
                </div>
              </Fade>
            </div>
            <h2>SAIL&WINE Private Sunset</h2>
            <div className="cardtext row">
              <Fade left>
                <div className="expcard col-sm-4">
                  <div className="imageexp1">
                    <span className="textexp"></span>
                  </div>
                  <h2 className="titleexp"></h2>
                  <span className="priceexp">3 h 30 min</span>
                  <span className="priceexp">A Partir de 250 €</span>
                </div>
              </Fade>
              <Fade right>
                <div className="cardcont col-sm-5">
                  <p>
                    Na nossa companhia, Maria João e Marco, produtores dos
                    vinhos Terra Bona e amantes da vela e do mar
                  </p>
                  <p>
                    Experiência de Vela Mergulhar no oceano atlântico Degustação
                    dos nossos vinhos "All Collection" Acompanhado com iguarias
                    caseiras e regionais
                  </p>
                  <p>Programa sob a nossa marca SAIL4FUN</p>
                  <p>Veleiro: Hanse 400, com 12 metros 3 cabines</p>
                  <p>PREÇO: 250€ / 1 a 2 pax</p>
                  <p>375€ / 3 a 4 pax</p>
                  <br />
                  <p>Das 17:30 às 21:30, todos os dias de 2ª a 6ª feira.</p>
                  <p>Reserva online</p>
                  <button className="book">Book Now</button>
                </div>
              </Fade>
            </div>
            <h2>VINEYARDS Private Moments</h2>
            <div className="cardtext row">
              <Fade left>
                <div className="expcard col-sm-4">
                  <div className="imageexp2">
                    <span className="textexp"></span>
                  </div>
                  <h2 className="titleexp">VINEYARDS Private Moments</h2>
                  <span className="priceexp">2 h</span>
                  <span className="priceexp">A Partir de 90 €</span>
                </div>
              </Fade>
              <Fade right>
                <div className="cardcont col-sm-5">
                  <p>Momento privado nas nossas vinhas</p>
                  <p>
                    Prova dos nossos vinhos: 
                    </p>
                    <p>Terra Bona Family Harvest and Heritage
                    Terra Bona French Oak Barrels
                  </p>
                  <p>
                    Degustação de iguarias caseiras e da própria propriedade
                  </p>
                  <p>PREÇO: 45€/pax, Min. 2 e máx. de 8 pax</p>
                  <p>Todos os dias às 11: 00 ou 16:30, com marcação online</p>
                  <button className="book">Book Now</button>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Experiences;
