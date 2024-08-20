function exibirConsultas(marcadas, dataSelecionada) {
    let marcadoEl = document.getElementById("marcado");
    marcadoEl.innerHTML = "Marcados:";

    const consultasDoDia = marcadas.filter(consulta => consulta.data === dataSelecionada);

    consultasDoDia.forEach((consulta, index) => {
        marcadoEl.innerHTML += `
            <p>
                Nome: ${consulta.nome}, Horário: ${consulta.horario}h00
                <button onclick="desmarcarConsulta(${index}, '${dataSelecionada}')">Desmarcar</button>
            </p>`;
    });

  
    if (consultasDoDia.length === 0) {
        marcadoEl.innerHTML += "<p>Nenhuma consulta marcada para esta data.</p>";
    }
}

function desabilitarHorarios(marcadas) {
    const dataSelecionada = document.cadastro.date.value;
    const horarios = document.querySelectorAll(".horario");

    
    horarios.forEach(horario => {
        const horarioValue = horario.value;
        const horarioOcupado = marcadas.some(c => c.data === dataSelecionada && c.horario === horarioValue);
        horario.disabled = horarioOcupado; 

    });

 
    exibirConsultas(marcadas, dataSelecionada);
}

document.querySelector("#btnGerar").addEventListener("click", () => {
    const consulta = {
        nome: document.cadastro.nome.value,
        data: document.cadastro.date.value,
        horario: document.cadastro.horario.value,
    };


    let marcadas = JSON.parse(localStorage.getItem('consultas')) || [];
    marcadas.push(consulta);
    localStorage.setItem('consultas', JSON.stringify(marcadas));
s
    desabilitarHorarios(marcadas);
});


document.cadastro.date.addEventListener("change", () => {
    let marcadas = JSON.parse(localStorage.getItem('consultas')) || [];
    desabilitarHorarios(marcadas);
});


window.onload = function() {
    let marcadas = JSON.parse(localStorage.getItem('consultas')) || [];
    const dataSelecionada = document.cadastro.date.value;
    exibirConsultas(marcadas, dataSelecionada);
};
document.querySelector("#date").addEventListener("click", function() {
    this.showPicker(); 
});


document.querySelector("#btnReset").addEventListener("click", () => {
    if (confirm("Tem certeza que deseja desmarcar todas as consultas?")) {
        localStorage.clear(); 
        location.reload(); 
    }
});

function desmarcarConsulta(index, dataSelecionada) {
    
    let marcadas = JSON.parse(localStorage.getItem('consultas')) || [];


    const consultasDoDia = marcadas.filter(consulta => consulta.data === dataSelecionada);

  
    consultasDoDia.splice(index, 1);

 
    marcadas = marcadas.filter(consulta => consulta.data !== dataSelecionada);
    marcadas = marcadas.concat(consultasDoDia);

    localStorage.setItem('consultas', JSON.stringify(marcadas));

 
    desabilitarHorarios(marcadas);
}
