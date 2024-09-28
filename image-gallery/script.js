let apiUrl ='https://favqs.com/api/qotd';
function writeACitate(quote, author){
    const q  = document.getElementsByClassName('quote')[0]
    const a = document.getElementsByClassName('author')[0]
    q.innerHTML = quote
    a.innerHTML= author

}

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    
    writeACitate(data['quote']['body'],data['quote']['author'] )
  })
  .catch(error => {
    console.error('Error:', error);
  });

// console.log(d)

//   console.log(data["quote"][8]);
//   console.log(data["quote"][10]);


