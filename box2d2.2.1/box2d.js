function ja(b) {
    throw b
}
var Ha = void 0, Na = !0, Ab = null, Gb = !1;
function Hb() {
    return(function () {
    })
}
function Kb(b) {
    return(function () {
        return b
    })
}
try {
    this.Module = Module
} catch (Sb) {
    this.Module = Module = {}
}
var Tb = "object" === typeof process, Vb = "object" === typeof window, Wb = "function" === typeof importScripts, Xb = !Vb && !Tb && !Wb;
if (Tb) {
    Module.print = (function (b) {
        process.stdout.write(b + "\n")
    });
    Module.printErr = (function (b) {
        process.stderr.write(b + "\n")
    });
    var dc = require("fs"), ec = require("path");
    Module.read = (function (b) {
        var b = ec.normalize(b), d = dc.readFileSync(b).toString();
        !d && b != ec.resolve(b) && (b = path.join(__dirname, "..", "src", b), d = dc.readFileSync(b).toString());
        return d
    });
    Module.load = (function (b) {
        ic(read(b))
    });
    Module.arguments || (Module.arguments = process.argv.slice(2))
} else {
    Xb ? (Module.print = print, "undefined" != typeof printErr && (Module.printErr = printErr), Module.read = "undefined" != typeof read ? read : (function (b) {
        snarf(b)
    }), Module.arguments || ("undefined" != typeof scriptArgs ? Module.arguments = scriptArgs : "undefined" != typeof arguments && (Module.arguments = arguments))) : Vb ? (Module.print || (Module.print = (function (b) {
        console.log(b)
    })), Module.printErr || (Module.printErr = (function (b) {
        console.log(b)
    })), Module.read = (function (b) {
        var d = new XMLHttpRequest;
        d.open("GET", b, Gb);
        d.send(Ab);
        return d.responseText
    }), Module.arguments || "undefined" != typeof arguments && (Module.arguments = arguments)) : Wb ? Module.load = importScripts : ja("Unknown runtime environment. Where are we?")
}
function ic(b) {
    eval.call(Ab, b)
}
"undefined" == !Module.load && Module.read && (Module.load = (function (b) {
    ic(Module.read(b))
}));
Module.print || (Module.print = Hb());
Module.printErr || (Module.printErr = Module.print);
Module.arguments || (Module.arguments = []);
Module.print = Module.print;
Module.M = Module.printErr;
Module.preRun || (Module.preRun = []);
Module.postRun || (Module.postRun = []);
function mc(b) {
    if (1 == nc) {
        return 1
    }
    var d = {"%i1":1, "%i8":1, "%i16":2, "%i32":4, "%i64":8, "%float":4, "%double":8}["%" + b];
    d || ("*" == b[b.length - 1] ? d = nc : "i" == b[0] && (b = parseInt(b.substr(1)), rc(0 == b % 8), d = b / 8));
    return d
}
var vc;
function Bc() {
    var b = [], d = 0;
    this.hc = (function (e) {
        e &= 255;
        d && (b.push(e), d--);
        if (0 == b.length) {
            if (128 > e) {
                return String.fromCharCode(e)
            }
            b.push(e);
            d = 191 < e && 224 > e ? 1 : 2;
            return""
        }
        if (0 < d) {
            return""
        }
        var e = b[0], f = b[1], g = b[2], e = 191 < e && 224 > e ? String.fromCharCode((e & 31) << 6 | f & 63) : String.fromCharCode((e & 15) << 12 | (f & 63) << 6 | g & 63);
        b.length = 0;
        return e
    });
    this.Oh = (function (b) {
        for (var b = unescape(encodeURIComponent(b)), d = [], g = 0; g < b.length; g++) {
            d.push(b.charCodeAt(g))
        }
        return d
    })
}
function Dc(b) {
    var d = a;
    a += b;
    a = a + 3 >> 2 << 2;
    return d
}
function Ec(b) {
    var d = Lc;
    Lc += b;
    Lc = Lc + 3 >> 2 << 2;
    if (Lc >= Sc) {
        for (; Sc <= Lc;) {
            Sc = 2 * Sc + 4095 >> 12 << 12
        }
        var b = c, e = new ArrayBuffer(Sc);
        c = new Int8Array(e);
        i = new Int16Array(e);
        l = new Int32Array(e);
        ed = new Uint8Array(e);
        jd = new Uint16Array(e);
        o = new Uint32Array(e);
        q = new Float32Array(e);
        ud = new Float64Array(e);
        c.set(b)
    }
    return d
}
var nc = 4, vd = {}, Nd, s;
function Od(b) {
    Module.print(b + ":\n" + Error().stack);
    ja("Assertion: " + b)
}
function rc(b, d) {
    b || Od("Assertion failed: " + d)
}
var Wd = this;
function ke(b, d, e, f) {
    function g(b, d) {
        if ("string" == d) {
            if (b === Ab || b === Ha || 0 === b) {
                return 0
            }
            h || (h = a);
            var e = Dc(b.length + 1);
            le(b, e);
            return e
        }
        return"array" == d ? (h || (h = a), e = Dc(b.length), me(b, e), e) : b
    }

    var h = 0;
    try {
        var j = eval("_" + b)
    } catch (k) {
        try {
            j = Wd.Module["_" + b]
        } catch (m) {
        }
    }
    rc(j, "Cannot call unknown function " + b + " (perhaps LLVM optimizations or closure removed it?)");
    var n = 0, b = f ? f.map((function (b) {
        return g(b, e[n++])
    })) : [], d = (function (b, d) {
        if ("string" == d) {
            return we(b)
        }
        rc("array" != d);
        return b
    })(j.apply(Ab, b), d);
    h && (a = h);
    return d
}
Module.ccall = ke;
Module.cwrap = (function (b, d, e) {
    return(function () {
        return ke(b, d, e, Array.prototype.slice.call(arguments))
    })
});
function xe(b, d, e) {
    e = e || "i8";
    "*" === e[e.length - 1] && (e = "i32");
    switch (e) {
        case"i1":
            c[b] = d;
            break;
        case"i8":
            c[b] = d;
            break;
        case"i16":
            i[b >> 1] = d;
            break;
        case"i32":
            l[b >> 2] = d;
            break;
        case"i64":
            l[b >> 2] = d;
            break;
        case"float":
            q[b >> 2] = d;
            break;
        case"double":
            Ee[0] = d;
            l[b >> 2] = t[0];
            l[b + 4 >> 2] = t[1];
            break;
        default:
            Od("invalid type for setValue: " + e)
    }
}
Module.setValue = xe;
function Fe(b, d) {
    d = d || "i8";
    "*" === d[d.length - 1] && (d = "i32");
    switch (d) {
        case"i1":
            return c[b];
        case"i8":
            return c[b];
        case"i16":
            return i[b >> 1];
        case"i32":
            return l[b >> 2];
        case"i64":
            return l[b >> 2];
        case"float":
            return q[b >> 2];
        case"double":
            return t[0] = l[b >> 2], t[1] = l[b + 4 >> 2], Ee[0];
        default:
            Od("invalid type for setValue: " + d)
    }
    return Ab
}
Module.getValue = Fe;
var Ge = 1, v = 2;
Module.ALLOC_NORMAL = 0;
Module.ALLOC_STACK = Ge;
Module.ALLOC_STATIC = v;
function B(b, d, e) {
    var f, g;
    "number" === typeof b ? (f = Na, g = b) : (f = Gb, g = b.length);
    var h = "string" === typeof d ? d : Ab, e = [Ne, Dc, Ec][e === Ha ? v : e](Math.max(g, h ? 1 : d.length));
    if (f) {
        return Oe(e, g), e
    }
    f = 0;
    for (var j; f < g;) {
        var k = b[f];
        "function" === typeof k && (k = vd.ji(k));
        j = h || d[f];
        0 === j ? f++ : ("i64" == j && (j = "i32"), xe(e + f, k, j), f += mc(j))
    }
    return e
}
Module.allocate = B;
function we(b, d) {
    for (var e = new Bc, f = "undefined" == typeof d, g = "", h = 0, j; ;) {
        j = ed[b + h];
        if (f && 0 == j) {
            break
        }
        g += e.hc(j);
        h += 1;
        if (!f && h == d) {
            break
        }
    }
    return g
}
Module.Pointer_stringify = we;
Module.Array_stringify = (function (b) {
    for (var d = "", e = 0; e < b.length; e++) {
        d += String.fromCharCode(b[e])
    }
    return d
});
var K, Pe = 4096, c, ed, i, jd, l, o, q, ud, a, Qe, Lc, Ze = Module.TOTAL_STACK || 5242880, Sc = Module.TOTAL_MEMORY || 10485760;
rc(!!Int32Array && !!Float64Array && !!(new Int32Array(1)).subarray && !!(new Int32Array(1)).set, "Cannot fallback to non-typed array case: Code is too specialized");
var gf = new ArrayBuffer(Sc);
c = new Int8Array(gf);
i = new Int16Array(gf);
l = new Int32Array(gf);
ed = new Uint8Array(gf);
jd = new Uint16Array(gf);
o = new Uint32Array(gf);
q = new Float32Array(gf);
ud = new Float64Array(gf);
l[0] = 255;
rc(255 === ed[0] && 0 === ed[3], "Typed arrays 2 must be run on a little-endian system");
Module.HEAP = Ha;
Module.HEAP8 = c;
Module.HEAP16 = i;
Module.HEAP32 = l;
Module.HEAPU8 = ed;
Module.HEAPU16 = jd;
Module.HEAPU32 = o;
Module.HEAPF32 = q;
Module.HEAPF64 = ud;
Qe = (a = 4 * Math.ceil(.25)) + Ze;
var hf = 8 * Math.ceil(Qe / 8);
c.subarray(hf);
var t = l.subarray(hf >> 2), M = q.subarray(hf >> 2), Ee = ud.subarray(hf >> 3);
Qe = hf + 8;
Lc = Qe + 4095 >> 12 << 12;
var sf = B(rf("(null)"), "i8", v);
function tf(b) {
    for (; 0 < b.length;) {
        var d = b.shift(), e = d.gb;
        "number" === typeof e && (e = K[e]);
        e(d.Jh === Ha ? Ab : d.Jh)
    }
}
var uf = [], vf = [], wf = [];
function Mf(b) {
    for (var d = b; c[d++];) {
    }
    return d - b - 1
}
Module.String_len = Mf;
function rf(b, d, e) {
    b = (new Bc).Oh(b);
    e && (b.length = e);
    d || b.push(0);
    return b
}
Module.intArrayFromString = rf;
Module.intArrayToString = (function (b) {
    for (var d = [], e = 0; e < b.length; e++) {
        var f = b[e];
        255 < f && (f &= 255);
        d.push(String.fromCharCode(f))
    }
    return d.join("")
});
function le(b, d, e) {
    b = rf(b, e);
    for (e = 0; e < b.length;) {
        c[d + e] = b[e], e += 1
    }
}
Module.writeStringToMemory = le;
function me(b, d) {
    for (var e = 0; e < b.length; e++) {
        c[d + e] = b[e]
    }
}
Module.writeArrayToMemory = me;
var N = [];
function Nf(b, d) {
    return 0 <= b ? b : 32 >= d ? 2 * Math.abs(1 << d - 1) + b : Math.pow(2, d) + b
}
function Of(b, d) {
    if (0 >= b) {
        return b
    }
    var e = 32 >= d ? Math.abs(1 << d - 1) : Math.pow(2, d - 1);
    if (b >= e && (32 >= d || b > e)) {
        b = -2 * e + b
    }
    return b
}
var Pf = 0, Qf = {}, kg = Gb, lg = Ab;
function Cg(b) {
    Pf++;
    Module.monitorRunDependencies && Module.monitorRunDependencies(Pf);
    b ? (rc(!Qf[b]), Qf[b] = 1, lg === Ab && "undefined" !== typeof setInterval && (lg = setInterval((function () {
        var b = Gb, e;
        for (e in Qf) {
            b || (b = Na, Module.M("still waiting on run dependencies:")), Module.M("dependency: " + e)
        }
        b && Module.M("(end of list)")
    }), 6e3))) : Module.M("warning: run dependency added without ID")
}
Module.addRunDependency = Cg;
function Dg(b) {
    Pf--;
    Module.monitorRunDependencies && Module.monitorRunDependencies(Pf);
    b ? (rc(Qf[b]), delete Qf[b]) : Module.M("warning: run dependency removed without ID");
    0 == Pf && (lg !== Ab && (clearInterval(lg), lg = Ab), kg || Eg())
}
Module.removeRunDependency = Dg;
Module.preloadedImages = {};
Module.preloadedAudios = {};
function fh(b) {
    var d, e, f = b >> 2;
    l[f] = -1;
    e = (b + 12 | 0) >> 2;
    l[e] = 16;
    l[f + 2] = 0;
    var g = Ne(576);
    d = (b + 4 | 0) >> 2;
    l[d] = g;
    Oe(g, 36 * l[e] | 0);
    var g = l[e] - 1 | 0, h = 0 < (g | 0);
    a:do {
        if (h) {
            for (var j = 0; ;) {
                var k = j + 1 | 0;
                l[(l[d] + 36 * j + 20 | 0) >> 2] = k;
                l[(l[d] + 36 * j + 32 | 0) >> 2] = -1;
                j = l[e] - 1 | 0;
                if ((k | 0) >= (j | 0)) {
                    var m = j;
                    break a
                }
                j = k
            }
        } else {
            m = g
        }
    } while (0);
    l[(l[d] + 36 * m + 20 | 0) >> 2] = -1;
    l[(l[d] + 36 * (l[e] - 1) + 32 | 0) >> 2] = -1;
    d = (b + 16 | 0) >> 2;
    l[d] = 0;
    l[d + 1] = 0;
    l[d + 2] = 0;
    l[d + 3] = 0;
    l[(b + 48 | 0) >> 2] = 16;
    l[f + 13] = 0;
    b = Ne(192);
    l[f + 11] = b;
    l[f + 9] = 16;
    l[f + 10] = 0;
    b = Ne(64);
    l[f + 8] = b
}
function gh(b, d, e) {
    var f, g = b | 0, h = hh(g);
    f = (b + 4 | 0) >> 2;
    var j = q[d + 4 >> 2] - .10000000149011612, k = l[f] + 36 * h | 0, m = (M[0] = q[d >> 2] - .10000000149011612, t[0]), j = (M[0] = j, t[0]) | 0;
    l[(k | 0) >> 2] = 0 | m;
    l[(k + 4 | 0) >> 2] = j;
    m = q[d + 12 >> 2] + .10000000149011612;
    k = l[f] + 36 * h + 8 | 0;
    d = (M[0] = q[d + 8 >> 2] + .10000000149011612, t[0]);
    m = (M[0] = m, t[0]) | 0;
    l[(k | 0) >> 2] = 0 | d;
    l[(k + 4 | 0) >> 2] = m;
    l[(l[f] + 36 * h + 16 | 0) >> 2] = e;
    l[(l[f] + 36 * h + 32 | 0) >> 2] = 0;
    ih(g, h);
    e = b + 28 | 0;
    l[e >> 2] = l[e >> 2] + 1 | 0;
    e = (b + 40 | 0) >> 2;
    f = l[e];
    g = b + 36 | 0;
    b = (b + 32 | 0) >> 2;
    (f | 0) == (l[g >> 2] | 0) && (d = l[b], l[g >> 2] = f << 1, f = Ne(f << 3), l[b] = f, Ch(f, d, l[e] << 2), Dh(d), f = l[e]);
    l[((f << 2) + l[b] | 0) >> 2] = h;
    l[e] = l[e] + 1 | 0;
    return h
}
function Eh(b, d, e, f, g) {
    var h, j = b >> 2;
    h = (b + 60 | 0) >> 2;
    l[h] = 0;
    var k = f + 12 | 0, m = q[g + 12 >> 2], n = q[k >> 2], p = q[g + 8 >> 2], u = q[f + 16 >> 2], r = m * n - p * u + q[g >> 2] - q[e >> 2], g = p * n + m * u + q[g + 4 >> 2] - q[e + 4 >> 2], m = q[e + 12 >> 2], n = q[e + 8 >> 2], e = m * r + n * g, r = r * -n + m * g, m = d + 12 | 0, g = o[m >> 2], m = o[m + 4 >> 2], n = (t[0] = g, M[0]), p = (t[0] = m, M[0]), w = d + 20 | 0, u = o[w >> 2], w = o[w + 4 >> 2], x = (t[0] = u, M[0]), y = (t[0] = w, M[0]), A = x - n, C = y - p, z = A * (x - e) + C * (y - r), D = e - n, E = r - p, G = A * D + C * E, f = q[d + 8 >> 2] + q[f + 8 >> 2], H = 0 < G;
    do {
        if (H) {
            if (0 < z) {
                var F = A * A + C * C;
                0 < F || P(N.Pe | 0, 127, N.je | 0, N.Qe | 0);
                var I = 1 / F, F = e - (n * z + x * G) * I, I = r - (p * z + y * G) * I;
                if (F * F + I * I <= f * f) {
                    F = -C;
                    0 > D * F + A * E ? (I = C, F = -A) : (I = F, F = A);
                    var J = Fh(I * I + F * F);
                    1.1920928955078125e-7 > J ? J = F : (J = 1 / J, I *= J, J *= F);
                    l[h] = 1;
                    l[j + 14] = 1;
                    F = b + 40 | 0;
                    I = (M[0] = I, t[0]);
                    J = (M[0] = J, t[0]) | 0;
                    l[F >> 2] = 0 | I;
                    l[F + 4 >> 2] = J;
                    F = b + 48 | 0;
                    l[F >> 2] = g;
                    l[F + 4 >> 2] = m;
                    F = b + 16 | 0;
                    l[F >> 2] = 0;
                    I = F;
                    c[F] = 0;
                    c[I + 1 | 0] = 0;
                    c[I + 2 | 0] = 1;
                    c[I + 3 | 0] = 0;
                    F = k;
                    I = b;
                    J = l[F + 4 >> 2];
                    l[I >> 2] = l[F >> 2];
                    l[I + 4 >> 2] = J
                }
            } else {
                if (F = e - x, I = r - y, F * F + I * I <= f * f) {
                    if (0 != (c[d + 45 | 0] & 1) << 24 >> 24) {
                        var L = d + 36 | 0, J = L | 0, L = L + 4 | 0, L = l[L >> 2], J = (t[0] = l[J >> 2], M[0]), L = (t[0] = L, M[0]);
                        if (0 < (J - x) * F + (L - y) * I) {
                            break
                        }
                    }
                    l[h] = 1;
                    l[j + 14] = 0;
                    q[j + 10] = 0;
                    q[j + 11] = 0;
                    I = b + 48 | 0;
                    F = I | 0;
                    l[F >> 2] = u;
                    F = I + 4 | 0;
                    l[F >> 2] = w;
                    F = b + 16 | 0;
                    l[F >> 2] = 0;
                    I = F;
                    c[F] = 1;
                    c[I + 1 | 0] = 0;
                    c[I + 2 | 0] = 0;
                    c[I + 3 | 0] = 0;
                    I = k;
                    J = b;
                    F = I | 0;
                    I = I + 4 | 0;
                    L = l[I >> 2];
                    I = J | 0;
                    l[I >> 2] = l[F >> 2];
                    F = J + 4 | 0;
                    l[F >> 2] = L
                }
            }
        } else {
            if (D * D + E * E <= f * f) {
                if (0 != (c[d + 44 | 0] & 1) << 24 >> 24 && (F = d + 28 | 0, J = F | 0, L = F + 4 | 0, F = l[L >> 2], I = (t[0] = l[J >> 2], M[0]), F = (t[0] = F, M[0]), 0 < (n - I) * (n - e) + (p - F) * (p - r))) {
                    break
                }
                l[h] = 1;
                l[j + 14] = 0;
                q[j + 10] = 0;
                q[j + 11] = 0;
                I = b + 48 | 0;
                F = I | 0;
                l[F >> 2] = g;
                F = I + 4 | 0;
                l[F >> 2] = m;
                F = b + 16 | 0;
                l[F >> 2] = 0;
                I = F;
                c[F] = 0;
                c[I + 1 | 0] = 0;
                c[I + 2 | 0] = 0;
                c[I + 3 | 0] = 0;
                I = k;
                J = b;
                F = I | 0;
                F = l[F >> 2];
                I = I + 4 | 0;
                L = l[I >> 2];
                I = J | 0;
                l[I >> 2] = F;
                F = J + 4 | 0;
                l[F >> 2] = L
            }
        }
    } while (0)
}
function Gh(b, d, e, f, g, h) {
    var j, k, m, n, p, u, r, w, x, y, A, C, z, D, E, G, H, F, I, J, L, O, R, T, S, U, W, Q, $, ea, sa, Ba, oa, ga, qa, la, Ca, ia, ya, ta, Ia, na, Z, ba, ca, ma, ka, aa, ra, ha, za, X, ua, da, fa, Aa, Qa = g >> 2, pa = b >> 2, cb = a;
    a += 84;
    var Ra;
    Aa = cb >> 2;
    var Ta = cb + 12, $a = cb + 36;
    fa = $a >> 2;
    var va = cb + 60;
    da = va >> 2;
    var Wa = b + 132 | 0, fb = q[f + 12 >> 2], gb = q[h + 8 >> 2], Xa = q[f + 8 >> 2], Ua = q[h + 12 >> 2], Va = fb * gb - Xa * Ua, pb = fb * Ua + Xa * gb, nb = (M[0] = Va, t[0]), La = (M[0] = pb, t[0]), qb = 0 | nb, bb = La | 0, Fa = q[h >> 2] - q[f >> 2], Ma = q[h + 4 >> 2] - q[f + 4 >> 2], wa = fb * Fa + Xa * Ma, hb = Fa * -Xa + fb * Ma, Ya = (M[0] = wa, t[0]), Za = (M[0] = hb, t[0]) | 0, Da = Wa | 0;
    l[Da >> 2] = 0 | Ya;
    var Oa = Wa + 4 | 0;
    l[Oa >> 2] = Za;
    var ib = b + 140 | 0;
    l[ib >> 2] = qb;
    l[ib + 4 >> 2] = bb;
    ua = (b + 144 | 0) >> 2;
    var ab = q[Qa + 3];
    X = (b + 140 | 0) >> 2;
    var Ga = q[Qa + 4];
    za = (Wa | 0) >> 2;
    var jb = pb * ab - Va * Ga + wa;
    ha = (b + 136 | 0) >> 2;
    var Ea = Va * ab + pb * Ga + hb, Pa = b + 148 | 0, Ja = (M[0] = jb, t[0]), db = (M[0] = Ea, t[0]) | 0;
    l[Pa >> 2] = 0 | Ja;
    l[Pa + 4 >> 2] = db;
    var xa = e + 28 | 0, Sa = b + 156 | 0, Ka = l[xa >> 2], tb = l[xa + 4 >> 2];
    l[Sa >> 2] = Ka;
    l[Sa + 4 >> 2] = tb;
    var kb = e + 12 | 0, ub = b + 164 | 0, rb = l[kb >> 2], Bb = l[kb + 4 >> 2];
    l[ub >> 2] = rb;
    l[ub + 4 >> 2] = Bb;
    var lb = e + 20 | 0, yb = b + 172 | 0, xb = l[lb >> 2], Ib = l[lb + 4 >> 2];
    l[yb >> 2] = xb;
    l[yb + 4 >> 2] = Ib;
    var wb = e + 36 | 0, vb = b + 180 | 0, zb = l[wb >> 2], Eb = l[wb + 4 >> 2];
    l[vb >> 2] = zb;
    l[vb + 4 >> 2] = Eb;
    var Cb = c[e + 44 | 0] & 1, eb = 0 != Cb << 24 >> 24, sb = c[e + 45 | 0], ob = 0 != (sb & 1) << 24 >> 24, Db = (t[0] = xb, M[0]), Jb = (t[0] = rb, M[0]), Rb = Db - Jb, Nb = (t[0] = Ib, M[0]), Ob = b + 168 | 0, Lb = (t[0] = Bb, M[0]), Pb = Nb - Lb, Mb = Fh(Rb * Rb + Pb * Pb), Yb = 1.1920928955078125e-7 > Mb, Zb = (t[0] = Ka, M[0]), fc = (t[0] = tb, M[0]), Ub = (t[0] = zb, M[0]), jc = (t[0] = Eb, M[0]);
    if (Yb) {
        var Qb = Rb, mb = Pb
    } else {
        var cc = 1 / Mb, Qb = Rb * cc, mb = Pb * cc
    }
    var Fb = b + 196 | 0, hc = -Qb;
    ra = (Fb | 0) >> 2;
    q[ra] = mb;
    aa = (b + 200 | 0) >> 2;
    q[aa] = hc;
    var wc = mb * (jb - Jb) + (Ea - Lb) * hc;
    if (eb) {
        var pc = Jb - Zb, qc = Lb - fc, $c = Fh(pc * pc + qc * qc);
        if (1.1920928955078125e-7 > $c) {
            var Fc = pc, sc = qc
        } else {
            var kd = 1 / $c, Fc = pc * kd, sc = qc * kd
        }
        var wd = -Fc;
        q[pa + 47] = sc;
        q[pa + 48] = wd;
        var Mc = 0 <= Fc * mb - sc * Qb, $b = sc * (jb - Zb) + (Ea - fc) * wd
    } else {
        $b = Mc = 0
    }
    a:do {
        if (ob) {
            var ac = Ub - Db, oc = jc - Nb, tc = Fh(ac * ac + oc * oc);
            if (1.1920928955078125e-7 > tc) {
                var Oc = ac, ld = oc
            } else {
                var Wc = 1 / tc, Oc = ac * Wc, ld = oc * Wc
            }
            var ad = -Oc;
            ka = (b + 204 | 0) >> 2;
            q[ka] = ld;
            ma = (b + 208 | 0) >> 2;
            q[ma] = ad;
            var Xc = 0 < Qb * ld - mb * Oc, Cc = ld * (jb - Db) + (Ea - Nb) * ad;
            if (0 == (Cb & sb) << 24 >> 24) {
                var fd = Cc, md = Xc;
                Ra = 39
            } else {
                if (Mc & Xc) {
                    var nd = 0 > $b & 0 > wc;
                    do {
                        if (nd) {
                            var Pc = 0 <= Cc;
                            c[b + 248 | 0] = Pc & 1;
                            var gd = b + 212 | 0;
                            if (Pc) {
                                var od = gd;
                                break
                            }
                            var pd = gd, Pd = (M[0] = -mb, t[0]), Xd = (M[0] = Qb, t[0]), qd = 0 | Pd, Qd = Xd | 0, Qc = pd | 0;
                            ca = Qc >> 2;
                            l[ca] = qd;
                            var Jc = pd + 4 | 0;
                            ba = Jc >> 2;
                            l[ba] = Qd;
                            var Kc = b + 228 | 0, gc = Kc | 0;
                            Z = gc >> 2;
                            l[Z] = qd;
                            var hd = Kc + 4 | 0;
                            na = hd >> 2;
                            l[na] = Qd;
                            var xd = b + 236 | 0, bd = xd | 0;
                            Ia = bd >> 2;
                            l[Ia] = qd;
                            var rd = xd + 4 | 0;
                            ta = rd >> 2;
                            l[ta] = Qd;
                            Ra = 66;
                            break a
                        }
                        c[b + 248 | 0] = 1;
                        od = b + 212 | 0
                    } while (0);
                    var ye = Fb, Yd = od, Tc = ye | 0;
                    ya = Tc >> 2;
                    var xc = l[ya], bc = ye + 4 | 0;
                    ia = bc >> 2;
                    var Ed = l[ia], yc = Yd | 0;
                    Ca = yc >> 2;
                    l[Ca] = xc;
                    var Ac = Yd + 4 | 0;
                    la = Ac >> 2;
                    l[la] = Ed;
                    var Zd = b + 188 | 0, $d = b + 228 | 0, cd = Zd | 0;
                    qa = cd >> 2;
                    var zc = l[qa], kc = Zd + 4 | 0;
                    ga = kc >> 2;
                    var Rd = l[ga], Gc = $d | 0;
                    oa = Gc >> 2;
                    l[oa] = zc;
                    var Rc = $d + 4 | 0;
                    Ba = Rc >> 2;
                    l[Ba] = Rd;
                    var Nc = b + 204 | 0, ne = b + 236 | 0, Sd = Nc | 0;
                    sa = Sd >> 2;
                    var Td = l[sa], Ud = Nc + 4 | 0;
                    ea = Ud >> 2;
                    var xf = l[ea];
                    l[ne >> 2] = Td;
                    l[ne + 4 >> 2] = xf
                } else {
                    if (Mc) {
                        var Fd = 0 > $b;
                        do {
                            if (Fd) {
                                if (0 > wc) {
                                    c[b + 248 | 0] = 0;
                                    var oe = b + 212 | 0
                                } else {
                                    var He = 0 <= Cc;
                                    c[b + 248 | 0] = He & 1;
                                    var ae = b + 212 | 0;
                                    if (He) {
                                        var Hc = ae;
                                        break
                                    }
                                    oe = ae
                                }
                                var dd = oe, be = (M[0] = -mb, t[0]), pe = (M[0] = Qb, t[0]) | 0, Uc = dd | 0;
                                $ = Uc >> 2;
                                l[$] = 0 | be;
                                var lc = dd + 4 | 0;
                                Q = lc >> 2;
                                l[Q] = pe;
                                var Gd = -q[ma], Hd = b + 228 | 0, Re = (M[0] = -q[ka], t[0]), Id = (M[0] = Gd, t[0]) | 0, Jd = Hd | 0;
                                W = Jd >> 2;
                                l[W] = 0 | Re;
                                var qe = Hd + 4 | 0;
                                U = qe >> 2;
                                l[U] = Id;
                                var re = -q[aa], Kd = b + 236 | 0, Se = (M[0] = -q[ra], t[0]), Rf = (M[0] = re, t[0]) | 0;
                                l[Kd >> 2] = 0 | Se;
                                l[Kd + 4 >> 2] = Rf;
                                Ra = 66;
                                break a
                            }
                            c[b + 248 | 0] = 1;
                            Hc = b + 212 | 0
                        } while (0);
                        var sd = Fb, Vc = Hc, Tc = sd | 0;
                        ya = Tc >> 2;
                        var Te = l[ya], bc = sd + 4 | 0;
                        ia = bc >> 2;
                        var Ue = l[ia], yc = Vc | 0;
                        Ca = yc >> 2;
                        l[Ca] = Te;
                        Ac = Vc + 4 | 0;
                        la = Ac >> 2;
                        l[la] = Ue;
                        var ce = b + 188 | 0, Yc = b + 228 | 0, cd = ce | 0;
                        qa = cd >> 2;
                        var yd = l[qa], kc = ce + 4 | 0;
                        ga = kc >> 2;
                        var $e = l[ga], Gc = Yc | 0;
                        oa = Gc >> 2;
                        l[oa] = yd;
                        Rc = Yc + 4 | 0;
                        Ba = Rc >> 2;
                        l[Ba] = $e;
                        var ze = b + 236 | 0, Zc = sd | 0;
                        S = Zc >> 2;
                        var Ld = l[S], Md = sd + 4 | 0;
                        T = Md >> 2;
                        var de = l[T], zd = ze | 0;
                        R = zd >> 2;
                        l[R] = Ld;
                        var ee = ze + 4 | 0;
                        O = ee >> 2;
                        l[O] = de
                    } else {
                        if (Xc) {
                            var yf = 0 > Cc;
                            do {
                                if (yf) {
                                    if (0 > $b) {
                                        c[b + 248 | 0] = 0;
                                        var af = b + 212 | 0
                                    } else {
                                        var Ie = 0 <= wc;
                                        c[b + 248 | 0] = Ie & 1;
                                        var zf = b + 212 | 0;
                                        if (Ie) {
                                            var jf = zf;
                                            break
                                        }
                                        af = zf
                                    }
                                    var bf = af, Sf = (M[0] = -mb, t[0]), kf = (M[0] = Qb, t[0]) | 0, Uc = bf | 0;
                                    $ = Uc >> 2;
                                    l[$] = 0 | Sf;
                                    lc = bf + 4 | 0;
                                    Q = lc >> 2;
                                    l[Q] = kf;
                                    var Ae = -q[aa], Ad = b + 228 | 0, Af = (M[0] = -q[ra], t[0]), Tf = (M[0] = Ae, t[0]) | 0, Jd = Ad | 0;
                                    W = Jd >> 2;
                                    l[W] = 0 | Af;
                                    qe = Ad + 4 | 0;
                                    U = qe >> 2;
                                    l[U] = Tf;
                                    var Fg = -q[pa + 48], Gg = b + 236 | 0, mg = (M[0] = -q[pa + 47], t[0]), ng = (M[0] = Fg, t[0]) | 0, og = Gg | 0;
                                    l[og >> 2] = 0 | mg;
                                    var Bf = Gg + 4 | 0;
                                    l[Bf >> 2] = ng;
                                    Ra = 66;
                                    break a
                                }
                                c[b + 248 | 0] = 1;
                                jf = b + 212 | 0
                            } while (0);
                            var Uf = Fb, Vf = jf, Tc = Uf | 0;
                            ya = Tc >> 2;
                            var Hg = l[ya], bc = Uf + 4 | 0;
                            ia = bc >> 2;
                            var Jh = l[ia], yc = Vf | 0;
                            Ca = yc >> 2;
                            l[Ca] = Hg;
                            Ac = Vf + 4 | 0;
                            la = Ac >> 2;
                            l[la] = Jh;
                            var Ig = b + 228 | 0, Uc = Uf | 0;
                            $ = Uc >> 2;
                            var Fj = l[$], lc = Uf + 4 | 0;
                            Q = lc >> 2;
                            var Ji = l[Q];
                            l[Ig >> 2] = Fj;
                            l[Ig + 4 >> 2] = Ji;
                            var pg = b + 204 | 0, Kh = b + 236 | 0, Zc = pg | 0;
                            S = Zc >> 2;
                            var Wf = l[S], Md = pg + 4 | 0;
                            T = Md >> 2;
                            var Lh = l[T], zd = Kh | 0;
                            R = zd >> 2;
                            l[R] = Wf;
                            ee = Kh + 4 | 0;
                            O = ee >> 2;
                            l[O] = Lh
                        } else {
                            var lf = 0 > $b | 0 > wc;
                            do {
                                if (!lf) {
                                    var qg = 0 <= Cc;
                                    c[b + 248 | 0] = qg & 1;
                                    var jh = b + 212 | 0;
                                    if (!qg) {
                                        var Mh = jh;
                                        break
                                    }
                                    var Be = Fb, rg = jh, se = Be | 0;
                                    L = se >> 2;
                                    var Jg = o[L], fe = Be + 4 | 0;
                                    J = fe >> 2;
                                    var te = o[J], ue = rg | 0;
                                    I = ue >> 2;
                                    l[I] = Jg;
                                    var ge = rg + 4 | 0;
                                    F = ge >> 2;
                                    l[F] = te;
                                    var mf = b + 228 | 0, Qc = mf | 0;
                                    ca = Qc >> 2;
                                    l[ca] = Jg;
                                    Jc = mf + 4 | 0;
                                    ba = Jc >> 2;
                                    l[ba] = te;
                                    var Ki = b + 236 | 0, gc = Ki | 0;
                                    Z = gc >> 2;
                                    l[Z] = Jg;
                                    hd = Ki + 4 | 0;
                                    na = hd >> 2;
                                    l[na] = te;
                                    Ra = 66;
                                    break a
                                }
                                c[b + 248 | 0] = 0;
                                Mh = b + 212 | 0
                            } while (0);
                            var Kg = Mh, sg = (M[0] = -mb, t[0]), kh = (M[0] = Qb, t[0]) | 0, Uc = Kg | 0;
                            $ = Uc >> 2;
                            l[$] = 0 | sg;
                            lc = Kg + 4 | 0;
                            Q = lc >> 2;
                            l[Q] = kh;
                            var Nh = -q[ma], tg = b + 228 | 0, Oh = (M[0] = -q[ka], t[0]), Ph = (M[0] = Nh, t[0]) | 0, Jd = tg | 0;
                            W = Jd >> 2;
                            l[W] = 0 | Oh;
                            qe = tg + 4 | 0;
                            U = qe >> 2;
                            l[U] = Ph;
                            var Lg = -q[pa + 48], Mg = b + 236 | 0, Ic = (M[0] = -q[pa + 47], t[0]), uc = (M[0] = Lg, t[0]) | 0, og = Mg | 0;
                            l[og >> 2] = 0 | Ic;
                            Bf = Mg + 4 | 0;
                            l[Bf >> 2] = uc
                        }
                    }
                }
                Ra = 66
            }
        } else {
            md = fd = 0, Ra = 39
        }
    } while (0);
    a:do {
        if (39 == Ra) {
            if (eb) {
                var Li = 0 <= $b;
                if (Mc) {
                    do {
                        if (!Li) {
                            var Qh = 0 <= wc;
                            c[b + 248 | 0] = Qh & 1;
                            var Ng = b + 212 | 0;
                            if (Qh) {
                                var Og = Ng;
                                break
                            }
                            var Pg = Ng, Mi = (M[0] = -mb, t[0]), Rh = (M[0] = Qb, t[0]), Qg = Rh | 0, Qc = Pg | 0;
                            ca = Qc >> 2;
                            l[ca] = 0 | Mi;
                            Jc = Pg + 4 | 0;
                            ba = Jc >> 2;
                            l[ba] = Qg;
                            var Sh = Fb, lh = b + 228 | 0, Gc = Sh | 0;
                            oa = Gc >> 2;
                            var Th = l[oa], Rc = Sh + 4 | 0;
                            Ba = Rc >> 2;
                            var Ni = l[Ba], nf = lh | 0;
                            H = nf >> 2;
                            l[H] = Th;
                            var he = lh + 4 | 0;
                            G = he >> 2;
                            l[G] = Ni;
                            var Bd = b + 236 | 0, cf = -(t[0] = Th, M[0]), ug = Bd, Ce = 0 | (M[0] = cf, t[0]), Cf = Rh | 0;
                            l[ug >> 2] = Ce;
                            l[ug + 4 >> 2] = Cf;
                            break a
                        }
                        c[b + 248 | 0] = 1;
                        Og = b + 212 | 0
                    } while (0);
                    var td = Fb, Rg = Og, Tc = td | 0;
                    ya = Tc >> 2;
                    var Gj = l[ya], bc = td + 4 | 0;
                    ia = bc >> 2;
                    var Uh = l[ia], yc = Rg | 0;
                    Ca = yc >> 2;
                    l[Ca] = Gj;
                    Ac = Rg + 4 | 0;
                    la = Ac >> 2;
                    l[la] = Uh;
                    var Oi = b + 188 | 0, vg = b + 228 | 0, cd = Oi | 0;
                    qa = cd >> 2;
                    var Vh = l[qa], kc = Oi + 4 | 0;
                    ga = kc >> 2;
                    var Wh = l[ga], Gc = vg | 0;
                    oa = Gc >> 2;
                    l[oa] = Vh;
                    Rc = vg + 4 | 0;
                    Ba = Rc >> 2;
                    l[Ba] = Wh;
                    var Xh = -q[aa], Yh = b + 236 | 0, Hj = (M[0] = -q[ra], t[0]), Je = (M[0] = Xh, t[0]) | 0, Xf = Yh | 0;
                    l[Xf >> 2] = 0 | Hj;
                    var Yf = Yh + 4 | 0;
                    l[Yf >> 2] = Je
                } else {
                    do {
                        if (Li) {
                            var Zh = 0 <= wc;
                            c[b + 248 | 0] = Zh & 1;
                            var Sg = b + 212 | 0;
                            if (!Zh) {
                                var mh = Sg;
                                break
                            }
                            var Df = Fb, $h = Sg, se = Df | 0;
                            L = se >> 2;
                            var Tg = o[L], fe = Df + 4 | 0;
                            J = fe >> 2;
                            var ai = o[J], ue = $h | 0;
                            I = ue >> 2;
                            l[I] = Tg;
                            ge = $h + 4 | 0;
                            F = ge >> 2;
                            l[F] = ai;
                            var wg = b + 228 | 0, Qc = wg | 0;
                            ca = Qc >> 2;
                            l[ca] = Tg;
                            Jc = wg + 4 | 0;
                            ba = Jc >> 2;
                            l[ba] = ai;
                            var Pi = b + 236 | 0, df = -(t[0] = Tg, M[0]), nh = Pi, oh = (M[0] = df, t[0]), ph = (M[0] = Qb, t[0]) | 0, Zf = nh | 0;
                            E = Zf >> 2;
                            l[E] = 0 | oh;
                            var Ve = nh + 4 | 0;
                            D = Ve >> 2;
                            l[D] = ph;
                            break a
                        }
                        c[b + 248 | 0] = 0;
                        mh = b + 212 | 0
                    } while (0);
                    var of = mh, Ug = (M[0] = -mb, t[0]), bi = (M[0] = Qb, t[0]) | 0, Uc = of | 0;
                    $ = Uc >> 2;
                    l[$] = 0 | Ug;
                    lc = of + 4 | 0;
                    Q = lc >> 2;
                    l[Q] = bi;
                    var Vg = Fb, Wg = b + 228 | 0, We = Vg | 0;
                    z = We >> 2;
                    var Qi = l[z], ef = Vg + 4 | 0;
                    C = ef >> 2;
                    var Ij = l[C], bd = Wg | 0;
                    Ia = bd >> 2;
                    l[Ia] = Qi;
                    rd = Wg + 4 | 0;
                    ta = rd >> 2;
                    l[ta] = Ij;
                    var $f = -q[pa + 48], Ef = b + 236 | 0, qh = (M[0] = -q[pa + 47], t[0]), ci = (M[0] = $f, t[0]) | 0, ff = Ef | 0;
                    l[ff >> 2] = 0 | qh;
                    var pf = Ef + 4 | 0;
                    l[pf >> 2] = ci
                }
            } else {
                var qf = 0 <= wc;
                if (ob) {
                    if (md) {
                        do {
                            if (!qf) {
                                var xg = 0 <= fd;
                                c[b + 248 | 0] = xg & 1;
                                var yg = b + 212 | 0;
                                if (xg) {
                                    var Ff = yg;
                                    break
                                }
                                var Xg = yg, Yg = (M[0] = -mb, t[0]), ie = (M[0] = Qb, t[0]), Gf = 0 | Yg, Hf = ie | 0, Qc = Xg | 0;
                                ca = Qc >> 2;
                                l[ca] = Gf;
                                Jc = Xg + 4 | 0;
                                ba = Jc >> 2;
                                l[ba] = Hf;
                                var rh = b + 228 | 0, gc = rh | 0;
                                Z = gc >> 2;
                                l[Z] = Gf;
                                hd = rh + 4 | 0;
                                na = hd >> 2;
                                l[na] = Hf;
                                var Ri = Fb, Si = b + 236 | 0, Zc = Ri | 0;
                                S = Zc >> 2;
                                var Jj = l[S], Md = Ri + 4 | 0;
                                T = Md >> 2;
                                var di = l[T], zd = Si | 0;
                                R = zd >> 2;
                                l[R] = Jj;
                                ee = Si + 4 | 0;
                                O = ee >> 2;
                                l[O] = di;
                                break a
                            }
                            c[b + 248 | 0] = 1;
                            Ff = b + 212 | 0
                        } while (0);
                        var ei = Fb, Qk = Ff, Tc = ei | 0;
                        ya = Tc >> 2;
                        var zn = l[ya], bc = ei + 4 | 0;
                        ia = bc >> 2;
                        var Kj = l[ia], yc = Qk | 0;
                        Ca = yc >> 2;
                        l[Ca] = zn;
                        Ac = Qk + 4 | 0;
                        la = Ac >> 2;
                        l[la] = Kj;
                        var Lj = -q[aa], Ti = b + 228 | 0, Ui = (M[0] = -q[ra], t[0]), Rk = (M[0] = Lj, t[0]) | 0, Sd = Ti | 0;
                        sa = Sd >> 2;
                        l[sa] = 0 | Ui;
                        Ud = Ti + 4 | 0;
                        ea = Ud >> 2;
                        l[ea] = Rk;
                        var Ke = b + 204 | 0, Mj = b + 236 | 0, fi = Ke | 0, Sk = l[fi >> 2], Vi = Ke + 4 | 0, Tk = l[Vi >> 2], Xf = Mj | 0;
                        l[Xf >> 2] = Sk;
                        Yf = Mj + 4 | 0;
                        l[Yf >> 2] = Tk
                    } else {
                        do {
                            if (qf) {
                                var Wi = 0 <= fd;
                                c[b + 248 | 0] = Wi & 1;
                                var Nj = b + 212 | 0;
                                if (!Wi) {
                                    var Oj = Nj;
                                    break
                                }
                                var Pj = Fb, ag = Nj, se = Pj | 0;
                                L = se >> 2;
                                var gi = o[L], fe = Pj + 4 | 0;
                                J = fe >> 2;
                                var If = o[J], ue = ag | 0;
                                I = ue >> 2;
                                l[I] = gi;
                                ge = ag + 4 | 0;
                                F = ge >> 2;
                                l[F] = If;
                                var Xi = b + 228 | 0, Uk = -(t[0] = gi, M[0]), Qj = Xi, Vk = (M[0] = Uk, t[0]), Wk = (M[0] = Qb, t[0]) | 0, Yi = Qj | 0;
                                l[Yi >> 2] = 0 | Vk;
                                var hi = Qj + 4 | 0;
                                l[hi >> 2] = Wk;
                                var Rj = b + 236 | 0, Zf = Rj | 0;
                                E = Zf >> 2;
                                l[E] = gi;
                                Ve = Rj + 4 | 0;
                                D = Ve >> 2;
                                l[D] = If;
                                break a
                            }
                            c[b + 248 | 0] = 0;
                            Oj = b + 212 | 0
                        } while (0);
                        var Sj = Oj, Tj = (M[0] = -mb, t[0]), Zg = (M[0] = Qb, t[0]) | 0, Uc = Sj | 0;
                        $ = Uc >> 2;
                        l[$] = 0 | Tj;
                        lc = Sj + 4 | 0;
                        Q = lc >> 2;
                        l[Q] = Zg;
                        var Xk = -q[pa + 52], Zi = b + 228 | 0, Yk = (M[0] = -q[pa + 51], t[0]), Zk = (M[0] = Xk, t[0]) | 0, fi = Zi | 0;
                        l[fi >> 2] = 0 | Yk;
                        Vi = Zi + 4 | 0;
                        l[Vi >> 2] = Zk;
                        var $i = Fb, Uj = b + 236 | 0, ii = l[$i >> 2], $k = l[$i + 4 >> 2], ff = Uj | 0;
                        l[ff >> 2] = ii;
                        pf = Uj + 4 | 0;
                        l[pf >> 2] = $k
                    }
                } else {
                    c[b + 248 | 0] = qf & 1;
                    var aj = b + 212 | 0;
                    if (qf) {
                        var al = Fb, bj = aj, se = al | 0;
                        L = se >> 2;
                        var ji = o[L], fe = al + 4 | 0;
                        J = fe >> 2;
                        var bl = l[J], ue = bj | 0;
                        I = ue >> 2;
                        l[I] = ji;
                        ge = bj + 4 | 0;
                        F = ge >> 2;
                        l[F] = bl;
                        var cj = b + 228 | 0, Vj = -(t[0] = ji, M[0]), Wj = cj, ki = (M[0] = Vj, t[0]), pm = (M[0] = Qb, t[0]), qm = 0 | ki, cl = pm | 0, Yi = Wj | 0;
                        l[Yi >> 2] = qm;
                        hi = Wj + 4 | 0;
                        l[hi >> 2] = cl;
                        var bg = b + 236 | 0, Zf = bg | 0;
                        E = Zf >> 2;
                        l[E] = qm;
                        Ve = bg + 4 | 0;
                        D = Ve >> 2;
                        l[D] = cl
                    } else {
                        var li = aj, dl = (M[0] = -mb, t[0]), rm = (M[0] = Qb, t[0]) | 0, Qc = li | 0;
                        ca = Qc >> 2;
                        l[ca] = 0 | dl;
                        Jc = li + 4 | 0;
                        ba = Jc >> 2;
                        l[ba] = rm;
                        var dj = Fb, Xj = b + 228 | 0, Gc = dj | 0;
                        oa = Gc >> 2;
                        var Le = l[oa], Rc = dj + 4 | 0;
                        Ba = Rc >> 2;
                        var el = l[Ba], nf = Xj | 0;
                        H = nf >> 2;
                        l[H] = Le;
                        he = Xj + 4 | 0;
                        G = he >> 2;
                        l[G] = el;
                        var Yj = b + 236 | 0, zd = Yj | 0;
                        R = zd >> 2;
                        l[R] = Le;
                        ee = Yj + 4 | 0;
                        O = ee >> 2;
                        l[O] = el
                    }
                }
            }
        }
    } while (0);
    A = (g + 148 | 0) >> 2;
    var fl = l[A];
    y = (b + 128 | 0) >> 2;
    l[y] = fl;
    var Zj = 0 < (l[A] | 0);
    a:do {
        if (Zj) {
            for (var Jf = 0; ;) {
                var gl = q[ua], ej = q[((Jf << 3) + 20 >> 2) + Qa], $j = q[X], hl = q[((Jf << 3) + 24 >> 2) + Qa], sm = $j * ej + gl * hl + q[ha], fj = (Jf << 3) + b | 0, il = (M[0] = gl * ej - $j * hl + q[za], t[0]), $g = (M[0] = sm, t[0]) | 0, zd = fj | 0;
                R = zd >> 2;
                l[R] = 0 | il;
                ee = fj + 4 | 0;
                O = ee >> 2;
                l[O] = $g;
                var jl = q[ua], kl = q[((Jf << 3) + 84 >> 2) + Qa], ak = q[X], bk = q[((Jf << 3) + 88 >> 2) + Qa], ll = ak * kl + jl * bk, ml = (Jf << 3) + b + 64 | 0, nl = (M[0] = jl * kl - ak * bk, t[0]), sh = (M[0] = ll, t[0]) | 0, Da = ml | 0;
                l[Da >> 2] = 0 | nl;
                Oa = ml + 4 | 0;
                l[Oa >> 2] = sh;
                var ol = Jf + 1 | 0;
                if ((ol | 0) >= (l[A] | 0)) {
                    break a
                }
                Jf = ol
            }
        }
    } while (0);
    x = (b + 244 | 0) >> 2;
    q[x] = .019999999552965164;
    var mi = d + 60 | 0;
    l[mi >> 2] = 0;
    var th = b + 248 | 0, ah = l[y], ck = 0 < (ah | 0);
    a:do {
        if (ck) {
            for (var pl = q[pa + 41], tm = q[Ob >> 2], dk = q[pa + 53], gj = q[pa + 54], uh = 0, cg = 3.4028234663852886e+38; ;) {
                var ek = dk * (q[(uh << 3 >> 2) + pa] - pl) + gj * (q[((uh << 3) + 4 >> 2) + pa] - tm), ni = ek < cg ? ek : cg, hj = uh + 1 | 0;
                if ((hj | 0) == (ah | 0)) {
                    var bh = ni;
                    break a
                }
                uh = hj;
                cg = ni
            }
        } else {
            bh = 3.4028234663852886e+38
        }
    } while (0);
    var fk = bh > q[x];
    a:do {
        if (!fk) {
            var ij = cb, zg = b, gk = Ha, ql = Ha, rl = Ha, vh = zg >> 2, jj = Ha, rl = (ij | 0) >> 2;
            l[rl] = 0;
            ql = (ij + 4 | 0) >> 2;
            l[ql] = -1;
            gk = (ij + 8 | 0) >> 2;
            q[gk] = -3.4028234663852886e+38;
            for (var um = q[vh + 54], vm = q[vh + 53], pq = l[vh + 32], qq = zg + 164 | 0, At = zg + 168 | 0, An = zg + 172 | 0, rq = zg + 176 | 0, sq = zg + 244 | 0, tq = zg + 228 | 0, Bt = zg + 232 | 0, Ct = zg + 236 | 0, uq = zg + 240 | 0, je = 0, sl = -3.4028234663852886e+38; (je | 0) < (pq | 0);) {
                var Bn = q[((je << 3) + 64 >> 2) + vh], hk = -Bn, kj = -q[((je << 3) + 68 >> 2) + vh], Cn = q[(je << 3 >> 2) + vh], Dn = q[((je << 3) + 4 >> 2) + vh], vq = (Cn - q[qq >> 2]) * hk + (Dn - q[At >> 2]) * kj, wq = (Cn - q[An >> 2]) * hk + (Dn - q[rq >> 2]) * kj, tl = vq < wq ? vq : wq;
                if (tl > q[sq >> 2]) {
                    l[rl] = 2;
                    l[ql] = je;
                    q[gk] = tl;
                    break
                }
                if (0 > Bn * um + vm * kj) {
                    if (-.03490658849477768 <= (hk - q[tq >> 2]) * vm + (kj - q[Bt >> 2]) * um & tl > sl) {
                        jj = 9
                    } else {
                        var En = sl, jj = 10
                    }
                } else {
                    -.03490658849477768 <= (hk - q[Ct >> 2]) * vm + (kj - q[uq >> 2]) * um & tl > sl ? jj = 9 : (En = sl, jj = 10)
                }
                9 == jj && (l[rl] = 2, l[ql] = je, En = q[gk] = tl);
                je = je + 1 | 0;
                sl = En
            }
            var Fn = l[Aa], Dt = 0 == (Fn | 0);
            do {
                if (Dt) {
                    Ra = 75
                } else {
                    var wm = q[Aa + 2];
                    if (wm > q[x]) {
                        break a
                    }
                    if (wm > .9800000190734863 * bh + .0010000000474974513) {
                        var ik = o[Aa + 1], jk = d + 56 | 0;
                        if (1 == (Fn | 0)) {
                            var Gn = jk;
                            Ra = 77
                        } else {
                            l[jk >> 2] = 2;
                            var ul = Ta, se = ub | 0;
                            L = se >> 2;
                            var vl = l[L], fe = ub + 4 | 0;
                            J = fe >> 2;
                            var wl = l[J], ue = ul | 0;
                            I = ue >> 2;
                            l[I] = vl;
                            ge = ul + 4 | 0;
                            F = ge >> 2;
                            l[F] = wl;
                            var Ag = Ta + 8 | 0, lj = Ag;
                            c[Ag] = 0;
                            var oi = ik & 255;
                            c[lj + 1 | 0] = oi;
                            c[lj + 2 | 0] = 0;
                            c[lj + 3 | 0] = 1;
                            var mj = Ta + 12 | 0, nf = yb | 0;
                            H = nf >> 2;
                            var nj = l[H], he = yb + 4 | 0;
                            G = he >> 2;
                            var kk = l[G], Sd = mj | 0;
                            sa = Sd >> 2;
                            l[sa] = nj;
                            Ud = mj + 4 | 0;
                            ea = Ud >> 2;
                            l[ea] = kk;
                            var lk = Ta + 20 | 0, oj = lk;
                            c[lk] = 0;
                            c[oj + 1 | 0] = oi;
                            c[oj + 2 | 0] = 0;
                            c[oj + 3 | 0] = 1;
                            var xl = ik + 1 | 0, mk = (xl | 0) < (l[y] | 0) ? xl : 0, nk = (ik << 3) + b | 0, xm = l[nk >> 2], yl = l[nk + 4 >> 2], ok = (mk << 3) + b | 0, pk = l[ok >> 2], pi = l[ok + 4 >> 2], wh = (ik << 3) + b + 64 | 0, qk = l[wh >> 2], rk = l[wh + 4 >> 2], zl = mk & 255, Al = (t[0] = vl, M[0]), Bl = (t[0] = wl, M[0]), ym = (t[0] = nj, M[0]), Cl = (t[0] = kk, M[0]), xh = ik, pj = zl, yh = xm, qi = yl, qj = pk, rj = pi, sj = qk, ri = rk, tj = ym, Bg = Al, sk = Cl, zh = Bl, tk = oi, Ah = 0;
                            Ra = 84
                        }
                    } else {
                        Ra = 75
                    }
                }
            } while (0);
            75 == Ra && (Gn = d + 56 | 0, Ra = 77);
            if (77 == Ra) {
                l[Gn >> 2] = 1;
                var uj = l[y], zm = 1 < (uj | 0);
                b:do {
                    if (zm) {
                        for (var uk = q[pa + 54], dg = q[pa + 53], Dl = 0, eg = dg * q[pa + 16] + uk * q[pa + 17], Xe = 1; ;) {
                            var Am = dg * q[((Xe << 3) + 64 >> 2) + pa] + uk * q[((Xe << 3) + 68 >> 2) + pa], Bm = Am < eg, si = Bm ? Xe : Dl, Et = Bm ? Am : eg, Hn = Xe + 1 | 0;
                            if ((Hn | 0) >= (uj | 0)) {
                                var El = si;
                                break b
                            }
                            Dl = si;
                            eg = Et;
                            Xe = Hn
                        }
                    } else {
                        El = 0
                    }
                } while (0);
                var xq = El + 1 | 0, Fl = (xq | 0) < (uj | 0) ? xq : 0, In = (El << 3) + b | 0, yq = Ta, yc = In | 0;
                Ca = yc >> 2;
                var Gl = l[Ca], Ac = In + 4 | 0;
                la = Ac >> 2;
                var Jn = l[la];
                l[yq >> 2] = Gl;
                l[yq + 4 >> 2] = Jn;
                var Kn = Ta + 8 | 0, Hl = Kn;
                c[Kn] = 0;
                var Ln = El & 255;
                c[Hl + 1 | 0] = Ln;
                c[Hl + 2 | 0] = 1;
                c[Hl + 3 | 0] = 0;
                var Il = (Fl << 3) + b | 0, Mn = Ta + 12 | 0, Nn = l[Il >> 2], zq = l[Il + 4 >> 2];
                l[Mn >> 2] = Nn;
                l[Mn + 4 >> 2] = zq;
                var Aq = Ta + 20 | 0, On = Aq;
                c[Aq] = 0;
                c[On + 1 | 0] = Fl & 255;
                c[On + 2 | 0] = 1;
                c[On + 3 | 0] = 0;
                var Ft = 0 == (c[th] & 1) << 24 >> 24, Gt = (t[0] = Gl, M[0]), Ht = (t[0] = Jn, M[0]), It = (t[0] = Nn, M[0]), Jt = (t[0] = zq, M[0]);
                if (Ft) {
                    var Pn = yb | 0, Qn = yb + 4 | 0, Kt = l[Pn >> 2], Lt = l[Qn >> 2], Rn = ub | 0, Sn = ub + 4 | 0, Bq = l[Rn >> 2], Cq = l[Sn >> 2], Mt = -q[aa], Nt = (M[0] = -q[ra], t[0]), Ot = (M[0] = Mt, t[0]), xh = 1, pj = 0, yh = Kt, qi = Lt, qj = Bq, rj = Cq, sj = Nt, ri = Ot
                } else {
                    var Pn = ub | 0, Qn = ub + 4 | 0, Rn = yb | 0, Sn = yb + 4 | 0, Dq = Fb, xh = 0, pj = 1, yh = l[Pn >> 2], qi = l[Qn >> 2], qj = l[Rn >> 2], rj = l[Sn >> 2], sj = l[Dq >> 2], ri = l[Dq + 4 >> 2]
                }
                tj = It;
                Bg = Gt;
                sk = Jt;
                zh = Ht;
                tk = Ln;
                Ah = 1
            }
            var Jl = (t[0] = yh, M[0]), Kl = (t[0] = qi, M[0]), Pt = (t[0] = rj, M[0]), ti = (t[0] = sj, M[0]), ui = (t[0] = ri, M[0]), Tn = -ti, Eq = ui * Jl + Kl * Tn, Qt = ti * Pt, Rt = (t[0] = qj, M[0]), Un = -ui, Me = Rt * Un + Qt, Vd = ui * Bg + zh * Tn - Eq, Vn = Ta + 12 | 0, vj = ui * tj + sk * Tn - Eq;
            if (0 < Vd) {
                var Ll = 0
            } else {
                w = $a >> 2, r = Ta >> 2, l[w] = l[r], l[w + 1] = l[r + 1], l[w + 2] = l[r + 2], Ll = 1
            }
            if (0 < vj) {
                var vk = Ll
            } else {
                u = ($a + 12 * Ll | 0) >> 2, p = Vn >> 2, l[u] = l[p], l[u + 1] = l[p + 1], l[u + 2] = l[p + 2], vk = Ll + 1 | 0
            }
            if (0 > Vd * vj) {
                var Cd = Vd / (Vd - vj), ve = zh + (sk - zh) * Cd, Wn = $a + 12 * vk | 0, Fq = (M[0] = Bg + (tj - Bg) * Cd, t[0]), Gq = (M[0] = ve, t[0]) | 0, We = Wn | 0;
                z = We >> 2;
                l[z] = 0 | Fq;
                ef = Wn + 4 | 0;
                C = ef >> 2;
                l[C] = Gq;
                var Xn = $a + 12 * vk + 8 | 0, Cm = Xn;
                c[Xn] = xh & 255;
                c[Cm + 1 | 0] = tk;
                c[Cm + 2 | 0] = 0;
                c[Cm + 3 | 0] = 1;
                var Yn = vk + 1 | 0
            } else {
                Yn = vk
            }
            if (2 <= (Yn | 0)) {
                var Dm = q[fa], Em = q[fa + 1], Ml = Dm * Un + ti * Em - Me, Fm = $a + 12 | 0, Hq = q[Fm >> 2], Iq = q[fa + 4], Gm = Hq * Un + ti * Iq - Me;
                if (0 < Ml) {
                    var Hm = 0
                } else {
                    n = va >> 2, m = $a >> 2, l[n] = l[m], l[n + 1] = l[m + 1], l[n + 2] = l[m + 2], Hm = 1
                }
                if (0 < Gm) {
                    var Nl = Hm
                } else {
                    k = (va + 12 * Hm | 0) >> 2, j = Fm >> 2, l[k] = l[j], l[k + 1] = l[j + 1], l[k + 2] = l[j + 2], Nl = Hm + 1 | 0
                }
                if (0 > Ml * Gm) {
                    var Jq = Ml / (Ml - Gm), St = Em + (Iq - Em) * Jq, Kq = va + 12 * Nl | 0, Tt = (M[0] = Dm + (Hq - Dm) * Jq, t[0]), Ut = (M[0] = St, t[0]) | 0, We = Kq | 0;
                    z = We >> 2;
                    l[z] = 0 | Tt;
                    ef = Kq + 4 | 0;
                    C = ef >> 2;
                    l[C] = Ut;
                    var Im = va + 12 * Nl + 8 | 0, Jm = Im;
                    c[Im] = pj;
                    c[Jm + 1 | 0] = c[$a + 9 | 0];
                    c[Jm + 2 | 0] = 0;
                    c[Jm + 3 | 0] = 1;
                    var Zn = Nl + 1 | 0
                } else {
                    Zn = Nl
                }
                if (2 <= (Zn | 0)) {
                    var $n = d + 40 | 0;
                    if (Ah) {
                        var ao = $n;
                        l[ao >> 2] = 0 | sj;
                        l[ao + 4 >> 2] = ri | 0;
                        var bo = d + 48 | 0, nf = bo | 0;
                        H = nf >> 2;
                        l[H] = 0 | yh;
                        he = bo + 4 | 0;
                        G = he >> 2;
                        l[G] = qi | 0;
                        var co = q[da], Km = q[da + 1], Lm = q[x];
                        if (ti * (co - Jl) + ui * (Km - Kl) > Lm) {
                            var wk = 0, eo = Lm
                        } else {
                            var Ol = co - q[za], Mm = Km - q[ha], fo = q[ua], go = q[X], Lq = Ol * -go + fo * Mm, Mq = d, Vt = (M[0] = fo * Ol + go * Mm, t[0]), Nq = (M[0] = Lq, t[0]) | 0, bd = Mq | 0;
                            Ia = bd >> 2;
                            l[Ia] = 0 | Vt;
                            rd = Mq + 4 | 0;
                            ta = rd >> 2;
                            l[ta] = Nq;
                            l[d + 16 >> 2] = l[da + 2];
                            wk = 1;
                            eo = q[x]
                        }
                        var ho = q[da + 3], vi = q[da + 4];
                        if (ti * (ho - Jl) + ui * (vi - Kl) > eo) {
                            var ch = wk
                        } else {
                            var Pl = ho - q[za], io = vi - q[ha], Nm = q[ua], Om = q[X], jo = Pl * -Om + Nm * io, ko = d + 20 * wk | 0, lo = (M[0] = Nm * Pl + Om * io, t[0]), Oq = (M[0] = jo, t[0]) | 0, Zc = ko | 0;
                            S = Zc >> 2;
                            l[S] = 0 | lo;
                            Md = ko + 4 | 0;
                            T = Md >> 2;
                            l[T] = Oq;
                            l[(d + 16 >> 2) + (5 * wk | 0)] = l[da + 5];
                            ch = wk + 1 | 0
                        }
                    } else {
                        var Pq = (xh << 3) + g + 84 | 0, Ql = $n, Tc = Pq | 0;
                        ya = Tc >> 2;
                        var Wt = l[ya], bc = Pq + 4 | 0;
                        ia = bc >> 2;
                        var Xt = l[ia], yc = Ql | 0;
                        Ca = yc >> 2;
                        l[Ca] = Wt;
                        Ac = Ql + 4 | 0;
                        la = Ac >> 2;
                        l[la] = Xt;
                        var Pm = (xh << 3) + g + 20 | 0, Qm = d + 48 | 0, cd = Pm | 0;
                        qa = cd >> 2;
                        var Qq = l[qa], kc = Pm + 4 | 0;
                        ga = kc >> 2;
                        var mo = l[ga], Gc = Qm | 0;
                        oa = Gc >> 2;
                        l[oa] = Qq;
                        Rc = Qm + 4 | 0;
                        Ba = Rc >> 2;
                        l[Ba] = mo;
                        var Rl = q[x];
                        if (ti * (q[da] - Jl) + ui * (q[da + 1] - Kl) > Rl) {
                            var xk = 0, Rm = Rl
                        } else {
                            var no = va, oo = d, se = no | 0;
                            L = se >> 2;
                            var Rq = l[L], fe = no + 4 | 0;
                            J = fe >> 2;
                            var Yt = l[J], ue = oo | 0;
                            I = ue >> 2;
                            l[I] = Rq;
                            ge = oo + 4 | 0;
                            F = ge >> 2;
                            l[F] = Yt;
                            var Sq = va + 8 | 0, Sm = Sq, po = d + 16 | 0, yk = po;
                            c[yk + 2 | 0] = c[Sm + 3 | 0];
                            c[yk + 3 | 0] = c[Sm + 2 | 0];
                            c[po] = c[Sm + 1 | 0];
                            c[yk + 1 | 0] = c[Sq];
                            xk = 1;
                            Rm = q[x]
                        }
                        var qo = va + 12 | 0;
                        if (ti * (q[qo >> 2] - Jl) + ui * (q[da + 4] - Kl) > Rm) {
                            ch = xk
                        } else {
                            var Tm = qo, ro = d + 20 * xk | 0, Tc = Tm | 0;
                            ya = Tc >> 2;
                            var so = l[ya], bc = Tm + 4 | 0;
                            ia = bc >> 2;
                            var Tq = l[ia], yc = ro | 0;
                            Ca = yc >> 2;
                            l[Ca] = so;
                            Ac = ro + 4 | 0;
                            la = Ac >> 2;
                            l[la] = Tq;
                            var to = va + 20 | 0, Um = to, Uq = d + 20 * xk + 16 | 0, zk = Uq;
                            c[zk + 2 | 0] = c[Um + 3 | 0];
                            c[zk + 3 | 0] = c[Um + 2 | 0];
                            c[Uq] = c[Um + 1 | 0];
                            c[zk + 1 | 0] = c[to];
                            ch = xk + 1 | 0
                        }
                    }
                    l[mi >> 2] = ch
                }
            }
        }
    } while (0);
    a = cb
}
function Hh(b, d, e, f, g) {
    var h = d >> 2, j = l[h + 37], k = q[g + 12 >> 2], m = q[f + 12 >> 2], n = q[g + 8 >> 2], p = q[f + 16 >> 2], u = q[e + 12 >> 2], r = q[h + 3], w = q[e + 8 >> 2], x = q[h + 4], y = k * m - n * p + q[g >> 2] - (u * r - w * x + q[e >> 2]), m = n * m + k * p + q[g + 4 >> 2] - (w * r + u * x + q[e + 4 >> 2]), k = u * y + w * m, u = y * -w + u * m, w = 0 < (j | 0);
    a:do {
        if (w) {
            y = 0;
            m = -3.4028234663852886e+38;
            for (n = 0; ;) {
                if (p = q[((n << 3) + 84 >> 2) + h] * k + q[((n << 3) + 88 >> 2) + h] * u, y = (r = p > m) ? n : y, m = r ? p : m, n = n + 1 | 0, (n | 0) == (j | 0)) {
                    var A = y;
                    break a
                }
            }
        } else {
            A = 0
        }
    } while (0);
    h = Ih(d, e, A, f, g);
    k = (0 < (A | 0) ? A : j) - 1 | 0;
    u = Ih(d, e, k, f, g);
    w = A + 1 | 0;
    w = (w | 0) < (j | 0) ? w : 0;
    y = Ih(d, e, w, f, g);
    m = u > h & u > y;
    a:do {
        if (m) {
            n = u;
            for (p = k; ;) {
                r = (0 < (p | 0) ? p : j) - 1 | 0;
                x = Ih(d, e, r, f, g);
                if (x <= n) {
                    var C = n, z = p;
                    break a
                }
                n = x;
                p = r
            }
        } else {
            if (y > h) {
                n = y;
                for (p = w; ;) {
                    r = p + 1 | 0;
                    r = (r | 0) < (j | 0) ? r : 0;
                    x = Ih(d, e, r, f, g);
                    if (x <= n) {
                        C = n;
                        z = p;
                        break a
                    }
                    n = x;
                    p = r
                }
            } else {
                C = h, z = A
            }
        }
    } while (0);
    l[b >> 2] = z;
    return C
}
function Ih(b, d, e, f, g) {
    var f = f >> 2, h = b >> 2, j = l[f + 37];
    4 == (-1 < (e | 0) ? (l[h + 37] | 0) > (e | 0) ? 5 : 4 : 4) && P(N.Jb | 0, 32, N.ke | 0, N.Fb | 0);
    var b = q[d + 12 >> 2], k = q[((e << 3) + 84 >> 2) + h], m = q[d + 8 >> 2], n = q[((e << 3) + 88 >> 2) + h], p = b * k - m * n, k = m * k + b * n, n = q[g + 12 >> 2], u = q[g + 8 >> 2], r = n * p + u * k, w = p * -u + n * k, x = 0 < (j | 0);
    a:do {
        if (x) {
            for (var y = 0, A = 3.4028234663852886e+38, C = 0; ;) {
                var z = q[((C << 3) + 20 >> 2) + f] * r + q[((C << 3) + 24 >> 2) + f] * w, D = z < A, y = D ? C : y, A = D ? z : A, C = C + 1 | 0;
                if ((C | 0) == (j | 0)) {
                    var E = y;
                    break a
                }
            }
        } else {
            E = 0
        }
    } while (0);
    j = q[((e << 3) + 20 >> 2) + h];
    e = q[((e << 3) + 24 >> 2) + h];
    h = q[((E << 3) + 20 >> 2) + f];
    E = q[((E << 3) + 24 >> 2) + f];
    return(n * h - u * E + q[g >> 2] - (b * j - m * e + q[d >> 2])) * p + (u * h + n * E + q[g + 4 >> 2] - (m * j + b * e + q[d + 4 >> 2])) * k
}
function Gi(b, d, e, f, g, h) {
    var j, k = g >> 2, m = e >> 2, n = d >> 2;
    j = (d + 60 | 0) >> 2;
    var p = 0 == (l[j] | 0);
    a:do {
        if (!p) {
            var u = l[n + 14];
            if (0 == (u | 0)) {
                var r = b | 0;
                q[r >> 2] = 1;
                var w = b + 4 | 0;
                q[w >> 2] = 0;
                var x = q[m + 3], y = q[n + 12], A = q[m + 2], C = q[n + 13], z = x * y - A * C + q[m], D = A * y + x * C + q[m + 1], E = q[k + 3], G = q[n], H = q[k + 2], F = q[n + 1], I = E * G - H * F + q[k], J = H * G + E * F + q[k + 1], L = z - I, O = D - J;
                if (1.4210854715202004e-14 < L * L + O * O) {
                    var R = I - z, T = J - D, S = b, U = (M[0] = R, t[0]), W = (M[0] = T, t[0]) | 0;
                    l[S >> 2] = 0 | U;
                    l[S + 4 >> 2] = W;
                    var Q = Fh(R * R + T * T);
                    if (1.1920928955078125e-7 > Q) {
                        var $ = R, ea = T
                    } else {
                        var sa = 1 / Q, Ba = R * sa;
                        q[r >> 2] = Ba;
                        var oa = T * sa;
                        q[w >> 2] = oa;
                        $ = Ba;
                        ea = oa
                    }
                } else {
                    $ = 1, ea = 0
                }
                var ga = .5 * (D + ea * f + (J - ea * h)), qa = b + 8 | 0, la = (M[0] = .5 * (z + $ * f + (I - $ * h)), t[0]), Ca = (M[0] = ga, t[0]) | 0;
                l[qa >> 2] = 0 | la;
                l[qa + 4 >> 2] = Ca
            } else {
                if (1 == (u | 0)) {
                    var ia = e + 12 | 0, ya = q[ia >> 2], ta = q[n + 10], Ia = e + 8 | 0, na = q[Ia >> 2], Z = q[n + 11], ba = ya * ta - na * Z, ca = na * ta + ya * Z, ma = b, ka = (M[0] = ba, t[0]), aa = (M[0] = ca, t[0]) | 0, ra = ma | 0;
                    l[ra >> 2] = 0 | ka;
                    var ha = ma + 4 | 0;
                    l[ha >> 2] = aa;
                    var za = q[ia >> 2], X = q[n + 12], ua = q[Ia >> 2], da = q[n + 13], fa = za * X - ua * da + q[m], Aa = ua * X + za * da + q[m + 1];
                    if (0 < (l[j] | 0)) {
                        for (var Qa = g + 12 | 0, pa = g + 8 | 0, cb = g | 0, Ra = g + 4 | 0, Ta = b | 0, $a = b + 4 | 0, va = 0, Wa = ba, fb = ca; ;) {
                            var gb = q[Qa >> 2], Xa = q[n + (5 * va | 0)], Ua = q[pa >> 2], Va = q[n + (5 * va | 0) + 1], pb = gb * Xa - Ua * Va + q[cb >> 2], nb = Ua * Xa + gb * Va + q[Ra >> 2], La = f - ((pb - fa) * Wa + (nb - Aa) * fb), qb = .5 * (nb + fb * La + (nb - fb * h)), bb = (va << 3) + b + 8 | 0, Fa = (M[0] = .5 * (pb + Wa * La + (pb - Wa * h)), t[0]), Ma = (M[0] = qb, t[0]) | 0, wa = bb | 0;
                            l[wa >> 2] = 0 | Fa;
                            var hb = bb + 4 | 0;
                            l[hb >> 2] = Ma;
                            var Ya = va + 1 | 0;
                            if ((Ya | 0) >= (l[j] | 0)) {
                                break a
                            }
                            va = Ya;
                            Wa = q[Ta >> 2];
                            fb = q[$a >> 2]
                        }
                    }
                } else {
                    if (2 == (u | 0)) {
                        var Za = g + 12 | 0, Da = q[Za >> 2], Oa = q[n + 10], ib = g + 8 | 0, ab = q[ib >> 2], Ga = q[n + 11], jb = Da * Oa - ab * Ga, Ea = ab * Oa + Da * Ga, Pa = b, Ja = (M[0] = jb, t[0]), db = (M[0] = Ea, t[0]) | 0, ra = Pa | 0;
                        l[ra >> 2] = 0 | Ja;
                        ha = Pa + 4 | 0;
                        l[ha >> 2] = db;
                        var xa = q[Za >> 2], Sa = q[n + 12], Ka = q[ib >> 2], tb = q[n + 13], kb = xa * Sa - Ka * tb + q[k], ub = Ka * Sa + xa * tb + q[k + 1], rb = 0 < (l[j] | 0);
                        b:do {
                            if (rb) {
                                for (var Bb = e + 12 | 0, lb = e + 8 | 0, yb = e | 0, xb = e + 4 | 0, Ib = b | 0, wb = b + 4 | 0, vb = 0, zb = jb, Eb = Ea; ;) {
                                    var Cb = q[Bb >> 2], eb = q[n + (5 * vb | 0)], sb = q[lb >> 2], ob = q[n + (5 * vb | 0) + 1], Db = Cb * eb - sb * ob + q[yb >> 2], Jb = sb * eb + Cb * ob + q[xb >> 2], Rb = h - ((Db - kb) * zb + (Jb - ub) * Eb), Nb = .5 * (Jb - Eb * f + Jb + Eb * Rb), Ob = (vb << 3) + b + 8 | 0, Lb = (M[0] = .5 * (Db - zb * f + Db + zb * Rb), t[0]), Pb = (M[0] = Nb, t[0]) | 0, wa = Ob | 0;
                                    l[wa >> 2] = 0 | Lb;
                                    hb = Ob + 4 | 0;
                                    l[hb >> 2] = Pb;
                                    var Mb = vb + 1 | 0, Yb = q[Ib >> 2], Zb = q[wb >> 2];
                                    if ((Mb | 0) >= (l[j] | 0)) {
                                        var fc = Yb, Ub = Zb;
                                        break b
                                    }
                                    vb = Mb;
                                    zb = Yb;
                                    Eb = Zb
                                }
                            } else {
                                fc = jb, Ub = Ea
                            }
                        } while (0);
                        var jc = (M[0] = -fc, t[0]), Qb = (M[0] = -Ub, t[0]) | 0;
                        l[Pa >> 2] = 0 | jc;
                        l[Pa + 4 >> 2] = Qb
                    }
                }
            }
        }
    } while (0)
}
function Hi(b, d, e) {
    var f = d >> 2, g = b >> 2, h, j = l[f + 1];
    if (0 == (j | 0)) {
        l[g + 4] = d + 12 | 0, l[g + 5] = 1, q[g + 6] = q[f + 2]
    } else {
        if (2 == (j | 0)) {
            l[g + 4] = d + 20 | 0, l[g + 5] = l[f + 37], q[g + 6] = q[f + 2]
        } else {
            if (3 == (j | 0)) {
                j = d + 16 | 0;
                h = -1 < (e | 0) ? (l[j >> 2] | 0) > (e | 0) ? 8 : 7 : 7;
                7 == h && P(N.s | 0, 53, N.pb | 0, N.Gf | 0);
                d = d + 12 | 0;
                h = (e << 3) + l[d >> 2] | 0;
                var k = l[(h + 4 | 0) >> 2];
                l[b >> 2] = l[(h | 0) >> 2];
                l[b + 4 >> 2] = k;
                h = e + 1 | 0;
                e = b + 8 | 0;
                d = l[d >> 2];
                (h | 0) < (l[j >> 2] | 0) ? (d = (h << 3) + d | 0, j = l[d >> 2], d = l[d + 4 >> 2], l[(e | 0) >> 2] = j, l[(e + 4 | 0) >> 2] = d) : (j = l[d + 4 >> 2], l[e >> 2] = l[d >> 2], l[e + 4 >> 2] = j);
                l[g + 4] = b | 0;
                l[g + 5] = 2;
                q[g + 6] = q[f + 2]
            } else {
                1 == (j | 0) ? (l[g + 4] = d + 12 | 0, l[g + 5] = 2, q[g + 6] = q[f + 2]) : P(N.s | 0, 81, N.pb | 0, N.l | 0)
            }
        }
    }
}
function Ii(b, d, e) {
    var f, g, h, j, k, m, n, p, u, r, w, x, y, A, C, z, D, E = a;
    a += 168;
    var G, H = E + 16, F = E + 32, I = E + 144, J = E + 156;
    l[Cj >> 2] = l[Cj >> 2] + 1 | 0;
    var L = e | 0, O = e + 28 | 0;
    D = E >> 2;
    z = (e + 56 | 0) >> 2;
    l[D] = l[z];
    l[D + 1] = l[z + 1];
    l[D + 2] = l[z + 2];
    l[D + 3] = l[z + 3];
    C = H >> 2;
    A = (e + 72 | 0) >> 2;
    l[C] = l[A];
    l[C + 1] = l[A + 1];
    l[C + 2] = l[A + 2];
    l[C + 3] = l[A + 3];
    var R, T, S, U, W = F >> 2, Q, $ = d + 4 | 0, ea = jd[$ >> 1];
    if (4 > (ea & 65535)) {
        var sa = ea
    } else {
        P(N.s | 0, 102, N.Fe | 0, N.gh | 0), sa = i[$ >> 1]
    }
    var Ba = sa & 65535;
    U = (F + 108 | 0) >> 2;
    l[U] = Ba;
    var oa = F | 0;
    S = oa >> 2;
    var ga = 0 == sa << 16 >> 16;
    a:do {
        if (ga) {
            var qa = Ba
        } else {
            for (var la = L + 20 | 0, Ca = L + 16 | 0, ia = O + 20 | 0, ya = O + 16 | 0, ta = E + 12 | 0, Ia = E + 8 | 0, na = E | 0, Z = E + 4 | 0, ba = H + 12 | 0, ca = H + 8 | 0, ma = H | 0, ka = H + 4 | 0, aa = 0; ;) {
                var ra = oa + 36 * aa | 0, ha = ed[d + (aa + 6) | 0] & 255;
                l[S + (9 * aa | 0) + 7] = ha;
                var za = ed[d + (aa + 9) | 0] & 255, X = oa + 36 * aa + 32 | 0;
                l[X >> 2] = za;
                if ((l[la >> 2] | 0) > (ha | 0)) {
                    var ua = za
                } else {
                    P(N.i | 0, 103, N.h | 0, N.j | 0), ua = l[X >> 2]
                }
                var da = (ha << 3) + l[Ca >> 2] | 0, fa = l[da + 4 >> 2], Aa = (t[0] = l[da >> 2], M[0]), Qa = (t[0] = fa, M[0]);
                Q = -1 < (ua | 0) ? (l[ia >> 2] | 0) > (ua | 0) ? 11 : 10 : 10;
                10 == Q && P(N.i | 0, 103, N.h | 0, N.j | 0);
                var pa = (ua << 3) + l[ya >> 2] | 0, cb = pa | 0;
                T = cb >> 2;
                var Ra = pa + 4 | 0;
                R = Ra >> 2;
                var Ta = l[R], $a = (t[0] = l[T], M[0]), va = (t[0] = Ta, M[0]), Wa = q[ta >> 2], fb = q[Ia >> 2], gb = Wa * Aa - fb * Qa + q[na >> 2], Xa = fb * Aa + Wa * Qa + q[Z >> 2], Ua = ra, Va = (M[0] = gb, t[0]), pb = (M[0] = Xa, t[0]) | 0;
                l[Ua >> 2] = 0 | Va;
                l[Ua + 4 >> 2] = pb;
                var nb = q[ba >> 2], La = q[ca >> 2], qb = nb * $a - La * va + q[ma >> 2], bb = La * $a + nb * va + q[ka >> 2], Fa = oa + 36 * aa + 8 | 0, Ma = (M[0] = qb, t[0]), wa = (M[0] = bb, t[0]) | 0;
                l[Fa >> 2] = 0 | Ma;
                l[Fa + 4 >> 2] = wa;
                var hb = q[S + (9 * aa | 0) + 3] - q[S + (9 * aa | 0) + 1], Ya = oa + 36 * aa + 16 | 0, Za = (M[0] = qb - gb, t[0]), Da = (M[0] = hb, t[0]) | 0;
                l[Ya >> 2] = 0 | Za;
                l[Ya + 4 >> 2] = Da;
                q[S + (9 * aa | 0) + 6] = 0;
                var Oa = aa + 1 | 0, ib = l[U];
                if ((Oa | 0) >= (ib | 0)) {
                    qa = ib;
                    break a
                }
                aa = Oa
            }
        }
    } while (0);
    var ab = 1 < (qa | 0);
    a:do {
        if (ab) {
            var Ga = q[d >> 2];
            if (2 == (qa | 0)) {
                var jb = q[W + 4] - q[W + 13], Ea = q[W + 5] - q[W + 14], Pa = Fh(jb * jb + Ea * Ea)
            } else {
                if (3 == (qa | 0)) {
                    var Ja = q[W + 4], db = q[W + 5], Pa = (q[W + 13] - Ja) * (q[W + 23] - db) - (q[W + 14] - db) * (q[W + 22] - Ja)
                } else {
                    P(N.s | 0, 259, N.Na | 0, N.l | 0), Pa = 0
                }
            }
            var xa = Pa < .5 * Ga;
            do {
                if (!xa && !(2 * Ga < Pa | 1.1920928955078125e-7 > Pa)) {
                    var Sa = l[U];
                    Q = 21;
                    break a
                }
            } while (0);
            l[U] = 0;
            Q = 22
        } else {
            Sa = qa, Q = 21
        }
    } while (0);
    21 == Q && (Q = 0 == (Sa | 0) ? 22 : 27);
    if (22 == Q) {
        l[W + 7] = 0;
        l[W + 8] = 0;
        0 < (l[L + 20 >> 2] | 0) || P(N.i | 0, 103, N.h | 0, N.j | 0);
        var Ka = l[L + 16 >> 2], cb = Ka | 0;
        T = cb >> 2;
        Ra = Ka + 4 | 0;
        R = Ra >> 2;
        var tb = l[R], kb = (t[0] = l[T], M[0]), ub = (t[0] = tb, M[0]);
        0 < (l[O + 20 >> 2] | 0) || P(N.i | 0, 103, N.h | 0, N.j | 0);
        var rb = l[O + 16 >> 2], cb = rb | 0;
        T = cb >> 2;
        Ra = rb + 4 | 0;
        R = Ra >> 2;
        var Bb = l[R], lb = (t[0] = l[T], M[0]), yb = (t[0] = Bb, M[0]), xb = q[E + 12 >> 2], Ib = q[E + 8 >> 2], wb = xb * kb - Ib * ub + q[E >> 2], vb = Ib * kb + xb * ub + q[E + 4 >> 2], zb = (M[0] = wb, t[0]), Eb = (M[0] = vb, t[0]) | 0;
        l[F >> 2] = 0 | zb;
        l[F + 4 >> 2] = Eb;
        var Cb = q[H + 12 >> 2], eb = q[H + 8 >> 2], sb = Cb * lb - eb * yb + q[H >> 2], ob = eb * lb + Cb * yb + q[H + 4 >> 2], Db = F + 8 | 0, Jb = (M[0] = sb, t[0]), Rb = (M[0] = ob, t[0]) | 0;
        l[Db >> 2] = 0 | Jb;
        l[Db + 4 >> 2] = Rb;
        var Nb = ob - vb, Ob = F + 16 | 0, Lb = (M[0] = sb - wb, t[0]), Pb = (M[0] = Nb, t[0]) | 0;
        l[Ob >> 2] = 0 | Lb;
        l[Ob + 4 >> 2] = Pb;
        l[U] = 1
    }
    var Mb = F | 0;
    y = Mb >> 2;
    x = (F + 108 | 0) >> 2;
    var Yb = l[x];
    0 == (Yb | 0) ? P(N.s | 0, 194, N.pa | 0, N.l | 0) : 1 == (Yb | 0) || 2 == (Yb | 0) || 3 == (Yb | 0) || P(N.s | 0, 207, N.pa | 0, N.l | 0);
    var Zb = E + 12 | 0, fc = E + 8 | 0, Ub = e + 16 | 0, jc = e + 20 | 0, Qb = E | 0, mb = E + 4 | 0, cc = H + 12 | 0, Fb = H + 8 | 0, hc = e + 44 | 0, wc = e + 48 | 0, pc = H | 0, qc = H + 4 | 0;
    w = (F + 16 | 0) >> 2;
    r = (F + 20 | 0) >> 2;
    u = (F + 52 | 0) >> 2;
    p = (F + 56 | 0) >> 2;
    var $c = F + 16 | 0, Fc = F + 52 | 0, sc = F + 24 | 0, kd = F + 60 | 0, wd = F + 36 | 0, Mc = 0;
    a:for (; ;) {
        if (20 <= (Mc | 0)) {
            var $b = Mc;
            break
        }
        var ac = o[x], oc = 0 < (ac | 0);
        b:do {
            if (oc) {
                for (var tc = 0; ;) {
                    l[I + (tc << 2) >> 2] = l[y + (9 * tc | 0) + 7];
                    l[J + (tc << 2) >> 2] = l[y + (9 * tc | 0) + 8];
                    var Oc = tc + 1 | 0;
                    if ((Oc | 0) == (ac | 0)) {
                        break b
                    }
                    tc = Oc
                }
            } else {
                G = 9
            }
        } while (0);
        if (1 == (ac | 0)) {
            G = 20
        } else {
            if (2 == (ac | 0)) {
                var ld = l[$c + 4 >> 2], Wc = (t[0] = l[$c >> 2], M[0]), ad = (t[0] = ld, M[0]), Xc = l[Fc + 4 >> 2], Cc = (t[0] = l[Fc >> 2], M[0]), fd = (t[0] = Xc, M[0]), md = Cc - Wc, nd = fd - ad, Pc = Wc * md + ad * nd, gd = -Pc;
                if (0 > Pc) {
                    var od = Cc * md + fd * nd;
                    if (0 < od) {
                        var pd = 1 / (od - Pc);
                        q[sc >> 2] = od * pd;
                        q[kd >> 2] = pd * gd;
                        l[x] = 2;
                        var Pd = Cc, Xd = Wc;
                        G = 25
                    } else {
                        q[kd >> 2] = 1;
                        l[x] = 1;
                        for (var qd = wd >> 2, Qd = F >> 2, Qc = qd + 9; qd < Qc; qd++, Qd++) {
                            l[Qd] = l[qd]
                        }
                        G = 17
                    }
                } else {
                    q[sc >> 2] = 1;
                    l[x] = 1;
                    var Jc = Wc;
                    G = 24
                }
            } else {
                if (3 == (ac | 0)) {
                    var Kc = F, gc = Kc >> 2, hd = Kc + 16 | 0, xd = l[hd + 4 >> 2], bd = (t[0] = l[hd >> 2], M[0]), rd = (t[0] = xd, M[0]), ye = Kc + 36 | 0, Yd = Kc + 52 | 0, Tc = l[Yd + 4 >> 2], xc = (t[0] = l[Yd >> 2], M[0]), bc = (t[0] = Tc, M[0]), Ed = Kc + 72 | 0, yc = Kc + 88 | 0, Ac = l[yc + 4 >> 2], Zd = (t[0] = l[yc >> 2], M[0]), $d = (t[0] = Ac, M[0]), cd = xc - bd, zc = bc - rd, kc = bd * cd + rd * zc, Rd = xc * cd + bc * zc, Gc = -kc, Rc = Zd - bd, Nc = $d - rd, ne = bd * Rc + rd * Nc, Sd = Zd * Rc + $d * Nc, Td = -ne, Ud = Zd - xc, xf = $d - bc, Fd = xc * Ud + bc * xf, oe = Zd * Ud + $d * xf, He = -Fd, ae = cd * Nc - zc * Rc, Hc = ae * (xc * $d - bc * Zd), dd = ae * (Zd * rd - $d * bd), be = ae * (bd * bc - rd * xc);
                    if (0 > kc | 0 > ne) {
                        if (0 <= kc | 0 >= Rd | 0 < be) {
                            if (0 <= ne | 0 >= Sd | 0 < dd) {
                                if (0 < Rd | 0 > Fd) {
                                    if (0 < Sd | 0 < oe) {
                                        if (0 <= Fd | 0 >= oe | 0 < Hc) {
                                            var pe = 1 / (Hc + dd + be);
                                            q[gc + 6] = Hc * pe;
                                            q[gc + 15] = dd * pe;
                                            q[gc + 24] = be * pe;
                                            l[gc + 27] = 3
                                        } else {
                                            var Uc = 1 / (oe - Fd);
                                            q[gc + 15] = oe * Uc;
                                            q[gc + 24] = Uc * He;
                                            l[gc + 27] = 2;
                                            for (var lc = Ed >> 2, Gd = Kc >> 2, Hd = lc + 9; lc < Hd; lc++, Gd++) {
                                                l[Gd] = l[lc]
                                            }
                                        }
                                    } else {
                                        q[gc + 24] = 1;
                                        l[gc + 27] = 1;
                                        lc = Ed >> 2;
                                        Gd = Kc >> 2;
                                        for (Hd = lc + 9; lc < Hd; lc++, Gd++) {
                                            l[Gd] = l[lc]
                                        }
                                    }
                                } else {
                                    q[gc + 15] = 1;
                                    l[gc + 27] = 1;
                                    lc = ye >> 2;
                                    Gd = Kc >> 2;
                                    for (Hd = lc + 9; lc < Hd; lc++, Gd++) {
                                        l[Gd] = l[lc]
                                    }
                                }
                            } else {
                                var Re = 1 / (Sd - ne);
                                q[gc + 6] = Sd * Re;
                                q[gc + 24] = Re * Td;
                                l[gc + 27] = 2;
                                lc = Ed >> 2;
                                Gd = ye >> 2;
                                for (Hd = lc + 9; lc < Hd; lc++, Gd++) {
                                    l[Gd] = l[lc]
                                }
                            }
                        } else {
                            var Id = 1 / (Rd - kc);
                            q[gc + 6] = Rd * Id;
                            q[gc + 15] = Id * Gc;
                            l[gc + 27] = 2
                        }
                    } else {
                        q[gc + 6] = 1, l[gc + 27] = 1
                    }
                } else {
                    P(N.s | 0, 498, N.he | 0, N.l | 0)
                }
                G = 17
            }
        }
        do {
            if (17 == G) {
                var Jd = l[x];
                if (3 == (Jd | 0)) {
                    $b = Mc;
                    break a
                } else {
                    if (0 == (Jd | 0)) {
                        P(N.s | 0, 194, N.pa | 0, N.l | 0), G = 20
                    } else {
                        if (1 == (Jd | 0) || 2 == (Jd | 0)) {
                            var qe = Jd;
                            G = 21
                        } else {
                            P(N.s | 0, 207, N.pa | 0, N.l | 0), G = 20
                        }
                    }
                }
            }
        } while (0);
        20 == G && (qe = l[x], G = 21);
        if (21 == G) {
            if (1 == (qe | 0)) {
                Jc = q[w], G = 24
            } else {
                if (2 == (qe | 0)) {
                    Pd = q[u], Xd = q[w], G = 25
                } else {
                    P(N.s | 0, 184, N.Oe | 0, N.l | 0);
                    var re = Dj, Kd = l[re + 4 >> 2], Se = (t[0] = l[re >> 2], M[0]), Rf = (t[0] = Kd, M[0]), sd = Se, Vc = Rf;
                    G = 29
                }
            }
        }
        if (24 == G) {
            sd = -Jc, Vc = -q[r]
        } else {
            if (25 == G) {
                var Te = Pd - Xd, Ue = q[r], ce = q[p] - Ue;
                0 < Te * -Ue - ce * -Xd ? (sd = -1 * ce, Vc = Te) : (sd = ce, Vc = -1 * Te)
            }
        }
        if (1.4210854715202004e-14 > sd * sd + Vc * Vc) {
            $b = Mc;
            break
        }
        var Yc = o[x], yd = Mb + 36 * Yc | 0, $e = -Vc, ze = q[Zb >> 2], Zc = q[fc >> 2], Ld = ze * -sd + Zc * $e, Md = sd * Zc + ze * $e, de = l[Ub >> 2];
        n = de >> 2;
        var zd = l[jc >> 2], ee = 1 < (zd | 0);
        do {
            if (ee) {
                for (var yf = 0, af = q[n] * Ld + q[n + 1] * Md, Ie = 1; ;) {
                    var zf = q[(Ie << 3 >> 2) + n] * Ld + q[((Ie << 3) + 4 >> 2) + n] * Md, jf = zf > af, bf = jf ? Ie : yf, Sf = jf ? zf : af, kf = Ie + 1 | 0;
                    if ((kf | 0) == (zd | 0)) {
                        break
                    }
                    yf = bf;
                    af = Sf;
                    Ie = kf
                }
                var Ae = Mb + 36 * Yc + 28 | 0;
                l[Ae >> 2] = bf;
                var Ad = yd | 0;
                if (-1 < (bf | 0)) {
                    mg = bf, ng = Ae, og = Ad, G = 35
                } else {
                    var Af = bf, Tf = Ae, Fg = Ad;
                    G = 36
                }
            } else {
                var Gg = Mb + 36 * Yc + 28 | 0, mg = l[Gg >> 2] = 0, ng = Gg, og = yd | 0;
                G = 35
            }
        } while (0);
        if (35 == G) {
            if ((zd | 0) > (mg | 0)) {
                var Bf = mg, Uf = ng, Vf = og, Hg = de;
                G = 37
            } else {
                Af = mg, Tf = ng, Fg = og, G = 36
            }
        }
        36 == G && (P(N.i | 0, 103, N.h | 0, N.j | 0), Bf = Af, Uf = Tf, Vf = Fg, Hg = l[Ub >> 2]);
        var Jh = q[Hg + (Bf << 3) >> 2], Ig = q[Hg + (Bf << 3) + 4 >> 2], Fj = Zc * Jh + ze * Ig + q[mb >> 2], Ji = yd, pg = (M[0] = ze * Jh - Zc * Ig + q[Qb >> 2], t[0]), Kh = (M[0] = Fj, t[0]) | 0, Wf = Ji | 0;
        l[Wf >> 2] = 0 | pg;
        var Lh = Ji + 4 | 0;
        l[Lh >> 2] = Kh;
        var lf = q[cc >> 2], qg = q[Fb >> 2], jh = lf * sd + qg * Vc, Mh = sd * -qg + lf * Vc, Be = l[hc >> 2];
        m = Be >> 2;
        var rg = l[wc >> 2], se = 1 < (rg | 0);
        do {
            if (se) {
                for (var Jg = 0, fe = q[m] * jh + q[m + 1] * Mh, te = 1; ;) {
                    var ue = q[(te << 3 >> 2) + m] * jh + q[((te << 3) + 4 >> 2) + m] * Mh, ge = ue > fe, mf = ge ? te : Jg, Ki = ge ? ue : fe, Kg = te + 1 | 0;
                    if ((Kg | 0) == (rg | 0)) {
                        break
                    }
                    Jg = mf;
                    fe = Ki;
                    te = Kg
                }
                var sg = Mb + 36 * Yc + 32 | 0;
                l[sg >> 2] = mf;
                var kh = Mb + 36 * Yc + 8 | 0;
                if (-1 < (mf | 0)) {
                    Lg = mf, Mg = sg, Ic = kh, G = 42
                } else {
                    var Nh = mf, tg = sg, Oh = kh;
                    G = 43
                }
            } else {
                var Ph = Mb + 36 * Yc + 32 | 0, Lg = l[Ph >> 2] = 0, Mg = Ph, Ic = Mb + 36 * Yc + 8 | 0;
                G = 42
            }
        } while (0);
        if (42 == G) {
            if ((rg | 0) > (Lg | 0)) {
                var uc = Lg, Li = Mg, Qh = Ic, Ng = Be;
                G = 44
            } else {
                Nh = Lg, tg = Mg, Oh = Ic, G = 43
            }
        }
        43 == G && (P(N.i | 0, 103, N.h | 0, N.j | 0), uc = Nh, Li = tg, Qh = Oh, Ng = l[hc >> 2]);
        var Og = q[Ng + (uc << 3) >> 2], Pg = q[Ng + (uc << 3) + 4 >> 2], Mi = lf * Og - qg * Pg + q[pc >> 2], Rh = qg * Og + lf * Pg + q[qc >> 2], Qg = Qh, Sh = (M[0] = Mi, t[0]), lh = (M[0] = Rh, t[0]) | 0, Wf = Qg | 0;
        l[Wf >> 2] = 0 | Sh;
        Lh = Qg + 4 | 0;
        l[Lh >> 2] = lh;
        var Th = Rh - q[Vf + 4 >> 2], Ni = Mb + 36 * Yc + 16 | 0, nf = (M[0] = Mi - q[Vf >> 2], t[0]), he = (M[0] = Th, t[0]) | 0;
        l[Ni >> 2] = 0 | nf;
        l[Ni + 4 >> 2] = he;
        var Bd = Mc + 1 | 0;
        l[Ej >> 2] = l[Ej >> 2] + 1 | 0;
        for (var cf = 0; (cf | 0) < (ac | 0);) {
            if ((l[Uf >> 2] | 0) == (l[I + (cf << 2) >> 2] | 0) && (l[Li >> 2] | 0) == (l[J + (cf << 2) >> 2] | 0)) {
                $b = Bd;
                break a
            }
            cf = cf + 1 | 0
        }
        l[x] = l[x] + 1 | 0;
        Mc = Bd
    }
    var ug = l[Ak >> 2];
    l[Ak >> 2] = (ug | 0) > ($b | 0) ? ug : $b;
    var Ce = b + 8 | 0, Cf = b | 0, td = F >> 2, Rg = l[td + 27];
    if (0 == (Rg | 0)) {
        P(N.s | 0, 217, N.Ab | 0, N.l | 0)
    } else {
        if (1 == (Rg | 0)) {
            var Gj = l[F + 4 >> 2];
            l[Cf >> 2] = l[F >> 2];
            l[Cf + 4 >> 2] = Gj;
            var Uh = F + 8 | 0, Oi = l[Uh + 4 >> 2];
            l[Ce >> 2] = l[Uh >> 2];
            l[Ce + 4 >> 2] = Oi
        } else {
            if (2 == (Rg | 0)) {
                var vg = F + 24 | 0, Vh = q[vg >> 2], Wh = F + 60 | 0, Xh = q[Wh >> 2], Yh = q[td + 1] * Vh + q[td + 10] * Xh, Hj = (M[0] = q[td] * Vh + q[td + 9] * Xh, t[0]), Je = (M[0] = Yh, t[0]) | 0;
                l[Cf >> 2] = 0 | Hj;
                l[Cf + 4 >> 2] = Je;
                var Xf = q[vg >> 2], Yf = q[Wh >> 2], Zh = q[td + 3] * Xf + q[td + 12] * Yf, Sg = (M[0] = q[td + 2] * Xf + q[td + 11] * Yf, t[0]), mh = (M[0] = Zh, t[0]) | 0;
                l[Ce >> 2] = 0 | Sg;
                l[Ce + 4 >> 2] = mh
            } else {
                if (3 == (Rg | 0)) {
                    var Df = q[td + 6], $h = q[td + 15], Tg = q[td + 24], ai = q[td + 1] * Df + q[td + 10] * $h + q[td + 19] * Tg, wg = (M[0] = q[td] * Df + q[td + 9] * $h + q[td + 18] * Tg, t[0]), Pi = (M[0] = ai, t[0]), df = 0 | wg, nh = Pi | 0;
                    l[Cf >> 2] = df;
                    l[Cf + 4 >> 2] = nh;
                    l[Ce >> 2] = df;
                    l[Ce + 4 >> 2] = nh
                } else {
                    P(N.s | 0, 236, N.Ab | 0, N.l | 0)
                }
            }
        }
    }
    k = (b | 0) >> 2;
    j = (Ce | 0) >> 2;
    var oh = q[k] - q[j];
    h = (b + 4 | 0) >> 2;
    g = (b + 12 | 0) >> 2;
    var ph = q[h] - q[g], Zf = Fh(oh * oh + ph * ph);
    f = (b + 16 | 0) >> 2;
    q[f] = Zf;
    l[b + 20 >> 2] = $b;
    var Ve = l[x];
    if (0 == (Ve | 0)) {
        P(N.s | 0, 246, N.Na | 0, N.l | 0);
        var of = 0
    } else {
        if (1 == (Ve | 0)) {
            of = 0
        } else {
            if (2 == (Ve | 0)) {
                var Ug = q[w] - q[u], bi = q[r] - q[p], of = Fh(Ug * Ug + bi * bi)
            } else {
                if (3 == (Ve | 0)) {
                    var Vg = q[w], Wg = q[r], of = (q[u] - Vg) * (q[F + 92 >> 2] - Wg) - (q[p] - Wg) * (q[F + 88 >> 2] - Vg)
                } else {
                    P(N.s | 0, 259, N.Na | 0, N.l | 0), of = 0
                }
            }
        }
    }
    q[d >> 2] = of;
    var We = l[x];
    i[d + 4 >> 1] = We & 65535;
    var Qi = 0 < (We | 0);
    a:do {
        if (Qi) {
            for (var ef = 0; ;) {
                c[d + (ef + 6) | 0] = l[y + (9 * ef | 0) + 7] & 255;
                c[d + (ef + 9) | 0] = l[y + (9 * ef | 0) + 8] & 255;
                var Ij = ef + 1 | 0;
                if ((Ij | 0) >= (We | 0)) {
                    break a
                }
                ef = Ij
            }
        }
    } while (0);
    if (0 != (c[e + 88 | 0] & 1) << 24 >> 24) {
        var $f = q[e + 24 >> 2], Ef = q[e + 52 >> 2], qh = q[f], ci = $f + Ef;
        if (qh > ci & 1.1920928955078125e-7 < qh) {
            q[f] = qh - ci;
            var ff = q[j], pf = q[k], qf = ff - pf, xg = q[g], yg = q[h], Ff = xg - yg, Xg = Fh(qf * qf + Ff * Ff);
            if (1.1920928955078125e-7 > Xg) {
                var Yg = qf, ie = Ff
            } else {
                var Gf = 1 / Xg, Yg = qf * Gf, ie = Ff * Gf
            }
            var Hf = ie * $f;
            q[k] = pf + Yg * $f;
            q[h] = yg + Hf;
            var rh = ie * Ef;
            q[j] = ff - Yg * Ef;
            q[g] = xg - rh
        } else {
            var Ri = .5 * (q[h] + q[g]), Si = (M[0] = .5 * (q[k] + q[j]), t[0]), Jj = (M[0] = Ri, t[0]), di = 0 | Si, ei = Jj | 0;
            l[b >> 2] = di;
            l[b + 4 >> 2] = ei;
            l[Ce >> 2] = di;
            l[Ce + 4 >> 2] = ei;
            q[f] = 0
        }
    }
    a = E
}
function hh(b) {
    var d, e, f, g;
    g = (b + 16 | 0) >> 2;
    var h = l[g];
    if (-1 == (h | 0)) {
        h = b + 8 | 0;
        f = h >> 2;
        d = (b + 12 | 0) >> 2;
        e = l[d];
        if ((l[f] | 0) == (e | 0)) {
            var j = e
        } else {
            P(N.c | 0, 61, N.ne | 0, N.cf | 0), j = l[d]
        }
        b = b + 4 | 0;
        e = b >> 2;
        var k = l[e];
        l[d] = j << 1;
        j = Ne(72 * j | 0);
        l[e] = j;
        Ch(j, k, 36 * l[f] | 0);
        Dh(k);
        var j = l[f], k = l[d] - 1 | 0, m = (j | 0) < (k | 0);
        a:do {
            if (m) {
                for (var n = j; ;) {
                    var p = n + 1 | 0;
                    l[(l[e] + 36 * n + 20 | 0) >> 2] = p;
                    l[(l[e] + 36 * n + 32 | 0) >> 2] = -1;
                    n = l[d] - 1 | 0;
                    if ((p | 0) >= (n | 0)) {
                        var u = n;
                        break a
                    }
                    n = p
                }
            } else {
                u = k
            }
        } while (0);
        l[(l[e] + 36 * u + 20 | 0) >> 2] = -1;
        l[(l[e] + 36 * (l[d] - 1) + 32 | 0) >> 2] = -1;
        u = l[f];
        l[g] = u;
        d = b >> 2
    } else {
        u = h, d = (b + 4 | 0) >> 2, h = b + 8 | 0
    }
    f = l[d] + 36 * u + 20 | 0;
    l[g] = l[f >> 2];
    l[f >> 2] = -1;
    l[(l[d] + 36 * u + 24 | 0) >> 2] = -1;
    l[(l[d] + 36 * u + 28 | 0) >> 2] = -1;
    l[(l[d] + 36 * u + 32 | 0) >> 2] = 0;
    l[(l[d] + 36 * u + 16 | 0) >> 2] = 0;
    l[h >> 2] = l[h >> 2] + 1 | 0;
    return u
}
function ih(b, d) {
    var e, f, g, h, j;
    h = b + 24 | 0;
    l[h >> 2] = l[h >> 2] + 1 | 0;
    j = (b | 0) >> 2;
    var k = l[j], m = -1 == (k | 0);
    a:do {
        if (m) {
            l[j] = d, l[(l[b + 4 >> 2] + 36 * d + 20 | 0) >> 2] = -1
        } else {
            h = (b + 4 | 0) >> 2;
            g = l[h] >> 2;
            var n = q[g + (9 * d | 0)];
            e = q[g + (9 * d | 0) + 1];
            for (var p = q[g + (9 * d | 0) + 2], u = q[g + (9 * d | 0) + 3], r = k; ;) {
                var w = l[g + (9 * r | 0) + 6];
                if (-1 == (w | 0)) {
                    break
                }
                var x = l[g + (9 * r | 0) + 7], y = q[g + (9 * r | 0) + 2], A = q[g + (9 * r | 0)], C = q[g + (9 * r | 0) + 3], z = q[g + (9 * r | 0) + 1], D = 2 * ((y > p ? y : p) - (A < n ? A : n) + ((C > u ? C : u) - (z < e ? z : e)));
                f = 2 * D;
                var y = 2 * (D - 2 * (y - A + (C - z))), A = q[g + (9 * w | 0)], C = n < A ? n : A, z = q[g + (9 * w | 0) + 1], D = e < z ? e : z, E = q[g + (9 * w | 0) + 2], G = p > E ? p : E, H = q[g + (9 * w | 0) + 3], F = u > H ? u : H, A = (-1 == (l[g + (9 * w | 0) + 6] | 0) ? 2 * (G - C + (F - D)) : 2 * (G - C + (F - D)) - 2 * (E - A + (H - z))) + y, C = q[g + (9 * x | 0)], z = n < C ? n : C, D = q[g + (9 * x | 0) + 1], E = e < D ? e : D, G = q[g + (9 * x | 0) + 2], H = p > G ? p : G, F = q[g + (9 * x | 0) + 3], I = u > F ? u : F, y = (-1 == (l[g + (9 * x | 0) + 6] | 0) ? 2 * (H - z + (I - E)) : 2 * (H - z + (I - E)) - 2 * (G - C + (F - D))) + y;
                if (f < A & f < y) {
                    break
                }
                r = A < y ? w : x
            }
            g = l[g + (9 * r | 0) + 5];
            w = hh(b);
            l[(l[h] + 36 * w + 20 | 0) >> 2] = g;
            l[(l[h] + 36 * w + 16 | 0) >> 2] = 0;
            x = l[h];
            f = x >> 2;
            y = q[f + (9 * r | 0)];
            A = q[f + (9 * r | 0) + 1];
            A = e < A ? e : A;
            e = x + 36 * w | 0;
            n = (M[0] = n < y ? n : y, t[0]);
            y = (M[0] = A, t[0]) | 0;
            l[(e | 0) >> 2] = 0 | n;
            l[(e + 4 | 0) >> 2] = y;
            n = q[f + (9 * r | 0) + 2];
            e = q[f + (9 * r | 0) + 3];
            u = u > e ? u : e;
            e = x + 36 * w + 8 | 0;
            p = (M[0] = p > n ? p : n, t[0]);
            u = (M[0] = u, t[0]) | 0;
            l[(e | 0) >> 2] = 0 | p;
            l[(e + 4 | 0) >> 2] = u;
            p = l[h];
            l[(p + 36 * w + 32 | 0) >> 2] = l[(p + 32 >> 2) + (9 * r | 0)] + 1 | 0;
            p = l[h];
            -1 == (g | 0) ? (l[(p + 36 * w + 24 | 0) >> 2] = r, l[(l[h] + 36 * w + 28 | 0) >> 2] = d, l[(l[h] + 36 * r + 20 | 0) >> 2] = w, l[(l[h] + 36 * d + 20 | 0) >> 2] = w, l[j] = w) : (u = p + 36 * g + 24 | 0, (l[u >> 2] | 0) == (r | 0) ? l[u >> 2] = w : l[(p + 36 * g + 28 | 0) >> 2] = w, l[(l[h] + 36 * w + 24 | 0) >> 2] = r, l[(l[h] + 36 * w + 28 | 0) >> 2] = d, l[(l[h] + 36 * r + 20 | 0) >> 2] = w, l[(l[h] + 36 * d + 20 | 0) >> 2] = w);
            r = l[(l[h] + 20 >> 2) + (9 * d | 0)];
            if (-1 != (r | 0)) {
                for (; ;) {
                    if (r = Mk(b, r), u = l[h], p = l[(u + 24 >> 2) + (9 * r | 0)], u = l[(u + 28 >> 2) + (9 * r | 0)], -1 == (p | 0) && P(N.c | 0, 307, N.kb | 0, N.ph | 0), -1 == (u | 0) && P(N.c | 0, 308, N.kb | 0, N.uh | 0), n = l[h], e = l[(n + 32 >> 2) + (9 * p | 0)], g = l[(n + 32 >> 2) + (9 * u | 0)], l[(n + 36 * r + 32 | 0) >> 2] = ((e | 0) > (g | 0) ? e : g) + 1 | 0, n = l[h], e = n >> 2, g = q[e + (9 * p | 0)], w = q[e + (9 * u | 0)], x = q[e + (9 * p | 0) + 1], f = q[e + (9 * u | 0) + 1], f = x < f ? x : f, x = n + 36 * r | 0, g = (M[0] = g < w ? g : w, t[0]), w = (M[0] = f, t[0]) | 0, l[(x | 0) >> 2] = 0 | g, l[(x + 4 | 0) >> 2] = w, g = q[e + (9 * p | 0) + 2], w = q[e + (9 * u | 0) + 2], p = q[e + (9 * p | 0) + 3], u = q[e + (9 * u | 0) + 3], p = p > u ? p : u, u = n + 36 * r + 8 | 0, n = (M[0] = g > w ? g : w, t[0]), p = (M[0] = p, t[0]) | 0, l[(u | 0) >> 2] = 0 | n, l[(u + 4 | 0) >> 2] = p, r = l[(l[h] + 20 >> 2) + (9 * r | 0)], -1 == (r | 0)) {
                        break a
                    }
                }
            }
        }
    } while (0)
}
function Nk(b, d) {
    var e, f, g = -1 < (d | 0);
    e = g ? (l[b + 12 >> 2] | 0) > (d | 0) ? 5 : 4 : 4;
    4 == e && P(N.c | 0, 126, N.lb | 0, N.o | 0);
    f = (b + 4 | 0) >> 2;
    -1 != (l[(l[f] + 24 >> 2) + (9 * d | 0)] | 0) && P(N.c | 0, 127, N.lb | 0, N.Ub | 0);
    Ok(b, d);
    e = g ? (l[b + 12 >> 2] | 0) > (d | 0) ? 10 : 9 : 9;
    9 == e && P(N.c | 0, 97, N.G | 0, N.$ | 0);
    e = (b + 8 | 0) >> 2;
    0 < (l[e] | 0) || P(N.c | 0, 98, N.G | 0, N.Ca | 0);
    g = b + 16 | 0;
    l[(l[f] + 36 * d + 20 | 0) >> 2] = l[g >> 2];
    l[(l[f] + 36 * d + 32 | 0) >> 2] = -1;
    l[g >> 2] = d;
    l[e] = l[e] - 1 | 0
}
function Ok(b, d) {
    var e, f, g, h, j, k;
    k = (b | 0) >> 2;
    var m = (l[k] | 0) == (d | 0);
    a:do {
        if (m) {
            l[k] = -1
        } else {
            j = (b + 4 | 0) >> 2;
            f = l[j];
            h = f >> 2;
            var n = l[h + (9 * d | 0) + 5];
            g = l[h + (9 * n | 0) + 5];
            e = l[h + (9 * n | 0) + 6];
            h = (e | 0) == (d | 0) ? l[h + (9 * n | 0) + 7] : e;
            if (-1 == (g | 0)) {
                l[k] = h, l[(f + 36 * h + 20 | 0) >> 2] = -1, f = -1 < (n | 0) ? (l[b + 12 >> 2] | 0) > (n | 0) ? 20 : 19 : 19, 19 == f && P(N.c | 0, 97, N.G | 0, N.$ | 0), g = (b + 8 | 0) >> 2, 0 < (l[g] | 0) || P(N.c | 0, 98, N.G | 0, N.Ca | 0), f = b + 16 | 0, l[(l[j] + 36 * n + 20 | 0) >> 2] = l[f >> 2], l[(l[j] + 36 * n + 32 | 0) >> 2] = -1, l[f >> 2] = n, l[g] = l[g] - 1 | 0
            } else {
                e = f + 36 * g + 24 | 0;
                (l[e >> 2] | 0) == (n | 0) ? l[e >> 2] = h : l[(f + 36 * g + 28 | 0) >> 2] = h;
                l[(l[j] + 36 * h + 20 | 0) >> 2] = g;
                f = -1 < (n | 0) ? (l[b + 12 >> 2] | 0) > (n | 0) ? 13 : 12 : 12;
                12 == f && P(N.c | 0, 97, N.G | 0, N.$ | 0);
                f = (b + 8 | 0) >> 2;
                0 < (l[f] | 0) || P(N.c | 0, 98, N.G | 0, N.Ca | 0);
                h = b + 16 | 0;
                l[(l[j] + 36 * n + 20 | 0) >> 2] = l[h >> 2];
                l[(l[j] + 36 * n + 32 | 0) >> 2] = -1;
                l[h >> 2] = n;
                l[f] = l[f] - 1 | 0;
                for (n = g; ;) {
                    n = Mk(b, n);
                    h = l[j];
                    e = h >> 2;
                    f = l[e + (9 * n | 0) + 6];
                    g = l[e + (9 * n | 0) + 7];
                    var p = q[e + (9 * f | 0)], u = q[e + (9 * g | 0)], r = q[e + (9 * f | 0) + 1], w = q[e + (9 * g | 0) + 1], w = r < w ? r : w, r = h + 36 * n | 0, p = (M[0] = p < u ? p : u, t[0]), u = (M[0] = w, t[0]) | 0;
                    l[(r | 0) >> 2] = 0 | p;
                    l[(r + 4 | 0) >> 2] = u;
                    p = q[e + (9 * f | 0) + 2];
                    u = q[e + (9 * g | 0) + 2];
                    r = q[e + (9 * f | 0) + 3];
                    e = q[e + (9 * g | 0) + 3];
                    e = r > e ? r : e;
                    h = h + 36 * n + 8 | 0;
                    p = (M[0] = p > u ? p : u, t[0]);
                    e = (M[0] = e, t[0]) | 0;
                    l[(h | 0) >> 2] = 0 | p;
                    l[(h + 4 | 0) >> 2] = e;
                    h = l[j];
                    f = l[(h + 32 >> 2) + (9 * f | 0)];
                    g = l[(h + 32 >> 2) + (9 * g | 0)];
                    l[(h + 36 * n + 32 | 0) >> 2] = ((f | 0) > (g | 0) ? f : g) + 1 | 0;
                    n = l[(l[j] + 20 >> 2) + (9 * n | 0)];
                    if (-1 == (n | 0)) {
                        break a
                    }
                }
            }
        }
    } while (0)
}
function Pk(b, d, e, f) {
    var g, h;
    h = -1 < (d | 0) ? (l[b + 12 >> 2] | 0) > (d | 0) ? 5 : 4 : 4;
    4 == h && P(N.c | 0, 135, N.mb | 0, N.o | 0);
    g = (b + 4 | 0) >> 2;
    var j = l[g];
    -1 != (l[(j + 24 >> 2) + (9 * d | 0)] | 0) && (P(N.c | 0, 137, N.mb | 0, N.Ub | 0), j = l[g]);
    h = j >> 2;
    j = e | 0;
    if (q[h + (9 * d | 0)] > q[j >> 2]) {
        var k = e + 4 | 0;
        h = 12
    } else {
        var m = e + 4 | 0;
        if (q[h + (9 * d | 0) + 1] > q[m >> 2]) {
            k = m, h = 12
        } else {
            if (q[e + 8 >> 2] > q[h + (9 * d | 0) + 2]) {
                k = m, h = 12
            } else {
                if (q[e + 12 >> 2] > q[h + (9 * d | 0) + 3]) {
                    k = m, h = 12
                } else {
                    var n = 0;
                    h = 19
                }
            }
        }
    }
    12 == h && (Ok(b, d), n = q[j >> 2] - .10000000149011612, k = q[k >> 2] - .10000000149011612, j = q[e + 8 >> 2] + .10000000149011612, e = q[e + 12 >> 2] + .10000000149011612, m = 2 * q[f >> 2], h = 2 * q[f + 4 >> 2], 0 > m ? (f = n + m, n = j) : (f = n, n = j + m), 0 > h ? k += h : e += h, g = l[g] >> 2, q[g + (9 * d | 0)] = f, q[g + (9 * d | 0) + 1] = k, q[g + (9 * d | 0) + 2] = n, q[g + (9 * d | 0) + 3] = e, ih(b, d), n = 1);
    return n
}
function Mk(b, d) {
    var e, f, g, h, j, k, m, n, p, u, r, w, x, y, A, C, z, D, E, G, H, F, I, J, L = b >> 2, O;
    -1 == (d | 0) && P(N.c | 0, 382, N.v | 0, N.xh | 0);
    J = (b + 4 | 0) >> 2;
    var R = l[J];
    I = R >> 2;
    var T = R + 36 * d | 0;
    F = (R + 36 * d + 24 | 0) >> 2;
    var S = l[F];
    if (-1 == (S | 0)) {
        var U = d
    } else {
        if (H = (R + 36 * d + 32 | 0) >> 2, 2 > (l[H] | 0)) {
            U = d
        } else {
            G = (R + 36 * d + 28 | 0) >> 2;
            var W = l[G];
            O = -1 < (S | 0) ? (S | 0) < (l[L + 3] | 0) ? 9 : 8 : 8;
            8 == O && P(N.c | 0, 392, N.v | 0, N.Dh | 0);
            O = -1 < (W | 0) ? (W | 0) < (l[L + 3] | 0) ? 12 : 11 : 11;
            11 == O && P(N.c | 0, 393, N.v | 0, N.Re | 0);
            var Q = l[J];
            E = Q >> 2;
            var $ = Q + 36 * S | 0, ea = Q + 36 * W | 0;
            D = (Q + 36 * W + 32 | 0) >> 2;
            z = (Q + 36 * S + 32 | 0) >> 2;
            var sa = l[D] - l[z] | 0;
            if (1 < (sa | 0)) {
                var Ba = Q + 36 * W + 24 | 0, oa = l[Ba >> 2];
                C = (Q + 36 * W + 28 | 0) >> 2;
                var ga = l[C], qa = Q + 36 * oa | 0, la = Q + 36 * ga | 0;
                O = -1 < (oa | 0) ? (oa | 0) < (l[L + 3] | 0) ? 16 : 15 : 15;
                15 == O && P(N.c | 0, 407, N.v | 0, N.Xe | 0);
                O = -1 < (ga | 0) ? (ga | 0) < (l[L + 3] | 0) ? 19 : 18 : 18;
                18 == O && P(N.c | 0, 408, N.v | 0, N.ff | 0);
                l[Ba >> 2] = d;
                var Ca = R + 36 * d + 20 | 0, ia = l[Ca >> 2];
                A = (Q + 36 * W + 20 | 0) >> 2;
                l[A] = ia;
                l[Ca >> 2] = W;
                var ya = l[A];
                if (-1 == (ya | 0)) {
                    l[L] = W
                } else {
                    var ta = l[J], Ia = ta + 36 * ya + 24 | 0;
                    if ((l[Ia >> 2] | 0) == (d | 0)) {
                        l[Ia >> 2] = W
                    } else {
                        if ((l[(ta + 28 >> 2) + (9 * ya | 0)] | 0) == (d | 0)) {
                            var na = ya, Z = ta
                        } else {
                            P(N.c | 0, 424, N.v | 0, N.of | 0), na = l[A], Z = l[J]
                        }
                        l[(Z + 28 >> 2) + (9 * na | 0)] = W
                    }
                }
                y = (Q + 36 * oa + 32 | 0) >> 2;
                x = (Q + 36 * ga + 32 | 0) >> 2;
                if ((l[y] | 0) > (l[x] | 0)) {
                    l[C] = oa;
                    l[G] = ga;
                    l[(Q + 36 * ga + 20 | 0) >> 2] = d;
                    var ba = q[$ >> 2], ca = q[la >> 2], ma = ba < ca ? ba : ca, ka = q[E + (9 * S | 0) + 1], aa = q[E + (9 * ga | 0) + 1], ra = ka < aa ? ka : aa, ha = (M[0] = ma, t[0]), za = (M[0] = ra, t[0]), X = 0 | ha, ua = za | 0, da = T | 0;
                    w = da >> 2;
                    l[w] = X;
                    var fa = T + 4 | 0;
                    r = fa >> 2;
                    l[r] = ua;
                    var Aa = q[E + (9 * S | 0) + 2], Qa = q[E + (9 * ga | 0) + 2], pa = q[E + (9 * S | 0) + 3], cb = q[E + (9 * ga | 0) + 3], Ra = pa > cb ? pa : cb, Ta = R + 36 * d + 8 | 0, $a = (M[0] = Aa > Qa ? Aa : Qa, t[0]), va = (M[0] = Ra, t[0]), Wa = 0 | $a, fb = va | 0, gb = Ta | 0;
                    u = gb >> 2;
                    l[u] = Wa;
                    var Xa = Ta + 4 | 0;
                    p = Xa >> 2;
                    l[p] = fb;
                    var Ua = q[qa >> 2], Va = q[I + (9 * d | 0) + 1], pb = q[E + (9 * oa | 0) + 1], nb = Va < pb ? Va : pb, La = (M[0] = ma < Ua ? ma : Ua, t[0]), qb = (M[0] = nb, t[0]), bb = 0 | La, Fa = qb | 0, Ma = ea | 0;
                    n = Ma >> 2;
                    l[n] = bb;
                    var wa = ea + 4 | 0;
                    m = wa >> 2;
                    l[m] = Fa;
                    var hb = q[I + (9 * d | 0) + 2], Ya = q[E + (9 * oa | 0) + 2], Za = q[I + (9 * d | 0) + 3], Da = q[E + (9 * oa | 0) + 3], Oa = Za > Da ? Za : Da, ib = Q + 36 * W + 8 | 0, ab = (M[0] = hb > Ya ? hb : Ya, t[0]), Ga = (M[0] = Oa, t[0]), jb = 0 | ab, Ea = Ga | 0, Pa = ib | 0;
                    k = Pa >> 2;
                    l[k] = jb;
                    var Ja = ib + 4 | 0;
                    j = Ja >> 2;
                    l[j] = Ea;
                    var db = l[z], xa = l[x], Sa = ((db | 0) > (xa | 0) ? db : xa) + 1 | 0;
                    l[H] = Sa;
                    var Ka = l[y], tb = (Sa | 0) > (Ka | 0) ? Sa : Ka
                } else {
                    l[C] = ga;
                    l[G] = oa;
                    l[(Q + 36 * oa + 20 | 0) >> 2] = d;
                    var kb = q[$ >> 2], ub = q[qa >> 2], rb = kb < ub ? kb : ub, Bb = q[E + (9 * S | 0) + 1], lb = q[E + (9 * oa | 0) + 1], yb = Bb < lb ? Bb : lb, xb = (M[0] = rb, t[0]), Ib = (M[0] = yb, t[0]), wb = 0 | xb, vb = Ib | 0, da = T | 0;
                    w = da >> 2;
                    l[w] = wb;
                    fa = T + 4 | 0;
                    r = fa >> 2;
                    l[r] = vb;
                    var zb = q[E + (9 * S | 0) + 2], Eb = q[E + (9 * oa | 0) + 2], Cb = q[E + (9 * S | 0) + 3], eb = q[E + (9 * oa | 0) + 3], sb = Cb > eb ? Cb : eb, ob = R + 36 * d + 8 | 0, Db = (M[0] = zb > Eb ? zb : Eb, t[0]), Jb = (M[0] = sb, t[0]), Rb = 0 | Db, Nb = Jb | 0, gb = ob | 0;
                    u = gb >> 2;
                    l[u] = Rb;
                    Xa = ob + 4 | 0;
                    p = Xa >> 2;
                    l[p] = Nb;
                    var Ob = q[la >> 2], Lb = q[I + (9 * d | 0) + 1], Pb = q[E + (9 * ga | 0) + 1], Mb = Lb < Pb ? Lb : Pb, Yb = (M[0] = rb < Ob ? rb : Ob, t[0]), Zb = (M[0] = Mb, t[0]), fc = 0 | Yb, Ub = Zb | 0, Ma = ea | 0;
                    n = Ma >> 2;
                    l[n] = fc;
                    wa = ea + 4 | 0;
                    m = wa >> 2;
                    l[m] = Ub;
                    var jc = q[I + (9 * d | 0) + 2], Qb = q[E + (9 * ga | 0) + 2], mb = q[I + (9 * d | 0) + 3], cc = q[E + (9 * ga | 0) + 3], Fb = mb > cc ? mb : cc, hc = Q + 36 * W + 8 | 0, wc = (M[0] = jc > Qb ? jc : Qb, t[0]), pc = (M[0] = Fb, t[0]), qc = 0 | wc, $c = pc | 0, Pa = hc | 0;
                    k = Pa >> 2;
                    l[k] = qc;
                    Ja = hc + 4 | 0;
                    j = Ja >> 2;
                    l[j] = $c;
                    var Fc = l[z], sc = l[y], kd = ((Fc | 0) > (sc | 0) ? Fc : sc) + 1 | 0;
                    l[H] = kd;
                    var wd = l[x], tb = (kd | 0) > (wd | 0) ? kd : wd
                }
                l[D] = tb + 1 | 0;
                U = W
            } else {
                if (-1 > (sa | 0)) {
                    var Mc = Q + 36 * S + 24 | 0, $b = l[Mc >> 2];
                    h = (Q + 36 * S + 28 | 0) >> 2;
                    var ac = l[h], oc = Q + 36 * $b | 0, tc = Q + 36 * ac | 0;
                    O = -1 < ($b | 0) ? ($b | 0) < (l[L + 3] | 0) ? 34 : 33 : 33;
                    33 == O && P(N.c | 0, 467, N.v | 0, N.tf | 0);
                    O = -1 < (ac | 0) ? (ac | 0) < (l[L + 3] | 0) ? 37 : 36 : 36;
                    36 == O && P(N.c | 0, 468, N.v | 0, N.wf | 0);
                    l[Mc >> 2] = d;
                    var Oc = R + 36 * d + 20 | 0, ld = l[Oc >> 2];
                    g = (Q + 36 * S + 20 | 0) >> 2;
                    l[g] = ld;
                    l[Oc >> 2] = S;
                    var Wc = l[g];
                    if (-1 == (Wc | 0)) {
                        l[L] = S
                    } else {
                        var ad = l[J], Xc = ad + 36 * Wc + 24 | 0;
                        if ((l[Xc >> 2] | 0) == (d | 0)) {
                            l[Xc >> 2] = S
                        } else {
                            if ((l[(ad + 28 >> 2) + (9 * Wc | 0)] | 0) == (d | 0)) {
                                var Cc = Wc, fd = ad
                            } else {
                                P(N.c | 0, 484, N.v | 0, N.Cf | 0), Cc = l[g], fd = l[J]
                            }
                            l[(fd + 28 >> 2) + (9 * Cc | 0)] = S
                        }
                    }
                    f = (Q + 36 * $b + 32 | 0) >> 2;
                    e = (Q + 36 * ac + 32 | 0) >> 2;
                    if ((l[f] | 0) > (l[e] | 0)) {
                        l[h] = $b;
                        l[F] = ac;
                        l[(Q + 36 * ac + 20 | 0) >> 2] = d;
                        var md = q[ea >> 2], nd = q[tc >> 2], Pc = md < nd ? md : nd, gd = q[E + (9 * W | 0) + 1], od = q[E + (9 * ac | 0) + 1], pd = gd < od ? gd : od, Pd = (M[0] = Pc, t[0]), Xd = (M[0] = pd, t[0]), qd = 0 | Pd, Qd = Xd | 0, da = T | 0;
                        w = da >> 2;
                        l[w] = qd;
                        fa = T + 4 | 0;
                        r = fa >> 2;
                        l[r] = Qd;
                        var Qc = q[E + (9 * W | 0) + 2], Jc = q[E + (9 * ac | 0) + 2], Kc = q[E + (9 * W | 0) + 3], gc = q[E + (9 * ac | 0) + 3], hd = Kc > gc ? Kc : gc, xd = R + 36 * d + 8 | 0, bd = (M[0] = Qc > Jc ? Qc : Jc, t[0]), rd = (M[0] = hd, t[0]), ye = 0 | bd, Yd = rd | 0, gb = xd | 0;
                        u = gb >> 2;
                        l[u] = ye;
                        Xa = xd + 4 | 0;
                        p = Xa >> 2;
                        l[p] = Yd;
                        var Tc = q[oc >> 2], xc = q[I + (9 * d | 0) + 1], bc = q[E + (9 * $b | 0) + 1], Ed = xc < bc ? xc : bc, yc = (M[0] = Pc < Tc ? Pc : Tc, t[0]), Ac = (M[0] = Ed, t[0]), Zd = 0 | yc, $d = Ac | 0, Ma = $ | 0;
                        n = Ma >> 2;
                        l[n] = Zd;
                        wa = $ + 4 | 0;
                        m = wa >> 2;
                        l[m] = $d;
                        var cd = q[I + (9 * d | 0) + 2], zc = q[E + (9 * $b | 0) + 2], kc = q[I + (9 * d | 0) + 3], Rd = q[E + (9 * $b | 0) + 3], Gc = kc > Rd ? kc : Rd, Rc = Q + 36 * S + 8 | 0, Nc = (M[0] = cd > zc ? cd : zc, t[0]), ne = (M[0] = Gc, t[0]), Sd = 0 | Nc, Td = ne | 0, Pa = Rc | 0;
                        k = Pa >> 2;
                        l[k] = Sd;
                        Ja = Rc + 4 | 0;
                        j = Ja >> 2;
                        l[j] = Td;
                        var Ud = l[D], xf = l[e], Fd = ((Ud | 0) > (xf | 0) ? Ud : xf) + 1 | 0;
                        l[H] = Fd;
                        var oe = l[f], He = (Fd | 0) > (oe | 0) ? Fd : oe
                    } else {
                        l[h] = ac;
                        l[F] = $b;
                        l[(Q + 36 * $b + 20 | 0) >> 2] = d;
                        var ae = q[ea >> 2], Hc = q[oc >> 2], dd = ae < Hc ? ae : Hc, be = q[E + (9 * W | 0) + 1], pe = q[E + (9 * $b | 0) + 1], Uc = be < pe ? be : pe, lc = (M[0] = dd, t[0]), Gd = (M[0] = Uc, t[0]), Hd = 0 | lc, Re = Gd | 0, da = T | 0;
                        w = da >> 2;
                        l[w] = Hd;
                        fa = T + 4 | 0;
                        r = fa >> 2;
                        l[r] = Re;
                        var Id = q[E + (9 * W | 0) + 2], Jd = q[E + (9 * $b | 0) + 2], qe = q[E + (9 * W | 0) + 3], re = q[E + (9 * $b | 0) + 3], Kd = qe > re ? qe : re, Se = R + 36 * d + 8 | 0, Rf = (M[0] = Id > Jd ? Id : Jd, t[0]), sd = (M[0] = Kd, t[0]), Vc = 0 | Rf, Te = sd | 0, gb = Se | 0;
                        u = gb >> 2;
                        l[u] = Vc;
                        Xa = Se + 4 | 0;
                        p = Xa >> 2;
                        l[p] = Te;
                        var Ue = q[tc >> 2], ce = q[I + (9 * d | 0) + 1], Yc = q[E + (9 * ac | 0) + 1], yd = ce < Yc ? ce : Yc, $e = (M[0] = dd < Ue ? dd : Ue, t[0]), ze = (M[0] = yd, t[0]), Zc = 0 | $e, Ld = ze | 0, Ma = $ | 0;
                        n = Ma >> 2;
                        l[n] = Zc;
                        wa = $ + 4 | 0;
                        m = wa >> 2;
                        l[m] = Ld;
                        var Md = q[I + (9 * d | 0) + 2], de = q[E + (9 * ac | 0) + 2], zd = q[I + (9 * d | 0) + 3], ee = q[E + (9 * ac | 0) + 3], yf = zd > ee ? zd : ee, af = Q + 36 * S + 8 | 0, Ie = (M[0] = Md > de ? Md : de, t[0]), zf = (M[0] = yf, t[0]), jf = 0 | Ie, bf = zf | 0, Pa = af | 0;
                        k = Pa >> 2;
                        l[k] = jf;
                        Ja = af + 4 | 0;
                        j = Ja >> 2;
                        l[j] = bf;
                        var Sf = l[D], kf = l[f], Ae = ((Sf | 0) > (kf | 0) ? Sf : kf) + 1 | 0;
                        l[H] = Ae;
                        var Ad = l[e], He = (Ae | 0) > (Ad | 0) ? Ae : Ad
                    }
                    l[z] = He + 1 | 0;
                    U = S
                } else {
                    U = d
                }
            }
        }
    }
    return U
}
function Sl(b, d) {
    4 == (-1 < (d | 0) ? (l[b + 12 >> 2] | 0) > (d | 0) ? 5 : 4 : 4) && P(N.c | 0, 563, N.Je | 0, N.$ | 0);
    var e = l[b + 4 >> 2], f = l[(e + 24 >> 2) + (9 * d | 0)];
    if (-1 == (f | 0)) {
        return 0
    }
    f = Sl(b, f);
    e = Sl(b, l[(e + 28 >> 2) + (9 * d | 0)]);
    return((f | 0) > (e | 0) ? f : e) + 1 | 0
}
function hm(b, d) {
    var e, f, g = b | 0;
    f = (b + 4 | 0) >> 2;
    for (var h = b + 12 | 0, j = d; -1 != (j | 0);) {
        (l[g >> 2] | 0) == (j | 0) && -1 != (l[(l[f] + 20 >> 2) + (9 * j | 0)] | 0) && P(N.c | 0, 591, N.O | 0, N.Jf | 0);
        e = l[f] >> 2;
        var k = l[e + (9 * j | 0) + 6], m = l[e + (9 * j | 0) + 7];
        if (-1 == (k | 0)) {
            -1 != (m | 0) && P(N.c | 0, 602, N.O | 0, N.Ib | 0);
            if (0 == (l[e + (9 * j | 0) + 8] | 0)) {
                break
            }
            P(N.c | 0, 603, N.O | 0, N.Kb | 0);
            break
        }
        e = -1 < (k | 0) ? (k | 0) < (l[h >> 2] | 0) ? 15 : 14 : 14;
        14 == e && P(N.c | 0, 607, N.O | 0, N.Lb | 0);
        e = -1 < (m | 0) ? (m | 0) < (l[h >> 2] | 0) ? 18 : 17 : 17;
        17 == e && P(N.c | 0, 608, N.O | 0, N.Mb | 0);
        e = l[f];
        (l[(e + 20 >> 2) + (9 * k | 0)] | 0) != (j | 0) && (P(N.c | 0, 610, N.O | 0, N.ag | 0), e = l[f]);
        (l[(e + 20 >> 2) + (9 * m | 0)] | 0) != (j | 0) && P(N.c | 0, 611, N.O | 0, N.hg | 0);
        hm(b, k);
        j = m
    }
}
function im(b, d) {
    var e, f, g, h;
    g = (b + 4 | 0) >> 2;
    for (var j = b + 12 | 0, k = d; -1 != (k | 0);) {
        f = l[g] >> 2;
        var m = l[f + (9 * k | 0) + 6], n = l[f + (9 * k | 0) + 7];
        if (-1 == (m | 0)) {
            -1 != (n | 0) && P(N.c | 0, 632, N.N | 0, N.Ib | 0);
            if (0 == (l[f + (9 * k | 0) + 8] | 0)) {
                break
            }
            P(N.c | 0, 633, N.N | 0, N.Kb | 0);
            break
        }
        h = -1 < (m | 0) ? (m | 0) < (l[j >> 2] | 0) ? 12 : 11 : 11;
        11 == h && P(N.c | 0, 637, N.N | 0, N.Lb | 0);
        h = -1 < (n | 0) ? (n | 0) < (l[j >> 2] | 0) ? 15 : 14 : 14;
        14 == h && P(N.c | 0, 638, N.N | 0, N.Mb | 0);
        h = l[g];
        var p = l[(h + 32 >> 2) + (9 * m | 0)], u = l[(h + 32 >> 2) + (9 * n | 0)];
        if ((l[f + (9 * k | 0) + 8] | 0) != (((p | 0) > (u | 0) ? p : u) + 1 | 0)) {
            P(N.c | 0, 644, N.N | 0, N.kg | 0), h = l[g]
        }
        e = h >> 2;
        h = q[e + (9 * m | 0)];
        var p = q[e + (9 * n | 0)], u = q[e + (9 * m | 0) + 1], r = q[e + (9 * n | 0) + 1], w = q[e + (9 * m | 0) + 2], x = q[e + (9 * n | 0) + 2], w = w > x ? w : x, x = q[e + (9 * m | 0) + 3];
        e = q[e + (9 * n | 0) + 3];
        e = x > e ? x : e;
        h = (h < p ? h : p) == q[f + (9 * k | 0)] ? (u < r ? u : r) == q[f + (9 * k | 0) + 1] ? 20 : 19 : 19;
        19 == h && P(N.c | 0, 649, N.N | 0, N.og | 0);
        h = w == q[f + (9 * k | 0) + 2] ? e == q[f + (9 * k | 0) + 3] ? 23 : 22 : 22;
        22 == h && P(N.c | 0, 650, N.N | 0, N.sg | 0);
        im(b, m);
        k = n
    }
}
function jm(b) {
    var d, e;
    d = (b | 0) >> 2;
    hm(b, l[d]);
    im(b, l[d]);
    var f = l[b + 16 >> 2], g = -1 == (f | 0);
    a:do {
        if (g) {
            var h = 0
        } else {
            for (var j = b + 12 | 0, k = b + 4 | 0, m = 0, n = f; ;) {
                if (e = -1 < (n | 0) ? (n | 0) < (l[j >> 2] | 0) ? 7 : 6 : 6, 6 == e && P(N.c | 0, 665, N.Ma | 0, N.zg | 0), m = m + 1 | 0, n = l[(l[k >> 2] + 20 >> 2) + (9 * n | 0)], -1 == (n | 0)) {
                    h = m;
                    break a
                }
            }
        }
    } while (0);
    f = l[d];
    d = -1 == (f | 0) ? 0 : l[(l[b + 4 >> 2] + 32 >> 2) + (9 * f | 0)];
    f = Sl(b, f);
    (d | 0) != (f | 0) && P(N.c | 0, 670, N.Ma | 0, N.Ag | 0);
    (l[b + 8 >> 2] + h | 0) != (l[b + 12 >> 2] | 0) && P(N.c | 0, 672, N.Ma | 0, N.Cg | 0)
}
function km(b) {
    var d, e, f, g;
    g = (b + 8 | 0) >> 2;
    var h = Ne(l[g] << 2);
    f = h >> 2;
    var j = b + 12 | 0, k = l[j >> 2], m = 0 < (k | 0);
    a:do {
        if (m) {
            e = (b + 4 | 0) >> 2;
            var n = b + 16 | 0, p = 0;
            d = 0;
            for (var u = k; ;) {
                var r = l[e];
                0 > (l[(r + 32 >> 2) + (9 * p | 0)] | 0) ? r = d : -1 == (l[(r + 24 >> 2) + (9 * p | 0)] | 0) ? (l[(r + 36 * p + 20 | 0) >> 2] = -1, l[((d << 2) + h | 0) >> 2] = p, r = d + 1 | 0) : ((u | 0) > (p | 0) || P(N.c | 0, 97, N.G | 0, N.$ | 0), 0 < (l[g] | 0) || P(N.c | 0, 98, N.G | 0, N.Ca | 0), l[(l[e] + 36 * p + 20 | 0) >> 2] = l[n >> 2], l[(l[e] + 36 * p + 32 | 0) >> 2] = -1, l[n >> 2] = p, l[g] = l[g] - 1 | 0, r = d);
                p = p + 1 | 0;
                u = l[j >> 2];
                if ((p | 0) >= (u | 0)) {
                    break
                }
                d = r
            }
            if (1 < (r | 0)) {
                for (n = r; ;) {
                    p = l[e];
                    d = p >> 2;
                    for (var w = u = -1, x = 3.4028234663852886e+38, y = 0; ;) {
                        var A = l[(y << 2 >> 2) + f], C = q[d + (9 * A | 0)], z = q[d + (9 * A | 0) + 1], D = q[d + (9 * A | 0) + 2], A = q[d + (9 * A | 0) + 3], E = y + 1 | 0, G = (E | 0) < (n | 0);
                        b:do {
                            if (G) {
                                for (var H = u, F = w, I = x, J = E; ;) {
                                    var L = l[(J << 2 >> 2) + f], O = q[d + (9 * L | 0)], R = q[d + (9 * L | 0) + 1], T = q[d + (9 * L | 0) + 2], L = q[d + (9 * L | 0) + 3], O = 2 * ((D > T ? D : T) - (C < O ? C : O) + ((A > L ? A : L) - (z < R ? z : R))), H = (R = O < I) ? J : H, F = R ? y : F, I = R ? O : I, J = J + 1 | 0;
                                    if ((J | 0) == (n | 0)) {
                                        var S = H, U = F, W = I;
                                        break b
                                    }
                                }
                            } else {
                                S = u, U = w, W = x
                            }
                        } while (0);
                        if ((E | 0) == (n | 0)) {
                            break
                        }
                        u = S;
                        w = U;
                        x = W;
                        y = E
                    }
                    u = (U << 2) + h | 0;
                    y = l[u >> 2];
                    w = (S << 2) + h | 0;
                    C = l[w >> 2];
                    x = hh(b);
                    z = l[e];
                    l[(z + 36 * x + 24 | 0) >> 2] = y;
                    l[(z + 36 * x + 28 | 0) >> 2] = C;
                    D = l[d + (9 * y | 0) + 8];
                    A = l[d + (9 * C | 0) + 8];
                    l[(z + 36 * x + 32 | 0) >> 2] = ((D | 0) > (A | 0) ? D : A) + 1 | 0;
                    D = q[d + (9 * y | 0)];
                    A = q[d + (9 * C | 0)];
                    E = q[d + (9 * y | 0) + 1];
                    G = q[d + (9 * C | 0) + 1];
                    G = E < G ? E : G;
                    E = z + 36 * x | 0;
                    D = (M[0] = D < A ? D : A, t[0]);
                    A = (M[0] = G, t[0]) | 0;
                    l[(E | 0) >> 2] = 0 | D;
                    l[(E + 4 | 0) >> 2] = A;
                    D = q[d + (9 * y | 0) + 2];
                    A = q[d + (9 * C | 0) + 2];
                    E = q[d + (9 * y | 0) + 3];
                    d = q[d + (9 * C | 0) + 3];
                    E = E > d ? E : d;
                    d = z + 36 * x + 8 | 0;
                    D = (M[0] = D > A ? D : A, t[0]);
                    A = (M[0] = E, t[0]) | 0;
                    l[(d | 0) >> 2] = 0 | D;
                    l[(d + 4 | 0) >> 2] = A;
                    l[(z + 36 * x + 20 | 0) >> 2] = -1;
                    l[(p + 36 * y + 20 | 0) >> 2] = x;
                    l[(p + 36 * C + 20 | 0) >> 2] = x;
                    n = n - 1 | 0;
                    l[w >> 2] = l[(n << 2 >> 2) + f];
                    l[u >> 2] = x;
                    if (1 >= (n | 0)) {
                        break a
                    }
                }
            }
        }
    } while (0);
    l[b >> 2] = l[f];
    Dh(h);
    jm(b)
}
function lm(b, d, e, f) {
    var g = b >> 2, h = 1 - f, j = q[g + 4] * h + q[g + 6] * f, k = q[g + 5] * h + q[g + 7] * f, m = h * q[g + 8] + q[g + 9] * f, n = mm(m), m = nm(m), p = q[g + 2], u = q[g + 3], j = j - (m * p - n * u), k = k - (n * p + m * u), p = q[g + 13] * h + q[g + 15] * f, u = q[g + 14] * h + q[g + 16] * f, h = h * q[g + 17] + q[g + 18] * f, f = mm(h), h = nm(h), r = q[g + 11], w = q[g + 12], p = p - (h * r - f * w), u = u - (f * r + h * w), r = l[g + 20];
    if (0 == (r | 0)) {
        var r = b + 92 | 0, w = b + 96 | 0, x = l[g], b = -1 < (d | 0) ? (l[x + 20 >> 2] | 0) > (d | 0) ? 6 : 5 : 5;
        5 == b && P(N.i | 0, 103, N.h | 0, N.j | 0);
        var b = (d << 3) + l[x + 16 >> 2] | 0, d = (b | 0) >> 2, b = (b + 4 | 0) >> 2, b = l[b], x = (t[0] = l[d], M[0]), y = (t[0] = b, M[0]), g = l[g + 1], b = -1 < (e | 0) ? (l[g + 20 >> 2] | 0) > (e | 0) ? 9 : 8 : 8;
        8 == b && P(N.i | 0, 103, N.h | 0, N.j | 0);
        g = (e << 3) + l[g + 16 >> 2] | 0;
        d = (g | 0) >> 2;
        b = (g + 4 | 0) >> 2;
        g = l[b];
        e = (t[0] = l[d], M[0]);
        g = (t[0] = g, M[0]);
        n = (h * e - f * g + p - (m * x - n * y + j)) * q[r >> 2] + (f * e + h * g + u - (n * x + m * y + k)) * q[w >> 2]
    } else {
        1 == (r | 0) ? (d = q[g + 23], b = q[g + 24], r = m * d - n * b, w = n * d + m * b, d = q[g + 21], b = q[g + 22], j = m * d - n * b + j, n = n * d + m * b + k, m = l[g + 1], b = -1 < (e | 0) ? (l[m + 20 >> 2] | 0) > (e | 0) ? 13 : 12 : 12, 12 == b && P(N.i | 0, 103, N.h | 0, N.j | 0), m = (e << 3) + l[m + 16 >> 2] | 0, d = (m | 0) >> 2, b = (m + 4 | 0) >> 2, m = l[b], k = (t[0] = l[d], M[0]), m = (t[0] = m, M[0]), n = (h * k - f * m + p - j) * r + (f * k + h * m + u - n) * w) : 2 == (r | 0) ? (b = q[g + 23], r = q[g + 24], e = h * b - f * r, r = f * b + h * r, b = q[g + 21], w = q[g + 22], p = h * b - f * w + p, f = f * b + h * w + u, h = l[g], b = -1 < (d | 0) ? (l[h + 20 >> 2] | 0) > (d | 0) ? 17 : 16 : 16, 16 == b && P(N.i | 0, 103, N.h | 0, N.j | 0), h = (d << 3) + l[h + 16 >> 2] | 0, d = (h | 0) >> 2, b = (h + 4 | 0) >> 2, h = l[b], g = (t[0] = l[d], M[0]), h = (t[0] = h, M[0]), n = (m * g - n * h + j - p) * e + (n * g + m * h + k - f) * r) : (P(N.Da | 0, 242, N.Ne | 0, N.l | 0), n = 0)
    }
    return n
}
function om(b, d, e) {
    var f;
    4 == (-1 < (e | 0) ? (l[b + 16 >> 2] - 1 | 0) > (e | 0) ? 5 : 4 : 4) && P(N.F | 0, 89, N.He | 0, N.ah | 0);
    l[d + 4 >> 2] = 1;
    q[d + 8 >> 2] = q[b + 8 >> 2];
    f = (b + 12 | 0) >> 2;
    var g = (e << 3) + l[f] | 0, h = d + 12 | 0, j = l[g + 4 >> 2];
    l[h >> 2] = l[g >> 2];
    l[h + 4 >> 2] = j;
    g = (e + 1 << 3) + l[f] | 0;
    h = d + 20 | 0;
    j = l[g + 4 >> 2];
    l[h >> 2] = l[g >> 2];
    l[h + 4 >> 2] = j;
    g = d + 28 | 0;
    0 < (e | 0) ? (h = (e - 1 << 3) + l[f] | 0, j = l[(h + 4 | 0) >> 2], l[(g | 0) >> 2] = l[(h | 0) >> 2], l[(g + 4 | 0) >> 2] = j, c[d + 44 | 0] = 1) : (h = b + 20 | 0, j = l[(h + 4 | 0) >> 2], l[(g | 0) >> 2] = l[(h | 0) >> 2], l[(g + 4 | 0) >> 2] = j, c[d + 44 | 0] = c[b + 36 | 0] & 1);
    g = d + 36 | 0;
    (l[b + 16 >> 2] - 2 | 0) > (e | 0) ? (e = (e + 2 << 3) + l[f] | 0, b = l[(e | 0) >> 2], e = l[(e + 4 | 0) >> 2], l[(g | 0) >> 2] = b, l[(g + 4 | 0) >> 2] = e, c[d + 45 | 0] = 1) : (f = b + 28 | 0, e = l[(f | 0) >> 2], f = l[(f + 4 | 0) >> 2], l[(g | 0) >> 2] = e, l[(g + 4 | 0) >> 2] = f, c[d + 45 | 0] = c[b + 37 | 0] & 1)
}
function Vm(b, d, e, f) {
    var e = e >> 2, g = q[f >> 2], h = q[e] - g, j = q[f + 4 >> 2], k = q[e + 1] - j, m = q[f + 12 >> 2], n = q[f + 8 >> 2], f = m * h + n * k, p = -n, h = h * p + m * k, g = q[e + 2] - g, k = q[e + 3] - j, j = m * g + n * k - f, m = g * p + m * k - h, p = b + 12 | 0, n = l[p + 4 >> 2], p = (t[0] = l[p >> 2], M[0]), n = (t[0] = n, M[0]), g = b + 20 | 0, b = l[g + 4 >> 2], g = (t[0] = l[g >> 2], M[0]), k = (t[0] = b, M[0]), b = g - p, g = k - n, u = -b, k = g * g + b * b, r = Fh(k);
    if (1.1920928955078125e-7 > r) {
        r = g
    } else {
        var w = 1 / r, r = g * w, u = w * u
    }
    var w = r * (p - f) + u * (n - h), x = r * j + u * m;
    0 == x ? d = 0 : (x = w / x, 0 > x ? d = 0 : q[e + 4] < x | 0 == k ? d = 0 : (e = ((f + j * x - p) * b + (h + m * x - n) * g) / k, 0 > e | 1 < e ? d = 0 : (q[d + 8 >> 2] = x, 0 < w ? (e = (M[0] = -r, t[0]), f = (M[0] = -u, t[0]) | 0) : (e = (M[0] = r, t[0]), f = (M[0] = u, t[0]) | 0), l[d >> 2] = 0 | e, l[d + 4 >> 2] = f, d = 1)));
    return d
}
function Wm(b, d, e, f, g) {
    var h = b >> 2, j = b + 148 | 0;
    l[j >> 2] = 4;
    var k = -d, m = -e;
    q[h + 5] = k;
    q[h + 6] = m;
    q[h + 7] = d;
    q[h + 8] = m;
    q[h + 9] = d;
    q[h + 10] = e;
    q[h + 11] = k;
    q[h + 12] = e;
    q[h + 21] = 0;
    q[h + 22] = -1;
    q[h + 23] = 1;
    q[h + 24] = 0;
    q[h + 25] = 0;
    q[h + 26] = 1;
    q[h + 27] = -1;
    q[h + 28] = 0;
    d = f >> 2;
    e = b + 12 | 0;
    f = l[d + 1];
    l[e >> 2] = l[d];
    l[e + 4 >> 2] = f;
    for (var e = l[d + 1], d = (t[0] = l[d], M[0]), e = (t[0] = e, M[0]), f = mm(g), g = nm(g), k = 0, n = m, m = -1; ;) {
        var p = (k << 3) + b + 20 | 0, u = q[p >> 2], r = f * u + g * n + e, n = (M[0] = g * u - f * n + d, t[0]), r = (M[0] = r, t[0]) | 0;
        l[p >> 2] = 0 | n;
        l[p + 4 >> 2] = r;
        r = (k << 3) + b + 84 | 0;
        p = q[r >> 2];
        n = f * p + g * m;
        m = (M[0] = g * p - f * m, t[0]);
        n = (M[0] = n, t[0]) | 0;
        l[r >> 2] = 0 | m;
        l[r + 4 >> 2] = n;
        k = k + 1 | 0;
        if ((k | 0) >= (l[j >> 2] | 0)) {
            break
        }
        n = q[((k << 3) + 24 >> 2) + h];
        m = q[((k << 3) + 88 >> 2) + h]
    }
}
function Xm(b, d, e) {
    if (6 > (e - 3 | 0) >>> 0) {
        var f = b + 148 | 0;
        l[f >> 2] = e;
        e = 5
    } else {
        P(N.P | 0, 122, N.nb | 0, N.zf | 0);
        var g = b + 148 | 0;
        l[g >> 2] = e;
        if (0 < (e | 0)) {
            f = g, e = 5
        } else {
            var h = e, e = 13
        }
    }
    do {
        if (5 == e) {
            for (e = 0; ;) {
                var j = (e << 3) + d | 0, g = (e << 3) + b + 20 | 0, k = l[j + 4 >> 2];
                l[g >> 2] = l[j >> 2];
                l[g + 4 >> 2] = k;
                e = e + 1 | 0;
                j = o[f >> 2];
                if ((e | 0) >= (j | 0)) {
                    break
                }
            }
            if (0 < (j | 0)) {
                g = j;
                for (k = 0; ;) {
                    var e = k + 1 | 0, m = (e | 0) < (g | 0) ? e : 0, n = q[b + (m << 3) + 20 >> 2] - q[b + (k << 3) + 20 >> 2], m = q[b + (m << 3) + 24 >> 2] - q[b + (k << 3) + 24 >> 2], p = m * m;
                    1.4210854715202004e-14 < n * n + p || P(N.P | 0, 137, N.nb | 0, N.ng | 0);
                    var g = (k << 3) + b + 84 | 0, u = -1 * n, n = g, r = (M[0] = m, t[0]), u = (M[0] = u, t[0]) | 0;
                    l[n >> 2] = 0 | r;
                    l[n + 4 >> 2] = u;
                    k = (k << 3) + b + 88 | 0;
                    n = q[k >> 2];
                    p = Fh(p + n * n);
                    1.1920928955078125e-7 > p || (p = 1 / p, q[g >> 2] = m * p, q[k >> 2] = n * p);
                    m = o[f >> 2];
                    if ((e | 0) >= (m | 0)) {
                        break
                    }
                    g = m;
                    k = e
                }
                e = b + 12 | 0;
                g = b + 20 | 0;
                if (2 < (m | 0)) {
                    var w = m, x = e, y = g, e = 16
                } else {
                    var A = m, C = e, z = g, e = 15
                }
            } else {
                h = j, e = 13
            }
        }
    } while (0);
    13 == e && (A = h, C = b + 12 | 0, z = b + 20 | 0, e = 15);
    if (15 == e) {
        if (P(N.P | 0, 76, N.hb | 0, N.Yb | 0), 0 < (A | 0)) {
            w = A, x = C, y = z, e = 16
        } else {
            var D = 0, E = 0, G = 0, H = C, e = 21
        }
    }
    do {
        if (16 == e) {
            for (h = d = C = A = 0; ;) {
                var F = (C << 3) + b + 20 | 0, I = l[F + 4 >> 2], F = (t[0] = l[F >> 2], M[0]), J = (t[0] = I, M[0]), C = C + 1 | 0, z = (C | 0) < (w | 0) ? (C << 3) + b + 20 | 0 : y, I = l[z + 4 >> 2], z = (t[0] = l[z >> 2], M[0]), f = (t[0] = I, M[0]), j = .5 * (F * f - J * z), I = A + j, A = .3333333432674408 * j, F = d + (F + z) * A, J = h + (J + f) * A;
                if ((C | 0) == (w | 0)) {
                    break
                }
                A = I;
                d = F;
                h = J
            }
            if (1.1920928955078125e-7 < I) {
                var L = J, O = F, R = I, T = x, e = 22
            } else {
                D = J, E = F, G = I, H = x, e = 21
            }
        }
    } while (0);
    21 == e && (P(N.P | 0, 115, N.hb | 0, N.Wb | 0), L = D, O = E, R = G, T = H);
    b = 1 / R;
    O = (M[0] = O * b, t[0]);
    L = (M[0] = L * b, t[0]) | 0;
    l[T >> 2] = 0 | O;
    l[T + 4 >> 2] = L
}
function pn(b, d, e) {
    var f = d >> 2, d = q[f + 4], g = q[f + 8], h = q[f + 5], j = q[f + 7], k = d * g - h * j, m = q[f + 6], n = q[f + 3], p = h * m - n * g, u = n * j - d * m, r = q[f], w = q[f + 1], f = q[f + 2], x = r * k + w * p + f * u, x = 0 != x ? 1 / x : x, y = q[e >> 2], A = q[e + 4 >> 2], e = q[e + 8 >> 2];
    q[b >> 2] = x * (y * k + A * p + e * u);
    q[b + 4 >> 2] = x * (r * (A * g - e * j) + w * (e * m - y * g) + f * (y * j - A * m));
    q[b + 8 >> 2] = x * (r * (d * e - h * A) + w * (h * y - n * e) + f * (n * A - d * y))
}
function qn(b, d) {
    var e, f, g, h = 0 == (d | 0);
    a:do {
        if (h) {
            g = 0
        } else {
            g = 0 < (d | 0);
            do {
                if (g) {
                    if (640 >= (d | 0)) {
                        break
                    }
                    g = Ne(d);
                    break a
                }
                P(N.e | 0, 104, N.Ga | 0, N.Wa | 0)
            } while (0);
            g = ed[rn + d | 0];
            var j = g & 255;
            14 > (g & 255) || P(N.e | 0, 112, N.Ga | 0, N.g | 0);
            g = ((j << 2) + b + 12 | 0) >> 2;
            f = o[g];
            if (0 == (f | 0)) {
                f = (b + 4 | 0) >> 2;
                var k = o[f], m = b + 8 | 0;
                e = (b | 0) >> 2;
                if ((k | 0) == (l[m >> 2] | 0)) {
                    var n = l[e], k = k + 128 | 0;
                    l[m >> 2] = k;
                    m = Ne(k << 3);
                    l[e] = m;
                    Ch(m, n, l[f] << 3);
                    m = ((l[f] << 3) + l[e] | 0) >> 2;
                    for (k = m + 256; m < k; m++) {
                        l[m] = 0
                    }
                    Dh(n);
                    n = l[f]
                } else {
                    n = k
                }
                k = l[e];
                m = Ne(16384);
                e = ((n << 3) + k + 4 | 0) >> 2;
                l[e] = m;
                j = l[sn + (j << 2) >> 2];
                l[((n << 3) + k | 0) >> 2] = j;
                n = 16384 / (j | 0) & -1;
                16385 > (n * j | 0) ? k = m : (P(N.e | 0, 140, N.Ga | 0, N.dh | 0), k = l[e]);
                n = n - 1 | 0;
                m = 0 < (n | 0);
                b:do {
                    if (m) {
                        for (var p = 0, u = k; ;) {
                            var r = p + 1 | 0;
                            l[(u + p * j | 0) >> 2] = u + r * j | 0;
                            u = l[e];
                            if ((r | 0) == (n | 0)) {
                                var w = u;
                                break b
                            }
                            p = r
                        }
                    } else {
                        w = k
                    }
                } while (0);
                l[(w + n * j | 0) >> 2] = 0;
                l[g] = l[l[e] >> 2];
                l[f] = l[f] + 1 | 0;
                g = l[e]
            } else {
                l[g] = l[f >> 2], g = f
            }
        }
    } while (0);
    return g
}
function V(b) {
    function d(b) {
        var d;
        "double" === b ? d = (t[0] = l[g + j >> 2], t[1] = l[g + (j + 4) >> 2], Ee[0]) : "i64" == b ? d = [l[g + j >> 2], l[g + (j + 4) >> 2]] : (b = "i32", d = l[g + j >> 2]);
        j += Math.max(mc(b), nc);
        return d
    }

    var e = a;
    a += 4;
    l[e >> 2] = arguments[V.length];
    for (var f = l[tn >> 2], g = l[e >> 2], h = b, j = 0, k = [], m, n; ;) {
        var p = h;
        m = c[h];
        if (0 === m) {
            break
        }
        n = c[h + 1];
        if (37 == m) {
            var u = Gb, r = Gb, w = Gb, x = Gb;
            a:for (; ;) {
                switch (n) {
                    case 43:
                        u = Na;
                        break;
                    case 45:
                        r = Na;
                        break;
                    case 35:
                        w = Na;
                        break;
                    case 48:
                        if (x) {
                            break a
                        } else {
                            x = Na;
                            break
                        }
                        ;
                    default:
                        break a
                }
                h++;
                n = c[h + 1]
            }
            var y = 0;
            if (42 == n) {
                y = d("i32"), h++, n = c[h + 1]
            } else {
                for (; 48 <= n && 57 >= n;) {
                    y = 10 * y + (n - 48), h++, n = c[h + 1]
                }
            }
            var A = Gb;
            if (46 == n) {
                var C = 0, A = Na;
                h++;
                n = c[h + 1];
                if (42 == n) {
                    C = d("i32"), h++
                } else {
                    for (; ;) {
                        n = c[h + 1];
                        if (48 > n || 57 < n) {
                            break
                        }
                        C = 10 * C + (n - 48);
                        h++
                    }
                }
                n = c[h + 1]
            } else {
                C = 6
            }
            var z;
            switch (String.fromCharCode(n)) {
                case"h":
                    n = c[h + 2];
                    104 == n ? (h++, z = 1) : z = 2;
                    break;
                case"l":
                    n = c[h + 2];
                    108 == n ? (h++, z = 8) : z = 4;
                    break;
                case"L":
                case"q":
                case"j":
                    z = 8;
                    break;
                case"z":
                case"t":
                case"I":
                    z = 4;
                    break;
                default:
                    z = Ab
            }
            z && h++;
            n = c[h + 1];
            if (-1 != "diuoxXp".split("").indexOf(String.fromCharCode(n))) {
                p = 100 == n || 105 == n;
                z = z || 4;
                var D = m = d("i" + 8 * z), E;
                8 == z && (m = 117 == n ? (m[0] >>> 0) + 4294967296 * (m[1] >>> 0) : (m[0] >>> 0) + 4294967296 * (m[1] | 0));
                4 >= z && (m = (p ? Of : Nf)(m & Math.pow(256, z) - 1, 8 * z));
                var G = Math.abs(m), p = "";
                if (100 == n || 105 == n) {
                    E = 8 == z && un ? un.stringify(D[0], D[1]) : Of(m, 8 * z).toString(10)
                } else {
                    if (117 == n) {
                        E = 8 == z && un ? un.stringify(D[0], D[1], Na) : Nf(m, 8 * z).toString(10), m = Math.abs(m)
                    } else {
                        if (111 == n) {
                            E = (w ? "0" : "") + G.toString(8)
                        } else {
                            if (120 == n || 88 == n) {
                                p = w ? "0x" : "";
                                if (0 > m) {
                                    m = -m;
                                    E = (G - 1).toString(16);
                                    D = [];
                                    for (w = 0; w < E.length; w++) {
                                        D.push((15 - parseInt(E[w], 16)).toString(16))
                                    }
                                    for (E = D.join(""); E.length < 2 * z;) {
                                        E = "f" + E
                                    }
                                } else {
                                    E = G.toString(16)
                                }
                                88 == n && (p = p.toUpperCase(), E = E.toUpperCase())
                            } else {
                                112 == n && (0 === G ? E = "(nil)" : (p = "0x", E = G.toString(16)))
                            }
                        }
                    }
                }
                if (A) {
                    for (; E.length < C;) {
                        E = "0" + E
                    }
                }
                for (u && (p = 0 > m ? "-" + p : "+" + p); p.length + E.length < y;) {
                    r ? E += " " : x ? E = "0" + E : p = " " + p
                }
                E = p + E;
                E.split("").forEach((function (b) {
                    k.push(b.charCodeAt(0))
                }))
            } else {
                if (-1 != "fFeEgG".split("").indexOf(String.fromCharCode(n))) {
                    m = d("double");
                    if (isNaN(m)) {
                        E = "nan", x = Gb
                    } else {
                        if (isFinite(m)) {
                            A = Gb;
                            z = Math.min(C, 20);
                            if (103 == n || 71 == n) {
                                A = Na, C = C || 1, z = parseInt(m.toExponential(z).split("e")[1], 10), C > z && -4 <= z ? (n = (103 == n ? "f" : "F").charCodeAt(0), C -= z + 1) : (n = (103 == n ? "e" : "E").charCodeAt(0), C--), z = Math.min(C, 20)
                            }
                            if (101 == n || 69 == n) {
                                E = m.toExponential(z), /[eE][-+]\d$/.test(E) && (E = E.slice(0, -1) + "0" + E.slice(-1))
                            } else {
                                if (102 == n || 70 == n) {
                                    E = m.toFixed(z)
                                }
                            }
                            p = E.split("e");
                            if (A && !w) {
                                for (; 1 < p[0].length && -1 != p[0].indexOf(".") && ("0" == p[0].slice(-1) || "." == p[0].slice(-1));) {
                                    p[0] = p[0].slice(0, -1)
                                }
                            } else {
                                for (w && -1 == E.indexOf(".") && (p[0] += "."); C > z++;) {
                                    p[0] += "0"
                                }
                            }
                            E = p[0] + (1 < p.length ? "e" + p[1] : "");
                            69 == n && (E = E.toUpperCase());
                            u && 0 <= m && (E = "+" + E)
                        } else {
                            E = (0 > m ? "-" : "") + "inf", x = Gb
                        }
                    }
                    for (; E.length < y;) {
                        E = r ? E + " " : x && ("-" == E[0] || "+" == E[0]) ? E[0] + "0" + E.slice(1) : (x ? "0" : " ") + E
                    }
                    97 > n && (E = E.toUpperCase());
                    E.split("").forEach((function (b) {
                        k.push(b.charCodeAt(0))
                    }))
                } else {
                    if (115 == n) {
                        u = d("i8*") || sf;
                        x = Mf(u);
                        A && (x = Math.min(x, C));
                        if (!r) {
                            for (; x < y--;) {
                                k.push(32)
                            }
                        }
                        for (w = 0; w < x; w++) {
                            k.push(ed[u++])
                        }
                        if (r) {
                            for (; x < y--;) {
                                k.push(32)
                            }
                        }
                    } else {
                        if (99 == n) {
                            for (r && k.push(d("i8")); 0 < --y;) {
                                k.push(32)
                            }
                            r || k.push(d("i8"))
                        } else {
                            if (110 == n) {
                                r = d("i32*"), l[r >> 2] = k.length
                            } else {
                                if (37 == n) {
                                    k.push(m)
                                } else {
                                    for (w = p; w < h + 2; w++) {
                                        k.push(c[w])
                                    }
                                }
                            }
                        }
                    }
                }
            }
            h += 2
        } else {
            k.push(m), h += 1
        }
    }
    h = a;
    E = B(k, "i8", Ge);
    r = 1 * k.length;
    0 != r && -1 == vn(f, E, r) && wn[f] && (wn[f].error = Na);
    a = h;
    a = e
}
function xn(b, d) {
    var e;
    e = (b + 102796 | 0) >> 2;
    var f = l[e];
    0 < (f | 0) || (P(N.n | 0, 63, N.qb | 0, N.eh | 0), f = l[e]);
    f = f - 1 | 0;
    (l[(b + 102412 >> 2) + (3 * f | 0)] | 0) != (d | 0) && P(N.n | 0, 65, N.qb | 0, N.lh | 0);
    if (0 == (c[b + 12 * f + 102420 | 0] & 1) << 24 >> 24) {
        var f = b + 12 * f + 102416 | 0, g = b + 102400 | 0;
        l[g >> 2] = l[g >> 2] - l[f >> 2] | 0
    } else {
        Dh(d), f = b + 12 * f + 102416 | 0
    }
    g = b + 102404 | 0;
    l[g >> 2] = l[g >> 2] - l[f >> 2] | 0;
    l[e] = l[e] - 1 | 0
}
function yn(b, d, e) {
    var f, g, h = d >> 2, j = b >> 2, k = b + 12 | 0, m = b + 64 | 0, n = d + 4 | 0, p = q[n >> 2];
    (!isNaN(p) && !isNaN(0)) & -Infinity < p & Infinity > p ? (p = q[h + 2], g = (!isNaN(p) && !isNaN(0)) & -Infinity < p & Infinity > p ? 5 : 4) : g = 4;
    4 == g && P(N.k | 0, 27, N.S | 0, N.Kf | 0);
    p = d + 16 | 0;
    g = q[p >> 2];
    (!isNaN(g) && !isNaN(0)) & -Infinity < g & Infinity > g ? (g = q[h + 5], g = (!isNaN(g) && !isNaN(0)) & -Infinity < g & Infinity > g ? 8 : 7) : g = 7;
    7 == g && P(N.k | 0, 28, N.S | 0, N.vg | 0);
    g = (d + 12 | 0) >> 2;
    var u = q[g];
    (!isNaN(u) && !isNaN(0)) & -Infinity < u & Infinity > u || P(N.k | 0, 29, N.S | 0, N.Sg | 0);
    var u = d + 24 | 0, r = q[u >> 2];
    (!isNaN(r) && !isNaN(0)) & -Infinity < r & Infinity > r || P(N.k | 0, 30, N.S | 0, N.fh | 0);
    var r = d + 32 | 0, w = q[r >> 2];
    0 > w | (!isNaN(w) && !isNaN(0)) & -Infinity < w & Infinity > w ^ 1 && P(N.k | 0, 31, N.S | 0, N.mh | 0);
    w = d + 28 | 0;
    f = q[w >> 2];
    0 > f | (!isNaN(f) && !isNaN(0)) & -Infinity < f & Infinity > f ^ 1 && P(N.k | 0, 32, N.S | 0, N.th | 0);
    f = (b + 4 | 0) >> 1;
    i[f] = 0;
    var x = 0 == (c[d + 39 | 0] & 1) << 24 >> 24 ? 0 : i[f] = 8;
    0 != (c[d + 38 | 0] & 1) << 24 >> 24 && (x |= 16, i[f] = x);
    0 != (c[d + 36 | 0] & 1) << 24 >> 24 && (x |= 4, i[f] = x);
    0 != (c[d + 37 | 0] & 1) << 24 >> 24 && (x |= 2, i[f] = x);
    0 != (c[d + 40 | 0] & 1) << 24 >> 24 && (i[f] = x | 32);
    l[j + 22] = e;
    d = l[n >> 2];
    n = l[n + 4 >> 2];
    l[k >> 2] = d;
    l[k + 4 >> 2] = n;
    k = q[g];
    e = mm(k);
    q[j + 5] = e;
    k = nm(k);
    q[j + 6] = k;
    q[j + 7] = 0;
    q[j + 8] = 0;
    k = b + 36 | 0;
    l[k >> 2] = d;
    l[k + 4 >> 2] = n;
    k = b + 44 | 0;
    l[k >> 2] = d;
    l[k + 4 >> 2] = n;
    q[j + 13] = q[g];
    q[j + 14] = q[g];
    q[j + 15] = 0;
    l[j + 27] = 0;
    l[j + 28] = 0;
    l[j + 23] = 0;
    l[j + 24] = 0;
    g = l[p + 4 >> 2];
    l[m >> 2] = l[p >> 2];
    l[m + 4 >> 2] = g;
    q[j + 18] = q[u >> 2];
    q[j + 33] = q[w >> 2];
    q[j + 34] = q[r >> 2];
    q[j + 35] = q[h + 12];
    q[j + 19] = 0;
    q[j + 20] = 0;
    q[j + 21] = 0;
    q[j + 36] = 0;
    m = l[h];
    l[j] = m;
    b = b + 116 | 0;
    2 == (m | 0) ? (q[b >> 2] = 1, q[j + 30] = 1) : (q[b >> 2] = 0, q[j + 30] = 0);
    q[j + 31] = 0;
    q[j + 32] = 0;
    l[j + 37] = l[h + 11];
    l[j + 25] = 0;
    l[j + 26] = 0
}
function uo(b, d) {
    var e, f, g = b >> 2, h = a;
    a += 16;
    f = (b + 88 | 0) >> 2;
    var j = l[l[f] + 102868 >> 2];
    0 != (j & 2 | 0) && (P(N.k | 0, 115, N.we | 0, N.W | 0), j = l[l[f] + 102868 >> 2]);
    j = 0 == (j & 2 | 0);
    a:do {
        if (j && (e = (b | 0) >> 2, (l[e] | 0) != (d | 0))) {
            l[e] = d;
            vo(b);
            e = 0 == (l[e] | 0);
            b:do {
                if (e) {
                    q[g + 16] = 0;
                    q[g + 17] = 0;
                    q[g + 18] = 0;
                    var k = q[g + 14];
                    q[g + 13] = k;
                    var m = b + 44 | 0, n = b + 36 | 0, p = l[m >> 2], m = l[m + 4 >> 2];
                    l[n >> 2] = p;
                    l[n + 4 >> 2] = m;
                    n = mm(k);
                    q[h + 8 >> 2] = n;
                    var u = nm(k);
                    q[h + 12 >> 2] = u;
                    var r = q[g + 7], w = q[g + 8], k = u * r - n * w, n = n * r + u * w, p = (t[0] = p, M[0]) - k, n = (t[0] = m, M[0]) - n, m = h, p = (M[0] = p, t[0]), n = (M[0] = n, t[0]) | 0;
                    l[m >> 2] = 0 | p;
                    l[m + 4 >> 2] = n;
                    p = l[f] + 102872 | 0;
                    n = l[g + 25];
                    if (0 != (n | 0)) {
                        for (m = b + 12 | 0; ;) {
                            if (wo(n, p, h, m), n = l[n + 4 >> 2], 0 == (n | 0)) {
                                break b
                            }
                        }
                    }
                }
            } while (0);
            e = b + 4 | 0;
            p = i[e >> 1];
            0 == (p & 2) << 16 >> 16 && (i[e >> 1] = p | 2, q[g + 36] = 0);
            q[g + 19] = 0;
            q[g + 20] = 0;
            q[g + 21] = 0;
            e = l[g + 25];
            if (0 != (e | 0)) {
                for (; ;) {
                    if (xo(e), e = l[e + 4 >> 2], 0 == (e | 0)) {
                        break a
                    }
                }
            }
        }
    } while (0);
    a = h
}
function vo(b) {
    var d, e, f, g, h = a;
    a += 16;
    e = b + 116 | 0;
    g = e >> 2;
    var j = b + 120 | 0;
    f = (b + 124 | 0) >> 2;
    var k = b + 128 | 0, m = b + 28 | 0;
    q[m >> 2] = 0;
    q[b + 32 >> 2] = 0;
    e >>= 2;
    l[e] = 0;
    l[e + 1] = 0;
    l[e + 2] = 0;
    l[e + 3] = 0;
    e = l[(b | 0) >> 2];
    if (0 == (e | 0) || 1 == (e | 0)) {
        var n = b + 12 | 0, p = b + 36 | 0;
        e = l[(n | 0) >> 2];
        n = l[(n + 4 | 0) >> 2];
        l[p >> 2] = e;
        l[p + 4 >> 2] = n;
        p = b + 44 | 0;
        l[p >> 2] = e;
        l[p + 4 >> 2] = n;
        q[b + 52 >> 2] = q[b + 56 >> 2];
        e = 20
    } else {
        2 != (e | 0) && P(N.k | 0, 284, N.sb | 0, N.ef | 0), e = 5
    }
    if (5 == e) {
        e = Dj;
        p = l[e + 4 >> 2];
        e = (t[0] = l[e >> 2], M[0]);
        var p = (t[0] = p, M[0]), n = l[b + 100 >> 2], u = 0 == (n | 0);
        a:do {
            if (u) {
                var r = p, w = e
            } else {
                var x = h | 0, y = h + 4 | 0, A = h + 8 | 0, C = h + 12 | 0, z = p, D = e;
                d = n;
                for (d >>= 2; ;) {
                    var E = q[d];
                    if (0 != E) {
                        var G = l[d + 3];
                        K[l[l[G >> 2] + 28 >> 2]](G, h, E);
                        E = q[x >> 2];
                        q[g] += E;
                        D += q[y >> 2] * E;
                        z += q[A >> 2] * E;
                        q[f] += q[C >> 2]
                    }
                    d = l[d + 1];
                    if (0 == (d | 0)) {
                        r = z;
                        w = D;
                        break a
                    }
                    d >>= 2
                }
            }
        } while (0);
        e = q[g];
        0 < e ? (g = 1 / e, q[j >> 2] = g, j = w * g, r *= g, w = e) : (q[g] = 1, q[j >> 2] = 1, j = w, w = 1);
        g = q[f];
        if (0 < g) {
            if (0 != (i[b + 4 >> 1] & 16) << 16 >> 16) {
                e = 18
            } else {
                var H = g - w * (j * j + r * r);
                q[f] = H;
                0 < H || (P(N.k | 0, 319, N.sb | 0, N.Eb | 0), H = q[f]);
                H = 1 / H;
                e = 19
            }
        } else {
            e = 18
        }
        18 == e && (H = q[f] = 0);
        q[k >> 2] = H;
        H = b + 44 | 0;
        k = l[(H + 4 | 0) >> 2];
        f = (t[0] = l[(H | 0) >> 2], M[0]);
        k = (t[0] = k, M[0]);
        w = (M[0] = j, t[0]);
        g = (M[0] = r, t[0]) | 0;
        l[m >> 2] = 0 | w;
        l[m + 4 >> 2] = g;
        w = b + 36 | 0;
        g = q[b + 24 >> 2];
        e = q[b + 20 >> 2];
        m = g * j - e * r + q[b + 12 >> 2];
        r = e * j + g * r + q[b + 16 >> 2];
        g = (M[0] = m, t[0]);
        j = (M[0] = r, t[0]);
        g |= 0;
        j |= 0;
        l[H >> 2] = g;
        l[H + 4 >> 2] = j;
        l[w >> 2] = g;
        l[w + 4 >> 2] = j;
        H = q[b + 72 >> 2];
        j = b + 64 | 0;
        q[j >> 2] += (r - k) * -H;
        b = b + 68 | 0;
        q[b >> 2] += (m - f) * H
    }
    a = h
}
function yo(b, d) {
    var e, f, g, h, j, k, m = d >> 2;
    k = (b + 88 | 0) >> 2;
    var n = l[k];
    j = l[n + 102868 >> 2];
    0 != (j & 2 | 0) && (P(N.k | 0, 153, N.ve | 0, N.W | 0), n = j = l[k], j = l[j + 102868 >> 2]);
    if (0 == (j & 2 | 0)) {
        f = n | 0;
        n = qn(f, 44);
        0 == (n | 0) ? n = 0 : (i[n + 32 >> 1] = 1, i[n + 34 >> 1] = -1, i[n + 36 >> 1] = 0, l[n + 40 >> 2] = 0, l[n + 24 >> 2] = 0, l[n + 28 >> 2] = 0, l[n >> 2] = 0, l[n + 4 >> 2] = 0, l[n + 8 >> 2] = 0, l[n + 12 >> 2] = 0);
        j = n >> 2;
        l[j + 10] = l[m + 1];
        q[j + 4] = q[m + 2];
        q[j + 5] = q[m + 3];
        j = n + 8 | 0;
        l[j >> 2] = b;
        var p = n + 4 | 0;
        l[p >> 2] = 0;
        h = (n + 32 | 0) >> 1;
        g = (d + 22 | 0) >> 1;
        i[h] = i[g];
        i[h + 1] = i[g + 1];
        i[h + 2] = i[g + 2];
        c[n + 38 | 0] = c[d + 20 | 0] & 1;
        g = l[m];
        h = K[l[l[g >> 2] + 8 >> 2]](g, f);
        g = (n + 12 | 0) >> 2;
        l[g] = h;
        h = K[l[l[h >> 2] + 12 >> 2]](h);
        e = qn(f, 28 * h | 0);
        f = (n + 24 | 0) >> 2;
        l[f] = e;
        var u = 0 < (h | 0);
        a:do {
            if (u && (l[(e + 16 | 0) >> 2] = 0, l[(l[f] + 24 | 0) >> 2] = -1, 1 != (h | 0))) {
                for (var r = 1; ;) {
                    if (l[(l[f] + 28 * r + 16 | 0) >> 2] = 0, l[(l[f] + 28 * r + 24 | 0) >> 2] = -1, r = r + 1 | 0, (r | 0) == (h | 0)) {
                        break a
                    }
                }
            }
        } while (0);
        e = (n + 28 | 0) >> 2;
        l[e] = 0;
        h = n | 0;
        q[h >> 2] = q[m + 4];
        m = 0 == (i[b + 4 >> 1] & 32) << 16 >> 16;
        a:do {
            if (!m) {
                var u = l[k] + 102872 | 0, r = b + 12 | 0, w = l[g], w = K[l[l[w >> 2] + 12 >> 2]](w);
                l[e] = w;
                if (0 < (w | 0)) {
                    for (w = 0; ;) {
                        var x = l[f], y = x + 28 * w | 0, A = l[g], C = y | 0;
                        K[l[l[A >> 2] + 24 >> 2]](A, C, r, w);
                        y = gh(u, C, y);
                        l[(x + 28 * w + 24 | 0) >> 2] = y;
                        l[(x + 28 * w + 16 | 0) >> 2] = n;
                        l[(x + 28 * w + 20 | 0) >> 2] = w;
                        w = w + 1 | 0;
                        if ((w | 0) >= (l[e] | 0)) {
                            break a
                        }
                    }
                }
            }
        } while (0);
        g = b + 100 | 0;
        l[p >> 2] = l[g >> 2];
        l[g >> 2] = n;
        p = b + 104 | 0;
        l[p >> 2] = l[p >> 2] + 1 | 0;
        l[j >> 2] = b;
        0 < q[h >> 2] && vo(b);
        k = l[k] + 102868 | 0;
        l[k >> 2] |= 1;
        k = n
    } else {
        k = 0
    }
    return k
}
function zo(b, d) {
    var e, f, g;
    g = (b + 88 | 0) >> 2;
    f = l[l[g] + 102868 >> 2];
    0 != (f & 2 | 0) && (P(N.k | 0, 201, N.na | 0, N.W | 0), f = l[l[g] + 102868 >> 2]);
    if (0 == (f & 2 | 0)) {
        var h = d + 8 | 0;
        (l[h >> 2] | 0) != (b | 0) && P(N.k | 0, 207, N.na | 0, N.Ch | 0);
        f = (b + 104 | 0) >> 2;
        0 < (l[f] | 0) || P(N.k | 0, 210, N.na | 0, N.Ih | 0);
        for (e = b + 100 | 0; ;) {
            var j = l[e >> 2];
            if (0 == (j | 0)) {
                P(N.k | 0, 226, N.na | 0, N.We | 0);
                break
            }
            if ((j | 0) != (d | 0)) {
                e = j + 4 | 0
            } else {
                l[e >> 2] = l[d + 4 >> 2];
                break
            }
        }
        e = l[b + 112 >> 2];
        j = 0 == (e | 0);
        a:do {
            if (!j) {
                for (var k = e; ;) {
                    var m = l[k + 4 >> 2], k = l[k + 12 >> 2];
                    (l[m + 48 >> 2] | 0) == (d | 0) | (l[m + 52 >> 2] | 0) == (d | 0) && Ao(l[g] + 102872 | 0, m);
                    if (0 == (k | 0)) {
                        break a
                    }
                }
            }
        } while (0);
        g = o[g];
        j = g | 0;
        if (0 != (i[b + 4 >> 1] & 32) << 16 >> 16) {
            e = (d + 28 | 0) >> 2;
            m = 0 < (l[e] | 0);
            a:do {
                if (m) {
                    for (var k = d + 24 | 0, n = g + 102912 | 0, p = g + 102904 | 0, u = g + 102900 | 0, r = g + 102872 | 0, w = 0; ;) {
                        for (var x = l[k >> 2] + 28 * w + 24 | 0, y = l[x >> 2], A = l[n >> 2], C = 0; (C | 0) < (A | 0);) {
                            var z = (C << 2) + l[p >> 2] | 0;
                            if ((l[z >> 2] | 0) != (y | 0)) {
                                C = C + 1 | 0
                            } else {
                                l[z >> 2] = -1;
                                break
                            }
                        }
                        l[u >> 2] = l[u >> 2] - 1 | 0;
                        Nk(r, y);
                        l[x >> 2] = -1;
                        w = w + 1 | 0;
                        if ((w | 0) >= (l[e] | 0)) {
                            break a
                        }
                    }
                }
            } while (0);
            l[e] = 0
        }
        fp(d, j);
        l[h >> 2] = 0;
        l[d + 4 >> 2] = 0;
        h = ed[rn + 44 | 0];
        e = h & 255;
        14 > (h & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0);
        h = (e << 2) + g + 12 | 0;
        l[d >> 2] = l[h >> 2];
        l[h >> 2] = d;
        l[f] = l[f] - 1 | 0;
        vo(b)
    }
}
function hp(b, d) {
    var e, f, g = b + 88 | 0;
    f = l[l[g >> 2] + 102868 >> 2];
    0 == (f & 2 | 0) ? g = f : (P(N.k | 0, 340, N.rb | 0, N.W | 0), g = l[l[g >> 2] + 102868 >> 2]);
    if (0 == (g & 2 | 0) && 2 == (l[b >> 2] | 0)) {
        var h = b + 120 | 0;
        q[h >> 2] = 0;
        f = (b + 124 | 0) >> 2;
        q[f] = 0;
        g = b + 128 | 0;
        q[g >> 2] = 0;
        e = q[d >> 2];
        e = 0 < e ? e : 1;
        q[b + 116 >> 2] = e;
        q[h >> 2] = 1 / e;
        h = q[d + 12 >> 2];
        if (0 < h && 0 == (i[b + 4 >> 1] & 16) << 16 >> 16) {
            var j = q[d + 4 >> 2], k = q[d + 8 >> 2];
            e = h - e * (j * j + k * k);
            q[f] = e;
            0 < e ? f = e : (P(N.k | 0, 366, N.rb | 0, N.Eb | 0), f = q[f]);
            q[g >> 2] = 1 / f
        }
        j = b + 28 | 0;
        e = (b + 44 | 0) >> 2;
        f = l[e + 1];
        g = (t[0] = l[e], M[0]);
        f = (t[0] = f, M[0]);
        var h = d + 4 | 0, m = l[h >> 2], h = l[h + 4 >> 2];
        l[j >> 2] = m;
        l[j + 4 >> 2] = h;
        var j = b + 36 | 0, k = q[b + 24 >> 2], m = (t[0] = m, M[0]), n = q[b + 20 >> 2], p = (t[0] = h, M[0]), h = k * m - n * p + q[b + 12 >> 2], k = n * m + k * p + q[b + 16 >> 2], n = (M[0] = h, t[0]), m = (M[0] = k, t[0]), n = 0 | n, m = m | 0;
        l[e] = n;
        l[e + 1] = m;
        l[j >> 2] = n;
        l[j + 4 >> 2] = m;
        e = q[b + 72 >> 2];
        j = b + 64 | 0;
        q[j >> 2] += (k - f) * -e;
        f = b + 68 | 0;
        q[f >> 2] += (h - g) * e
    }
}
function ip(b, d, e) {
    var f, g = b >> 2;
    f = (b + 88 | 0) >> 2;
    var h = l[f], j = l[h + 102868 >> 2];
    0 != (j & 2 | 0) && (P(N.k | 0, 404, N.ue | 0, N.W | 0), h = j = l[f], j = l[j + 102868 >> 2]);
    if (0 == (j & 2 | 0)) {
        var j = b + 12 | 0, k = mm(e);
        q[g + 5] = k;
        var m = nm(e);
        q[g + 6] = m;
        var n = l[d >> 2], p = l[d + 4 >> 2];
        l[j >> 2] = n;
        l[j + 4 >> 2] = p;
        var d = b + 44 | 0, u = q[g + 7], r = q[g + 8], n = (t[0] = n, M[0]), n = m * u - k * r + n, p = (t[0] = p, M[0]), k = k * u + m * r + p, m = (M[0] = n, t[0]), u = (M[0] = k, t[0]), k = 0 | m, m = u | 0;
        l[d >> 2] = k;
        l[d + 4 >> 2] = m;
        q[g + 14] = e;
        b = b + 36 | 0;
        l[b >> 2] = k;
        l[b + 4 >> 2] = m;
        q[g + 13] = e;
        e = h + 102872 | 0;
        g = l[g + 25];
        if (0 == (g | 0)) {
            f = h
        } else {
            for (; !(wo(g, e, j, j), g = l[g + 4 >> 2], 0 == (g | 0));) {
            }
            f = l[f]
        }
        f = f + 102872 | 0;
        jp(f | 0, f)
    }
}
function kp(b, d) {
    var e, f, g, h;
    h = (b + 88 | 0) >> 2;
    0 != (l[l[h] + 102868 >> 2] & 2 | 0) && P(N.k | 0, 443, N.xe | 0, N.W | 0);
    g = (b + 4 | 0) >> 1;
    var j = i[g], k = 0 != (j & 32) << 16 >> 16 ^ d;
    a:do {
        if (k) {
            if (d) {
                i[g] = j | 32;
                var m = l[h] + 102872 | 0;
                f = l[b + 100 >> 2];
                if (0 != (f | 0)) {
                    for (var n = b + 12 | 0, p = f; ;) {
                        f = (p + 28 | 0) >> 2;
                        0 != (l[f] | 0) && P(N.Qa | 0, 124, N.Ee | 0, N.Bb | 0);
                        var u = p + 12 | 0, r = l[u >> 2], r = K[l[l[r >> 2] + 12 >> 2]](r);
                        l[f] = r;
                        r = 0 < (r | 0);
                        b:do {
                            if (r) {
                                var w = p + 24 | 0;
                                for (e = 0; ;) {
                                    var x = l[w >> 2], y = x + 28 * e | 0, A = l[u >> 2], C = y | 0;
                                    K[l[l[A >> 2] + 24 >> 2]](A, C, n, e);
                                    y = gh(m, C, y);
                                    l[(x + 28 * e + 24 | 0) >> 2] = y;
                                    l[(x + 28 * e + 16 | 0) >> 2] = p;
                                    l[(x + 28 * e + 20 | 0) >> 2] = e;
                                    e = e + 1 | 0;
                                    if ((e | 0) >= (l[f] | 0)) {
                                        break b
                                    }
                                }
                            }
                        } while (0);
                        f = l[p + 4 >> 2];
                        if (0 == (f | 0)) {
                            break a
                        }
                        p = f
                    }
                }
            } else {
                i[g] = j & -33;
                m = l[h];
                n = l[b + 100 >> 2];
                f = 0 == (n | 0);
                b:do {
                    if (!f) {
                        p = m + 102912 | 0;
                        u = m + 102904 | 0;
                        r = m + 102900 | 0;
                        w = m + 102872 | 0;
                        for (x = n; ;) {
                            e = (x + 28 | 0) >> 2;
                            y = 0 < (l[e] | 0);
                            c:do {
                                if (y) {
                                    A = x + 24 | 0;
                                    for (C = 0; ;) {
                                        for (var z = l[A >> 2] + 28 * C + 24 | 0, D = l[z >> 2], E = l[p >> 2], G = 0; (G | 0) < (E | 0);) {
                                            var H = (G << 2) + l[u >> 2] | 0;
                                            if ((l[H >> 2] | 0) != (D | 0)) {
                                                G = G + 1 | 0
                                            } else {
                                                l[H >> 2] = -1;
                                                break
                                            }
                                        }
                                        l[r >> 2] = l[r >> 2] - 1 | 0;
                                        Nk(w, D);
                                        l[z >> 2] = -1;
                                        C = C + 1 | 0;
                                        if ((C | 0) >= (l[e] | 0)) {
                                            break c
                                        }
                                    }
                                }
                            } while (0);
                            l[e] = 0;
                            e = l[x + 4 >> 2];
                            if (0 == (e | 0)) {
                                break b
                            }
                            x = e
                        }
                    }
                } while (0);
                m = b + 112 | 0;
                n = l[m >> 2];
                f = 0 == (n | 0);
                b:do {
                    if (!f) {
                        for (p = n; ;) {
                            u = l[p + 12 >> 2];
                            Ao(l[h] + 102872 | 0, l[p + 4 >> 2]);
                            if (0 == (u | 0)) {
                                break b
                            }
                            p = u
                        }
                    }
                } while (0);
                l[m >> 2] = 0
            }
        }
    } while (0)
}
function lp(b) {
    var d = b >> 2, e = a, f = b + 8 | 0, g = l[f >> 2];
    V(N.Ra | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
    V(N.vf | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
    var h = l[d];
    V(N.Bf | 0, (s = a, a += 4, l[s >> 2] = h, s));
    var h = q[d + 3], j = q[d + 4];
    V(N.Ff | 0, (s = a, a += 16, Ee[0] = h, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = j, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    h = q[d + 14];
    V(N.Lf | 0, (s = a, a += 8, Ee[0] = h, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    h = q[d + 16];
    j = q[d + 17];
    V(N.Of | 0, (s = a, a += 16, Ee[0] = h, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = j, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    h = q[d + 18];
    V(N.Qf | 0, (s = a, a += 8, Ee[0] = h, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    h = q[d + 33];
    V(N.Tf | 0, (s = a, a += 8, Ee[0] = h, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    h = q[d + 34];
    V(N.Xf | 0, (s = a, a += 8, Ee[0] = h, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    b = (b + 4 | 0) >> 1;
    h = jd[b] & 4;
    V(N.Yf | 0, (s = a, a += 4, l[s >> 2] = h, s));
    h = jd[b] & 2;
    V(N.cg | 0, (s = a, a += 4, l[s >> 2] = h, s));
    h = jd[b] & 16;
    V(N.ig | 0, (s = a, a += 4, l[s >> 2] = h, s));
    h = jd[b] & 8;
    V(N.lg | 0, (s = a, a += 4, l[s >> 2] = h, s));
    b = jd[b] & 32;
    V(N.pg | 0, (s = a, a += 4, l[s >> 2] = b, s));
    b = q[d + 35];
    V(N.tg | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    f = l[f >> 2];
    V(N.xg | 0, (s = a, a += 4, l[s >> 2] = f, s));
    V(N.$a | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
    d = l[d + 25];
    f = 0 == (d | 0);
    a:do {
        if (!f) {
            for (b = d; ;) {
                if (V(N.Dg | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s)), mp(b, g), V(N.Fg | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s)), b = l[b + 4 >> 2], 0 == (b | 0)) {
                    break a
                }
            }
        }
    } while (0);
    V(N.Sa | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
    a = e
}
function Ao(b, d) {
    var e, f;
    e = l[l[d + 48 >> 2] + 8 >> 2];
    var g = l[l[d + 52 >> 2] + 8 >> 2];
    f = l[b + 72 >> 2];
    if (0 != (f | 0) && 0 != (l[d + 4 >> 2] & 2 | 0)) {
        K[l[l[f >> 2] + 12 >> 2]](f, d)
    }
    var h = d + 8 | 0, j = l[h >> 2];
    f = (d + 12 | 0) >> 2;
    0 != (j | 0) && (l[(j + 12 | 0) >> 2] = l[f]);
    j = l[f];
    0 != (j | 0) && (l[(j + 8 | 0) >> 2] = l[h >> 2]);
    h = b + 60 | 0;
    (l[h >> 2] | 0) == (d | 0) && (l[h >> 2] = l[f]);
    h = d + 24 | 0;
    j = l[h >> 2];
    f = (d + 28 | 0) >> 2;
    0 != (j | 0) && (l[(j + 12 | 0) >> 2] = l[f]);
    j = l[f];
    0 != (j | 0) && (l[(j + 8 | 0) >> 2] = l[h >> 2]);
    e = e + 112 | 0;
    (d + 16 | 0) == (l[e >> 2] | 0) && (l[e >> 2] = l[f]);
    f = d + 40 | 0;
    h = l[f >> 2];
    e = (d + 44 | 0) >> 2;
    0 != (h | 0) && (l[(h + 12 | 0) >> 2] = l[e]);
    h = l[e];
    0 != (h | 0) && (l[(h + 8 | 0) >> 2] = l[f >> 2]);
    g = g + 112 | 0;
    (d + 32 | 0) == (l[g >> 2] | 0) && (l[g >> 2] = l[e]);
    g = l[b + 76 >> 2];
    0 == (c[np] & 1) << 24 >> 24 && P(N.aa | 0, 103, N.Ka | 0, N.Jg | 0);
    e = d + 48 | 0;
    if (0 < (l[d + 124 >> 2] | 0)) {
        f = l[l[e >> 2] + 8 >> 2];
        h = f + 4 | 0;
        j = i[h >> 1];
        0 == (j & 2) << 16 >> 16 && (i[h >> 1] = j | 2, q[f + 144 >> 2] = 0);
        f = d + 52 | 0;
        var h = l[l[f >> 2] + 8 >> 2], j = h + 4 | 0, k = i[j >> 1];
        0 == (k & 2) << 16 >> 16 && (i[j >> 1] = k | 2, q[h + 144 >> 2] = 0)
    } else {
        f = d + 52 | 0
    }
    e = l[l[l[e >> 2] + 12 >> 2] + 4 >> 2];
    f = l[l[l[f >> 2] + 12 >> 2] + 4 >> 2];
    -1 < (e | 0) & 4 > (f | 0) || (P(N.aa | 0, 114, N.Ka | 0, N.Sb | 0), P(N.aa | 0, 115, N.Ka | 0, N.Sb | 0));
    K[l[(op + 4 >> 2) + (12 * e | 0) + (3 * f | 0)]](d, g);
    g = b + 64 | 0;
    l[g >> 2] = l[g >> 2] - 1 | 0
}
function pp(b) {
    var d, e, f, g, h, j = l[b + 60 >> 2], k = 0 == (j | 0);
    a:do {
        if (!k) {
            var m = b + 12 | 0, n = b + 4 | 0, p = b + 72 | 0, u = b + 68 | 0, r = j;
            for (g = r >> 2; ;) {
                var w = l[g + 12];
                e = l[g + 13];
                var x = l[g + 14], y = l[g + 15], A = l[w + 8 >> 2], C = l[e + 8 >> 2];
                f = (r + 4 | 0) >> 2;
                var z = l[f], D = 0 == (z & 8 | 0);
                b:do {
                    if (D) {
                        h = 19
                    } else {
                        h = 2 == (l[C >> 2] | 0) ? 7 : 2 == (l[A >> 2] | 0) ? 7 : 12;
                        c:do {
                            if (7 == h) {
                                for (h = C + 108 | 0; ;) {
                                    h = l[h >> 2];
                                    if (0 == (h | 0)) {
                                        break
                                    }
                                    if ((l[h >> 2] | 0) == (A | 0) && 0 == (c[l[h + 4 >> 2] + 61 | 0] & 1) << 24 >> 24) {
                                        break c
                                    }
                                    h = h + 12 | 0
                                }
                                h = l[u >> 2];
                                if (0 != (h | 0)) {
                                    if (!K[l[l[h >> 2] + 8 >> 2]](h, w, e)) {
                                        f = l[g + 3];
                                        Ao(b, r);
                                        var E = f;
                                        h = 13;
                                        break b
                                    }
                                    z = l[f]
                                }
                                l[f] = z & -9;
                                h = 19;
                                break b
                            }
                        } while (0);
                        E = l[g + 3];
                        Ao(b, r);
                        h = 13
                    }
                } while (0);
                19 == h && ((0 == (i[A + 4 >> 1] & 2) << 16 >> 16 ? 0 : 0 != (l[A >> 2] | 0)) | (0 == (i[C + 4 >> 1] & 2) << 16 >> 16 ? 0 : 0 != (l[C >> 2] | 0)) ? (w = l[(l[w + 24 >> 2] + 24 >> 2) + (7 * x | 0)], y = l[(l[e + 24 >> 2] + 24 >> 2) + (7 * y | 0)], h = -1 < (w | 0) ? (l[m >> 2] | 0) > (w | 0) ? 28 : 27 : 27, 27 == h && P(N.q | 0, 159, N.H | 0, N.o | 0), x = l[n >> 2], e = x >> 2, -1 < (y | 0) ? (l[m >> 2] | 0) > (y | 0) ? (d = x, d >>= 2, h = 31) : h = 30 : h = 30, 30 == h && (P(N.q | 0, 159, N.H | 0, N.o | 0), d = l[n >> 2], d >>= 2), 0 < q[d + (9 * y | 0)] - q[e + (9 * w | 0) + 2] | 0 < q[d + (9 * y | 0) + 1] - q[e + (9 * w | 0) + 3] | 0 < q[e + (9 * w | 0)] - q[d + (9 * y | 0) + 2] | 0 < q[e + (9 * w | 0) + 1] - q[d + (9 * y | 0) + 3]) ? (g = l[g + 3], Ao(b, r), E = g) : (qp(r, l[p >> 2]), E = l[g + 3]) : E = l[g + 3]);
                if (0 == (E | 0)) {
                    break a
                }
                r = E;
                g = r >> 2
            }
        }
    } while (0)
}
function jp(b, d) {
    var e, f, g = a;
    a += 4;
    var h;
    f = (b + 52 | 0) >> 2;
    l[f] = 0;
    e = (b + 40 | 0) >> 2;
    h = l[e];
    if (0 < (h | 0)) {
        for (var j = b + 32 | 0, k = b + 56 | 0, m = b | 0, n = b + 12 | 0, p = b + 4 | 0, u = 0; ;) {
            var r = l[l[j >> 2] + (u << 2) >> 2];
            l[k >> 2] = r;
            if (-1 != (r | 0)) {
                h = -1 < (r | 0) ? (l[n >> 2] | 0) > (r | 0) ? 8 : 7 : 7;
                7 == h && P(N.q | 0, 159, N.H | 0, N.o | 0);
                var w = m, x = b, y = l[p >> 2] + 36 * r | 0, A = Ha, C = r = h = Ha, z = Ha, D = Ha, E = Ha, G = a;
                a += 1036;
                var H = G + 4 | 0, E = (G | 0) >> 2;
                l[E] = H;
                D = (G + 1028 | 0) >> 2;
                z = (G + 1032 | 0) >> 2;
                l[z] = 256;
                l[H >> 2] = l[w >> 2];
                l[D] = 1;
                var w = w + 4 | 0, F = y | 0, I = y + 4 | 0, J = y + 8 | 0, y = y + 12 | 0, C = (x + 56 | 0) >> 2, r = (x + 52 | 0) >> 2, L = x + 48 | 0;
                h = (x + 44 | 0) >> 2;
                A = 1;
                for (x = H; ;) {
                    var O = A - 1 | 0;
                    l[D] = O;
                    var R = l[x + (O << 2) >> 2];
                    if (-1 == (R | 0)) {
                        x = O
                    } else {
                        var T = l[w >> 2], A = T >> 2;
                        if (0 < q[F >> 2] - q[A + (9 * R | 0) + 2] | 0 < q[I >> 2] - q[A + (9 * R | 0) + 3] | 0 < q[A + (9 * R | 0)] - q[J >> 2] | 0 < q[A + (9 * R | 0) + 1] - q[y >> 2]) {
                            x = O
                        } else {
                            if (A = T + 36 * R + 24 | 0, -1 == (l[A >> 2] | 0)) {
                                A = l[C], (A | 0) == (R | 0) ? x = O : (x = l[r], (x | 0) == (l[L >> 2] | 0) && (A = l[h], l[L >> 2] = x << 1, x = Ne(24 * x | 0), l[h] = x, Ch(x, A, 12 * l[r] | 0), Dh(A), A = l[C], x = l[r]), l[(l[h] + 12 * x | 0) >> 2] = (A | 0) > (R | 0) ? R : A, x = l[C], l[(l[h] + 12 * l[r] + 4 | 0) >> 2] = (x | 0) < (R | 0) ? R : x, l[r] = l[r] + 1 | 0, x = l[D])
                            } else {
                                if ((O | 0) == (l[z] | 0)) {
                                    l[z] = O << 1;
                                    O = Ne(O << 3);
                                    l[E] = O;
                                    var S = x;
                                    Ch(O, S, l[D] << 2);
                                    (x | 0) != (H | 0) && Dh(S)
                                }
                                l[((l[D] << 2) + l[E] | 0) >> 2] = l[A >> 2];
                                x = l[D] + 1 | 0;
                                l[D] = x;
                                R = T + 36 * R + 28 | 0;
                                (x | 0) == (l[z] | 0) && (A = l[E], l[z] = x << 1, x = Ne(x << 3), l[E] = x, T = A, Ch(x, T, l[D] << 2), (A | 0) != (H | 0) && Dh(T));
                                l[((l[D] << 2) + l[E] | 0) >> 2] = l[R >> 2];
                                R = l[D] + 1 | 0;
                                x = l[D] = R
                            }
                        }
                    }
                    R = l[E];
                    if (0 >= (x | 0)) {
                        break
                    }
                    A = x;
                    x = R
                }
                (R | 0) != (H | 0) && (Dh(R), l[E] = 0);
                a = G;
                h = l[e]
            }
            u = u + 1 | 0;
            if ((u | 0) >= (h | 0)) {
                break
            }
        }
        j = l[f]
    } else {
        j = 0
    }
    l[e] = 0;
    e = (b + 44 | 0) >> 2;
    k = l[e];
    l[g >> 2] = 2;
    rp(k, k + 12 * j | 0, g);
    j = 0 < (l[f] | 0);
    a:do {
        if (j) {
            k = b + 12 | 0;
            m = b + 4 | 0;
            u = l[e];
            n = 0;
            p = u;
            u = l[u >> 2];
            b:for (; ;) {
                r = p + 12 * n | 0;
                h = -1 < (u | 0) ? (l[k >> 2] | 0) > (u | 0) ? 16 : 15 : 15;
                15 == h && P(N.q | 0, 153, N.T | 0, N.o | 0);
                h = l[m >> 2];
                z = l[(h + 16 >> 2) + (9 * u | 0)];
                C = p + 12 * n + 4 | 0;
                D = l[C >> 2];
                if (-1 < (D | 0)) {
                    if ((l[k >> 2] | 0) > (D | 0)) {
                        var U = h;
                        h = 19
                    } else {
                        h = 18
                    }
                } else {
                    h = 18
                }
                18 == h && (P(N.q | 0, 153, N.T | 0, N.o | 0), U = l[m >> 2]);
                sp(d, z, l[(U + 16 >> 2) + (9 * D | 0)]);
                h = l[f];
                for (z = n; ;) {
                    z = z + 1 | 0;
                    if ((z | 0) >= (h | 0)) {
                        break a
                    }
                    D = l[e];
                    E = l[(D >> 2) + (3 * z | 0)];
                    if ((E | 0) != (l[r >> 2] | 0)) {
                        n = z;
                        p = D;
                        u = E;
                        continue b
                    }
                    if ((l[(D + 4 >> 2) + (3 * z | 0)] | 0) != (l[C >> 2] | 0)) {
                        n = z;
                        p = D;
                        u = E;
                        continue b
                    }
                }
            }
        }
    } while (0);
    a = g
}
function sp(b, d, e) {
    var f, g, h = l[d + 16 >> 2], j = l[e + 16 >> 2], d = l[d + 20 >> 2], e = l[e + 20 >> 2], k = l[h + 8 >> 2], m = l[j + 8 >> 2], n = (k | 0) == (m | 0);
    a:do {
        if (!n) {
            for (var p = m + 112 | 0; ;) {
                p = l[p >> 2];
                if (0 == (p | 0)) {
                    break
                }
                if ((l[p >> 2] | 0) == (k | 0)) {
                    g = l[p + 4 >> 2] >> 2;
                    var u = l[g + 12], r = l[g + 13];
                    f = l[g + 14];
                    g = l[g + 15];
                    if ((u | 0) == (h | 0) & (r | 0) == (j | 0) & (f | 0) == (d | 0) & (g | 0) == (e | 0)) {
                        break a
                    }
                    if ((u | 0) == (j | 0) & (r | 0) == (h | 0) & (f | 0) == (e | 0) & (g | 0) == (d | 0)) {
                        break a
                    }
                }
                p = p + 12 | 0
            }
            if (!(2 != (l[m >> 2] | 0) && 2 != (l[k >> 2] | 0))) {
                for (p = m + 108 | 0; ;) {
                    p = l[p >> 2];
                    if (0 == (p | 0)) {
                        break
                    }
                    if ((l[p >> 2] | 0) == (k | 0) && 0 == (c[l[p + 4 >> 2] + 61 | 0] & 1) << 24 >> 24) {
                        break a
                    }
                    p = p + 12 | 0
                }
                p = l[b + 68 >> 2];
                if (0 == (p | 0) || K[l[l[p >> 2] + 8 >> 2]](p, h, j)) {
                    p = h;
                    u = d;
                    r = j;
                    f = e;
                    g = l[b + 76 >> 2];
                    0 == (c[np] & 1) << 24 >> 24 && (l[op >> 2] = 4, l[op + 4 >> 2] = 6, c[op + 8 | 0] = 1, l[op + 96 >> 2] = 8, l[op + 100 >> 2] = 10, c[op + 104 | 0] = 1, l[op + 24 >> 2] = 8, l[op + 28 >> 2] = 10, c[op + 32 | 0] = 0, l[op + 120 >> 2] = 12, l[op + 124 >> 2] = 14, c[op + 128 | 0] = 1, l[op + 48 >> 2] = 16, l[op + 52 >> 2] = 18, c[op + 56 | 0] = 1, l[op + 12 >> 2] = 16, l[op + 16 >> 2] = 18, c[op + 20 | 0] = 0, l[op + 72 >> 2] = 20, l[op + 76 >> 2] = 22, c[op + 80 | 0] = 1, l[op + 108 >> 2] = 20, l[op + 112 >> 2] = 22, c[op + 116 | 0] = 0, l[op + 144 >> 2] = 24, l[op + 148 >> 2] = 26, c[op + 152 | 0] = 1, l[op + 36 >> 2] = 24, l[op + 40 >> 2] = 26, c[op + 44 | 0] = 0, l[op + 168 >> 2] = 28, l[op + 172 >> 2] = 30, c[op + 176 | 0] = 1, l[op + 132 >> 2] = 28, l[op + 136 >> 2] = 30, c[op + 140 | 0] = 0, c[np] = 1);
                    var w = o[l[p + 12 >> 2] + 4 >> 2], x = o[l[r + 12 >> 2] + 4 >> 2];
                    4 > w >>> 0 || P(N.aa | 0, 80, N.xb | 0, N.gf | 0);
                    4 > x >>> 0 || P(N.aa | 0, 81, N.xb | 0, N.Zf | 0);
                    var y = o[(op >> 2) + (12 * w | 0) + (3 * x | 0)], r = 0 == (y | 0) ? 0 : 0 == (c[op + 48 * w + 12 * x + 8 | 0] & 1) << 24 >> 24 ? K[y](r, f, p, u, g) : K[y](p, u, r, f, g);
                    0 != (r | 0) && (u = l[l[r + 48 >> 2] + 8 >> 2], p = l[l[r + 52 >> 2] + 8 >> 2], l[(r + 8 | 0) >> 2] = 0, f = (b + 60 | 0) >> 2, l[(r + 12 | 0) >> 2] = l[f], g = l[f], 0 != (g | 0) && (l[(g + 8 | 0) >> 2] = r), l[f] = r, g = r + 16 | 0, l[(r + 20 | 0) >> 2] = r, l[(g | 0) >> 2] = p, l[(r + 24 | 0) >> 2] = 0, f = (u + 112 | 0) >> 2, l[(r + 28 | 0) >> 2] = l[f], w = l[f], 0 != (w | 0) && (l[(w + 8 | 0) >> 2] = g), l[f] = g, g = r + 32 | 0, l[(r + 36 | 0) >> 2] = r, l[(g | 0) >> 2] = u, l[(r + 40 | 0) >> 2] = 0, f = (p + 112 | 0) >> 2, l[(r + 44 | 0) >> 2] = l[f], r = l[f], 0 != (r | 0) && (l[(r + 8 | 0) >> 2] = g), l[f] = g, r = u + 4 | 0, f = i[r >> 1], 0 == (f & 2) << 16 >> 16 && (i[r >> 1] = f | 2, q[u + 144 >> 2] = 0), u = p + 4 | 0, r = i[u >> 1], 0 == (r & 2) << 16 >> 16 && (i[u >> 1] = r | 2, q[p + 144 >> 2] = 0), p = b + 64 | 0, l[p >> 2] = l[p >> 2] + 1 | 0)
                }
            }
        }
    } while (0)
}
function rp(b, d, e) {
    var f, g, h, j, k, m, n, p, u, r, w, x, y, A, C, z, D, E, G, H, F, I, J, L, O, R, T, S, U, W, Q, $, ea, sa, Ba, oa, ga, qa, la, Ca, ia, ya, ta, Ia, na, Z, ba, ca, ma, ka, aa = e >> 2, ra = a;
    a += 12;
    var ha, za = d, X = b;
    ka = X >> 2;
    a:for (; ;) {
        var ua = X;
        ma = (X | 0) >> 2;
        ca = (X + 4 | 0) >> 2;
        ba = (X + 8 | 0) >> 2;
        Z = X >> 2;
        var da = X + 12 | 0, fa = za;
        b:for (; ;) {
            var Aa = fa, Qa = Aa - ua | 0, pa = (Qa | 0) / 12 & -1;
            if (0 == (pa | 0) || 1 == (pa | 0)) {
                ha = 81;
                break a
            } else {
                if (2 == (pa | 0)) {
                    var cb = fa - 12 | 0;
                    if (!K[l[aa]](cb, X)) {
                        ha = 81;
                        break a
                    }
                    var Ra = l[ma], Ta = l[ca], $a = l[ba];
                    na = cb >> 2;
                    l[Z] = l[na];
                    l[Z + 1] = l[na + 1];
                    l[Z + 2] = l[na + 2];
                    l[cb >> 2] = Ra;
                    l[fa - 12 + 4 >> 2] = Ta;
                    l[fa - 12 + 8 >> 2] = $a;
                    ha = 81;
                    break a
                } else {
                    if (3 == (pa | 0)) {
                        var va = fa - 12 | 0;
                        Ia = va >> 2;
                        var Wa = K[l[aa]](da, X), fb = K[l[aa]](va, da);
                        if (!Wa) {
                            if (!fb) {
                                ha = 81;
                                break a
                            }
                            var gb = da | 0, Xa = l[gb >> 2], Ua = X + 16 | 0, Va = l[Ua >> 2], pb = X + 20 | 0, nb = l[pb >> 2];
                            ta = da >> 2;
                            ya = va >> 2;
                            l[ta] = l[ya];
                            l[ta + 1] = l[ya + 1];
                            l[ta + 2] = l[ya + 2];
                            l[Ia] = Xa;
                            l[fa - 12 + 4 >> 2] = Va;
                            l[fa - 12 + 8 >> 2] = nb;
                            if (!K[l[aa]](da, X)) {
                                ha = 81;
                                break a
                            }
                            var La = l[ma], qb = l[ca], bb = l[ba];
                            l[Z] = l[ta];
                            l[Z + 1] = l[ta + 1];
                            l[Z + 2] = l[ta + 2];
                            l[gb >> 2] = La;
                            l[Ua >> 2] = qb;
                            l[pb >> 2] = bb;
                            ha = 81;
                            break a
                        }
                        var Fa = l[ma], Ma = l[ca], wa = l[ba];
                        if (fb) {
                            ia = va >> 2;
                            l[Z] = l[ia];
                            l[Z + 1] = l[ia + 1];
                            l[Z + 2] = l[ia + 2];
                            l[Ia] = Fa;
                            l[fa - 12 + 4 >> 2] = Ma;
                            l[fa - 12 + 8 >> 2] = wa;
                            ha = 81;
                            break a
                        }
                        Ca = da >> 2;
                        l[Z] = l[Ca];
                        l[Z + 1] = l[Ca + 1];
                        l[Z + 2] = l[Ca + 2];
                        var hb = da | 0;
                        l[hb >> 2] = Fa;
                        var Ya = X + 16 | 0;
                        l[Ya >> 2] = Ma;
                        var Za = X + 20 | 0;
                        l[Za >> 2] = wa;
                        if (!K[l[aa]](va, da)) {
                            ha = 81;
                            break a
                        }
                        var Da = l[hb >> 2], Oa = l[Ya >> 2], ib = l[Za >> 2];
                        la = va >> 2;
                        l[Ca] = l[la];
                        l[Ca + 1] = l[la + 1];
                        l[Ca + 2] = l[la + 2];
                        l[Ia] = Da;
                        l[fa - 12 + 4 >> 2] = Oa;
                        l[fa - 12 + 8 >> 2] = ib;
                        ha = 81;
                        break a
                    } else {
                        if (4 == (pa | 0)) {
                            tp(X, da, X + 24 | 0, fa - 12 | 0, e);
                            ha = 81;
                            break a
                        } else {
                            if (5 == (pa | 0)) {
                                var ab = X + 24 | 0, Ga = X + 36 | 0, jb = fa - 12 | 0;
                                tp(X, da, ab, Ga, e);
                                if (!K[l[aa]](jb, Ga)) {
                                    ha = 81;
                                    break a
                                }
                                var Ea = Ga | 0, Pa = l[Ea >> 2], Ja = X + 40 | 0, db = l[Ja >> 2], xa = X + 44 | 0, Sa = l[xa >> 2];
                                qa = Ga >> 2;
                                ga = jb >> 2;
                                l[qa] = l[ga];
                                l[qa + 1] = l[ga + 1];
                                l[qa + 2] = l[ga + 2];
                                l[jb >> 2] = Pa;
                                l[fa - 12 + 4 >> 2] = db;
                                l[fa - 12 + 8 >> 2] = Sa;
                                if (!K[l[aa]](Ga, ab)) {
                                    ha = 81;
                                    break a
                                }
                                var Ka = ab | 0, tb = l[Ka >> 2], kb = X + 28 | 0, ub = l[kb >> 2], rb = X + 32 | 0, Bb = l[rb >> 2];
                                oa = ab >> 2;
                                l[oa] = l[qa];
                                l[oa + 1] = l[qa + 1];
                                l[oa + 2] = l[qa + 2];
                                l[Ea >> 2] = tb;
                                l[Ja >> 2] = ub;
                                l[xa >> 2] = Bb;
                                if (!K[l[aa]](ab, da)) {
                                    ha = 81;
                                    break a
                                }
                                var lb = da | 0, yb = l[lb >> 2], xb = X + 16 | 0, Ib = l[xb >> 2], wb = X + 20 | 0, vb = l[wb >> 2];
                                Ba = da >> 2;
                                l[Ba] = l[oa];
                                l[Ba + 1] = l[oa + 1];
                                l[Ba + 2] = l[oa + 2];
                                l[Ka >> 2] = yb;
                                l[kb >> 2] = Ib;
                                l[rb >> 2] = vb;
                                if (!K[l[aa]](da, X)) {
                                    ha = 81;
                                    break a
                                }
                                var zb = l[ma], Eb = l[ca], Cb = l[ba];
                                l[Z] = l[Ba];
                                l[Z + 1] = l[Ba + 1];
                                l[Z + 2] = l[Ba + 2];
                                l[lb >> 2] = zb;
                                l[xb >> 2] = Eb;
                                l[wb >> 2] = Cb;
                                ha = 81;
                                break a
                            } else {
                                if (372 > (Qa | 0)) {
                                    ha = 22;
                                    break a
                                }
                                var eb = fa - 12 | 0;
                                sa = eb >> 2;
                                var sb = (Qa | 0) / 24 & -1, ob = X + 12 * sb | 0;
                                if (11988 < (Qa | 0)) {
                                    var Db = (Qa | 0) / 48 & -1, Jb = X + 12 * Db | 0, Rb = Db + sb | 0, Nb = X + 12 * Rb | 0, Ob = tp(X, Jb, ob, Nb, e);
                                    if (K[l[aa]](eb, Nb)) {
                                        var Lb = Nb | 0, Pb = l[Lb >> 2], Mb = X + 12 * Rb + 4 | 0, Yb = l[Mb >> 2], Zb = X + 12 * Rb + 8 | 0, fc = l[Zb >> 2];
                                        ea = Nb >> 2;
                                        $ = eb >> 2;
                                        l[ea] = l[$];
                                        l[ea + 1] = l[$ + 1];
                                        l[ea + 2] = l[$ + 2];
                                        l[sa] = Pb;
                                        l[fa - 12 + 4 >> 2] = Yb;
                                        l[fa - 12 + 8 >> 2] = fc;
                                        var Ub = Ob + 1 | 0;
                                        if (K[l[aa]](Nb, ob)) {
                                            var jc = ob | 0, Qb = l[jc >> 2], mb = X + 12 * sb + 4 | 0, cc = l[mb >> 2], Fb = X + 12 * sb + 8 | 0, hc = l[Fb >> 2];
                                            Q = ob >> 2;
                                            l[Q] = l[ea];
                                            l[Q + 1] = l[ea + 1];
                                            l[Q + 2] = l[ea + 2];
                                            l[Lb >> 2] = Qb;
                                            l[Mb >> 2] = cc;
                                            l[Zb >> 2] = hc;
                                            var wc = Ob + 2 | 0;
                                            if (K[l[aa]](ob, Jb)) {
                                                var pc = Jb | 0, qc = l[pc >> 2], $c = X + 12 * Db + 4 | 0, Fc = l[$c >> 2], sc = X + 12 * Db + 8 | 0, kd = l[sc >> 2];
                                                W = Jb >> 2;
                                                l[W] = l[Q];
                                                l[W + 1] = l[Q + 1];
                                                l[W + 2] = l[Q + 2];
                                                l[jc >> 2] = qc;
                                                l[mb >> 2] = Fc;
                                                l[Fb >> 2] = kd;
                                                var wd = Ob + 3 | 0;
                                                if (K[l[aa]](Jb, X)) {
                                                    var Mc = l[ma], $b = l[ca], ac = l[ba];
                                                    l[Z] = l[W];
                                                    l[Z + 1] = l[W + 1];
                                                    l[Z + 2] = l[W + 2];
                                                    l[pc >> 2] = Mc;
                                                    l[$c >> 2] = $b;
                                                    l[sc >> 2] = ac;
                                                    oc = Ob + 4 | 0
                                                } else {
                                                    oc = wd
                                                }
                                            } else {
                                                oc = wc
                                            }
                                        } else {
                                            oc = Ub
                                        }
                                    } else {
                                        var oc = Ob
                                    }
                                } else {
                                    var tc = K[l[aa]](ob, X), Oc = K[l[aa]](eb, ob);
                                    if (tc) {
                                        var ld = l[ma], Wc = l[ca], ad = l[ba];
                                        if (Oc) {
                                            U = eb >> 2, l[Z] = l[U], l[Z + 1] = l[U + 1], l[Z + 2] = l[U + 2], l[sa] = ld, l[fa - 12 + 4 >> 2] = Wc, l[fa - 12 + 8 >> 2] = ad, oc = 1
                                        } else {
                                            S = ob >> 2;
                                            l[Z] = l[S];
                                            l[Z + 1] = l[S + 1];
                                            l[Z + 2] = l[S + 2];
                                            var Xc = ob | 0;
                                            l[Xc >> 2] = ld;
                                            var Cc = X + 12 * sb + 4 | 0;
                                            l[Cc >> 2] = Wc;
                                            var fd = X + 12 * sb + 8 | 0;
                                            l[fd >> 2] = ad;
                                            if (K[l[aa]](eb, ob)) {
                                                var md = l[Xc >> 2], nd = l[Cc >> 2], Pc = l[fd >> 2];
                                                T = eb >> 2;
                                                l[S] = l[T];
                                                l[S + 1] = l[T + 1];
                                                l[S + 2] = l[T + 2];
                                                l[sa] = md;
                                                l[fa - 12 + 4 >> 2] = nd;
                                                l[fa - 12 + 8 >> 2] = Pc;
                                                oc = 2
                                            } else {
                                                oc = 1
                                            }
                                        }
                                    } else {
                                        if (Oc) {
                                            var gd = ob | 0, od = l[gd >> 2], pd = X + 12 * sb + 4 | 0, Pd = l[pd >> 2], Xd = X + 12 * sb + 8 | 0, qd = l[Xd >> 2];
                                            R = ob >> 2;
                                            O = eb >> 2;
                                            l[R] = l[O];
                                            l[R + 1] = l[O + 1];
                                            l[R + 2] = l[O + 2];
                                            l[sa] = od;
                                            l[fa - 12 + 4 >> 2] = Pd;
                                            l[fa - 12 + 8 >> 2] = qd;
                                            if (K[l[aa]](ob, X)) {
                                                var Qd = l[ma], Qc = l[ca], Jc = l[ba];
                                                l[Z] = l[R];
                                                l[Z + 1] = l[R + 1];
                                                l[Z + 2] = l[R + 2];
                                                l[gd >> 2] = Qd;
                                                l[pd >> 2] = Qc;
                                                l[Xd >> 2] = Jc;
                                                oc = 2
                                            } else {
                                                oc = 1
                                            }
                                        } else {
                                            oc = 0
                                        }
                                    }
                                }
                                if (K[l[aa]](X, ob)) {
                                    var Kc = eb, gc = oc
                                } else {
                                    for (var hd = eb; ;) {
                                        var xd = hd - 12 | 0, bd = o[aa];
                                        if ((X | 0) == (xd | 0)) {
                                            break b
                                        }
                                        if (K[bd](xd, ob)) {
                                            break
                                        }
                                        hd = xd
                                    }
                                    var rd = l[ma], ye = l[ca], Yd = l[ba];
                                    L = xd >> 2;
                                    l[Z] = l[L];
                                    l[Z + 1] = l[L + 1];
                                    l[Z + 2] = l[L + 2];
                                    l[xd >> 2] = rd;
                                    l[hd - 12 + 4 >> 2] = ye;
                                    l[hd - 12 + 8 >> 2] = Yd;
                                    Kc = xd;
                                    gc = oc + 1 | 0
                                }
                                var Tc = da >>> 0 < Kc >>> 0;
                                c:do {
                                    if (Tc) {
                                        for (var xc = Kc, bc = da, Ed = gc, yc = ob; ;) {
                                            var Ac = bc;
                                            for (J = Ac >> 2; ;) {
                                                var Zd = K[l[aa]](Ac, yc), $d = Ac + 12 | 0;
                                                if (!Zd) {
                                                    var cd = xc;
                                                    break
                                                }
                                                Ac = $d;
                                                J = Ac >> 2
                                            }
                                            for (; ;) {
                                                var zc = cd - 12 | 0;
                                                if (K[l[aa]](zc, yc)) {
                                                    break
                                                }
                                                cd = zc
                                            }
                                            if (Ac >>> 0 > zc >>> 0) {
                                                var kc = Ac;
                                                I = kc >> 2;
                                                var Rd = Ed, Gc = yc;
                                                F = Gc >> 2;
                                                break c
                                            }
                                            var Rc = l[J], Nc = l[J + 1], ne = l[J + 2];
                                            H = Ac >> 2;
                                            G = zc >> 2;
                                            l[H] = l[G];
                                            l[H + 1] = l[G + 1];
                                            l[H + 2] = l[G + 2];
                                            l[zc >> 2] = Rc;
                                            l[cd - 12 + 4 >> 2] = Nc;
                                            l[cd - 12 + 8 >> 2] = ne;
                                            var Sd = (yc | 0) == (Ac | 0) ? zc : yc, xc = zc, bc = $d, Ed = Ed + 1 | 0, yc = Sd
                                        }
                                    } else {
                                        kc = da, I = kc >> 2, Rd = gc, Gc = ob, F = Gc >> 2
                                    }
                                } while (0);
                                if ((kc | 0) == (Gc | 0)) {
                                    var Td = Rd
                                } else {
                                    if (K[l[aa]](Gc, kc)) {
                                        var Ud = l[I], xf = l[I + 1], Fd = l[I + 2];
                                        E = kc >> 2;
                                        D = Gc >> 2;
                                        l[E] = l[D];
                                        l[E + 1] = l[D + 1];
                                        l[E + 2] = l[D + 2];
                                        l[F] = Ud;
                                        l[F + 1] = xf;
                                        l[F + 2] = Fd;
                                        Td = Rd + 1 | 0
                                    } else {
                                        Td = Rd
                                    }
                                }
                                if (0 == (Td | 0)) {
                                    var oe = up(X, kc, e), He = kc + 12 | 0;
                                    if (up(He, fa, e)) {
                                        if (oe) {
                                            ha = 81;
                                            break a
                                        }
                                        fa = kc;
                                        continue
                                    } else {
                                        if (oe) {
                                            za = fa;
                                            X = He;
                                            ka = X >> 2;
                                            continue a
                                        }
                                    }
                                }
                                var ae = kc;
                                if ((ae - ua | 0) < (Aa - ae | 0)) {
                                    rp(X, kc, e);
                                    za = fa;
                                    X = kc + 12 | 0;
                                    ka = X >> 2;
                                    continue a
                                }
                                rp(kc + 12 | 0, fa, e);
                                fa = kc
                            }
                        }
                    }
                }
            }
        }
        if (K[bd](X, eb)) {
            var Hc = da
        } else {
            var dd = da;
            for (z = dd >> 2; ;) {
                if ((dd | 0) == (eb | 0)) {
                    ha = 81;
                    break a
                }
                var be = K[l[aa]](X, dd), pe = dd + 12 | 0;
                if (be) {
                    break
                }
                dd = pe;
                z = dd >> 2
            }
            var Uc = l[z], lc = l[z + 1], Gd = l[z + 2];
            C = dd >> 2;
            A = eb >> 2;
            l[C] = l[A];
            l[C + 1] = l[A + 1];
            l[C + 2] = l[A + 2];
            l[sa] = Uc;
            l[fa - 12 + 4 >> 2] = lc;
            l[fa - 12 + 8 >> 2] = Gd;
            Hc = pe
        }
        if ((Hc | 0) == (eb | 0)) {
            ha = 81;
            break
        }
        for (var Hd = eb, Re = Hc; ;) {
            var Id = Re;
            for (y = Id >> 2; ;) {
                var Jd = K[l[aa]](X, Id), qe = Id + 12 | 0;
                if (Jd) {
                    var re = Hd;
                    break
                }
                Id = qe;
                y = Id >> 2
            }
            for (; ;) {
                var Kd = re - 12 | 0;
                if (!K[l[aa]](X, Kd)) {
                    break
                }
                re = Kd
            }
            if (Id >>> 0 >= Kd >>> 0) {
                za = fa;
                X = Id;
                ka = X >> 2;
                continue a
            }
            var Se = l[y], Rf = l[y + 1], sd = l[y + 2];
            x = Id >> 2;
            w = Kd >> 2;
            l[x] = l[w];
            l[x + 1] = l[w + 1];
            l[x + 2] = l[w + 2];
            l[Kd >> 2] = Se;
            l[re - 12 + 4 >> 2] = Rf;
            l[re - 12 + 8 >> 2] = sd;
            Hd = Kd;
            Re = qe
        }
    }
    a:do {
        if (22 == ha) {
            r = ra >> 2;
            var Vc = X + 24 | 0;
            u = Vc >> 2;
            var Te = K[l[aa]](da, X), Ue = K[l[aa]](Vc, da);
            if (Te) {
                var ce = l[ma], Yc = l[ca], yd = l[ba];
                if (Ue) {
                    p = Vc >> 2, l[Z] = l[p], l[Z + 1] = l[p + 1], l[Z + 2] = l[p + 2], l[u] = ce, l[ka + 7] = Yc, l[ka + 8] = yd
                } else {
                    n = da >> 2;
                    l[Z] = l[n];
                    l[Z + 1] = l[n + 1];
                    l[Z + 2] = l[n + 2];
                    var $e = da | 0;
                    l[$e >> 2] = ce;
                    var ze = X + 16 | 0;
                    l[ze >> 2] = Yc;
                    var Zc = X + 20 | 0;
                    l[Zc >> 2] = yd;
                    if (K[l[aa]](Vc, da)) {
                        var Ld = l[$e >> 2], Md = l[ze >> 2], de = l[Zc >> 2];
                        m = Vc >> 2;
                        l[n] = l[m];
                        l[n + 1] = l[m + 1];
                        l[n + 2] = l[m + 2];
                        l[u] = Ld;
                        l[ka + 7] = Md;
                        l[ka + 8] = de
                    }
                }
            } else {
                if (Ue) {
                    var zd = da | 0, ee = l[zd >> 2], yf = X + 16 | 0, af = l[yf >> 2], Ie = X + 20 | 0, zf = l[Ie >> 2];
                    k = da >> 2;
                    j = Vc >> 2;
                    l[k] = l[j];
                    l[k + 1] = l[j + 1];
                    l[k + 2] = l[j + 2];
                    l[u] = ee;
                    l[ka + 7] = af;
                    l[ka + 8] = zf;
                    if (K[l[aa]](da, X)) {
                        var jf = l[ma], bf = l[ca], Sf = l[ba];
                        l[Z] = l[k];
                        l[Z + 1] = l[k + 1];
                        l[Z + 2] = l[k + 2];
                        l[zd >> 2] = jf;
                        l[yf >> 2] = bf;
                        l[Ie >> 2] = Sf
                    }
                }
            }
            var kf = X + 36 | 0;
            if ((kf | 0) != (fa | 0)) {
                for (var Ae = Vc, Ad = kf; ;) {
                    if (K[l[aa]](Ad, Ae)) {
                        h = Ad >> 2;
                        l[r] = l[h];
                        l[r + 1] = l[h + 1];
                        l[r + 2] = l[h + 2];
                        for (var Af = Ae, Tf = Ad; ;) {
                            g = Tf >> 2;
                            f = Af >> 2;
                            l[g] = l[f];
                            l[g + 1] = l[f + 1];
                            l[g + 2] = l[f + 2];
                            if ((Af | 0) == (X | 0)) {
                                break
                            }
                            var Fg = Af - 12 | 0;
                            if (!K[l[aa]](ra, Fg)) {
                                break
                            }
                            Tf = Af;
                            Af = Fg
                        }
                        l[f] = l[r];
                        l[f + 1] = l[r + 1];
                        l[f + 2] = l[r + 2]
                    }
                    var Gg = Ad + 12 | 0;
                    if ((Gg | 0) == (fa | 0)) {
                        break a
                    }
                    Ae = Ad;
                    Ad = Gg
                }
            }
        }
    } while (0);
    a = ra
}
function tp(b, d, e, f, g) {
    var h, j, k, m, n = g >> 2;
    k = e >> 2;
    var g = b >> 2, p = K[l[n]](d, b);
    j = K[l[n]](e, d);
    if (p) {
        var u = l[g];
        m = l[g + 1];
        p = l[g + 2];
        h = b >> 2;
        j ? (j = e >> 2, l[h] = l[j], l[h + 1] = l[j + 1], l[h + 2] = l[j + 2], l[k] = u, l[k + 1] = m, l[k + 2] = p, k = 1) : (j = d >> 2, l[h] = l[j], l[h + 1] = l[j + 1], l[h + 2] = l[j + 2], h = d | 0, l[h >> 2] = u, u = d + 4 | 0, l[u >> 2] = m, m = d + 8 | 0, l[m >> 2] = p, K[l[n]](e, d) ? (p = l[h >> 2], u = l[u >> 2], h = l[m >> 2], m = e >> 2, l[j] = l[m], l[j + 1] = l[m + 1], l[j + 2] = l[m + 2], l[k] = p, l[k + 1] = u, l[k + 2] = h, k = 2) : k = 1)
    } else {
        if (j) {
            var p = d | 0, r = l[p >> 2];
            m = d + 4 | 0;
            var w = l[m >> 2], u = d + 8 | 0, x = l[u >> 2];
            j = d >> 2;
            h = e >> 2;
            l[j] = l[h];
            l[j + 1] = l[h + 1];
            l[j + 2] = l[h + 2];
            l[k] = r;
            l[k + 1] = w;
            l[k + 2] = x;
            K[l[n]](d, b) ? (h = l[g], r = l[g + 1], w = l[g + 2], k = b >> 2, l[k] = l[j], l[k + 1] = l[j + 1], l[k + 2] = l[j + 2], l[p >> 2] = h, l[m >> 2] = r, l[u >> 2] = w, k = 2) : k = 1
        } else {
            k = 0
        }
    }
    if (K[l[n]](f, e)) {
        if (p = e | 0, r = l[p >> 2], m = e + 4 | 0, w = l[m >> 2], u = e + 8 | 0, x = l[u >> 2], j = e >> 2, h = f >> 2, l[j] = l[h], l[j + 1] = l[h + 1], l[j + 2] = l[h + 2], l[f >> 2] = r, l[f + 4 >> 2] = w, l[f + 8 >> 2] = x, f = k + 1 | 0, K[l[n]](e, d)) {
            f = d | 0;
            w = l[f >> 2];
            h = d + 4 | 0;
            var x = l[h >> 2], r = d + 8 | 0, y = l[r >> 2], e = d >> 2;
            l[e] = l[j];
            l[e + 1] = l[j + 1];
            l[e + 2] = l[j + 2];
            l[p >> 2] = w;
            l[m >> 2] = x;
            l[u >> 2] = y;
            j = k + 2 | 0;
            K[l[n]](d, b) ? (d = l[g], n = l[g + 1], g = l[g + 2], b >>= 2, l[b] = l[e], l[b + 1] = l[e + 1], l[b + 2] = l[e + 2], l[f >> 2] = d, l[h >> 2] = n, l[r >> 2] = g, b = k + 3 | 0) : b = j
        } else {
            b = f
        }
    } else {
        b = k
    }
    return b
}
function up(b, d, e) {
    var f, g, h, j, k, m, n, p, u, r, w, x, y, A, C, z, D, E, G, H, F, I, J, L, O, R, T, S = e >> 2, U = b >> 2, W = a;
    a += 12;
    var Q = (d - b | 0) / 12 & -1;
    a:do {
        if (0 == (Q | 0) || 1 == (Q | 0)) {
            var $ = 1
        } else {
            if (2 == (Q | 0)) {
                var ea = d - 12 | 0;
                if (K[l[S]](ea, b)) {
                    var sa = l[U], Ba = l[U + 1], oa = l[U + 2];
                    T = b >> 2;
                    R = ea >> 2;
                    l[T] = l[R];
                    l[T + 1] = l[R + 1];
                    l[T + 2] = l[R + 2];
                    l[ea >> 2] = sa;
                    l[d - 12 + 4 >> 2] = Ba;
                    l[d - 12 + 8 >> 2] = oa
                }
                $ = 1
            } else {
                if (3 == (Q | 0)) {
                    var ga = b + 12 | 0, qa = d - 12 | 0;
                    O = qa >> 2;
                    var la = K[l[S]](ga, b), Ca = K[l[S]](qa, ga);
                    if (la) {
                        var ia = l[U], ya = l[U + 1], ta = l[U + 2];
                        L = b >> 2;
                        if (Ca) {
                            J = qa >> 2, l[L] = l[J], l[L + 1] = l[J + 1], l[L + 2] = l[J + 2], l[O] = ia, l[d - 12 + 4 >> 2] = ya, l[d - 12 + 8 >> 2] = ta
                        } else {
                            I = ga >> 2;
                            l[L] = l[I];
                            l[L + 1] = l[I + 1];
                            l[L + 2] = l[I + 2];
                            var Ia = ga | 0;
                            l[Ia >> 2] = ia;
                            var na = b + 16 | 0;
                            l[na >> 2] = ya;
                            var Z = b + 20 | 0;
                            l[Z >> 2] = ta;
                            if (K[l[S]](qa, ga)) {
                                var ba = l[Ia >> 2], ca = l[na >> 2], ma = l[Z >> 2];
                                F = qa >> 2;
                                l[I] = l[F];
                                l[I + 1] = l[F + 1];
                                l[I + 2] = l[F + 2];
                                l[O] = ba;
                                l[d - 12 + 4 >> 2] = ca;
                                l[d - 12 + 8 >> 2] = ma
                            }
                        }
                    } else {
                        if (Ca) {
                            var ka = ga | 0, aa = l[ka >> 2], ra = b + 16 | 0, ha = l[ra >> 2], za = b + 20 | 0, X = l[za >> 2];
                            H = ga >> 2;
                            G = qa >> 2;
                            l[H] = l[G];
                            l[H + 1] = l[G + 1];
                            l[H + 2] = l[G + 2];
                            l[O] = aa;
                            l[d - 12 + 4 >> 2] = ha;
                            l[d - 12 + 8 >> 2] = X;
                            if (K[l[S]](ga, b)) {
                                var ua = l[U], da = l[U + 1], fa = l[U + 2];
                                E = b >> 2;
                                l[E] = l[H];
                                l[E + 1] = l[H + 1];
                                l[E + 2] = l[H + 2];
                                l[ka >> 2] = ua;
                                l[ra >> 2] = da;
                                l[za >> 2] = fa
                            }
                        }
                    }
                    $ = 1
                } else {
                    if (4 == (Q | 0)) {
                        tp(b, b + 12 | 0, b + 24 | 0, d - 12 | 0, e), $ = 1
                    } else {
                        if (5 == (Q | 0)) {
                            var Aa = b + 12 | 0, Qa = b + 24 | 0, pa = b + 36 | 0, cb = d - 12 | 0;
                            tp(b, Aa, Qa, pa, e);
                            if (K[l[S]](cb, pa)) {
                                var Ra = pa | 0, Ta = l[Ra >> 2], $a = b + 40 | 0, va = l[$a >> 2], Wa = b + 44 | 0, fb = l[Wa >> 2];
                                D = pa >> 2;
                                z = cb >> 2;
                                l[D] = l[z];
                                l[D + 1] = l[z + 1];
                                l[D + 2] = l[z + 2];
                                l[cb >> 2] = Ta;
                                l[d - 12 + 4 >> 2] = va;
                                l[d - 12 + 8 >> 2] = fb;
                                if (K[l[S]](pa, Qa)) {
                                    var gb = Qa | 0, Xa = l[gb >> 2], Ua = b + 28 | 0, Va = l[Ua >> 2], pb = b + 32 | 0, nb = l[pb >> 2];
                                    C = Qa >> 2;
                                    l[C] = l[D];
                                    l[C + 1] = l[D + 1];
                                    l[C + 2] = l[D + 2];
                                    l[Ra >> 2] = Xa;
                                    l[$a >> 2] = Va;
                                    l[Wa >> 2] = nb;
                                    if (K[l[S]](Qa, Aa)) {
                                        var La = Aa | 0, qb = l[La >> 2], bb = b + 16 | 0, Fa = l[bb >> 2], Ma = b + 20 | 0, wa = l[Ma >> 2];
                                        A = Aa >> 2;
                                        l[A] = l[C];
                                        l[A + 1] = l[C + 1];
                                        l[A + 2] = l[C + 2];
                                        l[gb >> 2] = qb;
                                        l[Ua >> 2] = Fa;
                                        l[pb >> 2] = wa;
                                        if (K[l[S]](Aa, b)) {
                                            var hb = l[U], Ya = l[U + 1], Za = l[U + 2];
                                            y = b >> 2;
                                            l[y] = l[A];
                                            l[y + 1] = l[A + 1];
                                            l[y + 2] = l[A + 2];
                                            l[La >> 2] = hb;
                                            l[bb >> 2] = Ya;
                                            l[Ma >> 2] = Za
                                        }
                                    }
                                }
                            }
                            $ = 1
                        } else {
                            var Da = b + 24 | 0;
                            x = Da >> 2;
                            var Oa = b + 12 | 0, ib = K[l[S]](Oa, b), ab = K[l[S]](Da, Oa);
                            if (ib) {
                                var Ga = l[U], jb = l[U + 1], Ea = l[U + 2];
                                w = b >> 2;
                                if (ab) {
                                    r = Da >> 2, l[w] = l[r], l[w + 1] = l[r + 1], l[w + 2] = l[r + 2], l[x] = Ga, l[U + 7] = jb, l[U + 8] = Ea
                                } else {
                                    u = Oa >> 2;
                                    l[w] = l[u];
                                    l[w + 1] = l[u + 1];
                                    l[w + 2] = l[u + 2];
                                    var Pa = Oa | 0;
                                    l[Pa >> 2] = Ga;
                                    var Ja = b + 16 | 0;
                                    l[Ja >> 2] = jb;
                                    var db = b + 20 | 0;
                                    l[db >> 2] = Ea;
                                    if (K[l[S]](Da, Oa)) {
                                        var xa = l[Pa >> 2], Sa = l[Ja >> 2], Ka = l[db >> 2];
                                        p = Da >> 2;
                                        l[u] = l[p];
                                        l[u + 1] = l[p + 1];
                                        l[u + 2] = l[p + 2];
                                        l[x] = xa;
                                        l[U + 7] = Sa;
                                        l[U + 8] = Ka
                                    }
                                }
                            } else {
                                if (ab) {
                                    var tb = Oa | 0, kb = l[tb >> 2], ub = b + 16 | 0, rb = l[ub >> 2], Bb = b + 20 | 0, lb = l[Bb >> 2];
                                    n = Oa >> 2;
                                    m = Da >> 2;
                                    l[n] = l[m];
                                    l[n + 1] = l[m + 1];
                                    l[n + 2] = l[m + 2];
                                    l[x] = kb;
                                    l[U + 7] = rb;
                                    l[U + 8] = lb;
                                    if (K[l[S]](Oa, b)) {
                                        var yb = l[U], xb = l[U + 1], Ib = l[U + 2];
                                        k = b >> 2;
                                        l[k] = l[n];
                                        l[k + 1] = l[n + 1];
                                        l[k + 2] = l[n + 2];
                                        l[tb >> 2] = yb;
                                        l[ub >> 2] = xb;
                                        l[Bb >> 2] = Ib
                                    }
                                }
                            }
                            j = W >> 2;
                            for (var wb = b + 36 | 0, vb = 0, zb = Da; ;) {
                                if ((wb | 0) == (d | 0)) {
                                    $ = 1;
                                    break a
                                }
                                if (K[l[S]](wb, zb)) {
                                    h = wb >> 2;
                                    l[j] = l[h];
                                    l[j + 1] = l[h + 1];
                                    l[j + 2] = l[h + 2];
                                    for (var Eb = zb, Cb = wb; ;) {
                                        g = Cb >> 2;
                                        f = Eb >> 2;
                                        l[g] = l[f];
                                        l[g + 1] = l[f + 1];
                                        l[g + 2] = l[f + 2];
                                        if ((Eb | 0) == (b | 0)) {
                                            break
                                        }
                                        var eb = Eb - 12 | 0;
                                        if (!K[l[S]](W, eb)) {
                                            break
                                        }
                                        Cb = Eb;
                                        Eb = eb
                                    }
                                    l[f] = l[j];
                                    l[f + 1] = l[j + 1];
                                    l[f + 2] = l[j + 2];
                                    var sb = vb + 1 | 0;
                                    if (8 == (sb | 0)) {
                                        break
                                    }
                                    var ob = sb
                                } else {
                                    ob = vb
                                }
                                zb = wb;
                                wb = wb + 12 | 0;
                                vb = ob
                            }
                            $ = (wb + 12 | 0) == (d | 0)
                        }
                    }
                }
            }
        }
    } while (0);
    a = W;
    return $
}
function fp(b, d) {
    var e, f;
    0 != (l[b + 28 >> 2] | 0) && P(N.Qa | 0, 72, N.yb | 0, N.Bb | 0);
    f = (b + 12 | 0) >> 2;
    e = l[f];
    var g = K[l[l[e >> 2] + 12 >> 2]](e);
    e = b + 24 | 0;
    var h = o[e >> 2], g = 28 * g | 0, j = 0 == (g | 0);
    a:do {
        if (!j) {
            var k = 0 < (g | 0);
            do {
                if (k) {
                    if (640 >= (g | 0)) {
                        break
                    }
                    Dh(h);
                    break a
                }
                P(N.e | 0, 164, N.f | 0, N.Wa | 0)
            } while (0);
            var m = ed[rn + g | 0], k = m & 255;
            14 > (m & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0);
            m = h;
            k = (k << 2) + d + 12 | 0;
            l[h >> 2] = l[k >> 2];
            l[k >> 2] = m
        }
    } while (0);
    l[e >> 2] = 0;
    h = o[f];
    e = h >> 2;
    g = l[e + 1];
    0 == (g | 0) ? (K[l[l[e] >> 2]](h), g = ed[rn + 20 | 0], j = g & 255, 14 > (g & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0), g = (j << 2) + d + 12 | 0, l[e] = l[g >> 2], l[g >> 2] = h) : 1 == (g | 0) ? (K[l[l[e] >> 2]](h), g = ed[rn + 48 | 0], j = g & 255, 14 > (g & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0), g = (j << 2) + d + 12 | 0, l[e] = l[g >> 2], l[g >> 2] = h) : 2 == (g | 0) ? (K[l[l[e] >> 2]](h), g = ed[rn + 152 | 0], j = g & 255, 14 > (g & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0), g = (j << 2) + d + 12 | 0, l[e] = l[g >> 2], l[g >> 2] = h) : 3 == (g | 0) ? (K[l[l[e] >> 2]](h), g = ed[rn + 40 | 0], j = g & 255, 14 > (g & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0), g = (j << 2) + d + 12 | 0, l[e] = l[g >> 2], l[g >> 2] = h) : P(N.Qa | 0, 115, N.yb | 0, N.l | 0);
    l[f] = 0
}
function wo(b, d, e, f) {
    var g, h, j = a;
    a += 40;
    var k = j + 16, m = j + 32, n = b + 28 | 0, p = 0 < (l[n >> 2] | 0);
    a:do {
        if (p) {
            var u = b + 24 | 0, r = b + 12 | 0, w = j | 0, x = k | 0, y = j + 4 | 0, A = k + 4 | 0, C = j + 8 | 0, z = k + 8 | 0, D = j + 12 | 0, E = k + 12 | 0, G = f | 0, H = e | 0, F = f + 4 | 0, I = e + 4 | 0, J = m | 0, L = m + 4 | 0, O = d | 0;
            h = (d + 40 | 0) >> 2;
            var R = d + 36 | 0;
            g = (d + 32 | 0) >> 2;
            for (var T = 0; ;) {
                var S = l[u >> 2], U = l[r >> 2], W = S + 28 * T + 20 | 0;
                K[l[l[U >> 2] + 24 >> 2]](U, j, e, l[W >> 2]);
                U = l[r >> 2];
                K[l[l[U >> 2] + 24 >> 2]](U, k, f, l[W >> 2]);
                var W = S + 28 * T | 0, U = q[w >> 2], Q = q[x >> 2], $ = q[y >> 2], ea = q[A >> 2], ea = $ < ea ? $ : ea, $ = W, U = (M[0] = U < Q ? U : Q, t[0]), Q = (M[0] = ea, t[0]) | 0;
                l[($ | 0) >> 2] = 0 | U;
                l[($ + 4 | 0) >> 2] = Q;
                U = q[C >> 2];
                Q = q[z >> 2];
                $ = q[D >> 2];
                ea = q[E >> 2];
                ea = $ > ea ? $ : ea;
                $ = S + 28 * T + 8 | 0;
                U = (M[0] = U > Q ? U : Q, t[0]);
                Q = (M[0] = ea, t[0]) | 0;
                l[($ | 0) >> 2] = 0 | U;
                l[($ + 4 | 0) >> 2] = Q;
                U = q[F >> 2] - q[I >> 2];
                q[J >> 2] = q[G >> 2] - q[H >> 2];
                q[L >> 2] = U;
                S = l[(S + 24 >> 2) + (7 * T | 0)];
                Pk(O, S, W, m) && (U = l[h], (U | 0) == (l[R >> 2] | 0) ? (W = l[g], l[R >> 2] = U << 1, U = Ne(U << 3), l[g] = U, Ch(U, W, l[h] << 2), Dh(W), W = l[h]) : W = U, l[((W << 2) + l[g] | 0) >> 2] = S, l[h] = l[h] + 1 | 0);
                T = T + 1 | 0;
                if ((T | 0) >= (l[n >> 2] | 0)) {
                    break a
                }
            }
        }
    } while (0);
    a = j
}
function xo(b) {
    var d, e, f = b + 8 | 0, g = l[f >> 2], h = 0 == (g | 0);
    a:do {
        if (!h) {
            e = l[g + 112 >> 2];
            if (0 == (e | 0)) {
                e = g
            } else {
                for (; ;) {
                    var j = l[e + 4 >> 2];
                    (l[j + 48 >> 2] | 0) == (b | 0) | (l[j + 52 >> 2] | 0) == (b | 0) && (j = j + 4 | 0, l[j >> 2] |= 8);
                    e = l[e + 12 >> 2];
                    if (0 == (e | 0)) {
                        break
                    }
                }
                e = l[f >> 2]
            }
            d = l[e + 88 >> 2];
            if (0 != (d | 0) && (j = b + 28 | 0, 0 < (l[j >> 2] | 0))) {
                var k = b + 24 | 0;
                e = (d + 102912 | 0) >> 2;
                var m = d + 102908 | 0;
                d = (d + 102904 | 0) >> 2;
                for (var n = 0, p = l[e]; ;) {
                    var u = l[(l[k >> 2] + 24 >> 2) + (7 * n | 0)];
                    if ((p | 0) == (l[m >> 2] | 0)) {
                        var r = l[d];
                        l[m >> 2] = p << 1;
                        p = Ne(p << 3);
                        l[d] = p;
                        Ch(p, r, l[e] << 2);
                        Dh(r);
                        r = l[e]
                    } else {
                        r = p
                    }
                    l[((r << 2) + l[d] | 0) >> 2] = u;
                    u = l[e] + 1 | 0;
                    l[e] = u;
                    n = n + 1 | 0;
                    if ((n | 0) >= (l[j >> 2] | 0)) {
                        break a
                    }
                    p = u
                }
            }
        }
    } while (0)
}
function mp(b, d) {
    var e, f, g = a, h;
    V(N.Gg | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
    f = q[b + 16 >> 2];
    V(N.Vg | 0, (s = a, a += 8, Ee[0] = f, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    f = q[b + 20 >> 2];
    V(N.hh | 0, (s = a, a += 8, Ee[0] = f, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    f = q[b >> 2];
    V(N.nh | 0, (s = a, a += 8, Ee[0] = f, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    f = c[b + 38 | 0] & 1;
    V(N.vh | 0, (s = a, a += 4, l[s >> 2] = f, s));
    f = jd[b + 32 >> 1] & 65535;
    V(N.yh | 0, (s = a, a += 4, l[s >> 2] = f, s));
    f = jd[b + 34 >> 1] & 65535;
    V(N.Eh | 0, (s = a, a += 4, l[s >> 2] = f, s));
    f = i[b + 36 >> 1] << 16 >> 16;
    V(N.Se | 0, (s = a, a += 4, l[s >> 2] = f, s));
    var j = o[b + 12 >> 2];
    f = j >> 2;
    var k = l[f + 1];
    do {
        if (0 == (k | 0)) {
            V(N.Ye | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s)), h = q[f + 2], V(N.Cb | 0, (s = a, a += 8, Ee[0] = h, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s)), h = q[f + 3], e = q[f + 4], V(N.nf | 0, (s = a, a += 16, Ee[0] = h, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = e, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s)), h = 13
        } else {
            if (1 == (k | 0)) {
                h = j;
                V(N.sf | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
                e = q[f + 2];
                V(N.Cb | 0, (s = a, a += 8, Ee[0] = e, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
                var m = j + 28 | 0;
                e = q[m >> 2];
                m = q[m + 4 >> 2];
                V(N.xf | 0, (s = a, a += 16, Ee[0] = e, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = m, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
                e = q[f + 3];
                m = q[f + 4];
                V(N.Df | 0, (s = a, a += 16, Ee[0] = e, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = m, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
                m = j + 20 | 0;
                e = q[m >> 2];
                m = q[m + 4 >> 2];
                V(N.Hf | 0, (s = a, a += 16, Ee[0] = e, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = m, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
                e = q[f + 9];
                m = q[f + 10];
                V(N.Mf | 0, (s = a, a += 16, Ee[0] = e, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = m, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
                e = c[j + 44 | 0] & 1;
                V(N.Pf | 0, (s = a, a += 4, l[s >> 2] = e, s));
                h = c[h + 45 | 0] & 1;
                V(N.Rf | 0, (s = a, a += 4, l[s >> 2] = h, s));
                h = 13
            } else {
                if (2 == (k | 0)) {
                    V(N.Uf | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
                    V(N.Nb | 0, (s = a, a += 4, l[s >> 2] = 8, s));
                    h = j + 148 | 0;
                    e = o[h >> 2];
                    m = 0 < (e | 0);
                    a:do {
                        if (m) {
                            for (var n = j + 20 | 0, p = 0; ;) {
                                var u = q[n + (p << 3) >> 2], r = q[n + (p << 3) + 4 >> 2];
                                V(N.Ob | 0, (s = a, a += 20, l[s >> 2] = p, Ee[0] = u, l[s + 4 >> 2] = t[0], l[s + 8 >> 2] = t[1], Ee[0] = r, l[s + 12 >> 2] = t[0], l[s + 16 >> 2] = t[1], s));
                                p = p + 1 | 0;
                                u = l[h >> 2];
                                if ((p | 0) >= (u | 0)) {
                                    var w = u;
                                    break a
                                }
                            }
                        } else {
                            w = e
                        }
                    } while (0);
                    V(N.jg | 0, (s = a, a += 4, l[s >> 2] = w, s));
                    h = 13
                } else {
                    if (3 == (k | 0)) {
                        h = j;
                        V(N.mg | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
                        e = (j + 16 | 0) >> 2;
                        m = l[e];
                        V(N.Nb | 0, (s = a, a += 4, l[s >> 2] = m, s));
                        m = l[e];
                        n = 0 < (m | 0);
                        a:do {
                            if (n) {
                                p = j + 12 | 0;
                                for (u = 0; ;) {
                                    var x = l[p >> 2], r = q[x + (u << 3) >> 2], x = q[x + (u << 3) + 4 >> 2];
                                    V(N.Ob | 0, (s = a, a += 20, l[s >> 2] = u, Ee[0] = r, l[s + 4 >> 2] = t[0], l[s + 8 >> 2] = t[1], Ee[0] = x, l[s + 12 >> 2] = t[0], l[s + 16 >> 2] = t[1], s));
                                    u = u + 1 | 0;
                                    r = l[e];
                                    if ((u | 0) >= (r | 0)) {
                                        var y = r;
                                        break a
                                    }
                                }
                            } else {
                                y = m
                            }
                        } while (0);
                        V(N.qg | 0, (s = a, a += 4, l[s >> 2] = y, s));
                        m = j + 20 | 0;
                        e = q[m >> 2];
                        m = q[m + 4 >> 2];
                        V(N.ug | 0, (s = a, a += 16, Ee[0] = e, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = m, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
                        m = j + 28 | 0;
                        e = q[m >> 2];
                        m = q[m + 4 >> 2];
                        V(N.yg | 0, (s = a, a += 16, Ee[0] = e, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = m, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
                        e = c[j + 36 | 0] & 1;
                        V(N.Bg | 0, (s = a, a += 4, l[s >> 2] = e, s));
                        h = c[h + 37 | 0] & 1;
                        V(N.Eg | 0, (s = a, a += 4, l[s >> 2] = h, s));
                        h = 13
                    } else {
                        h = 14
                    }
                }
            }
        }
    } while (0);
    13 == h && (V(N.$a | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s)), V(N.Ig | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s)), V(N.$a | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s)), V(N.Mg | 0, (s = a, a += 4, l[s >> 2] = d, s)));
    a = g
}
function vp(b, d, e, f, g, h) {
    var j, k, m, n, p = b >> 2;
    j = (b + 40 | 0) >> 2;
    l[j] = d;
    l[p + 11] = e;
    l[p + 12] = f;
    l[p + 7] = 0;
    l[p + 9] = 0;
    l[p + 8] = 0;
    b = (b | 0) >> 2;
    l[b] = g;
    l[p + 1] = h;
    k = d << 2;
    d = (g + 102796 | 0) >> 2;
    h = l[d];
    32 > (h | 0) ? m = h : (P(N.n | 0, 38, N.w | 0, N.D | 0), m = l[d]);
    h = (g + 12 * m + 102412 | 0) >> 2;
    l[(g + 102416 >> 2) + (3 * m | 0)] = k;
    n = (g + 102400 | 0) >> 2;
    var u = l[n];
    102400 < (u + k | 0) ? (n = Ne(k), l[h] = n, c[g + 12 * m + 102420 | 0] = 1) : (l[h] = g + u | 0, c[g + 12 * m + 102420 | 0] = 0, l[n] = l[n] + k | 0);
    m = g + 102404 | 0;
    k = l[m >> 2] + k | 0;
    l[m >> 2] = k;
    g = g + 102408 | 0;
    m = l[g >> 2];
    l[g >> 2] = (m | 0) > (k | 0) ? m : k;
    l[d] = l[d] + 1 | 0;
    l[p + 2] = l[h];
    g = l[b];
    h = e << 2;
    e = (g + 102796 | 0) >> 2;
    d = l[e];
    32 > (d | 0) ? k = d : (P(N.n | 0, 38, N.w | 0, N.D | 0), k = l[e]);
    d = g + 12 * k + 102412 | 0;
    l[(g + 12 * k + 102416 | 0) >> 2] = h;
    m = (g + 102400 | 0) >> 2;
    n = l[m];
    102400 < (n + h | 0) ? (m = Ne(h), l[(d | 0) >> 2] = m, c[g + 12 * k + 102420 | 0] = 1) : (l[(d | 0) >> 2] = g + n | 0, c[g + 12 * k + 102420 | 0] = 0, l[m] = l[m] + h | 0);
    k = g + 102404 | 0;
    h = l[k >> 2] + h | 0;
    l[k >> 2] = h;
    g = g + 102408 | 0;
    k = l[g >> 2];
    l[g >> 2] = (k | 0) > (h | 0) ? k : h;
    l[e] = l[e] + 1 | 0;
    l[p + 3] = l[d >> 2];
    e = l[b];
    d = f << 2;
    f = (e + 102796 | 0) >> 2;
    g = l[f];
    32 > (g | 0) ? h = g : (P(N.n | 0, 38, N.w | 0, N.D | 0), h = l[f]);
    g = e + 12 * h + 102412 | 0;
    l[(e + 12 * h + 102416 | 0) >> 2] = d;
    k = (e + 102400 | 0) >> 2;
    m = l[k];
    102400 < (m + d | 0) ? (k = Ne(d), l[(g | 0) >> 2] = k, c[e + 12 * h + 102420 | 0] = 1) : (l[(g | 0) >> 2] = e + m | 0, c[e + 12 * h + 102420 | 0] = 0, l[k] = l[k] + d | 0);
    h = e + 102404 | 0;
    d = l[h >> 2] + d | 0;
    l[h >> 2] = d;
    e = e + 102408 | 0;
    h = l[e >> 2];
    l[e >> 2] = (h | 0) > (d | 0) ? h : d;
    l[f] = l[f] + 1 | 0;
    l[p + 4] = l[g >> 2];
    g = l[b];
    d = 12 * l[j] | 0;
    f = (g + 102796 | 0) >> 2;
    e = l[f];
    32 > (e | 0) ? h = e : (P(N.n | 0, 38, N.w | 0, N.D | 0), h = l[f]);
    e = g + 12 * h + 102412 | 0;
    l[(g + 12 * h + 102416 | 0) >> 2] = d;
    k = (g + 102400 | 0) >> 2;
    m = l[k];
    102400 < (m + d | 0) ? (k = Ne(d), l[(e | 0) >> 2] = k, c[g + 12 * h + 102420 | 0] = 1) : (l[(e | 0) >> 2] = g + m | 0, c[g + 12 * h + 102420 | 0] = 0, l[k] = l[k] + d | 0);
    h = g + 102404 | 0;
    d = l[h >> 2] + d | 0;
    l[h >> 2] = d;
    g = g + 102408 | 0;
    h = l[g >> 2];
    l[g >> 2] = (h | 0) > (d | 0) ? h : d;
    l[f] = l[f] + 1 | 0;
    l[p + 6] = l[e >> 2];
    b = l[b];
    e = 12 * l[j] | 0;
    j = (b + 102796 | 0) >> 2;
    f = l[j];
    32 > (f | 0) ? g = f : (P(N.n | 0, 38, N.w | 0, N.D | 0), g = l[j]);
    f = b + 12 * g + 102412 | 0;
    l[(b + 12 * g + 102416 | 0) >> 2] = e;
    d = (b + 102400 | 0) >> 2;
    h = l[d];
    102400 < (h + e | 0) ? (d = Ne(e), l[(f | 0) >> 2] = d, c[b + 12 * g + 102420 | 0] = 1) : (l[(f | 0) >> 2] = b + h | 0, c[b + 12 * g + 102420 | 0] = 0, l[d] = l[d] + e | 0);
    g = b + 102404 | 0;
    e = l[g >> 2] + e | 0;
    l[g >> 2] = e;
    b = b + 102408 | 0;
    g = l[b >> 2];
    l[b >> 2] = (g | 0) > (e | 0) ? g : e;
    l[j] = l[j] + 1 | 0;
    l[p + 5] = l[f >> 2]
}
function wp(b, d) {
    var e, f;
    e = b >> 2;
    var g = b | 0, h = b + 8 | 0;
    l[h >> 2] = 128;
    l[e + 1] = 0;
    var j = Ne(1024);
    l[e] = j;
    Oe(j, l[h >> 2] << 3);
    h = (b + 12 | 0) >> 2;
    for (j = h + 14; h < j; h++) {
        l[h] = 0
    }
    if (0 == (c[xp] & 1) << 24 >> 24) {
        j = 0;
        for (h = 1; !(14 > (j | 0) || P(N.e | 0, 73, N.Ha | 0, N.Ua | 0), (h | 0) > (l[sn + (j << 2) >> 2] | 0) && (j = j + 1 | 0), c[rn + h | 0] = j & 255, h = h + 1 | 0, 641 == (h | 0));) {
        }
        c[xp] = 1
    }
    l[e + 25617] = 0;
    l[e + 25618] = 0;
    l[e + 25619] = 0;
    l[e + 25716] = 0;
    fh(b + 102872 | 0);
    l[e + 25733] = 0;
    l[e + 25734] = 0;
    l[e + 25735] = yp;
    l[e + 25736] = zp;
    h = b + 102948 | 0;
    j = b + 102968 | 0;
    l[e + 25745] = 0;
    l[e + 25746] = 0;
    f = h >> 2;
    l[f] = 0;
    l[f + 1] = 0;
    l[f + 2] = 0;
    l[f + 3] = 0;
    l[f + 4] = 0;
    c[b + 102992 | 0] = 1;
    c[b + 102993 | 0] = 1;
    c[b + 102994 | 0] = 0;
    c[b + 102995 | 0] = 1;
    c[b + 102976 | 0] = 1;
    f = l[d + 4 >> 2];
    l[j >> 2] = l[d >> 2];
    l[j + 4 >> 2] = f;
    l[e + 25717] = 4;
    q[e + 25747] = 0;
    l[h >> 2] = g;
    e = (b + 102996 | 0) >> 2;
    l[e] = 0;
    l[e + 1] = 0;
    l[e + 2] = 0;
    l[e + 3] = 0;
    l[e + 4] = 0;
    l[e + 5] = 0;
    l[e + 6] = 0;
    l[e + 7] = 0
}
function Ap(b) {
    var d = b >> 2, e = b | 0, f = l[d + 25738];
    a:for (; 0 != (f | 0);) {
        for (var g = l[f + 96 >> 2], h = l[f + 100 >> 2]; ;) {
            if (0 == (h | 0)) {
                f = g;
                continue a
            }
            var j = l[h + 4 >> 2];
            l[h + 28 >> 2] = 0;
            fp(h, e);
            h = j
        }
    }
    Dh(l[d + 25726]);
    Dh(l[d + 25729]);
    Dh(l[d + 25719]);
    0 != (l[d + 25617] | 0) && P(N.n | 0, 32, N.R | 0, N.Va | 0);
    0 != (l[d + 25716] | 0) && P(N.n | 0, 33, N.R | 0, N.Ya | 0);
    d = b + 4 | 0;
    e = 0 < (l[d >> 2] | 0);
    b |= 0;
    f = l[b >> 2];
    a:do {
        if (e) {
            g = 0;
            for (h = f; ;) {
                if (Dh(l[h + (g << 3) + 4 >> 2]), g = g + 1 | 0, h = l[b >> 2], (g | 0) >= (l[d >> 2] | 0)) {
                    var k = h;
                    break a
                }
            }
        } else {
            k = f
        }
    } while (0);
    Dh(k)
}
function Bp(b, d) {
    var e, f, g, h;
    h = (b + 102960 | 0) >> 2;
    0 < (l[h] | 0) || P(N.t | 0, 133, N.tb | 0, N.Wf | 0);
    g = b + 102868 | 0;
    var j = l[g >> 2];
    0 == (j & 2 | 0) ? g = j : (P(N.t | 0, 134, N.tb | 0, N.qa | 0), g = l[g >> 2]);
    if (0 == (g & 2 | 0)) {
        g = (d + 108 | 0) >> 2;
        var j = l[g], k = 0 == (j | 0);
        a:do {
            if (!k) {
                for (var m = b + 102980 | 0, n = j; ;) {
                    var p = l[n + 12 >> 2], u = l[m >> 2];
                    0 == (u | 0) ? u = n + 4 | 0 : (n = n + 4 | 0, K[l[l[u >> 2] + 8 >> 2]](u, l[n >> 2]), u = n);
                    Cp(b, l[u >> 2]);
                    l[g] = p;
                    if (0 == (p | 0)) {
                        break a
                    }
                    n = p
                }
            }
        } while (0);
        l[g] = 0;
        g = d + 112 | 0;
        j = l[g >> 2];
        k = 0 == (j | 0);
        a:do {
            if (!k) {
                m = b + 102872 | 0;
                for (p = j; ;) {
                    u = l[p + 12 >> 2];
                    Ao(m, l[p + 4 >> 2]);
                    if (0 == (u | 0)) {
                        break a
                    }
                    p = u
                }
            }
        } while (0);
        l[g >> 2] = 0;
        g = (d + 100 | 0) >> 2;
        j = l[g];
        k = 0 == (j | 0);
        a:do {
            if (k) {
                e = d + 104 | 0
            } else {
                for (var m = b + 102980 | 0, p = b + 102912 | 0, u = b + 102904 | 0, n = b + 102900 | 0, r = b + 102872 | 0, w = b | 0, x = d + 104 | 0, y = j; ;) {
                    var A = o[y + 4 >> 2];
                    f = l[m >> 2];
                    if (0 != (f | 0)) {
                        K[l[l[f >> 2] + 12 >> 2]](f, y)
                    }
                    f = (y + 28 | 0) >> 2;
                    var C = 0 < (l[f] | 0);
                    b:do {
                        if (C) {
                            for (var z = y + 24 | 0, D = 0; ;) {
                                for (var E = l[z >> 2] + 28 * D + 24 | 0, G = l[E >> 2], H = l[p >> 2], F = 0; (F | 0) < (H | 0);) {
                                    var I = (F << 2) + l[u >> 2] | 0;
                                    if ((l[I >> 2] | 0) != (G | 0)) {
                                        F = F + 1 | 0
                                    } else {
                                        l[I >> 2] = -1;
                                        break
                                    }
                                }
                                l[n >> 2] = l[n >> 2] - 1 | 0;
                                Nk(r, G);
                                l[E >> 2] = -1;
                                D = D + 1 | 0;
                                if ((D | 0) >= (l[f] | 0)) {
                                    break b
                                }
                            }
                        }
                    } while (0);
                    l[f] = 0;
                    fp(y, w);
                    f = ed[rn + 44 | 0];
                    C = f & 255;
                    14 > (f & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0);
                    f = (C << 2) + b + 12 | 0;
                    l[y >> 2] = l[f >> 2];
                    l[f >> 2] = y;
                    l[g] = A;
                    l[x >> 2] = l[x >> 2] - 1 | 0;
                    if (0 == (A | 0)) {
                        e = x;
                        break a
                    }
                    y = A
                }
            }
        } while (0);
        l[g] = 0;
        l[e >> 2] = 0;
        g = d + 92 | 0;
        j = l[g >> 2];
        e = (d + 96 | 0) >> 2;
        0 != (j | 0) && (l[(j + 96 | 0) >> 2] = l[e]);
        j = l[e];
        0 != (j | 0) && (l[(j + 92 | 0) >> 2] = l[g >> 2]);
        g = b + 102952 | 0;
        (l[g >> 2] | 0) == (d | 0) && (l[g >> 2] = l[e]);
        l[h] = l[h] - 1 | 0;
        h = ed[rn + 152 | 0];
        e = h & 255;
        14 > (h & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0);
        h = (e << 2) + b + 12 | 0;
        l[d >> 2] = l[h >> 2];
        l[h >> 2] = d
    }
}
function Cp(b, d) {
    var e, f, g, h, j = b + 102868 | 0;
    e = l[j >> 2];
    0 == (e & 2 | 0) ? j = e : (P(N.t | 0, 274, N.ub | 0, N.qa | 0), j = l[j >> 2]);
    j = 0 == (j & 2 | 0);
    a:do {
        if (j) {
            e = c[d + 61 | 0] & 1;
            var k = d + 8 | 0;
            f = l[k >> 2];
            h = (d + 12 | 0) >> 2;
            0 != (f | 0) && (l[(f + 12 | 0) >> 2] = l[h]);
            f = l[h];
            0 != (f | 0) && (l[(f + 8 | 0) >> 2] = l[k >> 2]);
            k = b + 102956 | 0;
            (l[k >> 2] | 0) == (d | 0) && (l[k >> 2] = l[h]);
            h = l[d + 48 >> 2];
            k = l[d + 52 >> 2];
            f = h + 4 | 0;
            g = i[f >> 1];
            0 == (g & 2) << 16 >> 16 && (i[f >> 1] = g | 2, q[h + 144 >> 2] = 0);
            f = k + 4 | 0;
            g = i[f >> 1];
            0 == (g & 2) << 16 >> 16 && (i[f >> 1] = g | 2, q[k + 144 >> 2] = 0);
            var m = d + 16 | 0;
            g = (d + 24 | 0) >> 2;
            var n = l[g];
            f = (d + 28 | 0) >> 2;
            0 != (n | 0) && (l[(n + 12 | 0) >> 2] = l[f]);
            n = l[f];
            0 != (n | 0) && (l[(n + 8 | 0) >> 2] = l[g]);
            n = h + 108 | 0;
            (m | 0) == (l[n >> 2] | 0) && (l[n >> 2] = l[f]);
            l[g] = 0;
            l[f] = 0;
            m = d + 32 | 0;
            g = (d + 40 | 0) >> 2;
            n = l[g];
            f = (d + 44 | 0) >> 2;
            0 != (n | 0) && (l[(n + 12 | 0) >> 2] = l[f]);
            n = l[f];
            0 != (n | 0) && (l[(n + 8 | 0) >> 2] = l[g]);
            n = k + 108 | 0;
            (m | 0) == (l[n >> 2] | 0) && (l[n >> 2] = l[f]);
            l[g] = 0;
            l[f] = 0;
            f = d;
            m = b | 0;
            g = f >> 2;
            K[l[l[g] + 20 >> 2]](f);
            n = l[g + 1];
            if (3 == (n | 0)) {
                var n = ed[rn + 176 | 0], p = n & 255;
                14 > (n & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0);
                m = (p << 2) + m + 12 | 0;
                l[g] = l[m >> 2];
                l[m >> 2] = f
            } else {
                5 == (n | 0) ? (n = ed[rn + 168 | 0], p = n & 255, 14 > (n & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0), m = (p << 2) + m + 12 | 0, l[g] = l[m >> 2], l[m >> 2] = f) : 2 == (n | 0) ? (n = ed[rn + 256 | 0], p = n & 255, 14 > (n & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0), m = (p << 2) + m + 12 | 0, l[g] = l[m >> 2], l[m >> 2] = f) : 1 == (n | 0) ? (n = ed[rn + 228 | 0], p = n & 255, 14 > (n & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0), m = (p << 2) + m + 12 | 0, l[g] = l[m >> 2], l[m >> 2] = f) : 4 == (n | 0) ? (n = ed[rn + 196 | 0], p = n & 255, 14 > (n & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0), m = (p << 2) + m + 12 | 0, l[g] = l[m >> 2], l[m >> 2] = f) : 6 == (n | 0) ? (n = ed[rn + 276 | 0], p = n & 255, 14 > (n & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0), m = (p << 2) + m + 12 | 0, l[g] = l[m >> 2], l[m >> 2] = f) : 7 == (n | 0) ? (n = ed[rn + 224 | 0], p = n & 255, 14 > (n & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0), m = (p << 2) + m + 12 | 0, l[g] = l[m >> 2], l[m >> 2] = f) : 8 == (n | 0) ? (n = ed[rn + 208 | 0], p = n & 255, 14 > (n & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0), m = (p << 2) + m + 12 | 0, l[g] = l[m >> 2], l[m >> 2] = f) : 9 == (n | 0) ? (n = ed[rn + 180 | 0], p = n & 255, 14 > (n & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0), m = (p << 2) + m + 12 | 0, l[g] = l[m >> 2], l[m >> 2] = f) : 10 == (n | 0) ? (n = ed[rn + 168 | 0], p = n & 255, 14 > (n & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0), m = (p << 2) + m + 12 | 0, l[g] = l[m >> 2], l[m >> 2] = f) : P(N.m | 0, 166, N.ze | 0, N.l | 0)
            }
            f = (b + 102964 | 0) >> 2;
            g = l[f];
            0 < (g | 0) || (P(N.t | 0, 346, N.ub | 0, N.Hg | 0), g = l[f]);
            l[f] = g - 1 | 0;
            if (0 == e << 24 >> 24 && (e = l[k + 112 >> 2], 0 != (e | 0))) {
                for (e >>= 2; ;) {
                    (l[e] | 0) == (h | 0) && (k = l[e + 1] + 4 | 0, l[k >> 2] |= 8);
                    e = l[e + 3];
                    if (0 == (e | 0)) {
                        break a
                    }
                    e >>= 2
                }
            }
        }
    } while (0)
}
function Dp(b, d) {
    var e, f, g, h, j, k = b + 102868 | 0, m = l[k >> 2];
    if (0 == (m & 2 | 0)) {
        var n = m
    } else {
        P(N.t | 0, 214, N.Be | 0, N.qa | 0), n = l[k >> 2]
    }
    var p = 0 == (n & 2 | 0);
    a:do {
        if (p) {
            var u, r = d, w = b | 0, x = Ha, y = Ha, A = Ha, C = Ha, z = Ha, D = Ha, E = Ha, G = Ha, H = Ha, F = Ha, I = Ha, J = Ha, L = Ha, O = Ha, R = Ha, T = Ha, S = Ha, U = Ha, W = Ha, Q = Ha, $ = r >> 2, Q = (r | 0) >> 2, ea = l[Q];
            if (3 == (ea | 0)) {
                var sa = qn(w, 176), W = sa >> 2;
                if (0 == (sa | 0)) {
                    var Ba = 0
                } else {
                    l[sa >> 2] = Ep + 8 | 0;
                    var oa = r + 8 | 0, ga = r + 12 | 0;
                    (l[oa >> 2] | 0) == (l[ga >> 2] | 0) && P(N.m | 0, 173, N.p | 0, N.r | 0);
                    l[W + 1] = l[Q];
                    l[W + 2] = 0;
                    l[W + 3] = 0;
                    l[W + 12] = l[oa >> 2];
                    l[W + 13] = l[ga >> 2];
                    l[W + 14] = 0;
                    c[sa + 61 | 0] = c[r + 16 | 0] & 1;
                    c[sa + 60 | 0] = 0;
                    l[W + 16] = l[$ + 1];
                    U = (sa + 16 | 0) >> 2;
                    l[U] = 0;
                    l[U + 1] = 0;
                    l[U + 2] = 0;
                    l[U + 3] = 0;
                    l[U + 4] = 0;
                    l[U + 5] = 0;
                    l[U + 6] = 0;
                    l[U + 7] = 0;
                    l[sa >> 2] = Fp + 8 | 0;
                    var qa = sa + 88 | 0, la = r + 20 | 0, Ca = sa + 80 | 0, ia = la | 0, S = ia >> 2, ya = l[S], ta = la + 4 | 0, T = ta >> 2, Ia = l[T], na = Ca | 0, R = na >> 2;
                    l[R] = ya;
                    var Z = Ca + 4 | 0, O = Z >> 2;
                    l[O] = Ia;
                    var ba = r + 28 | 0, ca = ba | 0, L = ca >> 2, ma = l[L], ka = ba + 4 | 0, J = ka >> 2, aa = l[J], ra = qa | 0, I = ra >> 2;
                    l[I] = ma;
                    var ha = qa + 4 | 0, F = ha >> 2;
                    l[F] = aa;
                    q[W + 26] = q[$ + 9];
                    q[W + 17] = q[$ + 10];
                    q[W + 18] = q[$ + 11];
                    q[W + 25] = 0;
                    q[W + 24] = 0;
                    q[W + 19] = 0;
                    Ba = sa
                }
                var za = Ba | 0
            } else {
                if (5 == (ea | 0)) {
                    var X = qn(w, 168);
                    if (0 == (X | 0)) {
                        var ua = 0
                    } else {
                        Gp(X, r), ua = X
                    }
                    za = ua | 0
                } else {
                    if (2 == (ea | 0)) {
                        var da = qn(w, 256);
                        if (0 == (da | 0)) {
                            var fa = 0
                        } else {
                            Hp(da, r), fa = da
                        }
                        za = fa | 0
                    } else {
                        if (1 == (ea | 0)) {
                            var Aa = qn(w, 228), H = Aa >> 2;
                            if (0 == (Aa | 0)) {
                                var Qa = 0
                            } else {
                                l[Aa >> 2] = Ep + 8 | 0;
                                var pa = r + 8 | 0, cb = r + 12 | 0;
                                (l[pa >> 2] | 0) == (l[cb >> 2] | 0) && P(N.m | 0, 173, N.p | 0, N.r | 0);
                                l[H + 1] = l[Q];
                                l[H + 2] = 0;
                                l[H + 3] = 0;
                                l[H + 12] = l[pa >> 2];
                                l[H + 13] = l[cb >> 2];
                                l[H + 14] = 0;
                                c[Aa + 61 | 0] = c[r + 16 | 0] & 1;
                                c[Aa + 60 | 0] = 0;
                                l[H + 16] = l[$ + 1];
                                G = (Aa + 16 | 0) >> 2;
                                l[G] = 0;
                                l[G + 1] = 0;
                                l[G + 2] = 0;
                                l[G + 3] = 0;
                                l[G + 4] = 0;
                                l[G + 5] = 0;
                                l[G + 6] = 0;
                                l[G + 7] = 0;
                                l[Aa >> 2] = Ip + 8 | 0;
                                var Ra = Aa + 76 | 0, Ta = r + 20 | 0, $a = Aa + 68 | 0, ia = Ta | 0, S = ia >> 2, va = l[S], ta = Ta + 4 | 0, T = ta >> 2, Wa = l[T], na = $a | 0, R = na >> 2;
                                l[R] = va;
                                Z = $a + 4 | 0;
                                O = Z >> 2;
                                l[O] = Wa;
                                var fb = r + 28 | 0, ca = fb | 0, L = ca >> 2, gb = l[L], ka = fb + 4 | 0, J = ka >> 2, Xa = l[J], ra = Ra | 0, I = ra >> 2;
                                l[I] = gb;
                                ha = Ra + 4 | 0;
                                F = ha >> 2;
                                l[F] = Xa;
                                q[H + 29] = q[$ + 9];
                                var E = (Aa + 84 | 0) >> 2, Ua = r + 44 | 0;
                                l[E] = 0;
                                l[E + 1] = 0;
                                l[E + 2] = 0;
                                l[E + 3] = 0;
                                q[H + 30] = q[Ua >> 2];
                                q[H + 31] = q[$ + 12];
                                q[H + 26] = q[$ + 15];
                                q[H + 27] = q[$ + 14];
                                c[Aa + 112 | 0] = c[r + 40 | 0] & 1;
                                c[Aa + 100 | 0] = c[r + 52 | 0] & 1;
                                l[H + 56] = 0;
                                Qa = Aa
                            }
                            za = Qa | 0
                        } else {
                            if (4 == (ea | 0)) {
                                var Va = qn(w, 196);
                                if (0 == (Va | 0)) {
                                    var pb = 0
                                } else {
                                    Jp(Va, r), pb = Va
                                }
                                za = pb | 0
                            } else {
                                if (6 == (ea | 0)) {
                                    var nb = qn(w, 276);
                                    if (0 == (nb | 0)) {
                                        var La = 0
                                    } else {
                                        Kp(nb, r), La = nb
                                    }
                                    za = La | 0
                                } else {
                                    if (7 == (ea | 0)) {
                                        var qb = qn(w, 224);
                                        if (0 == (qb | 0)) {
                                            var bb = 0
                                        } else {
                                            Lp(qb, r), bb = qb
                                        }
                                        za = bb | 0
                                    } else {
                                        if (8 == (ea | 0)) {
                                            var Fa = qn(w, 208), D = Fa >> 2;
                                            if (0 == (Fa | 0)) {
                                                var Ma = 0
                                            } else {
                                                l[Fa >> 2] = Ep + 8 | 0;
                                                var wa = r + 8 | 0, hb = r + 12 | 0;
                                                (l[wa >> 2] | 0) == (l[hb >> 2] | 0) && P(N.m | 0, 173, N.p | 0, N.r | 0);
                                                l[D + 1] = l[Q];
                                                l[D + 2] = 0;
                                                l[D + 3] = 0;
                                                l[D + 12] = l[wa >> 2];
                                                l[D + 13] = l[hb >> 2];
                                                l[D + 14] = 0;
                                                c[Fa + 61 | 0] = c[r + 16 | 0] & 1;
                                                c[Fa + 60 | 0] = 0;
                                                l[D + 16] = l[$ + 1];
                                                z = (Fa + 16 | 0) >> 2;
                                                l[z] = 0;
                                                l[z + 1] = 0;
                                                l[z + 2] = 0;
                                                l[z + 3] = 0;
                                                l[z + 4] = 0;
                                                l[z + 5] = 0;
                                                l[z + 6] = 0;
                                                l[z + 7] = 0;
                                                l[Fa >> 2] = Mp + 8 | 0;
                                                var Ya = Fa + 88 | 0, Za = r + 20 | 0, Da = Fa + 80 | 0, ia = Za | 0, S = ia >> 2, Oa = l[S], ta = Za + 4 | 0, T = ta >> 2, ib = l[T], na = Da | 0, R = na >> 2;
                                                l[R] = Oa;
                                                Z = Da + 4 | 0;
                                                O = Z >> 2;
                                                l[O] = ib;
                                                var ab = r + 28 | 0, ca = ab | 0, L = ca >> 2, Ga = l[L], ka = ab + 4 | 0, J = ka >> 2, jb = l[J], ra = Ya | 0, I = ra >> 2;
                                                l[I] = Ga;
                                                ha = Ya + 4 | 0;
                                                F = ha >> 2;
                                                l[F] = jb;
                                                q[D + 24] = q[$ + 9];
                                                q[D + 17] = q[$ + 10];
                                                q[D + 18] = q[$ + 11];
                                                q[D + 26] = 0;
                                                q[D + 27] = 0;
                                                q[D + 28] = 0;
                                                Ma = Fa
                                            }
                                            za = Ma | 0
                                        } else {
                                            if (9 == (ea | 0)) {
                                                var Ea = qn(w, 180), C = Ea >> 2;
                                                if (0 == (Ea | 0)) {
                                                    var Pa = 0
                                                } else {
                                                    l[Ea >> 2] = Ep + 8 | 0;
                                                    var Ja = r + 8 | 0, db = r + 12 | 0;
                                                    (l[Ja >> 2] | 0) == (l[db >> 2] | 0) && P(N.m | 0, 173, N.p | 0, N.r | 0);
                                                    l[C + 1] = l[Q];
                                                    l[C + 2] = 0;
                                                    l[C + 3] = 0;
                                                    l[C + 12] = l[Ja >> 2];
                                                    l[C + 13] = l[db >> 2];
                                                    l[C + 14] = 0;
                                                    c[Ea + 61 | 0] = c[r + 16 | 0] & 1;
                                                    c[Ea + 60 | 0] = 0;
                                                    l[C + 16] = l[$ + 1];
                                                    A = (Ea + 16 | 0) >> 2;
                                                    l[A] = 0;
                                                    l[A + 1] = 0;
                                                    l[A + 2] = 0;
                                                    l[A + 3] = 0;
                                                    l[A + 4] = 0;
                                                    l[A + 5] = 0;
                                                    l[A + 6] = 0;
                                                    l[A + 7] = 0;
                                                    l[Ea >> 2] = Np + 8 | 0;
                                                    var xa = Ea + 76 | 0, Sa = r + 20 | 0, Ka = Ea + 68 | 0, ia = Sa | 0, S = ia >> 2, tb = l[S], ta = Sa + 4 | 0, T = ta >> 2, kb = l[T], na = Ka | 0, R = na >> 2;
                                                    l[R] = tb;
                                                    Z = Ka + 4 | 0;
                                                    O = Z >> 2;
                                                    l[O] = kb;
                                                    var ub = r + 28 | 0, ca = ub | 0, L = ca >> 2, rb = l[L], ka = ub + 4 | 0, J = ka >> 2, Bb = l[J], ra = xa | 0, I = ra >> 2;
                                                    l[I] = rb;
                                                    ha = xa + 4 | 0;
                                                    F = ha >> 2;
                                                    l[F] = Bb;
                                                    q[C + 21] = 0;
                                                    q[C + 22] = 0;
                                                    q[C + 23] = 0;
                                                    q[C + 24] = q[$ + 9];
                                                    q[C + 25] = q[$ + 10];
                                                    Pa = Ea
                                                }
                                                za = Pa | 0
                                            } else {
                                                if (10 == (ea | 0)) {
                                                    var lb = qn(w, 168), y = lb >> 2;
                                                    if (0 == (lb | 0)) {
                                                        var yb = 0
                                                    } else {
                                                        l[lb >> 2] = Ep + 8 | 0;
                                                        var xb = r + 8 | 0, Ib = r + 12 | 0;
                                                        (l[xb >> 2] | 0) == (l[Ib >> 2] | 0) && P(N.m | 0, 173, N.p | 0, N.r | 0);
                                                        l[y + 1] = l[Q];
                                                        l[y + 2] = 0;
                                                        l[y + 3] = 0;
                                                        l[y + 12] = l[xb >> 2];
                                                        l[y + 13] = l[Ib >> 2];
                                                        l[y + 14] = 0;
                                                        c[lb + 61 | 0] = c[r + 16 | 0] & 1;
                                                        c[lb + 60 | 0] = 0;
                                                        l[y + 16] = l[$ + 1];
                                                        x = (lb + 16 | 0) >> 2;
                                                        l[x] = 0;
                                                        l[x + 1] = 0;
                                                        l[x + 2] = 0;
                                                        l[x + 3] = 0;
                                                        l[x + 4] = 0;
                                                        l[x + 5] = 0;
                                                        l[x + 6] = 0;
                                                        l[x + 7] = 0;
                                                        l[lb >> 2] = Op + 8 | 0;
                                                        var wb = lb + 76 | 0, vb = r + 20 | 0, zb = lb + 68 | 0, ia = vb | 0, S = ia >> 2, Eb = l[S], ta = vb + 4 | 0, T = ta >> 2, Cb = l[T], na = zb | 0, R = na >> 2;
                                                        l[R] = Eb;
                                                        Z = zb + 4 | 0;
                                                        O = Z >> 2;
                                                        l[O] = Cb;
                                                        var eb = r + 28 | 0, ca = eb | 0, L = ca >> 2, sb = l[L], ka = eb + 4 | 0, J = ka >> 2, ob = l[J], ra = wb | 0, I = ra >> 2;
                                                        l[I] = sb;
                                                        ha = wb + 4 | 0;
                                                        F = ha >> 2;
                                                        l[F] = ob;
                                                        q[y + 21] = q[$ + 9];
                                                        q[y + 40] = 0;
                                                        q[y + 23] = 0;
                                                        l[y + 41] = 0;
                                                        q[y + 22] = 0;
                                                        yb = lb
                                                    }
                                                    za = yb | 0
                                                } else {
                                                    P(N.m | 0, 113, N.ye | 0, N.l | 0), za = 0
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            u = za;
            j = u >> 2;
            l[j + 2] = 0;
            h = (b + 102956 | 0) >> 2;
            l[j + 3] = l[h];
            var Db = l[h];
            0 != (Db | 0) && (l[(Db + 8 | 0) >> 2] = u);
            l[h] = u;
            var Jb = b + 102964 | 0;
            l[Jb >> 2] = l[Jb >> 2] + 1 | 0;
            var Rb = u + 16 | 0;
            l[j + 5] = u;
            g = (u + 52 | 0) >> 2;
            l[Rb >> 2] = l[g];
            l[j + 6] = 0;
            f = (u + 48 | 0) >> 2;
            var Nb = l[f], Ob = Nb + 108 | 0;
            l[j + 7] = l[Ob >> 2];
            var Lb = l[Ob >> 2];
            if (0 == (Lb | 0)) {
                var Pb = Nb
            } else {
                l[(Lb + 8 | 0) >> 2] = Rb, Pb = l[f]
            }
            l[Pb + 108 >> 2] = Rb;
            var Mb = u + 32 | 0;
            l[j + 9] = u;
            l[Mb >> 2] = l[f];
            l[j + 10] = 0;
            var Yb = l[g], Zb = Yb + 108 | 0;
            l[j + 11] = l[Zb >> 2];
            var fc = l[Zb >> 2];
            if (0 == (fc | 0)) {
                var Ub = Yb
            } else {
                l[(fc + 8 | 0) >> 2] = Mb, Ub = l[g]
            }
            l[Ub + 108 >> 2] = Mb;
            var jc = l[d + 8 >> 2];
            if (0 != (c[d + 16 | 0] & 1) << 24 >> 24) {
                var Qb = u
            } else {
                var mb = l[l[d + 12 >> 2] + 112 >> 2];
                if (0 == (mb | 0)) {
                    Qb = u
                } else {
                    var cc = mb;
                    for (e = cc >> 2; ;) {
                        if ((l[e] | 0) == (jc | 0)) {
                            var Fb = l[e + 1] + 4 | 0;
                            l[Fb >> 2] |= 8
                        }
                        var hc = l[e + 3];
                        if (0 == (hc | 0)) {
                            Qb = u;
                            break a
                        }
                        cc = hc;
                        e = cc >> 2
                    }
                }
            }
        } else {
            Qb = 0
        }
    } while (0);
    return Qb
}
function Pp(b, d, e, f) {
    var g, h, j, k, m = b >> 2, n = a;
    a += 24;
    var p;
    k = n >> 2;
    j = (b + 102868 | 0) >> 2;
    var u = l[j];
    if (0 == (u & 1 | 0)) {
        var r = u
    } else {
        var w = b + 102872 | 0;
        jp(w | 0, w);
        var x = l[j] & -2, r = l[j] = x
    }
    l[j] = r | 2;
    h = (n | 0) >> 2;
    q[h] = d;
    l[k + 3] = e;
    l[k + 4] = f;
    var y = 0 < d;
    q[k + 1] = y ? 1 / d : 0;
    var A = b + 102988 | 0;
    q[k + 2] = q[A >> 2] * d;
    c[n + 20 | 0] = c[b + 102992 | 0] & 1;
    pp(b + 102872 | 0);
    q[m + 25750] = 0;
    if (!(0 == (c[b + 102995 | 0] & 1) << 24 >> 24 | y ^ 1)) {
        var C, z, D, E, G, H, F, I, J, L, O, R, T, S, U = b >> 2, W = a;
        a += 100;
        var Q = W + 16;
        S = Q >> 2;
        var $ = W + 68;
        T = (b + 103008 | 0) >> 2;
        q[T] = 0;
        R = (b + 103012 | 0) >> 2;
        q[R] = 0;
        O = (b + 103016 | 0) >> 2;
        q[O] = 0;
        var ea = b + 102960 | 0, sa = b + 102872 | 0, Ba = b + 68 | 0;
        vp(Q, l[ea >> 2], l[U + 25734], l[U + 25741], Ba, l[U + 25736]);
        var oa = b + 102952 | 0, ga = l[oa >> 2], qa = 0 == (ga | 0);
        a:do {
            if (!qa) {
                for (var la = ga; ;) {
                    var Ca = la + 4 | 0;
                    i[Ca >> 1] &= -2;
                    var ia = l[la + 96 >> 2];
                    if (0 == (ia | 0)) {
                        break a
                    }
                    la = ia
                }
            }
        } while (0);
        var ya = l[U + 25733], ta = 0 == (ya | 0);
        a:do {
            if (!ta) {
                for (var Ia = ya; ;) {
                    var na = Ia + 4 | 0;
                    l[na >> 2] &= -2;
                    var Z = l[Ia + 12 >> 2];
                    if (0 == (Z | 0)) {
                        break a
                    }
                    Ia = Z
                }
            }
        } while (0);
        var ba = l[U + 25739], ca = 0 == (ba | 0);
        a:do {
            if (!ca) {
                for (var ma = ba; ;) {
                    c[ma + 60 | 0] = 0;
                    var ka = l[ma + 12 >> 2];
                    if (0 == (ka | 0)) {
                        break a
                    }
                    ma = ka
                }
            }
        } while (0);
        var aa = l[ea >> 2], ra = aa << 2;
        L = (b + 102864 | 0) >> 2;
        var ha = l[L];
        if (32 > (ha | 0)) {
            var za = ha
        } else {
            P(N.n | 0, 38, N.w | 0, N.D | 0), za = l[L]
        }
        J = (b + 12 * za + 102480 | 0) >> 2;
        l[U + (3 * za | 0) + 25621] = ra;
        I = (b + 102468 | 0) >> 2;
        var X = l[I];
        if (102400 < (X + ra | 0)) {
            var ua = Ne(ra);
            l[J] = ua;
            c[b + 12 * za + 102488 | 0] = 1
        } else {
            l[J] = b + (X + 68) | 0, c[b + 12 * za + 102488 | 0] = 0, l[I] = l[I] + ra | 0
        }
        var da = b + 102472 | 0, fa = l[da >> 2] + ra | 0;
        l[da >> 2] = fa;
        var Aa = b + 102476 | 0, Qa = l[Aa >> 2];
        l[Aa >> 2] = (Qa | 0) > (fa | 0) ? Qa : fa;
        l[L] = l[L] + 1 | 0;
        var pa = l[J];
        F = (Q + 28 | 0) >> 2;
        var cb = Q + 36 | 0, Ra = Q + 32 | 0, Ta = Q + 40 | 0;
        H = (Q + 8 | 0) >> 2;
        for (var $a = Q + 44 | 0, va = Q + 12 | 0, Wa = Q + 48 | 0, fb = Q + 16 | 0, gb = b + 102968 | 0, Xa = b + 102976 | 0, Ua = $ + 12 | 0, Va = $ + 16 | 0, pb = $ + 20 | 0, nb = oa; ;) {
            var La = l[nb >> 2];
            if (0 == (La | 0)) {
                break
            }
            G = (La + 4 | 0) >> 1;
            var qb = 34 == (i[G] & 35) << 16 >> 16;
            a:do {
                if (qb && 0 != (l[La >> 2] | 0)) {
                    l[F] = 0;
                    l[cb >> 2] = 0;
                    l[Ra >> 2] = 0;
                    l[pa >> 2] = La;
                    i[G] |= 1;
                    var bb = l[Ta >> 2], Fa = l[H], Ma = l[$a >> 2], wa = l[va >> 2], hb = l[Wa >> 2], Ya = l[fb >> 2], Za = 1, Da = 0, Oa = 0, ib = 0;
                    b:for (; ;) {
                        for (var ab = Za, Ga = Da; ;) {
                            if (0 >= (ab | 0)) {
                                break b
                            }
                            var jb = ab - 1 | 0, Ea = l[pa + (jb << 2) >> 2];
                            E = (Ea + 4 | 0) >> 1;
                            0 == (i[E] & 32) << 16 >> 16 && P(N.t | 0, 445, N.Ia | 0, N.Xg | 0);
                            (Ga | 0) < (bb | 0) || P(N.J | 0, 54, N.oa | 0, N.Ba | 0);
                            l[(Ea + 8 | 0) >> 2] = Ga;
                            l[((Ga << 2) + Fa | 0) >> 2] = Ea;
                            var Pa = Ga + 1 | 0;
                            l[F] = Pa;
                            var Ja = i[E];
                            0 == (Ja & 2) << 16 >> 16 && (i[E] = Ja | 2, q[Ea + 144 >> 2] = 0);
                            if (0 != (l[Ea >> 2] | 0)) {
                                break
                            }
                            ab = jb;
                            Ga = Pa
                        }
                        for (var db = Ea + 112 | 0, xa = jb, Sa = ib; ;) {
                            var Ka = l[db >> 2];
                            if (0 == (Ka | 0)) {
                                break
                            }
                            var tb = l[Ka + 4 >> 2];
                            D = (tb + 4 | 0) >> 2;
                            if (6 == (l[D] & 7 | 0)) {
                                if (0 != (c[l[tb + 48 >> 2] + 38 | 0] & 1) << 24 >> 24) {
                                    var kb = xa, ub = Sa
                                } else {
                                    if (0 != (c[l[tb + 52 >> 2] + 38 | 0] & 1) << 24 >> 24) {
                                        kb = xa, ub = Sa
                                    } else {
                                        (Sa | 0) < (Ma | 0) || P(N.J | 0, 62, N.Ja | 0, N.Xa | 0);
                                        var rb = Sa + 1 | 0;
                                        l[cb >> 2] = rb;
                                        l[((Sa << 2) + wa | 0) >> 2] = tb;
                                        l[D] |= 1;
                                        var Bb = l[Ka >> 2];
                                        z = (Bb + 4 | 0) >> 1;
                                        0 != (i[z] & 1) << 16 >> 16 ? kb = xa : ((xa | 0) < (aa | 0) || P(N.t | 0, 495, N.Ia | 0, N.Tb | 0), l[((xa << 2) + pa | 0) >> 2] = Bb, i[z] |= 1, kb = xa + 1 | 0);
                                        ub = rb
                                    }
                                }
                            } else {
                                kb = xa, ub = Sa
                            }
                            db = Ka + 12 | 0;
                            xa = kb;
                            Sa = ub
                        }
                        for (var lb = Ea + 108 | 0, yb = xa, xb = Oa; ;) {
                            var Ib = l[lb >> 2];
                            if (0 == (Ib | 0)) {
                                Za = yb;
                                Da = Pa;
                                Oa = xb;
                                ib = Sa;
                                continue b
                            }
                            var wb = Ib + 4 | 0, vb = l[wb >> 2];
                            if (0 == (c[vb + 60 | 0] & 1) << 24 >> 24) {
                                var zb = l[Ib >> 2];
                                C = (zb + 4 | 0) >> 1;
                                if (0 == (i[C] & 32) << 16 >> 16) {
                                    var Eb = yb, Cb = xb
                                } else {
                                    (xb | 0) < (hb | 0) || P(N.J | 0, 68, N.De | 0, N.rg | 0);
                                    var eb = xb + 1 | 0;
                                    l[Ra >> 2] = eb;
                                    l[((xb << 2) + Ya | 0) >> 2] = vb;
                                    c[l[wb >> 2] + 60 | 0] = 1;
                                    0 != (i[C] & 1) << 16 >> 16 ? Eb = yb : ((yb | 0) < (aa | 0) || P(N.t | 0, 524, N.Ia | 0, N.Tb | 0), l[((yb << 2) + pa | 0) >> 2] = zb, i[C] |= 1, Eb = yb + 1 | 0);
                                    Cb = eb
                                }
                            } else {
                                Eb = yb, Cb = xb
                            }
                            lb = Ib + 12 | 0;
                            yb = Eb;
                            xb = Cb
                        }
                    }
                    var sb = Q, ob = $, Db = n, Jb = gb, Rb = 0 != (c[Xa] & 1) << 24 >> 24, Nb = Ha, Ob = Ha, Lb = Ha, Pb = Ha, Mb = Ha, Yb = Ha, Zb = Ha, fc = Ha, Ub = Ha, jc = Ha, Qb = Ha, mb = Ha, cc = Ha, Fb = Ha, hc = Ha, wc = Ha, pc = a;
                    a += 148;
                    var qc = pc + 20, $c = pc + 52, wc = $c >> 2, Fc = pc + 96, hc = Fc >> 2, sc = q[Db >> 2], Fb = (sb + 28 | 0) >> 2, kd = 0 < (l[Fb] | 0);
                    b:do {
                        if (kd) {
                            for (var wd = sb + 8 | 0, Mc = Jb | 0, $b = Jb + 4 | 0, ac = sb + 20 | 0, oc = sb + 24 | 0, tc = 0; ;) {
                                var Oc = l[l[wd >> 2] + (tc << 2) >> 2], cc = Oc >> 2, ld = Oc + 44 | 0, Wc = q[ld >> 2], ad = q[cc + 12], Xc = q[cc + 14], Cc = Oc + 64 | 0, fd = Cc | 0, md = Cc + 4 | 0, nd = l[md >> 2], Pc = (t[0] = l[fd >> 2], M[0]), gd = (t[0] = nd, M[0]), od = q[cc + 18], pd = ld, Pd = Oc + 36 | 0, Xd = l[pd + 4 >> 2];
                                l[(Pd | 0) >> 2] = l[pd >> 2];
                                l[(Pd + 4 | 0) >> 2] = Xd;
                                q[cc + 13] = Xc;
                                if (2 == (l[cc] | 0)) {
                                    var qd = q[cc + 35], Qd = q[cc + 30], Qc = 1 - sc * q[cc + 33], Jc = 1 > Qc ? Qc : 1, Kc = 0 > Jc ? 0 : Jc, gc = 1 - sc * q[cc + 34], hd = 1 > gc ? gc : 1, xd = (od + sc * q[cc + 32] * q[cc + 21]) * (0 > hd ? 0 : hd), bd = (Pc + (q[Mc >> 2] * qd + q[cc + 19] * Qd) * sc) * Kc, rd = (gd + (q[$b >> 2] * qd + q[cc + 20] * Qd) * sc) * Kc
                                } else {
                                    xd = od, bd = Pc, rd = gd
                                }
                                var ye = l[ac >> 2];
                                q[(ye >> 2) + (3 * tc | 0)] = Wc;
                                q[(ye + 4 >> 2) + (3 * tc | 0)] = ad;
                                q[(l[ac >> 2] + 8 >> 2) + (3 * tc | 0)] = Xc;
                                var Yd = l[oc >> 2] + 12 * tc | 0, Tc = (M[0] = bd, t[0]), xc = (M[0] = rd, t[0]) | 0;
                                l[(Yd | 0) >> 2] = 0 | Tc;
                                l[(Yd + 4 | 0) >> 2] = xc;
                                q[(l[oc >> 2] + 8 >> 2) + (3 * tc | 0)] = xd;
                                var bc = tc + 1 | 0;
                                if ((bc | 0) >= (l[Fb] | 0)) {
                                    var Ed = ac, mb = Ed >> 2, yc = oc, Qb = yc >> 2;
                                    break b
                                }
                                tc = bc
                            }
                        } else {
                            Ed = sb + 20 | 0, mb = Ed >> 2, yc = sb + 24 | 0, Qb = yc >> 2
                        }
                    } while (0);
                    jc = qc >> 2;
                    Ub = Db >> 2;
                    l[jc] = l[Ub];
                    l[jc + 1] = l[Ub + 1];
                    l[jc + 2] = l[Ub + 2];
                    l[jc + 3] = l[Ub + 3];
                    l[jc + 4] = l[Ub + 4];
                    l[jc + 5] = l[Ub + 5];
                    var Ac = l[mb];
                    l[qc + 24 >> 2] = Ac;
                    var Zd = l[Qb];
                    l[qc + 28 >> 2] = Zd;
                    fc = $c >> 2;
                    l[fc] = l[Ub];
                    l[fc + 1] = l[Ub + 1];
                    l[fc + 2] = l[Ub + 2];
                    l[fc + 3] = l[Ub + 3];
                    l[fc + 4] = l[Ub + 4];
                    l[fc + 5] = l[Ub + 5];
                    var $d = sb + 12 | 0;
                    l[wc + 6] = l[$d >> 2];
                    Zb = (sb + 36 | 0) >> 2;
                    l[wc + 7] = l[Zb];
                    l[wc + 8] = Ac;
                    l[wc + 9] = Zd;
                    l[wc + 10] = l[sb >> 2];
                    Qp(Fc, $c);
                    Rp(Fc);
                    if (0 != (c[Db + 20 | 0] & 1) << 24 >> 24) {
                        var cd = Fc, zc = Ha, kc = Ha, Rd = cd + 48 | 0, Gc = 0 < (l[Rd >> 2] | 0);
                        b:do {
                            if (Gc) {
                                for (var Rc = cd + 40 | 0, kc = (cd + 28 | 0) >> 2, Nc = 0; ;) {
                                    var ne = l[Rc >> 2], zc = ne >> 2, Sd = l[zc + (38 * Nc | 0) + 28], Td = l[zc + (38 * Nc | 0) + 29], Ud = q[zc + (38 * Nc | 0) + 30], xf = q[zc + (38 * Nc | 0) + 32], Fd = q[zc + (38 * Nc | 0) + 31], oe = q[zc + (38 * Nc | 0) + 33], He = l[zc + (38 * Nc | 0) + 36], ae = l[kc], Hc = ae + 12 * Sd | 0, dd = l[Hc + 4 >> 2], be = (t[0] = l[Hc >> 2], M[0]), pe = (t[0] = dd, M[0]), Uc = q[(ae + 8 >> 2) + (3 * Sd | 0)], lc = ae + 12 * Td | 0, Gd = l[lc + 4 >> 2], Hd = (t[0] = l[lc >> 2], M[0]), Re = (t[0] = Gd, M[0]), Id = q[(ae + 8 >> 2) + (3 * Td | 0)], Jd = ne + 152 * Nc + 72 | 0, qe = l[Jd + 4 >> 2], re = (t[0] = l[Jd >> 2], M[0]), Kd = (t[0] = qe, M[0]), Se = -1 * re, Rf = 0 < (He | 0);
                                    c:do {
                                        if (Rf) {
                                            for (var sd = Re, Vc = Hd, Te = pe, Ue = be, ce = Uc, Yc = Id, yd = 0; ;) {
                                                var $e = q[zc + (38 * Nc | 0) + (9 * yd | 0) + 4], ze = q[zc + (38 * Nc | 0) + (9 * yd | 0) + 5], Zc = re * $e + Kd * ze, Ld = Kd * $e + Se * ze, Md = ce - xf * (q[zc + (38 * Nc | 0) + (9 * yd | 0)] * Ld - q[zc + (38 * Nc | 0) + (9 * yd | 0) + 1] * Zc), de = Ue - Zc * Ud, zd = Te - Ld * Ud, ee = Yc + oe * (q[zc + (38 * Nc | 0) + (9 * yd | 0) + 2] * Ld - q[zc + (38 * Nc | 0) + (9 * yd | 0) + 3] * Zc), yf = Vc + Zc * Fd, af = sd + Ld * Fd, Ie = yd + 1 | 0;
                                                if ((Ie | 0) == (He | 0)) {
                                                    var zf = af, jf = yf, bf = zd, Sf = de, kf = Md, Ae = ee;
                                                    break c
                                                }
                                                sd = af;
                                                Vc = yf;
                                                Te = zd;
                                                Ue = de;
                                                ce = Md;
                                                Yc = ee;
                                                yd = Ie
                                            }
                                        } else {
                                            zf = Re, jf = Hd, bf = pe, Sf = be, kf = Uc, Ae = Id
                                        }
                                    } while (0);
                                    var Ad = (M[0] = Sf, t[0]), Af = (M[0] = bf, t[0]) | 0;
                                    l[(Hc | 0) >> 2] = 0 | Ad;
                                    l[(Hc + 4 | 0) >> 2] = Af;
                                    q[(l[kc] + 8 >> 2) + (3 * Sd | 0)] = kf;
                                    var Tf = l[kc] + 12 * Td | 0, Fg = (M[0] = jf, t[0]), Gg = (M[0] = zf, t[0]) | 0;
                                    l[(Tf | 0) >> 2] = 0 | Fg;
                                    l[(Tf + 4 | 0) >> 2] = Gg;
                                    q[(l[kc] + 8 >> 2) + (3 * Td | 0)] = Ae;
                                    var mg = Nc + 1 | 0;
                                    if ((mg | 0) >= (l[Rd >> 2] | 0)) {
                                        break b
                                    }
                                    Nc = mg
                                }
                            }
                        } while (0)
                    }
                    for (var Yb = (sb + 32 | 0) >> 2, Mb = (sb + 16 | 0) >> 2, ng = 0; (ng | 0) < (l[Yb] | 0);) {
                        var og = l[l[Mb] + (ng << 2) >> 2];
                        K[l[l[og >> 2] + 28 >> 2]](og, qc);
                        ng = ng + 1 | 0
                    }
                    q[ob + 12 >> 2] = 0;
                    for (var Bf = Db + 12 | 0, Uf = 0; (Uf | 0) < (l[Bf >> 2] | 0);) {
                        for (var Vf = 0; (Vf | 0) < (l[Yb] | 0);) {
                            var Hg = l[l[Mb] + (Vf << 2) >> 2];
                            K[l[l[Hg >> 2] + 32 >> 2]](Hg, qc);
                            Vf = Vf + 1 | 0
                        }
                        Sp(Fc);
                        Uf = Uf + 1 | 0
                    }
                    var Jh = l[hc + 12], Ig = 0 < (Jh | 0);
                    b:do {
                        if (Ig) {
                            for (var Fj = l[hc + 10], Pb = Fj >> 2, Ji = l[hc + 11], pg = 0; ;) {
                                var Kh = l[Ji + (l[Pb + (38 * pg | 0) + 37] << 2) >> 2], Wf = Fj + 152 * pg + 144 | 0, Lh = 0 < (l[Wf >> 2] | 0);
                                c:do {
                                    if (Lh) {
                                        for (var lf = 0; ;) {
                                            q[(Kh + 72 >> 2) + (5 * lf | 0)] = q[Pb + (38 * pg | 0) + (9 * lf | 0) + 4];
                                            q[(Kh + 76 >> 2) + (5 * lf | 0)] = q[Pb + (38 * pg | 0) + (9 * lf | 0) + 5];
                                            var qg = lf + 1 | 0;
                                            if ((qg | 0) >= (l[Wf >> 2] | 0)) {
                                                break c
                                            }
                                            lf = qg
                                        }
                                    }
                                } while (0);
                                var jh = pg + 1 | 0;
                                if ((jh | 0) >= (Jh | 0)) {
                                    break b
                                }
                                pg = jh
                            }
                        }
                    } while (0);
                    q[ob + 16 >> 2] = 0;
                    var Mh = 0 < (l[Fb] | 0);
                    b:do {
                        if (Mh) {
                            for (var Be = 0; ;) {
                                var rg = l[mb], se = rg + 12 * Be | 0, Jg = l[se + 4 >> 2], fe = (t[0] = l[se >> 2], M[0]), te = (t[0] = Jg, M[0]), ue = q[(rg + 8 >> 2) + (3 * Be | 0)], ge = l[Qb], mf = ge + 12 * Be | 0, Ki = l[mf + 4 >> 2], Kg = (t[0] = l[mf >> 2], M[0]), sg = (t[0] = Ki, M[0]), kh = q[(ge + 8 >> 2) + (3 * Be | 0)], Nh = Kg * sc, tg = sg * sc, Oh = Nh * Nh + tg * tg;
                                if (4 < Oh) {
                                    var Ph = 2 / Fh(Oh), Lg = Kg * Ph, Mg = sg * Ph
                                } else {
                                    Lg = Kg, Mg = sg
                                }
                                var Ic = sc * kh, uc = 2.4674012660980225 < Ic * Ic ? kh * (1.5707963705062866 / (0 < Ic ? Ic : -Ic)) : kh, Li = te + Mg * sc, Qh = ue + sc * uc, Ng = (M[0] = fe + Lg * sc, t[0]), Og = (M[0] = Li, t[0]) | 0;
                                l[(se | 0) >> 2] = 0 | Ng;
                                l[(se + 4 | 0) >> 2] = Og;
                                q[(l[mb] + 8 >> 2) + (3 * Be | 0)] = Qh;
                                var Pg = l[Qb] + 12 * Be | 0, Mi = (M[0] = Lg, t[0]), Rh = (M[0] = Mg, t[0]) | 0;
                                l[(Pg | 0) >> 2] = 0 | Mi;
                                l[(Pg + 4 | 0) >> 2] = Rh;
                                q[(l[Qb] + 8 >> 2) + (3 * Be | 0)] = uc;
                                var Qg = Be + 1 | 0;
                                if ((Qg | 0) >= (l[Fb] | 0)) {
                                    break b
                                }
                                Be = Qg
                            }
                        }
                    } while (0);
                    for (var Sh = Db + 16 | 0, lh = 0; ;) {
                        if ((lh | 0) >= (l[Sh >> 2] | 0)) {
                            var Th = 1;
                            break
                        }
                        var Ni, nf = Fc, he = Ha, Bd = Ha, cf = a;
                        a += 52;
                        var ug = cf + 16, Ce = cf + 32, Cf = nf + 48 | 0, td = 0 < (l[Cf >> 2] | 0);
                        b:do {
                            if (td) {
                                for (var Rg = nf + 36 | 0, Bd = (nf + 24 | 0) >> 2, Gj = cf + 8 | 0, Uh = cf + 12 | 0, Oi = ug + 8 | 0, vg = ug + 12 | 0, Vh = cf, Wh = ug, Xh = Ce, Yh = Ce + 8 | 0, Hj = Ce + 16 | 0, Je = 0, Xf = 0; ;) {
                                    var Yf = l[Rg >> 2], he = Yf >> 2, Zh = Yf + 88 * Je | 0, Sg = l[he + (22 * Je | 0) + 8], mh = l[he + (22 * Je | 0) + 9], Df = Yf + 88 * Je + 48 | 0, $h = l[Df + 4 >> 2], Tg = (t[0] = l[Df >> 2], M[0]), ai = (t[0] = $h, M[0]), wg = q[he + (22 * Je | 0) + 10], Pi = q[he + (22 * Je | 0) + 16], df = Yf + 88 * Je + 56 | 0, nh = l[df + 4 >> 2], oh = (t[0] = l[df >> 2], M[0]), ph = (t[0] = nh, M[0]), Zf = q[he + (22 * Je | 0) + 11], Ve = q[he + (22 * Je | 0) + 17], of = l[he + (22 * Je | 0) + 21], Ug = l[Bd], bi = Ug + 12 * Sg | 0, Vg = l[bi + 4 >> 2], Wg = (t[0] = l[bi >> 2], M[0]), We = (t[0] = Vg, M[0]), Qi = q[(Ug + 8 >> 2) + (3 * Sg | 0)], ef = Ug + 12 * mh | 0, Ij = l[ef + 4 >> 2], $f = (t[0] = l[ef >> 2], M[0]), Ef = (t[0] = Ij, M[0]), qh = q[(Ug + 8 >> 2) + (3 * mh | 0)];
                                    if (0 < (of | 0)) {
                                        for (var ci = wg + Zf, ff = Ef, pf = $f, qf = We, xg = Wg, yg = Qi, Ff = qh, Xg = Xf, Yg = 0; ;) {
                                            var ie = mm(yg);
                                            q[Gj >> 2] = ie;
                                            var Gf = nm(yg);
                                            q[Uh >> 2] = Gf;
                                            var Hf = mm(Ff);
                                            q[Oi >> 2] = Hf;
                                            var rh = nm(Ff);
                                            q[vg >> 2] = rh;
                                            var Ri = qf - (ie * Tg + Gf * ai), Si = (M[0] = xg - (Gf * Tg - ie * ai), t[0]), Jj = (M[0] = Ri, t[0]) | 0;
                                            l[Vh >> 2] = 0 | Si;
                                            l[Vh + 4 >> 2] = Jj;
                                            var di = ff - (Hf * oh + rh * ph), ei = (M[0] = pf - (rh * oh - Hf * ph), t[0]), Qk = (M[0] = di, t[0]) | 0;
                                            l[Wh >> 2] = 0 | ei;
                                            l[Wh + 4 >> 2] = Qk;
                                            Tp(Ce, Zh, cf, ug, Yg);
                                            var zn = l[Xh + 4 >> 2], Kj = (t[0] = l[Xh >> 2], M[0]), Lj = (t[0] = zn, M[0]), Ti = l[Yh + 4 >> 2], Ui = (t[0] = l[Yh >> 2], M[0]), Rk = (t[0] = Ti, M[0]), Ke = q[Hj >> 2], Mj = Ui - xg, fi = Rk - qf, Sk = Ui - pf, Vi = Rk - ff, Tk = Xg < Ke ? Xg : Ke, Wi = .20000000298023224 * (Ke + .004999999888241291), Nj = 0 > Wi ? Wi : 0, Oj = Mj * Lj - fi * Kj, Pj = Sk * Lj - Vi * Kj, ag = ci + Pi * Oj * Oj + Ve * Pj * Pj, gi = 0 < ag ? -(-.20000000298023224 > Nj ? -.20000000298023224 : Nj) / ag : 0, If = Kj * gi, Xi = Lj * gi, Uk = xg - If * wg, Qj = qf - Xi * wg, Vk = yg - Pi * (Mj * Xi - fi * If), Wk = pf + If * Zf, Yi = ff + Xi * Zf, hi = Ff + Ve * (Sk * Xi - Vi * If), Rj = Yg + 1 | 0;
                                            if ((Rj | 0) == (of | 0)) {
                                                break
                                            }
                                            ff = Yi;
                                            pf = Wk;
                                            qf = Qj;
                                            xg = Uk;
                                            yg = Vk;
                                            Ff = hi;
                                            Xg = Tk;
                                            Yg = Rj
                                        }
                                        var Sj = Yi, Tj = Wk, Zg = Qj, Xk = Uk, Zi = Vk, Yk = hi, Zk = Tk, $i = l[Bd]
                                    } else {
                                        Sj = Ef, Tj = $f, Zg = We, Xk = Wg, Zi = Qi, Yk = qh, Zk = Xf, $i = Ug
                                    }
                                    var Uj = $i + 12 * Sg | 0, ii = (M[0] = Xk, t[0]), $k = (M[0] = Zg, t[0]) | 0;
                                    l[(Uj | 0) >> 2] = 0 | ii;
                                    l[(Uj + 4 | 0) >> 2] = $k;
                                    q[(l[Bd] + 8 >> 2) + (3 * Sg | 0)] = Zi;
                                    var aj = l[Bd] + 12 * mh | 0, al = (M[0] = Tj, t[0]), bj = (M[0] = Sj, t[0]) | 0;
                                    l[(aj | 0) >> 2] = 0 | al;
                                    l[(aj + 4 | 0) >> 2] = bj;
                                    q[(l[Bd] + 8 >> 2) + (3 * mh | 0)] = Yk;
                                    var ji = Je + 1 | 0;
                                    if ((ji | 0) >= (l[Cf >> 2] | 0)) {
                                        var bl = Zk;
                                        break b
                                    }
                                    Je = ji;
                                    Xf = Zk
                                }
                            } else {
                                bl = 0
                            }
                        } while (0);
                        a = cf;
                        Ni = -.014999999664723873 <= bl;
                        for (var cj = 0, Vj = 1; (cj | 0) < (l[Yb] | 0);) {
                            var Wj = l[l[Mb] + (cj << 2) >> 2], ki = K[l[l[Wj >> 2] + 36 >> 2]](Wj, qc), pm = Vj & ki, cj = cj + 1 | 0, Vj = pm
                        }
                        if (Ni & Vj) {
                            Th = 0;
                            break
                        }
                        lh = lh + 1 | 0
                    }
                    var qm = 0 < (l[Fb] | 0);
                    b:do {
                        if (qm) {
                            for (var cl = sb + 8 | 0, bg = 0; ;) {
                                var li = l[l[cl >> 2] + (bg << 2) >> 2], Lb = li >> 2, dl = l[mb] + 12 * bg | 0, rm = li + 44 | 0, dj = l[dl >> 2], Xj = l[dl + 4 >> 2], fd = rm | 0;
                                l[fd >> 2] = dj;
                                md = rm + 4 | 0;
                                l[md >> 2] = Xj;
                                var Le = q[(l[mb] + 8 >> 2) + (3 * bg | 0)];
                                q[Lb + 14] = Le;
                                var el = l[Qb] + 12 * bg | 0, Yj = li + 64 | 0, fl = l[el + 4 >> 2];
                                l[(Yj | 0) >> 2] = l[el >> 2];
                                l[(Yj + 4 | 0) >> 2] = fl;
                                q[Lb + 18] = q[(l[Qb] + 8 >> 2) + (3 * bg | 0)];
                                var Zj = mm(Le);
                                q[Lb + 5] = Zj;
                                var Jf = nm(Le);
                                q[Lb + 6] = Jf;
                                var gl = li + 12 | 0, ej = q[Lb + 7], $j = q[Lb + 8], hl = Jf * ej - Zj * $j, sm = Zj * ej + Jf * $j, fj = (t[0] = dj, M[0]) - hl, il = (t[0] = Xj, M[0]) - sm, $g = gl, jl = (M[0] = fj, t[0]), kl = (M[0] = il, t[0]) | 0;
                                l[($g | 0) >> 2] = 0 | jl;
                                l[($g + 4 | 0) >> 2] = kl;
                                var ak = bg + 1 | 0;
                                if ((ak | 0) >= (l[Fb] | 0)) {
                                    break b
                                }
                                bg = ak
                            }
                        }
                    } while (0);
                    q[ob + 20 >> 2] = 0;
                    var bk = o[hc + 10], Ob = bk >> 2, ll = sb + 4 | 0, ml = 0 == (l[ll >> 2] | 0);
                    b:do {
                        if (!ml && 0 < (l[Zb] | 0)) {
                            for (var nl = pc + 16 | 0, sh = 0; ;) {
                                var ol = l[l[$d >> 2] + (sh << 2) >> 2], mi = l[Ob + (38 * sh | 0) + 36];
                                l[nl >> 2] = mi;
                                var th = 0 < (mi | 0);
                                c:do {
                                    if (th) {
                                        for (var ah = 0; ;) {
                                            q[pc + (ah << 2) >> 2] = q[Ob + (38 * sh | 0) + (9 * ah | 0) + 4];
                                            q[pc + (ah << 2) + 8 >> 2] = q[Ob + (38 * sh | 0) + (9 * ah | 0) + 5];
                                            var ck = ah + 1 | 0;
                                            if ((ck | 0) == (mi | 0)) {
                                                break c
                                            }
                                            ah = ck
                                        }
                                    }
                                } while (0);
                                var pl = l[ll >> 2];
                                K[l[l[pl >> 2] + 20 >> 2]](pl, ol, pc);
                                var tm = sh + 1 | 0;
                                if ((tm | 0) >= (l[Zb] | 0)) {
                                    break b
                                }
                                sh = tm
                            }
                        }
                    } while (0);
                    b:do {
                        if (Rb && 0 < (l[Fb] | 0)) {
                            for (var dk = sb + 8 | 0, gj = 3.4028234663852886e+38, uh = 0; ;) {
                                var cg = l[l[dk >> 2] + (uh << 2) >> 2], ek = 0 == (l[cg >> 2] | 0);
                                c:do {
                                    if (ek) {
                                        var ni = gj
                                    } else {
                                        var hj = 0 == (i[cg + 4 >> 1] & 4) << 16 >> 16;
                                        do {
                                            if (!hj) {
                                                var bh = q[cg + 72 >> 2];
                                                if (.001218469929881394 >= bh * bh) {
                                                    var fk = q[cg + 64 >> 2], ij = q[cg + 68 >> 2];
                                                    if (9999999747378752e-20 >= fk * fk + ij * ij) {
                                                        var zg = cg + 144 | 0, gk = q[zg >> 2] + sc;
                                                        q[zg >> 2] = gk;
                                                        ni = gj < gk ? gj : gk;
                                                        break c
                                                    }
                                                }
                                            }
                                        } while (0);
                                        ni = q[cg + 144 >> 2] = 0
                                    }
                                } while (0);
                                var ql = uh + 1 | 0, rl = o[Fb];
                                if ((ql | 0) >= (rl | 0)) {
                                    break
                                }
                                gj = ni;
                                uh = ql
                            }
                            if (0 < (rl | 0) & ((.5 > ni | Th) ^ 1)) {
                                for (var vh = 0; ;) {
                                    var jj = l[l[dk >> 2] + (vh << 2) >> 2], um = jj + 4 | 0;
                                    i[um >> 1] &= -3;
                                    q[jj + 144 >> 2] = 0;
                                    Nb = (jj + 64 | 0) >> 2;
                                    l[Nb] = 0;
                                    l[Nb + 1] = 0;
                                    l[Nb + 2] = 0;
                                    l[Nb + 3] = 0;
                                    l[Nb + 4] = 0;
                                    l[Nb + 5] = 0;
                                    var vm = vh + 1 | 0;
                                    if ((vm | 0) >= (l[Fb] | 0)) {
                                        break b
                                    }
                                    vh = vm
                                }
                            }
                        }
                    } while (0);
                    var pq = l[hc + 8];
                    xn(pq, bk);
                    xn(pq, l[hc + 9]);
                    a = pc;
                    q[T] += q[Ua >> 2];
                    q[R] += q[Va >> 2];
                    q[O] += q[pb >> 2];
                    var qq = l[F];
                    if (0 < (qq | 0)) {
                        for (var At = l[H], An = 0; ;) {
                            var rq = l[At + (An << 2) >> 2];
                            if (0 == (l[rq >> 2] | 0)) {
                                var sq = rq + 4 | 0;
                                i[sq >> 1] &= -2
                            }
                            var tq = An + 1 | 0;
                            if ((tq | 0) >= (qq | 0)) {
                                break a
                            }
                            An = tq
                        }
                    }
                }
            } while (0);
            nb = La + 96 | 0
        }
        xn(Ba, pa);
        for (var Bt = W + 8 | 0, Ct = W + 12 | 0, uq = oa; ;) {
            var je = l[uq >> 2];
            if (0 == (je | 0)) {
                break
            }
            var sl = 0 == (i[je + 4 >> 1] & 1) << 16 >> 16;
            a:do {
                if (!sl && 0 != (l[je >> 2] | 0)) {
                    var Bn = q[je + 52 >> 2], hk = mm(Bn);
                    q[Bt >> 2] = hk;
                    var kj = nm(Bn);
                    q[Ct >> 2] = kj;
                    var Cn = q[je + 28 >> 2], Dn = q[je + 32 >> 2], vq = q[je + 40 >> 2] - (hk * Cn + kj * Dn), wq = (M[0] = q[je + 36 >> 2] - (kj * Cn - hk * Dn), t[0]), tl = (M[0] = vq, t[0]) | 0;
                    l[W >> 2] = 0 | wq;
                    l[W + 4 >> 2] = tl;
                    var En = l[je + 88 >> 2] + 102872 | 0, Fn = l[je + 100 >> 2];
                    if (0 != (Fn | 0)) {
                        for (var Dt = je + 12 | 0, wm = Fn; ;) {
                            wo(wm, En, W, Dt);
                            var ik = l[wm + 4 >> 2];
                            if (0 == (ik | 0)) {
                                break a
                            }
                            wm = ik
                        }
                    }
                }
            } while (0);
            uq = je + 96 | 0
        }
        jp(sa | 0, sa);
        q[U + 25755] = 0;
        var jk = l[S];
        xn(jk, l[S + 5]);
        xn(jk, l[S + 6]);
        xn(jk, l[fb >> 2]);
        xn(jk, l[va >> 2]);
        xn(jk, l[H]);
        a = W;
        q[m + 25751] = 0
    }
    if (0 == (c[b + 102993 | 0] & 1) << 24 >> 24) {
        p = 12
    } else {
        var Gn = q[h];
        if (0 < Gn) {
            var ul, vl, wl, Ag, lj, oi, mj, nj, kk, lk, oj, xl, mk, nk, xm, yl, ok, pk, pi, wh, qk, rk, zl, Al, Bl, ym, Cl, xh, pj, yh, qi, qj, rj, sj, ri, tj, Bg, sk, zh, tk, Ah, uj, zm, uk, dg = a;
            a += 240;
            var Dl, eg = dg + 16;
            uk = eg >> 2;
            var Xe = dg + 68, Am = dg + 200, Bm = dg + 208, si = dg + 216, Et = b + 68 | 0, Hn = b + 102872 | 0;
            zm = (b + 102944 | 0) >> 2;
            vp(eg, 64, 32, 0, Et, l[zm]);
            var El = b + 102995 | 0, xq = 0 == (c[El] & 1) << 24 >> 24;
            a:do {
                if (xq) {
                    var Fl = b + 102932 | 0
                } else {
                    var In = l[b + 102952 >> 2], yq = 0 == (In | 0);
                    b:do {
                        if (!yq) {
                            for (var Gl = In; ;) {
                                var Jn = Gl + 4 | 0;
                                i[Jn >> 1] &= -2;
                                q[Gl + 60 >> 2] = 0;
                                var Kn = l[Gl + 96 >> 2];
                                if (0 == (Kn | 0)) {
                                    break b
                                }
                                Gl = Kn
                            }
                        }
                    } while (0);
                    var Hl = b + 102932 | 0, Ln = l[Hl >> 2];
                    if (0 == (Ln | 0)) {
                        Fl = Hl
                    } else {
                        var Il = Ln;
                        for (uj = Il >> 2; ;) {
                            var Mn = Il + 4 | 0;
                            l[Mn >> 2] &= -34;
                            l[uj + 32] = 0;
                            q[uj + 33] = 1;
                            var Nn = l[uj + 3];
                            if (0 == (Nn | 0)) {
                                Fl = Hl;
                                break a
                            }
                            Il = Nn;
                            uj = Il >> 2
                        }
                    }
                }
            } while (0);
            var zq = Xe + 16 | 0, Aq = Xe + 20 | 0, On = Xe + 24 | 0, Ft = Xe + 44 | 0, Gt = Xe + 48 | 0, Ht = Xe + 52 | 0, It = Xe | 0, Jt = Xe + 28 | 0, Pn = Xe + 56 | 0, Qn = Xe + 92 | 0, Kt = Xe + 128 | 0, Lt = Am | 0, Rn = Am + 4 | 0;
            Ah = (eg + 28 | 0) >> 2;
            tk = (eg + 36 | 0) >> 2;
            var Sn = eg + 32 | 0, Bq = eg + 40 | 0;
            zh = (eg + 8 | 0) >> 2;
            var Cq = eg + 44 | 0;
            sk = (eg + 12 | 0) >> 2;
            for (var Mt = Bm | 0, Nt = Bm + 4 | 0, Ot = n | 0, Dq = si | 0, Jl = si + 4 | 0, Kl = si + 8 | 0, Pt = si + 16 | 0, ti = n + 12 | 0, ui = si + 12 | 0, Tn = si + 20 | 0, Eq = dg + 8 | 0, Qt = dg + 12 | 0, Rt = Hn | 0, Un = b + 102994 | 0, Me = 0, Vd = 1, Vn = Fl; ;) {
                var vj = l[Vn >> 2];
                Bg = vj >> 2;
                if (0 == (vj | 0)) {
                    if (0 == (Me | 0) | .9999988079071045 < Vd) {
                        var Ll = 1, vk = l[zh];
                        break
                    }
                    var Cd = l[l[Me + 48 >> 2] + 8 >> 2], ve = l[l[Me + 52 >> 2] + 8 >> 2];
                    tj = (Cd + 28 | 0) >> 2;
                    var Wn = q[tj];
                    ri = (Cd + 32 | 0) >> 2;
                    var Fq = q[ri], Gq = Cd + 36 | 0, Xn = q[Gq >> 2];
                    sj = (Cd + 40 | 0) >> 2;
                    var Cm = q[sj];
                    rj = (Cd + 44 | 0) >> 2;
                    var Yn = q[rj];
                    qj = (Cd + 48 | 0) >> 2;
                    var Dm = q[qj];
                    qi = (Cd + 52 | 0) >> 2;
                    var Em = q[qi];
                    yh = (Cd + 56 | 0) >> 2;
                    var Ml = q[yh];
                    pj = (Cd + 60 | 0) >> 2;
                    var Fm = q[pj];
                    xh = (ve + 28 | 0) >> 2;
                    var Hq = q[xh];
                    Cl = (ve + 32 | 0) >> 2;
                    var Iq = q[Cl], Gm = ve + 36 | 0, Hm = q[Gm >> 2];
                    ym = (ve + 40 | 0) >> 2;
                    var Nl = q[ym];
                    Bl = (ve + 44 | 0) >> 2;
                    var Jq = q[Bl];
                    Al = (ve + 48 | 0) >> 2;
                    var St = q[Al];
                    zl = (ve + 52 | 0) >> 2;
                    var Kq = q[zl];
                    rk = (ve + 56 | 0) >> 2;
                    var Tt = q[rk];
                    qk = (ve + 60 | 0) >> 2;
                    var Ut = q[qk];
                    if (1 > Fm) {
                        var Im = Fm, Jm = Xn, Zn = Cm, $n = Yn, ao = Dm, bo = Em, co = Ml, Km = Wn, Lm = Fq, wk = Cd + 36 | 0
                    } else {
                        P(N.ca | 0, 723, N.Z | 0, N.V | 0);
                        var eo = Cd + 36 | 0, Im = q[pj], Jm = q[eo >> 2], Zn = q[sj], $n = q[rj], ao = q[qj], bo = q[qi], co = q[yh], Km = q[tj], Lm = q[ri], wk = eo
                    }
                    var Ol = (Vd - Im) / (1 - Im), Mm = 1 - Ol, fo = Jm * Mm + $n * Ol, go = Zn * Mm + ao * Ol, Lq = wk, Mq = (M[0] = fo, t[0]), Vt = (M[0] = go, t[0]), Nq = 0 | Mq, ho = Vt | 0, vi = Lq | 0;
                    wh = vi >> 2;
                    l[wh] = Nq;
                    var ch = Lq + 4 | 0;
                    pi = ch >> 2;
                    l[pi] = ho;
                    var Pl = Mm * bo + Ol * co;
                    q[qi] = Pl;
                    q[pj] = Vd;
                    var io = Cd + 44 | 0, Nm = io | 0;
                    l[Nm >> 2] = Nq;
                    var Om = io + 4 | 0;
                    l[Om >> 2] = ho;
                    q[yh] = Pl;
                    var jo = mm(Pl), ko = Cd + 20 | 0;
                    q[ko >> 2] = jo;
                    var lo = nm(Pl), Oq = Cd + 24 | 0;
                    q[Oq >> 2] = lo;
                    var Pq = go - (jo * Km + lo * Lm), Ql = Cd + 12 | 0, Wt = (M[0] = fo - (lo * Km - jo * Lm), t[0]), Xt = (M[0] = Pq, t[0]) | 0, Pm = Ql | 0;
                    l[Pm >> 2] = 0 | Wt;
                    var Qm = Ql + 4 | 0;
                    l[Qm >> 2] = Xt;
                    var Qq = q[qk];
                    if (1 > Qq) {
                        var mo = Qq
                    } else {
                        P(N.ca | 0, 723, N.Z | 0, N.V | 0), mo = q[qk]
                    }
                    var Rl = (Vd - mo) / (1 - mo), xk = ve + 36 | 0, Rm = 1 - Rl, no = q[xk >> 2] * Rm + q[Bl] * Rl, oo = q[ym] * Rm + q[Al] * Rl, Rq = xk, Yt = (M[0] = no, t[0]), Sq = (M[0] = oo, t[0]), Sm = 0 | Yt, po = Sq | 0;
                    l[(Rq | 0) >> 2] = Sm;
                    l[(Rq + 4 | 0) >> 2] = po;
                    var yk = Rm * q[zl] + Rl * q[rk];
                    q[zl] = yk;
                    q[qk] = Vd;
                    var qo = ve + 44 | 0;
                    l[(qo | 0) >> 2] = Sm;
                    l[(qo + 4 | 0) >> 2] = po;
                    q[rk] = yk;
                    var Tm = mm(yk), ro = ve + 20 | 0;
                    q[ro >> 2] = Tm;
                    var so = nm(yk), Tq = ve + 24 | 0;
                    q[Tq >> 2] = so;
                    var to = q[xh], Um = q[Cl], Uq = oo - (Tm * to + so * Um), zk = ve + 12 | 0, zP = (M[0] = no - (so * to - Tm * Um), t[0]), AP = (M[0] = Uq, t[0]) | 0;
                    l[(zk | 0) >> 2] = 0 | zP;
                    l[(zk + 4 | 0) >> 2] = AP;
                    qp(Me, l[zm]);
                    pk = (Me + 4 | 0) >> 2;
                    var pu = l[pk];
                    l[pk] = pu & -33;
                    var Iy = Me + 128 | 0;
                    l[Iy >> 2] = l[Iy >> 2] + 1 | 0;
                    if (6 == (pu & 6 | 0)) {
                        ok = (Cd + 4 | 0) >> 1;
                        var Jy = i[ok];
                        0 == (Jy & 2) << 16 >> 16 && (i[ok] = Jy | 2, q[Cd + 144 >> 2] = 0);
                        yl = (ve + 4 | 0) >> 1;
                        var Ky = i[yl];
                        0 == (Ky & 2) << 16 >> 16 && (i[yl] = Ky | 2, q[ve + 144 >> 2] = 0);
                        l[Ah] = 0;
                        l[tk] = 0;
                        l[Sn >> 2] = 0;
                        var Ly = l[Bq >> 2];
                        if (0 < (Ly | 0)) {
                            var qu = Cd + 8 | 0;
                            l[qu >> 2] = 0;
                            var ru = l[zh];
                            l[ru >> 2] = Cd;
                            l[Ah] = 1;
                            if (1 < (Ly | 0)) {
                                var My = qu, Ny = ru;
                                Dl = 71
                            } else {
                                Oy = qu, Py = ru, Dl = 70
                            }
                        } else {
                            P(N.J | 0, 54, N.oa | 0, N.Ba | 0);
                            var Qy = Cd + 8 | 0;
                            l[Qy >> 2] = 0;
                            var Ry = l[zh];
                            l[Ry >> 2] = Cd;
                            l[Ah] = 1;
                            var Oy = Qy, Py = Ry;
                            Dl = 70
                        }
                        70 == Dl && (P(N.J | 0, 54, N.oa | 0, N.Ba | 0), My = Oy, Ny = Py);
                        var Sy = ve + 8 | 0;
                        l[Sy >> 2] = 1;
                        l[Ny + 4 >> 2] = ve;
                        l[Ah] = 2;
                        0 < (l[Cq >> 2] | 0) || P(N.J | 0, 62, N.Ja | 0, N.Xa | 0);
                        l[tk] = 1;
                        l[l[sk] >> 2] = Me;
                        i[ok] |= 1;
                        i[yl] |= 1;
                        l[pk] |= 1;
                        l[Mt >> 2] = Cd;
                        l[Nt >> 2] = ve;
                        for (var Ty = l[Bq >> 2], Uy = l[Cq >> 2], BP = l[sk], CP = l[zh], fr = 0; 2 > (fr | 0);) {
                            var su = l[Bm + (fr << 2) >> 2], DP = 2 == (l[su >> 2] | 0);
                            a:do {
                                if (DP) {
                                    for (var EP = su + 4 | 0, Vy = su + 112 | 0; ;) {
                                        var gr = l[Vy >> 2];
                                        if (0 == (gr | 0)) {
                                            break a
                                        }
                                        var Bo = l[Ah];
                                        if ((Bo | 0) == (Ty | 0)) {
                                            break a
                                        }
                                        var hr = l[tk];
                                        if ((hr | 0) == (Uy | 0)) {
                                            break a
                                        }
                                        var Co = l[gr + 4 >> 2];
                                        xm = (Co + 4 | 0) >> 2;
                                        var FP = 0 == (l[xm] & 1 | 0);
                                        b:do {
                                            if (FP) {
                                                var id = l[gr >> 2], Wy = id | 0, GP = 2 == (l[Wy >> 2] | 0);
                                                do {
                                                    if (GP && 0 == (i[EP >> 1] & 8) << 16 >> 16 && 0 == (i[id + 4 >> 1] & 8) << 16 >> 16) {
                                                        break b
                                                    }
                                                } while (0);
                                                if (0 == (c[l[Co + 48 >> 2] + 38 | 0] & 1) << 24 >> 24 && 0 == (c[l[Co + 52 >> 2] + 38 | 0] & 1) << 24 >> 24) {
                                                    nk = (id + 28 | 0) >> 2;
                                                    var Tl = q[nk];
                                                    mk = (id + 32 | 0) >> 2;
                                                    var Ul = q[mk];
                                                    xl = (id + 36 | 0) >> 2;
                                                    var tu = q[xl];
                                                    oj = (id + 40 | 0) >> 2;
                                                    var uu = q[oj];
                                                    lk = (id + 44 | 0) >> 2;
                                                    var Do = q[lk];
                                                    kk = (id + 48 | 0) >> 2;
                                                    var Eo = q[kk];
                                                    nj = (id + 52 | 0) >> 2;
                                                    var vu = q[nj];
                                                    mj = (id + 56 | 0) >> 2;
                                                    var Vl = q[mj];
                                                    oi = (id + 60 | 0) >> 2;
                                                    var ir = q[oi];
                                                    lj = (id + 4 | 0) >> 1;
                                                    if (0 == (i[lj] & 1) << 16 >> 16) {
                                                        if (1 > ir) {
                                                            var wu = ir, Xy = tu, Yy = uu, Zy = Do, $y = Eo, az = vu, bz = Vl, xu = Tl, yu = Ul, cz = id + 36 | 0
                                                        } else {
                                                            P(N.ca | 0, 723, N.Z | 0, N.V | 0);
                                                            var dz = id + 36 | 0, wu = q[oi], Xy = q[dz >> 2], Yy = q[oj], Zy = q[lk], $y = q[kk], az = q[nj], bz = q[mj], xu = q[nk], yu = q[mk], cz = dz
                                                        }
                                                        var jr = (Vd - wu) / (1 - wu), zu = 1 - jr, ez = Xy * zu + Zy * jr, fz = Yy * zu + $y * jr, gz = cz, HP = (M[0] = ez, t[0]), IP = (M[0] = fz, t[0]), hz = 0 | HP, iz = IP | 0, vi = gz | 0;
                                                        wh = vi >> 2;
                                                        l[wh] = hz;
                                                        ch = gz + 4 | 0;
                                                        pi = ch >> 2;
                                                        l[pi] = iz;
                                                        var kr = zu * az + jr * bz;
                                                        q[nj] = kr;
                                                        q[oi] = Vd;
                                                        var jz = id + 44 | 0, Nm = jz | 0;
                                                        l[Nm >> 2] = hz;
                                                        Om = jz + 4 | 0;
                                                        l[Om >> 2] = iz;
                                                        q[mj] = kr;
                                                        var Au = mm(kr);
                                                        q[id + 20 >> 2] = Au;
                                                        var Bu = nm(kr);
                                                        q[id + 24 >> 2] = Bu;
                                                        var JP = fz - (Au * xu + Bu * yu), kz = id + 12 | 0, KP = (M[0] = ez - (Bu * xu - Au * yu), t[0]), LP = (M[0] = JP, t[0]) | 0, Pm = kz | 0;
                                                        l[Pm >> 2] = 0 | KP;
                                                        Qm = kz + 4 | 0;
                                                        l[Qm >> 2] = LP
                                                    }
                                                    qp(Co, l[zm]);
                                                    var Cu = l[xm];
                                                    if (0 == (Cu & 4 | 0)) {
                                                        q[nk] = Tl;
                                                        q[mk] = Ul;
                                                        q[xl] = tu;
                                                        q[oj] = uu;
                                                        q[lk] = Do;
                                                        q[kk] = Eo;
                                                        q[nj] = vu;
                                                        q[mj] = Vl;
                                                        q[oi] = ir;
                                                        var Du = mm(Vl);
                                                        q[id + 20 >> 2] = Du;
                                                        var Eu = nm(Vl);
                                                        q[id + 24 >> 2] = Eu;
                                                        var MP = Eo - (Du * Tl + Eu * Ul), lz = id + 12 | 0, NP = (M[0] = Do - (Eu * Tl - Du * Ul), t[0]), OP = (M[0] = MP, t[0]) | 0, Fu = lz | 0;
                                                        l[Fu >> 2] = 0 | NP;
                                                        var Gu = lz + 4 | 0;
                                                        l[Gu >> 2] = OP
                                                    } else {
                                                        if (0 == (Cu & 2 | 0)) {
                                                            q[nk] = Tl;
                                                            q[mk] = Ul;
                                                            q[xl] = tu;
                                                            q[oj] = uu;
                                                            q[lk] = Do;
                                                            q[kk] = Eo;
                                                            q[nj] = vu;
                                                            q[mj] = Vl;
                                                            q[oi] = ir;
                                                            var Hu = mm(Vl);
                                                            q[id + 20 >> 2] = Hu;
                                                            var Iu = nm(Vl);
                                                            q[id + 24 >> 2] = Iu;
                                                            var PP = Eo - (Hu * Tl + Iu * Ul), mz = id + 12 | 0, QP = (M[0] = Do - (Iu * Tl - Hu * Ul), t[0]), RP = (M[0] = PP, t[0]) | 0, Fu = mz | 0;
                                                            l[Fu >> 2] = 0 | QP;
                                                            Gu = mz + 4 | 0;
                                                            l[Gu >> 2] = RP
                                                        } else {
                                                            l[xm] = Cu | 1;
                                                            (hr | 0) < (Uy | 0) || P(N.J | 0, 62, N.Ja | 0, N.Xa | 0);
                                                            l[tk] = hr + 1 | 0;
                                                            l[((hr << 2) + BP | 0) >> 2] = Co;
                                                            var lr = i[lj];
                                                            0 == (lr & 1) << 16 >> 16 && (i[lj] = lr | 1, 0 != (l[Wy >> 2] | 0) && 0 == (lr & 2) << 16 >> 16 && (i[lj] = lr | 3, q[id + 144 >> 2] = 0), (Bo | 0) < (Ty | 0) || P(N.J | 0, 54, N.oa | 0, N.Ba | 0), l[(id + 8 | 0) >> 2] = Bo, l[((Bo << 2) + CP | 0) >> 2] = id, l[Ah] = Bo + 1 | 0)
                                                        }
                                                    }
                                                }
                                            }
                                        } while (0);
                                        Vy = gr + 12 | 0
                                    }
                                }
                            } while (0);
                            fr = fr + 1 | 0
                        }
                        var nz = (1 - Vd) * q[Ot >> 2];
                        q[Dq >> 2] = nz;
                        q[Jl >> 2] = 1 / nz;
                        q[Kl >> 2] = 1;
                        l[Pt >> 2] = 20;
                        l[ui >> 2] = l[ti >> 2];
                        c[Tn] = 0;
                        var Bh = eg, mr = si, Ym = l[My >> 2], Zm = l[Sy >> 2], nr = Ha, Wl = Ha, $m = Ha, Xl = Ha, Yl = Ha, or = Ha, an = Ha, wj = Ha, Zl = Ha, pr = Ha, bn = Ha, $l = a;
                        a += 116;
                        var Ju = $l + 20, bn = Ju >> 2, Fo = $l + 64, pr = Fo >> 2, Zl = (Bh + 28 | 0) >> 2, oz = l[Zl];
                        if ((oz | 0) > (Ym | 0)) {
                            var Ku = oz
                        } else {
                            P(N.Hb | 0, 386, N.wb | 0, N.df | 0), Ku = l[Zl]
                        }
                        if ((Ku | 0) > (Zm | 0)) {
                            var pz = Ku
                        } else {
                            P(N.Hb | 0, 387, N.wb | 0, N.Vf | 0), pz = l[Zl]
                        }
                        var SP = 0 < (pz | 0);
                        a:do {
                            if (SP) {
                                for (var TP = Bh + 8 | 0, Lu = Bh + 20 | 0, Mu = Bh + 24 | 0, am = 0; ;) {
                                    var qr = l[l[TP >> 2] + (am << 2) >> 2], qz = qr + 44 | 0, rz = l[Lu >> 2] + 12 * am | 0, Nu = qz | 0, Ou = qz + 4 | 0, UP = l[Ou >> 2], Pu = rz | 0;
                                    l[Pu >> 2] = l[Nu >> 2];
                                    var Qu = rz + 4 | 0;
                                    l[Qu >> 2] = UP;
                                    q[(l[Lu >> 2] + 8 >> 2) + (3 * am | 0)] = q[qr + 56 >> 2];
                                    var sz = qr + 64 | 0, tz = l[Mu >> 2] + 12 * am | 0, VP = l[sz + 4 >> 2];
                                    l[(tz | 0) >> 2] = l[sz >> 2];
                                    l[(tz + 4 | 0) >> 2] = VP;
                                    q[(l[Mu >> 2] + 8 >> 2) + (3 * am | 0)] = q[qr + 72 >> 2];
                                    var uz = am + 1 | 0;
                                    if ((uz | 0) >= (l[Zl] | 0)) {
                                        var Ru = Lu, wj = Ru >> 2, Su = Mu, an = Su >> 2;
                                        break a
                                    }
                                    am = uz
                                }
                            } else {
                                Ru = Bh + 20 | 0, wj = Ru >> 2, Su = Bh + 24 | 0, an = Su >> 2
                            }
                        } while (0);
                        var vz = Bh + 12 | 0;
                        l[bn + 6] = l[vz >> 2];
                        or = (Bh + 36 | 0) >> 2;
                        l[bn + 7] = l[or];
                        l[bn + 10] = l[Bh >> 2];
                        Yl = Ju >> 2;
                        Xl = mr >> 2;
                        l[Yl] = l[Xl];
                        l[Yl + 1] = l[Xl + 1];
                        l[Yl + 2] = l[Xl + 2];
                        l[Yl + 3] = l[Xl + 3];
                        l[Yl + 4] = l[Xl + 4];
                        l[Yl + 5] = l[Xl + 5];
                        l[bn + 8] = l[wj];
                        l[bn + 9] = l[an];
                        Qp(Fo, Ju);
                        for (var WP = mr + 16 | 0, Tu = 0; (Tu | 0) < (l[WP >> 2] | 0);) {
                            var Uu = Fo, XP = Ym, YP = Zm, Bk = Ha, cn = Ha, bm = a;
                            a += 52;
                            var rr = bm + 16, sr = bm + 32, wz = Uu + 48 | 0, ZP = 0 < (l[wz >> 2] | 0);
                            a:do {
                                if (ZP) {
                                    for (var $P = Uu + 36 | 0, cn = (Uu + 24 | 0) >> 2, aQ = bm + 8 | 0, bQ = bm + 12 | 0, cQ = rr + 8 | 0, dQ = rr + 12 | 0, xz = bm, yz = rr, zz = sr, Az = sr + 8 | 0, eQ = sr + 16 | 0, dh = 0, Vu = 0; ;) {
                                        var tr = l[$P >> 2], Bk = tr >> 2, fQ = tr + 88 * dh | 0, dn = l[Bk + (22 * dh | 0) + 8], ur = l[Bk + (22 * dh | 0) + 9], Bz = tr + 88 * dh + 48 | 0, gQ = l[Bz + 4 >> 2], Cz = (t[0] = l[Bz >> 2], M[0]), Dz = (t[0] = gQ, M[0]), Ez = tr + 88 * dh + 56 | 0, hQ = l[Ez + 4 >> 2], Fz = (t[0] = l[Ez >> 2], M[0]), Gz = (t[0] = hQ, M[0]), Hz = l[Bk + (22 * dh | 0) + 21];
                                        if ((dn | 0) == (XP | 0) | (dn | 0) == (YP | 0)) {
                                            var Wu = q[Bk + (22 * dh | 0) + 16], vr = q[Bk + (22 * dh | 0) + 10]
                                        } else {
                                            vr = Wu = 0
                                        }
                                        var Iz = q[Bk + (22 * dh | 0) + 17], Xu = q[Bk + (22 * dh | 0) + 11], Go = l[cn], Jz = Go + 12 * dn | 0, iQ = l[Jz + 4 >> 2], Kz = (t[0] = l[Jz >> 2], M[0]), Lz = (t[0] = iQ, M[0]), Mz = q[(Go + 8 >> 2) + (3 * dn | 0)], Nz = Go + 12 * ur | 0, jQ = l[Nz + 4 >> 2], Oz = (t[0] = l[Nz >> 2], M[0]), Pz = (t[0] = jQ, M[0]), Qz = q[(Go + 8 >> 2) + (3 * ur | 0)];
                                        if (0 < (Hz | 0)) {
                                            for (var kQ = vr + Xu, wr = Pz, xr = Oz, yr = Lz, zr = Kz, Yu = Vu, Ar = Mz, Br = Qz, Zu = 0; ;) {
                                                var $u = mm(Ar);
                                                q[aQ >> 2] = $u;
                                                var av = nm(Ar);
                                                q[bQ >> 2] = av;
                                                var bv = mm(Br);
                                                q[cQ >> 2] = bv;
                                                var cv = nm(Br);
                                                q[dQ >> 2] = cv;
                                                var lQ = yr - ($u * Cz + av * Dz), mQ = (M[0] = zr - (av * Cz - $u * Dz), t[0]), nQ = (M[0] = lQ, t[0]) | 0;
                                                l[xz >> 2] = 0 | mQ;
                                                l[xz + 4 >> 2] = nQ;
                                                var oQ = wr - (bv * Fz + cv * Gz), pQ = (M[0] = xr - (cv * Fz - bv * Gz), t[0]), qQ = (M[0] = oQ, t[0]) | 0;
                                                l[yz >> 2] = 0 | pQ;
                                                l[yz + 4 >> 2] = qQ;
                                                Tp(sr, fQ, bm, rr, Zu);
                                                var rQ = l[zz + 4 >> 2], dv = (t[0] = l[zz >> 2], M[0]), ev = (t[0] = rQ, M[0]), sQ = l[Az + 4 >> 2], Rz = (t[0] = l[Az >> 2], M[0]), Sz = (t[0] = sQ, M[0]), fv = q[eQ >> 2], Tz = Rz - zr, Uz = Sz - yr, Vz = Rz - xr, Wz = Sz - wr, Xz = Yu < fv ? Yu : fv, Yz = .75 * (fv + .004999999888241291), Zz = 0 > Yz ? Yz : 0, $z = Tz * ev - Uz * dv, aA = Vz * ev - Wz * dv, bA = kQ + Wu * $z * $z + Iz * aA * aA, cA = 0 < bA ? -(-.20000000298023224 > Zz ? -.20000000298023224 : Zz) / bA : 0, Cr = dv * cA, Dr = ev * cA, dA = zr - Cr * vr, eA = yr - Dr * vr, fA = Ar - Wu * (Tz * Dr - Uz * Cr), gA = xr + Cr * Xu, hA = wr + Dr * Xu, iA = Br + Iz * (Vz * Dr - Wz * Cr), jA = Zu + 1 | 0;
                                                if ((jA | 0) == (Hz | 0)) {
                                                    break
                                                }
                                                wr = hA;
                                                xr = gA;
                                                yr = eA;
                                                zr = dA;
                                                Yu = Xz;
                                                Ar = fA;
                                                Br = iA;
                                                Zu = jA
                                            }
                                            var kA = hA, lA = gA, mA = eA, nA = dA, gv = Xz, oA = fA, pA = iA, qA = l[cn]
                                        } else {
                                            kA = Pz, lA = Oz, mA = Lz, nA = Kz, gv = Vu, oA = Mz, pA = Qz, qA = Go
                                        }
                                        var rA = qA + 12 * dn | 0, tQ = (M[0] = nA, t[0]), uQ = (M[0] = mA, t[0]) | 0;
                                        l[(rA | 0) >> 2] = 0 | tQ;
                                        l[(rA + 4 | 0) >> 2] = uQ;
                                        q[(l[cn] + 8 >> 2) + (3 * dn | 0)] = oA;
                                        var sA = l[cn] + 12 * ur | 0, vQ = (M[0] = lA, t[0]), wQ = (M[0] = kA, t[0]) | 0;
                                        l[(sA | 0) >> 2] = 0 | vQ;
                                        l[(sA + 4 | 0) >> 2] = wQ;
                                        q[(l[cn] + 8 >> 2) + (3 * ur | 0)] = pA;
                                        var tA = dh + 1 | 0;
                                        if ((tA | 0) >= (l[wz >> 2] | 0)) {
                                            var uA = gv;
                                            break a
                                        }
                                        dh = tA;
                                        Vu = gv
                                    }
                                } else {
                                    uA = 0
                                }
                            } while (0);
                            a = bm;
                            if (-.007499999832361937 <= uA) {
                                break
                            }
                            Tu = Tu + 1 | 0
                        }
                        var $m = (Bh + 8 | 0) >> 2, vA = l[wj] + 12 * Ym | 0, wA = l[l[$m] + (Ym << 2) >> 2] + 36 | 0, Nu = vA | 0, xQ = l[Nu >> 2], Ou = vA + 4 | 0, yQ = l[Ou >> 2], Pu = wA | 0;
                        l[Pu >> 2] = xQ;
                        Qu = wA + 4 | 0;
                        l[Qu >> 2] = yQ;
                        q[l[l[$m] + (Ym << 2) >> 2] + 52 >> 2] = q[(l[wj] + 8 >> 2) + (3 * Ym | 0)];
                        var xA = l[wj] + 12 * Zm | 0, yA = l[l[$m] + (Zm << 2) >> 2] + 36 | 0, zQ = l[xA + 4 >> 2], hv = yA | 0;
                        l[hv >> 2] = l[xA >> 2];
                        var iv = yA + 4 | 0;
                        l[iv >> 2] = zQ;
                        q[l[l[$m] + (Zm << 2) >> 2] + 52 >> 2] = q[(l[wj] + 8 >> 2) + (3 * Zm | 0)];
                        Rp(Fo);
                        for (var AQ = mr + 12 | 0, jv = 0; (jv | 0) < (l[AQ >> 2] | 0);) {
                            Sp(Fo), jv = jv + 1 | 0
                        }
                        var en = q[mr >> 2], BQ = 0 < (l[Zl] | 0);
                        a:do {
                            if (BQ) {
                                for (var wi = 0; ;) {
                                    var zA = l[wj], Er = zA + 12 * wi | 0, CQ = l[Er + 4 >> 2], DQ = (t[0] = l[Er >> 2], M[0]), EQ = (t[0] = CQ, M[0]), FQ = q[(zA + 8 >> 2) + (3 * wi | 0)], AA = l[an], BA = AA + 12 * wi | 0, GQ = l[BA + 4 >> 2], kv = (t[0] = l[BA >> 2], M[0]), lv = (t[0] = GQ, M[0]), mv = q[(AA + 8 >> 2) + (3 * wi | 0)], CA = kv * en, DA = lv * en, EA = CA * CA + DA * DA;
                                    if (4 < EA) {
                                        var FA = 2 / Fh(EA), nv = kv * FA, ov = lv * FA
                                    } else {
                                        nv = kv, ov = lv
                                    }
                                    var Ho = en * mv, pv = 2.4674012660980225 < Ho * Ho ? mv * (1.5707963705062866 / (0 < Ho ? Ho : -Ho)) : mv, GA = DQ + nv * en, HA = EQ + ov * en, Fr = FQ + en * pv, HQ = (M[0] = GA, t[0]), IQ = (M[0] = HA, t[0]), IA = 0 | HQ, JA = IQ | 0;
                                    l[(Er | 0) >> 2] = IA;
                                    l[(Er + 4 | 0) >> 2] = JA;
                                    q[(l[wj] + 8 >> 2) + (3 * wi | 0)] = Fr;
                                    var KA = l[an] + 12 * wi | 0, JQ = (M[0] = nv, t[0]), KQ = (M[0] = ov, t[0]), LA = 0 | JQ, MA = KQ | 0, hv = KA | 0;
                                    l[hv >> 2] = LA;
                                    iv = KA + 4 | 0;
                                    l[iv >> 2] = MA;
                                    q[(l[an] + 8 >> 2) + (3 * wi | 0)] = pv;
                                    var Gr = l[l[$m] + (wi << 2) >> 2], Wl = Gr >> 2, NA = Gr + 44 | 0;
                                    l[(NA | 0) >> 2] = IA;
                                    l[(NA + 4 | 0) >> 2] = JA;
                                    q[Wl + 14] = Fr;
                                    var OA = Gr + 64 | 0;
                                    l[(OA | 0) >> 2] = LA;
                                    l[(OA + 4 | 0) >> 2] = MA;
                                    q[Wl + 18] = pv;
                                    var qv = mm(Fr);
                                    q[Wl + 5] = qv;
                                    var rv = nm(Fr);
                                    q[Wl + 6] = rv;
                                    var PA = q[Wl + 7], QA = q[Wl + 8], LQ = HA - (qv * PA + rv * QA), RA = Gr + 12 | 0, MQ = (M[0] = GA - (rv * PA - qv * QA), t[0]), NQ = (M[0] = LQ, t[0]) | 0;
                                    l[(RA | 0) >> 2] = 0 | MQ;
                                    l[(RA + 4 | 0) >> 2] = NQ;
                                    var SA = wi + 1 | 0;
                                    if ((SA | 0) >= (l[Zl] | 0)) {
                                        break a
                                    }
                                    wi = SA
                                }
                            }
                        } while (0);
                        var TA = l[pr + 10], nr = TA >> 2, UA = Bh + 4 | 0, OQ = 0 == (l[UA >> 2] | 0);
                        a:do {
                            if (!OQ && 0 < (l[or] | 0)) {
                                for (var PQ = $l + 16 | 0, fn = 0; ;) {
                                    var QQ = l[l[vz >> 2] + (fn << 2) >> 2], sv = l[nr + (38 * fn | 0) + 36];
                                    l[PQ >> 2] = sv;
                                    var RQ = 0 < (sv | 0);
                                    b:do {
                                        if (RQ) {
                                            for (var gn = 0; ;) {
                                                q[$l + (gn << 2) >> 2] = q[nr + (38 * fn | 0) + (9 * gn | 0) + 4];
                                                q[$l + (gn << 2) + 8 >> 2] = q[nr + (38 * fn | 0) + (9 * gn | 0) + 5];
                                                var VA = gn + 1 | 0;
                                                if ((VA | 0) == (sv | 0)) {
                                                    break b
                                                }
                                                gn = VA
                                            }
                                        }
                                    } while (0);
                                    var WA = l[UA >> 2];
                                    K[l[l[WA >> 2] + 20 >> 2]](WA, QQ, $l);
                                    var XA = fn + 1 | 0;
                                    if ((XA | 0) >= (l[or] | 0)) {
                                        break a
                                    }
                                    fn = XA
                                }
                            }
                        } while (0);
                        var YA = l[pr + 8];
                        xn(YA, TA);
                        xn(YA, l[pr + 9]);
                        a = $l;
                        for (var SQ = l[Ah], ZA = l[zh], Hr = 0; (Hr | 0) < (SQ | 0);) {
                            var tv = l[ZA + (Hr << 2) >> 2];
                            Ag = tv >> 2;
                            var $A = tv + 4 | 0;
                            i[$A >> 1] &= -2;
                            var TQ = 2 == (l[Ag] | 0);
                            a:do {
                                if (TQ) {
                                    var aB = q[Ag + 13], uv = mm(aB);
                                    q[Eq >> 2] = uv;
                                    var vv = nm(aB);
                                    q[Qt >> 2] = vv;
                                    var bB = q[Ag + 7], cB = q[Ag + 8], UQ = q[Ag + 10] - (uv * bB + vv * cB), VQ = (M[0] = q[Ag + 9] - (vv * bB - uv * cB), t[0]), WQ = (M[0] = UQ, t[0]) | 0;
                                    l[dg >> 2] = 0 | VQ;
                                    l[dg + 4 >> 2] = WQ;
                                    var XQ = l[Ag + 22] + 102872 | 0, dB = l[Ag + 25], YQ = 0 == (dB | 0);
                                    b:do {
                                        if (!YQ) {
                                            for (var ZQ = tv + 12 | 0, wv = dB; ;) {
                                                wo(wv, XQ, dg, ZQ);
                                                var eB = l[wv + 4 >> 2];
                                                if (0 == (eB | 0)) {
                                                    break b
                                                }
                                                wv = eB
                                            }
                                        }
                                    } while (0);
                                    var fB = l[Ag + 28];
                                    if (0 != (fB | 0)) {
                                        for (var xv = fB; ;) {
                                            var gB = l[xv + 4 >> 2] + 4 | 0;
                                            l[gB >> 2] &= -34;
                                            var hB = l[xv + 12 >> 2];
                                            if (0 == (hB | 0)) {
                                                break a
                                            }
                                            xv = hB
                                        }
                                    }
                                }
                            } while (0);
                            Hr = Hr + 1 | 0
                        }
                        jp(Rt, Hn);
                        if (0 != (c[Un] & 1) << 24 >> 24) {
                            Ll = 0;
                            vk = ZA;
                            break
                        }
                    } else {
                        l[pk] = pu & -37;
                        q[tj] = Wn;
                        q[ri] = Fq;
                        q[Gq >> 2] = Xn;
                        q[sj] = Cm;
                        q[rj] = Yn;
                        q[qj] = Dm;
                        q[qi] = Em;
                        q[yh] = Ml;
                        q[pj] = Fm;
                        q[xh] = Hq;
                        q[Cl] = Iq;
                        q[Gm >> 2] = Hm;
                        q[ym] = Nl;
                        q[Bl] = Jq;
                        q[Al] = St;
                        q[zl] = Kq;
                        q[rk] = Tt;
                        q[qk] = Ut;
                        var iB = q[yh], yv = mm(iB);
                        q[ko >> 2] = yv;
                        var zv = nm(iB);
                        q[Oq >> 2] = zv;
                        var jB = q[tj], kB = q[ri], $Q = q[qj] - (yv * jB + zv * kB), aR = (M[0] = q[rj] - (zv * jB - yv * kB), t[0]), bR = (M[0] = $Q, t[0]) | 0;
                        l[(Ql | 0) >> 2] = 0 | aR;
                        l[(Ql + 4 | 0) >> 2] = bR;
                        var lB = q[rk], Av = mm(lB);
                        q[ro >> 2] = Av;
                        var Bv = nm(lB);
                        q[Tq >> 2] = Bv;
                        var mB = q[xh], nB = q[Cl], cR = q[Al] - (Av * mB + Bv * nB), dR = (M[0] = q[Bl] - (Bv * mB - Av * nB), t[0]), eR = (M[0] = cR, t[0]) | 0;
                        l[(zk | 0) >> 2] = 0 | dR;
                        l[(zk + 4 | 0) >> 2] = eR
                    }
                    Me = 0;
                    Vd = 1;
                    Vn = Fl
                } else {
                    wl = (vj + 4 | 0) >> 2;
                    var oB = l[wl], fR = 0 == (oB & 4 | 0);
                    do {
                        if (fR) {
                            var Ck = Me, Dk = Vd
                        } else {
                            if (8 < (l[Bg + 32] | 0)) {
                                Ck = Me, Dk = Vd
                            } else {
                                if (0 == (oB & 32 | 0)) {
                                    var Cv = l[Bg + 12], Dv = l[Bg + 13];
                                    if (0 != (c[Cv + 38 | 0] & 1) << 24 >> 24) {
                                        Ck = Me;
                                        Dk = Vd;
                                        break
                                    }
                                    if (0 != (c[Dv + 38 | 0] & 1) << 24 >> 24) {
                                        Ck = Me;
                                        Dk = Vd;
                                        break
                                    }
                                    var xi = l[Cv + 8 >> 2], yi = l[Dv + 8 >> 2], Ev = l[xi >> 2], Fv = l[yi >> 2];
                                    2 == (Ev | 0) | 2 == (Fv | 0) || P(N.t | 0, 641, N.vb | 0, N.oh | 0);
                                    var pB = i[xi + 4 >> 1], qB = i[yi + 4 >> 1];
                                    if (!(0 != (pB & 2) << 16 >> 16 & 0 != (Ev | 0) | 0 != (qB & 2) << 16 >> 16 & 0 != (Fv | 0))) {
                                        Ck = Me;
                                        Dk = Vd;
                                        break
                                    }
                                    if (!(0 != (pB & 8) << 16 >> 16 | 2 != (Ev | 0) | 0 != (qB & 8) << 16 >> 16 | 2 != (Fv | 0))) {
                                        Ck = Me;
                                        Dk = Vd;
                                        break
                                    }
                                    var gR = xi + 28 | 0;
                                    vl = (xi + 60 | 0) >> 2;
                                    var cm = q[vl], hR = yi + 28 | 0;
                                    ul = (yi + 60 | 0) >> 2;
                                    var hn = q[ul];
                                    if (cm < hn) {
                                        if (1 > cm) {
                                            var Gv = cm
                                        } else {
                                            P(N.ca | 0, 723, N.Z | 0, N.V | 0), Gv = q[vl]
                                        }
                                        var Ir = (hn - Gv) / (1 - Gv), rB = xi + 36 | 0, Hv = 1 - Ir, iR = q[xi + 40 >> 2] * Hv + q[xi + 48 >> 2] * Ir, sB = rB, jR = (M[0] = q[rB >> 2] * Hv + q[xi + 44 >> 2] * Ir, t[0]), kR = (M[0] = iR, t[0]), lR = 0 | jR, mR = kR | 0, vi = sB | 0;
                                        wh = vi >> 2;
                                        l[wh] = lR;
                                        ch = sB + 4 | 0;
                                        pi = ch >> 2;
                                        l[pi] = mR;
                                        var tB = xi + 52 | 0;
                                        q[tB >> 2] = Hv * q[tB >> 2] + Ir * q[xi + 56 >> 2];
                                        var Jr = q[vl] = hn
                                    } else {
                                        if (hn < cm) {
                                            if (1 > hn) {
                                                var Iv = hn
                                            } else {
                                                P(N.ca | 0, 723, N.Z | 0, N.V | 0), Iv = q[ul]
                                            }
                                            var Kr = (cm - Iv) / (1 - Iv), uB = yi + 36 | 0, Jv = 1 - Kr, nR = q[yi + 40 >> 2] * Jv + q[yi + 48 >> 2] * Kr, vB = uB, oR = (M[0] = q[uB >> 2] * Jv + q[yi + 44 >> 2] * Kr, t[0]), pR = (M[0] = nR, t[0]), qR = 0 | oR, rR = pR | 0, vi = vB | 0;
                                            wh = vi >> 2;
                                            l[wh] = qR;
                                            ch = vB + 4 | 0;
                                            pi = ch >> 2;
                                            l[pi] = rR;
                                            var wB = yi + 52 | 0;
                                            q[wB >> 2] = Jv * q[wB >> 2] + Kr * q[yi + 56 >> 2];
                                            q[ul] = cm
                                        }
                                        Jr = cm
                                    }
                                    1 > Jr || P(N.t | 0, 676, N.vb | 0, N.V | 0);
                                    var sR = l[Bg + 14], tR = l[Bg + 15];
                                    l[zq >> 2] = 0;
                                    l[Aq >> 2] = 0;
                                    q[On >> 2] = 0;
                                    l[Ft >> 2] = 0;
                                    l[Gt >> 2] = 0;
                                    q[Ht >> 2] = 0;
                                    Hi(It, l[Cv + 12 >> 2], sR);
                                    Hi(Jt, l[Dv + 12 >> 2], tR);
                                    for (var xj = gR >> 2, Io = Pn >> 2, Kv = xj + 9; xj < Kv; xj++, Io++) {
                                        l[Io] = l[xj]
                                    }
                                    xj = hR >> 2;
                                    Io = Qn >> 2;
                                    for (Kv = xj + 9; xj < Kv; xj++, Io++) {
                                        l[Io] = l[xj]
                                    }
                                    q[Kt >> 2] = 1;
                                    var xB = Am, Ek = Xe, Fk = Ha, Gk = Ha, Hk = Ha, Ik = Ha, Lr = Ha, Mr = Ha, Nr = Ha, Or = Ha, Jk = Ha, Kk = Ha, Ye = a;
                                    a += 308;
                                    var dm = Ha, zi = Ye + 36, Lv = Ye + 72, eh = Ye + 84, yB = Ye + 176, Pr = Ye + 200, zB = Ye + 300, AB = Ye + 304;
                                    l[Up >> 2] = l[Up >> 2] + 1 | 0;
                                    Kk = (xB | 0) >> 2;
                                    l[Kk] = 0;
                                    var BB = Ek + 128 | 0, uR = q[BB >> 2], Jk = (xB + 4 | 0) >> 2;
                                    q[Jk] = uR;
                                    for (var vR = Ek | 0, CB = Ek + 28 | 0, yj = (Ek + 56 | 0) >> 2, Jo = Ye >> 2, Nv = yj + 9; yj < Nv; yj++, Jo++) {
                                        l[Jo] = l[yj]
                                    }
                                    yj = (Ek + 92 | 0) >> 2;
                                    Jo = zi >> 2;
                                    for (Nv = yj + 9; yj < Nv; yj++, Jo++) {
                                        l[Jo] = l[yj]
                                    }
                                    var Or = (Ye + 24 | 0) >> 2, DB = q[Or], FB = 6.2831854820251465 * Vp(DB / 6.2831854820251465), GB = DB - FB;
                                    q[Or] = GB;
                                    var Nr = (Ye + 28 | 0) >> 2, HB = q[Nr] - FB;
                                    q[Nr] = HB;
                                    var Mr = (zi + 24 | 0) >> 2, IB = q[Mr], JB = 6.2831854820251465 * Vp(IB / 6.2831854820251465), KB = IB - JB;
                                    q[Mr] = KB;
                                    var Lr = (zi + 28 | 0) >> 2, LB = q[Lr] - JB;
                                    q[Lr] = LB;
                                    var MB = q[BB >> 2], NB = q[Ek + 24 >> 2] + q[Ek + 52 >> 2] - .014999999664723873, jn = .004999999888241291 > NB ? .004999999888241291 : NB;
                                    .0012499999720603228 < jn || P(N.Da | 0, 280, N.ie | 0, N.rf | 0);
                                    i[Lv + 4 >> 1] = 0;
                                    Ik = eh >> 2;
                                    Hk = Ek >> 2;
                                    l[Ik] = l[Hk];
                                    l[Ik + 1] = l[Hk + 1];
                                    l[Ik + 2] = l[Hk + 2];
                                    l[Ik + 3] = l[Hk + 3];
                                    l[Ik + 4] = l[Hk + 4];
                                    l[Ik + 5] = l[Hk + 5];
                                    l[Ik + 6] = l[Hk + 6];
                                    Gk = (eh + 28 | 0) >> 2;
                                    Fk = CB >> 2;
                                    l[Gk] = l[Fk];
                                    l[Gk + 1] = l[Fk + 1];
                                    l[Gk + 2] = l[Fk + 2];
                                    l[Gk + 3] = l[Fk + 3];
                                    l[Gk + 4] = l[Fk + 4];
                                    l[Gk + 5] = l[Fk + 5];
                                    l[Gk + 6] = l[Fk + 6];
                                    c[eh + 88 | 0] = 0;
                                    var wR = Ye + 8 | 0, xR = Ye + 12 | 0, yR = Ye + 16 | 0, zR = Ye + 20 | 0, AR = Ye | 0, BR = Ye + 4 | 0, CR = zi + 8 | 0, DR = zi + 12 | 0, ER = zi + 16 | 0, FR = zi + 20 | 0, GR = zi | 0, HR = zi + 4 | 0, IR = eh + 56 | 0, JR = eh + 60 | 0, KR = eh + 64 | 0, LR = eh + 68 | 0, MR = eh + 72 | 0, NR = eh + 76 | 0, OR = eh + 80 | 0, PR = eh + 84 | 0, QR = yB + 16 | 0, Ov = jn + .0012499999720603228, OB = jn - .0012499999720603228, Kf = 0, Ko = 0, PB = GB, QB = HB, RB = KB, SB = LB;
                                    a:for (; ;) {
                                        var kn = 1 - Kf, RR = q[wR >> 2] * kn + q[yR >> 2] * Kf, SR = q[xR >> 2] * kn + q[zR >> 2] * Kf, TB = kn * PB + QB * Kf, Pv = mm(TB), Qv = nm(TB), UB = q[AR >> 2], VB = q[BR >> 2], TR = RR - (Qv * UB - Pv * VB), UR = SR - (Pv * UB + Qv * VB), VR = q[CR >> 2] * kn + q[ER >> 2] * Kf, WR = q[DR >> 2] * kn + q[FR >> 2] * Kf, WB = kn * RB + SB * Kf, Rv = mm(WB), Sv = nm(WB), XB = q[GR >> 2], YB = q[HR >> 2], XR = VR - (Sv * XB - Rv * YB), YR = WR - (Rv * XB + Sv * YB);
                                        q[IR >> 2] = TR;
                                        q[JR >> 2] = UR;
                                        q[KR >> 2] = Pv;
                                        q[LR >> 2] = Qv;
                                        q[MR >> 2] = XR;
                                        q[NR >> 2] = YR;
                                        q[OR >> 2] = Rv;
                                        q[PR >> 2] = Sv;
                                        Ii(yB, Lv, eh);
                                        var ZB = q[QR >> 2];
                                        if (0 >= ZB) {
                                            l[Kk] = 2;
                                            q[Jk] = 0;
                                            var Lo = Ko, dm = 29;
                                            break
                                        }
                                        if (ZB < Ov) {
                                            l[Kk] = 3;
                                            q[Jk] = Kf;
                                            Lo = Ko;
                                            dm = 29;
                                            break
                                        }
                                        var fg = Pr, Lk = Lv, Tv = vR, ZR = Ye, Uv = CB, $R = zi, em = Kf, Ai = Ha, Bi = Ha, Qr = Ha, Mo = Ha, Lf = fg >> 2, Mo = (fg | 0) >> 2;
                                        l[Mo] = Tv;
                                        Qr = (fg + 4 | 0) >> 2;
                                        l[Qr] = Uv;
                                        var Vv = jd[Lk + 4 >> 1];
                                        0 != Vv << 16 >> 16 & 3 > (Vv & 65535) || P(N.Da | 0, 50, N.se | 0, N.kh | 0);
                                        for (var $B = fg + 8 | 0, zj = ZR >> 2, No = $B >> 2, Wv = zj + 9; zj < Wv; zj++, No++) {
                                            l[No] = l[zj]
                                        }
                                        for (var aC = fg + 44 | 0, zj = $R >> 2, No = aC >> 2, Wv = zj + 9; zj < Wv; zj++, No++) {
                                            l[No] = l[zj]
                                        }
                                        var ln = 1 - em, aS = q[Lf + 4] * ln + q[Lf + 6] * em, bS = q[Lf + 5] * ln + q[Lf + 7] * em, bC = ln * q[Lf + 8] + q[Lf + 9] * em, Ci = mm(bC), Di = nm(bC), cC = q[$B >> 2], dC = q[Lf + 3], Xv = aS - (Di * cC - Ci * dC), Yv = bS - (Ci * cC + Di * dC), cS = q[Lf + 13] * ln + q[Lf + 15] * em, dS = q[Lf + 14] * ln + q[Lf + 16] * em, eC = ln * q[Lf + 17] + q[Lf + 18] * em, Ei = mm(eC), Fi = nm(eC), fC = q[aC >> 2], gC = q[Lf + 12], Zv = cS - (Fi * fC - Ei * gC), $v = dS - (Ei * fC + Fi * gC);
                                        if (1 == Vv << 16 >> 16) {
                                            l[Lf + 20] = 0;
                                            var hC = l[Mo], iC = ed[Lk + 6 | 0] & 255;
                                            (l[hC + 20 >> 2] | 0) > (iC | 0) || P(N.i | 0, 103, N.h | 0, N.j | 0);
                                            var jC = (iC << 3) + l[hC + 16 >> 2] | 0, Aj = jC | 0, Bi = Aj >> 2, Bj = jC + 4 | 0, Ai = Bj >> 2, eS = l[Ai], kC = (t[0] = l[Bi], M[0]), lC = (t[0] = eS, M[0]), mC = l[Qr], nC = ed[Lk + 9 | 0] & 255;
                                            (l[mC + 20 >> 2] | 0) > (nC | 0) || P(N.i | 0, 103, N.h | 0, N.j | 0);
                                            var oC = (nC << 3) + l[mC + 16 >> 2] | 0, Aj = oC | 0, Bi = Aj >> 2, Bj = oC + 4 | 0, Ai = Bj >> 2, fS = l[Ai], pC = (t[0] = l[Bi], M[0]), qC = (t[0] = fS, M[0]), aw = fg + 92 | 0, Rr = Fi * pC - Ei * qC + Zv - (Di * kC - Ci * lC + Xv), Sr = Ei * pC + Fi * qC + $v - (Ci * kC + Di * lC + Yv), gS = (M[0] = Rr, t[0]), hS = (M[0] = Sr, t[0]) | 0;
                                            l[aw >> 2] = 0 | gS;
                                            l[aw + 4 >> 2] = hS;
                                            var rC = Fh(Rr * Rr + Sr * Sr);
                                            if (1.1920928955078125e-7 <= rC) {
                                                var iS = fg + 96 | 0, sC = 1 / rC;
                                                q[aw >> 2] = Rr * sC;
                                                q[iS >> 2] = Sr * sC
                                            }
                                        } else {
                                            var bw = Lk + 6 | 0, tC = Lk + 7 | 0, uC = fg + 80 | 0;
                                            if (c[bw] << 24 >> 24 == c[tC] << 24 >> 24) {
                                                l[uC >> 2] = 2;
                                                var vC = ed[Lk + 9 | 0] & 255, wC = Uv + 20 | 0, xC = o[wC >> 2];
                                                if ((xC | 0) > (vC | 0)) {
                                                    var yC = xC
                                                } else {
                                                    P(N.i | 0, 103, N.h | 0, N.j | 0), yC = l[wC >> 2]
                                                }
                                                var zC = Uv + 16 | 0, AC = o[zC >> 2], BC = (vC << 3) + AC | 0, jS = l[BC + 4 >> 2], CC = (t[0] = l[BC >> 2], M[0]), DC = (t[0] = jS, M[0]), EC = ed[Lk + 10 | 0] & 255;
                                                if ((yC | 0) > (EC | 0)) {
                                                    var FC = AC
                                                } else {
                                                    P(N.i | 0, 103, N.h | 0, N.j | 0), FC = l[zC >> 2]
                                                }
                                                var GC = (EC << 3) + FC | 0, kS = l[GC + 4 >> 2], HC = (t[0] = l[GC >> 2], M[0]), IC = (t[0] = kS, M[0]), Oo = fg + 92 | 0, Po = IC - DC, Qo = -1 * (HC - CC), lS = (M[0] = Po, t[0]), mS = (M[0] = Qo, t[0]) | 0;
                                                l[Oo >> 2] = 0 | lS;
                                                l[Oo + 4 >> 2] = mS;
                                                var JC = Oo | 0, KC = fg + 96 | 0, LC = Fh(Po * Po + Qo * Qo);
                                                if (1.1920928955078125e-7 > LC) {
                                                    var cw = Po, dw = Qo
                                                } else {
                                                    var MC = 1 / LC, NC = Po * MC;
                                                    q[JC >> 2] = NC;
                                                    var OC = Qo * MC;
                                                    q[KC >> 2] = OC;
                                                    cw = NC;
                                                    dw = OC
                                                }
                                                var nS = Fi * cw - Ei * dw, oS = Ei * cw + Fi * dw, ew = .5 * (CC + HC), fw = .5 * (DC + IC), PC = fg + 84 | 0, pS = (M[0] = ew, t[0]), qS = (M[0] = fw, t[0]) | 0, gw = PC | 0;
                                                l[gw >> 2] = 0 | pS;
                                                var hw = PC + 4 | 0;
                                                l[hw >> 2] = qS;
                                                var rS = Fi * ew - Ei * fw + Zv, sS = Ei * ew + Fi * fw + $v, QC = ed[bw] & 255;
                                                (l[Tv + 20 >> 2] | 0) > (QC | 0) || P(N.i | 0, 103, N.h | 0, N.j | 0);
                                                var RC = (QC << 3) + l[Tv + 16 >> 2] | 0, Aj = RC | 0, Bi = Aj >> 2, Bj = RC + 4 | 0, Ai = Bj >> 2, tS = l[Ai], SC = (t[0] = l[Bi], M[0]), TC = (t[0] = tS, M[0]);
                                                if (0 > (Di * SC - Ci * TC + Xv - rS) * nS + (Ci * SC + Di * TC + Yv - sS) * oS) {
                                                    var uS = -q[KC >> 2], vS = (M[0] = -q[JC >> 2], t[0]), wS = (M[0] = uS, t[0]) | 0, iw = Oo | 0;
                                                    l[iw >> 2] = 0 | vS;
                                                    var jw = Oo + 4 | 0;
                                                    l[jw >> 2] = wS
                                                }
                                            } else {
                                                l[uC >> 2] = 1;
                                                var kw = l[Mo], UC = ed[bw] & 255, VC = o[kw + 20 >> 2];
                                                if ((VC | 0) > (UC | 0)) {
                                                    var WC = kw, XC = VC
                                                } else {
                                                    P(N.i | 0, 103, N.h | 0, N.j | 0);
                                                    var YC = l[Mo], WC = YC, XC = l[YC + 20 >> 2]
                                                }
                                                var ZC = (UC << 3) + l[kw + 16 >> 2] | 0, xS = l[ZC + 4 >> 2], $C = (t[0] = l[ZC >> 2], M[0]), aD = (t[0] = xS, M[0]), bD = ed[tC] & 255;
                                                (XC | 0) > (bD | 0) || P(N.i | 0, 103, N.h | 0, N.j | 0);
                                                var cD = (bD << 3) + l[WC + 16 >> 2] | 0, Aj = cD | 0, Bi = Aj >> 2, Bj = cD + 4 | 0, Ai = Bj >> 2, yS = l[Ai], dD = (t[0] = l[Bi], M[0]), eD = (t[0] = yS, M[0]), Ro = fg + 92 | 0, So = eD - aD, To = -1 * (dD - $C), zS = (M[0] = So, t[0]), AS = (M[0] = To, t[0]) | 0;
                                                l[Ro >> 2] = 0 | zS;
                                                l[Ro + 4 >> 2] = AS;
                                                var fD = Ro | 0, gD = fg + 96 | 0, hD = Fh(So * So + To * To);
                                                if (1.1920928955078125e-7 > hD) {
                                                    var lw = So, mw = To
                                                } else {
                                                    var iD = 1 / hD, jD = So * iD;
                                                    q[fD >> 2] = jD;
                                                    var kD = To * iD;
                                                    q[gD >> 2] = kD;
                                                    lw = jD;
                                                    mw = kD
                                                }
                                                var BS = Di * lw - Ci * mw, CS = Ci * lw + Di * mw, nw = .5 * ($C + dD), ow = .5 * (aD + eD), lD = fg + 84 | 0, DS = (M[0] = nw, t[0]), ES = (M[0] = ow, t[0]), FS = 0 | DS, GS = ES | 0, gw = lD | 0;
                                                l[gw >> 2] = FS;
                                                hw = lD + 4 | 0;
                                                l[hw >> 2] = GS;
                                                var HS = Di * nw - Ci * ow + Xv, IS = Ci * nw + Di * ow + Yv, mD = l[Qr], nD = ed[Lk + 9 | 0] & 255;
                                                (l[mD + 20 >> 2] | 0) > (nD | 0) || P(N.i | 0, 103, N.h | 0, N.j | 0);
                                                var oD = (nD << 3) + l[mD + 16 >> 2] | 0, Aj = oD | 0, Bi = Aj >> 2, Bj = oD + 4 | 0, Ai = Bj >> 2, JS = l[Ai], pD = (t[0] = l[Bi], M[0]), qD = (t[0] = JS, M[0]);
                                                if (0 > (Fi * pD - Ei * qD + Zv - HS) * BS + (Ei * pD + Fi * qD + $v - IS) * CS) {
                                                    var KS = -q[gD >> 2], LS = (M[0] = -q[fD >> 2], t[0]), MS = (M[0] = KS, t[0]) | 0, iw = Ro | 0;
                                                    l[iw >> 2] = 0 | LS;
                                                    jw = Ro + 4 | 0;
                                                    l[jw >> 2] = MS
                                                }
                                            }
                                        }
                                        for (var rD = 0, Uo = MB; ;) {
                                            var Tr, fm = Pr, gm = Uo, Vo = Ha, Ur = Ha, Wo = Ha, Vr = Ha, Xo = Ha, Yo = Ha, mn = AB >> 2, nn = zB >> 2, Dd = fm >> 2, De = Ha, on = 1 - gm, NS = q[Dd + 4] * on + q[Dd + 6] * gm, OS = q[Dd + 5] * on + q[Dd + 7] * gm, sD = on * q[Dd + 8] + q[Dd + 9] * gm, gg = mm(sD), hg = nm(sD), tD = q[Dd + 2], uD = q[Dd + 3], pw = NS - (hg * tD - gg * uD), qw = OS - (gg * tD + hg * uD), PS = q[Dd + 13] * on + q[Dd + 15] * gm, QS = q[Dd + 14] * on + q[Dd + 16] * gm, vD = on * q[Dd + 17] + q[Dd + 18] * gm, ig = mm(vD), jg = nm(vD), wD = q[Dd + 11], xD = q[Dd + 12], rw = PS - (jg * wD - ig * xD), sw = QS - (ig * wD + jg * xD), tw = l[Dd + 20];
                                            if (0 == (tw | 0)) {
                                                var yD = fm + 92 | 0, Wr = q[yD >> 2], zD = fm + 96 | 0, uw = q[zD >> 2], AD = hg * Wr + gg * uw, BD = Wr * -gg + hg * uw, CD = -uw, DD = jg * -Wr + ig * CD, ED = Wr * ig + jg * CD, FD = fm | 0, GD = l[FD >> 2], Yo = l[GD + 16 >> 2] >> 2, HD = l[GD + 20 >> 2], RS = 1 < (HD | 0);
                                                b:do {
                                                    if (RS) {
                                                        for (var ID = 0, vw = q[Yo] * AD + q[Yo + 1] * BD, Zo = 1; ;) {
                                                            var JD = q[(Zo << 3 >> 2) + Yo] * AD + q[((Zo << 3) + 4 >> 2) + Yo] * BD, KD = JD > vw, LD = KD ? Zo : ID, SS = KD ? JD : vw, MD = Zo + 1 | 0;
                                                            if ((MD | 0) == (HD | 0)) {
                                                                var ND = LD;
                                                                break b
                                                            }
                                                            ID = LD;
                                                            vw = SS;
                                                            Zo = MD
                                                        }
                                                    } else {
                                                        ND = 0
                                                    }
                                                } while (0);
                                                l[nn] = ND;
                                                var OD = fm + 4 | 0, PD = l[OD >> 2], Xo = l[PD + 16 >> 2] >> 2, QD = l[PD + 20 >> 2], TS = 1 < (QD | 0);
                                                b:do {
                                                    if (TS) {
                                                        for (var RD = 0, ww = q[Xo] * DD + q[Xo + 1] * ED, $o = 1; ;) {
                                                            var SD = q[($o << 3 >> 2) + Xo] * DD + q[(($o << 3) + 4 >> 2) + Xo] * ED, TD = SD > ww, UD = TD ? $o : RD, US = TD ? SD : ww, VD = $o + 1 | 0;
                                                            if ((VD | 0) == (QD | 0)) {
                                                                var xw = UD;
                                                                break b
                                                            }
                                                            RD = UD;
                                                            ww = US;
                                                            $o = VD
                                                        }
                                                    } else {
                                                        xw = 0
                                                    }
                                                } while (0);
                                                l[mn] = xw;
                                                var WD = l[FD >> 2], yw = l[nn];
                                                if (-1 < (yw | 0)) {
                                                    if ((l[WD + 20 >> 2] | 0) > (yw | 0)) {
                                                        var Xr = xw, De = 12
                                                    } else {
                                                        De = 11
                                                    }
                                                } else {
                                                    De = 11
                                                }
                                                11 == De && (P(N.i | 0, 103, N.h | 0, N.j | 0), Xr = l[mn]);
                                                var XD = (yw << 3) + l[WD + 16 >> 2] | 0, VS = l[XD + 4 >> 2], YD = (t[0] = l[XD >> 2], M[0]), ZD = (t[0] = VS, M[0]), $D = l[OD >> 2], De = -1 < (Xr | 0) ? (l[$D + 20 >> 2] | 0) > (Xr | 0) ? 15 : 14 : 14;
                                                14 == De && P(N.i | 0, 103, N.h | 0, N.j | 0);
                                                var aE = (Xr << 3) + l[$D + 16 >> 2] | 0, WS = l[aE + 4 >> 2], bE = (t[0] = l[aE >> 2], M[0]), cE = (t[0] = WS, M[0]), Yr = (jg * bE - ig * cE + rw - (hg * YD - gg * ZD + pw)) * q[yD >> 2] + (ig * bE + jg * cE + sw - (gg * YD + hg * ZD + qw)) * q[zD >> 2]
                                            } else {
                                                if (1 == (tw | 0)) {
                                                    var dE = q[Dd + 23], eE = q[Dd + 24], zw = hg * dE - gg * eE, fE = gg * dE + hg * eE, gE = q[Dd + 21], hE = q[Dd + 22], XS = hg * gE - gg * hE + pw, YS = gg * gE + hg * hE + qw, iE = -fE, jE = jg * -zw + ig * iE, kE = zw * ig + jg * iE;
                                                    l[nn] = -1;
                                                    var Vr = (fm + 4 | 0) >> 2, lE = l[Vr], Wo = l[lE + 16 >> 2] >> 2, mE = l[lE + 20 >> 2], ZS = 1 < (mE | 0);
                                                    do {
                                                        if (ZS) {
                                                            for (var nE = 0, Aw = q[Wo] * jE + q[Wo + 1] * kE, ap = 1; ;) {
                                                                var oE = q[(ap << 3 >> 2) + Wo] * jE + q[((ap << 3) + 4 >> 2) + Wo] * kE, pE = oE > Aw, bp = pE ? ap : nE, $S = pE ? oE : Aw, qE = ap + 1 | 0;
                                                                if ((qE | 0) == (mE | 0)) {
                                                                    break
                                                                }
                                                                nE = bp;
                                                                Aw = $S;
                                                                ap = qE
                                                            }
                                                            l[mn] = bp;
                                                            var rE = l[Vr];
                                                            if (-1 < (bp | 0)) {
                                                                Zr = bp, $r = rE, De = 21
                                                            } else {
                                                                var sE = bp, tE = rE, De = 22
                                                            }
                                                        } else {
                                                            var Zr = l[mn] = 0, $r = l[Vr], De = 21
                                                        }
                                                    } while (0);
                                                    if (21 == De) {
                                                        if ((l[$r + 20 >> 2] | 0) > (Zr | 0)) {
                                                            var uE = Zr, vE = $r, De = 23
                                                        } else {
                                                            sE = Zr, tE = $r, De = 22
                                                        }
                                                    }
                                                    22 == De && (P(N.i | 0, 103, N.h | 0, N.j | 0), uE = sE, vE = tE);
                                                    var wE = (uE << 3) + l[vE + 16 >> 2] | 0, Bw = wE | 0, Cw = wE + 4 | 0, aT = l[Cw >> 2], xE = (t[0] = l[Bw >> 2], M[0]), yE = (t[0] = aT, M[0]), Yr = (jg * xE - ig * yE + rw - XS) * zw + (ig * xE + jg * yE + sw - YS) * fE
                                                } else {
                                                    if (2 == (tw | 0)) {
                                                        var zE = q[Dd + 23], AE = q[Dd + 24], Dw = jg * zE - ig * AE, BE = ig * zE + jg * AE, CE = q[Dd + 21], DE = q[Dd + 22], bT = jg * CE - ig * DE + rw, cT = ig * CE + jg * DE + sw, EE = -BE, FE = hg * -Dw + gg * EE, GE = Dw * gg + hg * EE;
                                                        l[mn] = -1;
                                                        var Ur = (fm | 0) >> 2, HE = l[Ur], Vo = l[HE + 16 >> 2] >> 2, IE = l[HE + 20 >> 2], dT = 1 < (IE | 0);
                                                        do {
                                                            if (dT) {
                                                                for (var JE = 0, Ew = q[Vo] * FE + q[Vo + 1] * GE, cp = 1; ;) {
                                                                    var KE = q[(cp << 3 >> 2) + Vo] * FE + q[((cp << 3) + 4 >> 2) + Vo] * GE, LE = KE > Ew, dp = LE ? cp : JE, eT = LE ? KE : Ew, ME = cp + 1 | 0;
                                                                    if ((ME | 0) == (IE | 0)) {
                                                                        break
                                                                    }
                                                                    JE = dp;
                                                                    Ew = eT;
                                                                    cp = ME
                                                                }
                                                                l[nn] = dp;
                                                                var NE = l[Ur];
                                                                if (-1 < (dp | 0)) {
                                                                    as = dp, bs = NE, De = 29
                                                                } else {
                                                                    var OE = dp, PE = NE, De = 30
                                                                }
                                                            } else {
                                                                var as = l[nn] = 0, bs = l[Ur], De = 29
                                                            }
                                                        } while (0);
                                                        if (29 == De) {
                                                            if ((l[bs + 20 >> 2] | 0) > (as | 0)) {
                                                                var QE = as, RE = bs, De = 31
                                                            } else {
                                                                OE = as, PE = bs, De = 30
                                                            }
                                                        }
                                                        30 == De && (P(N.i | 0, 103, N.h | 0, N.j | 0), QE = OE, RE = PE);
                                                        var SE = (QE << 3) + l[RE + 16 >> 2] | 0, Bw = SE | 0, Cw = SE + 4 | 0, fT = l[Cw >> 2], TE = (t[0] = l[Bw >> 2], M[0]), UE = (t[0] = fT, M[0]), Yr = (hg * TE - gg * UE + pw - bT) * Dw + (gg * TE + hg * UE + qw - cT) * BE
                                                    } else {
                                                        P(N.Da | 0, 183, N.Me | 0, N.l | 0), l[nn] = -1, l[mn] = -1, Yr = 0
                                                    }
                                                }
                                            }
                                            Tr = Yr;
                                            if (Tr > Ov) {
                                                l[Kk] = 4;
                                                q[Jk] = MB;
                                                dm = 25;
                                                break a
                                            }
                                            if (Tr > OB) {
                                                var Fw = Uo
                                            } else {
                                                var VE = o[zB >> 2], WE = o[AB >> 2], Gw = lm(Pr, VE, WE, Kf);
                                                if (Gw < OB) {
                                                    l[Kk] = 1;
                                                    q[Jk] = Kf;
                                                    dm = 25;
                                                    break a
                                                }
                                                if (Gw <= Ov) {
                                                    l[Kk] = 3;
                                                    q[Jk] = Kf;
                                                    dm = 25;
                                                    break a
                                                }
                                                for (var cs = Uo, ep = Kf, ds = 0, es = Gw, Hw = Tr; ;) {
                                                    var fs = 0 == (ds & 1 | 0) ? .5 * (ep + cs) : ep + (jn - es) * (cs - ep) / (Hw - es), gs = lm(Pr, VE, WE, fs), Iw = gs - jn;
                                                    if (.0012499999720603228 > (0 < Iw ? Iw : -Iw)) {
                                                        var Jw = ds, XE = fs;
                                                        break
                                                    }
                                                    var hs = gs > jn, gT = hs ? Hw : gs, hT = hs ? gs : es, iT = hs ? fs : ep, jT = hs ? cs : fs, YE = ds + 1 | 0;
                                                    l[Wp >> 2] = l[Wp >> 2] + 1 | 0;
                                                    if (50 == (YE | 0)) {
                                                        Jw = 50;
                                                        XE = Uo;
                                                        break
                                                    }
                                                    cs = jT;
                                                    ep = iT;
                                                    ds = YE;
                                                    es = hT;
                                                    Hw = gT
                                                }
                                                var ZE = l[Xp >> 2];
                                                l[Xp >> 2] = (ZE | 0) > (Jw | 0) ? ZE : Jw;
                                                var $E = rD + 1 | 0;
                                                if (8 != ($E | 0)) {
                                                    rD = $E;
                                                    Uo = XE;
                                                    continue
                                                }
                                                Fw = Kf
                                            }
                                            var aF = Ko + 1 | 0;
                                            l[Yp >> 2] = l[Yp >> 2] + 1 | 0;
                                            if (20 == (aF | 0)) {
                                                l[Kk] = 1;
                                                q[Jk] = Fw;
                                                Lo = 20;
                                                dm = 29;
                                                break a
                                            }
                                            Kf = Fw;
                                            Ko = aF;
                                            PB = q[Or];
                                            QB = q[Nr];
                                            RB = q[Mr];
                                            SB = q[Lr];
                                            continue a
                                        }
                                    }
                                    25 == dm && (l[Yp >> 2] = l[Yp >> 2] + 1 | 0, Lo = Ko + 1 | 0);
                                    var bF = l[Zp >> 2];
                                    l[Zp >> 2] = (bF | 0) > (Lo | 0) ? bF : Lo;
                                    a = Ye;
                                    if (3 == (l[Lt >> 2] | 0)) {
                                        var cF = Jr + (1 - Jr) * q[Rn >> 2], Nw = 1 > cF ? cF : 1
                                    } else {
                                        Nw = 1
                                    }
                                    q[Bg + 33] = Nw;
                                    l[wl] |= 32;
                                    var Ow = Nw
                                } else {
                                    Ow = q[Bg + 33]
                                }
                                Ow < Vd ? (Ck = vj, Dk = Ow) : (Ck = Me, Dk = Vd)
                            }
                        }
                    } while (0);
                    Me = Ck;
                    Vd = Dk;
                    Vn = vj + 12 | 0
                }
            }
            c[El] = Ll;
            var gp = l[uk];
            xn(gp, l[uk + 5]);
            xn(gp, l[uk + 6]);
            xn(gp, l[uk + 4]);
            xn(gp, l[sk]);
            xn(gp, vk);
            a = dg;
            q[m + 25756] = 0;
            p = 12
        } else {
            var dF = Gn;
            p = 13
        }
    }
    12 == p && (dF = q[h]);
    0 < dF && (q[A >> 2] = q[k + 1]);
    var Pw = l[j], kT = 0 == (Pw & 4 | 0);
    do {
        if (kT) {
            var Qw = Pw
        } else {
            var eF = l[m + 25738];
            if (0 == (eF | 0)) {
                Qw = Pw
            } else {
                var Rw = eF;
                for (g = Rw >> 2; ;) {
                    q[g + 19] = 0;
                    q[g + 20] = 0;
                    q[g + 21] = 0;
                    var fF = l[g + 24];
                    if (0 == (fF | 0)) {
                        break
                    }
                    Rw = fF;
                    g = Rw >> 2
                }
                Qw = l[j]
            }
        }
    } while (0);
    l[j] = Qw & -3;
    q[m + 25749] = 0;
    a = n
}
function $p(b, d, e, f) {
    var g, h = e >> 2, j = a;
    a += 112;
    var k, m = j + 8, n = j + 16, p = j + 24, u = j + 32, r = j + 40, w = j + 48, x = l[d + 12 >> 2], d = x >> 2, y = l[d + 1];
    a:do {
        if (0 == (y | 0)) {
            g = q[h + 3];
            var A = q[d + 3];
            k = q[h + 2];
            var C = q[d + 4], z = k * A + g * C + q[h + 1];
            q[j >> 2] = g * A - k * C + q[h];
            q[j + 4 >> 2] = z;
            A = q[d + 2];
            q[m >> 2] = g - 0;
            q[m + 4 >> 2] = k;
            g = l[b + 102984 >> 2];
            K[l[l[g >> 2] + 20 >> 2]](g, j, A, m, f)
        } else {
            if (1 == (y | 0)) {
                g = q[h + 3];
                z = q[d + 3];
                k = q[h + 2];
                var D = q[d + 4], A = q[h], C = q[h + 1], E = k * z + g * D + C;
                q[n >> 2] = g * z - k * D + A;
                q[n + 4 >> 2] = E;
                D = x + 20 | 0;
                z = q[D >> 2];
                D = q[D + 4 >> 2];
                C = k * z + g * D + C;
                q[p >> 2] = g * z - k * D + A;
                q[p + 4 >> 2] = C;
                g = l[b + 102984 >> 2];
                K[l[l[g >> 2] + 24 >> 2]](g, n, p, f)
            } else {
                if (3 == (y | 0)) {
                    k = l[d + 4];
                    g = l[d + 3] >> 2;
                    var A = e + 12 | 0, G = q[A >> 2], E = q[g], C = e + 8 | 0, H = q[C >> 2], F = q[g + 1], z = e | 0, I = q[z >> 2], D = e + 4 | 0, J = q[D >> 2], L = H * E + G * F + J;
                    q[u >> 2] = G * E - H * F + I;
                    q[u + 4 >> 2] = L;
                    if (1 < (k | 0)) {
                        for (var E = r | 0, F = r + 4 | 0, L = b + 102984 | 0, O = r, R = u, T = 1, S = J; ;) {
                            var J = q[(T << 3 >> 2) + g], U = q[((T << 3) + 4 >> 2) + g], S = H * J + G * U + S;
                            q[E >> 2] = G * J - H * U + I;
                            q[F >> 2] = S;
                            J = l[L >> 2];
                            K[l[l[J >> 2] + 24 >> 2]](J, u, r, f);
                            J = l[L >> 2];
                            K[l[l[J >> 2] + 16 >> 2]](J, u, .05000000074505806, f);
                            J = l[O + 4 >> 2];
                            l[R >> 2] = l[O >> 2];
                            l[R + 4 >> 2] = J;
                            T = T + 1 | 0;
                            if ((T | 0) == (k | 0)) {
                                break a
                            }
                            G = q[A >> 2];
                            H = q[C >> 2];
                            I = q[z >> 2];
                            S = q[D >> 2]
                        }
                    }
                } else {
                    if (2 == (y | 0)) {
                        g = l[d + 37];
                        if (9 > (g | 0)) {
                            if (k = w | 0, 0 < (g | 0)) {
                                Q = k, k = 12
                            } else {
                                var W = k;
                                k = 14
                            }
                        } else {
                            P(N.t | 0, 1077, N.Ce | 0, N.zh | 0);
                            var Q = w | 0;
                            k = 12
                        }
                        b:do {
                            if (12 == k) {
                                A = x + 20 | 0;
                                C = q[h + 3];
                                z = q[h + 2];
                                D = q[h];
                                E = q[h + 1];
                                for (F = 0; ;) {
                                    if (R = q[A + (F << 3) >> 2], T = q[A + (F << 3) + 4 >> 2], O = z * R + C * T + E, L = (F << 3) + w | 0, R = (M[0] = C * R - z * T + D, t[0]), O = (M[0] = O, t[0]) | 0, l[L >> 2] = 0 | R, l[L + 4 >> 2] = O, F = F + 1 | 0, (F | 0) == (g | 0)) {
                                        W = Q;
                                        break b
                                    }
                                }
                            }
                        } while (0);
                        k = l[b + 102984 >> 2];
                        K[l[l[k >> 2] + 12 >> 2]](k, W, g, f)
                    }
                }
            }
        }
    } while (0);
    a = j
}
function aq(b) {
    var d, e, f, g, h, j = a;
    a += 120;
    var k, m = j + 12, n = j + 24, p = j + 36, u = j + 48, r = j + 60;
    h = r >> 2;
    var w = j + 72, x = j + 104;
    g = (b + 102984 | 0) >> 2;
    var y = l[g], A = 0 == (y | 0);
    a:do {
        if (!A) {
            var C = l[y + 4 >> 2], z = 0 == (C & 1 | 0);
            b:do {
                if (!z) {
                    var D = l[b + 102952 >> 2];
                    if (0 != (D | 0)) {
                        for (var E = j | 0, G = j + 4 | 0, H = j + 8 | 0, F = p | 0, I = p + 4 | 0, J = p + 8 | 0, L = u | 0, O = u + 4 | 0, R = u + 8 | 0, T = m | 0, S = m + 4 | 0, U = m + 8 | 0, W = n | 0, Q = n + 4 | 0, $ = n + 8 | 0, ea = D; ;) {
                            var sa = ea + 12 | 0, Ba = l[ea + 100 >> 2], oa = 0 == (Ba | 0);
                            c:do {
                                if (!oa) {
                                    for (var ga = ea + 4 | 0, qa = ea | 0, la = Ba; ;) {
                                        var Ca = i[ga >> 1];
                                        if (0 == (Ca & 32) << 16 >> 16) {
                                            q[E >> 2] = .5, q[G >> 2] = .5, q[H >> 2] = .30000001192092896, $p(b, la, sa, j)
                                        } else {
                                            var ia = l[qa >> 2];
                                            0 == (ia | 0) ? (q[T >> 2] = .5, q[S >> 2] = .8999999761581421, q[U >> 2] = .5, $p(b, la, sa, m)) : 1 == (ia | 0) ? (q[W >> 2] = .5, q[Q >> 2] = .5, q[$ >> 2] = .8999999761581421, $p(b, la, sa, n)) : 0 == (Ca & 2) << 16 >> 16 ? (q[F >> 2] = .6000000238418579, q[I >> 2] = .6000000238418579, q[J >> 2] = .6000000238418579, $p(b, la, sa, p)) : (q[L >> 2] = .8999999761581421, q[O >> 2] = .699999988079071, q[R >> 2] = .699999988079071, $p(b, la, sa, u))
                                        }
                                        var ya = l[la + 4 >> 2];
                                        if (0 == (ya | 0)) {
                                            break c
                                        }
                                        la = ya
                                    }
                                }
                            } while (0);
                            var ta = l[ea + 96 >> 2];
                            if (0 == (ta | 0)) {
                                break b
                            }
                            ea = ta
                        }
                    }
                }
            } while (0);
            var Ia = 0 == (C & 2 | 0);
            b:do {
                if (!Ia) {
                    var na = l[b + 102956 >> 2];
                    if (0 != (na | 0)) {
                        for (var Z = na; ;) {
                            var ba = b, ca = Z, ma = Ha, ka = Ha, aa = Ha, ra = a;
                            a += 60;
                            var ha = ra + 8, za = ra + 16, X = ra + 24, ua = ra + 32, aa = ua >> 2, da = ra + 44, fa = ra + 52, Aa = l[ca + 52 >> 2] + 12 | 0, Qa = l[ca + 48 >> 2] + 12 | 0, pa = l[Qa + 4 >> 2];
                            l[ra >> 2] = l[Qa >> 2];
                            l[ra + 4 >> 2] = pa;
                            var cb = l[Aa + 4 >> 2];
                            l[ha >> 2] = l[Aa >> 2];
                            l[ha + 4 >> 2] = cb;
                            K[l[l[ca >> 2] >> 2]](za, ca);
                            K[l[l[ca >> 2] + 4 >> 2]](X, ca);
                            q[aa] = .5;
                            q[aa + 1] = .800000011920929;
                            q[aa + 2] = .800000011920929;
                            var Ra = l[ca + 4 >> 2];
                            if (3 == (Ra | 0)) {
                                var Ta = l[ba + 102984 >> 2];
                                K[l[l[Ta >> 2] + 24 >> 2]](Ta, za, X, ua)
                            } else {
                                if (4 == (Ra | 0)) {
                                    var $a = ca + 68 | 0, va = l[$a + 4 >> 2];
                                    l[da >> 2] = l[$a >> 2];
                                    l[da + 4 >> 2] = va;
                                    var Wa = ca + 76 | 0, fb = l[Wa + 4 >> 2];
                                    l[fa >> 2] = l[Wa >> 2];
                                    l[fa + 4 >> 2] = fb;
                                    var ka = (ba + 102984 | 0) >> 2, gb = l[ka];
                                    K[l[l[gb >> 2] + 24 >> 2]](gb, da, za, ua);
                                    var Xa = l[ka];
                                    K[l[l[Xa >> 2] + 24 >> 2]](Xa, fa, X, ua);
                                    var Ua = l[ka];
                                    K[l[l[Ua >> 2] + 24 >> 2]](Ua, da, fa, ua)
                                } else {
                                    if (5 != (Ra | 0)) {
                                        var ma = (ba + 102984 | 0) >> 2, Va = l[ma];
                                        K[l[l[Va >> 2] + 24 >> 2]](Va, ra, za, ua);
                                        var pb = l[ma];
                                        K[l[l[pb >> 2] + 24 >> 2]](pb, za, X, ua);
                                        var nb = l[ma];
                                        K[l[l[nb >> 2] + 24 >> 2]](nb, ha, X, ua)
                                    }
                                }
                            }
                            a = ra;
                            var La = l[Z + 12 >> 2];
                            if (0 == (La | 0)) {
                                break b
                            }
                            Z = La
                        }
                    }
                }
            } while (0);
            var qb = 0 == (C & 8 | 0);
            b:do {
                if (!qb) {
                    for (var bb = b + 102932 | 0; ;) {
                        var Fa = l[bb >> 2];
                        if (0 == (Fa | 0)) {
                            break b
                        }
                        bb = Fa + 12 | 0
                    }
                }
            } while (0);
            var Ma = 0 == (C & 4 | 0);
            b:do {
                if (!Ma) {
                    q[h] = .8999999761581421;
                    q[h + 1] = .30000001192092896;
                    q[h + 2] = .8999999761581421;
                    var wa = l[b + 102952 >> 2];
                    if (0 != (wa | 0)) {
                        for (var hb = b + 102884 | 0, Ya = b + 102876 | 0, Za = w | 0, Da = w | 0, Oa = w + 4 | 0, ib = w + 8 | 0, ab = w + 12 | 0, Ga = w + 16 | 0, jb = w + 20 | 0, Ea = w + 24 | 0, Pa = w + 28 | 0, Ja = wa; ;) {
                            var db = 0 == (i[Ja + 4 >> 1] & 32) << 16 >> 16;
                            c:do {
                                if (!db) {
                                    var xa = l[Ja + 100 >> 2];
                                    if (0 != (xa | 0)) {
                                        for (var Sa = xa; ;) {
                                            var Ka = Sa + 28 | 0, tb = 0 < (l[Ka >> 2] | 0);
                                            d:do {
                                                if (tb) {
                                                    for (var kb = Sa + 24 | 0, ub = 0; ;) {
                                                        var rb = l[(l[kb >> 2] + 24 >> 2) + (7 * ub | 0)];
                                                        k = -1 < (rb | 0) ? (l[hb >> 2] | 0) > (rb | 0) ? 34 : 33 : 33;
                                                        33 == k && P(N.q | 0, 159, N.H | 0, N.o | 0);
                                                        f = l[Ya >> 2] >> 2;
                                                        var Bb = q[f + (9 * rb | 0)], lb = q[f + (9 * rb | 0) + 1], yb = q[f + (9 * rb | 0) + 2], xb = q[f + (9 * rb | 0) + 3];
                                                        q[Da >> 2] = Bb;
                                                        q[Oa >> 2] = lb;
                                                        q[ib >> 2] = yb;
                                                        q[ab >> 2] = lb;
                                                        q[Ga >> 2] = yb;
                                                        q[jb >> 2] = xb;
                                                        q[Ea >> 2] = Bb;
                                                        q[Pa >> 2] = xb;
                                                        var Ib = l[g];
                                                        K[l[l[Ib >> 2] + 8 >> 2]](Ib, Za, 4, r);
                                                        var wb = ub + 1 | 0;
                                                        if ((wb | 0) >= (l[Ka >> 2] | 0)) {
                                                            break d
                                                        }
                                                        ub = wb
                                                    }
                                                }
                                            } while (0);
                                            var vb = l[Sa + 4 >> 2];
                                            if (0 == (vb | 0)) {
                                                break c
                                            }
                                            Sa = vb
                                        }
                                    }
                                }
                            } while (0);
                            var zb = l[Ja + 96 >> 2];
                            if (0 == (zb | 0)) {
                                break b
                            }
                            Ja = zb
                        }
                    }
                }
            } while (0);
            if (0 != (C & 16 | 0)) {
                var Eb = l[b + 102952 >> 2];
                if (0 != (Eb | 0)) {
                    e = x >> 2;
                    for (var Cb = x, eb = Eb; ;) {
                        d = (eb + 12 | 0) >> 2;
                        l[e] = l[d];
                        l[e + 1] = l[d + 1];
                        l[e + 2] = l[d + 2];
                        l[e + 3] = l[d + 3];
                        var sb = eb + 44 | 0, ob = l[sb + 4 >> 2];
                        l[Cb >> 2] = l[sb >> 2];
                        l[Cb + 4 >> 2] = ob;
                        var Db = l[g];
                        K[l[l[Db >> 2] + 28 >> 2]](Db, x);
                        var Jb = l[eb + 96 >> 2];
                        if (0 == (Jb | 0)) {
                            break a
                        }
                        eb = Jb
                    }
                }
            }
        }
    } while (0);
    a = j
}
function bq(b) {
    var d, e = b >> 2, f = a;
    if (0 == (l[e + 25717] & 2 | 0)) {
        var g = q[e + 25742];
        d = q[e + 25743];
        V(N.Fh | 0, (s = a, a += 16, Ee[0] = g, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = d, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
        V(N.Te | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
        g = l[e + 25740];
        V(N.Ze | 0, (s = a, a += 4, l[s >> 2] = g, s));
        g = l[e + 25741];
        V(N.hf | 0, (s = a, a += 4, l[s >> 2] = g, s));
        e = l[e + 25738];
        g = 0 == (e | 0);
        a:do {
            if (!g) {
                d = 0;
                for (var h = e; ;) {
                    l[h + 8 >> 2] = d;
                    lp(h);
                    h = l[h + 96 >> 2];
                    if (0 == (h | 0)) {
                        break a
                    }
                    d = d + 1 | 0
                }
            }
        } while (0);
        b = (b + 102956 | 0) >> 2;
        e = l[b];
        g = 0 == (e | 0);
        a:do {
            if (!g) {
                d = 0;
                for (h = e; ;) {
                    l[h + 56 >> 2] = d;
                    h = l[h + 12 >> 2];
                    if (0 == (h | 0)) {
                        break
                    }
                    d = d + 1 | 0
                }
                d = l[b];
                if (0 != (d | 0)) {
                    h = d;
                    for (d = h >> 2; ;) {
                        6 != (l[d + 1] | 0) && (V(N.Ra | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s)), K[l[l[d] + 16 >> 2]](h), V(N.Sa | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s)));
                        d = l[d + 3];
                        if (0 == (d | 0)) {
                            break
                        }
                        h = d;
                        d = h >> 2
                    }
                    d = l[b];
                    if (0 != (d | 0)) {
                        h = d;
                        for (d = h >> 2; ;) {
                            6 == (l[d + 1] | 0) && (V(N.Ra | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s)), K[l[l[d] + 16 >> 2]](h), V(N.Sa | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s)));
                            d = l[d + 3];
                            if (0 == (d | 0)) {
                                break a
                            }
                            h = d;
                            d = h >> 2
                        }
                    }
                }
            }
        } while (0);
        V(N.yf | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
        V(N.Ef | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
        V(N.If | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
        V(N.Nf | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s))
    }
    a = f
}
function qp(b, d) {
    var e, f, g, h, j, k = b >> 2, m = a;
    a += 192;
    j = m >> 2;
    var n = m + 92, p = m + 104, u = m + 128;
    h = u >> 2;
    var r = b + 64 | 0, w = r >> 2;
    g = u >> 2;
    for (var x = w + 16; w < x; w++, g++) {
        l[g] = l[w]
    }
    g = (b + 4 | 0) >> 2;
    w = o[g];
    l[g] = w | 4;
    var x = w >>> 1, y = o[k + 12], A = o[k + 13], w = 0 != ((c[A + 38 | 0] | c[y + 38 | 0]) & 1) << 24 >> 24, C = o[y + 8 >> 2], z = o[A + 8 >> 2], D = C + 12 | 0, E = z + 12 | 0;
    do {
        if (w) {
            e = l[y + 12 >> 2];
            f = l[A + 12 >> 2];
            var G = l[k + 14], H = l[k + 15];
            l[j + 4] = 0;
            l[j + 5] = 0;
            q[j + 6] = 0;
            l[j + 11] = 0;
            l[j + 12] = 0;
            q[j + 13] = 0;
            Hi(m | 0, e, G);
            Hi(m + 28 | 0, f, H);
            f = (m + 56 | 0) >> 2;
            e = D >> 2;
            l[f] = l[e];
            l[f + 1] = l[e + 1];
            l[f + 2] = l[e + 2];
            l[f + 3] = l[e + 3];
            f = (m + 72 | 0) >> 2;
            e = E >> 2;
            l[f] = l[e];
            l[f + 1] = l[e + 1];
            l[f + 2] = l[e + 2];
            l[f + 3] = l[e + 3];
            c[m + 88 | 0] = 1;
            i[n + 4 >> 1] = 0;
            Ii(p, n, m);
            e = 11920928955078125e-22 > q[p + 16 >> 2] & 1;
            l[k + 31] = 0;
            f = e;
            e = x & 1
        } else {
            K[l[l[k] >> 2]](b, r, D, E);
            G = b + 124 | 0;
            f = 0 < (l[G >> 2] | 0);
            e = f & 1;
            a:do {
                if (f) {
                    for (var H = l[h + 15], F = 0; ;) {
                        var I = b + 20 * F + 72 | 0;
                        q[I >> 2] = 0;
                        var J = b + 20 * F + 76 | 0;
                        q[J >> 2] = 0;
                        for (var L = l[k + (5 * F | 0) + 20], O = 0; (O | 0) < (H | 0);) {
                            if ((l[h + (5 * O | 0) + 4] | 0) != (L | 0)) {
                                O = O + 1 | 0
                            } else {
                                q[I >> 2] = q[h + (5 * O | 0) + 2];
                                q[J >> 2] = q[h + (5 * O | 0) + 3];
                                break
                            }
                        }
                        F = F + 1 | 0;
                        if ((F | 0) >= (l[G >> 2] | 0)) {
                            break a
                        }
                    }
                }
            } while (0);
            G = x & 1;
            if ((f & 1 | 0) != (G | 0) && (f = C + 4 | 0, H = i[f >> 1], 0 == (H & 2) << 16 >> 16 && (i[f >> 1] = H | 2, q[C + 144 >> 2] = 0), f = z + 4 | 0, H = i[f >> 1], 0 == (H & 2) << 16 >> 16)) {
                i[f >> 1] = H | 2, q[z + 144 >> 2] = 0
            }
            f = e;
            e = G
        }
    } while (0);
    h = 0 != f << 24 >> 24;
    j = l[g];
    l[g] = h ? j | 2 : j & -3;
    j = h ^ 1;
    k = 0 == (d | 0);
    if (!(0 != (e | 0) | j | k)) {
        K[l[l[d >> 2] + 8 >> 2]](d, b)
    }
    if (!(h | 0 == (e | 0) | k)) {
        K[l[l[d >> 2] + 12 >> 2]](d, b)
    }
    if (!(w | j | k)) {
        K[l[l[d >> 2] + 16 >> 2]](d, b, u)
    }
    a = m
}
function Qp(b, d) {
    var e, f, g, h, j, k, m, n, p, u = d >> 2;
    n = b >> 2;
    p = d >> 2;
    l[n] = l[p];
    l[n + 1] = l[p + 1];
    l[n + 2] = l[p + 2];
    l[n + 3] = l[p + 3];
    l[n + 4] = l[p + 4];
    l[n + 5] = l[p + 5];
    var r = l[u + 10];
    m = b + 32 | 0;
    l[m >> 2] = r;
    n = l[u + 7];
    p = (b + 48 | 0) >> 2;
    l[p] = n;
    var w = 88 * n | 0;
    n = (r + 102796 | 0) >> 2;
    var x = l[n];
    if (32 > (x | 0)) {
        var y = x
    } else {
        P(N.n | 0, 38, N.w | 0, N.D | 0), y = l[n]
    }
    x = r + 12 * y + 102412 | 0;
    l[(r + 12 * y + 102416 | 0) >> 2] = w;
    k = (r + 102400 | 0) >> 2;
    j = l[k];
    102400 < (j + w | 0) ? (k = Ne(w), l[(x | 0) >> 2] = k, c[r + 12 * y + 102420 | 0] = 1) : (l[(x | 0) >> 2] = r + j | 0, c[r + 12 * y + 102420 | 0] = 0, l[k] = l[k] + w | 0);
    y = r + 102404 | 0;
    w = l[y >> 2] + w | 0;
    l[y >> 2] = w;
    r = r + 102408 | 0;
    y = l[r >> 2];
    l[r >> 2] = (y | 0) > (w | 0) ? y : w;
    l[n] = l[n] + 1 | 0;
    n = b + 36 | 0;
    l[n >> 2] = l[x >> 2];
    r = l[m >> 2];
    w = 152 * l[p] | 0;
    m = (r + 102796 | 0) >> 2;
    x = l[m];
    32 > (x | 0) ? y = x : (P(N.n | 0, 38, N.w | 0, N.D | 0), y = l[m]);
    x = r + 12 * y + 102412 | 0;
    l[(r + 12 * y + 102416 | 0) >> 2] = w;
    k = (r + 102400 | 0) >> 2;
    j = l[k];
    102400 < (j + w | 0) ? (k = Ne(w), l[(x | 0) >> 2] = k, c[r + 12 * y + 102420 | 0] = 1) : (l[(x | 0) >> 2] = r + j | 0, c[r + 12 * y + 102420 | 0] = 0, l[k] = l[k] + w | 0);
    y = r + 102404 | 0;
    w = l[y >> 2] + w | 0;
    l[y >> 2] = w;
    r = r + 102408 | 0;
    y = l[r >> 2];
    l[r >> 2] = (y | 0) > (w | 0) ? y : w;
    l[m] = l[m] + 1 | 0;
    m = b + 40 | 0;
    l[m >> 2] = l[x >> 2];
    l[b + 24 >> 2] = l[u + 8];
    l[b + 28 >> 2] = l[u + 9];
    u = l[u + 6];
    x = b + 44 | 0;
    l[x >> 2] = u;
    r = 0 < (l[p] | 0);
    a:do {
        if (r) {
            w = b + 20 | 0;
            y = b + 8 | 0;
            k = 0;
            for (j = u; ;) {
                var A = l[j + (k << 2) >> 2];
                j = A >> 2;
                var C = l[j + 12];
                h = l[j + 13];
                var z = q[l[C + 12 >> 2] + 8 >> 2], D = q[l[h + 12 >> 2] + 8 >> 2], E = l[C + 8 >> 2], G = l[h + 8 >> 2], C = l[j + 31], H = 0 < (C | 0);
                H || P(N.ba | 0, 71, N.qe | 0, N.jf | 0);
                var F = l[m >> 2];
                h = F >> 2;
                q[h + (38 * k | 0) + 34] = q[j + 34];
                q[h + (38 * k | 0) + 35] = q[j + 35];
                var I = E + 8 | 0;
                l[(F + 152 * k + 112 | 0) >> 2] = l[I >> 2];
                var J = G + 8 | 0;
                l[(F + 152 * k + 116 | 0) >> 2] = l[J >> 2];
                var L = E + 120 | 0;
                q[h + (38 * k | 0) + 30] = q[L >> 2];
                var O = G + 120 | 0;
                q[h + (38 * k | 0) + 31] = q[O >> 2];
                e = E + 128 | 0;
                q[h + (38 * k | 0) + 32] = q[e >> 2];
                var R = G + 128 | 0;
                q[h + (38 * k | 0) + 33] = q[R >> 2];
                l[(F + 152 * k + 148 | 0) >> 2] = k;
                l[(F + 152 * k + 144 | 0) >> 2] = C;
                g = (F + 152 * k + 80 | 0) >> 2;
                l[g] = 0;
                l[g + 1] = 0;
                l[g + 2] = 0;
                l[g + 3] = 0;
                l[g + 4] = 0;
                l[g + 5] = 0;
                l[g + 6] = 0;
                l[g + 7] = 0;
                g = l[n >> 2];
                f = g >> 2;
                l[(g + 88 * k + 32 | 0) >> 2] = l[I >> 2];
                l[(g + 88 * k + 36 | 0) >> 2] = l[J >> 2];
                q[f + (22 * k | 0) + 10] = q[L >> 2];
                q[f + (22 * k | 0) + 11] = q[O >> 2];
                E = E + 28 | 0;
                I = g + 88 * k + 48 | 0;
                J = l[E + 4 >> 2];
                l[(I | 0) >> 2] = l[E >> 2];
                l[(I + 4 | 0) >> 2] = J;
                G = G + 28 | 0;
                E = g + 88 * k + 56 | 0;
                I = l[G + 4 >> 2];
                l[(E | 0) >> 2] = l[G >> 2];
                l[(E + 4 | 0) >> 2] = I;
                q[f + (22 * k | 0) + 16] = q[e >> 2];
                q[f + (22 * k | 0) + 17] = q[R >> 2];
                e = A + 104 | 0;
                R = g + 88 * k + 16 | 0;
                G = l[e + 4 >> 2];
                l[(R | 0) >> 2] = l[e >> 2];
                l[(R + 4 | 0) >> 2] = G;
                e = A + 112 | 0;
                R = g + 88 * k + 24 | 0;
                G = l[e + 4 >> 2];
                l[(R | 0) >> 2] = l[e >> 2];
                l[(R + 4 | 0) >> 2] = G;
                l[(g + 88 * k + 84 | 0) >> 2] = C;
                q[f + (22 * k | 0) + 19] = z;
                q[f + (22 * k | 0) + 20] = D;
                l[(g + 88 * k + 72 | 0) >> 2] = l[j + 30];
                b:do {
                    if (H) {
                        for (z = 0; ;) {
                            if (D = A + 20 * z + 64 | 0, 0 == (c[w] & 1) << 24 >> 24 ? (q[h + (38 * k | 0) + (9 * z | 0) + 4] = 0, q[h + (38 * k | 0) + (9 * z | 0) + 5] = 0) : (q[h + (38 * k | 0) + (9 * z | 0) + 4] = q[y >> 2] * q[j + (5 * z | 0) + 18], q[h + (38 * k | 0) + (9 * z | 0) + 5] = q[y >> 2] * q[j + (5 * z | 0) + 19]), e = F + 152 * k + 36 * z | 0, q[h + (38 * k | 0) + (9 * z | 0) + 6] = 0, q[h + (38 * k | 0) + (9 * z | 0) + 7] = 0, q[h + (38 * k | 0) + (9 * z | 0) + 8] = 0, f = (z << 3) + g + 88 * k | 0, e >>= 2, l[e] = 0, l[e + 1] = 0, l[e + 2] = 0, l[e + 3] = 0, e = l[D + 4 >> 2], l[(f | 0) >> 2] = l[D >> 2], l[(f + 4 | 0) >> 2] = e, z = z + 1 | 0, (z | 0) == (C | 0)) {
                                break b
                            }
                        }
                    }
                } while (0);
                k = k + 1 | 0;
                if ((k | 0) >= (l[p] | 0)) {
                    break a
                }
                j = l[x >> 2]
            }
        }
    } while (0)
}
function Rp(b) {
    var d, e, f, g, h = a;
    a += 56;
    var j = h + 16, k = h + 32, m = b + 48 | 0, n = 0 < (l[m >> 2] | 0);
    a:do {
        if (n) {
            for (var p = b + 40 | 0, u = b + 36 | 0, r = b + 44 | 0, w = b + 24 | 0, x = b + 28 | 0, y = h + 8 | 0, A = h + 12 | 0, C = j + 8 | 0, z = j + 12 | 0, D = h, E = j, G = k, H = 0; ;) {
                var F = o[p >> 2];
                g = F >> 2;
                var I = l[u >> 2], J = q[(I + 76 >> 2) + (22 * H | 0)], L = q[(I + 80 >> 2) + (22 * H | 0)], O = l[l[r >> 2] + (l[g + (38 * H | 0) + 37] << 2) >> 2], R = O + 64 | 0, T = l[g + (38 * H | 0) + 28], S = l[g + (38 * H | 0) + 29], U = q[g + (38 * H | 0) + 30], W = q[g + (38 * H | 0) + 31], Q = q[g + (38 * H | 0) + 32], $ = q[g + (38 * H | 0) + 33], ea = I + 88 * H + 48 | 0, sa = l[ea + 4 >> 2], Ba = (t[0] = l[ea >> 2], M[0]), oa = (t[0] = sa, M[0]), ga = I + 88 * H + 56 | 0, qa = l[ga + 4 >> 2], la = (t[0] = l[ga >> 2], M[0]), Ca = (t[0] = qa, M[0]), ia = l[w >> 2], ya = ia + 12 * T | 0, ta = l[ya + 4 >> 2], Ia = (t[0] = l[ya >> 2], M[0]), na = (t[0] = ta, M[0]), Z = q[(ia + 8 >> 2) + (3 * T | 0)], ba = l[x >> 2], ca = ba + 12 * T | 0, ma = l[ca + 4 >> 2], ka = (t[0] = l[ca >> 2], M[0]), aa = (t[0] = ma, M[0]), ra = q[(ba + 8 >> 2) + (3 * T | 0)], ha = ia + 12 * S | 0, za = l[ha + 4 >> 2], X = (t[0] = l[ha >> 2], M[0]), ua = (t[0] = za, M[0]), da = q[(ia + 8 >> 2) + (3 * S | 0)], fa = ba + 12 * S | 0, Aa = l[fa + 4 >> 2], Qa = (t[0] = l[fa >> 2], M[0]), pa = (t[0] = Aa, M[0]), cb = q[(ba + 8 >> 2) + (3 * S | 0)];
                0 < (l[O + 124 >> 2] | 0) || P(N.ba | 0, 168, N.pe | 0, N.$f | 0);
                var Ra = mm(Z);
                q[y >> 2] = Ra;
                var Ta = nm(Z);
                q[A >> 2] = Ta;
                var $a = mm(da);
                q[C >> 2] = $a;
                var va = nm(da);
                q[z >> 2] = va;
                var Wa = na - (Ra * Ba + Ta * oa), fb = (M[0] = Ia - (Ta * Ba - Ra * oa), t[0]), gb = (M[0] = Wa, t[0]) | 0;
                l[D >> 2] = 0 | fb;
                l[D + 4 >> 2] = gb;
                var Xa = ua - ($a * la + va * Ca), Ua = (M[0] = X - (va * la - $a * Ca), t[0]), Va = (M[0] = Xa, t[0]) | 0;
                l[E >> 2] = 0 | Ua;
                l[E + 4 >> 2] = Va;
                Gi(k, R, h, J, j, L);
                var pb = F + 152 * H + 72 | 0, nb = pb, La = l[G + 4 >> 2];
                l[nb >> 2] = l[G >> 2];
                l[nb + 4 >> 2] = La;
                f = (F + 152 * H + 144 | 0) >> 2;
                var qb = l[f], bb = 0 < (qb | 0);
                do {
                    if (bb) {
                        e = (F + 152 * H + 76 | 0) >> 2;
                        d = (pb | 0) >> 2;
                        for (var Fa = U + W, Ma = -cb, wa = -ra, hb = F + 152 * H + 140 | 0, Ya = 0; ;) {
                            var Za = q[k + (Ya << 3) + 8 >> 2], Da = Za - Ia, Oa = q[k + (Ya << 3) + 12 >> 2], ib = Oa - na, ab = F + 152 * H + 36 * Ya | 0, Ga = (M[0] = Da, t[0]), jb = (M[0] = ib, t[0]) | 0;
                            l[ab >> 2] = 0 | Ga;
                            l[ab + 4 >> 2] = jb;
                            var Ea = Za - X, Pa = Oa - ua, Ja = F + 152 * H + 36 * Ya + 8 | 0, db = (M[0] = Ea, t[0]), xa = (M[0] = Pa, t[0]) | 0;
                            l[Ja >> 2] = 0 | db;
                            l[Ja + 4 >> 2] = xa;
                            var Sa = q[e], Ka = q[g + (38 * H | 0) + (9 * Ya | 0) + 1], tb = q[d], kb = Da * Sa - Ka * tb, ub = q[g + (38 * H | 0) + (9 * Ya | 0) + 3], rb = Ea * Sa - ub * tb, Bb = Fa + Q * kb * kb + $ * rb * rb;
                            q[g + (38 * H | 0) + (9 * Ya | 0) + 6] = 0 < Bb ? 1 / Bb : 0;
                            var lb = q[e], yb = -1 * q[d], xb = Da * yb - Ka * lb, Ib = Ea * yb - ub * lb, wb = Fa + Q * xb * xb + $ * Ib * Ib;
                            q[g + (38 * H | 0) + (9 * Ya | 0) + 7] = 0 < wb ? 1 / wb : 0;
                            var vb = F + 152 * H + 36 * Ya + 32 | 0;
                            q[vb >> 2] = 0;
                            var zb = q[d] * (Qa + ub * Ma - ka - Ka * wa) + q[e] * (pa + Ea * cb - aa - Da * ra);
                            -1 > zb && (q[vb >> 2] = zb * -q[hb >> 2]);
                            var Eb = Ya + 1 | 0;
                            if ((Eb | 0) == (qb | 0)) {
                                break
                            }
                            Ya = Eb
                        }
                        if (2 == (l[f] | 0)) {
                            var Cb = q[e], eb = q[d], sb = q[g + (38 * H | 0)] * Cb - q[g + (38 * H | 0) + 1] * eb, ob = q[g + (38 * H | 0) + 2] * Cb - q[g + (38 * H | 0) + 3] * eb, Db = q[g + (38 * H | 0) + 9] * Cb - q[g + (38 * H | 0) + 10] * eb, Jb = q[g + (38 * H | 0) + 11] * Cb - q[g + (38 * H | 0) + 12] * eb, Rb = Q * sb, Nb = $ * ob, Ob = Fa + Rb * sb + Nb * ob, Lb = Fa + Q * Db * Db + $ * Jb * Jb, Pb = Fa + Rb * Db + Nb * Jb, Mb = Ob * Lb - Pb * Pb;
                            if (Ob * Ob < 1e3 * Mb) {
                                q[g + (38 * H | 0) + 24] = Ob;
                                q[g + (38 * H | 0) + 25] = Pb;
                                q[g + (38 * H | 0) + 26] = Pb;
                                q[g + (38 * H | 0) + 27] = Lb;
                                var Yb = 0 != Mb ? 1 / Mb : Mb, Zb = Pb * -Yb, fc = Yb * Ob;
                                q[g + (38 * H | 0) + 20] = Yb * Lb;
                                q[g + (38 * H | 0) + 21] = Zb;
                                q[g + (38 * H | 0) + 22] = Zb;
                                q[g + (38 * H | 0) + 23] = fc
                            } else {
                                l[f] = 1
                            }
                        }
                    }
                } while (0);
                var Ub = H + 1 | 0;
                if ((Ub | 0) >= (l[m >> 2] | 0)) {
                    break a
                }
                H = Ub
            }
        }
    } while (0);
    a = h
}
function Sp(b) {
    var d, e, f, g, h, j = b + 48 | 0, k = 0 < (l[j >> 2] | 0);
    a:do {
        if (k) {
            var m = b + 40 | 0;
            g = (b + 28 | 0) >> 2;
            for (var n = 0; ;) {
                var p = o[m >> 2];
                f = p >> 2;
                var u = p + 152 * n | 0, r = o[f + (38 * n | 0) + 28], w = o[f + (38 * n | 0) + 29], x = q[f + (38 * n | 0) + 30], y = q[f + (38 * n | 0) + 32], A = q[f + (38 * n | 0) + 31], C = q[f + (38 * n | 0) + 33], z = p + 152 * n + 144 | 0, D = o[z >> 2], E = l[g], G = E + 12 * r | 0, H = l[G + 4 >> 2], F = (t[0] = l[G >> 2], M[0]), I = (t[0] = H, M[0]), J = q[(E + 8 >> 2) + (3 * r | 0)], L = E + 12 * w | 0, O = l[L + 4 >> 2], R = (t[0] = l[L >> 2], M[0]), T = (t[0] = O, M[0]), S = q[(E + 8 >> 2) + (3 * w | 0)], U = p + 152 * n + 72 | 0, W = l[U + 4 >> 2], Q = (t[0] = l[U >> 2], M[0]), $ = (t[0] = W, M[0]), ea = -1 * Q, sa = q[f + (38 * n | 0) + 34];
                if (2 > (D - 1 | 0) >>> 0) {
                    var Ba = T, oa = R, ga = I, qa = F, la = J, Ca = S, ia = 0;
                    h = 6
                } else {
                    if (P(N.ba | 0, 311, N.ob | 0, N.Kg | 0), 0 < (D | 0)) {
                        Ba = T, oa = R, ga = I, qa = F, la = J, Ca = S, ia = 0, h = 6
                    } else {
                        var ya = T, ta = R, Ia = I, na = F, Z = J, ba = S;
                        h = 7
                    }
                }
                b:do {
                    if (6 == h) {
                        for (; ;) {
                            var ca = q[f + (38 * n | 0) + (9 * ia | 0) + 3], ma = q[f + (38 * n | 0) + (9 * ia | 0) + 2], ka = q[f + (38 * n | 0) + (9 * ia | 0) + 1], aa = q[f + (38 * n | 0) + (9 * ia | 0)], ra = sa * q[f + (38 * n | 0) + (9 * ia | 0) + 4], ha = p + 152 * n + 36 * ia + 20 | 0, za = q[ha >> 2], X = za + q[f + (38 * n | 0) + (9 * ia | 0) + 7] * -((oa + ca * -Ca - qa - ka * -la) * $ + (Ba + ma * Ca - ga - aa * la) * ea), ua = -ra, da = X < ra ? X : ra, fa = da < ua ? ua : da, Aa = fa - za;
                            q[ha >> 2] = fa;
                            var Qa = $ * Aa, pa = ea * Aa, cb = qa - Qa * x, Ra = ga - pa * x, Ta = la - y * (aa * pa - ka * Qa), $a = oa + Qa * A, va = Ba + pa * A, Wa = Ca + C * (ma * pa - ca * Qa), fb = ia + 1 | 0;
                            if ((fb | 0) == (D | 0)) {
                                ya = va;
                                ta = $a;
                                Ia = Ra;
                                na = cb;
                                Z = Ta;
                                ba = Wa;
                                break b
                            }
                            Ba = va;
                            oa = $a;
                            ga = Ra;
                            qa = cb;
                            la = Ta;
                            Ca = Wa;
                            ia = fb
                        }
                    }
                } while (0);
                var gb = 1 == (l[z >> 2] | 0);
                b:do {
                    if (gb) {
                        var Xa = q[f + (38 * n | 0) + 3], Ua = q[f + (38 * n | 0) + 2], Va = q[f + (38 * n | 0) + 1], pb = q[u >> 2], nb = p + 152 * n + 16 | 0, La = q[nb >> 2], qb = La + ((ta + Xa * -ba - na - Va * -Z) * Q + (ya + Ua * ba - Ia - pb * Z) * $ - q[f + (38 * n | 0) + 8]) * -q[f + (38 * n | 0) + 6], bb = 0 < qb ? qb : 0, Fa = bb - La;
                        q[nb >> 2] = bb;
                        var Ma = Q * Fa, wa = $ * Fa, hb = ba + C * (Ua * wa - Xa * Ma), Ya = Z - y * (pb * wa - Va * Ma), Za = na - Ma * x, Da = Ia - wa * x, Oa = ta + Ma * A, ib = ya + wa * A
                    } else {
                        e = (p + 152 * n + 16 | 0) >> 2;
                        var ab = q[e];
                        d = (p + 152 * n + 52 | 0) >> 2;
                        var Ga = q[d];
                        0 > ab | 0 > Ga && P(N.ba | 0, 406, N.ob | 0, N.Yg | 0);
                        var jb = -ba, Ea = q[f + (38 * n | 0) + 3], Pa = q[f + (38 * n | 0) + 2], Ja = -Z, db = q[f + (38 * n | 0) + 1], xa = q[u >> 2], Sa = q[f + (38 * n | 0) + 12], Ka = q[f + (38 * n | 0) + 11], tb = q[f + (38 * n | 0) + 10], kb = q[f + (38 * n | 0) + 9], ub = q[f + (38 * n | 0) + 26], rb = q[f + (38 * n | 0) + 25], Bb = (ta + Ea * jb - na - db * Ja) * Q + (ya + Pa * ba - Ia - xa * Z) * $ - q[f + (38 * n | 0) + 8] - (q[f + (38 * n | 0) + 24] * ab + ub * Ga), lb = (ta + Sa * jb - na - tb * Ja) * Q + (ya + Ka * ba - Ia - kb * Z) * $ - q[f + (38 * n | 0) + 17] - (rb * ab + q[f + (38 * n | 0) + 27] * Ga), yb = q[f + (38 * n | 0) + 20] * Bb + q[f + (38 * n | 0) + 22] * lb, xb = q[f + (38 * n | 0) + 21] * Bb + q[f + (38 * n | 0) + 23] * lb, Ib = -yb, wb = -xb;
                        if (0 < yb | 0 < xb) {
                            var vb = Bb * -q[f + (38 * n | 0) + 6], zb = 0 > vb;
                            do {
                                if (!zb && 0 <= rb * vb + lb) {
                                    var Eb = vb - ab, Cb = -Ga, eb = Q * Eb, sb = $ * Eb, ob = Q * Cb, Db = $ * Cb, Jb = eb + ob, Rb = sb + Db, Nb = na - Jb * x, Ob = Ia - Rb * x, Lb = Z - y * (xa * sb - db * eb + (kb * Db - tb * ob)), Pb = ta + Jb * A, Mb = ya + Rb * A, Yb = ba + C * (Pa * sb - Ea * eb + (Ka * Db - Sa * ob));
                                    q[e] = vb;
                                    q[d] = 0;
                                    hb = Yb;
                                    Ya = Lb;
                                    Za = Nb;
                                    Da = Ob;
                                    Oa = Pb;
                                    ib = Mb;
                                    break b
                                }
                            } while (0);
                            var Zb = lb * -q[f + (38 * n | 0) + 15], fc = 0 > Zb;
                            do {
                                if (!fc && 0 <= ub * Zb + Bb) {
                                    var Ub = -ab, jc = Zb - Ga, Qb = Q * Ub, mb = $ * Ub, cc = Q * jc, Fb = $ * jc, hc = Qb + cc, wc = mb + Fb, pc = na - hc * x, qc = Ia - wc * x, $c = Z - y * (xa * mb - db * Qb + (kb * Fb - tb * cc)), Fc = ta + hc * A, sc = ya + wc * A, kd = ba + C * (Pa * mb - Ea * Qb + (Ka * Fb - Sa * cc));
                                    q[e] = 0;
                                    q[d] = Zb;
                                    hb = kd;
                                    Ya = $c;
                                    Za = pc;
                                    Da = qc;
                                    Oa = Fc;
                                    ib = sc;
                                    break b
                                }
                            } while (0);
                            if (0 > Bb | 0 > lb) {
                                hb = ba, Ya = Z, Za = na, Da = Ia, Oa = ta, ib = ya
                            } else {
                                var wd = -ab, Mc = -Ga, $b = Q * wd, ac = $ * wd, oc = Q * Mc, tc = $ * Mc, Oc = $b + oc, ld = ac + tc, Wc = na - Oc * x, ad = Ia - ld * x, Xc = Z - y * (xa * ac - db * $b + (kb * tc - tb * oc)), Cc = ta + Oc * A, fd = ya + ld * A, md = ba + C * (Pa * ac - Ea * $b + (Ka * tc - Sa * oc));
                                q[e] = 0;
                                q[d] = 0;
                                hb = md;
                                Ya = Xc;
                                Za = Wc;
                                Da = ad;
                                Oa = Cc;
                                ib = fd
                            }
                        } else {
                            var nd = Ib - ab, Pc = wb - Ga, gd = Q * nd, od = $ * nd, pd = Q * Pc, Pd = $ * Pc, Xd = gd + pd, qd = od + Pd, Qd = na - Xd * x, Qc = Ia - qd * x, Jc = Z - y * (xa * od - db * gd + (kb * Pd - tb * pd)), Kc = ta + Xd * A, gc = ya + qd * A, hd = ba + C * (Pa * od - Ea * gd + (Ka * Pd - Sa * pd));
                            q[e] = Ib;
                            q[d] = wb;
                            hb = hd;
                            Ya = Jc;
                            Za = Qd;
                            Da = Qc;
                            Oa = Kc;
                            ib = gc
                        }
                    }
                } while (0);
                var xd = l[g] + 12 * r | 0, bd = (M[0] = Za, t[0]), rd = (M[0] = Da, t[0]) | 0;
                l[(xd | 0) >> 2] = 0 | bd;
                l[(xd + 4 | 0) >> 2] = rd;
                q[(l[g] + 8 >> 2) + (3 * r | 0)] = Ya;
                var ye = l[g] + 12 * w | 0, Yd = (M[0] = Oa, t[0]), Tc = (M[0] = ib, t[0]) | 0;
                l[(ye | 0) >> 2] = 0 | Yd;
                l[(ye + 4 | 0) >> 2] = Tc;
                q[(l[g] + 8 >> 2) + (3 * w | 0)] = hb;
                var xc = n + 1 | 0;
                if ((xc | 0) >= (l[j >> 2] | 0)) {
                    break a
                }
                n = xc
            }
        }
    } while (0)
}
function Tp(b, d, e, f, g) {
    var h = f >> 2, j = e >> 2, d = d >> 2;
    0 < (l[d + 21] | 0) || P(N.ba | 0, 617, N.te | 0, N.ih | 0);
    var k = l[d + 18];
    if (0 == (k | 0)) {
        var e = q[j + 3], k = q[d + 6], m = q[j + 2], n = q[d + 7], g = e * k - m * n + q[j], j = m * k + e * n + q[j + 1], k = q[h + 3], m = q[d], n = q[h + 2], f = q[d + 1], e = k * m - n * f + q[h], m = n * m + k * f + q[h + 1], h = e - g, k = m - j, n = (M[0] = h, t[0]), f = (M[0] = k, t[0]) | 0;
        l[b >> 2] = 0 | n;
        l[b + 4 >> 2] = f;
        n = Fh(h * h + k * k);
        1.1920928955078125e-7 > n ? (n = h, f = k) : (f = 1 / n, n = h * f, q[b >> 2] = n, f *= k, q[(b + 4 | 0) >> 2] = f);
        var p = b + 8 | 0, g = (M[0] = .5 * (g + e), t[0]), j = (M[0] = .5 * (j + m), t[0]) | 0;
        l[p >> 2] = 0 | g;
        l[p + 4 >> 2] = j;
        q[b + 16 >> 2] = h * n + k * f - q[d + 19] - q[d + 20]
    } else {
        if (1 == (k | 0)) {
            var m = e + 12 | 0, k = q[m >> 2], n = q[d + 4], f = e + 8 | 0, p = q[f >> 2], u = q[d + 5], e = k * n - p * u, k = p * n + k * u, n = (M[0] = e, t[0]), p = (M[0] = k, t[0]) | 0;
            l[(b | 0) >> 2] = 0 | n;
            l[(b + 4 | 0) >> 2] = p;
            var m = q[m >> 2], n = q[d + 6], f = q[f >> 2], p = q[d + 7], u = q[h + 3], r = q[(g << 3 >> 2) + d], w = q[h + 2], x = q[((g << 3) + 4 >> 2) + d], g = u * r - w * x + q[h], h = w * r + u * x + q[h + 1];
            q[b + 16 >> 2] = (g - (m * n - f * p + q[j])) * e + (h - (f * n + m * p + q[j + 1])) * k - q[d + 19] - q[d + 20];
            b = b + 8 | 0;
            d = (M[0] = g, t[0]);
            h = (M[0] = h, t[0]) | 0;
            l[(b | 0) >> 2] = 0 | d;
            l[(b + 4 | 0) >> 2] = h
        } else {
            2 == (k | 0) && (m = f + 12 | 0, k = q[m >> 2], n = q[d + 4], f = f + 8 | 0, p = q[f >> 2], u = q[d + 5], e = k * n - p * u, k = p * n + k * u, n = (M[0] = e, t[0]), p = (M[0] = k, t[0]) | 0, l[(b | 0) >> 2] = 0 | n, l[(b + 4 | 0) >> 2] = p, m = q[m >> 2], n = q[d + 6], f = q[f >> 2], p = q[d + 7], u = q[j + 3], r = q[(g << 3 >> 2) + d], w = q[j + 2], x = q[((g << 3) + 4 >> 2) + d], g = u * r - w * x + q[j], j = w * r + u * x + q[j + 1], q[b + 16 >> 2] = (g - (m * n - f * p + q[h])) * e + (j - (f * n + m * p + q[h + 1])) * k - q[d + 19] - q[d + 20], d = b + 8 | 0, h = (M[0] = g, t[0]), j = (M[0] = j, t[0]) | 0, l[(d | 0) >> 2] = 0 | h, l[(d + 4 | 0) >> 2] = j, d = (M[0] = -e, t[0]), h = (M[0] = -k, t[0]) | 0, l[b >> 2] = 0 | d, l[b + 4 >> 2] = h)
        }
    }
}
function Kp(b, d) {
    var e, f, g, h, j, k, m, n, p, u, r = b >> 2, w = b | 0;
    l[w >> 2] = Ep + 8 | 0;
    var x = d + 8 | 0, y = d + 12 | 0;
    (l[x >> 2] | 0) == (l[y >> 2] | 0) && P(N.m | 0, 173, N.p | 0, N.r | 0);
    l[r + 1] = l[d >> 2];
    l[r + 2] = 0;
    l[r + 3] = 0;
    var A = b + 48 | 0;
    l[A >> 2] = l[x >> 2];
    var C = b + 52 | 0;
    l[C >> 2] = l[y >> 2];
    l[r + 14] = 0;
    c[b + 61 | 0] = c[d + 16 | 0] & 1;
    c[b + 60 | 0] = 0;
    l[r + 16] = l[d + 4 >> 2];
    u = (b + 16 | 0) >> 2;
    l[u] = 0;
    l[u + 1] = 0;
    l[u + 2] = 0;
    l[u + 3] = 0;
    l[u + 4] = 0;
    l[u + 5] = 0;
    l[u + 6] = 0;
    l[u + 7] = 0;
    l[w >> 2] = cq + 8 | 0;
    var z = b + 92 | 0, D = b + 100 | 0, E = b + 108 | 0, G = b + 116 | 0, H = b + 124 | 0, F = b + 132 | 0, I = d + 20 | 0, J = l[I >> 2], L = b + 68 | 0;
    l[L >> 2] = J;
    var O = d + 24 | 0, R = l[O >> 2], T = b + 72 | 0;
    l[T >> 2] = R;
    var S = l[J + 4 >> 2], U = b + 76 | 0;
    l[U >> 2] = S;
    var W = o[R + 4 >> 2];
    p = (b + 80 | 0) >> 2;
    l[p] = W;
    if (2 > (S - 1 | 0) >>> 0) {
        var Q = W
    } else {
        P(N.Pb | 0, 53, N.ib | 0, N.mf | 0), Q = l[p]
    }
    2 > (Q - 1 | 0) >>> 0 || P(N.Pb | 0, 54, N.ib | 0, N.bg | 0);
    var $ = o[L >> 2], ea = o[$ + 48 >> 2];
    n = ea >> 2;
    l[r + 21] = ea;
    var sa = o[$ + 52 >> 2];
    m = sa >> 2;
    l[A >> 2] = sa;
    var Ba = q[m + 5], oa = q[m + 6], ga = q[n + 5], qa = q[n + 6], la = o[I >> 2];
    if (1 == (l[U >> 2] | 0)) {
        var Ca = q[m + 14], ia = q[n + 14], ya = la + 68 | 0, ta = ya | 0, Ia = l[ta >> 2], na = ya + 4 | 0, Z = l[na >> 2], ba = E | 0;
        k = ba >> 2;
        l[k] = Ia;
        var ca = E + 4 | 0;
        j = ca >> 2;
        l[j] = Z;
        var ma = la + 76 | 0, ka = ma | 0, aa = l[ka >> 2], ra = ma + 4 | 0, ha = l[ra >> 2], za = z | 0;
        h = za >> 2;
        l[h] = aa;
        var X = z + 4 | 0;
        g = X >> 2;
        l[g] = ha;
        var ua = q[la + 116 >> 2];
        q[r + 35] = ua;
        q[H >> 2] = 0;
        q[r + 32] = 0;
        var da = Ca - ia - ua
    } else {
        var fa = q[n + 4], Aa = q[n + 3], Qa = q[m + 4], pa = q[m + 3], cb = la + 68 | 0, ba = cb | 0;
        k = ba >> 2;
        var Ra = l[k], ca = cb + 4 | 0;
        j = ca >> 2;
        var Ta = l[j], $a = E | 0;
        l[$a >> 2] = Ra;
        var va = E + 4 | 0;
        l[va >> 2] = Ta;
        var Wa = la + 76 | 0, za = Wa | 0;
        h = za >> 2;
        var fb = l[h], X = Wa + 4 | 0;
        g = X >> 2;
        var gb = l[g], Xa = z | 0;
        l[Xa >> 2] = fb;
        var Ua = z + 4 | 0;
        l[Ua >> 2] = gb;
        q[r + 35] = q[la + 100 >> 2];
        var Va = la + 84 | 0, pb = Va | 0, nb = l[pb >> 2], La = Va + 4 | 0, qb = l[La >> 2], bb = H | 0;
        l[bb >> 2] = nb;
        var Fa = H + 4 | 0;
        l[Fa >> 2] = qb;
        var Ma = (t[0] = Ra, M[0]), wa = (t[0] = Ta, M[0]), hb = (t[0] = fb, M[0]), Ya = oa * hb, Za = (t[0] = gb, M[0]), Da = Ya - Ba * Za + (pa - Aa), Oa = Ba * hb + oa * Za + (Qa - fa), ib = qa * Da + ga * Oa - Ma, ab = Da * -ga + qa * Oa - wa, Ga = (t[0] = nb, M[0]), jb = ib * Ga, Ea = (t[0] = qb, M[0]), da = jb + ab * Ea
    }
    var Pa = l[T >> 2], Ja = l[Pa + 48 >> 2];
    f = Ja >> 2;
    l[r + 22] = Ja;
    var db = l[Pa + 52 >> 2];
    e = db >> 2;
    l[C >> 2] = db;
    var xa = q[e + 5], Sa = q[e + 6], Ka = q[f + 5], tb = q[f + 6], kb = l[O >> 2];
    if (1 == (l[p] | 0)) {
        var ub = q[e + 14], rb = q[f + 14], Bb = kb + 68 | 0, ta = Bb | 0, lb = l[ta >> 2], na = Bb + 4 | 0, yb = l[na >> 2], ba = G | 0;
        k = ba >> 2;
        l[k] = lb;
        ca = G + 4 | 0;
        j = ca >> 2;
        l[j] = yb;
        var xb = kb + 76 | 0, ka = xb | 0, Ib = l[ka >> 2], ra = xb + 4 | 0, wb = l[ra >> 2], za = D | 0;
        h = za >> 2;
        l[h] = Ib;
        X = D + 4 | 0;
        g = X >> 2;
        l[g] = wb;
        var vb = q[kb + 116 >> 2];
        q[r + 36] = vb;
        q[F >> 2] = 0;
        q[r + 34] = 0;
        var zb = ub - rb - vb
    } else {
        var Eb = q[f + 4], Cb = q[f + 3], eb = q[e + 4], sb = q[e + 3], ob = kb + 68 | 0, ba = ob | 0;
        k = ba >> 2;
        var Db = l[k], ca = ob + 4 | 0;
        j = ca >> 2;
        var Jb = l[j], $a = G | 0;
        l[$a >> 2] = Db;
        va = G + 4 | 0;
        l[va >> 2] = Jb;
        var Rb = kb + 76 | 0, za = Rb | 0;
        h = za >> 2;
        var Nb = l[h], X = Rb + 4 | 0;
        g = X >> 2;
        var Ob = l[g], Xa = D | 0;
        l[Xa >> 2] = Nb;
        Ua = D + 4 | 0;
        l[Ua >> 2] = Ob;
        q[r + 36] = q[kb + 100 >> 2];
        var Lb = kb + 84 | 0, pb = Lb | 0, Pb = l[pb >> 2], La = Lb + 4 | 0, Mb = l[La >> 2], bb = F | 0;
        l[bb >> 2] = Pb;
        Fa = F + 4 | 0;
        l[Fa >> 2] = Mb;
        var Yb = (t[0] = Db, M[0]), Zb = (t[0] = Jb, M[0]), fc = (t[0] = Nb, M[0]), Ub = Sa * fc, jc = (t[0] = Ob, M[0]), Qb = Ub - xa * jc + (sb - Cb), mb = xa * fc + Sa * jc + (eb - Eb), cc = tb * Qb + Ka * mb - Yb, Fb = Qb * -Ka + tb * mb - Zb, hc = (t[0] = Pb, M[0]), wc = cc * hc, pc = (t[0] = Mb, M[0]), zb = wc + Fb * pc
    }
    var qc = q[d + 28 >> 2];
    q[r + 38] = qc;
    q[r + 37] = da + qc * zb;
    q[r + 39] = 0
}
function Gp(b, d) {
    var e, f, g = b >> 2, h = b | 0;
    l[h >> 2] = Ep + 8 | 0;
    var j = d + 8 | 0;
    f = d + 12 | 0;
    (l[j >> 2] | 0) == (l[f >> 2] | 0) && P(N.m | 0, 173, N.p | 0, N.r | 0);
    l[g + 1] = l[d >> 2];
    l[g + 2] = 0;
    l[g + 3] = 0;
    l[g + 12] = l[j >> 2];
    j = b + 52 | 0;
    l[j >> 2] = l[f >> 2];
    l[g + 14] = 0;
    c[b + 61 | 0] = c[d + 16 | 0] & 1;
    c[b + 60 | 0] = 0;
    l[g + 16] = l[d + 4 >> 2];
    f = (b + 16 | 0) >> 2;
    l[f] = 0;
    l[f + 1] = 0;
    l[f + 2] = 0;
    l[f + 3] = 0;
    l[f + 4] = 0;
    l[f + 5] = 0;
    l[f + 6] = 0;
    l[f + 7] = 0;
    l[h >> 2] = dq + 8 | 0;
    h = b + 68 | 0;
    e = b + 76 | 0;
    var k = d + 20 | 0;
    f = q[k >> 2];
    (!isNaN(f) && !isNaN(0)) & -Infinity < f & Infinity > f ? (f = q[d + 24 >> 2], f = (!isNaN(f) && !isNaN(0)) & -Infinity < f & Infinity > f ? 7 : 6) : f = 6;
    6 == f && P(N.da | 0, 34, N.fa | 0, N.pf | 0);
    f = d + 28 | 0;
    var m = q[f >> 2];
    0 > m | (!isNaN(m) && !isNaN(0)) & -Infinity < m & Infinity > m ^ 1 && P(N.da | 0, 35, N.fa | 0, N.dg | 0);
    var m = d + 32 | 0, n = q[m >> 2];
    0 > n | (!isNaN(n) && !isNaN(0)) & -Infinity < n & Infinity > n ^ 1 && P(N.da | 0, 36, N.fa | 0, N.Og | 0);
    var n = d + 36 | 0, p = q[n >> 2];
    0 > p | (!isNaN(p) && !isNaN(0)) & -Infinity < p & Infinity > p ^ 1 && P(N.da | 0, 37, N.fa | 0, N.$g | 0);
    p = o[k >> 2];
    k = o[k + 4 >> 2];
    l[e >> 2] = p;
    l[e + 4 >> 2] = k;
    e = o[j >> 2] >> 2;
    var j = (t[0] = p, M[0]) - q[e + 3], k = (t[0] = k, M[0]) - q[e + 4], p = q[e + 6], u = q[e + 5];
    e = (M[0] = p * j + u * k, t[0]);
    j = (M[0] = j * -u + p * k, t[0]) | 0;
    l[h >> 2] = 0 | e;
    l[h + 4 >> 2] = j;
    q[g + 26] = q[f >> 2];
    q[g + 24] = 0;
    q[g + 25] = 0;
    q[g + 21] = q[m >> 2];
    q[g + 22] = q[n >> 2];
    q[g + 23] = 0;
    q[g + 27] = 0
}
function Hp(b, d) {
    var e, f, g;
    e = d >> 2;
    var h = b >> 2;
    f = b | 0;
    l[f >> 2] = Ep + 8 | 0;
    g = d + 8 | 0;
    var j = d + 12 | 0;
    (l[g >> 2] | 0) == (l[j >> 2] | 0) && P(N.m | 0, 173, N.p | 0, N.r | 0);
    l[h + 1] = l[e];
    l[h + 2] = 0;
    l[h + 3] = 0;
    l[h + 12] = l[g >> 2];
    l[h + 13] = l[j >> 2];
    l[h + 14] = 0;
    c[b + 61 | 0] = c[d + 16 | 0] & 1;
    c[b + 60 | 0] = 0;
    l[h + 16] = l[e + 1];
    g = (b + 16 | 0) >> 2;
    l[g] = 0;
    l[g + 1] = 0;
    l[g + 2] = 0;
    l[g + 3] = 0;
    l[g + 4] = 0;
    l[g + 5] = 0;
    l[g + 6] = 0;
    l[g + 7] = 0;
    l[f >> 2] = eq + 8 | 0;
    j = b + 76 | 0;
    g = b + 84 | 0;
    f = b + 92 | 0;
    var k = d + 20 | 0, m = b + 68 | 0, n = l[k + 4 >> 2];
    l[m >> 2] = l[k >> 2];
    l[m + 4 >> 2] = n;
    k = d + 28 | 0;
    m = l[k + 4 >> 2];
    l[j >> 2] = l[k >> 2];
    l[j + 4 >> 2] = m;
    k = d + 36 | 0;
    j = l[k >> 2];
    k = l[k + 4 >> 2];
    l[g >> 2] = j;
    l[g + 4 >> 2] = k;
    j = (t[0] = j, M[0]);
    k = (t[0] = k, M[0]);
    m = Fh(j * j + k * k);
    1.1920928955078125e-7 > m ? g = k : (m = 1 / m, j *= m, q[g >> 2] = j, g = k * m, q[(b + 88 | 0) >> 2] = g);
    g = (M[0] = -1 * g, t[0]);
    j = (M[0] = j, t[0]) | 0;
    l[f >> 2] = 0 | g;
    l[f + 4 >> 2] = j;
    q[h + 25] = q[e + 11];
    q[h + 63] = 0;
    f = (b + 104 | 0) >> 2;
    l[f] = 0;
    l[f + 1] = 0;
    l[f + 2] = 0;
    l[f + 3] = 0;
    q[h + 30] = q[(d + 52 | 0) >> 2];
    q[h + 31] = q[e + 14];
    q[h + 32] = q[e + 16];
    q[h + 33] = q[e + 17];
    c[b + 136 | 0] = c[d + 48 | 0] & 1;
    c[b + 137 | 0] = c[d + 60 | 0] & 1;
    l[h + 35] = 0;
    e = (b + 184 | 0) >> 2;
    l[e] = 0;
    l[e + 1] = 0;
    l[e + 2] = 0;
    l[e + 3] = 0
}
function fq(b, d, e, f, g, h, j, k) {
    var m = b >> 2;
    l[m + 2] = d;
    l[m + 3] = e;
    var n = b + 20 | 0, p = l[f + 4 >> 2];
    l[n >> 2] = l[f >> 2];
    l[n + 4 >> 2] = p;
    n = b + 28 | 0;
    p = l[g + 4 >> 2];
    l[n >> 2] = l[g >> 2];
    l[n + 4 >> 2] = p;
    var n = h | 0, p = q[n >> 2] - q[d + 12 >> 2], h = h + 4 | 0, u = q[h >> 2] - q[d + 16 >> 2], r = q[d + 24 >> 2], w = q[d + 20 >> 2], d = b + 36 | 0, x = (M[0] = r * p + w * u, t[0]), p = (M[0] = p * -w + r * u, t[0]) | 0;
    l[d >> 2] = 0 | x;
    l[d + 4 >> 2] = p;
    d = j | 0;
    p = q[d >> 2] - q[e + 12 >> 2];
    j = j + 4 | 0;
    u = q[j >> 2] - q[e + 16 >> 2];
    r = q[e + 24 >> 2];
    e = q[e + 20 >> 2];
    b = b + 44 | 0;
    x = (M[0] = r * p + e * u, t[0]);
    e = (M[0] = p * -e + r * u, t[0]) | 0;
    l[b >> 2] = 0 | x;
    l[b + 4 >> 2] = e;
    b = q[n >> 2] - q[f >> 2];
    f = q[h >> 2] - q[f + 4 >> 2];
    f = Fh(b * b + f * f);
    q[m + 13] = f;
    f = q[d >> 2] - q[g >> 2];
    g = q[j >> 2] - q[g + 4 >> 2];
    g = Fh(f * f + g * g);
    q[m + 14] = g;
    q[m + 15] = k;
    1.1920928955078125e-7 < k || P(N.Rb | 0, 51, N.re | 0, N.qf | 0)
}
function Jp(b, d) {
    var e, f = b >> 2, g = b | 0;
    l[g >> 2] = Ep + 8 | 0;
    e = d + 8 | 0;
    var h = d + 12 | 0;
    (l[e >> 2] | 0) == (l[h >> 2] | 0) && P(N.m | 0, 173, N.p | 0, N.r | 0);
    l[f + 1] = l[d >> 2];
    l[f + 2] = 0;
    l[f + 3] = 0;
    l[f + 12] = l[e >> 2];
    l[f + 13] = l[h >> 2];
    l[f + 14] = 0;
    c[b + 61 | 0] = c[d + 16 | 0] & 1;
    c[b + 60 | 0] = 0;
    l[f + 16] = l[d + 4 >> 2];
    e = (b + 16 | 0) >> 2;
    l[e] = 0;
    l[e + 1] = 0;
    l[e + 2] = 0;
    l[e + 3] = 0;
    l[e + 4] = 0;
    l[e + 5] = 0;
    l[e + 6] = 0;
    l[e + 7] = 0;
    l[g >> 2] = gq + 8 | 0;
    h = b + 76 | 0;
    e = b + 92 | 0;
    var g = b + 100 | 0, j = d + 20 | 0, k = b + 68 | 0, m = l[j + 4 >> 2];
    l[k >> 2] = l[j >> 2];
    l[k + 4 >> 2] = m;
    j = d + 28 | 0;
    k = l[j + 4 >> 2];
    l[h >> 2] = l[j >> 2];
    l[h + 4 >> 2] = k;
    h = d + 36 | 0;
    j = l[h + 4 >> 2];
    l[e >> 2] = l[h >> 2];
    l[e + 4 >> 2] = j;
    e = d + 44 | 0;
    h = l[e + 4 >> 2];
    l[g >> 2] = l[e >> 2];
    l[g + 4 >> 2] = h;
    g = d + 52 | 0;
    q[f + 21] = q[g >> 2];
    e = d + 56 | 0;
    q[f + 22] = q[e >> 2];
    h = d + 60 | 0;
    j = q[h >> 2];
    0 != j ? h = j : (P(N.Rb | 0, 65, N.oe | 0, N.fg | 0), h = q[h >> 2]);
    q[f + 28] = h;
    q[f + 27] = q[g >> 2] + h * q[e >> 2];
    q[f + 29] = 0
}
function Lp(b, d) {
    var e, f;
    e = d >> 2;
    var g = b >> 2, h = b | 0;
    l[h >> 2] = Ep + 8 | 0;
    f = d + 8 | 0;
    var j = d + 12 | 0;
    (l[f >> 2] | 0) == (l[j >> 2] | 0) && P(N.m | 0, 173, N.p | 0, N.r | 0);
    l[g + 1] = l[e];
    l[g + 2] = 0;
    l[g + 3] = 0;
    l[g + 12] = l[f >> 2];
    l[g + 13] = l[j >> 2];
    l[g + 14] = 0;
    c[b + 61 | 0] = c[d + 16 | 0] & 1;
    c[b + 60 | 0] = 0;
    l[g + 16] = l[e + 1];
    f = (b + 16 | 0) >> 2;
    l[f] = 0;
    l[f + 1] = 0;
    l[f + 2] = 0;
    l[f + 3] = 0;
    l[f + 4] = 0;
    l[f + 5] = 0;
    l[f + 6] = 0;
    l[f + 7] = 0;
    l[h >> 2] = hq + 8 | 0;
    j = b + 84 | 0;
    f = b + 92 | 0;
    var h = b + 100 | 0, k = d + 20 | 0, m = b + 76 | 0, n = l[k + 4 >> 2];
    l[m >> 2] = l[k >> 2];
    l[m + 4 >> 2] = n;
    k = d + 28 | 0;
    m = l[k + 4 >> 2];
    l[j >> 2] = l[k >> 2];
    l[j + 4 >> 2] = m;
    k = d + 36 | 0;
    j = l[k >> 2];
    k = l[k + 4 >> 2];
    l[f >> 2] = j;
    l[f + 4 >> 2] = k;
    f = -1 * (t[0] = k, M[0]);
    f = 0 | (M[0] = f, t[0]);
    l[h >> 2] = f;
    l[h + 4 >> 2] = j | 0;
    q[g + 51] = 0;
    q[g + 27] = 0;
    q[g + 52] = 0;
    q[g + 28] = 0;
    q[g + 53] = 0;
    q[g + 29] = 0;
    q[g + 30] = q[e + 12];
    q[g + 31] = q[e + 13];
    c[b + 128 | 0] = c[d + 44 | 0] & 1;
    q[g + 17] = q[e + 14];
    q[g + 18] = q[e + 15];
    q[g + 54] = 0;
    q[g + 55] = 0;
    e = (b + 172 | 0) >> 2;
    l[e] = 0;
    l[e + 1] = 0;
    l[e + 2] = 0;
    l[e + 3] = 0
}
function iq(b) {
    return l[b + 68 >> 2]
}
function jq(b) {
    return l[b + 64 >> 2]
}
function kq(b, d) {
    l[b + 68 >> 2] = d
}
function lq(b, d) {
    l[b + 76 >> 2] = d
}
function mq(b, d) {
    l[b + 64 >> 2] = d
}
function nq(b, d) {
    l[b + 60 >> 2] = d
}
function oq(b) {
    return l[b + 72 >> 2]
}
function Vq() {
    var b, d = Wq(80);
    b = d >> 2;
    fh(d);
    l[b + 15] = 0;
    l[b + 16] = 0;
    l[b + 17] = yp;
    l[b + 18] = zp;
    l[b + 19] = 0;
    return d
}
function Xq(b) {
    jp(b | 0, b)
}
function Yq(b, d) {
    l[b + 72 >> 2] = d
}
function Zq(b) {
    return l[b + 60 >> 2]
}
function $q(b) {
    return l[b + 76 >> 2]
}
function ar(b) {
    return q[b + 20 >> 2]
}
function br(b, d) {
    q[b + 16 >> 2] = d
}
function cr(b) {
    return l[b + 12 >> 2]
}
function dr(b, d) {
    q[b + 20 >> 2] = d
}
function er(b) {
    return l[b + 8 >> 2]
}
function is(b) {
    return l[b + 4 >> 2]
}
function js(b) {
    return q[b + 16 >> 2]
}
function ks(b) {
    return l[b + 40 >> 2]
}
function ls(b, d) {
    q[b >> 2] = d
}
function ms(b, d) {
    var e = b + 38 | 0;
    if ((d & 1 | 0) != (c[e] & 1 | 0)) {
        var f = o[b + 8 >> 2], g = f + 4 | 0, h = i[g >> 1];
        0 == (h & 2) << 16 >> 16 && (i[g >> 1] = h | 2, q[f + 144 >> 2] = 0);
        c[e] = d & 1
    }
}
function ns(b, d) {
    return l[b + 24 >> 2] + 28 * d | 0
}
function os(b, d) {
    l[b + 40 >> 2] = d
}
function ps(b) {
    return 0 != (c[b + 38 | 0] & 1) << 24 >> 24
}
function qs(b) {
    return l[l[b + 12 >> 2] + 4 >> 2]
}
function rs(b) {
    return q[b >> 2]
}
function ss(b) {
    var d, e = l[b >> 2];
    if (-1 == (e | 0)) {
        d = 0
    } else {
        d = l[b + 4 >> 2] >> 2;
        var e = 2 * (q[d + (9 * e | 0) + 2] - q[d + (9 * e | 0)] + (q[d + (9 * e | 0) + 3] - q[d + (9 * e | 0) + 1])), b = l[b + 12 >> 2], f = 0 < (b | 0);
        a:do {
            if (f) {
                for (var g = 0, h = 0; ;) {
                    if (g = 0 > (l[d + (9 * h | 0) + 8] | 0) ? g : g + 2 * (q[d + (9 * h | 0) + 2] - q[d + (9 * h | 0)] + (q[d + (9 * h | 0) + 3] - q[d + (9 * h | 0) + 1])), h = h + 1 | 0, (h | 0) == (b | 0)) {
                        var j = g;
                        break a
                    }
                }
            } else {
                j = 0
            }
        } while (0);
        d = j / e
    }
    return d
}
function ts(b) {
    var d = l[b >> 2];
    return-1 == (d | 0) ? 0 : l[(l[b + 4 >> 2] + 32 >> 2) + (9 * d | 0)]
}
function us(b) {
    return l[b + 28 >> 2]
}
function vs(b, d) {
    c[b + 102994 | 0] = d & 1
}
function ws(b) {
    var d, e = l[b + 102872 >> 2];
    if (-1 == (e | 0)) {
        d = 0
    } else {
        d = l[b + 102876 >> 2] >> 2;
        var e = 2 * (q[d + (9 * e | 0) + 2] - q[d + (9 * e | 0)] + (q[d + (9 * e | 0) + 3] - q[d + (9 * e | 0) + 1])), b = l[b + 102884 >> 2], f = 0 < (b | 0);
        a:do {
            if (f) {
                for (var g = 0, h = 0; ;) {
                    if (g = 0 > (l[d + (9 * h | 0) + 8] | 0) ? g : g + 2 * (q[d + (9 * h | 0) + 2] - q[d + (9 * h | 0)] + (q[d + (9 * h | 0) + 3] - q[d + (9 * h | 0) + 1])), h = h + 1 | 0, (h | 0) == (b | 0)) {
                        var j = g;
                        break a
                    }
                }
            } else {
                j = 0
            }
        } while (0);
        d = j / e
    }
    return d
}
function xs(b) {
    var d = l[b + 102872 >> 2];
    return-1 == (d | 0) ? 0 : l[(l[b + 102876 >> 2] + 32 >> 2) + (9 * d | 0)]
}
function ys(b) {
    return 0 != (c[b + 102994 | 0] & 1) << 24 >> 24
}
function zs(b, d) {
    l[b + 102944 >> 2] = d
}
function As(b, d) {
    c[b + 102993 | 0] = d & 1
}
function Bs(b, d) {
    var e = b + 102968 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function Cs(b) {
    return l[b + 102960 >> 2]
}
function Ds(b) {
    return 0 != (l[b + 102868 >> 2] & 4 | 0)
}
function Es(b) {
    return 0 != (c[b + 102993 | 0] & 1) << 24 >> 24
}
function Fs(b) {
    return l[b + 102956 >> 2]
}
function Gs(b) {
    return l[b + 102952 >> 2]
}
function Hs(b, d) {
    l[b + 102980 >> 2] = d
}
function Is(b) {
    return l[b + 102964 >> 2]
}
function Js(b) {
    var d, b = l[b + 102952 >> 2], e = 0 == (b | 0);
    a:do {
        if (!e) {
            d = b;
            for (d >>= 2; ;) {
                q[d + 19] = 0;
                q[d + 20] = 0;
                q[d + 21] = 0;
                d = l[d + 24];
                if (0 == (d | 0)) {
                    break a
                }
                d >>= 2
            }
        }
    } while (0)
}
function Ks(b) {
    0 != (b | 0) && (Dh(l[b + 32 >> 2]), Dh(l[b + 44 >> 2]), Dh(l[b + 4 >> 2]), Ls(b))
}
function Ms(b, d) {
    for (var e = d >> 2, f = b >> 2, g = e + 15; e < g; e++, f++) {
        l[f] = l[e]
    }
}
function Ns(b, d) {
    var e, f;
    f = (b + 32 | 0) >> 1;
    e = d >> 1;
    i[f] = i[e];
    i[f + 1] = i[e + 1];
    i[f + 2] = i[e + 2];
    xo(b)
}
function Os() {
    var b = Wq(44);
    i[b + 32 >> 1] = 1;
    i[b + 34 >> 1] = -1;
    i[b + 36 >> 1] = 0;
    l[b + 40 >> 2] = 0;
    l[b + 24 >> 2] = 0;
    l[b + 28 >> 2] = 0;
    l[b >> 2] = 0;
    l[b + 4 >> 2] = 0;
    l[b + 8 >> 2] = 0;
    l[b + 12 >> 2] = 0;
    return b
}
function Ps(b, d) {
    var e = l[b + 12 >> 2];
    K[l[l[e >> 2] + 28 >> 2]](e, d, q[b >> 2])
}
function Qs(b, d) {
    var e = l[b + 12 >> 2];
    return K[l[l[e >> 2] + 16 >> 2]](e, l[b + 8 >> 2] + 12 | 0, d)
}
function Rs(b) {
    0 != (b | 0) && Ls(b)
}
function Ss(b, d, e, f) {
    var g = l[b + 12 >> 2];
    return K[l[l[g >> 2] + 20 >> 2]](g, d, e, l[b + 8 >> 2] + 12 | 0, f)
}
function Ts(b, d) {
    4 == (-1 < (d | 0) ? (l[b + 12 >> 2] | 0) > (d | 0) ? 5 : 4 : 4) && P(N.q | 0, 159, N.H | 0, N.o | 0);
    return l[b + 4 >> 2] + 36 * d | 0
}
function Us(b, d) {
    4 == (-1 < (d | 0) ? (l[b + 12 >> 2] | 0) > (d | 0) ? 5 : 4 : 4) && P(N.q | 0, 153, N.T | 0, N.o | 0);
    return l[(l[b + 4 >> 2] + 16 >> 2) + (9 * d | 0)]
}
function Vs(b) {
    0 != (b | 0) && (Dh(l[b + 32 >> 2]), Dh(l[b + 44 >> 2]), Dh(l[b + 4 >> 2]), Ls(b))
}
function Ws() {
    var b = Wq(60);
    fh(b);
    return b
}
function Xs(b) {
    var d = b + 12 | 0, e = l[d >> 2], f = 0 < (e | 0);
    a:do {
        if (f) {
            for (var g = b + 4 | 0, h = 0, j = 0, k = l[g >> 2], m = e; ;) {
                if (2 <= (l[(k + 32 >> 2) + (9 * j | 0)] | 0)) {
                    var n = k + 36 * j + 24 | 0, p = l[n >> 2];
                    -1 == (p | 0) ? (P(N.c | 0, 686, N.La | 0, N.Za | 0), p = l[n >> 2], n = l[g >> 2], m = l[d >> 2]) : n = k;
                    k = l[(n + 32 >> 2) + (9 * l[(k + 28 >> 2) + (9 * j | 0)] | 0)] - l[(n + 32 >> 2) + (9 * p | 0)] | 0;
                    k = 0 < (k | 0) ? k : -k | 0;
                    h = (h | 0) > (k | 0) ? h : k;
                    k = n
                }
                j = j + 1 | 0;
                if ((j | 0) >= (m | 0)) {
                    var u = h;
                    break a
                }
            }
        } else {
            u = 0
        }
    } while (0);
    return u
}
function Ys(b, d, e) {
    var f, g, h;
    h = -1 < (d | 0) ? (l[b + 12 >> 2] | 0) > (d | 0) ? 5 : 4 : 4;
    4 == h && P(N.q | 0, 159, N.H | 0, N.o | 0);
    var j = b + 4 | 0;
    h = l[j >> 2];
    g = h >> 2;
    -1 < (e | 0) ? (l[b + 12 >> 2] | 0) > (e | 0) ? (f = h >> 2, h = 8) : h = 7 : h = 7;
    7 == h && (P(N.q | 0, 159, N.H | 0, N.o | 0), b = l[j >> 2], f = b >> 2);
    return(0 < q[f + (9 * e | 0)] - q[g + (9 * d | 0) + 2] | 0 < q[f + (9 * e | 0) + 1] - q[g + (9 * d | 0) + 3] | 0 < q[g + (9 * d | 0)] - q[f + (9 * e | 0) + 2] | 0 < q[g + (9 * d | 0) + 1] - q[f + (9 * e | 0) + 3]) ^ 1
}
function Zs(b, d) {
    var e, f;
    f = (b + 40 | 0) >> 2;
    var g = l[f], h = b + 36 | 0;
    e = (b + 32 | 0) >> 2;
    if ((g | 0) == (l[h >> 2] | 0)) {
        var j = l[e];
        l[h >> 2] = g << 1;
        g = Ne(g << 3);
        l[e] = g;
        Ch(g, j, l[f] << 2);
        Dh(j);
        j = l[f]
    } else {
        j = g
    }
    l[((j << 2) + l[e] | 0) >> 2] = d;
    l[f] = l[f] + 1 | 0
}
function $s(b, d, e, f) {
    if (Pk(b | 0, d, e, f)) {
        var e = (b + 40 | 0) >> 2, f = l[e], g = b + 36 | 0, b = (b + 32 | 0) >> 2;
        if ((f | 0) == (l[g >> 2] | 0)) {
            var h = l[b];
            l[g >> 2] = f << 1;
            f = Ne(f << 3);
            l[b] = f;
            Ch(f, h, l[e] << 2);
            Dh(h);
            f = l[e]
        }
        l[((f << 2) + l[b] | 0) >> 2] = d;
        l[e] = l[e] + 1 | 0
    }
}
function at(b, d) {
    for (var e = l[b + 40 >> 2], f = b + 32 | 0, g = 0; (g | 0) < (e | 0);) {
        var h = (g << 2) + l[f >> 2] | 0;
        if ((l[h >> 2] | 0) != (d | 0)) {
            g = g + 1 | 0
        } else {
            l[h >> 2] = -1;
            break
        }
    }
    e = b + 28 | 0;
    l[e >> 2] = l[e >> 2] - 1 | 0;
    Nk(b | 0, d)
}
function bt(b, d, e) {
    var f = a;
    a += 8;
    b = b + 102872 | 0;
    l[f >> 2] = b;
    l[f + 4 >> 2] = d;
    var g = b | 0, h, j, k, b = a;
    a += 1036;
    var m, n = b + 4 | 0, d = (b | 0) >> 2;
    l[d] = n;
    k = (b + 1028 | 0) >> 2;
    j = (b + 1032 | 0) >> 2;
    l[j] = 256;
    l[n >> 2] = l[g >> 2];
    l[k] = 1;
    for (var g = g + 4 | 0, p = e | 0, u = e + 4 | 0, r = e + 8 | 0, e = e + 12 | 0, w = f | 0, x = f + 4 | 0, y = 1; 0 < (y | 0);) {
        var A = y - 1 | 0;
        l[k] = A;
        m = l[d];
        y = l[m + (A << 2) >> 2];
        if (-1 == (y | 0)) {
            y = A
        } else {
            var C = l[g >> 2];
            h = C >> 2;
            if (0 < q[p >> 2] - q[h + (9 * y | 0) + 2] | 0 < q[u >> 2] - q[h + (9 * y | 0) + 3] | 0 < q[h + (9 * y | 0)] - q[r >> 2] | 0 < q[h + (9 * y | 0) + 1] - q[e >> 2]) {
                y = A
            } else {
                if (h = C + 36 * y + 24 | 0, -1 == (l[h >> 2] | 0)) {
                    C = l[w >> 2];
                    m = -1 < (y | 0) ? (l[C + 12 >> 2] | 0) > (y | 0) ? 12 : 11 : 11;
                    11 == m && P(N.q | 0, 153, N.T | 0, N.o | 0);
                    m = l[x >> 2];
                    if (!K[l[l[m >> 2] + 8 >> 2]](m, l[l[(l[C + 4 >> 2] + 16 >> 2) + (9 * y | 0)] + 16 >> 2])) {
                        break
                    }
                    y = l[k]
                } else {
                    if ((A | 0) == (l[j] | 0)) {
                        l[j] = A << 1;
                        A = Ne(A << 3);
                        l[d] = A;
                        var z = m;
                        Ch(A, z, l[k] << 2);
                        (m | 0) != (n | 0) && Dh(z)
                    }
                    l[((l[k] << 2) + l[d] | 0) >> 2] = l[h >> 2];
                    m = l[k] + 1 | 0;
                    l[k] = m;
                    y = C + 36 * y + 28 | 0;
                    (m | 0) == (l[j] | 0) && (C = l[d], l[j] = m << 1, m = Ne(m << 3), l[d] = m, h = C, Ch(m, h, l[k] << 2), (C | 0) != (n | 0) && Dh(h));
                    l[((l[k] << 2) + l[d] | 0) >> 2] = l[y >> 2];
                    y = l[k] + 1 | 0;
                    l[k] = y
                }
            }
        }
    }
    j = l[d];
    (j | 0) != (n | 0) && (Dh(j), l[d] = 0);
    a = b;
    a = f
}
function ct(b) {
    var d = b + 102884 | 0, e = l[d >> 2], f = 0 < (e | 0);
    a:do {
        if (f) {
            for (var g = b + 102876 | 0, h = 0, j = 0, k = l[g >> 2], m = e; ;) {
                if (2 <= (l[(k + 32 >> 2) + (9 * j | 0)] | 0)) {
                    var n = k + 36 * j + 24 | 0, p = l[n >> 2];
                    -1 == (p | 0) ? (P(N.c | 0, 686, N.La | 0, N.Za | 0), p = l[n >> 2], n = l[g >> 2], m = l[d >> 2]) : n = k;
                    k = l[(n + 32 >> 2) + (9 * l[(k + 28 >> 2) + (9 * j | 0)] | 0)] - l[(n + 32 >> 2) + (9 * p | 0)] | 0;
                    k = 0 < (k | 0) ? k : -k | 0;
                    h = (h | 0) > (k | 0) ? h : k;
                    k = n
                }
                j = j + 1 | 0;
                if ((j | 0) >= (m | 0)) {
                    var u = h;
                    break a
                }
            }
        } else {
            u = 0
        }
    } while (0);
    return u
}
function dt(b, d) {
    var e, f = b + 102868 | 0;
    e = l[f >> 2];
    0 == (e & 2 | 0) ? f = e : (P(N.t | 0, 109, N.Ae | 0, N.qa | 0), f = l[f >> 2]);
    if (0 == (f & 2 | 0)) {
        f = qn(b | 0, 152);
        0 == (f | 0) ? f = 0 : yn(f, d, b);
        l[f + 92 >> 2] = 0;
        e = (b + 102952 | 0) >> 2;
        l[f + 96 >> 2] = l[e];
        var g = l[e];
        0 != (g | 0) && (l[(g + 92 | 0) >> 2] = f);
        l[e] = f;
        e = b + 102960 | 0;
        l[e >> 2] = l[e >> 2] + 1 | 0
    } else {
        f = 0
    }
    return f
}
function et(b) {
    var d = Wq(103028);
    wp(d, b);
    return d
}
function ft(b) {
    return 0 != (c[b + 102992 | 0] & 1) << 24 >> 24
}
function gt(b, d) {
    var e = b + 102976 | 0, f = (d & 1 | 0) == (c[e] & 1 | 0);
    a:do {
        if (!f && (c[e] = d & 1, !d)) {
            var g = l[b + 102952 >> 2];
            if (0 != (g | 0)) {
                for (; ;) {
                    var h = g + 4 | 0, j = i[h >> 1];
                    0 == (j & 2) << 16 >> 16 && (i[h >> 1] = j | 2, q[g + 144 >> 2] = 0);
                    g = l[g + 96 >> 2];
                    if (0 == (g | 0)) {
                        break a
                    }
                }
            }
        }
    } while (0)
}
function ht(b) {
    return 0 != (c[b + 102976 | 0] & 1) << 24 >> 24
}
function it(b) {
    return l[b + 102900 >> 2]
}
function jt(b) {
    return 0 != (l[b + 102868 >> 2] & 2 | 0)
}
function kt(b) {
    return l[b + 102932 >> 2]
}
function lt(b, d) {
    l[b + 102984 >> 2] = d
}
function mt(b, d) {
    var e = b + 102868 | 0, f = l[e >> 2];
    l[e >> 2] = d ? f | 4 : f & -5
}
function nt(b) {
    return l[b + 102936 >> 2]
}
function ot(b, d) {
    c[b + 102992 | 0] = d & 1
}
function pt(b, d) {
    l[b + 102940 >> 2] = d
}
function qt(b) {
    return l[b + 4 >> 2]
}
function rt(b, d) {
    q[b + 8 >> 2] = d
}
function st(b) {
    return q[b + 8 >> 2]
}
function tt(b, d) {
    var e = b + 12 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function ut(b, d) {
    var e = b + 4 | 0;
    l[e >> 2] |= d
}
function vt(b, d) {
    var e = b + 4 | 0;
    l[e >> 2] &= d ^ -1
}
function wt(b, d) {
    l[b + 4 >> 2] = d
}
function xt(b) {
    return l[b + 4 >> 2]
}
function yt(b) {
    return l[b + 12 >> 2]
}
function zt(b) {
    return l[b + 48 >> 2]
}
function Zt(b) {
    return l[b + 52 >> 2]
}
function $t(b) {
    return l[b + 64 >> 2]
}
function au(b) {
    return l[b + 4 >> 2]
}
function bu(b, d) {
    l[b + 64 >> 2] = d
}
function cu(b) {
    return 0 != (c[b + 61 | 0] & 1) << 24 >> 24
}
function du(b) {
    return 0 == (i[l[b + 48 >> 2] + 4 >> 1] & 32) << 16 >> 16 ? 0 : 0 != (i[l[b + 52 >> 2] + 4 >> 1] & 32) << 16 >> 16
}
function eu(b) {
    var d = l[b >> 2];
    return-1 == (d | 0) ? 0 : l[(l[b + 4 >> 2] + 32 >> 2) + (9 * d | 0)]
}
function fu(b) {
    var d, e = l[b >> 2];
    if (-1 == (e | 0)) {
        d = 0
    } else {
        d = l[b + 4 >> 2] >> 2;
        var e = 2 * (q[d + (9 * e | 0) + 2] - q[d + (9 * e | 0)] + (q[d + (9 * e | 0) + 3] - q[d + (9 * e | 0) + 1])), b = l[b + 12 >> 2], f = 0 < (b | 0);
        a:do {
            if (f) {
                for (var g = 0, h = 0; ;) {
                    if (g = 0 > (l[d + (9 * h | 0) + 8] | 0) ? g : g + 2 * (q[d + (9 * h | 0) + 2] - q[d + (9 * h | 0)] + (q[d + (9 * h | 0) + 3] - q[d + (9 * h | 0) + 1])), h = h + 1 | 0, (h | 0) == (b | 0)) {
                        var j = g;
                        break a
                    }
                }
            } else {
                j = 0
            }
        } while (0);
        d = j / e
    }
    return d
}
function gu(b) {
    return l[b + 4 >> 2]
}
function hu(b, d) {
    q[b + 8 >> 2] = d
}
function iu(b) {
    return q[b + 8 >> 2]
}
function ju(b) {
    return l[b + 12 >> 2]
}
function ku(b, d, e, f) {
    var g = a;
    a += 28;
    var h = g + 8, j = b + 102872 | 0;
    l[g >> 2] = j;
    l[g + 4 >> 2] = d;
    q[h + 16 >> 2] = 1;
    var k = l[e + 4 >> 2];
    l[h >> 2] = l[e >> 2];
    l[h + 4 >> 2] = k;
    var m = h + 8 | 0, n = l[f + 4 >> 2];
    l[m >> 2] = l[f >> 2];
    l[m + 4 >> 2] = n;
    var p = j | 0, u, r, w, x, y, A, C = a;
    a += 1056;
    var z = C + 1036;
    A = h >> 2;
    var D = l[A + 1], E = (t[0] = l[A], M[0]), G = (t[0] = D, M[0]);
    y = (h + 8 | 0) >> 2;
    var H = l[y + 1], F = (t[0] = l[y], M[0]), I = (t[0] = H, M[0]), J = F - E, L = I - G, O = J * J + L * L;
    0 < O || P(N.q | 0, 204, N.Ke | 0, N.Sf | 0);
    var R = Fh(O);
    if (1.1920928955078125e-7 > R) {
        var T = J, S = L
    } else {
        var U = 1 / R, T = J * U, S = L * U
    }
    var W = -1 * S, Q = 0 < W ? W : -W, $ = 0 < T ? T : -T, ea = q[h + 16 >> 2], sa = E + J * ea, Ba = G + L * ea, oa = E < sa ? E : sa, ga = G < Ba ? G : Ba, qa = E > sa ? E : sa, la = G > Ba ? G : Ba, Ca = C + 4 | 0;
    x = (C | 0) >> 2;
    l[x] = Ca;
    w = (C + 1028 | 0) >> 2;
    r = (C + 1032 | 0) >> 2;
    l[r] = 256;
    l[Ca >> 2] = l[p >> 2];
    l[w] = 1;
    var ia = p + 4 | 0, ya = z + 8 | 0, ta = z + 16 | 0, Ia = ea, na = oa, Z = ga, ba = qa, ca = la, ma = 1;
    a:for (; ;) {
        for (var ka = ma; ;) {
            if (0 >= (ka | 0)) {
                break a
            }
            var aa = ka - 1 | 0;
            l[w] = aa;
            var ra = l[x], ha = l[ra + (aa << 2) >> 2];
            if (-1 == (ha | 0)) {
                var za = Ia, X = na, ua = Z, da = ba, fa = ca;
                break
            }
            var Aa = l[ia >> 2];
            u = Aa >> 2;
            var Qa = q[u + (9 * ha | 0) + 2], pa = q[u + (9 * ha | 0) + 3], cb = q[u + (9 * ha | 0)], Ra = q[u + (9 * ha | 0) + 1];
            if (0 < na - Qa | 0 < Z - pa | 0 < cb - ba | 0 < Ra - ca) {
                za = Ia;
                X = na;
                ua = Z;
                da = ba;
                fa = ca;
                break
            }
            var Ta = W * (E - .5 * (cb + Qa)) + T * (G - .5 * (Ra + pa));
            if (0 < (0 < Ta ? Ta : -Ta) - (.5 * Q * (Qa - cb) + .5 * $ * (pa - Ra))) {
                za = Ia;
                X = na;
                ua = Z;
                da = ba;
                fa = ca;
                break
            }
            var $a = Aa + 36 * ha + 24 | 0;
            if (-1 == (l[$a >> 2] | 0)) {
                var va = l[A + 1];
                l[z >> 2] = l[A];
                l[z + 4 >> 2] = va;
                var Wa = l[y + 1];
                l[ya >> 2] = l[y];
                l[ya + 4 >> 2] = Wa;
                q[ta >> 2] = Ia;
                var fb, gb = g, Xa = z, Ua = ha, Va = Xa >> 2, pb = a;
                a += 20;
                var nb = pb + 12, La = l[gb >> 2];
                4 == (-1 < (Ua | 0) ? (l[La + 12 >> 2] | 0) > (Ua | 0) ? 5 : 4 : 4) && P(N.q | 0, 153, N.T | 0, N.o | 0);
                var qb = l[(l[La + 4 >> 2] + 16 >> 2) + (9 * Ua | 0)], bb = l[qb + 16 >> 2], Fa = l[bb + 12 >> 2];
                if (K[l[l[Fa >> 2] + 20 >> 2]](Fa, pb, Xa, l[bb + 8 >> 2] + 12 | 0, l[qb + 20 >> 2])) {
                    var Ma = q[pb + 8 >> 2], wa = 1 - Ma, hb = q[Va + 1] * wa + q[Va + 3] * Ma;
                    q[nb >> 2] = q[Va] * wa + q[Va + 2] * Ma;
                    q[nb + 4 >> 2] = hb;
                    var Ya = l[gb + 4 >> 2], Za = K[l[l[Ya >> 2] + 8 >> 2]](Ya, bb, nb, pb | 0, Ma)
                } else {
                    Za = q[Va + 4]
                }
                a = pb;
                fb = Za;
                if (0 == fb) {
                    break a
                }
                if (0 >= fb) {
                    za = Ia;
                    X = na;
                    ua = Z;
                    da = ba;
                    fa = ca;
                    break
                }
                var Da = E + J * fb, Oa = G + L * fb, ib = E < Da ? E : Da, ab = G < Oa ? G : Oa, Ga = E > Da ? E : Da, jb = G > Oa ? G : Oa, za = fb, X = ib, ua = ab, da = Ga, fa = jb;
                break
            }
            if ((aa | 0) == (l[r] | 0)) {
                l[r] = aa << 1;
                var Ea = Ne(aa << 3);
                l[x] = Ea;
                var Pa = ra;
                Ch(Ea, Pa, l[w] << 2);
                (ra | 0) != (Ca | 0) && Dh(Pa)
            }
            l[((l[w] << 2) + l[x] | 0) >> 2] = l[$a >> 2];
            var Ja = l[w] + 1 | 0;
            l[w] = Ja;
            var db = Aa + 36 * ha + 28 | 0;
            if ((Ja | 0) == (l[r] | 0)) {
                var xa = l[x];
                l[r] = Ja << 1;
                var Sa = Ne(Ja << 3);
                l[x] = Sa;
                var Ka = xa;
                Ch(Sa, Ka, l[w] << 2);
                (xa | 0) != (Ca | 0) && Dh(Ka)
            }
            l[((l[w] << 2) + l[x] | 0) >> 2] = l[db >> 2];
            var tb = l[w] + 1 | 0, ka = l[w] = tb
        }
        Ia = za;
        na = X;
        Z = ua;
        ba = da;
        ca = fa;
        ma = l[w]
    }
    var kb = l[x];
    (kb | 0) != (Ca | 0) && (Dh(kb), l[x] = 0);
    a = C;
    a = g
}
function lu(b) {
    0 != (b | 0) && (Ap(b), Ls(b))
}
function mu(b) {
    0 == c[nu] << 24 >> 24 && ou(nu);
    var b = b + 102968 | 0, d = l[b + 4 >> 2], e = Mv;
    l[e >> 2] = l[b >> 2];
    l[e + 4 >> 2] = d;
    return Mv
}
function Kw(b) {
    if (0 != (b | 0)) {
        K[l[l[b >> 2] + 4 >> 2]](b)
    }
}
function Lw(b, d, e) {
    K[l[l[b >> 2] + 28 >> 2]](b, d, e)
}
function Mw(b, d) {
    return K[l[l[b >> 2] + 8 >> 2]](b, d)
}
function Sw(b, d, e, f, g) {
    return K[l[l[b >> 2] + 20 >> 2]](b, d, e, f, g)
}
function Tw(b, d, e, f) {
    K[l[l[b >> 2] + 24 >> 2]](b, d, e, f)
}
function Uw(b) {
    return K[l[l[b >> 2] + 12 >> 2]](b)
}
function Vw(b, d, e) {
    return K[l[l[b >> 2] + 16 >> 2]](b, d, e)
}
function Ww() {
    var b, d = Wq(20);
    l[d >> 2] = Xw + 8 | 0;
    b = (d + 4 | 0) >> 2;
    l[b] = 0;
    l[b + 1] = 0;
    l[b + 2] = 0;
    l[b + 3] = 0;
    return d
}
function Yw(b, d) {
    K[l[l[b >> 2] + 28 >> 2]](b, d)
}
function Zw(b, d, e, f) {
    K[l[l[b >> 2] + 8 >> 2]](b, d, e, f)
}
function $w(b, d, e, f, g) {
    K[l[l[b >> 2] + 20 >> 2]](b, d, e, f, g)
}
function ax(b, d, e, f) {
    K[l[l[b >> 2] + 12 >> 2]](b, d, e, f)
}
function bx(b, d, e, f) {
    K[l[l[b >> 2] + 16 >> 2]](b, d, e, f)
}
function cx(b, d, e, f) {
    K[l[l[b >> 2] + 24 >> 2]](b, d, e, f)
}
function dx(b, d) {
    return K[l[l[b >> 2] + 12 >> 2]](b, d)
}
function ex(b) {
    var d = a;
    a += 8;
    0 == c[fx] << 24 >> 24 && ou(fx);
    K[l[l[b >> 2] >> 2]](d, b);
    var b = l[d + 4 >> 2], e = gx;
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = b;
    a = d;
    return gx
}
function hx(b) {
    K[l[l[b >> 2] + 16 >> 2]](b)
}
function ix(b) {
    var d = a;
    a += 8;
    0 == c[jx] << 24 >> 24 && ou(jx);
    K[l[l[b >> 2] + 4 >> 2]](d, b);
    var b = l[d + 4 >> 2], e = kx;
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = b;
    a = d;
    return kx
}
function lx(b, d) {
    var e = a;
    a += 8;
    0 == c[mx] << 24 >> 24 && ou(mx);
    K[l[l[b >> 2] + 8 >> 2]](e, b, d);
    var f = l[e + 4 >> 2], g = nx;
    l[g >> 2] = l[e >> 2];
    l[g + 4 >> 2] = f;
    a = e;
    return nx
}
function ox(b, d, e, f, g) {
    return K[l[l[b >> 2] + 8 >> 2]](b, d, e, f, g)
}
function px(b) {
    0 != (b | 0) && (Dh(l[b + 4 >> 2]), Ls(b))
}
function qx() {
    var b, d, e = Wq(28);
    d = e >> 2;
    l[d] = -1;
    l[d + 3] = 16;
    l[d + 2] = 0;
    var f = Ne(576);
    b = f >> 2;
    l[d + 1] = f;
    for (var g = b, h = g + 144; g < h; g++) {
        l[g] = 0
    }
    for (g = 0; ;) {
        h = g + 1 | 0;
        l[(f + 20 >> 2) + (9 * g | 0)] = h;
        l[(f + 32 >> 2) + (9 * g | 0)] = -1;
        if (15 <= (h | 0)) {
            break
        }
        g = h
    }
    l[b + 140] = -1;
    l[b + 143] = -1;
    l[d + 4] = 0;
    l[d + 5] = 0;
    l[d + 6] = 0;
    return e
}
function rx(b, d) {
    4 == (-1 < (d | 0) ? (l[b + 12 >> 2] | 0) > (d | 0) ? 5 : 4 : 4) && P(N.q | 0, 159, N.H | 0, N.o | 0);
    return l[b + 4 >> 2] + 36 * d | 0
}
function sx(b, d) {
    4 == (-1 < (d | 0) ? (l[b + 12 >> 2] | 0) > (d | 0) ? 5 : 4 : 4) && P(N.q | 0, 153, N.T | 0, N.o | 0);
    return l[(l[b + 4 >> 2] + 16 >> 2) + (9 * d | 0)]
}
function tx(b) {
    var d = b + 12 | 0, e = l[d >> 2], f = 0 < (e | 0);
    a:do {
        if (f) {
            for (var g = b + 4 | 0, h = 0, j = 0, k = l[g >> 2], m = e; ;) {
                if (2 <= (l[(k + 32 >> 2) + (9 * j | 0)] | 0)) {
                    var n = k + 36 * j + 24 | 0, p = l[n >> 2];
                    -1 == (p | 0) ? (P(N.c | 0, 686, N.La | 0, N.Za | 0), p = l[n >> 2], n = l[g >> 2], m = l[d >> 2]) : n = k;
                    k = l[(n + 32 >> 2) + (9 * l[(k + 28 >> 2) + (9 * j | 0)] | 0)] - l[(n + 32 >> 2) + (9 * p | 0)] | 0;
                    k = 0 < (k | 0) ? k : -k | 0;
                    h = (h | 0) > (k | 0) ? h : k;
                    k = n
                }
                j = j + 1 | 0;
                if ((j | 0) >= (m | 0)) {
                    var u = h;
                    break a
                }
            }
        } else {
            u = 0
        }
    } while (0);
    return u
}
function ux(b, d, e) {
    var f, g = hh(b);
    f = (b + 4 | 0) >> 2;
    var h = q[d + 4 >> 2] - .10000000149011612, j = l[f] + 36 * g | 0, k = (M[0] = q[d >> 2] - .10000000149011612, t[0]), h = (M[0] = h, t[0]) | 0;
    l[(j | 0) >> 2] = 0 | k;
    l[(j + 4 | 0) >> 2] = h;
    k = q[d + 12 >> 2] + .10000000149011612;
    j = l[f] + 36 * g + 8 | 0;
    d = (M[0] = q[d + 8 >> 2] + .10000000149011612, t[0]);
    k = (M[0] = k, t[0]) | 0;
    l[(j | 0) >> 2] = 0 | d;
    l[(j + 4 | 0) >> 2] = k;
    l[(l[f] + 36 * g + 16 | 0) >> 2] = e;
    l[(l[f] + 36 * g + 32 | 0) >> 2] = 0;
    ih(b, g);
    return g
}
function vx() {
    return Wq(1)
}
function wx(b) {
    0 != (b | 0) && Ls(b | 0)
}
function xx(b) {
    if (0 != (b | 0)) {
        K[l[l[b >> 2] + 4 >> 2]](b)
    }
}
function yx() {
    var b = Wq(4);
    l[b >> 2] = zx + 8 | 0;
    return b
}
function Ax(b, d) {
    K[l[l[b >> 2] + 12 >> 2]](b, d)
}
function Bx(b, d) {
    K[l[l[b >> 2] + 8 >> 2]](b, d)
}
function Cx(b, d, e) {
    K[l[l[b >> 2] + 16 >> 2]](b, d, e)
}
function Dx(b, d, e) {
    K[l[l[b >> 2] + 20 >> 2]](b, d, e)
}
function Ex(b) {
    if (0 != (b | 0)) {
        K[l[l[b >> 2] + 4 >> 2]](b)
    }
}
function Fx(b, d, e) {
    var f = b + 12 | 0;
    4 == (0 == (l[f >> 2] | 0) ? 0 == (l[b + 16 >> 2] | 0) ? 5 : 4 : 4) && P(N.F | 0, 48, N.ea | 0, N.Ta | 0);
    1 < (e | 0) || P(N.F | 0, 49, N.ea | 0, N.Qb | 0);
    var g = b + 16 | 0;
    l[g >> 2] = e;
    e = Ne(e << 3);
    l[f >> 2] = e;
    Ch(e, d, l[g >> 2] << 3);
    c[b + 36 | 0] = 0;
    c[b + 37 | 0] = 0
}
function Gx(b) {
    return l[b + 16 >> 2]
}
function Hx(b, d) {
    var e = b + 20 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f;
    c[b + 36 | 0] = 1
}
function Ix(b, d) {
    l[b + 12 >> 2] = d
}
function Jx(b, d) {
    var e = b + 28 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f;
    c[b + 37 | 0] = 1
}
function Kx(b, d) {
    l[b + 16 >> 2] = d
}
function Lx(b, d) {
    q[b + 8 >> 2] = d
}
function Mx(b) {
    return q[b + 8 >> 2]
}
function Nx(b, d) {
    return(d << 3) + b + 20 | 0
}
function Ox(b, d, e) {
    b >>= 2;
    l[b + 37] = 4;
    var f = -d, g = -e;
    q[b + 5] = f;
    q[b + 6] = g;
    q[b + 7] = d;
    q[b + 8] = g;
    q[b + 9] = d;
    q[b + 10] = e;
    q[b + 11] = f;
    q[b + 12] = e;
    q[b + 21] = 0;
    q[b + 22] = -1;
    q[b + 23] = 1;
    q[b + 24] = 0;
    q[b + 25] = 0;
    q[b + 26] = 1;
    q[b + 27] = -1;
    q[b + 28] = 0;
    q[b + 3] = 0;
    q[b + 4] = 0
}
function Px(b, d) {
    var e = b + 12 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function Qx(b, d) {
    l[b + 148 >> 2] = d
}
function Rx(b) {
    return l[b + 148 >> 2]
}
function Sx(b) {
    return l[b + 4 >> 2]
}
function Tx(b) {
    return l[b + 148 >> 2]
}
function Ux(b, d, e) {
    var f = b + 12 | 0, g = l[d + 4 >> 2];
    l[f >> 2] = l[d >> 2];
    l[f + 4 >> 2] = g;
    d = b + 20 | 0;
    f = l[e + 4 >> 2];
    l[d >> 2] = l[e >> 2];
    l[d + 4 >> 2] = f;
    c[b + 44 | 0] = 0;
    c[b + 45 | 0] = 0
}
function Vx(b, d) {
    q[b + 8 >> 2] = d
}
function Wx(b) {
    return q[b + 8 >> 2]
}
function Xx(b) {
    return l[b + 4 >> 2]
}
function Yx(b) {
    return l[b + 12 >> 2]
}
function Zx(b, d) {
    var e = b + 4 | 0, f = l[e >> 2];
    l[e >> 2] = d ? f | 4 : f & -5
}
function $x(b) {
    return q[b + 140 >> 2]
}
function ay(b) {
    return q[b + 136 >> 2]
}
function by(b) {
    return 0 != (l[b + 4 >> 2] & 2 | 0)
}
function cy(b) {
    return 0 != (l[b + 4 >> 2] & 4 | 0)
}
function dy(b) {
    return l[b + 52 >> 2]
}
function ey(b, d) {
    q[b + 136 >> 2] = d
}
function fy(b) {
    return l[b + 48 >> 2]
}
function gy(b) {
    return l[b + 56 >> 2]
}
function hy(b) {
    return l[b + 60 >> 2]
}
function iy(b, d) {
    q[b + 140 >> 2] = d
}
function jy(b) {
    var d = q[l[b + 48 >> 2] + 20 >> 2], e = q[l[b + 52 >> 2] + 20 >> 2];
    q[b + 140 >> 2] = d > e ? d : e
}
function ky(b) {
    return q[b + 8 >> 2]
}
function ly(b, d) {
    q[b + 8 >> 2] = d
}
function my(b) {
    return l[b + 4 >> 2]
}
function ny(b) {
    return q[b + 56 >> 2]
}
function oy(b) {
    return l[b + 148 >> 2]
}
function py(b) {
    return 0 != (i[b + 4 >> 1] & 4) << 16 >> 16
}
function qy(b, d) {
    q[b + 136 >> 2] = d
}
function ry(b, d) {
    q[b + 140 >> 2] = d
}
function sy(b, d) {
    l[b + 148 >> 2] = d
}
function ty(b) {
    return q[b + 72 >> 2]
}
function uy(b) {
    return l[b + 100 >> 2]
}
function vy(b, d, e) {
    if (2 == (l[b >> 2] | 0)) {
        var f = b + 4 | 0, g = i[f >> 1];
        0 == (g & 2) << 16 >> 16 && (i[f >> 1] = g | 2, q[b + 144 >> 2] = 0);
        f = d | 0;
        g = b + 76 | 0;
        q[g >> 2] += q[f >> 2];
        d = d + 4 | 0;
        g = b + 80 | 0;
        q[g >> 2] += q[d >> 2];
        g = b + 84 | 0;
        q[g >> 2] += (q[e >> 2] - q[b + 44 >> 2]) * q[d >> 2] - (q[e + 4 >> 2] - q[b + 48 >> 2]) * q[f >> 2]
    }
}
function wy(b, d, e) {
    K[l[l[b >> 2] + 28 >> 2]](b, d, e)
}
function xy(b, d) {
    return K[l[l[b >> 2] + 8 >> 2]](b, d)
}
function yy() {
    var b, d = Wq(40);
    b = d >> 2;
    l[b] = zy + 8 | 0;
    l[b + 1] = 3;
    q[b + 2] = .009999999776482582;
    l[b + 3] = 0;
    l[b + 4] = 0;
    c[d + 36 | 0] = 0;
    c[d + 37 | 0] = 0;
    return d
}
function Ay(b, d, e, f) {
    K[l[l[b >> 2] + 24 >> 2]](b, d, e, f)
}
function By(b, d, e, f, g) {
    return K[l[l[b >> 2] + 20 >> 2]](b, d, e, f, g)
}
function Cy(b) {
    return K[l[l[b >> 2] + 12 >> 2]](b)
}
function Dy(b, d, e) {
    return K[l[l[b >> 2] + 16 >> 2]](b, d, e)
}
function Ey(b, d, e) {
    var f;
    f = (b + 12 | 0) >> 2;
    4 == (0 == (l[f] | 0) ? 0 == (l[b + 16 >> 2] | 0) ? 5 : 4 : 4) && P(N.F | 0, 34, N.jb | 0, N.Ta | 0);
    2 < (e | 0) || P(N.F | 0, 35, N.jb | 0, N.Yb | 0);
    var g = e + 1 | 0, h = b + 16 | 0;
    l[h >> 2] = g;
    g = Ne(g << 3);
    l[f] = g;
    Ch(g, d, e << 3);
    d = l[f];
    e = (e << 3) + d | 0;
    g = l[d + 4 >> 2];
    l[(e | 0) >> 2] = l[d >> 2];
    l[(e + 4 | 0) >> 2] = g;
    f = l[f];
    h = (l[h >> 2] - 2 << 3) + f | 0;
    e = b + 20 | 0;
    d = l[h + 4 >> 2];
    l[e >> 2] = l[h >> 2];
    l[e + 4 >> 2] = d;
    h = f + 8 | 0;
    f = b + 28 | 0;
    e = l[h + 4 >> 2];
    l[f >> 2] = l[h >> 2];
    l[f + 4 >> 2] = e;
    c[b + 36 | 0] = 1;
    c[b + 37 | 0] = 1
}
function Fy(b, d) {
    return K[l[l[b >> 2] + 8 >> 2]](b, d)
}
function Gy(b) {
    if (0 != (b | 0)) {
        var d = b + 4 | 0, e = 0 < (l[d >> 2] | 0), f = b | 0, g = l[f >> 2];
        a:do {
            if (e) {
                for (var h = 0, j = g; ;) {
                    if (Dh(l[j + (h << 3) + 4 >> 2]), h = h + 1 | 0, j = l[f >> 2], (h | 0) >= (l[d >> 2] | 0)) {
                        var k = j;
                        break a
                    }
                }
            } else {
                k = g
            }
        } while (0);
        Dh(k);
        Ls(b)
    }
}
function Hy(b) {
    var d;
    d = (b + 4 | 0) >> 2;
    var e = 0 < (l[d] | 0), f = b | 0;
    a:do {
        if (e) {
            for (var g = 0; ;) {
                if (Dh(l[l[f >> 2] + (g << 3) + 4 >> 2]), g = g + 1 | 0, (g | 0) >= (l[d] | 0)) {
                    break a
                }
            }
        }
    } while (0);
    l[d] = 0;
    Oe(l[f >> 2], l[b + 8 >> 2] << 3);
    b = (b + 12 | 0) >> 2;
    for (d = b + 14; b < d; b++) {
        l[b] = 0
    }
}
function EB(b, d, e) {
    var f = 0 == (e | 0);
    a:do {
        if (!f) {
            var g = 0 < (e | 0);
            do {
                if (g) {
                    if (640 >= (e | 0)) {
                        break
                    }
                    Dh(d);
                    break a
                }
                P(N.e | 0, 164, N.f | 0, N.Wa | 0)
            } while (0);
            var h = ed[rn + e | 0], g = h & 255;
            14 > (h & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0);
            h = d;
            g = (g << 2) + b + 12 | 0;
            l[d >> 2] = l[g >> 2];
            l[g >> 2] = h
        }
    } while (0)
}
function gF() {
    var b, d = Wq(68);
    b = d >> 2;
    l[b + 2] = 128;
    l[b + 1] = 0;
    var e = Ne(1024);
    l[b] = e;
    b = e >> 2;
    for (e = b + 256; b < e; b++) {
        l[b] = 0
    }
    b = (d + 12 | 0) >> 2;
    for (e = b + 14; b < e; b++) {
        l[b] = 0
    }
    if (0 == (c[xp] & 1) << 24 >> 24) {
        e = 0;
        for (b = 1; !(14 > (e | 0) || P(N.e | 0, 73, N.Ha | 0, N.Ua | 0), (b | 0) > (l[sn + (e << 2) >> 2] | 0) && (e = e + 1 | 0), c[rn + b | 0] = e & 255, b = b + 1 | 0, 641 == (b | 0));) {
        }
        c[xp] = 1
    }
    return d
}
function hF(b) {
    if (0 != (b | 0)) {
        K[l[l[b >> 2] + 4 >> 2]](b)
    }
}
function iF(b, d, e) {
    K[l[l[b >> 2] + 28 >> 2]](b, d, e)
}
function jF(b, d) {
    return K[l[l[b >> 2] + 8 >> 2]](b, d)
}
function kF(b, d, e, f, g) {
    return K[l[l[b >> 2] + 20 >> 2]](b, d, e, f, g)
}
function lF(b, d, e, f) {
    K[l[l[b >> 2] + 24 >> 2]](b, d, e, f)
}
function mF(b) {
    return K[l[l[b >> 2] + 12 >> 2]](b)
}
function nF(b, d, e) {
    return K[l[l[b >> 2] + 16 >> 2]](b, d, e)
}
function oF() {
    var b, d = Wq(152);
    b = d >> 2;
    l[b] = pF + 8 | 0;
    l[b + 1] = 2;
    q[b + 2] = .009999999776482582;
    l[b + 37] = 0;
    q[b + 3] = 0;
    q[b + 4] = 0;
    return d
}
function qF(b) {
    if (0 != (b | 0)) {
        K[l[l[b >> 2] + 4 >> 2]](b)
    }
}
function rF(b, d, e) {
    K[l[l[b >> 2] + 28 >> 2]](b, d, e)
}
function sF(b, d) {
    return K[l[l[b >> 2] + 8 >> 2]](b, d)
}
function tF(b, d, e, f, g) {
    return K[l[l[b >> 2] + 20 >> 2]](b, d, e, f, g)
}
function uF(b, d, e, f) {
    K[l[l[b >> 2] + 24 >> 2]](b, d, e, f)
}
function vF(b) {
    return K[l[l[b >> 2] + 12 >> 2]](b)
}
function wF(b, d, e) {
    return K[l[l[b >> 2] + 16 >> 2]](b, d, e)
}
function xF() {
    var b, d = Wq(48);
    b = d >> 2;
    l[b] = yF + 8 | 0;
    l[b + 1] = 1;
    q[b + 2] = .009999999776482582;
    b = d + 28 | 0;
    l[b >> 2] = 0;
    l[b + 4 >> 2] = 0;
    l[b + 8 >> 2] = 0;
    l[b + 12 >> 2] = 0;
    i[b + 16 >> 1] = 0;
    return d
}
function zF(b, d) {
    var e = l[b + 48 >> 2], f = l[b + 52 >> 2];
    Gi(d, b + 64 | 0, l[e + 8 >> 2] + 12 | 0, q[l[e + 12 >> 2] + 8 >> 2], l[f + 8 >> 2] + 12 | 0, q[l[f + 12 >> 2] + 8 >> 2])
}
function AF(b) {
    var d = Fh(q[l[b + 48 >> 2] + 16 >> 2] * q[l[b + 52 >> 2] + 16 >> 2]);
    q[b + 136 >> 2] = d
}
function BF(b, d, e, f) {
    K[l[l[b >> 2] >> 2]](b, d, e, f)
}
function CF(b, d, e) {
    K[l[l[b >> 2] + 28 >> 2]](b, d, e)
}
function DF(b, d) {
    return K[l[l[b >> 2] + 8 >> 2]](b, d)
}
function EF(b, d, e, f, g) {
    return K[l[l[b >> 2] + 20 >> 2]](b, d, e, f, g)
}
function FF(b, d, e, f) {
    K[l[l[b >> 2] + 24 >> 2]](b, d, e, f)
}
function GF(b) {
    return K[l[l[b >> 2] + 12 >> 2]](b)
}
function HF(b, d, e) {
    return K[l[l[b >> 2] + 16 >> 2]](b, d, e)
}
function IF(b, d) {
    0 == c[JF] << 24 >> 24 && ou(JF);
    var e = q[d >> 2] - q[b + 12 >> 2], f = q[d + 4 >> 2] - q[b + 16 >> 2], g = q[b + 24 >> 2], h = q[b + 20 >> 2], j = (M[0] = g * e + h * f, t[0]), e = (M[0] = e * -h + g * f, t[0]) | 0, f = KF;
    l[f >> 2] = 0 | j;
    l[f + 4 >> 2] = e;
    return KF
}
function LF(b, d) {
    if (0 != (l[b >> 2] | 0)) {
        var e = q[d >> 2], f = q[d + 4 >> 2];
        0 < e * e + f * f && (e = b + 4 | 0, f = i[e >> 1], 0 == (f & 2) << 16 >> 16 && (i[e >> 1] = f | 2, q[b + 144 >> 2] = 0));
        e = b + 64 | 0;
        f = l[d + 4 >> 2];
        l[e >> 2] = l[d >> 2];
        l[e + 4 >> 2] = f
    }
}
function MF(b) {
    return l[b + 108 >> 2]
}
function NF(b) {
    return l[b + 96 >> 2]
}
function OF(b, d) {
    var e;
    e = (b + 4 | 0) >> 1;
    var f = i[e];
    if (d) {
        i[e] = f | 4
    } else {
        var g = f & -5;
        i[e] = g;
        0 == (f & 2) << 16 >> 16 && (i[e] = g | 2, q[b + 144 >> 2] = 0)
    }
}
function PF(b) {
    return q[b + 116 >> 2]
}
function QF(b, d) {
    if (0 != (l[b >> 2] | 0)) {
        if (0 < d * d) {
            var e = b + 4 | 0, f = i[e >> 1];
            0 == (f & 2) << 16 >> 16 && (i[e >> 1] = f | 2, q[b + 144 >> 2] = 0)
        }
        q[b + 72 >> 2] = d
    }
}
function RF(b, d) {
    var e = b + 116 | 0;
    q[d >> 2] = q[e >> 2];
    var f = b + 28 | 0, g = q[f >> 2], h = q[b + 32 >> 2];
    q[d + 12 >> 2] = q[b + 124 >> 2] + q[e >> 2] * (g * g + h * h);
    e = d + 4 | 0;
    g = l[f + 4 >> 2];
    l[e >> 2] = l[f >> 2];
    l[e + 4 >> 2] = g
}
function SF(b, d) {
    if (2 == (l[b >> 2] | 0)) {
        var e = b + 4 | 0, f = i[e >> 1];
        0 == (f & 2) << 16 >> 16 && (i[e >> 1] = f | 2, q[b + 144 >> 2] = 0);
        e = b + 76 | 0;
        q[e >> 2] += q[d >> 2];
        e = b + 80 | 0;
        q[e >> 2] += q[d + 4 >> 2]
    }
}
function TF(b, d) {
    if (2 == (l[b >> 2] | 0)) {
        var e = b + 4 | 0, f = i[e >> 1];
        0 == (f & 2) << 16 >> 16 && (i[e >> 1] = f | 2, q[b + 144 >> 2] = 0);
        e = b + 84 | 0;
        q[e >> 2] += d
    }
}
function UF(b) {
    return 0 != (i[b + 4 >> 1] & 2) << 16 >> 16
}
function VF(b) {
    return q[b + 136 >> 2]
}
function WF(b, d, e) {
    var f = b >> 2;
    if (2 == (l[f] | 0)) {
        var g = b + 4 | 0, h = i[g >> 1];
        0 == (h & 2) << 16 >> 16 && (i[g >> 1] = h | 2, q[f + 36] = 0);
        var h = q[f + 30], g = d | 0, d = d + 4 | 0, j = q[d >> 2] * h, k = b + 64 | 0;
        q[k >> 2] += q[g >> 2] * h;
        h = b + 68 | 0;
        q[h >> 2] += j;
        b = b + 72 | 0;
        q[b >> 2] += q[f + 32] * ((q[e >> 2] - q[f + 11]) * q[d >> 2] - (q[e + 4 >> 2] - q[f + 12]) * q[g >> 2])
    }
}
function XF(b) {
    return 0 != (i[b + 4 >> 1] & 16) << 16 >> 16
}
function YF(b) {
    return l[b + 112 >> 2]
}
function ZF(b) {
    return q[b + 132 >> 2]
}
function $F(b) {
    return 0 != (i[b + 4 >> 1] & 8) << 16 >> 16
}
function aG(b) {
    return l[b + 88 >> 2]
}
function bG(b, d) {
    q[b + 132 >> 2] = d
}
function cG(b, d) {
    var e = b + 4 | 0, f = i[e >> 1];
    i[e >> 1] = d ? f | 8 : f & -9
}
function dG(b) {
    return l[b >> 2]
}
function eG(b) {
    return q[b + 140 >> 2]
}
function fG(b) {
    var d = q[b + 28 >> 2], e = q[b + 32 >> 2];
    return q[b + 124 >> 2] + q[b + 116 >> 2] * (d * d + e * e)
}
function gG(b) {
    return 0 != (i[b + 4 >> 1] & 32) << 16 >> 16
}
function hG(b, d) {
    if (2 == (l[b >> 2] | 0)) {
        var e = b + 4 | 0, f = i[e >> 1];
        0 == (f & 2) << 16 >> 16 && (i[e >> 1] = f | 2, q[b + 144 >> 2] = 0);
        e = b + 72 | 0;
        q[e >> 2] += q[b + 128 >> 2] * d
    }
}
function iG(b) {
    return l[b + 102408 >> 2]
}
function jG(b, d) {
    i[b + 2 >> 1] = d
}
function kG(b, d) {
    i[b >> 1] = d
}
function lG(b) {
    return i[b + 4 >> 1]
}
function mG(b, d) {
    i[b + 4 >> 1] = d
}
function nG(b) {
    return i[b + 2 >> 1]
}
function oG(b) {
    return i[b >> 1]
}
function pG(b, d) {
    var e = b + 20 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function qG(b, d) {
    var e = b + 28 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function rG(b) {
    return q[b + 36 >> 2]
}
function sG(b, d) {
    q[b + 36 >> 2] = d
}
function tG(b) {
    0 == c[uG] << 24 >> 24 && ou(uG);
    var b = b + 64 | 0, d = l[b + 4 >> 2], e = vG;
    l[e >> 2] = l[b >> 2];
    l[e + 4 >> 2] = d;
    return vG
}
function wG(b, d) {
    var e = b >> 2;
    0 == c[xG] << 24 >> 24 && ou(xG);
    var f = q[e + 18], g = q[e + 17] + (q[d >> 2] - q[e + 11]) * f, e = (M[0] = q[e + 16] + (q[d + 4 >> 2] - q[e + 12]) * -f, t[0]), g = (M[0] = g, t[0]) | 0, f = yG;
    l[f >> 2] = 0 | e;
    l[f + 4 >> 2] = g;
    return yG
}
function zG(b, d, e) {
    var f = a;
    a += 28;
    i[f + 22 >> 1] = 1;
    i[f + 24 >> 1] = -1;
    i[f + 26 >> 1] = 0;
    l[f + 4 >> 2] = 0;
    q[f + 8 >> 2] = .20000000298023224;
    q[f + 12 >> 2] = 0;
    c[f + 20 | 0] = 0;
    l[(f | 0) >> 2] = d;
    q[(f + 16 | 0) >> 2] = e;
    b = yo(b, f);
    a = f;
    return b
}
function AG(b, d) {
    0 == c[BG] << 24 >> 24 && ou(BG);
    var e = q[b + 24 >> 2], f = q[d >> 2], g = q[b + 20 >> 2], h = q[d + 4 >> 2], j = (M[0] = e * f - g * h, t[0]), e = (M[0] = g * f + e * h, t[0]) | 0, f = CG;
    l[f >> 2] = 0 | j;
    l[f + 4 >> 2] = e;
    return CG
}
function DG(b, d) {
    var e = b >> 2;
    0 == c[EG] << 24 >> 24 && ou(EG);
    var f = q[e + 6], g = q[d >> 2], h = q[e + 5], j = q[d + 4 >> 2], k = q[e + 18], m = q[e + 17] + (f * g - h * j + q[e + 3] - q[e + 11]) * k, e = (M[0] = q[e + 16] + (h * g + f * j + q[e + 4] - q[e + 12]) * -k, t[0]), m = (M[0] = m, t[0]) | 0, f = FG;
    l[f >> 2] = 0 | e;
    l[f + 4 >> 2] = m;
    return FG
}
function GG(b, d) {
    0 == c[HG] << 24 >> 24 && ou(HG);
    var e = q[b + 24 >> 2], f = q[d >> 2], g = q[b + 20 >> 2], h = q[d + 4 >> 2], j = g * f + e * h + q[b + 16 >> 2], e = (M[0] = e * f - g * h + q[b + 12 >> 2], t[0]), j = (M[0] = j, t[0]) | 0, f = IG;
    l[f >> 2] = 0 | e;
    l[f + 4 >> 2] = j;
    return IG
}
function JG(b, d) {
    var e;
    e = (b + 4 | 0) >> 1;
    var f = i[e];
    d ? 0 == (f & 2) << 16 >> 16 && (i[e] = f | 2, q[b + 144 >> 2] = 0) : (i[e] = f & -3, q[b + 144 >> 2] = 0, e = (b + 64 | 0) >> 2, l[e] = 0, l[e + 1] = 0, l[e + 2] = 0, l[e + 3] = 0, l[e + 4] = 0, l[e + 5] = 0)
}
function KG(b, d) {
    0 == c[LG] << 24 >> 24 && ou(LG);
    var e = q[b + 24 >> 2], f = q[d >> 2], g = q[b + 20 >> 2], h = q[d + 4 >> 2], j = (M[0] = e * f + g * h, t[0]), e = (M[0] = f * -g + e * h, t[0]) | 0, f = MG;
    l[f >> 2] = 0 | j;
    l[f + 4 >> 2] = e;
    return MG
}
function NG(b, d) {
    var e = b + 4 | 0, f = i[e >> 1];
    i[e >> 1] = d ? f | 16 : f & -17;
    vo(b)
}
function OG(b) {
    0 != (b | 0) && (0 != (l[b + 102400 >> 2] | 0) && P(N.n | 0, 32, N.R | 0, N.Va | 0), 0 != (l[b + 102796 >> 2] | 0) && P(N.n | 0, 33, N.R | 0, N.Ya | 0), Ls(b | 0))
}
function PG() {
    var b, d = Wq(102800);
    b = d >> 2;
    l[b + 25600] = 0;
    l[b + 25601] = 0;
    l[b + 25602] = 0;
    l[b + 25699] = 0;
    return d
}
function QG(b, d) {
    var e, f, g;
    g = (b + 102796 | 0) >> 2;
    f = l[g];
    if (32 > (f | 0)) {
        var h = f
    } else {
        P(N.n | 0, 38, N.w | 0, N.D | 0), h = l[g]
    }
    f = (b + 12 * h + 102412 | 0) >> 2;
    l[(b + 102416 >> 2) + (3 * h | 0)] = d;
    e = (b + 102400 | 0) >> 2;
    var j = l[e];
    102400 < (j + d | 0) ? (e = Ne(d), l[f] = e, c[b + 12 * h + 102420 | 0] = 1) : (l[f] = b + j | 0, c[b + 12 * h + 102420 | 0] = 0, l[e] = l[e] + d | 0);
    e = b + 102404 | 0;
    h = l[e >> 2] + d | 0;
    l[e >> 2] = h;
    e = b + 102408 | 0;
    j = l[e >> 2];
    l[e >> 2] = (j | 0) > (h | 0) ? j : h;
    l[g] = l[g] + 1 | 0;
    return l[f]
}
function RG(b, d) {
    K[l[l[b >> 2] + 8 >> 2]](b, d)
}
function SG(b) {
    0 != (b | 0) && Ls(b)
}
function TG() {
    var b, d = Wq(6);
    b = d >> 1;
    i[b] = 1;
    i[b + 1] = -1;
    i[b + 2] = 0;
    return d
}
function UG(b) {
    0 != (b | 0) && Ls(b)
}
function VG() {
    var b, d = Wq(44);
    b = d >> 2;
    l[b] = 0;
    l[b + 1] = 0;
    l[b + 2] = 0;
    l[b + 3] = 0;
    c[d + 16] = 0;
    l[b] = 9;
    b = (d + 20 | 0) >> 2;
    l[b] = 0;
    l[b + 1] = 0;
    l[b + 2] = 0;
    l[b + 3] = 0;
    l[b + 4] = 0;
    l[b + 5] = 0;
    return d
}
function WG(b, d) {
    q[b + 40 >> 2] = d
}
function XG(b) {
    return q[b + 40 >> 2]
}
function YG(b, d, e, f) {
    l[b + 8 >> 2] = d;
    l[b + 12 >> 2] = e;
    var g = f | 0, h = q[g >> 2] - q[d + 12 >> 2], f = f + 4 | 0, j = q[f >> 2] - q[d + 16 >> 2], k = q[d + 24 >> 2], m = q[d + 20 >> 2], d = b + 20 | 0, n = (M[0] = k * h + m * j, t[0]), h = (M[0] = h * -m + k * j, t[0]) | 0;
    l[d >> 2] = 0 | n;
    l[d + 4 >> 2] = h;
    g = q[g >> 2] - q[e + 12 >> 2];
    f = q[f >> 2] - q[e + 16 >> 2];
    h = q[e + 24 >> 2];
    e = q[e + 20 >> 2];
    b = b + 28 | 0;
    j = (M[0] = h * g + e * f, t[0]);
    e = (M[0] = g * -e + h * f, t[0]) | 0;
    l[b >> 2] = 0 | j;
    l[b + 4 >> 2] = e
}
function ZG(b) {
    return q[b + 28 >> 2]
}
function $G(b) {
    return 0 != (c[b + 37 | 0] & 1) << 24 >> 24
}
function aH(b) {
    return l[b >> 2]
}
function bH(b) {
    return 0 != (c[b + 36 | 0] & 1) << 24 >> 24
}
function cH(b, d) {
    var e = b + 4 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function dH(b, d) {
    var e = b + 16 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function eH(b) {
    return 0 != (c[b + 39 | 0] & 1) << 24 >> 24
}
function fH(b) {
    return l[b + 44 >> 2]
}
function gH(b, d) {
    q[b + 32 >> 2] = d
}
function hH(b, d) {
    c[b + 38 | 0] = d & 1
}
function iH(b, d) {
    c[b + 36 | 0] = d & 1
}
function jH(b) {
    return q[b + 48 >> 2]
}
function kH(b, d) {
    q[b + 24 >> 2] = d
}
function lH(b, d) {
    l[b + 44 >> 2] = d
}
function mH(b, d) {
    l[b >> 2] = d
}
function nH(b, d) {
    q[b + 48 >> 2] = d
}
function oH(b) {
    return q[b + 32 >> 2]
}
function pH(b, d) {
    c[b + 39 | 0] = d & 1
}
function qH(b, d) {
    c[b + 40 | 0] = d & 1
}
function rH(b, d) {
    q[b + 12 >> 2] = d
}
function sH(b) {
    return q[b + 12 >> 2]
}
function tH(b) {
    return q[b + 24 >> 2]
}
function uH(b) {
    return 0 != (c[b + 40 | 0] & 1) << 24 >> 24
}
function vH(b, d) {
    q[b + 28 >> 2] = d
}
function wH(b) {
    return 0 != (c[b + 38 | 0] & 1) << 24 >> 24
}
function xH(b, d) {
    c[b + 37 | 0] = d & 1
}
function yH(b, d) {
    q[b >> 2] = d
}
function zH(b, d, e) {
    q[b >> 2] = d;
    q[b + 4 >> 2] = e
}
function AH(b) {
    return q[b >> 2]
}
function BH(b) {
    return q[b + 4 >> 2]
}
function CH(b, d) {
    q[b + 4 >> 2] = d
}
function DH(b) {
    var d = q[b >> 2];
    (!isNaN(d) && !isNaN(0)) & -Infinity < d & Infinity > d ? (b = q[b + 4 >> 2], b = (!isNaN(b) && !isNaN(0)) & -Infinity < b ? Infinity > b : 0) : b = 0;
    return b
}
function EH(b) {
    var d = q[b >> 2], b = q[b + 4 >> 2];
    return d * d + b * b
}
function FH(b, d) {
    var e = b | 0;
    q[e >> 2] += q[d >> 2];
    e = b + 4 | 0;
    q[e >> 2] += q[d + 4 >> 2]
}
function GH(b) {
    q[b >> 2] = 0;
    q[b + 4 >> 2] = 0
}
function HH(b, d) {
    var e = b | 0;
    q[e >> 2] *= d;
    e = b + 4 | 0;
    q[e >> 2] *= d
}
function IH(b, d) {
    q[b + 8 >> 2] = d
}
function JH(b, d, e, f) {
    q[b >> 2] = d;
    q[b + 4 >> 2] = e;
    q[b + 8 >> 2] = f
}
function KH(b) {
    return q[b + 8 >> 2]
}
function LH(b, d) {
    var e = b | 0;
    q[e >> 2] += q[d >> 2];
    e = b + 4 | 0;
    q[e >> 2] += q[d + 4 >> 2];
    e = b + 8 | 0;
    q[e >> 2] += q[d + 8 >> 2]
}
function MH(b) {
    q[b >> 2] = 0;
    q[b + 4 >> 2] = 0;
    q[b + 8 >> 2] = 0
}
function NH(b, d) {
    var e = b | 0;
    q[e >> 2] *= d;
    e = b + 4 | 0;
    q[e >> 2] *= d;
    e = b + 8 | 0;
    q[e >> 2] *= d
}
function OH(b) {
    return q[b + 24 >> 2]
}
function PH(b, d) {
    q[b + 24 >> 2] = d
}
function QH(b) {
    return l[b + 16 >> 2]
}
function RH(b, d) {
    var e, f = l[b + 16 >> 2];
    e = f >> 2;
    var g = l[b + 20 >> 2], h = 1 < (g | 0);
    a:do {
        if (h) {
            for (var j = q[d + 4 >> 2], k = q[d >> 2], m = 0, n = q[e] * k + q[e + 1] * j, p = 1; ;) {
                var u = q[(p << 3 >> 2) + e] * k + q[((p << 3) + 4 >> 2) + e] * j, r = u > n, m = r ? p : m, n = r ? u : n, p = p + 1 | 0;
                if ((p | 0) == (g | 0)) {
                    var w = m;
                    break a
                }
            }
        } else {
            w = 0
        }
    } while (0);
    return(w << 3) + f | 0
}
function SH(b) {
    return l[b + 20 >> 2]
}
function TH(b) {
    return l[b + 20 >> 2]
}
function UH(b, d) {
    var e;
    e = l[b + 16 >> 2] >> 2;
    var f = l[b + 20 >> 2], g = 1 < (f | 0);
    a:do {
        if (g) {
            for (var h = q[d + 4 >> 2], j = q[d >> 2], k = 0, m = q[e] * j + q[e + 1] * h, n = 1; ;) {
                var p = q[(n << 3 >> 2) + e] * j + q[((n << 3) + 4 >> 2) + e] * h, u = p > m, k = u ? n : k, m = u ? p : m, n = n + 1 | 0;
                if ((n | 0) == (f | 0)) {
                    var r = k;
                    break a
                }
            }
        } else {
            r = 0
        }
    } while (0);
    return r
}
function VH(b, d) {
    l[b + 16 >> 2] = d
}
function WH(b, d) {
    l[b + 20 >> 2] = d
}
function XH(b) {
    return 0 != (c[b + 20 | 0] & 1) << 24 >> 24
}
function YH(b, d) {
    l[b + 4 >> 2] = d
}
function ZH(b, d) {
    l[b >> 2] = d
}
function $H(b) {
    return q[b + 16 >> 2]
}
function aI(b) {
    return l[b >> 2]
}
function bI(b, d) {
    q[b + 16 >> 2] = d
}
function cI(b, d) {
    q[b + 12 >> 2] = d
}
function dI(b) {
    return q[b + 12 >> 2]
}
function eI(b, d) {
    c[b + 20 | 0] = d & 1
}
function fI(b) {
    return q[b + 8 >> 2]
}
function gI(b, d) {
    q[b + 8 >> 2] = d
}
function hI(b) {
    return l[b + 4 >> 2]
}
function iI(b, d) {
    var e = b + 20 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function jI(b, d) {
    var e = b + 28 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function kI(b) {
    return q[b + 68 >> 2]
}
function lI(b) {
    return 0 != (c[b + 60 | 0] & 1) << 24 >> 24
}
function mI(b) {
    return q[b + 44 >> 2]
}
function nI(b, d) {
    c[b + 48 | 0] = d & 1
}
function oI(b, d) {
    q[b + 68 >> 2] = d
}
function pI(b, d) {
    q[b + 56 >> 2] = d
}
function qI() {
    var b, d, e = Wq(52);
    d = e >> 2;
    l[d + 11] = 0;
    b = (e + 4 | 0) >> 2;
    l[b] = 0;
    l[b + 1] = 0;
    l[b + 2] = 0;
    l[b + 3] = 0;
    l[b + 4] = 0;
    l[b + 5] = 0;
    l[b + 6] = 0;
    l[b + 7] = 0;
    c[e + 36 | 0] = 1;
    c[e + 37 | 0] = 1;
    c[e + 38 | 0] = 0;
    c[e + 39 | 0] = 0;
    l[d] = 0;
    c[e + 40 | 0] = 1;
    q[d + 12] = 1;
    return e
}
function rI(b) {
    0 != (b | 0) && Ls(b)
}
function sI(b) {
    var d = b | 0, e = q[d >> 2], b = b + 4 | 0, f = q[b >> 2], g = Fh(e * e + f * f);
    if (1.1920928955078125e-7 > g) {
        d = 0
    } else {
        var h = 1 / g;
        q[d >> 2] = e * h;
        q[b >> 2] = f * h;
        d = g
    }
    return d
}
function tI() {
    return Wq(8)
}
function uI(b, d) {
    var e = Wq(8);
    q[e >> 2] = b;
    q[e + 4 >> 2] = d;
    return e
}
function vI(b) {
    0 == c[wI] << 24 >> 24 && ou(wI);
    var d = q[b >> 2], b = (M[0] = -q[b + 4 >> 2], t[0]), d = (M[0] = d, t[0]) | 0, e = xI;
    l[e >> 2] = 0 | b;
    l[e + 4 >> 2] = d;
    return xI
}
function yI(b) {
    var d = q[b >> 2], b = q[b + 4 >> 2];
    return Fh(d * d + b * b)
}
function zI(b) {
    0 != (b | 0) && Ls(b)
}
function AI(b) {
    0 == c[BI] << 24 >> 24 && ou(BI);
    var d = -q[b + 4 >> 2], b = (M[0] = -q[b >> 2], t[0]), d = (M[0] = d, t[0]) | 0, e = CI;
    l[e >> 2] = 0 | b;
    l[e + 4 >> 2] = d;
    return CI
}
function DI(b) {
    0 != (b | 0) && Ls(b)
}
function EI() {
    return Wq(12)
}
function FI(b, d, e) {
    var f, g = Wq(12);
    f = g >> 2;
    q[f] = b;
    q[f + 1] = d;
    q[f + 2] = e;
    return g
}
function GI(b) {
    0 == c[HI] << 24 >> 24 && ou(HI);
    var d = -q[b + 4 >> 2], e = -q[b + 8 >> 2];
    q[II >> 2] = -q[b >> 2];
    q[II + 4 >> 2] = d;
    q[II + 8 >> 2] = e;
    return II
}
function JI() {
    var b, d = Wq(28);
    b = d >> 2;
    l[b + 4] = 0;
    l[b + 5] = 0;
    q[b + 6] = 0;
    return d
}
function KI(b) {
    0 != (b | 0) && Ls(b)
}
function LI(b, d) {
    4 == (-1 < (d | 0) ? (l[b + 20 >> 2] | 0) > (d | 0) ? 5 : 4 : 4) && P(N.i | 0, 103, N.h | 0, N.j | 0);
    return(d << 3) + l[b + 16 >> 2] | 0
}
function MI(b) {
    0 != (b | 0) && Ls(b)
}
function NI() {
    var b = Wq(28);
    i[b + 22 >> 1] = 1;
    i[b + 24 >> 1] = -1;
    i[b + 26 >> 1] = 0;
    l[b >> 2] = 0;
    l[b + 4 >> 2] = 0;
    q[b + 8 >> 2] = .20000000298023224;
    q[b + 12 >> 2] = 0;
    q[b + 16 >> 2] = 0;
    c[b + 20 | 0] = 0;
    return b
}
function OI(b, d) {
    var e, f;
    f = (b + 22 | 0) >> 1;
    e = d >> 1;
    i[f] = i[e];
    i[f + 1] = i[e + 1];
    i[f + 2] = i[e + 2]
}
function PI() {
    var b, d, e = Wq(72);
    d = e >> 2;
    l[d] = 0;
    l[d + 1] = 0;
    l[d + 2] = 0;
    l[d + 3] = 0;
    c[e + 16] = 0;
    l[d] = 2;
    b = (e + 20 | 0) >> 2;
    l[b] = 0;
    l[b + 1] = 0;
    l[b + 2] = 0;
    l[b + 3] = 0;
    q[(e + 36 | 0) >> 2] = 1;
    q[d + 10] = 0;
    q[d + 11] = 0;
    c[e + 48 | 0] = 0;
    q[d + 13] = 0;
    q[d + 14] = 0;
    c[e + 60 | 0] = 0;
    q[d + 16] = 0;
    q[d + 17] = 0;
    return e
}
function QI(b, d, e, f, g) {
    var h = e >> 2;
    l[b + 8 >> 2] = d;
    l[b + 12 >> 2] = e;
    var j = f | 0, k = q[j >> 2] - q[d + 12 >> 2], m = f + 4 | 0, n = q[m >> 2] - q[d + 16 >> 2], e = d + 24 | 0, p = q[e >> 2], f = d + 20 | 0, u = q[f >> 2], r = b + 20 | 0, w = (M[0] = p * k + u * n, t[0]), k = (M[0] = k * -u + p * n, t[0]) | 0;
    l[r >> 2] = 0 | w;
    l[r + 4 >> 2] = k;
    j = q[j >> 2] - q[h + 3];
    r = q[m >> 2] - q[h + 4];
    w = q[h + 6];
    n = q[h + 5];
    m = b + 28 | 0;
    k = (M[0] = w * j + n * r, t[0]);
    j = (M[0] = j * -n + w * r, t[0]) | 0;
    l[m >> 2] = 0 | k;
    l[m + 4 >> 2] = j;
    e = q[e >> 2];
    j = q[g >> 2];
    f = q[f >> 2];
    k = q[g + 4 >> 2];
    g = b + 36 | 0;
    m = (M[0] = e * j + f * k, t[0]);
    f = (M[0] = j * -f + e * k, t[0]) | 0;
    l[g >> 2] = 0 | m;
    l[g + 4 >> 2] = f;
    q[b + 44 >> 2] = q[h + 14] - q[d + 56 >> 2]
}
function RI(b, d) {
    q[b + 52 >> 2] = d
}
function SI(b) {
    return q[b + 56 >> 2]
}
function TI(b) {
    return 0 != (c[b + 48 | 0] & 1) << 24 >> 24
}
function UI(b, d) {
    q[b + 44 >> 2] = d
}
function VI(b) {
    return q[b + 64 >> 2]
}
function WI(b, d) {
    q[b + 64 >> 2] = d
}
function XI(b, d) {
    c[b + 60 | 0] = d & 1
}
function YI(b) {
    return q[b + 52 >> 2]
}
function ZI(b, d) {
    var e = b + 36 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function $I(b, d) {
    q[b + 4 >> 2] = d
}
function aJ(b) {
    q[b >> 2] = 0;
    q[b + 4 >> 2] = 1
}
function bJ(b) {
    return q[b + 4 >> 2]
}
function cJ(b, d) {
    var e = b + 20 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function dJ(b, d) {
    q[b + 52 >> 2] = d
}
function eJ(b, d) {
    var e = b + 28 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function fJ(b) {
    return q[b + 56 >> 2]
}
function gJ(b, d) {
    q[b + 48 >> 2] = d
}
function hJ(b) {
    return 0 != (c[b + 44 | 0] & 1) << 24 >> 24
}
function iJ(b) {
    return q[b + 48 >> 2]
}
function jJ(b) {
    return q[b + 60 >> 2]
}
function kJ(b, d) {
    c[b + 44 | 0] = d & 1
}
function lJ(b, d) {
    q[b + 56 >> 2] = d
}
function mJ(b, d, e, f, g) {
    l[b + 8 >> 2] = d;
    l[b + 12 >> 2] = e;
    var h = f | 0, j = q[h >> 2] - q[d + 12 >> 2], k = f + 4 | 0, m = q[k >> 2] - q[d + 16 >> 2], f = d + 24 | 0, n = q[f >> 2], d = d + 20 | 0, p = q[d >> 2], u = b + 20 | 0, r = (M[0] = n * j + p * m, t[0]), j = (M[0] = j * -p + n * m, t[0]) | 0;
    l[u >> 2] = 0 | r;
    l[u + 4 >> 2] = j;
    h = q[h >> 2] - q[e + 12 >> 2];
    k = q[k >> 2] - q[e + 16 >> 2];
    j = q[e + 24 >> 2];
    n = q[e + 20 >> 2];
    e = b + 28 | 0;
    m = (M[0] = j * h + n * k, t[0]);
    h = (M[0] = h * -n + j * k, t[0]) | 0;
    l[e >> 2] = 0 | m;
    l[e + 4 >> 2] = h;
    f = q[f >> 2];
    e = q[g >> 2];
    d = q[d >> 2];
    g = q[g + 4 >> 2];
    b = b + 36 | 0;
    h = (M[0] = f * e + d * g, t[0]);
    g = (M[0] = e * -d + f * g, t[0]) | 0;
    l[b >> 2] = 0 | h;
    l[b + 4 >> 2] = g
}
function nJ(b, d) {
    q[b + 60 >> 2] = d
}
function oJ(b, d) {
    var e = b + 36 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function pJ(b) {
    return q[b + 52 >> 2]
}
function qJ(b, d) {
    var e = b + 20 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function rJ(b) {
    return q[b + 44 >> 2]
}
function sJ(b, d) {
    q[b + 48 >> 2] = d
}
function tJ(b, d) {
    var e = b + 28 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function uJ(b) {
    return 0 != (c[b + 40 | 0] & 1) << 24 >> 24
}
function vJ(b, d) {
    q[b + 44 >> 2] = d
}
function wJ(b) {
    return 0 != (c[b + 52 | 0] & 1) << 24 >> 24
}
function xJ(b, d) {
    q[b + 56 >> 2] = d
}
function yJ(b) {
    return q[b + 48 >> 2]
}
function zJ(b, d) {
    q[b + 36 >> 2] = d
}
function AJ(b, d) {
    q[b + 60 >> 2] = d
}
function BJ(b) {
    return q[b + 36 >> 2]
}
function CJ(b, d) {
    c[b + 40 | 0] = d & 1
}
function DJ(b, d) {
    c[b + 52 | 0] = d & 1
}
function EJ(b, d, e, f) {
    var g = e >> 2, h = d >> 2;
    l[b + 8 >> 2] = d;
    l[b + 12 >> 2] = e;
    var d = f | 0, e = q[d >> 2] - q[h + 3], f = f + 4 | 0, j = q[f >> 2] - q[h + 4], k = q[h + 6], m = q[h + 5], n = b + 20 | 0, p = (M[0] = k * e + m * j, t[0]), e = (M[0] = e * -m + k * j, t[0]) | 0;
    l[n >> 2] = 0 | p;
    l[n + 4 >> 2] = e;
    d = q[d >> 2] - q[g + 3];
    n = q[f >> 2] - q[g + 4];
    p = q[g + 6];
    j = q[g + 5];
    f = b + 28 | 0;
    e = (M[0] = p * d + j * n, t[0]);
    d = (M[0] = d * -j + p * n, t[0]) | 0;
    l[f >> 2] = 0 | e;
    l[f + 4 >> 2] = d;
    q[b + 36 >> 2] = q[g + 14] - q[h + 14]
}
function FJ(b) {
    return q[b + 60 >> 2]
}
function GJ(b) {
    return q[b + 56 >> 2]
}
function HJ(b, d) {
    var e = b + 36 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function IJ(b, d) {
    var e = b + 44 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function JJ(b) {
    return q[b + 60 >> 2]
}
function KJ(b) {
    return q[b + 56 >> 2]
}
function LJ(b) {
    return q[b + 52 >> 2]
}
function MJ(b, d) {
    q[b + 60 >> 2] = d
}
function NJ(b, d) {
    var e = b + 28 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function OJ(b, d) {
    var e = b + 20 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function PJ(b, d) {
    q[b + 56 >> 2] = d
}
function QJ(b, d) {
    q[b + 52 >> 2] = d
}
function RJ(b) {
    return l[b + 8 >> 2]
}
function SJ(b, d) {
    l[b + 4 >> 2] = d
}
function TJ(b, d) {
    l[b + 8 >> 2] = d
}
function UJ(b, d) {
    l[b + 12 >> 2] = d
}
function VJ(b) {
    return l[b + 12 >> 2]
}
function WJ(b, d) {
    l[b >> 2] = d
}
function XJ(b) {
    return 0 != (c[b + 16 | 0] & 1) << 24 >> 24
}
function YJ(b) {
    return l[b >> 2]
}
function ZJ(b, d) {
    c[b + 16 | 0] = d & 1
}
function $J(b) {
    return l[b + 4 >> 2]
}
function aK(b, d) {
    var e = l[d + 4 >> 2];
    l[b >> 2] = l[d >> 2];
    l[b + 4 >> 2] = e
}
function bK(b, d) {
    var e = b + 8 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function cK(b) {
    q[b >> 2] = 0;
    q[b + 4 >> 2] = 0;
    q[b + 8 >> 2] = 0;
    q[b + 12 >> 2] = 1
}
function dK(b) {
    0 != (b | 0) && Ls(b)
}
function eK(b) {
    0 != (b | 0) && Ls(b)
}
function fK(b, d) {
    var e = mm(d);
    q[b >> 2] = e;
    e = nm(d);
    q[b + 4 >> 2] = e
}
function gK(b) {
    return hK(q[b >> 2], q[b + 4 >> 2])
}
function iK(b) {
    0 == c[jK] << 24 >> 24 && ou(jK);
    var d = q[b + 4 >> 2], b = (M[0] = -q[b >> 2], t[0]), d = (M[0] = d, t[0]) | 0, e = kK;
    l[e >> 2] = 0 | b;
    l[e + 4 >> 2] = d;
    return kK
}
function lK(b) {
    0 == c[mK] << 24 >> 24 && ou(mK);
    var d = q[b >> 2], b = (M[0] = q[b + 4 >> 2], t[0]), d = (M[0] = d, t[0]) | 0, e = nK;
    l[e >> 2] = 0 | b;
    l[e + 4 >> 2] = d;
    return nK
}
function oK() {
    return Wq(8)
}
function pK(b) {
    var d = Wq(8), e = mm(b);
    q[d >> 2] = e;
    b = nm(b);
    q[d + 4 >> 2] = b;
    return d
}
function qK(b) {
    0 != (b | 0) && Ls(b)
}
function rK() {
    var b, d, e = Wq(64);
    d = e >> 2;
    l[d] = 0;
    l[d + 1] = 0;
    l[d + 2] = 0;
    l[d + 3] = 0;
    c[e + 16] = 0;
    l[d] = 7;
    b = (e + 20 | 0) >> 2;
    l[b] = 0;
    l[b + 1] = 0;
    l[b + 2] = 0;
    l[b + 3] = 0;
    q[(e + 36 | 0) >> 2] = 1;
    q[d + 10] = 0;
    c[e + 44 | 0] = 0;
    q[d + 12] = 0;
    q[d + 13] = 0;
    q[d + 14] = 2;
    q[d + 15] = .699999988079071;
    return e
}
function sK(b) {
    0 != (b | 0) && Ls(b)
}
function tK() {
    var b, d, e = Wq(64);
    d = e >> 2;
    l[d] = 0;
    l[d + 1] = 0;
    l[d + 2] = 0;
    l[d + 3] = 0;
    c[e + 16] = 0;
    l[d] = 1;
    var f = e + 20 | 0;
    b = f >> 2;
    q[d + 11] = 0;
    q[d + 12] = 0;
    q[d + 15] = 0;
    q[d + 14] = 0;
    c[e + 52 | 0] = 0;
    l[b] = 0;
    l[b + 1] = 0;
    l[b + 2] = 0;
    l[b + 3] = 0;
    l[b + 4] = 0;
    c[f + 20] = 0;
    return e
}
function uK(b) {
    0 != (b | 0) && Ls(b)
}
function vK() {
    var b, d = Wq(64);
    b = d >> 2;
    l[b] = 0;
    l[b + 1] = 0;
    l[b + 2] = 0;
    l[b + 3] = 0;
    l[b] = 4;
    q[b + 5] = -1;
    q[b + 6] = 1;
    q[b + 7] = 1;
    q[b + 8] = 1;
    q[b + 9] = -1;
    q[b + 10] = 0;
    q[b + 11] = 1;
    q[b + 12] = 0;
    q[b + 13] = 0;
    q[b + 14] = 0;
    q[b + 15] = 1;
    c[d + 16 | 0] = 1;
    return d
}
function wK(b) {
    0 != (b | 0) && Ls(b)
}
function xK() {
    var b, d = Wq(20);
    b = d >> 2;
    l[b] = 0;
    l[b + 1] = 0;
    l[b + 2] = 0;
    l[b + 3] = 0;
    c[d + 16] = 0;
    return d
}
function yK(b) {
    0 != (b | 0) && Ls(b)
}
function zK(b, d, e) {
    var f = l[d + 4 >> 2];
    l[b >> 2] = l[d >> 2];
    l[b + 4 >> 2] = f;
    d = mm(e);
    q[b + 8 >> 2] = d;
    e = nm(e);
    q[b + 12 >> 2] = e
}
function AK() {
    return Wq(16)
}
function BK(b, d) {
    var e = Wq(16), f = l[b + 4 >> 2];
    l[e >> 2] = l[b >> 2];
    l[e + 4 >> 2] = f;
    var f = e + 8 | 0, g = l[d + 4 >> 2];
    l[f >> 2] = l[d >> 2];
    l[f + 4 >> 2] = g;
    return e
}
function CK(b, d) {
    q[b + 8 >> 2] = d
}
function DK(b, d, e, f) {
    q[b >> 2] = d;
    q[b + 4 >> 2] = e;
    q[b + 8 >> 2] = f
}
function EK(b) {
    return q[b + 8 >> 2]
}
function FK(b, d) {
    var e = b + 20 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function GK(b) {
    return q[b + 40 >> 2]
}
function HK(b, d) {
    var e = b + 28 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function IK(b, d) {
    q[b + 44 >> 2] = d
}
function JK(b, d) {
    q[b + 36 >> 2] = d
}
function KK(b) {
    return q[b + 36 >> 2]
}
function LK(b) {
    return q[b + 44 >> 2]
}
function MK(b, d) {
    q[b + 40 >> 2] = d
}
function NK(b, d, e, f) {
    var g = e >> 2, h = d >> 2;
    l[b + 8 >> 2] = d;
    l[b + 12 >> 2] = e;
    var d = f | 0, e = q[d >> 2] - q[h + 3], f = f + 4 | 0, j = q[f >> 2] - q[h + 4], k = q[h + 6], m = q[h + 5], n = b + 20 | 0, p = (M[0] = k * e + m * j, t[0]), e = (M[0] = e * -m + k * j, t[0]) | 0;
    l[n >> 2] = 0 | p;
    l[n + 4 >> 2] = e;
    d = q[d >> 2] - q[g + 3];
    n = q[f >> 2] - q[g + 4];
    p = q[g + 6];
    j = q[g + 5];
    f = b + 28 | 0;
    e = (M[0] = p * d + j * n, t[0]);
    d = (M[0] = d * -j + p * n, t[0]) | 0;
    l[f >> 2] = 0 | e;
    l[f + 4 >> 2] = d;
    q[b + 36 >> 2] = q[g + 14] - q[h + 14]
}
function OK(b) {
    return q[b + 32 >> 2]
}
function PK(b, d) {
    q[b + 36 >> 2] = d
}
function QK(b) {
    return q[b + 28 >> 2]
}
function RK(b, d) {
    var e = b + 20 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function SK(b, d) {
    q[b + 28 >> 2] = d
}
function TK(b, d) {
    q[b + 32 >> 2] = d
}
function UK(b) {
    return q[b + 36 >> 2]
}
function VK(b, d) {
    var e = b + 20 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function WK(b) {
    return q[b + 36 >> 2]
}
function XK(b) {
    return q[b + 40 >> 2]
}
function YK(b, d) {
    var e = b + 28 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function ZK(b, d) {
    q[b + 44 >> 2] = d
}
function $K(b) {
    return q[b + 44 >> 2]
}
function aL(b, d) {
    q[b + 36 >> 2] = d
}
function bL(b, d) {
    q[b + 40 >> 2] = d
}
function cL(b, d) {
    l[b + 20 >> 2] = d
}
function dL(b, d) {
    l[b + 24 >> 2] = d
}
function eL(b, d) {
    q[b + 28 >> 2] = d
}
function fL(b) {
    return l[b + 20 >> 2]
}
function gL(b) {
    return l[b + 24 >> 2]
}
function hL(b) {
    return q[b + 28 >> 2]
}
function iL(b, d) {
    l[b + 4 >> 2] = d
}
function jL(b) {
    return l[b + 8 >> 2]
}
function kL(b) {
    return l[b >> 2]
}
function lL(b, d) {
    l[b + 8 >> 2] = d
}
function mL(b) {
    return l[b + 12 >> 2]
}
function nL(b, d) {
    l[b >> 2] = d
}
function oL(b, d) {
    l[b + 12 >> 2] = d
}
function pL(b) {
    return l[b + 4 >> 2]
}
function qL(b, d) {
    var e = b + 20 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function rL(b) {
    return q[b + 36 >> 2]
}
function sL(b, d) {
    var e = b + 28 | 0, f = l[d + 4 >> 2];
    l[e >> 2] = l[d >> 2];
    l[e + 4 >> 2] = f
}
function tL(b, d) {
    q[b + 36 >> 2] = d
}
function uL(b) {
    0 != (b | 0) && Ls(b)
}
function vL() {
    return Wq(12)
}
function wL(b, d, e) {
    var f, g = Wq(12);
    f = g >> 2;
    q[f] = b;
    q[f + 1] = d;
    q[f + 2] = e;
    return g
}
function xL(b) {
    0 != (b | 0) && Ls(b)
}
function yL() {
    var b, d = Wq(48);
    b = d >> 2;
    l[b] = 0;
    l[b + 1] = 0;
    l[b + 2] = 0;
    l[b + 3] = 0;
    c[d + 16] = 0;
    l[b] = 8;
    b = (d + 20 | 0) >> 2;
    l[b] = 0;
    l[b + 1] = 0;
    l[b + 2] = 0;
    l[b + 3] = 0;
    l[b + 4] = 0;
    l[b + 5] = 0;
    l[b + 6] = 0;
    return d
}
function zL(b) {
    0 != (b | 0) && Ls(b)
}
function AL() {
    var b, d = Wq(40);
    b = d >> 2;
    l[b] = 0;
    l[b + 1] = 0;
    l[b + 2] = 0;
    l[b + 3] = 0;
    c[d + 16] = 0;
    l[b] = 5;
    q[b + 5] = 0;
    q[b + 6] = 0;
    q[b + 7] = 0;
    q[b + 8] = 5;
    q[b + 9] = .699999988079071;
    return d
}
function BL(b) {
    0 != (b | 0) && Ls(b)
}
function CL() {
    var b, d, e = Wq(48);
    d = e >> 2;
    l[d] = 0;
    l[d + 1] = 0;
    l[d + 2] = 0;
    l[d + 3] = 0;
    c[e + 16] = 0;
    l[d] = 3;
    b = (e + 20 | 0) >> 2;
    l[b] = 0;
    l[b + 1] = 0;
    l[b + 2] = 0;
    l[b + 3] = 0;
    q[(e + 36 | 0) >> 2] = 1;
    q[d + 10] = 0;
    q[d + 11] = 0;
    return e
}
function DL(b, d, e, f, g) {
    l[b + 8 >> 2] = d;
    l[b + 12 >> 2] = e;
    var h = f | 0, j = q[h >> 2] - q[d + 12 >> 2], f = f + 4 | 0, k = q[f >> 2] - q[d + 16 >> 2], m = q[d + 24 >> 2], n = q[d + 20 >> 2], d = b + 20 | 0, p = (M[0] = m * j + n * k, t[0]), j = (M[0] = j * -n + m * k, t[0]) | 0;
    l[d >> 2] = 0 | p;
    l[d + 4 >> 2] = j;
    j = g | 0;
    k = q[j >> 2] - q[e + 12 >> 2];
    g = g + 4 | 0;
    m = q[g >> 2] - q[e + 16 >> 2];
    d = q[e + 24 >> 2];
    n = q[e + 20 >> 2];
    e = b + 28 | 0;
    p = (M[0] = d * k + n * m, t[0]);
    k = (M[0] = k * -n + d * m, t[0]) | 0;
    l[e >> 2] = 0 | p;
    l[e + 4 >> 2] = k;
    h = q[j >> 2] - q[h >> 2];
    f = q[g >> 2] - q[f >> 2];
    h = Fh(h * h + f * f);
    q[b + 36 >> 2] = h
}
function EL(b) {
    0 != (b | 0) && Ls(b)
}
function FL() {
    var b, d = Wq(32);
    b = d >> 2;
    l[b] = 0;
    l[b + 1] = 0;
    l[b + 2] = 0;
    l[b + 3] = 0;
    c[d + 16] = 0;
    l[b] = 6;
    l[b + 5] = 0;
    l[b + 6] = 0;
    q[b + 7] = 1;
    return d
}
function GL(b) {
    0 != (b | 0) && Ls(b)
}
function HL() {
    return Wq(16)
}
function IL(b) {
    0 != (b | 0) && Ls(b)
}
function JL() {
    var b, d = Wq(40);
    b = d >> 2;
    l[b] = 0;
    l[b + 1] = 0;
    l[b + 2] = 0;
    l[b + 3] = 0;
    c[d + 16] = 0;
    l[b] = 10;
    q[b + 5] = -1;
    q[b + 6] = 0;
    q[b + 7] = 1;
    q[b + 8] = 0;
    q[b + 9] = 0;
    return d
}
function Ne(b) {
    var d, e, f, g, h, j, k, m, n, p, u, r, w, x, y, A, C, z, D, E = 245 > b >>> 0;
    a:do {
        if (E) {
            var G = 11 > b >>> 0 ? 16 : b + 11 & -8, H = G >>> 3, F = o[Y >> 2], I = F >>> (H >>> 0);
            if (0 != (I & 3 | 0)) {
                var J = (I & 1 ^ 1) + H | 0, L = J << 1, O = (L << 2) + Y + 40 | 0, R = (L + 2 << 2) + Y + 40 | 0, T = o[R >> 2], S = T + 8 | 0, U = o[S >> 2];
                (O | 0) == (U | 0) ? l[Y >> 2] = F & (1 << J ^ -1) : (U >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!")), l[R >> 2] = U, l[U + 12 >> 2] = O);
                var W = J << 3;
                l[T + 4 >> 2] = W | 3;
                var Q = T + (W | 4) | 0;
                l[Q >> 2] |= 1;
                var $ = S;
                D = 331
            } else {
                if (G >>> 0 > o[Y + 8 >> 2] >>> 0) {
                    if (0 != (I | 0)) {
                        var ea = 2 << H, sa = I << H & (ea | -ea), Ba = (sa & -sa) - 1 | 0, oa = Ba >>> 12 & 16, ga = Ba >>> (oa >>> 0), qa = ga >>> 5 & 8, la = ga >>> (qa >>> 0), Ca = la >>> 2 & 4, ia = la >>> (Ca >>> 0), ya = ia >>> 1 & 2, ta = ia >>> (ya >>> 0), Ia = ta >>> 1 & 1, na = (qa | oa | Ca | ya | Ia) + (ta >>> (Ia >>> 0)) | 0, Z = na << 1, ba = (Z << 2) + Y + 40 | 0, ca = (Z + 2 << 2) + Y + 40 | 0, ma = o[ca >> 2], ka = ma + 8 | 0, aa = o[ka >> 2];
                        (ba | 0) == (aa | 0) ? l[Y >> 2] = F & (1 << na ^ -1) : (aa >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!")), l[ca >> 2] = aa, l[aa + 12 >> 2] = ba);
                        var ra = na << 3, ha = ra - G | 0;
                        l[ma + 4 >> 2] = G | 3;
                        var za = ma, X = za + G | 0;
                        l[za + (G | 4) >> 2] = ha | 1;
                        l[za + ra >> 2] = ha;
                        var ua = o[Y + 8 >> 2];
                        if (0 != (ua | 0)) {
                            var da = l[Y + 20 >> 2], fa = ua >>> 2 & 1073741822, Aa = (fa << 2) + Y + 40 | 0, Qa = o[Y >> 2], pa = 1 << (ua >>> 3);
                            if (0 == (Qa & pa | 0)) {
                                l[Y >> 2] = Qa | pa;
                                var cb = Aa, Ra = (fa + 2 << 2) + Y + 40 | 0
                            } else {
                                var Ta = (fa + 2 << 2) + Y + 40 | 0, $a = o[Ta >> 2];
                                $a >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                cb = $a;
                                Ra = Ta
                            }
                            l[Ra >> 2] = da;
                            l[cb + 12 >> 2] = da;
                            l[(da + 8 | 0) >> 2] = cb;
                            l[(da + 12 | 0) >> 2] = Aa
                        }
                        l[Y + 8 >> 2] = ha;
                        l[Y + 20 >> 2] = X;
                        $ = ka;
                        D = 331
                    } else {
                        var va = l[Y + 4 >> 2];
                        if (0 == (va | 0)) {
                            mb = G, z = mb >> 2, D = 155
                        } else {
                            var Wa = (va & -va) - 1 | 0, fb = Wa >>> 12 & 16, gb = Wa >>> (fb >>> 0), Xa = gb >>> 5 & 8, Ua = gb >>> (Xa >>> 0), Va = Ua >>> 2 & 4, pb = Ua >>> (Va >>> 0), nb = pb >>> 1 & 2, La = pb >>> (nb >>> 0), qb = La >>> 1 & 1, bb = o[Y + ((Xa | fb | Va | nb | qb) + (La >>> (qb >>> 0)) << 2) + 304 >> 2], Fa = bb, Ma = bb;
                            C = Ma >> 2;
                            for (var wa = (l[bb + 4 >> 2] & -8) - G | 0; ;) {
                                var hb = l[Fa + 16 >> 2];
                                if (0 == (hb | 0)) {
                                    var Ya = l[Fa + 20 >> 2];
                                    if (0 == (Ya | 0)) {
                                        break
                                    }
                                    var Za = Ya
                                } else {
                                    Za = hb
                                }
                                var Da = (l[Za + 4 >> 2] & -8) - G | 0, Oa = Da >>> 0 < wa >>> 0, ib = Oa ? Da : wa, ab = Oa ? Za : Ma, Fa = Za, Ma = ab;
                                C = Ma >> 2;
                                wa = ib
                            }
                            var Ga = Ma, jb = o[Y + 16 >> 2], Ea = Ga >>> 0 < jb >>> 0;
                            do {
                                if (!Ea) {
                                    var Pa = Ga + G | 0, Ja = Pa;
                                    if (Ga >>> 0 < Pa >>> 0) {
                                        var db = o[C + 6], xa = o[C + 3], Sa = (xa | 0) == (Ma | 0);
                                        do {
                                            if (Sa) {
                                                var Ka = Ma + 20 | 0, tb = l[Ka >> 2];
                                                if (0 == (tb | 0)) {
                                                    var kb = Ma + 16 | 0, ub = l[kb >> 2];
                                                    if (0 == (ub | 0)) {
                                                        var rb = 0;
                                                        A = rb >> 2;
                                                        break
                                                    }
                                                    var Bb = kb, lb = ub
                                                } else {
                                                    Bb = Ka, lb = tb, D = 39
                                                }
                                                for (; ;) {
                                                    var yb = lb + 20 | 0, xb = l[yb >> 2];
                                                    if (0 != (xb | 0)) {
                                                        Bb = yb, lb = xb
                                                    } else {
                                                        var Ib = lb + 16 | 0, wb = o[Ib >> 2];
                                                        if (0 == (wb | 0)) {
                                                            break
                                                        }
                                                        Bb = Ib;
                                                        lb = wb
                                                    }
                                                }
                                                Bb >>> 0 < jb >>> 0 && (KL(), ja("Reached an unreachable!"));
                                                l[Bb >> 2] = 0;
                                                rb = lb
                                            } else {
                                                var vb = o[C + 2];
                                                vb >>> 0 < jb >>> 0 && (KL(), ja("Reached an unreachable!"));
                                                l[vb + 12 >> 2] = xa;
                                                l[xa + 8 >> 2] = vb;
                                                rb = xa
                                            }
                                            A = rb >> 2
                                        } while (0);
                                        var zb = 0 == (db | 0);
                                        b:do {
                                            if (!zb) {
                                                var Eb = Ma + 28 | 0, Cb = (l[Eb >> 2] << 2) + Y + 304 | 0, eb = (Ma | 0) == (l[Cb >> 2] | 0);
                                                do {
                                                    if (eb) {
                                                        l[Cb >> 2] = rb;
                                                        if (0 != (rb | 0)) {
                                                            break
                                                        }
                                                        l[Y + 4 >> 2] &= 1 << l[Eb >> 2] ^ -1;
                                                        break b
                                                    }
                                                    db >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                                    var sb = db + 16 | 0;
                                                    (l[sb >> 2] | 0) == (Ma | 0) ? l[sb >> 2] = rb : l[db + 20 >> 2] = rb;
                                                    if (0 == (rb | 0)) {
                                                        break b
                                                    }
                                                } while (0);
                                                rb >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                                l[A + 6] = db;
                                                var ob = o[C + 4];
                                                0 != (ob | 0) && (ob >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!")), l[A + 4] = ob, l[ob + 24 >> 2] = rb);
                                                var Db = o[C + 5];
                                                0 != (Db | 0) && (Db >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!")), l[A + 5] = Db, l[Db + 24 >> 2] = rb)
                                            }
                                        } while (0);
                                        if (16 > wa >>> 0) {
                                            var Jb = wa + G | 0;
                                            l[C + 1] = Jb | 3;
                                            var Rb = Jb + (Ga + 4) | 0;
                                            l[Rb >> 2] |= 1
                                        } else {
                                            l[C + 1] = G | 3;
                                            l[Ga + (G | 4) >> 2] = wa | 1;
                                            l[Ga + wa + G >> 2] = wa;
                                            var Nb = o[Y + 8 >> 2];
                                            if (0 != (Nb | 0)) {
                                                var Ob = o[Y + 20 >> 2], Lb = Nb >>> 2 & 1073741822, Pb = (Lb << 2) + Y + 40 | 0, Mb = o[Y >> 2], Yb = 1 << (Nb >>> 3);
                                                if (0 == (Mb & Yb | 0)) {
                                                    l[Y >> 2] = Mb | Yb;
                                                    var Zb = Pb, fc = (Lb + 2 << 2) + Y + 40 | 0
                                                } else {
                                                    var Ub = (Lb + 2 << 2) + Y + 40 | 0, jc = o[Ub >> 2];
                                                    jc >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                                    Zb = jc;
                                                    fc = Ub
                                                }
                                                l[fc >> 2] = Ob;
                                                l[Zb + 12 >> 2] = Ob;
                                                l[Ob + 8 >> 2] = Zb;
                                                l[Ob + 12 >> 2] = Pb
                                            }
                                            l[Y + 8 >> 2] = wa;
                                            l[Y + 20 >> 2] = Ja
                                        }
                                        var Qb = Ma + 8 | 0;
                                        if (0 == (Qb | 0)) {
                                            mb = G;
                                            z = mb >> 2;
                                            D = 155;
                                            break a
                                        }
                                        $ = Qb;
                                        D = 331;
                                        break a
                                    }
                                }
                            } while (0);
                            KL();
                            ja("Reached an unreachable!")
                        }
                    }
                } else {
                    var mb = G;
                    z = mb >> 2;
                    D = 155
                }
            }
        } else {
            if (4294967231 < b >>> 0) {
                mb = -1
            } else {
                var cc = b + 11 | 0, Fb = cc & -8;
                y = Fb >> 2;
                var hc = o[Y + 4 >> 2];
                if (0 != (hc | 0)) {
                    var wc = -Fb | 0, pc = cc >>> 8;
                    if (0 == (pc | 0)) {
                        var qc = 0
                    } else {
                        if (16777215 < Fb >>> 0) {
                            qc = 31
                        } else {
                            var $c = (pc + 1048320 | 0) >>> 16 & 8, Fc = pc << $c, sc = (Fc + 520192 | 0) >>> 16 & 4, kd = Fc << sc, wd = (kd + 245760 | 0) >>> 16 & 2, Mc = 14 - (sc | $c | wd) + (kd << wd >>> 15) | 0, qc = Fb >>> ((Mc + 7 | 0) >>> 0) & 1 | Mc << 1
                        }
                    }
                    var $b = o[Y + (qc << 2) + 304 >> 2], ac = 0 == ($b | 0);
                    b:do {
                        if (ac) {
                            var oc = 0, tc = wc, Oc = 0
                        } else {
                            var ld = 31 == (qc | 0) ? 0 : 25 - (qc >>> 1) | 0, Wc = 0, ad = wc, Xc = $b;
                            x = Xc >> 2;
                            for (var Cc = Fb << ld, fd = 0; ;) {
                                var md = l[x + 1] & -8, nd = md - Fb | 0;
                                if (nd >>> 0 < ad >>> 0) {
                                    if ((md | 0) == (Fb | 0)) {
                                        oc = Xc;
                                        tc = nd;
                                        Oc = Xc;
                                        break b
                                    }
                                    var Pc = Xc, gd = nd
                                } else {
                                    Pc = Wc, gd = ad
                                }
                                var od = o[x + 5], pd = o[((Cc >>> 31 << 2) + 16 >> 2) + x], Pd = 0 == (od | 0) | (od | 0) == (pd | 0) ? fd : od;
                                if (0 == (pd | 0)) {
                                    oc = Pc;
                                    tc = gd;
                                    Oc = Pd;
                                    break b
                                }
                                Wc = Pc;
                                ad = gd;
                                Xc = pd;
                                x = Xc >> 2;
                                Cc <<= 1;
                                fd = Pd
                            }
                        }
                    } while (0);
                    if (0 == (Oc | 0) & 0 == (oc | 0)) {
                        var Xd = 2 << qc, qd = hc & (Xd | -Xd);
                        if (0 == (qd | 0)) {
                            mb = Fb;
                            z = mb >> 2;
                            D = 155;
                            break
                        }
                        var Qd = (qd & -qd) - 1 | 0, Qc = Qd >>> 12 & 16, Jc = Qd >>> (Qc >>> 0), Kc = Jc >>> 5 & 8, gc = Jc >>> (Kc >>> 0), hd = gc >>> 2 & 4, xd = gc >>> (hd >>> 0), bd = xd >>> 1 & 2, rd = xd >>> (bd >>> 0), ye = rd >>> 1 & 1, Yd = l[Y + ((Kc | Qc | hd | bd | ye) + (rd >>> (ye >>> 0)) << 2) + 304 >> 2]
                    } else {
                        Yd = Oc
                    }
                    var Tc = 0 == (Yd | 0);
                    b:do {
                        if (Tc) {
                            var xc = tc, bc = oc;
                            w = bc >> 2
                        } else {
                            var Ed = Yd;
                            r = Ed >> 2;
                            for (var yc = tc, Ac = oc; ;) {
                                var Zd = (l[r + 1] & -8) - Fb | 0, $d = Zd >>> 0 < yc >>> 0, cd = $d ? Zd : yc, zc = $d ? Ed : Ac, kc = o[r + 4];
                                if (0 != (kc | 0)) {
                                    Ed = kc
                                } else {
                                    var Rd = o[r + 5];
                                    if (0 == (Rd | 0)) {
                                        xc = cd;
                                        bc = zc;
                                        w = bc >> 2;
                                        break b
                                    }
                                    Ed = Rd
                                }
                                r = Ed >> 2;
                                yc = cd;
                                Ac = zc
                            }
                        }
                    } while (0);
                    if (0 != (bc | 0) && xc >>> 0 < (l[Y + 8 >> 2] - Fb | 0) >>> 0) {
                        var Gc = bc;
                        u = Gc >> 2;
                        var Rc = o[Y + 16 >> 2], Nc = Gc >>> 0 < Rc >>> 0;
                        do {
                            if (!Nc) {
                                var ne = Gc + Fb | 0, Sd = ne;
                                if (Gc >>> 0 < ne >>> 0) {
                                    var Td = o[w + 6], Ud = o[w + 3], xf = (Ud | 0) == (bc | 0);
                                    do {
                                        if (xf) {
                                            var Fd = bc + 20 | 0, oe = l[Fd >> 2];
                                            if (0 == (oe | 0)) {
                                                var He = bc + 16 | 0, ae = l[He >> 2];
                                                if (0 == (ae | 0)) {
                                                    var Hc = 0;
                                                    p = Hc >> 2;
                                                    break
                                                }
                                                var dd = He, be = ae
                                            } else {
                                                dd = Fd, be = oe, D = 103
                                            }
                                            for (; ;) {
                                                var pe = be + 20 | 0, Uc = l[pe >> 2];
                                                if (0 != (Uc | 0)) {
                                                    dd = pe, be = Uc
                                                } else {
                                                    var lc = be + 16 | 0, Gd = o[lc >> 2];
                                                    if (0 == (Gd | 0)) {
                                                        break
                                                    }
                                                    dd = lc;
                                                    be = Gd
                                                }
                                            }
                                            dd >>> 0 < Rc >>> 0 && (KL(), ja("Reached an unreachable!"));
                                            l[dd >> 2] = 0;
                                            Hc = be
                                        } else {
                                            var Hd = o[w + 2];
                                            Hd >>> 0 < Rc >>> 0 && (KL(), ja("Reached an unreachable!"));
                                            l[Hd + 12 >> 2] = Ud;
                                            l[Ud + 8 >> 2] = Hd;
                                            Hc = Ud
                                        }
                                        p = Hc >> 2
                                    } while (0);
                                    var Re = 0 == (Td | 0);
                                    b:do {
                                        if (!Re) {
                                            var Id = bc + 28 | 0, Jd = (l[Id >> 2] << 2) + Y + 304 | 0, qe = (bc | 0) == (l[Jd >> 2] | 0);
                                            do {
                                                if (qe) {
                                                    l[Jd >> 2] = Hc;
                                                    if (0 != (Hc | 0)) {
                                                        break
                                                    }
                                                    l[Y + 4 >> 2] &= 1 << l[Id >> 2] ^ -1;
                                                    break b
                                                }
                                                Td >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                                var re = Td + 16 | 0;
                                                (l[re >> 2] | 0) == (bc | 0) ? l[re >> 2] = Hc : l[Td + 20 >> 2] = Hc;
                                                if (0 == (Hc | 0)) {
                                                    break b
                                                }
                                            } while (0);
                                            Hc >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                            l[p + 6] = Td;
                                            var Kd = o[w + 4];
                                            0 != (Kd | 0) && (Kd >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!")), l[p + 4] = Kd, l[Kd + 24 >> 2] = Hc);
                                            var Se = o[w + 5];
                                            0 != (Se | 0) && (Se >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!")), l[p + 5] = Se, l[Se + 24 >> 2] = Hc)
                                        }
                                    } while (0);
                                    var Rf = 16 > xc >>> 0;
                                    b:do {
                                        if (Rf) {
                                            var sd = xc + Fb | 0;
                                            l[w + 1] = sd | 3;
                                            var Vc = sd + (Gc + 4) | 0;
                                            l[Vc >> 2] |= 1
                                        } else {
                                            if (l[w + 1] = Fb | 3, l[((Fb | 4) >> 2) + u] = xc | 1, l[(xc >> 2) + u + y] = xc, 256 > xc >>> 0) {
                                                var Te = xc >>> 2 & 1073741822, Ue = (Te << 2) + Y + 40 | 0, ce = o[Y >> 2], Yc = 1 << (xc >>> 3);
                                                if (0 == (ce & Yc | 0)) {
                                                    l[Y >> 2] = ce | Yc;
                                                    var yd = Ue, $e = (Te + 2 << 2) + Y + 40 | 0
                                                } else {
                                                    var ze = (Te + 2 << 2) + Y + 40 | 0, Zc = o[ze >> 2];
                                                    Zc >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                                    yd = Zc;
                                                    $e = ze
                                                }
                                                l[$e >> 2] = Sd;
                                                l[yd + 12 >> 2] = Sd;
                                                l[y + (u + 2)] = yd;
                                                l[y + (u + 3)] = Ue
                                            } else {
                                                var Ld = ne, Md = xc >>> 8;
                                                if (0 == (Md | 0)) {
                                                    var de = 0
                                                } else {
                                                    if (16777215 < xc >>> 0) {
                                                        de = 31
                                                    } else {
                                                        var zd = (Md + 1048320 | 0) >>> 16 & 8, ee = Md << zd, yf = (ee + 520192 | 0) >>> 16 & 4, af = ee << yf, Ie = (af + 245760 | 0) >>> 16 & 2, zf = 14 - (yf | zd | Ie) + (af << Ie >>> 15) | 0, de = xc >>> ((zf + 7 | 0) >>> 0) & 1 | zf << 1
                                                    }
                                                }
                                                var jf = (de << 2) + Y + 304 | 0;
                                                l[y + (u + 7)] = de;
                                                var bf = Fb + (Gc + 16) | 0;
                                                l[y + (u + 5)] = 0;
                                                l[bf >> 2] = 0;
                                                var Sf = l[Y + 4 >> 2], kf = 1 << de;
                                                if (0 == (Sf & kf | 0)) {
                                                    l[Y + 4 >> 2] = Sf | kf, l[jf >> 2] = Ld, l[y + (u + 6)] = jf, l[y + (u + 3)] = Ld, l[y + (u + 2)] = Ld
                                                } else {
                                                    for (var Ae = xc << (31 == (de | 0) ? 0 : 25 - (de >>> 1) | 0), Ad = l[jf >> 2]; ;) {
                                                        if ((l[Ad + 4 >> 2] & -8 | 0) == (xc | 0)) {
                                                            var Af = Ad + 8 | 0, Tf = o[Af >> 2], Fg = o[Y + 16 >> 2], Gg = Ad >>> 0 < Fg >>> 0;
                                                            do {
                                                                if (!Gg && Tf >>> 0 >= Fg >>> 0) {
                                                                    l[Tf + 12 >> 2] = Ld;
                                                                    l[Af >> 2] = Ld;
                                                                    l[y + (u + 2)] = Tf;
                                                                    l[y + (u + 3)] = Ad;
                                                                    l[y + (u + 6)] = 0;
                                                                    break b
                                                                }
                                                            } while (0);
                                                            KL();
                                                            ja("Reached an unreachable!")
                                                        }
                                                        var mg = (Ae >>> 31 << 2) + Ad + 16 | 0, ng = o[mg >> 2];
                                                        if (0 != (ng | 0)) {
                                                            Ae <<= 1, Ad = ng
                                                        } else {
                                                            if (mg >>> 0 >= o[Y + 16 >> 2] >>> 0) {
                                                                l[mg >> 2] = Ld;
                                                                l[y + (u + 6)] = Ad;
                                                                l[y + (u + 3)] = Ld;
                                                                l[y + (u + 2)] = Ld;
                                                                break b
                                                            }
                                                            KL();
                                                            ja("Reached an unreachable!")
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } while (0);
                                    var og = bc + 8 | 0;
                                    if (0 == (og | 0)) {
                                        mb = Fb;
                                        z = mb >> 2;
                                        D = 155;
                                        break a
                                    }
                                    $ = og;
                                    D = 331;
                                    break a
                                }
                            }
                        } while (0);
                        KL();
                        ja("Reached an unreachable!")
                    }
                }
                mb = Fb
            }
            z = mb >> 2;
            D = 155
        }
    } while (0);
    a:do {
        if (155 == D) {
            var Bf = o[Y + 8 >> 2];
            if (mb >>> 0 > Bf >>> 0) {
                var Uf = o[Y + 12 >> 2];
                if (mb >>> 0 < Uf >>> 0) {
                    var Vf = Uf - mb | 0;
                    l[Y + 12 >> 2] = Vf;
                    var Hg = o[Y + 24 >> 2], Jh = Hg;
                    l[Y + 24 >> 2] = Jh + mb | 0;
                    l[(Jh + 4 >> 2) + z] = Vf | 1;
                    l[Hg + 4 >> 2] = mb | 3;
                    $ = Hg + 8 | 0
                } else {
                    if (0 == (l[LL >> 2] | 0) && 0 == (l[LL >> 2] | 0)) {
                        var Ig = ML();
                        0 == (Ig - 1 & Ig | 0) ? (l[LL + 8 >> 2] = Ig, l[LL + 4 >> 2] = Ig, l[LL + 12 >> 2] = -1, l[LL + 16 >> 2] = 2097152, l[LL + 20 >> 2] = 0, l[Y + 440 >> 2] = 0, l[LL >> 2] = Math.floor(Date.now() / 1e3) & -16 ^ 1431655768) : (KL(), ja("Reached an unreachable!"))
                    }
                    var Fj = 0 == (l[Y + 440 >> 2] & 4 | 0);
                    b:do {
                        if (Fj) {
                            var Ji = l[Y + 24 >> 2], pg = 0 == (Ji | 0);
                            c:do {
                                if (pg) {
                                    D = 174
                                } else {
                                    for (var Kh = Ji, Wf = Y + 444 | 0; ;) {
                                        var Lh = Wf | 0, lf = o[Lh >> 2];
                                        if (lf >>> 0 <= Kh >>> 0) {
                                            var qg = Wf + 4 | 0;
                                            if ((lf + l[qg >> 2] | 0) >>> 0 > Kh >>> 0) {
                                                break
                                            }
                                        }
                                        var jh = o[Wf + 8 >> 2];
                                        if (0 == (jh | 0)) {
                                            D = 174;
                                            break c
                                        }
                                        Wf = jh
                                    }
                                    if (0 == (Wf | 0)) {
                                        D = 174
                                    } else {
                                        var Mh = l[LL + 8 >> 2], Be = mb + 47 - l[Y + 12 >> 2] + Mh & -Mh;
                                        if (2147483647 > Be >>> 0) {
                                            var rg = NL(Be), se = (rg | 0) == (l[Lh >> 2] + l[qg >> 2] | 0), Jg = se ? rg : -1, fe = se ? Be : 0, te = Be, ue = rg;
                                            D = 181
                                        } else {
                                            var ge = 0;
                                            D = 189
                                        }
                                    }
                                }
                            } while (0);
                            if (174 == D) {
                                var mf = NL(0);
                                if (-1 == (mf | 0)) {
                                    ge = 0, D = 189
                                } else {
                                    var Ki = l[LL + 8 >> 2], Kg = Ki + (mb + 47) & -Ki, sg = mf, kh = l[LL + 4 >> 2], Nh = kh - 1 | 0, tg = 0 == (Nh & sg | 0) ? Kg : Kg - sg + (Nh + sg & -kh) | 0;
                                    if (2147483647 > tg >>> 0) {
                                        var Oh = NL(tg), Ph = (Oh | 0) == (mf | 0), Lg = Ph ? tg : 0, Jg = Ph ? mf : -1, fe = Lg, te = tg, ue = Oh;
                                        D = 181
                                    } else {
                                        ge = 0, D = 189
                                    }
                                }
                            }
                            c:do {
                                if (181 == D) {
                                    var Mg = -te | 0;
                                    if (-1 != (Jg | 0)) {
                                        var Ic = fe;
                                        n = Ic >> 2;
                                        var uc = Jg;
                                        m = uc >> 2;
                                        D = 194;
                                        break b
                                    }
                                    var Li = -1 != (ue | 0) & 2147483647 > te >>> 0;
                                    do {
                                        if (Li) {
                                            if (te >>> 0 < (mb + 48 | 0) >>> 0) {
                                                var Qh = l[LL + 8 >> 2], Ng = mb + 47 - te + Qh & -Qh;
                                                if (2147483647 > Ng >>> 0) {
                                                    if (-1 == (NL(Ng) | 0)) {
                                                        NL(Mg);
                                                        ge = fe;
                                                        break c
                                                    }
                                                    Og = Ng + te | 0
                                                } else {
                                                    Og = te
                                                }
                                            } else {
                                                var Og = te
                                            }
                                        } else {
                                            Og = te
                                        }
                                    } while (0);
                                    if (-1 != (ue | 0)) {
                                        Ic = Og;
                                        n = Ic >> 2;
                                        uc = ue;
                                        m = uc >> 2;
                                        D = 194;
                                        break b
                                    }
                                    l[Y + 440 >> 2] |= 4;
                                    var Pg = fe;
                                    D = 191;
                                    break b
                                }
                            } while (0);
                            l[Y + 440 >> 2] |= 4;
                            Pg = ge
                        } else {
                            Pg = 0
                        }
                        D = 191
                    } while (0);
                    if (191 == D) {
                        var Mi = l[LL + 8 >> 2], Rh = Mi + (mb + 47) & -Mi;
                        if (2147483647 > Rh >>> 0) {
                            var Qg = NL(Rh), Sh = NL(0);
                            if (-1 != (Sh | 0) & -1 != (Qg | 0) & Qg >>> 0 < Sh >>> 0) {
                                var lh = Sh - Qg | 0, Th = lh >>> 0 > (mb + 40 | 0) >>> 0, Ni = Th ? lh : Pg, nf = Th ? Qg : -1;
                                -1 == (nf | 0) ? D = 330 : (Ic = Ni, n = Ic >> 2, uc = nf, m = uc >> 2, D = 194)
                            } else {
                                D = 330
                            }
                        } else {
                            D = 330
                        }
                    }
                    do {
                        if (194 == D) {
                            var he = l[Y + 432 >> 2] + Ic | 0;
                            l[Y + 432 >> 2] = he;
                            he >>> 0 > o[Y + 436 >> 2] >>> 0 && (l[Y + 436 >> 2] = he);
                            var Bd = o[Y + 24 >> 2];
                            k = Bd >> 2;
                            var cf = 0 == (Bd | 0);
                            b:do {
                                if (cf) {
                                    var ug = o[Y + 16 >> 2];
                                    0 == (ug | 0) | uc >>> 0 < ug >>> 0 && (l[Y + 16 >> 2] = uc);
                                    l[Y + 444 >> 2] = uc;
                                    l[Y + 448 >> 2] = Ic;
                                    l[Y + 456 >> 2] = 0;
                                    l[Y + 36 >> 2] = l[LL >> 2];
                                    l[Y + 32 >> 2] = -1;
                                    for (var Ce = 0; ;) {
                                        var Cf = Ce << 1, td = (Cf << 2) + Y + 40 | 0;
                                        l[Y + (Cf + 3 << 2) + 40 >> 2] = td;
                                        l[Y + (Cf + 2 << 2) + 40 >> 2] = td;
                                        var Rg = Ce + 1 | 0;
                                        if (32 == (Rg | 0)) {
                                            break
                                        }
                                        Ce = Rg
                                    }
                                    var Gj = uc + 8 | 0, Uh = 0 == (Gj & 7 | 0) ? 0 : -Gj & 7, Oi = Ic - 40 - Uh | 0;
                                    l[Y + 24 >> 2] = uc + Uh | 0;
                                    l[Y + 12 >> 2] = Oi;
                                    l[(Uh + 4 >> 2) + m] = Oi | 1;
                                    l[(Ic - 36 >> 2) + m] = 40;
                                    l[Y + 28 >> 2] = l[LL + 16 >> 2]
                                } else {
                                    var vg = Y + 444 | 0;
                                    for (j = vg >> 2; 0 != (vg | 0);) {
                                        var Vh = o[j], Wh = vg + 4 | 0, Xh = o[Wh >> 2];
                                        if ((uc | 0) == (Vh + Xh | 0)) {
                                            if (0 != (l[j + 3] & 8 | 0)) {
                                                break
                                            }
                                            var Yh = Bd;
                                            if (!(Yh >>> 0 >= Vh >>> 0 & Yh >>> 0 < uc >>> 0)) {
                                                break
                                            }
                                            l[Wh >> 2] = Xh + Ic | 0;
                                            var Hj = l[Y + 24 >> 2], Je = l[Y + 12 >> 2] + Ic | 0, Xf = Hj, Yf = Hj + 8 | 0, Zh = 0 == (Yf & 7 | 0) ? 0 : -Yf & 7, Sg = Je - Zh | 0;
                                            l[Y + 24 >> 2] = Xf + Zh | 0;
                                            l[Y + 12 >> 2] = Sg;
                                            l[(Zh + (Xf + 4) | 0) >> 2] = Sg | 1;
                                            l[(Je + (Xf + 4) | 0) >> 2] = 40;
                                            l[Y + 28 >> 2] = l[LL + 16 >> 2];
                                            break b
                                        }
                                        vg = l[j + 2];
                                        j = vg >> 2
                                    }
                                    uc >>> 0 < o[Y + 16 >> 2] >>> 0 && (l[Y + 16 >> 2] = uc);
                                    for (var mh = uc + Ic | 0, Df = Y + 444 | 0; ;) {
                                        if (0 == (Df | 0)) {
                                            D = 293;
                                            break
                                        }
                                        var $h = Df | 0;
                                        if ((l[$h >> 2] | 0) == (mh | 0)) {
                                            D = 218;
                                            break
                                        }
                                        Df = l[Df + 8 >> 2]
                                    }
                                    do {
                                        if (218 == D && 0 == (l[Df + 12 >> 2] & 8 | 0)) {
                                            l[$h >> 2] = uc;
                                            var Tg = Df + 4 | 0;
                                            l[Tg >> 2] = l[Tg >> 2] + Ic | 0;
                                            var ai = uc + 8 | 0, wg = 0 == (ai & 7 | 0) ? 0 : -ai & 7, Pi = Ic + (uc + 8) | 0, df = 0 == (Pi & 7 | 0) ? 0 : -Pi & 7;
                                            h = df >> 2;
                                            var nh = uc + df + Ic | 0, oh = nh, ph = wg + mb | 0;
                                            g = ph >> 2;
                                            var Zf = uc + ph | 0, Ve = Zf, of = nh - (uc + wg) - mb | 0;
                                            l[(wg + 4 >> 2) + m] = mb | 3;
                                            var Ug = (oh | 0) == (l[Y + 24 >> 2] | 0);
                                            c:do {
                                                if (Ug) {
                                                    var bi = l[Y + 12 >> 2] + of | 0;
                                                    l[Y + 12 >> 2] = bi;
                                                    l[Y + 24 >> 2] = Ve;
                                                    l[g + (m + 1)] = bi | 1
                                                } else {
                                                    if ((oh | 0) == (l[Y + 20 >> 2] | 0)) {
                                                        var Vg = l[Y + 8 >> 2] + of | 0;
                                                        l[Y + 8 >> 2] = Vg;
                                                        l[Y + 20 >> 2] = Ve;
                                                        l[g + (m + 1)] = Vg | 1;
                                                        l[(uc + Vg + ph | 0) >> 2] = Vg
                                                    } else {
                                                        var Wg = Ic + 4 | 0, We = o[(Wg >> 2) + m + h];
                                                        if (1 == (We & 3 | 0)) {
                                                            var Qi = We & -8, ef = We >>> 3, Ij = 256 > We >>> 0;
                                                            d:do {
                                                                if (Ij) {
                                                                    var $f = o[((df | 8) >> 2) + m + n], Ef = o[h + (n + (m + 3))];
                                                                    if (($f | 0) == (Ef | 0)) {
                                                                        l[Y >> 2] &= 1 << ef ^ -1
                                                                    } else {
                                                                        var qh = ((We >>> 2 & 1073741822) << 2) + Y + 40 | 0;
                                                                        D = ($f | 0) == (qh | 0) ? 233 : $f >>> 0 < o[Y + 16 >> 2] >>> 0 ? 236 : 233;
                                                                        do {
                                                                            if (233 == D && !((Ef | 0) != (qh | 0) && Ef >>> 0 < o[Y + 16 >> 2] >>> 0)) {
                                                                                l[$f + 12 >> 2] = Ef;
                                                                                l[Ef + 8 >> 2] = $f;
                                                                                break d
                                                                            }
                                                                        } while (0);
                                                                        KL();
                                                                        ja("Reached an unreachable!")
                                                                    }
                                                                } else {
                                                                    var ci = nh, ff = o[((df | 24) >> 2) + m + n], pf = o[h + (n + (m + 3))], qf = (pf | 0) == (ci | 0);
                                                                    do {
                                                                        if (qf) {
                                                                            var xg = df | 16, yg = uc + Wg + xg | 0, Ff = l[yg >> 2];
                                                                            if (0 == (Ff | 0)) {
                                                                                var Xg = uc + xg + Ic | 0, Yg = l[Xg >> 2];
                                                                                if (0 == (Yg | 0)) {
                                                                                    var ie = 0;
                                                                                    f = ie >> 2;
                                                                                    break
                                                                                }
                                                                                var Gf = Xg, Hf = Yg
                                                                            } else {
                                                                                Gf = yg, Hf = Ff, D = 243
                                                                            }
                                                                            for (; ;) {
                                                                                var rh = Hf + 20 | 0, Ri = l[rh >> 2];
                                                                                if (0 != (Ri | 0)) {
                                                                                    Gf = rh, Hf = Ri
                                                                                } else {
                                                                                    var Si = Hf + 16 | 0, Jj = o[Si >> 2];
                                                                                    if (0 == (Jj | 0)) {
                                                                                        break
                                                                                    }
                                                                                    Gf = Si;
                                                                                    Hf = Jj
                                                                                }
                                                                            }
                                                                            Gf >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                                                            l[Gf >> 2] = 0;
                                                                            ie = Hf
                                                                        } else {
                                                                            var di = o[((df | 8) >> 2) + m + n];
                                                                            di >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                                                            l[di + 12 >> 2] = pf;
                                                                            l[pf + 8 >> 2] = di;
                                                                            ie = pf
                                                                        }
                                                                        f = ie >> 2
                                                                    } while (0);
                                                                    if (0 != (ff | 0)) {
                                                                        var ei = df + (Ic + (uc + 28)) | 0, Qk = (l[ei >> 2] << 2) + Y + 304 | 0, zn = (ci | 0) == (l[Qk >> 2] | 0);
                                                                        do {
                                                                            if (zn) {
                                                                                l[Qk >> 2] = ie;
                                                                                if (0 != (ie | 0)) {
                                                                                    break
                                                                                }
                                                                                l[Y + 4 >> 2] &= 1 << l[ei >> 2] ^ -1;
                                                                                break d
                                                                            }
                                                                            ff >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                                                            var Kj = ff + 16 | 0;
                                                                            (l[Kj >> 2] | 0) == (ci | 0) ? l[Kj >> 2] = ie : l[ff + 20 >> 2] = ie;
                                                                            if (0 == (ie | 0)) {
                                                                                break d
                                                                            }
                                                                        } while (0);
                                                                        ie >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                                                        l[f + 6] = ff;
                                                                        var Lj = df | 16, Ti = o[(Lj >> 2) + m + n];
                                                                        0 != (Ti | 0) && (Ti >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!")), l[f + 4] = Ti, l[Ti + 24 >> 2] = ie);
                                                                        var Ui = o[(Wg + Lj >> 2) + m];
                                                                        0 != (Ui | 0) && (Ui >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!")), l[f + 5] = Ui, l[Ui + 24 >> 2] = ie)
                                                                    }
                                                                }
                                                            } while (0);
                                                            var Rk = uc + (Qi | df) + Ic | 0, Ke = Qi + of | 0
                                                        } else {
                                                            Rk = oh, Ke = of
                                                        }
                                                        var Mj = Rk + 4 | 0;
                                                        l[Mj >> 2] &= -2;
                                                        l[g + (m + 1)] = Ke | 1;
                                                        l[(Ke >> 2) + m + g] = Ke;
                                                        if (256 > Ke >>> 0) {
                                                            var fi = Ke >>> 2 & 1073741822, Sk = (fi << 2) + Y + 40 | 0, Vi = o[Y >> 2], Tk = 1 << (Ke >>> 3);
                                                            if (0 == (Vi & Tk | 0)) {
                                                                l[Y >> 2] = Vi | Tk;
                                                                var Wi = Sk, Nj = (fi + 2 << 2) + Y + 40 | 0
                                                            } else {
                                                                var Oj = (fi + 2 << 2) + Y + 40 | 0, Pj = o[Oj >> 2];
                                                                Pj >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                                                Wi = Pj;
                                                                Nj = Oj
                                                            }
                                                            l[Nj >> 2] = Ve;
                                                            l[Wi + 12 >> 2] = Ve;
                                                            l[g + (m + 2)] = Wi;
                                                            l[g + (m + 3)] = Sk
                                                        } else {
                                                            var ag = Zf, gi = Ke >>> 8;
                                                            if (0 == (gi | 0)) {
                                                                var If = 0
                                                            } else {
                                                                if (16777215 < Ke >>> 0) {
                                                                    If = 31
                                                                } else {
                                                                    var Xi = (gi + 1048320 | 0) >>> 16 & 8, Uk = gi << Xi, Qj = (Uk + 520192 | 0) >>> 16 & 4, Vk = Uk << Qj, Wk = (Vk + 245760 | 0) >>> 16 & 2, Yi = 14 - (Qj | Xi | Wk) + (Vk << Wk >>> 15) | 0, If = Ke >>> ((Yi + 7 | 0) >>> 0) & 1 | Yi << 1
                                                                }
                                                            }
                                                            var hi = (If << 2) + Y + 304 | 0;
                                                            l[g + (m + 7)] = If;
                                                            l[g + (m + 5)] = 0;
                                                            l[g + (m + 4)] = 0;
                                                            var Rj = l[Y + 4 >> 2], Sj = 1 << If;
                                                            if (0 == (Rj & Sj | 0)) {
                                                                l[Y + 4 >> 2] = Rj | Sj, l[hi >> 2] = ag, l[g + (m + 6)] = hi, l[g + (m + 3)] = ag, l[g + (m + 2)] = ag
                                                            } else {
                                                                for (var Tj = Ke << (31 == (If | 0) ? 0 : 25 - (If >>> 1) | 0), Zg = l[hi >> 2]; ;) {
                                                                    if ((l[Zg + 4 >> 2] & -8 | 0) == (Ke | 0)) {
                                                                        var Xk = Zg + 8 | 0, Zi = o[Xk >> 2], Yk = o[Y + 16 >> 2], Zk = Zg >>> 0 < Yk >>> 0;
                                                                        do {
                                                                            if (!Zk && Zi >>> 0 >= Yk >>> 0) {
                                                                                l[Zi + 12 >> 2] = ag;
                                                                                l[Xk >> 2] = ag;
                                                                                l[g + (m + 2)] = Zi;
                                                                                l[g + (m + 3)] = Zg;
                                                                                l[g + (m + 6)] = 0;
                                                                                break c
                                                                            }
                                                                        } while (0);
                                                                        KL();
                                                                        ja("Reached an unreachable!")
                                                                    }
                                                                    var $i = (Tj >>> 31 << 2) + Zg + 16 | 0, Uj = o[$i >> 2];
                                                                    if (0 != (Uj | 0)) {
                                                                        Tj <<= 1, Zg = Uj
                                                                    } else {
                                                                        if ($i >>> 0 >= o[Y + 16 >> 2] >>> 0) {
                                                                            l[$i >> 2] = ag;
                                                                            l[g + (m + 6)] = Zg;
                                                                            l[g + (m + 3)] = ag;
                                                                            l[g + (m + 2)] = ag;
                                                                            break c
                                                                        }
                                                                        KL();
                                                                        ja("Reached an unreachable!")
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            } while (0);
                                            $ = uc + (wg | 8) | 0;
                                            break a
                                        }
                                    } while (0);
                                    var ii = Bd, $k = Y + 444 | 0;
                                    for (e = $k >> 2; ;) {
                                        var aj = o[e];
                                        if (aj >>> 0 <= ii >>> 0) {
                                            var al = o[e + 1];
                                            if ((aj + al | 0) >>> 0 > ii >>> 0) {
                                                var bj = aj, ji = al;
                                                break
                                            }
                                        }
                                        var bl = o[e + 2];
                                        if (0 != (bl | 0)) {
                                            $k = bl, e = $k >> 2
                                        } else {
                                            bj = 0;
                                            ji = 4;
                                            break
                                        }
                                    }
                                    var cj = bj + ji | 0, Vj = bj + (ji - 39) | 0, Wj = bj + (ji - 47) + (0 == (Vj & 7 | 0) ? 0 : -Vj & 7) | 0, ki = Wj >>> 0 < (Bd + 16 | 0) >>> 0 ? ii : Wj, pm = ki + 8 | 0;
                                    d = pm >> 2;
                                    var qm = pm, cl = uc + 8 | 0, bg = 0 == (cl & 7 | 0) ? 0 : -cl & 7, li = Ic - 40 - bg | 0;
                                    l[Y + 24 >> 2] = uc + bg | 0;
                                    l[Y + 12 >> 2] = li;
                                    l[(bg + 4 >> 2) + m] = li | 1;
                                    l[(Ic - 36 >> 2) + m] = 40;
                                    l[Y + 28 >> 2] = l[LL + 16 >> 2];
                                    l[ki + 4 >> 2] = 27;
                                    l[d] = l[Y + 444 >> 2];
                                    l[d + 1] = l[Y + 448 >> 2];
                                    l[d + 2] = l[Y + 452 >> 2];
                                    l[d + 3] = l[Y + 456 >> 2];
                                    l[Y + 444 >> 2] = uc;
                                    l[Y + 448 >> 2] = Ic;
                                    l[Y + 456 >> 2] = 0;
                                    l[Y + 452 >> 2] = qm;
                                    var dl = ki + 28 | 0;
                                    l[dl >> 2] = 7;
                                    var rm = (ki + 32 | 0) >>> 0 < cj >>> 0;
                                    c:do {
                                        if (rm) {
                                            for (var dj = dl; ;) {
                                                var Xj = dj + 4 | 0;
                                                l[Xj >> 2] = 7;
                                                if ((dj + 8 | 0) >>> 0 >= cj >>> 0) {
                                                    break c
                                                }
                                                dj = Xj
                                            }
                                        }
                                    } while (0);
                                    if ((ki | 0) != (ii | 0)) {
                                        var Le = ki - Bd | 0, el = ii + Le | 0, Yj = Le + (ii + 4) | 0;
                                        l[Yj >> 2] &= -2;
                                        l[k + 1] = Le | 1;
                                        l[el >> 2] = Le;
                                        if (256 > Le >>> 0) {
                                            var fl = Le >>> 2 & 1073741822, Zj = (fl << 2) + Y + 40 | 0, Jf = o[Y >> 2], gl = 1 << (Le >>> 3);
                                            if (0 == (Jf & gl | 0)) {
                                                l[Y >> 2] = Jf | gl;
                                                var ej = Zj, $j = (fl + 2 << 2) + Y + 40 | 0
                                            } else {
                                                var hl = (fl + 2 << 2) + Y + 40 | 0, sm = o[hl >> 2];
                                                sm >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                                ej = sm;
                                                $j = hl
                                            }
                                            l[$j >> 2] = Bd;
                                            l[ej + 12 >> 2] = Bd;
                                            l[k + 2] = ej;
                                            l[k + 3] = Zj
                                        } else {
                                            var fj = Bd, il = Le >>> 8;
                                            if (0 == (il | 0)) {
                                                var $g = 0
                                            } else {
                                                if (16777215 < Le >>> 0) {
                                                    $g = 31
                                                } else {
                                                    var jl = (il + 1048320 | 0) >>> 16 & 8, kl = il << jl, ak = (kl + 520192 | 0) >>> 16 & 4, bk = kl << ak, ll = (bk + 245760 | 0) >>> 16 & 2, ml = 14 - (ak | jl | ll) + (bk << ll >>> 15) | 0, $g = Le >>> ((ml + 7 | 0) >>> 0) & 1 | ml << 1
                                                }
                                            }
                                            var nl = ($g << 2) + Y + 304 | 0;
                                            l[k + 7] = $g;
                                            l[k + 5] = 0;
                                            l[k + 4] = 0;
                                            var sh = l[Y + 4 >> 2], ol = 1 << $g;
                                            if (0 == (sh & ol | 0)) {
                                                l[Y + 4 >> 2] = sh | ol, l[nl >> 2] = fj, l[k + 6] = nl, l[k + 3] = Bd, l[k + 2] = Bd
                                            } else {
                                                for (var mi = Le << (31 == ($g | 0) ? 0 : 25 - ($g >>> 1) | 0), th = l[nl >> 2]; ;) {
                                                    if ((l[th + 4 >> 2] & -8 | 0) == (Le | 0)) {
                                                        var ah = th + 8 | 0, ck = o[ah >> 2], pl = o[Y + 16 >> 2], tm = th >>> 0 < pl >>> 0;
                                                        do {
                                                            if (!tm && ck >>> 0 >= pl >>> 0) {
                                                                l[ck + 12 >> 2] = fj;
                                                                l[ah >> 2] = fj;
                                                                l[k + 2] = ck;
                                                                l[k + 3] = th;
                                                                l[k + 6] = 0;
                                                                break b
                                                            }
                                                        } while (0);
                                                        KL();
                                                        ja("Reached an unreachable!")
                                                    }
                                                    var dk = (mi >>> 31 << 2) + th + 16 | 0, gj = o[dk >> 2];
                                                    if (0 != (gj | 0)) {
                                                        mi <<= 1, th = gj
                                                    } else {
                                                        if (dk >>> 0 >= o[Y + 16 >> 2] >>> 0) {
                                                            l[dk >> 2] = fj;
                                                            l[k + 6] = th;
                                                            l[k + 3] = Bd;
                                                            l[k + 2] = Bd;
                                                            break b
                                                        }
                                                        KL();
                                                        ja("Reached an unreachable!")
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } while (0);
                            var uh = o[Y + 12 >> 2];
                            if (uh >>> 0 > mb >>> 0) {
                                var cg = uh - mb | 0;
                                l[Y + 12 >> 2] = cg;
                                var ek = o[Y + 24 >> 2], ni = ek;
                                l[Y + 24 >> 2] = ni + mb | 0;
                                l[(ni + 4 >> 2) + z] = cg | 1;
                                l[ek + 4 >> 2] = mb | 3;
                                $ = ek + 8 | 0;
                                break a
                            }
                        }
                    } while (0);
                    l[OL >> 2] = 12;
                    $ = 0
                }
            } else {
                var hj = Bf - mb | 0, bh = o[Y + 20 >> 2];
                if (15 < hj >>> 0) {
                    var fk = bh;
                    l[Y + 20 >> 2] = fk + mb | 0;
                    l[Y + 8 >> 2] = hj;
                    l[(fk + 4 >> 2) + z] = hj | 1;
                    l[fk + Bf >> 2] = hj;
                    l[bh + 4 >> 2] = mb | 3
                } else {
                    l[Y + 8 >> 2] = 0;
                    l[Y + 20 >> 2] = 0;
                    l[bh + 4 >> 2] = Bf | 3;
                    var ij = Bf + (bh + 4) | 0;
                    l[ij >> 2] |= 1
                }
                $ = bh + 8 | 0
            }
        }
    } while (0);
    return $
}
Module._malloc = Ne;
function Dh(b) {
    var d, e, f, g, h, j, k = b >> 2, m, n = 0 == (b | 0);
    a:do {
        if (!n) {
            var p = b - 8 | 0, u = p, r = o[Y + 16 >> 2], w = p >>> 0 < r >>> 0;
            b:do {
                if (!w) {
                    var x = o[b - 4 >> 2], y = x & 3;
                    if (1 != (y | 0)) {
                        var A = x & -8;
                        j = A >> 2;
                        var C = b + (A - 8) | 0, z = C, D = 0 == (x & 1 | 0);
                        c:do {
                            if (D) {
                                var E = o[p >> 2];
                                if (0 == (y | 0)) {
                                    break a
                                }
                                var G = -8 - E | 0;
                                h = G >> 2;
                                var H = b + G | 0, F = H, I = E + A | 0;
                                if (H >>> 0 < r >>> 0) {
                                    break b
                                }
                                if ((F | 0) == (l[Y + 20 >> 2] | 0)) {
                                    g = (b + (A - 4) | 0) >> 2;
                                    if (3 != (l[g] & 3 | 0)) {
                                        var J = F;
                                        f = J >> 2;
                                        var L = I;
                                        break
                                    }
                                    l[Y + 8 >> 2] = I;
                                    l[g] &= -2;
                                    l[h + (k + 1)] = I | 1;
                                    l[C >> 2] = I;
                                    break a
                                }
                                if (256 > E >>> 0) {
                                    var O = o[h + (k + 2)], R = o[h + (k + 3)];
                                    if ((O | 0) == (R | 0)) {
                                        l[Y >> 2] &= 1 << (E >>> 3) ^ -1, J = F, f = J >> 2, L = I
                                    } else {
                                        var T = ((E >>> 2 & 1073741822) << 2) + Y + 40 | 0, S = (O | 0) != (T | 0) & O >>> 0 < r >>> 0;
                                        do {
                                            if (!S && (R | 0) == (T | 0) | R >>> 0 >= r >>> 0) {
                                                l[O + 12 >> 2] = R;
                                                l[R + 8 >> 2] = O;
                                                J = F;
                                                f = J >> 2;
                                                L = I;
                                                break c
                                            }
                                        } while (0);
                                        KL();
                                        ja("Reached an unreachable!")
                                    }
                                } else {
                                    var U = H, W = o[h + (k + 6)], Q = o[h + (k + 3)], $ = (Q | 0) == (U | 0);
                                    do {
                                        if ($) {
                                            var ea = G + (b + 20) | 0, sa = l[ea >> 2];
                                            if (0 == (sa | 0)) {
                                                var Ba = G + (b + 16) | 0, oa = l[Ba >> 2];
                                                if (0 == (oa | 0)) {
                                                    var ga = 0;
                                                    e = ga >> 2;
                                                    break
                                                }
                                                var qa = Ba, la = oa
                                            } else {
                                                qa = ea, la = sa, m = 22
                                            }
                                            for (; ;) {
                                                var Ca = la + 20 | 0, ia = l[Ca >> 2];
                                                if (0 != (ia | 0)) {
                                                    qa = Ca, la = ia
                                                } else {
                                                    var ya = la + 16 | 0, ta = o[ya >> 2];
                                                    if (0 == (ta | 0)) {
                                                        break
                                                    }
                                                    qa = ya;
                                                    la = ta
                                                }
                                            }
                                            qa >>> 0 < r >>> 0 && (KL(), ja("Reached an unreachable!"));
                                            l[qa >> 2] = 0;
                                            ga = la
                                        } else {
                                            var Ia = o[h + (k + 2)];
                                            Ia >>> 0 < r >>> 0 && (KL(), ja("Reached an unreachable!"));
                                            l[Ia + 12 >> 2] = Q;
                                            l[Q + 8 >> 2] = Ia;
                                            ga = Q
                                        }
                                        e = ga >> 2
                                    } while (0);
                                    if (0 != (W | 0)) {
                                        var na = G + (b + 28) | 0, Z = (l[na >> 2] << 2) + Y + 304 | 0, ba = (U | 0) == (l[Z >> 2] | 0);
                                        do {
                                            if (ba) {
                                                l[Z >> 2] = ga;
                                                if (0 != (ga | 0)) {
                                                    break
                                                }
                                                l[Y + 4 >> 2] &= 1 << l[na >> 2] ^ -1;
                                                J = F;
                                                f = J >> 2;
                                                L = I;
                                                break c
                                            }
                                            W >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                            var ca = W + 16 | 0;
                                            (l[ca >> 2] | 0) == (U | 0) ? l[ca >> 2] = ga : l[W + 20 >> 2] = ga;
                                            if (0 == (ga | 0)) {
                                                J = F;
                                                f = J >> 2;
                                                L = I;
                                                break c
                                            }
                                        } while (0);
                                        ga >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                        l[e + 6] = W;
                                        var ma = o[h + (k + 4)];
                                        0 != (ma | 0) && (ma >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!")), l[e + 4] = ma, l[ma + 24 >> 2] = ga);
                                        var ka = o[h + (k + 5)];
                                        0 != (ka | 0) && (ka >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!")), l[e + 5] = ka, l[ka + 24 >> 2] = ga)
                                    }
                                    J = F;
                                    f = J >> 2;
                                    L = I
                                }
                            } else {
                                J = u, f = J >> 2, L = A
                            }
                        } while (0);
                        var aa = J;
                        if (aa >>> 0 < C >>> 0) {
                            var ra = b + (A - 4) | 0, ha = o[ra >> 2];
                            if (0 != (ha & 1 | 0)) {
                                var za = 0 == (ha & 2 | 0);
                                do {
                                    if (za) {
                                        if ((z | 0) == (l[Y + 24 >> 2] | 0)) {
                                            var X = l[Y + 12 >> 2] + L | 0;
                                            l[Y + 12 >> 2] = X;
                                            l[Y + 24 >> 2] = J;
                                            l[f + 1] = X | 1;
                                            (J | 0) == (l[Y + 20 >> 2] | 0) && (l[Y + 20 >> 2] = 0, l[Y + 8 >> 2] = 0);
                                            if (X >>> 0 <= o[Y + 28 >> 2] >>> 0) {
                                                break a
                                            }
                                            var ua = Ha, da = Ha;
                                            if (0 == (l[LL >> 2] | 0) && 0 == (l[LL >> 2] | 0)) {
                                                var fa = ML();
                                                0 == (fa - 1 & fa | 0) ? (l[LL + 8 >> 2] = fa, l[LL + 4 >> 2] = fa, l[LL + 12 >> 2] = -1, l[LL + 16 >> 2] = 2097152, l[LL + 20 >> 2] = 0, l[Y + 440 >> 2] = 0, l[LL >> 2] = Math.floor(Date.now() / 1e3) & -16 ^ 1431655768) : (KL(), ja("Reached an unreachable!"))
                                            }
                                            c:do {
                                                var Aa = o[Y + 24 >> 2];
                                                if (0 != (Aa | 0)) {
                                                    var Qa = o[Y + 12 >> 2], pa = 40 < Qa >>> 0;
                                                    do {
                                                        if (pa) {
                                                            for (var cb = o[LL + 8 >> 2], Ra = (Math.floor(((-41 + Qa + cb | 0) >>> 0) / (cb >>> 0)) - 1) * cb | 0, Ta = Aa, $a = Y + 444 | 0, da = $a >> 2; ;) {
                                                                var va = o[da];
                                                                if (va >>> 0 <= Ta >>> 0 && (va + l[da + 1] | 0) >>> 0 > Ta >>> 0) {
                                                                    var Wa = $a;
                                                                    break
                                                                }
                                                                var fb = o[da + 2];
                                                                if (0 == (fb | 0)) {
                                                                    Wa = 0;
                                                                    break
                                                                }
                                                                $a = fb;
                                                                da = $a >> 2
                                                            }
                                                            if (0 == (l[Wa + 12 >> 2] & 8 | 0)) {
                                                                var gb = NL(0), ua = (Wa + 4 | 0) >> 2;
                                                                if ((gb | 0) == (l[Wa >> 2] + l[ua] | 0)) {
                                                                    var Xa = NL(-(2147483646 < Ra >>> 0 ? -2147483648 - cb | 0 : Ra) | 0), Ua = NL(0);
                                                                    if (-1 != (Xa | 0) & Ua >>> 0 < gb >>> 0) {
                                                                        var Va = gb - Ua | 0;
                                                                        if ((gb | 0) != (Ua | 0)) {
                                                                            l[ua] = l[ua] - Va | 0;
                                                                            l[Y + 432 >> 2] = l[Y + 432 >> 2] - Va | 0;
                                                                            var pb = l[Y + 24 >> 2], nb = l[Y + 12 >> 2] - Va | 0, La = pb, qb = pb + 8 | 0, bb = 0 == (qb & 7 | 0) ? 0 : -qb & 7, Fa = nb - bb | 0;
                                                                            l[Y + 24 >> 2] = La + bb | 0;
                                                                            l[Y + 12 >> 2] = Fa;
                                                                            l[(bb + (La + 4) | 0) >> 2] = Fa | 1;
                                                                            l[(nb + (La + 4) | 0) >> 2] = 40;
                                                                            l[Y + 28 >> 2] = l[LL + 16 >> 2];
                                                                            break c
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    } while (0);
                                                    o[Y + 12 >> 2] >>> 0 > o[Y + 28 >> 2] >>> 0 && (l[Y + 28 >> 2] = -1)
                                                }
                                            } while (0);
                                            break a
                                        }
                                        if ((z | 0) == (l[Y + 20 >> 2] | 0)) {
                                            var Ma = l[Y + 8 >> 2] + L | 0;
                                            l[Y + 8 >> 2] = Ma;
                                            l[Y + 20 >> 2] = J;
                                            l[f + 1] = Ma | 1;
                                            l[(aa + Ma | 0) >> 2] = Ma;
                                            break a
                                        }
                                        var wa = (ha & -8) + L | 0, hb = ha >>> 3, Ya = 256 > ha >>> 0;
                                        c:do {
                                            if (Ya) {
                                                var Za = o[k + j], Da = o[((A | 4) >> 2) + k];
                                                if ((Za | 0) == (Da | 0)) {
                                                    l[Y >> 2] &= 1 << hb ^ -1
                                                } else {
                                                    var Oa = ((ha >>> 2 & 1073741822) << 2) + Y + 40 | 0;
                                                    m = (Za | 0) == (Oa | 0) ? 64 : Za >>> 0 < o[Y + 16 >> 2] >>> 0 ? 67 : 64;
                                                    do {
                                                        if (64 == m && !((Da | 0) != (Oa | 0) && Da >>> 0 < o[Y + 16 >> 2] >>> 0)) {
                                                            l[Za + 12 >> 2] = Da;
                                                            l[Da + 8 >> 2] = Za;
                                                            break c
                                                        }
                                                    } while (0);
                                                    KL();
                                                    ja("Reached an unreachable!")
                                                }
                                            } else {
                                                var ib = C, ab = o[j + (k + 4)], Ga = o[((A | 4) >> 2) + k], jb = (Ga | 0) == (ib | 0);
                                                do {
                                                    if (jb) {
                                                        var Ea = A + (b + 12) | 0, Pa = l[Ea >> 2];
                                                        if (0 == (Pa | 0)) {
                                                            var Ja = A + (b + 8) | 0, db = l[Ja >> 2];
                                                            if (0 == (db | 0)) {
                                                                var xa = 0;
                                                                d = xa >> 2;
                                                                break
                                                            }
                                                            var Sa = Ja, Ka = db
                                                        } else {
                                                            Sa = Ea, Ka = Pa, m = 74
                                                        }
                                                        for (; ;) {
                                                            var tb = Ka + 20 | 0, kb = l[tb >> 2];
                                                            if (0 != (kb | 0)) {
                                                                Sa = tb, Ka = kb
                                                            } else {
                                                                var ub = Ka + 16 | 0, rb = o[ub >> 2];
                                                                if (0 == (rb | 0)) {
                                                                    break
                                                                }
                                                                Sa = ub;
                                                                Ka = rb
                                                            }
                                                        }
                                                        Sa >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                                        l[Sa >> 2] = 0;
                                                        xa = Ka
                                                    } else {
                                                        var Bb = o[k + j];
                                                        Bb >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                                        l[Bb + 12 >> 2] = Ga;
                                                        l[Ga + 8 >> 2] = Bb;
                                                        xa = Ga
                                                    }
                                                    d = xa >> 2
                                                } while (0);
                                                if (0 != (ab | 0)) {
                                                    var lb = A + (b + 20) | 0, yb = (l[lb >> 2] << 2) + Y + 304 | 0, xb = (ib | 0) == (l[yb >> 2] | 0);
                                                    do {
                                                        if (xb) {
                                                            l[yb >> 2] = xa;
                                                            if (0 != (xa | 0)) {
                                                                break
                                                            }
                                                            l[Y + 4 >> 2] &= 1 << l[lb >> 2] ^ -1;
                                                            break c
                                                        }
                                                        ab >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                                        var Ib = ab + 16 | 0;
                                                        (l[Ib >> 2] | 0) == (ib | 0) ? l[Ib >> 2] = xa : l[ab + 20 >> 2] = xa;
                                                        if (0 == (xa | 0)) {
                                                            break c
                                                        }
                                                    } while (0);
                                                    xa >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                                    l[d + 6] = ab;
                                                    var wb = o[j + (k + 2)];
                                                    0 != (wb | 0) && (wb >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!")), l[d + 4] = wb, l[wb + 24 >> 2] = xa);
                                                    var vb = o[j + (k + 3)];
                                                    0 != (vb | 0) && (vb >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!")), l[d + 5] = vb, l[vb + 24 >> 2] = xa)
                                                }
                                            }
                                        } while (0);
                                        l[f + 1] = wa | 1;
                                        l[aa + wa >> 2] = wa;
                                        if ((J | 0) != (l[Y + 20 >> 2] | 0)) {
                                            var zb = wa
                                        } else {
                                            l[Y + 8 >> 2] = wa;
                                            break a
                                        }
                                    } else {
                                        l[ra >> 2] = ha & -2, l[f + 1] = L | 1, zb = l[aa + L >> 2] = L
                                    }
                                } while (0);
                                if (256 > zb >>> 0) {
                                    var Eb = zb >>> 2 & 1073741822, Cb = (Eb << 2) + Y + 40 | 0, eb = o[Y >> 2], sb = 1 << (zb >>> 3);
                                    if (0 == (eb & sb | 0)) {
                                        l[Y >> 2] = eb | sb;
                                        var ob = Cb, Db = (Eb + 2 << 2) + Y + 40 | 0
                                    } else {
                                        var Jb = (Eb + 2 << 2) + Y + 40 | 0, Rb = o[Jb >> 2];
                                        Rb >>> 0 < o[Y + 16 >> 2] >>> 0 && (KL(), ja("Reached an unreachable!"));
                                        ob = Rb;
                                        Db = Jb
                                    }
                                    l[Db >> 2] = J;
                                    l[ob + 12 >> 2] = J;
                                    l[f + 2] = ob;
                                    l[f + 3] = Cb;
                                    break a
                                }
                                var Nb = J, Ob = zb >>> 8;
                                if (0 == (Ob | 0)) {
                                    var Lb = 0
                                } else {
                                    if (16777215 < zb >>> 0) {
                                        Lb = 31
                                    } else {
                                        var Pb = (Ob + 1048320 | 0) >>> 16 & 8, Mb = Ob << Pb, Yb = (Mb + 520192 | 0) >>> 16 & 4, Zb = Mb << Yb, fc = (Zb + 245760 | 0) >>> 16 & 2, Ub = 14 - (Yb | Pb | fc) + (Zb << fc >>> 15) | 0, Lb = zb >>> ((Ub + 7 | 0) >>> 0) & 1 | Ub << 1
                                    }
                                }
                                var jc = (Lb << 2) + Y + 304 | 0;
                                l[f + 7] = Lb;
                                l[f + 5] = 0;
                                l[f + 4] = 0;
                                var Qb = l[Y + 4 >> 2], mb = 1 << Lb, cc = 0 == (Qb & mb | 0);
                                c:do {
                                    if (cc) {
                                        l[Y + 4 >> 2] = Qb | mb, l[jc >> 2] = Nb, l[f + 6] = jc, l[f + 3] = J, l[f + 2] = J
                                    } else {
                                        for (var Fb = zb << (31 == (Lb | 0) ? 0 : 25 - (Lb >>> 1) | 0), hc = l[jc >> 2]; ;) {
                                            if ((l[hc + 4 >> 2] & -8 | 0) == (zb | 0)) {
                                                var wc = hc + 8 | 0, pc = o[wc >> 2], qc = o[Y + 16 >> 2], $c = hc >>> 0 < qc >>> 0;
                                                do {
                                                    if (!$c && pc >>> 0 >= qc >>> 0) {
                                                        l[pc + 12 >> 2] = Nb;
                                                        l[wc >> 2] = Nb;
                                                        l[f + 2] = pc;
                                                        l[f + 3] = hc;
                                                        l[f + 6] = 0;
                                                        break c
                                                    }
                                                } while (0);
                                                KL();
                                                ja("Reached an unreachable!")
                                            }
                                            var Fc = (Fb >>> 31 << 2) + hc + 16 | 0, sc = o[Fc >> 2];
                                            if (0 != (sc | 0)) {
                                                Fb <<= 1, hc = sc
                                            } else {
                                                if (Fc >>> 0 >= o[Y + 16 >> 2] >>> 0) {
                                                    l[Fc >> 2] = Nb;
                                                    l[f + 6] = hc;
                                                    l[f + 3] = J;
                                                    l[f + 2] = J;
                                                    break c
                                                }
                                                KL();
                                                ja("Reached an unreachable!")
                                            }
                                        }
                                    }
                                } while (0);
                                var kd = l[Y + 32 >> 2] - 1 | 0;
                                l[Y + 32 >> 2] = kd;
                                if (0 != (kd | 0)) {
                                    break a
                                }
                                for (var wd = Y + 452 | 0; ;) {
                                    var Mc = l[wd >> 2];
                                    if (0 == (Mc | 0)) {
                                        break
                                    }
                                    wd = Mc + 8 | 0
                                }
                                l[Y + 32 >> 2] = -1;
                                break a
                            }
                        }
                    }
                }
            } while (0);
            KL();
            ja("Reached an unreachable!")
        }
    } while (0)
}
Module._free = Dh;
function Ls(b) {
    0 != (b | 0) && Dh(b)
}
function Wq(b) {
    for (b = 0 == (b | 0) ? 1 : b; ;) {
        var d = Ne(b);
        if (0 == (d | 0)) {
            d = (Nd = l[PL >> 2], l[PL >> 2] = Nd, Nd);
            if (0 == (d | 0)) {
                var e;
                e = Ne(4);
                l[e >> 2] = QL + 8 | 0;
                var f = RL;
                if (!SL) {
                    try {
                        l[TL >> 2] = 0
                    } catch (g) {
                    }
                    try {
                        l[UL >> 2] = 1
                    } catch (h) {
                    }
                    try {
                        l[VL >> 2] = 2
                    } catch (j) {
                    }
                    SL = Na
                }
                Module.M("Compiled code throwing an exception, " + [e, f, 32] + ", at " + Error().stack);
                l[WL >> 2] = e;
                l[WL + 4 >> 2] = f;
                l[WL + 8 >> 2] = 32;
                "uncaught_exception"in XL ? XL.jc++ : XL.jc = 1;
                ja(e);
                ja("Reached an unreachable!")
            }
            K[d]()
        } else {
            return d
        }
    }
    return Ab
}
var un = Ab;
function Ch(b, d, e) {
    if (20 <= e && d % 2 == b % 2) {
        if (d % 4 == b % 4) {
            for (e = d + e; d % 4;) {
                c[b++] = c[d++]
            }
            for (var d = d >> 2, b = b >> 2, f = e >> 2; d < f;) {
                l[b++] = l[d++]
            }
            d <<= 2;
            for (b <<= 2; d < e;) {
                c[b++] = c[d++]
            }
        } else {
            e = d + e;
            d % 2 && (c[b++] = c[d++]);
            d >>= 1;
            b >>= 1;
            for (f = e >> 1; d < f;) {
                i[b++] = i[d++]
            }
            d <<= 1;
            b <<= 1;
            d < e && (c[b++] = c[d++])
        }
    } else {
        for (; e--;) {
            c[b++] = c[d++]
        }
    }
}
var Fh = Math.sqrt;
function P(b, d, e, f) {
    ja("Assertion failed: " + we(f) + ", at: " + [we(b), d, we(e)])
}
function Oe(b, d) {
    var e = 0;
    if (20 <= d) {
        for (var f = b + d; b % 4;) {
            c[b++] = e
        }
        0 > e && (e += 256);
        for (var g = b >> 2, h = f >> 2, j = e | e << 8 | e << 16 | e << 24; g < h;) {
            l[g++] = j
        }
        for (b = g << 2; b < f;) {
            c[b++] = e
        }
    } else {
        for (; d--;) {
            c[b++] = e
        }
    }
}
var mm = Math.sin, nm = Math.cos, Vp = Math.floor, YL = 13, ZL = 9, $L = 22, aM = 5, bM = 21, cM = 6;
function dM(b) {
    OL || (OL = B([0], "i32", v));
    l[OL >> 2] = b
}
var OL, eM = 0, tn = 0, fM = 0, gM = 2, wn = [Ab], hM = Na;
function iM(b, d) {
    if ("string" !== typeof b) {
        return Ab
    }
    d === Ha && (d = "/");
    b && "/" == b[0] && (d = "");
    for (var e = (d + "/" + b).split("/").reverse(), f = [""]; e.length;) {
        var g = e.pop();
        "" == g || "." == g || (".." == g ? 1 < f.length && f.pop() : f.push(g))
    }
    return 1 == f.length ? "/" : f.join("/")
}
function jM(b, d, e) {
    var f = {Mh:Gb, fb:Gb, error:0, name:Ab, path:Ab, object:Ab, ec:Gb, gc:Ab, fc:Ab}, b = iM(b);
    if ("/" == b) {
        f.Mh = Na, f.fb = f.ec = Na, f.name = "/", f.path = f.gc = "/", f.object = f.fc = kM
    } else {
        if (b !== Ab) {
            for (var e = e || 0, b = b.slice(1).split("/"), g = kM, h = [""]; b.length;) {
                1 == b.length && g.X && (f.ec = Na, f.gc = 1 == h.length ? "/" : h.join("/"), f.fc = g, f.name = b[0]);
                var j = b.shift();
                if (g.X) {
                    if (g.ic) {
                        if (!g.u.hasOwnProperty(j)) {
                            f.error = 2;
                            break
                        }
                    } else {
                        f.error = YL;
                        break
                    }
                } else {
                    f.error = 20;
                    break
                }
                g = g.u[j];
                if (g.link && !(d && 0 == b.length)) {
                    if (40 < e) {
                        f.error = 40;
                        break
                    }
                    f = iM(g.link, h.join("/"));
                    f = jM([f].concat(b).join("/"), d, e + 1);
                    break
                }
                h.push(j);
                0 == b.length && (f.fb = Na, f.path = h.join("/"), f.object = g)
            }
        }
    }
    return f
}
function lM(b) {
    mM();
    b = jM(b, Ha);
    if (b.fb) {
        return b.object
    }
    dM(b.error);
    return Ab
}
function nM(b, d, e, f, g) {
    b || (b = "/");
    "string" === typeof b && (b = lM(b));
    b || (dM(YL), ja(Error("Parent path must exist.")));
    b.X || (dM(20), ja(Error("Parent must be a folder.")));
    !b.write && !hM && (dM(YL), ja(Error("Parent folder must be writeable.")));
    if (!d || "." == d || ".." == d) {
        dM(2), ja(Error("Name must not be empty."))
    }
    b.u.hasOwnProperty(d) && (dM(17), ja(Error("Can't overwrite object.")));
    b.u[d] = {ic:f === Ha ? Na : f, write:g === Ha ? Gb : g, timestamp:Date.now(), Lh:gM++};
    for (var h in e) {
        e.hasOwnProperty(h) && (b.u[d][h] = e[h])
    }
    return b.u[d]
}
function oM(b, d, e, f) {
    return nM(b, d, {X:Na, Q:Gb, u:{}}, e, f)
}
function pM(b, d, e, f) {
    b = lM(b);
    b === Ab && ja(Error("Invalid parent."));
    for (d = d.split("/").reverse(); d.length;) {
        var g = d.pop();
        g && (b.u.hasOwnProperty(g) || oM(b, g, e, f), b = b.u[g])
    }
    return b
}
function qM(b, d, e, f, g) {
    e.X = Gb;
    return nM(b, d, e, f, g)
}
function rM(b, d, e, f, g) {
    if ("string" === typeof e) {
        for (var h = Array(e.length), j = 0, k = e.length; j < k; ++j) {
            h[j] = e.charCodeAt(j)
        }
        e = h
    }
    e = {Q:Gb, u:e.subarray ? e.subarray(0) : e};
    return qM(b, d, e, f, g)
}
function sM(b, d, e, f) {
    !e && !f && ja(Error("A device must have at least one callback defined."));
    return qM(b, d, {Q:Na, input:e, Y:f}, Boolean(e), Boolean(f))
}
function mM() {
    kM || (kM = {ic:Na, write:Na, X:Na, Q:Gb, timestamp:Date.now(), Lh:1, u:{}})
}
var tM, kM;
function vn(b, d, e) {
    var f = wn[b];
    if (f) {
        if (f.Ea) {
            if (0 > e) {
                return dM($L), -1
            }
            if (f.object.Q) {
                if (f.object.Y) {
                    for (var g = 0; g < e; g++) {
                        try {
                            f.object.Y(c[d + g])
                        } catch (h) {
                            return dM(aM), -1
                        }
                    }
                    f.object.timestamp = Date.now();
                    return g
                }
                dM(cM);
                return-1
            }
            g = f.position;
            b = wn[b];
            if (!b || b.object.Q) {
                dM(ZL), d = -1
            } else {
                if (b.Ea) {
                    if (b.object.X) {
                        dM(bM), d = -1
                    } else {
                        if (0 > e || 0 > g) {
                            dM($L), d = -1
                        } else {
                            for (var j = b.object.u; j.length < g;) {
                                j.push(0)
                            }
                            for (var k = 0; k < e; k++) {
                                j[g + k] = ed[d + k]
                            }
                            b.object.timestamp = Date.now();
                            d = k
                        }
                    }
                } else {
                    dM(YL), d = -1
                }
            }
            -1 != d && (f.position += d);
            return d
        }
        dM(YL);
        return-1
    }
    dM(ZL);
    return-1
}
var hK = Math.atan2;
function ou(b) {
    c[b] || (c[b] = 1)
}
function KL() {
    ja("abort() at " + Error().stack)
}
function ML() {
    switch (8) {
        case 8:
            return Pe;
        case 54:
        case 56:
        case 21:
        case 61:
        case 63:
        case 22:
        case 67:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 69:
        case 28:
        case 101:
        case 70:
        case 71:
        case 29:
        case 30:
        case 199:
        case 75:
        case 76:
        case 32:
        case 43:
        case 44:
        case 80:
        case 46:
        case 47:
        case 45:
        case 48:
        case 49:
        case 42:
        case 82:
        case 33:
        case 7:
        case 108:
        case 109:
        case 107:
        case 112:
        case 119:
        case 121:
            return 200809;
        case 13:
        case 104:
        case 94:
        case 95:
        case 34:
        case 35:
        case 77:
        case 81:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 91:
        case 94:
        case 95:
        case 110:
        case 111:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 120:
        case 40:
        case 16:
        case 79:
        case 19:
            return-1;
        case 92:
        case 93:
        case 5:
        case 72:
        case 6:
        case 74:
        case 92:
        case 93:
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103:
        case 105:
            return 1;
        case 38:
        case 66:
        case 50:
        case 51:
        case 4:
            return 1024;
        case 15:
        case 64:
        case 41:
            return 32;
        case 55:
        case 37:
        case 17:
            return 2147483647;
        case 18:
        case 1:
            return 47839;
        case 59:
        case 57:
            return 99;
        case 68:
        case 58:
            return 2048;
        case 0:
            return 2097152;
        case 3:
            return 65536;
        case 14:
            return 32768;
        case 73:
            return 32767;
        case 39:
            return 16384;
        case 60:
            return 1e3;
        case 106:
            return 700;
        case 52:
            return 256;
        case 62:
            return 255;
        case 2:
            return 100;
        case 65:
            return 64;
        case 36:
            return 20;
        case 100:
            return 16;
        case 20:
            return 6;
        case 53:
            return 4
    }
    dM($L);
    return-1
}
function NL(b) {
    uM || (Lc = Lc + 4095 >> 12 << 12, uM = Na);
    var d = Lc;
    0 != b && Ec(b);
    return d
}
var uM;
function XL() {
    return!!XL.jc
}
var SL, vM = Gb, wM, xM, yM, zM;
uf.unshift({gb:(function () {
    if (!Module.noFSInit && !tM) {
        var b, d, e, f = (function (b) {
            b === Ab || 10 === b ? (d.Fa(d.buffer.join("")), d.buffer = []) : d.buffer.push(k.hc(b))
        });
        rc(!tM, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
        tM = Na;
        mM();
        b = b || Module.stdin;
        d = d || Module.stdout;
        e = e || Module.stderr;
        var g = Na, h = Na, j = Na;
        b || (g = Gb, b = (function () {
            if (!b.eb || !b.eb.length) {
                var d;
                "undefined" != typeof window && "function" == typeof window.prompt ? (d = window.prompt("Input: "), d === Ab && (d = String.fromCharCode(0))) : "function" == typeof readline && (d = readline());
                d || (d = "");
                b.eb = rf(d + "\n", Na)
            }
            return b.eb.shift()
        }));
        var k = new Bc;
        d || (h = Gb, d = f);
        d.Fa || (d.Fa = Module.print);
        d.buffer || (d.buffer = []);
        e || (j = Gb, e = f);
        e.Fa || (e.Fa = Module.print);
        e.buffer || (e.buffer = []);
        try {
            oM("/", "tmp", Na, Na)
        } catch (m) {
        }
        var f = oM("/", "dev", Na, Na), n = sM(f, "stdin", b), p = sM(f, "stdout", Ab, d);
        e = sM(f, "stderr", Ab, e);
        sM(f, "tty", b, d);
        wn[1] = {path:"/dev/stdin", object:n, position:0, cc:Na, Ea:Gb, bc:Gb, dc:!g, error:Gb, ac:Gb, kc:[]};
        wn[2] = {path:"/dev/stdout", object:p, position:0, cc:Gb, Ea:Na, bc:Gb, dc:!h, error:Gb, ac:Gb, kc:[]};
        wn[3] = {path:"/dev/stderr", object:e, position:0, cc:Gb, Ea:Na, bc:Gb, dc:!j, error:Gb, ac:Gb, kc:[]};
        eM = B([1], "void*", Ge);
        tn = B([2], "void*", Ge);
        fM = B([3], "void*", Ge);
        pM("/", "dev/shm/tmp", Na, Na);
        for (g = wn.length; g < Math.max(eM, tn, fM) + 4; g++) {
            wn[g] = Ab
        }
        wn[eM] = wn[1];
        wn[tn] = wn[2];
        wn[fM] = wn[3];
        B([B([0, 0, 0, 0, eM, 0, 0, 0, tn, 0, 0, 0, fM, 0, 0, 0], "void*", v)], "void*", v)
    }
})});
vf.push({gb:(function () {
    hM = Gb
})});
wf.push({gb:(function () {
    tM && (wn[2] && 0 < wn[2].object.Y.buffer.length && wn[2].object.Y(10), wn[3] && 0 < wn[3].object.Y.buffer.length && wn[3].object.Y(10))
})});
Module.FS_createFolder = oM;
Module.FS_createPath = pM;
Module.FS_createDataFile = rM;
Module.FS_createPreloadedFile = (function (b, d, e, f, g, h, j) {
    function k(b) {
        return{jpg:"image/jpeg", png:"image/png", bmp:"image/bmp", ogg:"audio/ogg", wav:"audio/wav", mp3:"audio/mpeg"}[b.substr(-3)]
    }

    function m(e) {
        function k(e) {
            rM(b, d, e, f, g);
            h && h();
            Dg("cp " + p)
        }

        var m = Gb;
        Module.preloadPlugins.forEach((function (b) {
            !m && b.canHandle(p) && (b.handle(e, p, k, (function () {
                j && j();
                Dg("cp " + p)
            })), m = Na)
        }));
        m || k(e)
    }

    if (!wM) {
        wM = Na;
        try {
            new Blob, xM = Na
        } catch (n) {
            xM = Gb, console.log("warning: no blob constructor, cannot create blobs with mimetypes")
        }
        yM = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : !xM ? console.log("warning: no BlobBuilder") : Ab;
        zM = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : console.log("warning: cannot create object URLs");
        Module.preloadPlugins || (Module.preloadPlugins = []);
        Module.preloadPlugins.push({canHandle:(function (b) {
            return b.substr(-4)in{".jpg":1, ".png":1, ".bmp":1}
        }), handle:(function (b, d, e, f) {
            var g = Ab;
            if (xM) {
                try {
                    g = new Blob([b], {type:k(d)})
                } catch (h) {
                    var j = "Blob constructor present but fails: " + h + "; falling back to blob builder";
                    vc || (vc = {});
                    vc[j] || (vc[j] = 1, Module.M(j))
                }
            }
            g || (g = new yM, g.append((new Uint8Array(b)).buffer), g = g.getBlob());
            var m = zM.createObjectURL(g), n = new Image;
            n.onload = (function () {
                rc(n.complete, "Image " + d + " could not be decoded");
                var f = document.createElement("canvas");
                f.width = n.width;
                f.height = n.height;
                f.getContext("2d").drawImage(n, 0, 0);
                Module.preloadedImages[d] = f;
                zM.revokeObjectURL(m);
                e && e(b)
            });
            n.onerror = (function () {
                console.log("Image " + m + " could not be decoded");
                f && f()
            });
            n.src = m
        })});
        Module.preloadPlugins.push({canHandle:(function (b) {
            return b.substr(-4)in{".ogg":1, ".wav":1, ".mp3":1}
        }), handle:(function (b, d, e, f) {
            function g(f) {
                j || (j = Na, Module.preloadedAudios[d] = f, e && e(b))
            }

            function h() {
                j || (j = Na, Module.preloadedAudios[d] = new Audio, f && f())
            }

            var j = Gb;
            if (xM) {
                try {
                    var m = new Blob([b], {type:k(d)})
                } catch (n) {
                    return h()
                }
                var m = zM.createObjectURL(m), p = new Audio;
                p.addEventListener("canplaythrough", (function () {
                    g(p)
                }), Gb);
                p.onerror = (function () {
                    if (!j) {
                        console.log("warning: browser could not fully decode audio " + d + ", trying slower base64 approach");
                        for (var e = "", f = 0, h = 0, k = 0; k < b.length; k++) {
                            f = f << 8 | b[k];
                            for (h += 8; 6 <= h;) {
                                var m = f >> h - 6 & 63, h = h - 6, e = e + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[m]
                            }
                        }
                        2 == h ? (e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f & 3) << 4], e += "==") : 4 == h && (e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f & 15) << 2], e += "=");
                        p.src = "data:audio/x-" + d.substr(-3) + ";base64," + e;
                        g(p)
                    }
                });
                p.src = m;
                setTimeout((function () {
                    g(p)
                }), 1e4)
            } else {
                return h()
            }
        })})
    }
    for (var p, u = [b, d], r = u[0], w = 1; w < u.length; w++) {
        "/" != r[r.length - 1] && (r += "/"), r += u[w]
    }
    "/" == r[0] && (r = r.substr(1));
    p = r;
    Cg("cp " + p);
    if ("string" == typeof e) {
        var x = j, y = (function () {
            x ? x() : ja('Loading data file "' + e + '" failed.')
        }), A = new XMLHttpRequest;
        A.open("GET", e, Na);
        A.responseType = "arraybuffer";
        A.onload = (function () {
            if (200 == A.status) {
                var b = A.response;
                rc(b, 'Loading data file "' + e + '" failed (no arrayBuffer).');
                b = new Uint8Array(b);
                m(b);
                Dg("al " + e)
            } else {
                y()
            }
        });
        A.onerror = y;
        A.send(Ab);
        Cg("al " + e)
    } else {
        m(e)
    }
});
Module.FS_createLazyFile = (function (b, d, e, f, g) {
    return qM(b, d, {Q:Gb, url:e}, f, g)
});
Module.FS_createLink = (function (b, d, e, f, g) {
    return qM(b, d, {Q:Gb, link:e}, f, g)
});
Module.FS_createDevice = sM;
dM(0);
var WL = B(12, "void*", v);
Module.requestFullScreen = (function () {
    function b() {
    }

    function d() {
        var b = Gb;
        if ((document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement) === e) {
            e.Qh = e.requestPointerLock || e.mozRequestPointerLock || e.webkitRequestPointerLock, e.Qh(), b = Na
        }
        if (Module.onFullScreen) {
            Module.onFullScreen(b)
        }
    }

    var e = Module.canvas;
    document.addEventListener("fullscreenchange", d, Gb);
    document.addEventListener("mozfullscreenchange", d, Gb);
    document.addEventListener("webkitfullscreenchange", d, Gb);
    document.addEventListener("pointerlockchange", b, Gb);
    document.addEventListener("mozpointerlockchange", b, Gb);
    document.addEventListener("webkitpointerlockchange", b, Gb);
    e.Ph = e.requestFullScreen || e.mozRequestFullScreen || (e.webkitRequestFullScreen ? (function () {
        e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
    }) : Ab);
    e.Ph()
});
Module.requestAnimationFrame = (function (b) {
    window.requestAnimationFrame || (window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || window.setTimeout);
    window.requestAnimationFrame(b)
});
Module.pauseMainLoop = Hb();
Module.resumeMainLoop = (function () {
    vM && (vM = Gb, Ab())
});
Module.Kh = (function (b) {
    function d() {
        for (var b = 0; 3 > b; b++) {
            f.push(0)
        }
    }

    var e = b.length + 1, f = [B(rf("/bin/this.program"), "i8", v)];
    d();
    for (var g = 0; g < e - 1; g += 1) {
        f.push(B(rf(b[g]), "i8", v)), d()
    }
    f.push(0);
    f = B(f, "i32", v);
    return _main(e, f, 0)
});
var Cj, Ej, Ak, Up, Yp, Zp, Wp, Xp, zy, AM, BM, Xw, CM, yF, DM, pF, EM, sn, rn, xp, FM, GM, Dj, uf = uf.concat([]), yp, zp, zx, HM, IM, JM, KM, LM, MM, NM, OM, PM, QM, op, np, RM, SM, TM, UM, VM, WM, XM, YM, ZM, Fp, $M, aN, Np, bN, cq, cN, Ep, dq, dN, eq, eN, gq, fN, Ip, gN, Op, hN, Mp, iN, hq, jN, Mv, nu, gx, fx, kx, jx, nx, mx, KF, JF, vG, uG, yG, xG, CG, BG, FG, EG, IG, HG, MG, LG, xI, wI, CI, BI, II, HI, kK, jK, nK, mK, kN, lN, mN, nN, oN, pN, UL, qN, rN, sN, tN, uN, vN, wN, xN, yN, zN, AN, BN, CN, DN, EN, FN, GN, HN, IN, JN, KN, LN, MN, NN, ON, PN, QN, RN, SN, TN, UN, VN, WN, XN, YN, ZN, $N, aO, bO, cO, dO, eO, fO, gO, hO, iO, jO, kO, lO, mO, nO, oO, pO, qO, rO, sO, tO, uO, vO, wO, xO, yO, zO, AO, BO, CO, DO, EO, FO, VL, GO, HO, IO, TL, JO, KO, Y, LL, PL, QL, LO, RL, MO;
N.Pe = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 67, 111, 108, 108, 105, 100, 101, 69, 100, 103, 101, 46, 99, 112, 112, 0], "i8", v);
N.je = B([118, 111, 105, 100, 32, 98, 50, 67, 111, 108, 108, 105, 100, 101, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 40, 98, 50, 77, 97, 110, 105, 102, 111, 108, 100, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 67, 105, 114, 99, 108, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0], "i8", v);
N.Qe = B([100, 101, 110, 32, 62, 32, 48, 46, 48, 102, 0], "i8", v);
N.Jb = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 67, 111, 108, 108, 105, 100, 101, 80, 111, 108, 121, 103, 111, 110, 46, 99, 112, 112, 0], "i8", v);
N.le = B([118, 111, 105, 100, 32, 98, 50, 70, 105, 110, 100, 73, 110, 99, 105, 100, 101, 110, 116, 69, 100, 103, 101, 40, 98, 50, 67, 108, 105, 112, 86, 101, 114, 116, 101, 120, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0], "i8", v);
N.Fb = B([48, 32, 60, 61, 32, 101, 100, 103, 101, 49, 32, 38, 38, 32, 101, 100, 103, 101, 49, 32, 60, 32, 112, 111, 108, 121, 49, 45, 62, 109, 95, 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 0], "i8", v);
N.ke = B([102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 69, 100, 103, 101, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 40, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0], "i8", v);
Cj = B(4, "i8", v);
Ej = B(4, "i8", v);
Ak = B(4, "i8", v);
N.s = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 46, 99, 112, 112, 0], "i8", v);
N.pb = B([118, 111, 105, 100, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 58, 58, 83, 101, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 104, 97, 112, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0], "i8", v);
N.Gf = B([48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 99, 104, 97, 105, 110, 45, 62, 109, 95, 99, 111, 117, 110, 116, 0], "i8", v);
N.he = B([118, 111, 105, 100, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 40, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 73, 110, 112, 117, 116, 32, 42, 41, 0], "i8", v);
N.Na = B([102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 77, 101, 116, 114, 105, 99, 40, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.Ab = B([118, 111, 105, 100, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 87, 105, 116, 110, 101, 115, 115, 80, 111, 105, 110, 116, 115, 40, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 98, 50, 86, 101, 99, 50, 32, 42, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.i = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 46, 104, 0], "i8", v);
N.h = B([99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 58, 58, 71, 101, 116, 86, 101, 114, 116, 101, 120, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.j = B([48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 0], "i8", v);
N.Oe = B([98, 50, 86, 101, 99, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 83, 101, 97, 114, 99, 104, 68, 105, 114, 101, 99, 116, 105, 111, 110, 40, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.pa = B([98, 50, 86, 101, 99, 50, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 71, 101, 116, 67, 108, 111, 115, 101, 115, 116, 80, 111, 105, 110, 116, 40, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.Fe = B([118, 111, 105, 100, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 58, 58, 82, 101, 97, 100, 67, 97, 99, 104, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0], "i8", v);
N.gh = B([99, 97, 99, 104, 101, 45, 62, 99, 111, 117, 110, 116, 32, 60, 61, 32, 51, 0], "i8", v);
N.c = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 46, 99, 112, 112, 0], "i8", v);
N.ne = B([105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 78, 111, 100, 101, 40, 41, 0], "i8", v);
N.cf = B([109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 32, 61, 61, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0], "i8", v);
N.G = B([118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 70, 114, 101, 101, 78, 111, 100, 101, 40, 105, 110, 116, 51, 50, 41, 0], "i8", v);
N.$ = B([48, 32, 60, 61, 32, 110, 111, 100, 101, 73, 100, 32, 38, 38, 32, 110, 111, 100, 101, 73, 100, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0], "i8", v);
N.Ca = B([48, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 0], "i8", v);
N.lb = B([118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 68, 101, 115, 116, 114, 111, 121, 80, 114, 111, 120, 121, 40, 105, 110, 116, 51, 50, 41, 0], "i8", v);
N.Ub = B([109, 95, 110, 111, 100, 101, 115, 91, 112, 114, 111, 120, 121, 73, 100, 93, 46, 73, 115, 76, 101, 97, 102, 40, 41, 0], "i8", v);
N.mb = B([98, 111, 111, 108, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 77, 111, 118, 101, 80, 114, 111, 120, 121, 40, 105, 110, 116, 51, 50, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 65, 65, 66, 66, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 41, 0], "i8", v);
N.kb = B([118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 73, 110, 115, 101, 114, 116, 76, 101, 97, 102, 40, 105, 110, 116, 51, 50, 41, 0], "i8", v);
N.ph = B([99, 104, 105, 108, 100, 49, 32, 33, 61, 32, 40, 45, 49, 41, 0], "i8", v);
N.uh = B([99, 104, 105, 108, 100, 50, 32, 33, 61, 32, 40, 45, 49, 41, 0], "i8", v);
N.v = B([105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 66, 97, 108, 97, 110, 99, 101, 40, 105, 110, 116, 51, 50, 41, 0], "i8", v);
N.xh = B([105, 65, 32, 33, 61, 32, 40, 45, 49, 41, 0], "i8", v);
N.Dh = B([48, 32, 60, 61, 32, 105, 66, 32, 38, 38, 32, 105, 66, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0], "i8", v);
N.Re = B([48, 32, 60, 61, 32, 105, 67, 32, 38, 38, 32, 105, 67, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0], "i8", v);
N.Xe = B([48, 32, 60, 61, 32, 105, 70, 32, 38, 38, 32, 105, 70, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0], "i8", v);
N.ff = B([48, 32, 60, 61, 32, 105, 71, 32, 38, 38, 32, 105, 71, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0], "i8", v);
N.of = B([109, 95, 110, 111, 100, 101, 115, 91, 67, 45, 62, 112, 97, 114, 101, 110, 116, 93, 46, 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 105, 65, 0], "i8", v);
N.tf = B([48, 32, 60, 61, 32, 105, 68, 32, 38, 38, 32, 105, 68, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0], "i8", v);
N.wf = B([48, 32, 60, 61, 32, 105, 69, 32, 38, 38, 32, 105, 69, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0], "i8", v);
N.Cf = B([109, 95, 110, 111, 100, 101, 115, 91, 66, 45, 62, 112, 97, 114, 101, 110, 116, 93, 46, 99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 105, 65, 0], "i8", v);
N.Je = B([105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 67, 111, 109, 112, 117, 116, 101, 72, 101, 105, 103, 104, 116, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.O = B([118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 86, 97, 108, 105, 100, 97, 116, 101, 83, 116, 114, 117, 99, 116, 117, 114, 101, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.Jf = B([109, 95, 110, 111, 100, 101, 115, 91, 105, 110, 100, 101, 120, 93, 46, 112, 97, 114, 101, 110, 116, 32, 61, 61, 32, 40, 45, 49, 41, 0], "i8", v);
N.Ib = B([99, 104, 105, 108, 100, 50, 32, 61, 61, 32, 40, 45, 49, 41, 0], "i8", v);
N.Kb = B([110, 111, 100, 101, 45, 62, 104, 101, 105, 103, 104, 116, 32, 61, 61, 32, 48, 0], "i8", v);
N.Lb = B([48, 32, 60, 61, 32, 99, 104, 105, 108, 100, 49, 32, 38, 38, 32, 99, 104, 105, 108, 100, 49, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0], "i8", v);
N.Mb = B([48, 32, 60, 61, 32, 99, 104, 105, 108, 100, 50, 32, 38, 38, 32, 99, 104, 105, 108, 100, 50, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0], "i8", v);
N.ag = B([109, 95, 110, 111, 100, 101, 115, 91, 99, 104, 105, 108, 100, 49, 93, 46, 112, 97, 114, 101, 110, 116, 32, 61, 61, 32, 105, 110, 100, 101, 120, 0], "i8", v);
N.hg = B([109, 95, 110, 111, 100, 101, 115, 91, 99, 104, 105, 108, 100, 50, 93, 46, 112, 97, 114, 101, 110, 116, 32, 61, 61, 32, 105, 110, 100, 101, 120, 0], "i8", v);
N.N = B([118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 86, 97, 108, 105, 100, 97, 116, 101, 77, 101, 116, 114, 105, 99, 115, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.kg = B([110, 111, 100, 101, 45, 62, 104, 101, 105, 103, 104, 116, 32, 61, 61, 32, 104, 101, 105, 103, 104, 116, 0], "i8", v);
N.og = B([97, 97, 98, 98, 46, 108, 111, 119, 101, 114, 66, 111, 117, 110, 100, 32, 61, 61, 32, 110, 111, 100, 101, 45, 62, 97, 97, 98, 98, 46, 108, 111, 119, 101, 114, 66, 111, 117, 110, 100, 0], "i8", v);
N.sg = B([97, 97, 98, 98, 46, 117, 112, 112, 101, 114, 66, 111, 117, 110, 100, 32, 61, 61, 32, 110, 111, 100, 101, 45, 62, 97, 97, 98, 98, 46, 117, 112, 112, 101, 114, 66, 111, 117, 110, 100, 0], "i8", v);
N.Ma = B([118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 86, 97, 108, 105, 100, 97, 116, 101, 40, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.zg = B([48, 32, 60, 61, 32, 102, 114, 101, 101, 73, 110, 100, 101, 120, 32, 38, 38, 32, 102, 114, 101, 101, 73, 110, 100, 101, 120, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0], "i8", v);
N.Ag = B([71, 101, 116, 72, 101, 105, 103, 104, 116, 40, 41, 32, 61, 61, 32, 67, 111, 109, 112, 117, 116, 101, 72, 101, 105, 103, 104, 116, 40, 41, 0], "i8", v);
N.Cg = B([109, 95, 110, 111, 100, 101, 67, 111, 117, 110, 116, 32, 43, 32, 102, 114, 101, 101, 67, 111, 117, 110, 116, 32, 61, 61, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0], "i8", v);
N.La = B([105, 110, 116, 51, 50, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 77, 97, 120, 66, 97, 108, 97, 110, 99, 101, 40, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.Za = B([110, 111, 100, 101, 45, 62, 73, 115, 76, 101, 97, 102, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0], "i8", v);
Up = B(4, "i8", v);
Yp = B(4, "i8", v);
Zp = B(4, "i8", v);
Wp = B(4, "i8", v);
Xp = B(4, "i8", v);
N.Da = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 84, 105, 109, 101, 79, 102, 73, 109, 112, 97, 99, 116, 46, 99, 112, 112, 0], "i8", v);
N.ie = B([118, 111, 105, 100, 32, 98, 50, 84, 105, 109, 101, 79, 102, 73, 109, 112, 97, 99, 116, 40, 98, 50, 84, 79, 73, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 79, 73, 73, 110, 112, 117, 116, 32, 42, 41, 0], "i8", v);
N.rf = B([116, 97, 114, 103, 101, 116, 32, 62, 32, 116, 111, 108, 101, 114, 97, 110, 99, 101, 0], "i8", v);
N.Ne = B([102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 69, 118, 97, 108, 117, 97, 116, 101, 40, 105, 110, 116, 51, 50, 44, 32, 105, 110, 116, 51, 50, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.Me = B([102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 70, 105, 110, 100, 77, 105, 110, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 40, 105, 110, 116, 51, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 32, 42, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.se = B([102, 108, 111, 97, 116, 51, 50, 32, 98, 50, 83, 101, 112, 97, 114, 97, 116, 105, 111, 110, 70, 117, 110, 99, 116, 105, 111, 110, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 105, 109, 112, 108, 101, 120, 67, 97, 99, 104, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 83, 119, 101, 101, 112, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 80, 114, 111, 120, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 83, 119, 101, 101, 112, 32, 38, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0], "i8", v);
N.kh = B([48, 32, 60, 32, 99, 111, 117, 110, 116, 32, 38, 38, 32, 99, 111, 117, 110, 116, 32, 60, 32, 51, 0], "i8", v);
zy = B([0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 0, 0, 36, 0, 0, 0, 38, 0, 0, 0, 40, 0, 0, 0, 42, 0, 0, 0, 44, 0, 0, 0, 46, 0, 0, 0, 48, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.F = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 83, 104, 97, 112, 101, 115, 47, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 46, 99, 112, 112, 0], "i8", v);
N.jb = B([118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 67, 114, 101, 97, 116, 101, 76, 111, 111, 112, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0], "i8", v);
N.Ta = B([109, 95, 118, 101, 114, 116, 105, 99, 101, 115, 32, 61, 61, 32, 95, 95, 110, 117, 108, 108, 32, 38, 38, 32, 109, 95, 99, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0], "i8", v);
N.ea = B([118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 67, 114, 101, 97, 116, 101, 67, 104, 97, 105, 110, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0], "i8", v);
N.Qb = B([99, 111, 117, 110, 116, 32, 62, 61, 32, 50, 0], "i8", v);
N.He = B([118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 71, 101, 116, 67, 104, 105, 108, 100, 69, 100, 103, 101, 40, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.ah = B([48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 32, 45, 32, 49, 0], "i8", v);
N.Ie = B([118, 105, 114, 116, 117, 97, 108, 32, 98, 111, 111, 108, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 82, 97, 121, 67, 97, 115, 116, 40, 98, 50, 82, 97, 121, 67, 97, 115, 116, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 82, 97, 121, 67, 97, 115, 116, 73, 110, 112, 117, 116, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.Vb = B([99, 104, 105, 108, 100, 73, 110, 100, 101, 120, 32, 60, 32, 109, 95, 99, 111, 117, 110, 116, 0], "i8", v);
N.Ge = B([118, 105, 114, 116, 117, 97, 108, 32, 118, 111, 105, 100, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 58, 58, 67, 111, 109, 112, 117, 116, 101, 65, 65, 66, 66, 40, 98, 50, 65, 65, 66, 66, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.pc = B([49, 50, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 0], "i8", v);
N.Kc = B([55, 98, 50, 83, 104, 97, 112, 101, 0], "i8", v);
AM = B(8, "i8", v);
BM = B(12, "i8", v);
Xw = B([0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 52, 0, 0, 0, 54, 0, 0, 0, 56, 0, 0, 0, 58, 0, 0, 0, 60, 0, 0, 0, 62, 0, 0, 0, 64, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.sc = B([49, 51, 98, 50, 67, 105, 114, 99, 108, 101, 83, 104, 97, 112, 101, 0], "i8", v);
CM = B(12, "i8", v);
yF = B([0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 68, 0, 0, 0, 70, 0, 0, 0, 72, 0, 0, 0, 74, 0, 0, 0, 76, 0, 0, 0, 78, 0, 0, 0, 80, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.lc = B([49, 49, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 0], "i8", v);
DM = B(12, "i8", v);
N.P = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 83, 104, 97, 112, 101, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 46, 99, 112, 112, 0], "i8", v);
N.nb = B([118, 111, 105, 100, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 83, 101, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0], "i8", v);
N.zf = B([51, 32, 60, 61, 32, 99, 111, 117, 110, 116, 32, 38, 38, 32, 99, 111, 117, 110, 116, 32, 60, 61, 32, 56, 0], "i8", v);
N.ng = B([101, 100, 103, 101, 46, 76, 101, 110, 103, 116, 104, 83, 113, 117, 97, 114, 101, 100, 40, 41, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 32, 42, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0], "i8", v);
N.Le = B([118, 105, 114, 116, 117, 97, 108, 32, 98, 111, 111, 108, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 82, 97, 121, 67, 97, 115, 116, 40, 98, 50, 82, 97, 121, 67, 97, 115, 116, 79, 117, 116, 112, 117, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 82, 97, 121, 67, 97, 115, 116, 73, 110, 112, 117, 116, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.Rg = B([48, 46, 48, 102, 32, 60, 61, 32, 108, 111, 119, 101, 114, 32, 38, 38, 32, 108, 111, 119, 101, 114, 32, 60, 61, 32, 105, 110, 112, 117, 116, 46, 109, 97, 120, 70, 114, 97, 99, 116, 105, 111, 110, 0], "i8", v);
N.zb = B([118, 105, 114, 116, 117, 97, 108, 32, 118, 111, 105, 100, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 58, 58, 67, 111, 109, 112, 117, 116, 101, 77, 97, 115, 115, 40, 98, 50, 77, 97, 115, 115, 68, 97, 116, 97, 32, 42, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.bh = B([109, 95, 118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 32, 62, 61, 32, 51, 0], "i8", v);
N.Wb = B([97, 114, 101, 97, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0], "i8", v);
pF = B([0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 84, 0, 0, 0, 86, 0, 0, 0, 88, 0, 0, 0, 90, 0, 0, 0, 92, 0, 0, 0, 94, 0, 0, 0, 96, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.uc = B([49, 52, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 0], "i8", v);
EM = B(12, "i8", v);
N.hb = B([98, 50, 86, 101, 99, 50, 32, 67, 111, 109, 112, 117, 116, 101, 67, 101, 110, 116, 114, 111, 105, 100, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0], "i8", v);
N.Yb = B([99, 111, 117, 110, 116, 32, 62, 61, 32, 51, 0], "i8", v);
sn = B([16, 0, 0, 0, 32, 0, 0, 0, 64, 0, 0, 0, 96, 0, 0, 0, 128, 0, 0, 0, 160, 0, 0, 0, 192, 0, 0, 0, 224, 0, 0, 0, 256, 0, 0, 0, 320, 0, 0, 0, 384, 0, 0, 0, 448, 0, 0, 0, 512, 0, 0, 0, 640, 0, 0, 0], ["i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0], v);
rn = B(641, "i8", v);
xp = B(4, "i8", v);
N.e = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 46, 99, 112, 112, 0], "i8", v);
N.Ha = B([98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 40, 41, 0], "i8", v);
N.Ua = B([106, 32, 60, 32, 98, 50, 95, 98, 108, 111, 99, 107, 83, 105, 122, 101, 115, 0], "i8", v);
N.Ga = B([118, 111, 105, 100, 32, 42, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 40, 105, 110, 116, 51, 50, 41, 0], "i8", v);
N.Wa = B([48, 32, 60, 32, 115, 105, 122, 101, 0], "i8", v);
N.g = B([48, 32, 60, 61, 32, 105, 110, 100, 101, 120, 32, 38, 38, 32, 105, 110, 100, 101, 120, 32, 60, 32, 98, 50, 95, 98, 108, 111, 99, 107, 83, 105, 122, 101, 115, 0], "i8", v);
N.dh = B([98, 108, 111, 99, 107, 67, 111, 117, 110, 116, 32, 42, 32, 98, 108, 111, 99, 107, 83, 105, 122, 101, 32, 60, 61, 32, 98, 50, 95, 99, 104, 117, 110, 107, 83, 105, 122, 101, 0], "i8", v);
N.f = B([118, 111, 105, 100, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 70, 114, 101, 101, 40, 118, 111, 105, 100, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0], "i8", v);
FM = B([0, 0, 0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 100, 0, 0, 0, 102, 0, 0, 0, 102, 0, 0, 0, 102, 0, 0, 0, 102, 0, 0, 0, 102, 0, 0, 0, 102, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.Ic = B([54, 98, 50, 68, 114, 97, 119, 0], "i8", v);
GM = B(8, "i8", v);
Dj = B(8, "i8", v);
B([2, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0], ["i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0], v);
N.n = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 46, 99, 112, 112, 0], "i8", v);
N.R = B([98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 126, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 40, 41, 0], "i8", v);
N.Va = B([109, 95, 105, 110, 100, 101, 120, 32, 61, 61, 32, 48, 0], "i8", v);
N.Ya = B([109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0], "i8", v);
N.w = B([118, 111, 105, 100, 32, 42, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 65, 108, 108, 111, 99, 97, 116, 101, 40, 105, 110, 116, 51, 50, 41, 0], "i8", v);
N.D = B([109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 60, 32, 98, 50, 95, 109, 97, 120, 83, 116, 97, 99, 107, 69, 110, 116, 114, 105, 101, 115, 0], "i8", v);
N.qb = B([118, 111, 105, 100, 32, 98, 50, 83, 116, 97, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 58, 58, 70, 114, 101, 101, 40, 118, 111, 105, 100, 32, 42, 41, 0], "i8", v);
N.eh = B([109, 95, 101, 110, 116, 114, 121, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0], "i8", v);
N.lh = B([112, 32, 61, 61, 32, 101, 110, 116, 114, 121, 45, 62, 100, 97, 116, 97, 0], "i8", v);
N.k = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 66, 111, 100, 121, 46, 99, 112, 112, 0], "i8", v);
N.S = B([98, 50, 66, 111, 100, 121, 58, 58, 98, 50, 66, 111, 100, 121, 40, 99, 111, 110, 115, 116, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 42, 44, 32, 98, 50, 87, 111, 114, 108, 100, 32, 42, 41, 0], "i8", v);
N.Kf = B([98, 100, 45, 62, 112, 111, 115, 105, 116, 105, 111, 110, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0], "i8", v);
N.vg = B([98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0], "i8", v);
N.Sg = B([98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 108, 101, 41, 0], "i8", v);
N.fh = B([98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 41, 0], "i8", v);
N.mh = B([98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 41, 32, 38, 38, 32, 98, 100, 45, 62, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 62, 61, 32, 48, 46, 48, 102, 0], "i8", v);
N.th = B([98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 41, 32, 38, 38, 32, 98, 100, 45, 62, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 62, 61, 32, 48, 46, 48, 102, 0], "i8", v);
N.we = B([118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 83, 101, 116, 84, 121, 112, 101, 40, 98, 50, 66, 111, 100, 121, 84, 121, 112, 101, 41, 0], "i8", v);
N.W = B([109, 95, 119, 111, 114, 108, 100, 45, 62, 73, 115, 76, 111, 99, 107, 101, 100, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0], "i8", v);
N.ve = B([98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 98, 50, 66, 111, 100, 121, 58, 58, 67, 114, 101, 97, 116, 101, 70, 105, 120, 116, 117, 114, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 68, 101, 102, 32, 42, 41, 0], "i8", v);
N.na = B([118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 68, 101, 115, 116, 114, 111, 121, 70, 105, 120, 116, 117, 114, 101, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0], "i8", v);
N.Ch = B([102, 105, 120, 116, 117, 114, 101, 45, 62, 109, 95, 98, 111, 100, 121, 32, 61, 61, 32, 116, 104, 105, 115, 0], "i8", v);
N.Ih = B([109, 95, 102, 105, 120, 116, 117, 114, 101, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0], "i8", v);
N.We = B([102, 111, 117, 110, 100, 0], "i8", v);
N.sb = B([118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 82, 101, 115, 101, 116, 77, 97, 115, 115, 68, 97, 116, 97, 40, 41, 0], "i8", v);
N.ef = B([109, 95, 116, 121, 112, 101, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 0], "i8", v);
N.Eb = B([109, 95, 73, 32, 62, 32, 48, 46, 48, 102, 0], "i8", v);
N.rb = B([118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 83, 101, 116, 77, 97, 115, 115, 68, 97, 116, 97, 40, 99, 111, 110, 115, 116, 32, 98, 50, 77, 97, 115, 115, 68, 97, 116, 97, 32, 42, 41, 0], "i8", v);
N.ue = B([118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 83, 101, 116, 84, 114, 97, 110, 115, 102, 111, 114, 109, 40, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0], "i8", v);
N.xe = B([118, 111, 105, 100, 32, 98, 50, 66, 111, 100, 121, 58, 58, 83, 101, 116, 65, 99, 116, 105, 118, 101, 40, 98, 111, 111, 108, 41, 0], "i8", v);
N.vf = B([32, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 98, 100, 59, 10, 0], "i8", v);
N.Bf = B([32, 32, 98, 100, 46, 116, 121, 112, 101, 32, 61, 32, 98, 50, 66, 111, 100, 121, 84, 121, 112, 101, 40, 37, 100, 41, 59, 10, 0], "i8", v);
N.Ff = B([32, 32, 98, 100, 46, 112, 111, 115, 105, 116, 105, 111, 110, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0], "i8", v);
N.Lf = B([32, 32, 98, 100, 46, 97, 110, 103, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.Of = B([32, 32, 98, 100, 46, 108, 105, 110, 101, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0], "i8", v);
N.Qf = B([32, 32, 98, 100, 46, 97, 110, 103, 117, 108, 97, 114, 86, 101, 108, 111, 99, 105, 116, 121, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.Tf = B([32, 32, 98, 100, 46, 108, 105, 110, 101, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.Xf = B([32, 32, 98, 100, 46, 97, 110, 103, 117, 108, 97, 114, 68, 97, 109, 112, 105, 110, 103, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.Yf = B([32, 32, 98, 100, 46, 97, 108, 108, 111, 119, 83, 108, 101, 101, 112, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0], "i8", v);
N.cg = B([32, 32, 98, 100, 46, 97, 119, 97, 107, 101, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0], "i8", v);
N.ig = B([32, 32, 98, 100, 46, 102, 105, 120, 101, 100, 82, 111, 116, 97, 116, 105, 111, 110, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0], "i8", v);
N.lg = B([32, 32, 98, 100, 46, 98, 117, 108, 108, 101, 116, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0], "i8", v);
N.pg = B([32, 32, 98, 100, 46, 97, 99, 116, 105, 118, 101, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0], "i8", v);
N.tg = B([32, 32, 98, 100, 46, 103, 114, 97, 118, 105, 116, 121, 83, 99, 97, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.xg = B([32, 32, 98, 111, 100, 105, 101, 115, 91, 37, 100, 93, 32, 61, 32, 109, 95, 119, 111, 114, 108, 100, 45, 62, 67, 114, 101, 97, 116, 101, 66, 111, 100, 121, 40, 38, 98, 100, 41, 59, 10, 0], "i8", v);
N.Dg = B([32, 32, 123, 10, 0], "i8", v);
N.Fg = B([32, 32, 125, 10, 0], "i8", v);
yp = B(4, "i8", v);
zp = B(4, "i8", v);
N.T = B([118, 111, 105, 100, 32, 42, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 85, 115, 101, 114, 68, 97, 116, 97, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
N.o = B([48, 32, 60, 61, 32, 112, 114, 111, 120, 121, 73, 100, 32, 38, 38, 32, 112, 114, 111, 120, 121, 73, 100, 32, 60, 32, 109, 95, 110, 111, 100, 101, 67, 97, 112, 97, 99, 105, 116, 121, 0], "i8", v);
N.H = B([99, 111, 110, 115, 116, 32, 98, 50, 65, 65, 66, 66, 32, 38, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 71, 101, 116, 70, 97, 116, 65, 65, 66, 66, 40, 105, 110, 116, 51, 50, 41, 32, 99, 111, 110, 115, 116, 0], "i8", v);
zx = B([0, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 106, 0, 0, 0, 108, 0, 0, 0, 110, 0, 0, 0, 112, 0, 0, 0, 114, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.Cc = B([49, 55, 98, 50, 67, 111, 110, 116, 97, 99, 116, 76, 105, 115, 116, 101, 110, 101, 114, 0], "i8", v);
HM = B(8, "i8", v);
N.Qa = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 70, 105, 120, 116, 117, 114, 101, 46, 99, 112, 112, 0], "i8", v);
N.yb = B([118, 111, 105, 100, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0], "i8", v);
N.Bb = B([109, 95, 112, 114, 111, 120, 121, 67, 111, 117, 110, 116, 32, 61, 61, 32, 48, 0], "i8", v);
N.Ee = B([118, 111, 105, 100, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 58, 58, 67, 114, 101, 97, 116, 101, 80, 114, 111, 120, 105, 101, 115, 40, 98, 50, 66, 114, 111, 97, 100, 80, 104, 97, 115, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 41, 0], "i8", v);
N.Gg = B([32, 32, 32, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 68, 101, 102, 32, 102, 100, 59, 10, 0], "i8", v);
N.Vg = B([32, 32, 32, 32, 102, 100, 46, 102, 114, 105, 99, 116, 105, 111, 110, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.hh = B([32, 32, 32, 32, 102, 100, 46, 114, 101, 115, 116, 105, 116, 117, 116, 105, 111, 110, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.nh = B([32, 32, 32, 32, 102, 100, 46, 100, 101, 110, 115, 105, 116, 121, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.vh = B([32, 32, 32, 32, 102, 100, 46, 105, 115, 83, 101, 110, 115, 111, 114, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0], "i8", v);
N.yh = B([32, 32, 32, 32, 102, 100, 46, 102, 105, 108, 116, 101, 114, 46, 99, 97, 116, 101, 103, 111, 114, 121, 66, 105, 116, 115, 32, 61, 32, 117, 105, 110, 116, 49, 54, 40, 37, 100, 41, 59, 10, 0], "i8", v);
N.Eh = B([32, 32, 32, 32, 102, 100, 46, 102, 105, 108, 116, 101, 114, 46, 109, 97, 115, 107, 66, 105, 116, 115, 32, 61, 32, 117, 105, 110, 116, 49, 54, 40, 37, 100, 41, 59, 10, 0], "i8", v);
N.Se = B([32, 32, 32, 32, 102, 100, 46, 102, 105, 108, 116, 101, 114, 46, 103, 114, 111, 117, 112, 73, 110, 100, 101, 120, 32, 61, 32, 105, 110, 116, 49, 54, 40, 37, 100, 41, 59, 10, 0], "i8", v);
N.Ye = B([32, 32, 32, 32, 98, 50, 67, 105, 114, 99, 108, 101, 83, 104, 97, 112, 101, 32, 115, 104, 97, 112, 101, 59, 10, 0], "i8", v);
N.Cb = B([32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 114, 97, 100, 105, 117, 115, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.nf = B([32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 112, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0], "i8", v);
N.sf = B([32, 32, 32, 32, 98, 50, 69, 100, 103, 101, 83, 104, 97, 112, 101, 32, 115, 104, 97, 112, 101, 59, 10, 0], "i8", v);
N.xf = B([32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 118, 101, 114, 116, 101, 120, 48, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0], "i8", v);
N.Df = B([32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 118, 101, 114, 116, 101, 120, 49, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0], "i8", v);
N.Hf = B([32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 118, 101, 114, 116, 101, 120, 50, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0], "i8", v);
N.Mf = B([32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 118, 101, 114, 116, 101, 120, 51, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0], "i8", v);
N.Pf = B([32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 104, 97, 115, 86, 101, 114, 116, 101, 120, 48, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0], "i8", v);
N.Rf = B([32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 104, 97, 115, 86, 101, 114, 116, 101, 120, 51, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0], "i8", v);
N.Uf = B([32, 32, 32, 32, 98, 50, 80, 111, 108, 121, 103, 111, 110, 83, 104, 97, 112, 101, 32, 115, 104, 97, 112, 101, 59, 10, 0], "i8", v);
N.Nb = B([32, 32, 32, 32, 98, 50, 86, 101, 99, 50, 32, 118, 115, 91, 37, 100, 93, 59, 10, 0], "i8", v);
N.Ob = B([32, 32, 32, 32, 118, 115, 91, 37, 100, 93, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0], "i8", v);
N.jg = B([32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 83, 101, 116, 40, 118, 115, 44, 32, 37, 100, 41, 59, 10, 0], "i8", v);
N.mg = B([32, 32, 32, 32, 98, 50, 67, 104, 97, 105, 110, 83, 104, 97, 112, 101, 32, 115, 104, 97, 112, 101, 59, 10, 0], "i8", v);
N.qg = B([32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 67, 114, 101, 97, 116, 101, 67, 104, 97, 105, 110, 40, 118, 115, 44, 32, 37, 100, 41, 59, 10, 0], "i8", v);
N.ug = B([32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 112, 114, 101, 118, 86, 101, 114, 116, 101, 120, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0], "i8", v);
N.yg = B([32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 110, 101, 120, 116, 86, 101, 114, 116, 101, 120, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0], "i8", v);
N.Bg = B([32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 104, 97, 115, 80, 114, 101, 118, 86, 101, 114, 116, 101, 120, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0], "i8", v);
N.Eg = B([32, 32, 32, 32, 115, 104, 97, 112, 101, 46, 109, 95, 104, 97, 115, 78, 101, 120, 116, 86, 101, 114, 116, 101, 120, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0], "i8", v);
N.$a = B([10, 0], "i8", v);
N.Ig = B([32, 32, 32, 32, 102, 100, 46, 115, 104, 97, 112, 101, 32, 61, 32, 38, 115, 104, 97, 112, 101, 59, 10, 0], "i8", v);
N.Mg = B([32, 32, 32, 32, 98, 111, 100, 105, 101, 115, 91, 37, 100, 93, 45, 62, 67, 114, 101, 97, 116, 101, 70, 105, 120, 116, 117, 114, 101, 40, 38, 102, 100, 41, 59, 10, 0], "i8", v);
N.Hb = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 73, 115, 108, 97, 110, 100, 46, 99, 112, 112, 0], "i8", v);
N.wb = B([118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 83, 111, 108, 118, 101, 84, 79, 73, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 44, 32, 105, 110, 116, 51, 50, 44, 32, 105, 110, 116, 51, 50, 41, 0], "i8", v);
N.df = B([116, 111, 105, 73, 110, 100, 101, 120, 65, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 0], "i8", v);
N.Vf = B([116, 111, 105, 73, 110, 100, 101, 120, 66, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 0], "i8", v);
N.t = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 87, 111, 114, 108, 100, 46, 99, 112, 112, 0], "i8", v);
N.Ae = B([98, 50, 66, 111, 100, 121, 32, 42, 98, 50, 87, 111, 114, 108, 100, 58, 58, 67, 114, 101, 97, 116, 101, 66, 111, 100, 121, 40, 99, 111, 110, 115, 116, 32, 98, 50, 66, 111, 100, 121, 68, 101, 102, 32, 42, 41, 0], "i8", v);
N.qa = B([73, 115, 76, 111, 99, 107, 101, 100, 40, 41, 32, 61, 61, 32, 102, 97, 108, 115, 101, 0], "i8", v);
N.tb = B([118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 68, 101, 115, 116, 114, 111, 121, 66, 111, 100, 121, 40, 98, 50, 66, 111, 100, 121, 32, 42, 41, 0], "i8", v);
N.Wf = B([109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0], "i8", v);
N.Be = B([98, 50, 74, 111, 105, 110, 116, 32, 42, 98, 50, 87, 111, 114, 108, 100, 58, 58, 67, 114, 101, 97, 116, 101, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0], "i8", v);
N.ub = B([118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 68, 101, 115, 116, 114, 111, 121, 74, 111, 105, 110, 116, 40, 98, 50, 74, 111, 105, 110, 116, 32, 42, 41, 0], "i8", v);
N.Hg = B([109, 95, 106, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0], "i8", v);
N.Ia = B([118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 83, 111, 108, 118, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 41, 0], "i8", v);
N.Xg = B([98, 45, 62, 73, 115, 65, 99, 116, 105, 118, 101, 40, 41, 32, 61, 61, 32, 116, 114, 117, 101, 0], "i8", v);
N.Tb = B([115, 116, 97, 99, 107, 67, 111, 117, 110, 116, 32, 60, 32, 115, 116, 97, 99, 107, 83, 105, 122, 101, 0], "i8", v);
N.vb = B([118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 83, 111, 108, 118, 101, 84, 79, 73, 40, 99, 111, 110, 115, 116, 32, 98, 50, 84, 105, 109, 101, 83, 116, 101, 112, 32, 38, 41, 0], "i8", v);
N.oh = B([116, 121, 112, 101, 65, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 32, 124, 124, 32, 116, 121, 112, 101, 66, 32, 61, 61, 32, 98, 50, 95, 100, 121, 110, 97, 109, 105, 99, 66, 111, 100, 121, 0], "i8", v);
N.V = B([97, 108, 112, 104, 97, 48, 32, 60, 32, 49, 46, 48, 102, 0], "i8", v);
N.Ce = B([118, 111, 105, 100, 32, 98, 50, 87, 111, 114, 108, 100, 58, 58, 68, 114, 97, 119, 83, 104, 97, 112, 101, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 67, 111, 108, 111, 114, 32, 38, 41, 0], "i8", v);
N.zh = B([118, 101, 114, 116, 101, 120, 67, 111, 117, 110, 116, 32, 60, 61, 32, 56, 0], "i8", v);
N.Fh = B([98, 50, 86, 101, 99, 50, 32, 103, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0], "i8", v);
N.Te = B([109, 95, 119, 111, 114, 108, 100, 45, 62, 83, 101, 116, 71, 114, 97, 118, 105, 116, 121, 40, 103, 41, 59, 10, 0], "i8", v);
N.Ze = B([98, 50, 66, 111, 100, 121, 42, 42, 32, 98, 111, 100, 105, 101, 115, 32, 61, 32, 40, 98, 50, 66, 111, 100, 121, 42, 42, 41, 98, 50, 65, 108, 108, 111, 99, 40, 37, 100, 32, 42, 32, 115, 105, 122, 101, 111, 102, 40, 98, 50, 66, 111, 100, 121, 42, 41, 41, 59, 10, 0], "i8", v);
N.hf = B([98, 50, 74, 111, 105, 110, 116, 42, 42, 32, 106, 111, 105, 110, 116, 115, 32, 61, 32, 40, 98, 50, 74, 111, 105, 110, 116, 42, 42, 41, 98, 50, 65, 108, 108, 111, 99, 40, 37, 100, 32, 42, 32, 115, 105, 122, 101, 111, 102, 40, 98, 50, 74, 111, 105, 110, 116, 42, 41, 41, 59, 10, 0], "i8", v);
N.Ra = B([123, 10, 0], "i8", v);
N.Sa = B([125, 10, 0], "i8", v);
N.yf = B([98, 50, 70, 114, 101, 101, 40, 106, 111, 105, 110, 116, 115, 41, 59, 10, 0], "i8", v);
N.Ef = B([98, 50, 70, 114, 101, 101, 40, 98, 111, 100, 105, 101, 115, 41, 59, 10, 0], "i8", v);
N.If = B([106, 111, 105, 110, 116, 115, 32, 61, 32, 78, 85, 76, 76, 59, 10, 0], "i8", v);
N.Nf = B([98, 111, 100, 105, 101, 115, 32, 61, 32, 78, 85, 76, 76, 59, 10, 0], "i8", v);
N.q = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 108, 108, 105, 115, 105, 111, 110, 47, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 46, 104, 0], "i8", v);
N.Ke = B([118, 111, 105, 100, 32, 98, 50, 68, 121, 110, 97, 109, 105, 99, 84, 114, 101, 101, 58, 58, 82, 97, 121, 67, 97, 115, 116, 40, 84, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 82, 97, 121, 67, 97, 115, 116, 73, 110, 112, 117, 116, 32, 38, 41, 32, 99, 111, 110, 115, 116, 32, 91, 84, 32, 61, 32, 98, 50, 87, 111, 114, 108, 100, 82, 97, 121, 67, 97, 115, 116, 87, 114, 97, 112, 112, 101, 114, 93, 0], "i8", v);
N.Sf = B([114, 46, 76, 101, 110, 103, 116, 104, 83, 113, 117, 97, 114, 101, 100, 40, 41, 32, 62, 32, 48, 46, 48, 102, 0], "i8", v);
N.ca = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 67, 111, 109, 109, 111, 110, 47, 98, 50, 77, 97, 116, 104, 46, 104, 0], "i8", v);
N.Z = B([118, 111, 105, 100, 32, 98, 50, 83, 119, 101, 101, 112, 58, 58, 65, 100, 118, 97, 110, 99, 101, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0], "i8", v);
N.J = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 98, 50, 73, 115, 108, 97, 110, 100, 46, 104, 0], "i8", v);
N.De = B([118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 74, 111, 105, 110, 116, 32, 42, 41, 0], "i8", v);
N.rg = B([109, 95, 106, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 106, 111, 105, 110, 116, 67, 97, 112, 97, 99, 105, 116, 121, 0], "i8", v);
N.Ja = B([118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 41, 0], "i8", v);
N.Xa = B([109, 95, 99, 111, 110, 116, 97, 99, 116, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 99, 111, 110, 116, 97, 99, 116, 67, 97, 112, 97, 99, 105, 116, 121, 0], "i8", v);
N.oa = B([118, 111, 105, 100, 32, 98, 50, 73, 115, 108, 97, 110, 100, 58, 58, 65, 100, 100, 40, 98, 50, 66, 111, 100, 121, 32, 42, 41, 0], "i8", v);
N.Ba = B([109, 95, 98, 111, 100, 121, 67, 111, 117, 110, 116, 32, 60, 32, 109, 95, 98, 111, 100, 121, 67, 97, 112, 97, 99, 105, 116, 121, 0], "i8", v);
IM = B([0, 0, 0, 0, 0, 0, 0, 0, 116, 0, 0, 0, 118, 0, 0, 0, 120, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.wc = B([49, 53, 98, 50, 67, 111, 110, 116, 97, 99, 116, 70, 105, 108, 116, 101, 114, 0], "i8", v);
JM = B(8, "i8", v);
KM = B([0, 0, 0, 0, 0, 0, 0, 0, 122, 0, 0, 0, 124, 0, 0, 0, 126, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.ua = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0], "i8", v);
N.ja = B([98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0], "i8", v);
N.Ec = B([50, 51, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0], "i8", v);
N.Lc = B([57, 98, 50, 67, 111, 110, 116, 97, 99, 116, 0], "i8", v);
LM = B(8, "i8", v);
MM = B(12, "i8", v);
NM = B([0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 130, 0, 0, 0, 132, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.va = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0], "i8", v);
N.la = B([98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 41, 0], "i8", v);
N.ra = B([109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 104, 97, 105, 110, 0], "i8", v);
N.Gc = B([50, 52, 98, 50, 67, 104, 97, 105, 110, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0], "i8", v);
OM = B(12, "i8", v);
PM = B([0, 0, 0, 0, 0, 0, 0, 0, 134, 0, 0, 0, 136, 0, 0, 0, 138, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.wa = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0], "i8", v);
N.ga = B([98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0], "i8", v);
N.Db = B([109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 105, 114, 99, 108, 101, 0], "i8", v);
N.vc = B([49, 53, 98, 50, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0], "i8", v);
QM = B(12, "i8", v);
op = B(192, "i8", v);
np = B(4, "i8", v);
N.aa = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0], "i8", v);
N.Xh = B([115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 65, 100, 100, 84, 121, 112, 101, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 67, 114, 101, 97, 116, 101, 70, 99, 110, 32, 42, 44, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 68, 101, 115, 116, 114, 111, 121, 70, 99, 110, 32, 42, 44, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 84, 121, 112, 101, 44, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 84, 121, 112, 101, 41, 0], "i8", v);
N.gf = B([48, 32, 60, 61, 32, 116, 121, 112, 101, 49, 32, 38, 38, 32, 116, 121, 112, 101, 49, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0], "i8", v);
N.Zf = B([48, 32, 60, 61, 32, 116, 121, 112, 101, 50, 32, 38, 38, 32, 116, 121, 112, 101, 50, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0], "i8", v);
N.xb = B([115, 116, 97, 116, 105, 99, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 67, 114, 101, 97, 116, 101, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 105, 110, 116, 51, 50, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0], "i8", v);
N.Ka = B([115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 32, 42, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0], "i8", v);
N.Jg = B([115, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 61, 61, 32, 116, 114, 117, 101, 0], "i8", v);
N.Sb = B([48, 32, 60, 61, 32, 116, 121, 112, 101, 65, 32, 38, 38, 32, 116, 121, 112, 101, 66, 32, 60, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 116, 121, 112, 101, 67, 111, 117, 110, 116, 0], "i8", v);
RM = B([0, 0, 0, 0, 0, 0, 0, 0, 102, 0, 0, 0, 140, 0, 0, 0, 142, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.ba = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 46, 99, 112, 112, 0], "i8", v);
N.qe = B([98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 68, 101, 102, 32, 42, 41, 0], "i8", v);
N.jf = B([112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0], "i8", v);
N.pe = B([118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 41, 0], "i8", v);
N.$f = B([109, 97, 110, 105, 102, 111, 108, 100, 45, 62, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0], "i8", v);
N.ob = B([118, 111, 105, 100, 32, 98, 50, 67, 111, 110, 116, 97, 99, 116, 83, 111, 108, 118, 101, 114, 58, 58, 83, 111, 108, 118, 101, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 41, 0], "i8", v);
N.Kg = B([112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 61, 61, 32, 49, 32, 124, 124, 32, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 61, 61, 32, 50, 0], "i8", v);
N.Yg = B([97, 46, 120, 32, 62, 61, 32, 48, 46, 48, 102, 32, 38, 38, 32, 97, 46, 121, 32, 62, 61, 32, 48, 46, 48, 102, 0], "i8", v);
N.te = B([118, 111, 105, 100, 32, 98, 50, 80, 111, 115, 105, 116, 105, 111, 110, 83, 111, 108, 118, 101, 114, 77, 97, 110, 105, 102, 111, 108, 100, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 98, 50, 67, 111, 110, 116, 97, 99, 116, 80, 111, 115, 105, 116, 105, 111, 110, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 84, 114, 97, 110, 115, 102, 111, 114, 109, 32, 38, 44, 32, 105, 110, 116, 51, 50, 41, 0], "i8", v);
N.ih = B([112, 99, 45, 62, 112, 111, 105, 110, 116, 67, 111, 117, 110, 116, 32, 62, 32, 48, 0], "i8", v);
SM = B([0, 0, 0, 0, 0, 0, 0, 0, 144, 0, 0, 0, 146, 0, 0, 0, 148, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.xa = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0], "i8", v);
N.ia = B([98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0], "i8", v);
N.Dc = B([50, 50, 98, 50, 69, 100, 103, 101, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0], "i8", v);
TM = B(12, "i8", v);
UM = B([0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0, 0, 152, 0, 0, 0, 154, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.ya = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0], "i8", v);
N.ka = B([98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0], "i8", v);
N.sa = B([109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 101, 100, 103, 101, 0], "i8", v);
N.Fc = B([50, 51, 98, 50, 69, 100, 103, 101, 65, 110, 100, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0], "i8", v);
VM = B(12, "i8", v);
WM = B([0, 0, 0, 0, 0, 0, 0, 0, 156, 0, 0, 0, 158, 0, 0, 0, 160, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.za = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0], "i8", v);
N.ma = B([98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0], "i8", v);
N.I = B([109, 95, 102, 105, 120, 116, 117, 114, 101, 66, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 99, 105, 114, 99, 108, 101, 0], "i8", v);
N.Hc = B([50, 53, 98, 50, 80, 111, 108, 121, 103, 111, 110, 65, 110, 100, 67, 105, 114, 99, 108, 101, 67, 111, 110, 116, 97, 99, 116, 0], "i8", v);
XM = B(12, "i8", v);
YM = B([0, 0, 0, 0, 0, 0, 0, 0, 162, 0, 0, 0, 164, 0, 0, 0, 166, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.Aa = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 67, 111, 110, 116, 97, 99, 116, 115, 47, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 46, 99, 112, 112, 0], "i8", v);
N.ha = B([98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 58, 58, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 40, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 44, 32, 98, 50, 70, 105, 120, 116, 117, 114, 101, 32, 42, 41, 0], "i8", v);
N.ta = B([109, 95, 102, 105, 120, 116, 117, 114, 101, 65, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 112, 111, 108, 121, 103, 111, 110, 0], "i8", v);
N.U = B([109, 95, 102, 105, 120, 116, 117, 114, 101, 66, 45, 62, 71, 101, 116, 84, 121, 112, 101, 40, 41, 32, 61, 61, 32, 98, 50, 83, 104, 97, 112, 101, 58, 58, 101, 95, 112, 111, 108, 121, 103, 111, 110, 0], "i8", v);
N.Ac = B([49, 54, 98, 50, 80, 111, 108, 121, 103, 111, 110, 67, 111, 110, 116, 97, 99, 116, 0], "i8", v);
ZM = B(12, "i8", v);
Fp = B([0, 0, 0, 0, 0, 0, 0, 0, 168, 0, 0, 0, 170, 0, 0, 0, 172, 0, 0, 0, 174, 0, 0, 0, 176, 0, 0, 0, 178, 0, 0, 0, 180, 0, 0, 0, 182, 0, 0, 0, 184, 0, 0, 0, 186, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.wg = B([32, 32, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0], "i8", v);
N.qh = B([32, 32, 106, 100, 46, 108, 101, 110, 103, 116, 104, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.xc = B([49, 53, 98, 50, 68, 105, 115, 116, 97, 110, 99, 101, 74, 111, 105, 110, 116, 0], "i8", v);
N.Jc = B([55, 98, 50, 74, 111, 105, 110, 116, 0], "i8", v);
$M = B(8, "i8", v);
aN = B(12, "i8", v);
Np = B([0, 0, 0, 0, 0, 0, 0, 0, 188, 0, 0, 0, 190, 0, 0, 0, 192, 0, 0, 0, 194, 0, 0, 0, 196, 0, 0, 0, 198, 0, 0, 0, 200, 0, 0, 0, 202, 0, 0, 0, 204, 0, 0, 0, 206, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.di = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0], "i8", v);
N.Sh = B([118, 111, 105, 100, 32, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 77, 97, 120, 70, 111, 114, 99, 101, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0], "i8", v);
N.Yh = B([98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 102, 111, 114, 99, 101, 41, 32, 38, 38, 32, 102, 111, 114, 99, 101, 32, 62, 61, 32, 48, 46, 48, 102, 0], "i8", v);
N.Th = B([118, 111, 105, 100, 32, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 77, 97, 120, 84, 111, 114, 113, 117, 101, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0], "i8", v);
N.bi = B([98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 116, 111, 114, 113, 117, 101, 41, 32, 38, 38, 32, 116, 111, 114, 113, 117, 101, 32, 62, 61, 32, 48, 46, 48, 102, 0], "i8", v);
N.Lg = B([32, 32, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0], "i8", v);
N.Gh = B([32, 32, 106, 100, 46, 109, 97, 120, 70, 111, 114, 99, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.Ue = B([32, 32, 106, 100, 46, 109, 97, 120, 84, 111, 114, 113, 117, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.yc = B([49, 53, 98, 50, 70, 114, 105, 99, 116, 105, 111, 110, 74, 111, 105, 110, 116, 0], "i8", v);
bN = B(12, "i8", v);
cq = B([0, 0, 0, 0, 0, 0, 0, 0, 208, 0, 0, 0, 210, 0, 0, 0, 212, 0, 0, 0, 214, 0, 0, 0, 216, 0, 0, 0, 218, 0, 0, 0, 220, 0, 0, 0, 222, 0, 0, 0, 224, 0, 0, 0, 226, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.Pb = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0], "i8", v);
N.ib = B([98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 58, 58, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0], "i8", v);
N.mf = B([109, 95, 116, 121, 112, 101, 65, 32, 61, 61, 32, 101, 95, 114, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 32, 124, 124, 32, 109, 95, 116, 121, 112, 101, 65, 32, 61, 61, 32, 101, 95, 112, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 0], "i8", v);
N.bg = B([109, 95, 116, 121, 112, 101, 66, 32, 61, 61, 32, 101, 95, 114, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 32, 124, 124, 32, 109, 95, 116, 121, 112, 101, 66, 32, 61, 61, 32, 101, 95, 112, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 0], "i8", v);
N.Rh = B([118, 111, 105, 100, 32, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 82, 97, 116, 105, 111, 40, 102, 108, 111, 97, 116, 51, 50, 41, 0], "i8", v);
N.ei = B([98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 114, 97, 116, 105, 111, 41, 0], "i8", v);
N.Zg = B([32, 32, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0], "i8", v);
N.Ah = B([32, 32, 106, 100, 46, 106, 111, 105, 110, 116, 49, 32, 61, 32, 106, 111, 105, 110, 116, 115, 91, 37, 100, 93, 59, 10, 0], "i8", v);
N.Hh = B([32, 32, 106, 100, 46, 106, 111, 105, 110, 116, 50, 32, 61, 32, 106, 111, 105, 110, 116, 115, 91, 37, 100, 93, 59, 10, 0], "i8", v);
N.mc = B([49, 49, 98, 50, 71, 101, 97, 114, 74, 111, 105, 110, 116, 0], "i8", v);
cN = B(12, "i8", v);
N.m = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0], "i8", v);
N.ye = B([115, 116, 97, 116, 105, 99, 32, 98, 50, 74, 111, 105, 110, 116, 32, 42, 98, 50, 74, 111, 105, 110, 116, 58, 58, 67, 114, 101, 97, 116, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0], "i8", v);
N.l = B([102, 97, 108, 115, 101, 0], "i8", v);
N.ze = B([115, 116, 97, 116, 105, 99, 32, 118, 111, 105, 100, 32, 98, 50, 74, 111, 105, 110, 116, 58, 58, 68, 101, 115, 116, 114, 111, 121, 40, 98, 50, 74, 111, 105, 110, 116, 32, 42, 44, 32, 98, 50, 66, 108, 111, 99, 107, 65, 108, 108, 111, 99, 97, 116, 111, 114, 32, 42, 41, 0], "i8", v);
Ep = B([0, 0, 0, 0, 0, 0, 0, 0, 102, 0, 0, 0, 102, 0, 0, 0, 102, 0, 0, 0, 102, 0, 0, 0, 228, 0, 0, 0, 230, 0, 0, 0, 232, 0, 0, 0, 102, 0, 0, 0, 102, 0, 0, 0, 102, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.p = B([98, 50, 74, 111, 105, 110, 116, 58, 58, 98, 50, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0], "i8", v);
N.r = B([100, 101, 102, 45, 62, 98, 111, 100, 121, 65, 32, 33, 61, 32, 100, 101, 102, 45, 62, 98, 111, 100, 121, 66, 0], "i8", v);
N.Ng = B([47, 47, 32, 68, 117, 109, 112, 32, 105, 115, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 102, 111, 114, 32, 116, 104, 105, 115, 32, 106, 111, 105, 110, 116, 32, 116, 121, 112, 101, 46, 10, 0], "i8", v);
dq = B([0, 0, 0, 0, 0, 0, 0, 0, 234, 0, 0, 0, 236, 0, 0, 0, 238, 0, 0, 0, 240, 0, 0, 0, 242, 0, 0, 0, 244, 0, 0, 0, 246, 0, 0, 0, 248, 0, 0, 0, 250, 0, 0, 0, 252, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.da = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0], "i8", v);
N.fa = B([98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 58, 58, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0], "i8", v);
N.pf = B([100, 101, 102, 45, 62, 116, 97, 114, 103, 101, 116, 46, 73, 115, 86, 97, 108, 105, 100, 40, 41, 0], "i8", v);
N.dg = B([98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 100, 101, 102, 45, 62, 109, 97, 120, 70, 111, 114, 99, 101, 41, 32, 38, 38, 32, 100, 101, 102, 45, 62, 109, 97, 120, 70, 111, 114, 99, 101, 32, 62, 61, 32, 48, 46, 48, 102, 0], "i8", v);
N.Og = B([98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 100, 101, 102, 45, 62, 102, 114, 101, 113, 117, 101, 110, 99, 121, 72, 122, 41, 32, 38, 38, 32, 100, 101, 102, 45, 62, 102, 114, 101, 113, 117, 101, 110, 99, 121, 72, 122, 32, 62, 61, 32, 48, 46, 48, 102, 0], "i8", v);
N.$g = B([98, 50, 73, 115, 86, 97, 108, 105, 100, 40, 100, 101, 102, 45, 62, 100, 97, 109, 112, 105, 110, 103, 82, 97, 116, 105, 111, 41, 32, 38, 38, 32, 100, 101, 102, 45, 62, 100, 97, 109, 112, 105, 110, 103, 82, 97, 116, 105, 111, 32, 62, 61, 32, 48, 46, 48, 102, 0], "i8", v);
N.me = B([118, 105, 114, 116, 117, 97, 108, 32, 118, 111, 105, 100, 32, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 58, 58, 73, 110, 105, 116, 86, 101, 108, 111, 99, 105, 116, 121, 67, 111, 110, 115, 116, 114, 97, 105, 110, 116, 115, 40, 99, 111, 110, 115, 116, 32, 98, 50, 83, 111, 108, 118, 101, 114, 68, 97, 116, 97, 32, 38, 41, 0], "i8", v);
N.jh = B([100, 32, 43, 32, 104, 32, 42, 32, 107, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0], "i8", v);
N.qc = B([49, 50, 98, 50, 77, 111, 117, 115, 101, 74, 111, 105, 110, 116, 0], "i8", v);
dN = B(12, "i8", v);
N.rh = B([77, 111, 117, 115, 101, 32, 106, 111, 105, 110, 116, 32, 100, 117, 109, 112, 105, 110, 103, 32, 105, 115, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 46, 10, 0], "i8", v);
eq = B([0, 0, 0, 0, 0, 0, 0, 0, 254, 0, 0, 0, 256, 0, 0, 0, 258, 0, 0, 0, 260, 0, 0, 0, 262, 0, 0, 0, 264, 0, 0, 0, 266, 0, 0, 0, 268, 0, 0, 0, 270, 0, 0, 0, 272, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.fi = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 80, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0], "i8", v);
N.Vh = B([118, 111, 105, 100, 32, 98, 50, 80, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 76, 105, 109, 105, 116, 115, 40, 102, 108, 111, 97, 116, 51, 50, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0], "i8", v);
N.eg = B([32, 32, 98, 50, 80, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0], "i8", v);
N.$e = B([32, 32, 106, 100, 46, 108, 111, 119, 101, 114, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.kf = B([32, 32, 106, 100, 46, 117, 112, 112, 101, 114, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.Af = B([32, 32, 106, 100, 46, 109, 97, 120, 77, 111, 116, 111, 114, 70, 111, 114, 99, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.Bc = B([49, 54, 98, 50, 80, 114, 105, 115, 109, 97, 116, 105, 99, 74, 111, 105, 110, 116, 0], "i8", v);
eN = B(12, "i8", v);
N.Rb = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0], "i8", v);
N.re = B([118, 111, 105, 100, 32, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 68, 101, 102, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 98, 50, 66, 111, 100, 121, 32, 42, 44, 32, 98, 50, 66, 111, 100, 121, 32, 42, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 99, 111, 110, 115, 116, 32, 98, 50, 86, 101, 99, 50, 32, 38, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0], "i8", v);
N.qf = B([114, 97, 116, 105, 111, 32, 62, 32, 49, 46, 49, 57, 50, 48, 57, 50, 57, 48, 69, 45, 48, 55, 70, 0], "i8", v);
gq = B([0, 0, 0, 0, 0, 0, 0, 0, 274, 0, 0, 0, 276, 0, 0, 0, 278, 0, 0, 0, 280, 0, 0, 0, 282, 0, 0, 0, 284, 0, 0, 0, 286, 0, 0, 0, 288, 0, 0, 0, 290, 0, 0, 0, 292, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.oe = B([98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 58, 58, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 40, 99, 111, 110, 115, 116, 32, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 68, 101, 102, 32, 42, 41, 0], "i8", v);
N.fg = B([100, 101, 102, 45, 62, 114, 97, 116, 105, 111, 32, 33, 61, 32, 48, 46, 48, 102, 0], "i8", v);
N.Pg = B([32, 32, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0], "i8", v);
N.wh = B([32, 32, 106, 100, 46, 103, 114, 111, 117, 110, 100, 65, 110, 99, 104, 111, 114, 65, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0], "i8", v);
N.Bh = B([32, 32, 106, 100, 46, 103, 114, 111, 117, 110, 100, 65, 110, 99, 104, 111, 114, 66, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0], "i8", v);
N.af = B([32, 32, 106, 100, 46, 108, 101, 110, 103, 116, 104, 65, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.lf = B([32, 32, 106, 100, 46, 108, 101, 110, 103, 116, 104, 66, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.Gb = B([32, 32, 106, 100, 46, 114, 97, 116, 105, 111, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.tc = B([49, 51, 98, 50, 80, 117, 108, 108, 101, 121, 74, 111, 105, 110, 116, 0], "i8", v);
fN = B(12, "i8", v);
Ip = B([0, 0, 0, 0, 0, 0, 0, 0, 294, 0, 0, 0, 296, 0, 0, 0, 298, 0, 0, 0, 300, 0, 0, 0, 302, 0, 0, 0, 304, 0, 0, 0, 306, 0, 0, 0, 308, 0, 0, 0, 310, 0, 0, 0, 312, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.hi = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 68, 121, 110, 97, 109, 105, 99, 115, 47, 74, 111, 105, 110, 116, 115, 47, 98, 50, 82, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 46, 99, 112, 112, 0], "i8", v);
N.Uh = B([118, 111, 105, 100, 32, 98, 50, 82, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 58, 58, 83, 101, 116, 76, 105, 109, 105, 116, 115, 40, 102, 108, 111, 97, 116, 51, 50, 44, 32, 102, 108, 111, 97, 116, 51, 50, 41, 0], "i8", v);
N.$h = B([108, 111, 119, 101, 114, 32, 60, 61, 32, 117, 112, 112, 101, 114, 0], "i8", v);
N.gg = B([32, 32, 98, 50, 82, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0], "i8", v);
N.Zb = B([32, 32, 106, 100, 46, 101, 110, 97, 98, 108, 101, 76, 105, 109, 105, 116, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0], "i8", v);
N.Ve = B([32, 32, 106, 100, 46, 108, 111, 119, 101, 114, 65, 110, 103, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.bf = B([32, 32, 106, 100, 46, 117, 112, 112, 101, 114, 65, 110, 103, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.zc = B([49, 53, 98, 50, 82, 101, 118, 111, 108, 117, 116, 101, 74, 111, 105, 110, 116, 0], "i8", v);
gN = B(12, "i8", v);
Op = B([0, 0, 0, 0, 0, 0, 0, 0, 314, 0, 0, 0, 316, 0, 0, 0, 318, 0, 0, 0, 320, 0, 0, 0, 322, 0, 0, 0, 324, 0, 0, 0, 326, 0, 0, 0, 328, 0, 0, 0, 330, 0, 0, 0, 332, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.Tg = B([32, 32, 98, 50, 82, 111, 112, 101, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0], "i8", v);
N.sh = B([32, 32, 106, 100, 46, 109, 97, 120, 76, 101, 110, 103, 116, 104, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.nc = B([49, 49, 98, 50, 82, 111, 112, 101, 74, 111, 105, 110, 116, 0], "i8", v);
hN = B(12, "i8", v);
Mp = B([0, 0, 0, 0, 0, 0, 0, 0, 334, 0, 0, 0, 336, 0, 0, 0, 338, 0, 0, 0, 340, 0, 0, 0, 342, 0, 0, 0, 344, 0, 0, 0, 346, 0, 0, 0, 348, 0, 0, 0, 350, 0, 0, 0, 352, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.Ug = B([32, 32, 98, 50, 87, 101, 108, 100, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0], "i8", v);
N.ab = B([32, 32, 106, 100, 46, 114, 101, 102, 101, 114, 101, 110, 99, 101, 65, 110, 103, 108, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.oc = B([49, 49, 98, 50, 87, 101, 108, 100, 74, 111, 105, 110, 116, 0], "i8", v);
iN = B(12, "i8", v);
hq = B([0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 0, 0, 356, 0, 0, 0, 358, 0, 0, 0, 360, 0, 0, 0, 362, 0, 0, 0, 364, 0, 0, 0, 366, 0, 0, 0, 368, 0, 0, 0, 370, 0, 0, 0, 372, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.Wg = B([32, 32, 98, 50, 87, 104, 101, 101, 108, 74, 111, 105, 110, 116, 68, 101, 102, 32, 106, 100, 59, 10, 0], "i8", v);
N.A = B([32, 32, 106, 100, 46, 98, 111, 100, 121, 65, 32, 61, 32, 98, 111, 100, 105, 101, 115, 91, 37, 100, 93, 59, 10, 0], "i8", v);
N.B = B([32, 32, 106, 100, 46, 98, 111, 100, 121, 66, 32, 61, 32, 98, 111, 100, 105, 101, 115, 91, 37, 100, 93, 59, 10, 0], "i8", v);
N.C = B([32, 32, 106, 100, 46, 99, 111, 108, 108, 105, 100, 101, 67, 111, 110, 110, 101, 99, 116, 101, 100, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0], "i8", v);
N.K = B([32, 32, 106, 100, 46, 108, 111, 99, 97, 108, 65, 110, 99, 104, 111, 114, 65, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0], "i8", v);
N.L = B([32, 32, 106, 100, 46, 108, 111, 99, 97, 108, 65, 110, 99, 104, 111, 114, 66, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0], "i8", v);
N.Xb = B([32, 32, 106, 100, 46, 108, 111, 99, 97, 108, 65, 120, 105, 115, 65, 46, 83, 101, 116, 40, 37, 46, 49, 53, 108, 101, 102, 44, 32, 37, 46, 49, 53, 108, 101, 102, 41, 59, 10, 0], "i8", v);
N.bb = B([32, 32, 106, 100, 46, 101, 110, 97, 98, 108, 101, 77, 111, 116, 111, 114, 32, 61, 32, 98, 111, 111, 108, 40, 37, 100, 41, 59, 10, 0], "i8", v);
N.cb = B([32, 32, 106, 100, 46, 109, 111, 116, 111, 114, 83, 112, 101, 101, 100, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.$b = B([32, 32, 106, 100, 46, 109, 97, 120, 77, 111, 116, 111, 114, 84, 111, 114, 113, 117, 101, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.Oa = B([32, 32, 106, 100, 46, 102, 114, 101, 113, 117, 101, 110, 99, 121, 72, 122, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.Pa = B([32, 32, 106, 100, 46, 100, 97, 109, 112, 105, 110, 103, 82, 97, 116, 105, 111, 32, 61, 32, 37, 46, 49, 53, 108, 101, 102, 59, 10, 0], "i8", v);
N.z = B([32, 32, 106, 111, 105, 110, 116, 115, 91, 37, 100, 93, 32, 61, 32, 109, 95, 119, 111, 114, 108, 100, 45, 62, 67, 114, 101, 97, 116, 101, 74, 111, 105, 110, 116, 40, 38, 106, 100, 41, 59, 10, 0], "i8", v);
N.rc = B([49, 50, 98, 50, 87, 104, 101, 101, 108, 74, 111, 105, 110, 116, 0], "i8", v);
jN = B(12, "i8", v);
N.ii = B([66, 111, 120, 50, 68, 95, 118, 50, 46, 50, 46, 49, 47, 66, 111, 120, 50, 68, 47, 82, 111, 112, 101, 47, 98, 50, 82, 111, 112, 101, 46, 99, 112, 112, 0], "i8", v);
N.Wh = B([118, 111, 105, 100, 32, 98, 50, 82, 111, 112, 101, 58, 58, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 40, 99, 111, 110, 115, 116, 32, 98, 50, 82, 111, 112, 101, 68, 101, 102, 32, 42, 41, 0], "i8", v);
N.ai = B([100, 101, 102, 45, 62, 99, 111, 117, 110, 116, 32, 62, 61, 32, 51, 0], "i8", v);
Mv = B(8, "i8", v);
nu = B(8, "i8", v);
gx = B(8, "i8", v);
fx = B(8, "i8", v);
kx = B(8, "i8", v);
jx = B(8, "i8", v);
nx = B(8, "i8", v);
mx = B(8, "i8", v);
KF = B(8, "i8", v);
JF = B(8, "i8", v);
vG = B(8, "i8", v);
uG = B(8, "i8", v);
yG = B(8, "i8", v);
xG = B(8, "i8", v);
CG = B(8, "i8", v);
BG = B(8, "i8", v);
FG = B(8, "i8", v);
EG = B(8, "i8", v);
IG = B(8, "i8", v);
HG = B(8, "i8", v);
MG = B(8, "i8", v);
LG = B(8, "i8", v);
xI = B(8, "i8", v);
wI = B(8, "i8", v);
CI = B(8, "i8", v);
BI = B(8, "i8", v);
II = B(12, "i8", v);
HI = B(8, "i8", v);
kK = B(8, "i8", v);
jK = B(8, "i8", v);
nK = B(8, "i8", v);
mK = B(8, "i8", v);
B([374, 0, 0, 0, 376, 0, 0, 0, 378, 0, 0, 0, 380, 0, 0, 0, 382, 0, 0, 0, 384, 0, 0, 0, 386, 0, 0, 0, 388, 0, 0, 0, 390, 0, 0, 0, 392, 0, 0, 0, 394, 0, 0, 0, 396, 0, 0, 0, 398, 0, 0, 0, 400, 0, 0, 0, 402, 0, 0, 0, 404, 0, 0, 0, 406, 0, 0, 0, 408, 0, 0, 0, 410, 0, 0, 0, 412, 0, 0, 0, 414, 0, 0, 0, 416, 0, 0, 0, 418, 0, 0, 0, 420, 0, 0, 0, 422, 0, 0, 0, 424, 0, 0, 0, 426, 0, 0, 0, 428, 0, 0, 0, 430, 0, 0, 0, 432, 0, 0, 0, 434, 0, 0, 0, 436, 0, 0, 0, 438, 0, 0, 0, 440, 0, 0, 0, 442, 0, 0, 0, 444, 0, 0, 0, 446, 0, 0, 0, 448, 0, 0, 0, 450, 0, 0, 0, 452, 0, 0, 0, 454, 0, 0, 0, 456, 0, 0, 0, 458, 0, 0, 0, 460, 0, 0, 0, 462, 0, 0, 0, 464, 0, 0, 0, 466, 0, 0, 0, 468, 0, 0, 0, 470, 0, 0, 0, 472, 0, 0, 0, 474, 0, 0, 0, 476, 0, 0, 0, 478, 0, 0, 0, 480, 0, 0, 0, 482, 0, 0, 0, 484, 0, 0, 0, 486, 0, 0, 0, 488, 0, 0, 0, 490, 0, 0, 0, 492, 0, 0, 0, 494, 0, 0, 0, 496, 0, 0, 0, 498, 0, 0, 0, 500, 0, 0, 0, 502, 0, 0, 0, 504, 0, 0, 0, 506, 0, 0, 0, 508, 0, 0, 0, 510, 0, 0, 0, 512, 0, 0, 0, 514, 0, 0, 0, 516, 0, 0, 0, 518, 0, 0, 0, 520, 0, 0, 0, 522, 0, 0, 0, 524, 0, 0, 0, 526, 0, 0, 0, 528, 0, 0, 0, 530, 0, 0, 0, 532, 0, 0, 0, 534, 0, 0, 0, 536, 0, 0, 0, 538, 0, 0, 0, 540, 0, 0, 0, 542, 0, 0, 0, 544, 0, 0, 0, 546, 0, 0, 0, 548, 0, 0, 0, 550, 0, 0, 0, 552, 0, 0, 0, 554, 0, 0, 0, 556, 0, 0, 0, 558, 0, 0, 0, 560, 0, 0, 0, 562, 0, 0, 0, 564, 0, 0, 0, 566, 0, 0, 0, 568, 0, 0, 0, 570, 0, 0, 0, 572, 0, 0, 0, 574, 0, 0, 0, 576, 0, 0, 0, 578, 0, 0, 0, 580, 0, 0, 0, 582, 0, 0, 0, 584, 0, 0, 0, 586, 0, 0, 0, 588, 0, 0, 0, 590, 0, 0, 0, 592, 0, 0, 0, 594, 0, 0, 0, 596, 0, 0, 0, 598, 0, 0, 0, 600, 0, 0, 0, 602, 0, 0, 0, 604, 0, 0, 0, 606, 0, 0, 0, 608, 0, 0, 0, 610, 0, 0, 0, 612, 0, 0, 0, 614, 0, 0, 0, 616, 0, 0, 0, 618, 0, 0, 0, 620, 0, 0, 0, 622, 0, 0, 0, 624, 0, 0, 0, 626, 0, 0, 0, 628, 0, 0, 0, 630, 0, 0, 0, 632, 0, 0, 0, 634, 0, 0, 0, 636, 0, 0, 0, 638, 0, 0, 0, 640, 0, 0, 0, 642, 0, 0, 0, 644, 0, 0, 0, 646, 0, 0, 0, 648, 0, 0, 0, 650, 0, 0, 0, 652, 0, 0, 0, 654, 0, 0, 0, 656, 0, 0, 0, 658, 0, 0, 0, 660, 0, 0, 0, 662, 0, 0, 0, 664, 0, 0, 0, 666, 0, 0, 0, 668, 0, 0, 0, 670, 0, 0, 0, 672, 0, 0, 0, 674, 0, 0, 0, 676, 0, 0, 0, 678, 0, 0, 0, 680, 0, 0, 0, 682, 0, 0, 0, 684, 0, 0, 0, 686, 0, 0, 0, 688, 0, 0, 0, 690, 0, 0, 0, 692, 0, 0, 0, 694, 0, 0, 0, 696, 0, 0, 0, 698, 0, 0, 0, 700, 0, 0, 0, 702, 0, 0, 0, 704, 0, 0, 0, 706, 0, 0, 0, 708, 0, 0, 0, 710, 0, 0, 0, 712, 0, 0, 0, 714, 0, 0, 0, 716, 0, 0, 0, 718, 0, 0, 0, 720, 0, 0, 0, 722, 0, 0, 0, 724, 0, 0, 0, 726, 0, 0, 0, 728, 0, 0, 0, 730, 0, 0, 0, 732, 0, 0, 0, 734, 0, 0, 0, 736, 0, 0, 0, 738, 0, 0, 0, 740, 0, 0, 0, 742, 0, 0, 0, 744, 0, 0, 0, 746, 0, 0, 0, 748, 0, 0, 0, 750, 0, 0, 0, 752, 0, 0, 0, 754, 0, 0, 0, 756, 0, 0, 0, 758, 0, 0, 0, 760, 0, 0, 0, 762, 0, 0, 0, 764, 0, 0, 0, 766, 0, 0, 0, 768, 0, 0, 0, 770, 0, 0, 0, 772, 0, 0, 0, 774, 0, 0, 0, 776, 0, 0, 0, 778, 0, 0, 0, 780, 0, 0, 0, 782, 0, 0, 0, 784, 0, 0, 0, 786, 0, 0, 0, 788, 0, 0, 0, 790, 0, 0, 0, 792, 0, 0, 0, 794, 0, 0, 0, 796, 0, 0, 0, 798, 0, 0, 0, 800, 0, 0, 0, 802, 0, 0, 0, 804, 0, 0, 0, 806, 0, 0, 0, 808, 0, 0, 0, 810, 0, 0, 0, 812, 0, 0, 0, 814, 0, 0, 0, 816, 0, 0, 0, 818, 0, 0, 0, 820, 0, 0, 0, 822, 0, 0, 0, 824, 0, 0, 0, 826, 0, 0, 0, 828, 0, 0, 0, 830, 0, 0, 0, 832, 0, 0, 0, 834, 0, 0, 0, 836, 0, 0, 0, 838, 0, 0, 0, 840, 0, 0, 0, 842, 0, 0, 0, 844, 0, 0, 0, 846, 0, 0, 0, 848, 0, 0, 0, 850, 0, 0, 0, 852, 0, 0, 0, 854, 0, 0, 0, 856, 0, 0, 0, 858, 0, 0, 0, 860, 0, 0, 0, 862, 0, 0, 0, 864, 0, 0, 0, 866, 0, 0, 0, 868, 0, 0, 0, 870, 0, 0, 0, 872, 0, 0, 0, 874, 0, 0, 0, 876, 0, 0, 0, 878, 0, 0, 0, 880, 0, 0, 0, 882, 0, 0, 0, 884, 0, 0, 0, 886, 0, 0, 0, 888, 0, 0, 0, 890, 0, 0, 0, 892, 0, 0, 0, 894, 0, 0, 0, 896, 0, 0, 0, 898, 0, 0, 0, 900, 0, 0, 0, 902, 0, 0, 0, 904, 0, 0, 0, 906, 0, 0, 0, 908, 0, 0, 0, 910, 0, 0, 0, 912, 0, 0, 0, 914, 0, 0, 0, 916, 0, 0, 0, 918, 0, 0, 0, 920, 0, 0, 0, 922, 0, 0, 0, 924, 0, 0, 0, 926, 0, 0, 0, 928, 0, 0, 0, 930, 0, 0, 0, 932, 0, 0, 0, 934, 0, 0, 0, 936, 0, 0, 0, 938, 0, 0, 0, 940, 0, 0, 0, 942, 0, 0, 0, 944, 0, 0, 0, 946, 0, 0, 0, 948, 0, 0, 0, 950, 0, 0, 0, 952, 0, 0, 0, 954, 0, 0, 0, 956, 0, 0, 0, 958, 0, 0, 0, 960, 0, 0, 0, 962, 0, 0, 0, 964, 0, 0, 0, 966, 0, 0, 0, 968, 0, 0, 0, 970, 0, 0, 0, 972, 0, 0, 0, 974, 0, 0, 0, 976, 0, 0, 0, 978, 0, 0, 0, 980, 0, 0, 0, 982, 0, 0, 0, 984, 0, 0, 0, 986, 0, 0, 0, 988, 0, 0, 0, 990, 0, 0, 0, 992, 0, 0, 0, 994, 0, 0, 0, 996, 0, 0, 0, 998, 0, 0, 0, 1e3, 0, 0, 0, 1002, 0, 0, 0, 1004, 0, 0, 0, 1006, 0, 0, 0, 1008, 0, 0, 0, 1010, 0, 0, 0, 1012, 0, 0, 0, 1014, 0, 0, 0, 1016, 0, 0, 0, 1018, 0, 0, 0, 1020, 0, 0, 0, 1022, 0, 0, 0, 1024, 0, 0, 0, 1026, 0, 0, 0, 1028, 0, 0, 0, 1030, 0, 0, 0, 1032, 0, 0, 0, 1034, 0, 0, 0, 1036, 0, 0, 0, 1038, 0, 0, 0, 1040, 0, 0, 0, 1042, 0, 0, 0, 1044, 0, 0, 0, 1046, 0, 0, 0, 1048, 0, 0, 0, 1050, 0, 0, 0, 1052, 0, 0, 0, 1054, 0, 0, 0, 1056, 0, 0, 0, 1058, 0, 0, 0, 1060, 0, 0, 0, 1062, 0, 0, 0, 1064, 0, 0, 0, 1066, 0, 0, 0, 1068, 0, 0, 0, 1070, 0, 0, 0, 1072, 0, 0, 0, 1074, 0, 0, 0, 1076, 0, 0, 0, 1078, 0, 0, 0, 1080, 0, 0, 0, 1082, 0, 0, 0, 1084, 0, 0, 0, 1086, 0, 0, 0, 1088, 0, 0, 0, 1090, 0, 0, 0, 1092, 0, 0, 0, 1094, 0, 0, 0, 1096, 0, 0, 0, 1098, 0, 0, 0, 1100, 0, 0, 0, 1102, 0, 0, 0, 1104, 0, 0, 0, 1106, 0, 0, 0, 1108, 0, 0, 0, 1110, 0, 0, 0, 1112, 0, 0, 0, 1114, 0, 0, 0, 1116, 0, 0, 0, 1118, 0, 0, 0, 1120, 0, 0, 0, 1122, 0, 0, 0, 1124, 0, 0, 0, 1126, 0, 0, 0, 1128, 0, 0, 0, 1130, 0, 0, 0, 1132, 0, 0, 0, 1134, 0, 0, 0, 1136, 0, 0, 0, 1138, 0, 0, 0, 1140, 0, 0, 0, 1142, 0, 0, 0, 1144, 0, 0, 0, 1146, 0, 0, 0, 1148, 0, 0, 0, 1150, 0, 0, 0, 1152, 0, 0, 0, 1154, 0, 0, 0, 1156, 0, 0, 0, 1158, 0, 0, 0, 1160, 0, 0, 0, 1162, 0, 0, 0, 1164, 0, 0, 0, 1166, 0, 0, 0, 1168, 0, 0, 0, 1170, 0, 0, 0, 1172, 0, 0, 0, 1174, 0, 0, 0, 1176, 0, 0, 0, 1178, 0, 0, 0, 1180, 0, 0, 0, 1182, 0, 0, 0, 1184, 0, 0, 0, 1186, 0, 0, 0, 1188, 0, 0, 0, 1190, 0, 0, 0, 1192, 0, 0, 0, 1194, 0, 0, 0, 1196, 0, 0, 0, 1198, 0, 0, 0, 1200, 0, 0, 0, 1202, 0, 0, 0, 1204, 0, 0, 0, 1206, 0, 0, 0, 1208, 0, 0, 0, 1210, 0, 0, 0, 1212, 0, 0, 0, 1214, 0, 0, 0, 1216, 0, 0, 0, 1218, 0, 0, 0, 1220, 0, 0, 0, 1222, 0, 0, 0, 1224, 0, 0, 0, 1226, 0, 0, 0, 1228, 0, 0, 0, 1230, 0, 0, 0, 1232, 0, 0, 0, 1234, 0, 0, 0, 1236, 0, 0, 0, 1238, 0, 0, 0, 1240, 0, 0, 0, 1242, 0, 0, 0, 1244, 0, 0, 0, 1246, 0, 0, 0, 1248, 0, 0, 0, 1250, 0, 0, 0, 1252, 0, 0, 0, 1254, 0, 0, 0, 1256, 0, 0, 0, 1258, 0, 0, 0, 1260, 0, 0, 0, 1262, 0, 0, 0, 1264, 0, 0, 0, 1266, 0, 0, 0, 1268, 0, 0, 0, 1270, 0, 0, 0, 1272, 0, 0, 0, 1274, 0, 0, 0, 1276, 0, 0, 0, 1278, 0, 0, 0, 1280, 0, 0, 0, 1282, 0, 0, 0, 1284, 0, 0, 0, 1286, 0, 0, 0, 1288, 0, 0, 0, 1290, 0, 0, 0, 1292, 0, 0, 0, 1294, 0, 0, 0, 1296, 0, 0, 0, 1298, 0, 0, 0, 1300, 0, 0, 0, 1302, 0, 0, 0, 1304, 0, 0, 0, 1306, 0, 0, 0, 1308, 0, 0, 0, 1310, 0, 0, 0, 1312, 0, 0, 0, 1314, 0, 0, 0, 1316, 0, 0, 0, 1318, 0, 0, 0, 1320, 0, 0, 0, 1322, 0, 0, 0, 1324, 0, 0, 0, 1326, 0, 0, 0, 1328, 0, 0, 0, 1330, 0, 0, 0, 1332, 0, 0, 0, 1334, 0, 0, 0, 1336, 0, 0, 0, 1338, 0, 0, 0, 1340, 0, 0, 0, 1342, 0, 0, 0, 1344, 0, 0, 0, 1346, 0, 0, 0, 1348, 0, 0, 0, 1350, 0, 0, 0, 1352, 0, 0, 0, 1354, 0, 0, 0, 1356, 0, 0, 0, 1358, 0, 0, 0, 1360, 0, 0, 0, 1362, 0, 0, 0, 1364, 0, 0, 0, 1366, 0, 0, 0, 1368, 0, 0, 0, 1370, 0, 0, 0, 1372, 0, 0, 0, 1374, 0, 0, 0, 1376, 0, 0, 0, 1378, 0, 0, 0, 1380, 0, 0, 0, 1382, 0, 0, 0, 1384, 0, 0, 0, 1386, 0, 0, 0, 1388, 0, 0, 0, 1390, 0, 0, 0, 1392, 0, 0, 0, 1394, 0, 0, 0, 1396, 0, 0, 0, 1398, 0, 0, 0, 1400, 0, 0, 0, 1402, 0, 0, 0, 1404, 0, 0, 0, 1406, 0, 0, 0, 1408, 0, 0, 0, 1410, 0, 0, 0, 1412, 0, 0, 0, 1414, 0, 0, 0, 1416, 0, 0, 0, 1418, 0, 0, 0, 1420, 0, 0, 0, 1422, 0, 0, 0, 1424, 0, 0, 0, 1426, 0, 0, 0, 1428, 0, 0, 0, 1430, 0, 0, 0, 1432, 0, 0, 0, 1434, 0, 0, 0, 1436, 0, 0, 0, 1438, 0, 0, 0, 1440, 0, 0, 0, 1442, 0, 0, 0, 1444, 0, 0, 0, 1446, 0, 0, 0, 1448, 0, 0, 0, 1450, 0, 0, 0, 1452, 0, 0, 0, 1454, 0, 0, 0, 1456, 0, 0, 0, 1458, 0, 0, 0, 1460, 0, 0, 0, 1462, 0, 0, 0, 1464, 0, 0, 0, 1466, 0, 0, 0, 1468, 0, 0, 0, 1470, 0, 0, 0, 1472, 0, 0, 0, 1474, 0, 0, 0, 1476, 0, 0, 0, 1478, 0, 0, 0, 1480, 0, 0, 0, 1482, 0, 0, 0, 1484, 0, 0, 0, 1486, 0, 0, 0, 1488, 0, 0, 0, 1490, 0, 0, 0, 1492, 0, 0, 0, 1494, 0, 0, 0, 1496, 0, 0, 0, 1498, 0, 0, 0, 1500, 0, 0, 0, 1502, 0, 0, 0, 1504, 0, 0, 0, 1506, 0, 0, 0, 1508, 0, 0, 0, 1510, 0, 0, 0, 1512, 0, 0, 0, 1514, 0, 0, 0, 1516, 0, 0, 0, 1518, 0, 0, 0, 1520, 0, 0, 0, 1522, 0, 0, 0, 1524, 0, 0, 0, 1526, 0, 0, 0, 1528, 0, 0, 0, 1530, 0, 0, 0, 1532, 0, 0, 0, 1534, 0, 0, 0, 1536, 0, 0, 0, 1538, 0, 0, 0, 1540, 0, 0, 0, 1542, 0, 0, 0, 1544, 0, 0, 0, 1546, 0, 0, 0, 1548, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
N.Qc = B([78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 49, 54, 95, 95, 115, 104, 105, 109, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0], "i8", v);
kN = B(12, "i8", v);
N.Sc = B([78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 49, 55, 95, 95, 99, 108, 97, 115, 115, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0], "i8", v);
lN = B(12, "i8", v);
N.$c = B([78, 83, 116, 51, 95, 95, 49, 57, 110, 117, 108, 108, 112, 116, 114, 95, 116, 69, 0], "i8", v);
mN = B(8, "i8", v);
N.Uc = B([78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 49, 57, 95, 95, 112, 111, 105, 110, 116, 101, 114, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0], "i8", v);
N.Tc = B([78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 49, 55, 95, 95, 112, 98, 97, 115, 101, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0], "i8", v);
nN = B(12, "i8", v);
oN = B(12, "i8", v);
pN = B([0, 0, 0, 0, 0, 0, 0, 0, 1550, 0, 0, 0, 1552, 0, 0, 0, 102, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
UL = B([0, 0, 0, 0, 0, 0, 0, 0, 1550, 0, 0, 0, 1554, 0, 0, 0, 1556, 0, 0, 0, 1558, 0, 0, 0, 1560, 0, 0, 0, 1562, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
qN = B([0, 0, 0, 0, 0, 0, 0, 0, 1550, 0, 0, 0, 1564, 0, 0, 0, 1566, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
rN = B([0, 0, 0, 0, 0, 0, 0, 0, 1550, 0, 0, 0, 1568, 0, 0, 0, 1570, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.Yc = B([78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 50, 51, 95, 95, 102, 117, 110, 100, 97, 109, 101, 110, 116, 97, 108, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0], "i8", v);
sN = B(12, "i8", v);
N.de = B([118, 0], "i8", v);
tN = B(8, "i8", v);
N.Ld = B([80, 118, 0], "i8", v);
uN = B(16, "i8", v);
N.ud = B([80, 75, 118, 0], "i8", v);
vN = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.Nc = B([68, 110, 0], "i8", v);
wN = B(8, "i8", v);
N.bd = B([80, 68, 110, 0], "i8", v);
xN = B(16, "i8", v);
N.ed = B([80, 75, 68, 110, 0], "i8", v);
yN = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.Sd = B([98, 0], "i8", v);
zN = B(8, "i8", v);
N.zd = B([80, 98, 0], "i8", v);
AN = B(16, "i8", v);
N.hd = B([80, 75, 98, 0], "i8", v);
BN = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.ee = B([119, 0], "i8", v);
CN = B(8, "i8", v);
N.Md = B([80, 119, 0], "i8", v);
DN = B(16, "i8", v);
N.vd = B([80, 75, 119, 0], "i8", v);
EN = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.Td = B([99, 0], "i8", v);
FN = B(8, "i8", v);
N.Ad = B([80, 99, 0], "i8", v);
GN = B(16, "i8", v);
N.jd = B([80, 75, 99, 0], "i8", v);
HN = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.Xd = B([104, 0], "i8", v);
IN = B(8, "i8", v);
N.Ed = B([80, 104, 0], "i8", v);
JN = B(16, "i8", v);
N.nd = B([80, 75, 104, 0], "i8", v);
KN = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.Rd = B([97, 0], "i8", v);
LN = B(8, "i8", v);
N.yd = B([80, 97, 0], "i8", v);
MN = B(16, "i8", v);
N.gd = B([80, 75, 97, 0], "i8", v);
NN = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.be = B([115, 0], "i8", v);
ON = B(8, "i8", v);
N.Jd = B([80, 115, 0], "i8", v);
PN = B(16, "i8", v);
N.sd = B([80, 75, 115, 0], "i8", v);
QN = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.ce = B([116, 0], "i8", v);
RN = B(8, "i8", v);
N.Kd = B([80, 116, 0], "i8", v);
SN = B(16, "i8", v);
N.td = B([80, 75, 116, 0], "i8", v);
TN = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.Yd = B([105, 0], "i8", v);
UN = B(8, "i8", v);
N.Fd = B([80, 105, 0], "i8", v);
VN = B(16, "i8", v);
N.od = B([80, 75, 105, 0], "i8", v);
WN = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.Zd = B([106, 0], "i8", v);
XN = B(8, "i8", v);
N.Gd = B([80, 106, 0], "i8", v);
YN = B(16, "i8", v);
N.pd = B([80, 75, 106, 0], "i8", v);
ZN = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.$d = B([108, 0], "i8", v);
$N = B(8, "i8", v);
N.Hd = B([80, 108, 0], "i8", v);
aO = B(16, "i8", v);
N.qd = B([80, 75, 108, 0], "i8", v);
bO = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.ae = B([109, 0], "i8", v);
cO = B(8, "i8", v);
N.Id = B([80, 109, 0], "i8", v);
dO = B(16, "i8", v);
N.rd = B([80, 75, 109, 0], "i8", v);
eO = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.fe = B([120, 0], "i8", v);
fO = B(8, "i8", v);
N.Nd = B([80, 120, 0], "i8", v);
gO = B(16, "i8", v);
N.wd = B([80, 75, 120, 0], "i8", v);
hO = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.ge = B([121, 0], "i8", v);
iO = B(8, "i8", v);
N.Od = B([80, 121, 0], "i8", v);
jO = B(16, "i8", v);
N.xd = B([80, 75, 121, 0], "i8", v);
kO = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.Wd = B([102, 0], "i8", v);
lO = B(8, "i8", v);
N.Dd = B([80, 102, 0], "i8", v);
mO = B(16, "i8", v);
N.md = B([80, 75, 102, 0], "i8", v);
nO = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.Ud = B([100, 0], "i8", v);
oO = B(8, "i8", v);
N.Bd = B([80, 100, 0], "i8", v);
pO = B(16, "i8", v);
N.kd = B([80, 75, 100, 0], "i8", v);
qO = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.Vd = B([101, 0], "i8", v);
rO = B(8, "i8", v);
N.Cd = B([80, 101, 0], "i8", v);
sO = B(16, "i8", v);
N.ld = B([80, 75, 101, 0], "i8", v);
tO = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.Oc = B([68, 115, 0], "i8", v);
uO = B(8, "i8", v);
N.cd = B([80, 68, 115, 0], "i8", v);
vO = B(16, "i8", v);
N.fd = B([80, 75, 68, 115, 0], "i8", v);
wO = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
N.Mc = B([68, 105, 0], "i8", v);
xO = B(8, "i8", v);
N.ad = B([80, 68, 105, 0], "i8", v);
yO = B(16, "i8", v);
N.dd = B([80, 75, 68, 105, 0], "i8", v);
zO = B([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0], v);
AO = B([0, 0, 0, 0, 0, 0, 0, 0, 1550, 0, 0, 0, 1572, 0, 0, 0, 1574, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.Rc = B([78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 49, 55, 95, 95, 97, 114, 114, 97, 121, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0], "i8", v);
BO = B(12, "i8", v);
CO = B([0, 0, 0, 0, 0, 0, 0, 0, 1550, 0, 0, 0, 1576, 0, 0, 0, 1578, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.Vc = B([78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 50, 48, 95, 95, 102, 117, 110, 99, 116, 105, 111, 110, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0], "i8", v);
DO = B(12, "i8", v);
EO = B([0, 0, 0, 0, 0, 0, 0, 0, 1550, 0, 0, 0, 1580, 0, 0, 0, 1582, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.Pc = B([78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 49, 54, 95, 95, 101, 110, 117, 109, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0], "i8", v);
FO = B(12, "i8", v);
VL = B([0, 0, 0, 0, 0, 0, 0, 0, 1550, 0, 0, 0, 1584, 0, 0, 0, 1556, 0, 0, 0, 1586, 0, 0, 0, 1588, 0, 0, 0, 1590, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.Wc = B([78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 50, 48, 95, 95, 115, 105, 95, 99, 108, 97, 115, 115, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0], "i8", v);
GO = B(12, "i8", v);
HO = B([0, 0, 0, 0, 0, 0, 0, 0, 1550, 0, 0, 0, 1592, 0, 0, 0, 1556, 0, 0, 0, 1594, 0, 0, 0, 1596, 0, 0, 0, 1598, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.Xc = B([78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 50, 49, 95, 95, 118, 109, 105, 95, 99, 108, 97, 115, 115, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0], "i8", v);
IO = B(12, "i8", v);
TL = B([0, 0, 0, 0, 0, 0, 0, 0, 1550, 0, 0, 0, 1600, 0, 0, 0, 1602, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
JO = B([0, 0, 0, 0, 0, 0, 0, 0, 1550, 0, 0, 0, 1604, 0, 0, 0, 1566, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.Zc = B([78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 50, 57, 95, 95, 112, 111, 105, 110, 116, 101, 114, 95, 116, 111, 95, 109, 101, 109, 98, 101, 114, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0], "i8", v);
KO = B(12, "i8", v);
Y = B(468, "i8", v);
LL = B(24, "i8", v);
N.gi = B([109, 97, 120, 32, 115, 121, 115, 116, 101, 109, 32, 98, 121, 116, 101, 115, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0], "i8", v);
N.Zh = B([115, 121, 115, 116, 101, 109, 32, 98, 121, 116, 101, 115, 32, 32, 32, 32, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0], "i8", v);
N.ci = B([105, 110, 32, 117, 115, 101, 32, 98, 121, 116, 101, 115, 32, 32, 32, 32, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0], "i8", v);
B(1, "i8", v);
PL = B(4, "i8", v);
QL = B([0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 1606, 0, 0, 0, 1608, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.Qg = B([115, 116, 100, 58, 58, 98, 97, 100, 95, 97, 108, 108, 111, 99, 0], "i8", v);
LO = B([0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 1610, 0, 0, 0, 1612, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], v);
B(1, "i8", v);
N.uf = B([98, 97, 100, 95, 97, 114, 114, 97, 121, 95, 110, 101, 119, 95, 108, 101, 110, 103, 116, 104, 0], "i8", v);
N.Qd = B([83, 116, 57, 98, 97, 100, 95, 97, 108, 108, 111, 99, 0], "i8", v);
RL = B(12, "i8", v);
N.Pd = B([83, 116, 50, 48, 98, 97, 100, 95, 97, 114, 114, 97, 121, 95, 110, 101, 119, 95, 108, 101, 110, 103, 116, 104, 0], "i8", v);
MO = B(12, "i8", v);
l[zy + 4 >> 2] = BM;
l[AM >> 2] = UL + 8 | 0;
l[AM + 4 >> 2] = N.Kc | 0;
l[BM >> 2] = VL + 8 | 0;
l[BM + 4 >> 2] = N.pc | 0;
l[BM + 8 >> 2] = AM;
l[Xw + 4 >> 2] = CM;
l[CM >> 2] = VL + 8 | 0;
l[CM + 4 >> 2] = N.sc | 0;
l[CM + 8 >> 2] = AM;
l[yF + 4 >> 2] = DM;
l[DM >> 2] = VL + 8 | 0;
l[DM + 4 >> 2] = N.lc | 0;
l[DM + 8 >> 2] = AM;
l[pF + 4 >> 2] = EM;
l[EM >> 2] = VL + 8 | 0;
l[EM + 4 >> 2] = N.uc | 0;
l[EM + 8 >> 2] = AM;
l[FM + 4 >> 2] = GM;
l[GM >> 2] = UL + 8 | 0;
l[GM + 4 >> 2] = N.Ic | 0;
l[yp >> 2] = IM + 8 | 0;
l[zp >> 2] = zx + 8 | 0;
l[zx + 4 >> 2] = HM;
l[HM >> 2] = UL + 8 | 0;
l[HM + 4 >> 2] = N.Cc | 0;
l[IM + 4 >> 2] = JM;
l[JM >> 2] = UL + 8 | 0;
l[JM + 4 >> 2] = N.wc | 0;
l[KM + 4 >> 2] = MM;
l[LM >> 2] = UL + 8 | 0;
l[LM + 4 >> 2] = N.Lc | 0;
l[MM >> 2] = VL + 8 | 0;
l[MM + 4 >> 2] = N.Ec | 0;
l[MM + 8 >> 2] = LM;
l[NM + 4 >> 2] = OM;
l[OM >> 2] = VL + 8 | 0;
l[OM + 4 >> 2] = N.Gc | 0;
l[OM + 8 >> 2] = LM;
l[PM + 4 >> 2] = QM;
l[QM >> 2] = VL + 8 | 0;
l[QM + 4 >> 2] = N.vc | 0;
l[QM + 8 >> 2] = LM;
l[RM + 4 >> 2] = LM;
l[SM + 4 >> 2] = TM;
l[TM >> 2] = VL + 8 | 0;
l[TM + 4 >> 2] = N.Dc | 0;
l[TM + 8 >> 2] = LM;
l[UM + 4 >> 2] = VM;
l[VM >> 2] = VL + 8 | 0;
l[VM + 4 >> 2] = N.Fc | 0;
l[VM + 8 >> 2] = LM;
l[WM + 4 >> 2] = XM;
l[XM >> 2] = VL + 8 | 0;
l[XM + 4 >> 2] = N.Hc | 0;
l[XM + 8 >> 2] = LM;
l[YM + 4 >> 2] = ZM;
l[ZM >> 2] = VL + 8 | 0;
l[ZM + 4 >> 2] = N.Ac | 0;
l[ZM + 8 >> 2] = LM;
l[Fp + 4 >> 2] = aN;
l[$M >> 2] = UL + 8 | 0;
l[$M + 4 >> 2] = N.Jc | 0;
l[aN >> 2] = VL + 8 | 0;
l[aN + 4 >> 2] = N.xc | 0;
l[aN + 8 >> 2] = $M;
l[Np + 4 >> 2] = bN;
l[bN >> 2] = VL + 8 | 0;
l[bN + 4 >> 2] = N.yc | 0;
l[bN + 8 >> 2] = $M;
l[cq + 4 >> 2] = cN;
l[cN >> 2] = VL + 8 | 0;
l[cN + 4 >> 2] = N.mc | 0;
l[cN + 8 >> 2] = $M;
l[Ep + 4 >> 2] = $M;
l[dq + 4 >> 2] = dN;
l[dN >> 2] = VL + 8 | 0;
l[dN + 4 >> 2] = N.qc | 0;
l[dN + 8 >> 2] = $M;
l[eq + 4 >> 2] = eN;
l[eN >> 2] = VL + 8 | 0;
l[eN + 4 >> 2] = N.Bc | 0;
l[eN + 8 >> 2] = $M;
l[gq + 4 >> 2] = fN;
l[fN >> 2] = VL + 8 | 0;
l[fN + 4 >> 2] = N.tc | 0;
l[fN + 8 >> 2] = $M;
l[Ip + 4 >> 2] = gN;
l[gN >> 2] = VL + 8 | 0;
l[gN + 4 >> 2] = N.zc | 0;
l[gN + 8 >> 2] = $M;
l[Op + 4 >> 2] = hN;
l[hN >> 2] = VL + 8 | 0;
l[hN + 4 >> 2] = N.nc | 0;
l[hN + 8 >> 2] = $M;
l[Mp + 4 >> 2] = iN;
l[iN >> 2] = VL + 8 | 0;
l[iN + 4 >> 2] = N.oc | 0;
l[iN + 8 >> 2] = $M;
l[hq + 4 >> 2] = jN;
l[jN >> 2] = VL + 8 | 0;
l[jN + 4 >> 2] = N.rc | 0;
l[jN + 8 >> 2] = $M;
l[kN >> 2] = VL + 8 | 0;
l[kN + 4 >> 2] = N.Qc | 0;
l[kN + 8 >> 2] = Ha;
l[lN >> 2] = VL + 8 | 0;
l[lN + 4 >> 2] = N.Sc | 0;
l[lN + 8 >> 2] = kN;
l[mN >> 2] = UL + 8 | 0;
l[mN + 4 >> 2] = N.$c | 0;
l[nN >> 2] = VL + 8 | 0;
l[nN + 4 >> 2] = N.Tc | 0;
l[nN + 8 >> 2] = kN;
l[oN >> 2] = VL + 8 | 0;
l[oN + 4 >> 2] = N.Uc | 0;
l[oN + 8 >> 2] = nN;
l[pN + 4 >> 2] = kN;
l[UL + 4 >> 2] = lN;
l[qN + 4 >> 2] = nN;
l[rN + 4 >> 2] = sN;
l[sN >> 2] = VL + 8 | 0;
l[sN + 4 >> 2] = N.Yc | 0;
l[sN + 8 >> 2] = kN;
l[tN >> 2] = rN + 8 | 0;
l[tN + 4 >> 2] = N.de | 0;
l[uN >> 2] = TL + 8 | 0;
l[uN + 4 >> 2] = N.Ld | 0;
l[uN + 12 >> 2] = tN;
l[vN >> 2] = TL + 8 | 0;
l[vN + 4 >> 2] = N.ud | 0;
l[vN + 12 >> 2] = tN;
l[wN >> 2] = rN + 8 | 0;
l[wN + 4 >> 2] = N.Nc | 0;
l[xN >> 2] = TL + 8 | 0;
l[xN + 4 >> 2] = N.bd | 0;
l[xN + 12 >> 2] = wN;
l[yN >> 2] = TL + 8 | 0;
l[yN + 4 >> 2] = N.ed | 0;
l[yN + 12 >> 2] = wN;
l[zN >> 2] = rN + 8 | 0;
l[zN + 4 >> 2] = N.Sd | 0;
l[AN >> 2] = TL + 8 | 0;
l[AN + 4 >> 2] = N.zd | 0;
l[AN + 12 >> 2] = zN;
l[BN >> 2] = TL + 8 | 0;
l[BN + 4 >> 2] = N.hd | 0;
l[BN + 12 >> 2] = zN;
l[CN >> 2] = rN + 8 | 0;
l[CN + 4 >> 2] = N.ee | 0;
l[DN >> 2] = TL + 8 | 0;
l[DN + 4 >> 2] = N.Md | 0;
l[DN + 12 >> 2] = CN;
l[EN >> 2] = TL + 8 | 0;
l[EN + 4 >> 2] = N.vd | 0;
l[EN + 12 >> 2] = CN;
l[FN >> 2] = rN + 8 | 0;
l[FN + 4 >> 2] = N.Td | 0;
l[GN >> 2] = TL + 8 | 0;
l[GN + 4 >> 2] = N.Ad | 0;
l[GN + 12 >> 2] = FN;
l[HN >> 2] = TL + 8 | 0;
l[HN + 4 >> 2] = N.jd | 0;
l[HN + 12 >> 2] = FN;
l[IN >> 2] = rN + 8 | 0;
l[IN + 4 >> 2] = N.Xd | 0;
l[JN >> 2] = TL + 8 | 0;
l[JN + 4 >> 2] = N.Ed | 0;
l[JN + 12 >> 2] = IN;
l[KN >> 2] = TL + 8 | 0;
l[KN + 4 >> 2] = N.nd | 0;
l[KN + 12 >> 2] = IN;
l[LN >> 2] = rN + 8 | 0;
l[LN + 4 >> 2] = N.Rd | 0;
l[MN >> 2] = TL + 8 | 0;
l[MN + 4 >> 2] = N.yd | 0;
l[MN + 12 >> 2] = LN;
l[NN >> 2] = TL + 8 | 0;
l[NN + 4 >> 2] = N.gd | 0;
l[NN + 12 >> 2] = LN;
l[ON >> 2] = rN + 8 | 0;
l[ON + 4 >> 2] = N.be | 0;
l[PN >> 2] = TL + 8 | 0;
l[PN + 4 >> 2] = N.Jd | 0;
l[PN + 12 >> 2] = ON;
l[QN >> 2] = TL + 8 | 0;
l[QN + 4 >> 2] = N.sd | 0;
l[QN + 12 >> 2] = ON;
l[RN >> 2] = rN + 8 | 0;
l[RN + 4 >> 2] = N.ce | 0;
l[SN >> 2] = TL + 8 | 0;
l[SN + 4 >> 2] = N.Kd | 0;
l[SN + 12 >> 2] = RN;
l[TN >> 2] = TL + 8 | 0;
l[TN + 4 >> 2] = N.td | 0;
l[TN + 12 >> 2] = RN;
l[UN >> 2] = rN + 8 | 0;
l[UN + 4 >> 2] = N.Yd | 0;
l[VN >> 2] = TL + 8 | 0;
l[VN + 4 >> 2] = N.Fd | 0;
l[VN + 12 >> 2] = UN;
l[WN >> 2] = TL + 8 | 0;
l[WN + 4 >> 2] = N.od | 0;
l[WN + 12 >> 2] = UN;
l[XN >> 2] = rN + 8 | 0;
l[XN + 4 >> 2] = N.Zd | 0;
l[YN >> 2] = TL + 8 | 0;
l[YN + 4 >> 2] = N.Gd | 0;
l[YN + 12 >> 2] = XN;
l[ZN >> 2] = TL + 8 | 0;
l[ZN + 4 >> 2] = N.pd | 0;
l[ZN + 12 >> 2] = XN;
l[$N >> 2] = rN + 8 | 0;
l[$N + 4 >> 2] = N.$d | 0;
l[aO >> 2] = TL + 8 | 0;
l[aO + 4 >> 2] = N.Hd | 0;
l[aO + 12 >> 2] = $N;
l[bO >> 2] = TL + 8 | 0;
l[bO + 4 >> 2] = N.qd | 0;
l[bO + 12 >> 2] = $N;
l[cO >> 2] = rN + 8 | 0;
l[cO + 4 >> 2] = N.ae | 0;
l[dO >> 2] = TL + 8 | 0;
l[dO + 4 >> 2] = N.Id | 0;
l[dO + 12 >> 2] = cO;
l[eO >> 2] = TL + 8 | 0;
l[eO + 4 >> 2] = N.rd | 0;
l[eO + 12 >> 2] = cO;
l[fO >> 2] = rN + 8 | 0;
l[fO + 4 >> 2] = N.fe | 0;
l[gO >> 2] = TL + 8 | 0;
l[gO + 4 >> 2] = N.Nd | 0;
l[gO + 12 >> 2] = fO;
l[hO >> 2] = TL + 8 | 0;
l[hO + 4 >> 2] = N.wd | 0;
l[hO + 12 >> 2] = fO;
l[iO >> 2] = rN + 8 | 0;
l[iO + 4 >> 2] = N.ge | 0;
l[jO >> 2] = TL + 8 | 0;
l[jO + 4 >> 2] = N.Od | 0;
l[jO + 12 >> 2] = iO;
l[kO >> 2] = TL + 8 | 0;
l[kO + 4 >> 2] = N.xd | 0;
l[kO + 12 >> 2] = iO;
l[lO >> 2] = rN + 8 | 0;
l[lO + 4 >> 2] = N.Wd | 0;
l[mO >> 2] = TL + 8 | 0;
l[mO + 4 >> 2] = N.Dd | 0;
l[mO + 12 >> 2] = lO;
l[nO >> 2] = TL + 8 | 0;
l[nO + 4 >> 2] = N.md | 0;
l[nO + 12 >> 2] = lO;
l[oO >> 2] = rN + 8 | 0;
l[oO + 4 >> 2] = N.Ud | 0;
l[pO >> 2] = TL + 8 | 0;
l[pO + 4 >> 2] = N.Bd | 0;
l[pO + 12 >> 2] = oO;
l[qO >> 2] = TL + 8 | 0;
l[qO + 4 >> 2] = N.kd | 0;
l[qO + 12 >> 2] = oO;
l[rO >> 2] = rN + 8 | 0;
l[rO + 4 >> 2] = N.Vd | 0;
l[sO >> 2] = TL + 8 | 0;
l[sO + 4 >> 2] = N.Cd | 0;
l[sO + 12 >> 2] = rO;
l[tO >> 2] = TL + 8 | 0;
l[tO + 4 >> 2] = N.ld | 0;
l[tO + 12 >> 2] = rO;
l[uO >> 2] = rN + 8 | 0;
l[uO + 4 >> 2] = N.Oc | 0;
l[vO >> 2] = TL + 8 | 0;
l[vO + 4 >> 2] = N.cd | 0;
l[vO + 12 >> 2] = uO;
l[wO >> 2] = TL + 8 | 0;
l[wO + 4 >> 2] = N.fd | 0;
l[wO + 12 >> 2] = uO;
l[xO >> 2] = rN + 8 | 0;
l[xO + 4 >> 2] = N.Mc | 0;
l[yO >> 2] = TL + 8 | 0;
l[yO + 4 >> 2] = N.ad | 0;
l[yO + 12 >> 2] = xO;
l[zO >> 2] = TL + 8 | 0;
l[zO + 4 >> 2] = N.dd | 0;
l[zO + 12 >> 2] = xO;
l[AO + 4 >> 2] = BO;
l[BO >> 2] = VL + 8 | 0;
l[BO + 4 >> 2] = N.Rc | 0;
l[BO + 8 >> 2] = kN;
l[CO + 4 >> 2] = DO;
l[DO >> 2] = VL + 8 | 0;
l[DO + 4 >> 2] = N.Vc | 0;
l[DO + 8 >> 2] = kN;
l[EO + 4 >> 2] = FO;
l[FO >> 2] = VL + 8 | 0;
l[FO + 4 >> 2] = N.Pc | 0;
l[FO + 8 >> 2] = kN;
l[VL + 4 >> 2] = GO;
l[GO >> 2] = VL + 8 | 0;
l[GO + 4 >> 2] = N.Wc | 0;
l[GO + 8 >> 2] = lN;
l[HO + 4 >> 2] = IO;
l[IO >> 2] = VL + 8 | 0;
l[IO + 4 >> 2] = N.Xc | 0;
l[IO + 8 >> 2] = lN;
l[TL + 4 >> 2] = oN;
l[JO + 4 >> 2] = KO;
l[KO >> 2] = VL + 8 | 0;
l[KO + 4 >> 2] = N.Zc | 0;
l[KO + 8 >> 2] = nN;
l[QL + 4 >> 2] = RL;
l[LO + 4 >> 2] = MO;
l[RL >> 2] = VL + 8 | 0;
l[RL + 4 >> 2] = N.Qd | 0;
l[RL + 8 >> 2] = Ha;
l[MO >> 2] = VL + 8 | 0;
l[MO + 4 >> 2] = N.Pd | 0;
l[MO + 8 >> 2] = RL;
K = [0, 0, (function (b, d) {
    var e = l[b >> 2], f = l[d >> 2];
    return(e | 0) < (f | 0) ? 1 : (e | 0) != (f | 0) ? 0 : (l[b + 4 >> 2] | 0) < (l[d + 4 >> 2] | 0)
}), 0, (function (b, d, e, f, g) {
    d = qn(g, 144);
    f = d >> 2;
    if (0 != (d | 0)) {
        l[d >> 2] = RM + 8 | 0;
        l[f + 1] = 4;
        l[f + 12] = b;
        var h = d + 52 | 0;
        l[h >> 2] = e;
        l[f + 14] = 0;
        l[f + 15] = 0;
        l[f + 31] = 0;
        l[f + 32] = 0;
        for (var g = (d + 8 | 0) >> 2, j = g + 10; g < j; g++) {
            l[g] = 0
        }
        g = Fh(q[(b + 16 | 0) >> 2] * q[e + 16 >> 2]);
        q[f + 34] = g;
        g = q[b + 20 >> 2];
        j = q[e + 20 >> 2];
        q[f + 35] = g > j ? g : j;
        l[d >> 2] = PM + 8 | 0;
        0 == (l[l[b + 12 >> 2] + 4 >> 2] | 0) ? b = e : (P(N.wa | 0, 44, N.ga | 0, N.Db | 0), b = l[h >> 2]);
        0 != (l[l[b + 12 >> 2] + 4 >> 2] | 0) && P(N.wa | 0, 45, N.ga | 0, N.I | 0);
        h = d
    }
    return h | 0
}), 0, (function (b, d) {
    K[l[l[b >> 2] + 4 >> 2]](b);
    var e = ed[rn + 144 | 0], f = e & 255;
    14 > (e & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0);
    e = (f << 2) + d + 12 | 0;
    l[b >> 2] = l[e >> 2];
    l[e >> 2] = b
}), 0, (function (b, d, e, f, g) {
    d = qn(g, 144);
    f = d >> 2;
    if (0 != (d | 0)) {
        l[d >> 2] = RM + 8 | 0;
        l[f + 1] = 4;
        l[f + 12] = b;
        var h = d + 52 | 0;
        l[h >> 2] = e;
        l[f + 14] = 0;
        l[f + 15] = 0;
        l[f + 31] = 0;
        l[f + 32] = 0;
        for (var g = (d + 8 | 0) >> 2, j = g + 10; g < j; g++) {
            l[g] = 0
        }
        g = Fh(q[(b + 16 | 0) >> 2] * q[e + 16 >> 2]);
        q[f + 34] = g;
        g = q[b + 20 >> 2];
        j = q[e + 20 >> 2];
        q[f + 35] = g > j ? g : j;
        l[d >> 2] = WM + 8 | 0;
        2 == (l[l[b + 12 >> 2] + 4 >> 2] | 0) ? b = e : (P(N.za | 0, 41, N.ma | 0, N.ta | 0), b = l[h >> 2]);
        0 != (l[l[b + 12 >> 2] + 4 >> 2] | 0) && P(N.za | 0, 42, N.ma | 0, N.I | 0);
        h = d
    }
    return h | 0
}), 0, (function (b, d) {
    K[l[l[b >> 2] + 4 >> 2]](b);
    var e = ed[rn + 144 | 0], f = e & 255;
    14 > (e & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0);
    e = (f << 2) + d + 12 | 0;
    l[b >> 2] = l[e >> 2];
    l[e >> 2] = b
}), 0, (function (b, d, e, f, g) {
    d = qn(g, 144);
    f = d >> 2;
    if (0 != (d | 0)) {
        l[d >> 2] = RM + 8 | 0;
        l[f + 1] = 4;
        l[f + 12] = b;
        var h = d + 52 | 0;
        l[h >> 2] = e;
        l[f + 14] = 0;
        l[f + 15] = 0;
        l[f + 31] = 0;
        l[f + 32] = 0;
        for (var g = (d + 8 | 0) >> 2, j = g + 10; g < j; g++) {
            l[g] = 0
        }
        g = Fh(q[(b + 16 | 0) >> 2] * q[e + 16 >> 2]);
        q[f + 34] = g;
        g = q[b + 20 >> 2];
        j = q[e + 20 >> 2];
        q[f + 35] = g > j ? g : j;
        l[d >> 2] = YM + 8 | 0;
        2 == (l[l[b + 12 >> 2] + 4 >> 2] | 0) ? b = e : (P(N.Aa | 0, 44, N.ha | 0, N.ta | 0), b = l[h >> 2]);
        2 != (l[l[b + 12 >> 2] + 4 >> 2] | 0) && P(N.Aa | 0, 45, N.ha | 0, N.U | 0);
        h = d
    }
    return h | 0
}), 0, (function (b, d) {
    K[l[l[b >> 2] + 4 >> 2]](b);
    var e = ed[rn + 144 | 0], f = e & 255;
    14 > (e & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0);
    e = (f << 2) + d + 12 | 0;
    l[b >> 2] = l[e >> 2];
    l[e >> 2] = b
}), 0, (function (b, d, e, f, g) {
    d = qn(g, 144);
    f = d >> 2;
    if (0 != (d | 0)) {
        l[d >> 2] = RM + 8 | 0;
        l[f + 1] = 4;
        l[f + 12] = b;
        var h = d + 52 | 0;
        l[h >> 2] = e;
        l[f + 14] = 0;
        l[f + 15] = 0;
        l[f + 31] = 0;
        l[f + 32] = 0;
        for (var g = (d + 8 | 0) >> 2, j = g + 10; g < j; g++) {
            l[g] = 0
        }
        g = Fh(q[(b + 16 | 0) >> 2] * q[e + 16 >> 2]);
        q[f + 34] = g;
        g = q[b + 20 >> 2];
        j = q[e + 20 >> 2];
        q[f + 35] = g > j ? g : j;
        l[d >> 2] = SM + 8 | 0;
        1 == (l[l[b + 12 >> 2] + 4 >> 2] | 0) ? b = e : (P(N.xa | 0, 41, N.ia | 0, N.sa | 0), b = l[h >> 2]);
        0 != (l[l[b + 12 >> 2] + 4 >> 2] | 0) && P(N.xa | 0, 42, N.ia | 0, N.I | 0);
        h = d
    }
    return h | 0
}), 0, (function (b, d) {
    K[l[l[b >> 2] + 4 >> 2]](b);
    var e = ed[rn + 144 | 0], f = e & 255;
    14 > (e & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0);
    e = (f << 2) + d + 12 | 0;
    l[b >> 2] = l[e >> 2];
    l[e >> 2] = b
}), 0, (function (b, d, e, f, g) {
    d = qn(g, 144);
    f = d >> 2;
    if (0 != (d | 0)) {
        l[d >> 2] = RM + 8 | 0;
        l[f + 1] = 4;
        l[f + 12] = b;
        var h = d + 52 | 0;
        l[h >> 2] = e;
        l[f + 14] = 0;
        l[f + 15] = 0;
        l[f + 31] = 0;
        l[f + 32] = 0;
        for (var g = (d + 8 | 0) >> 2, j = g + 10; g < j; g++) {
            l[g] = 0
        }
        g = Fh(q[(b + 16 | 0) >> 2] * q[e + 16 >> 2]);
        q[f + 34] = g;
        g = q[b + 20 >> 2];
        j = q[e + 20 >> 2];
        q[f + 35] = g > j ? g : j;
        l[d >> 2] = UM + 8 | 0;
        1 == (l[l[b + 12 >> 2] + 4 >> 2] | 0) ? b = e : (P(N.ya | 0, 41, N.ka | 0, N.sa | 0), b = l[h >> 2]);
        2 != (l[l[b + 12 >> 2] + 4 >> 2] | 0) && P(N.ya | 0, 42, N.ka | 0, N.U | 0);
        h = d
    }
    return h | 0
}), 0, (function (b, d) {
    K[l[l[b >> 2] + 4 >> 2]](b);
    var e = ed[rn + 144 | 0], f = e & 255;
    14 > (e & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0);
    e = (f << 2) + d + 12 | 0;
    l[b >> 2] = l[e >> 2];
    l[e >> 2] = b
}), 0, (function (b, d, e, f, g) {
    var h, g = qn(g, 144);
    h = g >> 2;
    if (0 == (g | 0)) {
        b = 0
    } else {
        l[g >> 2] = RM + 8 | 0;
        l[h + 1] = 4;
        l[h + 12] = b;
        var j = g + 52 | 0;
        l[j >> 2] = e;
        l[h + 14] = d;
        l[h + 15] = f;
        l[h + 31] = 0;
        l[h + 32] = 0;
        d = (g + 8 | 0) >> 2;
        for (f = d + 10; d < f; d++) {
            l[d] = 0
        }
        d = Fh(q[(b + 16 | 0) >> 2] * q[e + 16 >> 2]);
        q[h + 34] = d;
        d = q[b + 20 >> 2];
        f = q[e + 20 >> 2];
        q[h + 35] = d > f ? d : f;
        l[g >> 2] = KM + 8 | 0;
        3 == (l[l[b + 12 >> 2] + 4 >> 2] | 0) ? b = e : (P(N.ua | 0, 43, N.ja | 0, N.ra | 0), b = l[j >> 2]);
        0 != (l[l[b + 12 >> 2] + 4 >> 2] | 0) && P(N.ua | 0, 44, N.ja | 0, N.I | 0);
        b = g
    }
    return b | 0
}), 0, (function (b, d) {
    K[l[l[b >> 2] + 4 >> 2]](b);
    var e = ed[rn + 144 | 0], f = e & 255;
    14 > (e & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0);
    e = (f << 2) + d + 12 | 0;
    l[b >> 2] = l[e >> 2];
    l[e >> 2] = b
}), 0, (function (b, d, e, f, g) {
    var h, g = qn(g, 144);
    h = g >> 2;
    if (0 == (g | 0)) {
        b = 0
    } else {
        l[g >> 2] = RM + 8 | 0;
        l[h + 1] = 4;
        l[h + 12] = b;
        var j = g + 52 | 0;
        l[j >> 2] = e;
        l[h + 14] = d;
        l[h + 15] = f;
        l[h + 31] = 0;
        l[h + 32] = 0;
        d = (g + 8 | 0) >> 2;
        for (f = d + 10; d < f; d++) {
            l[d] = 0
        }
        d = Fh(q[(b + 16 | 0) >> 2] * q[e + 16 >> 2]);
        q[h + 34] = d;
        d = q[b + 20 >> 2];
        f = q[e + 20 >> 2];
        q[h + 35] = d > f ? d : f;
        l[g >> 2] = NM + 8 | 0;
        3 == (l[l[b + 12 >> 2] + 4 >> 2] | 0) ? b = e : (P(N.va | 0, 43, N.la | 0, N.ra | 0), b = l[j >> 2]);
        2 != (l[l[b + 12 >> 2] + 4 >> 2] | 0) && P(N.va | 0, 44, N.la | 0, N.U | 0);
        b = g
    }
    return b | 0
}), 0, (function (b, d) {
    K[l[l[b >> 2] + 4 >> 2]](b);
    var e = ed[rn + 144 | 0], f = e & 255;
    14 > (e & 255) || P(N.e | 0, 173, N.f | 0, N.g | 0);
    e = (f << 2) + d + 12 | 0;
    l[b >> 2] = l[e >> 2];
    l[e >> 2] = b
}), 0, (function (b) {
    Ha(b | 0)
}), 0, (function (b) {
    l[b >> 2] = zy + 8 | 0;
    var d = b + 12 | 0;
    Dh(l[d >> 2]);
    l[d >> 2] = 0;
    l[b + 16 >> 2] = 0
}), 0, (function (b) {
    l[b >> 2] = zy + 8 | 0;
    var d = b + 12 | 0;
    Dh(l[d >> 2]);
    l[d >> 2] = 0;
    l[b + 16 >> 2] = 0;
    Ls(b)
}), 0, (function (b, d) {
    var e, f = qn(d, 40);
    e = f >> 2;
    0 == (f | 0) ? e = 0 : (l[e] = zy + 8 | 0, l[e + 1] = 3, q[e + 2] = .009999999776482582, l[e + 3] = 0, l[e + 4] = 0, c[f + 36 | 0] = 0, c[f + 37 | 0] = 0, e = f);
    var f = l[b + 12 >> 2], g = l[b + 16 >> 2], h = e + 12 | 0;
    6 == (0 == (l[h >> 2] | 0) ? 0 == (l[e + 16 >> 2] | 0) ? 7 : 6 : 6) && P(N.F | 0, 48, N.ea | 0, N.Ta | 0);
    1 < (g | 0) || P(N.F | 0, 49, N.ea | 0, N.Qb | 0);
    var j = e + 16 | 0;
    l[j >> 2] = g;
    g = Ne(g << 3);
    l[h >> 2] = g;
    Ch(g, f, l[j >> 2] << 3);
    f = e + 36 | 0;
    c[f] = 0;
    h = e + 37 | 0;
    c[h] = 0;
    var j = b + 20 | 0, g = e + 20 | 0, k = l[j + 4 >> 2];
    l[g >> 2] = l[j >> 2];
    l[g + 4 >> 2] = k;
    j = b + 28 | 0;
    g = e + 28 | 0;
    k = l[j + 4 >> 2];
    l[g >> 2] = l[j >> 2];
    l[g + 4 >> 2] = k;
    c[f] = c[b + 36 | 0] & 1;
    c[h] = c[b + 37 | 0] & 1;
    return e | 0
}), 0, (function (b) {
    return l[b + 16 >> 2] - 1 | 0
}), 0, Kb(0), 0, (function (b, d, e, f, g) {
    var h, j = a;
    a += 48;
    h = j >> 2;
    var k = b + 16 | 0, m = l[k >> 2];
    (m | 0) > (g | 0) ? k = m : (P(N.F | 0, 129, N.Ie | 0, N.Vb | 0), k = l[k >> 2]);
    l[h] = yF + 8 | 0;
    l[h + 1] = 1;
    q[h + 2] = .009999999776482582;
    h = j + 28 | 0;
    l[h >> 2] = 0;
    l[h + 4 >> 2] = 0;
    l[h + 8 >> 2] = 0;
    l[h + 12 >> 2] = 0;
    i[h + 16 >> 1] = 0;
    h = g + 1 | 0;
    var b = l[b + 12 >> 2], g = (g << 3) + b | 0, m = j + 12 | 0, n = l[g + 4 >> 2];
    l[m >> 2] = l[g >> 2];
    l[m + 4 >> 2] = n;
    k = (((h | 0) == (k | 0) ? 0 : h) << 3) + b | 0;
    g = j + 20 | 0;
    b = l[k + 4 >> 2];
    l[g >> 2] = l[k >> 2];
    l[g + 4 >> 2] = b;
    d = Vm(j, d, e, f);
    a = j;
    return d
}), 0, (function (b, d, e, f) {
    var g, h = b + 16 | 0, j = l[h >> 2];
    (j | 0) > (f | 0) ? h = j : (P(N.F | 0, 148, N.Ge | 0, N.Vb | 0), h = l[h >> 2]);
    j = f + 1 | 0;
    j = (j | 0) == (h | 0) ? 0 : j;
    g = l[b + 12 >> 2] >> 2;
    var b = q[e + 12 >> 2], k = q[(f << 3 >> 2) + g], h = q[e + 8 >> 2], m = q[((f << 3) + 4 >> 2) + g], n = q[e >> 2], f = b * k - h * m + n, p = q[e + 4 >> 2], e = h * k + b * m + p, k = q[(j << 3 >> 2) + g];
    g = q[((j << 3) + 4 >> 2) + g];
    j = b * k - h * g + n;
    b = h * k + b * g + p;
    h = (M[0] = f < j ? f : j, t[0]);
    g = (M[0] = e < b ? e : b, t[0]) | 0;
    l[d >> 2] = 0 | h;
    l[d + 4 >> 2] = g;
    d = d + 8 | 0;
    f = (M[0] = f > j ? f : j, t[0]);
    e = (M[0] = e > b ? e : b, t[0]) | 0;
    l[d >> 2] = 0 | f;
    l[d + 4 >> 2] = e
}), 0, (function (b, d) {
    var e;
    e = d >> 2;
    l[e] = 0;
    l[e + 1] = 0;
    l[e + 2] = 0;
    l[e + 3] = 0
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d) {
    var e, f = qn(d, 20);
    0 == (f | 0) ? e = 0 : (l[f >> 2] = Xw + 8 | 0, e = (f + 4 | 0) >> 2, l[e] = 0, l[e + 1] = 0, l[e + 2] = 0, l[e + 3] = 0, e = f);
    l[e + 4 >> 2] = l[b + 4 >> 2];
    q[e + 8 >> 2] = q[b + 8 >> 2];
    var f = b + 12 | 0, g = e + 12 | 0, h = l[f + 4 >> 2];
    l[g >> 2] = l[f >> 2];
    l[g + 4 >> 2] = h;
    return e | 0
}), 0, Kb(1), 0, (function (b, d, e) {
    var f = q[d + 12 >> 2], g = q[b + 12 >> 2], h = q[d + 8 >> 2], j = q[b + 16 >> 2], k = q[e >> 2] - (q[d >> 2] + (f * g - h * j)), d = q[e + 4 >> 2] - (q[d + 4 >> 2] + h * g + f * j), b = q[b + 8 >> 2];
    return k * k + d * d <= b * b
}), 0, (function (b, d, e, f) {
    var g = e >> 2, h = q[f + 12 >> 2], j = q[b + 12 >> 2], k = q[f + 8 >> 2], m = q[b + 16 >> 2], n = q[g], e = n - (q[f >> 2] + (h * j - k * m)), p = q[g + 1], f = p - (q[f + 4 >> 2] + k * j + h * m), h = q[b + 8 >> 2], b = q[g + 2] - n, p = q[g + 3] - p, j = e * b + f * p, n = b * b + p * p, h = j * j - n * (e * e + f * f - h * h);
    0 > h | 1.1920928955078125e-7 > n ? d = 0 : (h = Fh(h), h = j + h, j = -h, 0 < h ? d = 0 : q[g + 4] * n < j ? d = 0 : (g = j / n, q[d + 8 >> 2] = g, e += b * g, g = f + p * g, f = (M[0] = e, t[0]), b = (M[0] = g, t[0]) | 0, l[d >> 2] = 0 | f, l[d + 4 >> 2] = b, f = Fh(e * e + g * g), 1.1920928955078125e-7 > f || (f = 1 / f, q[d >> 2] = e * f, q[(d + 4 | 0) >> 2] = g * f), d = 1));
    return d
}), 0, (function (b, d, e) {
    var f = q[e + 12 >> 2], g = q[b + 12 >> 2], h = q[e + 8 >> 2], j = q[b + 16 >> 2], k = q[e >> 2] + (f * g - h * j), e = q[e + 4 >> 2] + h * g + f * j, b = b + 8 | 0, f = q[b >> 2];
    q[d >> 2] = k - f;
    q[d + 4 >> 2] = e - f;
    b = q[b >> 2];
    q[d + 8 >> 2] = k + b;
    q[d + 12 >> 2] = e + b
}), 0, (function (b, d, e) {
    var f = b + 8 | 0, g = q[f >> 2], e = 3.1415927410125732 * e * g * g;
    q[d >> 2] = e;
    var g = b + 12 | 0, h = d + 4 | 0, j = l[g + 4 >> 2];
    l[h >> 2] = l[g >> 2];
    l[h + 4 >> 2] = j;
    f = q[f >> 2];
    g = q[g >> 2];
    b = q[b + 16 >> 2];
    q[d + 12 >> 2] = e * (.5 * f * f + g * g + b * b)
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d) {
    var e, f = qn(d, 48);
    e = f >> 2;
    0 == (f | 0) ? f = 0 : (l[e] = yF + 8 | 0, l[e + 1] = 1, q[e + 2] = .009999999776482582, e = f + 28 | 0, l[e >> 2] = 0, l[e + 4 >> 2] = 0, l[e + 8 >> 2] = 0, l[e + 12 >> 2] = 0, i[e + 16 >> 1] = 0);
    l[f + 4 >> 2] = l[b + 4 >> 2];
    q[f + 8 >> 2] = q[b + 8 >> 2];
    e = b + 12 | 0;
    var g = f + 12 | 0, h = l[e + 4 >> 2];
    l[g >> 2] = l[e >> 2];
    l[g + 4 >> 2] = h;
    e = b + 20 | 0;
    g = f + 20 | 0;
    h = l[e + 4 >> 2];
    l[g >> 2] = l[e >> 2];
    l[g + 4 >> 2] = h;
    e = b + 28 | 0;
    g = f + 28 | 0;
    h = l[e + 4 >> 2];
    l[g >> 2] = l[e >> 2];
    l[g + 4 >> 2] = h;
    e = b + 36 | 0;
    g = f + 36 | 0;
    h = l[e + 4 >> 2];
    l[g >> 2] = l[e >> 2];
    l[g + 4 >> 2] = h;
    c[f + 44 | 0] = c[b + 44 | 0] & 1;
    c[f + 45 | 0] = c[b + 45 | 0] & 1;
    return f | 0
}), 0, Kb(1), 0, Kb(0), 0, Vm, 0, (function (b, d, e) {
    var f = b >> 2, g = q[e + 12 >> 2], h = q[f + 3], j = q[e + 8 >> 2], k = q[f + 4], m = q[e >> 2], b = g * h - j * k + m, n = q[e + 4 >> 2], e = j * h + g * k + n, h = q[f + 5], k = q[f + 6], m = g * h - j * k + m, g = j * h + g * k + n, f = q[f + 2], j = (M[0] = (b < m ? b : m) - f, t[0]), n = (M[0] = (e < g ? e : g) - f, t[0]) | 0;
    l[d >> 2] = 0 | j;
    l[d + 4 >> 2] = n;
    e = (e > g ? e : g) + f;
    d = d + 8 | 0;
    b = (M[0] = (b > m ? b : m) + f, t[0]);
    m = (M[0] = e, t[0]) | 0;
    l[d >> 2] = 0 | b;
    l[d + 4 >> 2] = m
}), 0, (function (b, d) {
    q[d >> 2] = 0;
    var e = .5 * (q[b + 16 >> 2] + q[b + 24 >> 2]), f = d + 4 | 0, g = (M[0] = .5 * (q[b + 12 >> 2] + q[b + 20 >> 2]), t[0]), e = (M[0] = e, t[0]) | 0;
    l[f >> 2] = 0 | g;
    l[f + 4 >> 2] = e;
    q[d + 12 >> 2] = 0
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d) {
    var e, f = qn(d, 152);
    e = f >> 2;
    0 == (f | 0) ? f = 0 : (l[e] = pF + 8 | 0, l[e + 1] = 2, q[e + 2] = .009999999776482582, l[e + 37] = 0, q[e + 3] = 0, q[e + 4] = 0);
    e = f >> 2;
    l[e + 1] = l[b + 4 >> 2];
    q[e + 2] = q[b + 8 >> 2];
    var g = b + 12 | 0, h = f + 12 | 0, j = l[g + 4 >> 2];
    l[h >> 2] = l[g >> 2];
    l[h + 4 >> 2] = j;
    g = (b + 20 | 0) >> 2;
    h = (f + 20 | 0) >> 2;
    for (j = g + 16; g < j; g++, h++) {
        l[h] = l[g]
    }
    g = (b + 84 | 0) >> 2;
    h = (f + 84 | 0) >> 2;
    for (j = g + 16; g < j; g++, h++) {
        l[h] = l[g]
    }
    l[e + 37] = l[b + 148 >> 2];
    return f | 0
}), 0, Kb(1), 0, (function (b, d, e) {
    for (var b = b >> 2, f = q[e >> 2] - q[d >> 2], e = q[e + 4 >> 2] - q[d + 4 >> 2], g = q[d + 12 >> 2], h = q[d + 8 >> 2], d = g * f + h * e, f = f * -h + g * e, e = l[b + 37], g = 0; ;) {
        if ((g | 0) >= (e | 0)) {
            var j = 1;
            break
        }
        if (0 < q[((g << 3) + 84 >> 2) + b] * (d - q[((g << 3) + 20 >> 2) + b]) + q[((g << 3) + 88 >> 2) + b] * (f - q[((g << 3) + 24 >> 2) + b])) {
            j = 0;
            break
        }
        g = g + 1 | 0
    }
    return j
}), 0, (function (b, d, e, f) {
    var g = e >> 2, b = b >> 2, h = q[f >> 2], j = q[g] - h, k = q[f + 4 >> 2], m = q[g + 1] - k, e = f + 12 | 0, n = q[e >> 2], f = f + 8 | 0, p = q[f >> 2], u = n * j + p * m, r = -p, j = j * r + n * m, h = q[g + 2] - h, m = q[g + 3] - k, k = n * h + p * m - u, n = h * r + n * m - j, r = q[g + 4], p = l[b + 37], h = 0, g = -1, m = r, w = 0;
    a:for (; ;) {
        if ((h | 0) >= (p | 0)) {
            0 > w | w > r && P(N.P | 0, 249, N.Le | 0, N.Rg | 0);
            if (-1 >= (g | 0)) {
                var x = 0;
                break
            }
            q[d + 8 >> 2] = w;
            x = q[e >> 2];
            e = q[((g << 3) + 84 >> 2) + b];
            f = q[f >> 2];
            u = q[((g << 3) + 88 >> 2) + b];
            b = f * e + x * u;
            x = (M[0] = x * e - f * u, t[0]);
            b = (M[0] = b, t[0]) | 0;
            l[d >> 2] = 0 | x;
            l[d + 4 >> 2] = b;
            x = 1;
            break
        }
        var y = q[((h << 3) + 84 >> 2) + b], A = q[((h << 3) + 88 >> 2) + b], C = y * (q[((h << 3) + 20 >> 2) + b] - u) + A * (q[((h << 3) + 24 >> 2) + b] - j), y = y * k + A * n, A = 0 == y;
        b:do {
            if (A) {
                if (0 > C) {
                    x = 0;
                    break a
                }
                var z = g, D = m, E = w
            } else {
                z = 0 > y;
                do {
                    if (z && C < w * y) {
                        z = h;
                        D = m;
                        E = C / y;
                        break b
                    }
                } while (0);
                0 < y ? C < m * y ? (z = g, D = C / y) : (z = g, D = m) : (z = g, D = m);
                E = w
            }
        } while (0);
        if (D < E) {
            x = 0;
            break
        }
        h = h + 1 | 0;
        g = z;
        m = D;
        w = E
    }
    return x
}), 0, (function (b, d, e) {
    var b = b >> 2, f = q[e + 12 >> 2], g = q[b + 5], h = q[e + 8 >> 2], j = q[b + 6], k = q[e >> 2], m = f * g - h * j + k, e = q[e + 4 >> 2], g = h * g + f * j + e, j = l[b + 37], n = 1 < (j | 0);
    a:do {
        if (n) {
            for (var p = g, u = m, r = g, w = m, x = 1; ;) {
                var y = q[((x << 3) + 20 >> 2) + b], A = q[((x << 3) + 24 >> 2) + b], C = f * y - h * A + k, y = h * y + f * A + e, w = w < C ? w : C, r = r < y ? r : y, u = u > C ? u : C, p = p > y ? p : y, x = x + 1 | 0;
                if ((x | 0) >= (j | 0)) {
                    var z = p, D = u, E = r, G = w;
                    break a
                }
            }
        } else {
            z = g, D = m, E = g, G = m
        }
    } while (0);
    b = q[b + 2];
    G = (M[0] = G - b, t[0]);
    E = (M[0] = E - b, t[0]) | 0;
    l[d >> 2] = 0 | G;
    l[d + 4 >> 2] = E;
    d = d + 8 | 0;
    D = (M[0] = D + b, t[0]);
    z = (M[0] = z + b, t[0]) | 0;
    l[d >> 2] = 0 | D;
    l[d + 4 >> 2] = z
}), 0, (function (b, d, e) {
    var f;
    f = b + 148 | 0;
    var g = l[f >> 2];
    if (2 < (g | 0)) {
        h = g, f = 5
    } else {
        if (P(N.P | 0, 306, N.zb | 0, N.bh | 0), f = l[f >> 2], 0 < (f | 0)) {
            var h = f;
            f = 5
        } else {
            var j = d | 0, k = q[j >> 2] = 0, m = 0, n = 0, p = 0, u = 0, r = 0;
            f = 12
        }
    }
    do {
        if (5 == f) {
            for (var w = g = f = 0; ;) {
                var x = g + q[b + (w << 3) + 20 >> 2], y = f + q[b + (w << 3) + 24 >> 2], w = w + 1 | 0;
                if ((w | 0) >= (h | 0)) {
                    break
                }
                f = y;
                g = x
            }
            g = 1 / (h | 0);
            f = x * g;
            for (var g = y * g, w = b + 20 | 0, A = b + 24 | 0, C = 0, z = 0, D = 0, E = 0, G = 0; ;) {
                var H = q[b + (G << 3) + 20 >> 2] - f, F = q[b + (G << 3) + 24 >> 2] - g, G = G + 1 | 0, I = (G | 0) < (h | 0);
                if (I) {
                    var J = (G << 3) + b + 20 | 0, L = (G << 3) + b + 24 | 0
                } else {
                    J = w, L = A
                }
                var O = q[J >> 2] - f, R = q[L >> 2] - g, T = H * R - F * O, J = .5 * T, L = D + J, S = .3333333432674408 * J, J = z + (H + O) * S, S = C + (F + R) * S, H = E + .0833333358168602 * T * (H * H + O * H + O * O + F * F + R * F + R * R);
                if (!I) {
                    break
                }
                C = S;
                z = J;
                D = L;
                E = H
            }
            w = L * e;
            A = d | 0;
            q[A >> 2] = w;
            if (1.1920928955078125e-7 < L) {
                var U = w, W = g, Q = f, $ = H, ea = L, sa = J, Ba = S;
                f = 13
            } else {
                k = g, m = f, n = H, p = L, u = J, r = S, j = A, f = 12
            }
        }
    } while (0);
    12 == f && (P(N.P | 0, 352, N.zb | 0, N.Wb | 0), U = q[j >> 2], W = k, Q = m, $ = n, ea = p, sa = u, Ba = r);
    b = 1 / ea;
    sa *= b;
    Ba *= b;
    Q = sa + Q;
    W = Ba + W;
    b = d + 4 | 0;
    h = (M[0] = Q, t[0]);
    k = (M[0] = W, t[0]) | 0;
    l[b >> 2] = 0 | h;
    l[b + 4 >> 2] = k;
    q[d + 12 >> 2] = $ * e + U * (Q * Q + W * W - (sa * sa + Ba * Ba))
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function () {
    ja("Pure virtual function called!")
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, Hb(), 0, Hb(), 0, Hb(), 0, Hb(), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d, e) {
    b = i[d + 36 >> 1];
    return b << 16 >> 16 != i[e + 36 >> 1] << 16 >> 16 | 0 == b << 16 >> 16 ? 0 == (i[e + 32 >> 1] & i[d + 34 >> 1]) << 16 >> 16 ? 0 : 0 != (i[e + 34 >> 1] & i[d + 32 >> 1]) << 16 >> 16 : 0 < b << 16 >> 16
}), 0, (function (b, d, e, f) {
    var g, h = a;
    a += 48;
    g = h >> 2;
    var j = l[l[b + 48 >> 2] + 12 >> 2];
    l[g] = yF + 8 | 0;
    l[g + 1] = 1;
    q[g + 2] = .009999999776482582;
    g = h + 28 | 0;
    l[g >> 2] = 0;
    l[g + 4 >> 2] = 0;
    l[g + 8 >> 2] = 0;
    l[g + 12 >> 2] = 0;
    i[g + 16 >> 1] = 0;
    om(j, h, l[b + 56 >> 2]);
    Eh(d, h, e, l[l[b + 52 >> 2] + 12 >> 2], f);
    a = h
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d, e, f) {
    var g, h = a;
    a += 300;
    var j = h + 252;
    g = j >> 2;
    var k = l[l[b + 48 >> 2] + 12 >> 2];
    l[g] = yF + 8 | 0;
    l[g + 1] = 1;
    q[g + 2] = .009999999776482582;
    g = j + 28 | 0;
    l[g >> 2] = 0;
    l[g + 4 >> 2] = 0;
    l[g + 8 >> 2] = 0;
    l[g + 12 >> 2] = 0;
    i[g + 16 >> 1] = 0;
    om(k, j, l[b + 56 >> 2]);
    Gh(h, d, j, e, l[l[b + 52 >> 2] + 12 >> 2], f);
    a = h
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d, e, f) {
    var g = l[l[b + 48 >> 2] + 12 >> 2], h = l[l[b + 52 >> 2] + 12 >> 2], j = d + 60 | 0;
    l[j >> 2] = 0;
    var k = g + 12 | 0, m = q[e + 12 >> 2], n = q[k >> 2], p = q[e + 8 >> 2], u = q[g + 16 >> 2], b = h + 12 | 0, r = q[f + 12 >> 2], w = q[b >> 2], x = q[f + 8 >> 2], y = q[h + 16 >> 2], A = r * w - x * y + q[f >> 2] - (m * n - p * u + q[e >> 2]), e = x * w + r * y + q[f + 4 >> 2] - (p * n + m * u + q[e + 4 >> 2]), g = q[g + 8 >> 2] + q[h + 8 >> 2];
    A * A + e * e > g * g || (l[d + 56 >> 2] = 0, g = d + 48 | 0, A = l[k + 4 >> 2], l[g >> 2] = l[k >> 2], l[g + 4 >> 2] = A, q[d + 40 >> 2] = 0, q[d + 44 >> 2] = 0, l[j >> 2] = 1, j = l[b + 4 >> 2], l[d >> 2] = l[b >> 2], l[d + 4 >> 2] = j, l[d + 16 >> 2] = 0)
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d, e, f) {
    Eh(d, l[l[b + 48 >> 2] + 12 >> 2], e, l[l[b + 52 >> 2] + 12 >> 2], f)
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d, e, f) {
    var g = a;
    a += 252;
    Gh(g, d, l[l[b + 48 >> 2] + 12 >> 2], e, l[l[b + 52 >> 2] + 12 >> 2], f);
    a = g
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d, e, f) {
    var g = l[l[b + 48 >> 2] + 12 >> 2], h = l[l[b + 52 >> 2] + 12 >> 2], j, k = g >> 2, m = d >> 2;
    j = (d + 60 | 0) >> 2;
    l[j] = 0;
    for (var n = h + 12 | 0, p = q[f + 12 >> 2], u = q[n >> 2], r = q[f + 8 >> 2], w = q[h + 16 >> 2], x = p * u - r * w + q[f >> 2] - q[e >> 2], y = r * u + p * w + q[f + 4 >> 2] - q[e + 4 >> 2], A = q[e + 12 >> 2], C = q[e + 8 >> 2], z = A * x + C * y, D = x * -C + A * y, E = q[k + 2] + q[h + 8 >> 2], G = l[k + 37], H = 0, F = -3.4028234663852886e+38, I = 0; ;) {
        if ((H | 0) < (G | 0)) {
            var J = q[((H << 3) + 84 >> 2) + k] * (z - q[((H << 3) + 20 >> 2) + k]) + q[((H << 3) + 88 >> 2) + k] * (D - q[((H << 3) + 24 >> 2) + k]);
            if (J > E) {
                break
            }
            var L = J > F, O = L ? H : I, R = L ? J : F, H = H + 1 | 0, F = R, I = O
        } else {
            var T = I + 1 | 0, S = (T | 0) < (G | 0) ? T : 0, U = (I << 3) + g + 20 | 0, W = o[U >> 2], Q = o[U + 4 >> 2], $ = (t[0] = W, M[0]), ea = (t[0] = Q, M[0]), sa = (S << 3) + g + 20 | 0, Ba = o[sa >> 2], oa = o[sa + 4 >> 2], ga = (t[0] = Ba, M[0]), qa = (t[0] = oa, M[0]);
            if (1.1920928955078125e-7 > F) {
                l[j] = 1;
                l[m + 14] = 1;
                var la = (I << 3) + g + 84 | 0, Ca = d + 40 | 0, ia = l[la + 4 >> 2];
                l[Ca >> 2] = l[la >> 2];
                l[Ca + 4 >> 2] = ia;
                var ya = .5 * (ea + qa), ta = d + 48 | 0, Ia = (M[0] = .5 * ($ + ga), t[0]), na = (M[0] = ya, t[0]) | 0;
                l[ta >> 2] = 0 | Ia;
                l[ta + 4 >> 2] = na;
                var Z = n, ba = d, ca = l[Z + 4 >> 2];
                l[ba >> 2] = l[Z >> 2];
                l[ba + 4 >> 2] = ca;
                l[m + 4] = 0;
                break
            }
            var ma = z - $, ka = D - ea, aa = z - ga, ra = D - qa;
            if (0 >= ma * (ga - $) + ka * (qa - ea)) {
                var ha = ma * ma + ka * ka;
                if (ha > E * E) {
                    break
                }
                l[j] = 1;
                l[m + 14] = 1;
                var za = d + 40 | 0, X = za, ua = (M[0] = ma, t[0]), da = (M[0] = ka, t[0]) | 0, fa = X | 0;
                l[fa >> 2] = 0 | ua;
                var Aa = X + 4 | 0;
                l[Aa >> 2] = da;
                var Qa = Fh(ha);
                if (1.1920928955078125e-7 <= Qa) {
                    var pa = d + 44 | 0, cb = 1 / Qa;
                    q[za >> 2] = ma * cb;
                    q[pa >> 2] = ka * cb
                }
                var Ra = d + 48 | 0, Ta = Ra | 0;
                l[Ta >> 2] = W;
                var $a = Ra + 4 | 0;
                l[$a >> 2] = Q;
                var va = n, Wa = d, fb = va | 0, gb = va + 4 | 0, Xa = l[gb >> 2], Ua = Wa | 0;
                l[Ua >> 2] = l[fb >> 2];
                var Va = Wa + 4 | 0;
                l[Va >> 2] = Xa;
                l[m + 4] = 0;
                break
            }
            if (0 < aa * ($ - ga) + ra * (ea - qa)) {
                var pb = .5 * ($ + ga), nb = .5 * (ea + qa), La = (I << 3) + g + 84 | 0;
                if ((z - pb) * q[La >> 2] + (D - nb) * q[((I << 3) + 88 >> 2) + k] > E) {
                    break
                }
                l[j] = 1;
                l[m + 14] = 1;
                var qb = La, bb = d + 40 | 0, Fa = l[qb + 4 >> 2];
                l[bb >> 2] = l[qb >> 2];
                l[bb + 4 >> 2] = Fa;
                var Ma = d + 48 | 0, wa = (M[0] = pb, t[0]), hb = (M[0] = nb, t[0]) | 0;
                l[Ma >> 2] = 0 | wa;
                l[Ma + 4 >> 2] = hb;
                var Ya = n, Za = d, Da = l[Ya + 4 >> 2];
                l[Za >> 2] = l[Ya >> 2];
                l[Za + 4 >> 2] = Da;
                l[m + 4] = 0;
                break
            }
            var Oa = aa * aa + ra * ra;
            if (Oa > E * E) {
                break
            }
            l[j] = 1;
            l[m + 14] = 1;
            var ib = d + 40 | 0, ab = ib, Ga = (M[0] = aa, t[0]), jb = (M[0] = ra, t[0]), Ea = 0 | Ga, Pa = jb | 0, fa = ab | 0;
            l[fa >> 2] = Ea;
            Aa = ab + 4 | 0;
            l[Aa >> 2] = Pa;
            var Ja = Fh(Oa);
            if (1.1920928955078125e-7 <= Ja) {
                var db = d + 44 | 0, xa = 1 / Ja;
                q[ib >> 2] = aa * xa;
                q[db >> 2] = ra * xa
            }
            var Sa = d + 48 | 0, Ta = Sa | 0;
            l[Ta >> 2] = Ba;
            $a = Sa + 4 | 0;
            l[$a >> 2] = oa;
            var Ka = n, tb = d, fb = Ka | 0, kb = l[fb >> 2], gb = Ka + 4 | 0, ub = l[gb >> 2], Ua = tb | 0;
            l[Ua >> 2] = kb;
            Va = tb + 4 | 0;
            l[Va >> 2] = ub;
            l[m + 4] = 0;
            break
        }
    }
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d, e, f) {
    var g = l[l[b + 48 >> 2] + 12 >> 2], h = l[l[b + 52 >> 2] + 12 >> 2], j, k, m, n, p, u, r, w, x, y, A, C, z, D, E = f >> 2, G = e >> 2, H = a;
    a += 80;
    var F, I = H + 4, J = H + 8, L = H + 32;
    D = L >> 2;
    var O = H + 56;
    z = O >> 2;
    var R = d + 60 | 0;
    l[R >> 2] = 0;
    var T = q[g + 8 >> 2] + q[h + 8 >> 2];
    l[H >> 2] = 0;
    var S = Hh(H, g, e, h, f), U = S > T;
    do {
        if (!U) {
            l[I >> 2] = 0;
            var W = Hh(I, h, f, g, e);
            if (W <= T) {
                if (W > .9800000190734863 * S + .0010000000474974513) {
                    var Q = q[E], $ = q[E + 1], ea = q[E + 2], sa = q[E + 3], Ba = q[G], oa = q[G + 1], ga = q[G + 2], qa = q[G + 3], la = l[I >> 2];
                    l[d + 56 >> 2] = 2;
                    var Ca = 1, ia = la, ya = g;
                    C = ya >> 2;
                    var ta = h;
                    A = ta >> 2;
                    var Ia = Q, na = $, Z = ea, ba = sa, ca = Ba, ma = oa, ka = ga, aa = qa
                } else {
                    var ra = q[G], ha = q[G + 1], za = q[G + 2], X = q[G + 3], ua = q[E], da = q[E + 1], fa = q[E + 2], Aa = q[E + 3], Qa = l[H >> 2];
                    l[d + 56 >> 2] = 1;
                    Ca = 0;
                    ia = Qa;
                    ya = h;
                    C = ya >> 2;
                    ta = g;
                    A = ta >> 2;
                    Ia = ra;
                    na = ha;
                    Z = za;
                    ba = X;
                    ca = ua;
                    ma = da;
                    ka = fa;
                    aa = Aa
                }
                var pa = l[C + 37];
                F = -1 < (ia | 0) ? (l[A + 37] | 0) > (ia | 0) ? 10 : 9 : 9;
                9 == F && P(N.Jb | 0, 151, N.le | 0, N.Fb | 0);
                var cb = q[((ia << 3) + 84 >> 2) + A], Ra = q[((ia << 3) + 88 >> 2) + A], Ta = ba * cb - Z * Ra, $a = Z * cb + ba * Ra, va = aa * Ta + ka * $a, Wa = -ka, fb = Ta * Wa + aa * $a, gb = 0 < (pa | 0);
                a:do {
                    if (gb) {
                        for (var Xa = 0, Ua = 3.4028234663852886e+38, Va = 0; ;) {
                            var pb = va * q[((Va << 3) + 84 >> 2) + C] + fb * q[((Va << 3) + 88 >> 2) + C], nb = pb < Ua, La = nb ? Va : Xa, qb = nb ? pb : Ua, bb = Va + 1 | 0;
                            if ((bb | 0) == (pa | 0)) {
                                var Fa = La;
                                break a
                            }
                            Xa = La;
                            Ua = qb;
                            Va = bb
                        }
                    } else {
                        Fa = 0
                    }
                } while (0);
                var Ma = Fa + 1 | 0, wa = (Ma | 0) < (pa | 0) ? Ma : 0, hb = q[((Fa << 3) + 20 >> 2) + C], Ya = q[((Fa << 3) + 24 >> 2) + C], Za = aa * hb - ka * Ya + ca, Da = ka * hb + aa * Ya + ma, Oa = J, ib = (M[0] = Za, t[0]), ab = (M[0] = Da, t[0]) | 0;
                l[Oa >> 2] = 0 | ib;
                l[Oa + 4 >> 2] = ab;
                var Ga = ia & 255, jb = J + 8 | 0, Ea = jb;
                c[jb] = Ga;
                var Pa = Fa & 255;
                c[Ea + 1 | 0] = Pa;
                c[Ea + 2 | 0] = 1;
                c[Ea + 3 | 0] = 0;
                var Ja = J + 12 | 0, db = q[((wa << 3) + 20 >> 2) + C], xa = q[((wa << 3) + 24 >> 2) + C], Sa = aa * db - ka * xa + ca, Ka = ka * db + aa * xa + ma, tb = Ja, kb = (M[0] = Sa, t[0]), ub = (M[0] = Ka, t[0]) | 0;
                l[tb >> 2] = 0 | kb;
                l[tb + 4 >> 2] = ub;
                var rb = J + 20 | 0, Bb = rb;
                c[rb] = Ga;
                c[Bb + 1 | 0] = wa & 255;
                c[Bb + 2 | 0] = 1;
                c[Bb + 3 | 0] = 0;
                var lb = ia + 1 | 0, yb = (lb | 0) < (l[A + 37] | 0) ? lb : 0, xb = (ia << 3) + ta + 20 | 0, Ib = l[xb + 4 >> 2], wb = (t[0] = l[xb >> 2], M[0]), vb = (t[0] = Ib, M[0]), zb = (yb << 3) + ta + 20 | 0, Eb = l[zb + 4 >> 2], Cb = (t[0] = l[zb >> 2], M[0]), eb = (t[0] = Eb, M[0]), sb = Cb - wb, ob = eb - vb, Db = Fh(sb * sb + ob * ob);
                if (1.1920928955078125e-7 > Db) {
                    var Jb = sb, Rb = ob
                } else {
                    var Nb = 1 / Db, Jb = sb * Nb, Rb = ob * Nb
                }
                var Ob = .5 * (wb + Cb), Lb = ba * Jb - Z * Rb, Pb = Z * Jb + ba * Rb, Mb = -1 * Lb, Yb = ba * wb - Z * vb + Ia, Zb = Z * wb + ba * vb + na, fc = .5 * (vb + eb), Ub = Pb * Yb + Mb * Zb, jc = T - (Lb * Yb + Pb * Zb), Qb = Lb * (ba * Cb - Z * eb + Ia) + Pb * (Z * Cb + ba * eb + na) + T, mb = -Lb, cc = -Pb, Fb = Za * mb + Da * cc - jc, hc = Sa * mb + Ka * cc - jc;
                if (0 < Fb) {
                    var wc = 0
                } else {
                    y = L >> 2, x = J >> 2, l[y] = l[x], l[y + 1] = l[x + 1], l[y + 2] = l[x + 2], wc = 1
                }
                if (0 < hc) {
                    var pc = wc
                } else {
                    w = (L + 12 * wc | 0) >> 2, r = Ja >> 2, l[w] = l[r], l[w + 1] = l[r + 1], l[w + 2] = l[r + 2], pc = wc + 1 | 0
                }
                if (0 > Fb * hc) {
                    var qc = Fb / (Fb - hc), $c = Da + (Ka - Da) * qc, Fc = L + 12 * pc | 0, sc = (M[0] = Za + (Sa - Za) * qc, t[0]), kd = (M[0] = $c, t[0]), wd = 0 | sc, Mc = kd | 0, $b = Fc | 0;
                    u = $b >> 2;
                    l[u] = wd;
                    var ac = Fc + 4 | 0;
                    p = ac >> 2;
                    l[p] = Mc;
                    var oc = L + 12 * pc + 8 | 0, tc = oc;
                    c[oc] = Ga;
                    c[tc + 1 | 0] = Pa;
                    c[tc + 2 | 0] = 0;
                    c[tc + 3 | 0] = 1;
                    var Oc = pc + 1 | 0
                } else {
                    Oc = pc
                }
                if (2 <= (Oc | 0)) {
                    var ld = q[D], Wc = q[D + 1], ad = Lb * ld + Pb * Wc - Qb, Xc = L + 12 | 0, Cc = q[Xc >> 2], fd = q[D + 4], md = Lb * Cc + Pb * fd - Qb;
                    if (0 < ad) {
                        var nd = 0
                    } else {
                        n = O >> 2, m = L >> 2, l[n] = l[m], l[n + 1] = l[m + 1], l[n + 2] = l[m + 2], nd = 1
                    }
                    if (0 < md) {
                        var Pc = nd
                    } else {
                        k = (O + 12 * nd | 0) >> 2, j = Xc >> 2, l[k] = l[j], l[k + 1] = l[j + 1], l[k + 2] = l[j + 2], Pc = nd + 1 | 0
                    }
                    if (0 > ad * md) {
                        var gd = ad / (ad - md), od = Wc + (fd - Wc) * gd, pd = O + 12 * Pc | 0, Pd = (M[0] = ld + (Cc - ld) * gd, t[0]), Xd = (M[0] = od, t[0]), qd = 0 | Pd, Qd = Xd | 0, $b = pd | 0;
                        u = $b >> 2;
                        l[u] = qd;
                        ac = pd + 4 | 0;
                        p = ac >> 2;
                        l[p] = Qd;
                        var Qc = O + 12 * Pc + 8 | 0, Jc = Qc;
                        c[Qc] = yb & 255;
                        c[Jc + 1 | 0] = c[L + 9 | 0];
                        c[Jc + 2 | 0] = 0;
                        c[Jc + 3 | 0] = 1;
                        var Kc = Pc + 1 | 0
                    } else {
                        Kc = Pc
                    }
                    if (2 <= (Kc | 0)) {
                        var gc = d + 40 | 0, hd = (M[0] = Rb, t[0]), xd = (M[0] = -1 * Jb, t[0]) | 0;
                        l[gc >> 2] = 0 | hd;
                        l[gc + 4 >> 2] = xd;
                        var bd = d + 48 | 0, rd = (M[0] = Ob, t[0]), ye = (M[0] = fc, t[0]) | 0;
                        l[bd >> 2] = 0 | rd;
                        l[bd + 4 >> 2] = ye;
                        var Yd = q[z], Tc = q[z + 1], xc = Pb * Yd + Mb * Tc - Ub > T;
                        if (0 == Ca << 24 >> 24) {
                            if (xc) {
                                var bc = 0
                            } else {
                                var Ed = Yd - ca, yc = Tc - ma, Ac = Ed * Wa + aa * yc, Zd = d, $d = (M[0] = aa * Ed + ka * yc, t[0]), cd = (M[0] = Ac, t[0]) | 0, zc = Zd | 0;
                                l[zc >> 2] = 0 | $d;
                                var kc = Zd + 4 | 0;
                                l[kc >> 2] = cd;
                                l[d + 16 >> 2] = l[z + 2];
                                bc = 1
                            }
                            var Rd = q[z + 3], Gc = q[z + 4];
                            if (Pb * Rd + Mb * Gc - Ub > T) {
                                var Rc = bc
                            } else {
                                var Nc = Rd - ca, ne = Gc - ma, Sd = Nc * Wa + aa * ne, Td = d + 20 * bc | 0, Ud = (M[0] = aa * Nc + ka * ne, t[0]), xf = (M[0] = Sd, t[0]) | 0, $b = Td | 0;
                                u = $b >> 2;
                                l[u] = 0 | Ud;
                                ac = Td + 4 | 0;
                                p = ac >> 2;
                                l[p] = xf;
                                l[(d + 16 >> 2) + (5 * bc | 0)] = l[z + 5];
                                Rc = bc + 1 | 0
                            }
                        } else {
                            if (xc) {
                                var Fd = 0
                            } else {
                                var oe = Yd - ca, He = Tc - ma, ae = oe * Wa + aa * He, Hc = d, dd = (M[0] = aa * oe + ka * He, t[0]), be = (M[0] = ae, t[0]) | 0, zc = Hc | 0;
                                l[zc >> 2] = 0 | dd;
                                kc = Hc + 4 | 0;
                                l[kc >> 2] = be;
                                var pe = d + 16 | 0, Uc = o[z + 2];
                                l[pe >> 2] = Uc;
                                var lc = Uc >>> 24 & 255, Gd = Uc >>> 16 & 255, Hd = Uc & 255, Re = pe, Id = Re + 1 | 0, Jd = Re + 2 | 0, qe = Re + 3 | 0;
                                c[pe] = Uc >>> 8 & 255;
                                c[Id] = Hd;
                                c[Jd] = lc;
                                c[qe] = Gd;
                                Fd = 1
                            }
                            var re = q[z + 3], Kd = q[z + 4];
                            if (Pb * re + Mb * Kd - Ub > T) {
                                Rc = Fd
                            } else {
                                var Se = re - ca, Rf = Kd - ma, sd = Se * Wa + aa * Rf, Vc = d + 20 * Fd | 0, Te = (M[0] = aa * Se + ka * Rf, t[0]), Ue = (M[0] = sd, t[0]) | 0, $b = Vc | 0;
                                u = $b >> 2;
                                l[u] = 0 | Te;
                                ac = Vc + 4 | 0;
                                p = ac >> 2;
                                l[p] = Ue;
                                var ce = d + 20 * Fd + 16 | 0, Yc = o[z + 5];
                                l[ce >> 2] = Yc;
                                var yd = Yc >>> 24 & 255, $e = Yc >>> 16 & 255, ze = Yc & 255, Zc = ce, Ld = Zc + 1 | 0, Md = Zc + 2 | 0, de = Zc + 3 | 0;
                                c[ce] = Yc >>> 8 & 255;
                                c[Ld] = ze;
                                c[Md] = yd;
                                c[de] = $e;
                                Rc = Fd + 1 | 0
                            }
                        }
                        l[R >> 2] = Rc
                    }
                }
            }
        }
    } while (0);
    a = H
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d) {
    var e;
    e = l[d + 48 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 80 >> 2], h = q[e + 5], j = q[d + 84 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d) {
    var e;
    e = l[d + 52 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 88 >> 2], h = q[e + 5], j = q[d + 92 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d, e) {
    var e = q[d + 100 >> 2] * e, f = q[d + 120 >> 2] * e;
    q[b >> 2] = q[d + 116 >> 2] * e;
    q[b + 4 >> 2] = f
}), 0, Kb(0), 0, (function (b) {
    var d = b >> 2, e = a, f = l[l[d + 12] + 8 >> 2], g = l[l[d + 13] + 8 >> 2];
    V(N.wg | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
    V(N.A | 0, (s = a, a += 4, l[s >> 2] = f, s));
    V(N.B | 0, (s = a, a += 4, l[s >> 2] = g, s));
    b = c[b + 61 | 0] & 1;
    V(N.C | 0, (s = a, a += 4, l[s >> 2] = b, s));
    b = q[d + 20];
    f = q[d + 21];
    V(N.K | 0, (s = a, a += 16, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = f, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    b = q[d + 22];
    f = q[d + 23];
    V(N.L | 0, (s = a, a += 16, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = f, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    b = q[d + 26];
    V(N.qh | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    b = q[d + 17];
    V(N.Oa | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    b = q[d + 18];
    V(N.Pa | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    d = l[d + 14];
    V(N.z | 0, (s = a, a += 4, l[s >> 2] = d, s));
    a = e
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d) {
    var e, f, g, h, j = b >> 2, k = l[j + 12];
    h = k >> 2;
    var m = o[h + 2], n = b + 108 | 0;
    l[n >> 2] = m;
    var p = l[j + 13];
    g = p >> 2;
    var u = l[g + 2];
    f = (b + 112 | 0) >> 2;
    l[f] = u;
    var r = k + 28 | 0, w = b + 140 | 0, x = l[r >> 2], y = l[r + 4 >> 2];
    l[w >> 2] = x;
    l[w + 4 >> 2] = y;
    var A = p + 28 | 0, C = b + 148 | 0, z = l[A >> 2], D = l[A + 4 >> 2];
    l[C >> 2] = z;
    l[C + 4 >> 2] = D;
    var E = q[h + 30];
    q[j + 39] = E;
    var G = q[g + 30];
    q[j + 40] = G;
    var H = q[h + 32];
    q[j + 41] = H;
    var F = q[g + 32];
    q[j + 42] = F;
    var I = l[d + 24 >> 2], J = I + 12 * m | 0, L = l[J + 4 >> 2], O = (t[0] = l[J >> 2], M[0]), R = (t[0] = L, M[0]), T = q[(I + 8 >> 2) + (3 * m | 0)];
    e = (d + 28 | 0) >> 2;
    var S = l[e], U = S + 12 * m | 0, W = l[U + 4 >> 2], Q = (t[0] = l[U >> 2], M[0]), $ = (t[0] = W, M[0]), ea = q[(S + 8 >> 2) + (3 * m | 0)], sa = I + 12 * u | 0, Ba = l[sa + 4 >> 2], oa = (t[0] = l[sa >> 2], M[0]), ga = (t[0] = Ba, M[0]), qa = q[(I + 8 >> 2) + (3 * u | 0)], la = S + 12 * u | 0, Ca = l[la + 4 >> 2], ia = (t[0] = l[la >> 2], M[0]), ya = (t[0] = Ca, M[0]), ta = q[(S + 8 >> 2) + (3 * u | 0)], Ia = mm(T), na = nm(T), Z = mm(qa), ba = nm(qa), ca = b + 124 | 0, ma = q[j + 20], ka = (t[0] = x, M[0]), aa = ma - ka, ra = q[j + 21], ha = (t[0] = y, M[0]), za = ra - ha, X = na * aa - Ia * za, ua = Ia * aa + na * za, da = (M[0] = X, t[0]), fa = (M[0] = ua, t[0]) | 0;
    l[ca >> 2] = 0 | da;
    l[ca + 4 >> 2] = fa;
    var Aa = b + 132 | 0, Qa = q[j + 22], pa = (t[0] = z, M[0]), cb = Qa - pa, Ra = q[j + 23], Ta = (t[0] = D, M[0]), $a = Ra - Ta, va = ba * cb - Z * $a, Wa = Z * cb + ba * $a, fb = (M[0] = va, t[0]), gb = (M[0] = Wa, t[0]) | 0;
    l[Aa >> 2] = 0 | fb;
    l[Aa + 4 >> 2] = gb;
    var Xa = b + 116 | 0, Ua = oa + va - O - X, Va = ga + Wa - R - ua, pb = (M[0] = Ua, t[0]), nb = (M[0] = Va, t[0]) | 0;
    l[Xa >> 2] = 0 | pb;
    l[Xa + 4 >> 2] = nb;
    var La = Xa | 0, qb = b + 120 | 0, bb = Fh(Ua * Ua + Va * Va);
    if (.004999999888241291 < bb) {
        var Fa = 1 / bb, Ma = Ua * Fa;
        q[La >> 2] = Ma;
        var wa = Va * Fa, hb = Ma
    } else {
        hb = wa = q[La >> 2] = 0
    }
    q[qb >> 2] = wa;
    var Ya = X * wa - ua * hb, Za = va * wa - Wa * hb, Da = E + H * Ya * Ya + G + F * Za * Za, Oa = 0 != Da ? 1 / Da : 0, ib = b + 172 | 0;
    q[ib >> 2] = Oa;
    var ab = q[j + 17];
    if (0 < ab) {
        var Ga = bb - q[j + 26], jb = 6.2831854820251465 * ab, Ea = Oa * jb * jb, Pa = q[d >> 2], Ja = Pa * (2 * Oa * q[j + 18] * jb + Pa * Ea), db = b + 96 | 0;
        q[db >> 2] = Ja;
        var xa = 0 != Ja ? 1 / Ja : 0;
        q[db >> 2] = xa;
        q[j + 19] = Ga * Pa * Ea * xa;
        var Sa = Da + xa;
        q[ib >> 2] = 0 != Sa ? 1 / Sa : 0
    } else {
        q[j + 24] = 0, q[j + 19] = 0
    }
    if (0 == (c[d + 20 | 0] & 1) << 24 >> 24) {
        q[j + 25] = 0;
        var Ka = ta, tb = ea, kb = Q, ub = $, rb = ia, Bb = ya
    } else {
        var lb = b + 100 | 0, yb = q[lb >> 2] * q[d + 8 >> 2];
        q[lb >> 2] = yb;
        var xb = hb * yb, Ib = wa * yb, Ka = ta + F * (va * Ib - Wa * xb), tb = ea - H * (X * Ib - ua * xb), kb = Q - xb * E, ub = $ - Ib * E, rb = ia + xb * G, Bb = ya + Ib * G
    }
    var wb = l[e] + 12 * m | 0, vb = (M[0] = kb, t[0]), zb = (M[0] = ub, t[0]) | 0;
    l[(wb | 0) >> 2] = 0 | vb;
    l[(wb + 4 | 0) >> 2] = zb;
    q[(l[e] + 8 >> 2) + (3 * l[n >> 2] | 0)] = tb;
    var Eb = l[e] + 12 * l[f] | 0, Cb = (M[0] = rb, t[0]), eb = (M[0] = Bb, t[0]) | 0;
    l[(Eb | 0) >> 2] = 0 | Cb;
    l[(Eb + 4 | 0) >> 2] = eb;
    q[(l[e] + 8 >> 2) + (3 * l[f] | 0)] = Ka
}), 0, (function (b, d) {
    var e, f, g = b >> 2, h = b + 108 | 0, j = l[h >> 2];
    f = (d + 28 | 0) >> 2;
    var k = l[f], m = k + 12 * j | 0;
    e = l[m + 4 >> 2];
    var n = (t[0] = l[m >> 2], M[0]), p = (t[0] = e, M[0]), u = q[(k + 8 >> 2) + (3 * j | 0)];
    e = (b + 112 | 0) >> 2;
    var r = l[e], m = k + 12 * r | 0, w = l[m + 4 >> 2], m = (t[0] = l[m >> 2], M[0]), w = (t[0] = w, M[0]), x = q[(k + 8 >> 2) + (3 * r | 0)], y = q[g + 32], A = q[g + 31], C = q[g + 34], z = q[g + 33], k = q[g + 29], r = q[g + 30], D = b + 100 | 0, E = q[D >> 2], G = (k * (m + C * -x - (n + y * -u)) + r * (w + z * x - (p + A * u)) + q[g + 19] + q[g + 24] * E) * -q[g + 43];
    q[D >> 2] = E + G;
    k *= G;
    r *= G;
    G = q[g + 39];
    y = u - q[g + 41] * (A * r - y * k);
    u = q[g + 40];
    g = x + q[g + 42] * (z * r - C * k);
    j = l[f] + 12 * j | 0;
    n = (M[0] = n - k * G, t[0]);
    p = (M[0] = p - r * G, t[0]) | 0;
    l[(j | 0) >> 2] = 0 | n;
    l[(j + 4 | 0) >> 2] = p;
    q[(l[f] + 8 >> 2) + (3 * l[h >> 2] | 0)] = y;
    h = l[f] + 12 * l[e] | 0;
    m = (M[0] = m + k * u, t[0]);
    w = (M[0] = w + r * u, t[0]) | 0;
    l[(h | 0) >> 2] = 0 | m;
    l[(h + 4 | 0) >> 2] = w;
    q[(l[f] + 8 >> 2) + (3 * l[e] | 0)] = g
}), 0, (function (b, d) {
    var e, f, g = b >> 2;
    if (0 < q[g + 17]) {
        f = 1
    } else {
        var h = b + 108 | 0;
        e = l[h >> 2];
        f = (d + 24 | 0) >> 2;
        var j = l[f], k = j + 12 * e | 0, m = l[k + 4 >> 2], n = (t[0] = l[k >> 2], M[0]), m = (t[0] = m, M[0]), p = q[(j + 8 >> 2) + (3 * e | 0)];
        e = (b + 112 | 0) >> 2;
        var u = l[e], r = j + 12 * u | 0, w = l[r + 4 >> 2], r = (t[0] = l[r >> 2], M[0]), w = (t[0] = w, M[0]), j = q[(j + 8 >> 2) + (3 * u | 0)], x = mm(p), y = nm(p), A = mm(j), C = nm(j), z = q[g + 20] - q[g + 35], D = q[g + 21] - q[g + 36], u = y * z - x * D, y = x * z + y * D, z = q[g + 22] - q[g + 37], D = q[g + 23] - q[g + 38], x = C * z - A * D, A = A * z + C * D, z = r + x - n - u, C = w + A - m - y, E = Fh(z * z + C * C);
        1.1920928955078125e-7 > E ? (E = 0, D = C) : (D = 1 / E, z *= D, D *= C);
        C = E - q[g + 26];
        C = .20000000298023224 > C ? C : .20000000298023224;
        C = -.20000000298023224 > C ? -.20000000298023224 : C;
        E = C * -q[g + 43];
        z *= E;
        D *= E;
        E = q[g + 39];
        u = p - q[g + 41] * (u * D - y * z);
        p = q[g + 40];
        g = j + q[g + 42] * (x * D - A * z);
        n = (M[0] = n - z * E, t[0]);
        m = (M[0] = m - D * E, t[0]) | 0;
        l[(k | 0) >> 2] = 0 | n;
        l[(k + 4 | 0) >> 2] = m;
        q[(l[f] + 8 >> 2) + (3 * l[h >> 2] | 0)] = u;
        h = l[f] + 12 * l[e] | 0;
        k = (M[0] = r + z * p, t[0]);
        n = (M[0] = w + D * p, t[0]) | 0;
        l[(h | 0) >> 2] = 0 | k;
        l[(h + 4 | 0) >> 2] = n;
        q[(l[f] + 8 >> 2) + (3 * l[e] | 0)] = g;
        f = .004999999888241291 > (0 < C ? C : -C)
    }
    return f
}), 0, (function (b, d) {
    var e;
    e = l[d + 48 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 68 >> 2], h = q[e + 5], j = q[d + 72 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d) {
    var e;
    e = l[d + 52 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 76 >> 2], h = q[e + 5], j = q[d + 80 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d, e) {
    var f = q[d + 88 >> 2] * e;
    q[b >> 2] = q[d + 84 >> 2] * e;
    q[b + 4 >> 2] = f
}), 0, (function (b, d) {
    return q[b + 92 >> 2] * d
}), 0, (function (b) {
    var d = b >> 2, e = a, f = l[l[d + 12] + 8 >> 2], g = l[l[d + 13] + 8 >> 2];
    V(N.Lg | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
    V(N.A | 0, (s = a, a += 4, l[s >> 2] = f, s));
    V(N.B | 0, (s = a, a += 4, l[s >> 2] = g, s));
    b = c[b + 61 | 0] & 1;
    V(N.C | 0, (s = a, a += 4, l[s >> 2] = b, s));
    b = q[d + 17];
    f = q[d + 18];
    V(N.K | 0, (s = a, a += 16, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = f, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    b = q[d + 19];
    f = q[d + 20];
    V(N.L | 0, (s = a, a += 16, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = f, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    b = q[d + 24];
    V(N.Gh | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    b = q[d + 25];
    V(N.Ue | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    d = l[d + 14];
    V(N.z | 0, (s = a, a += 4, l[s >> 2] = d, s));
    a = e
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d) {
    var e, f, g, h = b >> 2, j = l[h + 12];
    g = j >> 2;
    var k = o[g + 2], m = b + 104 | 0;
    l[m >> 2] = k;
    var n = l[h + 13];
    e = n >> 2;
    var p = l[e + 2];
    f = (b + 108 | 0) >> 2;
    l[f] = p;
    var u = j + 28 | 0, j = b + 128 | 0, r = l[u >> 2], w = l[u + 4 >> 2];
    l[j >> 2] = r;
    l[j + 4 >> 2] = w;
    var j = n + 28 | 0, n = b + 136 | 0, x = l[j >> 2], y = l[j + 4 >> 2];
    l[n >> 2] = x;
    l[n + 4 >> 2] = y;
    j = q[g + 30];
    q[h + 36] = j;
    n = q[e + 30];
    q[h + 37] = n;
    g = q[g + 32];
    q[h + 38] = g;
    var A = q[e + 32];
    q[h + 39] = A;
    var C = l[d + 24 >> 2], z = q[(C + 8 >> 2) + (3 * k | 0)];
    e = (d + 28 | 0) >> 2;
    var D = l[e], u = D + 12 * k | 0, E = l[u + 4 >> 2], u = (t[0] = l[u >> 2], M[0]), E = (t[0] = E, M[0]), G = q[(D + 8 >> 2) + (3 * k | 0)], H = q[(C + 8 >> 2) + (3 * p | 0)], C = D + 12 * p | 0, F = l[C + 4 >> 2], C = (t[0] = l[C >> 2], M[0]), F = (t[0] = F, M[0]), p = q[(D + 8 >> 2) + (3 * p | 0)], I = mm(z), J = nm(z), z = mm(H), H = nm(H), D = b + 112 | 0, L = q[h + 17], r = (t[0] = r, M[0]), r = L - r, L = q[h + 18], w = (t[0] = w, M[0]), L = L - w, w = J * r - I * L, r = I * r + J * L, I = (M[0] = w, t[0]), J = (M[0] = r, t[0]) | 0;
    l[D >> 2] = 0 | I;
    l[D + 4 >> 2] = J;
    D = b + 120 | 0;
    I = q[h + 19];
    x = (t[0] = x, M[0]);
    x = I - x;
    I = q[h + 20];
    y = (t[0] = y, M[0]);
    I -= y;
    y = H * x - z * I;
    x = z * x + H * I;
    z = (M[0] = y, t[0]);
    H = (M[0] = x, t[0]) | 0;
    l[D >> 2] = 0 | z;
    l[D + 4 >> 2] = H;
    D = j + n;
    z = D + g * r * r + A * x * x;
    I = A * y;
    H = w * -g * r - I * x;
    D = D + g * w * w + I * y;
    I = z * D - H * H;
    I = 0 != I ? 1 / I : I;
    H *= -I;
    q[h + 40] = I * D;
    q[h + 41] = H;
    q[h + 42] = H;
    q[h + 43] = I * z;
    z = g + A;
    q[h + 44] = 0 < z ? 1 / z : z;
    D = b + 84 | 0;
    0 == (c[d + 20 | 0] & 1) << 24 >> 24 ? (q[D >> 2] = 0, q[h + 22] = 0, q[h + 23] = 0, A = p, g = G, j = E, E = C, n = F) : (H = d + 8 | 0, z = q[H >> 2], D |= 0, h = q[D >> 2] * z, q[D >> 2] = h, D = b + 88 | 0, z *= q[D >> 2], q[D >> 2] = z, D = b + 92 | 0, H = q[D >> 2] * q[H >> 2], q[D >> 2] = H, A = p + A * (y * z - x * h + H), g = G - g * (w * z - r * h + H), u -= h * j, j = E - z * j, E = C + h * n, n = F + z * n);
    k = l[e] + 12 * k | 0;
    u = (M[0] = u, t[0]);
    j = (M[0] = j, t[0]) | 0;
    l[(k | 0) >> 2] = 0 | u;
    l[(k + 4 | 0) >> 2] = j;
    q[(l[e] + 8 >> 2) + (3 * l[m >> 2] | 0)] = g;
    m = l[e] + 12 * l[f] | 0;
    k = (M[0] = E, t[0]);
    n = (M[0] = n, t[0]) | 0;
    l[(m | 0) >> 2] = 0 | k;
    l[(m + 4 | 0) >> 2] = n;
    q[(l[e] + 8 >> 2) + (3 * l[f] | 0)] = A
}), 0, (function (b, d) {
    var e, f, g, h, j = b >> 2, k = b + 104 | 0, m = l[k >> 2];
    h = (d + 28 | 0) >> 2;
    var n = l[h], p = n + 12 * m | 0;
    g = l[p + 4 >> 2];
    var u = (t[0] = l[p >> 2], M[0]), r = (t[0] = g, M[0]), w = q[(n + 8 >> 2) + (3 * m | 0)];
    g = (b + 108 | 0) >> 2;
    var x = l[g], p = n + 12 * x | 0, y = l[p + 4 >> 2], p = (t[0] = l[p >> 2], M[0]), y = (t[0] = y, M[0]), A = q[(n + 8 >> 2) + (3 * x | 0)], C = q[j + 36], x = q[j + 37], z = q[j + 38], n = q[j + 39], D = q[d >> 2], E = b + 92 | 0, G = q[E >> 2], H = D * q[j + 25], F = G + (A - w) * -q[j + 44], I = -H, H = F < H ? F : H, I = H < I ? I : H;
    q[E >> 2] = I;
    var E = I - G, G = w - z * E, w = A + n * E, A = q[j + 31], E = q[j + 30], I = q[j + 29], H = q[j + 28], F = p + A * -w - u - I * -G, J = y + E * w - r - H * G;
    e = q[j + 40] * F + q[j + 42] * J;
    var L = q[j + 41] * F + q[j + 43] * J;
    f = b + 84 | 0;
    J = l[f + 4 >> 2];
    F = (t[0] = l[f >> 2], M[0]);
    J = (t[0] = J, M[0]);
    f = (f | 0) >> 2;
    var O = F - e;
    q[f] = O;
    e = (b + 88 | 0) >> 2;
    L = q[e] - L;
    q[e] = L;
    j = D * q[j + 24];
    D = O * O + L * L;
    D > j * j ? (D = Fh(D), 1.1920928955078125e-7 > D || (D = 1 / D, O *= D, q[f] = O, L *= D, q[e] = L), D = O, D *= j, q[f] = D, j *= L, e = q[e] = j) : (D = O, e = L);
    j = D - F;
    D = e - J;
    m = l[h] + 12 * m | 0;
    u = (M[0] = u - j * C, t[0]);
    r = (M[0] = r - D * C, t[0]) | 0;
    l[(m | 0) >> 2] = 0 | u;
    l[(m + 4 | 0) >> 2] = r;
    q[(l[h] + 8 >> 2) + (3 * l[k >> 2] | 0)] = G - z * (H * D - I * j);
    k = l[h] + 12 * l[g] | 0;
    p = (M[0] = p + j * x, t[0]);
    y = (M[0] = y + D * x, t[0]) | 0;
    l[(k | 0) >> 2] = 0 | p;
    l[(k + 4 | 0) >> 2] = y;
    q[(l[h] + 8 >> 2) + (3 * l[g] | 0)] = w + n * (E * D - A * j)
}), 0, Kb(1), 0, (function (b, d) {
    var e;
    e = l[d + 48 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 92 >> 2], h = q[e + 5], j = q[d + 96 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d) {
    var e;
    e = l[d + 52 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 100 >> 2], h = q[e + 5], j = q[d + 104 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d, e) {
    var f = q[d + 156 >> 2], g = q[d + 244 >> 2] * f * e;
    q[b >> 2] = q[d + 240 >> 2] * f * e;
    q[b + 4 >> 2] = g
}), 0, (function (b, d) {
    return q[b + 156 >> 2] * q[b + 256 >> 2] * d
}), 0, (function (b) {
    var d = b >> 2, e = a, f = l[l[d + 12] + 8 >> 2], g = l[l[d + 13] + 8 >> 2], h = l[l[d + 17] + 56 >> 2], j = l[l[d + 18] + 56 >> 2];
    V(N.Zg | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
    V(N.A | 0, (s = a, a += 4, l[s >> 2] = f, s));
    V(N.B | 0, (s = a, a += 4, l[s >> 2] = g, s));
    b = c[b + 61 | 0] & 1;
    V(N.C | 0, (s = a, a += 4, l[s >> 2] = b, s));
    V(N.Ah | 0, (s = a, a += 4, l[s >> 2] = h, s));
    V(N.Hh | 0, (s = a, a += 4, l[s >> 2] = j, s));
    h = q[d + 38];
    V(N.Gb | 0, (s = a, a += 8, Ee[0] = h, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    d = l[d + 14];
    V(N.z | 0, (s = a, a += 4, l[s >> 2] = d, s));
    a = e
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d) {
    var e, f, g, h, j, k, m, n, p, u, r, w = b >> 2, x = l[w + 12];
    r = x >> 2;
    var y = l[r + 2], A = b + 160 | 0;
    l[A >> 2] = y;
    var C = l[w + 13];
    u = C >> 2;
    var z = l[u + 2];
    p = (b + 164 | 0) >> 2;
    l[p] = z;
    var D = l[w + 21];
    n = D >> 2;
    var E = l[n + 2];
    m = (b + 168 | 0) >> 2;
    l[m] = E;
    var G = l[w + 22];
    k = G >> 2;
    var H = l[k + 2];
    j = (b + 172 | 0) >> 2;
    l[j] = H;
    var F = x + 28 | 0, I = b + 176 | 0, J = l[F >> 2], L = l[F + 4 >> 2];
    l[I >> 2] = J;
    l[I + 4 >> 2] = L;
    var O = C + 28 | 0, R = b + 184 | 0, T = l[O >> 2], S = l[O + 4 >> 2];
    l[R >> 2] = T;
    l[R + 4 >> 2] = S;
    var U = D + 28 | 0, W = b + 192 | 0, Q = l[U >> 2], $ = l[U + 4 >> 2];
    l[W >> 2] = Q;
    l[W + 4 >> 2] = $;
    var ea = G + 28 | 0, sa = b + 200 | 0, Ba = l[ea >> 2], oa = l[ea + 4 >> 2];
    l[sa >> 2] = Ba;
    l[sa + 4 >> 2] = oa;
    var ga = q[r + 30];
    q[w + 52] = ga;
    var qa = q[u + 30];
    q[w + 53] = qa;
    var la = q[n + 30];
    q[w + 54] = la;
    var Ca = q[k + 30];
    q[w + 55] = Ca;
    var ia = q[r + 32];
    q[w + 56] = ia;
    var ya = q[u + 32];
    q[w + 57] = ya;
    var ta = q[n + 32];
    q[w + 58] = ta;
    var Ia = q[k + 32];
    q[w + 59] = Ia;
    h = l[d + 24 >> 2] >> 2;
    var na = q[h + (3 * y | 0) + 2];
    g = (d + 28 | 0) >> 2;
    var Z = l[g];
    f = Z >> 2;
    var ba = Z + 12 * y | 0, ca = l[ba + 4 >> 2], ma = (t[0] = l[ba >> 2], M[0]), ka = (t[0] = ca, M[0]), aa = q[f + (3 * y | 0) + 2], ra = q[h + (3 * z | 0) + 2], ha = Z + 12 * z | 0, za = l[ha + 4 >> 2], X = (t[0] = l[ha >> 2], M[0]), ua = (t[0] = za, M[0]), da = q[f + (3 * z | 0) + 2], fa = q[h + (3 * E | 0) + 2], Aa = Z + 12 * E | 0, Qa = l[Aa + 4 >> 2], pa = (t[0] = l[Aa >> 2], M[0]), cb = (t[0] = Qa, M[0]), Ra = q[f + (3 * E | 0) + 2], Ta = q[h + (3 * H | 0) + 2], $a = Z + 12 * H | 0, va = l[$a + 4 >> 2], Wa = (t[0] = l[$a >> 2], M[0]), fb = (t[0] = va, M[0]), gb = q[f + (3 * H | 0) + 2], Xa = mm(na), Ua = nm(na), Va = mm(ra), pb = nm(ra), nb = mm(fa), La = nm(fa), qb = mm(Ta), bb = nm(Ta);
    e = (b + 272 | 0) >> 2;
    q[e] = 0;
    var Fa = 1 == (l[w + 19] | 0), Ma = (t[0] = Ba, M[0]), wa = (t[0] = oa, M[0]), hb = (t[0] = T, M[0]), Ya = (t[0] = S, M[0]);
    if (Fa) {
        q[w + 60] = 0;
        q[w + 61] = 0;
        q[w + 64] = 1;
        q[w + 66] = 1;
        var Za = ia + ta, Da = 0, Oa = 0, ib = 1, ab = 1
    } else {
        var Ga = (t[0] = L, M[0]), jb = (t[0] = J, M[0]), Ea = (t[0] = $, M[0]), Pa = (t[0] = Q, M[0]), Ja = q[w + 31], db = q[w + 32], xa = La * Ja - nb * db, Sa = nb * Ja + La * db, Ka = q[w + 27] - Pa, tb = q[w + 28] - Ea, kb = La * Ka - nb * tb, ub = nb * Ka + La * tb, rb = q[w + 23] - jb, Bb = q[w + 24] - Ga, lb = Ua * rb - Xa * Bb, yb = Xa * rb + Ua * Bb, xb = b + 240 | 0, Ib = (M[0] = xa, t[0]), wb = (M[0] = Sa, t[0]) | 0;
        l[xb >> 2] = 0 | Ib;
        l[xb + 4 >> 2] = wb;
        var vb = kb * Sa - ub * xa;
        q[w + 66] = vb;
        var zb = lb * Sa - yb * xa;
        q[w + 64] = zb;
        Za = la + ga + ta * vb * vb + ia * zb * zb;
        Da = xa;
        Oa = Sa;
        ib = zb;
        ab = vb
    }
    var Eb = Za;
    q[e] = Eb;
    if (1 == (l[w + 20] | 0)) {
        q[w + 62] = 0;
        q[w + 63] = 0;
        var Cb = q[w + 38];
        q[w + 65] = Cb;
        q[w + 67] = Cb;
        var eb = Cb * Cb * (ya + Ia), sb = 0, ob = 0, Db = Cb, Jb = Cb
    } else {
        var Rb = q[w + 33], Nb = q[w + 34], Ob = bb * Rb - qb * Nb, Lb = qb * Rb + bb * Nb, Pb = q[w + 29] - Ma, Mb = q[w + 30] - wa, Yb = bb * Pb - qb * Mb, Zb = qb * Pb + bb * Mb, fc = q[w + 25] - hb, Ub = q[w + 26] - Ya, jc = pb * fc - Va * Ub, Qb = Va * fc + pb * Ub, mb = q[w + 38], cc = Ob * mb, Fb = Lb * mb, hc = b + 248 | 0, wc = (M[0] = cc, t[0]), pc = (M[0] = Fb, t[0]) | 0;
        l[hc >> 2] = 0 | wc;
        l[hc + 4 >> 2] = pc;
        var qc = mb * (Yb * Lb - Zb * Ob);
        q[w + 67] = qc;
        var $c = mb * (jc * Lb - Qb * Ob);
        q[w + 65] = $c;
        eb = mb * mb * (Ca + qa) + Ia * qc * qc + ya * $c * $c;
        sb = cc;
        ob = Fb;
        Db = $c;
        Jb = qc
    }
    var Fc = Eb + eb;
    q[e] = Fc;
    q[e] = 0 < Fc ? 1 / Fc : 0;
    var sc = b + 156 | 0;
    if (0 == (c[d + 20 | 0] & 1) << 24 >> 24) {
        q[sc >> 2] = 0;
        var kd = gb, wd = Ra, Mc = da, $b = aa, ac = ma, oc = ka, tc = X, Oc = ua, ld = pa, Wc = cb, ad = Wa, Xc = fb
    } else {
        var Cc = q[sc >> 2], fd = ga * Cc, md = qa * Cc, nd = la * Cc, Pc = Ca * Cc, kd = gb - Ia * Cc * Jb, wd = Ra - ta * Cc * ab, Mc = da + ya * Cc * Db, $b = aa + ia * Cc * ib, ac = ma + Da * fd, oc = ka + Oa * fd, tc = X + sb * md, Oc = ua + ob * md, ld = pa - Da * nd, Wc = cb - Oa * nd, ad = Wa - sb * Pc, Xc = fb - ob * Pc
    }
    var gd = l[g] + 12 * y | 0, od = (M[0] = ac, t[0]), pd = (M[0] = oc, t[0]) | 0;
    l[(gd | 0) >> 2] = 0 | od;
    l[(gd + 4 | 0) >> 2] = pd;
    q[(l[g] + 8 >> 2) + (3 * l[A >> 2] | 0)] = $b;
    var Pd = l[g] + 12 * l[p] | 0, Xd = (M[0] = tc, t[0]), qd = (M[0] = Oc, t[0]) | 0;
    l[(Pd | 0) >> 2] = 0 | Xd;
    l[(Pd + 4 | 0) >> 2] = qd;
    q[(l[g] + 8 >> 2) + (3 * l[p] | 0)] = Mc;
    var Qd = l[g] + 12 * l[m] | 0, Qc = (M[0] = ld, t[0]), Jc = (M[0] = Wc, t[0]) | 0;
    l[(Qd | 0) >> 2] = 0 | Qc;
    l[(Qd + 4 | 0) >> 2] = Jc;
    q[(l[g] + 8 >> 2) + (3 * l[m] | 0)] = wd;
    var Kc = l[g] + 12 * l[j] | 0, gc = (M[0] = ad, t[0]), hd = (M[0] = Xc, t[0]) | 0;
    l[(Kc | 0) >> 2] = 0 | gc;
    l[(Kc + 4 | 0) >> 2] = hd;
    q[(l[g] + 8 >> 2) + (3 * l[j] | 0)] = kd
}), 0, (function (b, d) {
    var e, f, g, h, j, k = b >> 2, m = b + 160 | 0, n = l[m >> 2];
    j = (d + 28 | 0) >> 2;
    var p = l[j];
    h = p >> 2;
    f = p + 12 * n | 0;
    e = l[f + 4 >> 2];
    var u = (t[0] = l[f >> 2], M[0]), r = (t[0] = e, M[0]), w = q[h + (3 * n | 0) + 2];
    g = (b + 164 | 0) >> 2;
    e = l[g];
    var x = p + 12 * e | 0;
    f = l[x + 4 >> 2];
    var x = (t[0] = l[x >> 2], M[0]), y = (t[0] = f, M[0]), A = q[h + (3 * e | 0) + 2];
    f = (b + 168 | 0) >> 2;
    e = l[f];
    var C = p + 12 * e | 0, z = l[C + 4 >> 2], C = (t[0] = l[C >> 2], M[0]), z = (t[0] = z, M[0]), D = q[h + (3 * e | 0) + 2];
    e = (b + 172 | 0) >> 2;
    var E = l[e], p = p + 12 * E | 0, G = l[p + 4 >> 2], p = (t[0] = l[p >> 2], M[0]), G = (t[0] = G, M[0]), H = q[h + (3 * E | 0) + 2], F = q[k + 60], I = q[k + 61], E = q[k + 62];
    h = q[k + 63];
    var J = q[k + 64], L = q[k + 66], O = q[k + 65], R = q[k + 67], T = (F * (u - C) + I * (r - z) + E * (x - p) + h * (y - G) + (J * w - L * D) + (O * A - R * H)) * -q[k + 68], S = b + 156 | 0;
    q[S >> 2] += T;
    var S = q[k + 52] * T, U = w + q[k + 56] * T * J, J = q[k + 53] * T, O = A + q[k + 57] * T * O, A = q[k + 54] * T, D = D - q[k + 58] * T * L, w = q[k + 55] * T, k = H - q[k + 59] * T * R, n = l[j] + 12 * n | 0, u = (M[0] = u + F * S, t[0]), r = (M[0] = r + I * S, t[0]) | 0;
    l[(n | 0) >> 2] = 0 | u;
    l[(n + 4 | 0) >> 2] = r;
    q[(l[j] + 8 >> 2) + (3 * l[m >> 2] | 0)] = U;
    m = l[j] + 12 * l[g] | 0;
    x = (M[0] = x + E * J, t[0]);
    y = (M[0] = y + h * J, t[0]) | 0;
    l[(m | 0) >> 2] = 0 | x;
    l[(m + 4 | 0) >> 2] = y;
    q[(l[j] + 8 >> 2) + (3 * l[g] | 0)] = O;
    g = l[j] + 12 * l[f] | 0;
    m = (M[0] = C - F * A, t[0]);
    x = (M[0] = z - I * A, t[0]) | 0;
    l[(g | 0) >> 2] = 0 | m;
    l[(g + 4 | 0) >> 2] = x;
    q[(l[j] + 8 >> 2) + (3 * l[f] | 0)] = D;
    f = l[j] + 12 * l[e] | 0;
    g = (M[0] = p - E * w, t[0]);
    m = (M[0] = G - h * w, t[0]) | 0;
    l[(f | 0) >> 2] = 0 | g;
    l[(f + 4 | 0) >> 2] = m;
    q[(l[j] + 8 >> 2) + (3 * l[e] | 0)] = k
}), 0, (function (b, d) {
    var e, f, g, h, j, k = b >> 2, m = b + 160 | 0, n = l[m >> 2];
    j = (d + 24 | 0) >> 2;
    var p = l[j];
    h = p >> 2;
    var u = p + 12 * n | 0, r = l[u + 4 >> 2], w = (t[0] = l[u >> 2], M[0]), x = (t[0] = r, M[0]), y = q[h + (3 * n | 0) + 2];
    g = (b + 164 | 0) >> 2;
    var A = l[g], C = p + 12 * A | 0, z = l[C + 4 >> 2], D = (t[0] = l[C >> 2], M[0]), E = (t[0] = z, M[0]), G = q[h + (3 * A | 0) + 2];
    f = (b + 168 | 0) >> 2;
    var H = l[f], F = p + 12 * H | 0, I = l[F + 4 >> 2], J = (t[0] = l[F >> 2], M[0]), L = (t[0] = I, M[0]), O = q[h + (3 * H | 0) + 2];
    e = (b + 172 | 0) >> 2;
    var R = l[e], T = p + 12 * R | 0, S = l[T + 4 >> 2], U = (t[0] = l[T >> 2], M[0]), W = (t[0] = S, M[0]), Q = q[h + (3 * R | 0) + 2], $ = mm(y), ea = nm(y), sa = mm(G), Ba = nm(G), oa = mm(O), ga = nm(O), qa = mm(Q), la = nm(Q);
    if (1 == (l[k + 19] | 0)) {
        var Ca = q[k + 56], ia = q[k + 58], ya = Ca + ia, ta = y - O - q[k + 35], Ia = 1, na = 1, Z = 0, ba = 0, ca = Ca, ma = ia
    } else {
        var ka = q[k + 31], aa = q[k + 32], ra = ga * ka - oa * aa, ha = oa * ka + ga * aa, za = q[k + 27] - q[k + 48], X = q[k + 28] - q[k + 49], ua = q[k + 23] - q[k + 44], da = q[k + 24] - q[k + 45], fa = ea * ua - $ * da, Aa = $ * ua + ea * da, Qa = (ga * za - oa * X) * ha - (oa * za + ga * X) * ra, pa = fa * ha - Aa * ra, cb = q[k + 58], Ra = q[k + 56], Ta = fa + (w - J), $a = Aa + (x - L), ya = q[k + 54] + q[k + 52] + cb * Qa * Qa + Ra * pa * pa, ta = (ga * Ta + oa * $a - za) * ka + (Ta * -oa + ga * $a - X) * aa, Ia = pa, na = Qa, Z = ra, ba = ha, ca = Ra, ma = cb
    }
    if (1 == (l[k + 20] | 0)) {
        var va = q[k + 38], Wa = q[k + 57], fb = q[k + 59], gb = va * va * (Wa + fb), Xa = va, Ua = G - Q - q[k + 36], Va = va, pb = 0, nb = 0, La = va, qb = Wa, bb = fb
    } else {
        var Fa = q[k + 33], Ma = q[k + 34], wa = la * Fa - qa * Ma, hb = qa * Fa + la * Ma, Ya = q[k + 29] - q[k + 50], Za = q[k + 30] - q[k + 51], Da = q[k + 25] - q[k + 46], Oa = q[k + 26] - q[k + 47], ib = Ba * Da - sa * Oa, ab = sa * Da + Ba * Oa, Ga = q[k + 38], jb = Ga * ((la * Ya - qa * Za) * hb - (qa * Ya + la * Za) * wa), Ea = Ga * (ib * hb - ab * wa), Pa = q[k + 59], Ja = q[k + 57], db = ib + (D - U), xa = ab + (E - W), gb = Ga * Ga * (q[k + 55] + q[k + 53]) + Pa * jb * jb + Ja * Ea * Ea, Xa = jb, Ua = (la * db + qa * xa - Ya) * Fa + (db * -qa + la * xa - Za) * Ma, Va = Ea, pb = wa * Ga, nb = hb * Ga, La = Ga, qb = Ja, bb = Pa
    }
    var Sa = ya + gb, Ka = 0 < Sa ? -(ta + La * Ua - q[k + 37]) / Sa : 0, tb = q[k + 52] * Ka, kb = x + ba * tb, ub = y + ca * Ka * Ia, rb = q[k + 53] * Ka, Bb = D + pb * rb, lb = E + nb * rb, yb = G + qb * Ka * Va, xb = q[k + 54] * Ka, Ib = J - Z * xb, wb = L - ba * xb, vb = O - ma * Ka * na, zb = q[k + 55] * Ka, Eb = U - pb * zb, Cb = W - nb * zb, eb = Q - bb * Ka * Xa, sb = (M[0] = w + Z * tb, t[0]), ob = (M[0] = kb, t[0]) | 0;
    l[(u | 0) >> 2] = 0 | sb;
    l[(u + 4 | 0) >> 2] = ob;
    q[(l[j] + 8 >> 2) + (3 * l[m >> 2] | 0)] = ub;
    var Db = l[j] + 12 * l[g] | 0, Jb = (M[0] = Bb, t[0]), Rb = (M[0] = lb, t[0]) | 0;
    l[(Db | 0) >> 2] = 0 | Jb;
    l[(Db + 4 | 0) >> 2] = Rb;
    q[(l[j] + 8 >> 2) + (3 * l[g] | 0)] = yb;
    var Nb = l[j] + 12 * l[f] | 0, Ob = (M[0] = Ib, t[0]), Lb = (M[0] = wb, t[0]) | 0;
    l[(Nb | 0) >> 2] = 0 | Ob;
    l[(Nb + 4 | 0) >> 2] = Lb;
    q[(l[j] + 8 >> 2) + (3 * l[f] | 0)] = vb;
    var Pb = l[j] + 12 * l[e] | 0, Mb = (M[0] = Eb, t[0]), Yb = (M[0] = Cb, t[0]) | 0;
    l[(Pb | 0) >> 2] = 0 | Mb;
    l[(Pb + 4 | 0) >> 2] = Yb;
    q[(l[j] + 8 >> 2) + (3 * l[e] | 0)] = eb;
    return 1
}), 0, (function () {
    var b = a;
    V(N.Ng | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
    a = b
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d) {
    var e = d + 76 | 0, f = l[e + 4 >> 2];
    l[b >> 2] = l[e >> 2];
    l[b + 4 >> 2] = f
}), 0, (function (b, d) {
    var e;
    e = l[d + 52 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 68 >> 2], h = q[e + 5], j = q[d + 72 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d, e) {
    var f = q[d + 100 >> 2] * e;
    q[b >> 2] = q[d + 96 >> 2] * e;
    q[b + 4 >> 2] = f
}), 0, Kb(0), 0, (function () {
    var b = a;
    V(N.rh | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
    a = b
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d) {
    var e, f, g, h = b >> 2;
    e = l[h + 13];
    g = e >> 2;
    var j = l[g + 2];
    f = (b + 116 | 0) >> 2;
    l[f] = j;
    var k = b + 128 | 0;
    e = e + 28 | 0;
    var m = l[e + 4 >> 2];
    l[k >> 2] = l[e >> 2];
    l[k + 4 >> 2] = m;
    var n = b + 136 | 0;
    q[n >> 2] = q[g + 30];
    var p = b + 140 | 0;
    q[p >> 2] = q[g + 32];
    e = l[d + 24 >> 2];
    var u = e + 12 * j | 0, m = l[u + 4 >> 2], r = (t[0] = l[u >> 2], M[0]), w = (t[0] = m, M[0]), x = q[(e + 8 >> 2) + (3 * j | 0)];
    e = (d + 28 | 0) >> 2;
    var y = l[e], m = y + 12 * j | 0, u = l[m + 4 >> 2], m = (t[0] = l[m >> 2], M[0]), u = (t[0] = u, M[0]), j = q[(y + 8 >> 2) + (3 * j | 0)], y = mm(x), A = nm(x), C = q[g + 29], z = 6.2831854820251465 * q[h + 21], x = q[d >> 2];
    g = x * C * z * z;
    C = 2 * C * q[h + 22] * z + g;
    1.1920928955078125e-7 < C || P(N.da | 0, 125, N.me | 0, N.jh | 0);
    x *= C;
    x = 0 != x ? 1 / x : x;
    q[h + 27] = x;
    g *= x;
    q[h + 23] = g;
    C = q[h + 17] - q[k >> 2];
    z = q[h + 18] - q[h + 33];
    k = A * C - y * z;
    y = y * C + A * z;
    A = b + 120 | 0;
    C = (M[0] = k, t[0]);
    z = (M[0] = y, t[0]) | 0;
    l[(A | 0) >> 2] = 0 | C;
    l[(A + 4 | 0) >> 2] = z;
    n = q[n >> 2];
    p = q[p >> 2];
    A = n + p * y * y + x;
    C = k * -p * y;
    x = n + p * k * k + x;
    z = A * x - C * C;
    z = 0 != z ? 1 / z : z;
    C *= -z;
    q[h + 36] = z * x;
    q[h + 37] = C;
    q[h + 38] = C;
    q[h + 39] = z * A;
    x = b + 160 | 0;
    r = r + k - q[h + 19];
    w = w + y - q[h + 20];
    A = (M[0] = r, t[0]);
    C = (M[0] = w, t[0]);
    l[(x | 0) >> 2] = 0 | A;
    l[(x + 4 | 0) >> 2] = C | 0;
    q[x >> 2] = r * g;
    q[h + 41] = w * g;
    r = .9800000190734863 * j;
    j = b + 96 | 0;
    0 == (c[d + 20 | 0] & 1) << 24 >> 24 ? (q[j >> 2] = 0, q[h + 25] = 0, h = m) : (w = q[d + 8 >> 2], j |= 0, h = q[j >> 2] * w, q[j >> 2] = h, j = b + 100 | 0, w *= q[j >> 2], q[j >> 2] = w, r += p * (k * w - y * h), h = m + h * n, u += w * n);
    m = l[e] + 12 * l[f] | 0;
    h = (M[0] = h, t[0]);
    u = (M[0] = u, t[0]) | 0;
    l[(m | 0) >> 2] = 0 | h;
    l[(m + 4 | 0) >> 2] = u;
    q[(l[e] + 8 >> 2) + (3 * l[f] | 0)] = r
}), 0, (function (b, d) {
    var e, f, g, h = b >> 2, j = b + 116 | 0, k = l[j >> 2];
    g = (d + 28 | 0) >> 2;
    var m = l[g], n = m + 12 * k | 0, p = l[n + 4 >> 2], n = (t[0] = l[n >> 2], M[0]), p = (t[0] = p, M[0]), m = q[(m + 8 >> 2) + (3 * k | 0)], u = q[h + 31], r = q[h + 30], w = q[h + 27], x = b + 96 | 0;
    f = (x | 0) >> 2;
    var y = q[f];
    e = (b + 100 | 0) >> 2;
    var A = q[e], C = -(n + u * -m + q[h + 40] + y * w), z = -(p + r * m + q[h + 41] + A * w), w = q[h + 36] * C + q[h + 38] * z, z = q[h + 37] * C + q[h + 39] * z, C = l[x + 4 >> 2], x = (t[0] = l[x >> 2], M[0]), C = (t[0] = C, M[0]), y = y + w;
    q[f] = y;
    A += z;
    q[e] = A;
    w = q[d >> 2] * q[h + 26];
    z = y * y + A * A;
    z > w * w ? (z = Fh(z), w /= z, y *= w, q[f] = y, f = A * w, q[e] = f, e = y) : (e = y, f = A);
    e -= x;
    f -= C;
    x = q[h + 34];
    h = m + q[h + 35] * (r * f - u * e);
    k = l[g] + 12 * k | 0;
    n = (M[0] = n + e * x, t[0]);
    p = (M[0] = p + f * x, t[0]) | 0;
    l[(k | 0) >> 2] = 0 | n;
    l[(k + 4 | 0) >> 2] = p;
    q[(l[g] + 8 >> 2) + (3 * l[j >> 2] | 0)] = h
}), 0, Kb(1), 0, (function (b, d) {
    var e;
    e = l[d + 48 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 68 >> 2], h = q[e + 5], j = q[d + 72 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d) {
    var e;
    e = l[d + 52 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 76 >> 2], h = q[e + 5], j = q[d + 80 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d, e) {
    var d = d >> 2, f = q[d + 26], g = q[d + 29] + q[d + 28], h = (q[d + 49] * f + q[d + 47] * g) * e;
    q[b >> 2] = (q[d + 48] * f + q[d + 46] * g) * e;
    q[b + 4 >> 2] = h
}), 0, (function (b, d) {
    return q[b + 108 >> 2] * d
}), 0, (function (b) {
    var d = b >> 2, e = a, f = l[l[d + 12] + 8 >> 2], g = l[l[d + 13] + 8 >> 2];
    V(N.eg | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
    V(N.A | 0, (s = a, a += 4, l[s >> 2] = f, s));
    V(N.B | 0, (s = a, a += 4, l[s >> 2] = g, s));
    f = c[b + 61 | 0] & 1;
    V(N.C | 0, (s = a, a += 4, l[s >> 2] = f, s));
    f = q[d + 17];
    g = q[d + 18];
    V(N.K | 0, (s = a, a += 16, Ee[0] = f, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = g, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    f = q[d + 19];
    g = q[d + 20];
    V(N.L | 0, (s = a, a += 16, Ee[0] = f, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = g, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    f = q[d + 21];
    g = q[d + 22];
    V(N.Xb | 0, (s = a, a += 16, Ee[0] = f, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = g, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    f = q[d + 25];
    V(N.ab | 0, (s = a, a += 8, Ee[0] = f, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    f = c[b + 136 | 0] & 1;
    V(N.Zb | 0, (s = a, a += 4, l[s >> 2] = f, s));
    f = q[d + 30];
    V(N.$e | 0, (s = a, a += 8, Ee[0] = f, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    f = q[d + 31];
    V(N.kf | 0, (s = a, a += 8, Ee[0] = f, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    b = c[b + 137 | 0] & 1;
    V(N.bb | 0, (s = a, a += 4, l[s >> 2] = b, s));
    b = q[d + 33];
    V(N.cb | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    b = q[d + 32];
    V(N.Af | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    d = l[d + 14];
    V(N.z | 0, (s = a, a += 4, l[s >> 2] = d, s));
    a = e
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d) {
    var e, f, g, h, j, k, m = b >> 2, n = l[m + 12];
    k = n >> 2;
    var p = o[k + 2], u = b + 144 | 0;
    l[u >> 2] = p;
    var r = l[m + 13];
    j = r >> 2;
    var w = l[j + 2];
    h = (b + 148 | 0) >> 2;
    l[h] = w;
    var x = n + 28 | 0, y = b + 152 | 0, A = l[x >> 2], C = l[x + 4 >> 2];
    l[y >> 2] = A;
    l[y + 4 >> 2] = C;
    var z = r + 28 | 0, D = b + 160 | 0, E = l[z >> 2], G = l[z + 4 >> 2];
    l[D >> 2] = E;
    l[D + 4 >> 2] = G;
    var H = q[k + 30];
    q[m + 42] = H;
    var F = q[j + 30];
    q[m + 43] = F;
    var I = q[k + 32];
    q[m + 44] = I;
    var J = q[j + 32];
    q[m + 45] = J;
    var L = l[d + 24 >> 2], O = L + 12 * p | 0, R = l[O + 4 >> 2], T = (t[0] = l[O >> 2], M[0]), S = (t[0] = R, M[0]), U = q[(L + 8 >> 2) + (3 * p | 0)];
    g = (d + 28 | 0) >> 2;
    var W = l[g], Q = W + 12 * p | 0, $ = l[Q + 4 >> 2], ea = (t[0] = l[Q >> 2], M[0]), sa = (t[0] = $, M[0]), Ba = q[(W + 8 >> 2) + (3 * p | 0)], oa = L + 12 * w | 0, ga = l[oa + 4 >> 2], qa = (t[0] = l[oa >> 2], M[0]), la = (t[0] = ga, M[0]), Ca = q[(L + 8 >> 2) + (3 * w | 0)], ia = W + 12 * w | 0, ya = l[ia + 4 >> 2], ta = (t[0] = l[ia >> 2], M[0]), Ia = (t[0] = ya, M[0]), na = q[(W + 8 >> 2) + (3 * w | 0)], Z = mm(U), ba = nm(U), ca = mm(Ca), ma = nm(Ca), ka = q[m + 17], aa = (t[0] = A, M[0]), ra = ka - aa, ha = q[m + 18], za = (t[0] = C, M[0]), X = ha - za, ua = ba * ra - Z * X, da = Z * ra + ba * X, fa = q[m + 19], Aa = (t[0] = E, M[0]), Qa = fa - Aa, pa = q[m + 20], cb = (t[0] = G, M[0]), Ra = pa - cb, Ta = ma * Qa - ca * Ra, $a = ca * Qa + ma * Ra, va = qa - T + Ta - ua, Wa = la - S + $a - da, fb = q[m + 21], gb = q[m + 22], Xa = ba * fb - Z * gb, Ua = Z * fb + ba * gb, Va = b + 184 | 0, pb = (M[0] = Xa, t[0]), nb = (M[0] = Ua, t[0]) | 0;
    l[Va >> 2] = 0 | pb;
    l[Va + 4 >> 2] = nb;
    var La = va + ua, qb = Wa + da, bb = La * Ua - qb * Xa;
    q[m + 52] = bb;
    var Fa = Ta * Ua - $a * Xa;
    q[m + 53] = Fa;
    var Ma = H + F, wa = I * bb, hb = J * Fa, Ya = Ma + wa * bb + hb * Fa;
    q[m + 63] = 0 < Ya ? 1 / Ya : Ya;
    var Za = q[m + 23], Da = q[m + 24], Oa = ba * Za - Z * Da, ib = Z * Za + ba * Da, ab = b + 192 | 0, Ga = (M[0] = Oa, t[0]), jb = (M[0] = ib, t[0]) | 0;
    l[ab >> 2] = 0 | Ga;
    l[ab + 4 >> 2] = jb;
    var Ea = La * ib - qb * Oa;
    q[m + 50] = Ea;
    var Pa = Ta * ib - $a * Oa;
    q[m + 51] = Pa;
    var Ja = I * Ea, db = J * Pa, xa = Ja + db, Sa = Ja * bb + db * Fa, Ka = I + J, tb = 0 == Ka ? 1 : Ka, kb = wa + hb;
    q[m + 54] = Ma + Ja * Ea + db * Pa;
    q[m + 55] = xa;
    q[m + 56] = Sa;
    q[m + 57] = xa;
    q[m + 58] = tb;
    q[m + 59] = kb;
    q[m + 60] = Sa;
    q[m + 61] = kb;
    q[m + 62] = Ya;
    if (0 == (c[b + 136 | 0] & 1) << 24 >> 24) {
        l[m + 35] = 0, q[m + 28] = 0
    } else {
        var ub = Xa * va + Ua * Wa, rb = q[m + 31], Bb = q[m + 30], lb = rb - Bb;
        if (.009999999776482582 > (0 < lb ? lb : -lb)) {
            l[m + 35] = 3
        } else {
            if (ub > Bb) {
                f = (b + 140 | 0) >> 2, ub < rb ? (l[f] = 0, q[m + 28] = 0) : 2 != (l[f] | 0) && (l[f] = 2, q[m + 28] = 0)
            } else {
                var yb = b + 140 | 0;
                1 != (l[yb >> 2] | 0) && (l[yb >> 2] = 1, q[m + 28] = 0)
            }
        }
    }
    0 == (c[b + 137 | 0] & 1) << 24 >> 24 && (q[m + 29] = 0);
    var xb = b + 104 | 0;
    if (0 == (c[d + 20 | 0] & 1) << 24 >> 24) {
        e = xb >> 2;
        l[e] = 0;
        l[e + 1] = 0;
        l[e + 2] = 0;
        l[e + 3] = 0;
        var Ib = na, wb = Ba, vb = ea, zb = sa, Eb = ta, Cb = Ia
    } else {
        var eb = d + 8 | 0, sb = q[eb >> 2], ob = xb | 0, Db = q[ob >> 2] * sb;
        q[ob >> 2] = Db;
        var Jb = b + 108 | 0, Rb = q[Jb >> 2] * sb;
        q[Jb >> 2] = Rb;
        var Nb = b + 112 | 0, Ob = q[Nb >> 2] * sb;
        q[Nb >> 2] = Ob;
        var Lb = b + 116 | 0, Pb = q[Lb >> 2] * q[eb >> 2];
        q[Lb >> 2] = Pb;
        var Mb = Pb + Ob, Yb = Oa * Db + Xa * Mb, Zb = ib * Db + Ua * Mb, Ib = na + J * (Db * Pa + Rb + Mb * Fa), wb = Ba - I * (Db * Ea + Rb + Mb * bb), vb = ea - Yb * H, zb = sa - Zb * H, Eb = ta + Yb * F, Cb = Ia + Zb * F
    }
    var fc = l[g] + 12 * p | 0, Ub = (M[0] = vb, t[0]), jc = (M[0] = zb, t[0]) | 0;
    l[(fc | 0) >> 2] = 0 | Ub;
    l[(fc + 4 | 0) >> 2] = jc;
    q[(l[g] + 8 >> 2) + (3 * l[u >> 2] | 0)] = wb;
    var Qb = l[g] + 12 * l[h] | 0, mb = (M[0] = Eb, t[0]), cc = (M[0] = Cb, t[0]) | 0;
    l[(Qb | 0) >> 2] = 0 | mb;
    l[(Qb + 4 | 0) >> 2] = cc;
    q[(l[g] + 8 >> 2) + (3 * l[h] | 0)] = Ib
}), 0, (function (b, d) {
    var e, f, g, h, j, k, m, n = b >> 2, p = a;
    a += 24;
    var u, r = p + 12;
    m = r >> 2;
    k = (b + 144 | 0) >> 2;
    var w = o[k];
    j = (d + 28 | 0) >> 2;
    var x = l[j], y = x + 12 * w | 0, A = l[y + 4 >> 2], C = (t[0] = l[y >> 2], M[0]), z = (t[0] = A, M[0]), D = q[(x + 8 >> 2) + (3 * w | 0)];
    h = (b + 148 | 0) >> 2;
    var E = l[h], G = x + 12 * E | 0, H = l[G + 4 >> 2], F = (t[0] = l[G >> 2], M[0]), I = (t[0] = H, M[0]), J = q[(x + 8 >> 2) + (3 * E | 0)], L = q[n + 42], O = q[n + 43], R = q[n + 44], T = q[n + 45];
    if (0 == (c[b + 137 | 0] & 1) << 24 >> 24) {
        var S = J, U = D, W = C, Q = z, $ = F, ea = I
    } else {
        if (3 == (l[n + 35] | 0)) {
            S = J, U = D, W = C, Q = z, $ = F, ea = I
        } else {
            var sa = q[n + 46], Ba = q[n + 47], oa = q[n + 53], ga = q[n + 52], qa = b + 116 | 0, la = q[qa >> 2], Ca = q[d >> 2] * q[n + 32], ia = la + q[n + 63] * (q[n + 33] - (sa * (F - C) + Ba * (I - z) + oa * J - ga * D)), ya = -Ca, ta = ia < Ca ? ia : Ca, Ia = ta < ya ? ya : ta;
            q[qa >> 2] = Ia;
            var na = Ia - la, Z = sa * na, ba = Ba * na, S = J + T * na * oa, U = D - R * na * ga, W = C - Z * L, Q = z - ba * L, $ = F + Z * O, ea = I + ba * O
        }
    }
    var ca = $ - W, ma = ea - Q, ka = b + 192 | 0, aa = q[ka >> 2], ra = b + 196 | 0, ha = q[ra >> 2], za = b + 204 | 0, X = q[za >> 2], ua = b + 200 | 0, da = q[ua >> 2], fa = aa * ca + ha * ma + X * S - da * U, Aa = S - U;
    if (0 == (c[b + 136 | 0] & 1) << 24 >> 24) {
        u = 13
    } else {
        var Qa = b + 140 | 0;
        if (0 == (l[Qa >> 2] | 0)) {
            u = 13
        } else {
            var pa = b + 184 | 0, cb = b + 188 | 0, Ra = b + 212 | 0, Ta = b + 208 | 0;
            g = (b + 104 | 0) >> 2;
            var $a = q[g];
            f = (b + 108 | 0) >> 2;
            var va = q[f];
            e = (b + 112 | 0) >> 2;
            var Wa = q[e], fb = b + 216 | 0, gb = -fa, Xa = -Aa, Ua = -(q[pa >> 2] * ca + q[cb >> 2] * ma + q[Ra >> 2] * S - q[Ta >> 2] * U);
            q[m] = gb;
            q[m + 1] = Xa;
            q[m + 2] = Ua;
            pn(p, fb, r);
            var Va = p | 0;
            q[g] += q[Va >> 2];
            var pb = p + 4 | 0;
            q[f] += q[pb >> 2];
            var nb = p + 8 | 0, La = q[e] + q[nb >> 2];
            q[e] = La;
            var qb = l[Qa >> 2];
            if (1 == (qb | 0)) {
                var bb = 0 < La ? La : 0, Fa = q[e] = bb
            } else {
                if (2 == (qb | 0)) {
                    var Ma = 0 > La ? La : 0, Fa = q[e] = Ma
                } else {
                    Fa = La
                }
            }
            var wa = Fa - Wa, hb = gb - q[n + 60] * wa, Ya = Xa - q[n + 61] * wa, Za = q[fb >> 2], Da = q[n + 57], Oa = q[n + 55], ib = q[n + 58], ab = Za * ib - Da * Oa, Ga = 0 != ab ? 1 / ab : ab, jb = Ga * (ib * hb - Da * Ya) + $a, Ea = Ga * (Za * Ya - Oa * hb) + va;
            q[g] = jb;
            q[f] = Ea;
            var Pa = jb - $a, Ja = Ea - va;
            q[Va >> 2] = Pa;
            q[pb >> 2] = Ja;
            q[nb >> 2] = wa;
            var db = Pa * q[za >> 2] + Ja + wa * q[Ra >> 2], xa = Pa * q[ua >> 2] + Ja + wa * q[Ta >> 2], Sa = q[ka >> 2] * Pa + q[pa >> 2] * wa, Ka = q[ra >> 2] * Pa + q[cb >> 2] * wa, tb = l[k];
            u = 16
        }
    }
    if (13 == u) {
        var kb = -fa, ub = -Aa, rb = q[n + 54], Bb = q[n + 57], lb = q[n + 55], yb = q[n + 58], xb = rb * yb - Bb * lb, Ib = 0 != xb ? 1 / xb : xb, wb = Ib * (yb * kb - Bb * ub), vb = Ib * (rb * ub - lb * kb), zb = b + 104 | 0;
        q[zb >> 2] += wb;
        var Eb = b + 108 | 0;
        q[Eb >> 2] += vb;
        db = wb * X + vb;
        xa = wb * da + vb;
        Sa = aa * wb;
        Ka = ha * wb;
        tb = w
    }
    var Cb = S + T * db, eb = U - R * xa, sb = Q - Ka * L, ob = $ + Sa * O, Db = ea + Ka * O, Jb = l[j] + 12 * tb | 0, Rb = (M[0] = W - Sa * L, t[0]), Nb = (M[0] = sb, t[0]) | 0;
    l[(Jb | 0) >> 2] = 0 | Rb;
    l[(Jb + 4 | 0) >> 2] = Nb;
    q[(l[j] + 8 >> 2) + (3 * l[k] | 0)] = eb;
    var Ob = l[j] + 12 * l[h] | 0, Lb = (M[0] = ob, t[0]), Pb = (M[0] = Db, t[0]) | 0;
    l[(Ob | 0) >> 2] = 0 | Lb;
    l[(Ob + 4 | 0) >> 2] = Pb;
    q[(l[j] + 8 >> 2) + (3 * l[h] | 0)] = Cb;
    a = p
}), 0, (function (b, d) {
    var e, f, g = b >> 2, h = b + 144 | 0, j = l[h >> 2];
    f = (d + 24 | 0) >> 2;
    var k = l[f], m = k + 12 * j | 0, n = l[m + 4 >> 2], p = (t[0] = l[m >> 2], M[0]), u = (t[0] = n, M[0]), r = q[(k + 8 >> 2) + (3 * j | 0)];
    e = (b + 148 | 0) >> 2;
    var w = l[e], x = k + 12 * w | 0, y = l[x + 4 >> 2], A = (t[0] = l[x >> 2], M[0]), C = (t[0] = y, M[0]), z = q[(k + 8 >> 2) + (3 * w | 0)], D = mm(r), E = nm(r), G = mm(z), H = nm(z), F = q[g + 42], I = q[g + 43], J = q[g + 44], L = q[g + 45], O = q[g + 17] - q[g + 38], R = q[g + 18] - q[g + 39], T = E * O - D * R, S = D * O + E * R, U = q[g + 19] - q[g + 40], W = q[g + 20] - q[g + 41], Q = H * U - G * W, $ = G * U + H * W, ea = A + Q - p - T, sa = C + $ - u - S, Ba = q[g + 21], oa = q[g + 22], ga = E * Ba - D * oa, qa = D * Ba + E * oa, la = ea + T, Ca = sa + S, ia = la * qa - Ca * ga, ya = Q * qa - $ * ga, ta = q[g + 23], Ia = q[g + 24], na = E * ta - D * Ia, Z = D * ta + E * Ia, ba = la * Z - Ca * na, ca = Q * Z - $ * na, ma = na * ea + Z * sa, ka = z - r - q[g + 25], aa = 0 < ma ? ma : -ma, ra = 0 < ka ? ka : -ka;
    if (0 == (c[b + 136 | 0] & 1) << 24 >> 24) {
        var ha = 0, za = 0, X = aa
    } else {
        var ua = ga * ea + qa * sa, da = q[g + 31], fa = q[g + 30], Aa = da - fa;
        if (.009999999776482582 > (0 < Aa ? Aa : -Aa)) {
            var Qa = .20000000298023224 > ua ? ua : .20000000298023224, pa = 0 < ua ? ua : -ua, cb = aa > pa ? aa : pa, ha = -.20000000298023224 > Qa ? -.20000000298023224 : Qa, za = 1, X = cb
        } else {
            if (ua > fa) {
                if (ua < da) {
                    za = ha = 0, X = aa
                } else {
                    var Ra = ua - da, Ta = Ra - .004999999888241291, $a = .20000000298023224 > Ta ? Ta : .20000000298023224, va = aa > Ra ? aa : Ra, ha = 0 > $a ? 0 : $a, za = 1, X = va
                }
            } else {
                var Wa = ua - fa + .004999999888241291, fb = 0 > Wa ? Wa : 0, gb = fa - ua, Xa = aa > gb ? aa : gb, ha = -.20000000298023224 > fb ? -.20000000298023224 : fb, za = 1, X = Xa
            }
        }
    }
    var Ua = F + I, Va = J * ba, pb = L * ca, nb = Ua + Va * ba + pb * ca, La = Va + pb;
    if (za) {
        var qb = Va * ia + pb * ya, bb = J + L, Fa = 0 == bb ? 1 : bb, Ma = J * ia, wa = L * ya, hb = Ma + wa, Ya = Ua + Ma * ia + wa * ya, Za = -ma, Da = -ka, Oa = -ha, ib = Fa * Ya - hb * hb, ab = hb * qb - La * Ya, Ga = La * hb - Fa * qb, jb = nb * ib + La * ab + qb * Ga, Ea = 0 != jb ? 1 / jb : jb, Pa = hb * Za, Ja = Ea * (ib * Za + ab * Da + Ga * Oa), db = Ea * (nb * (Ya * Da - hb * Oa) + La * (qb * Oa - Ya * Za) + qb * (Pa - qb * Da)), xa = Ea * (nb * (Fa * Oa - hb * Da) + La * (Pa - La * Oa) + qb * (La * Da - Fa * Za))
    } else {
        var Sa = J + L, Ka = 0 == Sa ? 1 : Sa, tb = -ma, kb = -ka, ub = nb * Ka - La * La, rb = 0 != ub ? 1 / ub : ub, Ja = rb * (Ka * tb - La * kb), db = rb * (nb * kb - La * tb), xa = 0
    }
    var Bb = na * Ja + ga * xa, lb = Z * Ja + qa * xa, yb = u - lb * F, xb = r - J * (Ja * ba + db + xa * ia), Ib = A + Bb * I, wb = C + lb * I, vb = z + L * (Ja * ca + db + xa * ya), zb = (M[0] = p - Bb * F, t[0]), Eb = (M[0] = yb, t[0]) | 0;
    l[(m | 0) >> 2] = 0 | zb;
    l[(m + 4 | 0) >> 2] = Eb;
    q[(l[f] + 8 >> 2) + (3 * l[h >> 2] | 0)] = xb;
    var Cb = l[f] + 12 * l[e] | 0, eb = (M[0] = Ib, t[0]), sb = (M[0] = wb, t[0]) | 0;
    l[(Cb | 0) >> 2] = 0 | eb;
    l[(Cb + 4 | 0) >> 2] = sb;
    q[(l[f] + 8 >> 2) + (3 * l[e] | 0)] = vb;
    return.004999999888241291 < X ? 0 : .03490658849477768 >= ra
}), 0, (function (b, d) {
    var e;
    e = l[d + 48 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 92 >> 2], h = q[e + 5], j = q[d + 96 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d) {
    var e;
    e = l[d + 52 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 100 >> 2], h = q[e + 5], j = q[d + 104 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d, e) {
    var f = q[d + 116 >> 2], g = q[d + 140 >> 2] * f * e;
    q[b >> 2] = q[d + 136 >> 2] * f * e;
    q[b + 4 >> 2] = g
}), 0, Kb(0), 0, (function (b) {
    var d = b >> 2, e = a, f = l[l[d + 12] + 8 >> 2], g = l[l[d + 13] + 8 >> 2];
    V(N.Pg | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
    V(N.A | 0, (s = a, a += 4, l[s >> 2] = f, s));
    V(N.B | 0, (s = a, a += 4, l[s >> 2] = g, s));
    b = c[b + 61 | 0] & 1;
    V(N.C | 0, (s = a, a += 4, l[s >> 2] = b, s));
    b = q[d + 17];
    f = q[d + 18];
    V(N.wh | 0, (s = a, a += 16, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = f, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    b = q[d + 19];
    f = q[d + 20];
    V(N.Bh | 0, (s = a, a += 16, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = f, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    b = q[d + 23];
    f = q[d + 24];
    V(N.K | 0, (s = a, a += 16, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = f, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    b = q[d + 25];
    f = q[d + 26];
    V(N.L | 0, (s = a, a += 16, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = f, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    b = q[d + 21];
    V(N.af | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    b = q[d + 22];
    V(N.lf | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    b = q[d + 28];
    V(N.Gb | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    d = l[d + 14];
    V(N.z | 0, (s = a, a += 4, l[s >> 2] = d, s));
    a = e
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d) {
    var e, f, g, h, j = b >> 2, k = l[j + 12];
    h = k >> 2;
    var m = l[h + 2], n = b + 120 | 0;
    l[n >> 2] = m;
    var p = l[j + 13];
    g = p >> 2;
    var u = l[g + 2];
    f = (b + 124 | 0) >> 2;
    l[f] = u;
    var r = k + 28 | 0, w = b + 160 | 0, x = l[r >> 2], y = l[r + 4 >> 2];
    l[w >> 2] = x;
    l[w + 4 >> 2] = y;
    var A = p + 28 | 0, C = b + 168 | 0, z = l[A >> 2], D = l[A + 4 >> 2];
    l[C >> 2] = z;
    l[C + 4 >> 2] = D;
    var E = q[h + 30];
    q[j + 44] = E;
    var G = q[g + 30];
    q[j + 45] = G;
    var H = q[h + 32];
    q[j + 46] = H;
    var F = q[g + 32];
    q[j + 47] = F;
    var I = l[d + 24 >> 2], J = I + 12 * m | 0, L = l[J + 4 >> 2], O = (t[0] = l[J >> 2], M[0]), R = (t[0] = L, M[0]), T = q[(I + 8 >> 2) + (3 * m | 0)];
    e = (d + 28 | 0) >> 2;
    var S = l[e], U = S + 12 * m | 0, W = l[U + 4 >> 2], Q = (t[0] = l[U >> 2], M[0]), $ = (t[0] = W, M[0]), ea = q[(S + 8 >> 2) + (3 * m | 0)], sa = I + 12 * u | 0, Ba = l[sa + 4 >> 2], oa = (t[0] = l[sa >> 2], M[0]), ga = (t[0] = Ba, M[0]), qa = q[(I + 8 >> 2) + (3 * u | 0)], la = S + 12 * u | 0, Ca = l[la + 4 >> 2], ia = (t[0] = l[la >> 2], M[0]), ya = (t[0] = Ca, M[0]), ta = q[(S + 8 >> 2) + (3 * u | 0)], Ia = mm(T), na = nm(T), Z = mm(qa), ba = nm(qa), ca = b + 144 | 0, ma = q[j + 23], ka = (t[0] = x, M[0]), aa = ma - ka, ra = q[j + 24], ha = (t[0] = y, M[0]), za = ra - ha, X = na * aa - Ia * za, ua = Ia * aa + na * za, da = (M[0] = X, t[0]), fa = (M[0] = ua, t[0]) | 0;
    l[ca >> 2] = 0 | da;
    l[ca + 4 >> 2] = fa;
    var Aa = b + 152 | 0, Qa = q[j + 25], pa = (t[0] = z, M[0]), cb = Qa - pa, Ra = q[j + 26], Ta = (t[0] = D, M[0]), $a = Ra - Ta, va = ba * cb - Z * $a, Wa = Z * cb + ba * $a, fb = (M[0] = va, t[0]), gb = (M[0] = Wa, t[0]) | 0;
    l[Aa >> 2] = 0 | fb;
    l[Aa + 4 >> 2] = gb;
    var Xa = b + 128 | 0, Ua = O + X - q[j + 17], Va = R + ua - q[j + 18], pb = (M[0] = Ua, t[0]), nb = (M[0] = Va, t[0]) | 0;
    l[Xa >> 2] = 0 | pb;
    l[Xa + 4 >> 2] = nb;
    var La = b + 136 | 0, qb = oa + va - q[j + 19], bb = ga + Wa - q[j + 20], Fa = (M[0] = qb, t[0]), Ma = (M[0] = bb, t[0]) | 0;
    l[La >> 2] = 0 | Fa;
    l[La + 4 >> 2] = Ma;
    var wa = Xa | 0, hb = b + 132 | 0, Ya = Fh(Ua * Ua + Va * Va), Za = La | 0, Da = b + 140 | 0, Oa = Fh(qb * qb + bb * bb);
    if (.04999999701976776 < Ya) {
        var ib = 1 / Ya, ab = Ua * ib;
        q[wa >> 2] = ab;
        var Ga = Va * ib, jb = ab
    } else {
        jb = Ga = q[wa >> 2] = 0
    }
    q[hb >> 2] = Ga;
    if (.04999999701976776 < Oa) {
        var Ea = 1 / Oa, Pa = qb * Ea;
        q[Za >> 2] = Pa;
        var Ja = bb * Ea, db = Pa
    } else {
        db = Ja = q[Za >> 2] = 0
    }
    q[Da >> 2] = Ja;
    var xa = X * Ga - ua * jb, Sa = va * Ja - Wa * db, Ka = q[j + 28], tb = E + H * xa * xa + Ka * Ka * (G + F * Sa * Sa);
    q[j + 48] = 0 < tb ? 1 / tb : tb;
    if (0 == (c[d + 20 | 0] & 1) << 24 >> 24) {
        q[j + 29] = 0;
        var kb = ta, ub = ea, rb = Q, Bb = $, lb = ia, yb = ya
    } else {
        var xb = b + 116 | 0, Ib = q[xb >> 2] * q[d + 8 >> 2];
        q[xb >> 2] = Ib;
        var wb = -Ib, vb = jb * wb, zb = Ga * wb, Eb = Ib * -Ka, Cb = db * Eb, eb = Ja * Eb, kb = ta + F * (va * eb - Wa * Cb), ub = ea + H * (X * zb - ua * vb), rb = Q + vb * E, Bb = $ + zb * E, lb = ia + Cb * G, yb = ya + eb * G
    }
    var sb = l[e] + 12 * m | 0, ob = (M[0] = rb, t[0]), Db = (M[0] = Bb, t[0]) | 0;
    l[(sb | 0) >> 2] = 0 | ob;
    l[(sb + 4 | 0) >> 2] = Db;
    q[(l[e] + 8 >> 2) + (3 * l[n >> 2] | 0)] = ub;
    var Jb = l[e] + 12 * l[f] | 0, Rb = (M[0] = lb, t[0]), Nb = (M[0] = yb, t[0]) | 0;
    l[(Jb | 0) >> 2] = 0 | Rb;
    l[(Jb + 4 | 0) >> 2] = Nb;
    q[(l[e] + 8 >> 2) + (3 * l[f] | 0)] = kb
}), 0, (function (b, d) {
    var e, f, g = b >> 2, h = b + 120 | 0, j = l[h >> 2];
    f = (d + 28 | 0) >> 2;
    var k = l[f], m = k + 12 * j | 0;
    e = l[m + 4 >> 2];
    var n = (t[0] = l[m >> 2], M[0]), p = (t[0] = e, M[0]), u = q[(k + 8 >> 2) + (3 * j | 0)];
    e = (b + 124 | 0) >> 2;
    var r = l[e], m = k + 12 * r | 0, w = l[m + 4 >> 2], m = (t[0] = l[m >> 2], M[0]), w = (t[0] = w, M[0]), k = q[(k + 8 >> 2) + (3 * r | 0)], x = q[g + 37], y = q[g + 36], r = q[g + 39], A = q[g + 38], C = q[g + 32], z = q[g + 33], D = q[g + 28], E = q[g + 34], G = q[g + 35], H = (-(C * (n + x * -u) + z * (p + y * u)) - D * (E * (m + r * -k) + G * (w + A * k))) * -q[g + 48], F = b + 116 | 0;
    q[F >> 2] += H;
    F = -H;
    C *= F;
    z *= F;
    D = H * -D;
    E *= D;
    G *= D;
    D = q[g + 44];
    x = u + q[g + 46] * (y * z - x * C);
    u = q[g + 45];
    g = k + q[g + 47] * (A * G - r * E);
    j = l[f] + 12 * j | 0;
    n = (M[0] = n + C * D, t[0]);
    p = (M[0] = p + z * D, t[0]) | 0;
    l[(j | 0) >> 2] = 0 | n;
    l[(j + 4 | 0) >> 2] = p;
    q[(l[f] + 8 >> 2) + (3 * l[h >> 2] | 0)] = x;
    h = l[f] + 12 * l[e] | 0;
    m = (M[0] = m + E * u, t[0]);
    w = (M[0] = w + G * u, t[0]) | 0;
    l[(h | 0) >> 2] = 0 | m;
    l[(h + 4 | 0) >> 2] = w;
    q[(l[f] + 8 >> 2) + (3 * l[e] | 0)] = g
}), 0, (function (b, d) {
    var e, f, g = b >> 2, h = b + 120 | 0;
    e = l[h >> 2];
    f = (d + 24 | 0) >> 2;
    var j = l[f], k = j + 12 * e | 0, m = l[k + 4 >> 2], n = (t[0] = l[k >> 2], M[0]), m = (t[0] = m, M[0]), p = q[(j + 8 >> 2) + (3 * e | 0)];
    e = (b + 124 | 0) >> 2;
    var u = l[e], r = j + 12 * u | 0, w = l[r + 4 >> 2], r = (t[0] = l[r >> 2], M[0]), w = (t[0] = w, M[0]), j = q[(j + 8 >> 2) + (3 * u | 0)], x = mm(p), y = nm(p), A = mm(j), C = nm(j), z = q[g + 23] - q[g + 40], D = q[g + 24] - q[g + 41], u = y * z - x * D, y = x * z + y * D, z = q[g + 25] - q[g + 42], D = q[g + 26] - q[g + 43], x = C * z - A * D, A = A * z + C * D, E = n + u - q[g + 17], D = m + y - q[g + 18], z = r + x - q[g + 19], C = w + A - q[g + 20], G = Fh(E * E + D * D), H = Fh(z * z + C * C);
    if (.04999999701976776 < G) {
        var F = 1 / G, E = E * F, I = D * F
    } else {
        I = E = 0
    }
    if (.04999999701976776 < H) {
        var D = 1 / H, J = z * D, L = C * D
    } else {
        L = J = 0
    }
    var O = u * I - y * E, R = x * L - A * J, F = q[g + 44], D = q[g + 46], z = q[g + 45], C = q[g + 47], T = q[g + 28], O = F + D * O * O + T * T * (z + C * R * R), g = q[g + 27] - G - T * H, G = g * -(0 < O ? 1 / O : O), H = -G, E = E * H, I = I * H, G = G * -T, J = J * G, L = L * G, n = (M[0] = n + E * F, t[0]), m = (M[0] = m + I * F, t[0]) | 0;
    l[(k | 0) >> 2] = 0 | n;
    l[(k + 4 | 0) >> 2] = m;
    q[(l[f] + 8 >> 2) + (3 * l[h >> 2] | 0)] = p + D * (u * I - y * E);
    h = l[f] + 12 * l[e] | 0;
    k = (M[0] = r + J * z, t[0]);
    n = (M[0] = w + L * z, t[0]) | 0;
    l[(h | 0) >> 2] = 0 | k;
    l[(h + 4 | 0) >> 2] = n;
    q[(l[f] + 8 >> 2) + (3 * l[e] | 0)] = j + C * (x * L - A * J);
    return.004999999888241291 > (0 < g ? g : -g)
}), 0, (function (b, d) {
    var e;
    e = l[d + 48 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 68 >> 2], h = q[e + 5], j = q[d + 72 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d) {
    var e;
    e = l[d + 52 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 76 >> 2], h = q[e + 5], j = q[d + 80 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d, e) {
    var f = q[d + 88 >> 2] * e;
    q[b >> 2] = q[d + 84 >> 2] * e;
    q[b + 4 >> 2] = f
}), 0, (function (b, d) {
    return q[b + 92 >> 2] * d
}), 0, (function (b) {
    var d = b >> 2, e = a, f = l[l[d + 12] + 8 >> 2], g = l[l[d + 13] + 8 >> 2];
    V(N.gg | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
    V(N.A | 0, (s = a, a += 4, l[s >> 2] = f, s));
    V(N.B | 0, (s = a, a += 4, l[s >> 2] = g, s));
    f = c[b + 61 | 0] & 1;
    V(N.C | 0, (s = a, a += 4, l[s >> 2] = f, s));
    f = q[d + 17];
    g = q[d + 18];
    V(N.K | 0, (s = a, a += 16, Ee[0] = f, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = g, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    f = q[d + 19];
    g = q[d + 20];
    V(N.L | 0, (s = a, a += 16, Ee[0] = f, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = g, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    f = q[d + 29];
    V(N.ab | 0, (s = a, a += 8, Ee[0] = f, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    f = c[b + 112 | 0] & 1;
    V(N.Zb | 0, (s = a, a += 4, l[s >> 2] = f, s));
    f = q[d + 30];
    V(N.Ve | 0, (s = a, a += 8, Ee[0] = f, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    f = q[d + 31];
    V(N.bf | 0, (s = a, a += 8, Ee[0] = f, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    b = c[b + 100 | 0] & 1;
    V(N.bb | 0, (s = a, a += 4, l[s >> 2] = b, s));
    b = q[d + 27];
    V(N.cb | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    b = q[d + 26];
    V(N.$b | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    d = l[d + 14];
    V(N.z | 0, (s = a, a += 4, l[s >> 2] = d, s));
    a = e
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d) {
    var e, f, g, h, j, k, m = b >> 2, n = l[m + 12];
    k = n >> 2;
    var p = o[k + 2], u = b + 128 | 0;
    l[u >> 2] = p;
    var r = l[m + 13];
    j = r >> 2;
    var w = l[j + 2];
    h = (b + 132 | 0) >> 2;
    l[h] = w;
    var x = n + 28 | 0, y = b + 152 | 0, A = l[x >> 2], C = l[x + 4 >> 2];
    l[y >> 2] = A;
    l[y + 4 >> 2] = C;
    var z = r + 28 | 0, D = b + 160 | 0, E = l[z >> 2], G = l[z + 4 >> 2];
    l[D >> 2] = E;
    l[D + 4 >> 2] = G;
    var H = q[k + 30];
    q[m + 42] = H;
    var F = q[j + 30];
    q[m + 43] = F;
    var I = q[k + 32];
    q[m + 44] = I;
    var J = q[j + 32];
    q[m + 45] = J;
    var L = l[d + 24 >> 2], O = q[(L + 8 >> 2) + (3 * p | 0)];
    g = (d + 28 | 0) >> 2;
    var R = l[g], T = R + 12 * p | 0, S = l[T + 4 >> 2], U = (t[0] = l[T >> 2], M[0]), W = (t[0] = S, M[0]), Q = q[(R + 8 >> 2) + (3 * p | 0)], $ = q[(L + 8 >> 2) + (3 * w | 0)], ea = R + 12 * w | 0, sa = l[ea + 4 >> 2], Ba = (t[0] = l[ea >> 2], M[0]), oa = (t[0] = sa, M[0]), ga = q[(R + 8 >> 2) + (3 * w | 0)], qa = mm(O), la = nm(O), Ca = mm($), ia = nm($), ya = b + 136 | 0, ta = q[m + 17], Ia = (t[0] = A, M[0]), na = ta - Ia, Z = q[m + 18], ba = (t[0] = C, M[0]), ca = Z - ba, ma = la * na - qa * ca, ka = qa * na + la * ca, aa = (M[0] = ma, t[0]), ra = (M[0] = ka, t[0]) | 0;
    l[ya >> 2] = 0 | aa;
    l[ya + 4 >> 2] = ra;
    var ha = b + 144 | 0, za = q[m + 19], X = (t[0] = E, M[0]), ua = za - X, da = q[m + 20], fa = (t[0] = G, M[0]), Aa = da - fa, Qa = ia * ua - Ca * Aa, pa = Ca * ua + ia * Aa, cb = (M[0] = Qa, t[0]), Ra = (M[0] = pa, t[0]) | 0;
    l[ha >> 2] = 0 | cb;
    l[ha + 4 >> 2] = Ra;
    var Ta = I + J, $a = 0 == Ta, va = H + F;
    q[m + 46] = va + ka * ka * I + pa * pa * J;
    var Wa = -ka, fb = ma * Wa * I - pa * Qa * J;
    q[m + 49] = fb;
    var gb = I * Wa - pa * J;
    q[m + 52] = gb;
    q[m + 47] = fb;
    q[m + 50] = va + ma * ma * I + Qa * Qa * J;
    var Xa = ma * I + Qa * J;
    q[m + 53] = Xa;
    q[m + 48] = gb;
    q[m + 51] = Xa;
    q[m + 54] = Ta;
    q[m + 55] = 0 < Ta ? 1 / Ta : Ta;
    0 == (c[b + 100 | 0] & 1) << 24 >> 24 | $a && (q[m + 24] = 0);
    if (0 == (c[b + 112 | 0] & 1) << 24 >> 24 | $a) {
        l[m + 56] = 0
    } else {
        var Ua = $ - O - q[m + 29], Va = q[m + 31], pb = q[m + 30], nb = Va - pb;
        if (.06981317698955536 > (0 < nb ? nb : -nb)) {
            l[m + 56] = 3
        } else {
            if (Ua > pb) {
                f = (b + 224 | 0) >> 2, Ua < Va ? (l[f] = 0, q[m + 23] = 0) : (2 != (l[f] | 0) && (q[m + 23] = 0), l[f] = 2)
            } else {
                var La = b + 224 | 0;
                1 != (l[La >> 2] | 0) && (q[m + 23] = 0);
                l[La >> 2] = 1
            }
        }
    }
    var qb = b + 84 | 0;
    if (0 == (c[d + 20 | 0] & 1) << 24 >> 24) {
        e = qb >> 2;
        l[e] = 0;
        l[e + 1] = 0;
        l[e + 2] = 0;
        l[e + 3] = 0;
        var bb = ga, Fa = Q, Ma = U, wa = W, hb = Ba, Ya = oa
    } else {
        var Za = d + 8 | 0, Da = q[Za >> 2], Oa = qb | 0, ib = q[Oa >> 2] * Da;
        q[Oa >> 2] = ib;
        var ab = b + 88 | 0, Ga = q[ab >> 2] * Da;
        q[ab >> 2] = Ga;
        var jb = b + 92 | 0, Ea = q[jb >> 2] * Da;
        q[jb >> 2] = Ea;
        var Pa = b + 96 | 0, Ja = q[Pa >> 2] * q[Za >> 2];
        q[Pa >> 2] = Ja;
        bb = ga + J * (Qa * Ga - pa * ib + Ja + Ea);
        Fa = Q - I * (ma * Ga - ka * ib + Ja + Ea);
        Ma = U - ib * H;
        wa = W - Ga * H;
        hb = Ba + ib * F;
        Ya = oa + Ga * F
    }
    var db = l[g] + 12 * p | 0, xa = (M[0] = Ma, t[0]), Sa = (M[0] = wa, t[0]) | 0;
    l[(db | 0) >> 2] = 0 | xa;
    l[(db + 4 | 0) >> 2] = Sa;
    q[(l[g] + 8 >> 2) + (3 * l[u >> 2] | 0)] = Fa;
    var Ka = l[g] + 12 * l[h] | 0, tb = (M[0] = hb, t[0]), kb = (M[0] = Ya, t[0]) | 0;
    l[(Ka | 0) >> 2] = 0 | tb;
    l[(Ka + 4 | 0) >> 2] = kb;
    q[(l[g] + 8 >> 2) + (3 * l[h] | 0)] = bb
}), 0, (function (b, d) {
    var e, f, g, h, j, k, m, n = b >> 2, p = a;
    a += 24;
    var u;
    m = p >> 2;
    var r = p + 12;
    k = r >> 2;
    j = (b + 128 | 0) >> 2;
    var w = o[j];
    h = (d + 28 | 0) >> 2;
    var x = l[h], y = x + 12 * w | 0, A = l[y + 4 >> 2], C = (t[0] = l[y >> 2], M[0]), z = (t[0] = A, M[0]), D = q[(x + 8 >> 2) + (3 * w | 0)];
    g = (b + 132 | 0) >> 2;
    var E = l[g], G = x + 12 * E | 0, H = l[G + 4 >> 2], F = (t[0] = l[G >> 2], M[0]), I = (t[0] = H, M[0]), J = q[(x + 8 >> 2) + (3 * E | 0)], L = q[n + 42], O = q[n + 43], R = q[n + 44], T = q[n + 45], S = 0 == R + T;
    if (0 == (c[b + 100 | 0] & 1) << 24 >> 24) {
        var U = J, W = D
    } else {
        if (3 == (l[n + 56] | 0) | S) {
            U = J, W = D
        } else {
            var Q = b + 96 | 0, $ = q[Q >> 2], ea = q[d >> 2] * q[n + 26], sa = $ + (J - D - q[n + 27]) * -q[n + 55], Ba = -ea, oa = sa < ea ? sa : ea, ga = oa < Ba ? Ba : oa;
            q[Q >> 2] = ga;
            var qa = ga - $, U = J + T * qa, W = D - R * qa
        }
    }
    if (0 == (c[b + 112 | 0] & 1) << 24 >> 24) {
        u = 20
    } else {
        var la = b + 224 | 0;
        if (0 == (l[la >> 2] | 0) | S) {
            u = 20
        } else {
            var Ca = b + 148 | 0, ia = b + 144 | 0, ya = b + 140 | 0, ta = b + 136 | 0, Ia = F + q[Ca >> 2] * -U - C - q[ya >> 2] * -W, na = I + q[ia >> 2] * U - z - q[ta >> 2] * W;
            q[m] = Ia;
            q[m + 1] = na;
            q[m + 2] = U - W;
            var Z = b + 184 | 0;
            pn(r, Z, p);
            var ba = q[k], ca = -ba, ma = q[k + 1], ka = -ma, aa = q[k + 2], ra = -aa, ha = l[la >> 2];
            if (3 == (ha | 0)) {
                var za = b + 84 | 0;
                q[za >> 2] -= ba;
                var X = b + 88 | 0;
                q[X >> 2] -= ma;
                var ua = b + 92 | 0;
                q[ua >> 2] -= aa;
                var da = ca, fa = ka, Aa = ra
            } else {
                if (1 == (ha | 0)) {
                    var Qa = b + 84 | 0;
                    f = (b + 92 | 0) >> 2;
                    var pa = q[f], cb = pa - aa;
                    if (0 > cb) {
                        var Ra = q[n + 52] * pa - Ia, Ta = q[n + 53] * pa - na, $a = q[Z >> 2], va = q[n + 49], Wa = q[n + 47], fb = q[n + 50], gb = $a * fb - va * Wa, Xa = 0 != gb ? 1 / gb : gb, Ua = Xa * (fb * Ra - va * Ta), Va = Xa * ($a * Ta - Wa * Ra), pb = -pa, nb = Qa | 0;
                        q[nb >> 2] += Ua;
                        var La = b + 88 | 0;
                        q[La >> 2] += Va;
                        q[f] = 0;
                        da = Ua;
                        fa = Va;
                        Aa = pb
                    } else {
                        var qb = Qa | 0;
                        q[qb >> 2] -= ba;
                        var bb = b + 88 | 0;
                        q[bb >> 2] -= ma;
                        q[f] = cb;
                        da = ca;
                        fa = ka;
                        Aa = ra
                    }
                } else {
                    if (2 == (ha | 0)) {
                        var Fa = b + 84 | 0;
                        e = (b + 92 | 0) >> 2;
                        var Ma = q[e], wa = Ma - aa;
                        if (0 < wa) {
                            var hb = q[n + 52] * Ma - Ia, Ya = q[n + 53] * Ma - na, Za = q[Z >> 2], Da = q[n + 49], Oa = q[n + 47], ib = q[n + 50], ab = Za * ib - Da * Oa, Ga = 0 != ab ? 1 / ab : ab, jb = Ga * (ib * hb - Da * Ya), Ea = Ga * (Za * Ya - Oa * hb), Pa = -Ma, Ja = Fa | 0;
                            q[Ja >> 2] += jb;
                            var db = b + 88 | 0;
                            q[db >> 2] += Ea;
                            q[e] = 0;
                            da = jb;
                            fa = Ea;
                            Aa = Pa
                        } else {
                            var xa = Fa | 0;
                            q[xa >> 2] -= ba;
                            var Sa = b + 88 | 0;
                            q[Sa >> 2] -= ma;
                            q[e] = wa;
                            da = ca;
                            fa = ka;
                            Aa = ra
                        }
                    } else {
                        da = ca, fa = ka, Aa = ra
                    }
                }
            }
            var Ka = q[ia >> 2] * fa - q[Ca >> 2] * da + Aa, tb = q[ta >> 2] * fa - q[ya >> 2] * da + Aa, kb = da, ub = fa, rb = l[j];
            u = 23
        }
    }
    if (20 == u) {
        var Bb = q[n + 37], lb = q[n + 36], yb = q[n + 35], xb = q[n + 34], Ib = -(F + Bb * -U - C - yb * -W), wb = -(I + lb * U - z - xb * W), vb = q[n + 46], zb = q[n + 49], Eb = q[n + 47], Cb = q[n + 50], eb = vb * Cb - zb * Eb, sb = 0 != eb ? 1 / eb : eb, ob = sb * (Cb * Ib - zb * wb), Db = sb * (vb * wb - Eb * Ib), Jb = b + 84 | 0;
        q[Jb >> 2] += ob;
        var Rb = b + 88 | 0;
        q[Rb >> 2] += Db;
        Ka = lb * Db - Bb * ob;
        tb = xb * Db - yb * ob;
        kb = ob;
        ub = Db;
        rb = w
    }
    var Nb = z - ub * L, Ob = F + kb * O, Lb = I + ub * O, Pb = U + T * Ka, Mb = W - R * tb, Yb = l[h] + 12 * rb | 0, Zb = (M[0] = C - kb * L, t[0]), fc = (M[0] = Nb, t[0]) | 0;
    l[(Yb | 0) >> 2] = 0 | Zb;
    l[(Yb + 4 | 0) >> 2] = fc;
    q[(l[h] + 8 >> 2) + (3 * l[j] | 0)] = Mb;
    var Ub = l[h] + 12 * l[g] | 0, jc = (M[0] = Ob, t[0]), Qb = (M[0] = Lb, t[0]) | 0;
    l[(Ub | 0) >> 2] = 0 | jc;
    l[(Ub + 4 | 0) >> 2] = Qb;
    q[(l[h] + 8 >> 2) + (3 * l[g] | 0)] = Pb;
    a = p
}), 0, (function (b, d) {
    var e, f, g = b >> 2, h = b + 128 | 0;
    e = l[h >> 2];
    f = (d + 24 | 0) >> 2;
    var j = l[f], k = j + 12 * e | 0, m = l[k + 4 >> 2], n = (t[0] = l[k >> 2], M[0]), m = (t[0] = m, M[0]), p = q[(j + 8 >> 2) + (3 * e | 0)];
    e = (b + 132 | 0) >> 2;
    var u = l[e], r = j + 12 * u | 0, w = l[r + 4 >> 2], r = (t[0] = l[r >> 2], M[0]), w = (t[0] = w, M[0]), u = q[(j + 8 >> 2) + (3 * u | 0)], x = b + 176 | 0, y = b + 180 | 0;
    if (0 == (c[b + 112 | 0] & 1) << 24 >> 24) {
        j = p, p = u, u = 0, x = q[x >> 2], y = q[y >> 2]
    } else {
        if (y = q[y >> 2], x = q[x >> 2], j = l[g + 56], 0 == (j | 0) | 0 == x + y) {
            j = p, p = u, u = 0
        } else {
            var A = u - p - q[g + 29];
            if (3 == (j | 0)) {
                var j = A - q[g + 30], j = .13962635397911072 > j ? j : .13962635397911072, j = -.13962635397911072 > j ? -.13962635397911072 : j, A = j * -q[g + 55], C = 0 < j ? j : -j
            } else {
                1 == (j | 0) ? (j = A - q[g + 30], A = j + .03490658849477768, A = 0 > A ? A : 0, A = (-.13962635397911072 > A ? -.13962635397911072 : A) * -q[g + 55], C = -j) : 2 == (j | 0) ? (j = A - q[g + 31], A = j - .03490658849477768, A = .13962635397911072 > A ? A : .13962635397911072, A = (0 > A ? 0 : A) * -q[g + 55], C = j) : C = A = 0
            }
            j = p - x * A;
            p = u + y * A;
            u = C
        }
    }
    var C = mm(j), z = nm(j), D = mm(p), E = nm(p), G = q[g + 17] - q[g + 38], H = q[g + 18] - q[g + 39], A = z * G - C * H, z = C * G + z * H, G = q[g + 19] - q[g + 40], H = q[g + 20] - q[g + 41], C = E * G - D * H, D = D * G + E * H, F = r + C - n - A, I = w + D - m - z, E = Fh(F * F + I * I), G = q[g + 42], g = q[g + 43], H = G + g, J = H + x * z * z + y * D * D, L = y * C, O = A * -x * z - L * D, H = H + x * A * A + L * C, L = J * H - O * O, L = 0 != L ? 1 / L : L, H = -(L * (H * F - O * I)), F = -(L * (J * I - O * F)), n = (M[0] = n - G * H, t[0]), m = (M[0] = m - G * F, t[0]) | 0;
    l[(k | 0) >> 2] = 0 | n;
    l[(k + 4 | 0) >> 2] = m;
    q[(l[f] + 8 >> 2) + (3 * l[h >> 2] | 0)] = j - x * (A * F - z * H);
    h = l[f] + 12 * l[e] | 0;
    k = (M[0] = r + g * H, t[0]);
    n = (M[0] = w + g * F, t[0]) | 0;
    l[(h | 0) >> 2] = 0 | k;
    l[(h + 4 | 0) >> 2] = n;
    q[(l[f] + 8 >> 2) + (3 * l[e] | 0)] = p + y * (C * F - D * H);
    return.004999999888241291 < E ? 0 : .03490658849477768 >= u
}), 0, (function (b, d) {
    var e;
    e = l[d + 48 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 68 >> 2], h = q[e + 5], j = q[d + 72 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d) {
    var e;
    e = l[d + 52 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 76 >> 2], h = q[e + 5], j = q[d + 80 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d, e) {
    var e = q[d + 92 >> 2] * e, f = q[d + 108 >> 2] * e;
    q[b >> 2] = q[d + 104 >> 2] * e;
    q[b + 4 >> 2] = f
}), 0, Kb(0), 0, (function (b) {
    var d = b >> 2, e = a, f = l[l[d + 12] + 8 >> 2], g = l[l[d + 13] + 8 >> 2];
    V(N.Tg | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
    V(N.A | 0, (s = a, a += 4, l[s >> 2] = f, s));
    V(N.B | 0, (s = a, a += 4, l[s >> 2] = g, s));
    b = c[b + 61 | 0] & 1;
    V(N.C | 0, (s = a, a += 4, l[s >> 2] = b, s));
    b = q[d + 17];
    f = q[d + 18];
    V(N.K | 0, (s = a, a += 16, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = f, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    b = q[d + 19];
    f = q[d + 20];
    V(N.L | 0, (s = a, a += 16, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = f, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    b = q[d + 21];
    V(N.sh | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    d = l[d + 14];
    V(N.z | 0, (s = a, a += 4, l[s >> 2] = d, s));
    a = e
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d) {
    var e, f, g, h, j = b >> 2, k = l[j + 12];
    h = k >> 2;
    var m = o[h + 2], n = b + 96 | 0;
    l[n >> 2] = m;
    var p = l[j + 13];
    g = p >> 2;
    var u = l[g + 2];
    f = (b + 100 | 0) >> 2;
    l[f] = u;
    var r = k + 28 | 0, w = b + 128 | 0, x = l[r >> 2], y = l[r + 4 >> 2];
    l[w >> 2] = x;
    l[w + 4 >> 2] = y;
    var A = p + 28 | 0, C = b + 136 | 0, z = l[A >> 2], D = l[A + 4 >> 2];
    l[C >> 2] = z;
    l[C + 4 >> 2] = D;
    var E = q[h + 30];
    q[j + 36] = E;
    var G = q[g + 30];
    q[j + 37] = G;
    var H = q[h + 32];
    q[j + 38] = H;
    var F = q[g + 32];
    q[j + 39] = F;
    var I = l[d + 24 >> 2], J = I + 12 * m | 0, L = l[J + 4 >> 2], O = (t[0] = l[J >> 2], M[0]), R = (t[0] = L, M[0]), T = q[(I + 8 >> 2) + (3 * m | 0)];
    e = (d + 28 | 0) >> 2;
    var S = l[e], U = S + 12 * m | 0, W = l[U + 4 >> 2], Q = (t[0] = l[U >> 2], M[0]), $ = (t[0] = W, M[0]), ea = q[(S + 8 >> 2) + (3 * m | 0)], sa = I + 12 * u | 0, Ba = l[sa + 4 >> 2], oa = (t[0] = l[sa >> 2], M[0]), ga = (t[0] = Ba, M[0]), qa = q[(I + 8 >> 2) + (3 * u | 0)], la = S + 12 * u | 0, Ca = l[la + 4 >> 2], ia = (t[0] = l[la >> 2], M[0]), ya = (t[0] = Ca, M[0]), ta = q[(S + 8 >> 2) + (3 * u | 0)], Ia = mm(T), na = nm(T), Z = mm(qa), ba = nm(qa), ca = b + 112 | 0, ma = q[j + 17], ka = (t[0] = x, M[0]), aa = ma - ka, ra = q[j + 18], ha = (t[0] = y, M[0]), za = ra - ha, X = na * aa - Ia * za, ua = Ia * aa + na * za, da = (M[0] = X, t[0]), fa = (M[0] = ua, t[0]) | 0;
    l[ca >> 2] = 0 | da;
    l[ca + 4 >> 2] = fa;
    var Aa = b + 120 | 0, Qa = q[j + 19], pa = (t[0] = z, M[0]), cb = Qa - pa, Ra = q[j + 20], Ta = (t[0] = D, M[0]), $a = Ra - Ta, va = ba * cb - Z * $a, Wa = Z * cb + ba * $a, fb = (M[0] = va, t[0]), gb = (M[0] = Wa, t[0]) | 0;
    l[Aa >> 2] = 0 | fb;
    l[Aa + 4 >> 2] = gb;
    var Xa = b + 104 | 0, Ua = oa + va - O - X, Va = ga + Wa - R - ua, pb = (M[0] = Ua, t[0]), nb = (M[0] = Va, t[0]) | 0;
    l[Xa >> 2] = 0 | pb;
    l[Xa + 4 >> 2] = nb;
    var La = Xa | 0, qb = b + 108 | 0, bb = Fh(Ua * Ua + Va * Va);
    q[j + 22] = bb;
    l[j + 41] = 0 < bb - q[j + 21] ? 2 : 0;
    if (.004999999888241291 < bb) {
        var Fa = 1 / bb, Ma = Ua * Fa;
        q[La >> 2] = Ma;
        var wa = Va * Fa;
        q[qb >> 2] = wa;
        var hb = X * wa - ua * Ma, Ya = va * wa - Wa * Ma, Za = E + H * hb * hb + G + F * Ya * Ya;
        q[j + 40] = 0 != Za ? 1 / Za : 0;
        if (0 == (c[d + 20 | 0] & 1) << 24 >> 24) {
            q[j + 23] = 0;
            var Da = ta, Oa = ea, ib = Q, ab = $, Ga = ia, jb = ya
        } else {
            var Ea = b + 92 | 0, Pa = q[Ea >> 2] * q[d + 8 >> 2];
            q[Ea >> 2] = Pa;
            var Ja = Ma * Pa, db = wa * Pa, Da = ta + F * (va * db - Wa * Ja), Oa = ea - H * (X * db - ua * Ja), ib = Q - Ja * E, ab = $ - db * E, Ga = ia + Ja * G, jb = ya + db * G
        }
        var xa = l[e] + 12 * m | 0, Sa = (M[0] = ib, t[0]), Ka = (M[0] = ab, t[0]) | 0;
        l[(xa | 0) >> 2] = 0 | Sa;
        l[(xa + 4 | 0) >> 2] = Ka;
        q[(l[e] + 8 >> 2) + (3 * l[n >> 2] | 0)] = Oa;
        var tb = l[e] + 12 * l[f] | 0, kb = (M[0] = Ga, t[0]), ub = (M[0] = jb, t[0]) | 0;
        l[(tb | 0) >> 2] = 0 | kb;
        l[(tb + 4 | 0) >> 2] = ub;
        q[(l[e] + 8 >> 2) + (3 * l[f] | 0)] = Da
    } else {
        q[La >> 2] = 0, q[qb >> 2] = 0, q[j + 40] = 0, q[j + 23] = 0
    }
}), 0, (function (b, d) {
    var e, f, g = b >> 2, h = b + 96 | 0, j = l[h >> 2];
    f = (d + 28 | 0) >> 2;
    var k = l[f], m = k + 12 * j | 0;
    e = l[m + 4 >> 2];
    var n = (t[0] = l[m >> 2], M[0]), p = (t[0] = e, M[0]), u = q[(k + 8 >> 2) + (3 * j | 0)];
    e = (b + 100 | 0) >> 2;
    var r = l[e], m = k + 12 * r | 0, w = l[m + 4 >> 2], m = (t[0] = l[m >> 2], M[0]), w = (t[0] = w, M[0]), k = q[(k + 8 >> 2) + (3 * r | 0)], x = q[g + 29], y = q[g + 28], r = q[g + 31], A = q[g + 30], C = q[g + 22] - q[g + 21], z = q[g + 26], D = q[g + 27], E = z * (m + r * -k - (n + x * -u)) + D * (w + A * k - (p + y * u)), G = b + 92 | 0, H = q[G >> 2], C = H + (0 > C ? E + q[d + 4 >> 2] * C : E) * -q[g + 40], C = 0 < C ? 0 : C;
    q[G >> 2] = C;
    G = C - H;
    z *= G;
    D *= G;
    G = q[g + 36];
    x = u - q[g + 38] * (y * D - x * z);
    u = q[g + 37];
    g = k + q[g + 39] * (A * D - r * z);
    j = l[f] + 12 * j | 0;
    n = (M[0] = n - z * G, t[0]);
    p = (M[0] = p - D * G, t[0]) | 0;
    l[(j | 0) >> 2] = 0 | n;
    l[(j + 4 | 0) >> 2] = p;
    q[(l[f] + 8 >> 2) + (3 * l[h >> 2] | 0)] = x;
    h = l[f] + 12 * l[e] | 0;
    m = (M[0] = m + z * u, t[0]);
    w = (M[0] = w + D * u, t[0]) | 0;
    l[(h | 0) >> 2] = 0 | m;
    l[(h + 4 | 0) >> 2] = w;
    q[(l[f] + 8 >> 2) + (3 * l[e] | 0)] = g
}), 0, (function (b, d) {
    var e, f, g = b >> 2, h = b + 96 | 0;
    e = l[h >> 2];
    f = (d + 24 | 0) >> 2;
    var j = l[f], k = j + 12 * e | 0, m = l[k + 4 >> 2], n = (t[0] = l[k >> 2], M[0]), m = (t[0] = m, M[0]), p = q[(j + 8 >> 2) + (3 * e | 0)];
    e = (b + 100 | 0) >> 2;
    var u = l[e], r = j + 12 * u | 0, w = l[r + 4 >> 2], r = (t[0] = l[r >> 2], M[0]), w = (t[0] = w, M[0]), j = q[(j + 8 >> 2) + (3 * u | 0)], x = mm(p), y = nm(p), A = mm(j), C = nm(j), z = q[g + 17] - q[g + 32], D = q[g + 18] - q[g + 33], u = y * z - x * D, y = x * z + y * D, z = q[g + 19] - q[g + 34], D = q[g + 20] - q[g + 35], x = C * z - A * D, z = A * z + C * D, D = r + x - n - u, C = w + z - m - y, A = Fh(D * D + C * C);
    if (1.1920928955078125e-7 > A) {
        var A = 0, E = C
    } else {
        E = 1 / A, D *= E, E *= C
    }
    var C = b + 84 | 0, G = A - q[C >> 2], G = .20000000298023224 > G ? G : .20000000298023224, G = (0 > G ? 0 : G) * -q[g + 40], D = D * G, E = E * G, G = q[g + 36], u = p - q[g + 38] * (u * E - y * D), p = q[g + 37], g = j + q[g + 39] * (x * E - z * D), n = (M[0] = n - D * G, t[0]), m = (M[0] = m - E * G, t[0]) | 0;
    l[(k | 0) >> 2] = 0 | n;
    l[(k + 4 | 0) >> 2] = m;
    q[(l[f] + 8 >> 2) + (3 * l[h >> 2] | 0)] = u;
    h = l[f] + 12 * l[e] | 0;
    k = (M[0] = r + D * p, t[0]);
    n = (M[0] = w + E * p, t[0]) | 0;
    l[(h | 0) >> 2] = 0 | k;
    l[(h + 4 | 0) >> 2] = n;
    q[(l[f] + 8 >> 2) + (3 * l[e] | 0)] = g;
    return.004999999888241291 > A - q[C >> 2]
}), 0, (function (b, d) {
    var e;
    e = l[d + 48 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 80 >> 2], h = q[e + 5], j = q[d + 84 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d) {
    var e;
    e = l[d + 52 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 88 >> 2], h = q[e + 5], j = q[d + 92 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d, e) {
    var f = q[d + 108 >> 2] * e;
    q[b >> 2] = q[d + 104 >> 2] * e;
    q[b + 4 >> 2] = f
}), 0, (function (b, d) {
    return q[b + 112 >> 2] * d
}), 0, (function (b) {
    var d = b >> 2, e = a, f = l[l[d + 12] + 8 >> 2], g = l[l[d + 13] + 8 >> 2];
    V(N.Ug | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
    V(N.A | 0, (s = a, a += 4, l[s >> 2] = f, s));
    V(N.B | 0, (s = a, a += 4, l[s >> 2] = g, s));
    b = c[b + 61 | 0] & 1;
    V(N.C | 0, (s = a, a += 4, l[s >> 2] = b, s));
    b = q[d + 20];
    f = q[d + 21];
    V(N.K | 0, (s = a, a += 16, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = f, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    b = q[d + 22];
    f = q[d + 23];
    V(N.L | 0, (s = a, a += 16, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = f, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    b = q[d + 24];
    V(N.ab | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    b = q[d + 17];
    V(N.Oa | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    b = q[d + 18];
    V(N.Pa | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    d = l[d + 14];
    V(N.z | 0, (s = a, a += 4, l[s >> 2] = d, s));
    a = e
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d) {
    var e, f, g, h, j, k = b >> 2, m = l[k + 12];
    j = m >> 2;
    var n = o[j + 2], p = b + 116 | 0;
    l[p >> 2] = n;
    var u = l[k + 13];
    h = u >> 2;
    var r = l[h + 2];
    g = (b + 120 | 0) >> 2;
    l[g] = r;
    var w = m + 28 | 0, x = b + 140 | 0, y = l[w >> 2], A = l[w + 4 >> 2];
    l[x >> 2] = y;
    l[x + 4 >> 2] = A;
    var C = u + 28 | 0, z = b + 148 | 0, D = l[C >> 2], E = l[C + 4 >> 2];
    l[z >> 2] = D;
    l[z + 4 >> 2] = E;
    var G = q[j + 30];
    q[k + 39] = G;
    var H = q[h + 30];
    q[k + 40] = H;
    var F = q[j + 32];
    q[k + 41] = F;
    var I = q[h + 32];
    q[k + 42] = I;
    var J = l[d + 24 >> 2], L = q[(J + 8 >> 2) + (3 * n | 0)];
    f = (d + 28 | 0) >> 2;
    var O = l[f], R = O + 12 * n | 0, T = l[R + 4 >> 2], S = (t[0] = l[R >> 2], M[0]), U = (t[0] = T, M[0]), W = q[(O + 8 >> 2) + (3 * n | 0)], Q = q[(J + 8 >> 2) + (3 * r | 0)], $ = O + 12 * r | 0, ea = l[$ + 4 >> 2], sa = (t[0] = l[$ >> 2], M[0]), Ba = (t[0] = ea, M[0]), oa = q[(O + 8 >> 2) + (3 * r | 0)], ga = mm(L), qa = nm(L), la = mm(Q), Ca = nm(Q), ia = b + 124 | 0, ya = q[k + 20], ta = (t[0] = y, M[0]), Ia = ya - ta, na = q[k + 21], Z = (t[0] = A, M[0]), ba = na - Z, ca = qa * Ia - ga * ba, ma = ga * Ia + qa * ba, ka = (M[0] = ca, t[0]), aa = (M[0] = ma, t[0]) | 0;
    l[ia >> 2] = 0 | ka;
    l[ia + 4 >> 2] = aa;
    var ra = b + 132 | 0, ha = q[k + 22], za = (t[0] = D, M[0]), X = ha - za, ua = q[k + 23], da = (t[0] = E, M[0]), fa = ua - da, Aa = Ca * X - la * fa, Qa = la * X + Ca * fa, pa = (M[0] = Aa, t[0]), cb = (M[0] = Qa, t[0]) | 0;
    l[ra >> 2] = 0 | pa;
    l[ra + 4 >> 2] = cb;
    var Ra = G + H, Ta = Ra + ma * ma * F + Qa * Qa * I, $a = -ma, va = ca * $a * F - Qa * Aa * I, Wa = F * $a - Qa * I, fb = Ra + ca * ca * F + Aa * Aa * I, gb = ca * F + Aa * I, Xa = F + I, Ua = q[k + 17], Va = b + 172 | 0;
    if (0 < Ua) {
        var pb = Ta * fb - va * va, nb = 0 != pb ? 1 / pb : pb;
        q[Va >> 2] = nb * fb;
        var La = va * -nb;
        q[k + 46] = La;
        q[k + 45] = 0;
        q[k + 44] = La;
        q[k + 47] = nb * Ta;
        e = (b + 192 | 0) >> 2;
        l[e] = 0;
        l[e + 1] = 0;
        l[e + 2] = 0;
        l[e + 3] = 0;
        var qb = 0 < Xa ? 1 / Xa : 0, bb = Q - L - q[k + 24], Fa = 6.2831854820251465 * Ua, Ma = qb * Fa * Fa, wa = q[d >> 2], hb = wa * (2 * qb * q[k + 18] * Fa + wa * Ma), Ya = b + 100 | 0;
        q[Ya >> 2] = hb;
        var Za = 0 != hb ? 1 / hb : 0;
        q[Ya >> 2] = Za;
        q[k + 19] = bb * wa * Ma * Za;
        var Da = Xa + Za;
        q[k + 51] = 0 != Da ? 1 / Da : 0
    } else {
        var Oa = fb * Xa - gb * gb, ib = gb * Wa - va * Xa, ab = va * gb - fb * Wa, Ga = Ta * Oa + va * ib + Wa * ab, jb = 0 != Ga ? 1 / Ga : Ga;
        q[Va >> 2] = jb * Oa;
        var Ea = jb * ib;
        q[k + 44] = Ea;
        var Pa = jb * ab;
        q[k + 45] = Pa;
        q[k + 46] = Ea;
        q[k + 47] = jb * (Ta * Xa - Wa * Wa);
        var Ja = jb * (Wa * va - Ta * gb);
        q[k + 48] = Ja;
        q[k + 49] = Pa;
        q[k + 50] = Ja;
        q[k + 51] = jb * (Ta * fb - va * va);
        q[k + 25] = 0;
        q[k + 19] = 0
    }
    var db = b + 104 | 0;
    if (0 == (c[d + 20 | 0] & 1) << 24 >> 24) {
        q[db >> 2] = 0;
        q[k + 27] = 0;
        q[k + 28] = 0;
        var xa = oa, Sa = W, Ka = S, tb = U, kb = sa, ub = Ba
    } else {
        var rb = q[d + 8 >> 2], Bb = db | 0, lb = q[Bb >> 2] * rb;
        q[Bb >> 2] = lb;
        var yb = b + 108 | 0, xb = q[yb >> 2] * rb;
        q[yb >> 2] = xb;
        var Ib = b + 112 | 0, wb = q[Ib >> 2] * rb;
        q[Ib >> 2] = wb;
        xa = oa + I * (Aa * xb - Qa * lb + wb);
        Sa = W - F * (ca * xb - ma * lb + wb);
        Ka = S - lb * G;
        tb = U - xb * G;
        kb = sa + lb * H;
        ub = Ba + xb * H
    }
    var vb = l[f] + 12 * n | 0, zb = (M[0] = Ka, t[0]), Eb = (M[0] = tb, t[0]) | 0;
    l[(vb | 0) >> 2] = 0 | zb;
    l[(vb + 4 | 0) >> 2] = Eb;
    q[(l[f] + 8 >> 2) + (3 * l[p >> 2] | 0)] = Sa;
    var Cb = l[f] + 12 * l[g] | 0, eb = (M[0] = kb, t[0]), sb = (M[0] = ub, t[0]) | 0;
    l[(Cb | 0) >> 2] = 0 | eb;
    l[(Cb + 4 | 0) >> 2] = sb;
    q[(l[f] + 8 >> 2) + (3 * l[g] | 0)] = xa
}), 0, (function (b, d) {
    var e, f, g = b >> 2, h = b + 116 | 0, j = l[h >> 2];
    f = (d + 28 | 0) >> 2;
    var k = l[f], m = k + 12 * j | 0;
    e = l[m + 4 >> 2];
    var n = (t[0] = l[m >> 2], M[0]), p = (t[0] = e, M[0]), u = q[(k + 8 >> 2) + (3 * j | 0)];
    e = (b + 120 | 0) >> 2;
    var r = l[e], m = k + 12 * r | 0, w = l[m + 4 >> 2], m = (t[0] = l[m >> 2], M[0]), w = (t[0] = w, M[0]), x = q[(k + 8 >> 2) + (3 * r | 0)], r = q[g + 39], k = q[g + 40], y = q[g + 41], A = q[g + 42];
    if (0 < q[g + 17]) {
        var C = b + 112 | 0, z = q[C >> 2], D = (x - u + q[g + 19] + q[g + 25] * z) * -q[g + 51];
        q[C >> 2] = z + D;
        var u = u - y * D, C = x + A * D, z = q[g + 34], E = q[g + 33], x = q[g + 32], D = q[g + 31], G = m + z * -C - n - x * -u, H = w + E * C - p - D * u, F = q[g + 43] * G + q[g + 46] * H, H = q[g + 44] * G + q[g + 47] * H, G = -F, g = -H, I = b + 104 | 0;
        q[I >> 2] -= F;
        F = b + 108 | 0;
        q[F >> 2] -= H;
        A = C + A * (E * g - z * G);
        y = u - y * (D * g - x * G);
        u = G
    } else {
        var z = q[g + 34], E = q[g + 33], D = q[g + 32], C = q[g + 31], H = m + z * -x - n - D * -u, I = w + E * x - p - C * u, J = x - u, G = q[g + 43] * H + q[g + 46] * I + q[g + 49] * J, F = q[g + 44] * H + q[g + 47] * I + q[g + 50] * J, I = q[g + 45] * H + q[g + 48] * I + q[g + 51] * J, H = -G, g = -F, J = b + 104 | 0;
        q[J >> 2] -= G;
        G = b + 108 | 0;
        q[G >> 2] -= F;
        F = b + 112 | 0;
        q[F >> 2] -= I;
        A = x + A * (E * g - z * H - I);
        y = u - y * (C * g - D * H - I);
        u = H
    }
    j = l[f] + 12 * j | 0;
    n = (M[0] = n - r * u, t[0]);
    p = (M[0] = p - r * g, t[0]) | 0;
    l[(j | 0) >> 2] = 0 | n;
    l[(j + 4 | 0) >> 2] = p;
    q[(l[f] + 8 >> 2) + (3 * l[h >> 2] | 0)] = y;
    h = l[f] + 12 * l[e] | 0;
    m = (M[0] = m + k * u, t[0]);
    w = (M[0] = w + k * g, t[0]) | 0;
    l[(h | 0) >> 2] = 0 | m;
    l[(h + 4 | 0) >> 2] = w;
    q[(l[f] + 8 >> 2) + (3 * l[e] | 0)] = A
}), 0, (function (b, d) {
    var e, f, g = b >> 2, h = b + 116 | 0;
    e = l[h >> 2];
    f = (d + 24 | 0) >> 2;
    var j = l[f], k = j + 12 * e | 0, m = l[k + 4 >> 2], n = (t[0] = l[k >> 2], M[0]), m = (t[0] = m, M[0]), p = q[(j + 8 >> 2) + (3 * e | 0)];
    e = (b + 120 | 0) >> 2;
    var u = l[e], r = j + 12 * u | 0, w = l[r + 4 >> 2], r = (t[0] = l[r >> 2], M[0]), w = (t[0] = w, M[0]), j = q[(j + 8 >> 2) + (3 * u | 0)], x = mm(p), y = nm(p), A = mm(j), C = nm(j), z = q[g + 39], D = q[g + 40], E = q[g + 41], u = q[g + 42], G = q[g + 20] - q[g + 35], H = q[g + 21] - q[g + 36], F = y * G - x * H, y = x * G + y * H, G = q[g + 22] - q[g + 37], H = q[g + 23] - q[g + 38], x = C * G - A * H, A = A * G + C * H, H = z + D, C = H + y * y * E + A * A * u, I = -y, G = F * I * E - A * x * u, J = E * I - A * u, L = H + F * F * E + x * x * u, O = F * E + x * u, R = E + u, H = r + x - n - F, I = w + A - m - y;
    if (0 < q[g + 17]) {
        g = Fh(H * H + I * I), J = C * L - G * G, O = 0 != J ? 1 / J : J, J = -(O * (L * H - G * I)), G = -(O * (C * I - G * H)), C = 0, F = F * G - y * J, x = x * G - A * J, y = J
    } else {
        var T = j - p - q[g + 24], g = Fh(H * H + I * I), S = L * R - O * O, U = O * J - G * R, W = G * O - L * J, Q = C * S + G * U + J * W, Q = 0 != Q ? 1 / Q : Q, $ = H * O, L = Q * (C * (L * T - O * I) + G * ($ - G * T) + J * (G * I - L * H)), S = -(Q * (H * S + I * U + T * W)), G = -(Q * (C * (I * R - T * O) + G * (T * J - H * R) + J * ($ - I * J))), C = 0 < T ? T : -T, F = F * G - y * S - L, x = x * G - A * S - L, y = S
    }
    A = G;
    n = (M[0] = n - z * y, t[0]);
    m = (M[0] = m - z * A, t[0]) | 0;
    l[(k | 0) >> 2] = 0 | n;
    l[(k + 4 | 0) >> 2] = m;
    q[(l[f] + 8 >> 2) + (3 * l[h >> 2] | 0)] = p - E * F;
    h = l[f] + 12 * l[e] | 0;
    k = (M[0] = r + D * y, t[0]);
    n = (M[0] = w + D * A, t[0]) | 0;
    l[(h | 0) >> 2] = 0 | k;
    l[(h + 4 | 0) >> 2] = n;
    q[(l[f] + 8 >> 2) + (3 * l[e] | 0)] = j + u * x;
    return.004999999888241291 < g ? 0 : .03490658849477768 >= C
}), 0, (function (b, d) {
    var e;
    e = l[d + 48 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 76 >> 2], h = q[e + 5], j = q[d + 80 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d) {
    var e;
    e = l[d + 52 >> 2] >> 2;
    var f = q[e + 6], g = q[d + 84 >> 2], h = q[e + 5], j = q[d + 88 >> 2], k = h * g + f * j + q[e + 4];
    q[b >> 2] = f * g - h * j + q[e + 3];
    q[b + 4 >> 2] = k
}), 0, (function (b, d, e) {
    var d = d >> 2, f = q[d + 27], g = q[d + 29], h = (q[d + 46] * f + q[d + 44] * g) * e;
    q[b >> 2] = (q[d + 45] * f + q[d + 43] * g) * e;
    q[b + 4 >> 2] = h
}), 0, (function (b, d) {
    return q[b + 112 >> 2] * d
}), 0, (function (b) {
    var d = b >> 2, e = a, f = l[l[d + 12] + 8 >> 2], g = l[l[d + 13] + 8 >> 2];
    V(N.Wg | 0, (s = a, a += 1, a = a + 3 >> 2 << 2, l[s >> 2] = 0, s));
    V(N.A | 0, (s = a, a += 4, l[s >> 2] = f, s));
    V(N.B | 0, (s = a, a += 4, l[s >> 2] = g, s));
    f = c[b + 61 | 0] & 1;
    V(N.C | 0, (s = a, a += 4, l[s >> 2] = f, s));
    f = q[d + 19];
    g = q[d + 20];
    V(N.K | 0, (s = a, a += 16, Ee[0] = f, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = g, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    f = q[d + 21];
    g = q[d + 22];
    V(N.L | 0, (s = a, a += 16, Ee[0] = f, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = g, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    f = q[d + 23];
    g = q[d + 24];
    V(N.Xb | 0, (s = a, a += 16, Ee[0] = f, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], Ee[0] = g, l[s + 8 >> 2] = t[0], l[s + 12 >> 2] = t[1], s));
    b = c[b + 128 | 0] & 1;
    V(N.bb | 0, (s = a, a += 4, l[s >> 2] = b, s));
    b = q[d + 31];
    V(N.cb | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    b = q[d + 30];
    V(N.$b | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    b = q[d + 17];
    V(N.Oa | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    b = q[d + 18];
    V(N.Pa | 0, (s = a, a += 8, Ee[0] = b, l[s >> 2] = t[0], l[s + 4 >> 2] = t[1], s));
    d = l[d + 14];
    V(N.z | 0, (s = a, a += 4, l[s >> 2] = d, s));
    a = e
}), 0, Hb(), 0, (function (b) {
    Ls(b)
}), 0, (function (b, d) {
    var e, f, g, h, j, k, m = b >> 2, n = l[m + 12];
    k = n >> 2;
    var p = l[k + 2], u = b + 132 | 0;
    l[u >> 2] = p;
    var r = l[m + 13];
    j = r >> 2;
    var w = l[j + 2];
    h = (b + 136 | 0) >> 2;
    l[h] = w;
    var x = n + 28 | 0, y = b + 140 | 0, A = l[x >> 2], C = l[x + 4 >> 2];
    l[y >> 2] = A;
    l[y + 4 >> 2] = C;
    var z = r + 28 | 0, D = b + 148 | 0, E = l[z >> 2], G = l[z + 4 >> 2];
    l[D >> 2] = E;
    l[D + 4 >> 2] = G;
    var H = q[k + 30];
    q[m + 39] = H;
    var F = q[j + 30];
    q[m + 40] = F;
    var I = q[k + 32];
    q[m + 41] = I;
    var J = q[j + 32];
    q[m + 42] = J;
    var L = l[d + 24 >> 2], O = L + 12 * p | 0, R = l[O + 4 >> 2], T = (t[0] = l[O >> 2], M[0]), S = (t[0] = R, M[0]), U = q[(L + 8 >> 2) + (3 * p | 0)];
    g = (d + 28 | 0) >> 2;
    var W = l[g], Q = W + 12 * p | 0, $ = l[Q + 4 >> 2], ea = (t[0] = l[Q >> 2], M[0]), sa = (t[0] = $, M[0]), Ba = q[(W + 8 >> 2) + (3 * p | 0)], oa = L + 12 * w | 0, ga = l[oa + 4 >> 2], qa = (t[0] = l[oa >> 2], M[0]), la = (t[0] = ga, M[0]), Ca = q[(L + 8 >> 2) + (3 * w | 0)], ia = W + 12 * w | 0, ya = l[ia + 4 >> 2], ta = (t[0] = l[ia >> 2], M[0]), Ia = (t[0] = ya, M[0]), na = q[(W + 8 >> 2) + (3 * w | 0)], Z = mm(U), ba = nm(U), ca = mm(Ca), ma = nm(Ca), ka = q[m + 19], aa = (t[0] = A, M[0]), ra = ka - aa, ha = q[m + 20], za = (t[0] = C, M[0]), X = ha - za, ua = ba * ra - Z * X, da = Z * ra + ba * X, fa = q[m + 21], Aa = (t[0] = E, M[0]), Qa = fa - Aa, pa = q[m + 22], cb = (t[0] = G, M[0]), Ra = pa - cb, Ta = ma * Qa - ca * Ra, $a = ca * Qa + ma * Ra, va = qa + Ta - T - ua, Wa = la + $a - S - da, fb = q[m + 25], gb = q[m + 26], Xa = ba * fb - Z * gb, Ua = Z * fb + ba * gb, Va = b + 180 | 0, pb = (M[0] = Xa, t[0]), nb = (M[0] = Ua, t[0]) | 0;
    l[Va >> 2] = 0 | pb;
    l[Va + 4 >> 2] = nb;
    var La = va + ua, qb = Wa + da, bb = La * Ua - qb * Xa;
    q[m + 49] = bb;
    var Fa = Ta * Ua - $a * Xa;
    q[m + 50] = Fa;
    var Ma = H + F, wa = Ma + I * bb * bb + J * Fa * Fa;
    q[m + 51] = 0 < wa ? 1 / wa : wa;
    f = (b + 212 | 0) >> 2;
    q[f] = 0;
    var hb = b + 216 | 0;
    q[hb >> 2] = 0;
    var Ya = b + 220 | 0;
    q[Ya >> 2] = 0;
    var Za = q[m + 17];
    if (0 < Za) {
        var Da = q[m + 23], Oa = q[m + 24], ib = ba * Da - Z * Oa, ab = Z * Da + ba * Oa, Ga = b + 172 | 0, jb = (M[0] = ib, t[0]), Ea = (M[0] = ab, t[0]) | 0;
        l[Ga >> 2] = 0 | jb;
        l[Ga + 4 >> 2] = Ea;
        var Pa = La * ab - qb * ib;
        q[m + 47] = Pa;
        var Ja = Ta * ab - $a * ib;
        q[m + 48] = Ja;
        var db = Ma + I * Pa * Pa + J * Ja * Ja;
        if (0 < db) {
            var xa = 1 / db;
            q[f] = xa;
            var Sa = va * ib + Wa * ab, Ka = 6.2831854820251465 * Za, tb = xa * Ka * Ka, kb = q[d >> 2], ub = kb * (2 * xa * q[m + 18] * Ka + kb * tb), rb = 0 < ub ? 1 / ub : ub;
            q[Ya >> 2] = rb;
            q[hb >> 2] = Sa * kb * tb * rb;
            var Bb = db + rb;
            q[f] = Bb;
            0 < Bb && (q[f] = 1 / Bb)
        }
    } else {
        q[m + 29] = 0
    }
    if (0 == (c[b + 128 | 0] & 1) << 24 >> 24) {
        q[m + 52] = 0, q[m + 28] = 0
    } else {
        var lb = I + J, yb = b + 208 | 0;
        q[yb >> 2] = lb;
        0 < lb && (q[yb >> 2] = 1 / lb)
    }
    if (0 == (c[d + 20 | 0] & 1) << 24 >> 24) {
        q[m + 27] = 0;
        q[m + 29] = 0;
        q[m + 28] = 0;
        var xb = na, Ib = Ba, wb = ea, vb = sa, zb = ta, Eb = Ia
    } else {
        e = (d + 8 | 0) >> 2;
        var Cb = b + 108 | 0, eb = q[Cb >> 2] * q[e];
        q[Cb >> 2] = eb;
        var sb = b + 116 | 0, ob = q[sb >> 2] * q[e];
        q[sb >> 2] = ob;
        var Db = b + 112 | 0, Jb = q[Db >> 2] * q[e];
        q[Db >> 2] = Jb;
        var Rb = Xa * eb + q[m + 43] * ob, Nb = Ua * eb + q[m + 44] * ob, xb = na + J * (eb * Fa + ob * q[m + 48] + Jb), Ib = Ba - I * (eb * bb + ob * q[m + 47] + Jb), wb = ea - Rb * H, vb = sa - Nb * H, zb = ta + Rb * F, Eb = Ia + Nb * F
    }
    var Ob = l[g] + 12 * p | 0, Lb = (M[0] = wb, t[0]), Pb = (M[0] = vb, t[0]) | 0;
    l[(Ob | 0) >> 2] = 0 | Lb;
    l[(Ob + 4 | 0) >> 2] = Pb;
    q[(l[g] + 8 >> 2) + (3 * l[u >> 2] | 0)] = Ib;
    var Mb = l[g] + 12 * l[h] | 0, Yb = (M[0] = zb, t[0]), Zb = (M[0] = Eb, t[0]) | 0;
    l[(Mb | 0) >> 2] = 0 | Yb;
    l[(Mb + 4 | 0) >> 2] = Zb;
    q[(l[g] + 8 >> 2) + (3 * l[h] | 0)] = xb
}), 0, (function (b, d) {
    var e, f, g = b >> 2, h = q[g + 39], j = q[g + 40], k = q[g + 41], m = q[g + 42], n = b + 132 | 0, p = l[n >> 2];
    f = (d + 28 | 0) >> 2;
    var u = l[f], r = u + 12 * p | 0;
    e = l[r + 4 >> 2];
    var r = (t[0] = l[r >> 2], M[0]), w = (t[0] = e, M[0]), x = q[(u + 8 >> 2) + (3 * p | 0)];
    e = (b + 136 | 0) >> 2;
    var y = l[e], A = u + 12 * y | 0, C = l[A + 4 >> 2], A = (t[0] = l[A >> 2], M[0]), C = (t[0] = C, M[0]), y = q[(u + 8 >> 2) + (3 * y | 0)], z = q[g + 43], D = q[g + 44], E = q[g + 48], u = q[g + 47], G = b + 116 | 0, H = q[G >> 2], F = (z * (A - r) + D * (C - w) + E * y - u * x + q[g + 54] + q[g + 55] * H) * -q[g + 53];
    q[G >> 2] = H + F;
    z *= F;
    D *= F;
    r -= z * h;
    w -= D * h;
    u = x - k * F * u;
    x = A + z * j;
    A = C + D * j;
    C = y + m * F * E;
    y = b + 112 | 0;
    E = q[y >> 2];
    z = q[d >> 2] * q[g + 30];
    D = E + (C - u - q[g + 31]) * -q[g + 52];
    F = -z;
    z = D < z ? D : z;
    F = z < F ? F : z;
    q[y >> 2] = F;
    E = F - E;
    y = u - k * E;
    C += m * E;
    F = q[g + 45];
    z = q[g + 46];
    u = q[g + 50];
    E = q[g + 49];
    g = (F * (x - r) + z * (A - w) + u * C - E * y) * -q[g + 51];
    D = b + 108 | 0;
    q[D >> 2] += g;
    F *= g;
    z *= g;
    p = l[f] + 12 * p | 0;
    r = (M[0] = r - F * h, t[0]);
    h = (M[0] = w - z * h, t[0]) | 0;
    l[(p | 0) >> 2] = 0 | r;
    l[(p + 4 | 0) >> 2] = h;
    q[(l[f] + 8 >> 2) + (3 * l[n >> 2] | 0)] = y - k * g * E;
    k = l[f] + 12 * l[e] | 0;
    n = (M[0] = x + F * j, t[0]);
    j = (M[0] = A + z * j, t[0]) | 0;
    l[(k | 0) >> 2] = 0 | n;
    l[(k + 4 | 0) >> 2] = j;
    q[(l[f] + 8 >> 2) + (3 * l[e] | 0)] = C + m * g * u
}), 0, (function (b, d) {
    var e, f, g = b >> 2, h = b + 132 | 0;
    e = l[h >> 2];
    f = (d + 24 | 0) >> 2;
    var j = l[f], k = j + 12 * e | 0, m = l[k + 4 >> 2], n = (t[0] = l[k >> 2], M[0]), m = (t[0] = m, M[0]), p = q[(j + 8 >> 2) + (3 * e | 0)];
    e = (b + 136 | 0) >> 2;
    var u = l[e], r = j + 12 * u | 0, w = l[r + 4 >> 2], r = (t[0] = l[r >> 2], M[0]), w = (t[0] = w, M[0]), j = q[(j + 8 >> 2) + (3 * u | 0)], x = mm(p), y = nm(p), A = mm(j), C = nm(j), u = q[g + 19] - q[g + 35], z = q[g + 20] - q[g + 36], D = y * u - x * z, z = x * u + y * z, E = q[g + 21] - q[g + 37], G = q[g + 22] - q[g + 38], u = C * E - A * G, A = A * E + C * G, E = r - n + u - D, G = w - m + A - z, H = q[g + 25], F = q[g + 26], C = y * H - x * F, x = x * H + y * F, y = E * C + G * x, I = q[g + 39], F = q[g + 40], J = q[g + 41], L = q[g + 49], H = q[g + 42], g = q[g + 50], g = I + F + J * L * L + H * g * g, g = 0 != g ? -y / g : 0, O = C * g, L = x * g, n = (M[0] = n - O * I, t[0]), m = (M[0] = m - L * I, t[0]) | 0;
    l[(k | 0) >> 2] = 0 | n;
    l[(k + 4 | 0) >> 2] = m;
    q[(l[f] + 8 >> 2) + (3 * l[h >> 2] | 0)] = p - J * g * ((E + D) * x - (G + z) * C);
    h = l[f] + 12 * l[e] | 0;
    k = (M[0] = r + O * F, t[0]);
    n = (M[0] = w + L * F, t[0]) | 0;
    l[(h | 0) >> 2] = 0 | k;
    l[(h + 4 | 0) >> 2] = n;
    q[(l[f] + 8 >> 2) + (3 * l[e] | 0)] = j + H * g * (u * x - A * C);
    return.004999999888241291 >= (0 < y ? y : -y)
}), 0, iq, 0, jq, 0, kq, 0, Vq, 0, (function (b, d, e) {
    sp(b, d, e)
}), 0, lq, 0, mq, 0, (function (b) {
    pp(b)
}), 0, nq, 0, Xq, 0, oq, 0, Ks, 0, Yq, 0, (function (b) {
    return b | 0
}), 0, (function (b, d) {
    Ao(b, d)
}), 0, Ms, 0, Zq, 0, $q, 0, ar, 0, Ns, 0, br, 0, Os, 0, cr, 0, dr, 0, er, 0, is, 0, js, 0, ks, 0, ls, 0, Ps, 0, ms, 0, ns, 0, Qs, 0, os, 0, Rs, 0, Ss, 0, (function (b) {
    xo(b)
}), 0, (function (b, d) {
    mp(b, d)
}), 0, (function (b) {
    return b + 32 | 0
}), 0, ps, 0, qs, 0, rs, 0, ss, 0, Ts, 0, Us, 0, Vs, 0, ts, 0, Ws, 0, us, 0, Xs, 0, Ys, 0, Zs, 0, (function (b, d, e) {
    return gh(b, d, e)
}), 0, $s, 0, at, 0, bt, 0, vs, 0, ws, 0, xs, 0, (function (b) {
    return b + 102996 | 0
}), 0, ct, 0, ys, 0, (function (b) {
    return b + 102872 | 0
}), 0, zs, 0, (function (b) {
    aq(b)
}), 0, As, 0, Bs, 0, Cs, 0, Ds, 0, Es, 0, Fs, 0, dt, 0, Gs, 0, Hs, 0, (function (b, d) {
    Cp(b, d)
}), 0, et, 0, Is, 0, (function (b, d, e, f) {
    Pp(b, d, e, f)
}), 0, Js, 0, ft, 0, gt, 0, (function (b, d) {
    Bp(b, d)
}), 0, ht, 0, (function (b, d) {
    return Dp(b, d)
}), 0, it, 0, ku, 0, jt, 0, kt, 0, lt, 0, lu, 0, (function (b) {
    bq(b)
}), 0, mt, 0, mu, 0, nt, 0, ot, 0, pt, 0, Kw, 0, qt, 0, Lw, 0, rt, 0, st, 0, (function (b) {
    return b + 12 | 0
}), 0, Mw, 0, (function (b) {
    return b + 12 | 0
}), 0, Sw, 0, Tw, 0, Kb(1), 0, Uw, 0, Vw, 0, Ww, 0, Kb(0), 0, tt, 0, (function (b) {
    return b + 12 | 0
}), 0, ut, 0, Yw, 0, vt, 0, Zw, 0, $w, 0, ax, 0, bx, 0, wt, 0, cx, 0, xt, 0, yt, 0, zt, 0, Zt, 0, dx, 0, ex, 0, $t, 0, au, 0, bu, 0, cu, 0, hx, 0, ix, 0, lx, 0, du, 0, ox, 0, px, 0, qx, 0, rx, 0, sx, 0, tx, 0, eu, 0, fu, 0, (function (b) {
    km(b)
}), 0, ux, 0, (function (b, d, e, f) {
    return Pk(b, d, e, f)
}), 0, (function (b) {
    jm(b)
}), 0, (function (b, d) {
    Nk(b, d)
}), 0, vx, 0, Hb(), 0, wx, 0, Kb(0), 0, xx, 0, yx, 0, Ax, 0, Bx, 0, Cx, 0, Dx, 0, Ex, 0, gu, 0, Fx, 0, hu, 0, iu, 0, ju, 0, wy, 0, xy, 0, Gx, 0, (function (b, d, e) {
    om(b, d, e)
}), 0, yy, 0, Ay, 0, By, 0, Cy, 0, Dy, 0, Hx, 0, Ey, 0, Ix, 0, Jx, 0, Kx, 0, Fy, 0, Gy, 0, Hy, 0, EB, 0, (function (b, d) {
    return qn(b, d)
}), 0, gF, 0, hF, 0, (function (b, d, e) {
    Xm(b, d, e)
}), 0, iF, 0, Lx, 0, Mx, 0, jF, 0, Nx, 0, kF, 0, Ox, 0, (function (b, d, e, f, g) {
    Wm(b, d, e, f, g)
}), 0, Px, 0, lF, 0, Qx, 0, Rx, 0, mF, 0, nF, 0, Sx, 0, oF, 0, Tx, 0, (function (b) {
    return b + 12 | 0
}), 0, qF, 0, Ux, 0, rF, 0, Vx, 0, Wx, 0, sF, 0, Xx, 0, tF, 0, uF, 0, vF, 0, wF, 0, xF, 0, Yx, 0, Zx, 0, zF, 0, $x, 0, AF, 0, ay, 0, by, 0, cy, 0, dy, 0, ey, 0, fy, 0, gy, 0, hy, 0, BF, 0, iy, 0, (function (b) {
    return b + 64 | 0
}), 0, jy, 0, ky, 0, CF, 0, ly, 0, DF, 0, my, 0, EF, 0, FF, 0, GF, 0, HF, 0, ny, 0, oy, 0, py, 0, qy, 0, (function (b, d) {
    kp(b, d)
}), 0, ry, 0, sy, 0, ty, 0, uy, 0, vy, 0, IF, 0, LF, 0, MF, 0, tG, 0, NF, 0, OF, 0, (function (b, d, e) {
    ip(b, d, e)
}), 0, PF, 0, QF, 0, RF, 0, wG, 0, (function (b) {
    vo(b)
}), 0, SF, 0, TF, 0, UF, 0, (function (b, d) {
    uo(b, d)
}), 0, (function (b, d) {
    return yo(b, d)
}), 0, zG, 0, (function (b, d) {
    hp(b, d)
}), 0, (function (b) {
    return b + 12 | 0
}), 0, (function (b) {
    return b + 44 | 0
}), 0, VF, 0, WF, 0, XF, 0, (function (b) {
    return b + 28 | 0
}), 0, AG, 0, DG, 0, YF, 0, GG, 0, JG, 0, ZF, 0, $F, 0, aG, 0, KG, 0, bG, 0, (function (b) {
    lp(b)
}), 0, cG, 0, dG, 0, eG, 0, (function (b, d) {
    zo(b, d)
}), 0, fG, 0, gG, 0, NG, 0, hG, 0, (function (b) {
    return b + 12 | 0
}), 0, iG, 0, OG, 0, PG, 0, QG, 0, (function (b, d) {
    xn(b, d)
}), 0, RG, 0, SG, 0, jG, 0, kG, 0, lG, 0, mG, 0, nG, 0, TG, 0, oG, 0, pG, 0, UG, 0, qG, 0, rG, 0, VG, 0, (function (b) {
    return b + 20 | 0
}), 0, sG, 0, (function (b) {
    return b + 28 | 0
}), 0, WG, 0, XG, 0, YG, 0, ZG, 0, $G, 0, aH, 0, bH, 0, cH, 0, dH, 0, qI, 0, eH, 0, fH, 0, gH, 0, hH, 0, iH, 0, jH, 0, kH, 0, lH, 0, (function (b) {
    return b + 4 | 0
}), 0, rI, 0, mH, 0, nH, 0, oH, 0, pH, 0, qH, 0, rH, 0, sH, 0, tH, 0, (function (b) {
    return b + 16 | 0
}), 0, uH, 0, vH, 0, wH, 0, xH, 0, sI, 0, yH, 0, tI, 0, uI, 0, zH, 0, AH, 0, BH, 0, CH, 0, DH, 0, vI, 0, EH, 0, FH, 0, GH, 0, yI, 0, zI, 0, HH, 0, AI, 0, DI, 0, IH, 0, JH, 0, KH, 0, LH, 0, MH, 0, EI, 0, FI, 0, NH, 0, GI, 0, OH, 0, (function (b, d, e) {
    Hi(b, d, e)
}), 0, JI, 0, PH, 0, KI, 0, QH, 0, RH, 0, SH, 0, TH, 0, LI, 0, UH, 0, VH, 0, WH, 0, MI, 0, XH, 0, YH, 0, ZH, 0, $H, 0, aI, 0, NI, 0, bI, 0, cI, 0, dI, 0, eI, 0, (function (b) {
    return b + 22 | 0
}), 0, fI, 0, gI, 0, hI, 0, OI, 0, iI, 0, jI, 0, kI, 0, lI, 0, mI, 0, nI, 0, oI, 0, (function (b) {
    return b + 36 | 0
}), 0, pI, 0, PI, 0, QI, 0, RI, 0, SI, 0, TI, 0, UI, 0, (function (b) {
    return b + 20 | 0
}), 0, (function (b) {
    return b + 28 | 0
}), 0, dK, 0, VI, 0, WI, 0, XI, 0, YI, 0, ZI, 0, eK, 0, fK, 0, gK, 0, iK, 0, lK, 0, $I, 0, aJ, 0, oK, 0, pK, 0, bJ, 0, cJ, 0, dJ, 0, (function (b) {
    return b + 36 | 0
}), 0, eJ, 0, fJ, 0, gJ, 0, hJ, 0, qK, 0, (function (b) {
    return b + 20 | 0
}), 0, iJ, 0, (function (b) {
    return b + 28 | 0
}), 0, jJ, 0, kJ, 0, lJ, 0, mJ, 0, nJ, 0, rK, 0, oJ, 0, pJ, 0, qJ, 0, rJ, 0, sJ, 0, tJ, 0, uJ, 0, vJ, 0, wJ, 0, xJ, 0, yJ, 0, zJ, 0, AJ, 0, (function (b) {
    return b + 20 | 0
}), 0, BJ, 0, (function (b) {
    return b + 28 | 0
}), 0, CJ, 0, DJ, 0, sK, 0, tK, 0, EJ, 0, FJ, 0, GJ, 0, HJ, 0, uK, 0, IJ, 0, JJ, 0, KJ, 0, LJ, 0, (function (b) {
    return b + 36 | 0
}), 0, MJ, 0, (function (b) {
    return b + 44 | 0
}), 0, (function (b) {
    return b + 28 | 0
}), 0, NJ, 0, vK, 0, OJ, 0, (function (b, d, e, f, g, h, j, k) {
    fq(b, d, e, f, g, h, j, k)
}), 0, PJ, 0, QJ, 0, (function (b) {
    return b + 20 | 0
}), 0, RJ, 0, SJ, 0, TJ, 0, UJ, 0, wK, 0, VJ, 0, WJ, 0, XJ, 0, YJ, 0, ZJ, 0, xK, 0, $J, 0, yK, 0, zK, 0, aK, 0, bK, 0, (function (b) {
    return b | 0
}), 0, (function (b) {
    return b + 8 | 0
}), 0, AK, 0, BK, 0, cK, 0, uL, 0, CK, 0, DK, 0, EK, 0, vL, 0, wL, 0, FK, 0, xL, 0, GK, 0, HK, 0, IK, 0, JK, 0, (function (b) {
    return b + 20 | 0
}), 0, KK, 0, (function (b) {
    return b + 28 | 0
}), 0, LK, 0, MK, 0, NK, 0, yL, 0, zL, 0, OK, 0, PK, 0, AL, 0, QK, 0, RK, 0, SK, 0, (function (b) {
    return b + 20 | 0
}), 0, TK, 0, UK, 0, VK, 0, WK, 0, XK, 0, YK, 0, ZK, 0, BL, 0, (function (b) {
    return b + 20 | 0
}), 0, (function (b) {
    return b + 28 | 0
}), 0, $K, 0, CL, 0, aL, 0, bL, 0, DL, 0, EL, 0, cL, 0, dL, 0, eL, 0, fL, 0, gL, 0, FL, 0, hL, 0, GL, 0, iL, 0, jL, 0, kL, 0, lL, 0, mL, 0, nL, 0, oL, 0, HL, 0, pL, 0, qL, 0, IL, 0, rL, 0, sL, 0, (function (b) {
    return b + 20 | 0
}), 0, (function (b) {
    return b + 28 | 0
}), 0, JL, 0, tL, 0, (function (b) {
    Ha(b | 0)
}), 0, (function (b) {
    Ha(b | 0);
    Ls(b)
}), 0, (function (b) {
    Ha(b | 0);
    Ls(b)
}), 0, (function (b, d, e) {
    var f, g, h = a;
    a += 112;
    g = h >> 2;
    var j = h + 56;
    f = j >> 2;
    var k = (b | 0) == (d | 0);
    do {
        if (k) {
            var m = 1
        } else {
            if (0 == (d | 0)) {
                m = 0
            } else {
                var n = d, p = l[d >> 2], m = n + l[p - 8 >> 2] | 0, p = l[p - 4 >> 2];
                l[g] = lN;
                l[g + 1] = n;
                l[g + 2] = kN;
                l[g + 3] = -1;
                for (var n = h + 16 | 0, u = h + 20 | 0, r = h + 24 | 0, w = h + 28 | 0, x = h + 32 | 0, y = h + 40 | 0, A = (p | 0) == (lN | 0), C = n, z = C >> 2, D = z + 9; z < D; z++) {
                    l[z] = 0
                }
                i[C + 36 >> 1] = 0;
                c[C + 38] = 0;
                if (A) {
                    l[g + 12] = 1, K[l[l[lN >> 2] + 12 >> 2]](lN, h, m, m, 1), m = 1 == (l[r >> 2] | 0) ? m : 0
                } else {
                    if (z = h + 36 | 0, K[l[l[p >> 2] + 16 >> 2]](p, h, m, 1), m = l[z >> 2], 0 == (m | 0)) {
                        if (1 != (l[y >> 2] | 0)) {
                            m = 0;
                            break
                        }
                        if (1 != (l[w >> 2] | 0)) {
                            m = 0;
                            break
                        }
                        m = 1 == (l[x >> 2] | 0) ? l[u >> 2] : 0
                    } else {
                        if (1 == (m | 0)) {
                            if (1 != (l[r >> 2] | 0)) {
                                if (0 != (l[y >> 2] | 0)) {
                                    m = 0;
                                    break
                                }
                                if (1 != (l[w >> 2] | 0)) {
                                    m = 0;
                                    break
                                }
                                if (1 != (l[x >> 2] | 0)) {
                                    m = 0;
                                    break
                                }
                            }
                            m = l[n >> 2]
                        } else {
                            m = 0;
                            break
                        }
                    }
                }
                p = m;
                if (0 == (m | 0)) {
                    m = 0
                } else {
                    z = j >> 2;
                    for (D = z + 14; z < D; z++) {
                        l[z] = 0
                    }
                    l[f] = p;
                    l[f + 2] = b;
                    l[f + 3] = -1;
                    l[f + 12] = 1;
                    K[l[l[m >> 2] + 20 >> 2]](p, j, l[e >> 2], 1);
                    1 != (l[f + 6] | 0) ? m = 0 : (l[e >> 2] = l[f + 4], m = 1)
                }
            }
        }
    } while (0);
    a = h;
    return m
}), 0, (function (b, d, e, f, g) {
    var h = d >> 2;
    (l[h + 2] | 0) == (b | 0) && (c[d + 53 | 0] = 1, (l[h + 1] | 0) == (f | 0) && (c[d + 52 | 0] = 1, b = d + 16 | 0, f = l[b >> 2], 0 == (f | 0) ? (l[b >> 2] = e, l[h + 6] = g, l[h + 9] = 1, 1 == (l[h + 12] | 0) & 1 == (g | 0) && (c[d + 54 | 0] = 1)) : (f | 0) == (e | 0) ? (e = d + 24 | 0, b = l[e >> 2], 2 == (b | 0) ? l[e >> 2] = g : g = b, 1 == (l[h + 12] | 0) & 1 == (g | 0) && (c[d + 54 | 0] = 1)) : (h = d + 36 | 0, l[h >> 2] = l[h >> 2] + 1 | 0, c[d + 54 | 0] = 1)))
}), 0, (function (b, d, e, f) {
    var g = d >> 2, h = (l[g + 2] | 0) == (b | 0);
    a:do {
        if (h) {
            if ((l[g + 1] | 0) == (e | 0)) {
                var j = d + 28 | 0;
                1 != (l[j >> 2] | 0) && (l[j >> 2] = f)
            }
        } else {
            if ((l[g] | 0) == (b | 0)) {
                j = (l[g + 4] | 0) == (e | 0);
                do {
                    if (!j) {
                        var k = d + 20 | 0;
                        if ((l[k >> 2] | 0) != (e | 0)) {
                            l[g + 8] = f;
                            l[k >> 2] = e;
                            b = d + 40 | 0;
                            l[b >> 2] = l[b >> 2] + 1 | 0;
                            1 == (l[g + 9] | 0) && 2 == (l[g + 6] | 0) && (c[d + 54 | 0] = 1);
                            l[g + 11] = 4;
                            break a
                        }
                    }
                } while (0);
                1 == (f | 0) && (l[g + 8] = 1)
            }
        }
    } while (0)
}), 0, (function (b, d, e, f) {
    if ((l[d + 8 >> 2] | 0) == (b | 0)) {
        var b = d + 16 | 0, g = l[b >> 2];
        0 == (g | 0) ? (l[b >> 2] = e, l[d + 24 >> 2] = f, l[d + 36 >> 2] = 1) : (g | 0) == (e | 0) ? (d = d + 24 | 0, 2 == (l[d >> 2] | 0) && (l[d >> 2] = f)) : (f = d + 36 | 0, l[f >> 2] = l[f >> 2] + 1 | 0, l[d + 24 >> 2] = 2, c[d + 54 | 0] = 1)
    }
}), 0, (function (b) {
    Ha(b | 0);
    Ls(b)
}), 0, (function (b, d) {
    return(b | 0) == (d | 0) ? 1 : (d | 0) == (mN | 0)
}), 0, (function (b) {
    Ha(b | 0);
    Ls(b)
}), 0, (function (b, d) {
    return(b | 0) == (d | 0)
}), 0, (function (b) {
    Ha(b | 0);
    Ls(b)
}), 0, Kb(0), 0, (function (b) {
    Ha(b | 0);
    Ls(b)
}), 0, Kb(0), 0, (function (b) {
    Ha(b | 0);
    Ls(b)
}), 0, (function (b, d) {
    return(b | 0) == (d | 0)
}), 0, (function (b) {
    Ha(b | 0);
    Ls(b)
}), 0, (function (b, d, e, f, g) {
    var h = d >> 2;
    (b | 0) == (l[h + 2] | 0) ? (c[d + 53 | 0] = 1, (l[h + 1] | 0) == (f | 0) && (c[d + 52 | 0] = 1, f = d + 16 | 0, b = l[f >> 2], 0 == (b | 0) ? (l[f >> 2] = e, l[h + 6] = g, l[h + 9] = 1, 1 == (l[h + 12] | 0) & 1 == (g | 0) && (c[d + 54 | 0] = 1)) : (b | 0) == (e | 0) ? (e = d + 24 | 0, f = l[e >> 2], 2 == (f | 0) ? l[e >> 2] = g : g = f, 1 == (l[h + 12] | 0) & 1 == (g | 0) && (c[d + 54 | 0] = 1)) : (g = d + 36 | 0, l[g >> 2] = l[g >> 2] + 1 | 0, c[d + 54 | 0] = 1))) : (h = l[b + 8 >> 2], K[l[l[h >> 2] + 12 >> 2]](h, d, e, f, g))
}), 0, (function (b, d, e, f) {
    var g = d >> 2, h = b | 0, j = (h | 0) == (l[g + 2] | 0);
    a:do {
        if (j) {
            if ((l[g + 1] | 0) == (e | 0)) {
                var k = d + 28 | 0;
                1 != (l[k >> 2] | 0) && (l[k >> 2] = f)
            }
        } else {
            if ((h | 0) == (l[g] | 0)) {
                var m = (l[g + 4] | 0) == (e | 0);
                do {
                    if (!m && (k = d + 20 | 0, (l[k >> 2] | 0) != (e | 0))) {
                        l[g + 8] = f;
                        f = (d + 44 | 0) >> 2;
                        if (4 == (l[f] | 0)) {
                            break a
                        }
                        h = d + 52 | 0;
                        c[h] = 0;
                        j = d + 53 | 0;
                        c[j] = 0;
                        b = l[b + 8 >> 2];
                        K[l[l[b >> 2] + 12 >> 2]](b, d, e, e, 1);
                        if (0 == (c[j] & 1) << 24 >> 24) {
                            var n = 0, b = 14
                        } else {
                            0 == (c[h] & 1) << 24 >> 24 ? (n = 1, b = 14) : b = 18
                        }
                        b:do {
                            if (14 == b) {
                                l[k >> 2] = e;
                                b = d + 40 | 0;
                                l[b >> 2] = l[b >> 2] + 1 | 0;
                                h = 1 == (l[g + 9] | 0);
                                do {
                                    if (h) {
                                        if (2 != (l[g + 6] | 0)) {
                                            b = 17
                                        } else {
                                            c[d + 54 | 0] = 1;
                                            if (n) {
                                                break b
                                            }
                                            b = 19
                                        }
                                    } else {
                                        b = 17
                                    }
                                } while (0);
                                if (!(17 == b && n)) {
                                    l[f] = 4;
                                    break a
                                }
                            }
                        } while (0);
                        l[f] = 3;
                        break a
                    }
                } while (0);
                1 == (f | 0) && (l[g + 8] = 1)
            } else {
                k = l[b + 8 >> 2], K[l[l[k >> 2] + 16 >> 2]](k, d, e, f)
            }
        }
    } while (0)
}), 0, (function (b, d, e, f) {
    if ((b | 0) == (l[d + 8 >> 2] | 0)) {
        var b = d + 16 | 0, g = l[b >> 2];
        0 == (g | 0) ? (l[b >> 2] = e, l[d + 24 >> 2] = f, l[d + 36 >> 2] = 1) : (g | 0) == (e | 0) ? (d = d + 24 | 0, 2 == (l[d >> 2] | 0) && (l[d >> 2] = f)) : (f = d + 36 | 0, l[f >> 2] = l[f >> 2] + 1 | 0, l[d + 24 >> 2] = 2, c[d + 54 | 0] = 1)
    } else {
        b = l[b + 8 >> 2], K[l[l[b >> 2] + 20 >> 2]](b, d, e, f)
    }
}), 0, (function (b) {
    Ha(b | 0);
    Ls(b)
}), 0, (function (b, d, e, f, g) {
    var h = d >> 2, j = (b | 0) == (l[h + 2] | 0);
    do {
        if (j) {
            if (c[d + 53 | 0] = 1, (l[h + 1] | 0) == (f | 0)) {
                c[d + 52 | 0] = 1;
                var k = d + 16 | 0, m = l[k >> 2];
                0 == (m | 0) ? (l[k >> 2] = e, l[h + 6] = g, l[h + 9] = 1, 1 == (l[h + 12] | 0) & 1 == (g | 0) && (c[d + 54 | 0] = 1)) : (m | 0) == (e | 0) ? (k = d + 24 | 0, m = l[k >> 2], k = 2 == (m | 0) ? l[k >> 2] = g : m, 1 == (l[h + 12] | 0) & 1 == (k | 0) && (c[d + 54 | 0] = 1)) : (k = d + 36 | 0, l[k >> 2] = l[k >> 2] + 1 | 0, c[d + 54 | 0] = 1)
            }
        } else {
            var k = d + 52 | 0, m = c[k] & 1, n = d + 53 | 0, p = c[n] & 1, u = l[b + 12 >> 2], r = (u << 3) + b + 16 | 0;
            c[k] = 0;
            c[n] = 0;
            var w = l[b + 20 >> 2], x = w >> 8, y = l[b + 16 >> 2];
            K[l[l[y >> 2] + 12 >> 2]](y, d, e, f + (0 == (w & 1 | 0) ? x : l[l[f >> 2] + x >> 2]) | 0, 0 != (w & 2 | 0) ? g : 2);
            u = 1 < (u | 0);
            a:do {
                if (u) {
                    for (var w = b + 8 | 0, x = d + 24 | 0, y = d + 54 | 0, A = f, C = b + 24 | 0; ;) {
                        if (0 != (c[y] & 1) << 24 >> 24) {
                            break a
                        }
                        var z = 0 == (c[k] & 1) << 24 >> 24;
                        do {
                            if (z) {
                                if (0 != (c[n] & 1) << 24 >> 24 && 0 == (l[w >> 2] & 1 | 0)) {
                                    break a
                                }
                            } else {
                                if (1 == (l[x >> 2] | 0)) {
                                    break a
                                }
                                if (0 == (l[w >> 2] & 2 | 0)) {
                                    break a
                                }
                            }
                        } while (0);
                        c[k] = 0;
                        c[n] = 0;
                        var z = l[C + 4 >> 2], D = z >> 8, E = l[C >> 2];
                        K[l[l[E >> 2] + 12 >> 2]](E, d, e, f + (0 == (z & 1 | 0) ? D : l[l[A >> 2] + D >> 2]) | 0, 0 != (z & 2 | 0) ? g : 2);
                        C = C + 8 | 0;
                        if (C >>> 0 >= r >>> 0) {
                            break a
                        }
                    }
                }
            } while (0);
            c[k] = m;
            c[n] = p
        }
    } while (0)
}), 0, (function (b, d, e, f) {
    var g, h = d >> 2, j = b >> 2, k = b | 0, m = (k | 0) == (l[h + 2] | 0);
    a:do {
        if (m) {
            if ((l[h + 1] | 0) == (e | 0)) {
                var n = d + 28 | 0;
                1 != (l[n >> 2] | 0) && (l[n >> 2] = f)
            }
        } else {
            if ((k | 0) == (l[h] | 0)) {
                var p = (l[h + 4] | 0) == (e | 0);
                do {
                    if (!p && (n = d + 20 | 0, (l[n >> 2] | 0) != (e | 0))) {
                        l[h + 8] = f;
                        f = (d + 44 | 0) >> 2;
                        if (4 == (l[f] | 0)) {
                            break a
                        }
                        m = (l[j + 3] << 3) + b + 16 | 0;
                        p = d + 52 | 0;
                        g = d + 53 | 0;
                        var j = d + 54 | 0, u = b + 8 | 0, k = d + 24 | 0, r = e, b = b + 16 | 0, w = 0, x = 0;
                        b:for (; ;) {
                            var y = b >>> 0 < m >>> 0;
                            do {
                                if (y) {
                                    c[p] = 0;
                                    c[g] = 0;
                                    var A = o[b + 4 >> 2], y = A >> 8, C = o[b >> 2];
                                    K[l[l[C >> 2] + 12 >> 2]](C, d, e, e + (0 == (A & 1 | 0) ? y : l[l[r >> 2] + y >> 2]) | 0, 2 - (A >>> 1 & 1) | 0);
                                    if (0 != (c[j] & 1) << 24 >> 24) {
                                        A = x;
                                        break
                                    }
                                    if (0 != (c[g] & 1) << 24 >> 24) {
                                        if (0 == (c[p] & 1) << 24 >> 24) {
                                            if (0 == (l[u >> 2] & 1 | 0)) {
                                                A = 1;
                                                break
                                            }
                                        } else {
                                            if (1 == (l[k >> 2] | 0)) {
                                                break b
                                            }
                                            if (0 == (l[u >> 2] & 2 | 0)) {
                                                break b
                                            }
                                            w = 1
                                        }
                                        x = 1
                                    }
                                    b = b + 8 | 0;
                                    continue b
                                }
                                A = x
                            } while (0);
                            0 == (w & 1) << 24 >> 24 && (l[n >> 2] = e, d = d + 40 | 0, l[d >> 2] = l[d >> 2] + 1 | 0, 1 == (l[h + 9] | 0) && 2 == (l[k >> 2] | 0) && (c[j] = 1));
                            if (0 != (A & 1) << 24 >> 24) {
                                break
                            }
                            l[f] = 4;
                            break a
                        }
                        l[f] = 3;
                        break a
                    }
                } while (0);
                1 == (f | 0) && (l[h + 8] = 1)
            } else {
                if (g = l[j + 3], n = (g << 3) + b + 16 | 0, p = l[j + 5], u = p >> 8, r = l[j + 4], K[l[l[r >> 2] + 16 >> 2]](r, d, e + (0 == (p & 1 | 0) ? u : l[l[e >> 2] + u >> 2]) | 0, 0 != (p & 2 | 0) ? f : 2), p = b + 24 | 0, 1 < (g | 0)) {
                    u = o[j + 2];
                    r = 0 == (u & 2 | 0);
                    do {
                        if (r && (g = (d + 36 | 0) >> 2, 1 != (l[g] | 0))) {
                            if (0 == (u & 1 | 0)) {
                                w = d + 54 | 0;
                                x = e;
                                for (A = p; ;) {
                                    if (0 != (c[w] & 1) << 24 >> 24) {
                                        break a
                                    }
                                    if (1 == (l[g] | 0)) {
                                        break a
                                    }
                                    var y = o[A + 4 >> 2], C = y >> 8, z = l[A >> 2];
                                    K[l[l[z >> 2] + 16 >> 2]](z, d, e + (0 == (y & 1 | 0) ? C : l[l[x >> 2] + C >> 2]) | 0, 0 != (y & 2 | 0) ? f : 2);
                                    A = A + 8 | 0;
                                    if (A >>> 0 >= n >>> 0) {
                                        break a
                                    }
                                }
                            } else {
                                w = d + 24 | 0;
                                x = d + 54 | 0;
                                A = e;
                                for (y = p; ;) {
                                    if (0 != (c[x] & 1) << 24 >> 24) {
                                        break a
                                    }
                                    if (1 == (l[g] | 0) && 1 == (l[w >> 2] | 0)) {
                                        break a
                                    }
                                    var C = l[y + 4 >> 2], z = C >> 8, D = l[y >> 2];
                                    K[l[l[D >> 2] + 16 >> 2]](D, d, e + (0 == (C & 1 | 0) ? z : l[l[A >> 2] + z >> 2]) | 0, 0 != (C & 2 | 0) ? f : 2);
                                    y = y + 8 | 0;
                                    if (y >>> 0 >= n >>> 0) {
                                        break a
                                    }
                                }
                            }
                        }
                    } while (0);
                    g = d + 54 | 0;
                    for (u = e; ;) {
                        if (0 != (c[g] & 1) << 24 >> 24) {
                            break a
                        }
                        r = l[p + 4 >> 2];
                        w = r >> 8;
                        x = l[p >> 2];
                        K[l[l[x >> 2] + 16 >> 2]](x, d, e + (0 == (r & 1 | 0) ? w : l[l[u >> 2] + w >> 2]) | 0, 0 != (r & 2 | 0) ? f : 2);
                        p = p + 8 | 0;
                        if (p >>> 0 >= n >>> 0) {
                            break a
                        }
                    }
                }
            }
        }
    } while (0)
}), 0, (function (b, d, e, f) {
    var g = (b | 0) == (l[d + 8 >> 2] | 0);
    a:do {
        if (g) {
            var h = d + 16 | 0, j = l[h >> 2];
            0 == (j | 0) ? (l[h >> 2] = e, l[d + 24 >> 2] = f, l[d + 36 >> 2] = 1) : (j | 0) == (e | 0) ? (h = d + 24 | 0, 2 == (l[h >> 2] | 0) && (l[h >> 2] = f)) : (h = d + 36 | 0, l[h >> 2] = l[h >> 2] + 1 | 0, l[d + 24 >> 2] = 2, c[d + 54 | 0] = 1)
        } else {
            var j = l[b + 12 >> 2], h = (j << 3) + b + 16 | 0, k = l[b + 20 >> 2], m = k >> 8, n = l[b + 16 >> 2];
            K[l[l[n >> 2] + 20 >> 2]](n, d, e + (0 == (k & 1 | 0) ? m : l[l[e >> 2] + m >> 2]) | 0, 0 != (k & 2 | 0) ? f : 2);
            if (1 < (j | 0)) {
                j = d + 54 | 0;
                k = e;
                for (m = b + 24 | 0; ;) {
                    var n = l[m + 4 >> 2], p = n >> 8, u = l[m >> 2];
                    K[l[l[u >> 2] + 20 >> 2]](u, d, e + (0 == (n & 1 | 0) ? p : l[l[k >> 2] + p >> 2]) | 0, 0 != (n & 2 | 0) ? f : 2);
                    if (0 != (c[j] & 1) << 24 >> 24) {
                        break a
                    }
                    m = m + 8 | 0;
                    if (m >>> 0 >= h >>> 0) {
                        break a
                    }
                }
            }
        }
    } while (0)
}), 0, (function (b) {
    Ha(b | 0);
    Ls(b)
}), 0, (function (b, d, e) {
    var f, g, h, j, k = a;
    a += 224;
    j = k >> 2;
    var m = k + 56;
    h = m >> 2;
    var n = k + 112;
    g = n >> 2;
    var p = k + 168;
    f = p >> 2;
    l[e >> 2] = l[l[e >> 2] >> 2];
    var u = (b | 0) == (d | 0) | (d | 0) == (mN | 0);
    do {
        if (u) {
            var r = 1
        } else {
            if (0 == (d | 0)) {
                r = 0
            } else {
                var r = d, w = l[d >> 2], x = r + l[w - 8 >> 2] | 0, y = l[w - 4 >> 2];
                l[g] = oN;
                l[g + 1] = r;
                l[g + 2] = kN;
                l[g + 3] = -1;
                for (var A = n + 16 | 0, C = n + 20 | 0, z = n + 24 | 0, D = n + 28 | 0, E = n + 32 | 0, G = n + 40 | 0, H = (y | 0) == (oN | 0), F = A, r = F >> 2, w = r + 9; r < w; r++) {
                    l[r] = 0
                }
                i[F + 36 >> 1] = 0;
                c[F + 38] = 0;
                if (H) {
                    l[g + 12] = 1, K[l[l[oN >> 2] + 12 >> 2]](oN, n, x, x, 1), r = 1 == (l[z >> 2] | 0) ? x : 0
                } else {
                    if (r = n + 36 | 0, K[l[l[y >> 2] + 16 >> 2]](y, n, x, 1), r = l[r >> 2], 0 == (r | 0)) {
                        if (1 != (l[G >> 2] | 0)) {
                            r = 0;
                            break
                        }
                        if (1 != (l[D >> 2] | 0)) {
                            r = 0;
                            break
                        }
                        r = 1 == (l[E >> 2] | 0) ? l[C >> 2] : 0
                    } else {
                        if (1 == (r | 0)) {
                            if (1 != (l[z >> 2] | 0)) {
                                if (0 != (l[G >> 2] | 0)) {
                                    r = 0;
                                    break
                                }
                                if (1 != (l[D >> 2] | 0)) {
                                    r = 0;
                                    break
                                }
                                if (1 != (l[E >> 2] | 0)) {
                                    r = 0;
                                    break
                                }
                            }
                            r = l[A >> 2]
                        } else {
                            r = 0;
                            break
                        }
                    }
                }
                if (0 == (r | 0)) {
                    r = 0
                } else {
                    if (0 != (l[r + 8 >> 2] & (l[b + 8 >> 2] ^ -1) | 0)) {
                        r = 0
                    } else {
                        if (w = l[b + 12 >> 2], y = r + 12 | 0, (w | 0) == (l[y >> 2] | 0) | (w | 0) == (tN | 0)) {
                            r = 1
                        } else {
                            if (0 == (w | 0)) {
                                r = 0
                            } else {
                                r = w;
                                w = l[w >> 2];
                                x = r + l[w - 8 >> 2] | 0;
                                A = l[w - 4 >> 2];
                                l[h] = lN;
                                l[h + 1] = r;
                                l[h + 2] = kN;
                                l[h + 3] = -1;
                                for (var C = m + 16 | 0, z = m + 20 | 0, D = m + 24 | 0, E = m + 28 | 0, G = m + 32 | 0, H = m + 40 | 0, F = (A | 0) == (lN | 0), I = C, r = I >> 2, w = r + 9; r < w; r++) {
                                    l[r] = 0
                                }
                                i[I + 36 >> 1] = 0;
                                c[I + 38] = 0;
                                if (F) {
                                    l[h + 12] = 1, K[l[l[lN >> 2] + 12 >> 2]](lN, m, x, x, 1), r = 1 == (l[D >> 2] | 0) ? x : 0
                                } else {
                                    if (r = m + 36 | 0, K[l[l[A >> 2] + 16 >> 2]](A, m, x, 1), r = l[r >> 2], 0 == (r | 0)) {
                                        if (1 != (l[H >> 2] | 0)) {
                                            r = 0;
                                            break
                                        }
                                        if (1 != (l[E >> 2] | 0)) {
                                            r = 0;
                                            break
                                        }
                                        r = 1 == (l[G >> 2] | 0) ? l[z >> 2] : 0
                                    } else {
                                        if (1 == (r | 0)) {
                                            if (1 != (l[D >> 2] | 0)) {
                                                if (0 != (l[H >> 2] | 0)) {
                                                    r = 0;
                                                    break
                                                }
                                                if (1 != (l[E >> 2] | 0)) {
                                                    r = 0;
                                                    break
                                                }
                                                if (1 != (l[G >> 2] | 0)) {
                                                    r = 0;
                                                    break
                                                }
                                            }
                                            r = l[C >> 2]
                                        } else {
                                            r = 0;
                                            break
                                        }
                                    }
                                }
                                x = r;
                                if (0 == (r | 0)) {
                                    r = 0
                                } else {
                                    if (w = l[y >> 2], 0 == (w | 0)) {
                                        r = 0
                                    } else {
                                        r = w;
                                        w = l[w >> 2];
                                        y = r + l[w - 8 >> 2] | 0;
                                        A = l[w - 4 >> 2];
                                        l[j] = lN;
                                        l[j + 1] = r;
                                        l[j + 2] = kN;
                                        l[j + 3] = -1;
                                        C = k + 16 | 0;
                                        z = k + 20 | 0;
                                        D = k + 24 | 0;
                                        E = k + 28 | 0;
                                        G = k + 32 | 0;
                                        H = k + 40 | 0;
                                        F = (A | 0) == (lN | 0);
                                        I = C;
                                        r = I >> 2;
                                        for (w = r + 9; r < w; r++) {
                                            l[r] = 0
                                        }
                                        i[I + 36 >> 1] = 0;
                                        c[I + 38] = 0;
                                        if (F) {
                                            l[j + 12] = 1, K[l[l[lN >> 2] + 12 >> 2]](lN, k, y, y, 1), y = 1 == (l[D >> 2] | 0) ? y : 0
                                        } else {
                                            if (r = k + 36 | 0, K[l[l[A >> 2] + 16 >> 2]](A, k, y, 1), r = l[r >> 2], 0 == (r | 0)) {
                                                if (1 != (l[H >> 2] | 0)) {
                                                    r = 0;
                                                    break
                                                }
                                                if (1 != (l[E >> 2] | 0)) {
                                                    r = 0;
                                                    break
                                                }
                                                y = 1 == (l[G >> 2] | 0) ? l[z >> 2] : 0
                                            } else {
                                                if (1 == (r | 0)) {
                                                    if (1 != (l[D >> 2] | 0)) {
                                                        if (0 != (l[H >> 2] | 0)) {
                                                            r = 0;
                                                            break
                                                        }
                                                        if (1 != (l[E >> 2] | 0)) {
                                                            r = 0;
                                                            break
                                                        }
                                                        if (1 != (l[G >> 2] | 0)) {
                                                            r = 0;
                                                            break
                                                        }
                                                    }
                                                    y = l[C >> 2]
                                                } else {
                                                    r = 0;
                                                    break
                                                }
                                            }
                                        }
                                        A = y;
                                        if (0 == (y | 0)) {
                                            r = 0
                                        } else {
                                            r = p >> 2;
                                            for (w = r + 14; r < w; r++) {
                                                l[r] = 0
                                            }
                                            l[f] = A;
                                            l[f + 2] = x;
                                            l[f + 3] = -1;
                                            l[f + 12] = 1;
                                            K[l[l[y >> 2] + 20 >> 2]](A, p, l[e >> 2], 1);
                                            1 != (l[f + 6] | 0) ? r = 0 : (l[e >> 2] = l[f + 4], r = 1)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } while (0);
    a = k;
    return r
}), 0, (function (b) {
    Ha(b | 0);
    Ls(b)
}), 0, (function (b) {
    Ha(b | 0);
    Ls(b)
}), 0, (function () {
    return N.Qg | 0
}), 0, (function (b) {
    Ha(b | 0);
    Ls(b)
}), 0, (function () {
    return N.uf | 0
}), 0, fh, 0, (function (b) {
    Dh(l[b + 32 >> 2]);
    Dh(l[b + 44 >> 2]);
    Dh(l[b + 4 >> 2])
}), 0, (function (b) {
    var d, e = b >> 2;
    l[e] = -1;
    d = (b + 12 | 0) >> 2;
    l[d] = 16;
    l[e + 2] = 0;
    var f = Ne(576), b = (b + 4 | 0) >> 2;
    l[b] = f;
    Oe(f, 36 * l[d] | 0);
    var f = l[d] - 1 | 0, g = 0 < (f | 0);
    a:do {
        if (g) {
            for (var h = 0; ;) {
                var j = h + 1 | 0;
                l[(l[b] + 36 * h + 20 | 0) >> 2] = j;
                l[(l[b] + 36 * h + 32 | 0) >> 2] = -1;
                h = l[d] - 1 | 0;
                if ((j | 0) >= (h | 0)) {
                    var k = h;
                    break a
                }
                h = j
            }
        } else {
            k = f
        }
    } while (0);
    l[(l[b] + 36 * k + 20 | 0) >> 2] = -1;
    l[(l[b] + 36 * (l[d] - 1) + 32 | 0) >> 2] = -1;
    l[e + 4] = 0;
    l[e + 5] = 0;
    l[e + 6] = 0
}), 0, (function (b) {
    Dh(l[b + 4 >> 2])
}), 0, (function (b) {
    var d = b + 8 | 0;
    l[d >> 2] = 128;
    l[b + 4 >> 2] = 0;
    var e = Ne(1024);
    l[b >> 2] = e;
    Oe(e, l[d >> 2] << 3);
    b = (b + 12 | 0) >> 2;
    for (d = b + 14; b < d; b++) {
        l[b] = 0
    }
    if (0 == (c[xp] & 1) << 24 >> 24) {
        d = 0;
        for (b = 1; !(14 > (d | 0) || P(N.e | 0, 73, N.Ha | 0, N.Ua | 0), (b | 0) > (l[sn + (d << 2) >> 2] | 0) && (d = d + 1 | 0), c[rn + b | 0] = d & 255, b = b + 1 | 0, 641 == (b | 0));) {
        }
        c[xp] = 1
    }
}), 0, (function (b) {
    var d = b + 4 | 0, e = 0 < (l[d >> 2] | 0), b = b | 0, f = l[b >> 2];
    a:do {
        if (e) {
            for (var g = 0, h = f; ;) {
                if (Dh(l[h + (g << 3) + 4 >> 2]), g = g + 1 | 0, h = l[b >> 2], (g | 0) >= (l[d >> 2] | 0)) {
                    var j = h;
                    break a
                }
            }
        } else {
            j = f
        }
    } while (0);
    Dh(j)
}), 0, (function (b) {
    l[b + 102400 >> 2] = 0;
    l[b + 102404 >> 2] = 0;
    l[b + 102408 >> 2] = 0;
    l[b + 102796 >> 2] = 0
}), 0, (function (b) {
    0 != (l[b + 102400 >> 2] | 0) && P(N.n | 0, 32, N.R | 0, N.Va | 0);
    0 != (l[b + 102796 >> 2] | 0) && P(N.n | 0, 33, N.R | 0, N.Ya | 0)
}), 0, Hb(), 0, yn, 0, Hb(), 0, (function (b) {
    var d = b >> 2;
    fh(b | 0);
    l[d + 15] = 0;
    l[d + 16] = 0;
    l[d + 17] = yp;
    l[d + 18] = zp;
    l[d + 19] = 0
}), 0, (function (b) {
    i[b + 32 >> 1] = 1;
    i[b + 34 >> 1] = -1;
    i[b + 36 >> 1] = 0;
    l[b + 40 >> 2] = 0;
    l[b + 24 >> 2] = 0;
    l[b + 28 >> 2] = 0;
    b >>= 2;
    l[b] = 0;
    l[b + 1] = 0;
    l[b + 2] = 0;
    l[b + 3] = 0
}), 0, vp, 0, (function (b) {
    var d = b >> 2, b = (b | 0) >> 2;
    xn(l[b], l[d + 5]);
    xn(l[b], l[d + 6]);
    xn(l[b], l[d + 4]);
    xn(l[b], l[d + 3]);
    xn(l[b], l[d + 2])
}), 0, wp, 0, Ap, 0, (function (b, d, e, f, g) {
    var h = b >> 2, j = b | 0;
    l[j >> 2] = RM + 8 | 0;
    l[h + 1] = 4;
    l[h + 12] = d;
    var k = b + 52 | 0;
    l[k >> 2] = f;
    l[h + 14] = e;
    l[h + 15] = g;
    l[h + 31] = 0;
    l[h + 32] = 0;
    b = (b + 8 | 0) >> 2;
    for (e = b + 10; b < e; b++) {
        l[b] = 0
    }
    b = Fh(q[(d + 16 | 0) >> 2] * q[f + 16 >> 2]);
    q[h + 34] = b;
    b = q[d + 20 >> 2];
    e = q[f + 20 >> 2];
    q[h + 35] = b > e ? b : e;
    l[j >> 2] = KM + 8 | 0;
    3 == (l[l[d + 12 >> 2] + 4 >> 2] | 0) ? d = f : (P(N.ua | 0, 43, N.ja | 0, N.ra | 0), d = l[k >> 2]);
    0 != (l[l[d + 12 >> 2] + 4 >> 2] | 0) && P(N.ua | 0, 44, N.ja | 0, N.I | 0)
}), 0, (function (b, d, e, f, g) {
    var h = b >> 2, j = b | 0;
    l[j >> 2] = RM + 8 | 0;
    l[h + 1] = 4;
    l[h + 12] = d;
    var k = b + 52 | 0;
    l[k >> 2] = f;
    l[h + 14] = e;
    l[h + 15] = g;
    l[h + 31] = 0;
    l[h + 32] = 0;
    b = (b + 8 | 0) >> 2;
    for (e = b + 10; b < e; b++) {
        l[b] = 0
    }
    b = Fh(q[(d + 16 | 0) >> 2] * q[f + 16 >> 2]);
    q[h + 34] = b;
    b = q[d + 20 >> 2];
    e = q[f + 20 >> 2];
    q[h + 35] = b > e ? b : e;
    l[j >> 2] = NM + 8 | 0;
    3 == (l[l[d + 12 >> 2] + 4 >> 2] | 0) ? d = f : (P(N.va | 0, 43, N.la | 0, N.ra | 0), d = l[k >> 2]);
    2 != (l[l[d + 12 >> 2] + 4 >> 2] | 0) && P(N.va | 0, 44, N.la | 0, N.U | 0)
}), 0, (function (b, d, e) {
    var f = b >> 2, g = b | 0;
    l[g >> 2] = RM + 8 | 0;
    l[f + 1] = 4;
    l[f + 12] = d;
    var h = b + 52 | 0;
    l[h >> 2] = e;
    l[f + 14] = 0;
    l[f + 15] = 0;
    l[f + 31] = 0;
    l[f + 32] = 0;
    for (var b = (b + 8 | 0) >> 2, j = b + 10; b < j; b++) {
        l[b] = 0
    }
    b = Fh(q[(d + 16 | 0) >> 2] * q[e + 16 >> 2]);
    q[f + 34] = b;
    b = q[d + 20 >> 2];
    j = q[e + 20 >> 2];
    q[f + 35] = b > j ? b : j;
    l[g >> 2] = PM + 8 | 0;
    0 == (l[l[d + 12 >> 2] + 4 >> 2] | 0) ? d = e : (P(N.wa | 0, 44, N.ga | 0, N.Db | 0), d = l[h >> 2]);
    0 != (l[l[d + 12 >> 2] + 4 >> 2] | 0) && P(N.wa | 0, 45, N.ga | 0, N.I | 0)
}), 0, Qp, 0, (function (b) {
    var d = b + 32 | 0;
    xn(l[d >> 2], l[b + 40 >> 2]);
    xn(l[d >> 2], l[b + 36 >> 2])
}), 0, (function (b, d, e) {
    var f = b >> 2, g = b | 0;
    l[g >> 2] = RM + 8 | 0;
    l[f + 1] = 4;
    l[f + 12] = d;
    var h = b + 52 | 0;
    l[h >> 2] = e;
    l[f + 14] = 0;
    l[f + 15] = 0;
    l[f + 31] = 0;
    l[f + 32] = 0;
    for (var b = (b + 8 | 0) >> 2, j = b + 10; b < j; b++) {
        l[b] = 0
    }
    b = Fh(q[(d + 16 | 0) >> 2] * q[e + 16 >> 2]);
    q[f + 34] = b;
    b = q[d + 20 >> 2];
    j = q[e + 20 >> 2];
    q[f + 35] = b > j ? b : j;
    l[g >> 2] = SM + 8 | 0;
    1 == (l[l[d + 12 >> 2] + 4 >> 2] | 0) ? d = e : (P(N.xa | 0, 41, N.ia | 0, N.sa | 0), d = l[h >> 2]);
    0 != (l[l[d + 12 >> 2] + 4 >> 2] | 0) && P(N.xa | 0, 42, N.ia | 0, N.I | 0)
}), 0, (function (b, d, e) {
    var f = b >> 2, g = b | 0;
    l[g >> 2] = RM + 8 | 0;
    l[f + 1] = 4;
    l[f + 12] = d;
    var h = b + 52 | 0;
    l[h >> 2] = e;
    l[f + 14] = 0;
    l[f + 15] = 0;
    l[f + 31] = 0;
    l[f + 32] = 0;
    for (var b = (b + 8 | 0) >> 2, j = b + 10; b < j; b++) {
        l[b] = 0
    }
    b = Fh(q[(d + 16 | 0) >> 2] * q[e + 16 >> 2]);
    q[f + 34] = b;
    b = q[d + 20 >> 2];
    j = q[e + 20 >> 2];
    q[f + 35] = b > j ? b : j;
    l[g >> 2] = UM + 8 | 0;
    1 == (l[l[d + 12 >> 2] + 4 >> 2] | 0) ? d = e : (P(N.ya | 0, 41, N.ka | 0, N.sa | 0), d = l[h >> 2]);
    2 != (l[l[d + 12 >> 2] + 4 >> 2] | 0) && P(N.ya | 0, 42, N.ka | 0, N.U | 0)
}), 0, (function (b, d, e) {
    var f = b >> 2, g = b | 0;
    l[g >> 2] = RM + 8 | 0;
    l[f + 1] = 4;
    l[f + 12] = d;
    var h = b + 52 | 0;
    l[h >> 2] = e;
    l[f + 14] = 0;
    l[f + 15] = 0;
    l[f + 31] = 0;
    l[f + 32] = 0;
    for (var b = (b + 8 | 0) >> 2, j = b + 10; b < j; b++) {
        l[b] = 0
    }
    b = Fh(q[(d + 16 | 0) >> 2] * q[e + 16 >> 2]);
    q[f + 34] = b;
    b = q[d + 20 >> 2];
    j = q[e + 20 >> 2];
    q[f + 35] = b > j ? b : j;
    l[g >> 2] = WM + 8 | 0;
    2 == (l[l[d + 12 >> 2] + 4 >> 2] | 0) ? d = e : (P(N.za | 0, 41, N.ma | 0, N.ta | 0), d = l[h >> 2]);
    0 != (l[l[d + 12 >> 2] + 4 >> 2] | 0) && P(N.za | 0, 42, N.ma | 0, N.I | 0)
}), 0, (function (b, d, e) {
    var f = b >> 2, g = b | 0;
    l[g >> 2] = RM + 8 | 0;
    l[f + 1] = 4;
    l[f + 12] = d;
    var h = b + 52 | 0;
    l[h >> 2] = e;
    l[f + 14] = 0;
    l[f + 15] = 0;
    l[f + 31] = 0;
    l[f + 32] = 0;
    for (var b = (b + 8 | 0) >> 2, j = b + 10; b < j; b++) {
        l[b] = 0
    }
    b = Fh(q[(d + 16 | 0) >> 2] * q[e + 16 >> 2]);
    q[f + 34] = b;
    b = q[d + 20 >> 2];
    j = q[e + 20 >> 2];
    q[f + 35] = b > j ? b : j;
    l[g >> 2] = YM + 8 | 0;
    2 == (l[l[d + 12 >> 2] + 4 >> 2] | 0) ? d = e : (P(N.Aa | 0, 44, N.ha | 0, N.ta | 0), d = l[h >> 2]);
    2 != (l[l[d + 12 >> 2] + 4 >> 2] | 0) && P(N.Aa | 0, 45, N.ha | 0, N.U | 0)
}), 0, (function (b, d) {
    var e, f = d >> 2, g = b >> 2, h = b | 0;
    l[h >> 2] = Ep + 8 | 0;
    e = d + 8 | 0;
    var j = d + 12 | 0;
    (l[e >> 2] | 0) == (l[j >> 2] | 0) && P(N.m | 0, 173, N.p | 0, N.r | 0);
    l[g + 1] = l[f];
    l[g + 2] = 0;
    l[g + 3] = 0;
    l[g + 12] = l[e >> 2];
    l[g + 13] = l[j >> 2];
    l[g + 14] = 0;
    c[b + 61 | 0] = c[d + 16 | 0] & 1;
    c[b + 60 | 0] = 0;
    l[g + 16] = l[f + 1];
    e = (b + 16 | 0) >> 2;
    l[e] = 0;
    l[e + 1] = 0;
    l[e + 2] = 0;
    l[e + 3] = 0;
    l[e + 4] = 0;
    l[e + 5] = 0;
    l[e + 6] = 0;
    l[e + 7] = 0;
    l[h >> 2] = Fp + 8 | 0;
    h = b + 88 | 0;
    e = d + 20 | 0;
    var j = b + 80 | 0, k = l[e + 4 >> 2];
    l[j >> 2] = l[e >> 2];
    l[j + 4 >> 2] = k;
    e = d + 28 | 0;
    j = l[e + 4 >> 2];
    l[h >> 2] = l[e >> 2];
    l[h + 4 >> 2] = j;
    q[g + 26] = q[f + 9];
    q[g + 17] = q[f + 10];
    q[g + 18] = q[f + 11];
    q[g + 25] = 0;
    q[g + 24] = 0;
    q[g + 19] = 0
}), 0, (function (b, d) {
    var e, f = b >> 2, g = b | 0;
    l[g >> 2] = Ep + 8 | 0;
    e = d + 8 | 0;
    var h = d + 12 | 0;
    (l[e >> 2] | 0) == (l[h >> 2] | 0) && P(N.m | 0, 173, N.p | 0, N.r | 0);
    l[f + 1] = l[d >> 2];
    l[f + 2] = 0;
    l[f + 3] = 0;
    l[f + 12] = l[e >> 2];
    l[f + 13] = l[h >> 2];
    l[f + 14] = 0;
    c[b + 61 | 0] = c[d + 16 | 0] & 1;
    c[b + 60 | 0] = 0;
    l[f + 16] = l[d + 4 >> 2];
    e = (b + 16 | 0) >> 2;
    l[e] = 0;
    l[e + 1] = 0;
    l[e + 2] = 0;
    l[e + 3] = 0;
    l[e + 4] = 0;
    l[e + 5] = 0;
    l[e + 6] = 0;
    l[e + 7] = 0;
    l[g >> 2] = Np + 8 | 0;
    g = b + 76 | 0;
    e = d + 20 | 0;
    var h = b + 68 | 0, j = l[e + 4 >> 2];
    l[h >> 2] = l[e >> 2];
    l[h + 4 >> 2] = j;
    e = d + 28 | 0;
    h = l[e + 4 >> 2];
    l[g >> 2] = l[e >> 2];
    l[g + 4 >> 2] = h;
    q[f + 21] = 0;
    q[f + 22] = 0;
    q[f + 23] = 0;
    q[f + 24] = q[d + 36 >> 2];
    q[f + 25] = q[d + 40 >> 2]
}), 0, Kp, 0, Gp, 0, Hp, 0, Jp, 0, (function (b, d) {
    var e, f, g = d >> 2, h = b >> 2;
    e = b | 0;
    l[e >> 2] = Ep + 8 | 0;
    f = d + 8 | 0;
    var j = d + 12 | 0;
    (l[f >> 2] | 0) == (l[j >> 2] | 0) && P(N.m | 0, 173, N.p | 0, N.r | 0);
    l[h + 1] = l[g];
    l[h + 2] = 0;
    l[h + 3] = 0;
    l[h + 12] = l[f >> 2];
    l[h + 13] = l[j >> 2];
    l[h + 14] = 0;
    c[b + 61 | 0] = c[d + 16 | 0] & 1;
    c[b + 60 | 0] = 0;
    l[h + 16] = l[g + 1];
    f = (b + 16 | 0) >> 2;
    l[f] = 0;
    l[f + 1] = 0;
    l[f + 2] = 0;
    l[f + 3] = 0;
    l[f + 4] = 0;
    l[f + 5] = 0;
    l[f + 6] = 0;
    l[f + 7] = 0;
    l[e >> 2] = Ip + 8 | 0;
    e = b + 76 | 0;
    f = d + 20 | 0;
    var j = b + 68 | 0, k = l[f + 4 >> 2];
    l[j >> 2] = l[f >> 2];
    l[j + 4 >> 2] = k;
    f = d + 28 | 0;
    j = l[f + 4 >> 2];
    l[e >> 2] = l[f >> 2];
    l[e + 4 >> 2] = j;
    q[h + 29] = q[g + 9];
    e = (b + 84 | 0) >> 2;
    l[e] = 0;
    l[e + 1] = 0;
    l[e + 2] = 0;
    l[e + 3] = 0;
    q[h + 30] = q[(d + 44 | 0) >> 2];
    q[h + 31] = q[g + 12];
    q[h + 26] = q[g + 15];
    q[h + 27] = q[g + 14];
    c[b + 112 | 0] = c[d + 40 | 0] & 1;
    c[b + 100 | 0] = c[d + 52 | 0] & 1;
    l[h + 56] = 0
}), 0, (function (b, d) {
    var e, f = b >> 2, g = b | 0;
    l[g >> 2] = Ep + 8 | 0;
    e = d + 8 | 0;
    var h = d + 12 | 0;
    (l[e >> 2] | 0) == (l[h >> 2] | 0) && P(N.m | 0, 173, N.p | 0, N.r | 0);
    l[f + 1] = l[d >> 2];
    l[f + 2] = 0;
    l[f + 3] = 0;
    l[f + 12] = l[e >> 2];
    l[f + 13] = l[h >> 2];
    l[f + 14] = 0;
    c[b + 61 | 0] = c[d + 16 | 0] & 1;
    c[b + 60 | 0] = 0;
    l[f + 16] = l[d + 4 >> 2];
    e = (b + 16 | 0) >> 2;
    l[e] = 0;
    l[e + 1] = 0;
    l[e + 2] = 0;
    l[e + 3] = 0;
    l[e + 4] = 0;
    l[e + 5] = 0;
    l[e + 6] = 0;
    l[e + 7] = 0;
    l[g >> 2] = Op + 8 | 0;
    g = b + 76 | 0;
    e = d + 20 | 0;
    var h = b + 68 | 0, j = l[e + 4 >> 2];
    l[h >> 2] = l[e >> 2];
    l[h + 4 >> 2] = j;
    e = d + 28 | 0;
    h = l[e + 4 >> 2];
    l[g >> 2] = l[e >> 2];
    l[g + 4 >> 2] = h;
    q[f + 21] = q[d + 36 >> 2];
    q[f + 40] = 0;
    q[f + 23] = 0;
    l[f + 41] = 0;
    q[f + 22] = 0
}), 0, (function (b, d) {
    var e, f = d >> 2, g = b >> 2, h = b | 0;
    l[h >> 2] = Ep + 8 | 0;
    e = d + 8 | 0;
    var j = d + 12 | 0;
    (l[e >> 2] | 0) == (l[j >> 2] | 0) && P(N.m | 0, 173, N.p | 0, N.r | 0);
    l[g + 1] = l[f];
    l[g + 2] = 0;
    l[g + 3] = 0;
    l[g + 12] = l[e >> 2];
    l[g + 13] = l[j >> 2];
    l[g + 14] = 0;
    c[b + 61 | 0] = c[d + 16 | 0] & 1;
    c[b + 60 | 0] = 0;
    l[g + 16] = l[f + 1];
    e = (b + 16 | 0) >> 2;
    l[e] = 0;
    l[e + 1] = 0;
    l[e + 2] = 0;
    l[e + 3] = 0;
    l[e + 4] = 0;
    l[e + 5] = 0;
    l[e + 6] = 0;
    l[e + 7] = 0;
    l[h >> 2] = Mp + 8 | 0;
    h = b + 88 | 0;
    e = d + 20 | 0;
    var j = b + 80 | 0, k = l[e + 4 >> 2];
    l[j >> 2] = l[e >> 2];
    l[j + 4 >> 2] = k;
    e = d + 28 | 0;
    j = l[e + 4 >> 2];
    l[h >> 2] = l[e >> 2];
    l[h + 4 >> 2] = j;
    q[g + 24] = q[f + 9];
    q[g + 17] = q[f + 10];
    q[g + 18] = q[f + 11];
    q[g + 26] = 0;
    q[g + 27] = 0;
    q[g + 28] = 0
}), 0, Lp, 0, (function (b) {
    for (var d = b >> 2, e = d + 9; d < e; d++) {
        l[d] = 0
    }
    q[(b + 40 | 0) >> 2] = 1;
    q[b + 44 >> 2] = .10000000149011612
}), 0, (function (b) {
    b >>= 2;
    Dh(l[b + 1]);
    Dh(l[b + 2]);
    Dh(l[b + 3]);
    Dh(l[b + 4]);
    Dh(l[b + 5]);
    Dh(l[b + 6])
}), 0, (function (b) {
    l[b >> 2] = QL + 8 | 0
}), 0, (function (b) {
    l[b >> 2] = LO + 8 | 0
}), 0];
Module.FUNCTION_TABLE = K;
function Eg(b) {
    function d() {
        var d = 0;
        kg = Na;
        Module._main && (tf(vf), d = Module.Kh(b), Module.noExitRuntime || tf(wf));
        if (Module.postRun) {
            for ("function" == typeof Module.postRun && (Module.postRun = [Module.postRun]); 0 < Module.postRun.length;) {
                Module.postRun.pop()()
            }
        }
        return d
    }

    b = b || Module.arguments;
    if (0 < Pf) {
        return Module.M("run() called, but dependencies remain, so not running"), 0
    }
    if (Module.preRun) {
        "function" == typeof Module.preRun && (Module.preRun = [Module.preRun]);
        var e = Module.preRun;
        Module.preRun = [];
        for (var f = e.length - 1; 0 <= f; f--) {
            e[f]()
        }
        if (0 < Pf) {
            return 0
        }
    }
    return Module.setStatus ? (Module.setStatus("Running..."), setTimeout((function () {
        setTimeout((function () {
            Module.setStatus("")
        }), 1);
        d()
    }), 1), 0) : d()
}
Module.run = Eg;
if (Module.preInit) {
    for ("function" == typeof Module.preInit && (Module.preInit = [Module.preInit]); 0 < Module.preInit.length;) {
        Module.preInit.pop()()
    }
}
tf(uf);
var NO = Na;
Module.noInitialRun && (NO = Gb);
NO && Eg();
var OO = {};
function PO(b, d) {
    var e = d ? d.prototype.b : OO, f = e[b];
    if (f) {
        return f
    }
    d = d || Object;
    f = Object.create(d.prototype);
    f.a = b;
    f.d = d;
    return e[b] = f
}
Module.wrapPointer = PO;
Module.castObject = (function (b, d) {
    return PO(b.a, d)
});
Module.NULL = PO(0);
Module.destroy = (function (b) {
    b.__destroy__ || ja("Error: Cannot destroy object. (Did you create it yourself?)");
    b.__destroy__();
    b.d !== Object ? delete b.d.prototype.b[b.a] : delete OO[b.a]
});
Module.compare = (function (b, d) {
    return b.a === d.a
});
Module.getPointer = (function (b) {
    return b.a
});
Module.getClass = (function (b) {
    return b.d
});
Module.customizeVTable = (function (b, d) {
    for (var e = Fe(b.a, "void*"), f = 0; Fe(e + nc * f, "void*");) {
        f++
    }
    var g = Ne(f * nc);
    xe(b.a, g, "void*");
    for (var h, j = K.length, k = 0; k < f; k++) {
        var m = K.length;
        ((function (b) {
            K.push((function () {
                h = b
            }))
        }))(k);
        K.push(0);
        xe(g + nc * k, m, "void*")
    }
    var n = [
        {a:0}
    ];
    d.forEach((function (d) {
        for (; ;) {
            try {
                d.original.apply(b, n);
                break
            } catch (f) {
                n.push(n[0])
            }
        }
        d.Nh = Fe(e + h * nc, "void*")
    }));
    K = K.slice(0, j);
    var p = {};
    d.forEach((function (b) {
        var d = K.length;
        K.push(b.replacement);
        K.push(0);
        p[b.Nh] = d
    }));
    for (k = 0; k < f; k++) {
        j = Fe(e + nc * k, "void*"), j in p && (j = p[j]), xe(g + nc * k, j, "void*")
    }
    return b
});
QO.prototype.get_m_contactFilter = (function () {
    return PO(iq(this.a), Module.b2ContactFilter)
});
QO.prototype.get_m_contactCount = (function () {
    return jq(this.a)
});
QO.prototype.set_m_contactFilter = (function (b) {
    kq(this.a, b.a)
});
function QO() {
    this.a = Vq();
    QO.prototype.b[this.a] = this;
    this.d = QO
}
QO.prototype.b = {};
Module.b2ContactManager = QO;
QO.prototype.AddPair = (function (b, d) {
    sp(this.a, b, d)
});
QO.prototype.set_m_allocator = (function (b) {
    lq(this.a, b.a)
});
QO.prototype.set_m_contactCount = (function (b) {
    mq(this.a, b)
});
QO.prototype.Collide = (function () {
    pp(this.a)
});
QO.prototype.set_m_contactList = (function (b) {
    nq(this.a, b.a)
});
QO.prototype.FindNewContacts = (function () {
    Xq(this.a)
});
QO.prototype.get_m_contactListener = (function () {
    return PO(oq(this.a), Module.b2ContactListener)
});
QO.prototype.__destroy__ = (function () {
    Ks(this.a)
});
QO.prototype.set_m_contactListener = (function (b) {
    Yq(this.a, b.a)
});
QO.prototype.get_m_broadPhase = (function () {
    return PO(this.a | 0, Module.b2BroadPhase)
});
QO.prototype.Destroy = (function (b) {
    Ao(this.a, b.a)
});
QO.prototype.set_m_broadPhase = (function (b) {
    Ms(this.a, b.a)
});
QO.prototype.get_m_contactList = (function () {
    return PO(Zq(this.a), Module.b2Contact)
});
QO.prototype.get_m_allocator = (function () {
    return PO($q(this.a), Module.b2BlockAllocator)
});
RO.prototype.GetRestitution = (function () {
    return ar(this.a)
});
RO.prototype.SetFilterData = (function (b) {
    Ns(this.a, b.a)
});
RO.prototype.SetFriction = (function (b) {
    br(this.a, b)
});
function RO() {
    this.a = Os();
    RO.prototype.b[this.a] = this;
    this.d = RO
}
RO.prototype.b = {};
Module.b2Fixture = RO;
RO.prototype.GetShape = (function () {
    return PO(cr(this.a), Module.b2Shape)
});
RO.prototype.SetRestitution = (function (b) {
    dr(this.a, b)
});
RO.prototype.GetBody = (function () {
    return PO(er(this.a), Module.b2Body)
});
RO.prototype.GetNext = (function () {
    return PO(is(this.a), Module.b2Fixture)
});
RO.prototype.GetFriction = (function () {
    return js(this.a)
});
RO.prototype.GetUserData = (function () {
    return ks(this.a)
});
RO.prototype.SetDensity = (function (b) {
    ls(this.a, b)
});
RO.prototype.GetMassData = (function (b) {
    Ps(this.a, b.a)
});
RO.prototype.SetSensor = (function (b) {
    ms(this.a, b)
});
RO.prototype.GetAABB = (function (b) {
    return PO(ns(this.a, b), Module.b2AABB)
});
RO.prototype.TestPoint = (function (b) {
    return Qs(this.a, b.a)
});
RO.prototype.SetUserData = (function (b) {
    os(this.a, b)
});
RO.prototype.__destroy__ = (function () {
    Rs(this.a)
});
RO.prototype.RayCast = (function (b, d, e) {
    return Ss(this.a, b.a, d.a, e)
});
RO.prototype.Refilter = (function () {
    xo(this.a)
});
RO.prototype.Dump = (function (b) {
    mp(this.a, b)
});
RO.prototype.GetFilterData = (function () {
    return PO(this.a + 32 | 0, Module.b2Filter)
});
RO.prototype.IsSensor = (function () {
    return ps(this.a)
});
RO.prototype.GetType = (function () {
    return qs(this.a)
});
RO.prototype.GetDensity = (function () {
    return rs(this.a)
});
SO.prototype.GetTreeQuality = (function () {
    return ss(this.a)
});
SO.prototype.GetFatAABB = (function (b) {
    return PO(Ts(this.a, b), Module.b2AABB)
});
SO.prototype.GetUserData = (function (b) {
    return Us(this.a, b)
});
SO.prototype.__destroy__ = (function () {
    Vs(this.a)
});
SO.prototype.GetTreeHeight = (function () {
    return ts(this.a)
});
function SO() {
    this.a = Ws();
    SO.prototype.b[this.a] = this;
    this.d = SO
}
SO.prototype.b = {};
Module.b2BroadPhase = SO;
SO.prototype.GetProxyCount = (function () {
    return us(this.a)
});
SO.prototype.GetTreeBalance = (function () {
    return Xs(this.a)
});
SO.prototype.TestOverlap = (function (b, d) {
    return Ys(this.a, b, d)
});
SO.prototype.TouchProxy = (function (b) {
    Zs(this.a, b)
});
SO.prototype.CreateProxy = (function (b, d) {
    return gh(this.a, b.a, d)
});
SO.prototype.MoveProxy = (function (b, d, e) {
    $s(this.a, b, d.a, e.a)
});
SO.prototype.DestroyProxy = (function (b) {
    at(this.a, b)
});
TO.prototype.QueryAABB = (function (b, d) {
    bt(this.a, b.a, d.a)
});
TO.prototype.SetSubStepping = (function (b) {
    vs(this.a, b)
});
TO.prototype.GetTreeQuality = (function () {
    return ws(this.a)
});
TO.prototype.GetTreeHeight = (function () {
    return xs(this.a)
});
TO.prototype.GetProfile = (function () {
    return PO(this.a + 102996 | 0, Module.b2Profile)
});
TO.prototype.GetTreeBalance = (function () {
    return ct(this.a)
});
TO.prototype.GetSubStepping = (function () {
    return ys(this.a)
});
TO.prototype.GetContactManager = (function () {
    return PO(this.a + 102872 | 0, Module.b2ContactManager)
});
TO.prototype.SetContactListener = (function (b) {
    zs(this.a, b.a)
});
TO.prototype.DrawDebugData = (function () {
    aq(this.a)
});
TO.prototype.SetContinuousPhysics = (function (b) {
    As(this.a, b)
});
TO.prototype.SetGravity = (function (b) {
    Bs(this.a, b.a)
});
TO.prototype.GetBodyCount = (function () {
    return Cs(this.a)
});
TO.prototype.GetAutoClearForces = (function () {
    return Ds(this.a)
});
TO.prototype.GetContinuousPhysics = (function () {
    return Es(this.a)
});
TO.prototype.GetJointList = (function () {
    return PO(Fs(this.a), Module.b2Joint)
});
TO.prototype.CreateBody = (function (b) {
    return PO(dt(this.a, b.a), Module.b2Body)
});
TO.prototype.GetBodyList = (function () {
    return PO(Gs(this.a), Module.b2Body)
});
TO.prototype.SetDestructionListener = (function (b) {
    Hs(this.a, b.a)
});
TO.prototype.DestroyJoint = (function (b) {
    Cp(this.a, b.a)
});
function TO(b) {
    this.a = et(b.a);
    TO.prototype.b[this.a] = this;
    this.d = TO
}
TO.prototype.b = {};
Module.b2World = TO;
TO.prototype.GetJointCount = (function () {
    return Is(this.a)
});
TO.prototype.Step = (function (b, d, e) {
    Pp(this.a, b, d, e)
});
TO.prototype.ClearForces = (function () {
    Js(this.a)
});
TO.prototype.GetWarmStarting = (function () {
    return ft(this.a)
});
TO.prototype.SetAllowSleeping = (function (b) {
    gt(this.a, b)
});
TO.prototype.DestroyBody = (function (b) {
    Bp(this.a, b.a)
});
TO.prototype.GetAllowSleeping = (function () {
    return ht(this.a)
});
TO.prototype.CreateJoint = (function (b) {
    return PO(Dp(this.a, b.a), Module.b2Joint)
});
TO.prototype.GetProxyCount = (function () {
    return it(this.a)
});
TO.prototype.RayCast = (function (b, d, e) {
    ku(this.a, b.a, d.a, e.a)
});
TO.prototype.IsLocked = (function () {
    return jt(this.a)
});
TO.prototype.GetContactList = (function () {
    return PO(kt(this.a), Module.b2Contact)
});
TO.prototype.SetDebugDraw = (function (b) {
    lt(this.a, b.a)
});
TO.prototype.__destroy__ = (function () {
    lu(this.a)
});
TO.prototype.Dump = (function () {
    bq(this.a)
});
TO.prototype.SetAutoClearForces = (function (b) {
    mt(this.a, b)
});
TO.prototype.GetGravity = (function () {
    return PO(mu(this.a), Module.b2Vec2)
});
TO.prototype.GetContactCount = (function () {
    return nt(this.a)
});
TO.prototype.SetWarmStarting = (function (b) {
    ot(this.a, b)
});
TO.prototype.SetContactFilter = (function (b) {
    pt(this.a, b.a)
});
UO.prototype.__destroy__ = (function () {
    Kw(this.a)
});
UO.prototype.GetType = (function () {
    return qt(this.a)
});
UO.prototype.ComputeMass = (function (b, d) {
    Lw(this.a, b.a, d)
});
UO.prototype.set_m_radius = (function (b) {
    rt(this.a, b)
});
UO.prototype.get_m_radius = (function () {
    return st(this.a)
});
UO.prototype.GetVertex = (function () {
    return PO(this.a + 12 | 0, Module.b2Vec2)
});
UO.prototype.Clone = (function (b) {
    return PO(Mw(this.a, b.a), Module.b2Shape)
});
UO.prototype.GetSupportVertex = (function () {
    return PO(this.a + 12 | 0, Module.b2Vec2)
});
UO.prototype.RayCast = (function (b, d, e, f) {
    return Sw(this.a, b.a, d.a, e.a, f)
});
UO.prototype.ComputeAABB = (function (b, d, e) {
    Tw(this.a, b.a, d.a, e)
});
UO.prototype.GetVertexCount = Kb(1);
UO.prototype.GetChildCount = (function () {
    return Uw(this.a)
});
UO.prototype.TestPoint = (function (b, d) {
    return Vw(this.a, b.a, d.a)
});
function UO() {
    this.a = Ww();
    UO.prototype.b[this.a] = this;
    this.d = UO
}
UO.prototype.b = {};
Module.b2CircleShape = UO;
UO.prototype.GetSupport = Kb(0);
UO.prototype.set_m_p = (function (b) {
    tt(this.a, b.a)
});
UO.prototype.get_m_p = (function () {
    return PO(this.a + 12 | 0, Module.b2Vec2)
});
function VO() {
    ja("b2Draw is abstract!")
}
VO.prototype.b = {};
Module.b2Draw = VO;
VO.prototype.AppendFlags = (function (b) {
    ut(this.a, b)
});
VO.prototype.DrawTransform = (function (b) {
    Yw(this.a, b.a)
});
VO.prototype.ClearFlags = (function (b) {
    vt(this.a, b)
});
VO.prototype.DrawPolygon = (function (b, d, e) {
    Zw(this.a, b.a, d, e.a)
});
VO.prototype.DrawSolidCircle = (function (b, d, e, f) {
    $w(this.a, b.a, d, e.a, f.a)
});
VO.prototype.DrawSolidPolygon = (function (b, d, e) {
    ax(this.a, b.a, d, e.a)
});
VO.prototype.DrawCircle = (function (b, d, e) {
    bx(this.a, b.a, d, e.a)
});
VO.prototype.SetFlags = (function (b) {
    wt(this.a, b)
});
VO.prototype.DrawSegment = (function (b, d, e) {
    cx(this.a, b.a, d.a, e.a)
});
VO.prototype.GetFlags = (function () {
    return xt(this.a)
});
function WO() {
    ja("b2Joint is abstract!")
}
WO.prototype.b = {};
Module.b2Joint = WO;
WO.prototype.GetNext = (function () {
    return PO(yt(this.a), Module.b2Joint)
});
WO.prototype.GetBodyA = (function () {
    return PO(zt(this.a), Module.b2Body)
});
WO.prototype.GetBodyB = (function () {
    return PO(Zt(this.a), Module.b2Body)
});
WO.prototype.GetReactionTorque = (function (b) {
    return dx(this.a, b)
});
WO.prototype.GetAnchorA = (function () {
    return PO(ex(this.a), Module.b2Vec2)
});
WO.prototype.GetUserData = (function () {
    return $t(this.a)
});
WO.prototype.GetType = (function () {
    return au(this.a)
});
WO.prototype.SetUserData = (function (b) {
    bu(this.a, b)
});
WO.prototype.GetCollideConnected = (function () {
    return cu(this.a)
});
WO.prototype.Dump = (function () {
    hx(this.a)
});
WO.prototype.GetAnchorB = (function () {
    return PO(ix(this.a), Module.b2Vec2)
});
WO.prototype.GetReactionForce = (function (b) {
    return PO(lx(this.a, b), Module.b2Vec2)
});
WO.prototype.IsActive = (function () {
    return du(this.a)
});
function XO() {
    ja("b2RayCastCallback is abstract!")
}
XO.prototype.b = {};
Module.b2RayCastCallback = XO;
XO.prototype.ReportFixture = (function (b, d, e, f) {
    return ox(this.a, b.a, d.a, e.a, f)
});
YO.prototype.__destroy__ = (function () {
    px(this.a)
});
function YO() {
    this.a = qx();
    YO.prototype.b[this.a] = this;
    this.d = YO
}
YO.prototype.b = {};
Module.b2DynamicTree = YO;
YO.prototype.GetFatAABB = (function (b) {
    return PO(rx(this.a, b), Module.b2AABB)
});
YO.prototype.GetUserData = (function (b) {
    return sx(this.a, b)
});
YO.prototype.GetMaxBalance = (function () {
    return tx(this.a)
});
YO.prototype.GetHeight = (function () {
    return eu(this.a)
});
YO.prototype.GetAreaRatio = (function () {
    return fu(this.a)
});
YO.prototype.RebuildBottomUp = (function () {
    km(this.a)
});
YO.prototype.CreateProxy = (function (b, d) {
    return ux(this.a, b.a, d)
});
YO.prototype.MoveProxy = (function (b, d, e) {
    return Pk(this.a, b, d.a, e.a)
});
YO.prototype.Validate = (function () {
    jm(this.a)
});
YO.prototype.DestroyProxy = (function (b) {
    Nk(this.a, b)
});
function ZO() {
    this.a = vx();
    ZO.prototype.b[this.a] = this;
    this.d = ZO
}
ZO.prototype.b = {};
Module.b2Timer = ZO;
ZO.prototype.Reset = Hb();
ZO.prototype.__destroy__ = (function () {
    wx(this.a)
});
ZO.prototype.GetMilliseconds = Kb(0);
$O.prototype.__destroy__ = (function () {
    xx(this.a)
});
function $O() {
    this.a = yx();
    $O.prototype.b[this.a] = this;
    this.d = $O
}
$O.prototype.b = {};
Module.b2ContactListener = $O;
$O.prototype.EndContact = (function (b) {
    Ax(this.a, b.a)
});
$O.prototype.BeginContact = (function (b) {
    Bx(this.a, b.a)
});
$O.prototype.PreSolve = (function (b, d) {
    Cx(this.a, b.a, d.a)
});
$O.prototype.PostSolve = (function (b, d) {
    Dx(this.a, b.a, d.a)
});
aP.prototype.__destroy__ = (function () {
    Ex(this.a)
});
aP.prototype.GetType = (function () {
    return gu(this.a)
});
aP.prototype.CreateChain = (function (b, d) {
    Fx(this.a, b.a, d)
});
aP.prototype.set_m_radius = (function (b) {
    hu(this.a, b)
});
aP.prototype.get_m_radius = (function () {
    return iu(this.a)
});
aP.prototype.get_m_vertices = (function () {
    return PO(ju(this.a), Module.b2Vec2)
});
aP.prototype.ComputeMass = (function (b, d) {
    wy(this.a, b.a, d)
});
aP.prototype.Clone = (function (b) {
    return PO(xy(this.a, b.a), Module.b2Shape)
});
aP.prototype.get_m_count = (function () {
    return Gx(this.a)
});
aP.prototype.GetChildEdge = (function (b, d) {
    om(this.a, b.a, d)
});
function aP() {
    this.a = yy();
    aP.prototype.b[this.a] = this;
    this.d = aP
}
aP.prototype.b = {};
Module.b2ChainShape = aP;
aP.prototype.ComputeAABB = (function (b, d, e) {
    Ay(this.a, b.a, d.a, e)
});
aP.prototype.RayCast = (function (b, d, e, f) {
    return By(this.a, b.a, d.a, e.a, f)
});
aP.prototype.GetChildCount = (function () {
    return Cy(this.a)
});
aP.prototype.TestPoint = (function (b, d) {
    return Dy(this.a, b.a, d.a)
});
aP.prototype.SetPrevVertex = (function (b) {
    Hx(this.a, b.a)
});
aP.prototype.CreateLoop = (function (b, d) {
    Ey(this.a, b.a, d)
});
aP.prototype.set_m_vertices = (function (b) {
    Ix(this.a, b.a)
});
aP.prototype.SetNextVertex = (function (b) {
    Jx(this.a, b.a)
});
aP.prototype.set_m_count = (function (b) {
    Kx(this.a, b)
});
function bP() {
    ja("b2QueryCallback is abstract!")
}
bP.prototype.b = {};
Module.b2QueryCallback = bP;
bP.prototype.ReportFixture = (function (b) {
    return Fy(this.a, b.a)
});
cP.prototype.__destroy__ = (function () {
    Gy(this.a)
});
cP.prototype.Clear = (function () {
    Hy(this.a)
});
cP.prototype.Free = (function (b, d) {
    EB(this.a, b, d)
});
cP.prototype.Allocate = (function (b) {
    return qn(this.a, b)
});
function cP() {
    this.a = gF();
    cP.prototype.b[this.a] = this;
    this.d = cP
}
cP.prototype.b = {};
Module.b2BlockAllocator = cP;
dP.prototype.__destroy__ = (function () {
    hF(this.a)
});
dP.prototype.Set = (function (b, d) {
    Xm(this.a, b.a, d)
});
dP.prototype.ComputeMass = (function (b, d) {
    iF(this.a, b.a, d)
});
dP.prototype.set_m_radius = (function (b) {
    Lx(this.a, b)
});
dP.prototype.get_m_radius = (function () {
    return Mx(this.a)
});
dP.prototype.Clone = (function (b) {
    return PO(jF(this.a, b.a), Module.b2Shape)
});
dP.prototype.GetVertex = (function (b) {
    return PO(Nx(this.a, b), Module.b2Vec2)
});
dP.prototype.RayCast = (function (b, d, e, f) {
    return kF(this.a, b.a, d.a, e.a, f)
});
dP.prototype.SetAsBox = (function (b, d, e, f) {
    e === Ha ? Ox(this.a, b, d) : Wm(this.a, b, d, e.a, f)
});
dP.prototype.set_m_centroid = (function (b) {
    Px(this.a, b.a)
});
dP.prototype.ComputeAABB = (function (b, d, e) {
    lF(this.a, b.a, d.a, e)
});
dP.prototype.set_m_vertexCount = (function (b) {
    Qx(this.a, b)
});
dP.prototype.GetVertexCount = (function () {
    return Rx(this.a)
});
dP.prototype.GetChildCount = (function () {
    return mF(this.a)
});
dP.prototype.TestPoint = (function (b, d) {
    return nF(this.a, b.a, d.a)
});
dP.prototype.GetType = (function () {
    return Sx(this.a)
});
function dP() {
    this.a = oF();
    dP.prototype.b[this.a] = this;
    this.d = dP
}
dP.prototype.b = {};
Module.b2PolygonShape = dP;
dP.prototype.get_m_vertexCount = (function () {
    return Tx(this.a)
});
dP.prototype.get_m_centroid = (function () {
    return PO(this.a + 12 | 0, Module.b2Vec2)
});
eP.prototype.__destroy__ = (function () {
    qF(this.a)
});
eP.prototype.Set = (function (b, d) {
    Ux(this.a, b.a, d.a)
});
eP.prototype.ComputeMass = (function (b, d) {
    rF(this.a, b.a, d)
});
eP.prototype.set_m_radius = (function (b) {
    Vx(this.a, b)
});
eP.prototype.get_m_radius = (function () {
    return Wx(this.a)
});
eP.prototype.Clone = (function (b) {
    return PO(sF(this.a, b.a), Module.b2Shape)
});
eP.prototype.GetType = (function () {
    return Xx(this.a)
});
eP.prototype.RayCast = (function (b, d, e, f) {
    return tF(this.a, b.a, d.a, e.a, f)
});
eP.prototype.ComputeAABB = (function (b, d, e) {
    uF(this.a, b.a, d.a, e)
});
eP.prototype.GetChildCount = (function () {
    return vF(this.a)
});
eP.prototype.TestPoint = (function (b, d) {
    return wF(this.a, b.a, d.a)
});
function eP() {
    this.a = xF();
    eP.prototype.b[this.a] = this;
    this.d = eP
}
eP.prototype.b = {};
Module.b2EdgeShape = eP;
function fP() {
    ja("b2Contact is abstract!")
}
fP.prototype.b = {};
Module.b2Contact = fP;
fP.prototype.GetNext = (function () {
    return PO(Yx(this.a), Module.b2Contact)
});
fP.prototype.SetEnabled = (function (b) {
    Zx(this.a, b)
});
fP.prototype.GetWorldManifold = (function (b) {
    zF(this.a, b.a)
});
fP.prototype.GetRestitution = (function () {
    return $x(this.a)
});
fP.prototype.ResetFriction = (function () {
    AF(this.a)
});
fP.prototype.GetFriction = (function () {
    return ay(this.a)
});
fP.prototype.IsTouching = (function () {
    return by(this.a)
});
fP.prototype.IsEnabled = (function () {
    return cy(this.a)
});
fP.prototype.GetFixtureB = (function () {
    return PO(dy(this.a), Module.b2Fixture)
});
fP.prototype.SetFriction = (function (b) {
    ey(this.a, b)
});
fP.prototype.GetFixtureA = (function () {
    return PO(fy(this.a), Module.b2Fixture)
});
fP.prototype.GetChildIndexA = (function () {
    return gy(this.a)
});
fP.prototype.GetChildIndexB = (function () {
    return hy(this.a)
});
fP.prototype.Evaluate = (function (b, d, e) {
    BF(this.a, b.a, d.a, e.a)
});
fP.prototype.SetRestitution = (function (b) {
    iy(this.a, b)
});
fP.prototype.GetManifold = (function () {
    return PO(this.a + 64 | 0, Module.b2Manifold)
});
fP.prototype.ResetRestitution = (function () {
    jy(this.a)
});
function gP() {
    ja("b2Shape is abstract!")
}
gP.prototype.b = {};
Module.b2Shape = gP;
gP.prototype.get_m_radius = (function () {
    return ky(this.a)
});
gP.prototype.ComputeMass = (function (b, d) {
    CF(this.a, b.a, d)
});
gP.prototype.set_m_radius = (function (b) {
    ly(this.a, b)
});
gP.prototype.Clone = (function (b) {
    return PO(DF(this.a, b.a), Module.b2Shape)
});
gP.prototype.GetType = (function () {
    return my(this.a)
});
gP.prototype.RayCast = (function (b, d, e, f) {
    return EF(this.a, b.a, d.a, e.a, f)
});
gP.prototype.ComputeAABB = (function (b, d, e) {
    FF(this.a, b.a, d.a, e)
});
gP.prototype.GetChildCount = (function () {
    return GF(this.a)
});
gP.prototype.TestPoint = (function (b, d) {
    return HF(this.a, b.a, d.a)
});
function hP() {
    ja("b2Body is abstract!")
}
hP.prototype.b = {};
Module.b2Body = hP;
hP.prototype.GetAngle = (function () {
    return ny(this.a)
});
hP.prototype.GetUserData = (function () {
    return oy(this.a)
});
hP.prototype.IsSleepingAllowed = (function () {
    return py(this.a)
});
hP.prototype.SetAngularDamping = (function (b) {
    qy(this.a, b)
});
hP.prototype.SetActive = (function (b) {
    kp(this.a, b)
});
hP.prototype.SetGravityScale = (function (b) {
    ry(this.a, b)
});
hP.prototype.SetUserData = (function (b) {
    sy(this.a, b)
});
hP.prototype.GetAngularVelocity = (function () {
    return ty(this.a)
});
hP.prototype.GetFixtureList = (function () {
    return PO(uy(this.a), Module.b2Fixture)
});
hP.prototype.ApplyForce = (function (b, d) {
    vy(this.a, b.a, d.a)
});
hP.prototype.GetLocalPoint = (function (b) {
    return PO(IF(this.a, b.a), Module.b2Vec2)
});
hP.prototype.SetLinearVelocity = (function (b) {
    LF(this.a, b.a)
});
hP.prototype.GetJointList = (function () {
    return PO(MF(this.a), Module.b2JointEdge)
});
hP.prototype.GetLinearVelocity = (function () {
    return PO(tG(this.a), Module.b2Vec2)
});
hP.prototype.GetNext = (function () {
    return PO(NF(this.a), Module.b2Body)
});
hP.prototype.SetSleepingAllowed = (function (b) {
    OF(this.a, b)
});
hP.prototype.SetTransform = (function (b, d) {
    ip(this.a, b.a, d)
});
hP.prototype.GetMass = (function () {
    return PF(this.a)
});
hP.prototype.SetAngularVelocity = (function (b) {
    QF(this.a, b)
});
hP.prototype.GetMassData = (function (b) {
    RF(this.a, b.a)
});
hP.prototype.GetLinearVelocityFromWorldPoint = (function (b) {
    return PO(wG(this.a, b.a), Module.b2Vec2)
});
hP.prototype.ResetMassData = (function () {
    vo(this.a)
});
hP.prototype.ApplyForceToCenter = (function (b) {
    SF(this.a, b.a)
});
hP.prototype.ApplyTorque = (function (b) {
    TF(this.a, b)
});
hP.prototype.IsAwake = (function () {
    return UF(this.a)
});
hP.prototype.SetType = (function (b) {
    uo(this.a, b)
});
hP.prototype.CreateFixture = (function (b, d) {
    return d === Ha ? PO(yo(this.a, b.a), Module.b2Fixture) : PO(zG(this.a, b.a, d), Module.b2Fixture)
});
hP.prototype.SetMassData = (function (b) {
    hp(this.a, b.a)
});
hP.prototype.GetTransform = (function () {
    return PO(this.a + 12 | 0, Module.b2Transform)
});
hP.prototype.GetWorldCenter = (function () {
    return PO(this.a + 44 | 0, Module.b2Vec2)
});
hP.prototype.GetAngularDamping = (function () {
    return VF(this.a)
});
hP.prototype.ApplyLinearImpulse = (function (b, d) {
    WF(this.a, b.a, d.a)
});
hP.prototype.IsFixedRotation = (function () {
    return XF(this.a)
});
hP.prototype.GetLocalCenter = (function () {
    return PO(this.a + 28 | 0, Module.b2Vec2)
});
hP.prototype.GetWorldVector = (function (b) {
    return PO(AG(this.a, b.a), Module.b2Vec2)
});
hP.prototype.GetLinearVelocityFromLocalPoint = (function (b) {
    return PO(DG(this.a, b.a), Module.b2Vec2)
});
hP.prototype.GetContactList = (function () {
    return PO(YF(this.a), Module.b2ContactEdge)
});
hP.prototype.GetWorldPoint = (function (b) {
    return PO(GG(this.a, b.a), Module.b2Vec2)
});
hP.prototype.SetAwake = (function (b) {
    JG(this.a, b)
});
hP.prototype.GetLinearDamping = (function () {
    return ZF(this.a)
});
hP.prototype.IsBullet = (function () {
    return $F(this.a)
});
hP.prototype.GetWorld = (function () {
    return PO(aG(this.a), Module.b2World)
});
hP.prototype.GetLocalVector = (function (b) {
    return PO(KG(this.a, b.a), Module.b2Vec2)
});
hP.prototype.SetLinearDamping = (function (b) {
    bG(this.a, b)
});
hP.prototype.Dump = (function () {
    lp(this.a)
});
hP.prototype.SetBullet = (function (b) {
    cG(this.a, b)
});
hP.prototype.GetType = (function () {
    return dG(this.a)
});
hP.prototype.GetGravityScale = (function () {
    return eG(this.a)
});
hP.prototype.DestroyFixture = (function (b) {
    zo(this.a, b.a)
});
hP.prototype.GetInertia = (function () {
    return fG(this.a)
});
hP.prototype.IsActive = (function () {
    return gG(this.a)
});
hP.prototype.SetFixedRotation = (function (b) {
    NG(this.a, b)
});
hP.prototype.ApplyAngularImpulse = (function (b) {
    hG(this.a, b)
});
hP.prototype.GetPosition = (function () {
    return PO(this.a + 12 | 0, Module.b2Vec2)
});
iP.prototype.GetMaxAllocation = (function () {
    return iG(this.a)
});
iP.prototype.__destroy__ = (function () {
    OG(this.a)
});
function iP() {
    this.a = PG();
    iP.prototype.b[this.a] = this;
    this.d = iP
}
iP.prototype.b = {};
Module.b2StackAllocator = iP;
iP.prototype.Allocate = (function (b) {
    return QG(this.a, b)
});
iP.prototype.Free = (function (b) {
    xn(this.a, b)
});
function jP() {
    ja("b2DestructionListener is abstract!")
}
jP.prototype.b = {};
Module.b2DestructionListener = jP;
jP.prototype.SayGoodbye = (function (b) {
    RG(this.a, b.a)
});
kP.prototype.__destroy__ = (function () {
    SG(this.a)
});
kP.prototype.set_maskBits = (function (b) {
    jG(this.a, b)
});
kP.prototype.set_categoryBits = (function (b) {
    kG(this.a, b)
});
kP.prototype.get_groupIndex = (function () {
    return lG(this.a)
});
kP.prototype.set_groupIndex = (function (b) {
    mG(this.a, b)
});
kP.prototype.get_maskBits = (function () {
    return nG(this.a)
});
function kP() {
    this.a = TG();
    kP.prototype.b[this.a] = this;
    this.d = kP
}
kP.prototype.b = {};
Module.b2Filter = kP;
kP.prototype.get_categoryBits = (function () {
    return oG(this.a)
});
lP.prototype.set_localAnchorA = (function (b) {
    pG(this.a, b.a)
});
lP.prototype.__destroy__ = (function () {
    UG(this.a)
});
lP.prototype.set_localAnchorB = (function (b) {
    qG(this.a, b.a)
});
lP.prototype.get_maxForce = (function () {
    return rG(this.a)
});
function lP() {
    this.a = VG();
    lP.prototype.b[this.a] = this;
    this.d = lP
}
lP.prototype.b = {};
Module.b2FrictionJointDef = lP;
lP.prototype.get_localAnchorA = (function () {
    return PO(this.a + 20 | 0, Module.b2Vec2)
});
lP.prototype.set_maxForce = (function (b) {
    sG(this.a, b)
});
lP.prototype.get_localAnchorB = (function () {
    return PO(this.a + 28 | 0, Module.b2Vec2)
});
lP.prototype.set_maxTorque = (function (b) {
    WG(this.a, b)
});
lP.prototype.get_maxTorque = (function () {
    return XG(this.a)
});
lP.prototype.Initialize = (function (b, d, e) {
    YG(this.a, b.a, d.a, e.a)
});
mP.prototype.get_linearDamping = (function () {
    return ZG(this.a)
});
mP.prototype.get_awake = (function () {
    return $G(this.a)
});
mP.prototype.get_type = (function () {
    return aH(this.a)
});
mP.prototype.get_allowSleep = (function () {
    return bH(this.a)
});
mP.prototype.set_position = (function (b) {
    cH(this.a, b.a)
});
mP.prototype.set_linearVelocity = (function (b) {
    dH(this.a, b.a)
});
function mP() {
    this.a = qI();
    mP.prototype.b[this.a] = this;
    this.d = mP
}
mP.prototype.b = {};
Module.b2BodyDef = mP;
mP.prototype.get_bullet = (function () {
    return eH(this.a)
});
mP.prototype.get_userData = (function () {
    return fH(this.a)
});
mP.prototype.set_angularDamping = (function (b) {
    gH(this.a, b)
});
mP.prototype.set_fixedRotation = (function (b) {
    hH(this.a, b)
});
mP.prototype.set_allowSleep = (function (b) {
    iH(this.a, b)
});
mP.prototype.get_gravityScale = (function () {
    return jH(this.a)
});
mP.prototype.set_angularVelocity = (function (b) {
    kH(this.a, b)
});
mP.prototype.set_userData = (function (b) {
    lH(this.a, b)
});
mP.prototype.get_position = (function () {
    return PO(this.a + 4 | 0, Module.b2Vec2)
});
mP.prototype.__destroy__ = (function () {
    rI(this.a)
});
mP.prototype.set_type = (function (b) {
    mH(this.a, b)
});
mP.prototype.set_gravityScale = (function (b) {
    nH(this.a, b)
});
mP.prototype.get_angularDamping = (function () {
    return oH(this.a)
});
mP.prototype.set_bullet = (function (b) {
    pH(this.a, b)
});
mP.prototype.set_active = (function (b) {
    qH(this.a, b)
});
mP.prototype.set_angle = (function (b) {
    rH(this.a, b)
});
mP.prototype.get_angle = (function () {
    return sH(this.a)
});
mP.prototype.get_angularVelocity = (function () {
    return tH(this.a)
});
mP.prototype.get_linearVelocity = (function () {
    return PO(this.a + 16 | 0, Module.b2Vec2)
});
mP.prototype.get_active = (function () {
    return uH(this.a)
});
mP.prototype.set_linearDamping = (function (b) {
    vH(this.a, b)
});
mP.prototype.get_fixedRotation = (function () {
    return wH(this.a)
});
mP.prototype.set_awake = (function (b) {
    xH(this.a, b)
});
nP.prototype.Normalize = (function () {
    return sI(this.a)
});
nP.prototype.set_x = (function (b) {
    yH(this.a, b)
});
function nP(b, d) {
    this.a = b === Ha ? tI() : uI(b, d);
    nP.prototype.b[this.a] = this;
    this.d = nP
}
nP.prototype.b = {};
Module.b2Vec2 = nP;
nP.prototype.Set = (function (b, d) {
    zH(this.a, b, d)
});
nP.prototype.get_x = (function () {
    return AH(this.a)
});
nP.prototype.get_y = (function () {
    return BH(this.a)
});
nP.prototype.set_y = (function (b) {
    CH(this.a, b)
});
nP.prototype.IsValid = (function () {
    return DH(this.a)
});
nP.prototype.Skew = (function () {
    return PO(vI(this.a), Module.b2Vec2)
});
nP.prototype.LengthSquared = (function () {
    return EH(this.a)
});
nP.prototype.op_add = (function (b) {
    FH(this.a, b.a)
});
nP.prototype.SetZero = (function () {
    GH(this.a)
});
nP.prototype.Length = (function () {
    return yI(this.a)
});
nP.prototype.__destroy__ = (function () {
    zI(this.a)
});
nP.prototype.op_mul = (function (b) {
    HH(this.a, b)
});
nP.prototype.op_sub = (function () {
    return PO(AI(this.a), Module.b2Vec2)
});
oP.prototype.__destroy__ = (function () {
    DI(this.a)
});
oP.prototype.set_z = (function (b) {
    IH(this.a, b)
});
oP.prototype.Set = (function (b, d, e) {
    JH(this.a, b, d, e)
});
oP.prototype.get_z = (function () {
    return KH(this.a)
});
oP.prototype.op_add = (function (b) {
    LH(this.a, b.a)
});
oP.prototype.SetZero = (function () {
    MH(this.a)
});
function oP(b, d, e) {
    this.a = b === Ha ? EI() : FI(b, d, e);
    oP.prototype.b[this.a] = this;
    this.d = oP
}
oP.prototype.b = {};
Module.b2Vec3 = oP;
oP.prototype.op_mul = (function (b) {
    NH(this.a, b)
});
oP.prototype.op_sub = (function () {
    return PO(GI(this.a), Module.b2Vec3)
});
pP.prototype.get_m_radius = (function () {
    return OH(this.a)
});
pP.prototype.Set = (function (b, d) {
    Hi(this.a, b.a, d)
});
function pP() {
    this.a = JI();
    pP.prototype.b[this.a] = this;
    this.d = pP
}
pP.prototype.b = {};
Module.b2DistanceProxy = pP;
pP.prototype.set_m_radius = (function (b) {
    PH(this.a, b)
});
pP.prototype.__destroy__ = (function () {
    KI(this.a)
});
pP.prototype.get_m_vertices = (function () {
    return QH(this.a)
});
pP.prototype.GetSupportVertex = (function (b) {
    return PO(RH(this.a, b.a), Module.b2Vec2)
});
pP.prototype.get_m_count = (function () {
    return SH(this.a)
});
pP.prototype.GetVertexCount = (function () {
    return TH(this.a)
});
pP.prototype.GetVertex = (function (b) {
    return PO(LI(this.a, b), Module.b2Vec2)
});
pP.prototype.GetSupport = (function (b) {
    return UH(this.a, b.a)
});
pP.prototype.set_m_vertices = (function (b) {
    VH(this.a, b.a)
});
pP.prototype.set_m_count = (function (b) {
    WH(this.a, b)
});
qP.prototype.__destroy__ = (function () {
    MI(this.a)
});
qP.prototype.get_isSensor = (function () {
    return XH(this.a)
});
qP.prototype.set_userData = (function (b) {
    YH(this.a, b)
});
qP.prototype.set_shape = (function (b) {
    ZH(this.a, b.a)
});
qP.prototype.get_density = (function () {
    return $H(this.a)
});
qP.prototype.get_shape = (function () {
    return aI(this.a)
});
function qP() {
    this.a = NI();
    qP.prototype.b[this.a] = this;
    this.d = qP
}
qP.prototype.b = {};
Module.b2FixtureDef = qP;
qP.prototype.set_density = (function (b) {
    bI(this.a, b)
});
qP.prototype.set_restitution = (function (b) {
    cI(this.a, b)
});
qP.prototype.get_restitution = (function () {
    return dI(this.a)
});
qP.prototype.set_isSensor = (function (b) {
    eI(this.a, b)
});
qP.prototype.get_filter = (function () {
    return PO(this.a + 22 | 0, Module.b2Filter)
});
qP.prototype.get_friction = (function () {
    return fI(this.a)
});
qP.prototype.set_friction = (function (b) {
    gI(this.a, b)
});
qP.prototype.get_userData = (function () {
    return hI(this.a)
});
qP.prototype.set_filter = (function (b) {
    OI(this.a, b.a)
});
rP.prototype.set_localAnchorA = (function (b) {
    iI(this.a, b.a)
});
rP.prototype.set_localAnchorB = (function (b) {
    jI(this.a, b.a)
});
rP.prototype.get_motorSpeed = (function () {
    return kI(this.a)
});
rP.prototype.get_enableMotor = (function () {
    return lI(this.a)
});
rP.prototype.get_referenceAngle = (function () {
    return mI(this.a)
});
rP.prototype.set_enableLimit = (function (b) {
    nI(this.a, b)
});
rP.prototype.set_motorSpeed = (function (b) {
    oI(this.a, b)
});
rP.prototype.get_localAxisA = (function () {
    return PO(this.a + 36 | 0, Module.b2Vec2)
});
rP.prototype.set_upperTranslation = (function (b) {
    pI(this.a, b)
});
function rP() {
    this.a = PI();
    rP.prototype.b[this.a] = this;
    this.d = rP
}
rP.prototype.b = {};
Module.b2PrismaticJointDef = rP;
rP.prototype.Initialize = (function (b, d, e, f) {
    QI(this.a, b.a, d.a, e.a, f.a)
});
rP.prototype.set_lowerTranslation = (function (b) {
    RI(this.a, b)
});
rP.prototype.get_upperTranslation = (function () {
    return SI(this.a)
});
rP.prototype.get_enableLimit = (function () {
    return TI(this.a)
});
rP.prototype.set_referenceAngle = (function (b) {
    UI(this.a, b)
});
rP.prototype.get_localAnchorA = (function () {
    return PO(this.a + 20 | 0, Module.b2Vec2)
});
rP.prototype.get_localAnchorB = (function () {
    return PO(this.a + 28 | 0, Module.b2Vec2)
});
rP.prototype.__destroy__ = (function () {
    dK(this.a)
});
rP.prototype.get_maxMotorForce = (function () {
    return VI(this.a)
});
rP.prototype.set_maxMotorForce = (function (b) {
    WI(this.a, b)
});
rP.prototype.set_enableMotor = (function (b) {
    XI(this.a, b)
});
rP.prototype.get_lowerTranslation = (function () {
    return YI(this.a)
});
rP.prototype.set_localAxisA = (function (b) {
    ZI(this.a, b.a)
});
sP.prototype.__destroy__ = (function () {
    eK(this.a)
});
sP.prototype.Set = (function (b) {
    fK(this.a, b)
});
sP.prototype.GetAngle = (function () {
    return gK(this.a)
});
sP.prototype.GetYAxis = (function () {
    return PO(iK(this.a), Module.b2Vec2)
});
sP.prototype.GetXAxis = (function () {
    return PO(lK(this.a), Module.b2Vec2)
});
sP.prototype.set_c = (function (b) {
    $I(this.a, b)
});
sP.prototype.SetIdentity = (function () {
    aJ(this.a)
});
function sP(b) {
    this.a = b === Ha ? oK() : pK(b);
    sP.prototype.b[this.a] = this;
    this.d = sP
}
sP.prototype.b = {};
Module.b2Rot = sP;
sP.prototype.get_c = (function () {
    return bJ(this.a)
});
tP.prototype.set_localAnchorA = (function (b) {
    cJ(this.a, b.a)
});
tP.prototype.set_motorSpeed = (function (b) {
    dJ(this.a, b)
});
tP.prototype.get_localAxisA = (function () {
    return PO(this.a + 36 | 0, Module.b2Vec2)
});
tP.prototype.set_localAnchorB = (function (b) {
    eJ(this.a, b.a)
});
tP.prototype.get_frequencyHz = (function () {
    return fJ(this.a)
});
tP.prototype.set_maxMotorTorque = (function (b) {
    gJ(this.a, b)
});
tP.prototype.get_enableMotor = (function () {
    return hJ(this.a)
});
tP.prototype.__destroy__ = (function () {
    qK(this.a)
});
tP.prototype.get_localAnchorA = (function () {
    return PO(this.a + 20 | 0, Module.b2Vec2)
});
tP.prototype.get_maxMotorTorque = (function () {
    return iJ(this.a)
});
tP.prototype.get_localAnchorB = (function () {
    return PO(this.a + 28 | 0, Module.b2Vec2)
});
tP.prototype.get_dampingRatio = (function () {
    return jJ(this.a)
});
tP.prototype.set_enableMotor = (function (b) {
    kJ(this.a, b)
});
tP.prototype.set_frequencyHz = (function (b) {
    lJ(this.a, b)
});
tP.prototype.Initialize = (function (b, d, e, f) {
    mJ(this.a, b.a, d.a, e.a, f.a)
});
tP.prototype.set_dampingRatio = (function (b) {
    nJ(this.a, b)
});
function tP() {
    this.a = rK();
    tP.prototype.b[this.a] = this;
    this.d = tP
}
tP.prototype.b = {};
Module.b2WheelJointDef = tP;
tP.prototype.set_localAxisA = (function (b) {
    oJ(this.a, b.a)
});
tP.prototype.get_motorSpeed = (function () {
    return pJ(this.a)
});
uP.prototype.set_localAnchorA = (function (b) {
    qJ(this.a, b.a)
});
uP.prototype.get_lowerAngle = (function () {
    return rJ(this.a)
});
uP.prototype.set_upperAngle = (function (b) {
    sJ(this.a, b)
});
uP.prototype.set_localAnchorB = (function (b) {
    tJ(this.a, b.a)
});
uP.prototype.get_enableLimit = (function () {
    return uJ(this.a)
});
uP.prototype.set_lowerAngle = (function (b) {
    vJ(this.a, b)
});
uP.prototype.get_enableMotor = (function () {
    return wJ(this.a)
});
uP.prototype.set_motorSpeed = (function (b) {
    xJ(this.a, b)
});
uP.prototype.get_upperAngle = (function () {
    return yJ(this.a)
});
uP.prototype.set_referenceAngle = (function (b) {
    zJ(this.a, b)
});
uP.prototype.set_maxMotorTorque = (function (b) {
    AJ(this.a, b)
});
uP.prototype.get_localAnchorA = (function () {
    return PO(this.a + 20 | 0, Module.b2Vec2)
});
uP.prototype.get_referenceAngle = (function () {
    return BJ(this.a)
});
uP.prototype.get_localAnchorB = (function () {
    return PO(this.a + 28 | 0, Module.b2Vec2)
});
uP.prototype.set_enableLimit = (function (b) {
    CJ(this.a, b)
});
uP.prototype.set_enableMotor = (function (b) {
    DJ(this.a, b)
});
uP.prototype.__destroy__ = (function () {
    sK(this.a)
});
function uP() {
    this.a = tK();
    uP.prototype.b[this.a] = this;
    this.d = uP
}
uP.prototype.b = {};
Module.b2RevoluteJointDef = uP;
uP.prototype.Initialize = (function (b, d, e) {
    EJ(this.a, b.a, d.a, e.a)
});
uP.prototype.get_maxMotorTorque = (function () {
    return FJ(this.a)
});
uP.prototype.get_motorSpeed = (function () {
    return GJ(this.a)
});
vP.prototype.set_localAnchorA = (function (b) {
    HJ(this.a, b.a)
});
vP.prototype.__destroy__ = (function () {
    uK(this.a)
});
vP.prototype.set_localAnchorB = (function (b) {
    IJ(this.a, b.a)
});
vP.prototype.get_ratio = (function () {
    return JJ(this.a)
});
vP.prototype.get_lengthB = (function () {
    return KJ(this.a)
});
vP.prototype.get_lengthA = (function () {
    return LJ(this.a)
});
vP.prototype.get_localAnchorA = (function () {
    return PO(this.a + 36 | 0, Module.b2Vec2)
});
vP.prototype.set_ratio = (function (b) {
    MJ(this.a, b)
});
vP.prototype.get_localAnchorB = (function () {
    return PO(this.a + 44 | 0, Module.b2Vec2)
});
vP.prototype.get_groundAnchorB = (function () {
    return PO(this.a + 28 | 0, Module.b2Vec2)
});
vP.prototype.set_groundAnchorB = (function (b) {
    NJ(this.a, b.a)
});
function vP() {
    this.a = vK();
    vP.prototype.b[this.a] = this;
    this.d = vP
}
vP.prototype.b = {};
Module.b2PulleyJointDef = vP;
vP.prototype.set_groundAnchorA = (function (b) {
    OJ(this.a, b.a)
});
vP.prototype.Initialize = (function (b, d, e, f, g, h, j) {
    fq(this.a, b.a, d.a, e.a, f.a, g.a, h.a, j)
});
vP.prototype.set_lengthB = (function (b) {
    PJ(this.a, b)
});
vP.prototype.set_lengthA = (function (b) {
    QJ(this.a, b)
});
vP.prototype.get_groundAnchorA = (function () {
    return PO(this.a + 20 | 0, Module.b2Vec2)
});
wP.prototype.get_bodyA = (function () {
    return PO(RJ(this.a), Module.b2Body)
});
wP.prototype.set_userData = (function (b) {
    SJ(this.a, b)
});
wP.prototype.set_bodyA = (function (b) {
    TJ(this.a, b.a)
});
wP.prototype.set_bodyB = (function (b) {
    UJ(this.a, b.a)
});
wP.prototype.__destroy__ = (function () {
    wK(this.a)
});
wP.prototype.get_bodyB = (function () {
    return PO(VJ(this.a), Module.b2Body)
});
wP.prototype.set_type = (function (b) {
    WJ(this.a, b)
});
wP.prototype.get_collideConnected = (function () {
    return XJ(this.a)
});
wP.prototype.get_type = (function () {
    return YJ(this.a)
});
wP.prototype.set_collideConnected = (function (b) {
    ZJ(this.a, b)
});
function wP() {
    this.a = xK();
    wP.prototype.b[this.a] = this;
    this.d = wP
}
wP.prototype.b = {};
Module.b2JointDef = wP;
wP.prototype.get_userData = (function () {
    return $J(this.a)
});
xP.prototype.__destroy__ = (function () {
    yK(this.a)
});
xP.prototype.Set = (function (b, d) {
    zK(this.a, b.a, d)
});
xP.prototype.set_p = (function (b) {
    aK(this.a, b.a)
});
xP.prototype.set_q = (function (b) {
    bK(this.a, b.a)
});
xP.prototype.get_p = (function () {
    return PO(this.a | 0, Module.b2Vec2)
});
xP.prototype.get_q = (function () {
    return PO(this.a + 8 | 0, Module.b2Rot)
});
function xP(b, d) {
    this.a = b === Ha ? AK() : BK(b.a, d.a);
    xP.prototype.b[this.a] = this;
    this.d = xP
}
xP.prototype.b = {};
Module.b2Transform = xP;
xP.prototype.SetIdentity = (function () {
    cK(this.a)
});
yP.prototype.__destroy__ = (function () {
    uL(this.a)
});
yP.prototype.set_b = (function (b) {
    CK(this.a, b)
});
yP.prototype.Set = (function (b, d, e) {
    DK(this.a, b, d, e)
});
yP.prototype.get_b = (function () {
    return EK(this.a)
});
function yP(b, d, e) {
    this.a = b === Ha ? vL() : wL(b, d, e);
    yP.prototype.b[this.a] = this;
    this.d = yP
}
yP.prototype.b = {};
Module.b2Color = yP;
lT.prototype.set_localAnchorA = (function (b) {
    FK(this.a, b.a)
});
lT.prototype.__destroy__ = (function () {
    xL(this.a)
});
lT.prototype.get_frequencyHz = (function () {
    return GK(this.a)
});
lT.prototype.set_localAnchorB = (function (b) {
    HK(this.a, b.a)
});
lT.prototype.set_dampingRatio = (function (b) {
    IK(this.a, b)
});
lT.prototype.set_referenceAngle = (function (b) {
    JK(this.a, b)
});
lT.prototype.get_localAnchorA = (function () {
    return PO(this.a + 20 | 0, Module.b2Vec2)
});
lT.prototype.get_referenceAngle = (function () {
    return KK(this.a)
});
lT.prototype.get_localAnchorB = (function () {
    return PO(this.a + 28 | 0, Module.b2Vec2)
});
lT.prototype.get_dampingRatio = (function () {
    return LK(this.a)
});
lT.prototype.set_frequencyHz = (function (b) {
    MK(this.a, b)
});
lT.prototype.Initialize = (function (b, d, e) {
    NK(this.a, b.a, d.a, e.a)
});
function lT() {
    this.a = yL();
    lT.prototype.b[this.a] = this;
    this.d = lT
}
lT.prototype.b = {};
Module.b2WeldJointDef = lT;
mT.prototype.__destroy__ = (function () {
    zL(this.a)
});
mT.prototype.get_frequencyHz = (function () {
    return OK(this.a)
});
mT.prototype.set_dampingRatio = (function (b) {
    PK(this.a, b)
});
function mT() {
    this.a = AL();
    mT.prototype.b[this.a] = this;
    this.d = mT
}
mT.prototype.b = {};
Module.b2MouseJointDef = mT;
mT.prototype.get_maxForce = (function () {
    return QK(this.a)
});
mT.prototype.set_target = (function (b) {
    RK(this.a, b.a)
});
mT.prototype.set_maxForce = (function (b) {
    SK(this.a, b)
});
mT.prototype.get_target = (function () {
    return PO(this.a + 20 | 0, Module.b2Vec2)
});
mT.prototype.set_frequencyHz = (function (b) {
    TK(this.a, b)
});
mT.prototype.get_dampingRatio = (function () {
    return UK(this.a)
});
nT.prototype.set_localAnchorA = (function (b) {
    VK(this.a, b.a)
});
nT.prototype.get_length = (function () {
    return WK(this.a)
});
nT.prototype.get_frequencyHz = (function () {
    return XK(this.a)
});
nT.prototype.set_localAnchorB = (function (b) {
    YK(this.a, b.a)
});
nT.prototype.set_dampingRatio = (function (b) {
    ZK(this.a, b)
});
nT.prototype.__destroy__ = (function () {
    BL(this.a)
});
nT.prototype.get_localAnchorA = (function () {
    return PO(this.a + 20 | 0, Module.b2Vec2)
});
nT.prototype.get_localAnchorB = (function () {
    return PO(this.a + 28 | 0, Module.b2Vec2)
});
nT.prototype.get_dampingRatio = (function () {
    return $K(this.a)
});
function nT() {
    this.a = CL();
    nT.prototype.b[this.a] = this;
    this.d = nT
}
nT.prototype.b = {};
Module.b2DistanceJointDef = nT;
nT.prototype.set_length = (function (b) {
    aL(this.a, b)
});
nT.prototype.set_frequencyHz = (function (b) {
    bL(this.a, b)
});
nT.prototype.Initialize = (function (b, d, e, f) {
    DL(this.a, b.a, d.a, e.a, f.a)
});
oT.prototype.__destroy__ = (function () {
    EL(this.a)
});
oT.prototype.set_joint1 = (function (b) {
    cL(this.a, b.a)
});
oT.prototype.set_joint2 = (function (b) {
    dL(this.a, b.a)
});
oT.prototype.set_ratio = (function (b) {
    eL(this.a, b)
});
oT.prototype.get_joint1 = (function () {
    return PO(fL(this.a), Module.b2Joint)
});
oT.prototype.get_joint2 = (function () {
    return PO(gL(this.a), Module.b2Joint)
});
function oT() {
    this.a = FL();
    oT.prototype.b[this.a] = this;
    this.d = oT
}
oT.prototype.b = {};
Module.b2GearJointDef = oT;
oT.prototype.get_ratio = (function () {
    return hL(this.a)
});
pT.prototype.__destroy__ = (function () {
    GL(this.a)
});
pT.prototype.set_contact = (function (b) {
    iL(this.a, b.a)
});
pT.prototype.get_prev = (function () {
    return PO(jL(this.a), Module.b2ContactEdge)
});
pT.prototype.get_other = (function () {
    return PO(kL(this.a), Module.b2Body)
});
pT.prototype.set_prev = (function (b) {
    lL(this.a, b.a)
});
pT.prototype.get_next = (function () {
    return PO(mL(this.a), Module.b2ContactEdge)
});
pT.prototype.set_other = (function (b) {
    nL(this.a, b.a)
});
pT.prototype.set_next = (function (b) {
    oL(this.a, b.a)
});
function pT() {
    this.a = HL();
    pT.prototype.b[this.a] = this;
    this.d = pT
}
pT.prototype.b = {};
Module.b2ContactEdge = pT;
pT.prototype.get_contact = (function () {
    return PO(pL(this.a), Module.b2Contact)
});
qT.prototype.set_localAnchorA = (function (b) {
    qL(this.a, b.a)
});
qT.prototype.__destroy__ = (function () {
    IL(this.a)
});
qT.prototype.get_maxLength = (function () {
    return rL(this.a)
});
qT.prototype.set_localAnchorB = (function (b) {
    sL(this.a, b.a)
});
qT.prototype.get_localAnchorA = (function () {
    return PO(this.a + 20 | 0, Module.b2Vec2)
});
qT.prototype.get_localAnchorB = (function () {
    return PO(this.a + 28 | 0, Module.b2Vec2)
});
function qT() {
    this.a = JL();
    qT.prototype.b[this.a] = this;
    this.d = qT
}
qT.prototype.b = {};
Module.b2RopeJointDef = qT;
qT.prototype.set_maxLength = (function (b) {
    tL(this.a, b)
});
this.Box2D = Module;
Module.b2_staticBody = 0;
Module.b2_kinematicBody = 1;
Module.b2_dynamicBody = 2
