import './Testimonials.css'
import Carousel from 'react-bootstrap/Carousel';
import Imgt1 from '../images/t1.jpg'
import Imgt2 from '../images/t2.jpg'
function Testimonials(){
return(
    <>

    <h3 id='titleT'>Testimonials</h3>
<Carousel className='Carousel'>

      <Carousel.Item>
       
     <div id='bacground'> 

       
        <img
          className="imgt1"
          src={Imgt1}
          alt="First slide"
        />
          <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.".</p>
       <h6>Simab Dave - Web Designer</h6>
      </div>
      </Carousel.Item>
     
      <Carousel.Item>
      <div id='bacground'> 

       
<img
  className="imgt1"
  src={Imgt1}
  alt="First slide"
/>
  <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
<h6>Johnthan Doe - UX Designer</h6>
</div>
      </Carousel.Item>
      <Carousel.Item>
      <div id='bacground'> 

       
<img
  className="imgt1"
  src={Imgt2}
  alt="First slide"
/>
  <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
<h6>Maccy Doe - Front End</h6>
</div>
      </Carousel.Item>
    </Carousel>
</>

)
}
export default Testimonials