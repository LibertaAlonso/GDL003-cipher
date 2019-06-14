# 🔒 Cifrado César

## ️️️ℹ️ Introducción

Cifrar significa codificar. El cifrado César es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 📄 Descripción de aplicación

Esta aplicación cifra y descifra una cadena de texto que se le proporcione. Sólo se tiene que definir un `offset` para la cifra del texto.

## 📌 Propósito

El propósito principal de la aplicación es brindar una funcionalidad para poder generar claves seguras para correo, contraseñas, texto e incluso cómo una herramienta de apoyo para crear un medio de comunicación seguro.

## 💡 Consideraciones de diseño

La aplicación fue diseñada con una meta principal cómo objetivo y esto es la simplicidad y facilidad de uso. Se tomó en cuenta un diseño intuitivo que no implique tener que estudiar ni memorizar nada.

Su mayor fuerte es su facilidad de uso, contando con una interfaz minimalista y colores de tonos suaves que son bastante agradables a la vista. Se limitó la cantidad de controles que se visualizan en pantalla para no saturar ni complicar la interfaz.

## ✅ Lista de tareas completadas

A continuación se presenta una lista tareas y requerimientos que se tuvieron en consideración para crear la aplicación.

- [x] `README.md` incluye info sobre proceso y decisiones de diseño.
- [x] `README.md` explica claramente quiénes son los usuarios y su relación con el producto.
- [x] `README.md` explica claramente cómo el producto soluciona los problemas/necesidades de los usuarios.
- [x] Usa VanillaJS.
- [x] No utiliza `this`.
- [x] Implementa `cipher.encode`.
- [x] Implementa `cipher.decode`.
- [x] Pasa linter con configuración provista.
- [x] Pasa pruebas unitarias.
- [x] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un mínimo del 50% de _branches_.
- [x] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el cifrado/descifrado.
- [x] Interfaz permite escribir un texto para ser cifrado.
- [x] Interfaz muestra el resultado del cifrado correctamente.
- [x] Interfaz permite escribir un texto para ser descifrado.
- [x] Interfaz muestra el resultado del descifrado correctamente.

<br>

---

## ℹ️ Información del documento:

* ### 👩‍💻 Autor: Belem Libertad Morales Alonso
* ### 📧 Correo: <belem.libertad@gmail.com>
* ### 🌐 GitHub: https://github.com/LibertaAlonso
