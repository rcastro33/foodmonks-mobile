// Generated by https://quicktype.io

export interface LoginResponse {
    token:        string;
    refreshToken: string;
}

// Generated by https://quicktype.io

export interface UserInfoResponse {
    correo:        string;
    nombre:        string;
    apellido:      string;
    fechaRegistro: string;
    calificacion:  number;
    estado:        string;
    mobileToken:   string;
    direcciones:   Direccione[];
    roles:         Role[];
}

export interface Direccione {
    id:       number;
    numero:   number;
    calle:    string;
    esquina:  string;
    detalles: string;
    latitud:  number;
    longitud: number;
}

export interface Role {
    role: string;
}
// Generated by https://quicktype.io

export interface ResponseAddDireccion {
    id: number;
}

export interface LoginData {
    correo: string,
    contraseña: string
}

export interface NuevoCliente {
    nombre: string;
    apellido: string;
    correo : string;
    password: string;
    direccion: Direccion;
}

export interface Direccion {
    numero: string;
    calle: string;
    esquina: string;
    detalles: string;
    latitud: number;
    longitud: number;
}

export enum EstadoRestaurante {
    PENDIENTE,
    RECHAZADO,
    ABIERTO,
    CERRADO,
    BLOQUEADO,
    ELIMINADO
}

export interface Restaurante {
    correo: string;
    nombre: string;
    apellido: string;
    fechaRegistro: Date;
    calificacion: number;
    nombreRestaurante: string;
    rut: number;
    estado: EstadoRestaurante;
    telefono: number;
    descripcion: string;
    cuentaPaypal: string;
    imagen: string;
    direcciones: Direccion[];
    roles: string[];
}

export interface RestauranteComp {
    correo: string;
    nombre: string;
    descripcion: string;
    imagen: string;
    calificacion: number;
}

export const categorias = [
    {
        label: "Bebidas",
        value: "BEBIDAS"
    },
    {
        label: "Combos",
        value: "COMBOS"
    },
    {
        label: "Comida Arabe",
        value: "COMIDAARABE"
    },
    {
        label: "Hamburguesas",
        value: "HAMBURGUESAS"
    },
    {
        label: "Minutas",
        value: "MINUTAS"
    },
    {
        label: "Pastas",
        value: "PASTAS"
    },
    {
        label: "Pizzas",
        value: "PIZZAS"
    },
    {
        label: "Postres",
        value: "POSTRES"
    },
    {
        label: "Sushi",
        value: "SUSHI"
    },
    {
        label: "Otros",
        value: "OTROS"
    },
]

export enum CategoriaMenu {
    BEBIDAS,
    COMBOS,
    COMIDAARABE,
    HAMBURGUESAS,
    MINUTAS,
    PASTAS,
    PIZZAS,
    POSTRES,
    SUSHI,
    OTROS
}

export interface Producto {
    id: number;
    nombre: string;
    price: number;
    descripcion: string;
    visible: boolean;
    multiplicadorPromocion: number;
    imagen: string;
    categoria: CategoriaMenu;
    restaurante: Restaurante;
}

export enum MedioPago {
    PAYPAL,
    EFECTIVO,
    CUALQUIERA
}

export enum EstadoPedido {
    Pendiente,
    Rechazado,
    Confirmado,
    Devuelto,
    Finalizado,
    Cualquiera
}

export interface Pedido {
    id: number;
    direccion: string;
    total: number;
    medioPago: string;
    estadoPedido: string;
    fechaHoraEntrega: string;
    calificacionCliente: boolean;
    calificacionRestaurante: boolean;
    categoria: CategoriaMenu;
    nombreRestaurante: string;
    menus: MenuCompra[];
}

export interface MenuCompra {
    menu: string;
    imagen: string;
    precio: number;
    multiplicadorPromocion: number;
    precioPorCantidad: number;
    calculado: number;
    cantidad: number;
}

export interface PedidoArray {
    pedidos: Pedido[];
}

export const estadosPedido = [
    {
        label: "Pendiente",
        value: "Pendiente"
    },
    {
        label: "Rechazado",
        value: "Rechazado"
    },
    {
        label: "Confirmado",
        value: "Confirmado"
    },
    {
        label: "Devuelto",
        value: "Devuelto"
    },
    {
        label: "Finalizado",
        value: "Finalizado"
    }
]

export const mediosPago = [
    {
        label: "Paypal",
        value: "PAYPAL"
    },
    {
        label: "Efectivo",
        value: "EFECTIVO"
    }
]