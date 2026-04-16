const {
    VITE_JSONBIN_HOST,
    VITE_JSONBIN_BIN_ID,
    VITE_JSONBIN_API_KEY
} = import.meta.env 

export const config = {
    jsonbinHost: VITE_JSONBIN_HOST,
    jsonbinBinId: VITE_JSONBIN_BIN_ID,
    jsonbinApiKey: VITE_JSONBIN_API_KEY
}
