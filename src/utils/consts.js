import { config } from "@root/config"

/**
 * Objeto con información de conexión al servicio JSONBin.
 */
export const API_JSONBIN = {
    HOST: config.jsonbinHost,
    PATHS: {
        BIN: "b"
    }
}
