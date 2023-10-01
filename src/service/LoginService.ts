const usuarioEsperado = "verifarma";
const passEsperada = "verifarma";

function credencialesValidas(usuario: string, password: string): boolean {
	return usuario === usuarioEsperado && password === passEsperada;
}

export {
	credencialesValidas,
};