/*let getJSONData = function(url){
    let result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}
*/

const CATEGORIAS = "https://pucciarelli21.github.io/APIS-Pruebas/categorias/categorias.json"

async function getJSONData(url){
  let peticion = await fetch(url)
    if (peticion.ok) {
      let response = await peticion.json()
      return response
    }
}
