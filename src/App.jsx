import { useState } from "react"
import { useEffect } from "react"

import Grid from "@mui/system/Grid"

import useResponsive from "@hooks/useResponsive"

import { split } from "@utils/tools"
import { random } from "@utils/tools"
import { shuffle } from "@utils/tools"
import { loadImages } from "@utils/tools"

import { JSONBIN_API } from "@utils/consts"

import { config } from "@root/config"

import "@styles/app.css"

const App = () => {
    const { xs, sm, md, lg, xl } = useResponsive()

    const [loading, setLoading] = useState(true)
    const [images, setImages] = useState([])
    const [splittedImages, setSplittedImages] = useState([])

    const getData = async () => {
        try {
            const response = await fetch(`${JSONBIN_API.HOST}/${JSONBIN_API.PATHS.BIN}/${config.jsonbinBinId}`, {
                method: "GET",
                headers: {
                    "x-access-key": config.jsonbinApiKey
                }
            })
    
            const data = await response.json()
    
            const images = await loadImages(data.record.images)
    
            setImages(images)

            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (images.length === 0) return

        let columns = 4
        const shuffledImages = shuffle(images)

        if (md) columns = 3
        if (xs || sm) columns = 2

        setSplittedImages(split(shuffledImages, columns))
    }, [images, xs, sm, md, lg, xl])

    return (
        <main>
            {/* Backdrop + Spinner */}
            {(loading) &&
                <div className="backdrop"><div className="spinner"></div></div>
            }

            {/* Content */}
            {(!loading) &&
                <Grid container className="container">
                    {splittedImages.map((images, i) => {
                        const height = random(200, 500)

                        return (
                            <Grid key={`column-${i}`} size={{ xs: 6, md: 4, lg: 3 }} className={(i % 2 === 0) ? "up" : "down"}>
                                {[...images, ...images].map((src, i) => (
                                    <img key={`img-${i}`} src={src} style={{ height: `${height}px` }} onClick={() => open(src)} />
                                ))}
                            </Grid>
                        )
                    })}
                </Grid>
            }
        </main>
    )
}

export default App
