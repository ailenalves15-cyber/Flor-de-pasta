const URL_PRECIOS =
    "https://script.google.com/macros/s/AKfycbyqFaMuv3Fs1pZyHw5i3o69Kt1Xv5-y5fnh52EX8LtJcnntNWZmWTJPbhh1syPduUam/exec";


// ==========================================
// PRODUCTOS
// ==========================================
// IMPORTANTE:
// Los precios locales NO son valores de respaldo.
// Todos los precios comienzan en null.
// La única fuente válida de precios es Google Sheets.
// ==========================================

const productos = {

    "F01": {
        nombre: "Ravioles",
        sabor: "Jamón y queso",
        precioUnidad: null,
        precioDocena: null,
        precioPlancha: null,
        precioDosPlanchas: null,
        precioMediaDocena: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "plancha"
    },

    "F02": {
        nombre: "Ravioles",
        sabor: "Pollo",
        precioUnidad: null,
        precioDocena: null,
        precioPlancha: null,
        precioDosPlanchas: null,
        precioMediaDocena: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "plancha"
    },

    "F03": {
        nombre: "Ravioles",
        sabor: "Verdura",
        precioUnidad: null,
        precioDocena: null,
        precioPlancha: null,
        precioDosPlanchas: null,
        precioMediaDocena: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "plancha"
    },

    "F04": {
        nombre: "Raviolones",
        sabor: "Jamón y queso",
        precioUnidad: null,
        precioDocena: null,
        precioMediaDocena: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F05": {
        nombre: "Raviolones",
        sabor: "Jamón, queso y roquefort",
        precioUnidad: null,
        precioDocena: null,
        precioMediaDocena: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F06": {
        nombre: "Raviolones",
        sabor: "Verdura",
        precioUnidad: null,
        precioDocena: null,
        precioMediaDocena: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F07": {
        nombre: "Raviolones",
        sabor: "Pollo al verdeo",
        precioUnidad: null,
        precioDocena: null,
        precioMediaDocena: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F08": {
        nombre: "Raviolones",
        sabor: "Osobuco con provoleta",
        precioUnidad: null,
        precioDocena: null,
        precioMediaDocena: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F09": {
        nombre: "Raviolones",
        sabor: "Camarones",
        precioUnidad: null,
        precioDocena: null,
        precioMediaDocena: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F10": {
        nombre: "Raviolones",
        sabor: "Salmón",
        precioUnidad: null,
        precioDocena: null,
        precioMediaDocena: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F11": {
        nombre: "Raviolones",
        sabor: "Frutos de mar",
        precioUnidad: null,
        precioDocena: null,
        precioMediaDocena: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F12": {
        nombre: "Raviolones",
        sabor: "Bondiola a la mostaza",
        precioUnidad: null,
        precioDocena: null,
        precioMediaDocena: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F13": {
        nombre: "Raviolones",
        sabor: "Veganos",
        precioUnidad: null,
        precioDocena: null,
        precioMediaDocena: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F14": {
        nombre: "Raviolones",
        sabor: "Ricota, espinaca y nuez",
        precioUnidad: null,
        precioDocena: null,
        precioMediaDocena: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F15": {
        nombre: "Raviolones",
        sabor: "Berenjena, cherry y queso",
        precioUnidad: null,
        precioDocena: null,
        precioMediaDocena: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F16": {
        nombre: "Sorrentinos",
        sabor: "Jamón y queso",
        precioUnidad: null,
        precioDocena: null,
        precioMediaDocena: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F17": {
        nombre: "Sorrentinos",
        sabor: "Zapallo, queso y almendras tostadas",
        precioUnidad: null,
        precioDocena: null,
        precioMediaDocena: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F18": {
        nombre: "Ñoquis",
        sabor: "Papa",
        precioKg: null,
        precioMedioKg: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "kg"
    },

    "F19": {
        nombre: "Ñoquis",
        sabor: "Papa con espinaca",
        precioKg: null,
        precioMedioKg: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "kg"
    },

    "F20": {
        nombre: "Fideos",
        sabor: "Al huevo blancos",
        precioKg: null,
        precioMedioKg: null,
        precioMayorista: null,
        unidadMayorista: "",
        tipoVenta: "kg"
    },

    "F21": {
        nombre: "Fideos",
        sabor: "Al huevo con espinaca",
        precioKg: null,
        precioMedioKg: null,
        precioMayorista: null,
        unidadMayorista: "",
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

    if (actualizandoPrecios) {
        return preciosCargados;
    }

    actualizandoPrecios = true;

    preciosCargados = false;

    if (mostrarMensaje) {

        const mensaje =
            document.getElementById("mensaje");

        if (mensaje) {

            mensaje.innerHTML =
                "⏳ Actualizando precios...";
        }
    }

    try {

        const respuesta =
            await fetch(
                URL_PRECIOS + "?t=" + Date.now()
            );


        if (!respuesta.ok) {

            throw new Error(
                "No se pudo conectar con Google Sheets."
            );
        }


        const datos =
            await respuesta.json();


        // ==========================================
        // CARGAR CLIENTES / RESTAURANTES
        // ==========================================

        cargarClientesDesdeGoogle(datos);


        // ==========================================
        // VERIFICAR PRODUCTOS
        // ==========================================

        if (
            !datos ||
            !Array.isArray(datos.productos)
        ) {

            throw new Error(
                "Google Sheets no devolvió la lista de productos."
            );
        }


        if (
            datos.productos.length === 0
        ) {

            throw new Error(
                "Google Sheets no devolvió ningún producto."
            );
        }


        // ==========================================
        // ACTUALIZAR PRODUCTOS
        // ==========================================

        datos.productos.forEach(item => {

            const codigo =
                String(item.codigo || "").trim();


            if (!codigo) {
                return;
            }


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
                        item.precioUnidad !== undefined &&
                        item.precioUnidad !== ""
                            ? Number(item.precioUnidad)
                            : null,

                    precioDocena:
                        item.precioDocena !== null &&
                        item.precioDocena !== undefined &&
                        item.precioDocena !== ""
                            ? Number(item.precioDocena)
                            : null,

                    precioKg:
                        item.precioKg !== null &&
                        item.precioKg !== undefined &&
                        item.precioKg !== ""
                            ? Number(item.precioKg)
                            : null,

                    precioMedioKg:
                        item.precioMedioKg !== null &&
                        item.precioMedioKg !== undefined &&
                        item.precioMedioKg !== ""
                            ? Number(item.precioMedioKg)
                            : null,

                    precioPlancha:
                        item.precioPlancha !== null &&
                        item.precioPlancha !== undefined &&
                        item.precioPlancha !== ""
                            ? Number(item.precioPlancha)
                            : null,

                    precioDosPlanchas:
                        item.precioDosPlanchas !== null &&
                        item.precioDosPlanchas !== undefined &&
                        item.precioDosPlanchas !== ""
                            ? Number(item.precioDosPlanchas)
                            : null,

                    precioMediaDocena:
                        item.precioMediaDocena !== null &&
                        item.precioMediaDocena !== undefined &&
                        item.precioMediaDocena !== ""
                            ? Number(item.precioMediaDocena)
                            : null,

                    precioMayorista:
                        item.precioMayorista !== null &&
                        item.precioMayorista !== undefined &&
                        item.precioMayorista !== ""
                            ? Number(item.precioMayorista)
                            : null,

                    unidadMayorista:
                        item.unidadMayorista || "",

                    tipoVenta:
                        item.tipoVenta || "unidad",

                    permiteDocena:
                        item.permiteDocena === true ||
                        String(item.permiteDocena)
                            .toLowerCase() === "sí"
                };


                return;
            }


            // ==========================================
            // PRODUCTO EXISTENTE
            // ==========================================

            if (
                item.nombre !== null &&
                item.nombre !== undefined &&
                item.nombre !== ""
            ) {

                productos[codigo].nombre =
                    item.nombre;
            }


            if (
                item.sabor !== null &&
                item.sabor !== undefined
            ) {

                productos[codigo].sabor =
                    item.sabor;
            }


            // ==========================================
            // PRECIO UNIDAD
            // ==========================================

            if (
                item.precioUnidad !== null &&
                item.precioUnidad !== undefined &&
                item.precioUnidad !== ""
            ) {

                const precio =
                    Number(item.precioUnidad);

                productos[codigo].precioUnidad =
                    Number.isFinite(precio)
                        ? precio
                        : null;

            } else {

                productos[codigo].precioUnidad =
                    null;
            }


            // ==========================================
            // PRECIO DOCENA
            // ==========================================

            if (
                item.precioDocena !== null &&
                item.precioDocena !== undefined &&
                item.precioDocena !== ""
            ) {

                const precio =
                    Number(item.precioDocena);

                productos[codigo].precioDocena =
                    Number.isFinite(precio)
                        ? precio
                        : null;

            } else {

                productos[codigo].precioDocena =
                    null;
            }


            // ==========================================
            // PRECIO KG
            // ==========================================

            if (
                item.precioKg !== null &&
                item.precioKg !== undefined &&
                item.precioKg !== ""
            ) {

                const precio =
                    Number(item.precioKg);

                productos[codigo].precioKg =
                    Number.isFinite(precio)
                        ? precio
                        : null;

            } else {

                productos[codigo].precioKg =
                    null;
            }


            // ==========================================
            // PRECIO MEDIO KG
            // ==========================================

            if (
                item.precioMedioKg !== null &&
                item.precioMedioKg !== undefined &&
                item.precioMedioKg !== ""
            ) {

                const precio =
                    Number(item.precioMedioKg);

                productos[codigo].precioMedioKg =
                    Number.isFinite(precio)
                        ? precio
                        : null;

            } else {

                productos[codigo].precioMedioKg =
                    null;
            }


            // ==========================================
            // PRECIO PLANCHA
            // ==========================================

            if (
                item.precioPlancha !== null &&
                item.precioPlancha !== undefined &&
                item.precioPlancha !== ""
            ) {

                const precio =
                    Number(item.precioPlancha);

                productos[codigo].precioPlancha =
                    Number.isFinite(precio)
                        ? precio
                        : null;

            } else {

                productos[codigo].precioPlancha =
                    null;
            }


            // ==========================================
            // PRECIO 2 PLANCHAS
            // ==========================================

            if (
                item.precioDosPlanchas !== null &&
                item.precioDosPlanchas !== undefined &&
                item.precioDosPlanchas !== ""
            ) {

                const precio =
                    Number(item.precioDosPlanchas);

                productos[codigo].precioDosPlanchas =
                    Number.isFinite(precio)
                        ? precio
                        : null;

            } else {

                productos[codigo].precioDosPlanchas =
                    null;
            }


            // ==========================================
            // PRECIO MEDIA DOCENA
            // ==========================================

            if (
                item.precioMediaDocena !== null &&
                item.precioMediaDocena !== undefined &&
                item.precioMediaDocena !== ""
            ) {

                const precio =
                    Number(item.precioMediaDocena);

                productos[codigo].precioMediaDocena =
                    Number.isFinite(precio)
                        ? precio
                        : null;

            } else {

                productos[codigo].precioMediaDocena =
                    null;
            }


            // ==========================================
            // PRECIO MAYORISTA
            // ==========================================

            if (
                item.precioMayorista !== null &&
                item.precioMayorista !== undefined &&
                item.precioMayorista !== ""
            ) {

                const precio =
                    Number(item.precioMayorista);

                productos[codigo].precioMayorista =
                    Number.isFinite(precio)
                        ? precio
                        : null;

            } else {

                productos[codigo].precioMayorista =
                    null;
            }


            // ==========================================
            // UNIDAD MAYORISTA
            // ==========================================

            productos[codigo].unidadMayorista =
                item.unidadMayorista || "";


            // ==========================================
            // TIPO DE VENTA
            // ==========================================

            productos[codigo].tipoVenta =
                item.tipoVenta || "unidad";


            // ==========================================
            // PERMITE DOCENA
            // ==========================================

            productos[codigo].permiteDocena =
                item.permiteDocena === true ||
                String(item.permiteDocena)
                    .toLowerCase() === "sí";

        });


        // ==========================================
        // PRECIOS CARGADOS CORRECTAMENTE
        // ==========================================

        preciosCargados = true;

        actualizandoPrecios = false;


        if (mostrarMensaje) {

            const mensaje =
                document.getElementById("mensaje");

            if (mensaje) {

                mensaje.innerHTML =
                    "✅ Precios actualizados correctamente.";
            }
        }


        console.log(
            "✅ Precios actualizados desde Google Sheets."
        );


        return true;


    } catch (error) {

        console.error(
            "❌ Error actualizando precios:",
            error
        );


        preciosCargados = false;

        actualizandoPrecios = false;


        if (mostrarMensaje) {

            const mensaje =
                document.getElementById("mensaje");

            if (mensaje) {

                mensaje.innerHTML =
                    "❌ No se pudieron actualizar los precios.";
            }
        }


        return false;
    }
}


