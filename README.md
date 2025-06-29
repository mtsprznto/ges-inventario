# 🏪 Gestión de Inventario

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)

Sistema de gestión de inventario moderno y escalable desarrollado con React, Vite y Supabase. Esta aplicación permite a las empresas gestionar su inventario, usuarios y configuraciones de manera eficiente.

## ✨ Características

- 🔐 Autenticación de usuarios con Supabase Auth
- 🌓 Modo claro/oscuro
- 📱 Diseño responsivo
- 🚀 Optimizado para rendimiento con Vite
- 📊 Panel de administración intuitivo
- 🔄 Estado global con Zustand
- ⚡ React Query para manejo de datos
- 🎨 Estilizado con Styled Components

## 🚀 Tecnologías

- **Frontend**: React 19, React Router 7
- **Backend**: Supabase (Auth, Database)
- **Estilos**: Styled Components
- **Gestión de Estado**: Zustand, React Query
- **Formularios**: React Hook Form
- **Build Tool**: Vite
- **Iconos**: React Icons
- **Notificaciones**: SweetAlert2

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd ges-inventario
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   VITE_APP_SUPABASE_URL=tu_url_de_supabase
   VITE_APP_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── assets/            # Recursos estáticos (imágenes, etc.)
├── components/        # Componentes reutilizables
│   ├── atomos/        # Componentes atómicos
│   ├── moleculas/     # Componentes moleculares
│   └── organismos/    # Componentes complejos
├── context/           # Contextos de React
├── hooks/             # Custom Hooks
├── pages/             # Componentes de página
├── routers/           # Configuración de rutas
├── store/             # Estado global con Zustand
├── styles/            # Estilos globales y temas
├── supabase/          # Configuración y operaciones de Supabase
└── utils/             # Utilidades y datos estáticos
```

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la compilación de producción
- `npm run lint` - Ejecuta el linter

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## 📬 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o contactar al equipo de desarrollo.