<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>The GAME</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
    <script src="script.js" defer></script>
  </head>
  <body>
    <header>
        <nav>
            <div class="nav-wrapper">
                <div class="container">
                    <a href="#" class="brand-logo">Test</a>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main id="app">
        <div class="container">
            <section class="section">
                <div class="input-field inline">
                    <input v-model.number="L" id="L" max="30" min="1" :class="{ invalid: L > 30 || L < 1 }" type="number" placeholder="Number">
                    <label for="L" class="active">L</label>
                    <span class="helper-text" >От 1 до 30</span>
                </div>
                <div class="input-field inline">
                    <input v-model.number="M" id="M" max="30" min="1" :class="{ invalid: M > 30 || M < 1 }" type="number" placeholder="Number">
                    <label for="M" class="active">M</label>
                    <span class="helper-text" >От 1 до 30</span>
                </div>
                <div class="input-field inline">
                    <input v-model.number="N" id="N" max="30" min="1" :class="{ invalid: N > 30 || N < 1 }" type="number" placeholder="Number">
                    <label for="N" class="active">N</label>
                    <span class="helper-text" >От 1 до 30</span>
                </div>
                
                <button @click="makeLayout" class="btn waves-effect waves-light" :disabled="L > 30 || L < 1 || M > 30 || M < 1 || N > 30 || N < 1">Создать</button>
            </section>

            
            <div v-if="hexes.length">
                <section class="section">
                    <h4>Всего доменов {{ domainsCount }}</h4>
                    <section class="section">
                        Вероятность 
                        <div class="input-field inline">
                            <input v-model.number="Q" id="Q" min="0.01" max="0.99" step="0.01" type="number" placeholder="Number" :class="{ invalid: Q > 0.99 || Q < 0.01 }">
                            <span class="helper-text" >От 0.01 до 0.99</span>
                        </div>
    
                        <button :disabled="Q > 0.99 || Q < 0.01" @click="autoFill" class="btn waves-effect waves-light">АВТО</button>
                    </section>
                    <div>
                        <svg :view-box.camel="viewBox" :width='WIDTH' :height='HEIGHT' >
                            <g v-for="hex in hexes" class="hex" :key="hex.id" :transform="hexTransform(hex.x,hex.y)" @click="onHexClick(hex.id)">
                                <polygon points="100,0 50,-87 -50,-87 -100,-0 -50,87 50,87" :style="{ fill: hex.domain }" />
                                <text dy="0.4em" transform="rotate(30)">{{ hex.domain ? 1 : null }}</text>
                            </g>
                        </svg>
                    </div>
                </section>
                
                <section class="section" v-if="log.length">
                    <table class="striped responsive-table">
                        <thead>
                            <tr>
                                <th rowspan="2">Вероятность</th>
                                <th colspan="2">Количество доменов в решётке</th>
                                <th rowspan="2">Количество ячеек в решётке (L;N;M), из них имеющих значение 1</th>
                            </tr>
                            <tr>
                                <th>всего</th>
                                <th>Из них неодносвязных</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="row in log">
                                <td>{{ row.Q }}</td>
                                <td>{{ row.domains }}</td>
                                <td>{{ row.single }}</td>
                                <td>{{ row.hexes }} ({{ row.L }};{{ row.N }}; {{ row.M }}), {{ row.active }}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    </main>

    <footer class="page-footer">
        <div class="footer-copyright">
            <div class="container">
                &copy; 2018
            </div>
        </div>
    </footer>
  </body>
</html>