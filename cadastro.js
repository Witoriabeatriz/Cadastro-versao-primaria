function Verifica() {
    let name              =  document.getElementById('name').value;
    let email             =  document.getElementById('email').value;
    let senha             =  document.getElementById('senha').value;
    let confirmandosenha  =  document.getElementById('confirmandosenha').value;
    let genero            =  document.querySelector('input[name="sexo"]:checked');
    let cpf               =  document.getElementById('cpf').value;
    let telefone          =  document.getElementById('telefone').value;
    let dataNascimento    =  document.getElementById('date').value; 
    let cep               =  document.getElementById('cep').value;
    let endereco          =  document.getElementById('rua').value;
    let numero            =  document.getElementById('numero').value; 
    let bairro            =  document.getElementById('bairro').value;
    let cidade            =  document.getElementById('cidade').value;
    let estado            =  document.getElementById('estado').value;

    if (!name || !email || !telefone || !dataNascimento || !cep || !endereco || !cpf || !numero || !bairro || !cidade || !estado || !genero || !senha || !confirmandosenha) {
        alert("Campos de preenchimento obrigatório. Favor preencher!");
    } else {
        alert("Cadastro realizado com sucesso!");
    }

    if((senha !== '' || confirmandosenha !=='') && (senha == confirmandosenha)) {
        alert("As senhas conferem!");
    } else {
        alert("Senhas não conferem! Por favor digite novamente");
        
    }
}
