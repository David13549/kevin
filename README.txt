# Rossela & Kevin — Página especial

## Estructura

rossela-kevin-web/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── foto1.jpg
    ├── foto2.jpg
    ├── foto3.jpg
    ├── foto4.jpg
    ├── foto5.jpg
    ├── stitch-blue.png
    └── stitch-pink.png

## Cómo usarla

1. Abre `index.html` en el navegador.
2. Coloca tus fotografías dentro de la carpeta `img`.
3. Usa exactamente estos nombres o cambia los `src` correspondientes en `index.html`:
   - foto1.jpg
   - foto2.jpg
   - foto3.jpg
   - foto4.jpg
   - foto5.jpg
   - stitch-blue.png
   - stitch-pink.png

## Fecha de inicio

La relación está configurada desde:

04 de noviembre de 2025

JavaScript calcula automáticamente los meses, días y horas transcurridos.

Si necesitas cambiar la fecha, edita en `js/script.js`:

const START_DATE = new Date(2025, 10, 4);

Importante: en JavaScript los meses empiezan en 0:
0 = enero
1 = febrero
...
10 = noviembre

## Carta

El texto de la carta está dentro de `index.html`, en la sección:

<!-- MODAL DE LA CARTA -->

Puedes reemplazarlo por un mensaje completamente personalizado.

## QR

Cuando la página esté publicada en Internet, genera el QR usando la URL pública de `index.html`/tu dominio. El QR debe apuntar a la dirección web donde esté publicada la página.
