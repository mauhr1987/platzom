# Platzom

Platzom es un idioma inventado para el [Curso de Fundamentos de Javascript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educacion online

## Descripcion del idioma

- Si la palabra termina en "ar", se le quitan esos dos caracteres.
- Si la palabra inicia con Z, se le añade "pe" al final.
- Si la traducción tiene mas de 10 letras, dividir la palabra a la mitad y unir con un "-".
- Por ultimo, si la palabra original es un palíndromo ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas.

## Instalacion

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'
platzon('Programar') //Program
platzon('Zorro') //Zorrope
platzon('Zarpar') //Zarppe
platzon('Abecedario') //Abece-dario
platzon('sometemos') //SoMeTeMoS
```

## Creditos

- [Mauricio Hidalgo](https://www.facebook.com/mauricio.hidr)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
