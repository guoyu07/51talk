/*
 <a href="http://kjur.github.io/jsrsasign/license/">MIT License</a>
 */
var JSEncryptExports = {
};
(function (h) {
    function e(a, c, b) {
        null != a && ('number' == typeof a ? this.fromNumber(a, c, b)  : null == c && 'string' != typeof a ? this.fromString(a, 256)  : this.fromString(a, c))
    }
    function f() {
        return new e(null)
    }
    function l(a, c, b, d, g, k) {
        for (; 0 <= --k; ) {
            var m = c * this[a++] + b[d] + g;
            g = Math.floor(m / 67108864);
            b[d++] = m & 67108863
        }
        return g
    }
    function p(a, c, b, d, g, k) {
        var m = c & 32767;
        for (c >>= 15; 0 <= --k; ) {
            var q = this[a] & 32767,
                e = this[a++] >> 15,
                f = c * q + e * m,
                q = m * q + ((f & 32767) << 15) + b[d] + (g & 1073741823);
            g = (q >>> 30) + (f >>> 15) + c * e + (g >>> 30);
            b[d++] = q & 1073741823
        }
        return g
    }
    function n(a, c, b, d, g, k) {
        var m = c & 16383;
        for (c >>= 14; 0 <= --k; ) {
            var q = this[a] & 16383,
                e = this[a++] >> 14,
                f = c * q + e * m,
                q = m * q + ((f & 16383) << 14) + b[d] + g;
            g = (q >> 28) + (f >> 14) + c * e;
            b[d++] = q & 268435455
        }
        return g
    }
    function r(a, c) {
        var b = J[a.charCodeAt(c)];
        return null == b ? - 1 : b
    }
    function B(a) {
        var c = f();
        c.fromInt(a);
        return c
    }
    function F(a) {
        var c = 1,
            b;
        0 != (b = a >>> 16) && (a = b, c += 16);
        0 != (b = a >> 8) && (a = b, c += 8);
        0 != (b = a >> 4) && (a = b, c += 4);
        0 != (b = a >> 2) && (a = b, c += 2);
        0 != a >> 1 && (c += 1);
        return c
    }
    function C(a) {
        this.m = a
    }
    function D(a) {
        this.m = a;
        this.mp = a.invDigit();
        this.mpl = this.mp & 32767;
        this.mph = this.mp >> 15;
        this.um = (1 << a.DB - 15) - 1;
        this.mt2 = 2 * a.t
    }
    function W(a, c) {
        return a & c
    }
    function K(a, c) {
        return a | c
    }
    function S(a, c) {
        return a ^ c
    }
    function T(a, c) {
        return a & ~c
    }
    function H() {
    }
    function U(a) {
        return a
    }
    function G(a) {
        this.r2 = f();
        this.q3 = f();
        e.ONE.dlShiftTo(2 * a.t, this.r2);
        this.mu = this.r2.divide(a);
        this.m = a
    }
    function O() {
        this.j = this.i = 0;
        this.S = [
        ]
    }
    function L() {
    }
    function w(a, c) {
        return new e(a, c)
    }
    function u() {
        this.n = null;
        this.e = 0;
        this.coeff = this.dmq1 = this.dmp1 = this.q = this.p = this.d = null
    }
    function P(a) {
        var c,
            b,
            d = '';
        for (c = 0; c + 3 <= a.length; c += 3) b = parseInt(a.substring(c, c + 3), 16),
            d += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(b >> 6) + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(b & 63);
        c + 1 == a.length ? (b = parseInt(a.substring(c, c + 1), 16), d += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(b << 2))  : c + 2 == a.length && (b = parseInt(a.substring(c, c + 2), 16), d += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(b >>
        2) + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt((b & 3) << 4));
        for (; 0 < (d.length & 3); ) d += '=';
        return d
    }
    function X(a) {
        var c = '',
            b,
            d = 0,
            g;
        for (b = 0; b < a.length && '=' != a.charAt(b); ++b) v = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.indexOf(a.charAt(b)),
        0 > v || (0 == d ? (c += '0123456789abcdefghijklmnopqrstuvwxyz'.charAt(v >> 2), g = v & 3, d = 1)  : 1 == d ? (c += '0123456789abcdefghijklmnopqrstuvwxyz'.charAt(g << 2 | v >> 4), g = v & 15, d = 2)  : 2 == d ? (c += '0123456789abcdefghijklmnopqrstuvwxyz'.charAt(g), c += '0123456789abcdefghijklmnopqrstuvwxyz'.charAt(v >> 2), g = v & 3, d = 3)  : (c += '0123456789abcdefghijklmnopqrstuvwxyz'.charAt(g << 2 | v >> 4), c += '0123456789abcdefghijklmnopqrstuvwxyz'.charAt(v & 15), d = 0));
        1 == d && (c += '0123456789abcdefghijklmnopqrstuvwxyz'.charAt(g << 2));
        return c
    }
    var x;
    'Microsoft Internet Explorer' == navigator.appName ? (e.prototype.am = p, x = 30)  : 'Netscape' != navigator.appName ? (e.prototype.am = l, x = 26)  : (e.prototype.am = n, x = 28);
    e.prototype.DB = x;
    e.prototype.DM = (1 << x) - 1;
    e.prototype.DV = 1 << x;
    e.prototype.FV = Math.pow(2, 52);
    e.prototype.F1 = 52 - x;
    e.prototype.F2 = 2 * x - 52;
    var J = [
        ],
        y;
    x = 48;
    for (y = 0; 9 >= y; ++y) J[x++] = y;
    x = 97;
    for (y = 10; 36 > y; ++y) J[x++] = y;
    x = 65;
    for (y = 10; 36 > y; ++y) J[x++] = y;
    C.prototype.convert = function (a) {
        return 0 > a.s || 0 <= a.compareTo(this.m) ? a.mod(this.m)  : a
    };
    C.prototype.revert = function (a) {
        return a
    };
    C.prototype.reduce = function (a) {
        a.divRemTo(this.m, null, a)
    };
    C.prototype.mulTo = function (a, c, b) {
        a.multiplyTo(c, b);
        this.reduce(b)
    };
    C.prototype.sqrTo = function (a, c) {
        a.squareTo(c);
        this.reduce(c)
    };
    D.prototype.convert = function (a) {
        var c = f();
        a.abs().dlShiftTo(this.m.t, c);
        c.divRemTo(this.m, null, c);
        0 > a.s && 0 < c.compareTo(e.ZERO) && this.m.subTo(c, c);
        return c
    };
    D.prototype.revert = function (a) {
        var c = f();
        a.copyTo(c);
        this.reduce(c);
        return c
    };
    D.prototype.reduce = function (a) {
        for (; a.t <= this.mt2; ) a[a.t++] = 0;
        for (var c = 0; c < this.m.t; ++c) {
            var b = a[c] & 32767,
                d = b * this.mpl + ((b * this.mph + (a[c] >> 15) * this.mpl & this.um) << 15) & a.DM,
                b = c + this.m.t;
            for (a[b] += this.m.am(0, d, a, c, 0, this.m.t); a[b] >= a.DV; ) a[b] -= a.DV,
                a[++b]++
        }
        a.clamp();
        a.drShiftTo(this.m.t, a);
        0 <= a.compareTo(this.m) && a.subTo(this.m, a)
    };
    D.prototype.mulTo = function (a, c, b) {
        a.multiplyTo(c, b);
        this.reduce(b)
    };
    D.prototype.sqrTo = function (a, c) {
        a.squareTo(c);
        this.reduce(c)
    };
    e.prototype.copyTo = function (a) {
        for (var c = this.t - 1; 0 <= c; --c) a[c] = this[c];
        a.t = this.t;
        a.s = this.s
    };
    e.prototype.fromInt = function (a) {
        this.t = 1;
        this.s = 0 > a ? - 1 : 0;
        0 < a ? this[0] = a : - 1 > a ? this[0] = a + this.DV : this.t = 0
    };
    e.prototype.fromString = function (a, c) {
        var b;
        if (16 == c) b = 4;
        else if (8 == c) b = 3;
        else if (256 == c) b = 8;
        else if (2 == c) b = 1;
        else if (32 == c) b = 5;
        else if (4 == c) b = 2;
        else {
            this.fromRadix(a, c);
            return
        }
        this.s = this.t = 0;
        for (var d = a.length, g = !1, k = 0; 0 <= --d; ) {
            var m = 8 == b ? a[d] & 255 : r(a, d);
            0 > m ? '-' == a.charAt(d) && (g = !0)  : (g = !1, 0 == k ? this[this.t++] = m : k + b > this.DB ? (this[this.t - 1] |= (m & (1 << this.DB - k) - 1) << k, this[this.t++] = m >> this.DB - k)  : this[this.t - 1] |= m << k, k += b, k >= this.DB && (k -= this.DB))
        }
        8 == b && 0 != (a[0] & 128) && (this.s = - 1, 0 < k && (this[this.t - 1] |= (1 << this.DB - k) - 1 << k));
        this.clamp();
        g && e.ZERO.subTo(this, this)
    };
    e.prototype.clamp = function () {
        for (var a = this.s & this.DM; 0 < this.t && this[this.t - 1] == a; ) --this.t
    };
    e.prototype.dlShiftTo = function (a, c) {
        var b;
        for (b = this.t - 1; 0 <= b; --b) c[b + a] = this[b];
        for (b = a - 1; 0 <= b; --b) c[b] = 0;
        c.t = this.t + a;
        c.s = this.s
    };
    e.prototype.drShiftTo = function (a, c) {
        for (var b = a; b < this.t; ++b) c[b - a] = this[b];
        c.t = Math.max(this.t - a, 0);
        c.s = this.s
    };
    e.prototype.lShiftTo = function (a, c) {
        var b = a % this.DB,
            d = this.DB - b,
            g = (1 << d) - 1,
            k = Math.floor(a / this.DB),
            m = this.s << b & this.DM,
            q;
        for (q = this.t - 1; 0 <= q; --q) c[q + k + 1] = this[q] >> d | m,
            m = (this[q] & g) << b;
        for (q = k - 1; 0 <= q; --q) c[q] = 0;
        c[k] = m;
        c.t = this.t + k + 1;
        c.s = this.s;
        c.clamp()
    };
    e.prototype.rShiftTo = function (a, c) {
        c.s = this.s;
        var b = Math.floor(a / this.DB);
        if (b >= this.t) c.t = 0;
        else {
            var d = a % this.DB,
                g = this.DB - d,
                k = (1 << d) - 1;
            c[0] = this[b] >> d;
            for (var m = b + 1; m < this.t; ++m) c[m - b - 1] |= (this[m] & k) << g,
                c[m - b] = this[m] >> d;
            0 < d && (c[this.t - b - 1] |= (this.s & k) << g);
            c.t = this.t - b;
            c.clamp()
        }
    };
    e.prototype.subTo = function (a, c) {
        for (var b = 0, d = 0, g = Math.min(a.t, this.t); b < g; ) d += this[b] - a[b],
            c[b++] = d & this.DM,
            d >>= this.DB;
        if (a.t < this.t) {
            for (d -= a.s; b < this.t; ) d += this[b],
                c[b++] = d & this.DM,
                d >>= this.DB;
            d += this.s
        } else {
            for (d += this.s; b < a.t; ) d -= a[b],
                c[b++] = d & this.DM,
                d >>= this.DB;
            d -= a.s
        }
        c.s = 0 > d ? - 1 : 0;
        - 1 > d ? c[b++] = this.DV + d : 0 < d && (c[b++] = d);
        c.t = b;
        c.clamp()
    };
    e.prototype.multiplyTo = function (a, c) {
        var b = this.abs(),
            d = a.abs(),
            g = b.t;
        for (c.t = g + d.t; 0 <= --g; ) c[g] = 0;
        for (g = 0; g < d.t; ++g) c[g + b.t] = b.am(0, d[g], c, g, 0, b.t);
        c.s = 0;
        c.clamp();
        this.s != a.s && e.ZERO.subTo(c, c)
    };
    e.prototype.squareTo = function (a) {
        for (var c = this.abs(), b = a.t = 2 * c.t; 0 <= --b; ) a[b] = 0;
        for (b = 0; b < c.t - 1; ++b) {
            var d = c.am(b, c[b], a, 2 * b, 0, 1);
            (a[b + c.t] += c.am(b + 1, 2 * c[b], a, 2 * b + 1, d, c.t - b - 1)) >= c.DV && (a[b + c.t] -= c.DV, a[b + c.t +
            1] = 1)
        }
        0 < a.t && (a[a.t - 1] += c.am(b, c[b], a, 2 * b, 0, 1));
        a.s = 0;
        a.clamp()
    };
    e.prototype.divRemTo = function (a, c, b) {
        var d = a.abs();
        if (!(0 >= d.t)) {
            var g = this.abs();
            if (g.t < d.t) null != c && c.fromInt(0),
            null != b && this.copyTo(b);
            else {
                null == b && (b = f());
                var k = f(),
                    m = this.s;
                a = a.s;
                var q = this.DB - F(d[d.t - 1]);
                0 < q ? (d.lShiftTo(q, k), g.lShiftTo(q, b))  : (d.copyTo(k), g.copyTo(b));
                d = k.t;
                g = k[d - 1];
                if (0 != g) {
                    var l = g * (1 << this.F1) + (1 < d ? k[d - 2] >> this.F2 : 0),
                        h = this.FV / l,
                        l = (1 << this.F1) / l,
                        p = 1 << this.F2,
                        n = b.t,
                        r = n - d,
                        t = null == c ? f()  : c;
                    k.dlShiftTo(r, t);
                    0 <= b.compareTo(t) && (b[b.t++] = 1, b.subTo(t, b));
                    e.ONE.dlShiftTo(d, t);
                    for (t.subTo(k, k); k.t < d; ) k[k.t++] = 0;
                    for (; 0 <= --r; ) {
                        var u = b[--n] == g ? this.DM : Math.floor(b[n] * h + (b[n - 1] + p) * l);
                        if ((b[n] += k.am(0, u, b, r, 0, d)) < u) for (k.dlShiftTo(r, t), b.subTo(t, b); b[n] < --u; ) b.subTo(t, b)
                    }
                    null != c && (b.drShiftTo(d, c), m != a && e.ZERO.subTo(c, c));
                    b.t = d;
                    b.clamp();
                    0 < q && b.rShiftTo(q, b);
                    0 > m && e.ZERO.subTo(b, b)
                }
            }
        }
    };
    e.prototype.invDigit = function () {
        if (1 > this.t) return 0;
        var a = this[0];
        if (0 == (a & 1)) return 0;
        var c = a & 3,
            c = c * (2 - (a & 15) * c) & 15,
            c = c * (2 - (a & 255) * c) & 255,
            c = c * (2 - ((a & 65535) * c & 65535)) & 65535,
            c = c * (2 - a * c % this.DV) % this.DV;
        return 0 < c ? this.DV - c : - c
    };
    e.prototype.isEven = function () {
        return 0 == (0 < this.t ? this[0] & 1 : this.s)
    };
    e.prototype.exp = function (a, c) {
        if (4294967295 < a || 1 > a) return e.ONE;
        var b = f(),
            d = f(),
            g = c.convert(this),
            k = F(a) - 1;
        for (g.copyTo(b); 0 <= --k; ) if (c.sqrTo(b, d), 0 < (a & 1 << k)) c.mulTo(d, g, b);
        else var m = b,
                b = d,
                d = m;
        return c.revert(b)
    };
    e.prototype.toString = function (a) {
        if (0 > this.s) return '-' + this.negate().toString(a);
        if (16 == a) a = 4;
        else if (8 == a) a = 3;
        else if (2 == a) a = 1;
        else if (32 ==
            a) a = 5;
        else if (4 == a) a = 2;
        else return this.toRadix(a);
        var c = (1 << a) - 1,
            b,
            d = !1,
            g = '',
            k = this.t,
            m = this.DB - k * this.DB % a;
        if (0 < k--) for (m < this.DB && 0 < (b = this[k] >> m) && (d = !0, g = '0123456789abcdefghijklmnopqrstuvwxyz'.charAt(b)); 0 <= k; ) m < a ? (b = (this[k] & (1 << m) - 1) << a - m, b |= this[--k] >> (m += this.DB - a))  : (b = this[k] >> (m -= a) & c, 0 >= m && (m += this.DB, --k)),
        0 < b && (d = !0),
        d && (g += '0123456789abcdefghijklmnopqrstuvwxyz'.charAt(b));
        return d ? g : '0'
    };
    e.prototype.negate = function () {
        var a = f();
        e.ZERO.subTo(this, a);
        return a
    };
    e.prototype.abs = function () {
        return 0 >
        this.s ? this.negate()  : this
    };
    e.prototype.compareTo = function (a) {
        var c = this.s - a.s;
        if (0 != c) return c;
        var b = this.t,
            c = b - a.t;
        if (0 != c) return 0 > this.s ? - c : c;
        for (; 0 <= --b; ) if (0 != (c = this[b] - a[b])) return c;
        return 0
    };
    e.prototype.bitLength = function () {
        return 0 >= this.t ? 0 : this.DB * (this.t - 1) + F(this[this.t - 1] ^ this.s & this.DM)
    };
    e.prototype.mod = function (a) {
        var c = f();
        this.abs().divRemTo(a, null, c);
        0 > this.s && 0 < c.compareTo(e.ZERO) && a.subTo(c, c);
        return c
    };
    e.prototype.modPowInt = function (a, c) {
        var b;
        b = 256 > a || c.isEven() ? new C(c)  : new D(c);
        return this.exp(a, b)
    };
    e.ZERO = B(0);
    e.ONE = B(1);
    H.prototype.convert = U;
    H.prototype.revert = U;
    H.prototype.mulTo = function (a, c, b) {
        a.multiplyTo(c, b)
    };
    H.prototype.sqrTo = function (a, c) {
        a.squareTo(c)
    };
    G.prototype.convert = function (a) {
        if (0 > a.s || a.t > 2 * this.m.t) return a.mod(this.m);
        if (0 > a.compareTo(this.m)) return a;
        var c = f();
        a.copyTo(c);
        this.reduce(c);
        return c
    };
    G.prototype.revert = function (a) {
        return a
    };
    G.prototype.reduce = function (a) {
        a.drShiftTo(this.m.t - 1, this.r2);
        a.t > this.m.t + 1 && (a.t = this.m.t + 1, a.clamp());
        this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
        for (this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); 0 > a.compareTo(this.r2); ) a.dAddOffset(1, this.m.t + 1);
        for (a.subTo(this.r2, a); 0 <= a.compareTo(this.m); ) a.subTo(this.m, a)
    };
    G.prototype.mulTo = function (a, c, b) {
        a.multiplyTo(c, b);
        this.reduce(b)
    };
    G.prototype.sqrTo = function (a, c) {
        a.squareTo(c);
        this.reduce(c)
    };
    var z = [
            2,
            3,
            5,
            7,
            11,
            13,
            17,
            19,
            23,
            29,
            31,
            37,
            41,
            43,
            47,
            53,
            59,
            61,
            67,
            71,
            73,
            79,
            83,
            89,
            97,
            101,
            103,
            107,
            109,
            113,
            127,
            131,
            137,
            139,
            149,
            151,
            157,
            163,
            167,
            173,
            179,
            181,
            191,
            193,
            197,
            199,
            211,
            223,
            227,
            229,
            233,
            239,
            241,
            251,
            257,
            263,
            269,
            271,
            277,
            281,
            283,
            293,
            307,
            311,
            313,
            317,
            331,
            337,
            347,
            349,
            353,
            359,
            367,
            373,
            379,
            383,
            389,
            397,
            401,
            409,
            419,
            421,
            431,
            433,
            439,
            443,
            449,
            457,
            461,
            463,
            467,
            479,
            487,
            491,
            499,
            503,
            509,
            521,
            523,
            541,
            547,
            557,
            563,
            569,
            571,
            577,
            587,
            593,
            599,
            601,
            607,
            613,
            617,
            619,
            631,
            641,
            643,
            647,
            653,
            659,
            661,
            673,
            677,
            683,
            691,
            701,
            709,
            719,
            727,
            733,
            739,
            743,
            751,
            757,
            761,
            769,
            773,
            787,
            797,
            809,
            811,
            821,
            823,
            827,
            829,
            839,
            853,
            857,
            859,
            863,
            877,
            881,
            883,
            887,
            907,
            911,
            919,
            929,
            937,
            941,
            947,
            953,
            967,
            971,
            977,
            983,
            991,
            997
        ],
        Y = 67108864 / z[z.length - 1];
    e.prototype.chunkSize = function (a) {
        return Math.floor(Math.LN2 * this.DB / Math.log(a))
    };
    e.prototype.toRadix = function (a) {
        null == a && (a = 10);
        if (0 == this.signum() || 2 > a || 36 < a) return '0';
        var c = this.chunkSize(a),
            c = Math.pow(a, c),
            b = B(c),
            d = f(),
            g = f(),
            k = '';
        for (this.divRemTo(b, d, g); 0 < d.signum(); ) k = (c + g.intValue()).toString(a).substr(1) + k,
            d.divRemTo(b, d, g);
        return g.intValue().toString(a) + k
    };
    e.prototype.fromRadix = function (a, c) {
        this.fromInt(0);
        null == c && (c = 10);
        for (var b = this.chunkSize(c), d = Math.pow(c, b), g = !1, k = 0, m = 0, q = 0; q < a.length; ++q) {
            var f = r(a, q);
            0 > f ? '-' == a.charAt(q) && 0 == this.signum() && (g = !0)  : (m = c * m + f, ++k >= b && (this.dMultiply(d), this.dAddOffset(m, 0), m = k = 0))
        }
        0 < k && (this.dMultiply(Math.pow(c, k)), this.dAddOffset(m, 0));
        g && e.ZERO.subTo(this, this)
    };
    e.prototype.fromNumber = function (a, c, b) {
        if ('number' == typeof c) if (2 > a) this.fromInt(1);
        else for (this.fromNumber(a, b), this.testBit(a - 1) || this.bitwiseTo(e.ONE.shiftLeft(a - 1), K, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(c); ) this.dAddOffset(2, 0),
            this.bitLength() > a && this.subTo(e.ONE.shiftLeft(a -
            1), this);
        else {
            b = [
            ];
            var d = a & 7;
            b.length = (a >> 3) + 1;
            c.nextBytes(b);
            b[0] = 0 < d ? b[0] & (1 << d) - 1 : 0;
            this.fromString(b, 256)
        }
    };
    e.prototype.bitwiseTo = function (a, c, b) {
        var d,
            g,
            k = Math.min(a.t, this.t);
        for (d = 0; d < k; ++d) b[d] = c(this[d], a[d]);
        if (a.t < this.t) {
            g = a.s & this.DM;
            for (d = k; d < this.t; ++d) b[d] = c(this[d], g);
            b.t = this.t
        } else {
            g = this.s & this.DM;
            for (d = k; d < a.t; ++d) b[d] = c(g, a[d]);
            b.t = a.t
        }
        b.s = c(this.s, a.s);
        b.clamp()
    };
    e.prototype.changeBit = function (a, c) {
        var b = e.ONE.shiftLeft(a);
        this.bitwiseTo(b, c, b);
        return b
    };
    e.prototype.addTo = function (a, c) {
        for (var b = 0, d = 0, g = Math.min(a.t, this.t); b < g; ) d += this[b] + a[b],
            c[b++] = d & this.DM,
            d >>= this.DB;
        if (a.t < this.t) {
            for (d += a.s; b < this.t; ) d += this[b],
                c[b++] = d & this.DM,
                d >>= this.DB;
            d += this.s
        } else {
            for (d += this.s; b < a.t; ) d += a[b],
                c[b++] = d & this.DM,
                d >>= this.DB;
            d += a.s
        }
        c.s = 0 > d ? - 1 : 0;
        0 < d ? c[b++] = d : - 1 > d && (c[b++] = this.DV + d);
        c.t = b;
        c.clamp()
    };
    e.prototype.dMultiply = function (a) {
        this[this.t] = this.am(0, a - 1, this, 0, 0, this.t);
        ++this.t;
        this.clamp()
    };
    e.prototype.dAddOffset = function (a, c) {
        if (0 != a) {
            for (; this.t <= c; ) this[this.t++] = 0;
            for (this[c] +=
                     a; this[c] >= this.DV; ) this[c] -= this.DV,
            ++c >= this.t && (this[this.t++] = 0),
                ++this[c]
        }
    };
    e.prototype.multiplyLowerTo = function (a, c, b) {
        var d = Math.min(this.t + a.t, c);
        b.s = 0;
        for (b.t = d; 0 < d; ) b[--d] = 0;
        var g;
        for (g = b.t - this.t; d < g; ++d) b[d + this.t] = this.am(0, a[d], b, d, 0, this.t);
        for (g = Math.min(a.t, c); d < g; ++d) this.am(0, a[d], b, d, 0, c - d);
        b.clamp()
    };
    e.prototype.multiplyUpperTo = function (a, c, b) {
        --c;
        var d = b.t = this.t + a.t - c;
        for (b.s = 0; 0 <= --d; ) b[d] = 0;
        for (d = Math.max(c - this.t, 0); d < a.t; ++d) b[this.t + d - c] = this.am(c - d, a[d], b, 0, 0, this.t + d -
        c);
        b.clamp();
        b.drShiftTo(1, b)
    };
    e.prototype.modInt = function (a) {
        if (0 >= a) return 0;
        var c = this.DV % a,
            b = 0 > this.s ? a - 1 : 0;
        if (0 < this.t) if (0 == c) b = this[0] % a;
        else for (var d = this.t - 1; 0 <= d; --d) b = (c * b + this[d]) % a;
        return b
    };
    e.prototype.millerRabin = function (a) {
        var c = this.subtract(e.ONE),
            b = c.getLowestSetBit();
        if (0 >= b) return !1;
        var d = c.shiftRight(b);
        a = a + 1 >> 1;
        a > z.length && (a = z.length);
        for (var g = f(), k = 0; k < a; ++k) {
            g.fromInt(z[Math.floor(Math.random() * z.length)]);
            var m = g.modPow(d, this);
            if (0 != m.compareTo(e.ONE) && 0 != m.compareTo(c)) {
                for (var q = 1; q++ < b && 0 != m.compareTo(c); ) if (m = m.modPowInt(2, this), 0 == m.compareTo(e.ONE)) return !1;
                if (0 != m.compareTo(c)) return !1
            }
        }
        return !0
    };
    e.prototype.clone = function () {
        var a = f();
        this.copyTo(a);
        return a
    };
    e.prototype.intValue = function () {
        if (0 > this.s) {
            if (1 == this.t) return this[0] - this.DV;
            if (0 == this.t) return - 1
        } else {
            if (1 == this.t) return this[0];
            if (0 == this.t) return 0
        }
        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
    };
    e.prototype.byteValue = function () {
        return 0 == this.t ? this.s : this[0] << 24 >> 24
    };
    e.prototype.shortValue = function () {
        return 0 ==
        this.t ? this.s : this[0] << 16 >> 16
    };
    e.prototype.signum = function () {
        return 0 > this.s ? - 1 : 0 >= this.t || 1 == this.t && 0 >= this[0] ? 0 : 1
    };
    e.prototype.toByteArray = function () {
        var a = this.t,
            c = [
            ];
        c[0] = this.s;
        var b = this.DB - a * this.DB % 8,
            d,
            g = 0;
        if (0 < a--) for (b < this.DB && (d = this[a] >> b) != (this.s & this.DM) >> b && (c[g++] = d | this.s << this.DB - b); 0 <= a; ) if (8 > b ? (d = (this[a] & (1 << b) - 1) << 8 - b, d |= this[--a] >> (b += this.DB - 8))  : (d = this[a] >> (b -= 8) & 255, 0 >= b && (b += this.DB, --a)), 0 != (d & 128) && (d |= - 256), 0 == g && (this.s & 128) != (d & 128) && ++g, 0 < g || d != this.s) c[g++] = d;
        return c
    };
    e.prototype.equals = function (a) {
        return 0 == this.compareTo(a)
    };
    e.prototype.min = function (a) {
        return 0 > this.compareTo(a) ? this : a
    };
    e.prototype.max = function (a) {
        return 0 < this.compareTo(a) ? this : a
    };
    e.prototype.and = function (a) {
        var c = f();
        this.bitwiseTo(a, W, c);
        return c
    };
    e.prototype.or = function (a) {
        var c = f();
        this.bitwiseTo(a, K, c);
        return c
    };
    e.prototype.xor = function (a) {
        var c = f();
        this.bitwiseTo(a, S, c);
        return c
    };
    e.prototype.andNot = function (a) {
        var c = f();
        this.bitwiseTo(a, T, c);
        return c
    };
    e.prototype.not = function () {
        for (var a = f(), c = 0; c < this.t; ++c) a[c] = this.DM & ~this[c];
        a.t = this.t;
        a.s = ~this.s;
        return a
    };
    e.prototype.shiftLeft = function (a) {
        var c = f();
        0 > a ? this.rShiftTo( - a, c)  : this.lShiftTo(a, c);
        return c
    };
    e.prototype.shiftRight = function (a) {
        var c = f();
        0 > a ? this.lShiftTo( - a, c)  : this.rShiftTo(a, c);
        return c
    };
    e.prototype.getLowestSetBit = function () {
        for (var a = 0; a < this.t; ++a) if (0 != this[a]) {
            var c = a * this.DB;
            a = this[a];
            if (0 == a) a = - 1;
            else {
                var b = 0;
                0 == (a & 65535) && (a >>= 16, b += 16);
                0 == (a & 255) && (a >>= 8, b += 8);
                0 == (a & 15) && (a >>= 4, b += 4);
                0 == (a & 3) && (a >>= 2, b += 2);
                0 == (a & 1) && ++b;
                a = b
            }
            return c + a
        }
        return 0 > this.s ? this.t * this.DB : - 1
    };
    e.prototype.bitCount = function () {
        for (var a = 0, c = this.s & this.DM, b = 0; b < this.t; ++b) {
            for (var d = this[b] ^ c, g = 0; 0 != d; ) d &= d - 1,
                ++g;
            a += g
        }
        return a
    };
    e.prototype.testBit = function (a) {
        var c = Math.floor(a / this.DB);
        return c >= this.t ? 0 != this.s : 0 != (this[c] & 1 << a % this.DB)
    };
    e.prototype.setBit = function (a) {
        return this.changeBit(a, K)
    };
    e.prototype.clearBit = function (a) {
        return this.changeBit(a, T)
    };
    e.prototype.flipBit = function (a) {
        return this.changeBit(a, S)
    };
    e.prototype.add = function (a) {
        var c = f();
        this.addTo(a, c);
        return c
    };
    e.prototype.subtract = function (a) {
        var c = f();
        this.subTo(a, c);
        return c
    };
    e.prototype.multiply = function (a) {
        var c = f();
        this.multiplyTo(a, c);
        return c
    };
    e.prototype.divide = function (a) {
        var c = f();
        this.divRemTo(a, c, null);
        return c
    };
    e.prototype.remainder = function (a) {
        var c = f();
        this.divRemTo(a, null, c);
        return c
    };
    e.prototype.divideAndRemainder = function (a) {
        var c = f(),
            b = f();
        this.divRemTo(a, c, b);
        return [c,
            b]
    };
    e.prototype.modPow = function (a, c) {
        var b = a.bitLength(),
            d,
            g = B(1),
            k;
        if (0 >= b) return g;
        d = 18 > b ? 1 : 48 > b ? 3 : 144 > b ? 4 : 768 > b ? 5 : 6;
        k = 8 > b ? new C(c)  : c.isEven() ? new G(c)  : new D(c);
        var m = [
            ],
            q = 3,
            e = d - 1,
            l = (1 << d) - 1;
        m[1] = k.convert(this);
        if (1 < d) for (b = f(), k.sqrTo(m[1], b); q <= l; ) m[q] = f(),
            k.mulTo(b, m[q - 2], m[q]),
            q += 2;
        for (var h = a.t - 1, n, p = !0, r = f(), b = F(a[h]) - 1; 0 <= h; ) {
            b >= e ? n = a[h] >> b - e & l : (n = (a[h] & (1 << b + 1) - 1) << e - b, 0 < h && (n |= a[h - 1] >> this.DB + b - e));
            for (q = d; 0 == (n & 1); ) n >>= 1,
                --q;
            0 > (b -= q) && (b += this.DB, --h);
            if (p) m[n].copyTo(g),
                p = !1;
            else {
                for (; 1 < q; ) k.sqrTo(g, r),
                    k.sqrTo(r, g),
                    q -= 2;
                0 < q ? k.sqrTo(g, r)  : (q = g, g = r, r = q);
                k.mulTo(r, m[n], g)
            }
            for (; 0 <= h && 0 == (a[h] & 1 << b); ) k.sqrTo(g, r),
                q = g,
                g = r,
                r = q,
            0 > --b && (b = this.DB - 1, --h)
        }
        return k.revert(g)
    };
    e.prototype.modInverse = function (a) {
        var c = a.isEven();
        if (this.isEven() && c || 0 == a.signum()) return e.ZERO;
        for (var b = a.clone(), d = this.clone(), g = B(1), k = B(0), m = B(0), q = B(1); 0 != b.signum(); ) {
            for (; b.isEven(); ) b.rShiftTo(1, b),
                c ? (g.isEven() && k.isEven() || (g.addTo(this, g), k.subTo(a, k)), g.rShiftTo(1, g))  : k.isEven() || k.subTo(a, k),
                k.rShiftTo(1, k);
            for (; d.isEven(); ) d.rShiftTo(1, d),
                c ? (m.isEven() && q.isEven() || (m.addTo(this, m), q.subTo(a, q)), m.rShiftTo(1, m))  : q.isEven() || q.subTo(a, q),
                q.rShiftTo(1, q);
            0 <= b.compareTo(d) ? (b.subTo(d, b), c && g.subTo(m, g), k.subTo(q, k))  : (d.subTo(b, d), c && m.subTo(g, m), q.subTo(k, q))
        }
        if (0 != d.compareTo(e.ONE)) return e.ZERO;
        if (0 <= q.compareTo(a)) return q.subtract(a);
        if (0 > q.signum()) q.addTo(a, q);
        else return q;
        return 0 > q.signum() ? q.add(a)  : q
    };
    e.prototype.pow = function (a) {
        return this.exp(a, new H)
    };
    e.prototype.gcd = function (a) {
        var c = 0 > this.s ? this.negate()  : this.clone();
        a = 0 > a.s ? a.negate()  : a.clone();
        if (0 > c.compareTo(a)) {
            var b = c,
                c = a;
            a = b
        }
        var b = c.getLowestSetBit(),
            d = a.getLowestSetBit();
        if (0 > d) return c;
        b < d && (d = b);
        0 < d && (c.rShiftTo(d, c), a.rShiftTo(d, a));
        for (; 0 < c.signum(); ) 0 < (b = c.getLowestSetBit()) && c.rShiftTo(b, c),
        0 < (b = a.getLowestSetBit()) && a.rShiftTo(b, a),
            0 <= c.compareTo(a) ? (c.subTo(a, c), c.rShiftTo(1, c))  : (a.subTo(c, a), a.rShiftTo(1, a));
        0 < d && a.lShiftTo(d, a);
        return a
    };
    e.prototype.isProbablePrime = function (a) {
        var c,
            b = this.abs();
        if (1 == b.t && b[0] <= z[z.length - 1]) {
            for (c = 0; c < z.length; ++c) if (b[0] == z[c]) return !0;
            return !1
        }
        if (b.isEven()) return !1;
        for (c = 1; c < z.length; ) {
            for (var d = z[c], g = c + 1; g < z.length && d < Y; ) d *= z[g++];
            for (d = b.modInt(d); c < g; ) if (0 == d % z[c++]) return !1
        }
        return b.millerRabin(a)
    };
    e.prototype.square = function () {
        var a = f();
        this.squareTo(a);
        return a
    };
    O.prototype.init = function (a) {
        var c,
            b,
            d;
        for (c = 0; 256 > c; ++c) this.S[c] = c;
        for (c = b = 0; 256 > c; ++c) b = b + this.S[c] + a[c % a.length] & 255,
            d = this.S[c],
            this.S[c] = this.S[b],
            this.S[b] = d;
        this.j = this.i = 0
    };
    O.prototype.next = function () {
        var a;
        this.i = this.i + 1 & 255;
        this.j = this.j + this.S[this.i] & 255;
        a = this.S[this.i];
        this.S[this.i] = this.S[this.j];
        this.S[this.j] = a;
        return this.S[a + this.S[this.i] & 255]
    };
    var M,
        E,
        A;
    if (null == E) {
        E = [
        ];
        A = 0;
        if (window.crypto && window.crypto.getRandomValues) for (y = new Uint32Array(256), window.crypto.getRandomValues(y), x = 0; x < y.length; ++x) E[A++] = y[x] & 255;
        var N = function (a) {
            this.count = this.count || 0;
            256 <= this.count || 256 <= A ? window.removeEventListener ? window.removeEventListener('mousemove', N)  : window.detachEvent && window.detachEvent('onmousemove', N)  : (this.count += 1, a = a.x + a.y, E[A++] = a & 255)
        };
        window.addEventListener ? window.addEventListener('mousemove', N)  : window.attachEvent && window.attachEvent('onmousemove', N)
    }
    L.prototype.nextBytes = function (a) {
        var c;
        for (c = 0; c < a.length; ++c) {
            var b = c,
                d;
            if (null == M) {
                for (M = new O; 256 > A; ) d = Math.floor(65536 * Math.random()),
                    E[A++] = d & 255;
                M.init(E);
                for (A = 0; A < E.length; ++A) E[A] = 0;
                A = 0
            }
            d = M.next();
            a[b] = d
        }
    };
    u.prototype.doPublic = function (a) {
        return a.modPowInt(this.e, this.n)
    };
    u.prototype.setPublic = function (a, c) {
        null != a && null != c && 0 < a.length && 0 < c.length ? (this.n = w(a, 16), this.e = parseInt(c, 16))  : console.error('Invalid RSA public key')
    };
    u.prototype.encrypt = function (a) {
        var c;
        c = this.n.bitLength() + 7 >> 3;
        if (c < a.length + 11) console.error('Message too long for RSA'),
            c = null;
        else {
            for (var b = [
            ], d = a.length - 1; 0 <= d && 0 < c; ) {
                var g = a.charCodeAt(d--);
                128 > g ? b[--c] = g : 127 < g && 2048 > g ? (b[--c] = g & 63 | 128, b[--c] = g >> 6 | 192)  : (b[--c] = g & 63 | 128, b[--c] = g >> 6 & 63 | 128, b[--c] = g >> 12 | 224)
            }
            b[--c] = 0;
            a = new L;
            for (d = [
            ]; 2 < c; ) {
                for (d[0] = 0; 0 == d[0]; ) a.nextBytes(d);
                b[--c] = d[0]
            }
            b[--c] = 2;
            b[--c] = 0;
            c = new e(b)
        }
        if (null == c) return null;
        c = this.doPublic(c);
        if (null == c) return null;
        c = c.toString(16);
        return 0 == (c.length & 1) ? c : '0' + c
    };
    u.prototype.doPrivate = function (a) {
        if (null == this.p || null == this.q) return a.modPow(this.d, this.n);
        var c = a.mod(this.p).modPow(this.dmp1, this.p);
        for (a = a.mod(this.q).modPow(this.dmq1, this.q); 0 > c.compareTo(a); ) c = c.add(this.p);
        return c.subtract(a).multiply(this.coeff).mod(this.p).multiply(this.q).add(a)
    };
    u.prototype.setPrivate = function (a, c, b) {
        null != a && null != c && 0 < a.length && 0 < c.length ? (this.n = w(a, 16), this.e = parseInt(c, 16), this.d = w(b, 16))  : console.error('Invalid RSA private key')
    };
    u.prototype.setPrivateEx = function (a, c, b, d, g, k, m, q) {
        null != a && null != c && 0 < a.length && 0 < c.length ? (this.n = w(a, 16), this.e = parseInt(c, 16), this.d = w(b, 16), this.p = w(d, 16), this.q = w(g, 16), this.dmp1 = w(k, 16), this.dmq1 = w(m, 16), this.coeff = w(q, 16))  : console.error('Invalid RSA private key')
    };
    u.prototype.generate = function (a, c) {
        var b = new L,
            d = a >> 1;
        this.e = parseInt(c, 16);
        for (var g = new e(c, 16); ; ) {
            for (; this.p = new e(a - d, 1, b), 0 != this.p.subtract(e.ONE).gcd(g).compareTo(e.ONE) || !this.p.isProbablePrime(10); );
            for (; this.q = new e(d, 1, b), 0 != this.q.subtract(e.ONE).gcd(g).compareTo(e.ONE) || !this.q.isProbablePrime(10); );
            if (0 >= this.p.compareTo(this.q)) {
                var k = this.p;
                this.p = this.q;
                this.q = k
            }
            var k = this.p.subtract(e.ONE),
                m = this.q.subtract(e.ONE),
                q = k.multiply(m);
            if (0 == q.gcd(g).compareTo(e.ONE)) {
                this.n = this.p.multiply(this.q);
                this.d = g.modInverse(q);
                this.dmp1 = this.d.mod(k);
                this.dmq1 = this.d.mod(m);
                this.coeff = this.q.modInverse(this.p);
                break
            }
        }
    };
    u.prototype.decrypt = function (a) {
        a = w(a, 16);
        a = this.doPrivate(a);
        if (null == a) return null;
        a: {
            var c = this.n.bitLength() + 7 >> 3;
            a = a.toByteArray();
            for (var b = 0; b < a.length && 0 == a[b]; ) ++b;
            if (a.length - b != c - 1 || 2 != a[b]) a = null;
            else {
                for (++b; 0 != a[b]; ) if (++b >= a.length) {
                    a = null;
                    break a
                }
                for (c = ''; ++b < a.length; ) {
                    var d = a[b] & 255;
                    128 > d ? c += String.fromCharCode(d)  : 191 < d && 224 > d ? (c += String.fromCharCode((d & 31) << 6 | a[b + 1] & 63), ++b)  : (c += String.fromCharCode((d & 15) << 12 | (a[b + 1] & 63) << 6 | a[b + 2] & 63), b += 2)
                }
                a = c
            }
        }
        return a
    };
    (function () {
        u.prototype.generateAsync = function (a, c, b) {
            var d = new L,
                g = a >> 1;
            this.e = parseInt(c, 16);
            var k = new e(c, 16),
                m = this,
                q = function () {
                    var c = function () {
                            if (0 >= m.p.compareTo(m.q)) {
                                var a = m.p;
                                m.p = m.q;
                                m.q = a
                            }
                            var a = m.p.subtract(e.ONE),
                                c = m.q.subtract(e.ONE),
                                d = a.multiply(c);
                            0 == d.gcd(k).compareTo(e.ONE) ? (m.n = m.p.multiply(m.q), m.d = k.modInverse(d), m.dmp1 = m.d.mod(a), m.dmq1 = m.d.mod(c), m.coeff = m.q.modInverse(m.p), setTimeout(function () {
                                b()
                            }, 0))  : setTimeout(q, 0)
                        },
                        h = function () {
                            m.q = f();
                            m.q.fromNumberAsync(g, 1, d, function () {
                                m.q.subtract(e.ONE).gcda(k, function (a) {
                                    0 == a.compareTo(e.ONE) && m.q.isProbablePrime(10) ?
                                        setTimeout(c, 0)  : setTimeout(h, 0)
                                })
                            })
                        },
                        l = function () {
                            m.p = f();
                            m.p.fromNumberAsync(a - g, 1, d, function () {
                                m.p.subtract(e.ONE).gcda(k, function (a) {
                                    0 == a.compareTo(e.ONE) && m.p.isProbablePrime(10) ? setTimeout(h, 0)  : setTimeout(l, 0)
                                })
                            })
                        };
                    setTimeout(l, 0)
                };
            setTimeout(q, 0)
        };
        e.prototype.gcda = function (a, c) {
            var b = 0 > this.s ? this.negate()  : this.clone(),
                d = 0 > a.s ? a.negate()  : a.clone();
            if (0 > b.compareTo(d)) var g = b,
                b = d,
                d = g;
            var k = b.getLowestSetBit(),
                m = d.getLowestSetBit();
            if (0 > m) c(b);
            else {
                k < m && (m = k);
                0 < m && (b.rShiftTo(m, b), d.rShiftTo(m, d));
                var q = function () {
                    0 < (k = b.getLowestSetBit()) && b.rShiftTo(k, b);
                    0 < (k = d.getLowestSetBit()) && d.rShiftTo(k, d);
                    0 <= b.compareTo(d) ? (b.subTo(d, b), b.rShiftTo(1, b))  : (d.subTo(b, d), d.rShiftTo(1, d));
                    0 < b.signum() ? setTimeout(q, 0)  : (0 < m && d.lShiftTo(m, d), setTimeout(function () {
                        c(d)
                    }, 0))
                };
                setTimeout(q, 10)
            }
        };
        e.prototype.fromNumberAsync = function (a, c, b, d) {
            if ('number' == typeof c) if (2 > a) this.fromInt(1);
            else {
                this.fromNumber(a, b);
                this.testBit(a - 1) || this.bitwiseTo(e.ONE.shiftLeft(a - 1), K, this);
                this.isEven() && this.dAddOffset(1, 0);
                var g = this,
                    k = function () {
                        g.dAddOffset(2, 0);
                        g.bitLength() > a && g.subTo(e.ONE.shiftLeft(a - 1), g);
                        g.isProbablePrime(c) ? setTimeout(function () {
                            d()
                        }, 0)  : setTimeout(k, 0)
                    };
                setTimeout(k, 0)
            } else {
                b = [
                ];
                var m = a & 7;
                b.length = (a >> 3) + 1;
                c.nextBytes(b);
                b[0] = 0 < m ? b[0] & (1 << m) - 1 : 0;
                this.fromString(b, 256)
            }
        }
    }) ();
    var t = t || {
        };
    t.env = t.env || {
    };
    var Q = t,
        R = Object.prototype,
        V = [
            'toString',
            'valueOf'
        ];
    t.env.parseUA = function (a) {
        var c = function (a) {
                var c = 0;
                return parseFloat(a.replace(/\./g, function () {
                    return 1 == c++ ? '' : '.'
                }))
            },
            b = navigator,
            b = {
                ie: 0,
                opera: 0,
                gecko: 0,
                webkit: 0,
                chrome: 0,
                mobile: null,
                air: 0,
                ipad: 0,
                iphone: 0,
                ipod: 0,
                ios: null,
                android: 0,
                webos: 0,
                caja: b && b.cajaVersion,
                secure: !1,
                os: null
            };
        a = a || navigator && navigator.userAgent;
        var d = window && window.location,
            d = d && d.href;
        b.secure = d && 0 === d.toLowerCase().indexOf('https');
        if (a) {
            /windows|win32/i.test(a) ? b.os = 'windows' : /macintosh/i.test(a) ? b.os = 'macintosh' : /rhino/i.test(a) && (b.os = 'rhino');
            /KHTML/.test(a) && (b.webkit = 1);
            if ((d = a.match(/AppleWebKit\/([^\s]*)/)) && d[1]) {
                b.webkit = c(d[1]);
                if (/ Mobile\//.test(a)) b.mobile = 'Apple',
                (d = a.match(/OS ([^\s]*)/)) && d[1] && (d = c(d[1].replace('_', '.'))),
                    b.ios = d,
                    b.ipad = b.ipod = b.iphone = 0,
                (d = a.match(/iPad|iPod|iPhone/)) && d[0] && (b[d[0].toLowerCase()] = b.ios);
                else {
                    if (d = a.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) b.mobile = d[0];
                    /webOS/.test(a) && (b.mobile = 'WebOS', (d = a.match(/webOS\/([^\s]*);/)) && d[1] && (b.webos = c(d[1])));
                    / Android/.test(a) && (b.mobile = 'Android', (d = a.match(/Android ([^\s]*);/)) && d[1] && (b.android = c(d[1])))
                }
                if ((d = a.match(/Chrome\/([^\s]*)/)) && d[1]) b.chrome = c(d[1]);
                else if (d = a.match(/AdobeAIR\/([^\s]*)/)) b.air = d[0]
            }
            if (!b.webkit) if ((d = a.match(/Opera[\s\/]([^\s]*)/)) && d[1]) {
                if (b.opera = c(d[1]), (d = a.match(/Version\/([^\s]*)/)) && d[1] && (b.opera = c(d[1])), d = a.match(/Opera Mini[^;]*/)) b.mobile = d[0]
            } else if ((d = a.match(/MSIE\s([^;]*)/)) && d[1]) b.ie = c(d[1]);
            else if (d = a.match(/Gecko\/([^\s]*)/)) b.gecko = 1,
            (d = a.match(/rv:([^\s\)]*)/)) && d[1] && (b.gecko = c(d[1]))
        }
        return b
    };
    t.env.ua = t.env.parseUA();
    t.isFunction = function (a) {
        return 'function' === typeof a || '[object Function]' === R.toString.apply(a)
    };
    t._IEEnumFix = t.env.ua.ie ? function (a, c) {
        var b,
            d,
            g;
        for (b = 0; b < V.length; b += 1) d = V[b],
            g = c[d],
        Q.isFunction(g) && g != R[d] && (a[d] = g)
    }
        : function () {
    };
    t.extend = function (a, c, b) {
        if (!c || !a) throw Error('extend failed, please check that all dependencies are included.');
        var d = function () {
            },
            g;
        d.prototype = c.prototype;
        a.prototype = new d;
        a.prototype.constructor = a;
        a.superclass = c.prototype;
        c.prototype.constructor == R.constructor && (c.prototype.constructor = c);
        if (b) {
            for (g in b) Q.hasOwnProperty(b, g) && (a.prototype[g] = b[g]);
            Q._IEEnumFix(a.prototype, b)
        }
    };
    'undefined' != typeof KJUR && KJUR || (KJUR = {
    });
    'undefined' != typeof KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {
    });
    KJUR.asn1.ASN1Util = new function () {
        this.integerToByteHex = function (a) {
            a = a.toString(16);
            1 == a.length % 2 && (a = '0' + a);
            return a
        };
        this.bigIntToMinTwosComplementsHex = function (a) {
            var c = a.toString(16);
            if ('-' != c.substr(0, 1)) 1 == c.length % 2 ? c = '0' + c : c.match(/^[0-7]/) || (c = '00' + c);
            else {
                var b = c.substr(1).length;
                1 == b % 2 ? b += 1 : c.match(/^[0-7]/) || (b += 2);
                for (var c = '', d = 0; d < b; d++) c += 'f';
                c = (new e(c, 16)).xor(a).add(e.ONE).toString(16).replace(/^-/, '')
            }
            return c
        };
        this.getPEMStringFromHex = function (a, c) {
            var b = CryptoJS.enc.Hex.parse(a),
                b = CryptoJS.enc.Base64.stringify(b).replace(/(.{64})/g, '$1\r\n'),
                b = b.replace(/\r\n$/, '');
            return '-----BEGIN ' + c + '-----\r\n' + b + '\r\n-----END ' + c + '-----\r\n'
        }
    };
    KJUR.asn1.ASN1Object = function () {
        this.getLengthHexFromValue = function () {
            if ('undefined' == typeof this.hV || null == this.hV) throw 'this.hV is null or undefined.';
            if (1 == this.hV.length % 2) throw 'value hex must be even length: n=0,v=' + this.hV;
            var a = this.hV.length / 2,
                c = a.toString(16);
            1 == c.length % 2 && (c = '0' + c);
            if (128 > a) return c;
            var b = c.length / 2;
            if (15 < b) throw 'ASN.1 length too long to represent by 8x: n = ' + a.toString(16);
            return (128 + b).toString(16) + c
        };
        this.getEncodedHex = function () {
            if (null == this.hTLV || this.isModified) this.hV = this.getFreshValueHex(),
                this.hL = this.getLengthHexFromValue(),
                this.hTLV = this.hT + this.hL + this.hV,
                this.isModified = !1;
            return this.hTLV
        };
        this.getValueHex = function () {
            this.getEncodedHex();
            return this.hV
        };
        this.getFreshValueHex = function () {
            return ''
        }
    };
    KJUR.asn1.DERAbstractString = function (a) {
        KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
        this.getString = function () {
            return this.s
        };
        this.setString = function (a) {
            this.hTLV = null;
            this.isModified = !0;
            this.s = a;
            this.hV = stohex(this.s)
        };
        this.setStringHex = function (a) {
            this.hTLV = null;
            this.isModified = !0;
            this.s = null;
            this.hV = a
        };
        this.getFreshValueHex = function () {
            return this.hV
        };
        'undefined' != typeof a && ('undefined' != typeof a.str ? this.setString(a.str)  : 'undefined' != typeof a.hex && this.setStringHex(a.hex))
    };
    t.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERAbstractTime = function (a) {
        KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
        this.localDateToUTC = function (a) {
            utc = a.getTime() + 60000 * a.getTimezoneOffset();
            return new Date(utc)
        };
        this.formatDate = function (a, b) {
            var d = this.zeroPadding,
                g = this.localDateToUTC(a),
                k = String(g.getFullYear());
            'utc' == b && (k = k.substr(2, 2));
            var m = d(String(g.getMonth() + 1), 2),
                q = d(String(g.getDate()), 2),
                e = d(String(g.getHours()), 2),
                f = d(String(g.getMinutes()), 2),
                d = d(String(g.getSeconds()), 2);
            return k +
                m + q + e + f + d + 'Z'
        };
        this.zeroPadding = function (a, b) {
            return a.length >= b ? a : Array(b - a.length + 1).join('0') + a
        };
        this.getString = function () {
            return this.s
        };
        this.setString = function (a) {
            this.hTLV = null;
            this.isModified = !0;
            this.s = a;
            this.hV = stohex(this.s)
        };
        this.setByDateValue = function (a, b, d, g, k, m) {
            a = new Date(Date.UTC(a, b - 1, d, g, k, m, 0));
            this.setByDate(a)
        };
        this.getFreshValueHex = function () {
            return this.hV
        }
    };
    t.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERAbstractStructured = function (a) {
        KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
        this.setByASN1ObjectArray = function (a) {
            this.hTLV = null;
            this.isModified = !0;
            this.asn1Array = a
        };
        this.appendASN1Object = function (a) {
            this.hTLV = null;
            this.isModified = !0;
            this.asn1Array.push(a)
        };
        this.asn1Array = [
        ];
        'undefined' != typeof a && 'undefined' != typeof a.array && (this.asn1Array = a.array)
    };
    t.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERBoolean = function () {
        KJUR.asn1.DERBoolean.superclass.constructor.call(this);
        this.hT = '01';
        this.hTLV = '0101ff'
    };
    t.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERInteger = function (a) {
        KJUR.asn1.DERInteger.superclass.constructor.call(this);
        this.hT = '02';
        this.setByBigInteger = function (a) {
            this.hTLV = null;
            this.isModified = !0;
            this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(a)
        };
        this.setByInteger = function (a) {
            a = new e(String(a), 10);
            this.setByBigInteger(a)
        };
        this.setValueHex = function (a) {
            this.hV = a
        };
        this.getFreshValueHex = function () {
            return this.hV
        };
        'undefined' != typeof a && ('undefined' != typeof a.bigint ? this.setByBigInteger(a.bigint)  : 'undefined' != typeof a['int'] ?
            this.setByInteger(a['int'])  : 'undefined' != typeof a.hex && this.setValueHex(a.hex))
    };
    t.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERBitString = function (a) {
        KJUR.asn1.DERBitString.superclass.constructor.call(this);
        this.hT = '03';
        this.setHexValueIncludingUnusedBits = function (a) {
            this.hTLV = null;
            this.isModified = !0;
            this.hV = a
        };
        this.setUnusedBitsAndHexValue = function (a, b) {
            if (0 > a || 7 < a) throw 'unused bits shall be from 0 to 7: u = ' + a;
            this.hTLV = null;
            this.isModified = !0;
            this.hV = '0' + a + b
        };
        this.setByBinaryString = function (a) {
            a = a.replace(/0+$/, '');
            var b = 8 - a.length % 8;
            8 == b && (b = 0);
            for (var d = 0; d <= b; d++) a += '0';
            for (var g = '', d = 0; d < a.length - 1; d += 8) {
                var k = a.substr(d, 8),
                    k = parseInt(k, 2).toString(16);
                1 == k.length && (k = '0' + k);
                g += k
            }
            this.hTLV = null;
            this.isModified = !0;
            this.hV = '0' + b + g
        };
        this.setByBooleanArray = function (a) {
            for (var b = '', d = 0; d < a.length; d++) b = 1 == a[d] ? b + '1' : b + '0';
            this.setByBinaryString(b)
        };
        this.newFalseArray = function (a) {
            for (var b = Array(a), d = 0; d < a; d++) b[d] = !1;
            return b
        };
        this.getFreshValueHex = function () {
            return this.hV
        };
        'undefined' != typeof a && ('undefined' != typeof a.hex ? this.setHexValueIncludingUnusedBits(a.hex)  : 'undefined' != typeof a.bin ? this.setByBinaryString(a.bin)  : 'undefined' != typeof a.array && this.setByBooleanArray(a.array))
    };
    t.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object);
    KJUR.asn1.DEROctetString = function (a) {
        KJUR.asn1.DEROctetString.superclass.constructor.call(this, a);
        this.hT = '04'
    };
    t.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERNull = function () {
        KJUR.asn1.DERNull.superclass.constructor.call(this);
        this.hT = '05';
        this.hTLV = '0500'
    };
    t.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERObjectIdentifier = function (a) {
        var c = function (a) {
            a = a.toString(16);
            1 == a.length && (a = '0' + a);
            return a
        };
        KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);
        this.hT = '06';
        this.setValueHex = function (a) {
            this.hTLV = null;
            this.isModified = !0;
            this.s = null;
            this.hV = a
        };
        this.setValueOidString = function (a) {
            if (!a.match(/^[0-9.]+$/)) throw 'malformed oid string: ' + a;
            var d = '';
            a = a.split('.');
            var g = 40 * parseInt(a[0]) + parseInt(a[1]),
                d = d + c(g);
            a.splice(0, 2);
            for (g = 0; g < a.length; g++) {
                var k = '',
                    m = (new e(a[g], 10)).toString(2),
                    q = 7 - m.length % 7;
                7 == q && (q = 0);
                for (var f = '', h = 0; h < q; h++) f += '0';
                m = f + m;
                for (h = 0; h < m.length - 1; h += 7) q = m.substr(h, 7),
                h != m.length - 7 && (q = '1' + q),
                    k += c(parseInt(q, 2));
                d += k
            }
            this.hTLV = null;
            this.isModified = !0;
            this.s = null;
            this.hV = d
        };
        this.setValueName = function (a) {
            if ('undefined' != typeof KJUR.asn1.x509.OID.name2oidList[a]) this.setValueOidString(KJUR.asn1.x509.OID.name2oidList[a]);
            else throw 'DERObjectIdentifier oidName undefined: ' + a;
        };
        this.getFreshValueHex = function () {
            return this.hV
        };
        'undefined' != typeof a && ('undefined' != typeof a.oid ? this.setValueOidString(a.oid)  : 'undefined' != typeof a.hex ? this.setValueHex(a.hex)  : 'undefined' != typeof a.name && this.setValueName(a.name))
    };
    t.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object);
    KJUR.asn1.DERUTF8String = function (a) {
        KJUR.asn1.DERUTF8String.superclass.constructor.call(this, a);
        this.hT = '0c'
    };
    t.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERNumericString = function (a) {
        KJUR.asn1.DERNumericString.superclass.constructor.call(this, a);
        this.hT = '12'
    };
    t.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERPrintableString = function (a) {
        KJUR.asn1.DERPrintableString.superclass.constructor.call(this, a);
        this.hT = '13'
    };
    t.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERTeletexString = function (a) {
        KJUR.asn1.DERTeletexString.superclass.constructor.call(this, a);
        this.hT = '14'
    };
    t.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERIA5String = function (a) {
        KJUR.asn1.DERIA5String.superclass.constructor.call(this, a);
        this.hT = '16'
    };
    t.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString);
    KJUR.asn1.DERUTCTime = function (a) {
        KJUR.asn1.DERUTCTime.superclass.constructor.call(this, a);
        this.hT = '17';
        this.setByDate = function (a) {
            this.hTLV = null;
            this.isModified = !0;
            this.date = a;
            this.s = this.formatDate(this.date, 'utc');
            this.hV = stohex(this.s)
        };
        'undefined' != typeof a && ('undefined' != typeof a.str ? this.setString(a.str)  : 'undefined' != typeof a.hex ? this.setStringHex(a.hex)  : 'undefined' != typeof a.date && this.setByDate(a.date))
    };
    t.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime);
    KJUR.asn1.DERGeneralizedTime = function (a) {
        KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, a);
        this.hT = '18';
        this.setByDate = function (a) {
            this.hTLV = null;
            this.isModified = !0;
            this.date = a;
            this.s = this.formatDate(this.date, 'gen');
            this.hV = stohex(this.s)
        };
        'undefined' != typeof a && ('undefined' != typeof a.str ? this.setString(a.str)  : 'undefined' != typeof a.hex ? this.setStringHex(a.hex)  : 'undefined' != typeof a.date && this.setByDate(a.date))
    };
    t.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime);
    KJUR.asn1.DERSequence = function (a) {
        KJUR.asn1.DERSequence.superclass.constructor.call(this, a);
        this.hT = '30';
        this.getFreshValueHex = function () {
            for (var a = '', b = 0; b < this.asn1Array.length; b++) a += this.asn1Array[b].getEncodedHex();
            return this.hV = a
        }
    };
    t.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured);
    KJUR.asn1.DERSet = function (a) {
        KJUR.asn1.DERSet.superclass.constructor.call(this, a);
        this.hT = '31';
        this.getFreshValueHex = function () {
            for (var a = [
            ], b = 0; b < this.asn1Array.length; b++) a.push(this.asn1Array[b].getEncodedHex());
            a.sort();
            return this.hV = a.join('')
        }
    };
    t.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured);
    KJUR.asn1.DERTaggedObject = function (a) {
        KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);
        this.hT = 'a0';
        this.hV = '';
        this.isExplicit = !0;
        this.asn1Object = null;
        this.setASN1Object = function (a, b, d) {
            this.hT = b;
            this.isExplicit = a;
            this.asn1Object = d;
            this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0)  : (this.hV = null, this.hTLV = d.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, b), this.isModified = !1)
        };
        this.getFreshValueHex = function () {
            return this.hV
        };
        'undefined' != typeof a && ('undefined' != typeof a.tag && (this.hT = a.tag), 'undefined' != typeof a.explicit && (this.isExplicit = a.explicit), 'undefined' != typeof a.obj && (this.asn1Object = a.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
    };
    t.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);
    (function (a) {
        a = {
        };
        var c;
        window.Hex = a
    }) ();
    (function (a) {
        var c = {
            },
            b;
        c.decode = function (c) {
            var g;
            if (b === a) {
                b = [
                ];
                for (g = 0; 64 > g; ++g) b['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(g)] = g;
                for (g = 0; 9 > g; ++g) b['= \f\n\r\t   '.charAt(g)] = - 1
            }
            var k = [
                ],
                m = 0,
                q = 0;
            for (g = 0; g < c.length; ++g) {
                var e = c.charAt(g);
                if ('=' == e) break;
                e = b[e];
                if ( - 1 != e) {
                    if (e === a) throw 'Illegal character at offset ' + g;
                    m |= e;
                    4 <= ++q ? (k[k.length] = m >> 16, k[k.length] = m >> 8 & 255, k[k.length] = m & 255, q = m = 0)  : m <<= 6
                }
            }
            switch (q) {
                case 1:
                    throw 'Base64 encoding incomplete: at least 2 bits missing';
                case 2:
                    k[k.length] = m >> 10;
                    break;
                case 3:
                    k[k.length] = m >> 16,
                        k[k.length] = m >> 8 & 255
            }
            return k
        };
        c.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/;
        c.unarmor = function (a) {
            var b = c.re.exec(a);
            if (b) if (b[1]) a = b[1];
            else if (b[2]) a = b[2];
            else throw 'RegExp out of sync';
            return c.decode(a)
        };
        window.Base64 = c
    }) (); (function (a) {
        function c(a, b) {
            a instanceof c ? (this.enc = a.enc, this.pos = a.pos)  : (this.enc = a, this.pos = b)
        }
        function b(a, c, b, d, e) {
            this.stream = a;
            this.header = c;
            this.length = b;
            this.tag = d;
            this.sub = e
        }
        var d = {
            tag: function (a, c) {
                var b = document.createElement(a);
                b.className = c;
                return b
            },
            text: function (a) {
                return document.createTextNode(a)
            }
        };
        c.prototype.get = function (c) {
            c ===
            a && (c = this.pos++);
            if (c >= this.enc.length) throw 'Requesting byte offset ' + c + ' on a stream of length ' + this.enc.length;
            return this.enc[c]
        };
        c.prototype.hexDigits = '0123456789ABCDEF';
        c.prototype.hexByte = function (a) {
            return this.hexDigits.charAt(a >> 4 & 15) + this.hexDigits.charAt(a & 15)
        };
        c.prototype.hexDump = function (a, c, b) {
            for (var d = ''; a < c; ++a) if (d += this.hexByte(this.get(a)), !0 !== b) switch (a & 15) {
                case 7:
                    d += '  ';
                    break;
                case 15:
                    d += '\n';
                    break;
                default:
                    d += ' '
            }
            return d
        };
        c.prototype.parseStringISO = function (a, c) {
            for (var b = '', d = a; d < c; ++d) b += String.fromCharCode(this.get(d));
            return b
        };
        c.prototype.parseStringUTF = function (a, c) {
            for (var b = '', d = a; d < c; ) var e = this.get(d++),
                b = 128 > e ? b + String.fromCharCode(e)  : 191 < e && 224 > e ? b + String.fromCharCode((e & 31) << 6 | this.get(d++) & 63)  : b + String.fromCharCode((e & 15) << 12 | (this.get(d++) & 63) << 6 | this.get(d++) & 63);
            return b
        };
        c.prototype.parseStringBMP = function (a, c) {
            for (var b = '', d = a; d < c; d += 2) var e = this.get(d),
                f = this.get(d + 1),
                b = b + String.fromCharCode((e << 8) + f);
            return b
        };
        c.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
        c.prototype.parseTime = function (a, c) {
            var b = this.parseStringISO(a, c),
                d = this.reTime.exec(b);
            if (!d) return 'Unrecognized time: ' + b;
            b = d[1] + '-' + d[2] + '-' + d[3] + ' ' + d[4];
            d[5] && (b += ':' + d[5], d[6] && (b += ':' + d[6], d[7] && (b += '.' + d[7])));
            d[8] && (b += ' UTC', 'Z' != d[8] && (b += d[8], d[9] && (b += ':' + d[9])));
            return b
        };
        c.prototype.parseInteger = function (a, c) {
            var b = c - a;
            if (4 < b) {
                var b = b << 3,
                    d = this.get(a);
                if (0 === d) b -= 8;
                else for (; 128 > d; ) d <<= 1,
                    --b;
                return '(' + b + ' bit)'
            }
            b = 0;
            for (d = a; d < c; ++d) b = b << 8 | this.get(d);
            return b
        };
        c.prototype.parseBitString = function (a, c) {
            var b = this.get(a),
                d = (c - a - 1 << 3) - b,
                e = '(' + d + ' bit)';
            if (20 >= d) for (var f = b, e = e + ' ', b = c - 1; b > a; --b) {
                for (d = this.get(b); 8 > f; ++f) e += d >> f & 1 ? '1' : '0';
                f = 0
            }
            return e
        };
        c.prototype.parseOctetString = function (a, b) {
            var c = b - a,
                d = '(' + c + ' byte) ';
            100 < c && (b = a + 100);
            for (var e = a; e < b; ++e) d += this.hexByte(this.get(e));
            100 < c && (d += '…');
            return d
        };
        c.prototype.parseOID = function (a, b) {
            for (var c = '', d = 0, e = 0, f = a; f < b; ++f) {
                var h = this.get(f),
                    d = d << 7 | h & 127,
                    e = e + 7;
                h & 128 || ('' === c ? (c = 80 > d ? 40 > d ? 0 : 1 : 2, c = c + '.' + (d - 40 * c))  : c += '.' + (31 <=
                e ? 'bigint' : d), d = e = 0)
            }
            return c
        };
        b.prototype.typeName = function () {
            if (this.tag === a) return 'unknown';
            var c = this.tag & 31;
            switch (this.tag >> 6) {
                case 0:
                    switch (c) {
                        case 0:
                            return 'EOC';
                        case 1:
                            return 'BOOLEAN';
                        case 2:
                            return 'INTEGER';
                        case 3:
                            return 'BIT_STRING';
                        case 4:
                            return 'OCTET_STRING';
                        case 5:
                            return 'NULL';
                        case 6:
                            return 'OBJECT_IDENTIFIER';
                        case 7:
                            return 'ObjectDescriptor';
                        case 8:
                            return 'EXTERNAL';
                        case 9:
                            return 'REAL';
                        case 10:
                            return 'ENUMERATED';
                        case 11:
                            return 'EMBEDDED_PDV';
                        case 12:
                            return 'UTF8String';
                        case 16:
                            return 'SEQUENCE';
                        case 17:
                            return 'SET';
                        case 18:
                            return 'NumericString';
                        case 19:
                            return 'PrintableString';
                        case 20:
                            return 'TeletexString';
                        case 21:
                            return 'VideotexString';
                        case 22:
                            return 'IA5String';
                        case 23:
                            return 'UTCTime';
                        case 24:
                            return 'GeneralizedTime';
                        case 25:
                            return 'GraphicString';
                        case 26:
                            return 'VisibleString';
                        case 27:
                            return 'GeneralString';
                        case 28:
                            return 'UniversalString';
                        case 30:
                            return 'BMPString';
                        default:
                            return 'Universal_' + c.toString(16)
                    }
                case 1:
                    return 'Application_' + c.toString(16);
                case 2:
                    return '[' + c + ']';
                case 3:
                    return 'Private_' +
                        c.toString(16)
            }
        };
        b.prototype.reSeemsASCII = /^[ -~]+$/;
        b.prototype.content = function () {
            if (this.tag === a) return null;
            var c = this.tag >> 6,
                b = this.tag & 31,
                d = this.posContent(),
                e = Math.abs(this.length);
            if (0 !== c) {
                if (null !== this.sub) return '(' + this.sub.length + ' elem)';
                c = this.stream.parseStringISO(d, d + Math.min(e, 100));
                return this.reSeemsASCII.test(c) ? c.substring(0, 200) + (200 < c.length ? '…' : '')  : this.stream.parseOctetString(d, d + e)
            }
            switch (b) {
                case 1:
                    return 0 === this.stream.get(d) ? 'false' : 'true';
                case 2:
                    return this.stream.parseInteger(d, d + e);
                case 3:
                    return this.sub ? '(' + this.sub.length + ' elem)' : this.stream.parseBitString(d, d + e);
                case 4:
                    return this.sub ? '(' + this.sub.length + ' elem)' : this.stream.parseOctetString(d, d + e);
                case 6:
                    return this.stream.parseOID(d, d + e);
                case 16:
                case 17:
                    return '(' + this.sub.length + ' elem)';
                case 12:
                    return this.stream.parseStringUTF(d, d + e);
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 26:
                    return this.stream.parseStringISO(d, d + e);
                case 30:
                    return this.stream.parseStringBMP(d, d + e);
                case 23:
                case 24:
                    return this.stream.parseTime(d, d + e)
            }
            return null
        };
        b.prototype.toString = function () {
            return this.typeName() + '@' + this.stream.pos + '[header:' + this.header + ',length:' + this.length + ',sub:' + (null === this.sub ? 'null' : this.sub.length) + ']'
        };
        b.prototype.print = function (c) {
            c === a && (c = '');
            document.writeln(c + this);
            if (null !== this.sub) {
                c += '  ';
                for (var b = 0, d = this.sub.length; b < d; ++b) this.sub[b].print(c)
            }
        };
        b.prototype.toPrettyString = function (c) {
            c === a && (c = '');
            var b = c + this.typeName() + ' @' + this.stream.pos;
            0 <= this.length && (b += '+');
            b += this.length;
            this.tag & 32 ?
                b += ' (constructed)' : 3 != this.tag && 4 != this.tag || null === this.sub || (b += ' (encapsulates)');
            b += '\n';
            if (null !== this.sub) {
                c += '  ';
                for (var d = 0, e = this.sub.length; d < e; ++d) b += this.sub[d].toPrettyString(c)
            }
            return b
        };
        b.prototype.toDOM = function () {
            var a = d.tag('div', 'node');
            a.asn1 = this;
            var c = d.tag('div', 'head'),
                b = this.typeName().replace(/_/g, ' ');
            c.innerHTML = b;
            var e = this.content();
            null !== e && (e = String(e).replace(/</g, '&lt;'), b = d.tag('span', 'preview'), b.appendChild(d.text(e)), c.appendChild(b));
            a.appendChild(c);
            this.node = a;
            this.head = c;
            var f = d.tag('div', 'value'),
                b = 'Offset: ' + this.stream.pos + '<br/>',
                b = b + ('Length: ' + this.header + '+'),
                b = 0 <= this.length ? b + this.length : b + ( - this.length + ' (undefined)');
            this.tag & 32 ? b += '<br/>(constructed)' : 3 != this.tag && 4 != this.tag || null === this.sub || (b += '<br/>(encapsulates)');
            null !== e && (b += '<br/>Value:<br/><b>' + e + '</b>', 'object' === typeof oids && 6 == this.tag && (e = oids[e])) && (e.d && (b += '<br/>' + e.d), e.c && (b += '<br/>' + e.c), e.w && (b += '<br/>(warning!)'));
            f.innerHTML = b;
            a.appendChild(f);
            b = d.tag('div', 'sub');
            if (null !== this.sub) for (e = 0, f = this.sub.length; e < f; ++e) b.appendChild(this.sub[e].toDOM());
            a.appendChild(b);
            c.onclick = function () {
                a.className = 'node collapsed' == a.className ? 'node' : 'node collapsed'
            };
            return a
        };
        b.prototype.posStart = function () {
            return this.stream.pos
        };
        b.prototype.posContent = function () {
            return this.stream.pos + this.header
        };
        b.prototype.posEnd = function () {
            return this.stream.pos + this.header + Math.abs(this.length)
        };
        b.prototype.fakeHover = function (a) {
            this.node.className += ' hover';
            a && (this.head.className +=
                ' hover')
        };
        b.prototype.fakeOut = function (a) {
            var b = / ?hover/;
            this.node.className = this.node.className.replace(b, '');
            a && (this.head.className = this.head.className.replace(b, ''))
        };
        b.prototype.toHexDOM_sub = function (a, b, c, e, f) {
            e >= f || (b = d.tag('span', b), b.appendChild(d.text(c.hexDump(e, f))), a.appendChild(b))
        };
        b.prototype.toHexDOM = function (b) {
            var c = d.tag('span', 'hex');
            b === a && (b = c);
            this.head.hexNode = c;
            this.head.onmouseover = function () {
                this.hexNode.className = 'hexCurrent'
            };
            this.head.onmouseout = function () {
                this.hexNode.className = 'hex'
            };
            c.asn1 = this;
            c.onmouseover = function () {
                var a = !b.selected;
                a && (b.selected = this.asn1, this.className = 'hexCurrent');
                this.asn1.fakeHover(a)
            };
            c.onmouseout = function () {
                var a = b.selected == this.asn1;
                this.asn1.fakeOut(a);
                a && (b.selected = null, this.className = 'hex')
            };
            this.toHexDOM_sub(c, 'tag', this.stream, this.posStart(), this.posStart() + 1);
            this.toHexDOM_sub(c, 0 <= this.length ? 'dlen' : 'ulen', this.stream, this.posStart() + 1, this.posContent());
            if (null === this.sub) c.appendChild(d.text(this.stream.hexDump(this.posContent(), this.posEnd())));
            else if (0 < this.sub.length) {
                var e = this.sub[0],
                    f = this.sub[this.sub.length - 1];
                this.toHexDOM_sub(c, 'intro', this.stream, this.posContent(), e.posStart());
                for (var e = 0, h = this.sub.length; e < h; ++e) c.appendChild(this.sub[e].toHexDOM(b));
                this.toHexDOM_sub(c, 'outro', this.stream, f.posEnd(), this.posEnd())
            }
            return c
        };
        b.prototype.toHexString = function (a) {
            return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
        };
        b.decodeLength = function (a) {
            var b = a.get(),
                c = b & 127;
            if (c == b) return c;
            if (3 < c) throw 'Length over 24 bits not supported at position ' + (a.pos - 1);
            if (0 === c) return - 1;
            for (var d = b = 0; d < c; ++d) b = b << 8 | a.get();
            return b
        };
        b.hasContent = function (a, d, e) {
            if (a & 32) return !0;
            if (3 > a || 4 < a) return !1;
            var f = new c(e);
            3 == a && f.get();
            if (f.get() >> 6 & 1) return !1;
            try {
                var h = b.decodeLength(f);
                return f.pos - e.pos + h == d
            } catch (l) {
                return !1
            }
        };
        b.decode = function (a) {
            a instanceof c || (a = new c(a, 0));
            var d = new c(a),
                e = a.get(),
                f = b.decodeLength(a),
                h = a.pos - d.pos,
                l = null;
            if (b.hasContent(e, f, a)) {
                var n = a.pos;
                3 == e && a.get();
                l = [
                ];
                if (0 <= f) {
                    for (var p = n + f; a.pos < p; ) l[l.length] = b.decode(a);
                    if (a.pos !=
                        p) throw 'Content size is not correct for container starting at offset ' + n;
                } else try {
                    for (; ; ) {
                        p = b.decode(a);
                        if (0 === p.tag) break;
                        l[l.length] = p
                    }
                    f = n - a.pos
                } catch (r) {
                    throw 'Exception while decoding undefined length content: ' + r;
                }
            } else a.pos += f;
            return new b(d, h, f, e, l)
        };
        b.test = function () {
            for (var a = [
                {
                    value: [
                        39
                    ],
                    expected: 39
                },
                {
                    value: [
                        129,
                        201
                    ],
                    expected: 201
                },
                {
                    value: [
                        131,
                        254,
                        220,
                        186
                    ],
                    expected: 16702650
                }
            ], d = 0, e = a.length; d < e; ++d) {
                var f = new c(a[d].value, 0),
                    f = b.decodeLength(f);
                f != a[d].expected && document.write('In test[' +
                d + '] expected ' + a[d].expected + ' got ' + f + '\n')
            }
        };
        window.ASN1 = b
    }) ();
    ASN1.prototype.getHexStringValue = function () {
        return this.toHexString().substr(2 * this.header, 2 * this.length)
    };
    u.prototype.parseKey = function (a) {
        try {
            var c = 0,
                b = 0,
                d = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(a) ? Hex.decode(a)  : Base64.unarmor(a),
                e = ASN1.decode(d);
            3 === e.sub.length && (e = e.sub[2].sub[0]);
            if (9 === e.sub.length) {
                c = e.sub[1].getHexStringValue();
                this.n = w(c, 16);
                b = e.sub[2].getHexStringValue();
                this.e = parseInt(b, 16);
                var f = e.sub[3].getHexStringValue();
                this.d = w(f, 16);
                var h = e.sub[4].getHexStringValue();
                this.p = w(h, 16);
                var l = e.sub[5].getHexStringValue();
                this.q = w(l, 16);
                var n = e.sub[6].getHexStringValue();
                this.dmp1 = w(n, 16);
                var p = e.sub[7].getHexStringValue();
                this.dmq1 = w(p, 16);
                var r = e.sub[8].getHexStringValue();
                this.coeff = w(r, 16)
            } else if (2 === e.sub.length) {
                var t = e.sub[1].sub[0],
                    c = t.sub[0].getHexStringValue();
                this.n = w(c, 16);
                b = t.sub[1].getHexStringValue();
                this.e = parseInt(b, 16)
            } else return !1;
            return !0
        } catch (u) {
            return !1
        }
    };
    u.prototype.getPrivateBaseKey = function () {
        var a = {
            array: [
                new KJUR.asn1.DERInteger({
                    'int': 0
                }),
                new KJUR.asn1.DERInteger({
                    bigint: this.n
                }),
                new KJUR.asn1.DERInteger({
                    'int': this.e
                }),
                new KJUR.asn1.DERInteger({
                    bigint: this.d
                }),
                new KJUR.asn1.DERInteger({
                    bigint: this.p
                }),
                new KJUR.asn1.DERInteger({
                    bigint: this.q
                }),
                new KJUR.asn1.DERInteger({
                    bigint: this.dmp1
                }),
                new KJUR.asn1.DERInteger({
                    bigint: this.dmq1
                }),
                new KJUR.asn1.DERInteger({
                    bigint: this.coeff
                })
            ]
        };
        return (new KJUR.asn1.DERSequence(a)).getEncodedHex()
    };
    u.prototype.getPrivateBaseKeyB64 = function () {
        return P(this.getPrivateBaseKey())
    };
    u.prototype.getPublicBaseKey = function () {
        var a = {
                array: [
                    new KJUR.asn1.DERObjectIdentifier({
                        oid: '1.2.840.113549.1.1.1'
                    }),
                    new KJUR.asn1.DERNull
                ]
            },
            c = new KJUR.asn1.DERSequence(a),
            a = {
                array: [
                    new KJUR.asn1.DERInteger({
                        bigint: this.n
                    }),
                    new KJUR.asn1.DERInteger({
                        'int': this.e
                    })
                ]
            },
            a = {
                hex: '00' + (new KJUR.asn1.DERSequence(a)).getEncodedHex()
            },
            a = new KJUR.asn1.DERBitString(a),
            a = {
                array: [
                    c,
                    a
                ]
            };
        return (new KJUR.asn1.DERSequence(a)).getEncodedHex()
    };
    u.prototype.getPublicBaseKeyB64 = function () {
        return P(this.getPublicBaseKey())
    };
    u.prototype.wordwrap = function (a, c) {
        c = c || 64;
        return a ? a.match(RegExp('(.{1,' + c + '})( +|$\n?)|(.{1,' + c + '})', 'g')).join('\n')  : a
    };
    u.prototype.getPrivateKey = function () {
        var a;
        a = '-----BEGIN RSA PRIVATE KEY-----\n' + (this.wordwrap(this.getPrivateBaseKeyB64()) + '\n');
        return a + '-----END RSA PRIVATE KEY-----'
    };
    u.prototype.getPublicKey = function () {
        var a;
        a = '-----BEGIN PUBLIC KEY-----\n' + (this.wordwrap(this.getPublicBaseKeyB64()) + '\n');
        return a + '-----END PUBLIC KEY-----'
    };
    u.prototype.hasPublicKeyProperty = function (a) {
        a = a || {
        };
        return a.hasOwnProperty('n') && a.hasOwnProperty('e')
    };
    u.prototype.hasPrivateKeyProperty = function (a) {
        a = a || {
        };
        return a.hasOwnProperty('n') && a.hasOwnProperty('e') && a.hasOwnProperty('d') && a.hasOwnProperty('p') && a.hasOwnProperty('q') && a.hasOwnProperty('dmp1') && a.hasOwnProperty('dmq1') && a.hasOwnProperty('coeff')
    };
    u.prototype.parsePropertiesFrom = function (a) {
        this.n = a.n;
        this.e = a.e;
        a.hasOwnProperty('d') && (this.d = a.d, this.p = a.p, this.q = a.q, this.dmp1 = a.dmp1, this.dmq1 = a.dmq1, this.coeff = a.coeff)
    };
    var I = function (a) {
        u.call(this);
        a && ('string' === typeof a ? this.parseKey(a)  : (this.hasPrivateKeyProperty(a) || this.hasPublicKeyProperty(a)) && this.parsePropertiesFrom(a))
    };
    I.prototype = new u;
    I.prototype.constructor = I;
    t = function (a) {
        a = a || {
        };
        this.default_key_size = parseInt(a.default_key_size) || 1024;
        this.default_public_exponent = a.default_public_exponent || '010001';
        this.log = a.log || !1;
        this.key = null
    };
    t.prototype.setKey = function (a) {
        this.log && this.key && console.warn('A key was already set, overriding existing.');
        this.key = new I(a)
    };
    t.prototype.setPrivateKey = function (a) {
        this.setKey(a)
    };
    t.prototype.setPublicKey = function (a) {
        this.setKey(a)
    };
    t.prototype.decrypt = function (a) {
        try {
            return this.getKey().decrypt(X(a))
        } catch (c) {
            return !1
        }
    };
    t.prototype.encrypt = function (a) {
        try {
            return P(this.getKey().encrypt(a))
        } catch (c) {
            return !1
        }
    };
    t.prototype.getKey = function (a) {
        if (!this.key) {
            this.key = new I;
            if (a && '[object Function]' === {
                }.toString.call(a)) {
                this.key.generateAsync(this.default_key_size, this.default_public_exponent, a);
                return
            }
            this.key.generate(this.default_key_size, this.default_public_exponent)
        }
        return this.key
    };
    t.prototype.getPrivateKey = function () {
        return this.getKey().getPrivateKey()
    };
    t.prototype.getPrivateKeyB64 = function () {
        return this.getKey().getPrivateBaseKeyB64()
    };
    t.prototype.getPublicKey = function () {
        return this.getKey().getPublicKey()
    };
    t.prototype.getPublicKeyB64 = function () {
        return this.getKey().getPublicBaseKeyB64()
    };
    h.JSEncrypt = t
}) (JSEncryptExports);
var JSEncrypt = JSEncryptExports.JSEncrypt,
    hexcase = 0,
    b64pad = '',
    chrsz = 8;
