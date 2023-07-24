import React from 'react'

const Headcss = () => {
    function AddCC(urlOfTheLibrary) {
        const script = document.createElement('link');
        script.href = urlOfTheLibrary;
        script.rel ="stylesheet";
        script.type="text/css";
        document.head.appendChild(script);
      }
  return (
    <React.Fragment>
     
      {AddCC('css/bootstrap.css')}
      {AddCC('css/magnific-popup.min.css')}
      {AddCC('/css/css/font-awesome.css')}
  

      {AddCC('css/jquery.fancybox.min.css')}
      {AddCC('css/themify-icons.css')}
      {AddCC('css/niceselect.css')}
  
      {AddCC('css/animate.css')}
      {AddCC('css/flex-slider.min.css')}
      {AddCC('css/owl-carousel.css')}
  

      {AddCC('css/slicknav.min.css')}
      {AddCC('css/reset.css')}
      {AddCC('ccss/responsive.css')}
  
    
    
    </React.Fragment>
  )
}

export default Headcss
