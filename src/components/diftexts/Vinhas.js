import React from 'react'
import Section from '../Section'
import NavBar from '../NavBar'
import Footer from '../Footer'
import './Vinhas.css'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Vinhas() {
  return (
    <>
      <NavBar />
      <Section
        title="Vinhas"
        content="Lorem papspfof asowdpd painoue zixnec eihf  efu fcn"
        backgroundImg="/images/TerraBonaVinhas.jpg"
        path="/vinhas"
        />
        <Fade bottom>
        <h1 className='title'>As Nossas Vinhas</h1>
        <h5 className='subtitle'>hinictr xurhfnctu zgbewbsirux intgxe ufrofnh xgrx</h5>
        <p className='sonhos'>Este nosso sonho assume três compromissos.</p>
        </Fade>
        <div className='firstimg '>
          <Fade left>
          <div className='firstparags'>
          <p>O primeiro, com o que de melhor a freguesia da Boa Ventura e a Costa Norte tem para oferecer, fazendo
            homenagem ao seu nome, pela marca do nosso vinho, bem como, na promoção deste pequeno paraíso. Freguesia que integra
              uma parte importante da nossa Floresta Laurissilva, Património da Humanidade atribuído pela UNESCO, com 25 milhões de anos.</p>
          <p>De seguida, com a natureza e qualidade do vinho, quer pela introdução gradual de práticas biológicas 
            no tratamento dos solo e da vinha, quer pela introdução de técnicas de monitorização e controlo integral da produção,
            encontrando-se as nossas vinhas já Certificadas em Modo de Produção Integrado.</p>
          <p>Por último, o cariz familiar desta produção, limitada anualmente a 3.000 / 3.500 garrafas numeradas, 
            com uvas rigorosamente selecionadas, onde família e amigos, acompanhados por profissionais do sector, ajudam a cuidar
            e a acarinhar o crescimento desta semente. </p>
          </div>
          </Fade>
          <Fade right>
          <img className='img-fluid' src="/images/1674921443324963739073167162750.jpg" alt="" />

          </Fade>
        </div>
        <Fade bottom>
        <h1 className='title'>Os Nossos Vinhos</h1>
        <h5 className='subtitle'>hinictr xurhfnctu zgbewbsirux intgxe ufrofnh xgrx</h5>
        </Fade>
        <div className='secondimg '>
          <Fade left>
          <img className='img-fluid' src="/images/1674921443324963739073167162750.jpg" alt="" />
        </Fade>
          <Fade right>
          <div className='secondparags'>
            <p>Este vinho nasce de um pequeno sonho a construir em Terras de Boa Ventura, Terra Bona, em latim.</p>
            <p>Conhecido pelo Sitio do Cardo, em alusão à flor, a nossa paixão foi a Laurissilva, os seus cheiros e sons, com o mar bem perto.</p>
            <p>A semente foi a uva e com a casta Arnsburger, desenvolvemos um conjunto de vinhos frutados, leves e elegantes.</p>
            <p>E assim nasceu a gama de vinhos "Family Harvest" com fermentação e estágio em cuba de aço inox, e mais recentemente, a gama "Heritage" um com fermentação e estágio em barrica de carvalho francês e um último com estágio em barrica de terracota.</p>
            <p>Todos eles com uva rigorosamente selecionada.</p>
            <p>É com este sonho que vos convidamos a visitar a Costa Norte da Ilha da Madeira e a brindar connosco.</p>
          </div>
          </Fade>
        </div>
        <div className='shop'>
          <h1>Compras Online</h1>
          <div className='wines'>
            <Fade bottom>
            <div className='wine'>
              <h2>Terra Bona Family Harvest</h2>
              <h5>Vinho Branco</h5>
              <div className='textw'>
              <h5><em>Notas de Prova do Enólogo, Eng. João Pedro Machado /Adega São Vicente / IVBAM:</em></h5>
              <p><em>"Vinho cristalino de coloração cítrica. Aroma complexo, onde as notas de fruta tropical sobressaem, sobre um fundo floral. Na boca, o vinho mostra-se fresco, envolvente e com uma interessante mineralidade. Agradável persistência.”</em></p>
              <h5><em>Notas de Prova IWC, International Wine Challenge, London Nov2018 - Terra Bona Family Harvest 2017</em></h5>
              <p><em>“Bright and clean with notes of juicy lemon, grapefruit, lime leaves and ginger spice”</em></p>
              <h5><em>Notas de Prova Marc Squires, Robert Parker / Wine Advocate, EUA April 2019 - Terra Bona Family Harvest 2017</em></h5>
              <p><em>“...This is pretty nice. Crisp and fresh with a touch of grapefruit on the finish, it lingers nicely and shows off some tension. The juicy finish grabs the palate. It is a little more austere in flavor than some Rieslings, but it has fine fruit nonetheless. This is an impressive debut that looks capable of aging a reasonable time as well. Good Riesling must hold a bit, of course, to be deemed truly distinguished. There, we'll see, but it is worth leaning up just now. In the meanwhile, many will find it to be just what they want in a Riesling-ish wine…”</em></p>
              <h3>Lotes: De 2.000 a 2.700 garrafas</h3>
              <li>
                <ul><b>2017, 1ª Colheita:</b> Apenas disponível para provas verticais na nossa Propriedade</ul>
                <ul><b>2018, 2ª Colheita:</b> Apenas disponível para provas verticais na nossa Propriedade</ul>
                <ul><b>2019, 3ª Colheita:</b> Á venda na nossa Loja Online</ul>
              </li>
              </div>
              <div className='fwimg'></div>
              <img src="\images\16749234386631696760491067468076.jpg" alt="" />
              <img src="\images\1674923462663661025190897955904.jpg" alt="" />
            </div>
            </Fade>
            <Fade bottom>
            <h3 className='special'>LOTES ESPECIAIS</h3>
            <div className='wine'>
              <h2>Heritage Terra Bona Carvalho Francês</h2>
              <h5>Vinho Branco</h5>
              <div className='textw'>
                <h5><em>Notas de Prova do Enólogo, Eng. João Pedro Machado /Adega São Vicente / IVBAM:</em></h5>
                <p><em>"Vinho límpido de coloração citrina. Apresenta aroma complexo onde as notas a fruta tropical (ananás), fruta de polpa branca e citrinos encontram-se em perfeito equilíbrio com as notas tostadas decorrentes do estágio em barrica de carvalho francês. Na boca mostra-se fresco untuoso denotando um perfil barrica bem balanceado. Excelente persistência. Muito bom potencial de evolução "</em></p>
                <h3>Lotes: De 560 a 590 garrafas, 75cl</h3>
                <li>
                <ul><b>2018, 1ª Colheita:</b> Á venda na nossa Loja Online</ul>
                <ul><b>2019, 2ª Colheita:</b> Em estágio em garrafa. Disponível apenas no final de 2021 / inicio 2022</ul>
                </li>
                <div className='fwimg'>
                  <img src="\images\16749234386631696760491067468076.jpg" alt="" />
                  <img src="\images\16749255488327398664130918512568.jpg" alt="" />
                </div>
              </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className='wine'>
              <h2>Heritage Terra Bona Barrica Terracota</h2>
              <h5>Vinho Branco</h5>
              <div className='textw'>
                <h5><em>Notas de Prova do Enólogo, Eng. João Pedro Machado /Adega São Vicente / IVBAM:</em></h5>
                <p><em>"Vinho límpido de cor citrina. Aroma que recorda fruta de polpa branca harmoniosamente intrincada com notas minerais onde no final é-nos revelado a rusticidade do barro.  São notórias igualmente notas florais. No palato mostra-se um vinho fresco e envolvente. É nesta fase que o perfil da talha é mais notório. A mineralidade e a acidez são bastante evidentes. Agradável persistência."</em></p>
                <h3>Lotes: 200 garrafas, 75cl</h3>
                <li>
                <ul><b>2018 Signed Edition, 1ª Colheita:</b> Lote apenas disponível para provas na nossa Propriedade </ul>
                <ul><b>2019, 2ª Colheita:</b> Á venda na nossa Loja Online</ul>
                </li>
                <div className='fwimg'>
                  <img src="\images\16749234386631696760491067468076.jpg" alt="" />
                  <img src="\images\16749258520832506781730042321303.jpg" alt="" />
                </div>
              </div>
            </div>
            </Fade>
          </div>
          <Link className='efetue' to="/shop">
          <h5>Efetue Aqui a Sua Compra</h5>
          </Link>
        </div>
      <Footer />
    </>
  )
}

export default Vinhas