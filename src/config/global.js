export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Trabajo, energía y potencia',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Trabajo, energía y potencia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Definición y principios de trabajo y energía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto de trabajo mecánico y su cálculo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Energía cinética y su relación con el trabajo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Energía potencial gravitatoria y elástica',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Principio de conservación de la energía',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Aplicaciones industriales del trabajo y la energía',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Potencia y rendimiento energético',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definición de potencia mecánica',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Cálculo de potencia en máquinas y procesos industriales',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Concepto de eficiencia y rendimiento energético',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Pérdidas energéticas en sistemas reales',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Optimización del consumo energético',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Aplicaciones en sistemas físicos e industriales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Análisis energético de sistemas de transporte',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Evaluación de consumo de energía en procesos productivos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Diseño de sistemas energéticamente eficientes',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Uso de la energía en sistemas neumáticos e hidráulicos',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Estudio de casos industriales',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bujovtsev, B. B. (2010). <i>Problemas seleccionados de la física elemental. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72636?page=1',
    },
    {
      referencia:
        'Götze, R. (2010). <i>Elementos de física matemática. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72664?page=1',
    },
    {
      referencia:
        'Irodov, I. E. (2010). <i>Problemas de física general. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72820?page=1',
    },
    {
      referencia:
        'Lifante, G. Bravo, D. & Jaque, D. (2015). P<i>roblemas resueltos de fundamentos de física (I)</i>. Editorial Universidad Autónoma de Madrid. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/100705?page=1',
    },
    {
      referencia:
        'Pérez Oviedo, W. (2023). <i>De Newton a Nash: la influencia de la física y la matemática en la economía</i>. FLACSO Ecuador. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/249562?page=1',
    },
    {
      referencia:
        'Bujovtsev, B. B. (2010). <i>Problemas seleccionados de la física elemental. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72636?page=1',
    },
    {
      referencia:
        'Götze, R. (2010). <i>Elementos de física matemática. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72664?page=1',
    },
    {
      referencia:
        'Irodov, I. E. (2010). <i>Problemas de física general. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72820?page=1',
    },
    {
      referencia:
        'Lifante, G. Bravo, D. & Jaque, D. (2015). <i>Problemas resueltos de fundamentos de física (I)</i>. Editorial Universidad Autónoma de Madrid. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/100705?page=1',
    },
    {
      referencia:
        'Pérez Oviedo, W. (2023). <i>De Newton a Nash: la influencia de la física y la matemática en la economía</i>. FLACSO Ecuador. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/249562?page=1',
    },
    {
      referencia:
        'Bujovtsev, B. B. (2010). <i>Problemas seleccionados de la física elemental. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72636?page=1',
    },
    {
      referencia:
        'Götze, R. (2010). <i>Elementos de física matemática. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72664?page=1',
    },
    {
      referencia:
        'Irodov, I. E. (2010). <i>Problemas de física general. Tomo I</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/72820?page=1',
    },
    {
      referencia:
        'Lifante, G. Bravo, D. & Jaque, D. (2015). <i>Problemas resueltos de fundamentos de física (I)</i>. Editorial Universidad Autónoma de Madrid. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/100705?page=1',
    },
    {
      referencia:
        'Pérez Oviedo, W. (2023). <i>De Newton a Nash: la influencia de la física y la matemática en la economía</i>. FLACSO Ecuador. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/249562?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Conservación de la energía',
      significado:
        'Principio que establece que la energía no se crea ni se destruye, sino que se transforma de una forma a otra en un sistema cerrado.',
    },
    {
      termino: 'Eficiencia energética',
      significado:
        'Medida de la cantidad de energía útil que se obtiene de un sistema, en relación con la energía total suministrada.',
    },
    {
      termino: 'Energía',
      significado:
        'Capacidad de un sistema para realizar trabajo, que puede manifestarse en diferentes formas, como energía cinética, potencial, térmica, eléctrica, entre otras.',
    },
    {
      termino: 'Energía cinética',
      significado:
        'Energía asociada al movimiento de un objeto, que depende de su masa y velocidad.',
    },
    {
      termino: 'Energía mecánica',
      significado:
        'Suma de la energía cinética y la energía potencial de un sistema.',
    },
    {
      termino: 'Energía potencial elástica',
      significado:
        'Energía almacenada en un objeto elástico debido a su deformación, como un resorte comprimido o estirado.',
    },
    {
      termino: 'Energía potencial gravitatoria',
      significado:
        'Energía almacenada en un objeto, debido a su posición en un campo gravitatorio, que depende de su masa y altura respecto a un nivel de referencia.',
    },
    {
      termino: 'Energía térmica',
      significado:
        'Energía asociada al movimiento aleatorio de las partículas que componen un sistema, relacionada con su temperatura.',
    },
    {
      termino: 'Energía interna',
      significado:
        'Energía asociada a la estructura interna de un sistema, incluyendo la energía cinética de las partículas y la energía potencial de las interacciones entre ellas.',
    },
    {
      termino: 'Fuerzas conservativas',
      significado:
        'Fuerzas que dependen únicamente de la posición y cuyo trabajo no depende de la trayectoria seguida, como la fuerza gravitatoria o la fuerza elástica.',
    },
    {
      termino: 'Fuerzas no conservativas',
      significado:
        'Fuerzas que dependen de otros factores además de la posición, como la velocidad o el tiempo, y cuyo trabajo depende de la trayectoria seguida, como la fuerza de fricción.',
    },
    {
      termino: 'Joule (J)',
      significado:
        'Unidad de medida de trabajo y energía en el Sistema Internacional de Unidades (SI), equivalente a un newton-metro (N·m).',
    },
    {
      termino: 'Ley de conservación de la energía mecánica',
      significado:
        'Principio que establece que, en ausencia de fuerzas no conservativas, la suma de la energía cinética y la energía potencial de un sistema permanece constante.',
    },
    {
      termino: 'Par motor',
      significado:
        'Momento de fuerza que produce rotación en un eje, relacionado con la potencia y la velocidad angular en máquinas rotativas.',
    },
    {
      termino: 'Pérdidas energéticas',
      significado:
        'Energía que se disipa o se pierde en forma de calor, fricción, resistencia eléctrica u otras formas no deseadas durante la transferencia o transformación de energía en un sistema.',
    },
    {
      termino: 'Potencia',
      significado:
        'Tasa a la cual se realiza trabajo o se transfiere energía, medida en vatios (W) o joules por segundo (J/s).',
    },
    {
      termino: 'Presión',
      significado:
        'Fuerza por unidad de área, utilizada para describir la energía en sistemas hidráulicos y neumáticos.',
    },
    {
      termino: 'Proceso adiabático',
      significado:
        'Proceso termodinámico en el que no hay transferencia de calor entre el sistema y su entorno, y los cambios de energía se deben únicamente al trabajo realizado.',
    },
    {
      termino: 'Proceso isotérmico',
      significado:
        'Proceso termodinámico que ocurre a temperatura constante, donde el sistema intercambia calor con su entorno para mantener la temperatura sin cambios.',
    },
    {
      termino: 'Rendimiento energético',
      significado:
        'Relación entre la energía útil obtenida y la energía total suministrada a un sistema, expresada como un porcentaje.',
    },
    {
      termino: 'Sistema',
      significado:
        'Conjunto de elementos o componentes que interactúan entre sí para cumplir una función específica, como una máquina, un proceso o un dispositivo.',
    },
    {
      termino: 'Teorema del trabajo y la energía cinética',
      significado:
        'Establece que el trabajo neto realizado sobre un objeto es igual al cambio en su energía cinética.',
    },
    {
      termino: 'Trabajo',
      significado:
        'Producto escalar de la fuerza aplicada sobre un objeto y el desplazamiento resultante en la dirección de la fuerza, medido en joules (J) o newton-metros (N·m).',
    },
    {
      termino: 'Transformaciones energéticas',
      significado:
        'Procesos en los que la energía cambia de una forma a otra, como la conversión de energía eléctrica en energía mecánica en un motor.',
    },
    {
      termino: 'Vatio (W)',
      significado:
        'Unidad de medida de potencia en el Sistema Internacional de Unidades (SI), equivalente a un joule por segundo (J/s).',
    },
  ],
}
