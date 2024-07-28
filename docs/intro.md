---
sidebar_position: 1
---

# Introducción

**PandaTools** es un proyecto diseñado para mejorar la experiencia de usuario en la terminal, proporcionando la capacidad de mostrar colores y formatos personalizados. Permite imprimir matrices con estilos configurables, aceptando una amplia variedad de parámetros para personalizar la presentación, incluyendo colores, estilos de texto y bordes.


## Ejemplo de uso

Ejemplo de como imprimir por consola un texto con colores.

import CustomCodeBlock from '@site/src/components/CustomCodeBlock';
import ImageRounded from '@site/src/components/ImageRounded';

<CustomCodeBlock className="language-js" title="java">
{`import pandatools.PandaTools;

public class Main {
    public static void main(String[] args) {
        PandaTools.println("ERROR", 1, "hello ERROR");
        PandaTools.println("SUCCESS", 1, "hello SUCCESS");
    }
}`}
</CustomCodeBlock>

<br/>

Como resultado se imprime por consola:

<ImageRounded src={require('./img/01_dark.png').default} alt="alt text" />
