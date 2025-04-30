<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Aplicaciones en sistemas físicos e industriales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5     
      .col.order-md-2.order-lg-1     
        p(data-aos="fade-down") La comprensión del trabajo, la energía y la potencia es esencial para el análisis y diseño de sistemas reales que enfrentan los ingenieros en su práctica profesional.

      .col-lg-auto.mb-3.mb-lg-0.order-md-1.order-lg-2 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/47.png", data-aos="zoom-in") 

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Aplicaciones en sistemas físicos e industriales
            p.mb-4(data-aos="fade-right") En el PDF Aplicaciones en sistemas físicos e industriales, se presentan ejemplos concretos que ilustran cómo estos conceptos se aplican en procesos de transporte, manufactura, generación de energía y sistemas neumáticos e hidráulicos. Este enfoque permite desarrollar habilidades prácticas para optimizar el rendimiento energético y mejorar la eficiencia en distintos contextos industriales.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Aplicaciones en sistemas físicos e industriales  
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/48.png', alt='')

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Análisis energético de sistemas de transporte
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/49.png", data-aos="zoom-in")      
      .col-lg-8
        p(data-aos="fade-down") El análisis energético de sistemas de transporte, es fundamental para evaluar su eficiencia y sostenibilidad. Este análisis implica considerar las diversas formas de energía involucradas, como la energía cinética de los vehículos, la energía potencial gravitatoria en pendientes, la energía química almacenada en los combustibles y la energía eléctrica en sistemas de propulsión alternativos (Pérez Oviedo, 2023).
        p(data-aos="fade-down") Irodov (2010) destaca la importancia de considerar las fuerzas de resistencia al movimiento, como la fricción de rodadura, la resistencia aerodinámica y las pérdidas en la transmisión, al realizar un análisis energético de sistemas de transporte. Estas fuerzas disipan energía y reducen la eficiencia overall del sistema.

        .bg-color-6.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/31.svg")
            .col-lg
              p.mb-0 Por ejemplo, en el análisis energético de un vehículo eléctrico, se deben tener en cuenta la eficiencia del motor eléctrico, las pérdidas en la batería durante los ciclos de carga y descarga, la energía consumida por los sistemas auxiliares (como la climatización y la iluminación) y la energía regenerada durante el frenado. Este análisis permite optimizar el diseño del vehículo y su estrategia de gestión energética. 


    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          h5 Ejercicio

          p Un camión de 10000 kg viaja a una velocidad constante de 90 km/h por una carretera plana. Si la fuerza de resistencia total (fricción y aerodinámica) es de 5000 N, calcule la potencia necesaria para mantener la velocidad del camión.
          h5.mb-0 Solución 
          h5.mb-2 Datos:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Masa del camión (m) = 10000 kg
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Velocidad del camión (v) = 90 km/h = 25 m/s
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Fuerza de resistencia total (Fres) = 5000 N
          p.mb-0 #[b Fórmula:] P = Fres • v
          p.mb-0 #[b Cálculo:] Potencia necesaria para mantener la velocidad (P): P = 5000 N • 25 m/s = 125000 W = 125 kW
          p.mb-0 #[b Resultado:] la potencia necesaria para mantener la velocidad constante del camión es de 125 kW.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/50.png", data-aos="zoom-in")                          

    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Evaluación de consumo de energía en procesos productivos
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Evaluación de consumo de energía en procesos 
            p.mb-4(data-aos="fade-right") En el PDF Evaluación de consumo de energía en procesos productivos, se analizan métodos y herramientas para cuantificar y optimizar el uso energético en actividades industriales, permitiendo identificar puntos críticos y aplicar medidas correctivas. A través de ejemplos prácticos, se ilustra cómo este análisis contribuye a reducir costos, mejorar el rendimiento de los equipos y avanzar hacia una producción más sostenible.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> productivos  
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/48.png', alt='')

    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3] Diseño de sistemas energéticamente eficientes
    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") El diseño de sistemas energéticamente eficientes es un objetivo clave en la ingeniería industrial, debido a que permite reducir el consumo de energía, los costos de operación y el impacto ambiental. Este diseño implica considerar la eficiencia energética en todas las etapas del ciclo de vida del sistema, desde la selección de materiales y componentes, hasta la operación y el mantenimiento (Bujovtsev, 2010).

        .bg-color-5.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/51.svg")
            .col-lg
              p Para diseñar sistemas energéticamente eficientes, es fundamental comprender los principios de la termodinámica y la transferencia de calor.

              p La primera Ley de la termodinámica establece que la energía no se crea ni se destruye, sino que se transforma de una forma a otra.	 

              p.mb-0 La segunda Ley de la termodinámica, introduce el concepto de entropía y establece que, en un sistema cerrado, la entropía siempre aumenta.

        p(data-aos="fade-down") Estas leyes proporcionan un marco para analizar las transformaciones energéticas y las pérdidas en los sistemas (Lifante et al., 2015).

        p(data-aos="fade-down") Algunas estrategias para diseñar sistemas energéticamente eficientes, incluyen:

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/52.png", data-aos="zoom-in")   

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/53.png")            
            .col-lg-7
              h5 Seleccionar equipos y componentes de alta eficiencia
              p Optar por motores eléctricos, bombas, compresores y otros equipos con clasificaciones de eficiencia elevadas, puede reducir significativamente el consumo de energía. 

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/54.png")            
            .col-lg-7
              h5 Optimizar el dimensionamiento y la operación de los equipos
              p Asegurar que los equipos estén correctamente dimensionados para la carga de trabajo y que operen en sus puntos de máxima eficiencia, puede minimizar las pérdidas energéticas. 

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/55.png")            
            .col-lg-7
              h5 Implementar sistemas de control y automatización
              p Los sistemas de control permiten ajustar la operación de los equipos en función de la demanda, evitando el desperdicio de energía durante períodos de baja carga. 

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/56.png")            
            .col-lg-7
              h5 Recuperar y reutilizar energía residual
              p Aprovechar el calor residual de procesos de alta temperatura para precalentar materiales o generar electricidad mediante ciclos de cogeneración puede aumentar la eficiencia energética overall del sistema. 

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/57.png")            
            .col-lg-7
              h5 Mejorar el aislamiento térmico
              p Un buen aislamiento térmico reduce las pérdidas de calor en tuberías, tanques y equipos, lo que se traduce en un menor consumo de energía para mantener las temperaturas deseadas.  

    p(data-aos="fade-down") Por ejemplo, en el diseño de un sistema de refrigeración industrial, la selección de compresores de alta eficiencia, el uso de intercambiadores de calor de placas en lugar de tubos y coraza, la implementación de un sistema de control de capacidad variable y la recuperación del calor del condensador para calentar agua pueden contribuir a mejorar significativamente la eficiencia energética del sistema. 

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          h5 Ejercicio

          p Un intercambiador de calor de tubos y coraza tiene una eficiencia del 60 %. Si el fluido caliente entra a 150 °C y sale a 90 °C, y el fluido frío entra a 30 °C, calcule la temperatura de salida del fluido frío.
          h5.mb-0 Solución 
          h5.mb-2 Datos:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Eficiencia del intercambiador de calor (ε) = 0.6
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Temperatura de entrada del fluido caliente (Th,in) = 150 °C
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Temperatura de salida del fluido caliente (Th,out) = 90 °C
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Temperatura de entrada del fluido frío (Tc,in) = 30 °C               
          p.mb-0 #[b Fórmula:] ε = (Tc,out – Tc,in) / (Th,in – Tc,in)
          p.mb-0 Despejando Tc,out: Tc,out = ε • (Th,in – Tc,in) + Tc,in
          p.mb-0 #[b Cálculo:] Temperatura de salida del fluido frío (Tc,out): Tc,out = 0.6 • (150 °C – 30 °C) + 30 °C = 102 °C
          p.mb-0 #[b Resultado:]  la temperatura de salida del fluido frío en el intercambiador de calor es de 102 °C.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/58.png", data-aos="zoom-in")  


    #t_4_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.4] Uso de la energía en sistemas neumáticos e hidráulicos
    .bg-full-width-2.bg-fondo-1.py-4
      .px-4.px-md-5   
        .row.align-items-start.mb-5(data-aos="fade-left") 
          .col-lg-8
            AcordionA(tipo="b")
              .div(titulo="Sistemas neumáticos")
                p En los sistemas neumáticos, la energía se suministra mediante compresores que aumentan la presión del aire. Esta energía de presión se convierte en energía cinética y trabajo mecánico a través de actuadores como cilindros neumáticos y motores de aire. Las ventajas de los sistemas neumáticos incluyen su simplicidad, seguridad en ambientes explosivos y la disponibilidad de aire comprimido en la mayoría de las plantas industriales (Götze, 2010).
              .div(titulo="Sistemas hidráulicos")
                p Los #[b sistemas hidráulicos] utilizan líquidos incompresibles, como aceite mineral, para transmitir potencia. Estos sistemas pueden generar fuerzas y pares elevados en actuadores compactos, lo que los hace adecuados para aplicaciones que requieren alta capacidad de carga y control preciso. Sin embargo, los sistemas hidráulicos son más complejos y requieren un mantenimiento más estricto que los sistemas neumáticos (Irodov, 2010).                                                                                          
          .col-lg-4
            figure
              img.img-a.img-t(src="@/assets/curso/temas/59.png", alt="")

        p(data-aos="fade-down") Para mejorar la eficiencia energética en sistemas neumáticos e hidráulicos, se pueden implementar medidas como: 


        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/60.svg" alt="" style="width: 90px")
              h5.text-center Reducir las fugas 
              p.mb-0.text-center Las fugas de aire o aceite pueden desperdiciar una cantidad significativa de energía. Un programa de detección y reparación de fugas, es esencial para mantener la eficiencia del sistema.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/61.svg" alt="" style="width: 90px")
              h5.text-center Optimizar la presión de trabajo 
              p.mb-0.text-center Operar los sistemas a la presión mínima requerida para la aplicación puede reducir el consumo de energía y prolongar la vida útil de los componentes.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/62.svg" alt="" style="width: 90px")
              h5.text-center Utilizar actuadores de tamaño adecuado 
              p.mb-0.text-center Seleccionar actuadores con el tamaño y la capacidad apropiados para la carga de trabajo, evita el desperdicio de energía y mejora el control del sistema.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/63.svg" alt="" style="width: 90px")
              h5.text-center Recuperar energía 
              p.mb-0.text-center En sistemas hidráulicos, la energía cinética del fluido durante la desaceleración de actuadores puede recuperarse y reutilizarse mediante sistemas de acumulación o regeneración.  

    p(data-aos="fade-down") Por ejemplo, en una prensa hidráulica utilizada para la conformación de piezas metálicas, la implementación de un sistema de acumulación hidráulica permite almacenar energía durante la carrera de retorno del cilindro y liberarla durante la carrera de trabajo, lo que reduce el consumo de energía del sistema de bombeo y mejora el tiempo de ciclo de la máquina. 

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-1.p-4.h-100.j1(data-aos="fade-left")
          h5 Ejercicio

          p Un cilindro neumático tiene un diámetro interior de 100 mm y una carrera de 500 mm. Si la presión de trabajo es de 6 bar y la fuerza de fricción se considera despreciable, calcule la fuerza y el trabajo realizado por el cilindro en una carrera completa.
          h5.mb-0 Solución 
          h5.mb-2 Datos:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Diámetro interior del cilindro (D) = 100 mm = 0.1 m
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Carrera del cilindro (L) = 500 mm = 0.5 m = 150 °C
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Presión de trabajo (P) = 6 bar = 600000 Pa
          p.mb-0 #[b Fórmulas:] F = P • A A = (π • D²) / 4 W = F • L
          p.mb-0 #[b Cálculo:] Área del cilindro (A): A = (π • (0.1 m)²) / 4 ≈ 0.007854 m²
          p.mb-0 Fuerza ejercida por el cilindro (F): F = 600000 Pa • 0.007854 m² ≈ 4712 N
          p.mb-0 Trabajo realizado por el cilindro en una carrera completa (W): W = 4712 N • 0.5 m = 2356 J
          p.mb-0 #[b Resultado:] la fuerza ejercida por el cilindro neumático es de aproximadamente 4712 N, y el trabajo realizado en una carrera completa es de 2356 J.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/64.png", data-aos="zoom-in")

    #t_4_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.5] Estudio de casos industriales 

    p(data-aos="fade-down") El estudio de casos industriales es una herramienta valiosa para comprender la aplicación práctica de los conceptos de trabajo, energía y potencia, en sistemas reales. Estos casos permiten analizar el desempeño energético de procesos y equipos, identificar oportunidades de mejora y evaluar el impacto de las medidas implementadas (Pérez Oviedo, 2023).

    p(data-aos="fade-down") Conozcamos algunos ejemplos:  

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/65.png")            
            .col-lg-7
              p Un ejemplo de estudio de caso es el análisis energético de una planta de producción de papel. En esta planta, se pueden examinar aspectos como el consumo de energía térmica en el proceso de secado del papel, el consumo de energía eléctrica en los motores de las máquinas de papel y bombas, y la eficiencia de los sistemas de generación y distribución de vapor. A partir de este análisis, se pueden identificar medidas de eficiencia energética, como la optimización de los parámetros de proceso, la recuperación de calor residual y la modernización de equipos (Bujovtsev, 2010). 

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/66.png")            
            .col-lg-7
              p Otro ejemplo es el estudio de caso de un sistema de transporte de materiales en una mina a cielo abierto. En este caso, se puede analizar el consumo de energía de los camiones de transporte, considerando factores como la resistencia a la rodadura, la pendiente de las vías y la eficiencia de los motores. A partir de este análisis, se pueden evaluar alternativas como la optimización de rutas de transporte, el uso de sistemas de asistencia eléctrica para los camiones y la implementación de sistemas de gestión de flotas para mejorar la eficiencia energética (Lifante et al., 2015).

    p(data-aos="fade-down") El estudio de casos industriales también puede abarcar el análisis de sistemas de generación de energía, como plantas de cogeneración o parques eólicos. En estos casos, se evalúa el desempeño energético de los equipos, se identifican las pérdidas y se proponen mejoras para aumentar la eficiencia y la confiabilidad del sistema (Götze, 2010).

    .row.mb-5.align-items-center
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-1.p-4.h-100.j1(data-aos="fade-left")
          h5 Ejercicio

          p Una planta de cogeneración tiene una caldera de 10 MW que genera vapor a 400 °C y 40 bar. El vapor se utiliza en una turbina de contrapresión para generar electricidad y luego se emplea en un proceso industrial que requiere vapor a 200 °C y 10 bar. Si el flujo másico de vapor es de 5 kg/s y la eficiencia de la turbina es del 80 %, calcule la potencia eléctrica generada y la potencia térmica disponible para el proceso industrial.
          h5.mb-0 Solución 
          h5.mb-2 Datos:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Potencia de la caldera (Pcal) = 10 MW
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Temperatura del vapor de alta presión (Talta) = 400 °C
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Presión del vapor de alta presión (palta) = 40 bar
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Temperatura del vapor de baja presión (Tbaja) = 200 °C
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Presión del vapor de baja presión (pbaja) = 10 bar
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Flujo másico de vapor (mdot) = 5 kg/s
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Eficiencia de la turbina (ηturb) = 0.8 el trabajo realizado en una carrera completa es de 2356 J.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/67.png", data-aos="zoom-in")   

    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/69.png", data-aos="zoom-in")          
      .col-lg-8
        .bg-color-1.p-4.h-100.j1(data-aos="fade-left")
          p Para resolver este problema, necesitamos utilizar tablas de vapor o un software de propiedades termodinámicas para obtener la entalpía específica del vapor en las condiciones de alta y baja presión. A modo de ejemplo, utilizaremos los siguientes valores:

          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Entalpía específica del vapor a 400 °C y 40 bar (halta) = 3200 kJ/kg
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Entalpía específica del vapor a 200 °C y 10 bar (hbaja) = 2800 kJ/kg

          p  #[b Fórmulas:] Pele = mdot • (halta – hbaja) • ηturb Pter = mdot • (hbaja – href)
          p Donde href es la entalpía específica del agua de alimentación a la caldera, que se asume como 100 kJ/kg para este ejemplo.
          p #[b Cálculo:] Potencia eléctrica generada (Pele): Pele = 5 kg/s • (3200 kJ/kg – 2800 kJ/kg) • 0.8 = 1600 kW = 1.6 MW
          p #[b Potencia térmica disponible para el proceso industrial (Pter):] Pter = 5 kg/s • (2800 kJ/kg – 100 kJ/kg) = 13500 kW = 13.5 MW
          p.mb-0 #[b Resultado:] la potencia eléctrica generada por la turbina de contrapresión es de 1.6 MW, y la potencia térmica disponible para el proceso industrial es de 13.5 MW.

    p(data-aos="fade-down") En conclusión, la Unidad 2 de Física I para Ingeniería Industrial, ha abordado los conceptos fundamentales de trabajo, energía y potencia, así como sus aplicaciones en sistemas físicos e industriales. Comprender estos conceptos es esencial para analizar, diseñar y optimizar sistemas energéticos eficientes y sostenibles. 

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") A lo largo de la unidad, se han explorado las definiciones y principios del trabajo mecánico, la energía cinética, la energía potencial y el principio de conservación de la energía. Se ha destacado la importancia de la potencia y el rendimiento energético en sistemas reales, considerando las pérdidas y la eficiencia.

        .bg-color-5.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/51.svg")
            .col-lg
              p.mb-0 Además, se han presentado aplicaciones prácticas en sistemas de transporte, procesos productivos, sistemas neumáticos e hidráulicos, y se han analizado estudios de casos industriales. Los ejercicios resueltos han permitido consolidar los conceptos y desarrollar habilidades para resolver problemas relacionados con el trabajo, la energía y la potencia.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/68.png", data-aos="zoom-in") 

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
