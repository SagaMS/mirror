// let form = document.querySelector(".search-form");
// function showImage(arr){
//   const img = document.getElementsByClassName('image')
//   console.log(img)
//   for (let index = 0; index < img.length; index++) {
//     const element = img[index];
//      element.src = arr[index]['url_m']
//      element.alt = arr[index]['title']
//   }
// }


// form.addEventListener("submit", function (e) {
// e.preventDefault() 

// let formdata = new FormData(this);
// let tag = formdata.get("image-search");


// const url =`https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=${tag}&tag_mode=all&extras=url_m&format=json&nojsoncallback=1`



// async function getData() {
//   const res = await fetch(url);
//   const data = await res.json();

//   showImage(data['photos']['photo'])

// }
// getData();

// });



const search = document.getElementById('search')
const magnify = document.querySelector('.magnify')
search.focus()


function jennaortega(){
  
    alert("Jenna Ortega")
}

search.addEventListener('keypress', function(e){
  if (e.key == "Enter") {
    jennaortega();
 }
}

)


magnify.addEventListener('click', jennaortega)