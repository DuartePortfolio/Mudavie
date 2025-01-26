<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="footer">
        <div class="main-container">
            <div class="container mudavie">
                <div class="title">
                    <RouterLink to="/"><img class="logo" src="../assets/mudavie.png" alt="Logo" height="30px"></RouterLink>
                </div>
                <RouterLink to="/LandingPage" class="links">Landing Page</RouterLink>
                <RouterLink to="/" class="links">Página Inicial</RouterLink>
                <RouterLink to="/About" class="links">Sobre o Festival</RouterLink>
                <RouterLink to="/Submissions" class="links">Submissões</RouterLink>
                <RouterLink to="/Program" class="links">Programa</RouterLink>
                <RouterLink :to="`/Tickets/General`" class="links">Bilhetes</RouterLink>
            </div>

            <div class="container contactos">
                <div class="title">
                    <p>Contactos</p>
                </div>
                <p>
                    Festival MUDAVIE<br>
                    Open Mind Entertainment<br>
                    Teatro Nacional São João<br>
                    Praça da Batalha<br>
                    4000-102, Porto<br>
                    Portugal
                </p>
                <p>T +351 25 2842145 / 384 958345<br>(chamadas fixas)</p>
                <p>E-mail: mudavie@festival.pt</p>
            </div>

            <div class="container others">
                <p class="patrocinado-por">Patrocinado por</p>
                <img src="../assets/footer/pporto.png" alt="PPorto" height="40px">
                <p class="apoio-financeiro">Apoio Financeiro</p>
                <img src="../assets/footer/tsiwhub.png" alt="TSIWhub">
            </div>

            <div class="container socials">
                <p class="titulos">Siga-nos nas Redes Sociais</p>
                <div class="redes-sociais">
                    <a href="https://instagram.com">
                        <svg class="redes" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32" id="Instagram">
                            <path d="M28 1c1.654 0 3 1.346 3 3v24c0 1.654-1.346 3-3 3H4c-1.654 0-3-1.346-3-3V4c0-1.654 1.346-3 3-3h24m0-1H4C1.8 0 0 1.8 0 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4z" fill="#ffffff" class="color000000 svgShape"></path>
                            <path d="M22.869 6.841H9.131c-1.293 0-2.29.997-2.29 2.29v13.738c0 1.293.997 2.29 2.29 2.29h13.738c1.293 0 2.29-.997 2.29-2.29V9.131c0-1.293-.997-2.29-2.29-2.29zm-6.856 5.561c2.032 0 3.678 1.595 3.678 3.564 0 1.967-1.646 3.564-3.678 3.564-2.03 0-3.677-1.597-3.677-3.564.001-1.969 1.648-3.564 3.677-3.564zm6.856 9.895c0 .401-.172.572-.572.572H9.703c-.4 0-.572-.171-.572-.572v-8.014l1.427.31a5.339 5.339 0 0 0-.236 1.571c0 3.044 2.55 5.515 5.692 5.515 3.144 0 5.692-2.47 5.692-5.515 0-.547-.083-1.073-.236-1.571l1.4-.31v8.014zm0-10.304a.571.571 0 0 1-.572.572h-2.29a.571.571 0 0 1-.572-.572v-2.29c0-.317.256-.572.572-.572h2.29c.317 0 .572.256.572.572v2.29z" fill="#ffffff" class="color000000 svgShape"></path>
                        </svg>
                    </a>
                    
                    <a href="https://linkedin.com">
                        <svg class="redes" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32" id="Linked">
                            <path d="M28 1c1.654 0 3 1.346 3 3v24c0 1.654-1.346 3-3 3H4c-1.654 0-3-1.346-3-3V4c0-1.654 1.346-3 3-3h24m0-1H4C1.8 0 0 1.8 0 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4z" fill="#ffffff" class="color000000 svgShape"></path>
                            <path d="M24.299 23.921v-6.137c0-3.288-1.755-4.818-4.096-4.818-1.889 0-2.735 1.039-3.206 1.768v-1.517h-3.558c.047 1.005 0 10.704 0 10.704h3.558v-5.978c0-.319.023-.639.117-.867.257-.639.842-1.301 1.825-1.301 1.288 0 1.803.981 1.803 2.42v5.727l3.557-.001zM9.69 11.756c1.24 0 2.013-.823 2.013-1.85-.023-1.05-.773-1.849-1.99-1.849s-2.012.799-2.012 1.849c0 1.028.772 1.85 1.967 1.85h.022zm1.779 12.165V13.217H7.912v10.704h3.557z" fill="#ffffff" class="color000000 svgShape"></path>
                        </svg>
                    </a>

                    <a href="https://facebook.com">
                        <svg class="redes" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32" id="Facebook">
                            <path d="M28 1c1.654 0 3 1.346 3 3v24c0 1.654-1.346 3-3 3H4c-1.654 0-3-1.346-3-3V4c0-1.654 1.346-3 3-3h24m0-1H4C1.8 0 0 1.8 0 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4z" fill="#ffffff" class="color000000 svgShape"></path>
                            <path d="M13.597 25.261h3.827v-9.262h2.553l.338-3.191h-2.891l.004-1.598c0-.832.079-1.278 1.273-1.278h1.596V6.739h-2.554c-3.067 0-4.146 1.549-4.146 4.152v1.916h-1.912v3.192h1.912v9.262z" fill="#ffffff" class="color000000 svgShape"></path>
                        </svg>
                    </a>

                    <a href="https://whatsapp.com">
                        <svg class="redes" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32" id="Whatsapp">
                            <path d="M28 1c1.654 0 3 1.346 3 3v24c0 1.654-1.346 3-3 3H4c-1.654 0-3-1.346-3-3V4c0-1.654 1.346-3 3-3h24m0-1H4C1.8 0 0 1.8 0 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4z" fill="#ffffff" class="color000000 svgShape"></path>
                            <path d="M15.235 16.531c-.486-.45-1.026-1.081-1.26-1.639-.036-.072-.108-.252 0-.396.216-.288.252-.306.486-.576.162-.198.288-.378.234-.54l-.81-2.107c-.072-.144-.288-.162-.54-.18-.216 0-.45 0-.612.036-.36.126-1.098 1.099-1.188 1.801-.198 1.531 1.188 3.566 2.574 4.827 1.386 1.279 3.529 2.486 5.041 2.143.702-.162 1.603-.972 1.674-1.351.036-.162.018-.396-.018-.612-.018-.252-.072-.432-.216-.504l-1.836-.847c-.162-.09-.324-.018-.486.181-.198.27-.288.378-.522.666-.126.162-.216.27-.36.288-.162.036-.378-.054-.414-.054-.577-.199-1.243-.685-1.747-1.136zm-6.049 6.466l1.044-2.648a7.612 7.612 0 0 1-1.854-4.989c0-4.214 3.42-7.619 7.633-7.619a7.608 7.608 0 0 1 7.615 7.619c0 4.215-3.402 7.637-7.615 7.637a7.488 7.488 0 0 1-4.501-1.477l-2.322 1.477zm-1.278-2.593l-1.44 5.764 5.148-2.342a9.493 9.493 0 0 0 4.393 1.081c5.256 0 9.523-4.269 9.523-9.546 0-5.259-4.267-9.528-9.523-9.528-5.275 0-9.541 4.269-9.541 9.528 0 1.854.54 3.584 1.44 5.043z" fill="#ffffff" class="color000000 svgShape"></path>
                        </svg>
                    </a>

                    <a href="https://youtube.com">
                        <svg class="redes" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32" id="You">
                            <path d="M28 1c1.654 0 3 1.346 3 3v24c0 1.654-1.346 3-3 3H4c-1.654 0-3-1.346-3-3V4c0-1.654 1.346-3 3-3h24m0-1H4C1.8 0 0 1.8 0 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4z" fill="#ffffff" class="color000000 svgShape"></path>
                            <path d="M25.965 11.664s-.198-1.496-.808-2.155c-.774-.863-1.64-.868-2.038-.917-2.846-.221-7.115-.221-7.115-.221h-.01s-4.269 0-7.115.221c-.396.049-1.262.054-2.036.917-.609.659-.808 2.155-.808 2.155s-.203 1.755-.203 3.511v1.645c0 1.757.203 3.511.203 3.511s.198 1.495.808 2.153c.774.863 1.79.837 2.242.928 1.627.166 6.915.217 6.915.217s4.274-.008 7.12-.226c.397-.051 1.264-.056 2.038-.919.609-.657.808-2.153.808-2.153s.203-1.755.203-3.511v-1.645c0-1.756-.204-3.511-.204-3.511zM13.46 19.815v-7.629L19.818 16l-6.358 3.815z" fill="#ffffff" class="color000000 svgShape"></path>
                        </svg>
                    </a>

                    <a href="https://twitter.com">
                        <svg class="redes" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32" id="Twitter">
                            <path d="M28 1c1.654 0 3 1.346 3 3v24c0 1.654-1.346 3-3 3H4c-1.654 0-3-1.346-3-3V4c0-1.654 1.346-3 3-3h24m0-1H4C1.8 0 0 1.8 0 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4z" fill="#ffffff" class="color000000 svgShape"></path>
                            <path d="M18.328 8.56c-1.663.605-2.714 2.166-2.594 3.874l.04.659-.665-.081c-2.421-.309-4.537-1.358-6.333-3.121l-.879-.874-.226.646c-.479 1.439-.173 2.96.825 3.982.532.565.412.646-.505.309-.319-.107-.599-.188-.625-.148-.093.095.226 1.318.479 1.803.346.673 1.051 1.331 1.823 1.722l.652.309-.771.013c-.745 0-.771.013-.691.297.266.874 1.317 1.803 2.488 2.206l.825.282-.718.431a7.457 7.457 0 0 1-3.566.995c-.599.013-1.091.067-1.091.108 0 .134 1.624.887 2.568 1.184 2.834.874 6.2.497 8.728-.996 1.796-1.063 3.592-3.175 4.431-5.22.453-1.089.905-3.08.905-4.034 0-.619.04-.7.785-1.439.439-.43.851-.901.931-1.036.133-.256.119-.256-.559-.027-1.131.404-1.291.35-.731-.255.412-.43.905-1.211.905-1.439 0-.04-.199.027-.426.148-.239.135-.771.337-1.171.457l-.722.228-.652-.444c-.359-.242-.864-.511-1.131-.592-.679-.189-1.717-.162-2.329.053z" fill="#ffffff" class="color000000 svgShape"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <p class="copyright">©2024 Festival MUDAVIE</p>
    </div>
</template>

<style lang="css">
    :root {
        --background-color: #1E201E;
        --text-color: #FFFFFF;
        /*adicionar tipo de letra*/
    }

    .footer {
        height: 410px;
        font-size: 15px;
        color: var(--text-color);
        background-color: var(--background-color);
    }

    .main-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 35px 20px 0px 20px
    }

    .logo {
        padding-left: 10px;
    }

    .container {
        margin: 30px 10px 30px 10px;
        display: flex;
        flex-direction: column;
    }

    .links{
        color: white;
        text-decoration: none;
    }

    .links:hover {
        color: #CCC26E;
    }

    .title {
        height: 50px;
    }

    .copyright {
        margin-left: 10px;
    }

    .redes-sociais {
        width: 165px;
    }

    .redes {
        height: 45px;
        margin-right: 10px;
        margin-bottom: 8px
    }

    svg:hover > path  {
        fill: #CCC26E;
    }

    .copyright {
        margin-left: 35px;
    }
</style>