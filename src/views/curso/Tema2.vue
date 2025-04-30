<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Definición y principios de trabajo y energía'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") En esta sección, se adentrará en dos conceptos fundamentales de la física que son esenciales para comprender cómo funcionan los sistemas que nos rodean: el trabajo y la energía. Estos conceptos están íntimamente relacionados y su comprensión es clave para analizar y diseñar sistemas físicos e industriales, eficientes.

        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/16.svg")
            .col-lg
              p.mb-0 Comencemos por el concepto de trabajo, debido a que, en física, el trabajo tiene una definición precisa: se realiza trabajo cuando una fuerza actúa sobre un objeto y lo desplaza una cierta distancia en la dirección de la fuerza. Matemáticamente, el trabajo se calcula como el producto escalar de la fuerza y el desplazamiento.

        p(data-aos="fade-down") Para visualizar esto, imagine que está empujando una caja pesada por el suelo. Al aplicar una fuerza sobre la caja y moverla, está realizando trabajo. Cuanto mayor sea la fuerza que aplique y cuanto más lejos mueva la caja, mayor será el trabajo realizado. Es importante destacar que, si la fuerza y el desplazamiento no están en la misma dirección, solo la componente de la fuerza en la dirección del movimiento, contribuye al trabajo.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/17.png", data-aos="zoom-in")          

    .titulo-figura.mb-4(data-aos="fade-up")
      h5 Figura 1. 
      span Trabajo en física
    .bg-color-4.p-4.mb-5(data-aos="fade-left")
      .row.justify-content-center.align-items-center
        .col-lg-4    
          figure
            img.img-a.img-t(src="@/assets/curso/temas/18.png", alt="")                            
        .col-lg-7
          ul.lista-ul--color
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 La flecha azul representa el desplazamiento.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 La flecha roja representa la fuerza aplicada con un ángulo.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 La flecha verde punteada, muestra la componente útil de la fuerza en la dirección del desplazamiento.           
          p(data-aos="fade-down") Esto es un buen ejemplo para ilustrar el concepto de trabajo en física. De manera más formal, el trabajo (𝑊) se define como el producto de la fuerza (𝐹) aplicada sobre un objeto, el desplazamiento (𝑑) del objeto y el coseno del ángulo (𝜃) entre la dirección de la fuerza y el desplazamiento:
          p.text-center(data-aos="fade-down") 𝑊 = 𝐹𝑑cos𝜃 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/19.png", data-aos="zoom-in")      
      .col-lg-8
        p(data-aos="fade-down") Continuemos con el concepto de la energía. La energía es la capacidad de realizar trabajo. Es una propiedad fundamental de los sistemas físicos y puede manifestarse de diferentes formas, como energía cinética (asociada al movimiento), energía potencial (asociada a la posición o configuración), energía térmica (asociada a la temperatura), entre otras.

        .bg-color-5.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Una característica clave de la #[b energía] es que se conserva. El principio de conservación de la energía establece que la energía no se crea ni se destruye, sino que se transforma de una forma a otra. En un sistema aislado, la energía total permanece constante.

        p(data-aos="fade-down") Por ejemplo, cuando se lanza una pelota hacia arriba, su energía cinética inicial, se convierte gradualmente en energía potencial gravitatoria, a medida que asciende. En el punto más alto, toda la energía cinética se ha transformado en energía potencial. Luego, durante el descenso, la energía potencial se convierte nuevamente en energía cinética, hasta que la pelota llega al suelo.    

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-8.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Estos principios de trabajo y energía, tienen múltiples aplicaciones en la ingeniería industrial. Por ejemplo, al diseñar máquinas o equipos, se debe considerar cómo se realiza el trabajo, cómo se transfiere y transforma la energía dentro del sistema. Comprender estos conceptos permite analizar la eficiencia energética, identificar o minimizar las pérdidas de energía, y optimizar el rendimiento de los sistemas. 

        p(data-aos="fade-down") Además, el trabajo y la energía están estrechamente relacionados con la potencia, que es la tasa a la cual se realiza trabajo o se transfiere energía. La potencia indica qué tan rápido se está realizando un trabajo o consumiendo energía. En la industria, la potencia es un parámetro crucial para seleccionar y dimensionar equipos, como motores eléctricos, bombas, compresores, entre otros.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/20.png", data-aos="zoom-in")  

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Concepto de trabajo mecánico y su cálculo

    p(data-aos="fade-down") El trabajo mecánico es una medida de la energía transferida cuando una fuerza actúa sobre un objeto y lo desplaza una cierta distancia. Se define matemáticamente como el producto escalar de la fuerza aplicada y el desplazamiento del objeto en la dirección de la fuerza (Lifante et al., 2015). El trabajo realizado por una fuerza constante se calcula multiplicando la magnitud de la fuerza por la distancia recorrida en la dirección de la fuerza. 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/21.png", data-aos="zoom-in")      
      .col-lg-8
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          p(data-aos="fade-down") El trabajo mecánico se puede expresar matemáticamente como:
          p.text-center(data-aos="fade-down") W = F • d • cos(θ)
          p(data-aos="fade-down") donde #[b W] es el trabajo, #[b F] es la magnitud de la fuerza aplicada, d es la distancia recorrida por el objeto y θ es el ángulo entre la fuerza y el desplazamiento. Esta fórmula es fundamental para calcular el trabajo realizado por distintas fuerzas, en sistemas mecánicos. 
          p(data-aos="fade-down") #[b Por ejemplo], considere un motor eléctrico que levanta una carga de 100 kg a una altura de 5 m. Si se desprecia la fricción, la fuerza aplicada por el motor es igual al peso de la carga, que es
          p.text-center(data-aos="fade-down") F = m • g = 100 kg • 9.8 m/s#[sub ²] ≈ 980 N.
          p(data-aos="fade-down") Como la fuerza y el desplazamiento están en la misma dirección (θ = 0#[sub °]), el trabajo realizado por el motor es 
          p.text-center.mb-0(data-aos="fade-down") W = F • d = 980 N • 5 m = 4900 J       

    .row.mb-5    
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-1.p-4.h-100.j1(data-aos="fade-left")
          h5 Ejercicio

          p Un trabajador empuja una caja de 50 kg con una fuerza horizontal de 200 N a lo largo de una distancia de 10 m. Calcule el trabajo realizado por el trabajador.
          h5.mb-0 Solución 
          h5.mb-2 Datos:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Masa de la caja (m) = 50 kg
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Fuerza aplicada (F) = 200 N
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Distancia recorrida (d) = 10 m
            li.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Ángulo entre la fuerza y el desplazamiento (θ) = 0#[sub °] (la fuerza y el desplazamiento están en la misma dirección).
          p.mb-0 #[b Fórmula:] W = F • d • cos(θ)
          p.mb-0 #[b Cálculo:] W = 200 N • 10 m • cos(0#[sub °]) = 200 N • 10 m • 1 = 2000 J
          p.mb-0 #[b Resultado:] el trabajo realizado por el trabajador al empujar la caja, es de 2000 J.

      .col-lg-4 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/22.png", data-aos="zoom-in")   

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Energía cinética y su relación con el trabajo

    p(data-aos="fade-down") La energía cinética es un concepto fundamental en la física, ya que permite entender cómo se relaciona el movimiento de un cuerpo con el trabajo que se realiza sobre él. 
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/23.png', alt='')                              

          .col-lg-8
            h2.mb-4(data-aos="flip-up") Energía cinética y su relación con el trabajo
            p.mb-4(data-aos="fade-right") En el PDF Energía cinética y su relación con el trabajo, se presentan definiciones, fórmulas y ejemplos aplicados que explican cómo el trabajo de una fuerza puede transformar la energía cinética de un objeto, y cómo este principio se aplica en contextos reales como la industria y la ingeniería. Este contenido resulta clave para comprender la dinámica del movimiento y su aplicación práctica en situaciones cotidianas y profesionales.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Energía cinética y su relación con el trabajo

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Energía potencial gravitatoria y elástica

    p(data-aos="fade-down") La energía potencial es la energía almacenada en un objeto, debido a su posición o configuración. Existen dos tipos principales de energía potencial (Bujovtsev, 2010): 

    TabsC(data-aos="fade-right").color-primario.mb-5
      .bg-color-10.border.px-4.p-md-5.py-3(titulo="Gravitatoria" :icon="require('@/assets/curso/temas/24.svg')")
        .row.justify-content-center
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/26.png', alt='')          
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Gravitatoria  
            p La energía #[b potencial gravitatoria] se debe a la posición de un objeto en un campo gravitatorio.   
      .bg-color-10.border.px-4.p-md-5.py-3(titulo="Elástica" :icon="require('@/assets/curso/temas/25.svg')")
        .row.justify-content-center
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/27.png', alt='')          
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Elástica  
            p La energía potencial elástica se debe a la deformación de un objeto elástico. 


    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/28.png", data-aos="zoom-in")      
      .col-lg-8
        .bg-color-1.p-4.h-100.j1(data-aos="fade-left")
          p(data-aos="fade-down") La energía potencial gravitatoria de un objeto, se calcula como:
          p.text-center(data-aos="fade-down") Ug = m • g • h
          p(data-aos="fade-down") Donde m es la masa del objeto, #[b g] es la aceleración debida a la gravedad y #[b h] es la altura del objeto, con respecto a un nivel de referencia. Por otro lado, la energía potencial elástica almacenada en un resorte, se calcula como Ue = (1/2) • k • x#[sub ²], donde #[b k] es la constante elástica del resorte y #[b x] es la deformación del resorte, con respecto a su posición de equilibrio.
          h5.mb-0(data-aos="fade-down") En la industria, la energía potencial gravitatoria se aprovecha en sistemas de almacenamiento de energía por bombeo, donde el agua se bombea a un depósito elevado durante períodos de baja demanda energética y se libera para generar electricidad, durante períodos de alta demanda. La energía potencial elástica se utiliza en sistemas de suspensión y amortiguación, como los amortiguadores de vehículos y las válvulas de seguridad de presión.        

    .row.mb-5    
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-1.p-4.h-100.j1(data-aos="fade-left")
          h5 Ejercicio

          p Un resorte con una constante elástica de 500 N/m se comprime 0.2 m desde su posición de equilibrio. Calcule la energía potencial elástica almacenada en el resorte.
          h5.mb-0 Solución 
          h5.mb-2 Datos:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Constante elástica del resorte (k) = 500 N/m
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0               Deformación del resorte (x) = 0.2 m

          p.mb-0 #[b Fórmula:] Ue = (1/2) • k • x#[sub ²]
          p.mb-0 #[b Cálculo:] Ue = (1/2) • 500 N/m • (0.2 m)#[sub ²] = 10 J
          p.mb-0 #[b Resultado:] la energía potencial elástica almacenada en el resorte comprimido es de 10 J.

      .col-lg-4 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/29.png", data-aos="zoom-in") 

    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Principio de conservación de la energía

    p(data-aos="fade-down") El principio de conservación de la energía es una de las leyes más importantes de la física, ya que permite entender cómo la energía se transforma sin perderse dentro de un sistema cerrado.
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/30.png', alt='')                              

          .col-lg-8
            h2.mb-4(data-aos="flip-up") Principio de conservación de la energía
            p.mb-4(data-aos="fade-right") En el PDF Principio de conservación de la energía, se explican los fundamentos teóricos y matemáticos de esta ley, junto con ejemplos prácticos que ilustran cómo se aplica en situaciones reales, como en procesos industriales o fenómenos cotidianos. Este conocimiento es esencial para analizar la eficiencia energética y el comportamiento de los sistemas físicos en distintos contextos.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Principio de conservación de la energía

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") Los conceptos de trabajo y energía son fundamentales en una amplia gama de aplicaciones industriales, desde el diseño de máquinas y procesos, hasta la optimización del consumo energético. Comprender estos conceptos permite a los ingenieros industriales analizar, diseñar y mejorar sistemas energéticos eficientes (Pérez Oviedo, 2023).

        .bg-color-6.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/31.svg")
            .col-lg
              p.mb-0 Bujovtsev (2010), destaca que el análisis energético de sistemas mecánicos, como máquinas herramienta, sistemas de transporte y equipos de manejo de materiales, se basa en los principios del trabajo y la energía. Al calcular el trabajo realizado por las fuerzas que actúan sobre estos sistemas y considerar las transformaciones energéticas involucradas, los ingenieros pueden optimizar su rendimiento y eficiencia. 

        p(data-aos="fade-down") Por ejemplo, en la industria del transporte, el análisis energético se utiliza para evaluar y mejorar la eficiencia de vehículos, como automóviles, camiones y aviones. Al considerar el trabajo realizado por las fuerzas de propulsión y resistencia, así como las energías cinética y potencial involucradas, los ingenieros pueden diseñar vehículos más eficientes en términos de consumo de combustible y emisiones.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/32.png", data-aos="zoom-in") 

    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/33.png", data-aos="zoom-in")             
      .col-lg-8
        .bg-color-1.p-4.h-100.j1(data-aos="fade-left")
          h5 Ejercicio

          p Una bomba hidráulica eleva 1000 L de agua por minuto desde un depósito a nivel del suelo hasta un tanque a una altura de 20 m. Si la eficiencia de la bomba es del 80 %, calcule la potencia requerida para operar la bomba.
          h5.mb-0 Solución 
          h5.mb-2 Datos:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Caudal de agua (Q) = 1000 L/min = 0.0167 m#[sup ³]/s
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Altura de elevación (h) = 20 m
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Eficiencia de la bomba (η) = 0.8
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Densidad del agua (ρ) = 1000 kg/m#[sup ³]
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Aceleración debida a la gravedad (g) = 9.8 m/s#[sup ²]

          p.mb-0 #[b Fórmula:] P = (m • g • h) / (η • t) m = ρ •· V V = Q • t
          p.mb-0 #[b Cálculo:]Volumen de agua por segundo (V): V = 0.0167 m#[sup ³]/s • 1 s = 0.0167 m#[sup ³]

          p.mb-0 #[b Masa de agua por segundo (m):] m = 1000 kg/m#[sup ³] • 0.0167 m#[sup ³] = 16.7 kg

          p.mb-0 #[b Potencia requerida (P):] P = (16.7 kg • 9.8 m/s#[sup ²] • 20 m) / (0.8 • 1 s) ≈ 4087 W ≈ 4.1 kW

          p.mb-0 #[b Resultado:] la potencia requerida para operar la bomba hidráulica es de aproximadamente 4.1 kW.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://espanol.libretexts.org/Ingenieria/An%C3%A1lisis_de_circuitos_el%C3%A9ctricos_de_CC%3A_un_enfoque_pr%C3%A1ctico_%28Fiore%29/02%3A_Cantidades_b%C3%A1sicas/2.05%3A_Potencia_y_eficienciaLibreTexts Español" target="_blank" rel="noopener noreferrer") Potencia y eficiencia. Este capítulo del libro "Análisis de circuitos eléctricos de CC: un enfoque práctico" explica los conceptos de potencia y eficiencia en sistemas eléctricos, detallando fórmulas y aplicaciones prácticas.                

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://labovirtual.blogspot.com/p/fisica.html" target="_blank" rel="noopener noreferrer") Laboratorio Virtual de Física. Este sitio ofrece una variedad de simulaciones interactivas relacionadas con conceptos físicos, incluyendo temas de potencia y eficiencia energética. Las simulaciones permiten comprender cómo varía la aceleración de un cuerpo con la fuerza aplicada y la masa del mismo, aplicando el segundo principio de la dinámica de Newton. El contenido está disponible bajo una licencia Creative Commons.    

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/shloDt6wYOU" target="_blank" rel="noopener noreferrer") Hernández, C. (2020). Uso de potencia, fuerza, energía y trabajo.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/C__xWArQnB0" target="_blank" rel="noopener noreferrer") Betancourt, A. Egas, P. & Landázuri, J. (2024). Balances de energía en equipos industriales.              

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
