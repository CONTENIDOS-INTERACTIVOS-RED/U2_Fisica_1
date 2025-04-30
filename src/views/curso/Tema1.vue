<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Trabajo, energía y potencia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5     
      .col.order-md-2.order-lg-1     
        p(data-aos="fade-down") El estudio de la física nos permite comprender y explicar los fenómenos naturales que se observan en el universo. Dentro de este vasto campo de conocimiento, los conceptos de trabajo, energía y potencia, ocupan un lugar fundamental, dado que están presentes en prácticamente todos los procesos físicos del entorno. Desde el movimiento de los objetos hasta el funcionamiento de las máquinas más complejas, estos conceptos son esenciales para entender cómo se transforman y transfieren las diferentes formas de energía.

      .col-lg-auto.mb-3.mb-lg-0.order-md-1.order-lg-2 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/10.png", data-aos="zoom-in") 

    .bg-full-width.bg-fondo-slider(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/11.png")            
            .col-lg-7
              p En la vida cotidiana, constantemente se interactúa con estos conceptos, aunque a veces no se tenga conciencia de ello. Cuando se empuja una caja pesada, se está realizando trabajo al aplicar una fuerza sobre el objeto y desplazarlo una cierta distancia. Al lanzar una pelota hacia arriba, se le transfiere energía cinética y potencial gravitatoria, que se convierten una en otra, durante el movimiento. Cuando se enciende una bombilla eléctrica, se está aprovechando la potencia suministrada por la corriente eléctrica, para iluminar el entorno.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/12.png")            
            .col-lg-7 
              p Pero más allá de estos ejemplos cotidianos, los conceptos de trabajo, energía y potencia son fundamentales en el ámbito de la ingeniería industrial. Como futuros ingenieros, se necesitará comprender y aplicar estos principios en el diseño, análisis y optimización de los sistemas y procesos industriales. Desde la selección de motores eléctricos eficientes hasta el diseño de sistemas de transporte de materiales, pasando por la evaluación del consumo energético en plantas de producción, estos conceptos proporcionarán las herramientas necesarias, para tomar decisiones informadas y encontrar soluciones innovadoras.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/13.png")            
            .col-lg-7
              p A lo largo de esta unidad, se explora en profundidad, los conceptos de trabajo, energía y potencia, comenzando por sus definiciones y principios fundamentales. Analizando cómo se relacionan entre sí y cómo se aplican en diferentes tipos de sistemas físicos. Se estudia el principio de conservación de la energía, que establece que la energía no se crea ni se destruye, sino que se transforma de una forma a otra. También se aborda el concepto de potencia y su relación con el rendimiento energético, así como las estrategias para optimizar el consumo de energía, en sistemas industriales.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/14.png")            
            .col-lg-7
              p Además de la teoría, se hace énfasis en las aplicaciones prácticas de estos conceptos en el ámbito industrial. Se analizan casos reales de sistemas de transporte, procesos productivos y equipos industriales, y se aprende a evaluar su desempeño energético. Se familiarizará con herramientas y métodos para diseñar sistemas energéticamente eficientes y exploraremos el uso de la energía en sistemas neumáticos e hidráulicos, que son ampliamente utilizados en la industria.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-2
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/15.svg")
          .col-lg
            p.mb-0.text-white Al finalizar esta unidad, se habrá adquirido una sólida comprensión de los conceptos de trabajo, energía y potencia, estará en capacidad de aplicarlos en el análisis y diseño de sistemas industriales. Estas habilidades le permitirán tomar decisiones informadas para optimizar el consumo energético, mejorar la eficiencia de los procesos y contribuir al desarrollo sostenible, en el ámbito industrial.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.hiru.eus/es/fisica/trabajo-mecanico-y-energiaHiru" target="_blank" rel="noopener noreferrer") Trabajo mecánico y energía. Este recurso proporciona una visión general sobre el trabajo mecánico y la energía, incluyendo conceptos básicos y aplicaciones. Disponible 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikiversity.org/wiki/Conceptos_b%C3%A1sicos_sobre_trabajo_y_energ%C3%ADa" target="_blank" rel="noopener noreferrer") Conceptos básicos sobre trabajo y energía. Este recurso de la Wikiversidad ofrece una introducción detallada a los conceptos fundamentales de trabajo y energía en física, incluyendo definiciones, fórmulas y ejemplos prácticos. Está disponible bajo una licencia Creative Commons que permite su libre uso y distribución.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ingenierizando.com/dinamica/trabajo-y-energia/" target="_blank" rel="noopener noreferrer") Trabajo y energía. Este artículo proporciona una explicación clara sobre el trabajo y la energía en física, incluyendo su relación y diferencias, así como el teorema del trabajo y la energía. El contenido está disponible bajo una licencia Creative Commons, permitiendo su uso y distribución con atribución. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://phet.colorado.edu/es/simulations/the-ramp " target="_blank" rel="noopener noreferrer") Simulación "La Rampa" de PhET. Esta herramienta interactiva permite explorar las fuerzas, la energía y el trabajo al empujar objetos por una rampa, variando el ángulo de inclinación y observando cómo afecta al movimiento y a las fuerzas involucradas. La simulación está disponible en español y se distribuye bajo una licencia Creative Commons.                            


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="Concepto [video]. YouTube. https://youtu.be/hXA2JU5BM0Y" target="_blank" rel="noopener noreferrer") Ayudinga!. (2016). Introducción: Trabajo - Energía - Concepto.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/U82xSeuD1X0" target="_blank" rel="noopener noreferrer") Ayudinga!. (2016). Trabajo Mecánico - Ejemplo #1.              

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
