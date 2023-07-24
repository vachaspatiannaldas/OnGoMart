import React from 'react'

const Logincss = () => {
    function AddCC(urlOfTheLibrary) {
        const script = document.createElement('link');
        script.href = urlOfTheLibrary;
        script.rel ="stylesheet";
        script.type="text/css";
        document.head.appendChild(script);
      }
  return (
    <React.Fragment>
     
      {AddCC('/Login/fonts/icomoon/style.css')}
      {AddCC('/Login/css/owl.carousel.min.css')}
      {AddCC('/Login/css/bootstrap.min.css')}
  

      {AddCC('/Login/css/style.css')}
      
   
  
    
    
    </React.Fragment>
  )
}

export default Logincss
