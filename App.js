
import './App.css';
import img from './img.png'
import homeb from './homeb.png'
import layout from './layout.png'
import hygges from './hygges.png'
import create from './create.png'
import FAQ from './FAQ.png'
import fam49 from './fam49.png'
function App() {
  return (
    <div className="App">
       <div className="Component40">
        <img src={img} alt = 'ImgLogo'/>
       </div>
        
      <div className="Frame3">
        <div className="Frame2">
          <div className="Home">Home</div>
          <div className="Flash">Flashcards</div>
          <div className="Contact">Contact</div>
          
        </div>
        <div className="FAQ">FAQ</div>
       
        <div className="Frame1 color=#FFFFFF"> 
        <div className="Login"> Login</div>
        </div>

        

      </div>
      <div className="frame1">
      <div className="homebutton">
          <img src={homeb} style={{width:30,height:30}} /></div>

          <div className="symbol1"><span> &#62;</span> </div>

          <div className="Flashcard">Flashcard</div>
          <div className="symbol2"><span> &#62;</span> </div>
          <div className="Mathematics">Mathematics</div>
          <div className="symbol2"><span> &#62;</span> </div>
          <div className="Relation">Relation and Function</div>
        </div>

        <div className="relation2">Relation and Function(Mathematics)</div>
         
         <div className="Frame5">
          <div className="study">Study</div>
          <div className="Quiz">Quiz</div>
          <div className="test">Test</div>
          <div className="game">Game</div>
          <div className="others">Others</div>
          
         </div>
         <div className="layout"> 
         <img src={layout} alt = 'ImgLogo'/>
         </div>

         <div className="frame19"> 

         <div className="hygges"><img src={hygges} alt = 'ImgLogo'/></div>
          
          <div className="create"><img src={create} alt = 'ImgLogo'/></div>

          
         </div>

         <div className="faq"><img src={FAQ} alt = 'ImgLogo'/></div>
      
         <div className="fam"><img src={fam49} alt='ImgLogo'/></div>


      

    </div>
  );
}

export default App;
