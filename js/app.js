function encriptarMensaje() {

    let inputText = document.getElementById('inputText').value;
    let encriptado = inputText.toLowerCase().replace(/e/g, 'enter').replace(
        /i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    document.getElementById('output').innerText = encriptado;

}

function desencriptarMensaje() {

    let inputText = document.getElementById('inputText').value;
    let desencriptado = inputText.toLowerCase().replace(/enter/g, 'e').replace(
        /imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    document.getElementById('output').innerText = desencriptado;

}

function copiarTexto() {
    limpiarCampos();
    let outputText = document.getElementById('output').innerText;
    navigator.clipboard.writeText(outputText)
        .then(() => {
            limpiarCampos()
        })
        .catch(err => {
            alert('Error al copiar el texto: ', err);
        });
}

function limpiarCampos() {

    document.getElementById('inputText').value = '';
    document.getElementById('output').innerText = '';
}