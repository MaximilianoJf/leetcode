function romanoAEntero(s) {
    const valores = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let resultado = 0;

    for (let i = 0; i < s.length; i++) {
        const actual = valores[s[i]];
        const siguiente = valores[s[i + 1]];

    
        if (siguiente > actual) {
         
            resultado -= actual;
        } else {
            
            resultado += actual;
        }
    }

    return resultado;
}


console.log(romanoAEntero("III"));      
console.log(romanoAEntero("IV"));   
console.log(romanoAEntero("MCMXCIV"));  