// ==========================================
// CLIENTES / RESTAURANTES
// ==========================================

function cargarClientesDesdeGoogle(datos) {

    const select =
        document.getElementById("cliente");


    if (!select) {
        return;
    }


    select.innerHTML = "";


    if (
        !datos ||
        !Array.isArray(datos.clientes) ||
        datos.clientes.length === 0
    ) {

        const opcionVacia =
            document.createElement("option");


        opcionVacia.value =
            "";


        opcionVacia.textContent =
            "No hay restaurantes cargados";


        select.appendChild(
            opcionVacia
        );


        return;
    }


    datos.clientes.forEach(cliente => {

        const opcion =
            document.createElement("option");


        opcion.value =
            cliente.restaurante;


        opcion.textContent =
            cliente.restaurante;


        select.appendChild(
            opcion
        );

    });


    console.log(
        "✅ Restaurantes cargados:",
        datos.clientes
    );
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
// CUENTAS CORRIENTES
// ==========================================

let cuentasCorrientes = [];
let cuentasDetalle = [];
let cobros = [];


// ==========================================
// CARGAR VENTAS DESDE GOOGLE SHEETS
// ==========================================

async function cargarVentasDesdeGoogle() {

    try {

        const contenedor =
            document.getElementById(
                "listaCuentasCorrientes"
            );


        if (contenedor) {

            contenedor.innerHTML = `
                <p style="text-align:center;">
                    ⏳ Cargando cuentas corrientes...
                </p>
            `;
        }


        const respuesta =
            await fetch(
                URL_PRECIOS + "?t=" + Date.now()
            );


        if (!respuesta.ok) {

            throw new Error(
                "No se pudieron cargar las ventas."
            );
        }


        const datos =
            await respuesta.json();


        if (
            Array.isArray(
                datos.ventas
            )
        ) {

            ventasDelDia =
                datos.ventas;


            /*
             * Cuentas corrientes agrupadas
             * por cliente.
             */

            cuentasCorrientes =
                datos.cuentasCorrientes || [];


            /*
             * Detalle de cada venta
             * de cuenta corriente.
             */

            cuentasDetalle =
                datos.cuentasDetalle || [];


            /*
             * Historial de cobros.
             */

            cobros =
                datos.cobros || [];


            localStorage.setItem(
                "ventasDelDia",
                JSON.stringify(
                    ventasDelDia
                )
            );


            console.log(
                "✅ Ventas cargadas desde Google Sheets:",
                ventasDelDia
            );


            console.log(
                "✅ Cuentas corrientes:",
                cuentasCorrientes
            );


            console.log(
                "✅ Cobros cargados:",
                cobros
            );


            mostrarVentasDeHoy();

            mostrarProductosMasVendidos();

            mostrarCuentasCorrientes();
        }


    } catch (error) {

        console.error(
            "❌ Error cargando ventas desde Google Sheets:",
            error
        );

    }
}

// ==========================================
// MOSTRAR CUENTAS CORRIENTES
// ==========================================

function mostrarCuentasCorrientes() {

    const contenedor =
        document.getElementById(
            "listaCuentasCorrientes"
        );

    if (!contenedor) return;


    const cuentasPendientes =
        cuentasCorrientes.filter(
            cuenta =>
                Number(cuenta.saldo || 0) > 0
        );


    if (cuentasPendientes.length === 0) {

        contenedor.innerHTML = `
            <p style="text-align:center;">
                ✅ No hay cuentas corrientes pendientes.
            </p>
        `;

        return;
    }


    let html = "";


    cuentasPendientes.forEach(cuenta => {

        const totalVentas =
            Number(
                cuenta.totalVentas ||
                0
            );


        const totalPagado =
            Number(
                cuenta.totalPagado ||
                0
            );


        const saldo =
            Number(
                cuenta.saldo ||
                0
            );


        const cliente =
            cuenta.cliente ||
            "Sin cliente";


        /*
         * Usamos encodeURIComponent para poder
         * pasar correctamente el nombre del cliente
         * aunque tenga espacios, tildes, etc.
         */
        const clienteCodificado =
            encodeURIComponent(
                cliente
            );


        html += `

            <div style="
                background:white;
                border:1px solid #ddd;
                border-radius:12px;
                padding:15px;
                margin-bottom:12px;
            ">

                <strong style="
                    font-size:20px;
                    display:block;
                    margin-bottom:10px;
                ">
                    ${cliente}
                </strong>


                <p>
                    Total comprado:
                    <strong>
                        $${totalVentas.toLocaleString("es-AR")}
                    </strong>
                </p>


                <p>
                    Total pagado:
                    <strong>
                        $${totalPagado.toLocaleString("es-AR")}
                    </strong>
                </p>


                <p style="
                    font-size:18px;
                    font-weight:bold;
                    color:red;
                    margin-top:8px;
                ">
                    Saldo pendiente:
                    $${saldo.toLocaleString("es-AR")}
                </p>


                <div style="
                    display:flex;
                    gap:8px;
                    flex-wrap:wrap;
                    margin-top:12px;
                ">

                    <button
                        onclick="
                            verCuentaCorriente(
                                decodeURIComponent('${clienteCodificado}')
                            )
                        "
                    >
                        Ver cuenta
                    </button>


                    <button
                        onclick="
                            registrarPagoCuenta(
                                decodeURIComponent('${clienteCodificado}')
                            )
                        "
                    >
                        Registrar pago
                    </button>

                </div>


                <div
                    id="cuentaCliente${clienteCodificado}"
                    style="
                        display:none;
                        margin-top:12px;
                        padding:12px;
                        background:#f5f5f5;
                        border-radius:10px;
                    "
                ></div>

            </div>

        `;
    });


    contenedor.innerHTML =
        html;
}

// ==========================================
// VER DETALLE DE UNA VENTA
// ==========================================

function verDetalleCuentaCorriente(numeroVenta) {

    const contenedor =
        document.getElementById(
            "detalleCuenta" + numeroVenta
        );


    if (!contenedor) return;


    const boton =
        document.querySelector(
            `button[data-detalle-venta="${numeroVenta}"]`
        );


    if (
        contenedor.style.display === "block"
    ) {

        contenedor.style.display =
            "none";


        if (boton) {

            boton.innerHTML =
                "Ver detalle de la venta";
        }


        return;
    }


    const venta =
        ventasDelDia.find(
            item =>
                String(item.numeroVenta) ===
                String(numeroVenta)
        );


    if (!venta) {

        contenedor.innerHTML = `

            <p>
                ⚠️ No se encontró el detalle
                de esta venta.
            </p>

        `;


        contenedor.style.display =
            "block";


        if (boton) {

            boton.innerHTML =
                "Ocultar detalle de la venta";
        }


        return;
    }


    let html = `

        <strong>
            Productos de la venta
        </strong>

        <br><br>

    `;


    if (
        Array.isArray(venta.productos) &&
        venta.productos.length > 0
    ) {

        venta.productos.forEach(producto => {

            const cantidad =
                Number(producto.cantidad) || 0;


            const subtotal =
                Number(producto.subtotal) || 0;


            /*
             * Detectamos si la venta corresponde
             * a un restaurante.
             *
             * Las ventas particulares tienen
             * "Consumidor final".
             */

            const esRestaurante =
                venta.cliente &&
                venta.cliente !== "Consumidor final";


            let textoPrecio = "";


            if (esRestaurante) {

                /*
                 * En las ventas a restaurante,
                 * actualmente el precio guardado
                 * puede ser el precio equivalente
                 * por unidad.
                 *
                 * Por eso calculamos nuevamente
                 * el precio según el total y la cantidad.
                 */

                if (cantidad > 0) {

                    const precioPorUnidad =
                        subtotal / cantidad;


                    /*
                     * Si la cantidad está guardada
                     * en unidades, mostramos el precio
                     * por docena.
                     *
                     * Ejemplo:
                     *
                     * 240 unidades
                     * $152.000 total
                     *
                     * $152.000 / 240 = $633,33
                     *
                     * $633,33 × 12 = $7.600
                     */

                    const precioPorDocena =
                        precioPorUnidad * 12;


                    textoPrecio = `
                        Precio:
                        $${Math.round(precioPorDocena).toLocaleString("es-AR")}
                        por docena
                    `;

                }

            } else {

                /*
                 * Venta particular:
                 * mostramos el precio que ya
                 * tiene guardado la venta.
                 */

                const precio =
                    Number(producto.precio) || 0;


                textoPrecio = `
                    Precio:
                    $${precio.toLocaleString("es-AR")}
                `;
            }


            html += `

                <p>

                    <strong>
                        ${producto.nombre}
                    </strong>

                    ${
                        producto.sabor
                            ? " - " + producto.sabor
                            : ""
                    }

                    <br>

                    Cantidad:
                    ${cantidad}
                    ${producto.unidad || ""}

                    <br>

                    ${textoPrecio}

                    <br>

                    Subtotal:
                    <strong>
                        $${subtotal.toLocaleString("es-AR")}
                    </strong>

                </p>


                <hr>

            `;
        });

    } else {

        html += `

            <p>
                No hay productos registrados
                para esta venta.
            </p>

        `;
    }


    const total =
        Number(venta.total) || 0;


    html += `

        <p>

            <strong>

                Total de la venta:
                $${total.toLocaleString("es-AR")}

            </strong>

        </p>

    `;


    contenedor.innerHTML =
        html;


    contenedor.style.display =
        "block";


    if (boton) {

        boton.innerHTML =
            "Ocultar detalle de la venta";
    }
}

function verCuentaCorriente(cliente) {

    const clienteTexto =
        String(cliente || "").trim();

    if (!clienteTexto) return;

    const clienteCodificado =
        encodeURIComponent(clienteTexto);

    const idContenedor =
        "cuentaCliente" + clienteCodificado;

    const contenedor =
        document.getElementById(idContenedor);

    if (!contenedor) return;

    /*
     * Buscamos el botón "Ver cuenta"
     * correspondiente a este cliente.
     */

    const botones =
        document.querySelectorAll("button");

    let botonCuenta = null;

    botones.forEach(boton => {

        const texto =
            boton.innerText.trim();

        if (
            (
                texto === "Ver cuenta" ||
                texto === "Ocultar cuenta"
            ) &&
            boton.getAttribute("onclick") &&
            boton.getAttribute("onclick")
                .includes(clienteCodificado)
        ) {
            botonCuenta = boton;
        }

    });

    /*
     * Si ya está abierto,
     * lo ocultamos.
     */

    if (
        contenedor.style.display === "block"
    ) {

        contenedor.style.display = "none";

        if (botonCuenta) {
            botonCuenta.innerText = "Ver cuenta";
        }

        return;
    }

    /*
     * Buscamos la cuenta del cliente.
     */

    const cuenta =
        cuentasCorrientes.find(
            item =>
                String(item.cliente || "").trim() ===
                clienteTexto
        );

    if (!cuenta) {

        contenedor.innerHTML = `
            <p>
                ⚠️ No se encontró la cuenta
                corriente de este cliente.
            </p>
        `;

        contenedor.style.display = "block";

        if (botonCuenta) {
            botonCuenta.innerText = "Ocultar cuenta";
        }

        return;
    }

    const ventas =
        Array.isArray(cuenta.ventas)
            ? cuenta.ventas.filter(
                venta =>
                    Number(venta.saldo || 0) > 0
            )
            : [];

    /*
     * Ordenamos las ventas desde
     * la más antigua hasta la más nueva.
     */

    ventas.sort(
        (a, b) => {

            const fechaA =
                convertirFechaCuenta(a.fecha);

            const fechaB =
                convertirFechaCuenta(b.fecha);

            return (
                (fechaA ? fechaA.getTime() : 0) -
                (fechaB ? fechaB.getTime() : 0)
            );
        }
    );

    let html = `
        <strong>
            Movimientos de la cuenta
        </strong>

        <br><br>
    `;

    /*
     * Mostramos las ventas.
     */

    if (ventas.length === 0) {

        html += `
            <p>
                No hay ventas registradas.
            </p>
        `;

    } else {

        ventas.forEach(venta => {

            let fecha =
                venta.fecha || "Sin fecha";

            const fechaObjeto =
                convertirFechaCuenta(venta.fecha);

            if (fechaObjeto) {

                fecha =
                    fechaObjeto.toLocaleDateString(
                        "es-AR"
                    );
            }

            const totalVenta =
                Number(venta.total || 0);

            const pagadoVenta =
                Number(venta.pagado || 0);

            const saldoVenta =
                Number(venta.saldo || 0);

            html += `
                <div style="
                    background:white;
                    border:1px solid #ddd;
                    border-radius:8px;
                    padding:10px;
                    margin-bottom:10px;
                ">

                    <strong>
                        ${fecha}
                    </strong>

                    <p style="
                        margin:6px 0;
                    ">
                        Total de la venta:
                        <strong>
                            $${totalVenta.toLocaleString("es-AR")}
                        </strong>
                    </p>

                    <p style="
                        margin:6px 0;
                    ">
                        Pagado:
                        <strong>
                            $${pagadoVenta.toLocaleString("es-AR")}
                        </strong>
                    </p>

                    <p style="
                        margin:6px 0;
                    ">
                        Saldo:
                        <strong>
                            $${saldoVenta.toLocaleString("es-AR")}
                        </strong>
                    </p>

                </div>
            `;
        });
    }

    /*
     * Pagos registrados.
     *
     * Mostramos solamente los
     * últimos 10 pagos.
     */

    const pagos =
        Array.isArray(cobros)
            ? cobros
                .filter(
                    cobro =>
                        String(cobro.cliente || "").trim() ===
                        clienteTexto
                )
                .sort(
                    (a, b) => {

                        const fechaA =
                            convertirFechaCuenta(a.fecha);

                        const fechaB =
                            convertirFechaCuenta(b.fecha);

                        return (
                            (fechaB ? fechaB.getTime() : 0) -
                            (fechaA ? fechaA.getTime() : 0)
                        );
                    }
                )
                .slice(0, 10)
            : [];

    if (pagos.length > 0) {

        html += `
            <hr style="
                margin:15px 0;
            ">

            <strong>
                Pagos registrados
            </strong>

            <br><br>
        `;

        pagos.forEach(pago => {

            let fecha =
                pago.fecha || "Sin fecha";

            const fechaObjeto =
                convertirFechaCuenta(pago.fecha);

            if (fechaObjeto) {

                fecha =
                    fechaObjeto.toLocaleDateString(
                        "es-AR"
                    );
            }

            const monto =
                Number(pago.monto || 0);

            html += `
                <p style="
                    margin-bottom:8px;
                ">

                    ${fecha}
                    —
                    Pago:
                    <strong>
                        -$${monto.toLocaleString("es-AR")}
                    </strong>

                </p>
            `;
        });
    }

    /*
     * Saldo final.
     */

    html += `
        <hr style="
            margin:15px 0;
        ">

        <p style="
            font-size:18px;
            font-weight:bold;
            color:red;
        ">
            SALDO ACTUAL:
            $${Number(
                cuenta.saldo || 0
            ).toLocaleString("es-AR")}
        </p>
    `;

    contenedor.innerHTML = html;

    contenedor.style.display = "block";

    if (botonCuenta) {
        botonCuenta.innerText = "Ocultar cuenta";
    }
}

function convertirFechaCuenta(fecha) {

    if (!fecha) return null;


    if (fecha instanceof Date) {

        return fecha;
    }


    const texto =
        String(fecha).trim();


    const partes =
        texto.match(
            /^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2}):(\d{2}))?$/
        );


    if (partes) {

        return new Date(
            Number(partes[3]),
            Number(partes[2]) - 1,
            Number(partes[1]),
            Number(partes[4] || 0),
            Number(partes[5] || 0),
            Number(partes[6] || 0)
        );
    }


    const fechaConvertida =
        new Date(texto);


    if (
        !isNaN(
            fechaConvertida.getTime()
        )
    ) {

        return fechaConvertida;
    }


    return null;
}


