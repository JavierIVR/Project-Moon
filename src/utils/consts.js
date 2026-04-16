import { config } from "@root/config"

/**
 * Objeto con información de conexión al servicio JSONBin.
 */
export const JSONBIN_API = {
    HOST: config.jsonbinHost,
    PATHS: {
        BIN: "b"
    }
}
