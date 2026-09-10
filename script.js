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
        tipoVenta: "plancha"
    },

    "F02": {
        nombre: "Ravioles",
        sabor: "Pollo",
        precioUnidad: null,
        precioDocena: null,
        precioPlancha: null,
        tipoVenta: "plancha"
    },

    "F03": {
        nombre: "Ravioles",
        sabor: "Verdura",
        precioUnidad: null,
        precioDocena: null,
        precioPlancha: null,
        tipoVenta: "plancha"
    },

    "F04": {
        nombre: "Raviolones",
        sabor: "Jamón y queso",
        precioUnidad: null,
        precioDocena: null,
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F05": {
        nombre: "Raviolones",
        sabor: "Jamón, queso y roquefort",
        precioUnidad: null,
        precioDocena: null,
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F06": {
        nombre: "Raviolones",
        sabor: "Verdura",
        precioUnidad: null,
        precioDocena: null,
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F07": {
        nombre: "Raviolones",
        sabor: "Pollo al verdeo",
        precioUnidad: null,
        precioDocena: null,
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F08": {
        nombre: "Raviolones",
        sabor: "Osobuco con provoleta",
        precioUnidad: null,
        precioDocena: null,
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F09": {
        nombre: "Raviolones",
        sabor: "Camarones",
        precioUnidad: null,
        precioDocena: null,
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F10": {
        nombre: "Raviolones",
        sabor: "Salmón",
        precioUnidad: null,
        precioDocena: null,
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F11": {
        nombre: "Raviolones",
        sabor: "Frutos de mar",
        precioUnidad: null,
        precioDocena: null,
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F12": {
        nombre: "Raviolones",
        sabor: "Bondiola a la mostaza",
        precioUnidad: null,
        precioDocena: null,
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F13": {
        nombre: "Raviolones",
        sabor: "Veganos",
        precioUnidad: null,
        precioDocena: null,
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F14": {
        nombre: "Raviolones",
        sabor: "Ricota, espinaca y nuez",
        precioUnidad: null,
        precioDocena: null,
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F15": {
        nombre: "Raviolones",
        sabor: "Berenjena, cherry y queso",
        precioUnidad: null,
        precioDocena: null,
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F16": {
        nombre: "Sorrentinos",
        sabor: "Jamón y queso",
        precioUnidad: null,
        precioDocena: null,
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F17": {
        nombre: "Sorrentinos",
        sabor: "Zapallo, queso y almendras tostadas",
        precioUnidad: null,
        precioDocena: null,
        tipoVenta: "unidad",
        permiteDocena: true
    },

    "F18": {
        nombre: "Ñoquis",
        sabor: "Papa",
        precioKg: null,
        tipoVenta: "kg"
    },

    "F19": {
        nombre: "Ñoquis",
        sabor: "Papa con espinaca",
        precioKg: null,
        tipoVenta: "kg"
    },

    "F20": {
        nombre: "Fideos",
        sabor: "Al huevo blancos",
        precioKg: null,
        tipoVenta: "kg"
    },

    "F21": {
        nombre: "Fideos",
        sabor: "Al huevo con espinaca",
        precioKg: null,
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


        // ==========================================
        // CARGAR RESTAURANTES
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

                    precioPlancha:
                        item.precioPlancha !== null &&
                        item.precioPlancha !== undefined &&
                        item.precioPlancha !== ""
                            ? Number(item.precioPlancha)
                            : null,

                    tipoVenta:
                        item.tipoVenta || "unidad",

                    permiteDocena:
                        item.permiteDocena === true ||
                        String(item.permiteDocena).toLowerCase() === "sí"
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
            // TIPO DE VENTA
            // ==========================================

            if (
                item.tipoVenta !== null &&
                item.tipoVenta !== undefined &&
                item.tipoVenta !== ""
            ) {

                productos[codigo].tipoVenta =
                    item.tipoVenta;
            }


            // ==========================================
            // PERMITE DOCENA
            // ==========================================

            if (
                item.permiteDocena !== undefined
            ) {

                productos[codigo].permiteDocena =
                    item.permiteDocena === true ||
                    String(item.permiteDocena).toLowerCase() === "sí";
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
            "❌ Error actualizando productos:",
            error
        );


        preciosCargados = false;


        if (
            document.getElementById("mensaje")
        ) {

            document.getElementById("mensaje").innerHTML =
                "🚨 NO SE PUDIERON CARGAR LOS PRECIOS. No se pueden registrar ventas.";

        }


        return false;


    } finally {

        actualizandoPrecios = false;

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

        opcionVacia.value = "";

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
            Array.isArray(datos.ventas)
        ) {

            ventasDelDia =
                datos.ventas;

            cuentasCorrientes =
                datos.cuentasCorrientes || [];


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
        document.getElementById("listaCuentasCorrientes");

    if (!contenedor) return;


    const cuentasPendientes =
        cuentasCorrientes.filter(
            cuenta => Number(cuenta.saldo || 0) > 0
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

        const total =
            Number(cuenta.total || 0);

        const pagado =
            Number(cuenta.pagado || 0);

        const saldo =
            Number(cuenta.saldo || 0);

        const estado =
            cuenta.estado || "Pendiente";

        const cliente =
            cuenta.cliente || "Consumidor final";


        let fechaVenta =
            cuenta.fecha || "Sin fecha";


        const fechaObjeto =
            new Date(fechaVenta);


        if (!isNaN(fechaObjeto.getTime())) {

            fechaVenta =
                fechaObjeto.toLocaleDateString("es-AR");
        }


        html += `

            <div style="
                background:white;
                border:1px solid #ddd;
                border-radius:12px;
                padding:15px;
                margin-bottom:12px;
            ">

                <strong style="font-size:18px;">
                    ${cliente}
                </strong>


                <p>
                    Venta Nº:
                    ${cuenta.numeroVenta}
                </p>


                <p>
                    Fecha de venta:
                    <strong>
                        ${fechaVenta}
                    </strong>
                </p>


                <p>
                    Total:
                    <strong>
                        $${total.toLocaleString("es-AR")}
                    </strong>
                </p>


                <p>
                    Pagado:
                    <strong>
                        $${pagado.toLocaleString("es-AR")}
                    </strong>
                </p>


                <p style="
                    font-size:18px;
                    font-weight:bold;
                    color:red;
                ">
                    Saldo pendiente:
                    $${saldo.toLocaleString("es-AR")}
                </p>


                <p>
                    Estado:
                    <strong>
                        ${estado}
                    </strong>
                </p>


                <button
                    data-detalle-venta="${cuenta.numeroVenta}"
                    onclick="
                        verDetalleCuentaCorriente(
                            '${cuenta.numeroVenta}'
                        )
                    "
                >
                    Ver detalle de la venta
                </button>


                <div
                    id="detalleCuenta${cuenta.numeroVenta}"
                    style="
                        display:none;
                        margin-top:12px;
                        padding:12px;
                        background:#f5f5f5;
                        border-radius:10px;
                    "
                ></div>


                <button
                    onclick="
                        registrarPagoCuenta(
                            '${cuenta.numeroVenta}'
                        )
                    "
                >
                    Registrar pago
                </button>

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

            const precio =
                Number(producto.precio) || 0;

            const subtotal =
                Number(producto.subtotal) || 0;


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

                    Precio:
                    $${precio.toLocaleString("es-AR")}

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


// ==========================================
// REGISTRAR PAGO DE CUENTA CORRIENTE
// ==========================================

async function registrarPagoCuenta(numeroVenta) {

    const cuenta =
        cuentasCorrientes.find(
            item =>
                String(item.numeroVenta) ===
                String(numeroVenta)
        );


    if (!cuenta) {

        alert(
            "❌ No se encontró la cuenta corriente."
        );

        return;
    }


    const saldoActual =
        Number(cuenta.saldo || 0);


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
            cuenta.cliente +
            "\n" +

            "Saldo pendiente: $" +
            saldoActual

        );


    if (
        montoTexto === null
    ) {

        return;
    }


    const monto =
        parseFloat(
            montoTexto
                .replace(",", ".")
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
            saldoActual
        );

        return;
    }


    document.getElementById("mensaje").innerHTML =
        "⏳ Registrando cobro...";


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

                            numeroVenta:
                                numeroVenta,

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
            cuenta.cliente +
            "\n" +

            "Cobró ahora: $" +
            monto

        );


        document.getElementById("mensaje").innerHTML =
            "✅ Cobro registrado correctamente.";


        console.log(
            "🔄 Voy a recargar cuentas desde Google..."
        );


        await cargarVentasDesdeGoogle();


        console.log(
            "📋 Cuentas después de recargar:",
            cuentasCorrientes
        );


        mostrarCuentasCorrientes();


        console.log(
            "✅ Pantalla actualizada"
        );


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


        document.getElementById("mensaje").innerHTML =
            "❌ No se pudo registrar el cobro.";

    }

}


// ==========================================
// BUSCAR PRODUCTOS
// ==========================================

function buscarProducto() {

    if (!preciosCargados) {

        document.getElementById("resultado").innerHTML = `

            <div style="
                background:#fff3cd;
                border:1px solid #ffc107;
                color:#856404;
                padding:12px;
                border-radius:10px;
                font-weight:bold;
            ">

                ⚠️ Los precios no están disponibles.

                <br><br>

                Actualizá los precios antes de realizar una venta.

            </div>

        `;


        document.getElementById(
            "cantidadProducto"
        ).style.display = "none";


        return;
    }


    const codigo =
        document
            .getElementById("codigo")
            .value
            .trim();


    const producto =
        productos[codigo];


    if (!producto) {

        document.getElementById("resultado").innerHTML = `

            <div style="
                background:#f8d7da;
                border:1px solid #f5c6cb;
                color:#721c24;
                padding:12px;
                border-radius:10px;
            ">

                ❌ Producto no encontrado


                <button
                    onclick="cerrarResultadoProducto()"
                    style="
                        width:auto;
                        min-height:34px;
                        padding:7px 12px;
                        margin-top:10px;
                    "
                >
                    ❌ Cerrar
                </button>

            </div>

        `;


        document.getElementById(
            "cantidadProducto"
        ).style.display = "none";


        return;
    }


    document.getElementById("resultado").innerHTML = `

        <div style="
            background:#fafafa;
            border:1px solid #eeeeee;
            border-radius:12px;
            padding:12px;
        ">

            <h3>
                ${producto.nombre}
            </h3>


            <p>
                Sabor: ${producto.sabor}
            </p>


            <button
                onclick="cerrarResultadoProducto()"
                style="
                    width:auto;
                    min-height:36px;
                    padding:7px 12px;
                    background:#eeeeee;
                    color:#171717;
                    font-size:14px;
                "
            >
                ❌ Cerrar
            </button>

        </div>

    `;


    document.getElementById(
        "cantidadProducto"
    ).style.display = "block";


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

    if (
        producto.tipoVenta === "kg"
    ) {

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

    else if (
        producto.tipoVenta === "plancha"
    ) {

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

        if (
            producto.permiteDocena
        ) {

            formaVentaContainer.style.display =
                "block";

            formaVenta.value =
                "unidad";

            unidadCantidad.innerText =
                "unidad";

            cantidad.value =
                "1";

        } else {

            formaVentaContainer.style.display =
                "none";

            formaVenta.value =
                "unidad";

            unidadCantidad.innerText =
                "unidad";

            cantidad.value =
                "1";

            agregarVenta();
        }
    }
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
    ).style.display = "none";


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


    // ==========================================
    // PRODUCTOS POR KG
    // ==========================================

    if (
        producto.tipoVenta === "kg"
    ) {

        precio =
            producto.precioKg;

        unidad =
            "kg";
    }


    // ==========================================
    // PRODUCTOS POR PLANCHA
    // ==========================================

    else if (
        producto.tipoVenta === "plancha"
    ) {

        precio =
            producto.precioPlancha;

        unidad =
            "plancha";
    }


    // ==========================================
    // PRODUCTOS POR UNIDAD / DOCENA
    // ==========================================

    else {

        if (
            formaVenta === "docena"
        ) {

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
        precio === null ||
        precio === undefined ||
        !Number.isFinite(Number(precio)) ||
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
                item.sabor === producto.sabor &&
                item.unidad === unidad &&
                item.precio === precio
        );


    // ==========================================
    // SI YA EXISTE
    // ==========================================

    if (
        productoExistente
    ) {

        productoExistente.cantidad +=
            cantidad;


        productoExistente.subtotal =
            productoExistente.precio *
            productoExistente.cantidad;
    }


    // ==========================================
    // SI NO EXISTE
    // ==========================================

    else {

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
                            $${Number(item.precio).toLocaleString("es-AR")}

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
                    item.subtotal;
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
            total - montoPagado,
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


    // ==========================================
    // BLOQUE DE PAGO
    // ==========================================

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


    // ==========================================
    // VENTA A RESTAURANTE
    // ==========================================

    if (
        checkbox.checked
    ) {

        datosRestaurante.style.display =
            "block";


        // Mover el bloque de pago
        // debajo del resumen del restaurante

        if (
            bloquePago &&
            pagoRestaurante
        ) {

            pagoRestaurante.appendChild(
                bloquePago
            );
        }

        if (montoPagado) {
            montoPagado.value = "";
            montoPagado.placeholder = "Ingrese el monto";
        }

        actualizarResumenPago();

    } else {

        datosRestaurante.style.display =
            "none";


        // Volver a colocar el bloque
        // debajo del detalle de la venta

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
            montoPagado.value = "";
            montoPagado.placeholder = "Ingrese el monto";
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

    // ==========================================
    // SEGURIDAD PRINCIPAL
    // ==========================================

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


    // ==========================================
    // OBTENER DATOS DE LA VENTA
    // ==========================================

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


    // ==========================================
    // VENTA A RESTAURANTE
    // ==========================================

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


    // ==========================================
    // VALIDAR PAGO
    // ==========================================

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
            totalVenta - montoPagado,
            0
        );


    // ==========================================
    // ESTADO DEL PAGO
    // ==========================================

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


    // ==========================================
    // FECHA
    // ==========================================

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


    // ==========================================
    // CREAR VENTA
    // ==========================================

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


    // ==========================================
    // AVISAR QUE SE ESTÁ REGISTRANDO
    // ==========================================

    document.getElementById("mensaje").innerHTML =
        "⏳ Registrando venta en Google Sheets...";


    try {

        // ==========================================
        // ENVIAR VENTA A GOOGLE SHEETS
        // ==========================================

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


        // ==========================================
        // VERIFICAR CONEXIÓN
        // ==========================================

        if (
            !respuesta.ok
        ) {

            throw new Error(
                "No se pudo conectar con Google Sheets."
            );
        }


        // ==========================================
        // LEER RESPUESTA
        // ==========================================

        const datos =
            await respuesta.json();


        // ==========================================
        // VERIFICAR CONFIRMACIÓN
        // ==========================================

        if (
            !datos.ok
        ) {

            throw new Error(
                datos.error ||
                "Google Sheets no confirmó el registro."
            );
        }


        await cargarVentasDesdeGoogle();


        // ==========================================
        // GUARDAR LOCALMENTE
        // ==========================================

        localStorage.setItem(
            "ventasDelDia",
            JSON.stringify(
                ventasDelDia
            )
        );


        // ==========================================
        // ACTUALIZAR CUENTAS CORRIENTES LOCALES
        // ==========================================

        cuentasCorrientes.push({

            numeroVenta:
                nuevaVenta.numeroVenta,

            cliente:
                cliente,

            fecha:
                fechaMostrar,

            total:
                totalVenta,

            montoPagado:
                montoPagado,

            saldoPendiente:
                saldoPendiente,

            estadoPago:
                estadoPago

        });


        // ==========================================
        // MENSAJE DE CONFIRMACIÓN
        // ==========================================

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


        // ==========================================
        // LIMPIAR VENTA
        // ==========================================

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


        // ==========================================
        // RESTABLECER DATOS DE VENTA
        // ==========================================

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


        // ==========================================
        // ACTUALIZAR HISTORIAL
        // ==========================================

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
                            $${Number(venta.total).toLocaleString("es-AR")}

                            <br>

                            Medio de pago:
                            ${venta.medioPago}

                        </p>


                        <button
                            onclick="verDetalleVenta(${numeroVenta - 1})"
                        >
                            Ver detalle
                        </button>


                        <div
                            id="detalleVenta${numeroVenta - 1}"
                            style="display: none;"
                        ></div>


                        <hr>

                    </div>

                `;


                total +=
                    Number(venta.total) || 0;


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


    // ==========================================
    // MOSTRAR TOTAL CON FECHA
    // ==========================================

    let textoFecha = "";


    if (
        fechaSeleccionada
    ) {

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
        `Total vendido — ${textoFecha}: $${total.toLocaleString("es-AR")}`;
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
                    Detalle de la venta:
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
                        $${Number(producto.precio).toLocaleString("es-AR")}

                        <br>

                        Subtotal:
                        $${Number(producto.subtotal).toLocaleString("es-AR")}

                    </p>

                `;
            }
        );


        html += `

                <strong>
                    Total:
                    $${Number(venta.total).toLocaleString("es-AR")}
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


        document.getElementById(
            "mensaje"
        ).innerHTML = `

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