let library = [];

let list =
document.getElementById("library")
let title = document.getElementById("title")
let author = document.getElementById("author")
let page = document.getElementById("page")
let gridCheck = document.getElementById("gridCheck")
//抓到html元素

const randerList=() => {
  let result = '';
for (let i=0; i<library.length;i++) {result = result +`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${library[i].title}</h5>
    <p class="card-text">
      <div>by ${library[i].author} </div>
      <div>total ${library[i].page} pages</div>
      <div>status: ${library[i].read}</div>
    </p>
    <a href="#" class="btn btn-danger"  onclick="deleteBook(${i})">Delete</a>
    <button type="button" class="btn btn-info" onclick="toggle(${i})">Toggle</button>
  </div>
</div>`;}
  return result;
}//使array 轉換成html: 按鈕＋元素

list.innerHTML=randerList();

const addintoLibrary = () => {
  let book = {
    title: title.value,
    author: author.value,
    page: page.value,
    read: gridCheck.checked ? "Read" : "Not Read"
  }
  library.push(book);
  document.querySelector('form').reset();
  list.innerHTML=randerList();//reloading list
  localStorage.setItem('myBookList',JSON.stringify(library) )
}

const deleteBook = (i) => {
  library.splice(i,1);
  list.innerHTML= randerList();
}

const toggle = (i) => {
  if (library[i].read == "Not Read" ) {
     library[i].read = "Read";
  }else if (library[i].read == "Read" ) {
    library[i].read = "Not Read";
  }
  list.innerHTML= randerList();
}

