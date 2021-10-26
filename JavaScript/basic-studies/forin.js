var frutas = ['Laranja', 'Uva', 'Pera'];

		for (var i = 0; i < frutas.length; i++) {
			console.log('Nome da Fruta contida no Array: ' + frutas[i]);
		}

		for (var fruta in frutas) {
			console.log('Nome da Fruta contida no Array: ' + frutas[fruta]);
		}