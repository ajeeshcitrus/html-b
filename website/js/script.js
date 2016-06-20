! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = t.length,
            n = Z.type(t);
        return "function" === n || Z.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (Z.isFunction(e)) return Z.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return Z.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (ae.test(e)) return Z.filter(e, t, n);
            e = Z.filter(e, t)
        }
        return Z.grep(t, function(t) {
            return X.call(e, t) >= 0 !== n
        })
    }

    function r(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = fe[t] = {};
        return Z.each(t.match(pe) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        Q.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), Z.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Z.expando + Math.random()
    }

    function u(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Ce, "-$1").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : be.test(n) ? Z.parseJSON(n) : n
                } catch (r) {}
                ye.set(t, e, n)
            } else n = void 0;
        return n
    }

    function c() {
        return !0
    }

    function l() {
        return !1
    }

    function h() {
        try {
            return Q.activeElement
        } catch (t) {}
    }

    function d(t, e) {
        return Z.nodeName(t, "table") && Z.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function p(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function f(t) {
        var e = je.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function g(t, e) {
        for (var n = 0, i = t.length; i > n; n++) ve.set(t[n], "globalEval", !e || ve.get(e[n], "globalEval"))
    }

    function m(t, e) {
        var n, i, r, o, s, a, u, c;
        if (1 === e.nodeType) {
            if (ve.hasData(t) && (o = ve.access(t), s = ve.set(e, o), c = o.events)) {
                delete s.handle, s.events = {};
                for (r in c)
                    for (n = 0, i = c[r].length; i > n; n++) Z.event.add(e, r, c[r][n])
            }
            ye.hasData(t) && (a = ye.access(t), u = Z.extend({}, a), ye.set(e, u))
        }
    }

    function v(t, e) {
        var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && Z.nodeName(t, e) ? Z.merge([t], n) : n
    }

    function y(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Te.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }

    function b(e, n) {
        var i, r = Z(n.createElement(e)).appendTo(n.body),
            o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : Z.css(r[0], "display");
        return r.detach(), o
    }

    function C(t) {
        var e = Q,
            n = He[t];
        return n || (n = b(t, e), "none" !== n && n || ($e = ($e || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = $e[0].contentDocument, e.write(), e.close(), n = b(t, e), $e.detach()), He[t] = n), n
    }

    function w(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || Pe(t), n && (s = n.getPropertyValue(e) || n[e]), n && ("" !== s || Z.contains(t.ownerDocument, t) || (s = Z.style(t, e)), Fe.test(s) && ze.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function x(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function _(t, e) {
        if (e in t) return e;
        for (var n = e[0].toUpperCase() + e.slice(1), i = e, r = Ge.length; r--;)
            if (e = Ge[r] + n, e in t) return e;
        return i
    }

    function T(t, e, n) {
        var i = Ve.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function S(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += Z.css(t, n + xe[o], !0, r)), i ? ("content" === n && (s -= Z.css(t, "padding" + xe[o], !0, r)), "margin" !== n && (s -= Z.css(t, "border" + xe[o] + "Width", !0, r))) : (s += Z.css(t, "padding" + xe[o], !0, r), "padding" !== n && (s += Z.css(t, "border" + xe[o] + "Width", !0, r)));
        return s
    }

    function k(t, e, n) {
        var i = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = Pe(t),
            s = "border-box" === Z.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = w(t, e, o), (0 > r || null == r) && (r = t.style[e]), Fe.test(r)) return r;
            i = s && (K.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + S(t, e, n || (s ? "border" : "content"), i, o) + "px"
    }

    function E(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = ve.get(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && _e(i) && (o[s] = ve.access(i, "olddisplay", C(i.nodeName)))) : (r = _e(i), "none" === n && r || ve.set(i, "olddisplay", r ? n : Z.css(i, "display"))));
        for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function N(t, e, n, i, r) {
        return new N.prototype.init(t, e, n, i, r)
    }

    function D() {
        return setTimeout(function() {
            Ke = void 0
        }), Ke = Z.now()
    }

    function A(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = xe[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function I(t, e, n) {
        for (var i, r = (nn[e] || []).concat(nn["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function O(t, e, n) {
        var i, r, o, s, a, u, c, l, h = this,
            d = {},
            p = t.style,
            f = t.nodeType && _e(t),
            g = ve.get(t, "fxshow");
        n.queue || (a = Z._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, h.always(function() {
            h.always(function() {
                a.unqueued--, Z.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = Z.css(t, "display"), l = "none" === c ? ve.get(t, "olddisplay") || C(t.nodeName) : c, "inline" === l && "none" === Z.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], Je.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    f = !0
                }
                d[i] = g && g[i] || Z.style(t, i)
            } else c = void 0;
        if (Z.isEmptyObject(d)) "inline" === ("none" === c ? C(t.nodeName) : c) && (p.display = c);
        else {
            g ? "hidden" in g && (f = g.hidden) : g = ve.access(t, "fxshow", {}), o && (g.hidden = !f), f ? Z(t).show() : h.done(function() {
                Z(t).hide()
            }), h.done(function() {
                var e;
                ve.remove(t, "fxshow");
                for (e in d) Z.style(t, e, d[e])
            });
            for (i in d) s = I(f ? g[i] : 0, i, h), i in g || (g[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function L(t, e) {
        var n, i, r, o, s;
        for (n in t)
            if (i = Z.camelCase(n), r = e[i], o = t[n], Z.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = Z.cssHooks[i], s && "expand" in s) {
                o = s.expand(o), delete t[i];
                for (n in o) n in t || (t[n] = o[n], e[n] = r)
            } else e[i] = r
    }

    function W(t, e, n) {
        var i, r, o = 0,
            s = en.length,
            a = Z.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (r) return !1;
                for (var e = Ke || D(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, s = 0, u = c.tweens.length; u > s; s++) c.tweens[s].run(o);
                return a.notifyWith(t, [c, o, n]), 1 > o && u ? n : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: Z.extend({}, e),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Ke || D(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = Z.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) c.tweens[n].run(1);
                    return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                }
            }),
            l = c.props;
        for (L(l, c.opts.specialEasing); s > o; o++)
            if (i = en[o].call(c, t, l, c.opts)) return i;
        return Z.map(l, I, c), Z.isFunction(c.opts.start) && c.opts.start.call(t, c), Z.fx.timer(Z.extend(u, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function M(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match(pe) || [];
            if (Z.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function j(t, e, n, i) {
        function r(a) {
            var u;
            return o[a] = !0, Z.each(t[a] || [], function(t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || s || o[c] ? s ? !(u = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
            }), u
        }
        var o = {},
            s = t === xn;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function q(t, e) {
        var n, i, r = Z.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && Z.extend(!0, t, i), t
    }

    function R(t, e, n) {
        for (var i, r, o, s, a = t.contents, u = t.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    u.unshift(r);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (r in n) {
                if (!u[0] || t.converters[r + " " + u[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function $(t, e, n, i) {
        var r, o, s, a, u, c = {},
            l = t.dataTypes.slice();
        if (l[1])
            for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
        for (o = l.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = l.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (s = c[u + " " + o] || c["* " + o], !s)
                for (r in c)
                    if (a = r.split(" "), a[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], l.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: s ? h : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function H(t, e, n, i) {
        var r;
        if (Z.isArray(e)) Z.each(e, function(e, r) {
            n || kn.test(t) ? i(t, r) : H(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== Z.type(e)) i(t, e);
        else
            for (r in e) H(t + "[" + r + "]", e[r], n, i)
    }

    function z(t) {
        return Z.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var F = [],
        P = F.slice,
        B = F.concat,
        V = F.push,
        X = F.indexOf,
        U = {},
        Y = U.toString,
        G = U.hasOwnProperty,
        K = {},
        Q = t.document,
        J = "2.1.1",
        Z = function(t, e) {
            return new Z.fn.init(t, e)
        },
        te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ee = /^-ms-/,
        ne = /-([\da-z])/gi,
        ie = function(t, e) {
            return e.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: J,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return P.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : P.call(this)
        },
        pushStack: function(t) {
            var e = Z.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return Z.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(Z.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(P.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: V,
        sort: F.sort,
        splice: F.splice
    }, Z.extend = Z.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = s[e], i = t[e], s !== i && (c && i && (Z.isPlainObject(i) || (r = Z.isArray(i))) ? (r ? (r = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[e] = Z.extend(c, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }, Z.extend({
        expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === Z.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !Z.isArray(t) && t - parseFloat(t) >= 0
        },
        isPlainObject: function(t) {
            return "object" !== Z.type(t) || t.nodeType || Z.isWindow(t) ? !1 : t.constructor && !G.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? U[Y.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            t = Z.trim(t), t && (1 === t.indexOf("use strict") ? (e = Q.createElement("script"), e.text = t, Q.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(ee, "ms-").replace(ne, ie)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var r, o = 0,
                s = t.length,
                a = n(t);
            if (i) {
                if (a)
                    for (; s > o && (r = e.apply(t[o], i), r !== !1); o++);
                else
                    for (o in t)
                        if (r = e.apply(t[o], i), r === !1) break
            } else if (a)
                for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
            else
                for (o in t)
                    if (r = e.call(t[o], o, t[o]), r === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(te, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? Z.merge(i, "string" == typeof t ? [t] : t) : V.call(i, t)), i
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : X.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++) i = !e(t[o], o), i !== a && r.push(t[o]);
            return r
        },
        map: function(t, e, i) {
            var r, o = 0,
                s = t.length,
                a = n(t),
                u = [];
            if (a)
                for (; s > o; o++) r = e(t[o], o, i), null != r && u.push(r);
            else
                for (o in t) r = e(t[o], o, i), null != r && u.push(r);
            return B.apply([], u)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (n = t[e], e = t, t = n), Z.isFunction(t) ? (i = P.call(arguments, 2), r = function() {
                return t.apply(e || this, i.concat(P.call(arguments)))
            }, r.guid = t.guid = t.guid || Z.guid++, r) : void 0
        },
        now: Date.now,
        support: K
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        U["[object " + e + "]"] = e.toLowerCase()
    });
    var re = function(t) {
        function e(t, e, n, i) {
            var r, o, s, a, u, c, h, p, f, g;
            if ((e ? e.ownerDocument || e : H) !== O && I(e), e = e || O, n = n || [], !t || "string" != typeof t) return n;
            if (1 !== (a = e.nodeType) && 9 !== a) return [];
            if (W && !i) {
                if (r = ye.exec(t))
                    if (s = r[1]) {
                        if (9 === a) {
                            if (o = e.getElementById(s), !o || !o.parentNode) return n;
                            if (o.id === s) return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && R(e, o) && o.id === s) return n.push(o), n
                    } else {
                        if (r[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                        if ((s = r[3]) && w.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(s)), n
                    }
                if (w.qsa && (!M || !M.test(t))) {
                    if (p = h = $, f = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (c = S(t), (h = e.getAttribute("id")) ? p = h.replace(Ce, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", u = c.length; u--;) c[u] = p + d(c[u]);
                        f = be.test(t) && l(e.parentNode) || e, g = c.join(",")
                    }
                    if (g) try {
                        return Z.apply(n, f.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        h || e.removeAttribute("id")
                    }
                }
            }
            return E(t.replace(ue, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[$] = !0, t
        }

        function r(t) {
            var e = O.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), i = t.length; i--;) x.attrHandle[n[i]] = e
        }

        function s(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function u(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function c(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function l(t) {
            return t && typeof t.getElementsByTagName !== U && t
        }

        function h() {}

        function d(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function p(t, e, n) {
            var i = e.dir,
                r = n && "parentNode" === i,
                o = F++;
            return e.first ? function(e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r) return t(e, n, o)
            } : function(e, n, s) {
                var a, u, c = [z, o];
                if (s) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, s)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if (u = e[$] || (e[$] = {}), (a = u[i]) && a[0] === z && a[1] === o) return c[2] = a[2];
                            if (u[i] = c, c[2] = t(e, n, s)) return !0
                        }
            }
        }

        function f(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function g(t, n, i) {
            for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
            return i
        }

        function m(t, e, n, i, r) {
            for (var o, s = [], a = 0, u = t.length, c = null != e; u > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), c && e.push(a));
            return s
        }

        function v(t, e, n, r, o, s) {
            return r && !r[$] && (r = v(r)), o && !o[$] && (o = v(o, s)), i(function(i, s, a, u) {
                var c, l, h, d = [],
                    p = [],
                    f = s.length,
                    v = i || g(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !i && e ? v : m(v, d, t, a, u),
                    b = n ? o || (i ? t : f || r) ? [] : s : y;
                if (n && n(y, b, a, u), r)
                    for (c = m(b, p), r(c, [], a, u), l = c.length; l--;)(h = c[l]) && (b[p[l]] = !(y[p[l]] = h));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (c = [], l = b.length; l--;)(h = b[l]) && c.push(y[l] = h);
                            o(null, b = [], c, u)
                        }
                        for (l = b.length; l--;)(h = b[l]) && (c = o ? ee.call(i, h) : d[l]) > -1 && (i[c] = !(s[c] = h))
                    }
                } else b = m(b === s ? b.splice(f, b.length) : b), o ? o(null, s, b, u) : Z.apply(s, b)
            })
        }

        function y(t) {
            for (var e, n, i, r = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, u = p(function(t) {
                    return t === e
                }, s, !0), c = p(function(t) {
                    return ee.call(e, t) > -1
                }, s, !0), l = [function(t, n, i) {
                    return !o && (i || n !== N) || ((e = n).nodeType ? u(t, n, i) : c(t, n, i))
                }]; r > a; a++)
                if (n = x.relative[t[a].type]) l = [p(f(l), n)];
                else {
                    if (n = x.filter[t[a].type].apply(null, t[a].matches), n[$]) {
                        for (i = ++a; r > i && !x.relative[t[i].type]; i++);
                        return v(a > 1 && f(l), a > 1 && d(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && d(t))
                    }
                    l.push(n)
                }
            return f(l)
        }

        function b(t, n) {
            var r = n.length > 0,
                o = t.length > 0,
                s = function(i, s, a, u, c) {
                    var l, h, d, p = 0,
                        f = "0",
                        g = i && [],
                        v = [],
                        y = N,
                        b = i || o && x.find.TAG("*", c),
                        C = z += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (c && (N = s !== O && s); f !== w && null != (l = b[f]); f++) {
                        if (o && l) {
                            for (h = 0; d = t[h++];)
                                if (d(l, s, a)) {
                                    u.push(l);
                                    break
                                }
                            c && (z = C)
                        }
                        r && ((l = !d && l) && p--, i && g.push(l))
                    }
                    if (p += f, r && f !== p) {
                        for (h = 0; d = n[h++];) d(g, v, s, a);
                        if (i) {
                            if (p > 0)
                                for (; f--;) g[f] || v[f] || (v[f] = Q.call(u));
                            v = m(v)
                        }
                        Z.apply(u, v), c && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(u)
                    }
                    return c && (z = C, N = y), g
                };
            return r ? i(s) : s
        }
        var C, w, x, _, T, S, k, E, N, D, A, I, O, L, W, M, j, q, R, $ = "sizzle" + -new Date,
            H = t.document,
            z = 0,
            F = 0,
            P = n(),
            B = n(),
            V = n(),
            X = function(t, e) {
                return t === e && (A = !0), 0
            },
            U = "undefined",
            Y = 1 << 31,
            G = {}.hasOwnProperty,
            K = [],
            Q = K.pop,
            J = K.push,
            Z = K.push,
            te = K.slice,
            ee = K.indexOf || function(t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (this[e] === t) return e;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = re.replace("w", "w#"),
            se = "\\[" + ie + "*(" + re + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]",
            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
            ue = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            ce = new RegExp("^" + ie + "*," + ie + "*"),
            le = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            he = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            de = new RegExp(ae),
            pe = new RegExp("^" + oe + "$"),
            fe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            Ce = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            xe = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            Z.apply(K = te.call(H.childNodes), H.childNodes), K[H.childNodes.length].nodeType
        } catch (_e) {
            Z = {
                apply: K.length ? function(t, e) {
                    J.apply(t, te.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        w = e.support = {}, T = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, I = e.setDocument = function(t) {
            var e, n = t ? t.ownerDocument || t : H,
                i = n.defaultView;
            return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, L = n.documentElement, W = !T(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                I()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                I()
            })), w.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = r(function(t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(n.getElementsByClassName) && r(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), w.getById = r(function(t) {
                return L.appendChild(t).id = $, !n.getElementsByName || !n.getElementsByName($).length
            }), w.getById ? (x.find.ID = function(t, e) {
                if (typeof e.getElementById !== U && W) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, x.filter.ID = function(t) {
                var e = t.replace(we, xe);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete x.find.ID, x.filter.ID = function(t) {
                var e = t.replace(we, xe);
                return function(t) {
                    var n = typeof t.getAttributeNode !== U && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), x.find.TAG = w.getElementsByTagName ? function(t, e) {
                return typeof e.getElementsByTagName !== U ? e.getElementsByTagName(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, x.find.CLASS = w.getElementsByClassName && function(t, e) {
                return typeof e.getElementsByClassName !== U && W ? e.getElementsByClassName(t) : void 0
            }, j = [], M = [], (w.qsa = ve.test(n.querySelectorAll)) && (r(function(t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && M.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + ie + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || M.push(":checked")
            }), r(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
            })), (w.matchesSelector = ve.test(q = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(t) {
                w.disconnectedMatch = q.call(t, "div"), q.call(t, "[s!='']:x"), j.push("!=", ae)
            }), M = M.length && new RegExp(M.join("|")), j = j.length && new RegExp(j.join("|")), e = ve.test(L.compareDocumentPosition), R = e || ve.test(L.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, X = e ? function(t, e) {
                if (t === e) return A = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === H && R(H, t) ? -1 : e === n || e.ownerDocument === H && R(H, e) ? 1 : D ? ee.call(D, t) - ee.call(D, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return A = !0, 0;
                var i, r = 0,
                    o = t.parentNode,
                    a = e.parentNode,
                    u = [t],
                    c = [e];
                if (!o || !a) return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : D ? ee.call(D, t) - ee.call(D, e) : 0;
                if (o === a) return s(t, e);
                for (i = t; i = i.parentNode;) u.unshift(i);
                for (i = e; i = i.parentNode;) c.unshift(i);
                for (; u[r] === c[r];) r++;
                return r ? s(u[r], c[r]) : u[r] === H ? -1 : c[r] === H ? 1 : 0
            }, n) : O
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== O && I(t), n = n.replace(he, "='$1']"), !(!w.matchesSelector || !W || j && j.test(n) || M && M.test(n))) try {
                var i = q.call(t, n);
                if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (r) {}
            return e(n, O, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== O && I(t), R(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== O && I(t);
            var n = x.attrHandle[e.toLowerCase()],
                i = n && G.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !W) : void 0;
            return void 0 !== i ? i : w.attributes || !W ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                r = 0;
            if (A = !w.detectDuplicates, D = !w.sortStable && t.slice(0), t.sort(X), A) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return D = null, t
        }, _ = e.getText = function(t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += _(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[i++];) n += _(e);
            return n
        }, x = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(we, xe), t[3] = (t[3] || t[4] || t[5] || "").replace(we, xe), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && de.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(we, xe).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = P[t + " "];
                    return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && P(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== U && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, u) {
                        var c, l, h, d, p, f, g = o !== s ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !u && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (h = e; h = h[g];)
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                for (l = m[$] || (m[$] = {}), c = l[t] || [], p = c[0] === z && c[1], d = c[0] === z && c[2], h = p && m.childNodes[p]; h = ++p && h && h[g] || (d = p = 0) || f.pop();)
                                    if (1 === h.nodeType && ++d && h === e) {
                                        l[t] = [z, p, d];
                                        break
                                    }
                            } else if (y && (c = (e[$] || (e[$] = {}))[t]) && c[0] === z) d = c[1];
                            else
                                for (;
                                    (h = ++p && h && h[g] || (d = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (y && ((h[$] || (h[$] = {}))[t] = [z, d]), h !== e)););
                            return d -= r, d === i || d % i === 0 && d / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[$] ? o(n) : o.length > 1 ? (r = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = o(t, n), s = r.length; s--;) i = ee.call(t, r[s]), t[i] = !(e[i] = r[s])
                    }) : function(t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        r = k(t.replace(ue, "$1"));
                    return r[$] ? i(function(t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, i, o) {
                        return e[0] = t, r(e, null, o, n), !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || _(e)).indexOf(t) > -1
                    }
                }),
                lang: i(function(t) {
                    return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, xe).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = W ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === L
                },
                focus: function(t) {
                    return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !x.pseudos.empty(t)
                },
                header: function(t) {
                    return me.test(t.nodeName)
                },
                input: function(t) {
                    return ge.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(t, e) {
                    return [e - 1]
                }),
                eq: c(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: c(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: c(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: c(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: c(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (C in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[C] = a(C);
        for (C in {
                submit: !0,
                reset: !0
            }) x.pseudos[C] = u(C);
        return h.prototype = x.filters = x.pseudos, x.setFilters = new h, S = e.tokenize = function(t, n) {
            var i, r, o, s, a, u, c, l = B[t + " "];
            if (l) return n ? 0 : l.slice(0);
            for (a = t, u = [], c = x.preFilter; a;) {
                (!i || (r = ce.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), i = !1, (r = le.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(ue, " ")
                }), a = a.slice(i.length));
                for (s in x.filter) !(r = fe[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : B(t, u).slice(0)
        }, k = e.compile = function(t, e) {
            var n, i = [],
                r = [],
                o = V[t + " "];
            if (!o) {
                for (e || (e = S(t)), n = e.length; n--;) o = y(e[n]), o[$] ? i.push(o) : r.push(o);
                o = V(t, b(r, i)), o.selector = t
            }
            return o
        }, E = e.select = function(t, e, n, i) {
            var r, o, s, a, u, c = "function" == typeof t && t,
                h = !i && S(t = c.selector || t);
            if (n = n || [], 1 === h.length) {
                if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === e.nodeType && W && x.relative[o[1].type]) {
                    if (e = (x.find.ID(s.matches[0].replace(we, xe), e) || [])[0], !e) return n;
                    c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = fe.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);)
                    if ((u = x.find[a]) && (i = u(s.matches[0].replace(we, xe), be.test(o[0].type) && l(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = i.length && d(o), !t) return Z.apply(n, i), n;
                        break
                    }
            }
            return (c || k(t, h))(i, e, !W, n, be.test(t) && l(e.parentNode) || e), n
        }, w.sortStable = $.split("").sort(X).join("") === $, w.detectDuplicates = !!A, I(), w.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(O.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(ne, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    Z.find = re, Z.expr = re.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = re.uniqueSort, Z.text = re.getText, Z.isXMLDoc = re.isXML, Z.contains = re.contains;
    var oe = Z.expr.match.needsContext,
        se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    Z.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? Z.find.matchesSelector(i, t) ? [i] : [] : Z.find.matches(t, Z.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, Z.fn.extend({
        find: function(t) {
            var e, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof t) return this.pushStack(Z(t).filter(function() {
                for (e = 0; n > e; e++)
                    if (Z.contains(r[e], this)) return !0
            }));
            for (e = 0; n > e; e++) Z.find(t, r[e], i);
            return i = this.pushStack(n > 1 ? Z.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && oe.test(t) ? Z(t) : t || [], !1).length
        }
    });
    var ue, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        le = Z.fn.init = function(t, e) {
            var n, i;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ce.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || ue).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof Z ? e[0] : e, Z.merge(this, Z.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : Q, !0)), se.test(n[1]) && Z.isPlainObject(e))
                        for (n in e) Z.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return i = Q.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = Q, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Z.isFunction(t) ? "undefined" != typeof ue.ready ? ue.ready(t) : t(Z) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Z.makeArray(t, this))
        };
    le.prototype = Z.fn, ue = Z(Q);
    var he = /^(?:parents|prev(?:Until|All))/,
        de = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function(t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && Z(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), Z.fn.extend({
        has: function(t) {
            var e = Z(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++)
                    if (Z.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], s = oe.test(t) || "string" != typeof t ? Z(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? X.call(Z(t), this[0]) : X.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), Z.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return Z.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return Z.dir(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return Z.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return Z.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return Z.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return Z.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return Z.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return Z.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || Z.merge([], t.childNodes)
        }
    }, function(t, e) {
        Z.fn[t] = function(n, i) {
            var r = Z.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = Z.filter(i, r)), this.length > 1 && (de[t] || Z.unique(r), he.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var pe = /\S+/g,
        fe = {};
    Z.Callbacks = function(t) {
        t = "string" == typeof t ? fe[t] || o(t) : Z.extend({}, t);
        var e, n, i, r, s, a, u = [],
            c = !t.once && [],
            l = function(o) {
                for (e = t.memory && o, n = !0, a = r || 0, r = 0, s = u.length, i = !0; u && s > a; a++)
                    if (u[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                i = !1, u && (c ? c.length && l(c.shift()) : e ? u = [] : h.disable())
            },
            h = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function o(e) {
                            Z.each(e, function(e, n) {
                                var i = Z.type(n);
                                "function" === i ? t.unique && h.has(n) || u.push(n) : n && n.length && "string" !== i && o(n)
                            })
                        }(arguments), i ? s = u.length : e && (r = n, l(e))
                    }
                    return this
                },
                remove: function() {
                    return u && Z.each(arguments, function(t, e) {
                        for (var n;
                            (n = Z.inArray(e, u, n)) > -1;) u.splice(n, 1), i && (s >= n && s--, a >= n && a--)
                    }), this
                },
                has: function(t) {
                    return t ? Z.inArray(t, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], s = 0, this
                },
                disable: function() {
                    return u = c = e = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return c = void 0, e || h.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(t, e) {
                    return !u || n && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? c.push(e) : l(e)), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return h
    }, Z.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return Z.Deferred(function(n) {
                            Z.each(e, function(e, o) {
                                var s = Z.isFunction(t[e]) && t[e];
                                r[o[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && Z.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? Z.extend(t, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, Z.each(e, function(t, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, n, i, r = 0,
                o = P.call(arguments),
                s = o.length,
                a = 1 !== s || t && Z.isFunction(t.promise) ? s : 0,
                u = 1 === a ? t : Z.Deferred(),
                c = function(t, n, i) {
                    return function(r) {
                        n[t] = this, i[t] = arguments.length > 1 ? P.call(arguments) : r, i === e ? u.notifyWith(n, i) : --a || u.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && Z.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(u.reject).progress(c(r, n, e)) : --a;
            return a || u.resolveWith(i, o), u.promise()
        }
    });
    var ge;
    Z.fn.ready = function(t) {
        return Z.ready.promise().done(t), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, t !== !0 && --Z.readyWait > 0 || (ge.resolveWith(Q, [Z]), Z.fn.triggerHandler && (Z(Q).triggerHandler("ready"), Z(Q).off("ready"))))
        }
    }), Z.ready.promise = function(e) {
        return ge || (ge = Z.Deferred(), "complete" === Q.readyState ? setTimeout(Z.ready) : (Q.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), ge.promise(e)
    }, Z.ready.promise();
    var me = Z.access = function(t, e, n, i, r, o, s) {
        var a = 0,
            u = t.length,
            c = null == n;
        if ("object" === Z.type(n)) {
            r = !0;
            for (a in n) Z.access(t, e, a, n[a], !0, o, s)
        } else if (void 0 !== i && (r = !0, Z.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                return c.call(Z(t), n)
            })), e))
            for (; u > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : c ? e.call(t) : u ? e(t[0], n) : o
    };
    Z.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function(t) {
            if (!a.accepts(t)) return 0;
            var e = {},
                n = t[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    e[this.expando] = {
                        value: n
                    }, Object.defineProperties(t, e)
                } catch (i) {
                    e[this.expando] = n, Z.extend(t, e)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(t, e, n) {
            var i, r = this.key(t),
                o = this.cache[r];
            if ("string" == typeof e) o[e] = n;
            else if (Z.isEmptyObject(o)) Z.extend(this.cache[r], e);
            else
                for (i in e) o[i] = e[i];
            return o
        },
        get: function(t, e) {
            var n = this.cache[this.key(t)];
            return void 0 === e ? n : n[e]
        },
        access: function(t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, Z.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i, r, o = this.key(t),
                s = this.cache[o];
            if (void 0 === e) this.cache[o] = {};
            else {
                Z.isArray(e) ? i = e.concat(e.map(Z.camelCase)) : (r = Z.camelCase(e), e in s ? i = [e, r] : (i = r, i = i in s ? [i] : i.match(pe) || [])), n = i.length;
                for (; n--;) delete s[i[n]]
            }
        },
        hasData: function(t) {
            return !Z.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var ve = new a,
        ye = new a,
        be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ce = /([A-Z])/g;
    Z.extend({
        hasData: function(t) {
            return ye.hasData(t) || ve.hasData(t)
        },
        data: function(t, e, n) {
            return ye.access(t, e, n)
        },
        removeData: function(t, e) {
            ye.remove(t, e)
        },
        _data: function(t, e, n) {
            return ve.access(t, e, n)
        },
        _removeData: function(t, e) {
            ve.remove(t, e)
        }
    }), Z.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = Z.camelCase(i.slice(5)), u(o, i, r[i])));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                ye.set(this, t)
            }) : me(this, function(e) {
                var n, i = Z.camelCase(t);
                if (o && void 0 === e) {
                    if (n = ye.get(o, t), void 0 !== n) return n;
                    if (n = ye.get(o, i), void 0 !== n) return n;
                    if (n = u(o, i, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = ye.get(this, i);
                    ye.set(this, i, e), -1 !== t.indexOf("-") && void 0 !== n && ye.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                ye.remove(this, t)
            })
        }
    }), Z.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = ve.get(t, e), n && (!i || Z.isArray(n) ? i = ve.access(t, e, Z.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = Z.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = Z._queueHooks(t, e),
                s = function() {
                    Z.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return ve.get(t, n) || ve.access(t, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    ve.remove(t, [e + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? Z.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = Z.queue(this, t, e);
                Z._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && Z.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                Z.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                r = Z.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = ve.get(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        xe = ["Top", "Right", "Bottom", "Left"],
        _e = function(t, e) {
            return t = e || t, "none" === Z.css(t, "display") || !Z.contains(t.ownerDocument, t)
        },
        Te = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = Q.createDocumentFragment(),
            e = t.appendChild(Q.createElement("div")),
            n = Q.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), K.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Se = "undefined";
    K.focusinBubbles = "onfocusin" in t;
    var ke = /^key/,
        Ee = /^(?:mouse|pointer|contextmenu)|click/,
        Ne = /^(?:focusinfocus|focusoutblur)$/,
        De = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, u, c, l, h, d, p, f, g, m = ve.get(t);
            if (m)
                for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                        return typeof Z !== Se && Z.event.triggered !== e.type ? Z.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(pe) || [""], c = e.length; c--;) a = De.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p && (h = Z.event.special[p] || {}, p = (r ? h.delegateType : h.bindType) || p, h = Z.event.special[p] || {}, l = Z.extend({
                    type: p,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && Z.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, h.setup && h.setup.call(t, i, f, s) !== !1 || t.addEventListener && t.addEventListener(p, s, !1)), h.add && (h.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, l) : d.push(l), Z.event.global[p] = !0)
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, u, c, l, h, d, p, f, g, m = ve.hasData(t) && ve.get(t);
            if (m && (u = m.events)) {
                for (e = (e || "").match(pe) || [""], c = e.length; c--;)
                    if (a = De.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (h = Z.event.special[p] || {}, p = (i ? h.delegateType : h.bindType) || p, d = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) l = d[o], !r && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || i && i !== l.selector && ("**" !== i || !l.selector) || (d.splice(o, 1), l.selector && d.delegateCount--, h.remove && h.remove.call(t, l));
                        s && !d.length && (h.teardown && h.teardown.call(t, f, m.handle) !== !1 || Z.removeEvent(t, p, m.handle), delete u[p])
                    } else
                        for (p in u) Z.event.remove(t, p + e[c], n, i, !0);
                Z.isEmptyObject(u) && (delete m.handle, ve.remove(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var o, s, a, u, c, l, h, d = [i || Q],
                p = G.call(e, "type") ? e.type : e,
                f = G.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !Ne.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[Z.expando] ? e : new Z.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : Z.makeArray(n, [e]), h = Z.event.special[p] || {}, r || !h.trigger || h.trigger.apply(i, n) !== !1)) {
                if (!r && !h.noBubble && !Z.isWindow(i)) {
                    for (u = h.delegateType || p, Ne.test(u + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                    a === (i.ownerDocument || Q) && d.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0;
                    (s = d[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? u : h.bindType || p, l = (ve.get(s, "events") || {})[e.type] && ve.get(s, "handle"), l && l.apply(s, n), l = c && s[c], l && l.apply && Z.acceptData(s) && (e.result = l.apply(s, n), e.result === !1 && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || h._default && h._default.apply(d.pop(), n) !== !1 || !Z.acceptData(i) || c && Z.isFunction(i[p]) && !Z.isWindow(i) && (a = i[c], a && (i[c] = null), Z.event.triggered = p, i[p](), Z.event.triggered = void 0, a && (i[c] = a)), e.result
            }
        },
        dispatch: function(t) {
            t = Z.event.fix(t);
            var e, n, i, r, o, s = [],
                a = P.call(arguments),
                u = (ve.get(this, "events") || {})[t.type] || [],
                c = Z.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (s = Z.event.handlers.call(this, t, u), e = 0;
                    (r = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s = [],
                a = e.delegateCount,
                u = t.target;
            if (a && u.nodeType && (!t.button || "click" !== t.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== t.type) {
                        for (i = [], n = 0; a > n; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? Z(r, this).index(u) >= 0 : Z.find(r, this, null, [u]).length), i[r] && i.push(o);
                        i.length && s.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Q, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[Z.expando]) return t;
            var e, n, i, r = t.type,
                o = t,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Ee.test(r) ? this.mouseHooks : ke.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new Z.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
            return t.target || (t.target = Q), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== h() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return Z.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var r = Z.extend(new Z.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? Z.event.trigger(r, null, e) : Z.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }, Z.Event = function(t, e) {
        return this instanceof Z.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? c : l) : this.type = t, e && Z.extend(this, e), this.timeStamp = t && t.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(t, e)
    }, Z.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = c, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        Z.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return (!r || r !== i && !Z.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), K.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            Z.event.simulate(e, t.target, Z.event.fix(t), !0)
        };
        Z.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = ve.access(i, e);
                r || i.addEventListener(t, n, !0), ve.access(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = ve.access(i, e) - 1;
                r ? ve.access(i, e, r) : (i.removeEventListener(t, n, !0), ve.remove(i, e))
            }
        }
    }), Z.fn.extend({
        on: function(t, e, n, i, r) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (s in t) this.on(s, e, n, t[s], r);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = l;
            else if (!i) return this;
            return 1 === r && (o = i, i = function(t) {
                return Z().off(t), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, Z(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = l), this.each(function() {
                Z.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                Z.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? Z.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ie = /<([\w:]+)/,
        Oe = /<|&#?\w+;/,
        Le = /<(?:script|style|link)/i,
        We = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^$|\/(?:java|ecma)script/i,
        je = /^true\/(.*)/,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Re = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, Z.extend({
        clone: function(t, e, n) {
            var i, r, o, s, a = t.cloneNode(!0),
                u = Z.contains(t.ownerDocument, t);
            if (!(K.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Z.isXMLDoc(t)))
                for (s = v(a), o = v(t), i = 0, r = o.length; r > i; i++) y(o[i], s[i]);
            if (e)
                if (n)
                    for (o = o || v(t), s = s || v(a), i = 0, r = o.length; r > i; i++) m(o[i], s[i]);
                else m(t, a);
            return s = v(a, "script"), s.length > 0 && g(s, !u && v(t, "script")), a
        },
        buildFragment: function(t, e, n, i) {
            for (var r, o, s, a, u, c, l = e.createDocumentFragment(), h = [], d = 0, p = t.length; p > d; d++)
                if (r = t[d], r || 0 === r)
                    if ("object" === Z.type(r)) Z.merge(h, r.nodeType ? [r] : r);
                    else if (Oe.test(r)) {
                for (o = o || l.appendChild(e.createElement("div")), s = (Ie.exec(r) || ["", ""])[1].toLowerCase(), a = Re[s] || Re._default, o.innerHTML = a[1] + r.replace(Ae, "<$1></$2>") + a[2], c = a[0]; c--;) o = o.lastChild;
                Z.merge(h, o.childNodes), o = l.firstChild, o.textContent = ""
            } else h.push(e.createTextNode(r));
            for (l.textContent = "", d = 0; r = h[d++];)
                if ((!i || -1 === Z.inArray(r, i)) && (u = Z.contains(r.ownerDocument, r), o = v(l.appendChild(r), "script"), u && g(o), n))
                    for (c = 0; r = o[c++];) Me.test(r.type || "") && n.push(r);
            return l
        },
        cleanData: function(t) {
            for (var e, n, i, r, o = Z.event.special, s = 0; void 0 !== (n = t[s]); s++) {
                if (Z.acceptData(n) && (r = n[ve.expando], r && (e = ve.cache[r]))) {
                    if (e.events)
                        for (i in e.events) o[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, e.handle);
                    ve.cache[r] && delete ve.cache[r]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(t) {
            return me(this, function(t) {
                return void 0 === t ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = d(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = d(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? Z.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (e && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return Z.clone(this, t, e)
            })
        },
        html: function(t) {
            return me(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Le.test(t) && !Re[(Ie.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Ae, "<$1></$2>");
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, Z.cleanData(v(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = B.apply([], t);
            var n, i, r, o, s, a, u = 0,
                c = this.length,
                l = this,
                h = c - 1,
                d = t[0],
                g = Z.isFunction(d);
            if (g || c > 1 && "string" == typeof d && !K.checkClone && We.test(d)) return this.each(function(n) {
                var i = l.eq(n);
                g && (t[0] = d.call(this, n, i.html())), i.domManip(t, e)
            });
            if (c && (n = Z.buildFragment(t, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (r = Z.map(v(n, "script"), p), o = r.length; c > u; u++) s = n, u !== h && (s = Z.clone(s, !0, !0), o && Z.merge(r, v(s, "script"))), e.call(this[u], s, u);
                if (o)
                    for (a = r[r.length - 1].ownerDocument, Z.map(r, f), u = 0; o > u; u++) s = r[u], Me.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(qe, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        Z.fn[t] = function(t) {
            for (var n, i = [], r = Z(t), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), Z(r[s])[e](n), V.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var $e, He = {},
        ze = /^margin/,
        Fe = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
        Pe = function(t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        };
    ! function() {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(o);
            var e = t.getComputedStyle(s, null);
            n = "1%" !== e.top, i = "4px" === e.width, r.removeChild(o)
        }
        var n, i, r = Q.documentElement,
            o = Q.createElement("div"),
            s = Q.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), t.getComputedStyle && Z.extend(K, {
            pixelPosition: function() {
                return e(), n
            },
            boxSizingReliable: function() {
                return null == i && e(), i
            },
            reliableMarginRight: function() {
                var e, n = s.appendChild(Q.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", r.appendChild(o), e = !parseFloat(t.getComputedStyle(n, null).marginRight), r.removeChild(o), e
            }
        }))
    }(), Z.swap = function(t, e, n, i) {
        var r, o, s = {};
        for (o in e) s[o] = t.style[o], t.style[o] = e[o];
        r = n.apply(t, i || []);
        for (o in e) t.style[o] = s[o];
        return r
    };
    var Be = /^(none|table(?!-c[ea]).+)/,
        Ve = new RegExp("^(" + we + ")(.*)$", "i"),
        Xe = new RegExp("^([+-])=(" + we + ")", "i"),
        Ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ye = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = w(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = Z.camelCase(e),
                    u = t.style;
                return e = Z.cssProps[a] || (Z.cssProps[a] = _(u, a)), s = Z.cssHooks[e] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e] : (o = typeof n, "string" === o && (r = Xe.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(Z.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), K.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (u[e] = n)), void 0)
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = Z.camelCase(e);
            return e = Z.cssProps[a] || (Z.cssProps[a] = _(t.style, a)), s = Z.cssHooks[e] || Z.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = w(t, e, i)), "normal" === r && e in Ye && (r = Ye[e]), "" === n || n ? (o = parseFloat(r), n === !0 || Z.isNumeric(o) ? o || 0 : r) : r
        }
    }), Z.each(["height", "width"], function(t, e) {
        Z.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? Be.test(Z.css(t, "display")) && 0 === t.offsetWidth ? Z.swap(t, Ue, function() {
                    return k(t, e, i)
                }) : k(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var r = i && Pe(t);
                return T(t, n, i ? S(t, e, i, "border-box" === Z.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), Z.cssHooks.marginRight = x(K.reliableMarginRight, function(t, e) {
        return e ? Z.swap(t, {
            display: "inline-block"
        }, w, [t, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        Z.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + xe[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, ze.test(t) || (Z.cssHooks[t + e].set = T)
    }), Z.fn.extend({
        css: function(t, e) {
            return me(this, function(t, e, n) {
                var i, r, o = {},
                    s = 0;
                if (Z.isArray(e)) {
                    for (i = Pe(t), r = e.length; r > s; s++) o[e[s]] = Z.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? Z.style(t, e, n) : Z.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                _e(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = N, N.prototype = {
        constructor: N,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = N.propHooks[this.prop];
            return t && t.get ? t.get(this) : N.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = N.propHooks[this.prop];
            return this.pos = e = this.options.duration ? Z.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this
        }
    }, N.prototype.init.prototype = N.prototype, N.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Z.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                Z.fx.step[t.prop] ? Z.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Z.cssProps[t.prop]] || Z.cssHooks[t.prop]) ? Z.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, Z.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, Z.fx = N.prototype.init, Z.fx.step = {};
    var Ke, Qe, Je = /^(?:toggle|show|hide)$/,
        Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
        tn = /queueHooks$/,
        en = [O],
        nn = {
            "*": [function(t, e) {
                var n = this.createTween(t, e),
                    i = n.cur(),
                    r = Ze.exec(e),
                    o = r && r[3] || (Z.cssNumber[t] ? "" : "px"),
                    s = (Z.cssNumber[t] || "px" !== o && +i) && Ze.exec(Z.css(n.elem, t)),
                    a = 1,
                    u = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], r = r || [], s = +i || 1;
                    do a = a || ".5", s /= a, Z.style(n.elem, t, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --u)
                }
                return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    Z.Animation = Z.extend(W, {
            tweener: function(t, e) {
                Z.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, r = t.length; r > i; i++) n = t[i], nn[n] = nn[n] || [], nn[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? en.unshift(t) : en.push(t)
            }
        }), Z.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? Z.extend({}, t) : {
                complete: n || !n && e || Z.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !Z.isFunction(e) && e
            };
            return i.duration = Z.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Z.fx.speeds ? Z.fx.speeds[i.duration] : Z.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                Z.isFunction(i.old) && i.old.call(this), i.queue && Z.dequeue(this, i.queue)
            }, i
        }, Z.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(_e).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = Z.isEmptyObject(t),
                    o = Z.speed(e, n, i),
                    s = function() {
                        var e = W(this, Z.extend({}, t), o);
                        (r || ve.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = Z.timers,
                        s = ve.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && tn.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    (e || !n) && Z.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = ve.get(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = Z.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, Z.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function(t, e) {
            var n = Z.fn[e];
            Z.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(A(e, !0), t, i, r)
            }
        }), Z.each({
            slideDown: A("show"),
            slideUp: A("hide"),
            slideToggle: A("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            Z.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), Z.timers = [], Z.fx.tick = function() {
            var t, e = 0,
                n = Z.timers;
            for (Ke = Z.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || Z.fx.stop(), Ke = void 0
        }, Z.fx.timer = function(t) {
            Z.timers.push(t), t() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function() {
            Qe || (Qe = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function() {
            clearInterval(Qe), Qe = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function(t, e) {
            return t = Z.fx ? Z.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var t = Q.createElement("input"),
                e = Q.createElement("select"),
                n = e.appendChild(Q.createElement("option"));
            t.type = "checkbox", K.checkOn = "" !== t.value, K.optSelected = n.selected, e.disabled = !0, K.optDisabled = !n.disabled, t = Q.createElement("input"), t.value = "t", t.type = "radio", K.radioValue = "t" === t.value
        }();
    var rn, on, sn = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(t, e) {
            return me(this, Z.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                Z.removeAttr(this, t)
            })
        }
    }), Z.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            return t && 3 !== o && 8 !== o && 2 !== o ? typeof t.getAttribute === Se ? Z.prop(t, e, n) : (1 === o && Z.isXMLDoc(t) || (e = e.toLowerCase(), i = Z.attrHooks[e] || (Z.expr.match.bool.test(e) ? on : rn)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = Z.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void Z.removeAttr(t, e)) : void 0
        },
        removeAttr: function(t, e) {
            var n, i, r = 0,
                o = e && e.match(pe);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];) i = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!K.radioValue && "radio" === e && Z.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), on = {
        set: function(t, e, n) {
            return e === !1 ? Z.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = sn[e] || Z.find.attr;
        sn[e] = function(t, e, i) {
            var r, o;
            return i || (o = sn[e], sn[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, sn[e] = o), r
        }
    });
    var an = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(t, e) {
            return me(this, Z.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[Z.propFix[t] || t]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var i, r, o, s = t.nodeType;
            return t && 3 !== s && 8 !== s && 2 !== s ? (o = 1 !== s || !Z.isXMLDoc(t), o && (e = Z.propFix[e] || e, r = Z.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || an.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), K.optSelected || (Z.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var un = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a = "string" == typeof t && t,
                u = 0,
                c = this.length;
            if (Z.isFunction(t)) return this.each(function(e) {
                Z(this).addClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(pe) || []; c > u; u++)
                    if (n = this[u], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
                        for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s = Z.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a = 0 === arguments.length || "string" == typeof t && t,
                u = 0,
                c = this.length;
            if (Z.isFunction(t)) return this.each(function(e) {
                Z(this).removeClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(pe) || []; c > u; u++)
                    if (n = this[u], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
                        for (o = 0; r = e[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        s = t ? Z.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(Z.isFunction(t) ? function(n) {
                Z(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function() {
                if ("string" === n)
                    for (var e, i = 0, r = Z(this), o = t.match(pe) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(n === Se || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var cn = /\r/g;
    Z.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = Z.isFunction(t), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? t.call(this, n, Z(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : Z.isArray(r) && (r = Z.map(r, function(t) {
                    return null == t ? "" : t + ""
                })), e = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = Z.valHooks[r.type] || Z.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(cn, "") : null == n ? "" : n)) : void 0
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = Z.find.attr(t, "value");
                    return null != e ? e : Z.trim(Z.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, u = 0 > r ? a : o ? r : 0; a > u; u++)
                        if (n = i[u], !(!n.selected && u !== r || (K.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (e = Z(n).val(), o) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = Z.makeArray(e), s = r.length; s--;) i = r[s], (i.selected = Z.inArray(i.value, o) >= 0) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(t, e) {
                return Z.isArray(e) ? t.checked = Z.inArray(Z(t).val(), e) >= 0 : void 0
            }
        }, K.checkOn || (Z.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        Z.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), Z.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var ln = Z.now(),
        hn = /\?/;
    Z.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, Z.parseXML = function(t) {
        var e, n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new DOMParser, e = n.parseFromString(t, "text/xml")
        } catch (i) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + t), e
    };
    var dn, pn, fn = /#.*$/,
        gn = /([?&])_=[^&]*/,
        mn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        vn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        yn = /^(?:GET|HEAD)$/,
        bn = /^\/\//,
        Cn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        wn = {},
        xn = {},
        _n = "*/".concat("*");
    try {
        pn = location.href
    } catch (Tn) {
        pn = Q.createElement("a"), pn.href = "", pn = pn.href
    }
    dn = Cn.exec(pn.toLowerCase()) || [], Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: pn,
            type: "GET",
            isLocal: vn.test(dn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _n,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? q(q(t, Z.ajaxSettings), e) : q(Z.ajaxSettings, t)
        },
        ajaxPrefilter: M(wn),
        ajaxTransport: M(xn),
        ajax: function(t, e) {
            function n(t, e, n, s) {
                var u, l, v, y, C, x = e;
                2 !== b && (b = 2, a && clearTimeout(a), i = void 0, o = s || "", w.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, n && (y = R(h, w, n)), y = $(h, y, w, u), u ? (h.ifModified && (C = w.getResponseHeader("Last-Modified"), C && (Z.lastModified[r] = C), C = w.getResponseHeader("etag"), C && (Z.etag[r] = C)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = y.state, l = y.data, v = y.error, u = !v)) : (v = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", u ? f.resolveWith(d, [l, x, w]) : f.rejectWith(d, [w, x, v]), w.statusCode(m), m = void 0, c && p.trigger(u ? "ajaxSuccess" : "ajaxError", [w, h, u ? l : v]), g.fireWith(d, [w, x]), c && (p.trigger("ajaxComplete", [w, h]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, r, o, s, a, u, c, l, h = Z.ajaxSetup({}, e),
                d = h.context || h,
                p = h.context && (d.nodeType || d.jquery) ? Z(d) : Z.event,
                f = Z.Deferred(),
                g = Z.Callbacks("once memory"),
                m = h.statusCode || {},
                v = {},
                y = {},
                b = 0,
                C = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!s)
                                for (s = {}; e = mn.exec(o);) s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return b || (t = y[n] = y[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (h.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) m[e] = [m[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || C;
                        return i && i.abort(e), n(0, e), this
                    }
                };
            if (f.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, h.url = ((t || h.url || pn) + "").replace(fn, "").replace(bn, dn[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = Z.trim(h.dataType || "*").toLowerCase().match(pe) || [""], null == h.crossDomain && (u = Cn.exec(h.url.toLowerCase()), h.crossDomain = !(!u || u[1] === dn[1] && u[2] === dn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (dn[3] || ("http:" === dn[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = Z.param(h.data, h.traditional)), j(wn, h, e, w), 2 === b) return w;
            c = h.global, c && 0 === Z.active++ && Z.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !yn.test(h.type), r = h.url, h.hasContent || (h.data && (r = h.url += (hn.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = gn.test(r) ? r.replace(gn, "$1_=" + ln++) : r + (hn.test(r) ? "&" : "?") + "_=" + ln++)), h.ifModified && (Z.lastModified[r] && w.setRequestHeader("If-Modified-Since", Z.lastModified[r]), Z.etag[r] && w.setRequestHeader("If-None-Match", Z.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + _n + "; q=0.01" : "") : h.accepts["*"]);
            for (l in h.headers) w.setRequestHeader(l, h.headers[l]);
            if (h.beforeSend && (h.beforeSend.call(d, w, h) === !1 || 2 === b)) return w.abort();
            C = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[l](h[l]);
            if (i = j(xn, h, e, w)) {
                w.readyState = 1, c && p.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, h.timeout));
                try {
                    b = 1, i.send(v, n)
                } catch (x) {
                    if (!(2 > b)) throw x;
                    n(-1, x)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, n) {
            return Z.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return Z.get(t, void 0, e, "script")
        }
    }), Z.each(["get", "post"], function(t, e) {
        Z[e] = function(t, n, i, r) {
            return Z.isFunction(n) && (r = r || i, i = n, n = void 0), Z.ajax({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        Z.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), Z._evalUrl = function(t) {
        return Z.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function(t) {
            var e;
            return Z.isFunction(t) ? this.each(function(e) {
                Z(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = Z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return this.each(Z.isFunction(t) ? function(e) {
                Z(this).wrapInner(t.call(this, e))
            } : function() {
                var e = Z(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = Z.isFunction(t);
            return this.each(function(n) {
                Z(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, Z.expr.filters.visible = function(t) {
        return !Z.expr.filters.hidden(t)
    };
    var Sn = /%20/g,
        kn = /\[\]$/,
        En = /\r?\n/g,
        Nn = /^(?:submit|button|image|reset|file)$/i,
        Dn = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                e = Z.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(t) || t.jquery && !Z.isPlainObject(t)) Z.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (n in t) H(n, t[n], e, r);
        return i.join("&").replace(Sn, "+")
    }, Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = Z.prop(this, "elements");
                return t ? Z.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !Z(this).is(":disabled") && Dn.test(this.nodeName) && !Nn.test(t) && (this.checked || !Te.test(t))
            }).map(function(t, e) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(En, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(En, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var An = 0,
        In = {},
        On = {
            0: 200,
            1223: 204
        },
        Ln = Z.ajaxSettings.xhr();
    t.ActiveXObject && Z(t).on("unload", function() {
        for (var t in In) In[t]()
    }), K.cors = !!Ln && "withCredentials" in Ln, K.ajax = Ln = !!Ln, Z.ajaxTransport(function(t) {
        var e;
        return K.cors || Ln && !t.crossDomain ? {
            send: function(n, i) {
                var r, o = t.xhr(),
                    s = ++An;
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) o[r] = t.xhrFields[r];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (r in n) o.setRequestHeader(r, n[r]);
                e = function(t) {
                    return function() {
                        e && (delete In[s], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? i(o.status, o.statusText) : i(On[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = e(), o.onerror = e("error"), e = In[s] = e("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (a) {
                    if (e) throw a
                }
            },
            abort: function() {
                e && e()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return Z.globalEval(t), t
            }
        }
    }), Z.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), Z.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(i, r) {
                    e = Z("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), Q.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Wn = [],
        Mn = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Wn.pop() || Z.expando + "_" + ln++;
            return this[t] = !0, t
        }
    }), Z.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, o, s, a = e.jsonp !== !1 && (Mn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Mn.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = Z.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Mn, "$1" + r) : e.jsonp !== !1 && (e.url += (hn.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || Z.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments
        }, i.always(function() {
            t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, Wn.push(r)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || Q;
        var i = se.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = Z.buildFragment([t], e, r), r && r.length && Z(r).remove(), Z.merge([], i.childNodes))
    };
    var jn = Z.fn.load;
    Z.fn.load = function(t, e, n) {
        if ("string" != typeof t && jn) return jn.apply(this, arguments);
        var i, r, o, s = this,
            a = t.indexOf(" ");
        return a >= 0 && (i = Z.trim(t.slice(a)), t = t.slice(0, a)), Z.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && Z.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, s.html(i ? Z("<div>").append(Z.parseHTML(t)).find(i) : t)
        }).complete(n && function(t, e) {
            s.each(n, o || [t.responseText, e, t])
        }), this
    }, Z.expr.filters.animated = function(t) {
        return Z.grep(Z.timers, function(e) {
            return t === e.elem
        }).length
    };
    var qn = t.document.documentElement;
    Z.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, u, c, l = Z.css(t, "position"),
                h = Z(t),
                d = {};
            "static" === l && (t.style.position = "relative"), a = h.offset(), o = Z.css(t, "top"), u = Z.css(t, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (i = h.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(u) || 0), Z.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : h.css(d)
        }
    }, Z.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                Z.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = i && i.ownerDocument;
            return o ? (e = o.documentElement, Z.contains(e, i) ? (typeof i.getBoundingClientRect !== Se && (r = i.getBoundingClientRect()), n = z(o), {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Z.nodeName(t[0], "html") || (i = t.offset()), i.top += Z.css(t[0], "borderTopWidth", !0), i.left += Z.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - Z.css(n, "marginTop", !0),
                    left: e.left - i.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || qn; t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");) t = t.offsetParent;
                return t || qn
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var i = "pageYOffset" === n;
        Z.fn[e] = function(r) {
            return me(this, function(e, r, o) {
                var s = z(e);
                return void 0 === o ? s ? s[n] : e[r] : void(s ? s.scrollTo(i ? t.pageXOffset : o, i ? o : t.pageYOffset) : e[r] = o)
            }, e, r, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(t, e) {
        Z.cssHooks[e] = x(K.pixelPosition, function(t, n) {
            return n ? (n = w(t, e), Fe.test(n) ? Z(t).position()[e] + "px" : n) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        Z.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            Z.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                return me(this, function(e, n, i) {
                    var r;
                    return Z.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? Z.css(e, n, s) : Z.style(e, n, i, s)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Rn = t.jQuery,
        $n = t.$;
    return Z.noConflict = function(e) {
        return t.$ === Z && (t.$ = $n), e && t.jQuery === Z && (t.jQuery = Rn), Z
    }, typeof e === Se && (t.jQuery = t.$ = Z), Z
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function(t) {
    function e(e) {
        var s = e || window.event,
            a = u.call(arguments, 1),
            c = 0,
            h = 0,
            d = 0,
            p = 0,
            f = 0,
            g = 0;
        if (e = t.event.fix(s), e.type = "mousewheel", "detail" in s && (d = -1 * s.detail), "wheelDelta" in s && (d = s.wheelDelta), "wheelDeltaY" in s && (d = s.wheelDeltaY), "wheelDeltaX" in s && (h = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (h = -1 * d, d = 0), c = 0 === d ? h : d, "deltaY" in s && (d = -1 * s.deltaY, c = d), "deltaX" in s && (h = s.deltaX, 0 === d && (c = -1 * h)), 0 !== d || 0 !== h) {
            if (1 === s.deltaMode) {
                var m = t.data(this, "mousewheel-line-height");
                c *= m, d *= m, h *= m
            } else if (2 === s.deltaMode) {
                var v = t.data(this, "mousewheel-page-height");
                c *= v, d *= v, h *= v
            }
            if (p = Math.max(Math.abs(d), Math.abs(h)), (!o || o > p) && (o = p, i(s, p) && (o /= 40)), i(s, p) && (c /= 40, h /= 40, d /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / o), h = Math[h >= 1 ? "floor" : "ceil"](h / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), l.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                f = e.clientX - y.left, g = e.clientY - y.top
            }
            return e.deltaX = h, e.deltaY = d, e.deltaFactor = o, e.offsetX = f, e.offsetY = g, e.deltaMode = 0, a.unshift(e, c, h, d), r && clearTimeout(r), r = setTimeout(n, 200), (t.event.dispatch || t.event.handle).apply(this, a)
        }
    }

    function n() {
        o = null
    }

    function i(t, e) {
        return l.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
    }
    var r, o, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        u = Array.prototype.slice;
    if (t.event.fixHooks)
        for (var c = s.length; c;) t.event.fixHooks[s[--c]] = t.event.mouseHooks;
    var l = t.event.special.mousewheel = {
        version: "3.1.11",
        setup: function() {
            if (this.addEventListener)
                for (var n = a.length; n;) this.addEventListener(a[--n], e, !1);
            else this.onmousewheel = e;
            t.data(this, "mousewheel-line-height", l.getLineHeight(this)), t.data(this, "mousewheel-page-height", l.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var n = a.length; n;) this.removeEventListener(a[--n], e, !1);
            else this.onmousewheel = null;
            t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(e) {
            var n = t(e)["offsetParent" in t.fn ? "offsetParent" : "parent"]();
            return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10)
        },
        getPageHeight: function(e) {
            return t(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    t.fn.extend({
        mousewheel: function(t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        },
        unmousewheel: function(t) {
            return this.unbind("mousewheel", t)
        }
    })
}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout(t)
}()), window.requestAnimationFrame || (window.requestAnimationFrame = function() {
    return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
        return window.setTimeout(t, 1e3 / 60)
    }
}());
var App, AppCore, Application, Availability, Brands, Cartouche, Circle, CircleTransition, Event, Form, Home, Loader, Nav, Normalize, Page, Router, ScreensTransition, Shape, ShapesGenerator, SocialSharing, Square, Transitions, Triangle, Utils, Visibility, W, bind = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    },
    extend = function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var i in e) hasProp.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    },
    hasProp = {}.hasOwnProperty,
    indexOf = [].indexOf || function(t) {
        for (var e = 0, n = this.length; n > e; e++)
            if (e in this && this[e] === t) return e;
        return -1
    };
AppCore = function() {
    function t() {
        this.update = bind(this.update, this), this._onVisibilityChange = bind(this._onVisibilityChange, this), this._onTransitionsEnd = bind(this._onTransitionsEnd, this), this._onTransitionsMiddle = bind(this._onTransitionsMiddle, this), this._onTransitionsStart = bind(this._onTransitionsStart, this), this._onResize = bind(this._onResize, this), this._initEvents = bind(this._initEvents, this), this._destroySection = bind(this._destroySection, this), this._initPage = bind(this._initPage, this), this._initContent = bind(this._initContent, this), console.log("%c# --------------------o Running Desktop", "background: #42e34d; color: #0F0F0F;"), W.init(), this._initContent(), this._initEvents(), this._onResize()
    }
    return t.prototype._initContent = function() {
        return W.time = {
            now: +new Date,
            old: +new Date
        }, this.transitions = new Transitions, this.visibility = new Visibility, this._initPage()
    }, t.prototype._initPage = function() {
        var t;
        return this._destroySection(), this.pageId = Router.singleton.pages.current.replace("part-", ""), this.pageId && (t = App.pages[this.pageId] || Page, this.section = new t({
            pageId: this.pageId
        })), this._onResize()
    }, t.prototype._destroySection = function() {
        return this.section && this.section.destroy(), this.section = void 0
    }, t.prototype._initEvents = function() {
        return W.window.on("resize", this._onResize), $(this.transitions).on(Transitions.START, this._onTransitionsStart).on(Transitions.MIDDLE, this._onTransitionsMiddle).on(Transitions.END, this._onTransitionsEnd)
    }, t.prototype._onResize = function() {
        return W.sw = screen.width, W.sh = screen.height, W.ww = W.window.width(), W.wh = W.window.height(), this.section && this.section.resize ? this.section.resize() : void 0
    }, t.prototype._onTransitionsStart = function() {}, t.prototype._onTransitionsMiddle = function() {
        return this._initPage()
    }, t.prototype._onTransitionsEnd = function() {}, t.prototype._onVisibilityChange = function() {}, t.prototype.update = function() {
        return W.time.now = +new Date, W.time.delta = (W.time.now - W.time.old) / 1e3, W.time.old = W.time.now, W.scrollTop.real = W.window.scrollTop(), W.scrollTop.calc += .1 * (W.scrollTop.real - W.scrollTop.calc), this.section && this.section.update ? this.section.update() : void 0
    }, t
}(), $(function() {
    var t, e;
    return t = new App, (e = function() {
        return t.update(), window.requestAnimationFrame(e)
    })()
}), Event = function() {
    function t() {}
    return t.MOUSEDOWN = $("body").hasClass("tablet") ? "touchstart" : "mousedown", t.MOUSEUP = $("body").hasClass("tablet") ? "touchend" : "mouseup", t.MOUSEMOVE = $("body").hasClass("tablet") ? "touchmove" : "mousemove", t.CLICK = $("body").hasClass("tablet") ? "touchstart" : "click", t.ENTER = $("body").hasClass("tablet") ? "touchstart" : "mouseenter", t.KEYDOWN = "keydown", t.WHEEL = "mousewheel", t.LOADED = "loaded", t.STEPS = "steps", t.SUBMIT = "submit", t
}(), Loader = function() {
    function t(t) {
        this._onLoad = bind(this._onLoad, this);
        var e;
        this.container = t.container, this.each = t.each, this.complete = t.complete, e = this.container.find("img").filter(function() {
            return "" === this.getAttribute("src")
        }), this.imgLength = e.length, this.imgInc = 0, this.steps = 0, this.empty = !1, e.length || (this.empty = !0, this.complete && this.complete()), e.each(function(t) {
            return function(e, n) {
                var i;
                return i = n.getAttribute("data-src"), img.complete ? t._onLoad(n) : n.onload = t._onLoad(n), n.src = i
            }
        }(this))
    }
    return t.prototype._onLoad = function(t) {
        return this.imgInc++, this.steps = this.imgInc / this.imgLength * 100, this.each && this.each(t), this.imgInc === this.imgLength && this.complete ? this.complete() : void 0
    }, t
}(), Page = function() {
    function t(t) {
        this.destroy = bind(this.destroy, this), this.update = bind(this.update, this), this.resize = bind(this.resize, this), this._initEvents = bind(this._initEvents, this), this._initContent = bind(this._initContent, this), this.pageId = t.pageId, console.log("%c# --------------------o Initialize Class " + this.pageId, "background: #e1e342; color: #0F0F0F;"), this._initContent(), this._initEvents()
    }
    return t.prototype._initContent = function() {
        return this.container = $("#part-" + this.pageId.charAt(0).toLowerCase() + this.pageId.slice(1)), new Loader({
            container: this.container
        }), this._navColor = "white"
    }, t.prototype._initEvents = function() {}, t.prototype.resize = function() {}, t.prototype.update = function() {
        if (void 0 !== this._whenToChangeNavColor)
            if (W.scrollTop.real > this._whenToChangeNavColor) {

                if ("white" === this._navColor) 
                	{
                		return Nav.singleton.setColor("dark"), this._navColor = "dark"
                	}
            } else if ("dark" === this._navColor){
            	return Nav.singleton.setColor(), this._navColor = "white"
            } 
    }, t.prototype.destroy = function() {
        var t;
        return t = this.constructor.name, console.log("%c# --------------------o Destroy Class " + t, "background: #e3b042; color: #0F0F0F;")
    }, t
}(), Router = function() {
    function t() {
        this.backCall = bind(this.backCall, this), this.cache = {}, this.container = $(".ajaxContainer"), this.current = this.container.attr("id"), this.headTitle = $("title"), this.pages = {
            prev: "",
            current: this.container.attr("id")
        }, this.requestInProgress = !1, this.fromCache = !1, this.fromNativeNav = !1, this._initEvents(), this.initCache(), t.singleton = this
    }
    return t.CALLSTART = "callstart", t.CALLEND = "callend", t.CALLERROR = "callerror", t.INITIALIZE = "initialize", t.CLICK = "click", t.singleton, t.prototype.initCache = function() {
        return this.href = document.location.pathname, this.content = this.container, this.caching()
    }, t.prototype._initEvents = function() {
        return $(document).on("click", "a", function(e) {
            return function(n) {
                return e.elm = $(n.currentTarget), e.href = e.elm.attr("href"), e.checkRequestAvailability(), e.isRequestAvailable && e.getContent(), e.isTargetSet || n.preventDefault(), e.isTargetSet ? void 0 : $(e).trigger(t.CLICK)
            }
        }(this)), $(window).on("popstate", function(t) {
            return function(e) {
                return document.location.pathname.split("#")[0] !== t.href ? (t.backCall(), e.preventDefault()) : void 0
            }
        }(this))
    }, t.prototype.checkRequestAvailability = function() {
        return this.isRequestAvailable = !0, this.isTargetSet = !1, this.areUrlsMatching() && (this.isRequestAvailable = !1), this.requestInProgress && (this.isRequestAvailable = !1), this.elm.attr("target") ? (this.isTargetSet = !0, this.isRequestAvailable = !1) : void 0
    }, t.prototype.areUrlsMatching = function() {
        var t, e, n;
        return n = this.href, t = document.location.pathname, e = document.location.href, "/" === n.substr(-1) && (n = n.substr(0, n.length - 1)), "/" === e.substr(-1) && (e = e.substr(0, e.length - 1), t = t.substr(0, t.length - 1)), n === t || n === e ? !0 : !1
    }, t.prototype.backCall = function() {
        return this.fromNativeNav = !0, document.location.pathname === this.href ? window.history.go(-1) : (this.href = document.location.pathname, this.getContent())
    }, t.prototype.getContent = function() {
        return this.pages.prev = this.pages.current, this.requestInProgress = !0, $(this).trigger(t.CALLSTART), this.cache[this.href] ? (this.fromCache = !0, this.content = this.cache[this.href].content.clone(), this.title = this.cache[this.href].title, this.requestSucceeded()) : (this.fromCache = !1, this.request())
    }, t.prototype.request = function() {
        return this.ajaxRequest && 4 !== this.ajaxRequest && this.ajaxRequest.abort(), this.ajaxRequest = $.ajax({
            url: this.href,
            success: function(t) {
                return function(e) {
                    return t.ajaxResponse = e, t.content = $(e).filter(".ajaxContainer"), 0 === t.content.length && (t.content = $(e).find(".ajaxContainer")), t.title = $(e).filter("title").text(), t.requestSucceeded()
                }
            }(this),
            complete: function() {
                return function() {}
            }(this),
            error: function(e) {
                return function() {
                    return $(e).trigger(t.CALLERROR)
                }
            }(this)
        })
    }, t.prototype.requestSucceeded = function() {
        return this.pages.current = this.content.attr("id"), this.changeTitle(), this.caching(), this.fromNativeNav === !1 && this.changeUrl(), this.fromNativeNav = !1, $(this).trigger(t.CALLEND)
    }, t.prototype.changeTitle = function() {
        return this.headTitle.text(this.title)
    }, t.prototype.caching = function() {
        return this.cache[this.href] = {
            content: this.content.clone(),
            title: this.title
        }
    }, t.prototype.changeUrl = function(t) {
        var e, n;
        return t && (this.href = t), n = {}, e = this.href.split(window.location.host)[1], e && (e = e.substr(4)), window.history.pushState ? this.pages.current === this.pages.prev ? window.history.replaceState(n, null, this.href) : window.history.pushState(n, null, this.href) : window.location.hash = e
    }, t
}(), SocialSharing = function() {
    function t() {
        this._onLinkClick = bind(this._onLinkClick, this), this._initEvents = bind(this._initEvents, this), this.links = $(".social-link"), this._initEvents()
    }
    return t.prototype._initEvents = function() {
        return $(document).on(Event.CLICK, ".social-link", this._onLinkClick)
    }, t.prototype._onLinkClick = function(t) {
        var e, n, i, r, o, s, a;
        return t.preventDefault(), i = $(t.currentTarget).attr("href"), s = 800, e = 500, n = W.ww / 2 - (s / 2 + 10), o = W.wh / 2 - (e / 2 + 50), r = a = "status=no,height=" + e + ",width=" + s + ",resizable=yes,left=" + n + ",top=" + o + ",screenX=" + n + ",screenY=" + o + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no", window.open(i, "", r)
    }, t
}(), Transitions = function() {
    function t() {
        this._defaultIn = bind(this._defaultIn, this), this._defaultOut = bind(this._defaultOut, this), this._transitionIn = bind(this._transitionIn, this), this._transitionOut = bind(this._transitionOut, this), this._onRouterEnd = bind(this._onRouterEnd, this), this._onRouterStart = bind(this._onRouterStart, this), this._onRouterClick = bind(this._onRouterClick, this), this._initEvents = bind(this._initEvents, this), this.router = new Router, this._transitionInDelay = 0, this.transitionsWhenCallFinished = !0, this._initEvents()
    }
    return t.START = "callstart", t.END = "callend", t.MIDDLE = "callmiddle", t.prototype._initEvents = function() {
        return $(this.router).on(Router.CLICK, this._onRouterClick).on(Router.CALLSTART, this._onRouterStart).on(Router.CALLEND, this._onRouterEnd)
    }, t.prototype._onRouterClick = function() {}, t.prototype._onRouterStart = function() {
        return this.transitionsWhenCallFinished !== !0 ? this._transitionOut() : void 0
    }, t.prototype._onRouterEnd = function() {
        var t;
        return this.transitionsWhenCallFinished === !0 ? (t = "_" + this.router.pages.prev + "To" + this.router.pages.current.charAt(0).toUpperCase() + this.router.pages.current.slice(1), this[t] ? this[t]() : (this._transitionOut(), setTimeout(function(t) {
            return function() {
                return t._transitionIn()
            }
        }(this), this._transitionInDelay))) : this._transitionIn()
    }, t.prototype._transitionOut = function() {
        var t;
        return t = "_" + this.router.pages.prev + "Out", this[t] ? this[t]() : this._defaultOut()
    }, t.prototype._transitionIn = function() {
        var t;
        return t = "_" + this.router.pages.current + "In", $(window).scrollTop(0), this[t] ? this[t]() : this._defaultIn()
    }, t.prototype._defaultOut = function() {
        return this.container = $(".ajaxContainer"), this.router.requestInProgress = !0, this.container.addClass("removed"), this.container[0].offsetHeight, $(this).trigger(t.START)
    }, t.prototype._defaultIn = function() {
        var e, n;
        return n = $(".ajaxContainer"), e = this.router.content, n.eq(0).after(e), n.remove(), e.addClass("added"), e[0].offsetHeight, e.removeClass("added"), this.sectionId = this.router.pages.current, $(this).trigger(t.MIDDLE), this.router.requestInProgress = !1, $(this).trigger(t.END)
    }, t
}(), Visibility = function() {
    function t() {
        this._onVisibilityChange = bind(this._onVisibilityChange, this), this._initEvents = bind(this._initEvents, this), t.singleton = this, void 0 !== typeof document.hidden ? (this.hidden = "hidden", this.visibilityChange = "visibilitychange") : void 0 !== typeof document.mozHidden ? (this.hidden = "mozHidden", this.visibilityChange = "mozvisibilitychange") : void 0 !== typeof document.msHidden ? (this.hidden = "msHidden", this.visibilityChange = "msvisibilitychange") : void 0 !== typeof document.webkitHidden && (this.hidden = "webkitHidden", this.visibilityChange = "webkitvisibilitychange"), this._initEvents()
    }
    return t.ON = "vis_on", t.OFF = "vis_off", t.prototype._initEvents = function() {
        return $(document).on(this.visibilityChange, this._onVisibilityChange)
    }, t.prototype._onVisibilityChange = function() {
        return document[this.hidden] === !0 ? $(this).trigger(t.OFF) : $(this).trigger(t.ON)
    }, t
}(), W = function() {
    function t() {}
    return t.init = function() {
        return t.window = $(window), t.body = $("body"), t.device = $("body").attr("class"), t.ww = $(window).width(), t.wh = $(window).height(), t.sw = screen.width, t.sh = screen.height, t.scrollTop = {
            real: 0,
            calc: 0
        }, t.isMobile = navigator.userAgent.toLowerCase().match("android|iphone") ? !0 : !1
    }, t
}(), Normalize = function() {
    function t() {}
    return t.transform = function(t, e) {
        return t ? (t.style.transform = e, t.style.webkitTransform = e, t.style.mozTransform = e) : void 0
    }, t.transformOrigin = function(t) {
        return t ? (t.style.transformOrigin = transform, t.style.webkitTransformOrigin = transform, t.style.mozTransformOrigin = transform) : void 0
    }, t
}(), Utils = function() {
    function t() {}
    return t.getCoverSizeImage = function(t, e, n, i) {
        var r, o, s, a, u, c;
        return c = t, a = e, s = n || W.ww, r = i || W.wh, u = c / a, o = s / r, u > o ? {
            width: r * u,
            height: r,
            top: 0,
            left: .5 * -(r * u - s)
        } : {
            width: s,
            height: s / u,
            top: .5 * -(s / u - r),
            left: 0
        }
    }, t.getContainSizeImage = function(t, e, n, i) {
        var r, o, s, a, u, c;
        return c = t, a = e, s = n || W.ww, r = i || W.wh, u = c / a, o = s / r, u > o ? {
            width: s,
            height: s / u,
            top: .5 * (r - s / u),
            left: 0
        } : {
            width: r * u,
            height: r,
            top: 0,
            left: .5 * (s - r * u)
        }
    }, t.clearTimers = function(t) {
        return $.each(t, function(t, e) {
            return clearTimeout(e)
        })
    }, t.hexToRgb = function(t) {
        var e;
        return e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t), e ? {
            r: parseInt(e[1], 16),
            g: parseInt(e[2], 16),
            b: parseInt(e[3], 16)
        } : null
    }, t.getSign = function() {
        return Math.random() < .5 ? -1 : 1
    }, t
}(), CircleTransition = function() {
    function t() {
        this.resize = bind(this.resize, this), this.launch = bind(this.launch, this), this._initContent = bind(this._initContent, this), this.container = $(".transition-container"), this._initContent()
    }
    return t.prototype._initContent = function() {
        return this.circle = this.container.children("div"), this.resize()
    }, t.prototype.launch = function() {
        return this.container.css("display", "block"), this.container[0].offsetHeight, this.circle.addClass("displayed"), setTimeout(function(t) {
            return function() {
                return t.container.css("display", "none"), t.circle.removeClass("displayed")
            }
        }(this), 1e3), this.resize()
    }, t.prototype.resize = function() {
        return this.startPos = {
            top: .5 * W.ww,
            left: W.wh - 140
        }, this.size = (W.wh - 140) * Math.sqrt(2) * 2, this.circle.css({
            width: this.size,
            height: this.size,
            top: W.wh - 140 - .5 * this.size,
            left: .5 * (W.ww - this.size - 15)
        })
    }, t
}(), Form = function() {
    function t(t) {
        this._onInputBlur = bind(this._onInputBlur, this), this._onInputFocus = bind(this._onInputFocus, this), this._onInputClick = bind(this._onInputClick, this), this._initEvents = bind(this._initEvents, this), this._initContent = bind(this._initContent, this), this.container = t.container, this._initContent(), this._initEvents()
    }
    return t.prototype._initContent = function() {
        return this.inputsDom = this.container.find(".input"), this.inputs = this.container.find("input[type=text]")
    }, t.prototype._initEvents = function() {
        return this.inputsDom.on(Event.CLICK, this._onInputClick), this.inputs.on("focus", this._onInputFocus).on("blur", this._onInputBlur)
    }, t.prototype._onInputClick = function(t) {
        var e;
        return e = $(t.currentTarget), e.addClass("filled"), e.find("input").focus()
    }, t.prototype._onInputFocus = function(t) {
        var e;
        return e = $(t.currentTarget), e.parent().addClass("filled")
    }, t.prototype._onInputBlur = function(t) {
        var e;
        return e = $(t.currentTarget), "" === e.val() ? e.parent().removeClass("filled") : void 0
    }, t
}(), ScreensTransition = function() {
    function t() {
        this.destroy = bind(this.destroy, this), this.getCurrentIndex = bind(this.getCurrentIndex, this), this._onNavItemClick = bind(this._onNavItemClick, this), this._onScrollButtonClick = bind(this._onScrollButtonClick, this), this._onTouchEnd = bind(this._onTouchEnd, this), this._onWheel = bind(this._onWheel, this), this._changeScreen = bind(this._changeScreen, this), this._getIndexScreenAtScroll = bind(this._getIndexScreenAtScroll, this), this._prevScreen = bind(this._prevScreen, this), this._nextScreen = bind(this._nextScreen, this), this._initEvents = bind(this._initEvents, this), this._initContent = bind(this._initContent, this), this._initContent(), this._initEvents()
    }
    return t.CHANGED = "changed", t.prototype._initContent = function() {
        return this.container = $(".screens-container"), this.screens = this.container.find(".screen"), this.scrollButton = $(".scroll-button"), this.footer = $(".main-footer"), this.header = $(".main-header"), this.nav = $(".screens-nav"), this.navItems = this.nav.find("li"), this.currentScreenIndex = 0, this.prevScreenIndex = 0, this.currentScreenIndex = 0, window.scrollTo(0, 0), this.circleTransition = new CircleTransition, this.container.addClass("no-transition"), this.container[0].offsetHeight, this.container.removeClass("no-transition"), setTimeout(function(t) {
            return function() {
                return t._changeScreen()
            }
        }(this), 300)
    }, t.prototype._initEvents = function() {
        return W.isMobile === !1 ? W.body.on(Event.WHEEL, this._onWheel) : W.body.on("touchmove", this._onTouchEnd).on("touchend", this._onTouchEnd), this.navItems.on(Event.CLICK, this._onNavItemClick), this.scrollButton.on(Event.CLICK, this._onScrollButtonClick)
    }, t.prototype._nextScreen = function() {
        return this.currentScreenIndex++, this.currentScreenIndex > 5 ? this.currentScreenIndex = 5 : this._changeScreen()
    }, t.prototype._prevScreen = function() {
        return this.currentScreenIndex--, this.currentScreenIndex < 0 ? this.currentScreenIndex = 0 : this._changeScreen()
    }, t.prototype._getIndexScreenAtScroll = function() {
        return this.prevScreenIndex = this.currentScreenIndex, this.currentScreenIndex = ~~((W.window.scrollTop() + .5 * W.wh) / W.wh), this.currentScreenIndex !== this.prevScreenIndex ? this._changeScreen() : void 0
    }, t.prototype._changeScreen = function() {
        var e;
        return e = this.currentScreenIndex, W.isMobile === !1 && (0 === e ? this.scrollButton.removeClass("hidden") : this.scrollButton.addClass("hidden"), e === this.screens.length ? (e = this.screens.length - 1, this.footer.addClass("displayed"), Normalize.transform(this.container[0], "translate3d(0, -" + this.footer.outerHeight() + "px, 0)")) : (this.footer.removeClass("displayed no-transition"), Normalize.transform(this.container[0], "translate3d(0, 0, 0)")), this.screens.each(function() {
            return function(t, n) {
                return n = $(n), e > t ? n.removeClass("bottom displayed").addClass("top") : t > e ? n.removeClass("top displayed").addClass("bottom") : n.removeClass("top bottom").addClass("displayed")
            }
        }(this)), this.navItems.eq(this.currentScreenIndex).addClass("active").siblings().removeClass("active")), W.isMobile === !1 && (W.wheelBlocked = !0, setTimeout(function() {
            return function() {
                return W.wheelBlocked = !1
            }
        }(this), 1500)), $(this).trigger(t.CHANGED)
    }, t.prototype._onWheel = function(t, e) {
        return W.wheelBlocked === !0 || Nav.singleton.isMenuOpened() === !0 ? !1 : 0 > e ? this._nextScreen() : this._prevScreen()
    }, t.prototype._onTouchEnd = function() {
        return this._getIndexScreenAtScroll()
    }, t.prototype._onScrollButtonClick = function() {
        return this._nextScreen()
    }, t.prototype._onNavItemClick = function(t) {
        return this.currentScreenIndex = $(t.currentTarget).index(), this._changeScreen()
    }, t.prototype.getCurrentIndex = function() {
        return this.currentScreenIndex
    }, t.prototype.destroy = function() {
        return W.isMobile === !1 ? W.body.off(Event.WHEEL, this._onWheel) : W.body.off("touchmove", this._onTouchEnd).off("touchend", this._onTouchEnd), this.navItems.off(Event.CLICK, this._onNavItemClick), this.scrollButton.off(Event.CLICK, this._onScrollButtonClick)
    }, t
}(), Shape = function() {
    function t(t) {
        this.draw = bind(this.draw, this);
        var e, n;
        this.container = t.container, n = t.y, this.color = t.color, this.size = 20 + ~~(50 * Math.random()), this.color = this.color, this.isRemoved = !1, this.percX = 0, this.y = "center" === n ? .5 * W.wh : W.wh - 150, this.rotation = 180 * Math.random(), this.scale = .5, e = Utils.getSign(), this.destPercX = Utils.getSign(), this.destY = this.y + .25 * W.wh * Math.random() * Utils.getSign(), this.destRotation = this.rotation + 360 * Math.random() * Utils.getSign(), this.prevX = this.destX, this.ease = .001 * (10 + 30 * Math.random()), this.elm = $('<span style="opacity:0;">')
    }
    return t.prototype.draw = function() {
        var t;
        return this.prevX = this.percX, this.percX += (this.destPercX - this.percX) * this.ease, this.y += (this.destY - this.y) * this.ease, this.scale += .05 * (1 - this.scale), this.rotation += (this.destRotation - this.rotation) * this.ease, t = .5 * W.ww + (this.percX * W.ww * .5 + this.size * this.destPercX * 2) - this.size, this.isRemoved !== !0 ? this.prevX === this.percX ? (this.elm.remove(), this.isRemoved = !0, void 0) : (Normalize.transform(this.elm[0], "translate3d(" + t + "px, " + this.y + "px, 0) rotate(" + this.rotation + "deg) scale(" + this.scale + ")"), this.elm[0].style.opacity = this.scale) : void 0
    }, t
}(), ShapesGenerator = function() {
    function t(t) {
        this.update = bind(this.update, this), this.resize = bind(this.resize, this), this.setColor = bind(this.setColor, this), this.stop = bind(this.stop, this), this.start = bind(this.start, this), this._render = bind(this._render, this), this._initContent = bind(this._initContent, this), this.container = t.container, this.shapesTypes = t.shapesTypes, this.y = t.y, this.filled = t.filled, this.stroked = t.stroked, this.color = t.color, this._initContent()
    }
    return t.prototype._initContent = function() {
        return this.shapes = [], this.playing = !1
    }, t.prototype._render = function() {
        var t, e, n, i, r, o, s, a;
        for (a = [], t = e = 0, i = this.shapes.length; i >= 0 ? i > e : e > i; t = i >= 0 ? ++e : --e) s = this.shapes[t], s.draw(), s.isRemoved === !0 && a.push(t);
        for (o = [], t = n = 0, r = a.length; r >= 0 ? r > n : n > r; t = r >= 0 ? ++n : --n) o.push(this.shapes.splice(a[t], 1));
        return o
    }, t.prototype.start = function() {
        return this.container.html(""), clearInterval(this.interval), this.interval = setInterval(function(t) {
            return function() {
                return t.shapes.push(new(window[t.shapesTypes[~~(Math.random() * t.shapesTypes.length)]])({
                    container: t.container,
                    y: t.y,
                    color: t.color
                }))
            }
        }(this), 200), this.playing = !0
    }, t.prototype.stop = function() {
        return clearInterval(this.interval), this.playing = !1
    }, t.prototype.setColor = function(t) {
        return this.color = t
    }, t.prototype.resize = function() {
        return this.container.css({
            width: W.ww,
            height: W.wh
        })
    }, t.prototype.update = function() {
        return this._render()
    }, t
}(), Application = function(t) {
    function e() {
        this.destroy = bind(this.destroy, this), this.update = bind(this.update, this), this.resize = bind(this.resize, this), this._onScreensTransitionChanged = bind(this._onScreensTransitionChanged, this), this._onVisibilityOff = bind(this._onVisibilityOff, this), this._onVisibilityOn = bind(this._onVisibilityOn, this), this._displayScreenContent = bind(this._displayScreenContent, this), this._prepareContent = bind(this._prepareContent, this), this._initEvents = bind(this._initEvents, this), this._initContent = bind(this._initContent, this), e.__super__.constructor.apply(this, arguments)
    }
    return extend(e, t), e.prototype._initContent = function() {
        return e.__super__._initContent.apply(this, arguments), this.screensContainer = $(".screens-container"), this.screens = this.screensContainer.children(".screen"), this.iphoneContainer = $(".iphone-container"), this.iphonesBodies = this.iphoneContainer.children("img"), this.videos = this.iphoneContainer.find("video"), this.nav = this.container.find(".screens-nav"), W.isMobile === !1 ? (this.introShapes = new ShapesGenerator({
            container: $(".intro-shapes"),
            shapesTypes: ["Circle", "Square", "Triangle", "Cartouche"],
            y: "center",
            color: "#FFFFFF"
        }), this.introShapes.start(), this.screensShapes = new ShapesGenerator({
            container: $(".screens-shapes"),
            shapesTypes: ["Circle", "Square", "Triangle"],
            y: W.isMobile === !0 ? "center" : "bottom"
        }), this.colors = ["#c42846", "#ff9800", "#00a7e7"], this.screensTransition = new ScreensTransition, this._prepareContent()) : void 0
    }, e.prototype._initEvents = function() {
        return W.isMobile === !1 ? ($(Visibility.singleton).on(Visibility.ON, this._onVisibilityOn).on(Visibility.OFF, this._onVisibilityOff), $(this.screensTransition).on(ScreensTransition.CHANGED, this._onScreensTransitionChanged)) : void 0
    }, e.prototype._prepareContent = function() {
        return this.screens.find("h3").each(function() {
            return function(t, e) {
                var n, i, r, o, s, a, u;
                if (n = $(e), u = n.text().split(" "), s = n.attr("data-appear")) {
                    for (s = JSON.parse(s), i = "<div><span>", r = o = 0, a = u.length; a >= 0 ? a > o : o > a; r = a >= 0 ? ++o : --o) indexOf.call(s, r) >= 0 && (i += "</span><i></i></div><div><span>"), i += u[r] + " ";
                    return i += "</span><i></i></div>", n.html(i)
                }
            }
        }(this))
    }, e.prototype._displayScreenContent = function(t) {
        var e, n;
        return this.iphonesBodies.removeClass("displayed"), t > 0 && 4 > t ? (e = this.screens.eq(t).find("h3"), n = e.find("div"), n.removeClass("displayed"), e[0].offsetHeight, n.each(function() {
            return function(t, e) {
                return setTimeout(function() {
                    return $(e).addClass("displayed")
                }, 300 + 200 * t)
            }
        }(this)), this.iphonesBodies.eq(t - 1).addClass("displayed")) : void 0
    }, e.prototype._onVisibilityOn = function() {
        var t;
        return t = this.screensTransition.getCurrentIndex(), 0 === t && this.introShapes ? this.introShapes.start() : t > 0 && 4 > t && this.screensShapes ? this.screensShapes.start() : void 0
    }, e.prototype._onVisibilityOff = function() {
        return this.introShapes && this.introShapes.stop(), this.screensShapes ? this.screensShapes.stop() : void 0
    }, e.prototype._onScreensTransitionChanged = function() {
        var t;
        return t = this.screensTransition.getCurrentIndex(), this.introShapes && (0 === t ? this.introShapes.start() : this.introShapes.stop()), this.screensShapes && (t > 0 && 4 > t ? (this.screensShapes.playing === !1 && this.screensShapes.start(), this.screensShapes.setColor(this.screens.eq(t).css("border-color"))) : this.screensShapes.stop()), this.videos.removeClass("displayed"), this.videos.each(function() {
            return function(e, n) {
                return e !== t - 1 ? n.pause() : ($(n).addClass("displayed"), n.currentTime = 0, n.play())
            }
        }(this)), W.isMobile === !1 && (0 === t || t > 2 ? (Nav.singleton.setColor(), this.nav.removeClass("dark")) : (Nav.singleton.setColor("dark"), this.nav.addClass("dark"))), this._displayScreenContent(t)
    }, e.prototype.resize = function() {
        return this.introShapes && this.introShapes.resize(), this.screensShapes && this.screensShapes.resize(), this.circleTransition && this.circleTransition.resize(), W.isMobile === !1 ? this.screensContainer.css({
            width: W.ww,
            height: W.wh
        }) : void 0
    }, e.prototype.update = function() {
        return this.introShapes && this.introShapes.update(), this.screensShapes ? this.screensShapes.update() : void 0
    }, e.prototype.destroy = function() {
        return W.isMobile === !1 ? ($(Visibility.singleton).off(Visibility.ON, this._onVisibilityOn).off(Visibility.OFF, this._onVisibilityOff), $(this.screensTransition).off(ScreensTransition.CHANGED, this._onScreensTransitionChanged), this.screensTransition.destroy()) : void 0
    }, e
}(Page), Availability = function(t) {
    function e() {
        this.destroy = bind(this.destroy, this), this.update = bind(this.update, this), this.resize = bind(this.resize, this), this._changeCountryDot = bind(this._changeCountryDot, this), this._initCountriesDots = bind(this._initCountriesDots, this), this._initContent = bind(this._initContent, this), e.__super__.constructor.apply(this, arguments)
    }
    return extend(e, t), e.prototype._initContent = function() {
        return e.__super__._initContent.apply(this, arguments), this.form = new Form({
            container: this.container.find("form")
        }), this.map = this.container.find(".map"), this.front = this.container.find(".front"), this.title = this.container.find("h1"), this.titleCountries = this.title.find("li"), this.countryDots = this.container.find(".dots").children(), this.currentCountryDotIndex = 0, this._initCountriesDots(), this._changeCountryDot(), this.countryInterval = setInterval(function(t) {
            return function() {
                return t._changeCountryDot()
            }
        }(this), 2e3)
    }, e.prototype._initCountriesDots = function() {
        return this.countryDots.each(function() {
            return function(t, e) {
                var n, i;
                return n = $(e), i = n.attr("data-rotation"), Normalize.transform(e, "rotate(" + i + "deg)")
            }
        }(this))
    }, e.prototype._changeCountryDot = function() {
        var t, e, n;
        return t = this.countryDots.eq(this.currentCountryDotIndex), e = this.titleCountries.eq(this.currentCountryDotIndex), t.addClass("displayed").siblings().removeClass("displayed"), this.currentCountryDotIndex++, e.addClass("displayed").siblings().removeClass("displayed"), n = .5 * e.width(), W.ww < 910 && (n = 0), Normalize.transform(this.title[0], "translate3d(-" + n + "px, 0, 0)"), this.currentCountryDotIndex > this.countryDots.length - 1 ? this.currentCountryDotIndex = 0 : void 0
    }, e.prototype.resize = function() {
        return e.__super__.resize.apply(this, arguments), this._whenToChangeNavColor = this.container.find(".page-header").height() - ~~Nav.singleton.menuButton.css("margin-top").replace("px", "")
    }, e.prototype.update = function() {
        return e.__super__.update.apply(this, arguments), Normalize.transform(this.map[0], "translate3d(0, " + .4 * -W.scrollTop.real + "px, 0)"), Normalize.transform(this.front[0], "translate3d(0, " + .5 * -W.scrollTop.real + "px, 0)")
    }, e.prototype.destroy = function() {
        return e.__super__.destroy.apply(this, arguments), clearInterval(this.countryInterval)
    }, e
}(Page), Brands = function(t) {
    function e() {
        this.update = bind(this.update, this), this.resize = bind(this.resize, this), this._initContent = bind(this._initContent, this), e.__super__.constructor.apply(this, arguments)
    }
    return extend(e, t), e.prototype._initContent = function() {
        return e.__super__._initContent.apply(this, arguments), this.pageHeader = this.container.find(".page-header"), this.video = this.container.find(".header-video"), this.front = this.container.find(".front"), this.title = this.container.find("h1")
    }, e.prototype.resize = function() {
        var t;
        return this.pageHeaderHeight = this.pageHeader.height(), t = Utils.getCoverSizeImage(1280, 720, W.ww, this.pageHeaderHeight), t.top = 0, this.video.css(t), this._whenToChangeNavColor = this.container.find(".part").eq(1).offset().top - ~~Nav.singleton.menuButton.css("margin-top").replace("px", "")
    }, e.prototype.update = function() {
        return e.__super__.update.apply(this, arguments), Normalize.transform(this.video[0], "translate3d(0, " + .4 * W.scrollTop.real + "px, 0)"), Normalize.transform(this.front[0], "translate3d(0, " + .5 * -W.scrollTop.real + "px, 0)")
    }, e
}(Page), Home = function(t) {
    function e() {
        this.destroy = bind(this.destroy, this), this.update = bind(this.update, this), this.resize = bind(this.resize, this), this._onScreensTransitionChanged = bind(this._onScreensTransitionChanged, this), this._onVisibilityOff = bind(this._onVisibilityOff, this), this._onVisibilityOn = bind(this._onVisibilityOn, this), this._animateMobileTruck = bind(this._animateMobileTruck, this), this._prepareContent = bind(this._prepareContent, this), this._initEvents = bind(this._initEvents, this), this._initContent = bind(this._initContent, this), e.__super__.constructor.apply(this, arguments)
    }
    return extend(e, t), e.prototype._initContent = function() {
        return e.__super__._initContent.apply(this, arguments), this.screensContainer = $(".screens-container"), this.screens = this.screensContainer.children(".screen"), this.nav = this.container.find(".screens-nav"), this.videos = this.container.find("video"), W.isMobile === !1 && (this.screensTransition = new ScreensTransition, this.introShapes = new ShapesGenerator({
            container: $(".intro-shapes"),
            shapesTypes: ["Circle", "Square", "Triangle", "Cartouche"],
            y: "center",
            color: "#ffefef"
        }), this.introShapes.start(), this.picsContainer = this.container.find(".pics-container"), this._prepareContent(), this._onScreensTransitionChanged()), W.isMobile === !0 ? this._animateMobileTruck() : void 0
    }, e.prototype._initEvents = function() {
        return W.isMobile === !1 ? ($(Visibility.singleton).on(Visibility.ON, this._onVisibilityOn).on(Visibility.OFF, this._onVisibilityOff), $(this.screensTransition).on(ScreensTransition.CHANGED, this._onScreensTransitionChanged)) : void 0
    }, e.prototype._prepareContent = function() {
        var t, e, n, i, r, o, s, a, u, c, l, h;
        for (l = this.screens.eq(0).find("h1"), c = l.text().split(" "), t = "", e = n = 0, o = c.length; o >= 0 ? o > n : n > o; e = o >= 0 ? ++n : --n) t += "<span>" + c[e] + " </span>";
        for (l.html(t), s = this.screens.eq(1).find(".stars"), a = s.height(), u = s.width(), e = i = 0; 50 > i; e = ++i) h = Math.random() * a | 0, r = Math.random() * u | 0, s.append('<span style="top:' + h + "px;left:" + r + 'px;"></span>');
        return s.find("span").each(function() {
            return function(t, e) {
                var n, i;
                return n = $(e), i = t % 4, setTimeout(function() {
                    return n.addClass("shine star-" + i)
                }, 500 * Math.random())
            }
        }(this))
    }, e.prototype._animateMobileTruck = function() {
        var t;
        return t = this.container.find(".truck"), setTimeout(function() {
            return function() {
                return t.removeClass("no-transition").addClass("braking")
            }
        }(this), 500), setTimeout(function() {
            return function() {
                return t.removeClass("braking").addClass("moving")
            }
        }(this), 3500), setTimeout(function(e) {
            return function() {
                return t.removeClass("moving braking").addClass("no-transition"), e._animateMobileTruck()
            }
        }(this), 6e3)
    }, e.prototype._onVisibilityOn = function() {
        var t;
        return t = this.screensTransition.getCurrentIndex(), 0 === t && this.introShapes ? this.introShapes.start() : void 0
    }, e.prototype._onVisibilityOff = function() {
        return this.introShapes ? this.introShapes.stop() : void 0
    }, e.prototype._onScreensTransitionChanged = function() {
        var t, e;
        return t = this.screensTransition.getCurrentIndex(), this.introShapes && (0 === t ? this.introShapes.start() : this.introShapes.stop()), e = [], 0 === t ? this.picsContainer.removeClass("state-1 state-2 state-3 state-4") : 1 === t ? this.picsContainer.removeClass("state-2 state-3 state-4").addClass("state-1") : 2 === t ? this.picsContainer.removeClass("state-1 state-3 state-4").addClass("state-2") : 3 === t ? this.picsContainer.removeClass("state-1 state-2 state-4").addClass("state-3") : 4 === t && this.picsContainer.removeClass("state-1 state-2").addClass("state-4"), W.isMobile === !1 && (3 !== t ? (Nav.singleton.setColor(), this.nav.removeClass("dark")) : (Nav.singleton.setColor("dark"), this.nav.addClass("dark"))), this.videos.removeClass("displayed"), this.videos.each(function() {
            return function(e, n) {
                var i;
                return i = $(n).parents(".screen").index(), i === t ? (n.currentTime = 0, n.play()) : (n.currentTime = 0, n.pause())
            }
        }(this))
    }, e.prototype.resize = function() {
        return this.introShapes && this.introShapes.resize(), W.isMobile === !1 ? this.screensContainer.css({
            width: W.ww,
            height: W.wh
        }) : void 0
    }, e.prototype.update = function() {
        return this.introShapes ? this.introShapes.update() : void 0
    }, e.prototype.destroy = function() {
        return W.isMobile === !1 ? ($(Visibility.singleton).off(Visibility.ON, this._onVisibilityOn).off(Visibility.OFF, this._onVisibilityOff), $(this.screensTransition).off(ScreensTransition.CHANGED, this._onScreensTransitionChanged), this.screensTransition.destroy()) : void 0
    }, e
}(Page), Nav = function() {
    function t() {
        this.resize = bind(this.resize, this), this.closeMenu = bind(this.closeMenu, this), this.openMenu = bind(this.openMenu, this), this.isMenuOpened = bind(this.isMenuOpened, this), this.setColor = bind(this.setColor, this), this._onNavOverlayClick = bind(this._onNavOverlayClick, this), this._onMenuButtonClick = bind(this._onMenuButtonClick, this), this._initEvents = bind(this._initEvents, this), this._initContent = bind(this._initContent, this), t.singleton = this, this.container = $(".main-nav"), this._initContent(), this._initEvents()
    }
    return t.prototype._initContent = function() {
        return this.backgroundCircle = this.container.find(".background"), this.menuButton = $(".menu-button"), this.navOverlay = $(".nav-overlay"), this.header = $(".main-header"), this.headerColorUpdated = !1, this._menuOpened = !1, this._menuTimer = void 0, this._savedScrollTop = 0
    }, t.prototype._initEvents = function() {
        return this.menuButton.on(Event.CLICK, this._onMenuButtonClick), this.navOverlay.on(Event.CLICK, this._onNavOverlayClick)
    }, t.prototype._onMenuButtonClick = function() {
        return this._menuOpened === !1 ? this.openMenu() : this.closeMenu()
    }, t.prototype._onNavOverlayClick = function() {
        return this._menuOpened === !0 ? this.closeMenu() : void 0
    }, t.prototype.setColor = function(t) {
        if ($('.pics-container').hasClass('state-3')){
            return this.header.attr("class", "main-header dark");
        } else {
        return this.header.attr("class", "main-header " + t);
        }

    }, t.prototype.isMenuOpened = function() {
        return this._menuOpened
    }, t.prototype.openMenu = function() {
        return this._menuOpened = !0, clearTimeout(this._menuTimer), this._savedScrollTop = W.window.scrollTop(), this.container.css("display", "block"), this.navOverlay.css("display", "block"), this.container[0].offsetHeight, this.container.addClass("displayed"), this.navOverlay.addClass("displayed"), $(".page-container").css({
            position: "fixed",
            top: -this._savedScrollTop
        }), this.menuButton.addClass("active"), this.header.attr("class").match("dark") && (this.headerColorUpdated = !0, this.setColor()), this._menuTimer = setTimeout(function(t) {
            return function() {
                return t.container.addClass("filled")
            }
        }(this), 1e3), window.scrollTo(0, 1), W.wheelBlocked = !0
    }, t.prototype.closeMenu = function() {
        return this._menuOpened = !1, clearTimeout(this._menuTimer), this.container.removeClass("displayed filled"), this.navOverlay.removeClass("displayed"), this.menuButton.removeClass("active"), $(".page-container").css({
            position: "relative",
            top: 0
        }), this.container[0].offsetHeight, window.scrollTo(0, this._savedScrollTop), this._menuTimer = setTimeout(function(t) {
            return function() {
                return t.container.css("display", "none"), t.navOverlay.css("display", "none")
            }
        }(this), 1e3), this.headerColorUpdated === !0 && (this.headerColorUpdated = !1, this.setColor("dark")), W.wheelBlocked = !1
    }, t.prototype.resize = function() {
        var e, n, i, r, o;
        return e = .5 * this.menuButton.outerWidth() + this.menuButton.position().left, n = .5 * this.menuButton.outerHeight() + ~~t.singleton.menuButton.css("margin-top").replace("px", ""), r = Math.max(this.container.width() - (W.ww - e), W.ww - e), o = W.wh - n, this.size = 2 * Math.sqrt(r * r + o * o), W.isMobile === !0 ? (i = 300, this.size = (this.container.height() - 30) * Math.sqrt(2) * 2, this.container.css({
            width: 300,
            "min-height": W.wh
        })) : this.container.css({
            width: .5 * (W.ww - 1260) + 170,
            height: W.wh
        }), this.backgroundCircle.css({
            width: this.size,
            height: this.size,
            top: .5 * -this.size + 89,
            left: W.ww > 1550 ? .5 * -this.size + 77 : .5 * -this.size + 320 - 94
        })
    }, t
}(), Cartouche = function(t) {
    function e() {
        e.__super__.constructor.apply(this, arguments), this.elm = $("<span>"), this.elm.addClass("cartouche"), this.elm.css({
            width: this.size,
            height: .8 * this.size,
            border: .15 * this.size + "px solid " + this.color,
            "border-bottom-width": .5 * this.size,
            opacity: 0
        }), this.container.append(this.elm)
    }
    return extend(e, t), e
}(Shape), Circle = function(t) {
    function e() {
        e.__super__.constructor.apply(this, arguments), this.elm = $("<span>"), this.elm.addClass("circle"), this.elm.css({
            width: this.size,
            height: this.size,
            background: this.color,
            opacity: 0
        }), this.container.append(this.elm)
    }
    return extend(e, t), e
}(Shape), Square = function(t) {
    function e() {
        e.__super__.constructor.apply(this, arguments), this.elm = $("<span>"), this.elm.css({
            width: this.size,
            height: this.size,
            background: this.color,
            opacity: 0
        }), this.container.append(this.elm)
    }
    return extend(e, t), e
}(Shape), Triangle = function(t) {
    function e() {
        e.__super__.constructor.apply(this, arguments), this.elm = $("<span>"), this.elm.addClass("triangle"), this.elm.css({
            "border-width": "0 " + .66 * this.size + "px " + this.size + "px " + .5 * this.size + "px",
            "border-color": "transparent transparent " + this.color + " transparent",
            opacity: 0
        }), this.container.append(this.elm)
    }
    return extend(e, t), e
}(Shape), App = function(t) {
    function e() {
        return this.update = bind(this.update, this), this._onResize = bind(this._onResize, this), this._onRouterClick = bind(this._onRouterClick, this), this._onTransitionsStart = bind(this._onTransitionsStart, this), this._initPage = bind(this._initPage, this), this._initEvents = bind(this._initEvents, this), this._initContent = bind(this._initContent, this), e.__super__.constructor.apply(this, arguments)
    }
    return extend(e, t), e.pages = {
        home: Home,
        application: Application,
        availability: Availability,
        brands: Brands
    }, e.prototype._initContent = function() {
        var t, n, i, r;
        return W.wheelBlocked = !1, this.loader = new Loader({
            container: W.body
        }), this.nav = new Nav, e.__super__._initContent.apply(this, arguments), i = window.navigator.standalone, r = window.navigator.userAgent.toLowerCase(), n = /safari/.test(r), t = /iphone|ipod|ipad/.test(r), !t || i || n ? void 0 : W.body.addClass("webview")
    }, e.prototype._initEvents = function() {
        return e.__super__._initEvents.apply(this, arguments), $(Router.singleton).on(Router.CLICK, this._onRouterClick)
    }, e.prototype._initPage = function() {
        var t;
        return e.__super__._initPage.apply(this, arguments), W.isMobile === !1 ? ("terms" === this.pageId ? Nav.singleton.setColor("dark") : Nav.singleton.setColor(), "home" === (t = this.pageId) || "application" === t ? W.body.css("overflow", "hidden") : W.body.css("overflow", "auto")) : "free" === this.pageId ? Nav.singleton.setColor("blue") : Nav.singleton.setColor()
    }, e.prototype._onTransitionsStart = function() {
        return Nav.singleton.closeMenu(), console.log("ok"), $(".main-footer").removeClass("displayed").addClass("no-transition")
    }, e.prototype._onRouterClick = function() {
        return this.nav.closeMenu()
    }, e.prototype._onResize = function() {
        return e.__super__._onResize.apply(this, arguments), this.nav.resize()
    }, e.prototype.update = function() {
        return e.__super__.update.apply(this, arguments)
    }, e
}(AppCore);