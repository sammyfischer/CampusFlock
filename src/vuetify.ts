import { createVuetify, type ThemeDefinition } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';

const lightTheme: ThemeDefinition = {
    colors: {
        primary: '#EF6C00',
        secondary: '#03DAC6',
        background: '#FFFFFF',
        surface: '#FFFFFF',
        error: '#B00020',
        onPrimary: '#FFFFFF',
        onSecondary: '#000000',
        onBackground: '#000000',
        onSurface: '#000000',
        onError: '#FFFFFF',
    }
}

const darkTheme: ThemeDefinition = {
    colors: {
        primary: '#FF9800',
        secondary: '#03DAC6',
        background: '#121212',
        surface: '#242424',
        error: '#CF6679',
        onPrimary: '#000000',
        onSecondary: '#000000',
        onBackground: '#FFFFFF',
        onSurface: '#FFFFFF',
        onError: '#000000',
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