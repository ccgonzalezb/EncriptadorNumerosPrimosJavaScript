
# Encriptador JavaScript

## Descripción

Este proyecto es una sencilla aplicación web que permite encriptar y desencriptar texto utilizando una función matemática basada en exponentes y módulos, similar a una codificación RSA simplificada. La aplicación funciona en el navegador y está hecha con HTML, CSS y JavaScript puro.

---

## Funcionalidades

- Encriptar texto ingresado por el usuario.
- Desencriptar texto previamente encriptado.
- Copiar el resultado al portapapeles con un solo clic.
- Interfaz sencilla y clara, con indicación de que sólo se admiten letras minúsculas y sin acento.

---

## Tecnologías utilizadas

- HTML5
- CSS3 (fuente Inter de Google Fonts)
- JavaScript (ES6+)

---

## Estructura del proyecto

- `index.html`: Página principal con la interfaz del encriptador.
- `encriptador.js`: Script que contiene la lógica de encriptación, desencriptación y funcionalidad del botón copiar.
- `stile.css`: Estilos básicos para la página.

---

## Cómo usar

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` en cualquier navegador moderno.
3. Ingresa el texto que deseas encriptar (preferiblemente letras minúsculas sin acento).
4. Haz clic en **Encriptar** para obtener el texto cifrado.
5. Para desencriptar, pega el texto cifrado en el área de texto superior y presiona **Desencriptar**.
6. Puedes copiar el texto resultante usando el botón **Copiar**.

---

## Detalles técnicos

- La encriptación convierte cada carácter a un número según un listado personalizado.
- Se aplica una operación matemática con potencias y módulo para cifrar y descifrar el texto.
- Los valores grandes se manejan con el tipo `BigInt` de JavaScript.
- El alfabeto incluye letras mayúsculas, minúsculas, números y algunos caracteres especiales.

---

## Mejoras futuras

- Añadir validación para caracteres no permitidos.
- Soportar mayúsculas y caracteres acentuados correctamente.
- Mejorar la interfaz con estilos más atractivos y responsivos.
- Incorporar pruebas unitarias para la lógica de encriptación.

---

## Autor

Tu nombre o alias

---

## Licencia

Indica la licencia del proyecto si aplica (por ejemplo MIT).

---

## Captura de pantalla

*(Aquí puedes incluir una imagen o GIF mostrando la aplicación en acción)*

---

¡Gracias por usar este encriptador sencillo hecho en JavaScript!
