import globals from "globals"
import pluginJs from "@eslint/js"
import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"

export default [
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            globals: globals.browser
        },
        plugins: {
            "react-hooks": pluginReactHooks
        },
        rules: {
            "indent": [
                "error",
                4
            ],
            "quotes": [
                "error",
                "double"
            ],
            "semi": [
                "error",
                "never"
            ],
            "comma-dangle": [
                "error",
                "never"
            ],
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/display-name": "off",
            "react-hooks/rules-of-hooks": "error"
        }
    }
]