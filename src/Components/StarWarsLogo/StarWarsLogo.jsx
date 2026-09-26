import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js'
import './StarWarsLogo.css'

/* 
Logo de Star Wars en 3D girando sobre su eje.
Three.js dibuja en un <canvas>, así que usamos useRef para tener el div donde montarlo
y useEffect para crear la escena una sola vez (y limpiarla al salir de la pantalla).
*/
export default function StarWarsLogo() {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current

        /* 1. Escena, cámara y renderer */
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(45, 1, 1, 5000)
        camera.position.z = 600

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setPixelRatio(window.devicePixelRatio)
        container.appendChild(renderer.domElement)

        function resize() {
            const width = container.clientWidth
            const height = container.clientHeight
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderer.setSize(width, height)
        }
        resize()
        window.addEventListener('resize', resize)

        /* 2. Luces */
        scene.add(new THREE.AmbientLight(0xffffff, 1.5))
        const light = new THREE.DirectionalLight(0xffffff, 2.5)
        light.position.set(200, 300, 500)
        scene.add(light)

        /* 3. Logo: cada path del SVG se convierte en una forma y se extruye (se le da profundidad) */
        const pivot = new THREE.Group()   // este grupo es el que gira
        const logo = new THREE.Group()    // este tiene las piezas del logo
        scene.add(pivot)

        const material = new THREE.MeshStandardMaterial({
            color: 0xffe81f,
            metalness: 0.4,
            roughness: 0.35,
            side: THREE.DoubleSide
        })

        new SVGLoader().load('/star-wars-logo.svg', (data) => {
            data.paths.forEach((path) => {
                /* El SVG trae un rect negro de fondo: solo usamos los path amarillos */
                if (path.userData.node.tagName !== 'path') {
                    return
                }
                const shapes = SVGLoader.createShapes(path)
                const geometry = new THREE.ExtrudeGeometry(shapes, { depth: 25, bevelEnabled: false })
                logo.add(new THREE.Mesh(geometry, material))
            })

            /* Lo escalamos para que mida 600 unidades de ancho sin importar el tamaño del SVG.
               En SVG el eje Y va hacia abajo y en Three.js hacia arriba: por eso la Y es negativa */
            const size = new THREE.Box3().setFromObject(logo).getSize(new THREE.Vector3())
            const scale = 600 / size.x
            logo.scale.set(scale, -scale, scale)

            /* Lo centramos ANTES de meterlo en el grupo que gira, así gira sobre su propio centro */
            logo.updateMatrixWorld()
            const center = new THREE.Box3().setFromObject(logo).getCenter(new THREE.Vector3())
            logo.position.sub(center)
            pivot.add(logo)
        })

        /* 4. Animación: gira suave, salvo que el usuario pida reducir movimiento */
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        renderer.setAnimationLoop((time) => {
            if (!reduceMotion) {
                pivot.rotation.y = time * 0.0005
            }
            renderer.render(scene, camera)
        })

        /* 5. Limpieza al desmontar el componente */
        return () => {
            renderer.setAnimationLoop(null)
            window.removeEventListener('resize', resize)
            logo.children.forEach((mesh) => mesh.geometry.dispose())
            material.dispose()
            renderer.dispose()
            container.removeChild(renderer.domElement)
        }
    }, [])

    return <div className='star-wars-logo' ref={containerRef} aria-hidden='true'></div>
}
