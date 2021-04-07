import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div className="wrapper">
          <img  src= "./author.jpg" id ="author"/>
           <h3 id= "byline">by Maya Mia </h3>
          <h1>A Day in the Life of Maya</h1>
     <br></br>
        <h2>Relaxing a Bit in London's <a href = "https://en.wikipedia.org/wiki/Kensington">Kensington District</a></h2>
          <h3> 03 20 2019</h3>
              <img src= "./tearoom.jpg" className= "images"/>
             <img src= "./lanesborough.jpg"  className= "images"/>
             <h3 id= "subtitle">Sweet Indulgence!</h3>
          <p> There are several wonderful places around Kensington to have Afternoon Tea but for a real treat I head over to The Lanesborough for Tea,   'Peggy Porshen style'. Relaxing under the glass-domed roof of the hotel's Celeste restaurant, I take in the sights with sipping a lovely Darjeeling. Love whiling away the hours inmersed in florals, pink buttercream cupcakes and  lemon rasbery cake with crystalized rose petals. Double Yum!!</p>
      <br></br>
         <h2> Lovely Stroll through Kensington</h2>
              <img className = "images" src= "https://rvca738f6h5tbwmj3mxylox3-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/2Q4A4148_KynanceMews.jpg"/>
              <img className= "images"   src= "https://rvca738f6h5tbwmj3mxylox3-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/2Q4A6750_KynanceMews_KensingtonMews.jpg"/>
          <p> Having filled up on tea and cakes and feeling content, I head north to the Mews. They have some of the prettiest streets in London. The cobbled lanes were once stables and make a lovely backdrop.  Abingdon Road has some of the prettiest spring wisteria in the city. The houses try to outdo each other to see which one can display more purple around its windows and doors.</p>
        <br></br>

        <div className = "contact">
          <h3> To receive my posts by email </h3>
          <p>
          <strong> email: maya@fashionblog.com | phone: 020-5550-1098 |  address: 371 Portobello Road, London, EC3N 2AJ </strong>
          </p>
        </div>
   
   
  </div>
  );
}

export default App;
