# Galactic Command

Trabajo práctico final de Frontend (UTN - Programación Web Inicial).

Aplicación web ambientada en el universo de Star Wars donde elegís un bando, entrás
a un centro de comando y resolvés misiones eligiendo qué unidad enviar y qué decisión tomar.

## Cómo funciona

1. Pantalla de inicio con el logo y un botón para comenzar.
2. Ingresás tu nombre de comandante y elegís tu bando: Imperio Galáctico o Alianza Rebelde.
3. Centro de comando: ves tus recursos y las misiones disponibles de tu bando.
4. Entrás a una misión, elegís la unidad a enviar y tomás una decisión. Cada decisión
   tiene un cierre distinto.
5. Mapa galáctico: ves los planetas, quién los controla y el nivel de control de cada bando.

El contenido (misiones, tropas, recursos) cambia según el bando que elijas.

## Tecnologías

- **React 19**
- **Vite** como entorno de desarrollo y build
- **react-router** para el ruteo y los parámetros de URL
- **Context API** para el estado de la partida (comandante y facción)
- **Three.js** para el logo en 3D que gira en la pantalla de inicio
- **lucide-react** para los íconos
- **CSS puro**, un archivo por componente, con variables CSS para la paleta

## Estructura

```
src/
├── App.jsx            rutas de la aplicación
├── main.jsx           punto de entrada
├── global.css         variables de color, tipografías y estilos compartidos
├── Screens/           una carpeta por pantalla
├── Components/        componentes reutilizables, cada uno con su css
├── Context/           FactionContext: estado de la partida
├── hooks/             useFaction: acceso al contexto
└── data/              misiones, tropas, planetas y facciones
```

## Correrlo localmente

```bash
npm install
npm run dev
```

## Dificultades

- **El logo 3D.** Cargar un SVG y darle profundidad con Three.js fue lo más difícil.
  Al principio giraba descentrado porque calculaba el centro cuando el logo ya estaba
  dentro del grupo que rota, así que la medición salía mal. Lo resolví centrándolo antes
  de meterlo en ese grupo.
- **La música.** Los navegadores bloquean el audio hasta que el usuario interactúa con la
  página, así que no alcanza con pedirle que suene al cargar. Arranca con el primer click.
  Además el archivo tenía medio segundo de silencio al principio y se notaba la demora.
- **El responsive de 320px.** El sidebar lateral no entra en pantallas chicas, así que
  abajo de 800px pasa a ser una barra horizontal arriba del contenido.
- **Mantener el logo quieto entre pasos.** Al principio el logo se volvía a cargar en cada
  paso del inicio. Moviéndolo al layout que envuelve esas pantallas, deja de recargarse.

## Créditos

El logo, los íconos de las facciones y las imágenes de los planetas pertenecen a Lucasfilm.
Se usan únicamente con fines educativos, sin ningún fin comercial.
