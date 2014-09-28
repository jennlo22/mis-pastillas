// JavaScript Document

function setDatos() {
    for (var i=0; i < storage.length; i++) {
        var clave = storage.key(i);
        var valor = storage.getItem(clave);
        alert('Valor obtenido ' + clave + '=' + valor);
    }
}