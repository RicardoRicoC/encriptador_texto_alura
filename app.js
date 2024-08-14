const encriptar = () => {
    const inputText = document.getElementById('inputText').value;
    if (!validarTexto(inputText)) return;

    let tituloMensaje = document.getElementById('titulo-mensaje')
    let muñeco = document.getElementById('muñeco');

    const resultado = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('outputText').value = resultado;

    if (outputText.length !=0) {
        document.getElementById('outputText').value = resultado;
       tituloMensaje.textContent = "¡El texto fue encriptado con exíto!";
       muñeco.src = './img/encritado.png';
    }
}

const desencriptar = () => {
    const inputText = document.getElementById('inputText').value;
    if (!validarTexto(inputText)) return;

    let tituloMensaje = document.getElementById('titulo-mensaje')
    let muñeco = document.getElementById('muñeco');

    const resultado = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('outputText').value = resultado;

    if (outputText.length !=0) {
        document.getElementById('outputText').value = resultado;
       tituloMensaje.textContent = "¡El texto fue desencriptado con exíto!";
       muñeco.src = './img/robot.png';
    }
}

const copiar = () => {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    Swal.fire({
        icon: 'success',
        title: '¡Texto Copiado con Exíto!',
        showConfirmButton: false,
        timer: 1500,
    });
}

const validarTexto = (texto) => {
    if (texto === '') {
        Swal.fire({
            icon: 'warning',
            title: '¡Debes ingresar algun texto!',
            showConfirmButton: false,
            timer: 1500,
        });
        return false;
    }
    if (/[A-ZÁÉÍÓÚÑ]/.test(texto)) {
        Swal.fire({
            icon: 'warning',
            title: '¡Solo letras minúscula y sin acentos!',
            showConfirmButton: false,
            timer: 2000,
        });
        return false;
    }
    return true;
}
