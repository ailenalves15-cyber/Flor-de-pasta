const URL_PRECIOS =
    "https://script.google.com/macros/s/AKfycbyqFaMuv3Fs1pZyHw5i3o69Kt1Xv5-y5fnh52EX8LtJcnntNWZmWTJPbhh1syPduUam/exec";

const productos = {

    "FLOR01": {
        nombre: "Ravioles",
        sabor: "Jamón y queso",
        precioUnidad: 500,
        precioDocena: 5000,
        tipoVenta: "unidad"
    },

    "FLOR02": {
        nombre: "Ravioles",
        sabor: "Pollo",
        precioUnidad: 500,
        precioDocena: 5000,
        tipoVenta: "unidad"
    },

    "FLOR03": {
        nombre: "Ravioles",
        sabor: "Verdura",
        precioUnidad: 500,
        precioDocena: 5000,
        tipoVenta: "unidad"
    },

    "FLOR04": {
        nombre: "Raviolones",
        sabor: "Jamón y queso",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "FLOR05": {
        nombre: "Raviolones",
        sabor: "Jamón, queso y roquefort",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "FLOR06": {
        nombre: "Raviolones",
        sabor: "Verdura",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "FLOR07": {
        nombre: "Raviolones",
        sabor: "Pollo al verdeo",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "FLOR08": {
        nombre: "Raviolones",
        sabor: "Osobuco con provoleta",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "FLOR09": {
        nombre: "Raviolones",
        sabor: "Camarones",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "FLOR10": {
        nombre: "Raviolones",
        sabor: "Salmón",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "FLOR11": {
        nombre: "Raviolones",
        sabor: "Frutos de mar",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "FLOR12": {
        nombre: "Raviolones",
        sabor: "Bondiola a la mostaza",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "FLOR13": {
        nombre: "Raviolones",
        sabor: "Veganos",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "FLOR14": {
        nombre: "Raviolones",
        sabor: "Ricota, espinaca y nuez",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "FLOR15": {
        nombre: "Raviolones",
        sabor: "Berenjena, cherry y queso",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "FLOR16": {
        nombre: "Sorrentinos",
        sabor: "Jamón y queso",
        precioUnidad: 600,
        precioDocena: 6000,
        tipoVenta: "unidad"
    },

    "FLOR17": {
        nombre: "Sorrentinos",
        sabor: "Zapallo, queso y almendras tostadas",
        precioUnidad: 600,
        precioDocena: 6000,
        tipoVenta: "unidad"
    },

    "FLOR18": {
        nombre: "Ñoquis",
        sabor: "Papa",
        precioKg: 4000,
        tipoVenta: "kg"
    },

    "FLOR19": {
        nombre: "Ñoquis",
        sabor: "Papa con espinaca",
        precioKg: 4000,
        tipoVenta: "kg"
    },

    "FLOR20": {
        nombre: "Fideos",
        sabor: "Al huevo blancos",
        precioKg: 4000,
        tipoVenta: "kg"
    },

    "FLOR21": {
        nombre: "Fideos",
        sabor: "Al huevo con espinaca",
        precioKg: 4000,
        tipoVenta: "kg"
    }

};

async function actualizarPreciosDesdeGoogle() {

    try {

        const respuesta = await fetch(URL_PRECIOS + "?t=" + Date.now());

        if (!respuesta.ok) {
            throw new Error("No se pudo conectar con Google Sheets.");
        }

        const datos = await respuesta.json();

        datos.forEach(item => {

            const codigo = String(item.codigo).trim().toUpperCase();

            // Si el producto no existe, lo creamos desde Google Sheets
            if (!productos[codigo]) {

                productos[codigo] = {

                    nombre: item.nombre || "Producto",

                    sabor: item.sabor || "",

                    precioUnidad:
                        item.precioUnidad !== null
                            ? Number(item.precioUnidad)
                            : null,

                    precioDocena:
                        item.precioDocena !== null
                            ? Number(item.precioDocena)
                            : null,

                    precioKg:
                        item.precioKg !== null
                            ? Number(item.precioKg)
                            : null,

                    tipoVenta:
                        item.tipoVenta || "unidad"
                };

            } else {

                // Si ya existe, actualizamos sus datos

                productos[codigo].nombre =
                    item.nombre || productos[codigo].nombre;

                productos[codigo].sabor =
                    item.sabor || productos[codigo].sabor;

                if (item.precioUnidad !== null) {
                    productos[codigo].precioUnidad =
                        Number(item.precioUnidad);
                }

                if (item.precioDocena !== null) {
                    productos[codigo].precioDocena =
                        Number(item.precioDocena);
                }

                if (item.precioKg !== null) {
                    productos[codigo].precioKg =
                        Number(item.precioKg);
                }

                if (item.tipoVenta) {
                    productos[codigo].tipoVenta =
                        item.tipoVenta;
                }
            }

        });

        document.getElementById("mensaje").innerHTML =
            "✅ Productos y precios actualizados correctamente";

    } catch (error) {

        console.error(
            "Error actualizando productos:",
            error
        );

        document.getElementById("mensaje").innerHTML =
            "❌ No se pudieron actualizar los productos.";
    }
}

let ventaActual = [];
let totalVenta = 0;

let ventasDelDia =
    JSON.parse(localStorage.getItem("ventasDelDia")) || [];


// ==========================================
// BUSCAR PRODUCTO
// ==========================================

function buscarProducto() {

    const codigo =
        document.getElementById("codigo").value.trim();

    const producto = productos[codigo];

    if (!producto) {

        document.getElementById("resultado").innerHTML =
            "❌ Producto no encontrado";

        document.getElementById("cantidadProducto").style.display =
            "none";

        return;
    }


    document.getElementById("resultado").innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>Sabor: ${producto.sabor}</p>
    `;


    document.getElementById("cantidadProducto").style.display =
        "block";


    const formaVentaContainer =
        document.getElementById("formaVentaContainer");

    const formaVenta =
        document.getElementById("formaVenta");

    const unidadCantidad =
        document.getElementById("unidadCantidad");

    const cantidad =
        document.getElementById("cantidad");


    if (producto.tipoVenta === "kg") {

        // PRODUCTOS VENDIDOS POR KILO

        formaVentaContainer.style.display = "none";

        unidadCantidad.innerText = "kg";

        cantidad.value = "1";

    } else {

        // RAVIOLES, RAVIOLONES Y SORRENTINOS

        formaVentaContainer.style.display = "block";

        formaVenta.value = "unidad";

        unidadCantidad.innerText = "unidad";

        cantidad.value = "1";
    }
}


// ==========================================
// CAMBIAR UNIDAD / DOCENA
// ==========================================

document
    .getElementById("formaVenta")
    .addEventListener("change", function () {

        const unidadCantidad =
            document.getElementById("unidadCantidad");

        if (this.value === "docena") {

            unidadCantidad.innerText = "docena";

        } else {

            unidadCantidad.innerText = "unidad";
        }
    });


// ==========================================
// AGREGAR PRODUCTO A LA VENTA
// ==========================================

function agregarVenta() {

    const codigo =
        document.getElementById("codigo").value;

    const cantidadTexto =
        document.getElementById("cantidad").value
        .trim()
        .replace(",", ".");

    const cantidad =
        parseFloat(cantidadTexto);

    const producto =
        productos[codigo];

    if (!producto) {
        alert("Producto no encontrado.");
        return;
    }

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingresá una cantidad válida.");
        return;
    }


    let precio;
    let unidad;


    // =========================
    // PRODUCTOS POR KG
    // =========================

    if (producto.tipoVenta === "kg") {

        precio = producto.precioKg;

        unidad = "kg";

    }


    // =========================
    // PRODUCTOS POR UNIDAD
    // =========================

    else {

        const formaVenta =
            document.getElementById("formaVenta").value;


        if (formaVenta === "docena") {

            precio = producto.precioDocena;

            unidad = "docena";

        } else {

            precio = producto.precioUnidad;

            unidad = "unidad";
        }
    }


    // Verificamos que exista un precio

    if (!precio || precio <= 0) {

        alert("Este producto no tiene un precio cargado.");

        return;
    }


    const subtotal =
        precio * cantidad;


    ventaActual.push({

        nombre: producto.nombre,

        sabor: producto.sabor,

        precio: precio,

        cantidad: cantidad,

        unidad: unidad,

        subtotal: subtotal

    });


    mostrarVenta();


    // Limpiar campos

    document.getElementById("codigo").value = "";

    document.getElementById("cantidad").value = 1;

    document.getElementById("codigo").focus();
}


// ==========================================
// MOSTRAR VENTA ACTUAL
// ==========================================

function mostrarVenta() {

    let html = "";

    totalVenta = 0;


    ventaActual.forEach((item, indice) => {

        html += `
            <div>

                <p>

                    <strong>
                        ${item.nombre}
                    </strong>
                    - ${item.sabor}

                    <br>

                    Cantidad:
                    ${item.cantidad}
                    ${item.unidad}

                    <br>

                    Precio:
                    $${item.precio}

                    <br>

                    Subtotal:
                    $${item.subtotal}

                </p>


                <button
                    onclick="eliminarProducto(${indice})"
                >
                    ❌ Eliminar
                </button>

                <hr>

            </div>
        `;


        totalVenta += item.subtotal;
    });


    document.getElementById("venta").innerHTML =
        html;


    document.getElementById("total").innerHTML =
        `Total: $${totalVenta}`;
}


// ==========================================
// ELIMINAR PRODUCTO
// ==========================================

function eliminarProducto(indice) {

    ventaActual.splice(indice, 1);

    mostrarVenta();
}


// ==========================================
// FINALIZAR VENTA
// ==========================================

function finalizarVenta() {

    if (ventaActual.length === 0) {

        alert("No hay productos en la venta.");

        return;
    }


    const medioPago =
        document.getElementById("medioPago").value;


    const ahora = new Date();


    const fechaMostrar =
        ahora.toLocaleString("es-AR");


    const fechaFiltro =
        ahora.getFullYear() +
        "-" +
        String(ahora.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(ahora.getDate()).padStart(2, "0");


    const nuevaVenta = {

        fecha: fechaMostrar,

        fechaFiltro: fechaFiltro,

        productos: [...ventaActual],

        total: totalVenta,

        medioPago: medioPago
    };


    ventasDelDia.push(nuevaVenta);


    localStorage.setItem(
        "ventasDelDia",
        JSON.stringify(ventasDelDia)
    );


    alert(
        "Venta registrada correctamente.\n" +
        "Total: $" + totalVenta + "\n" +
        "Medio de pago: " + medioPago
    );


    ventaActual = [];

    totalVenta = 0;


    document.getElementById("venta").innerHTML =
        "";

    document.getElementById("total").innerHTML =
        "Total: $0";

    document.getElementById("resultado").innerHTML =
        "";

    document.getElementById("cantidadProducto").style.display =
        "none";

    document.getElementById("codigo").value =
        "";

    document.getElementById("cantidad").value =
        "1";

    document.getElementById("codigo").focus();


    mostrarVentasDelDia();

    mostrarProductosMasVendidos();
}


// ==========================================
// HISTORIAL DE VENTAS
// ==========================================

function mostrarVentasDelDia(fechaSeleccionada = null) {

    let html = "";

    let total = 0;

    let cantidadVentas = 0;


    ventasDelDia.forEach((venta, indice) => {

        if (
            fechaSeleccionada === null ||
            venta.fechaFiltro === fechaSeleccionada
        ) {

            html += `
                <div>

                    <p>

                        <strong>
                            Venta ${indice + 1}
                        </strong>

                        <br>

                        Fecha:
                        ${venta.fecha}

                        <br>

                        Total:
                        $${venta.total}

                        <br>

                        Medio de pago:
                        ${venta.medioPago}

                    </p>


                    <button
                        onclick="verDetalleVenta(${indice})"
                    >
                        👁️ Ver detalle
                    </button>


                    <div
                        id="detalleVenta${indice}"
                        style="display: none;"
                    ></div>


                    <hr>

                </div>
            `;


            total += venta.total;

            cantidadVentas++;
        }
    });


    if (cantidadVentas === 0) {

        html =
            "<p>❌ No hay ventas registradas para esta fecha.</p>";
    }


    document.getElementById("ventasDelDia").innerHTML =
        html;


    document.getElementById("totalDia").innerHTML =
        `Total vendido: $${total}`;
}


// ==========================================
// DETALLE DE UNA VENTA
// ==========================================

function verDetalleVenta(indice) {

    const venta =
        ventasDelDia[indice];


    const contenedor =
        document.getElementById(
            `detalleVenta${indice}`
        );


    if (contenedor.style.display === "none") {

        let html = `
            <div>

                <strong>
                    📋 Productos de la venta:
                </strong>
        `;


        venta.productos.forEach(producto => {

            html += `
                <p>

                    ${producto.cantidad}
                    ${producto.unidad || ""}

                    x

                    ${producto.nombre}
                    -
                    ${producto.sabor}

                    <br>

                    Precio:
                    $${producto.precio}

                    <br>

                    Subtotal:
                    $${producto.subtotal}

                </p>
            `;
        });


        html += `
                <strong>
                    Total: $${venta.total}
                </strong>

            </div>
        `;


        contenedor.innerHTML =
            html;

        contenedor.style.display =
            "block";

    } else {

        contenedor.style.display =
            "none";
    }
}


// ==========================================
// FILTRAR POR FECHA
// ==========================================

function filtrarVentasPorFecha() {

    const fecha =
        document.getElementById("fechaFiltro").value;


    if (fecha === "") {

        mostrarVentasDelDia();

        return;
    }


    mostrarVentasDelDia(fecha);
}


// ==========================================
// VER VENTAS DE HOY
// ==========================================

function mostrarVentasDeHoy() {

    const ahora = new Date();


    const hoy =
        ahora.getFullYear() +
        "-" +
        String(ahora.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(ahora.getDate()).padStart(2, "0");


    document.getElementById("fechaFiltro").value =
        hoy;


    mostrarVentasDelDia(hoy);
}


// ==========================================
// PRODUCTOS MÁS VENDIDOS
// ==========================================

function mostrarProductosMasVendidos() {

    const productosVendidos = {};


    ventasDelDia.forEach(venta => {

        venta.productos.forEach(producto => {

            const nombreCompleto =
                producto.nombre + " - " + producto.sabor;


            if (!productosVendidos[nombreCompleto]) {

                productosVendidos[nombreCompleto] = {

                    nombre: nombreCompleto,

                    unidades: 0,

                    kg: 0,

                    facturado: 0
                };
            }


            // Si se vendió por docena,
            // convertimos cada docena en 12 unidades

            if (producto.unidad === "docena") {

                productosVendidos[nombreCompleto].unidades +=
                    producto.cantidad * 12;

            }


            // Si se vendió por unidad

            else if (producto.unidad === "unidad") {

                productosVendidos[nombreCompleto].unidades +=
                    producto.cantidad;

            }


            // Si se vendió por kilo

            else if (producto.unidad === "kg") {

                productosVendidos[nombreCompleto].kg +=
                    producto.cantidad;
            }


            // Acumulamos el dinero facturado

            productosVendidos[nombreCompleto].facturado +=
                producto.subtotal;

        });
    });


    // Ordenamos por cantidad vendida

    const productosOrdenados =
        Object.values(productosVendidos)
        .sort((a, b) => {

            // Para productos por unidad,
            // usamos las unidades vendidas.

            if (a.unidades > 0 && b.unidades > 0) {
                return b.unidades - a.unidades;
            }

            // Para productos por kg,
            // usamos los kilos vendidos.

            if (a.kg > 0 && b.kg > 0) {
                return b.kg - a.kg;
            }

            // Si son unidades vs kg,
            // priorizamos facturación.

            return b.facturado - a.facturado;
        });


    let html = "";


    if (productosOrdenados.length === 0) {

        html =
            "<p>❌ Todavía no hay ventas registradas.</p>";

    } else {

        productosOrdenados.forEach(
            (producto, indice) => {

                const posicion =
                    indice + 1;


                let emoji = "🏅";


                if (posicion === 1) {
                    emoji = "🥇";
                }

                else if (posicion === 2) {
                    emoji = "🥈";
                }

                else if (posicion === 3) {
                    emoji = "🥉";
                }


                let cantidadMostrar = "";


                if (producto.unidades > 0) {

                    cantidadMostrar =
                        `📦 ${producto.unidades} unidades`;

                } else {

                    cantidadMostrar =
                        `⚖️ ${producto.kg} kg`;
                }


                html += `
                    <div>

                        <p>

                            ${emoji}

                            <strong>
                                ${producto.nombre}
                            </strong>

                        </p>

                        <p>
                            ${cantidadMostrar}
                        </p>

                        <p>
                            💰 Facturado:
                            $${producto.facturado}
                        </p>

                        <hr>

                    </div>
                `;
            }
        );
    }

}


// ==========================================
// INICIAR
// ==========================================

function alternarHistorial() {

    const historial =
        document.getElementById("historialVentas");

    if (historial.style.display === "none") {

        historial.style.display = "block";

    } else {

        historial.style.display = "none";
    }
}

function alternarReporte() {

    const reporte =
        document.getElementById("reporteMensualContainer");

    if (reporte.style.display === "none") {

        reporte.style.display = "block";

    } else {

        reporte.style.display = "none";
    }
}

mostrarVentasDelDia();

mostrarProductosMasVendidos();

console.log(ventasDelDia);

function generarReporteMensual() {

    const mesSeleccionado =
        document.getElementById("mesReporte").value;


    if (mesSeleccionado === "") {

        alert("Seleccioná un mes.");

        return;
    }


    let totalFacturado = 0;

    let cantidadVentas = 0;

    let efectivo = 0;

    let transferencia = 0;

    let tarjeta = 0;


    const productos = {};


    ventasDelDia.forEach(venta => {

        // Verificamos que la venta pertenezca al mes seleccionado

        if (
            venta.fechaFiltro &&
            venta.fechaFiltro.startsWith(mesSeleccionado)
        ) {

            cantidadVentas++;

            totalFacturado += venta.total;


            // =========================
            // MEDIOS DE PAGO
            // =========================

            if (venta.medioPago === "Efectivo") {

                efectivo += venta.total;

            }

            else if (venta.medioPago === "Transferencia") {

                transferencia += venta.total;

            }

            else if (venta.medioPago === "Tarjeta") {

                tarjeta += venta.total;
            }


            // =========================
            // PRODUCTOS
            // =========================

            venta.productos.forEach(producto => {

                const nombreCompleto =
                    producto.nombre +
                    " - " +
                    producto.sabor;


                if (!productos[nombreCompleto]) {

                    productos[nombreCompleto] = {

                        nombre: nombreCompleto,

                        unidades: 0,

                        kg: 0,

                        facturado: 0
                    };
                }


                if (producto.unidad === "docena") {

                    productos[nombreCompleto].unidades +=
                        producto.cantidad * 12;

                }

                else if (producto.unidad === "unidad") {

                    productos[nombreCompleto].unidades +=
                        producto.cantidad;

                }

                else if (producto.unidad === "kg") {

                    productos[nombreCompleto].kg +=
                        producto.cantidad;
                }


                productos[nombreCompleto].facturado +=
                    producto.subtotal;

            });
        }
    });


    // =========================
    // ORDENAR PRODUCTOS
    // =========================

    const productosOrdenados =
        Object.values(productos)
        .sort((a, b) => {

            if (a.unidades > 0 && b.unidades > 0) {

                return b.unidades - a.unidades;
            }

            if (a.kg > 0 && b.kg > 0) {

                return b.kg - a.kg;
            }

            return b.facturado - a.facturado;
        });


    // =========================
    // ARMAR REPORTE
    // =========================

    let html = `

        <hr>

        <h3>📅 Reporte: ${mesSeleccionado}</h3>

        <h4>💰 Resumen</h4>

        <p>
            <strong>Facturación total:</strong>
            $${totalFacturado}
        </p>

        <p>
            <strong>Cantidad de ventas:</strong>
            ${cantidadVentas}
        </p>


        <h4>💳 Medios de pago</h4>

        <p>
            💵 Efectivo:
            $${efectivo}
        </p>

        <p>
            🏦 Transferencia:
            $${transferencia}
        </p>

        <p>
            💳 Tarjeta:
            $${tarjeta}
        </p>


        <h4>🏆 Productos más vendidos</h4>
    `;


    if (productosOrdenados.length === 0) {

        html += `
            <p>
                ❌ No hubo ventas durante este mes.
            </p>
        `;

    } else {

        productosOrdenados.forEach(
            (producto, indice) => {

                let emoji = "🏅";


                if (indice === 0) {

                    emoji = "🥇";

                }

                else if (indice === 1) {

                    emoji = "🥈";

                }

                else if (indice === 2) {

                    emoji = "🥉";
                }


                let cantidadMostrar;


                if (producto.unidades > 0) {

                    cantidadMostrar =
                        `${producto.unidades} unidades`;

                } else {

                    cantidadMostrar =
                        `${producto.kg} kg`;
                }


                html += `

                    <p>

                        ${emoji}

                        <strong>
                            ${producto.nombre}
                        </strong>

                        → ${cantidadMostrar}

                        <br>

                        💰 Facturado:
                        $${producto.facturado}

                    </p>

                `;
            }
        );
    }


    document.getElementById("reporteMensual").innerHTML =
        html;
}

// ==========================================
// ESCÁNER DE CÓDIGOS
// ==========================================

let escaner = null;

function abrirEscaner() {

    document.getElementById("lectorCodigo").style.display = "block";

    escaner = new Html5Qrcode("reader");

    escaner.start(
        { facingMode: "environment" },

        {
            fps: 10,
            qrbox: { width: 250, height: 150 }
        },

        (codigoEscaneado) => {

            document.getElementById("codigo").value =
                codigoEscaneado;

            buscarProducto();

            cerrarEscaner();
        },

        (error) => {
            // Ignoramos los errores mientras busca el código
        }
    )
    .catch((error) => {

        console.error(
            "No se pudo abrir la cámara:",
            error
        );

        alert(
            "No se pudo acceder a la cámara."
        );
    });
}


function cerrarEscaner() {

    if (escaner) {

        escaner.stop()
        .then(() => {

            escaner.clear();

            escaner = null;

            document.getElementById(
                "lectorCodigo"
            ).style.display = "none";

        })
        .catch(() => {

            document.getElementById(
                "lectorCodigo"
            ).style.display = "none";

            escaner = null;
        });

    } else {

        document.getElementById(
            "lectorCodigo"
        ).style.display = "none";
    }
}
