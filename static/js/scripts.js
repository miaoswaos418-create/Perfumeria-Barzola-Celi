document.addEventListener("DOMContentLoaded", () => {

    // 1. ROTACIÓN DE BANNERS PRINCIPALES
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }, 6000);
    }

    // 2. BUSCADOR
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    if (searchForm && searchInput) {
        searchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const termino = searchInput.value.trim();
            if (termino !== "") {
                alert(`Buscando "${termino}" en el catálogo de Celi & Barzola...`);
            } else {
                alert("Por favor, escribe el nombre de un perfume o marca.");
            }
        });
    }

    // 3. NAVEGACIÓN DEL CARRUSEL DE SECCIONES
    const track = document.querySelector(".productos-track");
    const flechaIzquierda = document.querySelector(".left-arrow");
    const flechaDerecha = document.querySelector(".right-arrow");
    const puntosIndicadores = document.querySelectorAll(".carrusel-dots .dot");
    
    let paginaActual = 0;
    const totalPaginas = 3;

    function moverCarrusel(index) {
        if (!track) return;
        track.style.transform = `translateX(${index * -33.3333}%)`;

        puntosIndicadores.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === index);
        });
    }

    if (flechaDerecha) {
        flechaDerecha.addEventListener("click", () => {
            paginaActual = (paginaActual + 1) % totalPaginas;
            moverCarrusel(paginaActual);
        });
    }

    if (flechaIzquierda) {
        flechaIzquierda.addEventListener("click", () => {
            paginaActual = (paginaActual - 1 + totalPaginas) % totalPaginas;
            moverCarrusel(paginaActual);
        });
    }

    puntosIndicadores.forEach((dot, idx) => {
        dot.addEventListener("click", () => {
            paginaActual = idx;
            moverCarrusel(paginaActual);
        });
    });

    // 4. VENTANA EMERGENTE (MODAL DETALLES DE PRODUCTO)
    const modal = document.getElementById("perfumeModal");
    const closeModal = document.querySelector(".close-modal");
    
    const modalImg = document.getElementById("modalImg");
    const modalMarca = document.getElementById("modalMarca");
    const modalNombre = document.getElementById("modalNombre");
    const modalPrecio = document.getElementById("modalPrecio");
    const modalDescripcion = document.getElementById("modalDescripcion");

    const tarjetasProductos = document.querySelectorAll(".product-card");

    tarjetasProductos.forEach((tarjeta) => {
        const zonasClickeables = tarjeta.querySelectorAll(".product-img-wrapper, .marca, .nombre, .descripcion-corta");
        
        zonasClickeables.forEach(zona => {
            zona.style.cursor = "pointer";
            
            zona.addEventListener("click", () => {
                modalImg.src = tarjeta.querySelector(".product-img-wrapper img").src;
                modalMarca.innerText = tarjeta.querySelector(".marca").innerText;
                modalNombre.innerText = tarjeta.querySelector(".nombre").innerText;
                modalPrecio.innerText = tarjeta.querySelector(".precio").innerText;
                modalDescripcion.innerText = tarjeta.querySelector(".descripcion-corta").innerText;

                modal.style.display = "flex";
            });
        });
    });

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // 5. BOTÓN AÑADIR AL CARRITO
    const botonesCarrito = document.querySelectorAll(".btn-add-cart");
    botonesCarrito.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const tarjetaInfo = btn.closest(".product-card");
            const nombre = tarjetaInfo.querySelector(".nombre").innerText;
            const precio = tarjetaInfo.querySelector(".precio").innerText;
            alert(`¡Añadiste al carrito de Celi & Barzola:\n${nombre} (${precio})!`);
        });
    });

});