# 🎨 Club La Nación Challenge – Frontend

📌 **Overview**

**Frontend** desarrollado en **Next.js + TypeScript + Tailwind CSS** para el challenge técnico de Club La Nación. Su objetivo es consumir los endpoints desarrollados en el backend y renderizar cards promocionales con un diseño responsivo y componentes reutilizables.

El proyecto sigue una arquitectura limpia, con separación de responsabilidades y una **componentización granular** para favorecer la reutilización y escalabilidad.

---

🚀 **Tech Stack**

- **Next.js** → Framework para React con soporte de SSR.
- **TypeScript** → Tipado estático para robustez y seguridad en tiempo de desarrollo.
- **Tailwind CSS** → Framework utility-first para estilos rápidos y consistentes.
- **Jest (configurado)** → Para futuros tests unitarios.
- **Docker** → Contenedor para entorno de producción.

---

📁 **Estructura del Proyecto**

```
/
├── app             # Routing & páginas principales (Next.js App Router)
├── components      # Componentes reutilizables: Card, Slider, Carousel, Beneficios, Promocodes
├── actions         # Lógica de acciones como fetch
├── services        # Conexión con el backend
├── interfaces      # Tipado global
├── public          # Archivos estáticos (ej: imágenes del slider)
├── .env            # Variables de entorno
├── Dockerfile      # Docker para producción
└── jest.config.ts  # Configuración de tests (Jest)
```

---

💡 **Componentización**

Se implementaron componentes reutilizables para mejorar la legibilidad y facilitar la extensión:

- `Card` → Renderiza cada cuenta.
- `Slider` → Componente para renderizar imágenes tipo banner.
- `Carousel` → Renderiza múltiples Cards con scroll horizontal.
- `Beneficios` → Módulo de componentes para Beneficios.
- `Promocodes` → Módulo de componentes para Promocodes.

> 📌 El slider utiliza imágenes hardcodeadas basadas en el sitio original de Club La Nación. Estas podrían reemplazarse fácilmente por datos dinámicos en el futuro.

---

🔐 **Estado global y contextos**

No se utilizó `Context API` en esta entrega ya que el estado a manejar era mínimo.  
En un escenario con autenticación, múltiples flujos de usuario, o caching de datos, se podría implementar Context o herramientas como SWR o React Query.

---

🧪 **Testing**

El proyecto incluye configuración base de **Jest**, pero no se alcanzó a implementar cobertura de tests por cuestiones de tiempo.

---

## 📄 Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
API_URL=http://localhost:3000/api
NEXT_ENV=development
```

> ⚠️ Asegurate de no tener espacios alrededor del `=`, y de ajustar `API_URL` según dónde esté desplegado el backend.

---

## ▶️ Cómo ejecutar localmente (sin Docker)

1️⃣ Instalá dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

2️⃣ Iniciá el servidor de desarrollo:

```bash
npm run dev
```

3️⃣ Para producción:

```bash
npm run build
npm start
```

---

## 🐳 Cómo ejecutar con Docker

    ⚠️ Importante:
    Este proyecto realiza llamadas fetch a la API del backend durante el proceso de build (next build).
    Por lo tanto, es necesario tener el backend corriendo y accesible en la URL definida en API_URL antes de ejecutar el build.

    En caso de usar Docker, se recomienda setear API_URL=http://host.docker.internal:3000/api dentro del contenedor para que pueda comunicarse con el backend corriendo en el host local.

_Debe tener docker instalado_

1️⃣ Construir la imagen:

```bash
docker build -t club-ln-frontend .
```

2️⃣ Correr el contenedor:

```bash
docker run -p 3001:3000 --env-file .env club-ln-frontend
Luego acceder a localhost:3001
```

---

🎯 **Objetivos Técnicos Alcanzados**

✅ SSR con Next.js  
✅ Componentes reutilizables y organizados  
✅ Estilos limpios con Tailwind CSS  
✅ Arquitectura modular con separación clara  
✅ Docker-ready  
✅ Preparado para testing con Jest

---
