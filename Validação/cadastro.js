document.querySelector(".cadastro-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm-email").value;
    const senha = document.getElementById("senha").value;
    const confirmSenha = document.getElementById("confirm-senha").value;
    const termos = document.getElementById("termos").checked;

    if (email !== confirmEmail) {
      alert("Os e-mails não coincidem.");
      return;
    }

    if (senha !== confirmSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    if (!termos) {
      alert("Você precisa aceitar os termos.");
      return;
    }

    const dados = {
      nome,
      email,
      senha
    };

    localStorage.setItem("usuario", JSON.stringify(dados));
    alert("Cadastro realizado com sucesso!");

    window.location.href = "login.html";
  });