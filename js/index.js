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
  let devs = data;
  let html = '';

  devs.forEach(dev => {
    html += `
    <div class="card">
      <img src="images/dev-img1.svg" class="card-img-top">
      <div class="card-body">
          <h5 class="card-title">${dev.name}</h5>
          <p class="card-text">${dev.email}</p>
          <p class="card-text">${dev.level}</p>
      </div>
      <ul class="list-group list-group-flush">
          <h5 class="card-title text-center">Skills</h5>
          <li class="list-group-item">HTML</li>
          <li class="list-group-item">JavaScript</li>
          <li class="list-group-item">Php</li>
      </ul>
      <div class="card-body text-center">
          <a href="${dev.github}" class="card-link">
              <p class="card-text">
              Github 
              <img src="images/logo-github.svg" class="icon-github">
              </p>
          </a>
      </div>
    </div>
    `
  });

  let containerDevs = document.querySelector('#devs'); 

  containerDevs.insertAdjacentHTML('beforeend', html);

});