// ==========================================
// REGISTRAR PAGO DE CUENTA CORRIENTE
// ==========================================

async function registrarPagoCuenta(cliente) {

    const clienteTexto =
        String(cliente || "").trim();


    if (!clienteTexto) {

        alert(
            "❌ No se encontró el cliente."
        );

        return;
    }


    /*
     * Buscamos la cuenta agrupada
     * del cliente.
     */

    const cuenta =
        cuentasCorrientes.find(
            item =>
                String(
                    item.cliente || ""
                ).trim() ===
                clienteTexto
        );


    if (!cuenta) {

        alert(
            "❌ No se encontró la cuenta corriente de este cliente."
        );

        return;
    }


    const saldoActual =
        Number(
            cuenta.saldo || 0
        );


    if (
        saldoActual <= 0
    ) {

        alert(
            "Esta cuenta ya está completamente pagada."
        );

        return;
    }


    const montoTexto =
        prompt(

            "¿Cuánto paga ahora?\n\n" +

            "Cliente: " +
            clienteTexto +
            "\n\n" +

            "Saldo pendiente: $" +
            saldoActual.toLocaleString("es-AR")

        );


    if (
        montoTexto === null
    ) {

        return;
    }


    /*
     * Permitimos escribir:
     *
     * 50000
     * 50000,50
     * 50.000
     *
     * y tratamos de convertirlo
     * correctamente a número.
     */

    let textoMonto =
        montoTexto.trim();


    textoMonto =
        textoMonto.replace(
            /\$/g,
            ""
        );


    textoMonto =
        textoMonto.replace(
            /\s/g,
            ""
        );


    /*
     * Si tiene punto y coma:
     *
     * 50.000,50
     *
     * quitamos los puntos y
     * convertimos la coma en punto.
     */

    if (
        textoMonto.includes(",") &&
        textoMonto.includes(".")
    ) {

        textoMonto =
            textoMonto.replace(
                /\./g,
                ""
            );

        textoMonto =
            textoMonto.replace(
                ",",
                "."
            );

    } else if (
        textoMonto.includes(",")
    ) {

        textoMonto =
            textoMonto.replace(
                ",",
                "."
            );
    }


    const monto =
        parseFloat(
            textoMonto
        );


    if (
        isNaN(monto) ||
        monto <= 0
    ) {

        alert(
            "❌ Ingresá un monto válido."
        );

        return;
    }


    if (
        monto > saldoActual
    ) {

        alert(

            "❌ El pago no puede ser mayor al saldo pendiente.\n\n" +

            "Saldo pendiente: $" +
            saldoActual.toLocaleString("es-AR")

        );

        return;
    }


    const mensaje =
        document.getElementById(
            "mensaje"
        );


    if (mensaje) {

        mensaje.innerHTML =
            "⏳ Registrando cobro...";
    }


    try {

        const respuesta =
            await fetch(
                URL_PRECIOS,
                {

                    method:
                        "POST",

                    headers: {

                        "Content-Type":
                            "text/plain;charset=utf-8"

                    },

                    body:
                        JSON.stringify({

                            accion:
                                "registrarCobro",

                            cliente:
                                clienteTexto,

                            monto:
                                monto

                        })

                }
            );


        if (
            !respuesta.ok
        ) {

            throw new Error(
                "No se pudo conectar con Google Sheets."
            );
        }


        const datos =
            await respuesta.json();


        if (
            !datos.ok
        ) {

            throw new Error(
                datos.error ||
                "Google Sheets no confirmó el cobro."
            );
        }


        alert(

            "✅ Cobro registrado correctamente.\n\n" +

            "Cliente: " +
            clienteTexto +
            "\n" +

            "Cobró ahora: $" +
            monto.toLocaleString("es-AR") +
            "\n" +

            "Nuevo saldo: $" +
            Number(
                datos.saldoNuevo || 0
            ).toLocaleString("es-AR")

        );


        if (mensaje) {

            mensaje.innerHTML =
                "✅ Cobro registrado correctamente.";
        }


        /*
         * Volvemos a cargar los datos desde
         * Google Sheets para actualizar
         * la cuenta corriente.
         */

        await cargarVentasDesdeGoogle();


        mostrarCuentasCorrientes();


    } catch (error) {

        console.error(
            "❌ Error registrando cobro:",
            error
        );


        alert(

            "❌ No se pudo registrar el cobro.\n\n" +

            "Error: " +
            error.message

        );


        if (mensaje) {

            mensaje.innerHTML =
                "❌ No se pudo registrar el cobro.";
        }

    }

}


