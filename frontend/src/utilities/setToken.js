export default (token) => {

    return new Promise((resolve, reject) => {         
         let tokenData = JSON.stringify(token);
         window.localStorage.setItem('jwt', tokenData);
         resolve(); 
     })
}