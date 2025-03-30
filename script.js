function validarCadastro(event) {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const cpf = document.getElementById('cpf').value;
    const sexo = document.querySelector('input[name="sexo"]:checked');
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    if (!nome || !endereco || !cpf || !sexo || !telefone || !email) {
        alert('Preencha todos os campos!');
        event.preventDefault();
    } else {
        alert('Cadastro realizado com sucesso!');
        event.preventDefault();
        
        document.getElementById('nome').value = '';
        document.getElementById('endereco').value = '';
        document.getElementById('cpf').value = '';
        document.getElementById('telefone').value = '';
        document.getElementById('email').value = '';
        document.getElementById('masculino').checked = false;
        document.getElementById('feminino').checked = false;
    }
}

function validarAgendamento(event) {
    const servico = document.getElementById('servico').value;
    const dataAgendamento = document.getElementById('dataAgendamento').value;
    const horaAgendamento = document.getElementById('horaAgendamento').value;

    if (!servico || !dataAgendamento || !horaAgendamento) {
        alert('Preencha todos os campos!');
        event.preventDefault();
    } else {

        alert('Agendamento realizado com sucesso!');
        event.preventDefault();
        

        document.getElementById('servico').value = 'retirada';
        document.getElementById('dataAgendamento').value = '';
        document.getElementById('horaAgendamento').value = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const formCadastro = document.querySelector('#cadastro form');
    const formAgendamento = document.querySelector('#agendamento form');

    formCadastro.addEventListener('submit', validarCadastro);
    formAgendamento.addEventListener('submit', validarAgendamento);
});
