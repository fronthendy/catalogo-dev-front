console.log("arquivo externo funcionando!");

// requisição API catalogo-devs com JS

fetch("http://localhost:8000/api/devs", {
  method: "GET",
  contentType: "application/json; charset=utf-8",
  dataType: "json",
  secure: true,
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
  cors: true
})
.then(response => response.json())
.then(data => { 
  // recebo informação em array e posso exibir no console ou html
  console.log(data); 
});
