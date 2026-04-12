

const scriptsInEvents = {

	async FolhaFase1_Event2_Act3(runtime, localVars)
	{
		runtime.goToLayout("Fase2");
	},

	async FolhaFase2_Event8_Act3(runtime, localVars)
	{
		runtime.goToLayout("JogoConcluido");
	},

	async Eventosplayer_Event11_Act1(runtime, localVars)
	{
		const jogador = runtime.objects.Jogador.getFirstInstance();
		if (jogador) {
		    const x = jogador.getImagePointX("Ataque");
		    const y = jogador.getImagePointY("Ataque");
		    const ataque = runtime.objects.Ataque.createInstance(1, x, y);
		    setTimeout(() => {
		        if (ataque) ataque.destroy();
		    }, 400);
		    }
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
