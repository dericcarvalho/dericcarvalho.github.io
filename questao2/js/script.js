function alterarImagem() {
    var btnImage = document.getElementById('360');
    var sofaImage = document.getElementById('sofa');

    if (btnImage.src.includes('btn360.png')) {
        btnImage.src = 'src/fechar.png';
        sofaImage.src = 'src/gif.gif';
    } else {
        btnImage.src = 'src/btn360.png';
        sofaImage.src = 'src/image.png';
    }
}
