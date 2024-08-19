document.querySelector("#btnGerar").addEventListener("click", ()=>{
    const consulta ={
        nome: document.cadastro.nome.value,
        data: document.cadastro.date.value,
        horario: document.cadastro.horario.value,
        
        consultaToString: function(){
            var ret = "nome: "+this.nome+" data: "+ this.data +" horario: " + this.horario;
        },
        resumoDados: function(){
           let paciente=document.getElementById("marcado");
           let data=document.getElementById("marcado");
           paciente.innerHTML="Marcados: "+"<p>"+"paciente:"+ this.nome+ "<p>"+"\n data: "+ this.data+ "<p>" + "horario: " + this.horario + "h00";
           let marcadas=["z", "x"];
           console.log(this.consultaToString())
           marcadas.push(this.consultaToString());
           console.log(marcadas);
        }
    };
    consulta.resumoDados();
});
