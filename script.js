const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativa = 0;
    const historico = [];
    

    function verificar() {
      let palpite = document.getElementById('palpite').value;
      const resultado = document.getElementById('resultado');
      const historicoLista = document.getElementById('historico');
      tentativa++;

      if (palpite == numeroSecreto) {
        resultado.innerHTML = `Você acertou em ${tentativa} tentativas!`;
        document.getElementById('reset').style.display = 'block';
        document.getElementById('palpite').disabled = true;
        document.getElementById('chutar').disabled = true;   // Desabilita o botão "Chutar"
      } else if (palpite > numeroSecreto) {
        resultado.innerHTML = 'O palpite é maior. Tente novamente.';
      } else {
        resultado.innerHTML = 'O palpite é menor. Tente novamente.';
      }

      historico.push(palpite);
      let item = document.createElement('li');
      item.textContent = `Tentativa ${tentativa}: ${palpite}`;
      historicoLista.appendChild(item);

      document.getElementById('palpite').value = '';
    }

    function reiniciar() {
      window.location.reload();
    }