const URL_PRECIOS =
    "https://script.google.com/macros/s/AKfycbyqFaMuv3Fs1pZyHw5i3o69Kt1Xv5-y5fnh52EX8LtJcnntNWZmWTJPbhh1syPduUam/exec";


// ==========================================
// PRODUCTOS
// ==========================================

const productos = {

    "F01": {
        nombre: "Ravioles",
        sabor: "Jamón y queso",
        precioUnidad: 500,
        precioDocena: 5000,
        tipoVenta: "unidad"
    },

    "F02": {
        nombre: "Ravioles",
        sabor: "Pollo",
        precioUnidad: 500,
        precioDocena: 5000,
        tipoVenta: "unidad"
    },

    "F03": {
        nombre: "Ravioles",
        sabor: "Verdura",
        precioUnidad: 500,
        precioDocena: 5000,
        tipoVenta: "unidad"
    },

    "F04": {
        nombre: "Raviolones",
        sabor: "Jamón y queso",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "F05": {
        nombre: "Raviolones",
        sabor: "Jamón, queso y roquefort",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "F06": {
        nombre: "Raviolones",
        sabor: "Verdura",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "F07": {
        nombre: "Raviolones",
        sabor: "Pollo al verdeo",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "F08": {
        nombre: "Raviolones",
        sabor: "Osobuco con provoleta",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "F09": {
        nombre: "Raviolones",
        sabor: "Camarones",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "F10": {
        nombre: "Raviolones",
        sabor: "Salmón",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "F11": {
        nombre: "Raviolones",
        sabor: "Frutos de mar",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "F12": {
        nombre: "Raviolones",
        sabor: "Bondiola a la mostaza",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "F13": {
        nombre: "Raviolones",
        sabor: "Veganos",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "F14": {
        nombre: "Raviolones",
        sabor: "Ricota, espinaca y nuez",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "F15": {
        nombre: "Raviolones",
        sabor: "Berenjena, cherry y queso",
        precioUnidad: 700,
        precioDocena: 7000,
        tipoVenta: "unidad"
    },

    "F16": {
        nombre: "Sorrentinos",
        sabor: "Jamón y queso",
        precioUnidad: 600,
        precioDocena: 6000,
        tipoVenta: "unidad"
    },

    "F17": {
        nombre: "Sorrentinos",
        sabor: "Zapallo, queso y almendras tostadas",
        precioUnidad: 600,
        precioDocena: 6000,
        tipoVenta: "unidad"
    },

    "F18": {
        nombre: "Ñoquis",
        sabor: "Papa",
        precioKg: 4000,
        tipoVenta: "kg"
    },

    "F19": {
        nombre: "Ñoquis",
        sabor: "Papa con espinaca",
        precioKg: 4000,
        tipoVenta: "kg"
    },

    "F20": {
        nombre: "Fideos",
        sabor: "Al huevo blancos",
        precioKg: 4000,
        tipoVenta: "kg"
    },

    "F21": {
        nombre: "Fideos",
        sabor: "Al huevo con espinaca",
        precioKg: 4000,
        tipoVenta: "kg"
    }

};


// ==========================================
// ESTADO DE LA APLICACIÓN
// ==========================================

let preciosCargados = false;

let actualizandoPrecios = false;


// ==========================================
// ACTUALIZAR PRECIOS DESDE GOOGLE SHEETS
// ==========================================

async function actualizarPreciosDesdeGoogle(mostrarMensaje = true) {

    // Evitamos dos actualizaciones simultáneas
    if (actualizandoPrecios) {
        return preciosCargados;
    }

    actualizandoPrecios = true;

    if (mostrarMensaje) {

        document.getElementById("mensaje").innerHTML =
            "⏳ Actualizando precios...";
    }

    try {

        const respuesta =
            await fetch(URL_PRECIOS + "?t=" + Date.now());

        if (!respuesta.ok) {

            throw new Error(
                "No se pudo conectar con Google Sheets."
            );
        }

        const datos =
            await respuesta.json();


       datos.productos.forEach(item => {

            const codigo =
                String(item.codigo).trim();


            // ==========================================
            // PRODUCTO NUEVO
            // ==========================================

            if (!productos[codigo]) {

                productos[codigo] = {

                    nombre:
                        item.nombre || "Producto",

                    sabor:
                        item.sabor || "",

                    precioUnidad:
                        item.precioUnidad !== null &&
                        item.precioUnidad !== ""
                            ? Number(item.precioUnidad)
                            : null,

                    precioDocena:
                        item.precioDocena !== null &&
                        item.precioDocena !== ""
                            ? Number(item.precioDocena)
                            : null,

                    precioKg:
                        item.precioKg !== null &&
                        item.precioKg !== ""
                            ? Number(item.precioKg)
                            : null,
                    
                    precioPlancha:
    item.precioPlancha !== null &&
    item.precioPlancha !== ""
        ? Number(item.precioPlancha)
        : null,

                    tipoVenta:
                        item.tipoVenta || "unidad"
                };

                return;
            }


            // ==========================================
            // ACTUALIZAR PRODUCTO EXISTENTE
            // ==========================================

            if (
                item.nombre !== null &&
                item.nombre !== ""
            ) {

                productos[codigo].nombre =
                    item.nombre;
            }


            if (item.sabor !== null) {

                productos[codigo].sabor =
                    item.sabor;
            }


            if (
                item.precioUnidad !== null &&
                item.precioUnidad !== ""
            ) {

                productos[codigo].precioUnidad =
                    Number(item.precioUnidad);
            }


            if (
                item.precioDocena !== null &&
                item.precioDocena !== ""
            ) {

                productos[codigo].precioDocena =
                    Number(item.precioDocena);
            }


            if (
                item.precioKg !== null &&
                item.precioKg !== ""
            ) {

                productos[codigo].precioKg =
                    Number(item.precioKg);
            }

            if (
    item.precioPlancha !== null &&
    item.precioPlancha !== ""
) {

    productos[codigo].precioPlancha =
        Number(item.precioPlancha);
}
            if (
                item.tipoVenta !== null &&
                item.tipoVenta !== ""
            ) {

                productos[codigo].tipoVenta =
                    item.tipoVenta;
            }

        });


        preciosCargados = true;


        if (mostrarMensaje) {

            document.getElementById("mensaje").innerHTML =
                "✅ Productos y precios actualizados correctamente";
        }


        console.log(
            "✅ Precios actualizados desde Google Sheets"
        );

        console.log(
            "Productos cargados:",
            productos
        );


        return true;


    } catch (error) {

        console.error(
            "Error actualizando productos:",
            error
        );


        preciosCargados = false;


        document.getElementById("mensaje").innerHTML =
            "❌ No se pudieron actualizar los productos.";


        return false;


    } finally {

        actualizandoPrecios = false;
    }
}


// ==========================================
// VENTAS
// ==========================================

let ventaActual = [];

let totalVenta = 0;


let ventasDelDia =
    JSON.parse(
        localStorage.getItem("ventasDelDia")
    ) || [];

// ==========================================
    // BUSCAR PRODUCTOS
    // ==========================================

function buscarProducto() {

    const codigo =
        document
            .getElementById("codigo")
            .value
            .trim();


    const producto =
        productos[codigo];


    if (!producto) {

        document.getElementById("resultado").innerHTML =
            "❌ Producto no encontrado";


        document.getElementById("cantidadProducto").style.display =
            "none";


        return;
    }


    document.getElementById("resultado").innerHTML = `

        <h3>${producto.nombre}</h3>

        <p>
            Sabor: ${producto.sabor}
        </p>

    `;


    document.getElementById("cantidadProducto").style.display =
        "block";


    const formaVentaContainer =
        document.getElementById(
            "formaVentaContainer"
        );


    const formaVenta =
        document.getElementById(
            "formaVenta"
        );


    const unidadCantidad =
        document.getElementById(
            "unidadCantidad"
        );


    const cantidad =
        document.getElementById(
            "cantidad"
        );


    // ==========================================
    // PRODUCTOS POR KG
    // ==========================================

    if (producto.tipoVenta === "kg") {

        formaVentaContainer.style.display =
            "none";


        unidadCantidad.innerText =
            "kg";


        cantidad.value =
            "1";


    }


    // ==========================================
    // PRODUCTOS POR PLANCHA
    // ==========================================

    else if (producto.tipoVenta === "plancha") {

        formaVentaContainer.style.display =
            "none";


        unidadCantidad.innerText =
            "plancha";


        cantidad.value =
            "1";


    }


    // ==========================================
    // PRODUCTOS POR UNIDAD / DOCENA
    // ==========================================

    else {

        formaVentaContainer.style.display =
            "block";


        formaVenta.value =
            "unidad";


        unidadCantidad.innerText =
            "unidad";


        cantidad.value =
            "1";
    }
}


// ==========================================
// CAMBIAR UNIDAD / DOCENA
// ==========================================

document
    .getElementById("formaVenta")
    .addEventListener(
        "change",
        function () {

            const unidadCantidad =
                document.getElementById(
                    "unidadCantidad"
                );


            if (this.value === "docena") {

                unidadCantidad.innerText =
                    "docena";

            } else {

                unidadCantidad.innerText =
                    "unidad";
            }
        }
    );


// ==========================================
// AGREGAR PRODUCTO A LA VENTA
// ==========================================

function agregarVenta() {

    const codigo =
        document
            .getElementById("codigo")
            .value
            .trim();


    const cantidadTexto =
        document
            .getElementById("cantidad")
            .value
            .trim()
            .replace(",", ".");


 const cantidad =
    parseFloat(cantidadTexto);


const producto =
    productos[codigo];


if (!producto) {

    alert(
        "Producto no encontrado."
    );

    return;
}

// ==========================================
// VALIDAR CANTIDAD SEGÚN FORMA DE VENTA
// ==========================================

const formaVenta =
    document.getElementById("formaVenta").value;


if (
    formaVenta === "unidad" &&
    !Number.isInteger(cantidad)
) {

    alert(
        "Para productos por unidad, ingresá una cantidad entera."
    );

    return;
}
    let precio;

    let unidad;

// ==========================================
// PRODUCTOS POR KG
// ==========================================

if (producto.tipoVenta === "kg") {

    precio =
        producto.precioKg;

    unidad =
        "kg";

}


// ==========================================
// PRODUCTOS POR PLANCHA
// ==========================================

else if (producto.tipoVenta === "plancha") {

    precio =
        producto.precioPlancha;

    unidad =
        "plancha";

}


// ==========================================
// PRODUCTOS POR UNIDAD / DOCENA
// ==========================================

else {

    const formaVenta =
        document
            .getElementById("formaVenta")
            .value;


    if (formaVenta === "docena") {

        precio =
            producto.precioDocena;

        unidad =
            "docena";

    } else {

        precio =
            producto.precioUnidad;

        unidad =
            "unidad";
    }
}

    // ==========================================
    // VERIFICAR PRECIO
    // ==========================================

    if (
        !precio ||
        precio <= 0
    ) {

        alert(
            "Este producto no tiene un precio cargado."
        );

        return;
    }


    const subtotal =
        precio * cantidad;


    ventaActual.push({

        nombre:
            producto.nombre,

        sabor:
            producto.sabor,

        precio:
            precio,

        cantidad:
            cantidad,

        unidad:
            unidad,

        subtotal:
            subtotal

    });


    mostrarVenta();


    // Limpiar campos

    document.getElementById("codigo").value =
        "";

    document.getElementById("cantidad").value =
        "1";

    document.getElementById("codigo").focus();
}


// ==========================================
// MOSTRAR VENTA ACTUAL
// ==========================================

function mostrarVenta() {

    let html =
        "";


    totalVenta =
        0;


    ventaActual
        .map(
            (item, indice) => ({
                item: item,
                indice: indice
            })
        )
        .reverse()
        .forEach(
            dato => {

                const item =
                    dato.item;

                const indice =
                    dato.indice;


                html += `

                    <div>

                        <p>

                            <strong>
                                ${item.nombre}
                            </strong>

                            -
                            ${item.sabor}

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


                totalVenta +=
                    item.subtotal;
            }
        );


    document.getElementById("venta").innerHTML =
        html;


    document.getElementById("total").innerHTML =
        `Total: $${totalVenta}`;
}


// ==========================================
// ELIMINAR PRODUCTO
// ==========================================

function eliminarProducto(indice) {

    ventaActual.splice(
        indice,
        1
    );

    mostrarVenta();
}

function vaciarVenta() {

    if (ventaActual.length === 0) {
        return;
    }

    const confirmar =
        confirm(
            "¿Seguro que querés borrar todos los productos de esta venta?"
        );

    if (!confirmar) {
        return;
    }

    ventaActual = [];

    totalVenta = 0;

    mostrarVenta();

    document.getElementById("resultado").innerHTML =
        "";

    document.getElementById(
        "cantidadProducto"
    ).style.display =
        "none";

    document.getElementById("codigo").value =
        "";

    document.getElementById("cantidad").value =
        "1";

    document.getElementById("codigo").focus();
}

// ==========================================
// FINALIZAR VENTA
// ==========================================

function finalizarVenta() {

    if (
        ventaActual.length === 0
    ) {

        alert(
            "No hay productos en la venta."
        );

        return;
    }


    const medioPago =
        document
            .getElementById("medioPago")
            .value;


    const ahora =
        new Date();


    const fechaMostrar =
        ahora.toLocaleString(
            "es-AR"
        );


    const fechaFiltro =
        ahora.getFullYear() +
        "-" +
        String(
            ahora.getMonth() + 1
        ).padStart(2, "0") +
        "-" +
        String(
            ahora.getDate()
        ).padStart(2, "0");


    const nuevaVenta = {

        fecha:
            fechaMostrar,

        fechaFiltro:
            fechaFiltro,

        productos:
            [...ventaActual],

        total:
            totalVenta,

        medioPago:
            medioPago

    };


    ventasDelDia.push(
        nuevaVenta
    );


    localStorage.setItem(
        "ventasDelDia",
        JSON.stringify(
            ventasDelDia
        )
    );

    // ==========================================
// ENVIAR VENTA A GOOGLE SHEETS
// ==========================================

fetch(URL_PRECIOS, {

    method: "POST",

    headers: {
        "Content-Type": "text/plain;charset=utf-8"
    },

    body: JSON.stringify({
        venta: nuevaVenta
    })

})
.then(respuesta => respuesta.json())

.then(datos => {

    if (datos.ok) {

        console.log(
            "✅ Venta guardada en Google Sheets"
        );

    } else {

        console.error(
            "❌ Google Sheets rechazó la venta:",
            datos.error
        );

    }

})

.catch(error => {

    console.error(
        "❌ Error enviando venta a Google Sheets:",
        error
    );

});

    alert(
        "Venta registrada correctamente.\n" +
        "Total: $" +
        totalVenta +
        "\n" +
        "Medio de pago: " +
        medioPago
    );


    ventaActual =
        [];


    totalVenta =
        0;


    document.getElementById("venta").innerHTML =
        "";


    document.getElementById("total").innerHTML =
        "Total: $0";


    document.getElementById("resultado").innerHTML =
        "";


    document.getElementById(
        "cantidadProducto"
    ).style.display =
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

function mostrarVentasDelDia(
    fechaSeleccionada = null
) {

    let html =
        "";


    let total =
        0;


    let cantidadVentas =
        0;


    ventasDelDia

        .map(
            (venta, indice) => ({

                venta:
                    venta,

                numeroVenta:
                    indice + 1

            })
        )

        .filter(
            item =>
                fechaSeleccionada === null ||
                item.venta.fechaFiltro ===
                fechaSeleccionada
        )

        .reverse()

        .forEach(
            item => {

                const venta =
                    item.venta;


                const numeroVenta =
                    item.numeroVenta;


                html += `

                    <div>

                        <p>

                            <strong>
                                Venta ${numeroVenta}
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
                            onclick="verDetalleVenta(${numeroVenta - 1})"
                        >
                            👁️ Ver detalle
                        </button>


                        <div
                            id="detalleVenta${numeroVenta - 1}"
                            style="display: none;"
                        ></div>


                        <hr>

                    </div>

                `;


                total +=
                    venta.total;


                cantidadVentas++;
            }
        );


    if (
        cantidadVentas === 0
    ) {

        html =
            "<p>❌ No hay ventas registradas para esta fecha.</p>";
    }


    document.getElementById(
        "ventasDelDia"
    ).innerHTML =
        html;


    document.getElementById(
        "totalDia"
    ).innerHTML =
        `Total vendido: $${total}`;
}


// ==========================================
// DETALLE DE UNA VENTA
// ==========================================

function verDetalleVenta(indice) {

    const venta =
        ventasDelDia[indice];


    if (!venta) {

        return;
    }


    const contenedor =
        document.getElementById(
            `detalleVenta${indice}`
        );


    if (!contenedor) {

        return;
    }


    if (
        contenedor.style.display ===
        "none"
    ) {

        let html = `

            <div>

                <strong>
                    📋 Productos de la venta:
                </strong>

        `;


        venta.productos.forEach(
            producto => {

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
            }
        );


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
        document
            .getElementById("fechaFiltro")
            .value;


    if (
        fecha === ""
    ) {

        mostrarVentasDelDia();

        return;
    }


    mostrarVentasDelDia(
        fecha
    );
}


// ==========================================
// VER VENTAS DE HOY
// ==========================================

function mostrarVentasDeHoy() {

    const ahora =
        new Date();


    const hoy =
        ahora.getFullYear() +
        "-" +
        String(
            ahora.getMonth() + 1
        ).padStart(2, "0") +
        "-" +
        String(
            ahora.getDate()
        ).padStart(2, "0");


    document.getElementById(
        "fechaFiltro"
    ).value =
        hoy;


    mostrarVentasDelDia(
        hoy
    );
}


// ==========================================
// PRODUCTOS MÁS VENDIDOS
// ==========================================

function mostrarProductosMasVendidos() {

    const productosVendidos =
        {};


    ventasDelDia.forEach(
        venta => {

            venta.productos.forEach(
                producto => {

                    const nombreCompleto =
                        producto.nombre +
                        " - " +
                        producto.sabor;


                    if (
                        !productosVendidos[
                            nombreCompleto
                        ]
                    ) {

                        productosVendidos[
                            nombreCompleto
                        ] = {

                            nombre:
                                nombreCompleto,

                            unidades:
                                0,

                            kg:
                                0,

                            facturado:
                                0
                        };
                    }


                    if (
                        producto.unidad ===
                        "docena"
                    ) {

                        productosVendidos[
                            nombreCompleto
                        ].unidades +=
                            producto.cantidad *
                            12;

                    }


                    else if (
                        producto.unidad ===
                        "unidad"
                    ) {

                        productosVendidos[
                            nombreCompleto
                        ].unidades +=
                            producto.cantidad;

                    }


                    else if (
                        producto.unidad ===
                        "kg"
                    ) {

                        productosVendidos[
                            nombreCompleto
                        ].kg +=
                            producto.cantidad;
                    }


                    productosVendidos[
                        nombreCompleto
                    ].facturado +=
                        producto.subtotal;

                }
            );
        }
    );


    const productosOrdenados =
        Object.values(
            productosVendidos
        )
        .sort(
            (a, b) => {

                if (
                    a.unidades > 0 &&
                    b.unidades > 0
                ) {

                    return (
                        b.unidades -
                        a.unidades
                    );
                }


                if (
                    a.kg > 0 &&
                    b.kg > 0
                ) {

                    return (
                        b.kg -
                        a.kg
                    );
                }


                return (
                    b.facturado -
                    a.facturado
                );
            }
        );


    let html =
        "";


    if (
        productosOrdenados.length === 0
    ) {

        html =
            "<p>❌ Todavía no hay ventas registradas.</p>";

    } else {

        productosOrdenados.forEach(
            (producto, indice) => {

                const posicion =
                    indice + 1;


                let emoji =
                    "🏅";


                if (
                    posicion === 1
                ) {

                    emoji =
                        "🥇";

                }

                else if (
                    posicion === 2
                ) {

                    emoji =
                        "🥈";

                }

                else if (
                    posicion === 3
                ) {

                    emoji =
                        "🥉";
                }


                let cantidadMostrar =
                    "";


                if (
                    producto.unidades > 0
                ) {

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
// MOSTRAR / OCULTAR HISTORIAL
// ==========================================

function alternarHistorial() {

    const historial =
        document.getElementById(
            "historialVentas"
        );


    if (
        historial.style.display ===
        "none"
    ) {

        historial.style.display =
            "block";

    } else {

        historial.style.display =
            "none";
    }
}


// ==========================================
// MOSTRAR / OCULTAR REPORTE
// ==========================================

function alternarReporte() {

    const reporte =
        document.getElementById(
            "reporteMensualContainer"
        );


    if (
        reporte.style.display ===
        "none"
    ) {

        reporte.style.display =
            "block";

    } else {

        reporte.style.display =
            "none";
    }
}


// ==========================================
// REPORTE MENSUAL
// ==========================================

function generarReporteMensual() {

    const mesSeleccionado =
        document
            .getElementById(
                "mesReporte"
            )
            .value;


    if (
        mesSeleccionado === ""
    ) {

        alert(
            "Seleccioná un mes."
        );

        return;
    }


    let totalFacturado =
        0;


    let cantidadVentas =
        0;


    let efectivo =
        0;


    let transferencia =
        0;


    let tarjeta =
        0;


    const productos =
        {};


    ventasDelDia.forEach(
        venta => {

            if (
                venta.fechaFiltro &&
                venta.fechaFiltro.startsWith(
                    mesSeleccionado
                )
            ) {

                cantidadVentas++;


                totalFacturado +=
                    venta.total;


                if (
                    venta.medioPago ===
                    "Efectivo"
                ) {

                    efectivo +=
                        venta.total;

                }

                else if (
                    venta.medioPago ===
                    "Transferencia"
                ) {

                    transferencia +=
                        venta.total;

                }

                else if (
                    venta.medioPago ===
                    "Tarjeta"
                ) {

                    tarjeta +=
                        venta.total;
                }


                venta.productos.forEach(
                    producto => {

                        const nombreCompleto =
                            producto.nombre +
                            " - " +
                            producto.sabor;


                        if (
                            !productos[
                                nombreCompleto
                            ]
                        ) {

                            productos[
                                nombreCompleto
                            ] = {

                                nombre:
                                    nombreCompleto,

                                unidades:
                                    0,

                                kg:
                                    0,

                                facturado:
                                    0
                            };
                        }


                        if (
                            producto.unidad ===
                            "docena"
                        ) {

                            productos[
                                nombreCompleto
                            ].unidades +=
                                producto.cantidad *
                                12;

                        }

                        else if (
                            producto.unidad ===
                            "unidad"
                        ) {

                            productos[
                                nombreCompleto
                            ].unidades +=
                                producto.cantidad;

                        }

                        else if (
                            producto.unidad ===
                            "kg"
                        ) {

                            productos[
                                nombreCompleto
                            ].kg +=
                                producto.cantidad;
                        }


                        productos[
                            nombreCompleto
                        ].facturado +=
                            producto.subtotal;

                    }
                );
            }
        }
    );


    const productosOrdenados =
        Object.values(
            productos
        )
        .sort(
            (a, b) => {

                if (
                    a.unidades > 0 &&
                    b.unidades > 0
                ) {

                    return (
                        b.unidades -
                        a.unidades
                    );
                }


                if (
                    a.kg > 0 &&
                    b.kg > 0
                ) {

                    return (
                        b.kg -
                        a.kg
                    );
                }


                return (
                    b.facturado -
                    a.facturado
                );
            }
        );


    let html = `

        <hr>

        <h3>
            📅 Reporte: ${mesSeleccionado}
        </h3>

        <h4>
            💰 Resumen
        </h4>

        <p>
            <strong>
                Facturación total:
            </strong>

            $${totalFacturado}
        </p>

        <p>
            <strong>
                Cantidad de ventas:
            </strong>

            ${cantidadVentas}
        </p>


        <h4>
            💳 Medios de pago
        </h4>

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


        <h4>
            🏆 Productos más vendidos
        </h4>

    `;


    if (
        productosOrdenados.length === 0
    ) {

        html += `

            <p>
                ❌ No hubo ventas durante este mes.
            </p>

        `;

    } else {

        productosOrdenados.forEach(
            (producto, indice) => {

                let emoji =
                    "🏅";


                if (
                    indice === 0
                ) {

                    emoji =
                        "🥇";

                }

                else if (
                    indice === 1
                ) {

                    emoji =
                        "🥈";

                }

                else if (
                    indice === 2
                ) {

                    emoji =
                        "🥉";
                }


                let cantidadMostrar;


                if (
                    producto.unidades > 0
                ) {

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


    document.getElementById(
        "reporteMensual"
    ).innerHTML =
        html;
}


// ==========================================
// ESCÁNER DE CÓDIGOS
// ==========================================

let escaner =
    null;


async function abrirEscaner() {

    // Si todavía se están cargando los precios,
    // esperamos antes de abrir el escáner.

    if (!preciosCargados) {

        document.getElementById(
            "mensaje"
        ).innerHTML =
            "⏳ Esperá un momento, estamos actualizando los precios...";


        const actualizado =
            await actualizarPreciosDesdeGoogle(
                false
            );


        if (!actualizado) {

            alert(
                "No se pudieron cargar los precios. Revisá tu conexión a Internet."
            );

            return;
        }


        document.getElementById(
            "mensaje"
        ).innerHTML =
            "✅ Precios actualizados automáticamente";
    }


    document.getElementById(
        "lectorCodigo"
    ).style.display =
        "block";


    // Evitamos crear dos escáneres al mismo tiempo.

    if (escaner) {

        return;
    }


    escaner =
        new Html5Qrcode(
            "reader"
        );


    const configuracion = {

        fps: 10,

        qrbox: {
            width: 300,
            height: 150
        }

    };


    try {

        await escaner.start(

            {
                facingMode:
                    "environment"
            },

            configuracion,


            async (codigoEscaneado) => {

                codigoEscaneado =
                    codigoEscaneado
                        .trim();


                console.log(
                    "Código escaneado:",
                    codigoEscaneado
                );


                // Si por algún motivo todavía
                // no están cargados los precios,
                // los actualizamos antes de buscar.

                if (!preciosCargados) {

                    const actualizado =
                        await actualizarPreciosDesdeGoogle(
                            false
                        );


                    if (!actualizado) {

                        alert(
                            "No se pudieron cargar los precios."
                        );

                        return;
                    }
                }


                document.getElementById(
                    "codigo"
                ).value =
                    codigoEscaneado;


                buscarProducto();


                cerrarEscaner();

            },


            (error) => {

                // No hacemos nada.
                // El escáner sigue buscando.
            }

        );


    } catch (error) {

        console.error(
            "Error del escáner:",
            error
        );


        alert(
            "No se pudo iniciar el escáner. " +
            "Revisá que hayas permitido el acceso a la cámara."
        );


        document.getElementById(
            "lectorCodigo"
        ).style.display =
            "none";


        escaner =
            null;
    }
}


// ==========================================
// CERRAR ESCÁNER
// ==========================================

function cerrarEscaner() {

    if (escaner) {

        escaner.stop()

            .then(
                () => {

                    escaner.clear();

                    escaner =
                        null;


                    document.getElementById(
                        "lectorCodigo"
                    ).style.display =
                        "none";

                }
            )

            .catch(
                () => {

                    document.getElementById(
                        "lectorCodigo"
                    ).style.display =
                        "none";


                    escaner =
                        null;
                }
            );

    } else {

        document.getElementById(
            "lectorCodigo"
        ).style.display =
            "none";
    }
}


// ==========================================
// INICIAR APLICACIÓN
// ==========================================

async function iniciarAplicacion() {

    // Primero mostramos las ventas guardadas
    // para que la aplicación cargue normalmente.

    mostrarVentasDelDia();

    mostrarProductosMasVendidos();


    // Después actualizamos automáticamente
    // los precios desde Google Sheets.

    await actualizarPreciosDesdeGoogle(
        true
    );


    console.log(
        "Aplicación iniciada."
    );


    console.log(
        "Ventas guardadas:",
        ventasDelDia
    );
}


// Iniciar todo

iniciarAplicacion();
