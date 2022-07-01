let library = ["The Happiness Project","The Happiness Project","The Happiness Project"]

let list =
document.getElementById("library")
let title = document.getElementById("title")
let author = document.getElementById("author")
let page = document.getElementById("page")
//抓到html元素

const randerlist=() => {
  let result = '';
for (let i=0; i<library.length;i++) {result = result +`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${library[i]}</h5>
    <p class="card-text">
      <div>by Gretchen Rubin </div>
      <div>total 367 pages</div>
      <div>status: read</div>
    </p>
    <a href="#" class="btn btn-danger"  onclick="deleteBook(${i})">Delete</a>
  </div>
</div>`;}
  return result;
}//使array 轉換成html: 按鈕＋元素

list.innerHTML=randerlist();

const addintoLibrary = () => {
  if(title.value == "") {
  }else{
      library.push(title.value);
  }
  title.value="";
 list.innerHTML=randerlist();//reloading list
}

const deleteBook = (i) => {
  library.splice(i,1);
  list.innerHTML= randerlist();
}

class Books{
  constructor(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  }
  

