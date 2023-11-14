/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/tw-elements-react/dist/js/**/*.js",
    ],
    theme: {

        screens: {
            'mu': '280px',
            // => @media (min-width: 280px) { ... }

            'gv': '500px',
            // => @media (min-width: 500px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '800px',
            // => @media (min-width: 768px) { ... }800px

            'fl': '960px',
            // => @media (min-width: 960px) { ... }960px

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1285px',
            // => @media (min-width: 1280px) { ... }1285px

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }

            '3xl': '2560px',
            // => @media (min-width: 2560px) { ... }
        },



        extend: {
            backgroundImage: {
                'learn-coding': "url('/public/images/learn-coding.svg')",
                "whatsapp-icon": "url('/public/images/whatsapp-icon.png')",
                "email-icon": "url('/public/images/email_icon.png')",
                "signup-login": "url('/public/images/signup-login.png')",
            },
            lineHeight: {
                '60': '60px',
            },

            spacing: {
                '61': '61px',
                '3/2': '50vw',
                '97': '600px',
            },

            height: {
                '55': '216px',
                '95': '363.368px',
                '11/5': '500px',
                '10/2': '365px',
                '73': '280px',
                '77': '341px',
                '78': '300px',
                '99': '6060px',
                '63': '254.62px',
                '67': '266px',
                '81': '330px',
                '82': '340px',
                '83': '370px',
                '89': '520px',
                '101': '453px',
                '79': '337px',
                '75': '425px',
                '85': '445px',
                '87': '385px',
                '47': '187px',
                '111': '640px',
                '666': '70vh',
            },
            width: {
                '65': '248.5px',
                '95': '434.277px',
                '1': '2px',
                '56': '220px',
                '66': '280px',
                '43': '172px',
                '73': '300px',
                '103': '696px',
                '107': '960px',
                '111': '592px',
                '113': '1024px',
            
            },

            maxWidth: {
                'nst': '1536px',
                'swy': '1800px',
            },

            fontSize: {
                ry: '10px',
                st: '7px',
                mn: '0.780rem',
            },
            container: {

                center: true,
                padding: '32px',

                padding: {
                    DEFAULT: '16px',
                    sm: '32px',
                    lg: '64px',
                    xl: '80px',
                    '2xl': '96px',
                },
            },

        },
    },
    darkMode: "class",
    plugins: [require("tw-elements-react/dist/plugin.cjs")]
}

