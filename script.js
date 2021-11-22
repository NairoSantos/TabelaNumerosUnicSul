function criaTabela(){
	linhas = document.querySelector("#linha").value
	colunas = document.querySelector("#coluna").value
	conteudo="";
	conteudo += "<table border='0'>";
	for (i=1;i<=linhas;i++){
		conteudo += "<tr>";
		for (j=1; j<=colunas;j++){
			conteudo += "<td class="+(j %2==0?"'verde'":"'amarelo'")+" >"+i+"," + j +"</td>";
		}			
		conteudo += "</tr>";
	}	
	conteudo += "</table>";
	document.querySelector("#tab").innerHTML=conteudo;
}

let obj2 = document.querySelector("#button2");
obj2.onclick =  criaTabela;