// ==========================================
// BUSCAR PRODUCTOS
// ==========================================

function buscarProducto() {

    if (!preciosCargados) {

        document.getElementById("resultado").innerHTML =
            "<p style='color:red;'>Los precios todavía no fueron cargados. Esperá unos segundos y probá nuevamente.</p>";

        return;
    }


    const codigo =
        document.getElementById("codigo").value.trim();


    const producto =
        productos[codigo];


    if (!producto) {

        document.getElementById("resultado").innerHTML =
            "<p style='color:red;'>Producto no encontrado.</p>";

        return;
    }


        // ==========================================
    // PREPARAR TEXTO DEL PRECIO
    // ==========================================

    let textoPrecio = "";


    // ==========================================
    // VER SI ES VENTA A RESTAURANTE
    // ==========================================

    const ventaRestaurante =
        document
            .getElementById("ventaRestaurante")
            ?.checked || false;


    // ==========================================
    // PRECIO MAYORISTA
    // ==========================================

    if (ventaRestaurante) {

        const precioMayorista =
            Number(producto.precioMayorista);


        const unidadMayorista =
            String(
                producto.unidadMayorista || ""
            )
                .trim()
                .toLowerCase();


        if (
            Number.isFinite(precioMayorista) &&
            precioMayorista > 0 &&
            unidadMayorista
        ) {

            textoPrecio =
                `Precio mayorista: $${precioMayorista.toLocaleString("es-AR")} por ${unidadMayorista}`;

        } else {

            textoPrecio =
                `<span style="color:red;">
                    ⚠️ Este producto no tiene precio mayorista cargado.
                </span>`;
        }

    }


    // ==========================================
    // PRECIOS MINORISTAS
    // ==========================================

    else {

        if (
            producto.tipoVenta === "plancha"
        ) {

            const precioPlancha =
                Number(producto.precioPlancha);


            const precioDosPlanchas =
                Number(producto.precioDosPlanchas);


            if (
                Number.isFinite(precioPlancha) &&
                precioPlancha > 0
            ) {

                textoPrecio =
                    `Precio: $${precioPlancha.toLocaleString("es-AR")} por plancha`;

            }


            if (
                Number.isFinite(precioDosPlanchas) &&
                precioDosPlanchas > 0
            ) {

                textoPrecio +=
                    `<br>2 planchas: $${precioDosPlanchas.toLocaleString("es-AR")}`;
            }

        }


        else if (
            producto.tipoVenta === "kg"
        ) {

            const precioKg =
                Number(producto.precioKg);


            const precioMedioKg =
                Number(producto.precioMedioKg);


            if (
                Number.isFinite(precioKg) &&
                precioKg > 0
            ) {

                textoPrecio =
                    `Precio: $${precioKg.toLocaleString("es-AR")} por kg`;

            }


            if (
                Number.isFinite(precioMedioKg) &&
                precioMedioKg > 0
            ) {

                textoPrecio +=
                    `<br>½ kg: $${precioMedioKg.toLocaleString("es-AR")}`;
            }

        }


        else {

            const precioUnidad =
                Number(producto.precioUnidad);


            const precioDocena =
                Number(producto.precioDocena);


            const precioMediaDocena =
                Number(producto.precioMediaDocena);


            if (
                Number.isFinite(precioUnidad) &&
                precioUnidad > 0
            ) {

                textoPrecio =
                    `Precio: $${precioUnidad.toLocaleString("es-AR")} por unidad`;
            }


            if (
                Number.isFinite(precioDocena) &&
                precioDocena > 0
            ) {

                textoPrecio +=
                    `<br>Docena: $${precioDocena.toLocaleString("es-AR")}`;
            }


            if (
                Number.isFinite(precioMediaDocena) &&
                precioMediaDocena > 0
            ) {

                textoPrecio +=
                    `<br>½ docena: $${precioMediaDocena.toLocaleString("es-AR")}`;
            }

        }

    }

    // ==========================================
    // MOSTRAR PRODUCTO Y PRECIO
    // ==========================================

    document.getElementById("resultado").innerHTML = `

        <div class="producto-encontrado">

            <strong>
                ${producto.nombre}
            </strong>

            ${
                producto.sabor
                    ? `<span>${producto.sabor}</span>`
                    : ""
            }

            ${
                textoPrecio
                    ? `
                        <div style="
                            margin-top:8px;
                            font-weight:bold;
                        ">
                            ${textoPrecio}
                        </div>
                      `
                    : ""
            }

        </div>

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


    formaVenta.innerHTML =
        "";


    // ==========================================
    // PRODUCTOS POR KG
    // ==========================================

    if (
        producto.tipoVenta === "kg"
    ) {

        formaVentaContainer.style.display =
            "none";


        unidadCantidad.innerText =
            "kg";


        cantidad.value =
            "1";


        return;
    }


    // ==========================================
    // PRODUCTOS POR PLANCHA
    // ==========================================

    if (
        producto.tipoVenta === "plancha"
    ) {

        formaVentaContainer.style.display =
            "none";


        unidadCantidad.innerText =
            "plancha";


        cantidad.value =
            "1";


        return;
    }


    // ==========================================
    // PRODUCTOS POR UNIDAD / DOCENA
    // ==========================================

    if (
        producto.precioUnidad !== null &&
        producto.precioUnidad !== undefined &&
        producto.precioUnidad > 0
    ) {

        const opcionUnidad =
            document.createElement("option");


        opcionUnidad.value =
            "unidad";


        opcionUnidad.textContent =
            "Unidad";


        formaVenta.appendChild(
            opcionUnidad
        );
    }


    if (
        producto.precioDocena !== null &&
        producto.precioDocena !== undefined &&
        producto.precioDocena > 0
    ) {

        const opcionDocena =
            document.createElement("option");


        opcionDocena.value =
            "docena";


        opcionDocena.textContent =
            "Docena";


        formaVenta.appendChild(
            opcionDocena
        );
    }


    if (
        formaVenta.options.length === 0
    ) {

        formaVentaContainer.style.display =
            "none";


        unidadCantidad.innerText =
            "unidad";


        cantidad.value =
            "1";


        agregarVenta();


        return;
    }


    formaVentaContainer.style.display =
        "block";


    if (
        producto.precioUnidad !== null &&
        producto.precioUnidad !== undefined &&
        producto.precioUnidad > 0
    ) {

        formaVenta.value =
            "unidad";


        unidadCantidad.innerText =
            "unidad";

    } else {

        formaVenta.selectedIndex =
            0;


        const seleccion =
            formaVenta.value;


        if (
            seleccion === "docena"
        ) {

            unidadCantidad.innerText =
                "docena";

        } else {

            unidadCantidad.innerText =
                "unidad";
        }

    }


    cantidad.value =
        "1";
}

// ==========================================
// CERRAR PRODUCTO ENCONTRADO
// ==========================================

function cerrarResultadoProducto() {

    document.getElementById(
        "resultado"
    ).innerHTML = "";


    document.getElementById(
        "cantidadProducto"
    ).style.display =
        "none";


    document.getElementById(
        "codigo"
    ).focus();
}


// ==========================================
// BUSCAR PRODUCTO CON ENTER
// ==========================================

document
    .getElementById("codigo")
    .addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                buscarProducto();
            }
        }
    );


// ==========================================
// CAMBIAR UNIDAD / DOCENA
// ==========================================

document
    .getElementById("formaVenta")
    .addEventListener(
        "change",
        function() {

            const unidadCantidad =
                document.getElementById(
                    "unidadCantidad"
                );

if (
    this.value === "docena"
) {

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

    if (!preciosCargados) {

        alert(
            "⚠️ No se pueden agregar productos porque los precios no están cargados desde Google Sheets."
        );

        return;
    }


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


    if (
        !Number.isFinite(cantidad) ||
        cantidad <= 0
    ) {

        alert(
            "Ingresá una cantidad válida."
        );

        return;
    }


    const formaVenta =
        document
            .getElementById("formaVenta")
            .value;


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

    let subtotal;


    // ==========================================
    // PRODUCTOS POR KG
    // ==========================================

    if (
        producto.tipoVenta === "kg"
    ) {

        const precioKg =
            Number(producto.precioKg);


        const precioMedioKg =
            Number(producto.precioMedioKg);


        if (
            !Number.isFinite(precioKg) ||
            precioKg <= 0
        ) {

            alert(
                "⚠️ Este producto no tiene cargado el precio por kilo."
            );

            return;
        }


        if (
            !Number.isFinite(precioMedioKg) ||
            precioMedioKg <= 0
        ) {

            alert(
                "⚠️ Este producto no tiene cargado el precio por medio kilo."
            );

            return;
        }


        if (
            !Number.isInteger(cantidad * 2)
        ) {

            alert(
                "⚠️ Para fideos y ñoquis, la cantidad debe ser en múltiplos de 0,5 kg."
            );

            return;
        }


        const kilosCompletos =
            Math.floor(cantidad);


        const quedaMedioKilo =
            cantidad - kilosCompletos;


        subtotal =
            kilosCompletos * precioKg;


        if (
            Math.abs(
                quedaMedioKilo - 0.5
            ) < 0.0001
        ) {

            subtotal +=
                precioMedioKg;
        }


        precio =
            subtotal / cantidad;


        unidad =
            "kg";

    }


    // ==========================================
    // PRODUCTOS POR PLANCHA
    // ==========================================

    else if (
        producto.tipoVenta === "plancha"
    ) {

        if (
            !Number.isInteger(cantidad)
        ) {

            alert(
                "Para los ravioles, ingresá una cantidad entera de planchas."
            );

            return;
        }


        const precioPlancha =
            Number(producto.precioPlancha);


        const precioDosPlanchas =
            Number(producto.precioDosPlanchas);


        if (
            !Number.isFinite(precioPlancha) ||
            precioPlancha <= 0
        ) {

            alert(
                "⚠️ Este producto no tiene cargado el precio de una plancha."
            );

            return;
        }


        if (
            cantidad >= 2 &&
            (
                !Number.isFinite(precioDosPlanchas) ||
                precioDosPlanchas <= 0
            )
        ) {

            alert(
                "⚠️ Este producto no tiene cargado el precio promocional de 2 planchas."
            );

            return;
        }


        const pares =
            Math.floor(cantidad / 2);


        const impar =
            cantidad % 2;


        subtotal =
            (
                pares *
                precioDosPlanchas
            ) +
            (
                impar *
                precioPlancha
            );


        precio =
            subtotal / cantidad;


        unidad =
            "plancha";

    }


    // ==========================================
    // PRODUCTOS POR UNIDAD / DOCENA
    // ==========================================

            else {

            const precioUnidad =
                Number(producto.precioUnidad) || 0;


            const precioMediaDocena =
                Number(producto.precioMediaDocena) || 0;


            const precioDocena =
                Number(producto.precioDocena) || 0;


            // ==========================================
            // SI SOLO TIENE PRECIO POR UNIDAD
            // ==========================================

            if (
                precioUnidad > 0 &&
                precioDocena <= 0 &&
                precioMediaDocena <= 0
            ) {

                subtotal =
                    cantidad *
                    precioUnidad;


                precio =
                    precioUnidad;


                unidad =
                    "unidad";
            }


            // ==========================================
            // SI TIENE PRECIO POR DOCENA / MEDIA DOCENA
            // ==========================================

            else {

                let docenas =
                    Math.floor(cantidad / 12);


                let resto =
                    cantidad % 12;


                let subtotalCalculado =
                    0;


                // DOCENAS

                if (
                    docenas > 0
                ) {

                    if (
                        precioDocena > 0
                    ) {

                        subtotalCalculado +=
                            docenas *
                            precioDocena;

                    } else {

                        subtotalCalculado +=
                            docenas *
                            12 *
                            precioUnidad;
                    }


                    resto -=
                        docenas *
                        12;
                }


                // MEDIA DOCENA

                if (
                    resto >= 6
                ) {

                    if (
                        precioMediaDocena > 0
                    ) {

                        subtotalCalculado +=
                            precioMediaDocena;

                    } else {

                        subtotalCalculado +=
                            6 *
                            precioUnidad;
                    }


                    resto -=
                        6;
                }


                // UNIDADES RESTANTES

                subtotalCalculado +=
                    resto *
                    precioUnidad;


                subtotal =
                    subtotalCalculado;


                precio =
                    subtotal /
                    cantidad;


                unidad =
                    "unidad";
            }
        }

    // ==========================================
    // PRECIO MAYORISTA PARA RESTAURANTES
    // ==========================================

    const ventaRestaurante =
        document
            .getElementById(
                "ventaRestaurante"
            )
            ?.checked || false;


    if (
        ventaRestaurante &&
        producto.precioMayorista !== null &&
        producto.precioMayorista !== undefined &&
        Number.isFinite(
            Number(
                producto.precioMayorista
            )
        ) &&
        Number(
            producto.precioMayorista
        ) > 0 &&
        producto.unidadMayorista
    ) {

        const precioMayorista =
            Number(
                producto.precioMayorista
            );


        const unidadMayorista =
            String(
                producto.unidadMayorista
            )
                .trim()
                .toLowerCase();


        // ==========================================
        // MAYORISTA POR DOCENA
        // ==========================================

        if (
            unidadMayorista === "docena"
        ) {

            // IMPORTANTE:
            // La cantidad se transforma a unidades.
            //
            // 12 unidades = 1 docena
            // 6 unidades = 0,5 docena
            // 210 unidades = 17,5 docenas

            let cantidadEnUnidades;


            if (
                unidad === "docena"
            ) {

                cantidadEnUnidades =
                    cantidad * 12;

            } else if (
                unidad === "media docena"
            ) {

                cantidadEnUnidades =
                    cantidad * 6;

            } else {

                cantidadEnUnidades =
                    cantidad;
            }


            const cantidadDocenas =
                cantidadEnUnidades / 12;


            subtotal =
                cantidadDocenas *
                precioMayorista;


            precio =
                subtotal /
                cantidadEnUnidades;


            // Guardamos siempre la cantidad
            // real en unidades.

            cantidadMayoristaActual =
                cantidadEnUnidades;

        }


        // ==========================================
        // MAYORISTA POR UNIDAD
        // ==========================================

        else if (
            unidadMayorista === "unidad"
        ) {

            precio =
                precioMayorista;


            subtotal =
                precioMayorista *
                cantidad;

        }


        // ==========================================
        // MAYORISTA POR KG
        // ==========================================

        else if (
            unidadMayorista === "kg"
        ) {

            precio =
                precioMayorista;


            subtotal =
                precioMayorista *
                cantidad;
        }
    }


    // ==========================================
    // VERIFICAR PRECIO
    // ==========================================

    if (
        precio === null ||
        precio === undefined ||
        !Number.isFinite(
            Number(precio)
        ) ||
        Number(precio) <= 0
    ) {

        alert(
            "⚠️ Este producto no tiene un precio cargado en Google Sheets.\n\nNo se puede agregar a la venta."
        );

        return;
    }


    precio =
        Number(precio);


    // ==========================================
    // BUSCAR PRODUCTO EXISTENTE
    // ==========================================

    const productoExistente =
        ventaActual.find(
            item =>
                item.nombre === producto.nombre &&
                item.sabor === producto.sabor
        );


    // ==========================================
    // SI YA EXISTE
    // ==========================================

    if (
        productoExistente
    ) {

        // ==========================================
        // RAVIOLES POR PLANCHA
        // ==========================================

        if (
            producto.tipoVenta === "plancha"
        ) {

            const nuevaCantidad =
                productoExistente.cantidad +
                cantidad;


            const precioPlancha =
                Number(
                    producto.precioPlancha
                );


            const precioDosPlanchas =
                Number(
                    producto.precioDosPlanchas
                );


            const pares =
                Math.floor(
                    nuevaCantidad / 2
                );


            const impar =
                nuevaCantidad % 2;


            const nuevoSubtotal =
                (
                    pares *
                    precioDosPlanchas
                ) +
                (
                    impar *
                    precioPlancha
                );


            productoExistente.cantidad =
                nuevaCantidad;


            productoExistente.subtotal =
                nuevoSubtotal;


            productoExistente.precio =
                nuevoSubtotal /
                nuevaCantidad;


            productoExistente.unidad =
                "plancha";
        }


        // ==========================================
        // PRODUCTOS POR UNIDAD
        // ==========================================

        else if (
            producto.tipoVenta !== "kg"
        ) {

            let cantidadExistenteEnUnidades =
                0;


            if (
                productoExistente.unidad ===
                "docena"
            ) {

                cantidadExistenteEnUnidades =
                    Number(
                        productoExistente.cantidad
                    ) * 12;

            } else if (
                productoExistente.unidad ===
                "media docena"
            ) {

                cantidadExistenteEnUnidades =
                    Number(
                        productoExistente.cantidad
                    ) * 6;

            } else {

                cantidadExistenteEnUnidades =
                    Number(
                        productoExistente.cantidad
                    );
            }


            let cantidadNuevaEnUnidades =
                0;


            if (
                unidad === "docena"
            ) {

                cantidadNuevaEnUnidades =
                    Number(cantidad) * 12;

            } else if (
                unidad === "media docena"
            ) {

                cantidadNuevaEnUnidades =
                    Number(cantidad) * 6;

            } else {

                cantidadNuevaEnUnidades =
                    Number(cantidad);
            }


            const totalUnidades =
                cantidadExistenteEnUnidades +
                cantidadNuevaEnUnidades;


            // ==========================================
            // VER SI ES RESTAURANTE
            // ==========================================

            const esRestaurante =
                document.getElementById(
                    "ventaRestaurante"
                )?.checked || false;


            const precioMayorista =
                Number(
                    producto.precioMayorista
                );


            const unidadMayorista =
                String(
                    producto.unidadMayorista || ""
                )
                    .trim()
                    .toLowerCase();


            // ==========================================
            // MAYORISTA POR DOCENA
            // ==========================================

            if (
                esRestaurante &&
                Number.isFinite(
                    precioMayorista
                ) &&
                precioMayorista > 0 &&
                unidadMayorista === "docena"
            ) {

                const cantidadDocenas =
                    totalUnidades / 12;


                const subtotalMayorista =
                    cantidadDocenas *
                    precioMayorista;


                productoExistente.cantidad =
                    totalUnidades;


                productoExistente.unidad =
                    "unidad";


                productoExistente.subtotal =
                    subtotalMayorista;


                productoExistente.precio =
                    subtotalMayorista /
                    totalUnidades;

            }


            // ==========================================
            // MAYORISTA POR UNIDAD
            // ==========================================

            else if (
                esRestaurante &&
                Number.isFinite(
                    precioMayorista
                ) &&
                precioMayorista > 0 &&
                unidadMayorista === "unidad"
            ) {

                const subtotalMayorista =
                    totalUnidades *
                    precioMayorista;


                productoExistente.cantidad =
                    totalUnidades;


                productoExistente.unidad =
                    "unidad";


                productoExistente.subtotal =
                    subtotalMayorista;


                productoExistente.precio =
                    precioMayorista;

            }


            // ==========================================
            // PRECIO MINORISTA NORMAL
            // ==========================================
else {

    const precioUnidad =
        Number(
            producto.precioUnidad
        ) || 0;


    const precioMediaDocena =
        Number(
            producto.precioMediaDocena
        ) || 0;


    const precioDocena =
        Number(
            producto.precioDocena
        ) || 0;


    // ==========================================
    // SI SOLO EXISTE PRECIO POR UNIDAD
    // ==========================================

    if (
        precioUnidad > 0 &&
        precioDocena <= 0 &&
        precioMediaDocena <= 0
    ) {

        const nuevoSubtotal =
            totalUnidades *
            precioUnidad;


        productoExistente.cantidad =
            totalUnidades;


        productoExistente.unidad =
            "unidad";


        productoExistente.subtotal =
            nuevoSubtotal;


        productoExistente.precio =
            precioUnidad;
    }


    // ==========================================
    // SI EXISTEN PRECIOS ESPECIALES
    // ==========================================

    else {

        let unidadesRestantes =
            totalUnidades;


        let subtotalCalculado =
            0;


        const docenas =
            Math.floor(
                unidadesRestantes / 12
            );


        // DOCENAS COMPLETAS

        if (
            docenas > 0
        ) {

            if (
                precioDocena > 0
            ) {

                subtotalCalculado +=
                    docenas *
                    precioDocena;

            } else {

                subtotalCalculado +=
                    docenas *
                    12 *
                    precioUnidad;
            }


            unidadesRestantes -=
                docenas *
                12;
        }


        // MEDIA DOCENA

        if (
            unidadesRestantes >= 6
        ) {

            if (
                precioMediaDocena > 0
            ) {

                subtotalCalculado +=
                    precioMediaDocena;

            } else {

                subtotalCalculado +=
                    6 *
                    precioUnidad;
            }


            unidadesRestantes -=
                6;
        }


        // UNIDADES RESTANTES

        subtotalCalculado +=
            unidadesRestantes *
            precioUnidad;


        productoExistente.cantidad =
            totalUnidades;


        productoExistente.unidad =
            "unidad";


        productoExistente.subtotal =
            subtotalCalculado;


        productoExistente.precio =
            subtotalCalculado /
            totalUnidades;
    }
}
        }


        // ==========================================
        // PRODUCTOS POR KG
        // ==========================================

        else {

            const nuevaCantidad =
                Number(
                    productoExistente.cantidad
                ) +
                Number(cantidad);


            const esRestaurante =
                document.getElementById(
                    "ventaRestaurante"
                )?.checked || false;


            const precioMayorista =
                Number(
                    producto.precioMayorista
                );


            const unidadMayorista =
                String(
                    producto.unidadMayorista || ""
                )
                    .trim()
                    .toLowerCase();


            // ==========================================
            // MAYORISTA POR KG
            // ==========================================

            if (
                esRestaurante &&
                Number.isFinite(
                    precioMayorista
                ) &&
                precioMayorista > 0 &&
                unidadMayorista === "kg"
            ) {

                const nuevoSubtotal =
                    nuevaCantidad *
                    precioMayorista;


                productoExistente.cantidad =
                    nuevaCantidad;


                productoExistente.subtotal =
                    nuevoSubtotal;


                productoExistente.precio =
                    precioMayorista;


                productoExistente.unidad =
                    "kg";

            }


            // ==========================================
            // PRECIO MINORISTA NORMAL
            // ==========================================

            else {

                const precioKg =
                    Number(
                        producto.precioKg
                    );


                const precioMedioKg =
                    Number(
                        producto.precioMedioKg
                    );


                if (
                    !Number.isFinite(precioKg) ||
                    precioKg <= 0
                ) {

                    alert(
                        "⚠️ Este producto no tiene cargado el precio por kilo."
                    );

                    return;
                }


                if (
                    !Number.isFinite(precioMedioKg) ||
                    precioMedioKg <= 0
                ) {

                    alert(
                        "⚠️ Este producto no tiene cargado el precio por medio kilo."
                    );

                    return;
                }


                if (
                    !Number.isInteger(
                        nuevaCantidad * 2
                    )
                ) {

                    alert(
                        "⚠️ Para fideos y ñoquis, la cantidad debe ser en múltiplos de 0,5 kg."
                    );

                    return;
                }


                const kilosCompletos =
                    Math.floor(
                        nuevaCantidad
                    );


                const quedaMedioKilo =
                    nuevaCantidad -
                    kilosCompletos;


                let nuevoSubtotal =
                    kilosCompletos *
                    precioKg;


                if (
                    Math.abs(
                        quedaMedioKilo - 0.5
                    ) < 0.0001
                ) {

                    nuevoSubtotal +=
                        precioMedioKg;
                }


                productoExistente.cantidad =
                    nuevaCantidad;


                productoExistente.subtotal =
                    nuevoSubtotal;


                productoExistente.precio =
                    nuevoSubtotal /
                    nuevaCantidad;


                productoExistente.unidad =
                    "kg";
            }
        }

    }


    // ==========================================
    // SI NO EXISTE
    // ==========================================

    else {

        // Si fue venta mayorista por docena,
        // guardamos la cantidad real en unidades.

        let cantidadFinal =
            cantidad;


        let unidadFinal =
            unidad;


        if (
            ventaRestaurante &&
            String(
                producto.unidadMayorista || ""
            )
                .trim()
                .toLowerCase() ===
                "docena"
        ) {

            if (
                unidad === "docena"
            ) {

                cantidadFinal =
                    cantidad * 12;

                unidadFinal =
                    "unidad";

            } else if (
                unidad === "media docena"
            ) {

                cantidadFinal =
                    cantidad * 6;

                unidadFinal =
                    "unidad";
            }
        }


        if (
            subtotal === undefined
        ) {

            subtotal =
                precio *
                cantidadFinal;
        }


        ventaActual.push({

            nombre:
                producto.nombre,

            sabor:
                producto.sabor,

            precio:
                precio,

            cantidad:
                cantidadFinal,

            unidad:
                unidadFinal,

            subtotal:
                subtotal
        });
    }


    mostrarVenta();


    document.getElementById("codigo").value =
        "";


    document.getElementById("cantidad").value =
        "1";


    document.getElementById("resultado").innerHTML =
        "";


    document.getElementById(
        "cantidadProducto"
    ).style.display =
        "none";


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
                item:
                    item,

                indice:
                    indice
            })
        )
        .reverse()
        .forEach(
            dato => {

                const item =
                    dato.item;


                const indice =
                    dato.indice;


                let mostrarPrecio =
                    true;


           if (
    item.unidad === "unidad" ||
    item.unidad === "kg" ||
    item.unidad === "plancha"
) {

    mostrarPrecio =
        false;
}


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

                            ${
                                mostrarPrecio
                                    ? `
                                        <br>

                                        Precio:
                                        $${Number(item.precio).toLocaleString("es-AR")}
                                      `
                                    : ""
                            }

                            <br>

                            Subtotal:
                            $${Number(item.subtotal).toLocaleString("es-AR")}

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
                    Number(item.subtotal) || 0;
            }
        );


    document.getElementById("venta").innerHTML =
        html;


    document.getElementById("total").innerHTML =
        `Total: $${totalVenta.toLocaleString("es-AR")}`;


    actualizarResumenPago();
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


// ==========================================
// VACIAR VENTA
// ==========================================

function vaciarVenta() {

    if (
        ventaActual.length === 0
    ) {

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
// ACTUALIZAR RESUMEN DEL PAGO
// ==========================================

function actualizarResumenPago() {

    const checkbox =
        document.getElementById(
            "ventaRestaurante"
        );


    const resumen =
        document.getElementById(
            "resumenPago"
        );


    const inputPago =
        document.getElementById(
            "montoPagado"
        );


    if (
        !checkbox ||
        !resumen ||
        !inputPago
    ) {

        return;
    }


    if (
        !checkbox.checked
    ) {

        resumen.innerHTML =
            "";

        return;
    }


    const total =
        Number(totalVenta) || 0;


    const montoPagado =
        Number(
            String(
                inputPago.value || ""
            )
                .replace(",", ".")
        ) || 0;


    const saldo =
        Math.max(
            total -
            montoPagado,
            0
        );


    let estado =
        "Pendiente";


    if (
        montoPagado >= total &&
        total > 0
    ) {

        estado =
            "Pagada";

    } else if (
        montoPagado > 0
    ) {

        estado =
            "Pago parcial";
    }


    resumen.innerHTML = `

        <strong>
            Total: $${total.toLocaleString("es-AR")}
        </strong>

        <br>

        Pagás ahora:
        $${montoPagado.toLocaleString("es-AR")}

        <br>

        Saldo pendiente:
        $${saldo.toLocaleString("es-AR")}

        <br>

        Estado:
        ${estado}

    `;
}


// ==========================================
// ACTUALIZAR MODO DE VENTA
// ==========================================

function actualizarModoVenta() {

    const checkbox =
        document.getElementById(
            "ventaRestaurante"
        );


    const datosRestaurante =
        document.getElementById(
            "datosRestaurante"
        );


    const cliente =
        document.getElementById(
            "cliente"
        );


    const montoPagado =
        document.getElementById(
            "montoPagado"
        );


    const bloquePago =
        document.getElementById(
            "bloquePago"
        );


    const pagoParticular =
        document.getElementById(
            "pagoVentaParticular"
        );


    const pagoRestaurante =
        document.getElementById(
            "pagoRestaurante"
        );


    if (
        !checkbox ||
        !datosRestaurante
    ) {

        return;
    }


    if (
        checkbox.checked
    ) {

        datosRestaurante.style.display =
            "block";


        if (
            bloquePago &&
            pagoRestaurante
        ) {

            pagoRestaurante.appendChild(
                bloquePago
            );
        }


        if (montoPagado) {

            montoPagado.value =
                "";

            montoPagado.placeholder =
                "Ingrese el monto";
        }


        actualizarResumenPago();

    } else {

        datosRestaurante.style.display =
            "none";


        if (
            bloquePago &&
            pagoParticular
        ) {

            pagoParticular.appendChild(
                bloquePago
            );
        }


        if (cliente) {

            cliente.value =
                "";
        }


        if (montoPagado) {

            montoPagado.value =
                "";

            montoPagado.placeholder =
                "Ingrese el monto";
        }
    }
}


// ==========================================
// ACTUALIZAR RESUMEN AL CAMBIAR EL PAGO
// ==========================================

document.addEventListener(
    "input",
    function(event) {

        if (
            event.target.id ===
            "montoPagado"
        ) {

            actualizarResumenPago();
        }

    }
);


// ==========================================
// FINALIZAR VENTA
// ==========================================

async function finalizarVenta() {

    if (!preciosCargados) {

        alert(

            "🚨 NO SE PUEDE REGISTRAR LA VENTA.\n\n" +

            "Los precios no pudieron cargarse desde Google Sheets.\n\n" +

            "Actualizá los precios y volvé a intentarlo."

        );

        return;
    }


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


    const ventaRestaurante =
        document
            .getElementById("ventaRestaurante")
            ?.checked || false;


    let cliente =
        "Consumidor final";


    let montoPagado =
        totalVenta;


    if (
        ventaRestaurante
    ) {

        const clienteInput =
            document.getElementById(
                "cliente"
            );


        cliente =
            clienteInput
                ? clienteInput.value.trim()
                : "";


        if (!cliente) {

            alert(
                "Seleccionar un cliente."
            );

            return;
        }


        const montoPagadoInput =
            document.getElementById(
                "montoPagado"
            );


        montoPagado =
            montoPagadoInput
                ? parseFloat(
                    montoPagadoInput.value
                        .replace(",", ".")
                  )
                : 0;


        if (
            isNaN(montoPagado)
        ) {

            montoPagado =
                0;
        }


        if (
            montoPagado < 0
        ) {

            alert(
                "El pago inicial no puede ser negativo."
            );

            return;
        }


        if (
            montoPagado > totalVenta
        ) {

            alert(
                "El pago inicial no puede superar el total de la venta."
            );

            return;
        }
    }


    if (
        isNaN(montoPagado)
    ) {

        montoPagado =
            0;
    }


    if (
        montoPagado < 0
    ) {

        alert(
            "El monto pagado no puede ser negativo."
        );

        return;
    }


    if (
        montoPagado > totalVenta
    ) {

        alert(
            "El monto pagado no puede ser mayor al total de la venta."
        );

        return;
    }


    const saldoPendiente =
        Math.max(
            totalVenta -
            montoPagado,
            0
        );


    let estadoPago =
        "Pendiente";


    if (
        saldoPendiente <= 0
    ) {

        estadoPago =
            "Pagada";

    } else if (
        montoPagado > 0
    ) {

        estadoPago =
            "Pago parcial";
    }


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

        numeroVenta:
            Date.now().toString(),

        productos:
            [...ventaActual],

        total:
            totalVenta,

        medioPago:
            medioPago,

        cliente:
            cliente,

        montoPagado:
            montoPagado,

        saldoPendiente:
            saldoPendiente,

        estadoPago:
            estadoPago
    };


    console.log(
        "Venta a registrar:",
        nuevaVenta
    );


    document.getElementById("mensaje").innerHTML =
        "⏳ Registrando venta en Google Sheets...";


    try {

        const respuesta =
            await fetch(
                URL_PRECIOS,
                {

                    method:
                        "POST",

                    headers: {

                        "Content-Type":
                            "text/plain;charset=utf-8"

                    },

                    body:
                        JSON.stringify({

                            venta:
                                nuevaVenta

                        })

                }
            );


        if (
            !respuesta.ok
        ) {

            throw new Error(
                "No se pudo conectar con Google Sheets."
            );
        }


        const datos =
            await respuesta.json();


        if (
            !datos.ok
        ) {

            throw new Error(
                datos.error ||
                "Google Sheets no confirmó el registro."
            );
        }


        await cargarVentasDesdeGoogle();


        localStorage.setItem(
            "ventasDelDia",
            JSON.stringify(
                ventasDelDia
            )
        );


        let mensajePago =
            "";


        if (
            estadoPago === "Pagada"
        ) {

            mensajePago =
                "Pago completo: $" +
                montoPagado;

        } else if (
            estadoPago === "Pago parcial"
        ) {

            mensajePago =
                "Pagó ahora: $" +
                montoPagado +
                "\n" +
                "Saldo pendiente: $" +
                saldoPendiente;

        } else {

            mensajePago =
                "No pagó en el momento.\n" +
                "Saldo pendiente: $" +
                saldoPendiente;
        }


        alert(

            "✅ Venta registrada correctamente.\n\n" +

            "Cliente: " +
            cliente +
            "\n" +

            "Total: $" +
            totalVenta +
            "\n\n" +

            mensajePago

        );


        document.getElementById("mensaje").innerHTML =
            "✅ Venta registrada correctamente en Google Sheets.";


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


        const checkboxRestaurante =
            document.getElementById(
                "ventaRestaurante"
            );


        if (
            checkboxRestaurante
        ) {

            checkboxRestaurante.checked =
                false;
        }


        actualizarModoVenta();


        document.getElementById("codigo").focus();


        mostrarVentasDelDia();


    } catch (error) {

        console.error(
            "❌ Error registrando venta:",
            error
        );


        alert(

            "❌ NO se pudo confirmar el registro de la venta en Google Sheets.\n\n" +

            "La venta NO se marcó como registrada.\n\n" +

            "Error: " +
            error.message

        );


        document.getElementById("mensaje").innerHTML =
            "❌ No se pudo confirmar la venta en Google Sheets.";

    }

}


// ==========================================
// HISTORIAL DE VENTAS
// ==========================================

function mostrarVentasDelDia(fechaSeleccionada = null) {

    let html = "";
    let total = 0;
    let cantidadVentas = 0;

    const ventasMostradas = ventasDelDia

        .map((venta, indice) => ({
            venta: venta,
            indiceOriginal: indice
        }))

        // Ignorar registros vacíos o inválidos
        .filter(item => {

            const venta = item.venta;

            return (
                venta &&
                Array.isArray(venta.productos) &&
                venta.productos.length > 0 &&
                Number(venta.total) > 0 &&
                venta.cliente !== "Fecha"
            );
        })

        // Filtrar por fecha
        .filter(item =>
            fechaSeleccionada === null ||
            item.venta.fechaFiltro === fechaSeleccionada
        )

        // Última venta primero
        .sort((a, b) =>
            Number(b.venta.numeroVenta || 0) -
            Number(a.venta.numeroVenta || 0)
        );


    const totalVentasDelDia =
        ventasMostradas.length;


    ventasMostradas.forEach((item, posicion) => {

        const venta = item.venta;
        const indiceOriginal = item.indiceOriginal;


        /*
         * Como mostramos la última venta primero,
         * el número de venta del día se calcula
         * desde el final.
         *
         * Ejemplo:
         *
         * última → Venta del día 3
         * anterior → Venta del día 2
         * primera → Venta del día 1
         */

        const numeroVentaDelDia =
            totalVentasDelDia - posicion;


        html += `

            <div>

                <p>

                    <strong>
                        Venta del día ${numeroVentaDelDia}
                    </strong>

                    <br>

                    Fecha:
                    ${venta.fecha}

                    <br>

                    Total:
                    $${Number(
                        venta.total
                    ).toLocaleString("es-AR")}

                    <br>

                    Medio de pago:
                    ${venta.medioPago}

                </p>


                <button
                    onclick="verDetalleVenta(${indiceOriginal})"
                >
                    Detalle
                </button>


                <div
                    id="detalleVenta${indiceOriginal}"
                    style="display: none;"
                ></div>


                <hr>

            </div>

        `;


        total +=
            Number(venta.total) || 0;


        cantidadVentas++;
    });


    if (cantidadVentas === 0) {

        html =
            "<p>❌ No hay ventas registradas para esta fecha.</p>";
    }


    document.getElementById(
        "ventasDelDia"
    ).innerHTML = html;


    // ==========================================
    // FECHA
    // ==========================================

    let textoFecha = "";


    if (fechaSeleccionada) {

        const partesFecha =
            fechaSeleccionada.split("-");


        textoFecha =
            `${partesFecha[2]}/${partesFecha[1]}/${partesFecha[0]}`;

    } else {

        const ahora =
            new Date();


        textoFecha =
            String(
                ahora.getDate()
            ).padStart(2, "0") +
            "/" +
            String(
                ahora.getMonth() + 1
            ).padStart(2, "0") +
            "/" +
            ahora.getFullYear();
    }


    document.getElementById(
        "totalDia"
    ).innerHTML =
        `TOTAL VENDIDO (${textoFecha}): $${total.toLocaleString("es-AR")}`;
}

// ==========================================
// DETALLE DE UNA VENTA
// ==========================================

// ==========================================
// DETALLE DE UNA VENTA
// ==========================================

function verDetalleVenta(indice) {

    const venta = ventasDelDia[indice];

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


    const botonDetalle =
        document.querySelector(
            `button[onclick="verDetalleVenta(${indice})"]`
        );


    // ==========================================
    // CERRAR DETALLE
    // ==========================================

    if (
        contenedor.style.display === "block"
    ) {

        contenedor.style.display = "none";

        if (botonDetalle) {
            botonDetalle.innerText = "Ver detalle de la venta";
        }

        return;
    }


    // ==========================================
    // DETERMINAR SI ES MAYORISTA
    // ==========================================

    const esRestaurante =
        String(
            venta.cliente || ""
        ).trim() !== "" &&
        String(
            venta.cliente || ""
        ).trim().toLowerCase() !==
            "consumidor final";


    let html = `

        <div>

            <strong>
                Detalle de la venta:
            </strong>

            <p style="margin-top:10px;">

                <strong>
                    N.º de venta:
                </strong>

                ${venta.numeroVenta || "Sin número"}

            </p>

    `;


    // ==========================================
    // CLIENTE SI ES MAYORISTA
    // ==========================================

    if (esRestaurante) {

        html += `

            <p>

                <strong>
                    Cliente:
                </strong>

                ${venta.cliente}

            </p>

        `;
    }


    // ==========================================
    // PRODUCTOS
    // ==========================================

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

                Subtotal:
                $${Number(
                    producto.subtotal
                ).toLocaleString("es-AR")}

            </p>

        `;

    });


    // ==========================================
    // TOTAL
    // ==========================================

    html += `

            <strong>

                Total:
                $${Number(
                    venta.total
                ).toLocaleString("es-AR")}

            </strong>

        </div>

    `;


    contenedor.innerHTML = html;

    contenedor.style.display = "block";


    if (botonDetalle) {

        botonDetalle.innerText =
            "Ocultar detalle";
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
// MOSTRAR / OCULTAR HISTORIAL
// ==========================================

function alternarHistorial() {

    const historial =
        document.getElementById(
            "historialVentas"
        );


    const boton =
        document.getElementById(
            "botonHistorial"
        );


    if (
        !historial ||
        !boton
    ) {

        return;
    }


    if (
        historial.hidden
    ) {

        historial.hidden =
            false;

        boton.innerHTML =
            "Ocultar historial de ventas";

    } else {

        historial.hidden =
            true;

        boton.innerHTML =
            "Ver historial de ventas";
    }
}


// ==========================================
// MOSTRAR / OCULTAR CUENTAS CORRIENTES
// ==========================================

function alternarCuentasCorrientes() {

    const cuentas =
        document.getElementById(
            "cuentasCorrientesSection"
        );


    const boton =
        document.getElementById(
            "botonCuentasCorrientes"
        );


    if (
        !cuentas ||
        !boton
    ) {

        return;
    }


    if (
        cuentas.hidden
    ) {

        cuentas.hidden =
            false;

        boton.innerHTML =
            "Ocultar cuentas corrientes";

    } else {

        cuentas.hidden =
            true;

        boton.innerHTML =
            "Ver cuentas corrientes";
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


    const boton =
        document.getElementById(
            "botonReporte"
        );


    if (
        !reporte ||
        !boton
    ) {

        return;
    }


    if (
        reporte.hidden
    ) {

        reporte.hidden =
            false;

        boton.innerHTML =
            "Ocultar reporte mensual";

    } else {

        reporte.hidden =
            true;

        boton.innerHTML =
            "Ver reporte mensual";
    }
}


// ==========================================
// GENERAR REPORTE MENSUAL
// ==========================================

function generarReporteMensual() {

    const mesSeleccionado =
        document
            .getElementById("mesReporte")
            .value;


    const contenedor =
        document
            .getElementById("reporteMensual");


    if (
        !mesSeleccionado
    ) {

        contenedor.innerHTML = `

            <p>
                ⚠️ Seleccioná un mes para generar el reporte.
            </p>

        `;

        return;
    }


    const partes =
        mesSeleccionado.split("-");


    const anio =
        partes[0];


    const numeroMes =
        Number(partes[1]);


    const nombresMeses = [

        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"

    ];


    const mesFormateado =
        `${nombresMeses[numeroMes - 1]} de ${anio}`;


    let totalFacturado =
        0;


    let totalCobrado =
        0;


    let cantidadVentas =
        0;


    ventasDelDia.forEach(
        venta => {

            if (
                !venta.fechaFiltro ||
                !venta.fechaFiltro.startsWith(
                    mesSeleccionado
                )
            ) {

                return;
            }


            totalFacturado +=
                Number(venta.total) || 0;


            totalCobrado +=
                Number(venta.montoPagado) || 0;


            cantidadVentas++;

        }
    );


    const totalPendiente =
        Math.max(
            totalFacturado -
            totalCobrado,
            0
        );


    contenedor.innerHTML = `

        <p>
            📅 <strong>Mes:</strong>
            ${mesFormateado}
        </p>

        <p>
            🧾 <strong>Cantidad de ventas:</strong>
            ${cantidadVentas}
        </p>

        <p>
            💰 <strong>Total facturado:</strong>
            $${totalFacturado.toLocaleString("es-AR")}
        </p>

        <p>
            💵 <strong>Total cobrado:</strong>
            $${totalCobrado.toLocaleString("es-AR")}
        </p>

        <p>
            ⏳ <strong>Total pendiente:</strong>
            $${totalPendiente.toLocaleString("es-AR")}
        </p>

    `;
}


// ==========================================
// ESCÁNER DE CÓDIGOS
// ==========================================

let escaner =
    null;


async function abrirEscaner() {

    if (
        !preciosCargados
    ) {

        document.getElementById(
            "mensaje"
        ).innerHTML =
            "⏳ Los precios no están disponibles. Intentando actualizar...";


        const actualizado =
            await actualizarPreciosDesdeGoogle(
                false
            );


        if (
            !actualizado
        ) {

            alert(

                "🚨 No se pudieron cargar los precios.\n\n" +

                "El escáner no puede utilizarse hasta que los precios estén disponibles."

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


    if (
        escaner
    ) {

        return;
    }


    escaner =
        new Html5Qrcode(
            "reader"
        );


    const configuracion = {

        fps:
            10,

        qrbox: {

            width:
                300,

            height:
                150
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


                if (
                    !preciosCargados
                ) {

                    const actualizado =
                        await actualizarPreciosDesdeGoogle(
                            false
                        );


                    if (
                        !actualizado
                    ) {

                        alert(
                            "❌ No se pudieron cargar los precios."
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

                // El escáner continúa buscando.

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

    if (
        escaner
    ) {

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
// CERRAR ESCÁNER CON ESCAPE
// ==========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            cerrarEscaner();
        }

    }
);


// ==========================================
// INICIAR APLICACIÓN
// ==========================================

async function iniciarAplicacion() {

    console.log(
        "Iniciando aplicación..."
    );


    // ==========================================
    // PRIMERO:
    // ACTUALIZAR PRODUCTOS Y PRECIOS
    // ==========================================

    const preciosActualizados =
        await actualizarPreciosDesdeGoogle(
            true
        );


    if (
        !preciosActualizados
    ) {

        console.error(
            "❌ NO se pudieron actualizar los precios al iniciar."
        );


        const mensaje =
            document.getElementById(
                "mensaje"
            );


        if (mensaje) {

            mensaje.innerHTML = `

                <div style="
                    background:#f8d7da;
                    color:#721c24;
                    border:1px solid #f5c6cb;
                    padding:12px;
                    border-radius:10px;
                    font-weight:bold;
                ">

                    🚨 PRECIOS NO DISPONIBLES

                    <br><br>

                    No se pudieron cargar los precios desde Google Sheets.

                    <br>

                    NO se pueden registrar ventas hasta actualizar los precios.

                </div>

            `;
        }

    } else {

        console.log(
            "✅ Precios actualizados automáticamente al iniciar."
        );
    }


    // ==========================================
    // SEGUNDO:
    // CARGAR VENTAS
    // ==========================================

    await cargarVentasDesdeGoogle();


    // ==========================================
    // TERCERO:
    // MOSTRAR INFORMACIÓN
    // ==========================================

    mostrarVentasDeHoy();

    mostrarCuentasCorrientes();


    console.log(
        "✅ Aplicación iniciada."
    );


    console.log(
        "Ventas sincronizadas:",
        ventasDelDia
    );
}


// ==========================================
// ESPERAR A QUE TERMINE DE CARGAR LA PÁGINA
// ==========================================

window.addEventListener(
    "load",
    function() {

        console.log(
            "Página completamente cargada."
        );


        iniciarAplicacion();

    }
);