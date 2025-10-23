# Proyecto React (Parte 7) - Pizzeria Mamma Mia! / Juan Eduardo Castellón (G95)

# NOTA: Recordar que al actualizar la página, el token pasa automáticamente a "true" como fue solicitado en el punto 2 del Hito.

# Características
Lista de pizzas con imágenes, descripción y precios.
Carrito de compras dinámico con actualización de cantidades y total.
Login y registro de usuarios con control de sesión (token).
Rutas protegidas: /profile solo accesible si el usuario está logueado.
Logout funcional que redirige automáticamente al home (/).
Diseño responsive usando Bootstrap y componentes reutilizables.
Navegación fluida gracias a React Router DOM.

# Instalación
Clonar el repositorio:
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO
Instalar dependencias:
npm install
Ejecutar la aplicación en modo desarrollo:
npm start
Abrir en el navegador:
http://localhost:3000

# Estructura de carpetas
src/
├─ assets/pages/       # Páginas de la app (Home, Cart, Profile, etc.)
├─ components/         # Componentes reutilizables (Navbar, Footer, CartContext, UserContext)
├─ App.jsx             # Componente principal y rutas
├─ index.js            # Entrada de la aplicación

# Deploy
Se puede desplegar esta aplicación fácilmente usando Vercel:
npm install -g vercel
vercel
