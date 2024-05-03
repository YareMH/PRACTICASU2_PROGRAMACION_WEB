function captureKeys(event){
    var pressenKeysInput = document.getElementById("pressedKeys");
    var muestra = document.getElementById("lblPressedKeys");
    var pressedKeys = [];
    var key = event.key;
    muestra.innerHTML += key;
    pressedKeys.push(key);
    pressenKeysInput.value = pressedKeys;
}

document.getElementById("keyForm").addEventListener("submit",function(event){
    event.preventDefaul();
    var pressenKeysInput = document.getElementById("pressedKeys");
    alert("Teclas presionadas: " + pressenKeysInput.value);
});