function hex_md5(h) {
    return binl2hex(core_md5(str2binl(h), h.length * chrsz))
}
function b64_md5(h) {
    return binl2b64(core_md5(str2binl(h), h.length * chrsz))
}
function str_md5(h) {
    return binl2str(core_md5(str2binl(h), h.length * chrsz))
}
function hex_hmac_md5(h, e) {
    return binl2hex(core_hmac_md5(h, e))
}
function b64_hmac_md5(h, e) {
    return binl2b64(core_hmac_md5(h, e))
}
function str_hmac_md5(h, e) {
    return binl2str(core_hmac_md5(h, e))
}
function md5_vm_test() {
    return '900150983cd24fb0d6963f7d28e17f72' == hex_md5('abc')
}
function core_md5(h, e) {
    h[e >> 5] |= 128 << e % 32;
    h[(e + 64 >>> 9 << 4) + 14] = e;
    for (var f = 1732584193, l = - 271733879, p = - 1732584194, n = 271733878, r = 0; r < h.length; r += 16) var B = f,
        F = l,
        C = p,
        D = n,
        f = md5_ff(f, l, p, n, h[r + 0], 7, - 680876936),
        n = md5_ff(n, f, l, p, h[r + 1], 12, - 389564586),
        p = md5_ff(p, n, f, l, h[r + 2], 17, 606105819),
        l = md5_ff(l, p, n, f, h[r + 3], 22, - 1044525330),
        f = md5_ff(f, l, p, n, h[r + 4], 7, - 176418897),
        n = md5_ff(n, f, l, p, h[r + 5], 12, 1200080426),
        p = md5_ff(p, n, f, l, h[r + 6], 17, - 1473231341),
        l = md5_ff(l, p, n, f, h[r + 7], 22, - 45705983),
        f = md5_ff(f, l, p, n, h[r + 8], 7, 1770035416),
        n = md5_ff(n, f, l, p, h[r + 9], 12, - 1958414417),
        p = md5_ff(p, n, f, l, h[r + 10], 17, - 42063),
        l = md5_ff(l, p, n, f, h[r + 11], 22, - 1990404162),
        f = md5_ff(f, l, p, n, h[r + 12], 7, 1804603682),
        n = md5_ff(n, f, l, p, h[r + 13], 12, - 40341101),
        p = md5_ff(p, n, f, l, h[r + 14], 17, - 1502002290),
        l = md5_ff(l, p, n, f, h[r + 15], 22, 1236535329),
        f = md5_gg(f, l, p, n, h[r + 1], 5, - 165796510),
        n = md5_gg(n, f, l, p, h[r + 6], 9, - 1069501632),
        p = md5_gg(p, n, f, l, h[r + 11], 14, 643717713),
        l = md5_gg(l, p, n, f, h[r + 0], 20, - 373897302),
        f = md5_gg(f, l, p, n, h[r + 5], 5, - 701558691),
        n = md5_gg(n, f, l, p, h[r +
        10], 9, 38016083),
        p = md5_gg(p, n, f, l, h[r + 15], 14, - 660478335),
        l = md5_gg(l, p, n, f, h[r + 4], 20, - 405537848),
        f = md5_gg(f, l, p, n, h[r + 9], 5, 568446438),
        n = md5_gg(n, f, l, p, h[r + 14], 9, - 1019803690),
        p = md5_gg(p, n, f, l, h[r + 3], 14, - 187363961),
        l = md5_gg(l, p, n, f, h[r + 8], 20, 1163531501),
        f = md5_gg(f, l, p, n, h[r + 13], 5, - 1444681467),
        n = md5_gg(n, f, l, p, h[r + 2], 9, - 51403784),
        p = md5_gg(p, n, f, l, h[r + 7], 14, 1735328473),
        l = md5_gg(l, p, n, f, h[r + 12], 20, - 1926607734),
        f = md5_hh(f, l, p, n, h[r + 5], 4, - 378558),
        n = md5_hh(n, f, l, p, h[r + 8], 11, - 2022574463),
        p = md5_hh(p, n, f, l, h[r +
        11], 16, 1839030562),
        l = md5_hh(l, p, n, f, h[r + 14], 23, - 35309556),
        f = md5_hh(f, l, p, n, h[r + 1], 4, - 1530992060),
        n = md5_hh(n, f, l, p, h[r + 4], 11, 1272893353),
        p = md5_hh(p, n, f, l, h[r + 7], 16, - 155497632),
        l = md5_hh(l, p, n, f, h[r + 10], 23, - 1094730640),
        f = md5_hh(f, l, p, n, h[r + 13], 4, 681279174),
        n = md5_hh(n, f, l, p, h[r + 0], 11, - 358537222),
        p = md5_hh(p, n, f, l, h[r + 3], 16, - 722521979),
        l = md5_hh(l, p, n, f, h[r + 6], 23, 76029189),
        f = md5_hh(f, l, p, n, h[r + 9], 4, - 640364487),
        n = md5_hh(n, f, l, p, h[r + 12], 11, - 421815835),
        p = md5_hh(p, n, f, l, h[r + 15], 16, 530742520),
        l = md5_hh(l, p, n, f, h[r + 2], 23, - 995338651),
        f = md5_ii(f, l, p, n, h[r + 0], 6, - 198630844),
        n = md5_ii(n, f, l, p, h[r + 7], 10, 1126891415),
        p = md5_ii(p, n, f, l, h[r + 14], 15, - 1416354905),
        l = md5_ii(l, p, n, f, h[r + 5], 21, - 57434055),
        f = md5_ii(f, l, p, n, h[r + 12], 6, 1700485571),
        n = md5_ii(n, f, l, p, h[r + 3], 10, - 1894986606),
        p = md5_ii(p, n, f, l, h[r + 10], 15, - 1051523),
        l = md5_ii(l, p, n, f, h[r + 1], 21, - 2054922799),
        f = md5_ii(f, l, p, n, h[r + 8], 6, 1873313359),
        n = md5_ii(n, f, l, p, h[r + 15], 10, - 30611744),
        p = md5_ii(p, n, f, l, h[r + 6], 15, - 1560198380),
        l = md5_ii(l, p, n, f, h[r + 13], 21, 1309151649),
        f = md5_ii(f, l, p, n, h[r + 4], 6, - 145523070),
        n = md5_ii(n, f, l, p, h[r + 11], 10, - 1120210379),
        p = md5_ii(p, n, f, l, h[r + 2], 15, 718787259),
        l = md5_ii(l, p, n, f, h[r + 9], 21, - 343485551),
        f = safe_add(f, B),
        l = safe_add(l, F),
        p = safe_add(p, C),
        n = safe_add(n, D);
    return [f,
        l,
        p,
        n]
}
function md5_cmn(h, e, f, l, p, n) {
    return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(l, n)), p), f)
}
function md5_ff(h, e, f, l, p, n, r) {
    return md5_cmn(e & f | ~e & l, h, e, p, n, r)
}
function md5_gg(h, e, f, l, p, n, r) {
    return md5_cmn(e & l | f & ~l, h, e, p, n, r)
}
function md5_hh(h, e, f, l, p, n, r) {
    return md5_cmn(e ^ f ^ l, h, e, p, n, r)
}
function md5_ii(h, e, f, l, p, n, r) {
    return md5_cmn(f ^ (e | ~l), h, e, p, n, r)
}
function core_hmac_md5(h, e) {
    var f = str2binl(h);
    16 < f.length && (f = core_md5(f, h.length * chrsz));
    for (var l = Array(16), p = Array(16), n = 0; 16 > n; n++) l[n] = f[n] ^ 909522486,
        p[n] = f[n] ^ 1549556828;
    f = core_md5(l.concat(str2binl(e)), 512 + e.length * chrsz);
    return core_md5(p.concat(f), 640)
}
function safe_add(h, e) {
    var f = (h & 65535) + (e & 65535);
    return (h >> 16) + (e >> 16) + (f >> 16) << 16 | f & 65535
}
function bit_rol(h, e) {
    return h << e | h >>> 32 - e
}
function str2binl(h) {
    for (var e = [
    ], f = (1 << chrsz) - 1, l = 0; l < h.length * chrsz; l += chrsz) e[l >> 5] |= (h.charCodeAt(l / chrsz) & f) << l % 32;
    return e
}
function binl2str(h) {
    for (var e = '', f = (1 << chrsz) - 1, l = 0; l < 32 * h.length; l += chrsz) e += String.fromCharCode(h[l >> 5] >>> l % 32 & f);
    return e
}
function binl2hex(h) {
    for (var e = hexcase ? '0123456789ABCDEF' : '0123456789abcdef', f = '', l = 0; l < 4 * h.length; l++) f += e.charAt(h[l >> 2] >> l % 4 * 8 + 4 & 15) + e.charAt(h[l >> 2] >> l % 4 * 8 & 15);
    return f
}
function binl2b64(h) {
    for (var e = '', f = 0; f < 4 * h.length; f += 3) for (var l = (h[f >> 2] >> f % 4 * 8 & 255) << 16 | (h[f + 1 >> 2] >> (f + 1) % 4 * 8 & 255) << 8 | h[f + 2 >> 2] >> (f + 2) % 4 * 8 & 255, p = 0; 4 > p; p++) e = 8 * f + 6 * p > 32 * h.length ? e + b64pad : e + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(l >> 6 * (3 - p) & 63);
    return e
};
