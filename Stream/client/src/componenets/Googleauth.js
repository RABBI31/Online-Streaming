import React from 'react';

class Googleauth extends React.Component{
    componentDidMount(){
          window.gapi.load('client:auth2', ()=>{
              window.gapi.client.init({
                  clientid:'1068780206988-bh5oge468niqi7n3h1ui9tfps10p31bd.apps.googleusercontent.com',
                  scope:'email'
              })
          })  
    }
    render(){
      
        return(
           <div>Hello World</div>
        )
    }
}
export default Googleauth;