import "./styles.css"

const splitIntoColumns = (images, count) => {
    const cols = Array.from({ length: count }, () => [])

    images.forEach((img, i) => {
        cols[i % count].push(img)
    })

    return cols
}

const App = () => {
    const columns = splitIntoColumns([
        "https://api.pcloud.com/getpubthumb?code=XZdaO65ZfPKyXYSh9uJ4Svy9RJXTEXjKWEB7&linkpassword=&size=1024x1024&crop=0&type=auto",
        "https://api.pcloud.com/getpubthumb?code=XZcaO65ZROUSO83nCFhY4v92XvqNvSocIDV7&linkpassword=&size=1024x1024&crop=0&type=auto"
    ], 4)

    return (
        <div className="wall">
            {columns.map((col, i) => {
                const loop = [...col, ...col]

                return (
                    <div key={i} className={`col col-${i}`}>
                        {loop.map((src, j) => (
                            <img key={j} src={src} loading="lazy" />
                        ))}
                    </div>
                )
            })}
        </div>
    )
}

export default App
