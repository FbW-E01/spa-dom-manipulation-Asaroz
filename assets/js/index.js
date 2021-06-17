const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
]

books.sort(function(a,b){
if(a.author.split(" ")[1]<b.author.split(" ")[1]){return -1}
if(a.author.split(" ")[1]>b.author.split(" ")[1]){return 1}
return 0
}
)



const container=document.querySelector(".book-list")
container.style.display="flex"
container.style.flexDirection="row"


books.forEach(item=>{
  const cardContainer = document.createElement("ul")
  const card = document.createElement("div")
  const img = document.createElement("img")
  const cardBody = document.createElement("div")
  const cardTitle = document.createElement("h6")
  const author = document.createElement("p")
  const footer = document.createElement("footer")

  card.classList.add("card")
  card.style.width="15rem"

  img.src=item.img
  img.classList.add("card-img-top")

  cardBody.classList.add("card-body")

  cardTitle.classList.add("card-title")
  cardTitle.innerHTML = item.title

  author.classList.add("card-text")
  author.innerText= item.author

  footer.classList.add("card-footer")
  footer.innerHTML= '<span class="badge badge-secondary">'+item.alreadyRead ? "Read":"not Read"+'</span>'
  footer.style.margin="-20px"

  container.after(cardContainer)
  cardContainer.appendChild(card)
  card.appendChild(img)
  card.appendChild(cardBody)
  cardBody.appendChild(cardTitle)
  cardBody.appendChild(author)
  cardBody.appendChild(footer)
})

{/* <ul>
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>    <span class="badge badge-secondary">New</span>
</ul> */}