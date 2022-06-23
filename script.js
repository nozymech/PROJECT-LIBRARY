function Books(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){ console.log(`${name}by${author},${pages}pages,${read}`);
  }
  }
  
  const me = new Books(
    "i love you",
    "peter",
    "55",
    "not read",
  )