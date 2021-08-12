let books=[];
let shoppingcart = [];

const row = document.querySelector('.row')
function getbooks(){
    fetch ('https://striveschool-api.herokuapp.com/books')
    .then((response)=>{
        console.log(response)
        return response.json()
    })
    .then((books)=>{
        console.log(books)
        return showBooks(books);
    })
    .catch(error=>{
        console.log(error)
    })

}
function searchBooks(query) {
    // displayBooks(books.filter(b => b.title.includes(query)))

    const seBooks = books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase())
    )

    showBooks(seBooks)
}



   

    function cartlist(s) {
        
        console.log(s);
        let sp = books.filter(obj=>{
            return obj.asin === s;
            
        })
        console.log(sp);
        shoppingcart.push(sp);
        
     
       
    }
    function viewcart(){
        const row = document.querySelector('.row')
        row.innerHTML =row.innerHTML=shoppingcart.map(fibook => `
        <div class="col-12 col-sm-6 col-md-3">
            <div class="card" buybook>
                <img src="${fibook.img}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${fibook.title}</h5>
                <p class="card-text">${fibook.price}</p>
                <button id="cartbtn" value=${fibook.asin} onclick="cartlist(value)"> Add to cart</button>
                </div>
            </div>
        </div>
    `).join("")
      
      
    }

  function showBooks(books) {
      
      row.innerHTML=books.map(fibook => `
      <div class="col-12 col-sm-6 col-md-3">
          <div class="card" buybook>
              <img src="${fibook.img}" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title">${fibook.title}</h5>
              <p class="card-text">${fibook.price}</p>
              <button id="cartbtn" value=${fibook.asin} onclick="cartlist(value)"> Add to cart</button>
              </div>
          </div>
      </div>
  `).join("")
}  
 
  
  