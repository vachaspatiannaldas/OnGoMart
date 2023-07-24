import React from 'react'

const Headjavascript = () => {
    function AddScript(path)
    {
      const script = document.createElement('script')
      script.src = path;
      script.async = true;
      document.body.appendChild(script);
    }
  return (
    <React.Fragment>
      {AddScript('/Login/js/jquery-3.3.1.min.js')}
      {AddScript('/Login/js/popper.min.js')}

      {AddScript('/Login/js/bootstrap.min.js')}
      {AddScript('/Login/js/main.js')}
      
      
    </React.Fragment>
  )
}

export default Headjavascript
