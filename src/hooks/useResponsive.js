import { useTheme } from "@mui/system"
import { useMediaQuery } from "@mui/system"

/**
 * Expone los breakpoints de MUI para observar la responsividad.
 */
const useResponsive = () => {
    const theme = useTheme()

    const breakpoints = {
        xs: useMediaQuery(theme.breakpoints.only("xs")),
        sm: useMediaQuery(theme.breakpoints.only("sm")),
        md: useMediaQuery(theme.breakpoints.only("md")),
        lg: useMediaQuery(theme.breakpoints.only("lg")),
        xl: useMediaQuery(theme.breakpoints.only("xl"))
    }

    return breakpoints
}

export default useResponsive
