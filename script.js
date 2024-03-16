// Funciones JavaScript van aquí

// Función para agregar una nueva tarea a la lista
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;
    if (taskText.trim() !== "") { // Verifica si el campo de entrada no está vacío
        var li = document.createElement("li");
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        li.appendChild(checkBox);
        li.appendChild(document.createTextNode(taskText));
        taskList.appendChild(li);
        taskInput.value = ""; // Limpia el campo de entrada después de agregar la tarea
    } else {
        alert("Please enter a valid task."); // Alerta si el campo está vacío
    }
}

// Función para marcar las tareas seleccionadas como completadas
function completeSelected() {
    var taskList = document.getElementById("taskList");
    var tasks = taskList.getElementsByTagName("li");
    for (var i = tasks.length - 1; i >= 0; i--) {
        var task = tasks[i];
        var checkBox = task.querySelector("input[type='checkbox']");
        if (checkBox.checked) {
            task.parentNode.removeChild(task); // Elimina la tarea si está marcada como completada
        }
    }
}

// Función para agregar valores al campo de entrada de la calculadora
function appendToCalculator(value) {
    var calculatorInput = document.getElementById("calculatorInput");
    calculatorInput.value = calculatorInput.value + value;
}

// Función para realizar el cálculo en la calculadora
function calculate() {
    var calculatorInput = document.getElementById("calculatorInput");
    try {
        calculatorInput.value = eval(calculatorInput.value); // Evalúa la expresión y muestra el resultado
    } catch (error) {
        calculatorInput.value = 'Error'; // Maneja cualquier error que ocurra durante el cálculo
    }
}

// Función para limpiar el campo de entrada de la calculadora
function clearCalculator() {
    var calculatorInput = document.getElementById("calculatorInput");
    calculatorInput.value = ''; // Borra el contenido del campo de entrada
}

// Función para agregar el valor de la calculadora al campo de entrada de la lista de tareas
function addCalculation() {
    var calculatorInput = document.getElementById("calculatorInput");
    var taskInput = document.getElementById("taskInput");
    taskInput.value = calculatorInput.value; // Copia el valor de la calculadora al campo de entrada de la lista de tareas
}

// Manejador de eventos para el envío del formulario de preguntas frecuentes
document.getElementById("faqForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el comportamiento de envío de formulario predeterminado

    // Obtiene la pregunta y la respuesta ingresadas
    var question = document.getElementById("question").value;
    var response = document.getElementById("response").value;

    // Puedes elegir qué hacer con la pregunta y la respuesta ingresadas aquí
    console.log("Question:", question);
    console.log("Response:", response);

    // Opcionalmente, puedes borrar los campos del formulario después del envío
    document.getElementById("question").value = "";
    document.getElementById("response").value = "";
});
