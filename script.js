new Vue({
    el: '#app',
    data: {
        L: 3,
        M: 5,
        N: 7,
        hexes: [],
        w: 500,
        h: 500,
        l: 0,
        t: 0,
        Q: 0.5,
        log: [],
        WIDTH: 500,
        SIDE: 100
    },
    methods: {
        makeLayout() {
            if (this.L <= 30 && this.M <= 30 && this.N <= 30) {
                const hexes = [];
                
                const L = this.L - 1;
                const h = L + this.M;
                const w = L + this.N;
                const _w = this.SIDE * Math.sqrt(3);
                const _h = this.SIDE * 2;

                for (let row = 0; row < h; row++) {
                    for (let col = 0; col < w; col++) {
                        const id = hexes.length;

                        if (
                            (row < L && col >= L - row && col < w - (L + 1 - h + row)) || 
                            (row >= L && row < this.M) || 
                            (row >= this.M && col >= L - row && col < w - (L + 1 - h + row))
                        ) {
                            const x = col * _w + row * _w / 2;
                            const y = row * _h * 3 / 4 + _h / 2;

                            hexes.push({ id, row, col, x, y });
                        }
                    }
                }

                const bounds = this.getBounds(hexes)

                this.hexes = hexes
                this.h = bounds.h
                this.w = bounds.w
            } else {
                alert('L, M, N must be less 30')
            }
        },

        onHexClick(id) {
            const hexes = [ ...this.hexes ]
            const hex = hexes.find( el => el.id == id );

            hex.domain = hex.domain ? null : this.getColor(hex, hexes);

            this.hexes = hexes;
        },

        hexTransform(x, y) {
            return `translate(${x}, ${y}) rotate(-30)`
        },

        getBounds(array) {
            let l = Infinity,
                t = Infinity,
                w = -Infinity,
                h = -Infinity;


            array.forEach( hex => {
                if (hex.x > w) w = hex.x
                if (hex.x < l) l = hex.x
                if (hex.y > h) h = hex.y
                if (hex.y < t) t = hex.y
            });
            w = w + this.SIDE * Math.sqrt(3) / 2;
            h = h + this.SIDE;

            return {w, h, l, t}
        },

        getColor(hex, hexes) {
            const domains = {};
            let max = 0;
            let color = ''
            
            hexes.map( el => {
                const domain = el.domain;

                if (
                    domain &&
                    (
                        el.row == hex.row - 1 && el.col == hex.col ||
                        el.row == hex.row - 1 && el.col == hex.col + 1 ||
                        el.col == hex.col + 1 && el.row == hex.row ||
                        el.row == hex.row + 1 && el.col == hex.col ||
                        el.row == hex.row + 1 && el.col == hex.col - 1 ||
                        el.col == hex.col - 1 && el.row == hex.row
                    )
                ) {
                    domains[domain] = domains[domain] ? domains[domain] + 1 : 1
                }
            })
            
            for(key in domains) {
                if (domains[key] > max) {
                    color = key
                    max = domains[key]
                }
            }

            return color || this.getRandomColor()
        },

        getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            
            return color
        },

        autoFill() {
            const hexes = [ ...this.hexes ]
            const log = [ ...this.log ]

            hexes.map( el => { if (el.domain) el.domain = null })
            hexes.map( hex => {
                hex.domain = Math.random() <= this.Q ? this.getColor(hex, hexes) : null;
            })

                        
            this.hexes = hexes

            const active = hexes.filter( el => el.domain )

            log.push({
                Q: this.Q,
                L: this.L,
                N: this.N,
                M: this.M,
                domains: this.domainsCount,
                single: this.domainsSingleCount,
                hexes: hexes.length,
                active: active.length
            })

            if ( log.length > 10 ) log.shift()

            this.log = log
        }
    },

    computed: {
        viewBox() {
            return `${this.l} ${this.t} ${this.w} ${this.h}`
        },
        HEIGHT() {
            return this.h * 100 / this.WIDTH 
        },
        domains() {
            const domains = []

            this.hexes.map( hex => {
                if (hex.domain && !domains.includes(hex.domain)) domains.push(hex.domain)
            })

            return domains
        },
        domainsCount() {
            return this.domains.length
        },
        domainsSingleCount() {
            let singles = this.domains

            this.domains.map( domain => {
                const domainHexes = this.hexes.filter( hex => hex.domain == domain)

                domainHexes.map( el => {
                    this.hexes.map( hex => {
                        if (
                            hex.domain &&
                            hex.domain !== el.domain &&
                            (
                                el.row == hex.row - 1 && el.col == hex.col ||
                                el.row == hex.row - 1 && el.col == hex.col + 1 ||
                                el.col == hex.col + 1 && el.row == hex.row ||
                                el.row == hex.row + 1 && el.col == hex.col ||
                                el.row == hex.row + 1 && el.col == hex.col - 1 ||
                                el.col == hex.col - 1 && el.row == hex.row
                            )
                        ) {
                            singles = singles.filter( s => s !== el.domain)
                        }
                    })                    
                })
            })

            return singles.length
        }
    }
})