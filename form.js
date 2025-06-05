document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuLateral = document.getElementById('menuLateral');
    const body = document.body;
    const oceanInfo = document.getElementById('ocean-info');
    const welcomeContent = document.getElementById('welcome-content');
    
    // Datos de los océanos
   // Datos de los océanos (dentro de form.js)
 const oceanData = {
    artic: {
        title: "Océano Ártico",
        content: `
            <div class="contenido-oceano activo">
                <h2 class="oceano-titulo">Océano Ártico: El Guardián del Norte</h2>
                <img src="https://i.pinimg.com/736x/d8/9a/e0/d89ae0ec19acae2662cbc0b9019000b9.jpg" alt="Océano Ártico" class="oceano-imagen">
                <p class="oceano-descripcion">El océano Ártico, el más pequeño y menos profundo del mundo, es un ecosistema único que alberga una increíble vida marina. Desde los majestuosos osos polares hasta pequeñas criaturas adaptadas al frío extremo, la vida marina en el Ártico es fascinante. Sin embargo, esta vida marina está en peligro debido al cambio climático y la contaminación.</p>
                <p class="oceano-descripcion">Los dibujos de vida marina ártica muestran especies únicas como las belugas y narvales. Si buscas imágenes de vida marina en internet, encontrarás cientos de especies adaptadas a este océano glacial.</p>
             <div class="oceano-datos">
                    <div class="dato-item">
                        <span class="dato-titulo">Área:</span> ~14 millones de km² (el 3% de los océanos del mundo)
                    </div>
                    <div class="dato-item">
                        <span class="dato-titulo">Profundidad:</span> Media: 1,038 m | Máxima: 5,450 m (Fosa de Molloy)
                    </div>
                    <div class="dato-item">
                        <span class="dato-titulo">Temperatura:</span> Varía de -1.8°C en invierno a 5°C en verano
                    </div>
                    <div class="dato-item">
                        <span class="dato-titulo">Curiosidad:</span> El hielo ártico refleja el 80% de la luz solar, ayudando a regular el clima global
                    </div>
                    <div class="dato-item">
                     <span class="dato-titulo">Libro recomendado:</span> "Vida Marina del Ártico" por National Geographic
                     </div>
                </div>
         </div>
        `
    },
    pacifico: {
        title: "Océano Pacífico",
             content: `
            <div class="contenido-oceano activo">
             <h2 class="oceano-titulo">Océano Pacífico: El Gigante Azul</h2>
                <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5" alt="Océano Pacífico" class="oceano-imagen">
                <p class="oceano-descripcion">El Pacífico es el más grande de los océanos del mundo, con una impresionante variedad de vida marina. Desde los animales más pequeños hasta las ballenas más grandes, este océano azul es el hogar de la Gran Barrera de Coral, visible incluso desde el espacio.</p>
                <p class="oceano-descripcion">El turismo ambiental en el Pacífico ofrece viajes todo incluido para observar esta rica biodiversidad. Muchos optan por viajes en avión a destinos como las playas de México o las islas del Pacífico sur.</p>
                <div class="oceano-datos">
                   <div class="dato-item">
                        <span class="dato-titulo">Área:</span> ~165 millones de km² (mayor que toda la superficie terrestre combinada)
                    </div>
                    <div class="dato-item">
                        <span class="dato-titulo">Profundidad:</span> Media: 4,280 m | Máxima: 10,984 m (Fosa de las Marianas)
                    </div>
                    <div class="dato-item">
                        <span class="dato-titulo">Biodiversidad:</span> Alberga el 50% de las especies marinas conocidas
                    </div>
                    <div class="dato-item">
                        <span class="dato-titulo">Curiosidad:</span> La Gran Barrera de Coral, visible desde el espacio, se encuentra aquí
                    </div>
                    <div class="dato-item">
                      <span class="dato-titulo">Turismo sostenible:</span> Excursiones para ver vida marina sin dañar el ecosistema
                 </div>
             </div>
            </div>
`
    },
    atlantico: {
        title: "Océano Atlántico",
       content: `
    <div class="contenido-oceano activo">
        <h2 class="oceano-titulo">Océano Atlántico: El Puente entre Continentes</h2>
        <img src="https://i.pinimg.com/736x/da/b0/98/dab09862f8ac6dc8d4f1409443a87125.jpg" alt="Océano Atlántico" class="oceano-imagen">
        <p class="oceano-descripcion">El Atlántico conecta playas hermosas como las de Tijuana, Rosarito y las famosas playas nudistas de Europa. Este océano, junto con el Pacífico, forma parte de los principales océanos del mundo que ofrecen increíbles ocean views.</p>
        <p class="oceano-descripcion">Si buscas playas cercanas a tu ubicación en el Atlántico, encontrarás desde las playas de Santorini hasta las playas de México, consideradas por muchos como las mejores de México para el turismo sostenible.</p>
        <div class="oceano-datos">
            <div class="dato-item">
                        <span class="dato-titulo">Área:</span> ~106.5 millones de km² (20% de la superficie terrestre)
                    </div>
                    <div class="dato-item">
                        <span class="dato-titulo">Profundidad:</span> Media: 3,646 m | Máxima: 8,376 m (Fosa de Puerto Rico)
                    </div>
                    <div class="dato-item">
                        <span class="dato-titulo">Corrientes:</span> La Corriente del Golfo mueve 150 veces más agua que todos los ríos del mundo
                    </div>
                    <div class="dato-item">
                        <span class="dato-titulo">Curiosidad:</span> El Triángulo de las Bermudas, famoso por misteriosas desapariciones, se encuentra aquí
                    </div>
            <div class="dato-item">
                <span class="dato-titulo">Viajes baratos:</span> Cruceros por el Atlántico con paquetes todo incluido
            </div>
        </div>
    </div>
`
    },
    indico: {
        title: "Océano Índico",
        content: `
            <div class="contenido-oceano activo">
                <h2 class="oceano-titulo">Océano Índico: El Océano Cálido</h2>
                <img src="https://i.pinimg.com/736x/c6/ab/a8/c6aba825102600aab6823d04f84bf1bb.jpg" alt="Océano Índico" class="oceano-imagen">
                <p class="oceano-descripcion">El Índico es el más cálido de los océanos, con temperaturas superficiales que pueden superar los 30°C. Es crucial para el monzón que afecta a millones de personas en Asia. Alberga ecosistemas únicos como los manglares de Sundarbans (el mayor bosque de manglar del mundo) y los arrecifes de coral de las Maldivas. Históricamente, fue una ruta comercial clave entre Asia y África.</p>
                <div class="oceano-datos">
                    <div class="dato-item">
                        <span class="dato-titulo">Área:</span> ~70 millones de km² (20% del agua de la Tierra)
                    </div>
                    <div class="dato-item">
                        <span class="dato-titulo">Profundidad:</span> Media: 3,741 m | Máxima: 7,258 m (Fosa de Java)
                    </div>
                    <div class="dato-item">
                        <span class="dato-titulo">Salinidad:</span> Varía mucho, desde 32‰ en el sur hasta 41‰ en el Mar Rojo
                    </div>
                    <div class="dato-item">
                        <span class="dato-titulo">Curiosidad:</span> Alberga la única población de dugongos (parientes del manatí) fuera del Pacífico
                    </div>
                </div>
            </div>
        `
    },
    antartico: {
        title: "Océano Antártico",
        content: `
    <div class="contenido-oceano activo">
        <h2 class="oceano-titulo">Océano Antártico: El Guardián del Sur</h2>
        <img src="https://i.pinimg.com/736x/8c/d1/a1/8cd1a1166652676bb04b8b4596d63e63.jpg" alt="Océano Antártico" class="oceano-imagen">
        <p class="oceano-descripcion">El Antártico es un océano glacial único, donde la vida marina lucha por sobrevivir en condiciones extremas. Visitar este océano es el gran turismo para los amantes de la naturaleza, aunque requiere de viajes especializados.</p>
        <p class="oceano-descripcion">La contaminación está afectando gravemente a la vida marina en este frágil ecosistema. Organizaciones ambientales recomiendan el turismo ambiental responsable para preservar este tesoro natural.</p>
        <div class="oceano-datos">
          <div class="oceano-datos">
                    <div class="dato-item">
                        <span class="dato-titulo">Área:</span> ~20 millones de km² (definido por la Corriente Circumpolar Antártica)
                    </div>
                    <div class="dato-item">
                        <span class="dato-titulo">Profundidad:</span> Media: 3,270 m | Máxima: 7,235 m (Fosa de las Sandwich del Sur)
                    </div>
                    <div class="dato-item">
                        <span class="dato-titulo">Temperatura:</span> Varía de -2°C a 10°C, con aguas más frías que el Ártico
                    </div>
                    <div class="dato-item">
                        <span class="dato-titulo">Curiosidad:</span> Alberga el lugar más ventoso de la Tierra (Cabo Denison, con vientos de 200 km/h)
                    </div>
            <div class="dato-item">
                <span class="dato-titulo">Libro recomendado:</span> "Antártico: Vida Marina en Peligro"
            </div>
        </div>
    </div>
`
    }
 };

    // Toggle del menú
    menuToggle.addEventListener('click', function() {
        menuLateral.classList.toggle('mostrar');
        body.classList.toggle('menu-abierto');
    });

    // Manejo de botones del menú
    const botonesMenu = document.querySelectorAll('.menu-btn');
    botonesMenu.forEach(boton => {
        boton.addEventListener('click', function() {
            const oceanId = this.getAttribute('data-ocean');
            displayOceanInfo(oceanId);
            
            // Cerrar el menú después de seleccionar
            menuLateral.classList.remove('mostrar');
            body.classList.remove('menu-abierto');
        });
    });
        // Botón del carrito
    const cartButton = document.getElementById('cartButton');
    const cartSection = document.getElementById('cart-section');

    cartButton.addEventListener('click', function() {
        // Ocultar contenido de bienvenida y océanos
        welcomeContent.style.display = 'none';
        oceanInfo.style.display = 'none';

        // Mostrar el carrito
        cartSection.style.display = 'block';

        // Desplazarse suavemente
        cartSection.scrollIntoView({ behavior: 'smooth' });
    });


    // Mostrar información del océano seleccionado
    function displayOceanInfo(oceanId) {
        if (oceanData[oceanId]) {
            // Ocultar el contenido de bienvenida
            welcomeContent.style.display = 'none';
            
            // Mostrar el contenido del océano seleccionado
            oceanInfo.innerHTML = oceanData[oceanId].content;
            oceanInfo.style.display = 'block';
            
            // Desplazarse suavemente a la información
            oceanInfo.scrollIntoView({ behavior: 'smooth' });
        }
    }



 let cart = [];

 // Función para mostrar/ocultar el carrito
 cartButton.addEventListener('click', function() {
    welcomeContent.style.display = 'none';
    oceanInfo.style.display = 'none';
    cartSection.style.display = 'block';
    updateCartUI();
    cartSection.scrollIntoView({ behavior: 'smooth' });
 });

 // Función para añadir items al carrito
 document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const name = e.target.getAttribute('data-name');
        const price = parseFloat(e.target.getAttribute('data-price'));
        
        cart.push({ name, price });
        updateCartUI();
        
        // Mostrar feedback visual
        e.target.textContent = '✓ Añadido';
        e.target.style.backgroundColor = '#2ECC40';
        setTimeout(() => {
            e.target.textContent = 'Añadir';
            e.target.style.backgroundColor = '#0074D9';
        }, 1000);
    }
    
    // Eliminar item del carrito
    if (e.target.classList.contains('remove-item')) {
        const index = e.target.getAttribute('data-index');
        cart.splice(index, 1);
        updateCartUI();
    }
 });

 // Función para actualizar la interfaz del carrito
 function updateCartUI() {
    const cartContents = document.getElementById('cart-contents');
    const cartTotal = document.getElementById('cart-total');
    const cartSummary = document.getElementById('cart-summary');
    
    cartContents.innerHTML = '';
    
    if (cart.length === 0) {
        cartSummary.style.display = 'none';
        return;
    }
    
    cartSummary.style.display = 'block';
    
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>Precio: $${item.price}</p>
            <button class="remove-item" data-index="${index}">Eliminar</button>
        `;
        
        cartContents.appendChild(itemElement);
    });
    
    cartTotal.textContent = total.toFixed(2);
 }

 // Función para el botón de pago
 document.getElementById('checkout-btn').addEventListener('click', function() {
    alert(`¡Gracias por tu compra! Total: $${document.getElementById('cart-total').textContent}\n\nTu reserva ha sido procesada. Te enviaremos los detalles por correo.`);
    cart = [];
    updateCartUI();
 });

 document.getElementById('login-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Datos válidos
    const validEmail = "Juan@gmail.com";
    const validPassword = "1234-";

    const errorElem = document.getElementById('login-error');

    if(email === validEmail && password === validPassword) {
        // Login correcto
        errorElem.textContent = "";
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        // Error de login
        errorElem.textContent = "Correo o contraseña incorrectos o no registrados";
    }
});

 document.getElementById('homeButton').addEventListener('click', function() {
    // Ocultar otras secciones
    welcomeContent.style.display = 'block';
    oceanInfo.style.display = 'none';
    cartSection.style.display = 'none';
    
    // Cerrar el menú
    menuLateral.classList.remove('mostrar');
    body.classList.remove('menu-abierto');
    
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
 });
});
