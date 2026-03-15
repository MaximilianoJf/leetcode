let variable = "puedo cambiar"; // Se puede reasignar
const constante = "no cambio";  // No se puede reasignar (preferir siempre const)

// Strings
const texto = "Hola";
const template = `Interpolación: ${texto}`; // Backticks para meter variables

// Objetos
const user = { nombre: "Max", edad: 25 };

// --- 2. MÉTODOS DE ARRAY (TRANSFORMACIÓN) ---

const nums = [1, 2, 3, 4, 5];

// .map() -> Crea un nuevo array transformando cada elemento
const dobles = nums.map(n => n * 2); // [2, 4, 6, 8, 10]

// .filter() -> Crea un nuevo array solo con los que cumplen la condición
const pares = nums.filter(n => n % 2 === 0); // [2, 4]

// .reduce() -> Reduce el array a un solo valor (ej: la suma total)
const suma = nums.reduce((total, n) => total + n, 0); // 15

// --- 3. MÉTODOS DE BÚSQUEDA ---

// .find() -> Devuelve el PRIMER elemento que coincida
const encontrado = nums.find(n => n > 3); // 4

// .findIndex() -> Devuelve el índice del primer elemento que coincida
const indice = nums.findIndex(n => n === 3); // 2

// .includes() -> Devuelve true o false si el valor existe
const existe = nums.includes(10); // false

// .some() -> ¿Al menos uno cumple la condición?
const hayMayores = nums.some(n => n > 10); // false

// .every() -> ¿TODOS cumplen la condición?
const todosPositivos = nums.every(n => n > 0); // true

// --- 4. MÉTODOS DE MANIPULACIÓN (MUTAN EL ARRAY ORIGINAL) ---

const lista = ["b"];
lista.push("c");    // Agrega al final: ["b", "c"]
lista.unshift("a"); // Agrega al inicio: ["a", "b", "c"]
lista.pop();        // Quita el último: ["a", "b"]
lista.shift();      // Quita el primero: ["b"]

// .splice(inicio, cuántosQuitar, ...nuevos)
lista.splice(0, 1, "nuevo"); // Reemplaza índice 0 por "nuevo"

// --- 5. OTROS ÚTILES ---

// .join() -> Une todo en un string
const frase = ["Hola", "Mundo"].join(" "); // "Hola Mundo"

// .sort() -> Ordena (Cuidado: por defecto ordena como texto)
const desorden = [10, 1, 5, 2];
desorden.sort((a, b) => a - b); // Orden numérico correcto: [1, 2, 5, 10]

// .flat() -> Aplana arreglos anidados
const anidado = [1, [2, 3]];
const plano = anidado.flat(); // [1, 2, 3]

// --- 6. CONVERSIÓN DE OBJETOS ---
const persona = { id: 1, name: "Max" };
Object.keys(persona);   // ["id", "name"]
Object.values(persona); // [1, "Max"]
Object.entries(persona);// [["id", 1], ["name", "Max"]]