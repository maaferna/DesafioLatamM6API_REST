# Aplicación de Chat con Vue y API REST

Este proyecto es una mini aplicación de chat entre dos usuarios desconocidos, creada con **Vue 3**, **Bootstrap** y **Axios** para consumir datos de la API **Random User**. La aplicación permite que dos personas interactúen en un chat simulado, donde cada usuario puede enviar mensajes y ver la conversación en tiempo real.

## Características

- Consumo de datos de la API [Random User](https://randomuser.me/) para obtener dos usuarios aleatorios al cargar la aplicación.
- Uso de **Axios** para realizar solicitudes HTTP a la API.
- Renderizado de un componente de chat que muestra los mensajes enviados por cada usuario.
- Cada usuario puede escribir un mensaje y enviarlo.
- El componente de chat muestra el nombre del remitente y el contenido del mensaje.
- Uso de Bootstrap para un diseño responsive y estilizado.
- La conversación se desplaza automáticamente hacia abajo cuando se añaden nuevos mensajes.
- Los mensajes tienen un color de fondo personalizado según el remitente.

## Tecnologías Utilizadas

- **Vue 3**: Framework progresivo de JavaScript para construir interfaces de usuario.
- **Vue Router**: Para gestionar la navegación entre vistas.
- **Bootstrap 5**: Framework CSS para diseño responsivo.
- **Axios**: Cliente HTTP para realizar solicitudes a la API.
- **Random User API**: Para obtener los datos de los usuarios de manera aleatoria.

## Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/maaferna/DesafioLatamM6API_REST.git
```

Navega al directorio del proyecto:

```bash
cd chat_app_api_rest
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```
Abre tu navegador y ve a http://localhost:5173 para ver la aplicación en funcionamiento.


## Estructura del Proyecto

chat_app_api_rest/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── UserComponent.vue
│   │   ├── ChatComponent.vue
│   │   └── ...
│   ├── views/
│   │   ├── HomeView.vue
│   │   └── ...
│   ├── App.vue
│   ├── main.js
│   └── router/
│       └── index.js
│
├── package.json
└── README.md

## Uso

Al iniciar la aplicación, se cargarán dos usuarios aleatorios obtenidos de la API Random User.

Cada usuario puede escribir un mensaje en su campo de entrada y hacer clic en "Enviar" para que el mensaje se muestre en el chat.

El componente de chat mostrará todos los mensajes enviados, diferenciándolos por el color de fondo según el remitente.

Si hay muchos mensajes, el chat se desplazará automáticamente hacia abajo para mostrar los últimos mensajes.


## Personalización
Para modificar el diseño, puedes editar los estilos en los archivos .vue de los componentes.
Puedes ajustar la lógica de obtención de usuarios en el método fetchUsers dentro del archivo App.vue.
Para cambiar los colores de los mensajes, ajusta el valor de color que se pasa a cada UserComponent.

## Requisitos
Node.js v14 o superior
npm v6 o superior

