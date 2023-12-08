import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
    dark: true,
    colors: {
        background: '#030C04',
        surface: '#FFFFFF',
        primary: '#57841F',
        secondary: '#03DAC6',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}



export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'myCustomLightTheme',
            variations: {
                colors: ['primary', 'secondary'],
                lighten: 4,
                darken: 4,
            },
            themes: {
                myCustomLightTheme,
            },
        },
    })
    app.vueApp.use(vuetify)
})
