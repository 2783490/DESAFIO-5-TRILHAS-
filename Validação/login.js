  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const dadosSalvos = JSON.parse(localStorage.getItem("usuario"));

    if (!dadosSalvos) {
      alert("Nenhum usuário cadastrado.");
      return;
    }

    if (email === dadosSalvos.email && senha === dadosSalvos.senha) {
      alert("Login bem-sucedido!");
      
    } else {
      alert("E-mail ou senha incorretos.");
    }

        window.location.href = "index.html";
  });