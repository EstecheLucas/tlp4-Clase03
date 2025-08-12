1)  Las funciones constructoras son una forma vieja de crear objetos, las clases son una forma nueva, más fácil de leer.
Con clases, el código es más corto y ordenado, con funciones, es más largo y a veces difícil de entender.

2) Los getters y setters son formas especiales para leer y cambiar los valores de las propiedades de un objeto. ayuda a que no se pueda poner un valor incorrecto, porque ahí podemos hacer controles antes de guardar o mostrar algo. Además, permiten que el código sea más fácil de entender porque parece que estamos accediendo a propiedades normales, aunque en realidad haya lógica detrás.

3) Cambiar los métodos que ya vienen en los objetos de JavaScript, como los strings, puede traer problemas.

4) La diferencia entre prototype o object.assing es que  si se asigna el metodo greet directamente con prototype de la función constructura, habra que agregar cada uno de los metodos de forma individual, en cambio con object.assign, se pueden agregar todos los metodos de una sola vez.