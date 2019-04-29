const HN_BASE_URL = 'http://localhost:3310/tasks/';

const fetchCrud = query =>
  fetch(HN_BASE_URL + query)
    .then(response => response.json());

const updateCrud = query =>
console.log('api update')
  // fetch(HN_BASE_URL + query)
  //   .then(response => response.json());

const deleteCrud = query =>
    fetch(HN_BASE_URL + query, {
      method: 'DELETE',
      
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          
      }
  }
      
      )
      .then(response => response.json())
      .catch(error => console.log('error: ' + error))
;


const newCrud = query =>
      fetch(HN_BASE_URL, {
        method: 'POST',
        
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
          "task" : "works!",
          "status" : "1"
        })
    })
        .then(response => response.json())
        .catch(error => console.error(error));



export {
        fetchCrud,
        updateCrud,
        deleteCrud,
        newCrud,
};