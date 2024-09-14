import { createVuetify, type ThemeDefinition } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';

const lightTheme: ThemeDefinition = {
    colors: {
        background: '#FFFFFF',
        primary: '#1976D2',
    }
}

const darkTheme: ThemeDefinition = {
    colors: {
        background: '#121212',
        primary: '#BB86FC',
    },
}

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
            light: lightTheme,
            dark: darkTheme,
        },
    },
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        sets: {
        }
    }
});

export default vuetify;