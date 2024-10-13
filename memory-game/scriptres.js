const listResults = document.querySelector('.list-results')



  for (let i = 0; i < localStorage.length; i+= 1) { 
    const key = localStorage.key(i)
    const value = localStorage[key];

    let obj =  JSON.parse(value)
  

         listResults.innerHTML += `${i+1}. Name: <span class='diffrencolor'>${obj.Pname}</span> Moves: <span class='diffrencolor'>${obj.count}</span> Score: <span class='diffrencolor'>${obj.score}</span> <br>`
        

  

    }


