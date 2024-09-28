const search = document.getElementById('search');
const magnify = document.querySelector('.magnify');
const img = document.getElementsByClassName('.image');
const moreButton = document.querySelector('.show-more');
const imageBlock = document.querySelector('.images');
search.focus()

function formURL(){
  let tag = search.value
  if(tag !==''){
   url =`https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=${tag}&tag_mode=all&extras=url_m&format=json&nojsoncallback=1`
  }else{
    url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=spring,nature&tag_mode=all&extras=url_m&format=json&nojsoncallback=1'
  }

  return url;
}

let url;


function showImage(arr){
  const img = document.getElementsByClassName('image')
  // console.log(img)
  for (let index = 0; index < img.length; index++) {
    const element = img[index];
     element.src = arr[index]['url_m']
     element.alt = arr[index]['title']
  }
}



async function getData() {
  url =  formURL()
  const res = await fetch(url);
  const data = await res.json();

  showImage(data['photos']['photo'])
}

getData();




search.addEventListener('keypress', function(e){
  if (e.key === "Enter") {
  
    url = formURL()
    getData()
 }
}

)


magnify.addEventListener('click', function(){
    url = formURL()
    getData()
}
 )


let click = 7;
 moreButton.addEventListener('click', function(){
  if(click<=27){
 imageBlock.innerHTML += ' <img class="image" src="" alt=""> ' ;
  getData()
  click ++;
}else{
  moreButton.innerHTML = 'End of Image Row'
}
}

 )
