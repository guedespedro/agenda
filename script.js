
document.querySelector("#btnGerar").addEventListener("click", ()=>{
    let marcadas=["z", "x"];
    const consulta ={
        nome: document.cadastro.nome.value,
        data: document.cadastro.date.value,
        horario: document.cadastro.horario.value,
        
        consultaToString: function(){
            var ret = "nome: "+this.nome+" data: "+ this.data +" horario: " + this.horario;
            return ret
        },
        resumoDados: function(){
           let paciente=document.getElementById("marcado");
           let data=document.getElementById("marcado");
           paciente.innerHTML="Marcados: "+"<p>"+"paciente:"+ this.nome+ "<p>"+"\n data: "+ this.data+ "<p>" + "horario: " + this.horario + "h00";
          // console.log(this.consultaToString());
          // marcadas.push(this.consultaToString()); -> funcionou para listar apenas esse objeto, excluindo o último inserido
          for(let i = 0; i<marcadas.length; i++){
            
          }
          marcadas.push(consulta); 
           console.log(marcadas);
        }
    };
    consulta.resumoDados();
});
