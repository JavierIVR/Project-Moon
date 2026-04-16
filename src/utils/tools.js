/**
 * Genera un número aleatorio entre los rangos establecidos.
 * 
 * @param {number} min Valor mínimo a generar. (Incluido)
 * @param {number} max Valor máximo a generar. (Incluido)
 */
export const random = (min, max) => Math.floor((Math.random() * (max - min + 1))) + min

/**
 * Divide los valores de un array en columnas.
 * 
 * @param {object} images Array de imágenes a dividir.
 * @param {number} columns Número de columnas a dividir.
 */
export const split = (images, columns) => {
    const cols = Array.from({ length: columns }, () => [])

    images.forEach((img, i) => {
        cols[i % columns].push(img)
    })

    return cols
}

/**
 * Mezcla un array de manera aleatoria.
 * 
 * @param {object} images Array de imágenes a mezclar.
 */
export const shuffle = (images) => {
    const copy = [...images]

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const aux = copy[i]
        copy[i] = copy[j]
        copy[j] = aux
    }

    return copy
}

/**
 * Carga todas las imágenes.
 * 
 * @param {object} urls Array de urls con las imágenes.
 */
export const loadImages = (urls) => {
    const promises = urls.map((url) => new Promise((resolve) => {
        const img = new Image

        img.src = url

        img.onload = () => resolve(url)
        img.onerror = () => resolve(url)
    }))

    return Promise.all(promises)
}
