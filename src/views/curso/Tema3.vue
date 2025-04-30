<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Potencia y rendimiento energético'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5     
      .col.order-md-2.order-lg-1     
        p(data-aos="fade-down") En esta sección, se abordarán dos conceptos fundamentales estrechamente relacionados con el trabajo y la energía: la potencia y el rendimiento energético. Comprender estos conceptos es esencial para analizar y optimizar el desempeño de los sistemas industriales, así como para tomar decisiones informadas sobre el uso eficiente de la energía.

      .col-lg-auto.mb-3.mb-lg-0.order-md-1.order-lg-2 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/34.png", data-aos="zoom-in") 

    .bg-full-width.bg-color-video.mb-5(data-aos="fade-left")
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/E_fZRzOD6bE?si=3GE4DTRlIaZUg2-D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    p(data-aos="fade-down") Para mejorar el rendimiento energético en los sistemas industriales, se pueden emplear diversas estrategias, como: 

    .bg-full-width.bg-color-info.mb-5(data-aos="fade-right")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-primario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/35.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="11%" y="50%" numero="+")
                  h5 Primero
                  p #[b Seleccionar equipos y componentes de alta eficiencia]. Optar por motores eléctricos, bombas y otros equipos con clasificaciones de eficiencia elevadas, puede reducir significativamente el consumo de energía.
                .bg-color-white.box-shadow.p-3(x="30.5%" y="33%" numero="+")
                  h5 Segundo
                  p #[b Optimizar el diseño y dimensionamiento de los sistemas]. Asegurar que los equipos estén correctamente dimensionados para la carga de trabajo y que operen en sus puntos de máxima eficiencia, puede minimizar las pérdidas de energía.
                .bg-color-white.box-shadow.p-3(x="50%" y="10%" numero="+")
                  h5 Tercero
                  p #[b Implementar sistemas de control y automatización]. Los sistemas de control permiten ajustar la operación de los equipos en función de la demanda, evitando el desperdicio de energía, durante períodos de baja carga.
                .bg-color-white.box-shadow.p-3(x="69.6%" y="33%" numero="+")
                  h5 Cuarto
                  p #[b Aprovechar la recuperación de energía]. Capturar y reutilizar la energía residual, como el calor de los gases de escape o la energía cinética de los fluidos, puede aumentar significativamente, la eficiencia global del sistema.
                .bg-color-white.box-shadow.p-3(x="89%" y="50%" numero="+")
                  h5 Quinto
                  p #[b Realizar un mantenimiento adecuado]. Un mantenimiento regular de los equipos, como la lubricación, la limpieza y el ajuste, puede reducir las pérdidas por fricción y desgaste, mejorando así el rendimiento energético. 

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Definición de potencia mecánica
    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") La potencia mecánica es la tasa a la cual se realiza trabajo o se transfiere energía. Se define como el trabajo realizado o la energía transferida por unidad de tiempo (Götze, 2010). Matemáticamente, se expresa como P = #[b W] / t, donde P es la potencia, W es el trabajo realizado y t es el tiempo empleado.

        p(data-aos="fade-down") Irodov (2010), explica que la potencia también se puede calcular como el producto de la fuerza aplicada y la velocidad del objeto en la dirección de la fuerza. Esta relación se expresa como P = F • v, donde F es la magnitud de la fuerza y v es la velocidad del objeto en la dirección de la fuerza.

        .bg-color-6.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/31.svg")
            .col-lg
              p.mb-0 En la industria, la potencia mecánica es un concepto clave para evaluar el rendimiento de máquinas y procesos. Por ejemplo, en un motor eléctrico, la potencia mecánica de salida se relaciona con el par motor y la velocidad angular del eje. Cuanto mayor sea la potencia mecánica, más trabajo podrá realizar el motor, en un tiempo determinado. 
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/36.png", data-aos="zoom-in")


    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/37.png", data-aos="zoom-in")             
      .col-lg-8
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          h5 Ejercicio

          p Un motor eléctrico levanta una carga de 500 kg a una velocidad constante de 0.5 m/s. Calcule la potencia mecánica desarrollada por el motor.
          h5.mb-0 Solución 
          h5.mb-2 Datos:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Masa de la carga (m) = 500 kg
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Velocidad de elevación (v) = 0.5 m/s
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Aceleración debida a la gravedad (g) = 9.8 m/s#[sup ²]
          p.mb-0 #[b Fórmula:] P = F • v F = m • g
          p.mb-0 #[b Cálculo:]Fuerza aplicada por el motor (F): F = 500 kg • 9.8 m/s#[sup ²] = 4900 N 
          p.mb-0 Potencia mecánica desarrollada por el motor (P): P = 4900 N • 0.5 m/s = 2450 W
          p.mb-0 #[b Resultado:] La potencia mecánica desarrollada por el motor al levantar la carga es de 2450 W o 2.45 kW.


    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Cálculo de potencia en máquinas y procesos industriales
    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        p(data-aos="fade-down") El cálculo de la potencia en máquinas y procesos industriales, es esencial para evaluar su rendimiento y eficiencia energética. La potencia se puede determinar a partir de la medición de parámetros como la fuerza, el par, la velocidad y el caudal, según el tipo de máquina o proceso (Lifante et al., 2015).

        .bg-color-8.p-4.mb-4(data-aos="fade-left")
          p.mb-0 En la industria, la potencia mecánica es un concepto clave para evaluar el rendimiento de máquinas y procesos. Por ejemplo, en un motor eléctrico, la potencia mecánica de salida se relaciona con el par motor y la velocidad angular del eje. Cuanto mayor sea la potencia mecánica, más trabajo podrá realizar el motor, en un tiempo determinado. 

        p(data-aos="fade-down") Por ejemplo, en una bomba centrífuga utilizada en un proceso de transferencia de líquidos, la potencia hidráulica se calcula como el producto de la presión diferencial generada por la bomba y el caudal volumétrico del líquido. Conocer la potencia permite a los ingenieros industriales seleccionar el equipo adecuado y optimizar el consumo energético del proceso.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/38.png", data-aos="zoom-in")   

    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/39.png", data-aos="zoom-in")             
      .col-lg-8
        .bg-color-1.p-4.h-100.j1(data-aos="fade-left")
          h5 Ejercicio

          p Un compresor de aire opera a una presión de 7 bar y suministra un caudal de 0.5 m#[sup ³]/min. Si la eficiencia del compresor es del 75 %, calcule la potencia eléctrica consumida por el compresor.
          h5.mb-0 Solución 
          h5.mb-2 Datos:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Presión de operación (p) = 7 bar = 700000 Pa
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Caudal volumétrico (Q) = 0.5 m#[sup ³]/min = 0.00833 m#[sup ³]/s
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Eficiencia del compresor (η) = 0.75
          p.mb-0 #[b Fórmula:] Phid = p • Q Pele = Phid / η
          p.mb-0 #[b Cálculo:]Potencia hidráulica (Phid): Phid = 700000 Pa • 0.00833 m#[sup ³]/s = 5831 W

          p.mb-0 #[b Potencia eléctrica consumida (Pele):] Pele = 5831 W / 0.75 ≈ 7775 W ≈ 7.8 kW

          p.mb-0 #[b Resultado:] la potencia eléctrica consumida por el compresor de aire es de aproximadamente 7.8 kW.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Concepto de eficiencia y rendimiento energético
    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        p(data-aos="fade-down") La eficiencia energética es una medida de la cantidad de energía útil que se obtiene de un sistema en relación con la energía total suministrada. Se expresa como un porcentaje y se calcula como
        .bg-color-5.p-4.mb-4(data-aos="fade-left")
          p.text-center η = (Eútil / Etotal) • 100 %
          p.mb-0 Por ejemplo, en un sistema de iluminación industrial, la eficiencia energética se puede mejorar mediante el uso de lámparas LED de alta eficiencia, en lugar de lámparas incandescentes tradicionales. Las lámparas LED convierten una mayor proporción de la energía eléctrica suministrada en luz visible, lo que resulta en un menor consumo de energía y una reducción de los costos de iluminación. 

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/40.png", data-aos="zoom-in")  

    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/41.png", data-aos="zoom-in")             
      .col-lg-8
        .bg-color-1.p-4.h-100.j1(data-aos="fade-left")
          h5 Ejercicio

          p Una caldera industrial consume 100 kW de potencia eléctrica y produce 80 kW de potencia térmica útil. Calcule la eficiencia energética de la caldera.
          h5.mb-0 Solución 
          h5.mb-2 Datos:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Potencia eléctrica consumida (Etotal) = 100 kW
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Potencia térmica útil producida (Eútil) = 80 kW

          p.mb-0 #[b Fórmula:] η = (Eútil / Etotal) • 100 %
          p.mb-0 #[b Cálculo:]Eficiencia energética de la caldera (η): η = (80 kW / 100 kW) • 100 % = 0.8 • 100 % = 80 %
          p.mb-0 #[b Resultado:] la eficiencia energética de la caldera industrial es del 80 %.

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Pérdidas energéticas en sistemas reales
    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        p(data-aos="fade-down") En los sistemas reales, siempre existen pérdidas energéticas que reducen la eficiencia y el rendimiento. Estas pérdidas se deben a varios factores, como la fricción, la resistencia eléctrica, la disipación de calor y las fugas de energía (Irodov, 2010). Comprender y cuantificar estas pérdidas, es crucial para mejorar la eficiencia energética de los sistemas industriales.

        p(data-aos="fade-down") Lifante et al. (2015), clasifican las pérdidas energéticas en dos categorías principales: pérdidas mecánicas y pérdidas eléctricas. Las pérdidas mecánicas incluyen la fricción en cojinetes, engranajes y otras partes móviles, así como la resistencia aerodinámica y la deformación elástica de los componentes. Las pérdidas eléctricas se deben principalmente al efecto Joule en conductores y a las pérdidas en núcleos magnéticos de transformadores y motores.
        .bg-color-5.p-4(data-aos="fade-left")
          p.mb-0 Por ejemplo, en un motor eléctrico, las pérdidas energéticas se producen tanto en el devanado del estator y del rotor (pérdidas eléctricas) como en los cojinetes y el ventilador de refrigeración (pérdidas mecánicas). Estas pérdidas generan calor y reducen la eficiencia del motor. Para minimizarlas, los ingenieros industriales pueden seleccionar materiales de alta conductividad eléctrica, optimizar el diseño de los devanados y utilizar lubricantes de baja fricción en los cojinetes. 

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/42.png", data-aos="zoom-in") 

    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/43.png", data-aos="zoom-in")             
      .col-lg-8
        .bg-color-1.p-4.h-100.j1(data-aos="fade-left")
          h5 Ejercicio

          p Un motor eléctrico consume una potencia de 10 kW y entrega una potencia mecánica útil de 8.5 kW. Calcule la potencia perdida y la eficiencia del motor.
          h5.mb-0 Solución 
          h5.mb-2 Datos:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Potencia eléctrica consumida (Pele) = 10 kW
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Potencia mecánica útil entregada (Pmec) = 8.5 kW

          p.mb-0 #[b Fórmula:] Pper = Pele – Pmec η = (Pmec / Pele) • 100 %
          p.mb-0 #[b Cálculo:] Potencia perdida (Pper): Pper = 10 kW – 8.5 kW = 1.5 kW
          p.mb-0 #[b Eficiencia del motor (η):] η = (8.5 kW / 10 kW) • 100 % = 0.85 · 100 % = 85 %
          p.mb-0 #[b Resultado:] la potencia perdida en el motor eléctrico es de 1.5 kW y su eficiencia es del 85 %.

    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Optimización del consumo energético
    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") La optimización del consumo energético es un objetivo clave en la industria, porque permite reducir los costos de operación, mejorar la competitividad y minimizar el impacto ambiental. La optimización energética implica identificar e implementar medidas para reducir el consumo de energía sin comprometer la calidad o la productividad de los procesos (Pérez Oviedo, 2023).

        .bg-color-5.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/46.svg")
            .col-lg
              p.mb-0 Bujovtsev (2010), sugiere varias estrategias para optimizar el consumo energético en sistemas industriales. Estas estrategias incluyen la selección de equipos de alta eficiencia, la implementación de sistemas de control y automatización, la recuperación de calor residual, la mejora del aislamiento térmico y la adopción de prácticas de mantenimiento preventivo.

        p(data-aos="fade-down") Por ejemplo, en un sistema de aire comprimido industrial, la optimización del consumo energético puede lograrse mediante la reducción de las fugas de aire, la regulación de la presión de trabajo, la utilización de compresores de velocidad variable y la recuperación del calor generado por los compresores para otros procesos, como el calentamiento de agua o el acondicionamiento de espacios. 

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/44.png", data-aos="zoom-in") 

    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/45.png", data-aos="zoom-in")             
      .col-lg-8
        .bg-color-1.p-4.h-100.j1(data-aos="fade-left")
          h5 Ejercicio

          p Una planta industrial consume 500 MWh de energía eléctrica al mes. Tras implementar medidas de eficiencia energética, el consumo se reduce a 400 MWh al mes. Si el costo de la energía eléctrica es de 0.12 $/kWh, calcule el ahorro mensual y anual, logrados.
          h5.mb-0 Solución 
          h5.mb-2 Datos:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Consumo inicial de energía eléctrica (Eini) = 500 MWh/mes
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Consumo final de energía eléctrica (Efin) = 400 MWh/mes
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Costo de la energía eléctrica (Cene) = 0.12 $/kWh = 120 $/MWh

          p.mb-0 #[b Fórmula:] Amen = (Eini – Efin) • Cene Aanu = Amen • 12
          p.mb-0 #[b Cálculo:] Ahorro mensual (Amen): Amen = (500 MWh/mes – 400 MWh/mes) • 120 $/MWh = 12000 $/mes


          p.mb-0 #[b Ahorro anual (Aanu):] Aanu = 12000 $/mes • 12 = 144000 $/año

          p.mb-0 #[b Resultado:] la planta industrial logra un ahorro mensual de $12000 y un ahorro anual de $144000 gracias a las medidas de eficiencia energética implementadas.

















    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://openstax.org/books/f%C3%ADsica-universitaria-volumen-2/pages/7-6-aplicaciones-de-la-electrostatica" target="_blank" rel="noopener noreferrer") Aplicaciones de la electrostática. Este apartado del libro "Física universitaria volumen 2" describe aplicaciones industriales de la electrostática, como el uso de precipitadores electrostáticos para eliminar partículas en emisiones de gases.                            
  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/N-BXATG3z-I" target="_blank" rel="noopener noreferrer") Espinoza, M. (2022). Intercambiadores de Calor - Calculo del Coeficiente de Transferencia de Calor total - Contra flujo.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
