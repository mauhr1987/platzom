export default function platzom(str){
	let translation = str

	//Si la palabra original es un palíndromo ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas
	function reverse(str){
		return str.split('').reverse().join('')
	}
		
	//const reverse = (str) => str.split('').reverse().join('')

	function minMay(str){
		const length = str.length
		let translation = ''
		let capitalize = true
		for (let i = 0; i < length; i++) {
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize //false
		}
		return translation
	}

	if(str == reverse(str)){
		return minMay(str)
	}

	//Si la palabra termina en "ar", se le quitan esos dos caracteres
	if(str.toLowerCase().endsWith('ar')){
		translation = str.slice(0, -2)
	}
	//Si la palabra inicia con Z, se le añade "pe" al final
	if(str.toLowerCase().startsWith('z')){
		translation += 'pe'
	}
	//Si la traducción tiene mas de 10 letras, dividir la palabra a la mitad y unir con un "-"
	const length = translation.length
	if(translation.length >= 10){
		const firstHalf = translation.slice(0, Math.round(length / 2))
		const secondHalf = translation.slice(Math.round(length / 2))
		//translation = firstHalf + '-' + secondHalf
		translation = `${firstHalf}-${secondHalf}`
	}
	
	return translation
}