!(function () {
    "use strict";
    var r = function (e) {
            if (null === e) return "null";
            if (e === undefined) return "undefined";
            var t = typeof e;
            return "object" == t && (Array.prototype.isPrototypeOf(e) || (e.constructor && "Array" === e.constructor.name))
                ? "array"
                : "object" == t && (String.prototype.isPrototypeOf(e) || (e.constructor && "String" === e.constructor.name))
                ? "string"
                : t;
        },
        t = function (e) {
            return { eq: e };
        },
        s = t(function (e, t) {
            return e === t;
        }),
        i = function (o) {
            return t(function (e, t) {
                if (e.length !== t.length) return !1;
                for (var n = e.length, r = 0; r < n; r++) if (!o.eq(e[r], t[r])) return !1;
                return !0;
            });
        },
        c = function (e, r) {
            return (
                (n = i(e)),
                (o = function (e) {
                    return (t = e), (n = r), Array.prototype.slice.call(t).sort(n);
                    var t, n;
                }),
                t(function (e, t) {
                    return n.eq(o(e), o(t));
                })
            );
            var n, o;
        },
        u = function (u) {
            return t(function (e, t) {
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (!c(s).eq(n, r)) return !1;
                for (var o = n.length, i = 0; i < o; i++) {
                    var a = n[i];
                    if (!u.eq(e[a], t[a])) return !1;
                }
                return !0;
            });
        },
        l = t(function (e, t) {
            if (e === t) return !0;
            var n = r(e);
            return n === r(t) && (-1 !== ["undefined", "boolean", "number", "string", "function", "xml", "null"].indexOf(n) ? e === t : "array" === n ? i(l).eq(e, t) : "object" === n && u(l).eq(e, t));
        }),
        V = function () {},
        a = function (n, r) {
            return function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return n(r.apply(null, e));
            };
        },
        N = function (e) {
            return function () {
                return e;
            };
        },
        o = function (e) {
            return e;
        };
    function E(r) {
        for (var o = [], e = 1; e < arguments.length; e++) o[e - 1] = arguments[e];
        return function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = o.concat(e);
            return r.apply(null, n);
        };
    }
    var e,
        n,
        f,
        d = function (t) {
            return function (e) {
                return !t(e);
            };
        },
        m = function (e) {
            return function () {
                throw new Error(e);
            };
        },
        p = N(!1),
        k = N(!0),
        g = function () {
            return h;
        },
        h =
            ((e = function (e) {
                return e.isNone();
            }),
            {
                fold: function (e, t) {
                    return e();
                },
                is: p,
                isSome: p,
                isNone: k,
                getOr: (f = function (e) {
                    return e;
                }),
                getOrThunk: (n = function (e) {
                    return e();
                }),
                getOrDie: function (e) {
                    throw new Error(e || "error: getOrDie called on none.");
                },
                getOrNull: N(null),
                getOrUndefined: N(undefined),
                or: f,
                orThunk: n,
                map: g,
                each: V,
                bind: g,
                exists: p,
                forall: k,
                filter: g,
                equals: e,
                equals_: e,
                toArray: function () {
                    return [];
                },
                toString: N("none()"),
            }),
        v = function (n) {
            var e = N(n),
                t = function () {
                    return o;
                },
                r = function (e) {
                    return e(n);
                },
                o = {
                    fold: function (e, t) {
                        return t(n);
                    },
                    is: function (e) {
                        return n === e;
                    },
                    isSome: k,
                    isNone: p,
                    getOr: e,
                    getOrThunk: e,
                    getOrDie: e,
                    getOrNull: e,
                    getOrUndefined: e,
                    or: t,
                    orThunk: t,
                    map: function (e) {
                        return v(e(n));
                    },
                    each: function (e) {
                        e(n);
                    },
                    bind: r,
                    exists: r,
                    forall: r,
                    filter: function (e) {
                        return e(n) ? o : h;
                    },
                    toArray: function () {
                        return [n];
                    },
                    toString: function () {
                        return "some(" + n + ")";
                    },
                    equals: function (e) {
                        return e.is(n);
                    },
                    equals_: function (e, t) {
                        return e.fold(p, function (e) {
                            return t(n, e);
                        });
                    },
                };
            return o;
        },
        U = {
            some: v,
            none: g,
            from: function (e) {
                return null === e || e === undefined ? h : v(e);
            },
        },
        y = function (r) {
            return function (e) {
                return (
                    (n = typeof (t = e)),
                    (null === t
                        ? "null"
                        : "object" == n && (Array.prototype.isPrototypeOf(t) || (t.constructor && "Array" === t.constructor.name))
                        ? "array"
                        : "object" == n && (String.prototype.isPrototypeOf(t) || (t.constructor && "String" === t.constructor.name))
                        ? "string"
                        : n) === r
                );
                var t, n;
            };
        },
        b = function (t) {
            return function (e) {
                return typeof e === t;
            };
        },
        C = function (t) {
            return function (e) {
                return t === e;
            };
        },
        q = y("string"),
        _ = y("object"),
        S = y("array"),
        w = C(null),
        x = b("boolean"),
        R = C(undefined),
        T = function (e) {
            return !(null === (t = e) || t === undefined);
            var t;
        },
        A = b("function"),
        D = b("number"),
        O = Array.prototype.slice,
        B = Array.prototype.indexOf,
        P = Array.prototype.push,
        L = function (e, t) {
            return B.call(e, t);
        },
        I = function (e, t) {
            return -1 < L(e, t);
        },
        M = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                if (t(e[n], n)) return !0;
            }
            return !1;
        },
        F = function (e, t) {
            for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
                var i = e[o];
                r[o] = t(i, o);
            }
            return r;
        },
        $ = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                t(e[n], n);
            }
        },
        z = function (e, t) {
            for (var n = e.length - 1; 0 <= n; n--) {
                t(e[n], n);
            }
        },
        j = function (e, t) {
            for (var n = [], r = 0, o = e.length; r < o; r++) {
                var i = e[r];
                t(i, r) && n.push(i);
            }
            return n;
        },
        H = function (e, t, n) {
            return (
                z(e, function (e) {
                    n = t(n, e);
                }),
                n
            );
        },
        W = function (e, t, n) {
            return (
                $(e, function (e) {
                    n = t(n, e);
                }),
                n
            );
        },
        K = function (e, t) {
            return (function (e, t, n) {
                for (var r = 0, o = e.length; r < o; r++) {
                    var i = e[r];
                    if (t(i, r)) return U.some(i);
                    if (n(i, r)) break;
                }
                return U.none();
            })(e, t, p);
        },
        X = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                if (t(e[n], n)) return U.some(n);
            }
            return U.none();
        },
        Y = function (e, t) {
            return (function (e) {
                for (var t = [], n = 0, r = e.length; n < r; ++n) {
                    if (!S(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
                    P.apply(t, e[n]);
                }
                return t;
            })(F(e, t));
        },
        G = function (e, t) {
            for (var n = 0, r = e.length; n < r; ++n) {
                if (!0 !== t(e[n], n)) return !1;
            }
            return !0;
        },
        J = function (e) {
            var t = O.call(e, 0);
            return t.reverse(), t;
        },
        Q = function (e, t) {
            return j(e, function (e) {
                return !I(t, e);
            });
        },
        Z = function (e) {
            return 0 === e.length ? U.none() : U.some(e[0]);
        },
        ee = function (e) {
            return 0 === e.length ? U.none() : U.some(e[e.length - 1]);
        },
        te = A(Array.from)
            ? Array.from
            : function (e) {
                  return O.call(e);
              },
        ne = Object.keys,
        re = Object.hasOwnProperty,
        oe = function (e, t) {
            for (var n = ne(e), r = 0, o = n.length; r < o; r++) {
                var i = n[r];
                t(e[i], i);
            }
        },
        ie = function (e, n) {
            return ae(e, function (e, t) {
                return { k: t, v: n(e, t) };
            });
        },
        ae = function (e, r) {
            var o = {};
            return (
                oe(e, function (e, t) {
                    var n = r(e, t);
                    o[n.k] = n.v;
                }),
                o
            );
        },
        ue = function (n) {
            return function (e, t) {
                n[t] = e;
            };
        },
        se = function (e, n, r, o) {
            return (
                oe(e, function (e, t) {
                    (n(e, t) ? r : o)(e, t);
                }),
                {}
            );
        },
        ce = function (e, t) {
            var n = {},
                r = {};
            return se(e, t, ue(n), ue(r)), { t: n, f: r };
        },
        le = function (e, t) {
            var n = {};
            return se(e, t, ue(n), V), n;
        },
        fe = function (e) {
            return (
                (n = function (e) {
                    return e;
                }),
                (r = []),
                oe(e, function (e, t) {
                    r.push(n(e, t));
                }),
                r
            );
            var n, r;
        },
        de = function (e, t) {
            return me(e, t) ? U.from(e[t]) : U.none();
        },
        me = function (e, t) {
            return re.call(e, t);
        },
        pe = Array.isArray,
        ge = function (e, t, n) {
            var r, o;
            if (!e) return !1;
            if (((n = n || e), e.length !== undefined)) {
                for (r = 0, o = e.length; r < o; r++) if (!1 === t.call(n, e[r], r, e)) return !1;
            } else for (r in e) if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) return !1;
            return !0;
        },
        he = function (n, r) {
            var o = [];
            return (
                ge(n, function (e, t) {
                    o.push(r(e, t, n));
                }),
                o
            );
        },
        ve = function (n, r) {
            var o = [];
            return (
                ge(n, function (e, t) {
                    (r && !r(e, t, n)) || o.push(e);
                }),
                o
            );
        },
        ye = function (e, t) {
            if (e) for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
        },
        be = function (e, t, n, r) {
            for (var o = R(n) ? e[0] : n, i = 0; i < e.length; i++) o = t.call(r, o, e[i], i);
            return o;
        },
        Ce = function (e, t, n) {
            for (var r = 0, o = e.length; r < o; r++) if (t.call(n, e[r], r, e)) return r;
            return -1;
        },
        we = function (e) {
            return e[e.length - 1];
        },
        xe = function () {
            return (xe =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }).apply(this, arguments);
        };
    function Se() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        for (var r = Array(e), o = 0, t = 0; t < n; t++) for (var i = arguments[t], a = 0, u = i.length; a < u; a++, o++) r[o] = i[a];
        return r;
    }
    var Ne,
        Ee,
        ke,
        _e,
        Re,
        Te,
        Ae,
        De = function (e, t) {
            var n = (function (e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (r.test(t)) return r;
                }
                return undefined;
            })(e, t);
            if (!n) return { major: 0, minor: 0 };
            var r = function (e) {
                return Number(t.replace(n, "$" + e));
            };
            return Be(r(1), r(2));
        },
        Oe = function () {
            return Be(0, 0);
        },
        Be = function (e, t) {
            return { major: e, minor: t };
        },
        Pe = {
            nu: Be,
            detect: function (e, t) {
                var n = String(t).toLowerCase();
                return 0 === e.length ? Oe() : De(e, n);
            },
            unknown: Oe,
        },
        Le = function (e, t) {
            var n = String(t).toLowerCase();
            return K(e, function (e) {
                return e.search(n);
            });
        },
        Ie = function (e, n) {
            return Le(e, n).map(function (e) {
                var t = Pe.detect(e.versionRegexes, n);
                return { current: e.name, version: t };
            });
        },
        Me = function (e, n) {
            return Le(e, n).map(function (e) {
                var t = Pe.detect(e.versionRegexes, n);
                return { current: e.name, version: t };
            });
        },
        Fe = function (e, t) {
            return -1 !== e.indexOf(t);
        },
        Ue = function (e, t) {
            return (n = e), (o = 0), "" === (r = t) || (n.length >= r.length && n.substr(o, o + r.length) === r);
            var n, r, o;
        },
        ze = function (t) {
            return function (e) {
                return e.replace(t, "");
            };
        },
        je = ze(/^\s+|\s+$/g),
        He = ze(/^\s+/g),
        Ve = ze(/\s+$/g),
        qe = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        $e = function (t) {
            return function (e) {
                return Fe(e, t);
            };
        },
        We = [
            {
                name: "Edge",
                versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
                search: function (e) {
                    return Fe(e, "edge/") && Fe(e, "chrome") && Fe(e, "safari") && Fe(e, "applewebkit");
                },
            },
            {
                name: "Chrome",
                versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, qe],
                search: function (e) {
                    return Fe(e, "chrome") && !Fe(e, "chromeframe");
                },
            },
            {
                name: "IE",
                versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
                search: function (e) {
                    return Fe(e, "msie") || Fe(e, "trident");
                },
            },
            { name: "Opera", versionRegexes: [qe, /.*?opera\/([0-9]+)\.([0-9]+).*/], search: $e("opera") },
            { name: "Firefox", versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/], search: $e("firefox") },
            {
                name: "Safari",
                versionRegexes: [qe, /.*?cpu os ([0-9]+)_([0-9]+).*/],
                search: function (e) {
                    return (Fe(e, "safari") || Fe(e, "mobile/")) && Fe(e, "applewebkit");
                },
            },
        ],
        Ke = [
            { name: "Windows", search: $e("win"), versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/] },
            {
                name: "iOS",
                search: function (e) {
                    return Fe(e, "iphone") || Fe(e, "ipad");
                },
                versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/],
            },
            { name: "Android", search: $e("android"), versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/] },
            { name: "OSX", search: $e("mac os x"), versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/] },
            { name: "Linux", search: $e("linux"), versionRegexes: [] },
            { name: "Solaris", search: $e("sunos"), versionRegexes: [] },
            { name: "FreeBSD", search: $e("freebsd"), versionRegexes: [] },
            { name: "ChromeOS", search: $e("cros"), versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/] },
        ],
        Xe = { browsers: N(We), oses: N(Ke) },
        Ye = "Firefox",
        Ge = function (e) {
            var t = e.current,
                n = e.version,
                r = function (e) {
                    return function () {
                        return t === e;
                    };
                };
            return { current: t, version: n, isEdge: r("Edge"), isChrome: r("Chrome"), isIE: r("IE"), isOpera: r("Opera"), isFirefox: r(Ye), isSafari: r("Safari") };
        },
        Je = {
            unknown: function () {
                return Ge({ current: undefined, version: Pe.unknown() });
            },
            nu: Ge,
            edge: N("Edge"),
            chrome: N("Chrome"),
            ie: N("IE"),
            opera: N("Opera"),
            firefox: N(Ye),
            safari: N("Safari"),
        },
        Qe = "Windows",
        Ze = "Android",
        et = "Solaris",
        tt = "FreeBSD",
        nt = "ChromeOS",
        rt = function (e) {
            var t = e.current,
                n = e.version,
                r = function (e) {
                    return function () {
                        return t === e;
                    };
                };
            return { current: t, version: n, isWindows: r(Qe), isiOS: r("iOS"), isAndroid: r(Ze), isOSX: r("OSX"), isLinux: r("Linux"), isSolaris: r(et), isFreeBSD: r(tt), isChromeOS: r(nt) };
        },
        ot = {
            unknown: function () {
                return rt({ current: undefined, version: Pe.unknown() });
            },
            nu: rt,
            windows: N(Qe),
            ios: N("iOS"),
            android: N(Ze),
            linux: N("Linux"),
            osx: N("OSX"),
            solaris: N(et),
            freebsd: N(tt),
            chromeos: N(nt),
        },
        it = function (e, t) {
            var n,
                r,
                o,
                i,
                a,
                u,
                s,
                c,
                l,
                f,
                d,
                m,
                p = Xe.browsers(),
                g = Xe.oses(),
                h = Ie(p, e).fold(Je.unknown, Je.nu),
                v = Me(g, e).fold(ot.unknown, ot.nu);
            return {
                browser: h,
                os: v,
                deviceType:
                    ((r = h),
                    (o = e),
                    (i = t),
                    (a = (n = v).isiOS() && !0 === /ipad/i.test(o)),
                    (u = n.isiOS() && !a),
                    (s = n.isiOS() || n.isAndroid()),
                    (c = s || i("(pointer:coarse)")),
                    (l = a || (!u && s && i("(min-device-width:768px)"))),
                    (f = u || (s && !l)),
                    (d = r.isSafari() && n.isiOS() && !1 === /safari/i.test(o)),
                    (m = !f && !l && !d),
                    { isiPad: N(a), isiPhone: N(u), isTablet: N(l), isPhone: N(f), isTouch: N(c), isAndroid: n.isAndroid, isiOS: n.isiOS, isWebView: N(d), isDesktop: N(m) }),
            };
        },
        at = function (e) {
            return window.matchMedia(e).matches;
        },
        ut =
            ((ke = !(Ne = function () {
                return it(navigator.userAgent, at);
            })),
            function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return ke || ((ke = !0), (Ee = Ne.apply(null, e))), Ee;
            }),
        st = function () {
            return ut();
        },
        ct = navigator.userAgent,
        lt = st(),
        ft = lt.browser,
        dt = lt.os,
        mt = lt.deviceType,
        pt = /WebKit/.test(ct) && !ft.isEdge(),
        gt = "FormData" in window && "FileReader" in window && "URL" in window && !!URL.createObjectURL,
        ht = -1 !== ct.indexOf("Windows Phone"),
        vt = {
            opera: ft.isOpera(),
            webkit: pt,
            ie: !(!ft.isIE() && !ft.isEdge()) && ft.version.major,
            gecko: ft.isFirefox(),
            mac: dt.isOSX() || dt.isiOS(),
            iOS: mt.isiPad() || mt.isiPhone(),
            android: dt.isAndroid(),
            contentEditable: !0,
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            caretAfter: !0,
            range: window.getSelection && "Range" in window,
            documentMode: ft.isIE() ? document.documentMode || 7 : 10,
            fileApi: gt,
            ceFalse: !0,
            cacheSuffix: null,
            container: null,
            experimentalShadowDom: !1,
            canHaveCSP: !ft.isIE(),
            desktop: mt.isDesktop(),
            windowsPhone: ht,
            browser: { current: ft.current, version: ft.version, isChrome: ft.isChrome, isEdge: ft.isEdge, isFirefox: ft.isFirefox, isIE: ft.isIE, isOpera: ft.isOpera, isSafari: ft.isSafari },
            os: {
                current: dt.current,
                version: dt.version,
                isAndroid: dt.isAndroid,
                isChromeOS: dt.isChromeOS,
                isFreeBSD: dt.isFreeBSD,
                isiOS: dt.isiOS,
                isLinux: dt.isLinux,
                isOSX: dt.isOSX,
                isSolaris: dt.isSolaris,
                isWindows: dt.isWindows,
            },
            deviceType: { isDesktop: mt.isDesktop, isiPad: mt.isiPad, isiPhone: mt.isiPhone, isPhone: mt.isPhone, isTablet: mt.isTablet, isTouch: mt.isTouch, isWebView: mt.isWebView },
        },
        yt = /^\s*|\s*$/g,
        bt = function (e) {
            return null === e || e === undefined ? "" : ("" + e).replace(yt, "");
        },
        Ct = function (e, t) {
            return t ? !("array" !== t || !pe(e)) || typeof e === t : e !== undefined;
        },
        wt = function (e, n, r, o) {
            (o = o || this),
                e &&
                    (r && (e = e[r]),
                    ge(e, function (e, t) {
                        return !1 !== n.call(o, e, t, r) && void wt(e, n, r, o);
                    }));
        },
        xt = {
            trim: bt,
            isArray: pe,
            is: Ct,
            toArray: function (e) {
                if (pe(e)) return e;
                for (var t = [], n = 0, r = e.length; n < r; n++) t[n] = e[n];
                return t;
            },
            makeMap: function (e, t, n) {
                var r;
                for (t = t || ",", "string" == typeof (e = e || []) && (e = e.split(t)), n = n || {}, r = e.length; r--; ) n[e[r]] = {};
                return n;
            },
            each: ge,
            map: he,
            grep: ve,
            inArray: ye,
            hasOwn: function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            },
            extend: function (e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var r = 0; r < t.length; r++) {
                    var o,
                        i = t[r];
                    for (var a in i) {
                        !i.hasOwnProperty(a) || ((o = i[a]) !== undefined && (e[a] = o));
                    }
                }
                return e;
            },
            create: function (e, t, n) {
                var r,
                    o,
                    i,
                    a = this,
                    u = 0,
                    s = (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(/(^|\.)(\w+)$/i)[2],
                    c = a.createNS(e[3].replace(/\.\w+$/, ""), n);
                if (!c[s]) {
                    if ("static" === e[2]) return (c[s] = t), void (this.onCreate && this.onCreate(e[2], e[3], c[s]));
                    t[s] || ((t[s] = function () {}), (u = 1)),
                        (c[s] = t[s]),
                        a.extend(c[s].prototype, t),
                        e[5] &&
                            ((r = a.resolve(e[5]).prototype),
                            (o = e[5].match(/\.(\w+)$/i)[1]),
                            (i = c[s]),
                            (c[s] = u
                                ? function () {
                                      return r[o].apply(this, arguments);
                                  }
                                : function () {
                                      return (this.parent = r[o]), i.apply(this, arguments);
                                  }),
                            (c[s].prototype[s] = c[s]),
                            a.each(r, function (e, t) {
                                c[s].prototype[t] = r[t];
                            }),
                            a.each(t, function (e, t) {
                                r[t]
                                    ? (c[s].prototype[t] = function () {
                                          return (this.parent = r[t]), e.apply(this, arguments);
                                      })
                                    : t !== s && (c[s].prototype[t] = e);
                            })),
                        a.each(t["static"], function (e, t) {
                            c[s][t] = e;
                        });
                }
            },
            walk: wt,
            createNS: function (e, t) {
                var n, r;
                for (t = t || window, e = e.split("."), n = 0; n < e.length; n++) t[(r = e[n])] || (t[r] = {}), (t = t[r]);
                return t;
            },
            resolve: function (e, t) {
                var n, r;
                for (t = t || window, n = 0, r = (e = e.split(".")).length; n < r && (t = t[e[n]]); n++);
                return t;
            },
            explode: function (e, t) {
                return !e || Ct(e, "array") ? e : he(e.split(t || ","), bt);
            },
            _addCacheSuffix: function (e) {
                var t = vt.cacheSuffix;
                return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e;
            },
        },
        St = function (e) {
            if (null === e || e === undefined) throw new Error("Node cannot be null or undefined");
            return { dom: e };
        },
        Nt = {
            fromHtml: function (e, t) {
                var n = (t || document).createElement("div");
                if (((n.innerHTML = e), !n.hasChildNodes() || 1 < n.childNodes.length)) throw (console.error("HTML does not have a single root node", e), new Error("HTML must have a single root node"));
                return St(n.childNodes[0]);
            },
            fromTag: function (e, t) {
                var n = (t || document).createElement(e);
                return St(n);
            },
            fromText: function (e, t) {
                var n = (t || document).createTextNode(e);
                return St(n);
            },
            fromDom: St,
            fromPoint: function (e, t, n) {
                return U.from(e.dom.elementFromPoint(t, n)).map(St);
            },
        },
        Et = function (e, t) {
            for (
                var n = [],
                    r = function (e) {
                        return n.push(e), t(e);
                    },
                    o = t(e);
                (o = o.bind(r)).isSome();

            );
            return n;
        },
        kt = function (e, t) {
            var n = e.dom;
            if (1 !== n.nodeType) return !1;
            var r = n;
            if (r.matches !== undefined) return r.matches(t);
            if (r.msMatchesSelector !== undefined) return r.msMatchesSelector(t);
            if (r.webkitMatchesSelector !== undefined) return r.webkitMatchesSelector(t);
            if (r.mozMatchesSelector !== undefined) return r.mozMatchesSelector(t);
            throw new Error("Browser lacks native selectors");
        },
        _t = function (e) {
            return (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType) || 0 === e.childElementCount;
        },
        Rt = function (e, t) {
            return e.dom === t.dom;
        },
        Tt = function (e, t) {
            return (n = e.dom), (r = t.dom), (o = n), (i = r), (a = Node.DOCUMENT_POSITION_CONTAINED_BY), 0 != (o.compareDocumentPosition(i) & a);
            var n, r, o, i, a;
        },
        At = function (e, t) {
            return st().browser.isIE() ? Tt(e, t) : ((n = t), (r = e.dom), (o = n.dom), r !== o && r.contains(o));
            var n, r, o;
        },
        Dt =
            ("undefined" != typeof window || Function("return this;")(),
            function (e) {
                return e.dom.nodeName.toLowerCase();
            }),
        Ot = function (e) {
            return e.dom.nodeType;
        },
        Bt = function (t) {
            return function (e) {
                return Ot(e) === t;
            };
        },
        Pt = Bt(1),
        Lt = Bt(3),
        It = Bt(9),
        Mt = Bt(11),
        Ft = function (e) {
            return Nt.fromDom(e.dom.ownerDocument);
        },
        Ut = function (e) {
            return It(e) ? e : Ft(e);
        },
        zt = function (e) {
            return Nt.fromDom(Ut(e).dom.defaultView);
        },
        jt = function (e) {
            return U.from(e.dom.parentNode).map(Nt.fromDom);
        },
        Ht = function (e) {
            return U.from(e.dom.previousSibling).map(Nt.fromDom);
        },
        Vt = function (e) {
            return U.from(e.dom.nextSibling).map(Nt.fromDom);
        },
        qt = function (e) {
            return J(Et(e, Ht));
        },
        $t = function (e) {
            return Et(e, Vt);
        },
        Wt = function (e) {
            return F(e.dom.childNodes, Nt.fromDom);
        },
        Kt = function (e, t) {
            var n = e.dom.childNodes;
            return U.from(n[t]).map(Nt.fromDom);
        },
        Xt = function (e) {
            return Kt(e, 0);
        },
        Yt = function (e) {
            return Kt(e, e.dom.childNodes.length - 1);
        },
        Gt = function (e) {
            return Mt(e);
        },
        Jt = A(Element.prototype.attachShadow) && A(Node.prototype.getRootNode),
        Qt = N(Jt),
        Zt = Jt
            ? function (e) {
                  return Nt.fromDom(e.dom.getRootNode());
              }
            : Ut,
        en = function (e) {
            return Gt(e)
                ? e
                : (function (e) {
                      var t = e.dom.head;
                      if (null === t || t === undefined) throw new Error("Head is not available yet");
                      return Nt.fromDom(t);
                  })(Ut(e));
        },
        tn = function (e) {
            return Nt.fromDom(e.dom.host);
        },
        nn = function (e) {
            return T(e.dom.shadowRoot);
        },
        rn = function (t, n) {
            jt(t).each(function (e) {
                e.dom.insertBefore(n.dom, t.dom);
            });
        },
        on = function (e, t) {
            Vt(e).fold(
                function () {
                    jt(e).each(function (e) {
                        un(e, t);
                    });
                },
                function (e) {
                    rn(e, t);
                }
            );
        },
        an = function (t, n) {
            Xt(t).fold(
                function () {
                    un(t, n);
                },
                function (e) {
                    t.dom.insertBefore(n.dom, e.dom);
                }
            );
        },
        un = function (e, t) {
            e.dom.appendChild(t.dom);
        },
        sn = function (t, e) {
            $(e, function (e) {
                un(t, e);
            });
        },
        cn = function (e) {
            (e.dom.textContent = ""),
                $(Wt(e), function (e) {
                    ln(e);
                });
        },
        ln = function (e) {
            var t = e.dom;
            null !== t.parentNode && t.parentNode.removeChild(t);
        },
        fn = function (e) {
            var t,
                n = Wt(e);
            0 < n.length &&
                ((t = e),
                $(n, function (e) {
                    rn(t, e);
                })),
                ln(e);
        },
        dn = function (e) {
            var t = Lt(e) ? e.dom.parentNode : e.dom;
            if (t === undefined || null === t || null === t.ownerDocument) return !1;
            var n,
                r,
                o,
                i,
                a = t.ownerDocument;
            return (
                (o = Nt.fromDom(t)),
                (i = Zt(o)),
                (Gt(i) ? U.some(i) : U.none()).fold(
                    function () {
                        return a.body.contains(t);
                    },
                    ((n = dn),
                    (r = tn),
                    function (e) {
                        return n(r(e));
                    })
                )
            );
        },
        mn = function (n, r) {
            return {
                left: n,
                top: r,
                translate: function (e, t) {
                    return mn(n + e, r + t);
                },
            };
        },
        pn = mn,
        gn = function (e, t) {
            return e !== undefined ? e : t !== undefined ? t : 0;
        },
        hn = function (e) {
            var t,
                n = e.dom,
                r = n.ownerDocument.body;
            return r === n ? pn(r.offsetLeft, r.offsetTop) : dn(e) ? ((t = n.getBoundingClientRect()), pn(t.left, t.top)) : pn(0, 0);
        },
        vn = function (e) {
            var t = e !== undefined ? e.dom : document,
                n = t.body.scrollLeft || t.documentElement.scrollLeft,
                r = t.body.scrollTop || t.documentElement.scrollTop;
            return pn(n, r);
        },
        yn = function (e, t, n) {
            var r = (n !== undefined ? n.dom : document).defaultView;
            r && r.scrollTo(e, t);
        },
        bn = function (e, t) {
            st().browser.isSafari() && A(e.dom.scrollIntoViewIfNeeded) ? e.dom.scrollIntoViewIfNeeded(!1) : e.dom.scrollIntoView(t);
        },
        Cn = function (e, t, n, r) {
            return { x: e, y: t, width: n, height: r, right: e + n, bottom: t + r };
        },
        wn = function (e) {
            var t,
                n,
                r = e === undefined ? window : e,
                o = r.document,
                i = vn(Nt.fromDom(o));
            return (
                (n = (t = r) === undefined ? window : t),
                U.from(n.visualViewport).fold(
                    function () {
                        var e = r.document.documentElement,
                            t = e.clientWidth,
                            n = e.clientHeight;
                        return Cn(i.left, i.top, t, n);
                    },
                    function (e) {
                        return Cn(Math.max(e.pageLeft, i.left), Math.max(e.pageTop, i.top), e.width, e.height);
                    }
                )
            );
        },
        xn = function (t) {
            return function (e) {
                return !!e && e.nodeType === t;
            };
        },
        Sn = function (e) {
            return !!e && !Object.getPrototypeOf(e);
        },
        Nn = xn(1),
        En = function (e) {
            var n = e.map(function (e) {
                return e.toLowerCase();
            });
            return function (e) {
                if (e && e.nodeName) {
                    var t = e.nodeName.toLowerCase();
                    return I(n, t);
                }
                return !1;
            };
        },
        kn = function (r, e) {
            var o = e.toLowerCase().split(" ");
            return function (e) {
                var t;
                if (Nn(e))
                    for (t = 0; t < o.length; t++) {
                        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                        if ((n ? n.getPropertyValue(r) : null) === o[t]) return !0;
                    }
                return !1;
            };
        },
        _n = function (t) {
            return function (e) {
                return Nn(e) && e.hasAttribute(t);
            };
        },
        Rn = function (e) {
            return Nn(e) && e.hasAttribute("data-mce-bogus");
        },
        Tn = function (e) {
            return Nn(e) && "TABLE" === e.tagName;
        },
        An = function (t) {
            return function (e) {
                if (Nn(e)) {
                    if (e.contentEditable === t) return !0;
                    if (e.getAttribute("data-mce-contenteditable") === t) return !0;
                }
                return !1;
            };
        },
        Dn = En(["textarea", "input"]),
        On = xn(3),
        Bn = xn(8),
        Pn = xn(9),
        Ln = xn(11),
        In = En(["br"]),
        Mn = En(["img"]),
        Fn = An("true"),
        Un = An("false"),
        zn = En(["td", "th"]),
        jn = En(["video", "audio", "object", "embed"]),
        Hn = function (e) {
            return e.style !== undefined && A(e.style.getPropertyValue);
        },
        Vn = function (e, t, n) {
            if (!(q(n) || x(n) || D(n))) throw (console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple"));
            e.setAttribute(t, n + "");
        },
        qn = function (e, t, n) {
            Vn(e.dom, t, n);
        },
        $n = function (e, t) {
            var n = e.dom;
            oe(t, function (e, t) {
                Vn(n, t, e);
            });
        },
        Wn = function (e, t) {
            var n = e.dom.getAttribute(t);
            return null === n ? undefined : n;
        },
        Kn = function (e, t) {
            e.dom.removeAttribute(t);
        },
        Xn = function (e, t) {
            var n = e.dom;
            oe(t, function (e, t) {
                !(function (e, t, n) {
                    if (!q(n)) throw (console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n));
                    Hn(e) && e.style.setProperty(t, n);
                })(n, t, e);
            });
        },
        Yn = function (e, t) {
            var n = e.dom,
                r = window.getComputedStyle(n).getPropertyValue(t);
            return "" !== r || dn(e) ? r : Gn(n, t);
        },
        Gn = function (e, t) {
            return Hn(e) ? e.style.getPropertyValue(t) : "";
        },
        Jn = function (e, t) {
            var n = e.dom,
                r = Gn(n, t);
            return U.from(r).filter(function (e) {
                return 0 < e.length;
            });
        },
        Qn = function (e) {
            var t = {},
                n = e.dom;
            if (Hn(n))
                for (var r = 0; r < n.style.length; r++) {
                    var o = n.style.item(r);
                    t[o] = n.style[o];
                }
            return t;
        },
        Zn = st().browser,
        er = function (e) {
            return K(e, Pt);
        },
        tr = function (e, t) {
            return e.children && I(e.children, t);
        },
        nr = function (e, t, n) {
            var r,
                o,
                i,
                a = 0,
                u = 0,
                s = e.ownerDocument;
            if (((n = n || e), t)) {
                if (n === e && t.getBoundingClientRect && "static" === Yn(Nt.fromDom(e), "position"))
                    return {
                        x: (a = (o = t.getBoundingClientRect()).left + (s.documentElement.scrollLeft || e.scrollLeft) - s.documentElement.clientLeft),
                        y: (u = o.top + (s.documentElement.scrollTop || e.scrollTop) - s.documentElement.clientTop),
                    };
                for (r = t; r && r !== n && r.nodeType && !tr(r, n); ) (a += r.offsetLeft || 0), (u += r.offsetTop || 0), (r = r.offsetParent);
                for (r = t.parentNode; r && r !== n && r.nodeType && !tr(r, n); ) (a -= r.scrollLeft || 0), (u -= r.scrollTop || 0), (r = r.parentNode);
                u +=
                    ((i = Nt.fromDom(t)),
                    Zn.isFirefox() && "table" === Dt(i)
                        ? er(Wt(i))
                              .filter(function (e) {
                                  return "caption" === Dt(e);
                              })
                              .bind(function (o) {
                                  return er($t(o)).map(function (e) {
                                      var t = e.dom.offsetTop,
                                          n = o.dom.offsetTop,
                                          r = o.dom.offsetHeight;
                                      return t <= n ? -r : 0;
                                  });
                              })
                              .getOr(0)
                        : 0);
            }
            return { x: a, y: u };
        },
        rr = {},
        or = { exports: rr };
    (_e = undefined),
        (Re = rr),
        (Te = or),
        (Ae = undefined),
        (function (e) {
            "object" == typeof Re && void 0 !== Te
                ? (Te.exports = e())
                : "function" == typeof _e && _e.amd
                ? _e([], e)
                : (("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).EphoxContactWrapper = e());
        })(function () {
            return (function l(i, a, u) {
                function s(t, e) {
                    if (!a[t]) {
                        if (!i[t]) {
                            var n = "function" == typeof Ae && Ae;
                            if (!e && n) return n(t, !0);
                            if (c) return c(t, !0);
                            var r = new Error("Cannot find module '" + t + "'");
                            throw ((r.code = "MODULE_NOT_FOUND"), r);
                        }
                        var o = (a[t] = { exports: {} });
                        i[t][0].call(
                            o.exports,
                            function (e) {
                                return s(i[t][1][e] || e);
                            },
                            o,
                            o.exports,
                            l,
                            i,
                            a,
                            u
                        );
                    }
                    return a[t].exports;
                }
                for (var c = "function" == typeof Ae && Ae, e = 0; e < u.length; e++) s(u[e]);
                return s;
            })(
                {
                    1: [
                        function (e, t, n) {
                            var r,
                                o,
                                i = (t.exports = {});
                            function a() {
                                throw new Error("setTimeout has not been defined");
                            }
                            function u() {
                                throw new Error("clearTimeout has not been defined");
                            }
                            function s(e) {
                                if (r === setTimeout) return setTimeout(e, 0);
                                if ((r === a || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0);
                                try {
                                    return r(e, 0);
                                } catch (t) {
                                    try {
                                        return r.call(null, e, 0);
                                    } catch (t) {
                                        return r.call(this, e, 0);
                                    }
                                }
                            }
                            !(function () {
                                try {
                                    r = "function" == typeof setTimeout ? setTimeout : a;
                                } catch (e) {
                                    r = a;
                                }
                                try {
                                    o = "function" == typeof clearTimeout ? clearTimeout : u;
                                } catch (e) {
                                    o = u;
                                }
                            })();
                            var c,
                                l = [],
                                f = !1,
                                d = -1;
                            function m() {
                                f && c && ((f = !1), c.length ? (l = c.concat(l)) : (d = -1), l.length && p());
                            }
                            function p() {
                                if (!f) {
                                    var e = s(m);
                                    f = !0;
                                    for (var t = l.length; t; ) {
                                        for (c = l, l = []; ++d < t; ) c && c[d].run();
                                        (d = -1), (t = l.length);
                                    }
                                    (c = null),
                                        (f = !1),
                                        (function (e) {
                                            if (o === clearTimeout) return clearTimeout(e);
                                            if ((o === u || !o) && clearTimeout) return (o = clearTimeout), clearTimeout(e);
                                            try {
                                                o(e);
                                            } catch (t) {
                                                try {
                                                    return o.call(null, e);
                                                } catch (t) {
                                                    return o.call(this, e);
                                                }
                                            }
                                        })(e);
                                }
                            }
                            function g(e, t) {
                                (this.fun = e), (this.array = t);
                            }
                            function h() {}
                            (i.nextTick = function (e) {
                                var t = new Array(arguments.length - 1);
                                if (1 < arguments.length) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                l.push(new g(e, t)), 1 !== l.length || f || s(p);
                            }),
                                (g.prototype.run = function () {
                                    this.fun.apply(null, this.array);
                                }),
                                (i.title = "browser"),
                                (i.browser = !0),
                                (i.env = {}),
                                (i.argv = []),
                                (i.version = ""),
                                (i.versions = {}),
                                (i.on = h),
                                (i.addListener = h),
                                (i.once = h),
                                (i.off = h),
                                (i.removeListener = h),
                                (i.removeAllListeners = h),
                                (i.emit = h),
                                (i.prependListener = h),
                                (i.prependOnceListener = h),
                                (i.listeners = function (e) {
                                    return [];
                                }),
                                (i.binding = function (e) {
                                    throw new Error("process.binding is not supported");
                                }),
                                (i.cwd = function () {
                                    return "/";
                                }),
                                (i.chdir = function (e) {
                                    throw new Error("process.chdir is not supported");
                                }),
                                (i.umask = function () {
                                    return 0;
                                });
                        },
                        {},
                    ],
                    2: [
                        function (e, f, t) {
                            (function (t) {
                                function r() {}
                                function a(e) {
                                    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                                    if ("function" != typeof e) throw new TypeError("not a function");
                                    (this._state = 0), (this._handled = !1), (this._value = undefined), (this._deferreds = []), l(e, this);
                                }
                                function o(r, o) {
                                    for (; 3 === r._state; ) r = r._value;
                                    0 !== r._state
                                        ? ((r._handled = !0),
                                          a._immediateFn(function () {
                                              var e,
                                                  t = 1 === r._state ? o.onFulfilled : o.onRejected;
                                              if (null !== t) {
                                                  try {
                                                      e = t(r._value);
                                                  } catch (n) {
                                                      return void u(o.promise, n);
                                                  }
                                                  i(o.promise, e);
                                              } else (1 === r._state ? i : u)(o.promise, r._value);
                                          }))
                                        : r._deferreds.push(o);
                                }
                                function i(e, t) {
                                    try {
                                        if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                                        if (t && ("object" == typeof t || "function" == typeof t)) {
                                            var n = t.then;
                                            if (t instanceof a) return (e._state = 3), (e._value = t), void s(e);
                                            if ("function" == typeof n)
                                                return void l(
                                                    ((r = n),
                                                    (o = t),
                                                    function () {
                                                        r.apply(o, arguments);
                                                    }),
                                                    e
                                                );
                                        }
                                        (e._state = 1), (e._value = t), s(e);
                                    } catch (i) {
                                        u(e, i);
                                    }
                                    var r, o;
                                }
                                function u(e, t) {
                                    (e._state = 2), (e._value = t), s(e);
                                }
                                function s(e) {
                                    2 === e._state &&
                                        0 === e._deferreds.length &&
                                        a._immediateFn(function () {
                                            e._handled || a._unhandledRejectionFn(e._value);
                                        });
                                    for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
                                    e._deferreds = null;
                                }
                                function c(e, t, n) {
                                    (this.onFulfilled = "function" == typeof e ? e : null), (this.onRejected = "function" == typeof t ? t : null), (this.promise = n);
                                }
                                function l(e, t) {
                                    var n = !1;
                                    try {
                                        e(
                                            function (e) {
                                                n || ((n = !0), i(t, e));
                                            },
                                            function (e) {
                                                n || ((n = !0), u(t, e));
                                            }
                                        );
                                    } catch (r) {
                                        if (n) return;
                                        (n = !0), u(t, r);
                                    }
                                }
                                var e, n;
                                (e = this),
                                    (n = setTimeout),
                                    (a.prototype["catch"] = function (e) {
                                        return this.then(null, e);
                                    }),
                                    (a.prototype.then = function (e, t) {
                                        var n = new this.constructor(r);
                                        return o(this, new c(e, t, n)), n;
                                    }),
                                    (a.all = function (e) {
                                        var s = Array.prototype.slice.call(e);
                                        return new a(function (o, i) {
                                            if (0 === s.length) return o([]);
                                            var a = s.length;
                                            for (var e = 0; e < s.length; e++)
                                                !(function u(t, e) {
                                                    try {
                                                        if (e && ("object" == typeof e || "function" == typeof e)) {
                                                            var n = e.then;
                                                            if ("function" == typeof n)
                                                                return void n.call(
                                                                    e,
                                                                    function (e) {
                                                                        u(t, e);
                                                                    },
                                                                    i
                                                                );
                                                        }
                                                        (s[t] = e), 0 == --a && o(s);
                                                    } catch (r) {
                                                        i(r);
                                                    }
                                                })(e, s[e]);
                                        });
                                    }),
                                    (a.resolve = function (t) {
                                        return t && "object" == typeof t && t.constructor === a
                                            ? t
                                            : new a(function (e) {
                                                  e(t);
                                              });
                                    }),
                                    (a.reject = function (n) {
                                        return new a(function (e, t) {
                                            t(n);
                                        });
                                    }),
                                    (a.race = function (o) {
                                        return new a(function (e, t) {
                                            for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t);
                                        });
                                    }),
                                    (a._immediateFn =
                                        "function" == typeof t
                                            ? function (e) {
                                                  t(e);
                                              }
                                            : function (e) {
                                                  n(e, 0);
                                              }),
                                    (a._unhandledRejectionFn = function (e) {
                                        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
                                    }),
                                    (a._setImmediateFn = function (e) {
                                        a._immediateFn = e;
                                    }),
                                    (a._setUnhandledRejectionFn = function (e) {
                                        a._unhandledRejectionFn = e;
                                    }),
                                    void 0 !== f && f.exports ? (f.exports = a) : e.Promise || (e.Promise = a);
                            }.call(this, e("timers").setImmediate));
                        },
                        { timers: 3 },
                    ],
                    3: [
                        function (s, e, c) {
                            (function (e, t) {
                                var r = s("process/browser.js").nextTick,
                                    n = Function.prototype.apply,
                                    o = Array.prototype.slice,
                                    i = {},
                                    a = 0;
                                function u(e, t) {
                                    (this._id = e), (this._clearFn = t);
                                }
                                (c.setTimeout = function () {
                                    return new u(n.call(setTimeout, window, arguments), clearTimeout);
                                }),
                                    (c.setInterval = function () {
                                        return new u(n.call(setInterval, window, arguments), clearInterval);
                                    }),
                                    (c.clearTimeout = c.clearInterval = function (e) {
                                        e.close();
                                    }),
                                    (u.prototype.unref = u.prototype.ref = function () {}),
                                    (u.prototype.close = function () {
                                        this._clearFn.call(window, this._id);
                                    }),
                                    (c.enroll = function (e, t) {
                                        clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
                                    }),
                                    (c.unenroll = function (e) {
                                        clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
                                    }),
                                    (c._unrefActive = c.active = function (e) {
                                        clearTimeout(e._idleTimeoutId);
                                        var t = e._idleTimeout;
                                        0 <= t &&
                                            (e._idleTimeoutId = setTimeout(function () {
                                                e._onTimeout && e._onTimeout();
                                            }, t));
                                    }),
                                    (c.setImmediate =
                                        "function" == typeof e
                                            ? e
                                            : function (e) {
                                                  var t = a++,
                                                      n = !(arguments.length < 2) && o.call(arguments, 1);
                                                  return (
                                                      (i[t] = !0),
                                                      r(function () {
                                                          i[t] && (n ? e.apply(null, n) : e.call(null), c.clearImmediate(t));
                                                      }),
                                                      t
                                                  );
                                              }),
                                    (c.clearImmediate =
                                        "function" == typeof t
                                            ? t
                                            : function (e) {
                                                  delete i[e];
                                              });
                            }.call(this, s("timers").setImmediate, s("timers").clearImmediate));
                        },
                        { "process/browser.js": 1, timers: 3 },
                    ],
                    4: [
                        function (e, t, n) {
                            var r = e("promise-polyfill"),
                                o = "undefined" != typeof window ? window : Function("return this;")();
                            t.exports = { boltExport: o.Promise || r };
                        },
                        { "promise-polyfill": 2 },
                    ],
                },
                {},
                [4]
            )(4);
        });
    var ir = or.exports.boltExport,
        ar = function (e) {
            var n = U.none(),
                t = [],
                r = function (e) {
                    o() ? a(e) : t.push(e);
                },
                o = function () {
                    return n.isSome();
                },
                i = function (e) {
                    $(e, a);
                },
                a = function (t) {
                    n.each(function (e) {
                        setTimeout(function () {
                            t(e);
                        }, 0);
                    });
                };
            return (
                e(function (e) {
                    o() || ((n = U.some(e)), i(t), (t = []));
                }),
                {
                    get: r,
                    map: function (n) {
                        return ar(function (t) {
                            r(function (e) {
                                t(n(e));
                            });
                        });
                    },
                    isReady: o,
                }
            );
        },
        ur = {
            nu: ar,
            pure: function (t) {
                return ar(function (e) {
                    e(t);
                });
            },
        },
        sr = function (e) {
            setTimeout(function () {
                throw e;
            }, 0);
        },
        cr = function (n) {
            var e = function (e) {
                n().then(e, sr);
            };
            return {
                map: function (e) {
                    return cr(function () {
                        return n().then(e);
                    });
                },
                bind: function (t) {
                    return cr(function () {
                        return n().then(function (e) {
                            return t(e).toPromise();
                        });
                    });
                },
                anonBind: function (e) {
                    return cr(function () {
                        return n().then(function () {
                            return e.toPromise();
                        });
                    });
                },
                toLazy: function () {
                    return ur.nu(e);
                },
                toCached: function () {
                    var e = null;
                    return cr(function () {
                        return null === e && (e = n()), e;
                    });
                },
                toPromise: n,
                get: e,
            };
        },
        lr = function (e) {
            return cr(function () {
                return new ir(e);
            });
        },
        fr = function (a, e) {
            return e(function (r) {
                var o = [],
                    i = 0;
                0 === a.length
                    ? r([])
                    : $(a, function (e, t) {
                          var n;
                          e.get(
                              ((n = t),
                              function (e) {
                                  (o[n] = e), ++i >= a.length && r(o);
                              })
                          );
                      });
            });
        },
        dr = function (n) {
            return {
                is: function (e) {
                    return n === e;
                },
                isValue: k,
                isError: p,
                getOr: N(n),
                getOrThunk: N(n),
                getOrDie: N(n),
                or: function (e) {
                    return dr(n);
                },
                orThunk: function (e) {
                    return dr(n);
                },
                fold: function (e, t) {
                    return t(n);
                },
                map: function (e) {
                    return dr(e(n));
                },
                mapError: function (e) {
                    return dr(n);
                },
                each: function (e) {
                    e(n);
                },
                bind: function (e) {
                    return e(n);
                },
                exists: function (e) {
                    return e(n);
                },
                forall: function (e) {
                    return e(n);
                },
                toOptional: function () {
                    return U.some(n);
                },
            };
        },
        mr = function (n) {
            return {
                is: p,
                isValue: p,
                isError: k,
                getOr: o,
                getOrThunk: function (e) {
                    return e();
                },
                getOrDie: function () {
                    return m(String(n))();
                },
                or: function (e) {
                    return e;
                },
                orThunk: function (e) {
                    return e();
                },
                fold: function (e, t) {
                    return e(n);
                },
                map: function (e) {
                    return mr(n);
                },
                mapError: function (e) {
                    return mr(e(n));
                },
                each: V,
                bind: function (e) {
                    return mr(n);
                },
                exists: p,
                forall: k,
                toOptional: U.none,
            };
        },
        pr = {
            value: dr,
            error: mr,
            fromOption: function (e, t) {
                return e.fold(function () {
                    return mr(t);
                }, dr);
            },
        },
        gr = function (a) {
            if (!S(a)) throw new Error("cases must be an array");
            if (0 === a.length) throw new Error("there must be at least one case");
            var u = [],
                n = {};
            return (
                $(a, function (e, r) {
                    var t = ne(e);
                    if (1 !== t.length) throw new Error("one and only one name per case");
                    var o = t[0],
                        i = e[o];
                    if (n[o] !== undefined) throw new Error("duplicate key detected:" + o);
                    if ("cata" === o) throw new Error("cannot have a case named cata (sorry)");
                    if (!S(i)) throw new Error("case arguments must be an array");
                    u.push(o),
                        (n[o] = function () {
                            var e = arguments.length;
                            if (e !== i.length) throw new Error("Wrong number of arguments to case " + o + ". Expected " + i.length + " (" + i + "), got " + e);
                            for (var n = new Array(e), t = 0; t < n.length; t++) n[t] = arguments[t];
                            return {
                                fold: function () {
                                    if (arguments.length !== a.length) throw new Error("Wrong number of arguments to fold. Expected " + a.length + ", got " + arguments.length);
                                    return arguments[r].apply(null, n);
                                },
                                match: function (e) {
                                    var t = ne(e);
                                    if (u.length !== t.length) throw new Error("Wrong number of arguments to match. Expected: " + u.join(",") + "\nActual: " + t.join(","));
                                    if (
                                        !G(u, function (e) {
                                            return I(t, e);
                                        })
                                    )
                                        throw new Error("Not all branches were specified when using match. Specified: " + t.join(", ") + "\nRequired: " + u.join(", "));
                                    return e[o].apply(null, n);
                                },
                                log: function (e) {
                                    console.log(e, { constructors: u, constructor: o, params: n });
                                },
                            };
                        });
                }),
                n
            );
        },
        hr =
            (gr([{ bothErrors: ["error1", "error2"] }, { firstError: ["error1", "value2"] }, { secondError: ["value1", "error2"] }, { bothValues: ["value1", "value2"] }]),
            function (e) {
                return e.fold(o, o);
            });
    function vr(e, t, n, r, o) {
        return e(n, r) ? U.some(n) : A(o) && o(n) ? U.none() : t(n, r, o);
    }
    var yr,
        br,
        Cr,
        wr,
        xr = function (e, t, n) {
            for (var r = e.dom, o = A(n) ? n : p; r.parentNode; ) {
                r = r.parentNode;
                var i = Nt.fromDom(r);
                if (t(i)) return U.some(i);
                if (o(i)) break;
            }
            return U.none();
        },
        Sr = function (e, t, n) {
            return vr(
                function (e, t) {
                    return t(e);
                },
                xr,
                e,
                t,
                n
            );
        },
        Nr = function (e, t, n) {
            return xr(
                e,
                function (e) {
                    return kt(e, t);
                },
                n
            );
        },
        Er = function (e, t) {
            return (n = t), (o = (r = e) === undefined ? document : r.dom), _t(o) ? U.none() : U.from(o.querySelector(n)).map(Nt.fromDom);
            var n, r, o;
        },
        kr = function (e, t, n) {
            return vr(kt, Nr, e, t, n);
        },
        _r = window.Promise
            ? window.Promise
            : ((yr =
                  Array.isArray ||
                  function (e) {
                      return "[object Array]" === Object.prototype.toString.call(e);
                  }),
              (Cr =
                  (br = function (e) {
                      if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                      if ("function" != typeof e) throw new TypeError("not a function");
                      (this._state = null), (this._value = null), (this._deferreds = []), Pr(e, Rr(Ar, this), Rr(Dr, this));
                  }).immediateFn ||
                  ("function" == typeof setImmediate && setImmediate) ||
                  function (e) {
                      setTimeout(e, 1);
                  }),
              (br.prototype["catch"] = function (e) {
                  return this.then(null, e);
              }),
              (br.prototype.then = function (n, r) {
                  var o = this;
                  return new br(function (e, t) {
                      Tr.call(o, new Br(n, r, e, t));
                  });
              }),
              (br.all = function () {
                  var s = Array.prototype.slice.call(1 === arguments.length && yr(arguments[0]) ? arguments[0] : arguments);
                  return new br(function (o, i) {
                      if (0 === s.length) return o([]);
                      for (var a = s.length, e = 0; e < s.length; e++)
                          !(function u(t, e) {
                              try {
                                  if (e && ("object" == typeof e || "function" == typeof e)) {
                                      var n = e.then;
                                      if ("function" == typeof n)
                                          return void n.call(
                                              e,
                                              function (e) {
                                                  u(t, e);
                                              },
                                              i
                                          );
                                  }
                                  (s[t] = e), 0 == --a && o(s);
                              } catch (r) {
                                  i(r);
                              }
                          })(e, s[e]);
                  });
              }),
              (br.resolve = function (t) {
                  return t && "object" == typeof t && t.constructor === br
                      ? t
                      : new br(function (e) {
                            e(t);
                        });
              }),
              (br.reject = function (n) {
                  return new br(function (e, t) {
                      t(n);
                  });
              }),
              (br.race = function (o) {
                  return new br(function (e, t) {
                      for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t);
                  });
              }),
              br);
    function Rr(e, t) {
        return function () {
            e.apply(t, arguments);
        };
    }
    function Tr(r) {
        var o = this;
        null !== this._state
            ? Cr(function () {
                  var e,
                      t = o._state ? r.onFulfilled : r.onRejected;
                  if (null !== t) {
                      try {
                          e = t(o._value);
                      } catch (n) {
                          return void r.reject(n);
                      }
                      r.resolve(e);
                  } else (o._state ? r.resolve : r.reject)(o._value);
              })
            : this._deferreds.push(r);
    }
    function Ar(e) {
        try {
            if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var t = e.then;
                if ("function" == typeof t) return void Pr(Rr(t, e), Rr(Ar, this), Rr(Dr, this));
            }
            (this._state = !0), (this._value = e), Or.call(this);
        } catch (n) {
            Dr.call(this, n);
        }
    }
    function Dr(e) {
        (this._state = !1), (this._value = e), Or.call(this);
    }
    function Or() {
        for (var e = 0, t = this._deferreds.length; e < t; e++) Tr.call(this, this._deferreds[e]);
        this._deferreds = null;
    }
    function Br(e, t, n, r) {
        (this.onFulfilled = "function" == typeof e ? e : null), (this.onRejected = "function" == typeof t ? t : null), (this.resolve = n), (this.reject = r);
    }
    function Pr(e, t, n) {
        var r = !1;
        try {
            e(
                function (e) {
                    r || ((r = !0), t(e));
                },
                function (e) {
                    r || ((r = !0), n(e));
                }
            );
        } catch (o) {
            if (r) return;
            (r = !0), n(o);
        }
    }
    var Lr = function (e, t) {
            return "number" != typeof t && (t = 0), setTimeout(e, t);
        },
        Ir = function (e, t) {
            return "number" != typeof t && (t = 1), setInterval(e, t);
        },
        Mr = function (n, r) {
            var o,
                e = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    clearTimeout(o),
                        (o = Lr(function () {
                            n.apply(this, e);
                        }, r));
                };
            return (
                (e.stop = function () {
                    clearTimeout(o);
                }),
                e
            );
        },
        Fr = {
            requestAnimationFrame: function (e, t) {
                wr
                    ? wr.then(e)
                    : (wr = new _r(function (e) {
                          !(function (e, t) {
                              for (var n = window.requestAnimationFrame, r = ["ms", "moz", "webkit"], o = 0; o < r.length && !n; o++) n = window[r[o] + "RequestAnimationFrame"];
                              (n =
                                  n ||
                                  function (e) {
                                      window.setTimeout(e, 0);
                                  })(e, t);
                          })(e, (t = t || document.body));
                      }).then(e));
            },
            setTimeout: Lr,
            setInterval: Ir,
            setEditorTimeout: function (e, t, n) {
                return Lr(function () {
                    e.removed || t();
                }, n);
            },
            setEditorInterval: function (e, t, n) {
                var r = Ir(function () {
                    e.removed ? clearInterval(r) : t();
                }, n);
                return r;
            },
            debounce: Mr,
            throttle: Mr,
            clearInterval: function (e) {
                return clearInterval(e);
            },
            clearTimeout: function (e) {
                return clearTimeout(e);
            },
        };
    function Ur(m, p) {
        void 0 === p && (p = {});
        var g = 0,
            h = {},
            v = Nt.fromDom(m),
            y = Ut(v),
            b = p.maxLoadTime || 5e3,
            n = function (e, t, n) {
                var r,
                    o = xt._addCacheSuffix(e),
                    i = de(h, o).getOrThunk(function () {
                        return { id: "mce-u" + g++, passed: [], failed: [], count: 0 };
                    });
                (h[o] = i).count++;
                var a,
                    u,
                    s,
                    c = function (e, t) {
                        for (var n = e.length; n--; ) e[n]();
                        (i.status = t), (i.passed = []), (i.failed = []), r && ((r.onload = null), (r.onerror = null), (r = null));
                    },
                    l = function () {
                        return c(i.passed, 2);
                    },
                    f = function () {
                        return c(i.failed, 3);
                    },
                    d = function () {
                        var e;
                        (e = d),
                            (function () {
                                for (var e = m.styleSheets, t = e.length; t--; ) {
                                    var n = e[t].ownerNode;
                                    if (n && n.id === r.id) return l(), 1;
                                }
                            })() || (Date.now() - u < b ? Fr.setTimeout(e) : f());
                    };
                t && i.passed.push(t),
                    n && i.failed.push(n),
                    1 !== i.status &&
                        (2 !== i.status
                            ? 3 !== i.status
                                ? ((i.status = 1),
                                  (a = Nt.fromTag("link", y.dom)),
                                  $n(a, { rel: "stylesheet", type: "text/css", id: i.id }),
                                  (u = Date.now()),
                                  p.contentCssCors && qn(a, "crossOrigin", "anonymous"),
                                  p.referrerPolicy && qn(a, "referrerpolicy", p.referrerPolicy),
                                  ((r = a.dom).onload = d),
                                  (r.onerror = f),
                                  (s = a),
                                  un(en(v), s),
                                  qn(a, "href", o))
                                : f()
                            : l());
            },
            o = function (t) {
                return lr(function (e) {
                    n(t, a(e, N(pr.value(t))), a(e, N(pr.error(t))));
                });
            },
            t = function (e) {
                var r = xt._addCacheSuffix(e);
                de(h, r).each(function (e) {
                    var t, n;
                    0 == --e.count && (delete h[r], (t = e.id), (n = en(v)), Er(n, "#" + t).each(ln));
                });
            };
        return {
            load: n,
            loadAll: function (e, n, r) {
                var t;
                (t = F(e, o)),
                    fr(t, lr).get(function (e) {
                        var t = (function (e, t) {
                            for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
                                var a = e[o];
                                (t(a, o) ? n : r).push(a);
                            }
                            return { pass: n, fail: r };
                        })(e, function (e) {
                            return e.isValue();
                        });
                        0 < t.fail.length ? r(t.fail.map(hr)) : n(t.pass.map(hr));
                    });
            },
            unload: t,
            unloadAll: function (e) {
                $(e, function (e) {
                    t(e);
                });
            },
            _setReferrerPolicy: function (e) {
                p.referrerPolicy = e;
            },
        };
    }
    var zr,
        jr =
            ((zr = new WeakMap()),
            {
                forElement: function (e, t) {
                    var n = Zt(e).dom;
                    return U.from(zr.get(n)).getOrThunk(function () {
                        var e = Ur(n, t);
                        return zr.set(n, e), e;
                    });
                },
            }),
        Hr =
            ((Vr.prototype.current = function () {
                return this.node;
            }),
            (Vr.prototype.next = function (e) {
                return (this.node = this.findSibling(this.node, "firstChild", "nextSibling", e)), this.node;
            }),
            (Vr.prototype.prev = function (e) {
                return (this.node = this.findSibling(this.node, "lastChild", "previousSibling", e)), this.node;
            }),
            (Vr.prototype.prev2 = function (e) {
                return (this.node = this.findPreviousNode(this.node, "lastChild", "previousSibling", e)), this.node;
            }),
            (Vr.prototype.findSibling = function (e, t, n, r) {
                var o, i;
                if (e) {
                    if (!r && e[t]) return e[t];
                    if (e !== this.rootNode) {
                        if ((o = e[n])) return o;
                        for (i = e.parentNode; i && i !== this.rootNode; i = i.parentNode) if ((o = i[n])) return o;
                    }
                }
            }),
            (Vr.prototype.findPreviousNode = function (e, t, n, r) {
                var o, i, a;
                if (e) {
                    if (((o = e[n]), this.rootNode && o === this.rootNode)) return;
                    if (o) {
                        if (!r) for (a = o[t]; a; a = a[t]) if (!a[t]) return a;
                        return o;
                    }
                    if ((i = e.parentNode) && i !== this.rootNode) return i;
                }
            }),
            Vr);
    function Vr(e, t) {
        (this.node = e), (this.rootNode = t), (this.current = this.current.bind(this)), (this.next = this.next.bind(this)), (this.prev = this.prev.bind(this)), (this.prev2 = this.prev2.bind(this));
    }
    var qr,
        $r,
        Wr = function (t) {
            var n;
            return function (e) {
                return (n =
                    n ||
                    (function (e, t) {
                        for (var n = {}, r = 0, o = e.length; r < o; r++) {
                            var i = e[r];
                            n[String(i)] = t(i, r);
                        }
                        return n;
                    })(t, k)).hasOwnProperty(Dt(e));
            };
        },
        Kr = Wr(["h1", "h2", "h3", "h4", "h5", "h6"]),
        Xr = Wr([
            "article",
            "aside",
            "details",
            "div",
            "dt",
            "figcaption",
            "footer",
            "form",
            "fieldset",
            "header",
            "hgroup",
            "html",
            "main",
            "nav",
            "section",
            "summary",
            "body",
            "p",
            "dl",
            "multicol",
            "dd",
            "figure",
            "address",
            "center",
            "blockquote",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "listing",
            "xmp",
            "pre",
            "plaintext",
            "menu",
            "dir",
            "ul",
            "ol",
            "li",
            "hr",
            "table",
            "tbody",
            "thead",
            "tfoot",
            "th",
            "tr",
            "td",
            "caption",
        ]),
        Yr = function (e) {
            return Pt(e) && !Xr(e);
        },
        Gr = function (e) {
            return Pt(e) && "br" === Dt(e);
        },
        Jr = Wr(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
        Qr = Wr(["ul", "ol", "dl"]),
        Zr = Wr(["li", "dd", "dt"]),
        eo = Wr(["thead", "tbody", "tfoot"]),
        to = Wr(["td", "th"]),
        no = Wr(["pre", "script", "textarea", "style"]),
        ro = "\ufeff",
        oo = "\xa0",
        io = ro,
        ao = function (e) {
            return e === ro;
        },
        uo = function (e) {
            return e.replace(/\uFEFF/g, "");
        },
        so = Nn,
        co = On,
        lo = function (e) {
            return co(e) && (e = e.parentNode), so(e) && e.hasAttribute("data-mce-caret");
        },
        fo = function (e) {
            return co(e) && ao(e.data);
        },
        mo = function (e) {
            return lo(e) || fo(e);
        },
        po = function (e) {
            return e.firstChild !== e.lastChild || !In(e.firstChild);
        },
        go = function (e) {
            var t = e.container();
            return !!On(t) && (t.data.charAt(e.offset()) === io || (e.isAtStart() && fo(t.previousSibling)));
        },
        ho = function (e) {
            var t = e.container();
            return !!On(t) && (t.data.charAt(e.offset() - 1) === io || (e.isAtEnd() && fo(t.nextSibling)));
        },
        vo = function (e, t, n) {
            var r,
                o = t.ownerDocument.createElement(e);
            o.setAttribute("data-mce-caret", n ? "before" : "after"), o.setAttribute("data-mce-bogus", "all"), o.appendChild(((r = document.createElement("br")).setAttribute("data-mce-bogus", "1"), r));
            var i = t.parentNode;
            return n ? i.insertBefore(o, t) : t.nextSibling ? i.insertBefore(o, t.nextSibling) : i.appendChild(o), o;
        },
        yo = function (e) {
            return co(e) && e.data[0] === io;
        },
        bo = function (e) {
            return co(e) && e.data[e.data.length - 1] === io;
        },
        Co = function (e) {
            return e && e.hasAttribute("data-mce-caret")
                ? ((t = e.getElementsByTagName("br")),
                  (n = t[t.length - 1]),
                  Rn(n) && n.parentNode.removeChild(n),
                  e.removeAttribute("data-mce-caret"),
                  e.removeAttribute("data-mce-bogus"),
                  e.removeAttribute("style"),
                  e.removeAttribute("_moz_abspos"),
                  e)
                : null;
            var t, n;
        },
        wo = Fn,
        xo = Un,
        So = In,
        No = On,
        Eo = En(["script", "style", "textarea"]),
        ko = En(["img", "input", "textarea", "hr", "iframe", "video", "audio", "object", "embed"]),
        _o = En(["table"]),
        Ro = mo,
        To = function (e) {
            return !Ro(e) && (No(e) ? !Eo(e.parentNode) : ko(e) || So(e) || _o(e) || Ao(e));
        },
        Ao = function (e) {
            return !1 === (Nn((t = e)) && "true" === t.getAttribute("unselectable")) && xo(e);
            var t;
        },
        Do = function (e, t) {
            return (
                To(e) &&
                (function (e, t) {
                    for (e = e.parentNode; e && e !== t; e = e.parentNode) {
                        if (Ao(e)) return !1;
                        if (wo(e)) return !0;
                    }
                    return !0;
                })(e, t)
            );
        },
        Oo = /^[ \t\r\n]*$/,
        Bo = function (e) {
            return Oo.test(e);
        },
        Po = function (e, t) {
            var n,
                r,
                o,
                i = Nt.fromDom(t),
                a = Nt.fromDom(e);
            return (n = a), (r = "pre,code"), (o = E(Rt, i)), Nr(n, r, o).isSome();
        },
        Lo = function (e, t) {
            return (To(e) && !1 === ((o = t), On((r = e)) && Bo(r.data) && !1 === Po(r, o))) || (Nn((n = e)) && "A" === n.nodeName && !n.hasAttribute("href") && (n.hasAttribute("name") || n.hasAttribute("id"))) || Io(e);
            var n, r, o;
        },
        Io = _n("data-mce-bookmark"),
        Mo = _n("data-mce-bogus"),
        Fo =
            ((qr = "data-mce-bogus"),
            ($r = "all"),
            function (e) {
                return Nn(e) && e.getAttribute(qr) === $r;
            }),
        Uo = function (e, t) {
            return (
                void 0 === t && (t = !0),
                (function (e, t) {
                    var n,
                        r = 0;
                    if (Lo(e, e)) return !1;
                    if (!(n = e.firstChild)) return !0;
                    var o = new Hr(n, e);
                    do {
                        if (t) {
                            if (Fo(n)) {
                                n = o.next(!0);
                                continue;
                            }
                            if (Mo(n)) {
                                n = o.next();
                                continue;
                            }
                        }
                        if (In(n)) r++, (n = o.next());
                        else {
                            if (Lo(n, e)) return !1;
                            n = o.next();
                        }
                    } while (n);
                    return r <= 1;
                })(e.dom, t)
            );
        },
        zo = function (e, t) {
            return T(e) && (Lo(e, t) || Yr(Nt.fromDom(e)));
        },
        jo = function (e) {
            return "span" === e.nodeName.toLowerCase() && "bookmark" === e.getAttribute("data-mce-type");
        },
        Ho = function (e, t) {
            return On(e) && 0 < e.data.length && ((o = new Hr((n = e), (r = t)).prev(!1)), (i = new Hr(n, r).next(!1)), (a = R(o) || zo(o, r)), (u = R(i) || zo(i, r)), a && u);
            var n, r, o, i, a, u;
        },
        Vo = function (e, t, n) {
            var r = n || t;
            if (Nn(t) && jo(t)) return t;
            for (var o, i, a, u = t.childNodes, s = u.length - 1; 0 <= s; s--) Vo(e, u[s], r);
            return !Nn(t) || (1 === (o = t.childNodes).length && jo(o[0]) && t.parentNode.insertBefore(o[0], t)), Ln((a = t)) || Pn(a) || Lo(t, r) || (Nn((i = t)) && 0 < i.childNodes.length) || Ho(t, r) || e.remove(t), t;
        },
        qo = xt.makeMap,
        $o = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Wo = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Ko = /[<>&\"\']/g,
        Xo = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
        Yo = {
            128: "\u20ac",
            130: "\u201a",
            131: "\u0192",
            132: "\u201e",
            133: "\u2026",
            134: "\u2020",
            135: "\u2021",
            136: "\u02c6",
            137: "\u2030",
            138: "\u0160",
            139: "\u2039",
            140: "\u0152",
            142: "\u017d",
            145: "\u2018",
            146: "\u2019",
            147: "\u201c",
            148: "\u201d",
            149: "\u2022",
            150: "\u2013",
            151: "\u2014",
            152: "\u02dc",
            153: "\u2122",
            154: "\u0161",
            155: "\u203a",
            156: "\u0153",
            158: "\u017e",
            159: "\u0178",
        },
        Go = { '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "&": "&amp;", "`": "&#96;" },
        Jo = { "&lt;": "<", "&gt;": ">", "&amp;": "&", "&quot;": '"', "&apos;": "'" },
        Qo = function (e, t) {
            var n,
                r,
                o,
                i = {};
            if (e) {
                for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) (r = String.fromCharCode(parseInt(e[n], t))), Go[r] || ((o = "&" + e[n + 1] + ";"), (i[r] = o), (i[o] = r));
                return i;
            }
        },
        Zo = Qo(
            "50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
            32
        ),
        ei = function (e, t) {
            return e.replace(t ? $o : Wo, function (e) {
                return Go[e] || e;
            });
        },
        ti = function (e, t) {
            return e.replace(t ? $o : Wo, function (e) {
                return 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : Go[e] || "&#" + e.charCodeAt(0) + ";";
            });
        },
        ni = function (e, t, n) {
            return (
                (n = n || Zo),
                e.replace(t ? $o : Wo, function (e) {
                    return Go[e] || n[e] || e;
                })
            );
        },
        ri = {
            encodeRaw: ei,
            encodeAllRaw: function (e) {
                return ("" + e).replace(Ko, function (e) {
                    return Go[e] || e;
                });
            },
            encodeNumeric: ti,
            encodeNamed: ni,
            getEncodeFunc: function (e, t) {
                var n = Qo(t) || Zo,
                    r = qo(e.replace(/\+/g, ","));
                return r.named && r.numeric
                    ? function (e, t) {
                          return e.replace(t ? $o : Wo, function (e) {
                              return Go[e] !== undefined ? Go[e] : n[e] !== undefined ? n[e] : 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";";
                          });
                      }
                    : r.named
                    ? t
                        ? function (e, t) {
                              return ni(e, t, n);
                          }
                        : ni
                    : r.numeric
                    ? ti
                    : ei;
            },
            decode: function (e) {
                return e.replace(Xo, function (e, t) {
                    return t
                        ? 65535 < (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10))
                            ? ((t -= 65536), String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
                            : Yo[t] || String.fromCharCode(t)
                        : Jo[e] || Zo[e] || ((n = e), ((r = Nt.fromTag("div").dom).innerHTML = n), r.textContent || r.innerText || n);
                    var n, r;
                });
            },
        },
        oi = {},
        ii = {},
        ai = xt.makeMap,
        ui = xt.each,
        si = xt.extend,
        ci = xt.explode,
        li = xt.inArray,
        fi = function (e, t) {
            return (e = xt.trim(e)) ? e.split(t || " ") : [];
        },
        di = function (e) {
            var s,
                t,
                n,
                r,
                o,
                i,
                c = {},
                a = function (e, t, n) {
                    var r,
                        o,
                        i = function (e, t) {
                            for (var n = {}, r = 0, o = e.length; r < o; r++) n[e[r]] = t || {};
                            return n;
                        };
                    (t = t || ""), "string" == typeof (n = n || []) && (n = fi(n));
                    for (var a = fi(e), u = a.length; u--; ) (o = { attributes: i((r = fi([s, t].join(" ")))), attributesOrder: r, children: i(n, ii) }), (c[a[u]] = o);
                },
                u = function (e, t) {
                    for (var n, r, o, i = fi(e), a = i.length, u = fi(t); a--; ) for (n = c[i[a]], r = 0, o = u.length; r < o; r++) (n.attributes[u[r]] = {}), n.attributesOrder.push(u[r]);
                };
            return oi[e]
                ? oi[e]
                : ((s = "id accesskey class dir lang style tabindex title role"),
                  (t = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"),
                  (n = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"),
                  "html4" !== e &&
                      ((s += " contenteditable contextmenu draggable dropzone hidden spellcheck translate"),
                      (t += " article aside details dialog figure main header footer hgroup section nav"),
                      (n += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen")),
                  "html5-strict" !== e &&
                      ((s += " xml:lang"),
                      (n = [n, (i = "acronym applet basefont big font strike tt")].join(" ")),
                      ui(fi(i), function (e) {
                          a(e, "", n);
                      }),
                      (t = [t, (o = "center dir isindex noframes")].join(" ")),
                      (r = [t, n].join(" ")),
                      ui(fi(o), function (e) {
                          a(e, "", r);
                      })),
                  (r = r || [t, n].join(" ")),
                  a("html", "manifest", "head body"),
                  a("head", "", "base command link meta noscript script style title"),
                  a("title hr noscript br"),
                  a("base", "href target"),
                  a("link", "href rel media hreflang type sizes hreflang"),
                  a("meta", "name http-equiv content charset"),
                  a("style", "media type scoped"),
                  a("script", "src async defer type charset"),
                  a("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", r),
                  a("address dt dd div caption", "", r),
                  a("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", n),
                  a("blockquote", "cite", r),
                  a("ol", "reversed start type", "li"),
                  a("ul", "", "li"),
                  a("li", "value", r),
                  a("dl", "", "dt dd"),
                  a("a", "href target rel media hreflang type", n),
                  a("q", "cite", n),
                  a("ins del", "cite datetime", r),
                  a("img", "src sizes srcset alt usemap ismap width height"),
                  a("iframe", "src name width height", r),
                  a("embed", "src type width height"),
                  a("object", "data type typemustmatch name usemap form width height", [r, "param"].join(" ")),
                  a("param", "name value"),
                  a("map", "name", [r, "area"].join(" ")),
                  a("area", "alt coords shape href target rel media hreflang type"),
                  a("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")),
                  a("colgroup", "span", "col"),
                  a("col", "span"),
                  a("tbody thead tfoot", "", "tr"),
                  a("tr", "", "td th"),
                  a("td", "colspan rowspan headers", r),
                  a("th", "colspan rowspan headers scope abbr", r),
                  a("form", "accept-charset action autocomplete enctype method name novalidate target", r),
                  a("fieldset", "disabled form name", [r, "legend"].join(" ")),
                  a("label", "form for", n),
                  a(
                      "input",
                      "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"
                  ),
                  a("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? r : n),
                  a("select", "disabled form multiple name required size", "option optgroup"),
                  a("optgroup", "disabled label", "option"),
                  a("option", "disabled label selected value"),
                  a("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"),
                  a("menu", "type label", [r, "li"].join(" ")),
                  a("noscript", "", r),
                  "html4" !== e &&
                      (a("wbr"),
                      a("ruby", "", [n, "rt rp"].join(" ")),
                      a("figcaption", "", r),
                      a("mark rt rp summary bdi", "", n),
                      a("canvas", "width height", r),
                      a("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [r, "track source"].join(" ")),
                      a("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [r, "track source"].join(" ")),
                      a("picture", "", "img source"),
                      a("source", "src srcset type media sizes"),
                      a("track", "kind src srclang label default"),
                      a("datalist", "", [n, "option"].join(" ")),
                      a("article section nav aside main header footer", "", r),
                      a("hgroup", "", "h1 h2 h3 h4 h5 h6"),
                      a("figure", "", [r, "figcaption"].join(" ")),
                      a("time", "datetime", n),
                      a("dialog", "open", r),
                      a("command", "type label icon disabled checked radiogroup command"),
                      a("output", "for form name", n),
                      a("progress", "value max", n),
                      a("meter", "value min max low high optimum", n),
                      a("details", "open", [r, "summary"].join(" ")),
                      a("keygen", "autofocus challenge disabled form keytype name")),
                  "html5-strict" !== e &&
                      (u("script", "language xml:space"),
                      u("style", "xml:space"),
                      u("object", "declare classid code codebase codetype archive standby align border hspace vspace"),
                      u("embed", "align name hspace vspace"),
                      u("param", "valuetype type"),
                      u("a", "charset name rev shape coords"),
                      u("br", "clear"),
                      u("applet", "codebase archive code object alt name width height align hspace vspace"),
                      u("img", "name longdesc align border hspace vspace"),
                      u("iframe", "longdesc frameborder marginwidth marginheight scrolling align"),
                      u("font basefont", "size color face"),
                      u("input", "usemap align"),
                      u("select"),
                      u("textarea"),
                      u("h1 h2 h3 h4 h5 h6 div p legend caption", "align"),
                      u("ul", "type compact"),
                      u("li", "type"),
                      u("ol dl menu dir", "compact"),
                      u("pre", "width xml:space"),
                      u("hr", "align noshade size width"),
                      u("isindex", "prompt"),
                      u("table", "summary width frame rules cellspacing cellpadding align bgcolor"),
                      u("col", "width align char charoff valign"),
                      u("colgroup", "width align char charoff valign"),
                      u("thead", "align char charoff valign"),
                      u("tr", "align char charoff valign bgcolor"),
                      u("th", "axis align char charoff valign nowrap bgcolor width height"),
                      u("form", "accept"),
                      u("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"),
                      u("tfoot", "align char charoff valign"),
                      u("tbody", "align char charoff valign"),
                      u("area", "nohref"),
                      u("body", "background bgcolor text link vlink alink")),
                  "html4" !== e &&
                      (u("input button select textarea", "autofocus"),
                      u("input textarea", "placeholder"),
                      u("a", "download"),
                      u("link script img", "crossorigin"),
                      u("img", "loading"),
                      u("iframe", "sandbox seamless allowfullscreen loading")),
                  ui(fi("a form meter progress dfn"), function (e) {
                      c[e] && delete c[e].children[e];
                  }),
                  delete c.caption.children.table,
                  delete c.script,
                  (oi[e] = c));
        },
        mi = function (e, n) {
            var r;
            return (
                e &&
                    ((r = {}),
                    "string" == typeof e && (e = { "*": e }),
                    ui(e, function (e, t) {
                        r[t] = r[t.toUpperCase()] = ("map" === n ? ai : ci)(e, /[, ]/);
                    })),
                r
            );
        };
    function pi(i) {
        var S = {},
            u = {},
            N = [],
            s = {},
            t = {},
            e = function (e, t, n) {
                var r = i[e];
                return r ? (r = ai(r, /[, ]/, ai(r.toUpperCase(), /[, ]/))) : (r = oi[e]) || ((r = ai(t, " ", ai(t.toUpperCase(), " "))), (r = si(r, n)), (oi[e] = r)), r;
            },
            n = di((i = i || {}).schema);
        !1 === i.verify_html && (i.valid_elements = "*[*]");
        var r = mi(i.valid_styles),
            o = mi(i.invalid_styles, "map"),
            a = mi(i.valid_classes, "map"),
            c = e("whitespace_elements", "pre script noscript style textarea video audio iframe object code"),
            l = e("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"),
            f = e("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"),
            d = e("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),
            m = "td th iframe video audio object script code",
            p = e("non_empty_elements", m + " pre", f),
            g = e("move_caret_before_on_enter_elements", m + " table", f),
            h = e("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),
            v = e("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", h),
            y = e("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp");
        ui((i.special || "script noscript iframe noframes noembed title style textarea xmp").split(" "), function (e) {
            t[e] = new RegExp("</" + e + "[^>]*>", "gi");
        });
        var E = function (e) {
                return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$");
            },
            b = function (e) {
                var t,
                    n,
                    r,
                    o,
                    i,
                    a,
                    u,
                    s,
                    c,
                    l,
                    f,
                    d,
                    m,
                    p,
                    g,
                    h,
                    v,
                    y,
                    b = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,
                    C = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                    w = /[*?+]/;
                if (e) {
                    var x = fi(e, ",");
                    for (S["@"] && ((h = S["@"].attributes), (v = S["@"].attributesOrder)), t = 0, n = x.length; t < n; t++)
                        if ((i = b.exec(x[t]))) {
                            if (
                                ((p = i[1]),
                                (c = i[2]),
                                (g = i[3]),
                                (s = i[5]),
                                (a = { attributes: (d = {}), attributesOrder: (m = []) }),
                                "#" === p && (a.paddEmpty = !0),
                                "-" === p && (a.removeEmpty = !0),
                                "!" === i[4] && (a.removeEmptyAttrs = !0),
                                h &&
                                    (oe(h, function (e, t) {
                                        d[t] = e;
                                    }),
                                    m.push.apply(m, v)),
                                s)
                            )
                                for (r = 0, o = (s = fi(s, "|")).length; r < o; r++)
                                    if ((i = C.exec(s[r]))) {
                                        if (
                                            ((u = {}),
                                            (f = i[1]),
                                            (l = i[2].replace(/[\\:]:/g, ":")),
                                            (p = i[3]),
                                            (y = i[4]),
                                            "!" === f && ((a.attributesRequired = a.attributesRequired || []), a.attributesRequired.push(l), (u.required = !0)),
                                            "-" === f)
                                        ) {
                                            delete d[l], m.splice(li(m, l), 1);
                                            continue;
                                        }
                                        p &&
                                            ("=" === p && ((a.attributesDefault = a.attributesDefault || []), a.attributesDefault.push({ name: l, value: y }), (u.defaultValue = y)),
                                            ":" === p && ((a.attributesForced = a.attributesForced || []), a.attributesForced.push({ name: l, value: y }), (u.forcedValue = y)),
                                            "<" === p && (u.validValues = ai(y, "?"))),
                                            w.test(l) ? ((a.attributePatterns = a.attributePatterns || []), (u.pattern = E(l)), a.attributePatterns.push(u)) : (d[l] || m.push(l), (d[l] = u));
                                    }
                            h || "@" !== c || ((h = d), (v = m)), g && ((a.outputName = c), (S[g] = a)), w.test(c) ? ((a.pattern = E(c)), N.push(a)) : (S[c] = a);
                        }
                }
            },
            C = function (e) {
                (S = {}),
                    (N = []),
                    b(e),
                    ui(n, function (e, t) {
                        u[t] = e.children;
                    });
            },
            w = function (e) {
                var a = /^(~)?(.+)$/;
                e &&
                    ((oi.text_block_elements = oi.block_elements = null),
                    ui(fi(e, ","), function (e) {
                        var t,
                            n = a.exec(e),
                            r = "~" === n[1],
                            o = r ? "span" : "div",
                            i = n[2];
                        (u[i] = u[o]),
                            (s[i] = o),
                            r || ((v[i.toUpperCase()] = {}), (v[i] = {})),
                            S[i] || ((t = S[o]), delete (t = si({}, t)).removeEmptyAttrs, delete t.removeEmpty, (S[i] = t)),
                            ui(u, function (e, t) {
                                e[o] && ((u[t] = e = si({}, u[t])), (e[i] = e[o]));
                            });
                    }));
            },
            x = function (e) {
                var o = /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
                (oi[i.schema] = null),
                    e &&
                        ui(fi(e, ","), function (e) {
                            var t,
                                n,
                                r = o.exec(e);
                            r &&
                                ((n = r[1]),
                                (t = n ? u[r[2]] : (u[r[2]] = { "#comment": {} })),
                                (t = u[r[2]]),
                                ui(fi(r[3], "|"), function (e) {
                                    "-" === n ? delete t[e] : (t[e] = {});
                                }));
                        });
            },
            k = function (e) {
                var t,
                    n = S[e];
                if (n) return n;
                for (t = N.length; t--; ) if ((n = N[t]).pattern.test(e)) return n;
            };
        i.valid_elements
            ? C(i.valid_elements)
            : (ui(n, function (e, t) {
                  (S[t] = { attributes: e.attributes, attributesOrder: e.attributesOrder }), (u[t] = e.children);
              }),
              "html5" !== i.schema &&
                  ui(fi("strong/b em/i"), function (e) {
                      var t = fi(e, "/");
                      S[t[1]].outputName = t[0];
                  }),
              ui(fi("ol ul sub sup blockquote span font a table tbody tr strong em b i"), function (e) {
                  S[e] && (S[e].removeEmpty = !0);
              }),
              ui(fi("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), function (e) {
                  S[e].paddEmpty = !0;
              }),
              ui(fi("span"), function (e) {
                  S[e].removeEmptyAttrs = !0;
              })),
            w(i.custom_elements),
            x(i.valid_children),
            b(i.extended_valid_elements),
            x("+ol[ul|ol],+ul[ul|ol]"),
            ui({ dd: "dl", dt: "dl", li: "ul ol", td: "tr", th: "tr", tr: "tbody thead tfoot", tbody: "table", thead: "table", tfoot: "table", legend: "fieldset", area: "map", param: "video audio object" }, function (e, t) {
                S[t] && (S[t].parentsRequired = fi(e));
            }),
            i.invalid_elements &&
                ui(ci(i.invalid_elements), function (e) {
                    S[e] && delete S[e];
                }),
            k("span") || b("span[!data-mce-type|*]");
        return {
            children: u,
            elements: S,
            getValidStyles: function () {
                return r;
            },
            getValidClasses: function () {
                return a;
            },
            getBlockElements: function () {
                return v;
            },
            getInvalidStyles: function () {
                return o;
            },
            getShortEndedElements: function () {
                return f;
            },
            getTextBlockElements: function () {
                return h;
            },
            getTextInlineElements: function () {
                return y;
            },
            getBoolAttrs: function () {
                return d;
            },
            getElementRule: k,
            getSelfClosingElements: function () {
                return l;
            },
            getNonEmptyElements: function () {
                return p;
            },
            getMoveCaretBeforeOnEnterElements: function () {
                return g;
            },
            getWhiteSpaceElements: function () {
                return c;
            },
            getSpecialElements: function () {
                return t;
            },
            isValidChild: function (e, t) {
                var n = u[e.toLowerCase()];
                return !(!n || !n[t.toLowerCase()]);
            },
            isValid: function (e, t) {
                var n,
                    r,
                    o = k(e);
                if (o) {
                    if (!t) return !0;
                    if (o.attributes[t]) return !0;
                    if ((n = o.attributePatterns)) for (r = n.length; r--; ) if (n[r].pattern.test(e)) return !0;
                }
                return !1;
            },
            getCustomElements: function () {
                return s;
            },
            addValidElements: b,
            setValidElements: C,
            addCustomElements: w,
            addValidChildren: x,
        };
    }
    var gi = function (e, t, n, r) {
            var o = function (e) {
                return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e;
            };
            return "#" + o(t) + o(n) + o(r);
        },
        hi = function (b, e) {
            var s,
                c,
                C = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
                w = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
                x = /\s*([^:]+):\s*([^;]+);?/g,
                S = /\s+$/,
                N = {},
                E = ro;
            (b = b || {}), e && ((s = e.getValidStyles()), (c = e.getInvalidStyles()));
            for (var t = ("\\\" \\' \\; \\: ; : " + E).split(" "), k = 0; k < t.length; k++) (N[t[k]] = E + k), (N[E + k] = t[k]);
            return {
                toHex: function (e) {
                    return e.replace(C, gi);
                },
                parse: function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i,
                        a,
                        u,
                        s,
                        c = {},
                        l = b.url_converter,
                        f = b.url_converter_scope || this,
                        d = function (e, t, n) {
                            var r = c[e + "-top" + t];
                            if (r) {
                                var o = c[e + "-right" + t];
                                if (o) {
                                    var i = c[e + "-bottom" + t];
                                    if (i) {
                                        var a = c[e + "-left" + t];
                                        if (a) {
                                            var u = [r, o, i, a];
                                            for (k = u.length - 1; k-- && u[k] === u[k + 1]; );
                                            (-1 < k && n) || ((c[e + t] = -1 === k ? u[0] : u.join(" ")), delete c[e + "-top" + t], delete c[e + "-right" + t], delete c[e + "-bottom" + t], delete c[e + "-left" + t]);
                                        }
                                    }
                                }
                            }
                        },
                        m = function (e) {
                            var t,
                                n = c[e];
                            if (n) {
                                for (t = (n = n.split(" ")).length; t--; ) if (n[t] !== n[0]) return !1;
                                return (c[e] = n[0]), !0;
                            }
                        },
                        p = function (e) {
                            return (o = !0), N[e];
                        },
                        g = function (e, t) {
                            return (
                                o &&
                                    (e = e.replace(/\uFEFF[0-9]/g, function (e) {
                                        return N[e];
                                    })),
                                t || (e = e.replace(/\\([\'\";:])/g, "$1")),
                                e
                            );
                        },
                        h = function (e) {
                            return String.fromCharCode(parseInt(e.slice(1), 16));
                        },
                        v = function (e) {
                            return e.replace(/\\[0-9a-f]+/gi, h);
                        },
                        y = function (e, t, n, r, o, i) {
                            if ((o = o || i)) return "'" + (o = g(o)).replace(/\'/g, "\\'") + "'";
                            if (((t = g(t || n || r)), !b.allow_script_urls)) {
                                var a = t.replace(/[\s\r\n]+/g, "");
                                if (/(java|vb)script:/i.test(a)) return "";
                                if (!b.allow_svg_data_urls && /^data:image\/svg/i.test(a)) return "";
                            }
                            return l && (t = l.call(f, t, "style")), "url('" + t.replace(/\'/g, "\\'") + "')";
                        };
                    if (e) {
                        for (
                            e = (e = e.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, p).replace(/\"[^\"]+\"|\'[^\']+\'/g, function (e) {
                                return e.replace(/[;:]/g, p);
                            });
                            (t = x.exec(e));

                        )
                            if (((x.lastIndex = t.index + t[0].length), (n = t[1].replace(S, "").toLowerCase()), (r = t[2].replace(S, "")), n && r)) {
                                if (((n = v(n)), (r = v(r)), -1 !== n.indexOf(E) || -1 !== n.indexOf('"'))) continue;
                                if (!b.allow_script_urls && ("behavior" === n || /expression\s*\(|\/\*|\*\//.test(r))) continue;
                                "font-weight" === n && "700" === r ? (r = "bold") : ("color" !== n && "background-color" !== n) || (r = r.toLowerCase()), (r = (r = r.replace(C, gi)).replace(w, y)), (c[n] = o ? g(r, !0) : r);
                            }
                        d("border", "", !0),
                            d("border", "-width"),
                            d("border", "-color"),
                            d("border", "-style"),
                            d("padding", ""),
                            d("margin", ""),
                            (i = "border"),
                            (u = "border-style"),
                            (s = "border-color"),
                            m((a = "border-width")) && m(u) && m(s) && ((c[i] = c[a] + " " + c[u] + " " + c[s]), delete c[a], delete c[u], delete c[s]),
                            "medium none" === c.border && delete c.border,
                            "none" === c["border-image"] && delete c["border-image"];
                    }
                    return c;
                },
                serialize: function (i, a) {
                    var u = "",
                        e = function (e) {
                            var t,
                                n = s[e];
                            if (n) for (var r = 0, o = n.length; r < o; r++) (e = n[r]), (t = i[e]) && (u += (0 < u.length ? " " : "") + e + ": " + t + ";");
                        };
                    return (
                        a && s
                            ? (e("*"), e(a))
                            : oe(i, function (e, t) {
                                  var n, r, o;
                                  !e || (c && ((n = t), (r = a), ((o = c["*"]) && o[n]) || ((o = c[r]) && o[n]))) || (u += (0 < u.length ? " " : "") + t + ": " + e + ";");
                              }),
                        u
                    );
                },
            };
        },
        vi = /^(?:mouse|contextmenu)|click/,
        yi = { keyLocation: 1, layerX: 1, layerY: 1, returnValue: 1, webkitMovementX: 1, webkitMovementY: 1, keyIdentifier: 1, mozPressure: 1 },
        bi = function () {
            return !1;
        },
        Ci = function () {
            return !0;
        },
        wi = function (e, t, n, r) {
            e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n);
        },
        xi = function (e, t, n, r) {
            e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n);
        },
        Si = function (e, t) {
            var n,
                r,
                o,
                i,
                a,
                u,
                s = t || {};
            for (n in e) yi[n] || (s[n] = e[n]);
            return (
                s.target || (s.target = s.srcElement || document),
                s.composedPath &&
                    (s.composedPath = function () {
                        return e.composedPath();
                    }),
                e &&
                    ((a = e), vi.test(a.type)) &&
                    e.pageX === undefined &&
                    e.clientX !== undefined &&
                    ((o = (r = s.target.ownerDocument || document).documentElement),
                    (i = r.body),
                    (s.pageX = e.clientX + ((o && o.scrollLeft) || (i && i.scrollLeft) || 0) - ((o && o.clientLeft) || (i && i.clientLeft) || 0)),
                    (s.pageY = e.clientY + ((o && o.scrollTop) || (i && i.scrollTop) || 0) - ((o && o.clientTop) || (i && i.clientTop) || 0))),
                (s.preventDefault = function () {
                    (s.isDefaultPrevented = Ci), e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
                }),
                (s.stopPropagation = function () {
                    (s.isPropagationStopped = Ci), e && (e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0));
                }),
                !(s.stopImmediatePropagation = function () {
                    (s.isImmediatePropagationStopped = Ci), s.stopPropagation();
                }) == ((u = s).isDefaultPrevented === Ci || u.isDefaultPrevented === bi) && ((s.isDefaultPrevented = bi), (s.isPropagationStopped = bi), (s.isImmediatePropagationStopped = bi)),
                "undefined" == typeof s.metaKey && (s.metaKey = !1),
                s
            );
        },
        Ni =
            ((Ei.prototype.bind = function (e, t, n, r) {
                var o,
                    i,
                    a,
                    u,
                    s,
                    c,
                    l = this,
                    f = window,
                    d = function (e) {
                        l.executeHandlers(Si(e || f.event), o);
                    };
                if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
                    e[l.expando] ? (o = e[l.expando]) : ((o = l.count++), (e[l.expando] = o), (l.events[o] = {})), (r = r || e);
                    for (var m = t.split(" "), p = m.length; p--; )
                        (s = d),
                            (u = c = !1),
                            "DOMContentLoaded" === (a = m[p]) && (a = "ready"),
                            l.domLoaded && "ready" === a && "complete" === e.readyState
                                ? n.call(r, Si({ type: a }))
                                : (l.hasMouseEnterLeave ||
                                      ((u = l.mouseEnterLeave[a]) &&
                                          (s = function (e) {
                                              var t = e.currentTarget,
                                                  n = e.relatedTarget;
                                              if (n && t.contains) n = t.contains(n);
                                              else for (; n && n !== t; ) n = n.parentNode;
                                              n || (((e = Si(e || f.event)).type = "mouseout" === e.type ? "mouseleave" : "mouseenter"), (e.target = t), l.executeHandlers(e, o));
                                          })),
                                  l.hasFocusIn ||
                                      ("focusin" !== a && "focusout" !== a) ||
                                      ((c = !0),
                                      (u = "focusin" === a ? "focus" : "blur"),
                                      (s = function (e) {
                                          ((e = Si(e || f.event)).type = "focus" === e.type ? "focusin" : "focusout"), l.executeHandlers(e, o);
                                      })),
                                  (i = l.events[o][a])
                                      ? "ready" === a && l.domLoaded
                                          ? n(Si({ type: a }))
                                          : i.push({ func: n, scope: r })
                                      : ((l.events[o][a] = i = [{ func: n, scope: r }]),
                                        (i.fakeName = u),
                                        (i.capture = c),
                                        (i.nativeHandler = s),
                                        "ready" === a
                                            ? (function (e, t, n) {
                                                  var r,
                                                      o = e.document,
                                                      i = { type: "ready" };
                                                  n.domLoaded
                                                      ? t(i)
                                                      : ((r = function () {
                                                            xi(e, "DOMContentLoaded", r), xi(e, "load", r), n.domLoaded || ((n.domLoaded = !0), t(i));
                                                        }),
                                                        "complete" === o.readyState || ("interactive" === o.readyState && o.body) ? r() : wi(e, "DOMContentLoaded", r),
                                                        wi(e, "load", r));
                                              })(e, s, l)
                                            : wi(e, u || a, s, c)));
                    return (e = i = null), n;
                }
            }),
            (Ei.prototype.unbind = function (n, e, t) {
                var r, o, i;
                if (!n || 3 === n.nodeType || 8 === n.nodeType) return this;
                var a = n[this.expando];
                if (a) {
                    if (((i = this.events[a]), e)) {
                        for (var u, s, c, l, f = e.split(" "), d = f.length; d--; )
                            if ((l = i[(o = f[d])])) {
                                if (t)
                                    for (r = l.length; r--; )
                                        l[r].func === t && ((u = l.nativeHandler), (s = l.fakeName), (c = l.capture), ((l = l.slice(0, r).concat(l.slice(r + 1))).nativeHandler = u), (l.fakeName = s), (l.capture = c), (i[o] = l));
                                (t && 0 !== l.length) || (delete i[o], xi(n, l.fakeName || o, l.nativeHandler, l.capture));
                            }
                    } else
                        oe(i, function (e, t) {
                            xi(n, e.fakeName || t, e.nativeHandler, e.capture);
                        }),
                            (i = {});
                    for (o in i) if (me(i, o)) return this;
                    delete this.events[a];
                    try {
                        delete n[this.expando];
                    } catch (m) {
                        n[this.expando] = null;
                    }
                }
                return this;
            }),
            (Ei.prototype.fire = function (e, t, n) {
                var r;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
                var o = Si(null, n);
                for (o.type = t, o.target = e; (r = e[this.expando]) && this.executeHandlers(o, r), (e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow) && !o.isPropagationStopped(); );
                return this;
            }),
            (Ei.prototype.clean = function (e) {
                var t, n;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
                if ((e[this.expando] && this.unbind(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName))
                    for (this.unbind(e), t = (n = e.getElementsByTagName("*")).length; t--; ) (e = n[t])[this.expando] && this.unbind(e);
                return this;
            }),
            (Ei.prototype.destroy = function () {
                this.events = {};
            }),
            (Ei.prototype.cancel = function (e) {
                return e && (e.preventDefault(), e.stopImmediatePropagation()), !1;
            }),
            (Ei.prototype.executeHandlers = function (e, t) {
                var n = this.events[t],
                    r = n && n[e.type];
                if (r)
                    for (var o = 0, i = r.length; o < i; o++) {
                        var a = r[o];
                        if ((a && !1 === a.func.call(a.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped())) return;
                    }
            }),
            (Ei.Event = new Ei()),
            Ei);
    function Ei() {
        (this.domLoaded = !1),
            (this.events = {}),
            (this.count = 1),
            (this.expando = "mce-data-" + (+new Date()).toString(32)),
            (this.hasMouseEnterLeave = "onmouseenter" in document.documentElement),
            (this.hasFocusIn = "onfocusin" in document.documentElement),
            (this.count = 1);
    }
    var ki,
        _i,
        Ri,
        Ti,
        Ai,
        Di,
        Oi,
        Bi,
        Pi,
        Li,
        Ii,
        Mi,
        Fi,
        Ui,
        zi,
        ji,
        Hi,
        Vi = "sizzle" + -new Date(),
        qi = window.document,
        $i = 0,
        Wi = 0,
        Ki = Ea(),
        Xi = Ea(),
        Yi = Ea(),
        Gi = function (e, t) {
            return e === t && (Li = !0), 0;
        },
        Ji = typeof undefined,
        Qi = {}.hasOwnProperty,
        Zi = [],
        ea = Zi.pop,
        ta = Zi.push,
        na = Zi.push,
        ra = Zi.slice,
        oa =
            Zi.indexOf ||
            function (e) {
                for (var t = 0, n = this.length; t < n; t++) if (this[t] === e) return t;
                return -1;
            },
        ia = "[\\x20\\t\\r\\n\\f]",
        aa = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ua = "\\[" + ia + "*(" + aa + ")(?:" + ia + "*([*^$|!~]?=)" + ia + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + aa + "))|)" + ia + "*\\]",
        sa = ":(" + aa + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ua + ")*)|.*)\\)|)",
        ca = new RegExp("^" + ia + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ia + "+$", "g"),
        la = new RegExp("^" + ia + "*," + ia + "*"),
        fa = new RegExp("^" + ia + "*([>+~]|" + ia + ")" + ia + "*"),
        da = new RegExp("=" + ia + "*([^\\]'\"]*?)" + ia + "*\\]", "g"),
        ma = new RegExp(sa),
        pa = new RegExp("^" + aa + "$"),
        ga = {
            ID: new RegExp("^#(" + aa + ")"),
            CLASS: new RegExp("^\\.(" + aa + ")"),
            TAG: new RegExp("^(" + aa + "|[*])"),
            ATTR: new RegExp("^" + ua),
            PSEUDO: new RegExp("^" + sa),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ia + "*(even|odd|(([+-]|)(\\d*)n|)" + ia + "*(?:([+-]|)" + ia + "*(\\d+)|))" + ia + "*\\)|)", "i"),
            bool: new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: new RegExp("^" + ia + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ia + "*((?:-\\d)?\\d*)" + ia + "*\\)|)(?=[^-]|$)", "i"),
        },
        ha = /^(?:input|select|textarea|button)$/i,
        va = /^h\d$/i,
        ya = /^[^{]+\{\s*\[native \w/,
        ba = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Ca = /[+~]/,
        wa = /'|\\/g,
        xa = new RegExp("\\\\([\\da-f]{1,6}" + ia + "?|(" + ia + ")|.)", "ig"),
        Sa = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
        };
    try {
        na.apply((Zi = ra.call(qi.childNodes)), qi.childNodes), Zi[qi.childNodes.length].nodeType;
    } catch (pk) {
        na = {
            apply: Zi.length
                ? function (e, t) {
                      ta.apply(e, ra.call(t));
                  }
                : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                  },
        };
    }
    var Na = function (e, t, n, r) {
        var o, i, a, u, s, c, l, f, d, m;
        if (((t ? t.ownerDocument || t : qi) !== Mi && Ii(t), (n = n || []), !e || "string" != typeof e)) return n;
        if (1 !== (u = (t = t || Mi).nodeType) && 9 !== u) return [];
        if (Ui && !r) {
            if ((o = ba.exec(e)))
                if ((a = o[1])) {
                    if (9 === u) {
                        if (!(i = t.getElementById(a)) || !i.parentNode) return n;
                        if (i.id === a) return n.push(i), n;
                    } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && Hi(t, i) && i.id === a) return n.push(i), n;
                } else {
                    if (o[2]) return na.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = o[3]) && ki.getElementsByClassName) return na.apply(n, t.getElementsByClassName(a)), n;
                }
            if (ki.qsa && (!zi || !zi.test(e))) {
                if (((f = l = Vi), (d = t), (m = 9 === u && e), 1 === u && "object" !== t.nodeName.toLowerCase())) {
                    for (c = Ai(e), (l = t.getAttribute("id")) ? (f = l.replace(wa, "\\$&")) : t.setAttribute("id", f), f = "[id='" + f + "'] ", s = c.length; s--; ) c[s] = f + Da(c[s]);
                    (d = (Ca.test(e) && Ta(t.parentNode)) || t), (m = c.join(","));
                }
                if (m)
                    try {
                        return na.apply(n, d.querySelectorAll(m)), n;
                    } catch (p) {
                    } finally {
                        l || t.removeAttribute("id");
                    }
            }
        }
        return Oi(e.replace(ca, "$1"), t, n, r);
    };
    function Ea() {
        var n = [];
        function r(e, t) {
            return n.push(e + " ") > _i.cacheLength && delete r[n.shift()], (r[e + " "] = t);
        }
        return r;
    }
    function ka(e) {
        return (e[Vi] = !0), e;
    }
    function _a(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (r) return r;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
    }
    function Ra(a) {
        return ka(function (i) {
            return (
                (i = +i),
                ka(function (e, t) {
                    for (var n, r = a([], e.length, i), o = r.length; o--; ) e[(n = r[o])] && (e[n] = !(t[n] = e[n]));
                })
            );
        });
    }
    function Ta(e) {
        return e && typeof e.getElementsByTagName != Ji && e;
    }
    function Aa() {}
    function Da(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r;
    }
    function Oa(a, e, t) {
        var u = e.dir,
            s = t && "parentNode" === u,
            c = Wi++;
        return e.first
            ? function (e, t, n) {
                  for (; (e = e[u]); ) if (1 === e.nodeType || s) return a(e, t, n);
              }
            : function (e, t, n) {
                  var r,
                      o,
                      i = [$i, c];
                  if (n) {
                      for (; (e = e[u]); ) if ((1 === e.nodeType || s) && a(e, t, n)) return !0;
                  } else
                      for (; (e = e[u]); )
                          if (1 === e.nodeType || s) {
                              if ((r = (o = e[Vi] || (e[Vi] = {}))[u]) && r[0] === $i && r[1] === c) return (i[2] = r[2]);
                              if (((o[u] = i)[2] = a(e, t, n))) return !0;
                          }
              };
    }
    function Ba(o) {
        return 1 < o.length
            ? function (e, t, n) {
                  for (var r = o.length; r--; ) if (!o[r](e, t, n)) return !1;
                  return !0;
              }
            : o[0];
    }
    function Pa(e, t, n, r, o) {
        for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++) (i = e[u]) && ((n && !n(i, r, o)) || (a.push(i), c && t.push(u)));
        return a;
    }
    function La(m, p, g, h, v, e) {
        return (
            h && !h[Vi] && (h = La(h)),
            v && !v[Vi] && (v = La(v, e)),
            ka(function (e, t, n, r) {
                var o,
                    i,
                    a,
                    u = [],
                    s = [],
                    c = t.length,
                    l =
                        e ||
                        (function (e, t, n) {
                            for (var r = 0, o = t.length; r < o; r++) Na(e, t[r], n);
                            return n;
                        })(p || "*", n.nodeType ? [n] : n, []),
                    f = !m || (!e && p) ? l : Pa(l, u, m, n, r),
                    d = g ? (v || (e ? m : c || h) ? [] : t) : f;
                if ((g && g(f, d, n, r), h)) for (o = Pa(d, s), h(o, [], n, r), i = o.length; i--; ) (a = o[i]) && (d[s[i]] = !(f[s[i]] = a));
                if (e) {
                    if (v || m) {
                        if (v) {
                            for (o = [], i = d.length; i--; ) (a = d[i]) && o.push((f[i] = a));
                            v(null, (d = []), o, r);
                        }
                        for (i = d.length; i--; ) (a = d[i]) && -1 < (o = v ? oa.call(e, a) : u[i]) && (e[o] = !(t[o] = a));
                    }
                } else (d = Pa(d === t ? d.splice(c, d.length) : d)), v ? v(null, t, d, r) : na.apply(t, d);
            })
        );
    }
    (ki = Na.support = {}),
        (Ti = Na.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }),
        (Ii = Na.setDocument = function (e) {
            var t,
                s = e ? e.ownerDocument || e : qi,
                n = s.defaultView;
            return s !== Mi && 9 === s.nodeType && s.documentElement
                ? ((Fi = (Mi = s).documentElement),
                  (Ui = !Ti(s)),
                  n &&
                      n !==
                          (function (e) {
                              try {
                                  return e.top;
                              } catch (t) {}
                              return null;
                          })(n) &&
                      (n.addEventListener
                          ? n.addEventListener(
                                "unload",
                                function () {
                                    Ii();
                                },
                                !1
                            )
                          : n.attachEvent &&
                            n.attachEvent("onunload", function () {
                                Ii();
                            })),
                  (ki.attributes = !0),
                  (ki.getElementsByTagName = !0),
                  (ki.getElementsByClassName = ya.test(s.getElementsByClassName)),
                  (ki.getById = !0),
                  (_i.find.ID = function (e, t) {
                      if (typeof t.getElementById != Ji && Ui) {
                          var n = t.getElementById(e);
                          return n && n.parentNode ? [n] : [];
                      }
                  }),
                  (_i.filter.ID = function (e) {
                      var t = e.replace(xa, Sa);
                      return function (e) {
                          return e.getAttribute("id") === t;
                      };
                  }),
                  (_i.find.TAG = ki.getElementsByTagName
                      ? function (e, t) {
                            if (typeof t.getElementsByTagName != Ji) return t.getElementsByTagName(e);
                        }
                      : function (e, t) {
                            var n,
                                r = [],
                                o = 0,
                                i = t.getElementsByTagName(e);
                            if ("*" !== e) return i;
                            for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                            return r;
                        }),
                  (_i.find.CLASS =
                      ki.getElementsByClassName &&
                      function (e, t) {
                          if (Ui) return t.getElementsByClassName(e);
                      }),
                  (ji = []),
                  (zi = []),
                  (ki.disconnectedMatch = !0),
                  (zi = zi.length && new RegExp(zi.join("|"))),
                  (ji = ji.length && new RegExp(ji.join("|"))),
                  (t = ya.test(Fi.compareDocumentPosition)),
                  (Hi =
                      t || ya.test(Fi.contains)
                          ? function (e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                            }
                          : function (e, t) {
                                if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                return !1;
                            }),
                  (Gi = t
                      ? function (e, t) {
                            if (e === t) return (Li = !0), 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return (
                                n ||
                                (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!ki.sortDetached && t.compareDocumentPosition(e) === n)
                                    ? e === s || (e.ownerDocument === qi && Hi(qi, e))
                                        ? -1
                                        : t === s || (t.ownerDocument === qi && Hi(qi, t))
                                        ? 1
                                        : Pi
                                        ? oa.call(Pi, e) - oa.call(Pi, t)
                                        : 0
                                    : 4 & n
                                    ? -1
                                    : 1)
                            );
                        }
                      : function (e, t) {
                            if (e === t) return (Li = !0), 0;
                            var n,
                                r = 0,
                                o = e.parentNode,
                                i = t.parentNode,
                                a = [e],
                                u = [t];
                            if (!o || !i) return e === s ? -1 : t === s ? 1 : o ? -1 : i ? 1 : Pi ? oa.call(Pi, e) - oa.call(Pi, t) : 0;
                            if (o === i) return _a(e, t);
                            for (n = e; (n = n.parentNode); ) a.unshift(n);
                            for (n = t; (n = n.parentNode); ) u.unshift(n);
                            for (; a[r] === u[r]; ) r++;
                            return r ? _a(a[r], u[r]) : a[r] === qi ? -1 : u[r] === qi ? 1 : 0;
                        }),
                  s)
                : Mi;
        }),
        (Na.matches = function (e, t) {
            return Na(e, null, null, t);
        }),
        (Na.matchesSelector = function (e, t) {
            if (((e.ownerDocument || e) !== Mi && Ii(e), (t = t.replace(da, "='$1']")), ki.matchesSelector && Ui && (!ji || !ji.test(t)) && (!zi || !zi.test(t))))
                try {
                    var n = (void 0).call(e, t);
                    if (n || ki.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                } catch (pk) {}
            return 0 < Na(t, Mi, null, [e]).length;
        }),
        (Na.contains = function (e, t) {
            return (e.ownerDocument || e) !== Mi && Ii(e), Hi(e, t);
        }),
        (Na.attr = function (e, t) {
            (e.ownerDocument || e) !== Mi && Ii(e);
            var n = _i.attrHandle[t.toLowerCase()],
                r = n && Qi.call(_i.attrHandle, t.toLowerCase()) ? n(e, t, !Ui) : undefined;
            return r !== undefined ? r : ki.attributes || !Ui ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }),
        (Na.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (Na.uniqueSort = function (e) {
            var t,
                n = [],
                r = 0,
                o = 0;
            if (((Li = !ki.detectDuplicates), (Pi = !ki.sortStable && e.slice(0)), e.sort(Gi), Li)) {
                for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
                for (; r--; ) e.splice(n[r], 1);
            }
            return (Pi = null), e;
        }),
        (Ri = Na.getText = function (e) {
            var t,
                n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += Ri(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += Ri(t);
            return n;
        }),
        ((_i = Na.selectors = {
            cacheLength: 50,
            createPseudo: ka,
            match: ga,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(xa, Sa)), (e[3] = (e[3] || e[4] || e[5] || "").replace(xa, Sa)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || Na.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && Na.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return ga.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && ma.test(n) && (t = Ai(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(xa, Sa).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function (e) {
                    var t = Ki[e + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + ia + ")" + e + "(" + ia + "|$)")) &&
                            Ki(e, function (e) {
                                return t.test(("string" == typeof e.className && e.className) || (typeof e.getAttribute != Ji && e.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (n, r, o) {
                    return function (e) {
                        var t = Na.attr(e, n);
                        return null == t
                            ? "!=" === r
                            : !r ||
                                  ((t += ""),
                                  "=" === r
                                      ? t === o
                                      : "!=" === r
                                      ? t !== o
                                      : "^=" === r
                                      ? o && 0 === t.indexOf(o)
                                      : "*=" === r
                                      ? o && -1 < t.indexOf(o)
                                      : "$=" === r
                                      ? o && t.slice(-o.length) === o
                                      : "~=" === r
                                      ? -1 < (" " + t + " ").indexOf(o)
                                      : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-"));
                    };
                },
                CHILD: function (m, e, t, p, g) {
                    var h = "nth" !== m.slice(0, 3),
                        v = "last" !== m.slice(-4),
                        y = "of-type" === e;
                    return 1 === p && 0 === g
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (e, t, n) {
                              var r,
                                  o,
                                  i,
                                  a,
                                  u,
                                  s,
                                  c = h != v ? "nextSibling" : "previousSibling",
                                  l = e.parentNode,
                                  f = y && e.nodeName.toLowerCase(),
                                  d = !n && !y;
                              if (l) {
                                  if (h) {
                                      for (; c; ) {
                                          for (i = e; (i = i[c]); ) if (y ? i.nodeName.toLowerCase() === f : 1 === i.nodeType) return !1;
                                          s = c = "only" === m && !s && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((s = [v ? l.firstChild : l.lastChild]), v && d)) {
                                      for (u = (r = (o = l[Vi] || (l[Vi] = {}))[m] || [])[0] === $i && r[1], a = r[0] === $i && r[2], i = u && l.childNodes[u]; (i = (++u && i && i[c]) || (a = u = 0) || s.pop()); )
                                          if (1 === i.nodeType && ++a && i === e) {
                                              o[m] = [$i, u, a];
                                              break;
                                          }
                                  } else if (d && (r = (e[Vi] || (e[Vi] = {}))[m]) && r[0] === $i) a = r[1];
                                  else for (; (i = (++u && i && i[c]) || (a = u = 0) || s.pop()) && ((y ? i.nodeName.toLowerCase() !== f : 1 !== i.nodeType) || !++a || (d && ((i[Vi] || (i[Vi] = {}))[m] = [$i, a]), i !== e)); );
                                  return (a -= g) === p || (a % p == 0 && 0 <= a / p);
                              }
                          };
                },
                PSEUDO: function (e, i) {
                    var t,
                        a = _i.pseudos[e] || _i.setFilters[e.toLowerCase()] || Na.error("unsupported pseudo: " + e);
                    return a[Vi]
                        ? a(i)
                        : 1 < a.length
                        ? ((t = [e, e, "", i]),
                          _i.setFilters.hasOwnProperty(e.toLowerCase())
                              ? ka(function (e, t) {
                                    for (var n, r = a(e, i), o = r.length; o--; ) e[(n = oa.call(e, r[o]))] = !(t[n] = r[o]);
                                })
                              : function (e) {
                                    return a(e, 0, t);
                                })
                        : a;
                },
            },
            pseudos: {
                not: ka(function (e) {
                    var r = [],
                        o = [],
                        u = Di(e.replace(ca, "$1"));
                    return u[Vi]
                        ? ka(function (e, t, n, r) {
                              for (var o, i = u(e, null, r, []), a = e.length; a--; ) (o = i[a]) && (e[a] = !(t[a] = o));
                          })
                        : function (e, t, n) {
                              return (r[0] = e), u(r, null, n, o), !o.pop();
                          };
                }),
                has: ka(function (t) {
                    return function (e) {
                        return 0 < Na(t, e).length;
                    };
                }),
                contains: ka(function (t) {
                    return (
                        (t = t.replace(xa, Sa)),
                        function (e) {
                            return -1 < (e.textContent || e.innerText || Ri(e)).indexOf(t);
                        }
                    );
                }),
                lang: ka(function (n) {
                    return (
                        pa.test(n || "") || Na.error("unsupported lang: " + n),
                        (n = n.replace(xa, Sa).toLowerCase()),
                        function (e) {
                            var t;
                            do {
                                if ((t = Ui ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (e) {
                    var t = window.location && window.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function (e) {
                    return e === Fi;
                },
                focus: function (e) {
                    return e === Mi.activeElement && (!Mi.hasFocus || Mi.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function (e) {
                    return !1 === e.disabled;
                },
                disabled: function (e) {
                    return !0 === e.disabled;
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !_i.pseudos.empty(e);
                },
                header: function (e) {
                    return va.test(e.nodeName);
                },
                input: function (e) {
                    return ha.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: Ra(function () {
                    return [0];
                }),
                last: Ra(function (e, t) {
                    return [t - 1];
                }),
                eq: Ra(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: Ra(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: Ra(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: Ra(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
                    return e;
                }),
                gt: Ra(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                }),
            },
        }).pseudos.nth = _i.pseudos.eq),
        $(["radio", "checkbox", "file", "password", "image"], function (e) {
            var t;
            _i.pseudos[e] =
                ((t = e),
                function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t;
                });
        }),
        $(["submit", "reset"], function (e) {
            var n;
            _i.pseudos[e] =
                ((n = e),
                function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n;
                });
        }),
        (Aa.prototype = _i.filters = _i.pseudos),
        (_i.setFilters = new Aa()),
        (Ai = Na.tokenize = function (e, t) {
            var n,
                r,
                o,
                i,
                a,
                u,
                s,
                c = Xi[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, u = [], s = _i.preFilter; a; ) {
                for (i in ((n && !(r = la.exec(a))) || (r && (a = a.slice(r[0].length) || a), u.push((o = []))),
                (n = !1),
                (r = fa.exec(a)) && ((n = r.shift()), o.push({ value: n, type: r[0].replace(ca, " ") }), (a = a.slice(n.length))),
                _i.filter))
                    _i.filter.hasOwnProperty(i) && (!(r = ga[i].exec(a)) || (s[i] && !(r = s[i](r))) || ((n = r.shift()), o.push({ value: n, type: i, matches: r }), (a = a.slice(n.length))));
                if (!n) break;
            }
            return t ? a.length : a ? Na.error(e) : Xi(e, u).slice(0);
        }),
        (Di = Na.compile = function (e, t) {
            var n,
                h,
                v,
                y,
                b,
                r,
                o = [],
                i = [],
                a = Yi[e + " "];
            if (!a) {
                for (n = (t = t || Ai(e)).length; n--; )
                    (a = (function f(e) {
                        for (
                            var r,
                                t,
                                n,
                                o = e.length,
                                i = _i.relative[e[0].type],
                                a = i || _i.relative[" "],
                                u = i ? 1 : 0,
                                s = Oa(
                                    function (e) {
                                        return e === r;
                                    },
                                    a,
                                    !0
                                ),
                                c = Oa(
                                    function (e) {
                                        return -1 < oa.call(r, e);
                                    },
                                    a,
                                    !0
                                ),
                                l = [
                                    function (e, t, n) {
                                        return (!i && (n || t !== Bi)) || ((r = t).nodeType ? s : c)(e, t, n);
                                    },
                                ];
                            u < o;
                            u++
                        )
                            if ((t = _i.relative[e[u].type])) l = [Oa(Ba(l), t)];
                            else {
                                if ((t = _i.filter[e[u].type].apply(null, e[u].matches))[Vi]) {
                                    for (n = ++u; n < o && !_i.relative[e[n].type]; n++);
                                    return La(1 < u && Ba(l), 1 < u && Da(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(ca, "$1"), t, u < n && f(e.slice(u, n)), n < o && f((e = e.slice(n))), n < o && Da(e));
                                }
                                l.push(t);
                            }
                        return Ba(l);
                    })(t[n]))[Vi]
                        ? o.push(a)
                        : i.push(a);
                (a = Yi(
                    e,
                    ((h = i),
                    (y = 0 < (v = o).length),
                    (b = 0 < h.length),
                    (r = function (e, t, n, r, o) {
                        var i,
                            a,
                            u,
                            s = 0,
                            c = "0",
                            l = e && [],
                            f = [],
                            d = Bi,
                            m = e || (b && _i.find.TAG("*", o)),
                            p = ($i += null == d ? 1 : Math.random() || 0.1),
                            g = m.length;
                        for (o && (Bi = t !== Mi && t); c !== g && null != (i = m[c]); c++) {
                            if (b && i) {
                                for (a = 0; (u = h[a++]); )
                                    if (u(i, t, n)) {
                                        r.push(i);
                                        break;
                                    }
                                o && ($i = p);
                            }
                            y && ((i = !u && i) && s--, e && l.push(i));
                        }
                        if (((s += c), y && c !== s)) {
                            for (a = 0; (u = v[a++]); ) u(l, f, t, n);
                            if (e) {
                                if (0 < s) for (; c--; ) l[c] || f[c] || (f[c] = ea.call(r));
                                f = Pa(f);
                            }
                            na.apply(r, f), o && !e && 0 < f.length && 1 < s + v.length && Na.uniqueSort(r);
                        }
                        return o && (($i = p), (Bi = d)), l;
                    }),
                    y ? ka(r) : r)
                )).selector = e;
            }
            return a;
        }),
        (Oi = Na.select = function (e, t, n, r) {
            var o,
                i,
                a,
                u,
                s,
                c = "function" == typeof e && e,
                l = !r && Ai((e = c.selector || e));
            if (((n = n || []), 1 === l.length)) {
                if (2 < (i = l[0] = l[0].slice(0)).length && "ID" === (a = i[0]).type && ki.getById && 9 === t.nodeType && Ui && _i.relative[i[1].type]) {
                    if (!(t = (_i.find.ID(a.matches[0].replace(xa, Sa), t) || [])[0])) return n;
                    c && (t = t.parentNode), (e = e.slice(i.shift().value.length));
                }
                for (o = ga.needsContext.test(e) ? 0 : i.length; o-- && ((a = i[o]), !_i.relative[(u = a.type)]); )
                    if ((s = _i.find[u]) && (r = s(a.matches[0].replace(xa, Sa), (Ca.test(i[0].type) && Ta(t.parentNode)) || t))) {
                        if ((i.splice(o, 1), !(e = r.length && Da(i)))) return na.apply(n, r), n;
                        break;
                    }
            }
            return (c || Di(e, l))(r, t, !Ui, n, (Ca.test(e) && Ta(t.parentNode)) || t), n;
        }),
        (ki.sortStable = Vi.split("").sort(Gi).join("") === Vi),
        (ki.detectDuplicates = !!Li),
        Ii(),
        (ki.sortDetached = !0);
    var Ia = document,
        Ma = Array.prototype.push,
        Fa = Array.prototype.slice,
        Ua = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        za = Ni.Event,
        ja = xt.makeMap("children,contents,next,prev"),
        Ha = function (e) {
            return void 0 !== e;
        },
        Va = function (e) {
            return "string" == typeof e;
        },
        qa = function (e, t) {
            var n,
                r = (t = t || Ia).createElement("div"),
                o = t.createDocumentFragment();
            for (r.innerHTML = e; (n = r.firstChild); ) o.appendChild(n);
            return o;
        },
        $a = function (e, t, n, r) {
            var o;
            if (Va(t)) t = qa(t, iu(e[0]));
            else if (t.length && !t.nodeType) {
                if (((t = lu.makeArray(t)), r)) for (o = t.length - 1; 0 <= o; o--) $a(e, t[o], n, r);
                else for (o = 0; o < t.length; o++) $a(e, t[o], n, r);
                return e;
            }
            if (t.nodeType) for (o = e.length; o--; ) n.call(e[o], t);
            return e;
        },
        Wa = function (e, t) {
            return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ");
        },
        Ka = function (e, t, n) {
            var r, o;
            return (
                (t = lu(t)[0]),
                e.each(function () {
                    (n && r === this.parentNode) || ((r = this.parentNode), (o = t.cloneNode(!1)), this.parentNode.insertBefore(o, this)), o.appendChild(this);
                }),
                e
            );
        },
        Xa = xt.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " "),
        Ya = xt.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected", " "),
        Ga = { for: "htmlFor", class: "className", readonly: "readOnly" },
        Ja = { float: "cssFloat" },
        Qa = {},
        Za = {},
        eu = function (e, t) {
            return new lu.fn.init(e, t);
        },
        tu = /^\s*|\s*$/g,
        nu = function (e) {
            return null === e || e === undefined ? "" : ("" + e).replace(tu, "");
        },
        ru = function (e, t) {
            var n, r, o, i;
            if (e)
                if ((n = e.length) === undefined) {
                    for (r in e) if (e.hasOwnProperty(r) && ((i = e[r]), !1 === t.call(i, r, i))) break;
                } else for (o = 0; o < n && ((i = e[o]), !1 !== t.call(i, o, i)); o++);
            return e;
        },
        ou = function (e, n) {
            var r = [];
            return (
                ru(e, function (e, t) {
                    n(t, e) && r.push(t);
                }),
                r
            );
        },
        iu = function (e) {
            return e ? (9 === e.nodeType ? e : e.ownerDocument) : Ia;
        };
    (eu.fn = eu.prototype = {
        constructor: eu,
        selector: "",
        context: null,
        length: 0,
        init: function (e, t) {
            var n,
                r,
                o = this;
            if (!e) return o;
            if (e.nodeType) return (o.context = o[0] = e), (o.length = 1), o;
            if (t && t.nodeType) o.context = t;
            else {
                if (t) return lu(e).attr(t);
                o.context = t = document;
            }
            if (Va(e)) {
                if (!(n = "<" === (o.selector = e).charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Ua.exec(e))) return lu(t).find(e);
                if (n[1]) for (r = qa(e, iu(t)).firstChild; r; ) Ma.call(o, r), (r = r.nextSibling);
                else {
                    if (!(r = iu(t).getElementById(n[2]))) return o;
                    if (r.id !== n[2]) return o.find(e);
                    (o.length = 1), (o[0] = r);
                }
            } else this.add(e, !1);
            return o;
        },
        toArray: function () {
            return xt.toArray(this);
        },
        add: function (e, t) {
            var n, r;
            if (Va(e)) return this.add(lu(e));
            if (!1 !== t) for (n = lu.unique(this.toArray().concat(lu.makeArray(e))), this.length = n.length, r = 0; r < n.length; r++) this[r] = n[r];
            else Ma.apply(this, lu.makeArray(e));
            return this;
        },
        attr: function (t, n) {
            var e,
                r = this;
            if ("object" == typeof t)
                ru(t, function (e, t) {
                    r.attr(e, t);
                });
            else {
                if (!Ha(n)) {
                    if (r[0] && 1 === r[0].nodeType) {
                        if ((e = Qa[t]) && e.get) return e.get(r[0], t);
                        if (Ya[t]) return r.prop(t) ? t : undefined;
                        null === (n = r[0].getAttribute(t, 2)) && (n = undefined);
                    }
                    return n;
                }
                this.each(function () {
                    var e;
                    if (1 === this.nodeType) {
                        if ((e = Qa[t]) && e.set) return void e.set(this, n);
                        null === n ? this.removeAttribute(t, 2) : this.setAttribute(t, n, 2);
                    }
                });
            }
            return r;
        },
        removeAttr: function (e) {
            return this.attr(e, null);
        },
        prop: function (e, t) {
            var n = this;
            if ("object" == typeof (e = Ga[e] || e))
                ru(e, function (e, t) {
                    n.prop(e, t);
                });
            else {
                if (!Ha(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
                this.each(function () {
                    1 === this.nodeType && (this[e] = t);
                });
            }
            return n;
        },
        css: function (n, r) {
            var e,
                o,
                i = this,
                t = function (e) {
                    return e.replace(/-(\D)/g, function (e, t) {
                        return t.toUpperCase();
                    });
                },
                a = function (e) {
                    return e.replace(/[A-Z]/g, function (e) {
                        return "-" + e;
                    });
                };
            if ("object" == typeof n)
                ru(n, function (e, t) {
                    i.css(e, t);
                });
            else if (Ha(r))
                (n = t(n)),
                    "number" != typeof r || Xa[n] || (r = r.toString() + "px"),
                    i.each(function () {
                        var e = this.style;
                        if ((o = Za[n]) && o.set) o.set(this, r);
                        else {
                            try {
                                this.style[Ja[n] || n] = r;
                            } catch (t) {}
                            (null !== r && "" !== r) || (e.removeProperty ? e.removeProperty(a(n)) : e.removeAttribute(n));
                        }
                    });
            else {
                if (((e = i[0]), (o = Za[n]) && o.get)) return o.get(e);
                if (!e.ownerDocument.defaultView) return e.currentStyle ? e.currentStyle[t(n)] : "";
                try {
                    return e.ownerDocument.defaultView.getComputedStyle(e, null).getPropertyValue(a(n));
                } catch (u) {
                    return undefined;
                }
            }
            return i;
        },
        remove: function () {
            for (var e, t = this.length; t--; ) (e = this[t]), za.clean(e), e.parentNode && e.parentNode.removeChild(e);
            return this;
        },
        empty: function () {
            for (var e, t = this.length; t--; ) for (e = this[t]; e.firstChild; ) e.removeChild(e.firstChild);
            return this;
        },
        html: function (e) {
            var t;
            if (Ha(e)) {
                t = this.length;
                try {
                    for (; t--; ) this[t].innerHTML = e;
                } catch (n) {
                    lu(this[t]).empty().append(e);
                }
                return this;
            }
            return this[0] ? this[0].innerHTML : "";
        },
        text: function (e) {
            var t;
            if (Ha(e)) {
                for (t = this.length; t--; ) "innerText" in this[t] ? (this[t].innerText = e) : (this[0].textContent = e);
                return this;
            }
            return this[0] ? this[0].innerText || this[0].textContent : "";
        },
        append: function () {
            return $a(this, arguments, function (e) {
                (1 === this.nodeType || (this.host && 1 === this.host.nodeType)) && this.appendChild(e);
            });
        },
        prepend: function () {
            return $a(
                this,
                arguments,
                function (e) {
                    (1 === this.nodeType || (this.host && 1 === this.host.nodeType)) && this.insertBefore(e, this.firstChild);
                },
                !0
            );
        },
        before: function () {
            return this[0] && this[0].parentNode
                ? $a(this, arguments, function (e) {
                      this.parentNode.insertBefore(e, this);
                  })
                : this;
        },
        after: function () {
            return this[0] && this[0].parentNode
                ? $a(
                      this,
                      arguments,
                      function (e) {
                          this.parentNode.insertBefore(e, this.nextSibling);
                      },
                      !0
                  )
                : this;
        },
        appendTo: function (e) {
            return lu(e).append(this), this;
        },
        prependTo: function (e) {
            return lu(e).prepend(this), this;
        },
        replaceWith: function (e) {
            return this.before(e).remove();
        },
        wrap: function (e) {
            return Ka(this, e);
        },
        wrapAll: function (e) {
            return Ka(this, e, !0);
        },
        wrapInner: function (e) {
            return (
                this.each(function () {
                    lu(this).contents().wrapAll(e);
                }),
                this
            );
        },
        unwrap: function () {
            return this.parent().each(function () {
                lu(this).replaceWith(this.childNodes);
            });
        },
        clone: function () {
            var e = [];
            return (
                this.each(function () {
                    e.push(this.cloneNode(!0));
                }),
                lu(e)
            );
        },
        addClass: function (e) {
            return this.toggleClass(e, !0);
        },
        removeClass: function (e) {
            return this.toggleClass(e, !1);
        },
        toggleClass: function (o, i) {
            var e = this;
            return (
                "string" != typeof o ||
                    (-1 !== o.indexOf(" ")
                        ? ru(o.split(" "), function () {
                              e.toggleClass(this, i);
                          })
                        : e.each(function (e, t) {
                              var n,
                                  r = Wa(t, o);
                              r !== i && ((n = t.className), r ? (t.className = nu((" " + n + " ").replace(" " + o + " ", " "))) : (t.className += n ? " " + o : o));
                          })),
                e
            );
        },
        hasClass: function (e) {
            return Wa(this[0], e);
        },
        each: function (e) {
            return ru(this, e);
        },
        on: function (e, t) {
            return this.each(function () {
                za.bind(this, e, t);
            });
        },
        off: function (e, t) {
            return this.each(function () {
                za.unbind(this, e, t);
            });
        },
        trigger: function (e) {
            return this.each(function () {
                "object" == typeof e ? za.fire(this, e.type, e) : za.fire(this, e);
            });
        },
        show: function () {
            return this.css("display", "");
        },
        hide: function () {
            return this.css("display", "none");
        },
        slice: function () {
            return new lu(Fa.apply(this, arguments));
        },
        eq: function (e) {
            return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        find: function (e) {
            for (var t = [], n = 0, r = this.length; n < r; n++) lu.find(e, this[n], t);
            return lu(t);
        },
        filter: function (n) {
            return lu(
                "function" == typeof n
                    ? ou(this.toArray(), function (e, t) {
                          return n(t, e);
                      })
                    : lu.filter(n, this.toArray())
            );
        },
        closest: function (n) {
            var r = [];
            return (
                n instanceof lu && (n = n[0]),
                this.each(function (e, t) {
                    for (; t; ) {
                        if ("string" == typeof n && lu(t).is(n)) {
                            r.push(t);
                            break;
                        }
                        if (t === n) {
                            r.push(t);
                            break;
                        }
                        t = t.parentNode;
                    }
                }),
                lu(r)
            );
        },
        offset: function (e) {
            var t,
                n,
                r,
                o,
                i = 0,
                a = 0;
            return e
                ? this.css(e)
                : ((t = this[0]) &&
                      ((r = (n = t.ownerDocument).documentElement),
                      t.getBoundingClientRect && ((i = (o = t.getBoundingClientRect()).left + (r.scrollLeft || n.body.scrollLeft) - r.clientLeft), (a = o.top + (r.scrollTop || n.body.scrollTop) - r.clientTop))),
                  { left: i, top: a });
        },
        push: Ma,
        sort: Array.prototype.sort,
        splice: Array.prototype.splice,
    }),
        xt.extend(eu, {
            extend: xt.extend,
            makeArray: function (e) {
                return ((t = e) && t === t.window) || e.nodeType ? [e] : xt.toArray(e);
                var t;
            },
            inArray: function (e, t) {
                var n;
                if (t.indexOf) return t.indexOf(e);
                for (n = t.length; n--; ) if (t[n] === e) return n;
                return -1;
            },
            isArray: xt.isArray,
            each: ru,
            trim: nu,
            grep: ou,
            find: Na,
            expr: Na.selectors,
            unique: Na.uniqueSort,
            text: Na.getText,
            contains: Na.contains,
            filter: function (e, t, n) {
                var r = t.length;
                for (n && (e = ":not(" + e + ")"); r--; ) 1 !== t[r].nodeType && t.splice(r, 1);
                return (t = 1 === t.length ? (lu.find.matchesSelector(t[0], e) ? [t[0]] : []) : lu.find.matches(e, t));
            },
        });
    var au = function (e, t, n) {
            var r = [],
                o = e[t];
            for ("string" != typeof n && n instanceof lu && (n = n[0]); o && 9 !== o.nodeType; ) {
                if (n !== undefined) {
                    if (o === n) break;
                    if ("string" == typeof n && lu(o).is(n)) break;
                }
                1 === o.nodeType && r.push(o), (o = o[t]);
            }
            return r;
        },
        uu = function (e, t, n, r) {
            var o = [];
            for (r instanceof lu && (r = r[0]); e; e = e[t])
                if (!n || e.nodeType === n) {
                    if (r !== undefined) {
                        if (e === r) break;
                        if ("string" == typeof r && lu(e).is(r)) break;
                    }
                    o.push(e);
                }
            return o;
        },
        su = function (e, t, n) {
            for (e = e[t]; e; e = e[t]) if (e.nodeType === n) return e;
            return null;
        };
    ru(
        {
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
                return au(e, "parentNode");
            },
            next: function (e) {
                return su(e, "nextSibling", 1);
            },
            prev: function (e) {
                return su(e, "previousSibling", 1);
            },
            children: function (e) {
                return uu(e.firstChild, "nextSibling", 1);
            },
            contents: function (e) {
                return xt.toArray(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes);
            },
        },
        function (r, o) {
            eu.fn[r] = function (t) {
                var n = [];
                this.each(function () {
                    var e = o.call(n, this, t, n);
                    e && (lu.isArray(e) ? n.push.apply(n, e) : n.push(e));
                }),
                    1 < this.length && (ja[r] || (n = lu.unique(n)), 0 === r.indexOf("parents") && (n = n.reverse()));
                var e = lu(n);
                return t ? e.filter(t) : e;
            };
        }
    ),
        ru(
            {
                parentsUntil: function (e, t) {
                    return au(e, "parentNode", t);
                },
                nextUntil: function (e, t) {
                    return uu(e, "nextSibling", 1, t).slice(1);
                },
                prevUntil: function (e, t) {
                    return uu(e, "previousSibling", 1, t).slice(1);
                },
            },
            function (o, i) {
                eu.fn[o] = function (t, e) {
                    var n = [];
                    this.each(function () {
                        var e = i.call(n, this, t, n);
                        e && (lu.isArray(e) ? n.push.apply(n, e) : n.push(e));
                    }),
                        1 < this.length && ((n = lu.unique(n)), (0 !== o.indexOf("parents") && "prevUntil" !== o) || (n = n.reverse()));
                    var r = lu(n);
                    return e ? r.filter(e) : r;
                };
            }
        ),
        (eu.fn.is = function (e) {
            return !!e && 0 < this.filter(e).length;
        }),
        (eu.fn.init.prototype = eu.fn),
        (eu.overrideDefaults = function (n) {
            var r,
                o = function (e, t) {
                    return (r = r || n()), 0 === arguments.length && (e = r.element), (t = t || r.context), new o.fn.init(e, t);
                };
            return lu.extend(o, this), o;
        }),
        (eu.attrHooks = Qa),
        (eu.cssHooks = Za);
    var cu,
        lu = eu,
        fu = xt.each,
        du = xt.grep,
        mu = vt.ie,
        pu = /^([a-z0-9],?)+$/i,
        gu = function (n, r, o) {
            var i = r.keep_values,
                e = {
                    set: function (e, t, n) {
                        r.url_converter && (t = r.url_converter.call(r.url_converter_scope || o(), t, n, e[0])), e.attr("data-mce-" + n, t).attr(n, t);
                    },
                    get: function (e, t) {
                        return e.attr("data-mce-" + t) || e.attr(t);
                    },
                },
                t = {
                    style: {
                        set: function (e, t) {
                            null === t || "object" != typeof t ? (i && e.attr("data-mce-style", t), null !== t && "string" == typeof t ? (e.removeAttr("style"), e.css(n.parse(t))) : e.attr("style", t)) : e.css(t);
                        },
                        get: function (e) {
                            var t = e.attr("data-mce-style") || e.attr("style");
                            return (t = n.serialize(n.parse(t), e[0].nodeName));
                        },
                    },
                };
            return i && (t.href = t.src = e), t;
        },
        hu = function (e, t) {
            var n = t.attr("style"),
                r = (r = e.serialize(e.parse(n), t[0].nodeName)) || null;
            t.attr("data-mce-style", r);
        },
        vu = function (e, t) {
            var n,
                r,
                o = 0;
            if (e) for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) (r = e.nodeType), (!t || 3 !== r || (r !== n && e.nodeValue.length)) && (o++, (n = r));
            return o;
        };
    function yu(a, u) {
        var s = this;
        void 0 === u && (u = {});
        var r = {},
            c = window,
            n = {},
            t = 0,
            o = jr.forElement(Nt.fromDom(a), { contentCssCors: u.contentCssCors, referrerPolicy: u.referrerPolicy }),
            l = [],
            f = u.schema ? u.schema : pi({}),
            i = hi({ url_converter: u.url_converter, url_converter_scope: u.url_converter_scope }, u.schema),
            d = u.ownEvents ? new Ni() : Ni.Event,
            m = f.getBlockElements(),
            p = lu.overrideDefaults(function () {
                return { context: a, element: j.getRoot() };
            }),
            g = function (e) {
                return e && a && q(e) ? a.getElementById(e) : e;
            },
            h = function (e) {
                return p("string" == typeof e ? g(e) : e);
            },
            v = function (e, t, n) {
                var r,
                    o,
                    i = h(e);
                return i.length && (o = (r = H[t]) && r.get ? r.get(i, t) : i.attr(t)), void 0 === o && (o = n || ""), o;
            },
            y = function (e) {
                var t = g(e);
                return t ? t.attributes : [];
            },
            b = function (e, t, n) {
                "" === n && (n = null);
                var r,
                    o = h(e),
                    i = o.attr(t);
                o.length && ((r = H[t]) && r.set ? r.set(o, n, t) : o.attr(t, n), i !== n && u.onSetAttrib && u.onSetAttrib({ attrElm: o, attrName: t, attrValue: n }));
            },
            C = function () {
                return u.root_element || a.body;
            },
            w = function (e, t) {
                return nr(a.body, g(e), t);
            },
            x = function (e, t, n) {
                var r = h(e);
                return n
                    ? r.css(t)
                    : ("float" ===
                          (t = t.replace(/-(\D)/g, function (e, t) {
                              return t.toUpperCase();
                          })) && (t = vt.browser.isIE() ? "styleFloat" : "cssFloat"),
                      r[0] && r[0].style ? r[0].style[t] : undefined);
            },
            S = function (e) {
                var t, n;
                return (
                    (e = g(e)),
                    (t = x(e, "width")),
                    (n = x(e, "height")),
                    -1 === t.indexOf("px") && (t = 0),
                    -1 === n.indexOf("px") && (n = 0),
                    { w: parseInt(t, 10) || e.offsetWidth || e.clientWidth, h: parseInt(n, 10) || e.offsetHeight || e.clientHeight }
                );
            },
            N = function (e, t) {
                if (!e) return !1;
                if (!Array.isArray(e)) {
                    if ("*" === t) return 1 === e.nodeType;
                    if (pu.test(t)) {
                        for (var n = t.toLowerCase().split(/,/), r = e.nodeName.toLowerCase(), o = n.length - 1; 0 <= o; o--) if (n[o] === r) return !0;
                        return !1;
                    }
                    if (e.nodeType && 1 !== e.nodeType) return !1;
                }
                var i = Array.isArray(e) ? e : [e];
                return 0 < Na(t, i[0].ownerDocument || i[0], null, i).length;
            },
            E = function (e, t, n, r) {
                var o,
                    i = [],
                    a = g(e);
                for (
                    r = r === undefined,
                        n = n || ("BODY" !== C().nodeName ? C().parentNode : null),
                        xt.is(t, "string") &&
                            (t =
                                "*" === (o = t)
                                    ? function (e) {
                                          return 1 === e.nodeType;
                                      }
                                    : function (e) {
                                          return N(e, o);
                                      });
                    a && a !== n && a.nodeType && 9 !== a.nodeType;

                ) {
                    if (!t || ("function" == typeof t && t(a))) {
                        if (!r) return [a];
                        i.push(a);
                    }
                    a = a.parentNode;
                }
                return r ? i : null;
            },
            k = function (e, t, n) {
                var r = t;
                if (e)
                    for (
                        "string" == typeof t &&
                            (r = function (e) {
                                return N(e, t);
                            }),
                            e = e[n];
                        e;
                        e = e[n]
                    )
                        if ("function" == typeof r && r(e)) return e;
                return null;
            },
            _ = function (e, n, r) {
                var o,
                    t = "string" == typeof e ? g(e) : e;
                if (!t) return !1;
                if (xt.isArray(t) && (t.length || 0 === t.length))
                    return (
                        (o = []),
                        fu(t, function (e, t) {
                            e && o.push(n.call(r, "string" == typeof e ? g(e) : e, t));
                        }),
                        o
                    );
                var i = r || s;
                return n.call(i, t);
            },
            R = function (e, t) {
                h(e).each(function (e, n) {
                    fu(t, function (e, t) {
                        b(n, t, e);
                    });
                });
            },
            T = function (e, r) {
                var t = h(e);
                mu
                    ? t.each(function (e, t) {
                          if (!1 !== t.canHaveHTML) {
                              for (; t.firstChild; ) t.removeChild(t.firstChild);
                              try {
                                  (t.innerHTML = "<br>" + r), t.removeChild(t.firstChild);
                              } catch (n) {
                                  lu("<div></div>")
                                      .html("<br>" + r)
                                      .contents()
                                      .slice(1)
                                      .appendTo(t);
                              }
                              return r;
                          }
                      })
                    : t.html(r);
            },
            A = function (e, n, r, o, i) {
                return _(e, function (e) {
                    var t = "string" == typeof n ? a.createElement(n) : n;
                    return R(t, r), o && ("string" != typeof o && o.nodeType ? t.appendChild(o) : "string" == typeof o && T(t, o)), i ? t : e.appendChild(t);
                });
            },
            D = function (e, t, n) {
                return A(a.createElement(e), e, t, n, !0);
            },
            e = ri.decode,
            O = ri.encodeAllRaw,
            B = function (e, t) {
                var n = h(e);
                return (
                    t
                        ? n
                              .each(function () {
                                  for (var e; (e = this.firstChild); ) 3 === e.nodeType && 0 === e.data.length ? this.removeChild(e) : this.parentNode.insertBefore(e, this);
                              })
                              .remove()
                        : n.remove(),
                    1 < n.length ? n.toArray() : n[0]
                );
            },
            P = function (e, t, n) {
                h(e)
                    .toggleClass(t, n)
                    .each(function () {
                        "" === this.className && lu(this).attr("class", null);
                    });
            },
            L = function (t, e, n) {
                return _(e, function (e) {
                    return (
                        xt.is(e, "array") && (t = t.cloneNode(!0)),
                        n &&
                            fu(du(e.childNodes), function (e) {
                                t.appendChild(e);
                            }),
                        e.parentNode.replaceChild(t, e)
                    );
                });
            },
            I = function (e) {
                if (Nn(e)) {
                    var t = "a" === e.nodeName.toLowerCase() && !v(e, "href") && v(e, "id");
                    if (v(e, "name") || v(e, "data-mce-bookmark") || t) return !0;
                }
                return !1;
            },
            M = function () {
                return a.createRange();
            },
            F = function (e, t, n, r) {
                if (xt.isArray(e)) {
                    for (var o = e.length, i = []; o--; ) i[o] = F(e[o], t, n, r);
                    return i;
                }
                return !u.collect || (e !== a && e !== c) || l.push([e, t, n, r]), d.bind(e, t, n, r || j);
            },
            U = function (e, t, n) {
                if (xt.isArray(e)) {
                    for (var r = e.length, o = []; r--; ) o[r] = U(e[r], t, n);
                    return o;
                }
                if (0 < l.length && (e === a || e === c))
                    for (r = l.length; r--; ) {
                        var i = l[r];
                        e !== i[0] || (t && t !== i[1]) || (n && n !== i[2]) || d.unbind(i[0], i[1], i[2]);
                    }
                return d.unbind(e, t, n);
            },
            z = function (e) {
                if (e && Nn(e)) {
                    var t = e.getAttribute("data-mce-contenteditable");
                    return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null;
                }
                return null;
            },
            j = {
                doc: a,
                settings: u,
                win: c,
                files: n,
                stdMode: !0,
                boxModel: !0,
                styleSheetLoader: o,
                boundEvents: l,
                styles: i,
                schema: f,
                events: d,
                isBlock: function (e) {
                    if ("string" == typeof e) return !!m[e];
                    if (e) {
                        var t = e.nodeType;
                        if (t) return !(1 !== t || !m[e.nodeName]);
                    }
                    return !1;
                },
                $: p,
                $$: h,
                root: null,
                clone: function (t, e) {
                    if (!mu || 1 !== t.nodeType || e) return t.cloneNode(e);
                    var n = a.createElement(t.nodeName);
                    return (
                        fu(y(t), function (e) {
                            b(n, e.nodeName, v(t, e.nodeName));
                        }),
                        n
                    );
                },
                getRoot: C,
                getViewPort: function (e) {
                    var t = wn(e);
                    return { x: t.x, y: t.y, w: t.width, h: t.height };
                },
                getRect: function (e) {
                    e = g(e);
                    var t = w(e),
                        n = S(e);
                    return { x: t.x, y: t.y, w: n.w, h: n.h };
                },
                getSize: S,
                getParent: function (e, t, n) {
                    var r = E(e, t, n, !1);
                    return r && 0 < r.length ? r[0] : null;
                },
                getParents: E,
                get: g,
                getNext: function (e, t) {
                    return k(e, t, "nextSibling");
                },
                getPrev: function (e, t) {
                    return k(e, t, "previousSibling");
                },
                select: function (e, t) {
                    return Na(e, g(t) || u.root_element || a, []);
                },
                is: N,
                add: A,
                create: D,
                createHTML: function (e, t, n) {
                    var r,
                        o = "";
                    for (r in ((o += "<" + e), t)) t.hasOwnProperty(r) && null !== t[r] && "undefined" != typeof t[r] && (o += " " + r + '="' + O(t[r]) + '"');
                    return void 0 !== n ? o + ">" + n + "</" + e + ">" : o + " />";
                },
                createFragment: function (e) {
                    var t,
                        n = a.createElement("div"),
                        r = a.createDocumentFragment();
                    for (r.appendChild(n), e && (n.innerHTML = e); (t = n.firstChild); ) r.appendChild(t);
                    return r.removeChild(n), r;
                },
                remove: B,
                setStyle: function (e, t, n) {
                    var r = q(t) ? h(e).css(t, n) : h(e).css(t);
                    u.update_styles && hu(i, r);
                },
                getStyle: x,
                setStyles: function (e, t) {
                    var n = h(e).css(t);
                    u.update_styles && hu(i, n);
                },
                removeAllAttribs: function (e) {
                    return _(e, function (e) {
                        for (var t = e.attributes, n = t.length - 1; 0 <= n; n--) e.removeAttributeNode(t.item(n));
                    });
                },
                setAttrib: b,
                setAttribs: R,
                getAttrib: v,
                getPos: w,
                parseStyle: function (e) {
                    return i.parse(e);
                },
                serializeStyle: function (e, t) {
                    return i.serialize(e, t);
                },
                addStyle: function (e) {
                    var t, n;
                    if (j !== yu.DOM && a === document) {
                        if (r[e]) return;
                        r[e] = !0;
                    }
                    (n = a.getElementById("mceDefaultStyles")) ||
                        (((n = a.createElement("style")).id = "mceDefaultStyles"), (n.type = "text/css"), (t = a.getElementsByTagName("head")[0]).firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)),
                        n.styleSheet ? (n.styleSheet.cssText += e) : n.appendChild(a.createTextNode(e));
                },
                loadCSS: function (e) {
                    $((e = e || "").split(","), function (e) {
                        (n[e] = !0), o.load(e, V);
                    });
                },
                addClass: function (e, t) {
                    h(e).addClass(t);
                },
                removeClass: function (e, t) {
                    P(e, t, !1);
                },
                hasClass: function (e, t) {
                    return h(e).hasClass(t);
                },
                toggleClass: P,
                show: function (e) {
                    h(e).show();
                },
                hide: function (e) {
                    h(e).hide();
                },
                isHidden: function (e) {
                    return "none" === h(e).css("display");
                },
                uniqueId: function (e) {
                    return (e || "mce_") + t++;
                },
                setHTML: T,
                getOuterHTML: function (e) {
                    var t = "string" == typeof e ? g(e) : e;
                    return Nn(t) ? t.outerHTML : lu("<div></div>").append(lu(t).clone()).html();
                },
                setOuterHTML: function (e, t) {
                    h(e).each(function () {
                        try {
                            if ("outerHTML" in this) return void (this.outerHTML = t);
                        } catch (e) {}
                        B(lu(this).html(t), !0);
                    });
                },
                decode: e,
                encode: O,
                insertAfter: function (e, t) {
                    var r = g(t);
                    return _(e, function (e) {
                        var t = r.parentNode,
                            n = r.nextSibling;
                        return n ? t.insertBefore(e, n) : t.appendChild(e), e;
                    });
                },
                replace: L,
                rename: function (t, e) {
                    var n;
                    return (
                        t.nodeName !== e.toUpperCase() &&
                            ((n = D(e)),
                            fu(y(t), function (e) {
                                b(n, e.nodeName, v(t, e.nodeName));
                            }),
                            L(n, t, !0)),
                        n || t
                    );
                },
                findCommonAncestor: function (e, t) {
                    for (var n, r = e; r; ) {
                        for (n = t; n && r !== n; ) n = n.parentNode;
                        if (r === n) break;
                        r = r.parentNode;
                    }
                    return !r && e.ownerDocument ? e.ownerDocument.documentElement : r;
                },
                toHex: function (e) {
                    return i.toHex(xt.trim(e));
                },
                run: _,
                getAttribs: y,
                isEmpty: function (e, t) {
                    var n,
                        r,
                        o = 0;
                    if (I(e)) return !1;
                    if ((e = e.firstChild)) {
                        var i = new Hr(e, e.parentNode),
                            a = f ? f.getWhiteSpaceElements() : {};
                        t = t || (f ? f.getNonEmptyElements() : null);
                        do {
                            if (((n = e.nodeType), Nn(e))) {
                                var u = e.getAttribute("data-mce-bogus");
                                if (u) {
                                    e = i.next("all" === u);
                                    continue;
                                }
                                if (((r = e.nodeName.toLowerCase()), t && t[r])) {
                                    if ("br" !== r) return !1;
                                    o++, (e = i.next());
                                    continue;
                                }
                                if (I(e)) return !1;
                            }
                            if (8 === n) return !1;
                            if (3 === n && !Bo(e.nodeValue)) return !1;
                            if (3 === n && e.parentNode && a[e.parentNode.nodeName] && Bo(e.nodeValue)) return !1;
                            e = i.next();
                        } while (e);
                    }
                    return o <= 1;
                },
                createRng: M,
                nodeIndex: vu,
                split: function (e, t, n) {
                    var r,
                        o,
                        i,
                        a = M();
                    if (e && t)
                        return (
                            a.setStart(e.parentNode, vu(e)),
                            a.setEnd(t.parentNode, vu(t)),
                            (r = a.extractContents()),
                            (a = M()).setStart(t.parentNode, vu(t) + 1),
                            a.setEnd(e.parentNode, vu(e) + 1),
                            (o = a.extractContents()),
                            (i = e.parentNode).insertBefore(Vo(j, r), e),
                            n ? i.insertBefore(n, e) : i.insertBefore(t, e),
                            i.insertBefore(Vo(j, o), e),
                            B(e),
                            n || t
                        );
                },
                bind: F,
                unbind: U,
                fire: function (e, t, n) {
                    return d.fire(e, t, n);
                },
                getContentEditable: z,
                getContentEditableParent: function (e) {
                    for (var t = C(), n = null; e && e !== t && null === (n = z(e)); e = e.parentNode);
                    return n;
                },
                destroy: function () {
                    if (0 < l.length)
                        for (var e = l.length; e--; ) {
                            var t = l[e];
                            d.unbind(t[0], t[1], t[2]);
                        }
                    oe(n, function (e, t) {
                        o.unload(t), delete n[t];
                    }),
                        Na.setDocument && Na.setDocument();
                },
                isChildOf: function (e, t) {
                    for (; e; ) {
                        if (t === e) return !0;
                        e = e.parentNode;
                    }
                    return !1;
                },
                dumpRng: function (e) {
                    return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset;
                },
            },
            H = gu(i, u, function () {
                return j;
            });
        return j;
    }
    ((cu = yu = yu || {}).DOM = cu(document)), (cu.nodeIndex = vu);
    var bu = yu,
        Cu = bu.DOM,
        wu = xt.each,
        xu = xt.grep,
        Su =
            ((Nu.prototype._setReferrerPolicy = function (e) {
                this.settings.referrerPolicy = e;
            }),
            (Nu.prototype.loadScript = function (e, t, n) {
                var r = Cu,
                    o = r.uniqueId(),
                    i = document.createElement("script");
                (i.id = o),
                    (i.type = "text/javascript"),
                    (i.src = xt._addCacheSuffix(e)),
                    this.settings.referrerPolicy && r.setAttrib(i, "referrerpolicy", this.settings.referrerPolicy),
                    (i.onload = function () {
                        r.remove(o), i && (i.onreadystatechange = i.onload = i = null), t();
                    }),
                    (i.onerror = function () {
                        A(n) ? n() : "undefined" != typeof console && console.log && console.log("Failed to load script: " + e);
                    }),
                    (document.getElementsByTagName("head")[0] || document.body).appendChild(i);
            }),
            (Nu.prototype.isDone = function (e) {
                return 2 === this.states[e];
            }),
            (Nu.prototype.markDone = function (e) {
                this.states[e] = 2;
            }),
            (Nu.prototype.add = function (e, t, n, r) {
                this.states[e] === undefined && (this.queue.push(e), (this.states[e] = 0)),
                    t && (this.scriptLoadedCallbacks[e] || (this.scriptLoadedCallbacks[e] = []), this.scriptLoadedCallbacks[e].push({ success: t, failure: r, scope: n || this }));
            }),
            (Nu.prototype.load = function (e, t, n, r) {
                return this.add(e, t, n, r);
            }),
            (Nu.prototype.remove = function (e) {
                delete this.states[e], delete this.scriptLoadedCallbacks[e];
            }),
            (Nu.prototype.loadQueue = function (e, t, n) {
                this.loadScripts(this.queue, e, t, n);
            }),
            (Nu.prototype.loadScripts = function (n, e, t, r) {
                var o = this,
                    i = [],
                    a = function (t, e) {
                        wu(o.scriptLoadedCallbacks[e], function (e) {
                            A(e[t]) && e[t].call(e.scope);
                        }),
                            (o.scriptLoadedCallbacks[e] = undefined);
                    };
                o.queueLoadedCallbacks.push({ success: e, failure: r, scope: t || this });
                var u = function () {
                    var e,
                        t = xu(n);
                    (n.length = 0),
                        wu(t, function (e) {
                            2 !== o.states[e]
                                ? 3 !== o.states[e]
                                    ? 1 !== o.states[e] &&
                                      ((o.states[e] = 1),
                                      o.loading++,
                                      o.loadScript(
                                          e,
                                          function () {
                                              (o.states[e] = 2), o.loading--, a("success", e), u();
                                          },
                                          function () {
                                              (o.states[e] = 3), o.loading--, i.push(e), a("failure", e), u();
                                          }
                                      ))
                                    : a("failure", e)
                                : a("success", e);
                        }),
                        o.loading ||
                            ((e = o.queueLoadedCallbacks.slice(0)),
                            (o.queueLoadedCallbacks.length = 0),
                            wu(e, function (e) {
                                0 === i.length ? A(e.success) && e.success.call(e.scope) : A(e.failure) && e.failure.call(e.scope, i);
                            }));
                };
                u();
            }),
            (Nu.ScriptLoader = new Nu()),
            Nu);
    function Nu(e) {
        void 0 === e && (e = {}), (this.states = {}), (this.queue = []), (this.scriptLoadedCallbacks = {}), (this.queueLoadedCallbacks = []), (this.loading = 0), (this.settings = e);
    }
    var Eu,
        ku = function (e) {
            var t = e;
            return {
                get: function () {
                    return t;
                },
                set: function (e) {
                    t = e;
                },
            };
        },
        _u = {},
        Ru = ku("en"),
        Tu = function () {
            return de(_u, Ru.get());
        },
        Au = {
            getData: function () {
                return ie(_u, function (e) {
                    return xe({}, e);
                });
            },
            setCode: function (e) {
                e && Ru.set(e);
            },
            getCode: function () {
                return Ru.get();
            },
            add: function (e, t) {
                var n = _u[e];
                n || (_u[e] = n = {}),
                    oe(t, function (e, t) {
                        n[t.toLowerCase()] = e;
                    });
            },
            translate: function (e) {
                var t,
                    n,
                    r = Tu().getOr({}),
                    o = function (e) {
                        return A(e) ? Object.prototype.toString.call(e) : i(e) ? "" : "" + e;
                    },
                    i = function (e) {
                        return "" === e || null === e || e === undefined;
                    },
                    a = function (e) {
                        var t = o(e);
                        return de(r, t.toLowerCase()).map(o).getOr(t);
                    },
                    u = function (e) {
                        return e.replace(/{context:\w+}$/, "");
                    };
                if (i(e)) return "";
                if (_((t = e)) && me(t, "raw")) return o(e.raw);
                if (S((n = e)) && 1 < n.length) {
                    var s = e.slice(1);
                    return u(
                        a(e[0]).replace(/\{([0-9]+)\}/g, function (e, t) {
                            return me(s, t) ? o(s[t]) : e;
                        })
                    );
                }
                return u(a(e));
            },
            isRtl: function () {
                return Tu()
                    .bind(function (e) {
                        return de(e, "_dir");
                    })
                    .exists(function (e) {
                        return "rtl" === e;
                    });
            },
            hasCode: function (e) {
                return me(_u, e);
            },
        };
    function Du() {
        var r = this,
            o = [],
            s = {},
            c = {},
            i = [],
            l = function (t, n) {
                var e = j(i, function (e) {
                    return e.name === t && e.state === n;
                });
                $(e, function (e) {
                    return e.callback();
                });
            },
            f = function (e) {
                var t;
                return c[e] && (t = c[e].dependencies), t || [];
            },
            d = function (e, t) {
                return "object" == typeof t ? t : "string" == typeof e ? { prefix: "", resource: t, suffix: "" } : { prefix: e.prefix, resource: t, suffix: e.suffix };
            },
            m = function (o, i, a, u, e) {
                var t, n;
                s[o] ||
                    (0 !== (t = "string" == typeof i ? i : i.prefix + i.resource + i.suffix).indexOf("/") && -1 === t.indexOf("://") && (t = Du.baseURL + "/" + t),
                    (s[o] = t.substring(0, t.lastIndexOf("/"))),
                    (n = function () {
                        var n, e, t, r;
                        l(o, "loaded"),
                            (n = i),
                            (e = a),
                            (t = u),
                            (r = f(o)),
                            $(r, function (e) {
                                var t = d(n, e);
                                m(t.resource, t, undefined, undefined);
                            }),
                            e && (t ? e.call(t) : e.call(Su));
                    }),
                    c[o] ? n() : Su.ScriptLoader.add(t, n, u, e));
            },
            e = function (e, t, n) {
                void 0 === n && (n = "added"), (me(c, e) && "added" === n) || (me(s, e) && "loaded" === n) ? t() : i.push({ name: e, state: n, callback: t });
            };
        return {
            items: o,
            urls: s,
            lookup: c,
            _listeners: i,
            get: function (e) {
                return c[e] ? c[e].instance : undefined;
            },
            dependencies: f,
            requireLangPack: function (t, n) {
                !1 !== Du.languageLoad &&
                    e(
                        t,
                        function () {
                            var e = Au.getCode();
                            !e || (n && -1 === ("," + (n || "") + ",").indexOf("," + e + ",")) || Su.ScriptLoader.add(s[t] + "/langs/" + e + ".js");
                        },
                        "loaded"
                    );
            },
            add: function (e, t, n) {
                var r = t;
                return o.push(r), (c[e] = { instance: r, dependencies: n }), l(e, "added"), r;
            },
            remove: function (e) {
                delete s[e], delete c[e];
            },
            createUrl: d,
            addComponents: function (e, t) {
                var n = r.urls[e];
                $(t, function (e) {
                    Su.ScriptLoader.add(n + "/" + e);
                });
            },
            load: m,
            waitFor: e,
        };
    }
    ((Eu = Du = Du || {}).PluginManager = Eu()), (Eu.ThemeManager = Eu());
    var Ou,
        Bu = Du,
        Pu = function (n, r) {
            var o = null;
            return {
                cancel: function () {
                    null !== o && (clearTimeout(o), (o = null));
                },
                throttle: function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    null === o &&
                        (o = setTimeout(function () {
                            n.apply(null, e), (o = null);
                        }, r));
                },
            };
        },
        Lu = function (n, r) {
            var o = null;
            return {
                cancel: function () {
                    null !== o && (clearTimeout(o), (o = null));
                },
                throttle: function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    null !== o && clearTimeout(o),
                        (o = setTimeout(function () {
                            n.apply(null, e), (o = null);
                        }, r));
                },
            };
        },
        Iu = function (e, t) {
            var n = Wn(e, t);
            return n === undefined || "" === n ? [] : n.split(" ");
        },
        Mu = function (e) {
            return e.dom.classList !== undefined;
        },
        Fu = function (e, t) {
            return (o = t), (i = Iu((n = e), (r = "class")).concat([o])), qn(n, r, i.join(" ")), !0;
            var n, r, o, i;
        },
        Uu = function (e, t) {
            return (
                (o = t),
                0 <
                (i = j(Iu((n = e), (r = "class")), function (e) {
                    return e !== o;
                })).length
                    ? qn(n, r, i.join(" "))
                    : Kn(n, r),
                !1
            );
            var n, r, o, i;
        },
        zu = function (e, t) {
            Mu(e) ? e.dom.classList.add(t) : Fu(e, t);
        },
        ju = function (e) {
            0 === (Mu(e) ? e.dom.classList : Iu(e, "class")).length && Kn(e, "class");
        },
        Hu = function (e, t) {
            return Mu(e) && e.dom.classList.contains(t);
        },
        Vu = function (e, t) {
            var n = [];
            return (
                $(Wt(e), function (e) {
                    t(e) && (n = n.concat([e])), (n = n.concat(Vu(e, t)));
                }),
                n
            );
        },
        qu = function (e, t) {
            return (n = t), (o = (r = e) === undefined ? document : r.dom), _t(o) ? [] : F(o.querySelectorAll(n), Nt.fromDom);
            var n, r, o;
        },
        $u = N("mce-annotation"),
        Wu = N("data-mce-annotation"),
        Ku = N("data-mce-annotation-uid"),
        Xu = function (r, e) {
            var t = r.selection.getRng(),
                n = Nt.fromDom(t.startContainer),
                o = Nt.fromDom(r.getBody()),
                i = e.fold(
                    function () {
                        return "." + $u();
                    },
                    function (e) {
                        return "[" + Wu() + '="' + e + '"]';
                    }
                ),
                a = Kt(n, t.startOffset).getOr(n),
                u = kr(a, i, function (e) {
                    return Rt(e, o);
                }),
                s = function (e, t) {
                    return (n = t), (r = e.dom) && r.hasAttribute && r.hasAttribute(n) ? U.some(Wn(e, t)) : U.none();
                    var n, r;
                };
            return u.bind(function (e) {
                return s(e, "" + Ku()).bind(function (n) {
                    return s(e, "" + Wu()).map(function (e) {
                        var t = Yu(r, n);
                        return { uid: n, name: e, elements: t };
                    });
                });
            });
        },
        Yu = function (e, t) {
            var n = Nt.fromDom(e.getBody());
            return qu(n, "[" + Ku() + '="' + t + '"]');
        },
        Gu = function (i, e) {
            var a = ku({}),
                c = function (e, t) {
                    u(e, function (e) {
                        return t(e), e;
                    });
                },
                u = function (e, t) {
                    var n = a.get(),
                        r = t(n.hasOwnProperty(e) ? n[e] : { listeners: [], previous: ku(U.none()) });
                    (n[e] = r), a.set(n);
                },
                t = Lu(function () {
                    var e,
                        t,
                        n,
                        r = a.get(),
                        o = ((e = ne(r)), (n = O.call(e, 0)).sort(t), n);
                    $(o, function (e) {
                        u(e, function (u) {
                            var s = u.previous.get();
                            return (
                                Xu(i, U.some(e)).fold(
                                    function () {
                                        var t;
                                        s.isSome() &&
                                            (c((t = e), function (e) {
                                                $(e.listeners, function (e) {
                                                    return e(!1, t);
                                                });
                                            }),
                                            u.previous.set(U.none()));
                                    },
                                    function (e) {
                                        var t,
                                            n,
                                            r,
                                            o = e.uid,
                                            i = e.name,
                                            a = e.elements;
                                        s.is(o) ||
                                            ((n = o),
                                            (r = a),
                                            c((t = i), function (e) {
                                                $(e.listeners, function (e) {
                                                    return e(!0, t, {
                                                        uid: n,
                                                        nodes: F(r, function (e) {
                                                            return e.dom;
                                                        }),
                                                    });
                                                });
                                            }),
                                            u.previous.set(U.some(o)));
                                    }
                                ),
                                { previous: u.previous, listeners: u.listeners }
                            );
                        });
                    });
                }, 30);
            i.on("remove", function () {
                t.cancel();
            }),
                i.on("NodeChange", function () {
                    t.throttle();
                });
            return {
                addListener: function (e, t) {
                    u(e, function (e) {
                        return { previous: e.previous, listeners: e.listeners.concat([t]) };
                    });
                },
            };
        },
        Ju = function (e, n) {
            e.on("init", function () {
                e.serializer.addNodeFilter("span", function (e) {
                    $(e, function (t) {
                        var e;
                        (e = t),
                            U.from(e.attr(Wu()))
                                .bind(n.lookup)
                                .each(function (e) {
                                    !1 === e.persistent && t.unwrap();
                                });
                    });
                });
            });
        },
        Qu = 0,
        Zu = function (e) {
            var t = new Date().getTime();
            return e + "_" + Math.floor(1e9 * Math.random()) + ++Qu + String(t);
        },
        es = function (e, t) {
            var n,
                r,
                o = Ft(e).dom,
                i = Nt.fromDom(o.createDocumentFragment()),
                a = ((n = t), ((r = (o || document).createElement("div")).innerHTML = n), Wt(Nt.fromDom(r)));
            sn(i, a), cn(e), un(e, i);
        },
        ts = function (e, t) {
            return Nt.fromDom(e.dom.cloneNode(t));
        },
        ns = function (e) {
            return ts(e, !1);
        },
        rs = function (e) {
            return ts(e, !0);
        },
        os = function (e, t, n) {
            void 0 === n && (n = p);
            var r = new Hr(e, t),
                o = function (e) {
                    for (var t; (t = r[e]()) && !On(t) && !n(t); );
                    return U.from(t).filter(On);
                };
            return {
                current: function () {
                    return U.from(r.current()).filter(On);
                },
                next: function () {
                    return o("next");
                },
                prev: function () {
                    return o("prev");
                },
                prev2: function () {
                    return o("prev2");
                },
            };
        },
        is = function (t, e) {
            var i =
                    e ||
                    function (e) {
                        return t.isBlock(e) || In(e) || Un(e);
                    },
                a = function (e, t, n, r) {
                    if (On(e)) {
                        var o = r(e, t, e.data);
                        if (-1 !== o) return U.some({ container: e, offset: o });
                    }
                    return n().bind(function (e) {
                        return a(e.container, e.offset, n, r);
                    });
                };
            return {
                backwards: function (e, t, n, r) {
                    var o = os(e, r, i);
                    return a(
                        e,
                        t,
                        function () {
                            return o.prev().map(function (e) {
                                return { container: e, offset: e.length };
                            });
                        },
                        n
                    ).getOrNull();
                },
                forwards: function (e, t, n, r) {
                    var o = os(e, r, i);
                    return a(
                        e,
                        t,
                        function () {
                            return o.next().map(function (e) {
                                return { container: e, offset: 0 };
                            });
                        },
                        n
                    ).getOrNull();
                },
            };
        },
        as = function (e, t, n) {
            return e.isSome() && t.isSome() ? U.some(n(e.getOrDie(), t.getOrDie())) : U.none();
        },
        us = Math.round,
        ss = function (e) {
            return e ? { left: us(e.left), top: us(e.top), bottom: us(e.bottom), right: us(e.right), width: us(e.width), height: us(e.height) } : { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 };
        },
        cs = function (e, t) {
            return (e = ss(e)), t || (e.left = e.left + e.width), (e.right = e.left), (e.width = 0), e;
        },
        ls = function (e, t, n) {
            return 0 <= e && e <= Math.min(t.height, n.height) / 2;
        },
        fs = function (e, t) {
            var n = Math.min(t.height / 2, e.height / 2);
            return e.bottom - n < t.top || (!(e.top > t.bottom) && ls(t.top - e.bottom, e, t));
        },
        ds = function (e, t) {
            return e.top > t.bottom || (!(e.bottom < t.top) && ls(t.bottom - e.top, e, t));
        },
        ms = function (e, t, n) {
            return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom;
        },
        ps = function (e) {
            var t = e.startContainer,
                n = e.startOffset;
            return t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null;
        },
        gs = function (e, t) {
            return 1 === e.nodeType && e.hasChildNodes() && (t >= e.childNodes.length && (t = e.childNodes.length - 1), (e = e.childNodes[t])), e;
        },
        hs = new RegExp(
            "[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"
        ),
        vs = function (e) {
            return "string" == typeof e && 768 <= e.charCodeAt(0) && hs.test(e);
        },
        ys = Nn,
        bs = To,
        Cs = kn("display", "block table"),
        ws = kn("float", "left right"),
        xs = (function () {
            for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
            return function (e) {
                for (var t = 0; t < n.length; t++) if (!n[t](e)) return !1;
                return !0;
            };
        })(ys, bs, d(ws)),
        Ss = d(kn("white-space", "pre pre-line pre-wrap")),
        Ns = On,
        Es = In,
        ks = bu.nodeIndex,
        _s = gs,
        Rs = function (e) {
            return "createRange" in e ? e.createRange() : bu.DOM.createRng();
        },
        Ts = function (e) {
            return e && /[\r\n\t ]/.test(e);
        },
        As = function (e) {
            return !!e.setStart && !!e.setEnd;
        },
        Ds = function (e) {
            var t,
                n = e.startContainer,
                r = e.startOffset;
            return !!(Ts(e.toString()) && Ss(n.parentNode) && On(n) && ((t = n.data), Ts(t[r - 1]) || Ts(t[r + 1])));
        },
        Os = function (e) {
            return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom;
        },
        Bs = function (e) {
            var t = e.getClientRects(),
                n = 0 < t.length ? ss(t[0]) : ss(e.getBoundingClientRect());
            return !As(e) && Es(e) && Os(n)
                ? (function (e) {
                      var t = e.ownerDocument,
                          n = Rs(t),
                          r = t.createTextNode(oo),
                          o = e.parentNode;
                      o.insertBefore(r, e), n.setStart(r, 0), n.setEnd(r, 1);
                      var i = ss(n.getBoundingClientRect());
                      return o.removeChild(r), i;
                  })(e)
                : Os(n) && As(e)
                ? (function (e) {
                      var t = e.startContainer,
                          n = e.endContainer,
                          r = e.startOffset,
                          o = e.endOffset;
                      if (t === n && On(n) && 0 === r && 1 === o) {
                          var i = e.cloneRange();
                          return i.setEndAfter(n), Bs(i);
                      }
                      return null;
                  })(e)
                : n;
        },
        Ps = function (e, t) {
            var n = cs(e, t);
            return (n.width = 1), (n.right = n.left + 1), n;
        },
        Ls = function (e) {
            var t,
                n,
                r = [],
                o = function (e) {
                    var t, n;
                    0 !== e.height && ((0 < r.length && ((t = e), (n = r[r.length - 1]), t.left === n.left && t.top === n.top && t.bottom === n.bottom && t.right === n.right)) || r.push(e));
                },
                i = function (e, t) {
                    var n = Rs(e.ownerDocument);
                    if (t < e.data.length) {
                        if (vs(e.data[t])) return r;
                        if (vs(e.data[t - 1]) && (n.setStart(e, t), n.setEnd(e, t + 1), !Ds(n))) return o(Ps(Bs(n), !1)), r;
                    }
                    0 < t && (n.setStart(e, t - 1), n.setEnd(e, t), Ds(n) || o(Ps(Bs(n), !1))), t < e.data.length && (n.setStart(e, t), n.setEnd(e, t + 1), Ds(n) || o(Ps(Bs(n), !0)));
                };
            if (Ns(e.container())) return i(e.container(), e.offset()), r;
            if (ys(e.container()))
                if (e.isAtEnd()) (n = _s(e.container(), e.offset())), Ns(n) && i(n, n.data.length), xs(n) && !Es(n) && o(Ps(Bs(n), !1));
                else {
                    if (((n = _s(e.container(), e.offset())), Ns(n) && i(n, 0), xs(n) && e.isAtEnd())) return o(Ps(Bs(n), !1)), r;
                    (t = _s(e.container(), e.offset() - 1)), xs(t) && !Es(t) && ((!Cs(t) && !Cs(n) && xs(n)) || o(Ps(Bs(t), !1))), xs(n) && o(Ps(Bs(n), !0));
                }
            return r;
        };
    function Is(t, n, e) {
        var r = function () {
            return (e = e || Ls(Is(t, n)));
        };
        return {
            container: N(t),
            offset: N(n),
            toRange: function () {
                var e = Rs(t.ownerDocument);
                return e.setStart(t, n), e.setEnd(t, n), e;
            },
            getClientRects: r,
            isVisible: function () {
                return 0 < r().length;
            },
            isAtStart: function () {
                return Ns(t), 0 === n;
            },
            isAtEnd: function () {
                return Ns(t) ? n >= t.data.length : n >= t.childNodes.length;
            },
            isEqual: function (e) {
                return e && t === e.container() && n === e.offset();
            },
            getNode: function (e) {
                return _s(t, e ? n - 1 : n);
            },
        };
    }
    ((Ou = Is = Is || {}).fromRangeStart = function (e) {
        return Ou(e.startContainer, e.startOffset);
    }),
        (Ou.fromRangeEnd = function (e) {
            return Ou(e.endContainer, e.endOffset);
        }),
        (Ou.after = function (e) {
            return Ou(e.parentNode, ks(e) + 1);
        }),
        (Ou.before = function (e) {
            return Ou(e.parentNode, ks(e));
        }),
        (Ou.isAbove = function (e, t) {
            return as(Z(t.getClientRects()), ee(e.getClientRects()), fs).getOr(!1);
        }),
        (Ou.isBelow = function (e, t) {
            return as(ee(t.getClientRects()), Z(e.getClientRects()), ds).getOr(!1);
        }),
        (Ou.isAtStart = function (e) {
            return !!e && e.isAtStart();
        }),
        (Ou.isAtEnd = function (e) {
            return !!e && e.isAtEnd();
        }),
        (Ou.isTextPosition = function (e) {
            return !!e && On(e.container());
        }),
        (Ou.isElementPosition = function (e) {
            return !1 === Ou.isTextPosition(e);
        });
    var Ms,
        Fs,
        Us = Is,
        zs = function (e, t) {
            On(t) && 0 === t.data.length && e.remove(t);
        },
        js = function (e, t, n) {
            var r, o, i, a, u, s, c;
            Ln(n)
                ? ((i = e),
                  (a = t),
                  (u = n),
                  (s = U.from(u.firstChild)),
                  (c = U.from(u.lastChild)),
                  a.insertNode(u),
                  s.each(function (e) {
                      return zs(i, e.previousSibling);
                  }),
                  c.each(function (e) {
                      return zs(i, e.nextSibling);
                  }))
                : ((r = e), (o = n), t.insertNode(o), zs(r, o.previousSibling), zs(r, o.nextSibling));
        },
        Hs = On,
        Vs = Rn,
        qs = bu.nodeIndex,
        $s = function (e) {
            var t = e.parentNode;
            return Vs(t) ? $s(t) : t;
        },
        Ws = function (e) {
            return e
                ? be(
                      e.childNodes,
                      function (e, t) {
                          return Vs(t) && "BR" !== t.nodeName ? (e = e.concat(Ws(t))) : e.push(t), e;
                      },
                      []
                  )
                : [];
        },
        Ks = function (t) {
            return function (e) {
                return t === e;
            };
        },
        Xs = function (e) {
            var t = Hs(e) ? "text()" : e.nodeName.toLowerCase();
            return (
                t +
                "[" +
                (function (e) {
                    var r = Ws($s(e)),
                        t = Ce(r, Ks(e), e);
                    r = r.slice(0, t + 1);
                    var n = be(
                        r,
                        function (e, t, n) {
                            return Hs(t) && Hs(r[n - 1]) && e++, e;
                        },
                        0
                    );
                    return (r = ve(r, En([e.nodeName]))), (t = Ce(r, Ks(e), e)) - n;
                })(e) +
                "]"
            );
        },
        Ys = function (e, t) {
            var n,
                r,
                o,
                i = [],
                a = t.container(),
                u = t.offset();
            return (
                Hs(a)
                    ? (n = (function (e, t) {
                          for (; (e = e.previousSibling) && Hs(e); ) t += e.data.length;
                          return t;
                      })(a, u))
                    : (u >= (r = a.childNodes).length ? ((n = "after"), (u = r.length - 1)) : (n = "before"), (a = r[u])),
                i.push(Xs(a)),
                (o = (function (e, t, n) {
                    var r = [];
                    for (t = t.parentNode; t !== e && (!n || !n(t)); t = t.parentNode) r.push(t);
                    return r;
                })(e, a)),
                (o = ve(o, d(Rn))),
                (i = i.concat(he(o, Xs))).reverse().join("/") + "," + n
            );
        },
        Gs = function (e, t) {
            if (!t) return null;
            var n = t.split(","),
                r = n[0].split("/"),
                o = 1 < n.length ? n[1] : "before",
                i = be(
                    r,
                    function (e, t) {
                        var n,
                            r,
                            o,
                            i,
                            a = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t);
                        return a
                            ? ("text()" === a[1] && (a[1] = "#text"),
                              (n = e),
                              (r = a[1]),
                              (o = parseInt(a[2], 10)),
                              (i = Ws(n)),
                              (i = ve(i, function (e, t) {
                                  return !Hs(e) || !Hs(i[t - 1]);
                              })),
                              (i = ve(i, En([r])))[o])
                            : null;
                    },
                    e
                );
            return i
                ? Hs(i)
                    ? (function (e, t) {
                          for (var n, r = e, o = 0; Hs(r); ) {
                              if (((n = r.data.length), o <= t && t <= o + n)) {
                                  (e = r), (t -= o);
                                  break;
                              }
                              if (!Hs(r.nextSibling)) {
                                  (e = r), (t = n);
                                  break;
                              }
                              (o += n), (r = r.nextSibling);
                          }
                          return Hs(e) && t > e.data.length && (t = e.data.length), Us(e, t);
                      })(i, parseInt(o, 10))
                    : ((o = "after" === o ? qs(i) + 1 : qs(i)), Us(i.parentNode, o))
                : null;
        },
        Js = Un,
        Qs = function (e, t, n, r, o) {
            var i,
                a = r[o ? "startContainer" : "endContainer"],
                u = r[o ? "startOffset" : "endOffset"],
                s = [],
                c = 0,
                l = e.getRoot();
            for (
                On(a)
                    ? s.push(
                          n
                              ? (function (e, t, n) {
                                    for (var r = e(t.data.slice(0, n)).length, o = t.previousSibling; o && On(o); o = o.previousSibling) r += e(o.data).length;
                                    return r;
                                })(t, a, u)
                              : u
                      )
                    : (u >= (i = a.childNodes).length && i.length && ((c = 1), (u = Math.max(0, i.length - 1))), s.push(e.nodeIndex(i[u], n) + c));
                a && a !== l;
                a = a.parentNode
            )
                s.push(e.nodeIndex(a, n));
            return s;
        },
        Zs = function (e, t, n) {
            var r = 0;
            return (
                xt.each(e.select(t), function (e) {
                    if ("all" !== e.getAttribute("data-mce-bogus")) return e !== n && void r++;
                }),
                r
            );
        },
        ec = function (e, t) {
            var n,
                r = t ? "start" : "end",
                o = e[r + "Container"],
                i = e[r + "Offset"];
            Nn(o) && "TR" === o.nodeName && (o = (n = o.childNodes)[Math.min(t ? i : i - 1, n.length - 1)]) && ((i = t ? 0 : o.childNodes.length), e["set" + (t ? "Start" : "End")](o, i));
        },
        tc = function (e) {
            return ec(e, !0), ec(e, !1), e;
        },
        nc = function (e, t) {
            var n;
            if (Nn(e) && ((e = gs(e, t)), Js(e))) return e;
            if (mo(e)) {
                if ((On(e) && lo(e) && (e = e.parentNode), (n = e.previousSibling), Js(n))) return n;
                if (((n = e.nextSibling), Js(n))) return n;
            }
        },
        rc = function (e, t, n) {
            var r = n.getNode(),
                o = r ? r.nodeName : null,
                i = n.getRng();
            if (Js(r) || "IMG" === o) return { name: o, index: Zs(n.dom, o, r) };
            var a,
                u,
                s,
                c,
                l,
                f,
                d,
                m = nc((a = i).startContainer, a.startOffset) || nc(a.endContainer, a.endOffset);
            return m ? { name: (o = m.tagName), index: Zs(n.dom, o, m) } : ((u = e), (c = t), (l = i), (f = (s = n).dom), ((d = {}).start = Qs(f, u, c, l, !0)), s.isCollapsed() || (d.end = Qs(f, u, c, l, !1)), d);
        },
        oc = function (e, t, n) {
            var r = { "data-mce-type": "bookmark", id: t, style: "overflow:hidden;line-height:0px" };
            return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r);
        },
        ic = function (e, t) {
            var n = e.dom,
                r = e.getRng(),
                o = n.uniqueId(),
                i = e.isCollapsed(),
                a = e.getNode(),
                u = a.nodeName;
            if ("IMG" === u) return { name: u, index: Zs(n, u, a) };
            var s,
                c = tc(r.cloneRange());
            i || (c.collapse(!1), (s = oc(n, o + "_end", t)), js(n, c, s)), (r = tc(r)).collapse(!0);
            var l = oc(n, o + "_start", t);
            return js(n, r, l), e.moveToBookmark({ id: o, keep: !0 }), { id: o };
        },
        ac = function (e, t, n) {
            return 2 === t ? rc(uo, n, e) : 3 === t ? ((o = (r = e).getRng()), { start: Ys(r.dom.getRoot(), Us.fromRangeStart(o)), end: Ys(r.dom.getRoot(), Us.fromRangeEnd(o)) }) : t ? { rng: e.getRng() } : ic(e, !1);
            var r, o;
        },
        uc = E(rc, o, !0),
        sc = bu.DOM,
        cc = function (e, t, n) {
            var r = e.getParam(t, n);
            if (-1 === r.indexOf("=")) return r;
            var o = e.getParam(t, "", "hash");
            return o.hasOwnProperty(e.id) ? o[e.id] : n;
        },
        lc = function (e) {
            return e.getParam("content_security_policy", "");
        },
        fc = function (e) {
            if (e.getParam("force_p_newlines", !1)) return "p";
            var t = e.getParam("forced_root_block", "p");
            return !1 === t ? "" : !0 === t ? "p" : t;
        },
        dc = function (e) {
            return e.getParam("forced_root_block_attrs", {});
        },
        mc = function (e) {
            return e.getParam("automatic_uploads", !0, "boolean");
        },
        pc = function (e) {
            return e.getParam("icons", "", "string");
        },
        gc = function (e) {
            return e.getParam("referrer_policy", "", "string");
        },
        hc = function (e) {
            return e.getParam("language", "en", "string");
        },
        vc = function (e) {
            return e.getParam("indent_use_margin", !1);
        },
        yc = function (e) {
            var t = e.getParam("object_resizing");
            return !1 !== t && !vt.iOS && (q(t) ? t : "table,img,figure.image,div");
        },
        bc = function (e) {
            return e.getParam("event_root");
        },
        Cc = function (e) {
            return e.getParam("theme");
        },
        wc = function (e) {
            return !1 !== e.getParam("inline_boundaries");
        },
        xc = function (e) {
            return e.getParam("plugins", "", "string");
        },
        Sc = Nn,
        Nc = On,
        Ec = function (e) {
            var t = e.parentNode;
            t && t.removeChild(e);
        },
        kc = function (e) {
            var t = uo(e);
            return { count: e.length - t.length, text: t };
        },
        _c = function (e) {
            for (var t; -1 !== (t = e.data.lastIndexOf(io)); ) e.deleteData(t, 1);
        },
        Rc = function (e, t) {
            return Oc(e), t;
        },
        Tc = function (e, t) {
            var n,
                r,
                o = t.container(),
                i =
                    ((n = te(o.childNodes)),
                    (-1 === (r = L(n, e)) ? U.none() : U.some(r))
                        .map(function (e) {
                            return e < t.offset() ? Us(o, t.offset() - 1) : t;
                        })
                        .getOr(t));
            return Oc(e), i;
        },
        Ac = function (e, t) {
            return Nc(e) && t.container() === e ? ((r = t), (o = kc((n = e).data.substr(0, r.offset()))), (i = kc(n.data.substr(r.offset()))), 0 < (o.text + i.text).length ? (_c(n), Us(n, r.offset() - o.count)) : r) : Rc(e, t);
            var n, r, o, i;
        },
        Dc = function (e, t) {
            return Us.isTextPosition(t) ? Ac(e, t) : ((n = e), ((r = t).container() === n.parentNode ? Tc : Rc)(n, r));
            var n, r;
        },
        Oc = function (e) {
            Sc(e) && mo(e) && (po(e) ? e.removeAttribute("data-mce-caret") : Ec(e)), Nc(e) && (_c(e), 0 === e.data.length && Ec(e));
        },
        Bc = st().browser,
        Pc = Un,
        Lc = jn,
        Ic = zn,
        Mc = function (e, t, n) {
            var r,
                o,
                i,
                a,
                u = cs(t.getBoundingClientRect(), n),
                s = "BODY" === e.tagName ? ((r = e.ownerDocument.documentElement), (o = e.scrollLeft || r.scrollLeft), e.scrollTop || r.scrollTop) : ((a = e.getBoundingClientRect()), (o = e.scrollLeft - a.left), e.scrollTop - a.top);
            return (u.left += o), (u.right += o), (u.top += s), (u.bottom += s), (u.width = 1), 0 < (i = t.offsetWidth - t.clientWidth) && (n && (i *= -1), (u.left += i), (u.right += i)), u;
        },
        Fc = function (e, i, a, t) {
            var n,
                u,
                s = ku(U.none()),
                r = fc(e),
                c = 0 < r.length ? r : "p",
                l = function () {
                    !(function (e) {
                        for (var t = qu(Nt.fromDom(e), "*[contentEditable=false],video,audio,embed,object"), n = 0; n < t.length; n++) {
                            var r,
                                o = t[n].dom,
                                i = o.previousSibling;
                            bo(i) && (1 === (r = i.data).length ? i.parentNode.removeChild(i) : i.deleteData(r.length - 1, 1)), (i = o.nextSibling), yo(i) && (1 === (r = i.data).length ? i.parentNode.removeChild(i) : i.deleteData(0, 1));
                        }
                    })(i),
                        u && (Oc(u), (u = null)),
                        s.get().each(function (e) {
                            lu(e.caret).remove(), s.set(U.none());
                        }),
                        n && (Fr.clearInterval(n), (n = null));
                },
                f = function () {
                    n = Fr.setInterval(function () {
                        t() ? lu("div.mce-visual-caret", i).toggleClass("mce-visual-caret-hidden") : lu("div.mce-visual-caret", i).addClass("mce-visual-caret-hidden");
                    }, 500);
                };
            return {
                show: function (t, e) {
                    var n, r;
                    if ((l(), Ic(e))) return null;
                    if (!a(e))
                        return (
                            (u = (function (e, t) {
                                var n,
                                    r = e.ownerDocument.createTextNode(io),
                                    o = e.parentNode;
                                if (t) {
                                    if (((n = e.previousSibling), co(n))) {
                                        if (mo(n)) return n;
                                        if (bo(n)) return n.splitText(n.data.length - 1);
                                    }
                                    o.insertBefore(r, e);
                                } else {
                                    if (((n = e.nextSibling), co(n))) {
                                        if (mo(n)) return n;
                                        if (yo(n)) return n.splitText(1), n;
                                    }
                                    e.nextSibling ? o.insertBefore(r, e.nextSibling) : o.appendChild(r);
                                }
                                return r;
                            })(e, t)),
                            (r = e.ownerDocument.createRange()),
                            zc(u.nextSibling) ? (r.setStart(u, 0), r.setEnd(u, 0)) : (r.setStart(u, 1), r.setEnd(u, 1)),
                            r
                        );
                    (u = vo(c, e, t)), (n = Mc(i, e, t)), lu(u).css("top", n.top);
                    var o = lu('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(n).appendTo(i)[0];
                    return (
                        s.set(U.some({ caret: o, element: e, before: t })),
                        s.get().each(function (e) {
                            t && lu(e.caret).addClass("mce-visual-caret-before");
                        }),
                        f(),
                        (r = e.ownerDocument.createRange()).setStart(u, 0),
                        r.setEnd(u, 0),
                        r
                    );
                },
                hide: l,
                getCss: function () {
                    return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}";
                },
                reposition: function () {
                    s.get().each(function (e) {
                        var t = Mc(i, e.element, e.before);
                        lu(e.caret).css(xe({}, t));
                    });
                },
                destroy: function () {
                    return Fr.clearInterval(n);
                },
            };
        },
        Uc = function () {
            return Bc.isIE() || Bc.isEdge() || Bc.isFirefox();
        },
        zc = function (e) {
            return Pc(e) || Lc(e);
        },
        jc = function (e) {
            return zc(e) || (Tn(e) && Uc());
        },
        Hc = Un,
        Vc = jn,
        qc = kn("display", "block table table-cell table-caption list-item"),
        $c = mo,
        Wc = lo,
        Kc = Nn,
        Xc = To,
        Yc = function (e, t) {
            for (var n; (n = e(t)); ) if (!Wc(n)) return n;
            return null;
        },
        Gc = function (e, t, n, r, o) {
            var i = new Hr(e, r),
                a = Hc(e) || Wc(e);
            if (t < 0) {
                if (a && n((e = Yc(i.prev, !0)))) return e;
                for (; (e = Yc(i.prev, o)); ) if (n(e)) return e;
            }
            if (0 < t) {
                if (a && n((e = Yc(i.next, !0)))) return e;
                for (; (e = Yc(i.next, o)); ) if (n(e)) return e;
            }
            return null;
        },
        Jc = function (e, t) {
            for (; e && e !== t; ) {
                if (qc(e)) return e;
                e = e.parentNode;
            }
            return null;
        },
        Qc = function (e, t, n) {
            return Jc(e.container(), n) === Jc(t.container(), n);
        },
        Zc = function (e, t) {
            if (!t) return null;
            var n = t.container(),
                r = t.offset();
            return Kc(n) ? n.childNodes[r + e] : null;
        },
        el = function (e, t) {
            var n = t.ownerDocument.createRange();
            return e ? (n.setStartBefore(t), n.setEndBefore(t)) : (n.setStartAfter(t), n.setEndAfter(t)), n;
        },
        tl = function (e, t, n) {
            for (var r, o, i, a = e ? "previousSibling" : "nextSibling"; n && n !== t; ) {
                if (((r = n[a]), $c(r) && (r = r[a]), Hc(r) || Vc(r))) {
                    if (((i = n), Jc(r, (o = t)) === Jc(i, o))) return r;
                    break;
                }
                if (Xc(r)) break;
                n = n.parentNode;
            }
            return null;
        },
        nl = E(el, !0),
        rl = E(el, !1),
        ol = function (e, t, n) {
            var r,
                o,
                i = E(tl, !0, t),
                a = E(tl, !1, t),
                u = n.startContainer,
                s = n.startOffset;
            if (lo(u)) {
                if ((Kc(u) || (u = u.parentNode), "before" === (o = u.getAttribute("data-mce-caret")) && ((r = u.nextSibling), jc(r)))) return nl(r);
                if ("after" === o && ((r = u.previousSibling), jc(r))) return rl(r);
            }
            if (!n.collapsed) return n;
            if (On(u)) {
                if ($c(u)) {
                    if (1 === e) {
                        if ((r = a(u))) return nl(r);
                        if ((r = i(u))) return rl(r);
                    }
                    if (-1 === e) {
                        if ((r = i(u))) return rl(r);
                        if ((r = a(u))) return nl(r);
                    }
                    return n;
                }
                if (bo(u) && s >= u.data.length - 1) return 1 === e && (r = a(u)) ? nl(r) : n;
                if (yo(u) && s <= 1) return -1 === e && (r = i(u)) ? rl(r) : n;
                if (s === u.data.length) return (r = a(u)) ? nl(r) : n;
                if (0 === s) return (r = i(u)) ? rl(r) : n;
            }
            return n;
        },
        il = function (e, t) {
            return U.from(Zc(e ? 0 : -1, t)).filter(Hc);
        },
        al = function (e, t, n) {
            var r = ol(e, t, n);
            return -1 === e ? Is.fromRangeStart(r) : Is.fromRangeEnd(r);
        },
        ul = function (e) {
            return U.from(e.getNode()).map(Nt.fromDom);
        },
        sl = function (e, t) {
            for (; (t = e(t)); ) if (t.isVisible()) return t;
            return t;
        },
        cl = function (e, t) {
            var n = Qc(e, t);
            return !(n || !In(e.getNode())) || n;
        };
    ((Fs = Ms = Ms || {})[(Fs.Backwards = -1)] = "Backwards"), (Fs[(Fs.Forwards = 1)] = "Forwards");
    var ll,
        fl = Un,
        dl = On,
        ml = Nn,
        pl = In,
        gl = To,
        hl = function (e) {
            return (
                ko(e) ||
                (!!Ao((t = e)) &&
                    !0 !==
                        W(
                            te(t.getElementsByTagName("*")),
                            function (e, t) {
                                return e || wo(t);
                            },
                            !1
                        ))
            );
            var t;
        },
        vl = Do,
        yl = function (e, t) {
            return e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null;
        },
        bl = function (e, t) {
            if (0 < e) {
                if (gl(t.previousSibling) && !dl(t.previousSibling)) return Us.before(t);
                if (dl(t)) return Us(t, 0);
            }
            if (e < 0) {
                if (gl(t.nextSibling) && !dl(t.nextSibling)) return Us.after(t);
                if (dl(t)) return Us(t, t.data.length);
            }
            return !(e < 0) || pl(t) ? Us.before(t) : Us.after(t);
        },
        Cl = function (e, t, n) {
            var r, o, i, a;
            if (!ml(n) || !t) return null;
            if (t.isEqual(Us.after(n)) && n.lastChild) {
                if (((a = Us.after(n.lastChild)), e < 0 && gl(n.lastChild) && ml(n.lastChild))) return pl(n.lastChild) ? Us.before(n.lastChild) : a;
            } else a = t;
            var u,
                s,
                c,
                l = a.container(),
                f = a.offset();
            if (dl(l)) {
                if (e < 0 && 0 < f) return Us(l, --f);
                if (0 < e && f < l.length) return Us(l, ++f);
                r = l;
            } else {
                if (e < 0 && 0 < f && ((o = yl(l, f - 1)), gl(o))) return !hl(o) && (i = Gc(o, e, vl, o)) ? (dl(i) ? Us(i, i.data.length) : Us.after(i)) : dl(o) ? Us(o, o.data.length) : Us.before(o);
                if (0 < e && f < l.childNodes.length && ((o = yl(l, f)), gl(o)))
                    return pl(o)
                        ? ((u = n), (c = (s = o).nextSibling) && gl(c) ? (dl(c) ? Us(c, 0) : Us.before(c)) : Cl(Ms.Forwards, Us.after(s), u))
                        : !hl(o) && (i = Gc(o, e, vl, o))
                        ? dl(i)
                            ? Us(i, 0)
                            : Us.before(i)
                        : dl(o)
                        ? Us(o, 0)
                        : Us.after(o);
                r = o || a.getNode();
            }
            if (((0 < e && a.isAtEnd()) || (e < 0 && a.isAtStart())) && ((r = Gc(r, e, k, n, !0)), vl(r, n))) return bl(e, r);
            o = Gc(r, e, vl, n);
            var d = we(
                j(
                    (function (e, t) {
                        for (var n = []; e && e !== t; ) n.push(e), (e = e.parentNode);
                        return n;
                    })(l, n),
                    fl
                )
            );
            return !d || (o && d.contains(o)) ? (o ? bl(e, o) : null) : (a = 0 < e ? Us.after(d) : Us.before(d));
        },
        wl = function (t) {
            return {
                next: function (e) {
                    return Cl(Ms.Forwards, e, t);
                },
                prev: function (e) {
                    return Cl(Ms.Backwards, e, t);
                },
            };
        },
        xl = function (e) {
            return Us.isTextPosition(e) ? 0 === e.offset() : To(e.getNode());
        },
        Sl = function (e) {
            if (Us.isTextPosition(e)) {
                var t = e.container();
                return e.offset() === t.data.length;
            }
            return To(e.getNode(!0));
        },
        Nl = function (e, t) {
            return !Us.isTextPosition(e) && !Us.isTextPosition(t) && e.getNode() === t.getNode(!0);
        },
        El = function (e, t, n) {
            return e ? !Nl(t, n) && ((r = t), !(!Us.isTextPosition(r) && In(r.getNode()))) && Sl(t) && xl(n) : !Nl(n, t) && xl(t) && Sl(n);
            var r;
        },
        kl = function (e, t, n) {
            var r = wl(t);
            return U.from(e ? r.next(n) : r.prev(n));
        },
        _l = function (t, n, r) {
            return kl(t, n, r).bind(function (e) {
                return Qc(r, e, n) && El(t, r, e) ? kl(t, n, e) : U.some(e);
            });
        },
        Rl = function (t, n, e, r) {
            return _l(t, n, e).bind(function (e) {
                return r(e) ? Rl(t, n, e, r) : U.some(e);
            });
        },
        Tl = function (e, t) {
            var n,
                r,
                o,
                i,
                a,
                u = e ? t.firstChild : t.lastChild;
            return On(u) ? U.some(Us(u, e ? 0 : u.data.length)) : u ? (To(u) ? U.some(e ? Us.before(u) : In((a = u)) ? Us.before(a) : Us.after(a)) : ((r = t), (o = u), (i = (n = e) ? Us.before(o) : Us.after(o)), kl(n, r, i))) : U.none();
        },
        Al = E(kl, !0),
        Dl = E(kl, !1),
        Ol = E(Tl, !0),
        Bl = E(Tl, !1),
        Pl = "_mce_caret",
        Ll = function (e) {
            return Nn(e) && e.id === Pl;
        },
        Il = function (e, t) {
            for (; t && t !== e; ) {
                if (t.id === Pl) return t;
                t = t.parentNode;
            }
            return null;
        },
        Ml = function (e, t) {
            return Nn(t) && e.isBlock(t) && !t.innerHTML && !vt.ie && (t.innerHTML = '<br data-mce-bogus="1" />'), t;
        },
        Fl = function (e, t, n) {
            return !(!1 !== t.hasChildNodes() || !Il(e, t)) && ((o = n), (i = (r = t).ownerDocument.createTextNode(io)), r.appendChild(i), o.setStart(i, 0), o.setEnd(i, 0), !0);
            var r, o, i;
        },
        Ul = function (e, t, n, r) {
            var o,
                i,
                a,
                u,
                s = n[t ? "start" : "end"],
                c = e.getRoot();
            if (s) {
                for (a = s[0], i = c, o = s.length - 1; 1 <= o; o--) {
                    if (((u = i.childNodes), Fl(c, i, r))) return !0;
                    if (s[o] > u.length - 1)
                        return (
                            !!Fl(c, i, r) ||
                            (function (e, t) {
                                return Bl(e).fold(
                                    function () {
                                        return !1;
                                    },
                                    function (e) {
                                        return t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0;
                                    }
                                );
                            })(i, r)
                        );
                    i = u[s[o]];
                }
                3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)), 1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)), t ? r.setStart(i, a) : r.setEnd(i, a);
            }
            return !0;
        },
        zl = function (e) {
            return On(e) && 0 < e.data.length;
        },
        jl = function (e, t, n) {
            var r,
                o,
                i,
                a,
                u,
                s,
                c = e.get(n.id + "_" + t),
                l = n.keep;
            if (c) {
                if (
                    ((r = c.parentNode),
                    (s =
                        ((u =
                            ((o =
                                "start" === t
                                    ? l
                                        ? c.hasChildNodes()
                                            ? ((r = c.firstChild), 1)
                                            : zl(c.nextSibling)
                                            ? ((r = c.nextSibling), 0)
                                            : zl(c.previousSibling)
                                            ? ((r = c.previousSibling), c.previousSibling.data.length)
                                            : ((r = c.parentNode), e.nodeIndex(c) + 1)
                                        : e.nodeIndex(c)
                                    : l
                                    ? c.hasChildNodes()
                                        ? ((r = c.firstChild), 1)
                                        : zl(c.previousSibling)
                                        ? ((r = c.previousSibling), c.previousSibling.data.length)
                                        : ((r = c.parentNode), e.nodeIndex(c))
                                    : e.nodeIndex(c)),
                            r)),
                        o)),
                    !l)
                ) {
                    for (
                        a = c.previousSibling,
                            i = c.nextSibling,
                            xt.each(xt.grep(c.childNodes), function (e) {
                                On(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""));
                            });
                        (c = e.get(n.id + "_" + t));

                    )
                        e.remove(c, !0);
                    a && i && a.nodeType === i.nodeType && On(a) && !vt.opera && ((o = a.nodeValue.length), a.appendData(i.nodeValue), e.remove(i), (u = a), (s = o));
                }
                return U.some(Us(u, s));
            }
            return U.none();
        },
        Hl = function (e, t) {
            var n,
                r,
                o,
                i,
                a,
                u,
                s,
                c,
                l,
                f,
                d,
                m,
                p,
                g,
                h = e.dom;
            if (t) {
                if (((g = t), xt.isArray(g.start))) return (m = t), (p = (d = h).createRng()), Ul(d, !0, m, p) && Ul(d, !1, m, p) ? U.some(p) : U.none();
                if ("string" == typeof t.start)
                    return U.some(((c = t), (l = (s = h).createRng()), (f = Gs(s.getRoot(), c.start)), l.setStart(f.container(), f.offset()), (f = Gs(s.getRoot(), c.end)), l.setEnd(f.container(), f.offset()), l));
                if (t.hasOwnProperty("id"))
                    return (
                        (a = jl((o = h), "start", (i = t))),
                        (u = jl(o, "end", i)),
                        as(a, u.or(a), function (e, t) {
                            var n = o.createRng();
                            return n.setStart(Ml(o, e.container()), e.offset()), n.setEnd(Ml(o, t.container()), t.offset()), n;
                        })
                    );
                if (t.hasOwnProperty("name"))
                    return (
                        (n = h),
                        (r = t),
                        U.from(n.select(r.name)[r.index]).map(function (e) {
                            var t = n.createRng();
                            return t.selectNode(e), t;
                        })
                    );
                if (t.hasOwnProperty("rng")) return U.some(t.rng);
            }
            return U.none();
        },
        Vl = ac,
        ql = function (t, e) {
            Hl(t, e).each(function (e) {
                t.setRng(e);
            });
        },
        $l = function (e) {
            return Nn(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type");
        },
        Wl =
            ((ll = oo),
            function (e) {
                return ll === e;
            }),
        Kl = function (e) {
            return "" !== e && -1 !== " \f\n\r\t\x0B".indexOf(e);
        },
        Xl = function (e) {
            return !Kl(e) && !Wl(e);
        },
        Yl = function (e) {
            return !!e.nodeType;
        },
        Gl = function (e, t, n) {
            var r,
                o,
                i,
                a,
                u = n.startOffset,
                s = n.startContainer;
            if ((n.startContainer !== n.endContainer || !(a = n.startContainer.childNodes[n.startOffset]) || !/^(IMG)$/.test(a.nodeName)) && 1 === s.nodeType)
                for (u < (i = s.childNodes).length ? ((s = i[u]), (r = new Hr(s, e.getParent(s, e.isBlock)))) : ((s = i[i.length - 1]), (r = new Hr(s, e.getParent(s, e.isBlock))).next(!0)), o = r.current(); o; o = r.next())
                    if (3 === o.nodeType && !ef(o)) return n.setStart(o, 0), void t.setRng(n);
        },
        Jl = function (e, t, n) {
            if (e) {
                var r = t ? "nextSibling" : "previousSibling";
                for (e = n ? e : e[r]; e; e = e[r]) if (1 === e.nodeType || !ef(e)) return e;
            }
        },
        Ql = function (e, t) {
            return Yl(t) && (t = t.nodeName), !!e.schema.getTextBlockElements()[t.toLowerCase()];
        },
        Zl = function (e, t, n) {
            return e.schema.isValidChild(t, n);
        },
        ef = function (e) {
            return e && On(e) && /^([\t \r\n]+|)$/.test(e.nodeValue);
        },
        tf = function (e, n) {
            return (
                "string" != typeof e
                    ? (e = e(n))
                    : n &&
                      (e = e.replace(/%(\w+)/g, function (e, t) {
                          return n[t] || e;
                      })),
                e
            );
        },
        nf = function (e, t) {
            return (e = "" + ((e = e || "").nodeName || e)), (t = "" + ((t = t || "").nodeName || t)), e.toLowerCase() === t.toLowerCase();
        },
        rf = function (e, t, n) {
            return ("color" !== n && "backgroundColor" !== n) || (t = e.toHex(t)), "fontWeight" === n && 700 === t && (t = "bold"), "fontFamily" === n && (t = t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + t;
        },
        of = function (e, t, n) {
            return rf(e, e.getStyle(t, n), n);
        },
        af = function (t, e) {
            var n;
            return (
                t.getParent(e, function (e) {
                    return (n = t.getStyle(e, "text-decoration")) && "none" !== n;
                }),
                n
            );
        },
        uf = function (e, t, n) {
            return e.getParents(t, n, e.getRoot());
        },
        sf = function (t, e, n) {
            var r = ["inline", "block", "selector", "attributes", "styles", "classes"],
                a = function (e) {
                    return le(e, function (e, t) {
                        return M(r, function (e) {
                            return e === t;
                        });
                    });
                };
            return M(t.formatter.get(e), function (e) {
                var i = a(e);
                return M(t.formatter.get(n), function (e) {
                    var t,
                        n,
                        r,
                        o = a(e);
                    return (t = i), (n = o), void 0 === r && (r = l), u(r).eq(t, n);
                });
            });
        },
        cf = $l,
        lf = uf,
        ff = ef,
        df = Ql,
        mf = function (e, t) {
            for (var n = t; n; ) {
                if (Nn(n) && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
                n = n.parentNode;
            }
            return t;
        },
        pf = function (e, t, n, r) {
            for (var o = t.data, i = n; e ? 0 <= i : i < o.length; e ? i-- : i++) if (r(o.charAt(i))) return e ? i + 1 : i;
            return -1;
        },
        gf = function (e, t, n) {
            return pf(e, t, n, function (e) {
                return Wl(e) || Kl(e);
            });
        },
        hf = function (e, t, n) {
            return pf(e, t, n, Xl);
        },
        vf = function (i, e, t, n, a, r) {
            var u,
                s = i.getParent(t, i.isBlock) || e,
                o = function (e, t, n) {
                    var r = is(i),
                        o = a ? r.backwards : r.forwards;
                    return U.from(
                        o(
                            e,
                            t,
                            function (e, t) {
                                return cf(e.parentNode) ? -1 : n(a, (u = e), t);
                            },
                            s
                        )
                    );
                };
            return o(t, n, gf)
                .bind(function (e) {
                    return r ? o(e.container, e.offset + (a ? -1 : 0), hf) : U.some(e);
                })
                .orThunk(function () {
                    return u ? U.some({ container: u, offset: a ? 0 : u.length }) : U.none();
                });
        },
        yf = function (e, t, n, r, o) {
            On(r) && 0 === r.nodeValue.length && r[o] && (r = r[o]);
            for (var i = lf(e, r), a = 0; a < i.length; a++)
                for (var u = 0; u < t.length; u++) {
                    var s = t[u];
                    if (!("collapsed" in s && s.collapsed !== n.collapsed) && e.is(i[a], s.selector)) return i[a];
                }
            return r;
        },
        bf = function (t, e, n, r) {
            var o,
                i,
                a = t.dom,
                u = a.getRoot();
            if (
                (e[0].wrapper || (i = a.getParent(n, e[0].block, u)),
                i ||
                    ((o = a.getParent(n, "LI,TD,TH")),
                    (i = a.getParent(
                        On(n) ? n.parentNode : n,
                        function (e) {
                            return e !== u && df(t, e);
                        },
                        o
                    ))),
                i && e[0].wrapper && (i = lf(a, i, "ul,ol").reverse()[0] || i),
                !i)
            )
                for (i = n; i[r] && !a.isBlock(i[r]) && ((i = i[r]), !nf(i, "br")); );
            return i || n;
        },
        Cf = function (e, t, n, r, o, i, a) {
            var u,
                s,
                c,
                l = (u = a ? n : o),
                f = a ? "previousSibling" : "nextSibling",
                d = e.getRoot();
            if (On(l) && !ff(l) && (a ? 0 < r : i < l.nodeValue.length)) return l;
            for (;;) {
                if (!t[0].block_expand && e.isBlock(u)) return u;
                for (s = u[f]; s; s = s[f]) if (!cf(s) && !ff(s) && ("BR" !== (c = s).nodeName || !c.getAttribute("data-mce-bogus") || c.nextSibling)) return u;
                if (u === d || u.parentNode === d) {
                    l = u;
                    break;
                }
                u = u.parentNode;
            }
            return l;
        },
        wf = function (e, t, n, r) {
            void 0 === r && (r = !1);
            var o = t.startContainer,
                i = t.startOffset,
                a = t.endContainer,
                u = t.endOffset,
                s = e.dom;
            return (
                Nn(o) && o.hasChildNodes() && ((o = gs(o, i)), On(o) && (i = 0)),
                Nn(a) && a.hasChildNodes() && ((a = gs(a, t.collapsed ? u : u - 1)), On(a) && (u = a.nodeValue.length)),
                (o = mf(s, o)),
                (a = mf(s, a)),
                (cf(o.parentNode) || cf(o)) && ((o = cf(o) ? o : o.parentNode), (o = t.collapsed ? o.previousSibling || o : o.nextSibling || o), On(o) && (i = t.collapsed ? o.length : 0)),
                (cf(a.parentNode) || cf(a)) && ((a = cf(a) ? a : a.parentNode), (a = t.collapsed ? a.nextSibling || a : a.previousSibling || a), On(a) && (u = t.collapsed ? 0 : a.length)),
                t.collapsed &&
                    (vf(s, e.getBody(), o, i, !0, r).each(function (e) {
                        var t = e.container,
                            n = e.offset;
                        (o = t), (i = n);
                    }),
                    vf(s, e.getBody(), a, u, !1, r).each(function (e) {
                        var t = e.container,
                            n = e.offset;
                        (a = t), (u = n);
                    })),
                (n[0].inline || n[0].block_expand) && ((n[0].inline && On(o) && 0 !== i) || (o = Cf(s, n, o, i, a, u, !0)), (n[0].inline && On(a) && u !== a.nodeValue.length) || (a = Cf(s, n, o, i, a, u, !1))),
                n[0].selector && !1 !== n[0].expand && !n[0].inline && ((o = yf(s, n, t, o, "previousSibling")), (a = yf(s, n, t, a, "nextSibling"))),
                (n[0].block || n[0].selector) && ((o = bf(e, n, o, "previousSibling")), (a = bf(e, n, a, "nextSibling")), n[0].block && (s.isBlock(o) || (o = Cf(s, n, o, i, a, u, !0)), s.isBlock(a) || (a = Cf(s, n, o, i, a, u, !1)))),
                Nn(o) && ((i = s.nodeIndex(o)), (o = o.parentNode)),
                Nn(a) && ((u = s.nodeIndex(a) + 1), (a = a.parentNode)),
                { startContainer: o, startOffset: i, endContainer: a, endOffset: u }
            );
        },
        xf = function (e, t) {
            var n = e.childNodes;
            return t >= n.length ? (t = n.length - 1) : t < 0 && (t = 0), n[t] || e;
        },
        Sf = function (e, t, u) {
            var n = t.startContainer,
                r = t.startOffset,
                o = t.endContainer,
                i = t.endOffset,
                s = function (e) {
                    var t = e[0];
                    return 3 === t.nodeType && t === n && r >= t.nodeValue.length && e.splice(0, 1), (t = e[e.length - 1]), 0 === i && 0 < e.length && t === o && 3 === t.nodeType && e.splice(e.length - 1, 1), e;
                },
                c = function (e, t, n) {
                    for (var r = []; e && e !== n; e = e[t]) r.push(e);
                    return r;
                },
                a = function (e, t) {
                    do {
                        if (e.parentNode === t) return e;
                        e = e.parentNode;
                    } while (e);
                },
                l = function (e, t, n) {
                    for (var r = n ? "nextSibling" : "previousSibling", o = e, i = o.parentNode; o && o !== t; o = i) {
                        i = o.parentNode;
                        var a = c(o === e ? o : o[r], r);
                        a.length && (n || a.reverse(), u(s(a)));
                    }
                };
            if ((1 === n.nodeType && n.hasChildNodes() && (n = xf(n, r)), 1 === o.nodeType && o.hasChildNodes() && (o = xf(o, i - 1)), n === o)) return u(s([n]));
            for (var f = e.findCommonAncestor(n, o), d = n; d; d = d.parentNode) {
                if (d === o) return l(n, f, !0);
                if (d === f) break;
            }
            for (d = o; d; d = d.parentNode) {
                if (d === n) return l(o, f);
                if (d === f) break;
            }
            var m = a(n, f) || n,
                p = a(o, f) || o;
            l(n, m, !0);
            var g = c(m === n ? m : m.nextSibling, "nextSibling", p === o ? p.nextSibling : p);
            g.length && u(s(g)), l(o, p);
        },
        Nf = function (e) {
            var t = [];
            if (e) for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
            return t;
        },
        Ef = function (e) {
            return j(
                Y(e, function (e) {
                    var t = ps(e);
                    return t ? [Nt.fromDom(t)] : [];
                }),
                to
            );
        },
        kf = function (e, t) {
            var n = qu(t, "td[data-mce-selected],th[data-mce-selected]");
            return 0 < n.length ? n : Ef(e);
        },
        _f = function (e) {
            return kf(Nf(e.selection.getSel()), Nt.fromDom(e.getBody()));
        },
        Rf = function (t) {
            return Xt(t).fold(N([t]), function (e) {
                return [t].concat(Rf(e));
            });
        },
        Tf = function (t) {
            return Yt(t).fold(N([t]), function (e) {
                return "br" === Dt(e)
                    ? Ht(e)
                          .map(function (e) {
                              return [t].concat(Tf(e));
                          })
                          .getOr([])
                    : [t].concat(Tf(e));
            });
        },
        Af = function (o, e) {
            return as(
                ((a = (i = e).startContainer), (u = i.startOffset), On(a) ? (0 === u ? U.some(Nt.fromDom(a)) : U.none()) : U.from(a.childNodes[u]).map(Nt.fromDom)),
                ((n = (t = e).endContainer), (r = t.endOffset), On(n) ? (r === n.data.length ? U.some(Nt.fromDom(n)) : U.none()) : U.from(n.childNodes[r - 1]).map(Nt.fromDom)),
                function (e, t) {
                    var n = K(Rf(o), E(Rt, e)),
                        r = K(Tf(o), E(Rt, t));
                    return n.isSome() && r.isSome();
                }
            ).getOr(!1);
            var t, n, r, i, a, u;
        },
        Df = function (e, t, n, r) {
            var o = n,
                i = new Hr(n, o),
                a = le(e.schema.getMoveCaretBeforeOnEnterElements(), function (e, t) {
                    return !I(["td", "th", "table"], t.toLowerCase());
                });
            do {
                if (On(n) && 0 !== xt.trim(n.nodeValue).length) return void (r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
                if (a[n.nodeName]) return void (r ? t.setStartBefore(n) : "BR" === n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n));
            } while ((n = r ? i.next() : i.prev()));
            "BODY" === o.nodeName && (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length));
        },
        Of = function (e) {
            var t = e.selection.getSel();
            return t && 0 < t.rangeCount;
        },
        Bf = function (r, o) {
            var e = _f(r);
            0 < e.length
                ? $(e, function (e) {
                      var t = e.dom,
                          n = r.dom.createRng();
                      n.setStartBefore(t), n.setEndAfter(t), o(n, !0);
                  })
                : o(r.selection.getRng(), !1);
        },
        Pf = function (e, t, n) {
            var r = ic(e, t);
            n(r), e.moveToBookmark(r);
        };
    var Lf,
        If,
        Mf,
        Ff =
            ((Lf = Lt),
            (If = "text"),
            {
                get: function (e) {
                    if (!Lf(e)) throw new Error("Can only get " + If + " value of a " + If + " node");
                    return Mf(e).getOr("");
                },
                getOption: (Mf = function (e) {
                    return Lf(e) ? U.from(e.dom.nodeValue) : U.none();
                }),
                set: function (e, t) {
                    if (!Lf(e)) throw new Error("Can only set raw " + If + " value of a " + If + " node");
                    e.dom.nodeValue = t;
                },
            }),
        Uf = function (e) {
            return Ff.get(e);
        },
        zf = function (r, o, i, a) {
            return jt(o).fold(
                function () {
                    return "skipping";
                },
                function (e) {
                    return "br" === a || (Lt((n = o)) && Uf(n) === io) ? "valid" : Pt((t = o)) && Hu(t, $u()) ? "existing" : Ll(o.dom) ? "caret" : Zl(r, i, a) && Zl(r, Dt(e), i) ? "valid" : "invalid-child";
                    var t, n;
                }
            );
        },
        jf = function (e, t, n, r) {
            var o = t.uid,
                i = void 0 === o ? Zu("mce-annotation") : o,
                a = (function (e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                    return n;
                })(t, ["uid"]),
                u = Nt.fromTag("span", e);
            zu(u, $u()), qn(u, "" + Ku(), i), qn(u, "" + Wu(), n);
            var s,
                c = r(i, a),
                l = c.attributes,
                f = void 0 === l ? {} : l,
                d = c.classes,
                m = void 0 === d ? [] : d;
            return (
                $n(u, f),
                (s = u),
                $(m, function (e) {
                    zu(s, e);
                }),
                u
            );
        },
        Hf = function (i, e, t, n, r) {
            var a = [],
                u = jf(i.getDoc(), r, t, n),
                s = ku(U.none()),
                c = function () {
                    s.set(U.none());
                },
                l = function (e) {
                    $(e, o);
                },
                o = function (e) {
                    var t, n;
                    switch (zf(i, e, "span", Dt(e))) {
                        case "invalid-child":
                            c();
                            var r = Wt(e);
                            l(r), c();
                            break;
                        case "valid":
                            var o = s.get().getOrThunk(function () {
                                var e = ns(u);
                                return a.push(e), s.set(U.some(e)), e;
                            });
                            rn((t = e), (n = o)), un(n, t);
                    }
                };
            return (
                Sf(i.dom, e, function (e) {
                    var t;
                    c(), (t = F(e, Nt.fromDom)), l(t);
                }),
                a
            );
        },
        Vf = function (u, s, c, l) {
            u.undoManager.transact(function () {
                var e,
                    t,
                    n,
                    r,
                    o = u.selection,
                    i = o.getRng(),
                    a = 0 < _f(u).length;
                i.collapsed && !a && ((n = wf((e = u), (t = i), [{ inline: !0 }])), t.setStart(n.startContainer, n.startOffset), t.setEnd(n.endContainer, n.endOffset), e.selection.setRng(t)),
                    o.getRng().collapsed && !a
                        ? ((r = jf(u.getDoc(), l, s, c.decorate)), es(r, oo), o.getRng().insertNode(r.dom), o.select(r.dom))
                        : Pf(o, !1, function () {
                              Bf(u, function (e) {
                                  Hf(u, e, s, c.decorate, l);
                              });
                          });
            });
        },
        qf = function (u) {
            var n,
                r =
                    ((n = {}),
                    {
                        register: function (e, t) {
                            n[e] = { name: e, settings: t };
                        },
                        lookup: function (e) {
                            return n.hasOwnProperty(e)
                                ? U.from(n[e]).map(function (e) {
                                      return e.settings;
                                  })
                                : U.none();
                        },
                    });
            Ju(u, r);
            var o = Gu(u);
            return {
                register: function (e, t) {
                    r.register(e, t);
                },
                annotate: function (t, n) {
                    r.lookup(t).each(function (e) {
                        Vf(u, t, e, n);
                    });
                },
                annotationChanged: function (e, t) {
                    o.addListener(e, t);
                },
                remove: function (e) {
                    Xu(u, U.some(e)).each(function (e) {
                        var t = e.elements;
                        $(t, fn);
                    });
                },
                getAll: function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i,
                        a =
                            ((t = u),
                            (n = e),
                            (r = Nt.fromDom(t.getBody())),
                            (o = qu(r, "[" + Wu() + '="' + n + '"]')),
                            (i = {}),
                            $(o, function (e) {
                                var t = Wn(e, Ku()),
                                    n = i.hasOwnProperty(t) ? i[t] : [];
                                i[t] = n.concat([e]);
                            }),
                            i);
                    return ie(a, function (e) {
                        return F(e, function (e) {
                            return e.dom;
                        });
                    });
                },
            };
        };
    function $f(e) {
        return { getBookmark: E(Vl, e), moveToBookmark: E(ql, e) };
    }
    ($f = $f || {}).isBookmarkNode = $l;
    var Wf,
        Kf = $f,
        Xf = function (e, t) {
            for (; t && t !== e; ) {
                if (Fn(t) || Un(t)) return t;
                t = t.parentNode;
            }
            return null;
        },
        Yf = function (t, n, e) {
            if (e.collapsed) return !1;
            if (vt.browser.isIE() && e.startOffset === e.endOffset - 1 && e.startContainer === e.endContainer) {
                var r = e.startContainer.childNodes[e.startOffset];
                if (Nn(r))
                    return M(r.getClientRects(), function (e) {
                        return ms(e, t, n);
                    });
            }
            return M(e.getClientRects(), function (e) {
                return ms(e, t, n);
            });
        },
        Gf = {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            END: 35,
            HOME: 36,
            modifierPressed: function (e) {
                return e.shiftKey || e.ctrlKey || e.altKey || this.metaKeyPressed(e);
            },
            metaKeyPressed: function (e) {
                return vt.mac ? e.metaKey : e.ctrlKey && !e.altKey;
            },
        },
        Jf = Un,
        Qf = function (r, l) {
            var f,
                d,
                m,
                p,
                g,
                h,
                v,
                y,
                b,
                C,
                w,
                x,
                S,
                N,
                E = l.dom,
                s = xt.each,
                c = l.getDoc(),
                k = document,
                _ = Math.abs,
                R = Math.round,
                T = l.getBody(),
                A = { nw: [0, 0, -1, -1], ne: [1, 0, 1, -1], se: [1, 1, 1, 1], sw: [0, 1, -1, 1] },
                D = function (e) {
                    return e && ("IMG" === e.nodeName || l.dom.is(e, "figure.image"));
                },
                n = function (e) {
                    var t = e.target;
                    !(function (e, t) {
                        if ("longpress" !== e.type && 0 !== e.type.indexOf("touch")) return D(e.target) && !Yf(e.clientX, e.clientY, t);
                        var n = e.touches[0];
                        return D(e.target) && !Yf(n.clientX, n.clientY, t);
                    })(e, l.selection.getRng()) ||
                        e.isDefaultPrevented() ||
                        l.selection.select(t);
                },
                O = function (e) {
                    return l.dom.is(e, "figure.image") ? e.querySelector("img") : e;
                },
                B = function (e) {
                    var t = yc(l);
                    return !!t && "false" !== e.getAttribute("data-mce-resize") && e !== l.getBody() && kt(Nt.fromDom(e), t);
                },
                P = function (e, t, n) {
                    E.setStyles(O(e), { width: t, height: n });
                },
                L = function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i,
                        a,
                        u,
                        s = e.screenX - g,
                        c = e.screenY - h;
                    (w = s * p[2] + v),
                        (x = c * p[3] + y),
                        (w = w < 5 ? 5 : w),
                        (x = x < 5 ? 5 : x),
                        (D(f) && !1 !== l.getParam("resize_img_proportional", !0, "boolean") ? !Gf.modifierPressed(e) : Gf.modifierPressed(e)) && (_(s) > _(c) ? ((x = R(w * b)), (w = R(x / b))) : ((w = R(x / b)), (x = R(w * b)))),
                        P(d, w, x),
                        (t = 0 < (t = p.startPos.x + s) ? t : 0),
                        (n = 0 < (n = p.startPos.y + c) ? n : 0),
                        E.setStyles(m, { left: t, top: n, display: "block" }),
                        (m.innerHTML = w + " &times; " + x),
                        p[2] < 0 && d.clientWidth <= w && E.setStyle(d, "left", void 0 + (v - w)),
                        p[3] < 0 && d.clientHeight <= x && E.setStyle(d, "top", void 0 + (y - x)),
                        (s = T.scrollWidth - S) + (c = T.scrollHeight - N) !== 0 && E.setStyles(m, { left: t - s, top: n - c }),
                        C || ((r = l), (o = f), (i = v), (a = y), (u = "corner-" + p.name), r.fire("ObjectResizeStart", { target: o, width: i, height: a, origin: u }), (C = !0));
                },
                I = function () {
                    var e = C;
                    C = !1;
                    var t,
                        n,
                        r,
                        o,
                        i,
                        a = function (e, t) {
                            t && (f.style[e] || !l.schema.isValid(f.nodeName.toLowerCase(), e) ? E.setStyle(O(f), e, t) : E.setAttrib(O(f), e, "" + t));
                        };
                    e && (a("width", w), a("height", x)),
                        E.unbind(c, "mousemove", L),
                        E.unbind(c, "mouseup", I),
                        k !== c && (E.unbind(k, "mousemove", L), E.unbind(k, "mouseup", I)),
                        E.remove(d),
                        E.remove(m),
                        u(f),
                        e && ((t = l), (n = f), (r = w), (o = x), (i = "corner-" + p.name), t.fire("ObjectResized", { target: n, width: r, height: o, origin: i }), E.setAttrib(f, "style", E.getAttrib(f, "style"))),
                        l.nodeChanged();
                },
                u = function (e) {
                    M(), F();
                    var t = E.getPos(e, T),
                        o = t.x,
                        i = t.y,
                        n = e.getBoundingClientRect(),
                        a = n.width || n.right - n.left,
                        u = n.height || n.bottom - n.top;
                    f !== e && ((f = e), (w = x = 0));
                    var r = l.fire("ObjectSelected", { target: e });
                    B(e) && !r.isDefaultPrevented()
                        ? s(A, function (n, r) {
                              var e = E.get("mceResizeHandle" + r);
                              e && E.remove(e),
                                  (e = E.add(T, "div", { id: "mceResizeHandle" + r, "data-mce-bogus": "all", class: "mce-resizehandle", unselectable: !0, style: "cursor:" + r + "-resize; margin:0; padding:0" })),
                                  11 === vt.ie && (e.contentEditable = !1),
                                  E.bind(e, "mousedown", function (e) {
                                      var t;
                                      e.stopImmediatePropagation(),
                                          e.preventDefault(),
                                          (g = (t = e).screenX),
                                          (h = t.screenY),
                                          (v = O(f).clientWidth),
                                          (y = O(f).clientHeight),
                                          (b = y / v),
                                          ((p = n).name = r),
                                          (p.startPos = { x: a * n[0] + o, y: u * n[1] + i }),
                                          (S = T.scrollWidth),
                                          (N = T.scrollHeight),
                                          (d = f.cloneNode(!0)),
                                          E.addClass(d, "mce-clonedresizable"),
                                          E.setAttrib(d, "data-mce-bogus", "all"),
                                          (d.contentEditable = !1),
                                          (d.unSelectabe = !0),
                                          E.setStyles(d, { left: o, top: i, margin: 0 }),
                                          P(d, a, u),
                                          d.removeAttribute("data-mce-selected"),
                                          T.appendChild(d),
                                          E.bind(c, "mousemove", L),
                                          E.bind(c, "mouseup", I),
                                          k !== c && (E.bind(k, "mousemove", L), E.bind(k, "mouseup", I)),
                                          (m = E.add(T, "div", { class: "mce-resize-helper", "data-mce-bogus": "all" }, v + " &times; " + y));
                                  }),
                                  (n.elm = e),
                                  E.setStyles(e, { left: a * n[0] + o - e.offsetWidth / 2, top: u * n[1] + i - e.offsetHeight / 2 });
                          })
                        : M(),
                        f.setAttribute("data-mce-selected", "1");
                },
                M = function () {
                    F(),
                        f && f.removeAttribute("data-mce-selected"),
                        oe(A, function (e, t) {
                            var n = E.get("mceResizeHandle" + t);
                            n && (E.unbind(n), E.remove(n));
                        });
                },
                o = function (e) {
                    var t,
                        n = function (e, t) {
                            if (e)
                                do {
                                    if (e === t) return !0;
                                } while ((e = e.parentNode));
                        };
                    C ||
                        l.removed ||
                        (s(E.select("img[data-mce-selected],hr[data-mce-selected]"), function (e) {
                            e.removeAttribute("data-mce-selected");
                        }),
                        (t = "mousedown" === e.type ? e.target : r.getNode()),
                        n((t = E.$(t).closest("table,img,figure.image,hr")[0]), T) && (a(), n(r.getStart(!0), t) && n(r.getEnd(!0), t)) ? u(t) : M());
                },
                i = function (e) {
                    return Jf(Xf(l.getBody(), e));
                },
                F = function () {
                    oe(A, function (e) {
                        e.elm && (E.unbind(e.elm), delete e.elm);
                    });
                },
                a = function () {
                    try {
                        l.getDoc().execCommand("enableObjectResizing", !1, "false");
                    } catch (e) {}
                };
            l.on("init", function () {
                var e;
                a(),
                    (vt.browser.isIE() || vt.browser.isEdge()) &&
                        (l.on("mousedown click", function (e) {
                            var t = e.target,
                                n = t.nodeName;
                            C || !/^(TABLE|IMG|HR)$/.test(n) || i(t) || (2 !== e.button && l.selection.select(t, "TABLE" === n), "mousedown" === e.type && l.nodeChanged());
                        }),
                        (e = function (e) {
                            var t = function (e) {
                                Fr.setEditorTimeout(l, function () {
                                    return l.selection.select(e);
                                });
                            };
                            if (i(e.target) || jn(e.target)) return e.preventDefault(), void t(e.target);
                            /^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(), "IMG" === e.target.tagName && t(e.target));
                        }),
                        E.bind(T, "mscontrolselect", e),
                        l.on("remove", function () {
                            return E.unbind(T, "mscontrolselect", e);
                        }));
                var t = Fr.throttle(function (e) {
                    l.composing || o(e);
                });
                l.on("nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged", t),
                    l.on("keyup compositionend", function (e) {
                        f && "TABLE" === f.nodeName && t(e);
                    }),
                    l.on("hide blur", M),
                    l.on("contextmenu longpress", n, !0);
            }),
                l.on("remove", F);
            return {
                isResizable: B,
                showResizeRect: u,
                hideResizeRect: M,
                updateResizeRect: o,
                destroy: function () {
                    f = d = null;
                },
            };
        },
        Zf = function (e) {
            return Fn(e) || Un(e);
        },
        ed = function (e, t, n) {
            var r,
                o,
                i,
                a,
                u,
                s = n;
            if (s.caretPositionFromPoint) (o = s.caretPositionFromPoint(e, t)) && ((r = n.createRange()).setStart(o.offsetNode, o.offset), r.collapse(!0));
            else if (n.caretRangeFromPoint) r = n.caretRangeFromPoint(e, t);
            else if (s.body.createTextRange) {
                r = s.body.createTextRange();
                try {
                    r.moveToPoint(e, t), r.collapse(!0);
                } catch (c) {
                    r = (function (e, n, t) {
                        var r,
                            o = t.elementFromPoint(e, n),
                            i = t.body.createTextRange();
                        if (
                            ((o && "HTML" !== o.tagName) || (o = t.body),
                            i.moveToElementText(o),
                            0 <
                                (r = (r = xt.toArray(i.getClientRects())).sort(function (e, t) {
                                    return (e = Math.abs(Math.max(e.top - n, e.bottom - n))) - (t = Math.abs(Math.max(t.top - n, t.bottom - n)));
                                })).length)
                        ) {
                            n = (r[0].bottom + r[0].top) / 2;
                            try {
                                return i.moveToPoint(e, n), i.collapse(!0), i;
                            } catch (a) {}
                        }
                        return null;
                    })(e, t, n);
                }
                return (
                    (i = r),
                    (a = n.body),
                    (u = i && i.parentElement ? i.parentElement() : null),
                    Un(
                        (function (e, t, n) {
                            for (; e && e !== t; ) {
                                if (n(e)) return e;
                                e = e.parentNode;
                            }
                            return null;
                        })(u, a, Zf)
                    )
                        ? null
                        : i
                );
            }
            return r;
        },
        td = function (e, t) {
            return e && t && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset;
        },
        nd = function (e, t, n) {
            return (
                null !==
                (function (e, t, n) {
                    for (; e && e !== t; ) {
                        if (n(e)) return e;
                        e = e.parentNode;
                    }
                    return null;
                })(e, t, n)
            );
        },
        rd = function (e) {
            return e && "TABLE" === e.nodeName;
        },
        od = function (e, t, n) {
            for (var r = new Hr(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot()); (t = r[n ? "prev" : "next"]()); ) if (In(t)) return !0;
        },
        id = function (e, t, n, r, o) {
            var i,
                a,
                u = e.getRoot(),
                s = e.schema.getNonEmptyElements(),
                c = e.getParent(o.parentNode, e.isBlock) || u;
            if (r && In(o) && t && e.isEmpty(c)) return U.some(Is(o.parentNode, e.nodeIndex(o)));
            for (var l, f, d = new Hr(o, c); (a = d[r ? "prev" : "next"]()); ) {
                if ("false" === e.getContentEditableParent(a) || ((f = u), mo((l = a)) && !1 === nd(l, f, Ll))) return U.none();
                if (On(a) && 0 < a.nodeValue.length)
                    return !1 ===
                        (function (e, t, n) {
                            return nd(e, t, function (e) {
                                return e.nodeName === n;
                            });
                        })(a, u, "A")
                        ? U.some(Is(a, r ? a.nodeValue.length : 0))
                        : U.none();
                if (e.isBlock(a) || s[a.nodeName.toLowerCase()]) return U.none();
                i = a;
            }
            return n && i ? U.some(Is(i, 0)) : U.none();
        },
        ad = function (e, t, n, r) {
            var o,
                i,
                a,
                u,
                s = e.getRoot(),
                c = !1,
                l = r[(n ? "start" : "end") + "Container"],
                f = r[(n ? "start" : "end") + "Offset"],
                d = Nn(l) && f === l.childNodes.length,
                m = e.schema.getNonEmptyElements(),
                p = n;
            if (mo(l)) return U.none();
            if ((Nn(l) && f > l.childNodes.length - 1 && (p = !1), Pn(l) && ((l = s), (f = 0)), l === s)) {
                if (p && (o = l.childNodes[0 < f ? f - 1 : 0])) {
                    if (mo(o)) return U.none();
                    if (m[o.nodeName] || rd(o)) return U.none();
                }
                if (l.hasChildNodes()) {
                    if (((f = Math.min(!p && 0 < f ? f - 1 : f, l.childNodes.length - 1)), (l = l.childNodes[f]), (f = On(l) && d ? l.data.length : 0), !t && l === s.lastChild && rd(l))) return U.none();
                    if (
                        (function (e, t) {
                            for (; t && t !== e; ) {
                                if (Un(t)) return !0;
                                t = t.parentNode;
                            }
                            return !1;
                        })(s, l) ||
                        mo(l)
                    )
                        return U.none();
                    if (l.hasChildNodes() && !1 === rd(l)) {
                        var g = new Hr((o = l), s);
                        do {
                            if (Un(o) || mo(o)) {
                                c = !1;
                                break;
                            }
                            if (On(o) && 0 < o.nodeValue.length) {
                                (f = p ? 0 : o.nodeValue.length), (l = o), (c = !0);
                                break;
                            }
                            if (m[o.nodeName.toLowerCase()] && (!(i = o) || !/^(TD|TH|CAPTION)$/.test(i.nodeName))) {
                                (f = e.nodeIndex(o)), (l = o.parentNode), p || f++, (c = !0);
                                break;
                            }
                        } while ((o = p ? g.next() : g.prev()));
                    }
                }
            }
            return (
                t &&
                    (On(l) &&
                        0 === f &&
                        id(e, d, t, !0, l).each(function (e) {
                            (l = e.container()), (f = e.offset()), (c = !0);
                        }),
                    Nn(l) &&
                        (!(o = (o = l.childNodes[f]) || l.childNodes[f - 1]) ||
                            !In(o) ||
                            ((u = "A"), (a = o).previousSibling && a.previousSibling.nodeName === u) ||
                            od(e, o, !1) ||
                            od(e, o, !0) ||
                            id(e, d, t, !0, o).each(function (e) {
                                (l = e.container()), (f = e.offset()), (c = !0);
                            }))),
                p &&
                    !t &&
                    On(l) &&
                    f === l.nodeValue.length &&
                    id(e, d, t, !1, l).each(function (e) {
                        (l = e.container()), (f = e.offset()), (c = !0);
                    }),
                c ? U.some(Is(l, f)) : U.none()
            );
        },
        ud = function (e, t) {
            var n = t.collapsed,
                r = t.cloneRange(),
                o = Is.fromRangeStart(t);
            return (
                ad(e, n, !0, r).each(function (e) {
                    (n && Is.isAbove(o, e)) || r.setStart(e.container(), e.offset());
                }),
                n ||
                    ad(e, n, !1, r).each(function (e) {
                        r.setEnd(e.container(), e.offset());
                    }),
                n && r.collapse(!0),
                td(t, r) ? U.none() : U.some(r)
            );
        },
        sd = function (e, t) {
            return e.splitText(t);
        },
        cd = function (e) {
            var t = e.startContainer,
                n = e.startOffset,
                r = e.endContainer,
                o = e.endOffset;
            return (
                t === r && On(t)
                    ? 0 < n && n < t.nodeValue.length && ((t = (r = sd(t, n)).previousSibling), n < o ? ((t = r = sd(r, (o -= n)).previousSibling), (o = r.nodeValue.length), (n = 0)) : (o = 0))
                    : (On(t) && 0 < n && n < t.nodeValue.length && ((t = sd(t, n)), (n = 0)), On(r) && 0 < o && o < r.nodeValue.length && (o = (r = sd(r, o).previousSibling).nodeValue.length)),
                { startContainer: t, startOffset: n, endContainer: r, endOffset: o }
            );
        };
    function ld(n) {
        return {
            walk: function (e, t) {
                return Sf(n, e, t);
            },
            split: cd,
            normalize: function (t) {
                return ud(n, t).fold(p, function (e) {
                    return t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0;
                });
            },
        };
    }
    ((Wf = ld = ld || {}).compareRanges = td), (Wf.getCaretRangeFromPoint = ed), (Wf.getSelectedNode = ps), (Wf.getNode = gs);
    var fd = ld;
    var dd,
        md,
        pd,
        gd,
        hd,
        vd =
            ((dd = "height"),
            (md = function (e) {
                var t = e.dom;
                return dn(e) ? t.getBoundingClientRect().height : t.offsetHeight;
            }),
            {
                set: function (e, t) {
                    if (!D(t) && !t.match(/^[0-9]+$/)) throw new Error(dd + ".set accepts only positive integer values. Value was " + t);
                    var n = e.dom;
                    Hn(n) && (n.style[dd] = t + "px");
                },
                get: (pd = function (e) {
                    var t = md(e);
                    if (t <= 0 || null === t) {
                        var n = Yn(e, dd);
                        return parseFloat(n) || 0;
                    }
                    return t;
                }),
                getOuter: pd,
                aggregate: (gd = function (o, e) {
                    return W(
                        e,
                        function (e, t) {
                            var n = Yn(o, t),
                                r = n === undefined ? 0 : parseInt(n, 10);
                            return isNaN(r) ? e : e + r;
                        },
                        0
                    );
                }),
                max: function (e, t, n) {
                    var r = gd(e, n);
                    return r < t ? t - r : 0;
                },
            }),
        yd = function (r, e) {
            return r.view(e).fold(N([]), function (e) {
                var t = r.owner(e),
                    n = yd(r, t);
                return [e].concat(n);
            });
        },
        bd = /* */ Object.freeze({
            __proto__: null,
            view: function (e) {
                var t;
                return (e.dom === document ? U.none() : U.from(null === (t = e.dom.defaultView) || void 0 === t ? void 0 : t.frameElement)).map(Nt.fromDom);
            },
            owner: Ut,
        }),
        Cd = function (e) {
            var t,
                n,
                r,
                o = Nt.fromDom(document),
                i = vn(o),
                a = ((t = e), (r = (n = bd).owner(t)), yd(n, r)),
                u = hn(e),
                s = H(
                    a,
                    function (e, t) {
                        var n = hn(t);
                        return { left: e.left + n.left, top: e.top + n.top };
                    },
                    { left: 0, top: 0 }
                );
            return pn(s.left + u.left + i.left, s.top + u.top + i.top);
        },
        wd = function (e) {
            return "textarea" === Dt(e);
        },
        xd = function (e, t) {
            var n,
                r = (function (e) {
                    var t = e.dom.ownerDocument,
                        n = t.body,
                        r = t.defaultView,
                        o = t.documentElement;
                    if (n === e.dom) return pn(n.offsetLeft, n.offsetTop);
                    var i = gn(null == r ? void 0 : r.pageYOffset, o.scrollTop),
                        a = gn(null == r ? void 0 : r.pageXOffset, o.scrollLeft),
                        u = gn(o.clientTop, n.clientTop),
                        s = gn(o.clientLeft, n.clientLeft);
                    return hn(e).translate(a - s, i - u);
                })(e),
                o = ((n = e), vd.get(n));
            return { element: e, bottom: r.top + o, height: o, pos: r, cleanup: t };
        },
        Sd = function (e, t) {
            var n = (function (e, t) {
                    var n = Wt(e);
                    if (0 === n.length || wd(e)) return { element: e, offset: t };
                    if (t < n.length && !wd(n[t])) return { element: n[t], offset: 0 };
                    var r = n[n.length - 1];
                    return wd(r) ? { element: e, offset: t } : "img" === Dt(r) ? { element: r, offset: 1 } : Lt(r) ? { element: r, offset: Uf(r).length } : { element: r, offset: Wt(r).length };
                })(e, t),
                r = Nt.fromHtml('<span data-mce-bogus="all">\ufeff</span>');
            return (
                rn(n.element, r),
                xd(r, function () {
                    return ln(r);
                })
            );
        },
        Nd = function (n, r, o, i) {
            Rd(
                n,
                function (e, t) {
                    return kd(n, r, o, i);
                },
                o
            );
        },
        Ed = function (e, t, n, r, o) {
            var i,
                a,
                u = { elm: r.element.dom, alignToTop: o };
            (i = u), e.fire("ScrollIntoView", i).isDefaultPrevented() || (n(t, vn(t).top, r, o), (a = u), e.fire("AfterScrollIntoView", a));
        },
        kd = function (e, t, n, r) {
            var o = Nt.fromDom(e.getBody()),
                i = Nt.fromDom(e.getDoc());
            o.dom.offsetWidth;
            var a = Sd(Nt.fromDom(n.startContainer), n.startOffset);
            Ed(e, i, t, a, r), a.cleanup();
        },
        _d = function (e, t, n, r) {
            var o,
                i = Nt.fromDom(e.getDoc());
            Ed(e, i, n, ((o = t), xd(Nt.fromDom(o), V)), r);
        },
        Rd = function (e, t, n) {
            var r = n.startContainer,
                o = n.startOffset,
                i = n.endContainer,
                a = n.endOffset;
            t(Nt.fromDom(r), Nt.fromDom(i));
            var u = e.dom.createRng();
            u.setStart(r, o), u.setEnd(i, a), e.selection.setRng(n);
        },
        Td = function (e, t, n, r) {
            var o,
                i = e.pos;
            n ? yn(i.left, i.top, r) : ((o = i.top - t + e.height), yn(i.left, o, r));
        },
        Ad = function (e, t, n, r, o) {
            var i = n + t,
                a = r.pos.top,
                u = r.bottom,
                s = n <= u - a;
            a < t ? Td(r, n, !1 !== o, e) : i < a ? Td(r, n, s ? !1 !== o : !0 === o, e) : i < u && !s && Td(r, n, !0 === o, e);
        },
        Dd = function (e, t, n, r) {
            var o = e.dom.defaultView.innerHeight;
            Ad(e, t, o, n, r);
        },
        Od = function (e, t, n, r) {
            var o = e.dom.defaultView.innerHeight;
            Ad(e, t, o, n, r);
            var i = Cd(n.element),
                a = wn(window);
            i.top < a.y ? bn(n.element, !1 !== r) : i.top > a.bottom && bn(n.element, !0 === r);
        },
        Bd = function (e, t, n) {
            return Nd(e, Dd, t, n);
        },
        Pd = function (e, t, n) {
            return _d(e, t, Dd, n);
        },
        Ld = function (e, t, n) {
            return Nd(e, Od, t, n);
        },
        Id = function (e, t, n) {
            return _d(e, t, Od, n);
        },
        Md = function (e, t, n) {
            (e.inline ? Bd : Ld)(e, t, n);
        },
        Fd = function (e) {
            var t = Zt(e).dom;
            return e.dom === t.activeElement;
        },
        Ud = function (e) {
            return void 0 === e && (e = Nt.fromDom(document)), U.from(e.dom.activeElement).map(Nt.fromDom);
        },
        zd = function (e, t, n, r) {
            return { start: e, soffset: t, finish: n, foffset: r };
        },
        jd = gr([{ before: ["element"] }, { on: ["element", "offset"] }, { after: ["element"] }]),
        Hd =
            (jd.before,
            jd.on,
            jd.after,
            function (e) {
                return e.fold(o, o, o);
            }),
        Vd = gr([{ domRange: ["rng"] }, { relative: ["startSitu", "finishSitu"] }, { exact: ["start", "soffset", "finish", "foffset"] }]),
        qd = {
            domRange: Vd.domRange,
            relative: Vd.relative,
            exact: Vd.exact,
            exactFromRange: function (e) {
                return Vd.exact(e.start, e.soffset, e.finish, e.foffset);
            },
            getWin: function (e) {
                var t = e.match({
                    domRange: function (e) {
                        return Nt.fromDom(e.startContainer);
                    },
                    relative: function (e, t) {
                        return Hd(e);
                    },
                    exact: function (e, t, n, r) {
                        return e;
                    },
                });
                return zt(t);
            },
            range: zd,
        },
        $d = st().browser,
        Wd = function (e, t) {
            var n = Lt(t) ? Uf(t).length : Wt(t).length + 1;
            return n < e ? n : e < 0 ? 0 : e;
        },
        Kd = function (e) {
            return qd.range(e.start, Wd(e.soffset, e.start), e.finish, Wd(e.foffset, e.finish));
        },
        Xd = function (e, t) {
            return !Sn(t.dom) && (At(e, t) || Rt(e, t));
        },
        Yd = function (t) {
            return function (e) {
                return Xd(t, e.start) && Xd(t, e.finish);
            };
        },
        Gd = function (e) {
            return !0 === e.inline || $d.isIE();
        },
        Jd = function (e) {
            return qd.range(Nt.fromDom(e.startContainer), e.startOffset, Nt.fromDom(e.endContainer), e.endOffset);
        },
        Qd = function (e) {
            var t,
                n,
                r = zt(e);
            return (t = r.dom), ((n = t.getSelection()) && 0 !== n.rangeCount ? U.from(n.getRangeAt(0)) : U.none()).map(Jd).filter(Yd(e));
        },
        Zd = function (e) {
            var t = document.createRange();
            try {
                return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), U.some(t);
            } catch (n) {
                return U.none();
            }
        },
        em = function (e) {
            var t = Gd(e) ? Qd(Nt.fromDom(e.getBody())) : U.none();
            e.bookmark = t.isSome() ? t : e.bookmark;
        },
        tm = function (r) {
            return (r.bookmark ? r.bookmark : U.none())
                .bind(function (e) {
                    return (t = Nt.fromDom(r.getBody())), (n = e), U.from(n).filter(Yd(t)).map(Kd);
                    var t, n;
                })
                .bind(Zd);
        },
        nm = {
            isEditorUIElement: function (e) {
                var t = e.className.toString();
                return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-");
            },
        },
        rm = function (n, e) {
            var t, r;
            st().browser.isIE()
                ? (r = n).on("focusout", function () {
                      em(r);
                  })
                : ((t = e),
                  n.on("mouseup touchend", function (e) {
                      t.throttle();
                  })),
                n.on("keyup NodeChange", function (e) {
                    var t;
                    ("nodechange" === (t = e).type && t.selectionChange) || em(n);
                });
        },
        om = function (r) {
            var o = Pu(function () {
                em(r);
            }, 0);
            r.on("init", function () {
                var e, t, n;
                r.inline &&
                    ((e = r),
                    (t = o),
                    (n = function () {
                        t.throttle();
                    }),
                    bu.DOM.bind(document, "mouseup", n),
                    e.on("remove", function () {
                        bu.DOM.unbind(document, "mouseup", n);
                    })),
                    rm(r, o);
            }),
                r.on("remove", function () {
                    o.cancel();
                });
        },
        im = bu.DOM,
        am = function (t, e) {
            var n = t.getParam("custom_ui_selector", "", "string");
            return (
                null !==
                im.getParent(e, function (e) {
                    return nm.isEditorUIElement(e) || (!!n && t.dom.is(e, n));
                })
            );
        },
        um = function (n, e) {
            var t = e.editor;
            om(t),
                t.on("focusin", function () {
                    var e = n.focusedEditor;
                    e !== this && (e && e.fire("blur", { focusedEditor: this }), n.setActive(this), (n.focusedEditor = this).fire("focus", { blurredEditor: e }), this.focus(!0));
                }),
                t.on("focusout", function () {
                    var t = this;
                    Fr.setEditorTimeout(t, function () {
                        var e = n.focusedEditor;
                        am(
                            t,
                            (function (e) {
                                try {
                                    var t = Zt(Nt.fromDom(e.getElement()));
                                    return Ud(t).fold(
                                        function () {
                                            return document.body;
                                        },
                                        function (e) {
                                            return e.dom;
                                        }
                                    );
                                } catch (n) {
                                    return document.body;
                                }
                            })(t)
                        ) ||
                            e !== t ||
                            (t.fire("blur", { focusedEditor: null }), (n.focusedEditor = null));
                    });
                }),
                hd ||
                    ((hd = function (e) {
                        var t = n.activeEditor;
                        t &&
                            (function (e) {
                                if (Qt() && T(e.target)) {
                                    var t = Nt.fromDom(e.target);
                                    if (Pt(t) && nn(t) && e.composed && e.composedPath) {
                                        var n = e.composedPath();
                                        if (n) return Z(n);
                                    }
                                }
                                return U.from(e.target);
                            })(e).each(function (e) {
                                e.ownerDocument === document && (e === document.body || am(t, e) || n.focusedEditor !== t || (t.fire("blur", { focusedEditor: null }), (n.focusedEditor = null)));
                            });
                    }),
                    im.bind(document, "focusin", hd));
        },
        sm = function (e, t) {
            e.focusedEditor === t.editor && (e.focusedEditor = null), e.activeEditor || (im.unbind(document, "focusin", hd), (hd = null));
        },
        cm = function (t, e) {
            return ((n = e).collapsed ? U.from(gs(n.startContainer, n.startOffset)).map(Nt.fromDom) : U.none()).bind(function (e) {
                return eo(e) ? U.some(e) : !1 === At(t, e) ? U.some(t) : U.none();
            });
            var n;
        },
        lm = function (t, e) {
            cm(Nt.fromDom(t.getBody()), e)
                .bind(function (e) {
                    return Ol(e.dom);
                })
                .fold(
                    function () {
                        t.selection.normalize();
                    },
                    function (e) {
                        return t.selection.setRng(e.toRange());
                    }
                );
        },
        fm = function (e) {
            if (e.setActive)
                try {
                    e.setActive();
                } catch (t) {
                    e.focus();
                }
            else e.focus();
        },
        dm = function (e) {
            return (
                Fd(e) ||
                Ud(Zt((t = e)))
                    .filter(function (e) {
                        return t.dom.contains(e.dom);
                    })
                    .isSome()
            );
            var t;
        },
        mm = function (r) {
            return Ud()
                .filter(function (e) {
                    return (t = e.dom), !((n = t.classList) !== undefined && (n.contains("tox-edit-area") || n.contains("tox-edit-area__iframe") || n.contains("mce-content-body"))) && am(r, e.dom);
                    var t, n;
                })
                .isSome();
        },
        pm = function (e) {
            return e.inline ? (n = e.getBody()) && dm(Nt.fromDom(n)) : (t = e).iframeElement && Fd(Nt.fromDom(t.iframeElement));
            var t, n;
        },
        gm = function (t) {
            var e = t.selection,
                n = t.getBody(),
                r = e.getRng();
            t.quirks.refreshContentEditable(),
                t.bookmark !== undefined &&
                    !1 === pm(t) &&
                    tm(t).each(function (e) {
                        t.selection.setRng(e), (r = e);
                    });
            var o,
                i,
                a =
                    ((o = t),
                    (i = e.getNode()),
                    o.dom.getParent(i, function (e) {
                        return "true" === o.dom.getContentEditable(e);
                    }));
            if (t.$.contains(n, a)) return fm(a), lm(t, r), void hm(t);
            t.inline || (vt.opera || fm(n), t.getWin().focus()), (vt.gecko || t.inline) && (fm(n), lm(t, r)), hm(t);
        },
        hm = function (e) {
            return e.editorManager.setActive(e);
        },
        vm = function (e, t, n, r, o) {
            var i = n ? t.startContainer : t.endContainer,
                a = n ? t.startOffset : t.endOffset;
            return U.from(i)
                .map(Nt.fromDom)
                .map(function (e) {
                    return r && t.collapsed ? e : Kt(e, o(e, a)).getOr(e);
                })
                .bind(function (e) {
                    return Pt(e) ? U.some(e) : jt(e).filter(Pt);
                })
                .map(function (e) {
                    return e.dom;
                })
                .getOr(e);
        },
        ym = function (e, t, n) {
            return vm(e, t, !0, n, function (e, t) {
                return Math.min(e.dom.childNodes.length, t);
            });
        },
        bm = function (e, t, n) {
            return vm(e, t, !1, n, function (e, t) {
                return 0 < t ? t - 1 : t;
            });
        },
        Cm = function (e, t) {
            for (var n = e; e && On(e) && 0 === e.length; ) e = t ? e.nextSibling : e.previousSibling;
            return e || n;
        },
        wm = function (n, e) {
            return F(e, function (e) {
                var t = n.fire("GetSelectionRange", { range: e });
                return t.range !== e ? t.range : e;
            });
        },
        xm = { "#text": 3, "#comment": 8, "#cdata": 4, "#pi": 7, "#doctype": 10, "#document-fragment": 11 },
        Sm = function (e, t, n) {
            var r = n ? "lastChild" : "firstChild",
                o = n ? "prev" : "next";
            if (e[r]) return e[r];
            if (e !== t) {
                var i = e[o];
                if (i) return i;
                for (var a = e.parent; a && a !== t; a = a.parent) if ((i = a[o])) return i;
            }
        },
        Nm = function (e) {
            var t = "a" === e.name && !e.attr("href") && e.attr("id");
            return e.attr("name") || (e.attr("id") && !e.firstChild) || e.attr("data-mce-bookmark") || t;
        },
        Em =
            ((km.create = function (e, t) {
                var n = new km(e, xm[e] || 1);
                return (
                    t &&
                        oe(t, function (e, t) {
                            n.attr(t, e);
                        }),
                    n
                );
            }),
            (km.prototype.replace = function (e) {
                return e.parent && e.remove(), this.insert(e, this), this.remove(), this;
            }),
            (km.prototype.attr = function (e, t) {
                var n,
                    r = this;
                if ("string" != typeof e)
                    return (
                        e !== undefined &&
                            null !== e &&
                            oe(e, function (e, t) {
                                r.attr(t, e);
                            }),
                        r
                    );
                if ((n = r.attributes)) {
                    if (t === undefined) return n.map[e];
                    if (null === t) {
                        if (e in n.map) {
                            delete n.map[e];
                            for (var o = n.length; o--; ) if (n[o].name === e) return n.splice(o, 1), r;
                        }
                        return r;
                    }
                    if (e in n.map) {
                        for (o = n.length; o--; )
                            if (n[o].name === e) {
                                n[o].value = t;
                                break;
                            }
                    } else n.push({ name: e, value: t });
                    return (n.map[e] = t), r;
                }
            }),
            (km.prototype.clone = function () {
                var e,
                    t = new km(this.name, this.type);
                if ((e = this.attributes)) {
                    var n = [];
                    n.map = {};
                    for (var r = 0, o = e.length; r < o; r++) {
                        var i = e[r];
                        "id" !== i.name && ((n[n.length] = { name: i.name, value: i.value }), (n.map[i.name] = i.value));
                    }
                    t.attributes = n;
                }
                return (t.value = this.value), (t.shortEnded = this.shortEnded), t;
            }),
            (km.prototype.wrap = function (e) {
                return this.parent.insert(e, this), e.append(this), this;
            }),
            (km.prototype.unwrap = function () {
                for (var e = this.firstChild; e; ) {
                    var t = e.next;
                    this.insert(e, this, !0), (e = t);
                }
                this.remove();
            }),
            (km.prototype.remove = function () {
                var e = this.parent,
                    t = this.next,
                    n = this.prev;
                return e && (e.firstChild === this ? (e.firstChild = t) && (t.prev = null) : (n.next = t), e.lastChild === this ? (e.lastChild = n) && (n.next = null) : (t.prev = n), (this.parent = this.next = this.prev = null)), this;
            }),
            (km.prototype.append = function (e) {
                e.parent && e.remove();
                var t = this.lastChild;
                return t ? (((t.next = e).prev = t), (this.lastChild = e)) : (this.lastChild = this.firstChild = e), (e.parent = this), e;
            }),
            (km.prototype.insert = function (e, t, n) {
                e.parent && e.remove();
                var r = t.parent || this;
                return (
                    n ? (t === r.firstChild ? (r.firstChild = e) : (t.prev.next = e), (e.prev = t.prev), ((e.next = t).prev = e)) : (t === r.lastChild ? (r.lastChild = e) : (t.next.prev = e), (e.next = t.next), ((e.prev = t).next = e)),
                    (e.parent = r),
                    e
                );
            }),
            (km.prototype.getAll = function (e) {
                for (var t = [], n = this.firstChild; n; n = Sm(n, this)) n.name === e && t.push(n);
                return t;
            }),
            (km.prototype.empty = function () {
                if (this.firstChild) {
                    for (var e = [], t = this.firstChild; t; t = Sm(t, this)) e.push(t);
                    for (var n = e.length; n--; ) (t = e[n]).parent = t.firstChild = t.lastChild = t.next = t.prev = null;
                }
                return (this.firstChild = this.lastChild = null), this;
            }),
            (km.prototype.isEmpty = function (e, t, n) {
                void 0 === t && (t = {});
                var r = this.firstChild;
                if (Nm(this)) return !1;
                if (r)
                    do {
                        if (1 === r.type) {
                            if (r.attr("data-mce-bogus")) continue;
                            if (e[r.name]) return !1;
                            if (Nm(r)) return !1;
                        }
                        if (8 === r.type) return !1;
                        if (
                            3 === r.type &&
                            !(function (e) {
                                if (Bo(e.value)) {
                                    var t = e.parent;
                                    return !t || ("span" === t.name && !t.attr("style")) || !/^[ ]+$/.test(e.value);
                                }
                            })(r)
                        )
                            return !1;
                        if (3 === r.type && r.parent && t[r.parent.name] && Bo(r.value)) return !1;
                        if (n && n(r)) return !1;
                    } while ((r = Sm(r, this)));
                return !0;
            }),
            (km.prototype.walk = function (e) {
                return Sm(this, null, e);
            }),
            km);
    function km(e, t) {
        (this.name = e), 1 === (this.type = t) && ((this.attributes = []), (this.attributes.map = {}));
    }
    var _m = xt.makeMap,
        Rm = function (e) {
            var u = [],
                s = (e = e || {}).indent,
                c = _m(e.indent_before || ""),
                l = _m(e.indent_after || ""),
                f = ri.getEncodeFunc(e.entity_encoding || "raw", e.entities),
                d = "html" === e.element_format;
            return {
                start: function (e, t, n) {
                    var r, o, i, a;
                    if ((s && c[e] && 0 < u.length && 0 < (a = u[u.length - 1]).length && "\n" !== a && u.push("\n"), u.push("<", e), t)) for (r = 0, o = t.length; r < o; r++) (i = t[r]), u.push(" ", i.name, '="', f(i.value, !0), '"');
                    (u[u.length] = !n || d ? ">" : " />"), n && s && l[e] && 0 < u.length && 0 < (a = u[u.length - 1]).length && "\n" !== a && u.push("\n");
                },
                end: function (e) {
                    var t;
                    u.push("</", e, ">"), s && l[e] && 0 < u.length && 0 < (t = u[u.length - 1]).length && "\n" !== t && u.push("\n");
                },
                text: function (e, t) {
                    0 < e.length && (u[u.length] = t ? e : f(e));
                },
                cdata: function (e) {
                    u.push("<![CDATA[", e, "]]>");
                },
                comment: function (e) {
                    u.push("\x3c!--", e, "--\x3e");
                },
                pi: function (e, t) {
                    t ? u.push("<?", e, " ", f(t), "?>") : u.push("<?", e, "?>"), s && u.push("\n");
                },
                doctype: function (e) {
                    u.push("<!DOCTYPE", e, ">", s ? "\n" : "");
                },
                reset: function () {
                    u.length = 0;
                },
                getContent: function () {
                    return u.join("").replace(/\n$/, "");
                },
            };
        },
        Tm = function (t, p) {
            void 0 === p && (p = pi());
            var g = Rm(t);
            (t = t || {}).validate = !("validate" in t) || t.validate;
            return {
                serialize: function (e) {
                    var f = t.validate,
                        d = {
                            3: function (e) {
                                g.text(e.value, e.raw);
                            },
                            8: function (e) {
                                g.comment(e.value);
                            },
                            7: function (e) {
                                g.pi(e.name, e.value);
                            },
                            10: function (e) {
                                g.doctype(e.value);
                            },
                            4: function (e) {
                                g.cdata(e.value);
                            },
                            11: function (e) {
                                if ((e = e.firstChild)) for (; m(e), (e = e.next); );
                            },
                        };
                    g.reset();
                    var m = function (e) {
                        var t,
                            n,
                            r,
                            o,
                            i,
                            a,
                            u,
                            s,
                            c,
                            l = d[e.type];
                        if (l) l(e);
                        else {
                            if (((t = e.name), (n = e.shortEnded), (r = e.attributes), f && r && 1 < r.length && (((a = []).map = {}), (c = p.getElementRule(e.name))))) {
                                for (u = 0, s = c.attributesOrder.length; u < s; u++) (o = c.attributesOrder[u]) in r.map && ((i = r.map[o]), (a.map[o] = i), a.push({ name: o, value: i }));
                                for (u = 0, s = r.length; u < s; u++) (o = r[u].name) in a.map || ((i = r.map[o]), (a.map[o] = i), a.push({ name: o, value: i }));
                                r = a;
                            }
                            if ((g.start(e.name, r, n), !n)) {
                                if ((e = e.firstChild)) for (; m(e), (e = e.next); );
                                g.end(t);
                            }
                        }
                    };
                    return 1 !== e.type || t.inner ? d[11](e) : m(e), g.getContent();
                },
            };
        },
        Am = function (e, t) {
            return e.replace(new RegExp(t.prefix + "_[0-9]+", "g"), function (e) {
                return de(t.uris, e).getOr(e);
            });
        },
        Dm = function (e, t, n) {
            var r,
                o,
                i = 1,
                a = e.getShortEndedElements(),
                u = /<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g;
            for (u.lastIndex = r = n; (o = u.exec(t)); ) {
                if (((r = u.lastIndex), "/" === o[1])) i--;
                else if (!o[1]) {
                    if (o[2] in a) continue;
                    i++;
                }
                if (0 === i) break;
            }
            return r;
        };
    function Om(W, K) {
        void 0 === K && (K = pi());
        var e = function () {};
        !1 !== (W = W || {}).fix_self_closing && (W.fix_self_closing = !0);
        var X = W.comment ? W.comment : e,
            Y = W.cdata ? W.cdata : e,
            G = W.text ? W.text : e,
            J = W.start ? W.start : e,
            Q = W.end ? W.end : e,
            Z = W.pi ? W.pi : e,
            ee = W.doctype ? W.doctype : e,
            n = function (m, e) {
                void 0 === e && (e = "html");
                for (
                    var t,
                        n,
                        r,
                        p,
                        o,
                        i,
                        a,
                        g,
                        u,
                        s,
                        c,
                        l,
                        f,
                        h,
                        v,
                        d,
                        y,
                        b,
                        C,
                        w = m.html,
                        x = 0,
                        S = [],
                        N = 0,
                        E = ri.decode,
                        k = xt.makeMap("src,href,data,background,formaction,poster,xlink:href"),
                        _ = /((java|vb)script|mhtml):/i,
                        R = "html" === e ? 0 : 1,
                        T = function (e) {
                            for (var t, n = S.length; n-- && S[n].name !== e; );
                            if (0 <= n) {
                                for (t = S.length - 1; n <= t; t--) (e = S[t]).valid && Q(e.name);
                                S.length = n;
                            }
                        },
                        A = function (e, t) {
                            return G(Am(e, m), t);
                        },
                        D = function (e) {
                            "" !== e && (">" === e.charAt(0) && (e = " " + e), W.allow_conditional_comments || "[if" !== e.substr(0, 3).toLowerCase() || (e = " " + e), X(Am(e, m)));
                        },
                        O = function (e, t) {
                            var n = e || "",
                                r = !Ue(n, "--"),
                                o = (function (e, t, n) {
                                    void 0 === n && (n = 0);
                                    var r = e.toLowerCase();
                                    if (-1 !== r.indexOf("[if ", n) && ((u = n), /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(r.substr(u)))) {
                                        var o = r.indexOf("[endif]", n);
                                        return r.indexOf(">", o);
                                    }
                                    if (t) {
                                        var i = r.indexOf(">", n);
                                        return -1 !== i ? i : r.length;
                                    }
                                    var a = /--!?>/;
                                    a.lastIndex = n;
                                    var u,
                                        s = a.exec(e);
                                    return s ? s.index + s[0].length : r.length;
                                })(w, r, t);
                            return (e = w.substr(t, o - t)), D(r ? n + e : e), o + 1;
                        },
                        B = function (e, t, n, r, o) {
                            var i, a, u, s, c, l;
                            if (((t = t.toLowerCase()), (u = (t in F) ? t : E(n || r || o || "")), (n = de(m.uris, u).getOr(u)), U && !g && !1 == (0 === (s = t).indexOf("data-") || 0 === s.indexOf("aria-")))) {
                                if (!(i = h[t]) && v) {
                                    for (a = v.length; a-- && !(i = v[a]).pattern.test(t); );
                                    -1 === a && (i = null);
                                }
                                if (!i) return;
                                if (i.validValues && !(n in i.validValues)) return;
                            }
                            if (k[t] && !W.allow_script_urls) {
                                var f = n.replace(/[\s\u0000-\u001F]+/g, "");
                                try {
                                    f = decodeURIComponent(f);
                                } catch (d) {
                                    f = unescape(f);
                                }
                                if (_.test(f)) return;
                                if (((l = f), !(c = W).allow_html_data_urls && (/^data:image\//i.test(l) ? !1 === c.allow_svg_data_urls && /^data:image\/svg\+xml/i.test(l) : /^data:/i.test(l)))) return;
                            }
                            (g && ((t in k) || 0 === t.indexOf("on"))) || ((p.map[t] = n), p.push({ name: t, value: n }));
                        },
                        P = new RegExp(
                            "<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))",
                            "g"
                        ),
                        L = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,
                        I = K.getShortEndedElements(),
                        M = W.self_closing_elements || K.getSelfClosingElements(),
                        F = K.getBoolAttrs(),
                        U = W.validate,
                        z = W.remove_internals,
                        j = W.fix_self_closing,
                        H = K.getSpecialElements(),
                        V = w + ">";
                    (t = P.exec(V));

                ) {
                    var q = t[0];
                    if ((x < t.index && A(E(w.substr(x, t.index - x))), (n = t[7]))) ":" === (n = n.toLowerCase()).charAt(0) && (n = n.substr(1)), T(n);
                    else if ((n = t[8])) {
                        if (t.index + q.length > w.length) {
                            A(E(w.substr(t.index))), (x = t.index + q.length);
                            continue;
                        }
                        ":" === (n = n.toLowerCase()).charAt(0) && (n = n.substr(1)), (u = n in I), j && M[n] && 0 < S.length && S[S.length - 1].name === n && T(n);
                        var $ = (function (e, t) {
                            var n = e.exec(t);
                            if (n) {
                                var r = n[1],
                                    o = n[2];
                                return "string" == typeof r && "data-mce-bogus" === r.toLowerCase() ? o : null;
                            }
                            return null;
                        })(L, t[9]);
                        if (null !== $) {
                            if ("all" === $) {
                                (x = Dm(K, w, P.lastIndex)), (P.lastIndex = x);
                                continue;
                            }
                            c = !1;
                        }
                        if (!U || (s = K.getElementRule(n))) {
                            if (
                                ((c = !0), U && ((h = s.attributes), (v = s.attributePatterns)), (f = t[9]) ? ((g = -1 !== f.indexOf("data-mce-type")) && z && (c = !1), ((p = []).map = {}), f.replace(L, B)) : ((p = []).map = {}), U && !g)
                            ) {
                                if (((d = s.attributesRequired), (y = s.attributesDefault), (b = s.attributesForced), s.removeEmptyAttrs && !p.length && (c = !1), b))
                                    for (o = b.length; o--; ) (a = (l = b[o]).name), "{$uid}" === (C = l.value) && (C = "mce_" + N++), (p.map[a] = C), p.push({ name: a, value: C });
                                if (y) for (o = y.length; o--; ) (a = (l = y[o]).name) in p.map || ("{$uid}" === (C = l.value) && (C = "mce_" + N++), (p.map[a] = C), p.push({ name: a, value: C }));
                                if (d) {
                                    for (o = d.length; o-- && !(d[o] in p.map); );
                                    -1 === o && (c = !1);
                                }
                                if ((l = p.map["data-mce-bogus"])) {
                                    if ("all" === l) {
                                        (x = Dm(K, w, P.lastIndex)), (P.lastIndex = x);
                                        continue;
                                    }
                                    c = !1;
                                }
                            }
                            c && J(n, p, u);
                        } else c = !1;
                        if ((r = H[n])) {
                            (r.lastIndex = x = t.index + q.length),
                                (x = (t = r.exec(w)) ? (c && (i = w.substr(x, t.index - x)), t.index + t[0].length) : ((i = w.substr(x)), w.length)),
                                c && (0 < i.length && A(i, !0), Q(n)),
                                (P.lastIndex = x);
                            continue;
                        }
                        u || (f && f.indexOf("/") === f.length - 1 ? c && Q(n) : S.push({ name: n, valid: c }));
                    } else if ((n = t[1])) D(n);
                    else if ((n = t[2])) {
                        if (!(1 == R || W.preserve_cdata || (0 < S.length && K.isValidChild(S[S.length - 1].name, "#cdata")))) {
                            (x = O("", t.index + 2)), (P.lastIndex = x);
                            continue;
                        }
                        Y(n);
                    } else if ((n = t[3])) ee(n);
                    else {
                        if ((n = t[4]) || "<!" === q) {
                            (x = O(n, t.index + q.length)), (P.lastIndex = x);
                            continue;
                        }
                        if ((n = t[5])) {
                            if (1 != R) {
                                (x = O("?", t.index + 2)), (P.lastIndex = x);
                                continue;
                            }
                            Z(n, t[6]);
                        }
                    }
                    x = t.index + q.length;
                }
                for (x < w.length && A(E(w.substr(x))), o = S.length - 1; 0 <= o; o--) (n = S[o]).valid && Q(n.name);
            };
        return {
            parse: function (e, t) {
                void 0 === t && (t = "html"),
                    n(
                        (function (e) {
                            for (var t, n = /data:[^;]+;base64,([a-z0-9\+\/=]+)/gi, r = [], o = {}, i = Zu("img"), a = 0, u = 0; (t = n.exec(e)); ) {
                                var s = t[0],
                                    c = i + "_" + u++;
                                (o[c] = s), a < t.index && r.push(e.substr(a, t.index - a)), r.push(c), (a = t.index + s.length);
                            }
                            return 0 === a ? { prefix: i, uris: o, html: e } : (a < e.length && r.push(e.substr(a)), { prefix: i, uris: o, html: r.join("") });
                        })(e),
                        t
                    );
            },
        };
    }
    (Om = Om || {}).findEndTag = Dm;
    var Bm,
        Pm,
        Lm = Om,
        Im = function (e, t) {
            var n,
                r,
                o,
                i,
                a,
                u,
                s,
                c = t,
                l = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
                f = e.schema;
            (a = e.getTempAttrs()), (u = c), (s = new RegExp(["\\s?(" + a.join("|") + ')="[^"]+"'].join("|"), "gi")), (c = u.replace(s, ""));
            for (var d = f.getShortEndedElements(); (i = l.exec(c)); ) (r = l.lastIndex), (o = i[0].length), (n = d[i[1]] ? r : Lm.findEndTag(f, c, r)), (c = c.substring(0, r - o) + c.substring(n)), (l.lastIndex = r - o);
            return uo(c);
        },
        Mm = Im,
        Fm = function (e, t, n, r) {
            var o, i, a, u, s;
            if (((t.format = n), (t.get = !0), (t.getInner = !0), t.no_events || e.fire("BeforeGetContent", t), "raw" === t.format)) o = xt.trim(Mm(e.serializer, r.innerHTML));
            else if ("text" === t.format) o = uo(r.innerText || r.textContent);
            else {
                if ("tree" === t.format) return e.serializer.serialize(r, t);
                (a = (i = e).serializer.serialize(r, t)), (u = fc(i)), (s = new RegExp("^(<" + u + "[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/" + u + ">[\r\n]*|<br \\/>[\r\n]*)$")), (o = a.replace(s, ""));
            }
            return "text" === t.format || no(Nt.fromDom(r)) ? (t.content = o) : (t.content = xt.trim(o)), t.no_events || e.fire("GetContent", t), t.content;
        },
        Um = xt.each,
        zm = function (o) {
            this.compare = function (e, t) {
                if (e.nodeName !== t.nodeName) return !1;
                var n = function (n) {
                        var r = {};
                        return (
                            Um(o.getAttribs(n), function (e) {
                                var t = e.nodeName.toLowerCase();
                                0 !== t.indexOf("_") && "style" !== t && 0 !== t.indexOf("data-") && (r[t] = o.getAttrib(n, t));
                            }),
                            r
                        );
                    },
                    r = function (e, t) {
                        var n, r;
                        for (r in e)
                            if (e.hasOwnProperty(r)) {
                                if (void 0 === (n = t[r])) return !1;
                                if (e[r] !== n) return !1;
                                delete t[r];
                            }
                        for (r in t) if (t.hasOwnProperty(r)) return !1;
                        return !0;
                    };
                return !!r(n(e), n(t)) && !!r(o.parseStyle(o.getAttrib(e, "style")), o.parseStyle(o.getAttrib(t, "style"))) && !$l(e) && !$l(t);
            };
        },
        jm = function (n, r, o) {
            return U.from(o.container())
                .filter(On)
                .exists(function (e) {
                    var t = n ? 0 : -1;
                    return r(e.data.charAt(o.offset() + t));
                });
        },
        Hm = E(jm, !0, Kl),
        Vm = E(jm, !1, Kl),
        qm = function (e) {
            var t = e.container();
            return On(t) && (0 === t.data.length || (ao(t.data) && Kf.isBookmarkNode(t.parentNode)));
        },
        $m = function (t, n) {
            return function (e) {
                return U.from(Zc(t ? 0 : -1, e))
                    .filter(n)
                    .isSome();
            };
        },
        Wm = function (e) {
            return Mn(e) && "block" === Yn(Nt.fromDom(e), "display");
        },
        Km = function (e) {
            return Un(e) && !(Nn((t = e)) && "all" === t.getAttribute("data-mce-bogus"));
            var t;
        },
        Xm = $m(!0, Wm),
        Ym = $m(!1, Wm),
        Gm = $m(!0, jn),
        Jm = $m(!1, jn),
        Qm = $m(!0, Tn),
        Zm = $m(!1, Tn),
        ep = $m(!0, Km),
        tp = $m(!1, Km),
        np = function (e) {
            var t = qu(e, "br"),
                n = j(
                    (function (e) {
                        for (var t = [], n = e.dom; n; ) t.push(Nt.fromDom(n)), (n = n.lastChild);
                        return t;
                    })(e).slice(-1),
                    Gr
                );
            t.length === n.length && $(n, ln);
        },
        rp = function (e) {
            cn(e), un(e, Nt.fromHtml('<br data-mce-bogus="1">'));
        },
        op = function (n) {
            Yt(n).each(function (t) {
                Ht(t).each(function (e) {
                    Xr(n) && Gr(t) && Xr(e) && ln(t);
                });
            });
        },
        ip = function (e, t, n) {
            return At(t, e)
                ? (function (e, t) {
                      for (var n = A(t) ? t : p, r = e.dom, o = []; null !== r.parentNode && r.parentNode !== undefined; ) {
                          var i = r.parentNode,
                              a = Nt.fromDom(i);
                          if ((o.push(a), !0 === n(a))) break;
                          r = i;
                      }
                      return o;
                  })(e, function (e) {
                      return n(e) || Rt(e, t);
                  }).slice(0, -1)
                : [];
        },
        ap = function (e, t) {
            return ip(e, t, p);
        },
        up = function (e, t) {
            return [e].concat(ap(e, t));
        },
        sp = function (e, t, n) {
            return Rl(e, t, n, qm);
        },
        cp = function (e, t) {
            return K(up(Nt.fromDom(t.container()), e), Xr);
        },
        lp = function (e, n, r) {
            return sp(e, n.dom, r).forall(function (t) {
                return cp(n, r).fold(
                    function () {
                        return !1 === Qc(t, r, n.dom);
                    },
                    function (e) {
                        return !1 === Qc(t, r, n.dom) && At(e, Nt.fromDom(t.container()));
                    }
                );
            });
        },
        fp = function (t, n, r) {
            return cp(n, r).fold(
                function () {
                    return sp(t, n.dom, r).forall(function (e) {
                        return !1 === Qc(e, r, n.dom);
                    });
                },
                function (e) {
                    return sp(t, e.dom, r).isNone();
                }
            );
        },
        dp = E(fp, !1),
        mp = E(fp, !0),
        pp = E(lp, !1),
        gp = E(lp, !0),
        hp = function (e) {
            return ul(e).exists(Gr);
        },
        vp = function (e, t, n) {
            var r = j(up(Nt.fromDom(n.container()), t), Xr),
                o = Z(r).getOr(t);
            return kl(e, o.dom, n).filter(hp);
        },
        yp = function (e, t) {
            return ul(t).exists(Gr) || vp(!0, e, t).isSome();
        },
        bp = function (e, t) {
            return (n = t), U.from(n.getNode(!0)).map(Nt.fromDom).exists(Gr) || vp(!1, e, t).isSome();
            var n;
        },
        Cp = E(vp, !1),
        wp = E(vp, !0),
        xp = function (e) {
            return Is.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd();
        },
        Sp = function (e, t) {
            var n = j(up(Nt.fromDom(t.container()), e), Xr);
            return Z(n).getOr(e);
        },
        Np = function (e, t) {
            return xp(t) ? Vm(t) : Vm(t) || Dl(Sp(e, t).dom, t).exists(Vm);
        },
        Ep = function (e, t) {
            return xp(t) ? Hm(t) : Hm(t) || Al(Sp(e, t).dom, t).exists(Hm);
        },
        kp = function (e) {
            return ul(e)
                .bind(function (e) {
                    return Sr(e, Pt);
                })
                .exists(function (e) {
                    return (t = Yn(e, "white-space")), I(["pre", "pre-wrap"], t);
                    var t;
                });
        },
        _p = function (e, t) {
            return (r = t), Dl(e.dom, r).isNone() || ((n = t), Al(e.dom, n).isNone()) || dp(e, t) || mp(e, t) || bp(e, t) || yp(e, t);
            var n, r;
        },
        Rp = function (e, t) {
            return !kp(t) && (dp(e, t) || pp(e, t) || bp(e, t) || Np(e, t));
        },
        Tp = function (e, t) {
            return !kp(t) && (mp(e, t) || gp(e, t) || yp(e, t) || Ep(e, t));
        },
        Ap = function (e, t) {
            return Rp(e, t) || Tp(e, ((r = (n = t).container()), (o = n.offset()), On(r) && o < r.data.length ? Is(r, o + 1) : n));
            var n, r, o;
        },
        Dp = function (e, t) {
            return Wl(e.charAt(t));
        },
        Op = function (e) {
            var t = e.container();
            return On(t) && Fe(t.data, oo);
        },
        Bp = function (e) {
            var n,
                t = e.data,
                r =
                    ((n = t.split("")),
                    F(n, function (e, t) {
                        return Wl(e) && 0 < t && t < n.length - 1 && Xl(n[t - 1]) && Xl(n[t + 1]) ? " " : e;
                    }).join(""));
            return r !== t && ((e.data = r), !0);
        },
        Pp = function (l, e) {
            return U.some(e)
                .filter(Op)
                .bind(function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i,
                        a,
                        u,
                        s,
                        c = e.container();
                    return ((i = l),
                    (u = (a = c).data),
                    (s = Is(a, 0)),
                    !(!Dp(u, 0) || Ap(i, s) || ((a.data = " " + u.slice(1)), 0)) || Bp(c) || ((t = l), (r = (n = c).data), (o = Is(n, r.length - 1)), !(!Dp(r, r.length - 1) || Ap(t, o) || ((n.data = r.slice(0, -1) + " "), 0))))
                        ? U.some(e)
                        : U.none();
                });
        },
        Lp = function (t) {
            var e = Nt.fromDom(t.getBody());
            t.selection.isCollapsed() &&
                Pp(e, Is.fromRangeStart(t.selection.getRng())).each(function (e) {
                    t.selection.setRng(e.toRange());
                });
        },
        Ip = function (e, t, n) {
            var r, o, i, a, u, s, c, l;
            0 !== n &&
                ((r = Nt.fromDom(e)),
                (o = xr(r, Xr).getOr(r)),
                (i = e.data.slice(t, t + n)),
                (a = t + n >= e.data.length && Tp(o, Us(e, e.data.length))),
                (u = 0 === t && Rp(o, Us(e, 0))),
                e.replaceData(
                    t,
                    n,
                    ((c = u),
                    (l = a),
                    W(
                        (s = i),
                        function (e, t) {
                            return Kl(t) || Wl(t)
                                ? e.previousCharIsSpace || ("" === e.str && c) || (e.str.length === s.length - 1 && l)
                                    ? { previousCharIsSpace: !1, str: e.str + oo }
                                    : { previousCharIsSpace: !0, str: e.str + " " }
                                : { previousCharIsSpace: !1, str: e.str + t };
                        },
                        { previousCharIsSpace: !1, str: "" }
                    ).str)
                ));
        },
        Mp = function (e, t) {
            var n = e.data.slice(t),
                r = n.length - He(n).length;
            return Ip(e, t, r);
        },
        Fp = function (e, t) {
            var n = e.data.slice(0, t),
                r = n.length - Ve(n).length;
            return Ip(e, t - r, r);
        },
        Up = function (e, t, n, r) {
            void 0 === r && (r = !0);
            var o = Ve(e.data).length,
                i = r ? e : t,
                a = r ? t : e;
            return r ? i.appendData(a.data) : i.insertData(0, a.data), ln(Nt.fromDom(a)), n && Mp(i, o), i;
        },
        zp = function (e, t) {
            return (r = e), (o = (n = t).container()), (i = n.offset()), !1 === Us.isTextPosition(n) && o === r.parentNode && i > Us.before(r).offset() ? Us(t.container(), t.offset() - 1) : t;
            var n, r, o, i;
        },
        jp = function (e) {
            return To(e.previousSibling) ? U.some(((t = e.previousSibling), On(t) ? Us(t, t.data.length) : Us.after(t))) : e.previousSibling ? Bl(e.previousSibling) : U.none();
            var t;
        },
        Hp = function (e) {
            return To(e.nextSibling) ? U.some(((t = e.nextSibling), On(t) ? Us(t, 0) : Us.before(t))) : e.nextSibling ? Ol(e.nextSibling) : U.none();
            var t;
        },
        Vp = function (r, o) {
            return jp(o)
                .orThunk(function () {
                    return Hp(o);
                })
                .orThunk(function () {
                    return (
                        (e = r),
                        (t = o),
                        (n = Us.before(t.previousSibling ? t.previousSibling : t.parentNode)),
                        Dl(e, n).fold(function () {
                            return Al(e, Us.after(t));
                        }, U.some)
                    );
                    var e, t, n;
                });
        },
        qp = function (n, r) {
            return Hp(r)
                .orThunk(function () {
                    return jp(r);
                })
                .orThunk(function () {
                    return (
                        (t = r),
                        Al((e = n), Us.after(t)).fold(function () {
                            return Dl(e, Us.before(t));
                        }, U.some)
                    );
                    var e, t;
                });
        },
        $p = function (e, t, n) {
            return (e ? qp : Vp)(t, n).map(E(zp, n));
        },
        Wp = function (t, n, e) {
            e.fold(
                function () {
                    t.focus();
                },
                function (e) {
                    t.selection.setRng(e.toRange(), n);
                }
            );
        },
        Kp = function (e, t) {
            return t && me(e.schema.getBlockElements(), Dt(t));
        },
        Xp = function (e) {
            if (Uo(e)) {
                var t = Nt.fromHtml('<br data-mce-bogus="1">');
                return cn(e), un(e, t), U.some(Us.before(t.dom));
            }
            return U.none();
        },
        Yp = function (e, t, a) {
            var n,
                r,
                o,
                i,
                u = Ht(e).filter(Lt),
                s = Vt(e).filter(Lt);
            return (
                ln(e),
                (r = s),
                (o = t),
                (i = function (e, t, n) {
                    var r = e.dom,
                        o = t.dom,
                        i = r.data.length;
                    return Up(r, o, a), n.container() === o ? Us(r, i) : n;
                }),
                ((n = u).isSome() && r.isSome() && o.isSome() ? U.some(i(n.getOrDie(), r.getOrDie(), o.getOrDie())) : U.none()).orThunk(function () {
                    return (
                        a &&
                            (u.each(function (e) {
                                return Fp(e.dom, e.dom.length);
                            }),
                            s.each(function (e) {
                                return Mp(e.dom, 0);
                            })),
                        t
                    );
                })
            );
        },
        Gp = function (t, n, e, r) {
            void 0 === r && (r = !0);
            var o,
                i,
                a = $p(n, t.getBody(), e.dom),
                u = xr(
                    e,
                    E(Kp, t),
                    ((o = t.getBody()),
                    function (e) {
                        return e.dom === o;
                    })
                ),
                s = Yp(e, a, ((i = e), me(t.schema.getTextInlineElements(), Dt(i))));
            t.dom.isEmpty(t.getBody())
                ? (t.setContent(""), t.selection.setCursorLocation())
                : u.bind(Xp).fold(
                      function () {
                          r && Wp(t, n, s);
                      },
                      function (e) {
                          r && Wp(t, n, U.some(e));
                      }
                  );
        },
        Jp = function (e, t) {
            return { start: e, end: t };
        },
        Qp = gr([{ removeTable: ["element"] }, { emptyCells: ["cells"] }, { deleteCellSelection: ["rng", "cell"] }]),
        Zp = function (e, t) {
            return kr(Nt.fromDom(e), "td,th", t);
        },
        eg = function (e, t) {
            return Nr(e, "table", t);
        },
        tg = function (e) {
            return !Rt(e.start, e.end);
        },
        ng = function (e, t) {
            return eg(e.start, t).bind(function (r) {
                return eg(e.end, t).bind(function (e) {
                    return (t = Rt(r, e)), (n = r), t ? U.some(n) : U.none();
                    var t, n;
                });
            });
        },
        rg = function (e) {
            return qu(e, "td,th");
        },
        og = function (r, e) {
            var t = Zp(e.startContainer, r),
                n = Zp(e.endContainer, r);
            return e.collapsed
                ? U.none()
                : as(t, n, Jp).fold(
                      function () {
                          return t.fold(
                              function () {
                                  return n.bind(function (t) {
                                      return eg(t, r).bind(function (e) {
                                          return Z(rg(e)).map(function (e) {
                                              return Jp(e, t);
                                          });
                                      });
                                  });
                              },
                              function (t) {
                                  return eg(t, r).bind(function (e) {
                                      return ee(rg(e)).map(function (e) {
                                          return Jp(t, e);
                                      });
                                  });
                              }
                          );
                      },
                      function (e) {
                          return ig(r, e)
                              ? U.none()
                              : ((n = r),
                                eg((t = e).start, n).bind(function (e) {
                                    return ee(rg(e)).map(function (e) {
                                        return Jp(t.start, e);
                                    });
                                }));
                          var t, n;
                      }
                  );
        },
        ig = function (e, t) {
            return ng(t, e).isSome();
        },
        ag = function (e, t, n) {
            return e
                .filter(function (e) {
                    return tg(e) && ig(n, e);
                })
                .orThunk(function () {
                    return og(n, t);
                })
                .bind(function (e) {
                    return ng((t = e), n).map(function (e) {
                        return { rng: t, table: e, cells: rg(e) };
                    });
                    var t;
                });
        },
        ug = function (e, t) {
            return X(e, function (e) {
                return Rt(e, t);
            });
        },
        sg = function (e, r, o) {
            return e
                .filter(function (e) {
                    return (
                        (n = o),
                        !tg((t = e)) &&
                            ng(t, n).exists(function (e) {
                                var t = e.dom.rows;
                                return 1 === t.length && 1 === t[0].cells.length;
                            }) &&
                            Af(e.start, r)
                    );
                    var t, n;
                })
                .map(function (e) {
                    return e.start;
                });
        },
        cg = function (n) {
            return as(ug((r = n).cells, r.rng.start), ug(r.cells, r.rng.end), function (e, t) {
                return r.cells.slice(e, t + 1);
            }).map(function (e) {
                var t = n.cells;
                return e.length === t.length ? Qp.removeTable(n.table) : Qp.emptyCells(e);
            });
            var r;
        },
        lg = function (e, t) {
            var n,
                r,
                o,
                i,
                a,
                u =
                    ((n = e),
                    function (e) {
                        return Rt(n, e);
                    }),
                s = ((o = u), (i = Zp((r = t).startContainer, o)), (a = Zp(r.endContainer, o)), as(i, a, Jp));
            return sg(s, t, u)
                .map(function (e) {
                    return Qp.deleteCellSelection(t, e);
                })
                .orThunk(function () {
                    return ag(s, t, u).bind(cg);
                });
        },
        fg = function (e) {
            var t;
            return (8 === Ot((t = e)) || "#comment" === Dt(t) ? Ht : Yt)(e)
                .bind(fg)
                .orThunk(function () {
                    return U.some(e);
                });
        },
        dg = function (e, t) {
            return $(t, rp), e.selection.setCursorLocation(t[0].dom, 0), !0;
        },
        mg = function (e, t, n) {
            t.deleteContents();
            var r,
                o,
                i = fg(n).getOr(n),
                a = Nt.fromDom(e.dom.getParent(i.dom, e.dom.isBlock));
            return (
                Uo(a) && (rp(a), e.selection.setCursorLocation(a.dom, 0)),
                Rt(n, a) ||
                    ((r = jt(a).is(n)
                        ? []
                        : jt((o = a))
                              .map(Wt)
                              .map(function (e) {
                                  return j(e, function (e) {
                                      return !Rt(o, e);
                                  });
                              })
                              .getOr([])),
                    $(r.concat(Wt(n)), function (e) {
                        Rt(e, a) || At(e, a) || ln(e);
                    })),
                !0
            );
        },
        pg = function (e, t) {
            return Gp(e, !1, t), !0;
        },
        gg = function (n, e, r, t) {
            return vg(e, t)
                .fold(
                    function () {
                        return (
                            (t = n),
                            lg(e, r).map(function (e) {
                                return e.fold(E(pg, t), E(dg, t), E(mg, t));
                            })
                        );
                        var t;
                    },
                    function (e) {
                        return yg(n, e);
                    }
                )
                .getOr(!1);
        },
        hg = function (e, t) {
            return K(up(t, e), to);
        },
        vg = function (e, t) {
            return K(up(t, e), function (e) {
                return "caption" === Dt(e);
            });
        },
        yg = function (e, t) {
            return rp(t), e.selection.setCursorLocation(t.dom, 0), U.some(!0);
        },
        bg = function (u, s, c, l, f) {
            return _l(c, u.getBody(), f)
                .bind(function (e) {
                    return (
                        (o = c),
                        (i = f),
                        (a = e),
                        Ol((r = l).dom)
                            .bind(function (t) {
                                return Bl(r.dom).map(function (e) {
                                    return o ? i.isEqual(t) && a.isEqual(e) : i.isEqual(e) && a.isEqual(t);
                                });
                            })
                            .getOr(!0)
                            ? yg(u, l)
                            : ((t = l),
                              (n = e),
                              vg(s, Nt.fromDom(n.getNode())).map(function (e) {
                                  return !1 === Rt(e, t);
                              }))
                    );
                    var t, n, r, o, i, a;
                })
                .or(U.some(!0));
        },
        Cg = function (o, i, a, e) {
            var u = Us.fromRangeStart(o.selection.getRng());
            return hg(a, e)
                .bind(function (e) {
                    return Uo(e)
                        ? yg(o, e)
                        : ((t = a),
                          (n = e),
                          (r = u),
                          _l(i, o.getBody(), r).bind(function (e) {
                              return hg(t, Nt.fromDom(e.getNode())).map(function (e) {
                                  return !1 === Rt(e, n);
                              });
                          }));
                    var t, n, r;
                })
                .getOr(!1);
        },
        wg = function (e, t) {
            return (e ? Qm : Zm)(t);
        },
        xg = function (a, u, r) {
            var s = Nt.fromDom(a.getBody());
            return vg(s, r).fold(
                function () {
                    return (
                        Cg(a, u, s, r) ||
                        ((e = a),
                        (t = u),
                        (n = Us.fromRangeStart(e.selection.getRng())),
                        wg(t, n) ||
                            kl(t, e.getBody(), n).exists(function (e) {
                                return wg(t, e);
                            }))
                    );
                    var e, t, n;
                },
                function (e) {
                    return (t = a), (n = u), (r = s), (o = e), (i = Us.fromRangeStart(t.selection.getRng())), (Uo(o) ? yg(t, o) : bg(t, r, n, o, i)).getOr(!1);
                    var t, n, r, o, i;
                }
            );
        },
        Sg = function (e, t) {
            var n,
                r,
                o,
                i,
                a,
                u = Nt.fromDom(e.selection.getStart(!0)),
                s = _f(e);
            return e.selection.isCollapsed() && 0 === s.length ? xg(e, t, u) : ((n = e), (r = u), (o = Nt.fromDom(n.getBody())), (i = n.selection.getRng()), 0 !== (a = _f(n)).length ? dg(n, a) : gg(n, o, i, r));
        },
        Ng = function (a) {
            var u = Us.fromRangeStart(a),
                s = Us.fromRangeEnd(a),
                c = a.commonAncestorContainer;
            return kl(!1, c, s)
                .map(function (e) {
                    return !Qc(u, s, c) && Qc(u, e, c) ? ((t = u.container()), (n = u.offset()), (r = e.container()), (o = e.offset()), (i = document.createRange()).setStart(t, n), i.setEnd(r, o), i) : a;
                    var t, n, r, o, i;
                })
                .getOr(a);
        },
        Eg = function (e) {
            return e.collapsed ? e : Ng(e);
        },
        kg = function (e, t) {
            var n, r;
            return e.getBlockElements()[t.name] && (r = t).firstChild && r.firstChild === r.lastChild && ("br" === (n = t.firstChild).name || n.value === oo);
        },
        _g = function (e, t) {
            var n,
                r,
                o,
                i = t.firstChild,
                a = t.lastChild;
            return (
                i && "meta" === i.name && (i = i.next),
                a && "mce_marker" === a.attr("id") && (a = a.prev),
                (r = a),
                (o = (n = e).getNonEmptyElements()),
                r && (r.isEmpty(o) || kg(n, r)) && (a = a.prev),
                !(!i || i !== a) && ("ul" === i.name || "ol" === i.name)
            );
        },
        Rg = function (e) {
            return e && e.firstChild && e.firstChild === e.lastChild && ((t = e.firstChild).data === oo || In(t));
            var t;
        },
        Tg = function (e) {
            return 0 < e.length && (!(t = e[e.length - 1]).firstChild || Rg(t)) ? e.slice(0, -1) : e;
            var t;
        },
        Ag = function (e, t) {
            var n = e.getParent(t, e.isBlock);
            return n && "LI" === n.nodeName ? n : null;
        },
        Dg = function (e, t) {
            var n = Us.after(e),
                r = wl(t).prev(n);
            return r ? r.toRange() : null;
        },
        Og = function (t, e, n) {
            var r,
                o,
                i,
                a,
                u = t.parentNode;
            return (
                xt.each(e, function (e) {
                    u.insertBefore(e, t);
                }),
                (r = t),
                (o = n),
                (i = Us.before(r)),
                (a = wl(o).next(i)) ? a.toRange() : null
            );
        },
        Bg = function (e, o, i, t) {
            var n,
                r,
                a,
                u,
                s,
                c,
                l,
                f,
                d,
                m,
                p,
                g,
                h,
                v,
                y,
                b,
                C,
                w,
                x,
                S,
                N =
                    ((n = o),
                    (r = t),
                    (c = e.serialize(r)),
                    (l = n.createFragment(c)),
                    (u = (a = l).firstChild),
                    (s = a.lastChild),
                    u && "META" === u.nodeName && u.parentNode.removeChild(u),
                    s && "mce_marker" === s.id && s.parentNode.removeChild(s),
                    a),
                E = Ag(o, i.startContainer),
                k = Tg(
                    ((f = N.firstChild),
                    xt.grep(f.childNodes, function (e) {
                        return "LI" === e.nodeName;
                    }))
                ),
                _ = o.getRoot(),
                R = function (e) {
                    var t = Us.fromRangeStart(i),
                        n = wl(o.getRoot()),
                        r = 1 === e ? n.prev(t) : n.next(t);
                    return !r || Ag(o, r.getNode()) !== E;
                };
            return R(1)
                ? Og(E, k, _)
                : R(2)
                ? ((d = E), (m = k), (p = _), o.insertAfter(m.reverse(), d), Dg(m[0], p))
                : ((h = k),
                  (v = _),
                  (y = g = E),
                  (C = (b = i).cloneRange()),
                  (w = b.cloneRange()),
                  C.setStartBefore(y),
                  w.setEndAfter(y),
                  (x = [C.cloneContents(), w.cloneContents()]),
                  (S = g.parentNode).insertBefore(x[0], g),
                  xt.each(h, function (e) {
                      S.insertBefore(e, g);
                  }),
                  S.insertBefore(x[1], g),
                  S.removeChild(g),
                  Dg(h[h.length - 1], v));
        },
        Pg = zn,
        Lg = function (e) {
            var t = e.dom,
                n = Eg(e.selection.getRng());
            e.selection.setRng(n);
            var r,
                o,
                i,
                a = t.getParent(n.startContainer, Pg);
            (r = t), (o = n), null !== (i = a) && i === r.getParent(o.endContainer, Pg) && Af(Nt.fromDom(i), o) ? mg(e, n, Nt.fromDom(a)) : e.getDoc().execCommand("Delete", !1, null);
        },
        Ig = function (e, t, n) {
            var r,
                o,
                i,
                a,
                u,
                s,
                c,
                l,
                f,
                d = e.selection,
                m = e.dom;
            /^ | $/.test(t) &&
                ((s = m),
                (c = d.getRng()),
                (l = t),
                (f = Nt.fromDom(s.getRoot())),
                (l = Rp(f, Us.fromRangeStart(c)) ? l.replace(/^ /, "&nbsp;") : l.replace(/^&nbsp;/, " ")),
                (t = l = Tp(f, Us.fromRangeEnd(c)) ? l.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;") : l.replace(/&nbsp;(<br( \/)?>)?$/, " ")));
            var p = e.parser,
                g = n.merge,
                h = Tm({ validate: e.getParam("validate") }, e.schema),
                v = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>',
                y = { content: t, format: "html", selection: !0, paste: n.paste };
            if ((y = e.fire("BeforeSetContent", y)).isDefaultPrevented()) e.fire("SetContent", { content: y.content, format: "html", selection: !0, paste: n.paste });
            else {
                -1 === (t = y.content).indexOf("{$caret}") && (t += "{$caret}"), (t = t.replace(/\{\$caret\}/, v));
                var b,
                    C,
                    w = (a = d.getRng()).startContainer || (a.parentElement ? a.parentElement() : null),
                    x = e.getBody();
                w === x &&
                    d.isCollapsed() &&
                    m.isBlock(x.firstChild) &&
                    ((b = e), (C = x.firstChild) && !b.schema.getShortEndedElements()[C.nodeName]) &&
                    m.isEmpty(x.firstChild) &&
                    ((a = m.createRng()).setStart(x.firstChild, 0), a.setEnd(x.firstChild, 0), d.setRng(a)),
                    d.isCollapsed() || Lg(e);
                var S,
                    N,
                    E,
                    k,
                    _,
                    R,
                    T,
                    A,
                    D,
                    O,
                    B,
                    P,
                    L,
                    I,
                    M = { context: (r = d.getNode()).nodeName.toLowerCase(), data: n.data, insert: !0 },
                    F = p.parse(t, M);
                if (!0 === n.paste && _g(e.schema, F) && Ag(m, r)) return (a = Bg(h, m, d.getRng(), F)), d.setRng(a), void e.fire("SetContent", y);
                if (
                    (!(function (e) {
                        for (var t = e; (t = t.walk()); ) 1 === t.type && t.attr("data-mce-fragment", "1");
                    })(F),
                    "mce_marker" === (u = F.lastChild).attr("id"))
                )
                    for (u = (i = u).prev; u; u = u.walk(!0))
                        if (3 === u.type || !m.isBlock(u.name)) {
                            e.schema.isValidChild(u.parent.name, "span") && u.parent.insert(i, u, "br" === u.name);
                            break;
                        }
                if ((e._selectionOverrides.showBlockCaretContainer(r), M.invalid)) {
                    for (e.selection.setContent(v), r = d.getNode(), o = e.getBody(), 9 === r.nodeType ? (r = u = o) : (u = r); u !== o; ) u = (r = u).parentNode;
                    (t = r === o ? o.innerHTML : m.getOuterHTML(r)),
                        (t = h.serialize(
                            p.parse(
                                t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function () {
                                    return h.serialize(F);
                                })
                            )
                        )),
                        r === o ? m.setHTML(o, t) : m.setOuterHTML(r, t);
                } else
                    (t = h.serialize(F)),
                        (S = e),
                        (N = t),
                        "all" === (E = r).getAttribute("data-mce-bogus")
                            ? E.parentNode.insertBefore(S.dom.createFragment(N), E)
                            : ((k = E.firstChild), (_ = E.lastChild), !k || (k === _ && "BR" === k.nodeName) ? S.dom.setHTML(E, N) : S.selection.setContent(N));
                (T = g),
                    (O = (R = e).schema.getTextInlineElements()),
                    (B = R.dom),
                    T &&
                        ((A = R.getBody()),
                        (D = new zm(B)),
                        xt.each(B.select("*[data-mce-fragment]"), function (e) {
                            for (var t = e.parentNode; t && t !== A; t = t.parentNode) O[e.nodeName.toLowerCase()] && D.compare(t, e) && B.remove(e, !0);
                        })),
                    (function (n, e) {
                        var t,
                            r,
                            o = n.dom,
                            i = n.selection;
                        if (e) {
                            i.scrollIntoView(e);
                            var a = (function (e) {
                                for (var t = n.getBody(); e && e !== t; e = e.parentNode) if ("false" === o.getContentEditable(e)) return e;
                                return null;
                            })(e);
                            if (a) return o.remove(e), i.select(a);
                            var u = o.createRng(),
                                s = e.previousSibling;
                            s && 3 === s.nodeType ? (u.setStart(s, s.nodeValue.length), vt.ie || ((r = e.nextSibling) && 3 === r.nodeType && (s.appendData(r.data), r.parentNode.removeChild(r)))) : (u.setStartBefore(e), u.setEndBefore(e));
                            var c = o.getParent(e, o.isBlock);
                            o.remove(e),
                                c &&
                                    o.isEmpty(c) &&
                                    (n.$(c).empty(),
                                    u.setStart(c, 0),
                                    u.setEnd(c, 0),
                                    Pg(c) ||
                                    c.getAttribute("data-mce-fragment") ||
                                    !(t = (function (e) {
                                        var t = Us.fromRangeStart(e);
                                        if ((t = wl(n.getBody()).next(t))) return t.toRange();
                                    })(u))
                                        ? o.add(c, o.create("br", { "data-mce-bogus": "1" }))
                                        : ((u = t), o.remove(c))),
                                i.setRng(u);
                        }
                    })(e, m.get("mce_marker")),
                    (P = e.getBody()),
                    xt.each(P.getElementsByTagName("*"), function (e) {
                        e.removeAttribute("data-mce-fragment");
                    }),
                    (L = m),
                    (I = d.getStart()),
                    U.from(L.getParent(I, "td,th")).map(Nt.fromDom).each(op),
                    e.fire("SetContent", y),
                    e.addVisual();
            }
        },
        Mg = function (e, t) {
            t(e), e.firstChild && Mg(e.firstChild, t), e.next && Mg(e.next, t);
        },
        Fg = function (e, t, n) {
            var r = (function (e, n, t) {
                var r = {},
                    o = {},
                    i = [];
                for (var a in (t.firstChild &&
                    Mg(t.firstChild, function (t) {
                        $(e, function (e) {
                            e.name === t.name && (r[e.name] ? r[e.name].nodes.push(t) : (r[e.name] = { filter: e, nodes: [t] }));
                        }),
                            $(n, function (e) {
                                "string" == typeof t.attr(e.name) && (o[e.name] ? o[e.name].nodes.push(t) : (o[e.name] = { filter: e, nodes: [t] }));
                            });
                    }),
                r))
                    r.hasOwnProperty(a) && i.push(r[a]);
                for (var u in o) o.hasOwnProperty(u) && i.push(o[u]);
                return i;
            })(e, t, n);
            $(r, function (t) {
                $(t.filter.callbacks, function (e) {
                    e(t.nodes, t.filter.name, {});
                });
            });
        },
        Ug = function (e) {
            return e instanceof Em;
        },
        zg = function (e, t) {
            var r;
            e.dom.setHTML(e.getBody(), t),
                pm((r = e)) &&
                    Ol(r.getBody()).each(function (e) {
                        var t = e.getNode(),
                            n = Tn(t) ? Ol(t).getOr(e) : e;
                        r.selection.setRng(n.toRange());
                    });
        },
        jg = function (u, s, c) {
            return (
                (c.format = c.format ? c.format : "html"),
                (c.set = !0),
                (c.content = Ug(s) ? "" : s),
                Ug(s) || c.no_events || (u.fire("BeforeSetContent", c), (s = c.content)),
                U.from(u.getBody()).fold(N(s), function (e) {
                    return Ug(s)
                        ? (function (e, t, n, r) {
                              Fg(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
                              var o = Tm({ validate: e.validate }, e.schema).serialize(n);
                              return (r.content = no(Nt.fromDom(t)) ? o : xt.trim(o)), zg(e, r.content), r.no_events || e.fire("SetContent", r), n;
                          })(u, e, s, c)
                        : ((t = u),
                          (n = e),
                          (o = c),
                          0 === (r = s).length || /^\s+$/.test(r)
                              ? ((a = '<br data-mce-bogus="1">'),
                                "TABLE" === n.nodeName ? (r = "<tr><td>" + a + "</td></tr>") : /^(UL|OL)$/.test(n.nodeName) && (r = "<li>" + a + "</li>"),
                                (r = (i = fc(t)) && t.schema.isValidChild(n.nodeName.toLowerCase(), i.toLowerCase()) ? ((r = a), t.dom.createHTML(i, dc(t), r)) : r || '<br data-mce-bogus="1">'),
                                zg(t, r),
                                t.fire("SetContent", o))
                              : ("raw" !== o.format && (r = Tm({ validate: t.validate }, t.schema).serialize(t.parser.parse(r, { isRootContent: !0, insert: !0 }))),
                                (o.content = no(Nt.fromDom(n)) ? r : xt.trim(r)),
                                zg(t, o.content),
                                o.no_events || t.fire("SetContent", o)),
                          o.content);
                    var t, n, r, o, i, a;
                })
            );
        },
        Hg = nf,
        Vg = function (e, t, n) {
            var r = e.formatter.get(n);
            if (r) for (var o = 0; o < r.length; o++) if (!1 === r[o].inherit && e.dom.is(t, r[o].selector)) return !0;
            return !1;
        },
        qg = function (t, e, n, r) {
            var o = t.dom.getRoot();
            return (
                e !== o &&
                ((e = t.dom.getParent(e, function (e) {
                    return !!Vg(t, e, n) || e.parentNode === o || !!Kg(t, e, n, r, !0);
                })),
                Kg(t, e, n, r))
            );
        },
        $g = function (e, t, n) {
            return !!Hg(t, n.inline) || !!Hg(t, n.block) || (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0);
        },
        Wg = function (e, t, n, r, o, i) {
            var a,
                u,
                s,
                c = n[r];
            if (n.onmatch) return n.onmatch(t, n, r);
            if (c)
                if ("undefined" == typeof c.length) {
                    for (a in c)
                        if (c.hasOwnProperty(a)) {
                            if (((u = "attributes" === r ? e.getAttrib(t, a) : of(e, t, a)), o && !u && !n.exact)) return;
                            if ((!o || n.exact) && !Hg(u, rf(e, tf(c[a], i), a))) return;
                        }
                } else for (s = 0; s < c.length; s++) if ("attributes" === r ? e.getAttrib(t, c[s]) : of(e, t, c[s])) return n;
            return n;
        },
        Kg = function (e, t, n, r, o) {
            var i,
                a,
                u,
                s,
                c = e.formatter.get(n),
                l = e.dom;
            if (c && t)
                for (a = 0; a < c.length; a++)
                    if (((i = c[a]), $g(e.dom, t, i) && Wg(l, t, i, "attributes", o, r) && Wg(l, t, i, "styles", o, r))) {
                        if ((s = i.classes)) for (u = 0; u < s.length; u++) if (!e.dom.hasClass(t, s[u])) return;
                        return i;
                    }
        },
        Xg = function (e, t, n, r) {
            if (r) return qg(e, r, t, n);
            if (((r = e.selection.getNode()), qg(e, r, t, n))) return !0;
            var o = e.selection.getStart();
            return !(o === r || !qg(e, o, t, n));
        },
        Yg = function (r, o, i) {
            var a = [],
                u = {},
                e = r.selection.getStart();
            return (
                r.dom.getParent(
                    e,
                    function (e) {
                        for (var t = 0; t < o.length; t++) {
                            var n = o[t];
                            !u[n] && Kg(r, e, n, i) && ((u[n] = !0), a.push(n));
                        }
                    },
                    r.dom.getRoot()
                ),
                a
            );
        },
        Gg = function (e, t) {
            var n,
                r,
                o,
                i,
                a,
                u = e.formatter.get(t),
                s = e.dom;
            if (u)
                for (n = e.selection.getStart(), r = uf(s, n), i = u.length - 1; 0 <= i; i--) {
                    if (!(a = u[i].selector) || u[i].defaultBlock) return !0;
                    for (o = r.length - 1; 0 <= o; o--) if (s.is(r[o], a)) return !0;
                }
            return !1;
        },
        Jg = function (o, i, e) {
            return W(
                e,
                function (e, t) {
                    var n,
                        r =
                            ((n = t),
                            M(o.formatter.get(n), function (t) {
                                var n = function (e) {
                                    return 1 < e.length && "%" === e.charAt(0);
                                };
                                return M(["styles", "attributes"], function (e) {
                                    return de(t, e).exists(function (e) {
                                        var t = S(e) ? e : fe(e);
                                        return M(t, n);
                                    });
                                });
                            }));
                    return o.formatter.matchNode(i, t, {}, r) ? e.concat([t]) : e;
                },
                []
            );
        },
        Qg = io,
        Zg = "_mce_caret",
        eh = function (e) {
            return (
                0 <
                (function (e) {
                    for (var t = []; e; ) {
                        if ((3 === e.nodeType && e.nodeValue !== Qg) || 1 < e.childNodes.length) return [];
                        1 === e.nodeType && t.push(e), (e = e.firstChild);
                    }
                    return t;
                })(e).length
            );
        },
        th = function (e) {
            if (e) {
                var t = new Hr(e, e);
                for (e = t.current(); e; e = t.next()) if (On(e)) return e;
            }
            return null;
        },
        nh = function (e) {
            var t = Nt.fromTag("span");
            return $n(t, { id: Zg, "data-mce-bogus": "1", "data-mce-type": "format-caret" }), e && un(t, Nt.fromText(Qg)), t;
        },
        rh = function (e, t, n) {
            void 0 === n && (n = !0);
            var r,
                o,
                i,
                a,
                u,
                s,
                c,
                l,
                f = e.dom,
                d = e.selection;
            eh(t)
                ? Gp(e, !1, Nt.fromDom(t), n)
                : ((r = d.getRng()),
                  (o = f.getParent(t, f.isBlock)),
                  (i = r.startContainer),
                  (a = r.startOffset),
                  (u = r.endContainer),
                  (s = r.endOffset),
                  (l = th(t)) && l.nodeValue.charAt(0) === Qg && l.deleteData(0, 1),
                  (c = l),
                  f.remove(t, !0),
                  i === c && 0 < a && r.setStart(c, a - 1),
                  u === c && 0 < s && r.setEnd(c, s - 1),
                  o && f.isEmpty(o) && rp(Nt.fromDom(o)),
                  d.setRng(r));
        },
        oh = function (e, t, n) {
            void 0 === n && (n = !0);
            var r = e.dom,
                o = e.selection;
            if (t) rh(e, t, n);
            else if (!(t = Il(e.getBody(), o.getStart()))) for (; (t = r.get(Zg)); ) rh(e, t, !1);
        },
        ih = function (e, t) {
            return e.appendChild(t), t;
        },
        ah = function (e, t) {
            var n = H(
                e,
                function (e, t) {
                    return ih(e, t.cloneNode(!1));
                },
                t
            );
            return ih(n, n.ownerDocument.createTextNode(Qg));
        },
        uh = function (e, t, n, r) {
            var o,
                i,
                a,
                u,
                s,
                c,
                l,
                f,
                d,
                m,
                p,
                g,
                h,
                v = e.dom,
                y = e.selection,
                b = [],
                C = y.getRng(),
                w = C.startContainer,
                x = C.startOffset,
                S = w;
            for (3 === w.nodeType && (x !== w.nodeValue.length && (o = !0), (S = S.parentNode)); S; ) {
                if (Kg(e, S, t, n, r)) {
                    i = S;
                    break;
                }
                S.nextSibling && (o = !0), b.push(S), (S = S.parentNode);
            }
            i &&
                (o
                    ? ((a = y.getBookmark()), C.collapse(!0), (u = wf(e, C, e.formatter.get(t), !0)), (u = cd(u)), e.formatter.remove(t, n, u, r), y.moveToBookmark(a))
                    : ((s = Il(e.getBody(), i)),
                      (c = nh(!1).dom),
                      (m = c),
                      (p = null !== s ? s : i),
                      (g = (d = e).dom),
                      (h = g.getParent(p, E(Ql, d))) && g.isEmpty(h) ? p.parentNode.replaceChild(m, p) : (np(Nt.fromDom(p)), g.isEmpty(p) ? p.parentNode.replaceChild(m, p) : g.insertAfter(m, p)),
                      (l = (function (t, e, n, r, o, i) {
                          var a = t.formatter,
                              u = t.dom,
                              s = j(ne(a.get()), function (e) {
                                  return e !== r && !Fe(e, "removeformat");
                              }),
                              c = Jg(t, n, s);
                          if (
                              0 <
                              j(c, function (e) {
                                  return !sf(t, e, r);
                              }).length
                          ) {
                              var l = n.cloneNode(!1);
                              return u.add(e, l), a.remove(r, o, l, i), u.remove(l), U.some(l);
                          }
                          return U.none();
                      })(e, c, i, t, n, r)),
                      (f = ah(b.concat(l.toArray()), c)),
                      rh(e, s, !1),
                      y.setCursorLocation(f, 1),
                      v.isEmpty(i) && v.remove(i)));
        },
        sh = function (i) {
            i.on("mouseup keydown", function (e) {
                var t, n, r, o;
                (t = i),
                    (n = e.keyCode),
                    (r = t.selection),
                    (o = t.getBody()),
                    oh(t, null, !1),
                    (8 !== n && 46 !== n) || !r.isCollapsed() || r.getStart().innerHTML !== Qg || oh(t, Il(o, r.getStart())),
                    (37 !== n && 39 !== n) || oh(t, Il(o, r.getStart()));
            });
        },
        ch = function (e, t) {
            return e.schema.getTextInlineElements().hasOwnProperty(Dt(t)) && !Ll(t.dom) && !Rn(t.dom);
        },
        lh = {},
        fh = ve,
        dh = ge;
    (Pm = function (e) {
        var t,
            n = e.selection.getRng(),
            r = En(["pre"]);
        n.collapsed ||
            ((t = e.selection.getSelectedBlocks()),
            dh(
                fh(fh(t, r), function (e) {
                    return r(e.previousSibling) && -1 !== ye(t, e.previousSibling);
                }),
                function (e) {
                    var t, n;
                    (t = e.previousSibling), lu((n = e)).remove(), lu(t).append("<br><br>").append(n.childNodes);
                }
            ));
    }),
        lh[(Bm = "pre")] || (lh[Bm] = []),
        lh[Bm].push(Pm);
    var mh = xt.each,
        ph = function (e) {
            return Nn(e) && !$l(e) && !Ll(e) && !Rn(e);
        },
        gh = function (e, t) {
            for (var n = e; n; n = n[t]) {
                if (On(n) && 0 !== n.nodeValue.length) return e;
                if (Nn(n) && !$l(n)) return n;
            }
            return e;
        },
        hh = function (e, t, n) {
            var r,
                o,
                i = new zm(e);
            if (t && n && ((t = gh(t, "previousSibling")), (n = gh(n, "nextSibling")), i.compare(t, n))) {
                for (r = t.nextSibling; r && r !== n; ) (r = (o = r).nextSibling), t.appendChild(o);
                return (
                    e.remove(n),
                    xt.each(xt.grep(n.childNodes), function (e) {
                        t.appendChild(e);
                    }),
                    t
                );
            }
            return n;
        },
        vh = function (e, t, n, r) {
            var o;
            r && !1 !== t.merge_siblings && ((o = hh(e, Jl(r), r)), hh(e, o, Jl(o, !0)));
        },
        yh = function (e, t, n) {
            mh(e.childNodes, function (e) {
                ph(e) && (t(e) && n(e), e.hasChildNodes() && yh(e, t, n));
            });
        },
        bh = function (t, n) {
            return function (e) {
                return !(!e || !of(t, e, n));
            };
        },
        Ch = function (r, o, i) {
            return function (e) {
                var t, n;
                r.setStyle(e, o, i), "" === e.getAttribute("style") && e.removeAttribute("style"), (t = r), "SPAN" === (n = e).nodeName && 0 === t.getAttribs(n).length && t.remove(n, !0);
            };
        },
        wh = gr([{ keep: [] }, { rename: ["name"] }, { removed: [] }]),
        xh = /^(src|href|style)$/,
        Sh = xt.each,
        Nh = nf,
        Eh = function (e, t, n) {
            return e.isChildOf(t, n) && t !== n && !e.isBlock(n);
        },
        kh = function (e, t, n) {
            var r,
                o = t[n ? "startContainer" : "endContainer"],
                i = t[n ? "startOffset" : "endOffset"];
            return (
                Nn(o) && ((r = o.childNodes.length - 1), !n && i && i--, (o = o.childNodes[r < i ? r : i])),
                On(o) && n && i >= o.nodeValue.length && (o = new Hr(o, e.getBody()).next() || o),
                On(o) && !n && 0 === i && (o = new Hr(o, e.getBody()).prev() || o),
                o
            );
        },
        _h = function (e, t) {
            var n = t ? "firstChild" : "lastChild";
            if (/^(TR|TH|TD)$/.test(e.nodeName) && e[n]) {
                var r = e[n];
                return ("TR" === e.nodeName && r[n]) || r;
            }
            return e;
        },
        Rh = function (e, t, n, r) {
            var o = e.create(n, r);
            return t.parentNode.insertBefore(o, t), o.appendChild(t), o;
        },
        Th = function (e, t, n, r, o) {
            var i = Nt.fromDom(t),
                a = Nt.fromDom(e.create(r, o)),
                u = (n ? $t : qt)(i);
            return sn(a, u), n ? (rn(i, a), an(a, i)) : (on(i, a), un(a, i)), a.dom;
        },
        Ah = function (e, t, n, r) {
            return !(t = Jl(t, n, r)) || "BR" === t.nodeName || e.isBlock(t);
        },
        Dh = function (e, r, o, t, i) {
            var n,
                a,
                u,
                s,
                c,
                l = e.dom;
            if (((u = l), !(Nh((s = t), (c = r).inline) || Nh(s, c.block) || (c.selector && Nn(s) && u.is(s, c.selector)) || ((a = t), r.links && "A" === a.nodeName)))) return wh.keep();
            var f,
                d,
                m,
                p,
                g,
                h,
                v,
                y = t;
            if (r.inline && "all" === r.remove && S(r.preserve_attributes)) {
                var b = j(l.getAttribs(y), function (e) {
                    return I(r.preserve_attributes, e.name.toLowerCase());
                });
                if (
                    (l.removeAllAttribs(y),
                    $(b, function (e) {
                        return l.setAttrib(y, e.name, e.value);
                    }),
                    0 < b.length)
                )
                    return wh.rename("span");
            }
            if ("all" !== r.remove) {
                Sh(r.styles, function (e, t) {
                    (e = rf(l, tf(e, o), t + "")), D(t) && ((t = e), (i = null)), (!r.remove_similar && i && !Nh(of(l, i, t), e)) || l.setStyle(y, t, ""), (n = !0);
                }),
                    n && "" === l.getAttrib(y, "style") && (y.removeAttribute("style"), y.removeAttribute("data-mce-style")),
                    Sh(r.attributes, function (e, t) {
                        var n;
                        if (((e = tf(e, o)), D(t) && ((t = e), (i = null)), r.remove_similar || !i || Nh(l.getAttrib(i, t), e))) {
                            if (
                                "class" === t &&
                                (e = l.getAttrib(y, t)) &&
                                ((n = ""),
                                $(e.split(/\s+/), function (e) {
                                    /mce\-\w+/.test(e) && (n += (n ? " " : "") + e);
                                }),
                                n)
                            )
                                return void l.setAttrib(y, t, n);
                            "class" === t && y.removeAttribute("className"), xh.test(t) && y.removeAttribute("data-mce-" + t), y.removeAttribute(t);
                        }
                    }),
                    Sh(r.classes, function (e) {
                        (e = tf(e, o)), (i && !l.hasClass(i, e)) || l.removeClass(y, e);
                    });
                for (var C = l.getAttribs(y), w = 0; w < C.length; w++) {
                    var x = C[w].nodeName;
                    if (0 !== x.indexOf("_") && 0 !== x.indexOf("data-")) return wh.keep();
                }
            }
            return "none" !== r.remove
                ? ((f = e),
                  (m = r),
                  (g = (d = y).parentNode),
                  (h = f.dom),
                  (v = fc(f)),
                  m.block &&
                      (v
                          ? g === h.getRoot() &&
                            ((m.list_block && Nh(d, m.list_block)) ||
                                $(te(d.childNodes), function (e) {
                                    Zl(f, v, e.nodeName.toLowerCase()) ? (p ? p.appendChild(e) : ((p = Rh(h, e, v)), h.setAttribs(p, f.settings.forced_root_block_attrs))) : (p = 0);
                                }))
                          : h.isBlock(d) && !h.isBlock(g) && (Ah(h, d, !1) || Ah(h, d.firstChild, !0, !0) || d.insertBefore(h.create("br"), d.firstChild), Ah(h, d, !0) || Ah(h, d.lastChild, !1, !0) || d.appendChild(h.create("br")))),
                  (m.selector && m.inline && !Nh(m.inline, d)) || h.remove(d, !0),
                  wh.removed())
                : wh.keep();
        },
        Oh = function (t, e, n, r, o) {
            return Dh(t, e, n, r, o).fold(
                p,
                function (e) {
                    return t.dom.rename(r, e), !0;
                },
                k
            );
        },
        Bh = function (e, t, n, r, o, i, a, u) {
            var s,
                c,
                l,
                f = e.dom;
            if (n) {
                for (var d = n.parentNode, m = r.parentNode; m && m !== d; m = m.parentNode) {
                    s = f.clone(m, !1);
                    for (
                        var p = 0;
                        p < t.length &&
                        null !==
                            (s = (function (t, e, n, r) {
                                return Dh(t, e, n, r, r).fold(
                                    N(r),
                                    function (e) {
                                        return t.dom.createFragment().appendChild(r), t.dom.rename(r, e);
                                    },
                                    N(null)
                                );
                            })(e, t[p], u, s));
                        p++
                    );
                    s && (c && s.appendChild(c), (l = l || s), (c = s));
                }
                !i || (a.mixed && f.isBlock(n)) || (r = f.split(n, r)), c && (o.parentNode.insertBefore(c, o), l.appendChild(o), a.inline && vh(f, a, 0, c));
            }
            return r;
        },
        Ph = function (s, c, l, e, f) {
            var t,
                d = s.formatter.get(c),
                m = d[0],
                i = !0,
                a = s.dom,
                n = s.selection,
                u = function (e) {
                    var n,
                        t,
                        r,
                        o,
                        i,
                        a,
                        u =
                            ((t = e),
                            (r = c),
                            (o = l),
                            (i = f),
                            $(uf((n = s).dom, t.parentNode).reverse(), function (e) {
                                var t;
                                a || "_start" === e.id || "_end" === e.id || ((t = Kg(n, e, r, o, i)) && !1 !== t.split && (a = e));
                            }),
                            a);
                    return Bh(s, d, u, e, e, !0, m, l);
                },
                p = function (e) {
                    var t, n;
                    Nn(e) && a.getContentEditable(e) && ((t = i), (i = "true" === a.getContentEditable(e)), (n = !0));
                    var r = te(e.childNodes);
                    if (i && !n) for (var o = 0; o < d.length && !Oh(s, d[o], l, e, e); o++);
                    if (m.deep && r.length) {
                        for (o = 0; o < r.length; o++) p(r[o]);
                        n && (i = t);
                    }
                },
                g = function (e) {
                    var t,
                        n = a.get(e ? "_start" : "_end"),
                        r = n[e ? "firstChild" : "lastChild"];
                    return (
                        $l((t = r)) && Nn(t) && ("_start" === t.id || "_end" === t.id) && (r = r[e ? "firstChild" : "lastChild"]),
                        On(r) && 0 === r.data.length && (r = e ? n.previousSibling || n.nextSibling : n.nextSibling || n.previousSibling),
                        a.remove(n, !0),
                        r
                    );
                },
                r = function (e) {
                    var t,
                        n,
                        r = wf(s, e, d, !0);
                    if (m.split) {
                        if (((r = cd(r)), (t = kh(s, r, !0)) !== (n = kh(s, r)))) {
                            if (((t = _h(t, !0)), (n = _h(n, !1)), Eh(a, t, n))) {
                                var o = U.from(t.firstChild).getOr(t);
                                return u(Th(a, o, !0, "span", { id: "_start", "data-mce-type": "bookmark" })), void g(!0);
                            }
                            if (Eh(a, n, t)) {
                                o = U.from(n.lastChild).getOr(n);
                                return u(Th(a, o, !1, "span", { id: "_end", "data-mce-type": "bookmark" })), void g(!1);
                            }
                            (t = Rh(a, t, "span", { id: "_start", "data-mce-type": "bookmark" })), (n = Rh(a, n, "span", { id: "_end", "data-mce-type": "bookmark" }));
                            var i = a.createRng();
                            i.setStartAfter(t),
                                i.setEndBefore(n),
                                Sf(a, i, function (e) {
                                    $(e, function (e) {
                                        $l(e) || $l(e.parentNode) || u(e);
                                    });
                                }),
                                u(t),
                                u(n),
                                (t = g(!0)),
                                (n = g());
                        } else t = n = u(t);
                        (r.startContainer = t.parentNode ? t.parentNode : t), (r.startOffset = a.nodeIndex(t)), (r.endContainer = n.parentNode ? n.parentNode : n), (r.endOffset = a.nodeIndex(n) + 1);
                    }
                    Sf(a, r, function (e) {
                        $(e, function (t) {
                            p(t);
                            $(["underline", "line-through", "overline"], function (e) {
                                Nn(t) && s.dom.getStyle(t, "text-decoration") === e && t.parentNode && af(a, t.parentNode) === e && Oh(s, { deep: !1, exact: !0, inline: "span", styles: { textDecoration: e } }, null, t);
                            });
                        });
                    });
                };
            if (e) Yl(e) ? ((t = a.createRng()).setStartBefore(e), t.setEndAfter(e), r(t)) : r(e);
            else if ("false" !== a.getContentEditable(n.getNode()))
                n.isCollapsed() && m.inline && !_f(s).length
                    ? uh(s, c, l, f)
                    : (Pf(n, !0, function () {
                          Bf(s, r);
                      }),
                      m.inline && Xg(s, c, l, n.getStart()) && Gl(a, n, n.getRng()),
                      s.nodeChanged());
            else {
                e = n.getNode();
                for (var o = 0; o < d.length && (!d[o].ceFalseOverride || !Oh(s, d[o], l, e, e)); o++);
            }
        },
        Lh = xt.each,
        Ih = function (i, e, a, u) {
            Lh(e, function (t) {
                var r, e, n, o;
                Lh(i.dom.select(t.inline, u), function (e) {
                    ph(e) && Oh(i, t, a, e, t.exact ? e : null);
                }),
                    (r = i.dom),
                    (n = u),
                    (e = t).clear_child_styles &&
                        ((o = e.links ? "*:not(a)" : "*"),
                        mh(r.select(o, n), function (n) {
                            ph(n) &&
                                mh(e.styles, function (e, t) {
                                    r.setStyle(n, t, "");
                                });
                        }));
            });
        },
        Mh = xt.each,
        Fh = function (E, k, _, r) {
            var e,
                t,
                n,
                R = E.formatter.get(k),
                T = R[0],
                o = !r && E.selection.isCollapsed(),
                i = E.dom,
                a = E.selection,
                A = function (n, e) {
                    var t;
                    (e = e || T),
                        n &&
                            (e.onformat && e.onformat(n, e, _, r),
                            Mh(e.styles, function (e, t) {
                                i.setStyle(n, t, tf(e, _));
                            }),
                            !e.styles || ((t = i.getAttrib(n, "style")) && i.setAttrib(n, "data-mce-style", t)),
                            Mh(e.attributes, function (e, t) {
                                i.setAttrib(n, t, tf(e, _));
                            }),
                            Mh(e.classes, function (e) {
                                (e = tf(e, _)), i.hasClass(n, e) || i.addClass(n, e);
                            }));
                },
                m = function (e, t) {
                    var n = !1;
                    return (
                        !!T.selector &&
                        (Mh(e, function (e) {
                            if (!("collapsed" in e && e.collapsed !== o)) return i.is(t, e.selector) && !Ll(t) ? (A(t, e), !(n = !0)) : void 0;
                        }),
                        n)
                    );
                },
                u = function (S, e, t, c) {
                    var N = [],
                        l = !0,
                        f = T.inline || T.block,
                        d = S.create(f);
                    A(d),
                        Sf(S, e, function (e) {
                            var u,
                                s = function (e) {
                                    var t = !1,
                                        n = l,
                                        r = e.nodeName.toLowerCase(),
                                        o = e.parentNode.nodeName.toLowerCase();
                                    if ((Nn(e) && S.getContentEditable(e) && ((n = l), (l = "true" === S.getContentEditable(e)), (t = !0)), nf(r, "br"))) return (u = 0), void (T.block && S.remove(e));
                                    if (T.wrapper && Kg(E, e, k, _)) u = 0;
                                    else {
                                        if (l && !t && T.block && !T.wrapper && Ql(E, r) && Zl(E, o, f)) {
                                            var i = S.rename(e, f);
                                            return A(i), N.push(i), void (u = 0);
                                        }
                                        if (T.selector) {
                                            var a = m(R, e);
                                            if (!T.inline || a) return void (u = 0);
                                        }
                                        !l || t || !Zl(E, f, r) || !Zl(E, o, f) || (!c && 3 === e.nodeType && 1 === e.nodeValue.length && 65279 === e.nodeValue.charCodeAt(0)) || Ll(e) || (T.inline && S.isBlock(e))
                                            ? ((u = 0), Mh(xt.grep(e.childNodes), s), t && (l = n), (u = 0))
                                            : (u || ((u = S.clone(d, !1)), e.parentNode.insertBefore(u, e), N.push(u)), u.appendChild(e));
                                    }
                                };
                            Mh(e, s);
                        }),
                        !0 === T.links &&
                            Mh(N, function (e) {
                                var t = function (e) {
                                    "A" === e.nodeName && A(e, T), Mh(xt.grep(e.childNodes), t);
                                };
                                t(e);
                            }),
                        Mh(N, function (e) {
                            var n,
                                t,
                                r,
                                o,
                                i,
                                a,
                                u,
                                s,
                                c,
                                l,
                                f,
                                d,
                                m,
                                p,
                                g,
                                h,
                                v,
                                y,
                                b,
                                C,
                                w = function (e) {
                                    var n = !1;
                                    return (
                                        Mh(e.childNodes, function (e) {
                                            if ((t = e) && 1 === t.nodeType && !$l(t) && !Ll(t) && !Rn(t)) return (n = e), !1;
                                            var t;
                                        }),
                                        n
                                    );
                                },
                                x =
                                    ((n = 0),
                                    Mh(e.childNodes, function (e) {
                                        var t;
                                        ((t = e) && On(t) && 0 === t.length) || $l(e) || n++;
                                    }),
                                    n);
                            (!(1 < N.length) && S.isBlock(e)) || 0 !== x
                                ? (T.inline || T.wrapper) &&
                                  (T.exact || 1 !== x || ((C = w((y = e))) && !$l(C) && $g(S, C, T) && ((b = S.clone(C, !1)), A(b), S.replace(b, y, !0), S.remove(C, !0)), (e = b || y)),
                                  Ih(E, R, _, e),
                                  (p = T),
                                  (g = k),
                                  (h = _),
                                  (Kg((m = E), (v = e).parentNode, g, h) && Oh(m, p, h, v)) ||
                                      (p.merge_with_parents &&
                                          m.dom.getParent(v.parentNode, function (e) {
                                              if (Kg(m, e, g, h)) return Oh(m, p, h, v), !0;
                                          })),
                                  (c = S),
                                  (f = _),
                                  (d = e),
                                  (l = T).styles && l.styles.backgroundColor && yh(d, bh(c, "fontSize"), Ch(c, "backgroundColor", tf(l.styles.backgroundColor, f))),
                                  (i = S),
                                  (u = e),
                                  (s = function (e) {
                                      var t;
                                      1 === e.nodeType &&
                                          e.parentNode &&
                                          1 === e.parentNode.nodeType &&
                                          ((t = af(i, e.parentNode)), i.getStyle(e, "color") && t ? i.setStyle(e, "text-decoration", t) : i.getStyle(e, "text-decoration") === t && i.setStyle(e, "text-decoration", null));
                                  }),
                                  (a = T).styles && (a.styles.color || a.styles.textDecoration) && (xt.walk(u, s, "childNodes"), s(u)),
                                  (t = S),
                                  (o = e),
                                  ("sub" !== (r = T).inline && "sup" !== r.inline) || (yh(o, bh(t, "fontSize"), Ch(t, "fontSize", "")), t.remove(t.select("sup" === r.inline ? "sub" : "sup", o), !0)),
                                  vh(S, T, 0, e))
                                : S.remove(e, !0);
                        });
                };
            if ("false" !== i.getContentEditable(a.getNode())) {
                T &&
                    (r
                        ? Yl(r)
                            ? m(R, r) || ((e = i.createRng()).setStartBefore(r), e.setEndAfter(r), u(i, wf(E, e, R), 0, !0))
                            : u(i, r, 0, !0)
                        : o && T.inline && !_f(E).length
                        ? (function (e, t, n) {
                              var r,
                                  o = e.selection,
                                  i = o.getRng(),
                                  a = i.startOffset,
                                  u = i.startContainer.nodeValue,
                                  s = Il(e.getBody(), o.getStart());
                              s && (r = th(s));
                              var c,
                                  l,
                                  f,
                                  d,
                                  m = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                              u && 0 < a && a < u.length && m.test(u.charAt(a)) && m.test(u.charAt(a - 1))
                                  ? ((c = o.getBookmark()), i.collapse(!0), (l = wf(e, i, e.formatter.get(t))), (l = cd(l)), e.formatter.apply(t, n, l), o.moveToBookmark(c))
                                  : ((s && r.nodeValue === Qg) || ((f = e.getDoc()), (d = nh(!0).dom), (r = (s = f.importNode(d, !0)).firstChild), i.insertNode(s), (a = 1)), e.formatter.apply(t, n, s), o.setCursorLocation(r, a));
                          })(E, k, _)
                        : ((t = a.getNode()),
                          E.settings.forced_root_block || !R[0].defaultBlock || i.getParent(t, i.isBlock) || Fh(E, R[0].defaultBlock),
                          a.setRng(Eg(a.getRng())),
                          Pf(a, !0, function (e) {
                              Bf(E, function (e, t) {
                                  var n = t ? e : wf(E, e, R);
                                  u(i, n);
                              });
                          }),
                          Gl(i, a, a.getRng()),
                          E.nodeChanged()),
                    (n = E),
                    dh(lh[k], function (e) {
                        e(n);
                    }));
            } else {
                r = a.getNode();
                for (var s = 0, c = R.length; s < c; s++) if (R[s].ceFalseOverride && i.is(r, R[s].selector)) return void A(r, R[s]);
            }
        },
        Uh = function (e, t) {
            var n = (t || document).createDocumentFragment();
            return (
                $(e, function (e) {
                    n.appendChild(e.dom);
                }),
                Nt.fromDom(n)
            );
        },
        zh = function (e, t, n) {
            return { element: e, width: t, rows: n };
        },
        jh = function (e, t) {
            return { element: e, cells: t };
        },
        Hh = function (e, t) {
            var n = parseInt(Wn(e, t), 10);
            return isNaN(n) ? 1 : n;
        },
        Vh = function (e) {
            return W(
                e,
                function (e, t) {
                    return t.cells.length > e ? t.cells.length : e;
                },
                0
            );
        },
        qh = function (e, t) {
            for (var n = e.rows, r = 0; r < n.length; r++) for (var o = n[r].cells, i = 0; i < o.length; i++) if (Rt(o[i], t)) return U.some({ x: i, y: r });
            return U.none();
        },
        $h = function (e, t, n, r, o) {
            for (var i = [], a = e.rows, u = n; u <= o; u++) {
                var s = a[u].cells,
                    c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
                i.push(jh(a[u].element, c));
            }
            return i;
        },
        Wh = function (e) {
            var o = zh(ns(e), 0, []);
            return (
                $(qu(e, "tr"), function (n, r) {
                    $(qu(n, "td,th"), function (e, t) {
                        !(function (e, t, n, r, o) {
                            for (var i = Hh(o, "rowspan"), a = Hh(o, "colspan"), u = e.rows, s = n; s < n + i; s++) {
                                u[s] || (u[s] = jh(rs(r), []));
                                for (var c = t; c < t + a; c++) {
                                    u[s].cells[c] = s === n && c === t ? o : ns(o);
                                }
                            }
                        })(
                            o,
                            (function (e, t, n) {
                                for (; (r = t), (o = n), ((i = e.rows)[o] ? i[o].cells : [])[r]; ) t++;
                                var r, o, i;
                                return t;
                            })(o, t, r),
                            r,
                            n,
                            e
                        );
                    });
                }),
                zh(o.element, Vh(o.rows), o.rows)
            );
        },
        Kh = function (e) {
            return (
                (n = F((t = e).rows, function (e) {
                    var t = F(e.cells, function (e) {
                            var t = rs(e);
                            return Kn(t, "colspan"), Kn(t, "rowspan"), t;
                        }),
                        n = ns(e.element);
                    return sn(n, t), n;
                })),
                (r = ns(t.element)),
                (o = Nt.fromTag("tbody")),
                sn(o, n),
                un(r, o),
                r
            );
            var t, n, r, o;
        },
        Xh = function (l, e, t) {
            return qh(l, e).bind(function (c) {
                return qh(l, t).map(function (e) {
                    return (t = l), (r = e), (o = (n = c).x), (i = n.y), (a = r.x), (u = r.y), (s = i < u ? $h(t, o, i, a, u) : $h(t, o, u, a, i)), zh(t.element, Vh(s), s);
                    var t, n, r, o, i, a, u, s;
                });
            });
        },
        Yh = function (t, n) {
            return K(t, function (e) {
                return "li" === Dt(e) && Af(e, n);
            }).fold(N([]), function (e) {
                return K(t, function (e) {
                    return "ul" === Dt(e) || "ol" === Dt(e);
                })
                    .map(function (e) {
                        var t = Nt.fromTag(Dt(e)),
                            n = le(Qn(e), function (e, t) {
                                return Ue(t, "list-style");
                            });
                        return Xn(t, n), [Nt.fromTag("li"), t];
                    })
                    .getOr([]);
            });
        },
        Gh = function (e, t) {
            var n,
                r = Nt.fromDom(t.commonAncestorContainer),
                o = up(r, e),
                i = j(o, function (e) {
                    return Yr(e) || Kr(e);
                }),
                a = Yh(o, t),
                u = i.concat(
                    a.length
                        ? a
                        : Zr((n = r))
                        ? jt(n)
                              .filter(Qr)
                              .fold(N([]), function (e) {
                                  return [n, e];
                              })
                        : Qr(n)
                        ? [n]
                        : []
                );
            return F(u, ns);
        },
        Jh = function () {
            return Uh([]);
        },
        Qh = function (e, t) {
            return (
                (n = Nt.fromDom(t.cloneContents())),
                (r = Gh(e, t)),
                (o = W(
                    r,
                    function (e, t) {
                        return un(t, e), t;
                    },
                    n
                )),
                0 < r.length ? Uh([o]) : o
            );
            var n, r, o;
        },
        Zh = function (e, o) {
            return (
                (t = e),
                (n = o[0]),
                Nr(n, "table", E(Rt, t))
                    .bind(function (e) {
                        var t = o[0],
                            n = o[o.length - 1],
                            r = Wh(e);
                        return Xh(r, t, n).map(function (e) {
                            return Uh([Kh(e)]);
                        });
                    })
                    .getOrThunk(Jh)
            );
            var t, n;
        },
        ev = function (e, t) {
            var n,
                r,
                o = kf(t, e);
            return 0 < o.length ? Zh(e, o) : ((n = e), 0 < (r = t).length && r[0].collapsed ? Jh() : Qh(n, r[0]));
        },
        tv = function (e, t) {
            return 0 <= t && t < e.length && Kl(e.charAt(t));
        },
        nv = function (e) {
            var t = uo(e.innerText);
            return vt.browser.isIE() ? t.replace(/^[ \f\n\r\t\v]+/, "") : t;
        },
        rv = function (e, t, n) {
            if ((void 0 === n && (n = {}), (n.get = !0), (n.format = t), (n.selection = !0), (n = e.fire("BeforeGetContent", n)).isDefaultPrevented())) return e.fire("GetContent", n), n.content;
            if ("text" === n.format)
                return (
                    (l = e),
                    U.from(l.selection.getRng())
                        .map(function (e) {
                            var t = l.dom.add(l.getBody(), "div", { "data-mce-bogus": "all", style: "overflow: hidden; opacity: 0;" }, e.cloneContents()),
                                n = nv(t),
                                r = uo(t.textContent);
                            if ((l.dom.remove(t), tv(r, 0) || tv(r, r.length - 1))) {
                                var o = l.dom.getParent(e.commonAncestorContainer, l.dom.isBlock),
                                    i = nv(o),
                                    a = i.indexOf(n);
                                return -1 === a ? n : (tv(i, a - 1) ? " " : "") + n + (tv(i, a + n.length) ? " " : "");
                            }
                            return n;
                        })
                        .getOr("")
                );
            n.getInner = !0;
            var r,
                o,
                i,
                a,
                u,
                s,
                c,
                l,
                f =
                    ((o = n),
                    (i = (r = e).selection.getRng()),
                    (a = r.dom.create("body")),
                    (u = r.selection.getSel()),
                    (s = wm(r, Nf(u))),
                    (c = o.contextual ? ev(Nt.fromDom(r.getBody()), s).dom : i.cloneContents()) && a.appendChild(c),
                    r.selection.serializer.serialize(a, o));
            return "tree" === n.format ? f : ((n.content = e.selection.isCollapsed() ? "" : f), e.fire("GetContent", n), n.content);
        },
        ov = function (e) {
            return Nn(e) ? e.outerHTML : On(e) ? ri.encodeRaw(e.data, !1) : Bn(e) ? "\x3c!--" + e.data + "--\x3e" : "";
        },
        iv = function (e, t, n) {
            var r,
                o = (function (e) {
                    var t,
                        n = document.createElement("div"),
                        r = document.createDocumentFragment();
                    for (e && (n.innerHTML = e); (t = n.firstChild); ) r.appendChild(t);
                    return r;
                })(t);
            e.hasChildNodes() && n < e.childNodes.length ? (r = e.childNodes[n]).parentNode.insertBefore(o, r) : e.appendChild(o);
        },
        av = function (e, o) {
            var i = 0;
            $(e, function (e) {
                var t, n, r;
                0 === e[0] ? i++ : 1 === e[0] ? (iv(o, e[1], i), i++) : 2 === e[0] && ((n = i), (t = o).hasChildNodes() && n < t.childNodes.length && (r = t.childNodes[n]).parentNode.removeChild(r));
            });
        },
        uv = function (e, t) {
            var p,
                g,
                n,
                h,
                v,
                c,
                y,
                l,
                r,
                o = F(te(t.childNodes), ov);
            return (
                av(
                    ((g = e),
                    (n = (p = o).length + g.length + 2),
                    (h = new Array(n)),
                    (v = new Array(n)),
                    (c = function (e, t, n, r, o) {
                        var i = l(e, t, n, r);
                        if (null === i || (i.start === t && i.diag === t - r) || (i.end === e && i.diag === e - n))
                            for (var a = e, u = n; a < t || u < r; ) a < t && u < r && p[a] === g[u] ? (o.push([0, p[a]]), ++a, ++u) : r - n < t - e ? (o.push([2, p[a]]), ++a) : (o.push([1, g[u]]), ++u);
                        else {
                            c(e, i.start, n, i.start - i.diag, o);
                            for (var s = i.start; s < i.end; ++s) o.push([0, p[s]]);
                            c(i.end, t, i.end - i.diag, r, o);
                        }
                    }),
                    (y = function (e, t, n, r) {
                        for (var o = e; o - t < r && o < n && p[o] === g[o - t]; ) ++o;
                        return { start: e, end: o, diag: t };
                    }),
                    (l = function (e, t, n, r) {
                        var o = t - e,
                            i = r - n;
                        if (0 == o || 0 == i) return null;
                        var a,
                            u,
                            s,
                            c,
                            l,
                            f = o - i,
                            d = i + o,
                            m = (d % 2 == 0 ? d : 1 + d) / 2;
                        for (h[1 + m] = e, v[1 + m] = t + 1, a = 0; a <= m; ++a) {
                            for (u = -a; u <= a; u += 2) {
                                for (s = u + m, u === -a || (u !== a && h[s - 1] < h[s + 1]) ? (h[s] = h[s + 1]) : (h[s] = h[s - 1] + 1), l = (c = h[s]) - e + n - u; c < t && l < r && p[c] === g[l]; ) (h[s] = ++c), ++l;
                                if (f % 2 != 0 && f - a <= u && u <= f + a && v[s - f] <= h[s]) return y(v[s - f], u + e - n, t, r);
                            }
                            for (u = f - a; u <= f + a; u += 2) {
                                for (s = u + m - f, u === f - a || (u !== f + a && v[s + 1] <= v[s - 1]) ? (v[s] = v[s + 1] - 1) : (v[s] = v[s - 1]), l = (c = v[s] - 1) - e + n - u; e <= c && n <= l && p[c] === g[l]; ) (v[s] = c--), l--;
                                if (f % 2 == 0 && -a <= u && u <= a && v[s] <= h[s + f]) return y(v[s], u + e - n, t, r);
                            }
                        }
                    }),
                    (r = []),
                    c(0, p.length, 0, g.length, r),
                    r),
                    t
                ),
                t
            );
        },
        sv = ku(U.none()),
        cv = function (n) {
            var e,
                t =
                    ((e = n.getBody()),
                    j(F(te(e.childNodes), ov), function (e) {
                        return 0 < e.length;
                    })),
                r = Y(t, function (e) {
                    var t = Im(n.serializer, e);
                    return 0 < t.length ? [t] : [];
                }),
                o = r.join("");
            return -1 !== o.indexOf("</iframe>") ? { type: "fragmented", fragments: r, content: "", bookmark: null, beforeBookmark: null } : { type: "complete", fragments: null, content: o, bookmark: null, beforeBookmark: null };
        },
        lv = function (e, t, n) {
            "fragmented" === t.type ? uv(t.fragments, e.getBody()) : e.setContent(t.content, { format: "raw" }), e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark);
        },
        fv = function (e) {
            return "fragmented" === e.type ? e.fragments.join("") : e.content;
        },
        dv = function (e) {
            var t = Nt.fromTag(
                "body",
                sv.get().getOrThunk(function () {
                    var e = document.implementation.createHTMLDocument("undo");
                    return sv.set(U.some(e)), e;
                })
            );
            return es(t, fv(e)), $(qu(t, "*[data-mce-bogus]"), fn), t.dom.innerHTML;
        },
        mv = function (e, t) {
            return !(!e || !t) && ((r = t), fv(e) === fv(r) || ((n = t), dv(e) === dv(n)));
            var n, r;
        },
        pv = function (e) {
            return 0 === e.get();
        },
        gv = function (e, t, n) {
            pv(n) && (e.typing = t);
        },
        hv = function (e, t) {
            e.typing && (gv(e, !1, t), e.add());
        },
        vv = function (e) {
            return e instanceof Em;
        },
        yv = function (e, t) {
            Fg(e.serializer.getNodeFilters(), e.serializer.getAttributeFilters(), t);
        },
        bv = function () {
            return { type: "complete", fragments: [], content: "", bookmark: null, beforeBookmark: null };
        },
        Cv = function (f) {
            return {
                undoManager: {
                    beforeChange: function (e, t) {
                        return (n = f), (r = t), void (pv(e) && r.set(U.some(uc(n.selection))));
                        var n, r;
                    },
                    addUndoLevel: function (e, t, n, r, o, i) {
                        return (function (e, t, n, r, o, i, a) {
                            var u = cv(e);
                            if (((i = i || {}), (i = xt.extend(i, u)), !1 === pv(r) || e.removed)) return null;
                            var s = t.data[n.get()];
                            if (e.fire("BeforeAddUndo", { level: i, lastLevel: s, originalEvent: a }).isDefaultPrevented()) return null;
                            if (s && mv(s, i)) return null;
                            t.data[n.get()] &&
                                o.get().each(function (e) {
                                    t.data[n.get()].beforeBookmark = e;
                                });
                            var c = e.getParam("custom_undo_redo_levels", 0, "number");
                            if (c && t.data.length > c) {
                                for (var l = 0; l < t.data.length - 1; l++) t.data[l] = t.data[l + 1];
                                t.data.length--, n.set(t.data.length);
                            }
                            (i.bookmark = uc(e.selection)), n.get() < t.data.length - 1 && (t.data.length = n.get() + 1), t.data.push(i), n.set(t.data.length - 1);
                            var f = { level: i, lastLevel: s, originalEvent: a };
                            return 0 < n.get() ? (e.setDirty(!0), e.fire("AddUndo", f), e.fire("change", f)) : e.fire("AddUndo", f), i;
                        })(f, e, t, n, r, o, i);
                    },
                    undo: function (e, t, n) {
                        return (r = f), (i = t), (a = n), (o = e).typing && (o.add(), (o.typing = !1), gv(o, !1, i)), 0 < a.get() && (a.set(a.get() - 1), (u = o.data[a.get()]), lv(r, u, !0), r.setDirty(!0), r.fire("Undo", { level: u })), u;
                        var r, o, i, a, u;
                    },
                    redo: function (e, t) {
                        return (n = f), (o = t), (r = e).get() < o.length - 1 && (r.set(r.get() + 1), (i = o[r.get()]), lv(n, i, !1), n.setDirty(!0), n.fire("Redo", { level: i })), i;
                        var n, r, o, i;
                    },
                    clear: function (e, t) {
                        return (n = f), (o = t), ((r = e).data = []), o.set(0), (r.typing = !1), void n.fire("ClearUndos");
                        var n, r, o;
                    },
                    reset: function (e) {
                        return (t = e).clear(), void t.add();
                        var t;
                    },
                    hasUndo: function (e, t) {
                        return (n = f), (r = e), 0 < t.get() || (r.typing && r.data[0] && !mv(cv(n), r.data[0]));
                        var n, r;
                    },
                    hasRedo: function (e, t) {
                        return (n = e), t.get() < n.data.length - 1 && !n.typing;
                        var n;
                    },
                    transact: function (e, t, n) {
                        return (o = n), hv((r = e), t), r.beforeChange(), r.ignore(o), r.add();
                        var r, o;
                    },
                    ignore: function (e, t) {
                        try {
                            e.set(e.get() + 1), t();
                        } finally {
                            e.set(e.get() - 1);
                        }
                    },
                    extra: function (e, t, n, r) {
                        return (o = f), (a = t), (u = n), (s = r), void ((i = e).transact(u) && ((c = i.data[a.get()].bookmark), (l = i.data[a.get() - 1]), lv(o, l, !0), i.transact(s) && (i.data[a.get() - 1].beforeBookmark = c)));
                        var o, i, a, u, s, c, l;
                    },
                },
                formatter: {
                    apply: function (e, t, n) {
                        return Fh(f, e, t, n);
                    },
                    remove: function (e, t, n, r) {
                        return Ph(f, e, t, n, r);
                    },
                    toggle: function (e, t, n) {
                        return (o = e), (i = t), (a = n), (u = (r = f).formatter.get(o)), void (!Xg(r, o, i, a) || ("toggle" in u[0] && !u[0].toggle) ? Fh : Ph)(r, o, i, a);
                        var r, o, i, a, u;
                    },
                },
                editor: {
                    getContent: function (e, t) {
                        return (
                            (n = f),
                            (r = e),
                            (o = t),
                            U.from(n.getBody()).fold(N("tree" === r.format ? new Em("body", 11) : ""), function (e) {
                                return Fm(n, r, o, e);
                            })
                        );
                        var n, r, o;
                    },
                    setContent: function (e, t) {
                        return jg(f, e, t);
                    },
                    insertContent: function (e, t) {
                        return Ig(f, e, t);
                    },
                },
                selection: {
                    getContent: function (e, t) {
                        return rv(f, e, t);
                    },
                },
                raw: {
                    getModel: function () {
                        return U.none();
                    },
                },
            };
        },
        wv = function (i, a) {
            var o = function (e) {
                    return _(e) ? e : {};
                },
                e = m("Unimplemented feature for rtc");
            return {
                undoManager: {
                    beforeChange: V,
                    addUndoLevel: e,
                    undo: function () {
                        return a.undo(), bv();
                    },
                    redo: function () {
                        return a.redo(), bv();
                    },
                    clear: e,
                    reset: e,
                    hasUndo: function () {
                        return a.hasUndo();
                    },
                    hasRedo: function () {
                        return a.hasRedo();
                    },
                    transact: function (e, t, n) {
                        return a.transact(n), bv();
                    },
                    ignore: e,
                    extra: e,
                },
                formatter: {
                    apply: function (e, t, n) {
                        return a.applyFormat(e, o(t));
                    },
                    remove: function (e, t, n, r) {
                        return a.removeFormat(e, o(t));
                    },
                    toggle: function (e, t, n) {
                        return a.toggleFormat(e, o(t));
                    },
                },
                editor: {
                    getContent: function (e, t) {
                        if ("html" !== t && "tree" !== t) return Cv(i).editor.getContent(e, t);
                        var n = a.getContent(),
                            r = Tm({ inner: !0 });
                        return yv(i, n), "tree" === t ? n : r.serialize(n);
                    },
                    setContent: function (e, t) {
                        var n = vv(e) ? e : i.parser.parse(e, { isRootContent: !0, insert: !0 });
                        return a.setContent(n), e;
                    },
                    insertContent: function (e, t) {
                        var n,
                            r =
                                ((n = i),
                                U.from(n.selection.getStart(!0))
                                    .map(function (e) {
                                        return e.nodeName.toLowerCase();
                                    })
                                    .fold(
                                        function () {
                                            return {};
                                        },
                                        function (e) {
                                            return { context: e };
                                        }
                                    )),
                            o = vv(e) ? e : i.parser.parse(e, xe(xe({}, r), { insert: !0 }));
                        a.insertContent(o);
                    },
                },
                selection: {
                    getContent: function (e, t) {
                        if ("html" !== e && "tree" !== e) return Cv(i).selection.getContent(e, t);
                        var n = a.getSelectedContent(),
                            r = Tm({});
                        return yv(i, n), "tree" === e ? n : r.serialize(n);
                    },
                },
                raw: {
                    getModel: function () {
                        return U.some(a.getRawModel());
                    },
                },
            };
        },
        xv = function (e) {
            return me(e.plugins, "rtc");
        },
        Sv = function (e) {
            return e.rtcInstance ? e.rtcInstance : Cv(e);
        },
        Nv = function (e) {
            var t = e.rtcInstance;
            if (t) return t;
            throw new Error("Failed to get RTC instance not yet initialized.");
        },
        Ev = function (e, t) {
            void 0 === t && (t = {});
            var n,
                r,
                o = t.format ? t.format : "html";
            return (n = o), (r = t), Nv(e).selection.getContent(n, r);
        },
        kv = function (e) {
            return 0 === e.dom.length ? (ln(e), U.none()) : U.some(e);
        },
        _v = function (e, t, s, c) {
            e.bind(function (u) {
                return (
                    (c ? Fp : Mp)(u.dom, c ? u.dom.length : 0),
                    t.filter(Lt).map(function (e) {
                        return (t = e), (n = s), (r = c), (o = u.dom), (i = t.dom), (a = r ? o.length : i.length), void (r ? (Up(o, i, !1, !r), n.setStart(i, a)) : (Up(i, o, !1, !r), n.setEnd(i, a)));
                        var t, n, r, o, i, a;
                    })
                );
            }).orThunk(function () {
                var e;
                return ((e = c),
                t
                    .filter(function (e) {
                        return Kf.isBookmarkNode(e.dom);
                    })
                    .bind(e ? Vt : Ht)
                    .or(t)
                    .filter(Lt)).map(function (e) {
                    return (
                        (r = c),
                        void jt((n = e)).each(function (e) {
                            var t = n.dom;
                            r && Rp(e, Us(t, 0)) ? Mp(t, 0) : !r && Tp(e, Us(t, t.length)) && Fp(t, t.length);
                        })
                    );
                    var n, r;
                });
            });
        },
        Rv = function (e, t, n) {
            void 0 === n && (n = {});
            var r,
                o,
                i = ((r = t), xe(xe({ format: "html" }, n), { set: !0, selection: !0, content: r }));
            i.no_events || !(i = e.fire("BeforeSetContent", i)).isDefaultPrevented()
                ? ((n.content = (function (e, t) {
                      if ("raw" === t.format) return t.content;
                      var n = e.selection.getRng(),
                          r = e.dom.getParent(n.commonAncestorContainer, e.dom.isBlock),
                          o = r ? { context: r.nodeName.toLowerCase() } : {},
                          i = e.parser.parse(t.content, xe(xe({ isRootContent: !0, forced_root_block: !1 }, o), t));
                      return Tm({ validate: e.validate }, e.schema).serialize(i);
                  })(e, i)),
                  (function (e, t) {
                      var n = U.from(t.firstChild).map(Nt.fromDom),
                          r = U.from(t.lastChild).map(Nt.fromDom);
                      e.deleteContents(), e.insertNode(t);
                      var o = n.bind(Ht).filter(Lt).bind(kv),
                          i = r.bind(Vt).filter(Lt).bind(kv);
                      _v(o, n, e, !0), _v(i, r, e, !1), e.collapse(!1);
                  })((o = e.selection.getRng()), o.createContextualFragment(n.content)),
                  e.selection.setRng(o),
                  Md(e, o),
                  i.no_events || e.fire("SetContent", i))
                : e.fire("SetContent", i);
        },
        Tv = function (e, t, n) {
            var r;
            e &&
                e.hasOwnProperty(t) &&
                (0 ===
                (r = j(e[t], function (e) {
                    return e !== n;
                })).length
                    ? delete e[t]
                    : (e[t] = r));
        };
    var Av = function (e) {
            return !!e.select;
        },
        Dv = function (e) {
            return !(!e || !e.ownerDocument) && At(Nt.fromDom(e.ownerDocument), Nt.fromDom(e));
        },
        Ov = function (u, s, e, c) {
            var l,
                f,
                i,
                n,
                a,
                d,
                r = function (e, t) {
                    return (
                        a ||
                            ((a = {}),
                            (d = {}),
                            n.on("NodeChange", function (e) {
                                var n = e.element,
                                    r = i.getParents(n, null, i.getRoot()),
                                    o = {};
                                xt.each(a, function (e, n) {
                                    xt.each(r, function (t) {
                                        if (i.is(t, n))
                                            return (
                                                d[n] ||
                                                    (xt.each(e, function (e) {
                                                        e(!0, { node: t, selector: n, parents: r });
                                                    }),
                                                    (d[n] = e)),
                                                (o[n] = e),
                                                !1
                                            );
                                    });
                                }),
                                    xt.each(d, function (e, t) {
                                        o[t] ||
                                            (delete d[t],
                                            xt.each(e, function (e) {
                                                e(!1, { node: n, selector: t, parents: r });
                                            }));
                                    });
                            })),
                        a[e] || (a[e] = []),
                        a[e].push(t),
                        {
                            unbind: function () {
                                Tv(a, e, t), Tv(d, e, t);
                            },
                        }
                    );
                },
                t = function (e, t) {
                    return Rv(c, e, t);
                },
                o = function (e) {
                    var t = p();
                    t.collapse(!!e), g(t);
                },
                m = function () {
                    return s.getSelection ? s.getSelection() : s.document.selection;
                },
                p = function () {
                    var e,
                        t,
                        n,
                        r = function (e, t, n) {
                            try {
                                return t.compareBoundaryPoints(e, n);
                            } catch (r) {
                                return -1;
                            }
                        };
                    if (!s) return null;
                    var o = s.document;
                    if (null == o) return null;
                    if (c.bookmark !== undefined && !1 === pm(c)) {
                        var i = tm(c);
                        if (i.isSome())
                            return i
                                .map(function (e) {
                                    return wm(c, [e])[0];
                                })
                                .getOr(o.createRange());
                    }
                    try {
                        (e = m()) && !Sn(e.anchorNode) && ((t = 0 < e.rangeCount ? e.getRangeAt(0) : e.createRange ? e.createRange() : o.createRange()), (t = wm(c, [t])[0]));
                    } catch (a) {}
                    return (
                        (t = t || (o.createRange ? o.createRange() : o.body.createTextRange())).setStart && 9 === t.startContainer.nodeType && t.collapsed && ((n = u.getRoot()), t.setStart(n, 0), t.setEnd(n, 0)),
                        l && f && (0 === r(t.START_TO_START, t, l) && 0 === r(t.END_TO_END, t, l) ? (t = f) : (f = l = null)),
                        t
                    );
                },
                g = function (e, t) {
                    var n;
                    if ((r = e) && (Av(r) || (Dv(r.startContainer) && Dv(r.endContainer)))) {
                        var r,
                            o = Av(e) ? e : null;
                        if (o) {
                            f = null;
                            try {
                                o.select();
                            } catch (a) {}
                        } else {
                            var i = m();
                            if (((e = c.fire("SetSelectionRange", { range: e, forward: t }).range), i)) {
                                f = e;
                                try {
                                    i.removeAllRanges(), i.addRange(e);
                                } catch (a) {}
                                !1 === t && i.extend && (i.collapse(e.endContainer, e.endOffset), i.extend(e.startContainer, e.startOffset)), (l = 0 < i.rangeCount ? i.getRangeAt(0) : null);
                            }
                            e.collapsed ||
                                e.startContainer !== e.endContainer ||
                                !i.setBaseAndExtent ||
                                vt.ie ||
                                (e.endOffset - e.startOffset < 2 &&
                                    e.startContainer.hasChildNodes() &&
                                    (n = e.startContainer.childNodes[e.startOffset]) &&
                                    "IMG" === n.tagName &&
                                    (i.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), (i.anchorNode === e.startContainer && i.focusNode === e.endContainer) || i.setBaseAndExtent(n, 0, n, 1))),
                                c.fire("AfterSetSelectionRange", { range: e, forward: t });
                        }
                    }
                },
                h = function () {
                    var e = m(),
                        t = null == e ? void 0 : e.anchorNode,
                        n = null == e ? void 0 : e.focusNode;
                    if (!e || !t || !n || Sn(t) || Sn(n)) return !0;
                    var r = u.createRng();
                    r.setStart(t, e.anchorOffset), r.collapse(!0);
                    var o = u.createRng();
                    return o.setStart(n, e.focusOffset), o.collapse(!0), r.compareBoundaryPoints(r.START_TO_START, o) <= 0;
                },
                v = {
                    bookmarkManager: null,
                    controlSelection: null,
                    dom: (i = u),
                    win: s,
                    serializer: e,
                    editor: (n = c),
                    collapse: o,
                    setCursorLocation: function (e, t) {
                        var n = u.createRng();
                        e ? (n.setStart(e, t), n.setEnd(e, t), g(n), o(!1)) : (Df(u, n, c.getBody(), !0), g(n));
                    },
                    getContent: function (e) {
                        return Ev(c, e);
                    },
                    setContent: t,
                    getBookmark: function (e, t) {
                        return y.getBookmark(e, t);
                    },
                    moveToBookmark: function (e) {
                        return y.moveToBookmark(e);
                    },
                    select: function (e, t) {
                        var r, n, o;
                        return (
                            (r = u),
                            (n = e),
                            (o = t),
                            U.from(n)
                                .map(function (e) {
                                    var t = r.nodeIndex(e),
                                        n = r.createRng();
                                    return n.setStart(e.parentNode, t), n.setEnd(e.parentNode, t + 1), o && (Df(r, n, e, !0), Df(r, n, e, !1)), n;
                                })
                                .each(g),
                            e
                        );
                    },
                    isCollapsed: function () {
                        var e = p(),
                            t = m();
                        return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed);
                    },
                    isForward: h,
                    setNode: function (e) {
                        return t(u.getOuterHTML(e)), e;
                    },
                    getNode: function () {
                        return (function (e, t) {
                            var n, r;
                            if (!t) return e;
                            (n = t.startContainer), (r = t.endContainer);
                            var o = t.startOffset,
                                i = t.endOffset,
                                a = t.commonAncestorContainer;
                            return !t.collapsed &&
                                (n === r && i - o < 2 && n.hasChildNodes() && (a = n.childNodes[o]),
                                3 === n.nodeType && 3 === r.nodeType && ((n = n.length === o ? Cm(n.nextSibling, !0) : n.parentNode), (r = 0 === i ? Cm(r.previousSibling, !1) : r.parentNode), n && n === r))
                                ? n
                                : a && 3 === a.nodeType
                                ? a.parentNode
                                : a;
                        })(c.getBody(), p());
                    },
                    getSel: m,
                    setRng: g,
                    getRng: p,
                    getStart: function (e) {
                        return ym(c.getBody(), p(), e);
                    },
                    getEnd: function (e) {
                        return bm(c.getBody(), p(), e);
                    },
                    getSelectedBlocks: function (e, t) {
                        return (function (e, t, n, r) {
                            var o,
                                i = [],
                                a = e.getRoot();
                            if (((n = e.getParent(n || ym(a, t, t.collapsed), e.isBlock)), (r = e.getParent(r || bm(a, t, t.collapsed), e.isBlock)), n && n !== a && i.push(n), n && r && n !== r))
                                for (var u = new Hr((o = n), a); (o = u.next()) && o !== r; ) e.isBlock(o) && i.push(o);
                            return r && n !== r && r !== a && i.push(r), i;
                        })(u, p(), e, t);
                    },
                    normalize: function () {
                        var e = p(),
                            t = m();
                        if (1 < Nf(t).length || !Of(c)) return e;
                        var n = ud(u, e);
                        return (
                            n.each(function (e) {
                                g(e, h());
                            }),
                            n.getOr(e)
                        );
                    },
                    selectorChanged: function (e, t) {
                        return r(e, t), v;
                    },
                    selectorChangedWithUnbind: r,
                    getScrollContainer: function () {
                        for (var e, t = u.getRoot(); t && "BODY" !== t.nodeName; ) {
                            if (t.scrollHeight > t.clientHeight) {
                                e = t;
                                break;
                            }
                            t = t.parentNode;
                        }
                        return e;
                    },
                    scrollIntoView: function (e, t) {
                        return (r = e), (o = t), void ((n = c).inline ? Pd : Id)(n, r, o);
                        var n, r, o;
                    },
                    placeCaretAt: function (e, t) {
                        return g(ed(e, t, c.getDoc()));
                    },
                    getBoundingClientRect: function () {
                        var e = p();
                        return e.collapsed ? Us.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect();
                    },
                    destroy: function () {
                        (s = l = f = null), b.destroy();
                    },
                },
                y = Kf(v),
                b = Qf(v, c);
            return (v.bookmarkManager = y), (v.controlSelection = b), v;
        },
        Bv = function (e, a, u) {
            e.addNodeFilter("font", function (e) {
                $(e, function (e) {
                    var t,
                        n = a.parse(e.attr("style")),
                        r = e.attr("color"),
                        o = e.attr("face"),
                        i = e.attr("size");
                    r && (n.color = r),
                        o && (n["font-family"] = o),
                        i && (n["font-size"] = u[parseInt(e.attr("size"), 10) - 1]),
                        (e.name = "span"),
                        e.attr("style", a.serialize(n)),
                        (t = e),
                        $(["color", "face", "size"], function (e) {
                            t.attr(e, null);
                        });
                });
            });
        },
        Pv = function (e, t) {
            var n,
                r = hi();
            t.convert_fonts_to_spans && Bv(e, r, xt.explode(t.font_size_legacy_values)),
                (n = r),
                e.addNodeFilter("strike", function (e) {
                    $(e, function (e) {
                        var t = n.parse(e.attr("style"));
                        (t["text-decoration"] = "line-through"), (e.name = "span"), e.attr("style", n.serialize(t));
                    });
                });
        },
        Lv = function (e) {
            var t,
                n = decodeURIComponent(e).split(","),
                r = /data:([^;]+)/.exec(n[0]);
            return r && (t = r[1]), { type: t, data: n[1] };
        },
        Iv = function (e, t) {
            var n;
            try {
                n = atob(t);
            } catch (pk) {
                return U.none();
            }
            for (var r = new Uint8Array(n.length), o = 0; o < r.length; o++) r[o] = n.charCodeAt(o);
            return U.some(new Blob([r], { type: e }));
        },
        Mv = function (e) {
            return 0 === e.indexOf("blob:")
                ? ((i = e),
                  new _r(function (e, t) {
                      var n = function () {
                          t("Cannot convert " + i + " to Blob. Resource might not exist or is inaccessible.");
                      };
                      try {
                          var r = new XMLHttpRequest();
                          r.open("GET", i, !0),
                              (r.responseType = "blob"),
                              (r.onload = function () {
                                  200 === this.status ? e(this.response) : n();
                              }),
                              (r.onerror = n),
                              r.send();
                      } catch (o) {
                          n();
                      }
                  }))
                : 0 === e.indexOf("data:")
                ? ((o = e),
                  new _r(function (e) {
                      var t = Lv(o),
                          n = t.type,
                          r = t.data;
                      Iv(n, r).fold(function () {
                          return e(new Blob([]));
                      }, e);
                  }))
                : null;
            var i, o;
        },
        Fv = 0,
        Uv = function (e) {
            return (e || "blobid") + Fv++;
        },
        zv = function (r, o, i, t) {
            var e, n, a, u, s;
            0 !== o.src.indexOf("blob:")
                ? ((n = (e = Lv(o.src)).data),
                  (a = e.type),
                  (u = n),
                  (s = r.getByData(u, a))
                      ? i({ image: o, blobInfo: s })
                      : Mv(o.src).then(
                            function (e) {
                                (s = r.create(Uv(), e, u)), r.add(s), i({ image: o, blobInfo: s });
                            },
                            function (e) {
                                t(e);
                            }
                        ))
                : (s = r.getByUri(o.src))
                ? i({ image: o, blobInfo: s })
                : Mv(o.src).then(
                      function (t) {
                          var n;
                          (n = t),
                              new _r(function (e) {
                                  var t = new FileReader();
                                  (t.onloadend = function () {
                                      e(t.result);
                                  }),
                                      t.readAsDataURL(n);
                              }).then(function (e) {
                                  (u = Lv(e).data), (s = r.create(Uv(), t, u)), r.add(s), i({ image: o, blobInfo: s });
                              });
                      },
                      function (e) {
                          t(e);
                      }
                  );
        };
    function jv(i, a) {
        var u = {};
        return {
            findAll: function (e, n) {
                n = n || k;
                var t,
                    r = j((t = e) ? te(t.getElementsByTagName("img")) : [], function (e) {
                        var t = e.src;
                        return (
                            !!vt.fileApi &&
                            !e.hasAttribute("data-mce-bogus") &&
                            !e.hasAttribute("data-mce-placeholder") &&
                            !(!t || t === vt.transparentSrc) &&
                            (0 === t.indexOf("blob:") ? !i.isUploaded(t) && n(e) : 0 === t.indexOf("data:") && n(e))
                        );
                    }),
                    o = F(r, function (n) {
                        if (u[n.src] !== undefined)
                            return new _r(function (t) {
                                u[n.src].then(function (e) {
                                    return "string" == typeof e ? e : void t({ image: n, blobInfo: e.blobInfo });
                                });
                            });
                        var e = new _r(function (e, t) {
                            zv(a, n, e, t);
                        })
                            .then(function (e) {
                                return delete u[e.image.src], e;
                            })
                            ["catch"](function (e) {
                                return delete u[n.src], e;
                            });
                        return (u[n.src] = e);
                    });
                return _r.all(o);
            },
        };
    }
    var Hv,
        Vv,
        qv = function (e, t, n, r) {
            (e.padd_empty_with_br || t.insert) && n[r.name] ? (r.empty().append(new Em("br", 1)).shortEnded = !0) : (r.empty().append(new Em("#text", 3)).value = oo);
        },
        $v = function (e, t) {
            return e && e.firstChild && e.firstChild === e.lastChild && e.firstChild.name === t;
        },
        Wv = function (r, e, t, n) {
            return n.isEmpty(e, t, function (e) {
                return (t = e), (n = r.getElementRule(t.name)) && n.paddEmpty;
                var t, n;
            });
        },
        Kv = function (e, o) {
            var i = o.blob_cache,
                t = function (t) {
                    var e,
                        n,
                        r = t.attr("src");
                    (e = t).attr("src") === vt.transparentSrc ||
                        e.attr("data-mce-placeholder") ||
                        t.attr("data-mce-bogus") ||
                        ((n = /data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(r)) ? U.some({ type: n[1], data: decodeURIComponent(n[2]) }) : U.none())
                            .filter(function () {
                                return (function (e, t) {
                                    if (t.images_dataimg_filter) {
                                        var n = new Image();
                                        return (
                                            (n.src = e.attr("src")),
                                            oe(e.attributes.map, function (e, t) {
                                                n.setAttribute(t, e);
                                            }),
                                            t.images_dataimg_filter(n)
                                        );
                                    }
                                    return !0;
                                })(t, o);
                            })
                            .bind(function (e) {
                                var t = e.type,
                                    n = e.data;
                                return U.from(i.getByData(n, t)).orThunk(function () {
                                    return Iv(t, n).map(function (e) {
                                        var t = i.create(Uv(), e, n);
                                        return i.add(t), t;
                                    });
                                });
                            })
                            .each(function (e) {
                                t.attr("src", e.blobUri());
                            });
                };
            i &&
                e.addAttributeFilter("src", function (e) {
                    return $(e, t);
                });
        },
        Xv = function (e, g) {
            var h = e.schema;
            g.remove_trailing_brs &&
                e.addNodeFilter("br", function (e, t, n) {
                    var r,
                        o,
                        i,
                        a,
                        u,
                        s,
                        c,
                        l,
                        f = e.length,
                        d = xt.extend({}, h.getBlockElements()),
                        m = h.getNonEmptyElements(),
                        p = h.getWhiteSpaceElements();
                    for (d.body = 1, r = 0; r < f; r++)
                        if (((i = (o = e[r]).parent), d[o.parent.name] && o === i.lastChild)) {
                            for (u = o.prev; u; ) {
                                if ("span" !== (s = u.name) || "bookmark" !== u.attr("data-mce-type")) {
                                    "br" === s && (o = null);
                                    break;
                                }
                                u = u.prev;
                            }
                            o && (o.remove(), Wv(h, m, p, i) && (c = h.getElementRule(i.name)) && (c.removeEmpty ? i.remove() : c.paddEmpty && qv(g, n, d, i)));
                        } else {
                            for (a = o; i && i.firstChild === a && i.lastChild === a && !d[(a = i).name]; ) i = i.parent;
                            a === i && !0 !== g.padd_empty_with_br && (((l = new Em("#text", 3)).value = oo), o.replace(l));
                        }
                }),
                e.addAttributeFilter("href", function (e) {
                    var t,
                        n,
                        r = e.length;
                    if (!g.allow_unsafe_link_target)
                        for (; r--; ) {
                            var o = e[r];
                            "a" === o.name &&
                                "_blank" === o.attr("target") &&
                                o.attr(
                                    "rel",
                                    ((t = o.attr("rel")),
                                    (n = t ? xt.trim(t) : ""),
                                    /\b(noopener)\b/g.test(n)
                                        ? n
                                        : n
                                              .split(" ")
                                              .filter(function (e) {
                                                  return 0 < e.length;
                                              })
                                              .concat(["noopener"])
                                              .sort()
                                              .join(" "))
                                );
                        }
                }),
                g.allow_html_in_named_anchor ||
                    e.addAttributeFilter("id,name", function (e) {
                        for (var t, n, r, o, i = e.length; i--; ) if ("a" === (o = e[i]).name && o.firstChild && !o.attr("href")) for (r = o.parent, t = o.lastChild; (n = t.prev), r.insert(t, o), (t = n); );
                    }),
                g.fix_list_elements &&
                    e.addNodeFilter("ul,ol", function (e) {
                        for (var t, n, r, o = e.length; o--; ) {
                            ("ul" !== (r = (n = e[o]).parent).name && "ol" !== r.name) || (n.prev && "li" === n.prev.name ? n.prev.append(n) : ((t = new Em("li", 1)).attr("style", "list-style-type: none"), n.wrap(t)));
                        }
                    }),
                g.validate &&
                    h.getValidClasses() &&
                    e.addAttributeFilter("class", function (e) {
                        for (var t, n, r, o, i, a, u, s = e.length, c = h.getValidClasses(); s--; ) {
                            for (n = (t = e[s]).attr("class").split(" "), i = "", r = 0; r < n.length; r++)
                                (o = n[r]), (u = !1), (a = c["*"]) && a[o] && (u = !0), (a = c[t.name]), !u && a && a[o] && (u = !0), u && (i && (i += " "), (i += o));
                            i.length || (i = null), t.attr("class", i);
                        }
                    }),
                Kv(e, g);
        },
        Yv = xt.makeMap,
        Gv = xt.each,
        Jv = xt.explode,
        Qv = xt.extend,
        Zv = function (R, T) {
            void 0 === T && (T = pi());
            var A = {},
                D = [],
                O = {},
                B = {};
            ((R = R || {}).validate = !("validate" in R) || R.validate), (R.root_name = R.root_name || "body");
            var e,
                t,
                P = function (e) {
                    var t,
                        n,
                        r = e.name;
                    r in A && ((n = O[r]) ? n.push(e) : (O[r] = [e])), (t = D.length);
                    for (; t--; ) (r = D[t].name) in e.attributes.map && ((n = B[r]) ? n.push(e) : (B[r] = [e]));
                    return e;
                },
                n = {
                    schema: T,
                    addAttributeFilter: function (e, n) {
                        Gv(Jv(e), function (e) {
                            for (var t = 0; t < D.length; t++) if (D[t].name === e) return void D[t].callbacks.push(n);
                            D.push({ name: e, callbacks: [n] });
                        });
                    },
                    getAttributeFilters: function () {
                        return [].concat(D);
                    },
                    addNodeFilter: function (e, n) {
                        Gv(Jv(e), function (e) {
                            var t = A[e];
                            t || (A[e] = t = []), t.push(n);
                        });
                    },
                    getNodeFilters: function () {
                        var e = [];
                        for (var t in A) A.hasOwnProperty(t) && e.push({ name: t, callbacks: A[t] });
                        return e;
                    },
                    filterNode: P,
                    parse: function (e, u) {
                        var t,
                            n,
                            r,
                            o,
                            i,
                            s,
                            a,
                            c,
                            l = [];
                        (u = u || {}), (O = {}), (B = {});
                        var f,
                            d = Qv(Yv("script,style,head,html,body,title,meta,param"), T.getBlockElements()),
                            m = T.getNonEmptyElements(),
                            p = T.children,
                            g = R.validate,
                            h = "forced_root_block" in u ? u.forced_root_block : R.forced_root_block,
                            v = !1 === (f = h) ? "" : !0 === f ? "p" : f,
                            y = T.getWhiteSpaceElements(),
                            b = /^[ \t\r\n]+/,
                            C = /[ \t\r\n]+$/,
                            w = /[ \t\r\n]+/g,
                            x = /^[ \t\r\n]+$/,
                            S = y.hasOwnProperty(u.context) || y.hasOwnProperty(R.root_name),
                            N = function (e, t) {
                                var n,
                                    r = new Em(e, t);
                                return e in A && ((n = O[e]) ? n.push(r) : (O[e] = [r])), r;
                            },
                            E = function (e) {
                                for (var t, n, r, o = T.getBlockElements(), i = e.prev; i && 3 === i.type; ) {
                                    if (0 < (n = i.value.replace(C, "")).length) return void (i.value = n);
                                    if ((t = i.next)) {
                                        if (3 === t.type && t.value.length) {
                                            i = i.prev;
                                            continue;
                                        }
                                        if (!o[t.name] && "script" !== t.name && "style" !== t.name) {
                                            i = i.prev;
                                            continue;
                                        }
                                    }
                                    (r = i.prev), i.remove(), (i = r);
                                }
                            },
                            k = Lm(
                                {
                                    validate: g,
                                    allow_html_data_urls: R.allow_html_data_urls,
                                    allow_script_urls: R.allow_script_urls,
                                    allow_conditional_comments: R.allow_conditional_comments,
                                    preserve_cdata: R.preserve_cdata,
                                    self_closing_elements: (function (e) {
                                        var t,
                                            n = {};
                                        for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]);
                                        return n;
                                    })(T.getSelfClosingElements()),
                                    cdata: function (e) {
                                        c.append(N("#cdata", 4)).value = e;
                                    },
                                    text: function (e, t) {
                                        var n, r, o;
                                        S || ((e = e.replace(w, " ")), (r = c.lastChild), (o = d), r && (o[r.name] || "br" === r.name) && (e = e.replace(b, ""))), 0 !== e.length && (((n = N("#text", 3)).raw = !!t), (c.append(n).value = e));
                                    },
                                    comment: function (e) {
                                        c.append(N("#comment", 8)).value = e;
                                    },
                                    pi: function (e, t) {
                                        (c.append(N(e, 7)).value = t), E(c);
                                    },
                                    doctype: function (e) {
                                        (c.append(N("#doctype", 10)).value = e), E(c);
                                    },
                                    start: function (e, t, n) {
                                        var r,
                                            o,
                                            i,
                                            a,
                                            u = g ? T.getElementRule(e) : {};
                                        if (u) {
                                            for ((r = N(u.outputName || e, 1)).attributes = t, r.shortEnded = n, c.append(r), (a = p[c.name]) && p[r.name] && !a[r.name] && l.push(r), o = D.length; o--; )
                                                (i = D[o].name) in t.map && ((s = B[i]) ? s.push(r) : (B[i] = [r]));
                                            d[e] && E(r), n || (c = r), !S && y[e] && (S = !0);
                                        }
                                    },
                                    end: function (e) {
                                        var t,
                                            n,
                                            r,
                                            o,
                                            i,
                                            a = g ? T.getElementRule(e) : {};
                                        if (a) {
                                            if (d[e] && !S) {
                                                if ((t = c.firstChild) && 3 === t.type)
                                                    if (0 < (n = t.value.replace(b, "")).length) (t.value = n), (t = t.next);
                                                    else for (r = t.next, t.remove(), t = r; t && 3 === t.type; ) (n = t.value), (r = t.next), (0 !== n.length && !x.test(n)) || (t.remove(), (t = r)), (t = r);
                                                if ((t = c.lastChild) && 3 === t.type)
                                                    if (0 < (n = t.value.replace(C, "")).length) (t.value = n), (t = t.prev);
                                                    else for (r = t.prev, t.remove(), t = r; t && 3 === t.type; ) (n = t.value), (r = t.prev), (0 !== n.length && !x.test(n)) || (t.remove(), (t = r)), (t = r);
                                            }
                                            if ((S && y[e] && (S = !1), a.removeEmpty && Wv(T, m, y, c))) return (o = c.parent), d[c.name] ? c.empty().remove() : c.unwrap(), void (c = o);
                                            a.paddEmpty && (($v((i = c), "#text") && i.firstChild.value === oo) || Wv(T, m, y, c)) && qv(R, u, d, c), (c = c.parent);
                                        }
                                    },
                                },
                                T
                            ),
                            _ = (c = new Em(u.context || R.root_name, 11));
                        if (
                            (k.parse(e, u.format),
                            g &&
                                l.length &&
                                (u.context
                                    ? (u.invalid = !0)
                                    : (function (e) {
                                          for (
                                              var t,
                                                  n,
                                                  r,
                                                  o,
                                                  i,
                                                  a,
                                                  u,
                                                  s,
                                                  c,
                                                  l,
                                                  f = Yv("tr,td,th,tbody,thead,tfoot,table"),
                                                  d = T.getNonEmptyElements(),
                                                  m = T.getWhiteSpaceElements(),
                                                  p = T.getTextBlockElements(),
                                                  g = T.getSpecialElements(),
                                                  h = 0;
                                              h < e.length;
                                              h++
                                          )
                                              if ((t = e[h]).parent && !t.fixed)
                                                  if (p[t.name] && "li" === t.parent.name) {
                                                      for (c = t.next; c && p[c.name]; ) (c.name = "li"), (c.fixed = !0), t.parent.insert(c, t.parent), (c = c.next);
                                                      t.unwrap(t);
                                                  } else {
                                                      for (r = [t], n = t.parent; n && !T.isValidChild(n.name, t.name) && !f[n.name]; n = n.parent) r.push(n);
                                                      if (n && 1 < r.length) {
                                                          for (r.reverse(), o = i = P(r[0].clone()), s = 0; s < r.length - 1; s++) {
                                                              for (T.isValidChild(i.name, r[s].name) ? ((a = P(r[s].clone())), i.append(a)) : (a = i), u = r[s].firstChild; u && u !== r[s + 1]; ) (l = u.next), a.append(u), (u = l);
                                                              i = a;
                                                          }
                                                          Wv(T, d, m, o) ? n.insert(t, r[0], !0) : (n.insert(o, r[0], !0), n.insert(t, o)), (n = r[0]), (Wv(T, d, m, n) || $v(n, "br")) && n.empty().remove();
                                                      } else if (t.parent) {
                                                          if ("li" === t.name) {
                                                              if ((c = t.prev) && ("ul" === c.name || "ol" === c.name)) {
                                                                  c.append(t);
                                                                  continue;
                                                              }
                                                              if ((c = t.next) && ("ul" === c.name || "ol" === c.name)) {
                                                                  c.insert(t, c.firstChild, !0);
                                                                  continue;
                                                              }
                                                              t.wrap(P(new Em("ul", 1)));
                                                              continue;
                                                          }
                                                          T.isValidChild(t.parent.name, "div") && T.isValidChild("div", t.name) ? t.wrap(P(new Em("div", 1))) : g[t.name] ? t.empty().remove() : t.unwrap();
                                                      }
                                                  }
                                      })(l)),
                            v &&
                                ("body" === _.name || u.isRootContent) &&
                                (function () {
                                    var e,
                                        t,
                                        n = _.firstChild,
                                        r = function (e) {
                                            e && ((n = e.firstChild) && 3 === n.type && (n.value = n.value.replace(b, "")), (n = e.lastChild) && 3 === n.type && (n.value = n.value.replace(C, "")));
                                        };
                                    if (T.isValidChild(_.name, v.toLowerCase())) {
                                        for (; n; )
                                            (e = n.next),
                                                3 === n.type || (1 === n.type && "p" !== n.name && !d[n.name] && !n.attr("data-mce-type"))
                                                    ? (t || ((t = N(v, 1)).attr(R.forced_root_block_attrs), _.insert(t, n)), t.append(n))
                                                    : (r(t), (t = null)),
                                                (n = e);
                                        r(t);
                                    }
                                })(),
                            !u.invalid)
                        ) {
                            for (a in O)
                                if (O.hasOwnProperty(a)) {
                                    for (s = A[a], o = (t = O[a]).length; o--; ) t[o].parent || t.splice(o, 1);
                                    for (n = 0, r = s.length; n < r; n++) s[n](t, a, u);
                                }
                            for (n = 0, r = D.length; n < r; n++)
                                if ((s = D[n]).name in B) {
                                    for (o = (t = B[s.name]).length; o--; ) t[o].parent || t.splice(o, 1);
                                    for (o = 0, i = s.callbacks.length; o < i; o++) s.callbacks[o](t, s.name, u);
                                }
                        }
                        return _;
                    },
                };
            return Xv(n, R), (e = n), (t = R).inline_styles && Pv(e, t), n;
        },
        ey = function (e, t, n) {
            return (
                (o = n),
                (r = e) && r.hasEventListeners("PreProcess") && !o.no_events
                    ? (function (e, t, n) {
                          var r,
                              o,
                              i = e.dom;
                          t = t.cloneNode(!0);
                          var a,
                              u,
                              s = document.implementation;
                          return (
                              s.createHTMLDocument &&
                                  ((r = s.createHTMLDocument("")),
                                  xt.each("BODY" === t.nodeName ? t.childNodes : [t], function (e) {
                                      r.body.appendChild(r.importNode(e, !0));
                                  }),
                                  (t = "BODY" !== t.nodeName ? r.body.firstChild : r.body),
                                  (o = i.doc),
                                  (i.doc = r)),
                              (a = e),
                              (u = xe(xe({}, n), { node: t })),
                              a.fire("PreProcess", u),
                              o && (i.doc = o),
                              t
                          );
                      })(e, t, n)
                    : t
            );
            var r, o;
        },
        ty = function (e, t, n) {
            -1 === xt.inArray(t, n) &&
                (e.addAttributeFilter(n, function (e, t) {
                    for (var n = e.length; n--; ) e[n].attr(t, null);
                }),
                t.push(n));
        },
        ny = function (e, t, n, r, o) {
            var i,
                a,
                u,
                s,
                c,
                l,
                f = ((i = r), Tm(t, n).serialize(i));
            return (a = e), (s = f), (u = o).no_events || !a ? s : ((c = a), (l = xe(xe({}, u), { content: s })), c.fire("PostProcess", l).content);
        },
        ry = function (y, b) {
            var e = ["data-mce-selected"],
                C = b && b.dom ? b.dom : bu.DOM,
                w = b && b.schema ? b.schema : pi(y);
            (y.entity_encoding = y.entity_encoding || "named"), (y.remove_trailing_brs = !("remove_trailing_brs" in y) || y.remove_trailing_brs);
            var t,
                s,
                c,
                x = Zv(y, w);
            (s = y),
                (c = C),
                (t = x).addAttributeFilter("data-mce-tabindex", function (e, t) {
                    for (var n, r = e.length; r--; ) (n = e[r]).attr("tabindex", n.attr("data-mce-tabindex")), n.attr(t, null);
                }),
                t.addAttributeFilter("src,href,style", function (e, t) {
                    for (var n, r, o = e.length, i = "data-mce-" + t, a = s.url_converter, u = s.url_converter_scope; o--; )
                        (r = (n = e[o]).attr(i)) !== undefined
                            ? (n.attr(t, 0 < r.length ? r : null), n.attr(i, null))
                            : ((r = n.attr(t)), "style" === t ? (r = c.serializeStyle(c.parseStyle(r), n.name)) : a && (r = a.call(u, r, t, n.name)), n.attr(t, 0 < r.length ? r : null));
                }),
                t.addAttributeFilter("class", function (e) {
                    for (var t, n, r = e.length; r--; ) (n = (t = e[r]).attr("class")) && ((n = t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, "")), t.attr("class", 0 < n.length ? n : null));
                }),
                t.addAttributeFilter("data-mce-type", function (e, t, n) {
                    for (var r, o = e.length; o--; ) {
                        "bookmark" !== (r = e[o]).attr("data-mce-type") ||
                            n.cleanup ||
                            (U.from(r.firstChild).exists(function (e) {
                                return !ao(e.value);
                            })
                                ? r.unwrap()
                                : r.remove());
                    }
                }),
                t.addNodeFilter("noscript", function (e) {
                    for (var t, n = e.length; n--; ) (t = e[n].firstChild) && (t.value = ri.decode(t.value));
                }),
                t.addNodeFilter("script,style", function (e, t) {
                    for (
                        var n,
                            r,
                            o,
                            i = e.length,
                            a = function (e) {
                                return e
                                    .replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n")
                                    .replace(/^[\r\n]*|[\r\n]*$/g, "")
                                    .replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "")
                                    .replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "");
                            };
                        i--;

                    )
                        (r = (n = e[i]).firstChild ? n.firstChild.value : ""),
                            "script" === t
                                ? ((o = n.attr("type")) && n.attr("type", "mce-no/type" === o ? null : o.replace(/^mce\-/, "")), "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "// <![CDATA[\n" + a(r) + "\n// ]]>"))
                                : "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "\x3c!--\n" + a(r) + "\n--\x3e");
                }),
                t.addNodeFilter("#comment", function (e) {
                    for (var t, n = e.length; n--; )
                        (t = e[n]),
                            s.preserve_cdata && 0 === t.value.indexOf("[CDATA[")
                                ? ((t.name = "#cdata"), (t.type = 4), (t.value = c.decode(t.value.replace(/^\[CDATA\[|\]\]$/g, ""))))
                                : 0 === t.value.indexOf("mce:protected ") && ((t.name = "#text"), (t.type = 3), (t.raw = !0), (t.value = unescape(t.value).substr(14)));
                }),
                t.addNodeFilter("xml:namespace,input", function (e, t) {
                    for (var n, r = e.length; r--; ) 7 === (n = e[r]).type ? n.remove() : 1 === n.type && ("input" !== t || n.attr("type") || n.attr("type", "text"));
                }),
                t.addAttributeFilter("data-mce-type", function (e) {
                    $(e, function (e) {
                        "format-caret" === e.attr("data-mce-type") && (e.isEmpty(t.schema.getNonEmptyElements()) ? e.remove() : e.unwrap());
                    });
                }),
                t.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder", function (e, t) {
                    for (var n = e.length; n--; ) e[n].attr(t, null);
                });
            return {
                schema: w,
                addNodeFilter: x.addNodeFilter,
                addAttributeFilter: x.addAttributeFilter,
                serialize: function (e, t) {
                    void 0 === t && (t = {});
                    var n,
                        r,
                        o,
                        i,
                        a,
                        u,
                        s,
                        c,
                        l,
                        f,
                        d,
                        m,
                        p = xe({ format: "html" }, t),
                        g = ey(b, e, p),
                        h = ((n = C), (r = g), (i = uo((o = p).getInner ? r.innerHTML : n.getOuterHTML(r))), o.selection || no(Nt.fromDom(r)) ? i : xt.trim(i)),
                        v =
                            ((a = x),
                            (u = h),
                            (d = (s = p).selection ? xe({ forced_root_block: !1 }, s) : s),
                            (m = a.parse(u, d)),
                            (l = function (e) {
                                return e && "br" === e.name;
                            }),
                            (f = m.lastChild),
                            !l(f) || (l((c = f.prev)) && (f.remove(), c.remove())),
                            m);
                    return "tree" === p.format ? v : ny(b, y, w, v, p);
                },
                addRules: function (e) {
                    w.addValidElements(e);
                },
                setRules: function (e) {
                    w.setValidElements(e);
                },
                addTempAttr: E(ty, x, e),
                getTempAttrs: function () {
                    return e;
                },
                getNodeFilters: x.getNodeFilters,
                getAttributeFilters: x.getAttributeFilters,
            };
        },
        oy = function (e, t) {
            var n = ry(e, t);
            return {
                schema: n.schema,
                addNodeFilter: n.addNodeFilter,
                addAttributeFilter: n.addAttributeFilter,
                serialize: n.serialize,
                addRules: n.addRules,
                setRules: n.setRules,
                addTempAttr: n.addTempAttr,
                getTempAttrs: n.getTempAttrs,
                getNodeFilters: n.getNodeFilters,
                getAttributeFilters: n.getAttributeFilters,
            };
        },
        iy = function (e, t) {
            void 0 === t && (t = {});
            var n,
                r,
                o = t.format ? t.format : "html";
            return (n = t), (r = o), Sv(e).editor.getContent(n, r);
        },
        ay = function (e, t, n) {
            return void 0 === n && (n = {}), (r = t), (o = n), Sv(e).editor.setContent(r, o);
            var r, o;
        },
        uy = bu.DOM,
        sy = function (e) {
            return U.from(e).each(function (e) {
                return e.destroy();
            });
        },
        cy = function (e) {
            var t, n, r, o, i;
            e.removed ||
                ((t = e._selectionOverrides),
                (n = e.editorUpload),
                (r = e.getBody()),
                (o = e.getElement()),
                r && e.save({ is_removing: !0 }),
                (e.removed = !0),
                e.unbindAllNativeEvents(),
                e.hasHiddenInput && o && uy.remove(o.nextSibling),
                e.fire("remove"),
                e.editorManager.remove(e),
                !e.inline && r && ((i = e), uy.setStyle(i.id, "display", i.orgDisplay)),
                e.fire("detach"),
                uy.remove(e.getContainer()),
                sy(t),
                sy(n),
                e.destroy());
        },
        ly = function (e, t) {
            var n,
                r,
                o,
                i = e.selection,
                a = e.dom;
            e.destroyed ||
                (t || e.removed
                    ? (t || (e.editorManager.off("beforeunload", e._beforeUnload), e.theme && e.theme.destroy && e.theme.destroy(), sy(i), sy(a)),
                      (r = (n = e).formElement) && (r._mceOldSubmit && ((r.submit = r._mceOldSubmit), (r._mceOldSubmit = null)), uy.unbind(r, "submit reset", n.formEventDelegate)),
                      ((o = e).contentAreaContainer = o.formElement = o.container = o.editorContainer = null),
                      (o.bodyElement = o.contentDocument = o.contentWindow = null),
                      (o.iframeElement = o.targetElm = null),
                      o.selection && (o.selection = o.selection.win = o.selection.dom = o.selection.dom.doc = null),
                      (e.destroyed = !0))
                    : e.remove());
        },
        fy = Object.prototype.hasOwnProperty,
        dy =
            ((Hv = function (e, t) {
                return _(e) && _(t) ? dy(e, t) : t;
            }),
            function () {
                for (var e = new Array(arguments.length), t = 0; t < e.length; t++) e[t] = arguments[t];
                if (0 === e.length) throw new Error("Can't merge zero objects");
                for (var n = {}, r = 0; r < e.length; r++) {
                    var o = e[r];
                    for (var i in o) fy.call(o, i) && (n[i] = Hv(n[i], o[i]));
                }
                return n;
            }),
        my = st().deviceType,
        py = my.isTouch(),
        gy = my.isPhone(),
        hy = my.isTablet(),
        vy = ["lists", "autolink", "autosave"],
        yy = { table_grid: !1, object_resizing: !1, resize: !1 },
        by = function (e) {
            var t = S(e) ? e.join(" ") : e,
                n = F(q(t) ? t.split(" ") : [], je);
            return j(n, function (e) {
                return 0 < e.length;
            });
        },
        Cy = function (n, e) {
            var t,
                r,
                o = ce(e, function (e, t) {
                    return I(n, t);
                });
            return (t = o.t), (r = o.f), { sections: N(t), settings: N(r) };
        },
        wy = function (e, t) {
            return e.sections().hasOwnProperty(t);
        },
        xy = function (e, t) {
            return de(e, "toolbar_mode")
                .orThunk(function () {
                    return de(e, "toolbar_drawer").map(function (e) {
                        return !1 === e ? "wrap" : e;
                    });
                })
                .getOr(t);
        },
        Sy = function (e, t, n, r) {
            var o,
                i,
                a,
                u,
                s,
                c,
                l,
                f = by(n.forced_plugins),
                d = by(r.plugins),
                m = wy((o = t), (i = "mobile")) ? o.sections()[i] : {},
                p = m.plugins ? by(m.plugins) : d,
                g = e && ((s = u = "mobile"), (c = (a = t).sections()), wy(a, u) && c[u].theme === s) ? j(p, E(I, vy)) : e && wy(t, "mobile") ? p : d,
                h = ((l = g), [].concat(by(f)).concat(by(l)));
            return xt.extend(r, { plugins: h.join(" ") });
        },
        Ny = function (e, t, n, r, o) {
            var i,
                a,
                u,
                s,
                c,
                l,
                f,
                d = e ? { mobile: ((i = o.mobile || {}), (a = t), (u = { resize: !1, toolbar_mode: xy(i, "scrolling"), toolbar_sticky: !1 }), xe(xe(xe({}, yy), u), a ? { menubar: !1 } : {})) } : {},
                m = Cy(["mobile"], dy(d, o)),
                p = xt.extend(
                    n,
                    r,
                    m.settings(),
                    ((f = m),
                    e && wy(f, "mobile")
                        ? (function (e, t, n) {
                              void 0 === n && (n = {});
                              var r = e.sections(),
                                  o = r.hasOwnProperty(t) ? r[t] : {};
                              return xt.extend({}, n, o);
                          })(m, "mobile")
                        : {}),
                    { validate: !0, external_plugins: ((s = r), (c = m.settings()), (l = c.external_plugins ? c.external_plugins : {}), s && s.external_plugins ? xt.extend({}, s.external_plugins, l) : l) }
                );
            return Sy(e, m, r, p);
        },
        Ey = function (e, t, n, r, o) {
            var i,
                a,
                u,
                s,
                c =
                    ((i = n),
                    (a = py),
                    (u = e),
                    (s = {
                        id: t,
                        theme: "silver",
                        toolbar_mode: xy(o, "floating"),
                        plugins: "",
                        document_base_url: i,
                        add_form_submit_trigger: !0,
                        submit_patch: !0,
                        add_unload_trigger: !0,
                        convert_urls: !0,
                        relative_urls: !0,
                        remove_script_host: !0,
                        object_resizing: !0,
                        doctype: "<!DOCTYPE html>",
                        visual: !0,
                        font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
                        forced_root_block: "p",
                        hidden_input: !0,
                        inline_styles: !0,
                        convert_fonts_to_spans: !0,
                        indent: !0,
                        indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                        indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                        entity_encoding: "named",
                        url_converter: u.convertURL,
                        url_converter_scope: u,
                    }),
                    xe(xe({}, s), a ? yy : {}));
            return Ny(gy || hy, gy, c, r, o);
        },
        ky = function (e, t, n) {
            return U.from(t.settings[n]).filter(e);
        },
        _y = function (e, t, n, r) {
            var o,
                i,
                a,
                u = t in e.settings ? e.settings[t] : n;
            return "hash" === r
                ? ((a = {}),
                  "string" == typeof (i = u)
                      ? $(0 < i.indexOf("=") ? i.split(/[;,](?![^=;,]*(?:[;,]|$))/) : i.split(","), function (e) {
                            var t = e.split("=");
                            1 < t.length ? (a[xt.trim(t[0])] = xt.trim(t[1])) : (a[xt.trim(t[0])] = xt.trim(t[0]));
                        })
                      : (a = i),
                  a)
                : "string" === r
                ? ky(q, e, t).getOr(n)
                : "number" === r
                ? ky(D, e, t).getOr(n)
                : "boolean" === r
                ? ky(x, e, t).getOr(n)
                : "object" === r
                ? ky(_, e, t).getOr(n)
                : "array" === r
                ? ky(S, e, t).getOr(n)
                : "string[]" === r
                ? ky(
                      ((o = q),
                      function (e) {
                          return S(e) && G(e, o);
                      }),
                      e,
                      t
                  ).getOr(n)
                : "function" === r
                ? ky(A, e, t).getOr(n)
                : u;
        },
        Ry =
            ((Vv = {}),
            {
                add: function (e, t) {
                    Vv[e] = t;
                },
                get: function (e) {
                    return Vv[e] ? Vv[e] : { icons: {} };
                },
                has: function (e) {
                    return me(Vv, e);
                },
            }),
        Ty = function (e, t) {
            return t.dom[e];
        },
        Ay = function (e, t) {
            return parseInt(Yn(t, e), 10);
        },
        Dy = E(Ty, "clientWidth"),
        Oy = E(Ty, "clientHeight"),
        By = E(Ay, "margin-top"),
        Py = E(Ay, "margin-left"),
        Ly = function (e, t, n) {
            var r,
                o,
                i,
                a,
                u,
                s,
                c,
                l,
                f,
                d,
                m,
                p = Nt.fromDom(e.getBody()),
                g = e.inline ? p : ((r = p), Nt.fromDom(Ut(r).dom.documentElement)),
                h = ((o = e.inline), (a = t), (u = n), (s = (i = g).dom.getBoundingClientRect()), { x: a - (o ? s.left + i.dom.clientLeft + Py(i) : 0), y: u - (o ? s.top + i.dom.clientTop + By(i) : 0) });
            return (l = h.x), (f = h.y), (d = Dy((c = g))), (m = Oy(c)), 0 <= l && 0 <= f && l <= d && f <= m;
        },
        Iy = function (e) {
            var t,
                n = e.inline ? e.getBody() : e.getContentAreaContainer();
            return (t = n), U.from(t).map(Nt.fromDom).map(dn).getOr(!1);
        };
    function My(n) {
        var t,
            o = [],
            i = function () {
                var e,
                    t = n.theme;
                return t && t.getNotificationManagerImpl
                    ? t.getNotificationManagerImpl()
                    : {
                          open: (e = function () {
                              throw new Error("Theme did not provide a NotificationManager implementation.");
                          }),
                          close: e,
                          reposition: e,
                          getArgs: e,
                      };
            },
            a = function () {
                return U.from(o[0]);
            },
            u = function () {
                0 < o.length && i().reposition(o);
            },
            s = function (t) {
                X(o, function (e) {
                    return e === t;
                }).each(function (e) {
                    o.splice(e, 1);
                });
            },
            r = function (r) {
                if (!n.removed && Iy(n))
                    return K(o, function (e) {
                        return (t = i().getArgs(e)), (n = r), !(t.type !== n.type || t.text !== n.text || t.progressBar || t.timeout || n.progressBar || n.timeout);
                        var t, n;
                    }).getOrThunk(function () {
                        n.editorManager.setActive(n);
                        var e,
                            t = i().open(r, function () {
                                s(t),
                                    u(),
                                    a().fold(
                                        function () {
                                            return n.focus();
                                        },
                                        function (e) {
                                            return Nt.fromDom(e.getEl()).dom.focus();
                                        }
                                    );
                            });
                        return (e = t), o.push(e), u(), t;
                    });
            };
        return (
            (t = n).on("SkinLoaded", function () {
                var e = t.getParam("service_message");
                e && r({ text: e, type: "warning", timeout: 0 });
            }),
            t.on("ResizeEditor ResizeWindow NodeChange", function () {
                Fr.requestAnimationFrame(u);
            }),
            t.on("remove", function () {
                $(o.slice(), function (e) {
                    i().close(e);
                });
            }),
            {
                open: r,
                close: function () {
                    a().each(function (e) {
                        i().close(e), s(e), u();
                    });
                },
                getNotifications: function () {
                    return o;
                },
            }
        );
    }
    var Fy = Bu.PluginManager,
        Uy = Bu.ThemeManager;
    var zy = function (n) {
            var r = [],
                o = function () {
                    var e,
                        t = n.theme;
                    return t && t.getWindowManagerImpl
                        ? t.getWindowManagerImpl()
                        : {
                              open: (e = function () {
                                  throw new Error("Theme did not provide a WindowManager implementation.");
                              }),
                              openUrl: e,
                              alert: e,
                              confirm: e,
                              close: e,
                              getParams: e,
                              setParams: e,
                          };
                },
                i = function (e, t) {
                    return function () {
                        return t ? t.apply(e, arguments) : undefined;
                    };
                },
                a = function (e) {
                    var t;
                    r.push(e), (t = e), n.fire("OpenWindow", { dialog: t });
                },
                u = function (t) {
                    var e;
                    (e = t),
                        n.fire("CloseWindow", { dialog: e }),
                        0 ===
                            (r = j(r, function (e) {
                                return e !== t;
                            })).length && n.focus();
                },
                s = function (e) {
                    n.editorManager.setActive(n), em(n);
                    var t = e();
                    return a(t), t;
                };
            return (
                n.on("remove", function () {
                    $(r, function (e) {
                        o().close(e);
                    });
                }),
                {
                    open: function (e, t) {
                        return s(function () {
                            return o().open(e, t, u);
                        });
                    },
                    openUrl: function (e) {
                        return s(function () {
                            return o().openUrl(e, u);
                        });
                    },
                    alert: function (e, t, n) {
                        o().alert(e, i(n || this, t));
                    },
                    confirm: function (e, t, n) {
                        o().confirm(e, i(n || this, t));
                    },
                    close: function () {
                        U.from(r[r.length - 1]).each(function (e) {
                            o().close(e), u(e);
                        });
                    },
                }
            );
        },
        jy = function (e, t) {
            e.notificationManager.open({ type: "error", text: t });
        },
        Hy = function (e, t) {
            e._skinLoaded
                ? jy(e, t)
                : e.on("SkinLoaded", function () {
                      jy(e, t);
                  });
        },
        Vy = function (e, t, n) {
            var r, o;
            (r = t), (o = { message: n }), e.fire(r, o), console.error(n);
        },
        qy = function (e, t, n) {
            return n ? "Failed to load " + e + ": " + n + " from url " + t : "Failed to load " + e + " url: " + t;
        },
        $y = function (e, t, n) {
            Vy(e, "PluginLoadError", qy("plugin", t, n));
        },
        Wy = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = window.console;
            r && (r.error ? r.error.apply(r, Se([e], t)) : r.log.apply(r, Se([e], t)));
        },
        Ky = function (t) {
            var e,
                n,
                r = ((n = (e = t).getParam("content_css")), q(n) ? F(n.split(","), je) : S(n) ? n : !1 === n || e.inline ? [] : ["default"]),
                o = t.editorManager.baseURL + "/skins/content",
                i = "content" + t.editorManager.suffix + ".css",
                a = !0 === t.inline;
            return F(r, function (e) {
                return /^[a-z0-9\-]+$/i.test(e) && !a ? o + "/" + e + "/" + i : t.documentBaseURI.toAbsolute(e);
            });
        };
    function Xy(u, s) {
        var o = {},
            n = function (e, r, o, t) {
                var i = new XMLHttpRequest();
                i.open("POST", s.url),
                    (i.withCredentials = s.credentials),
                    (i.upload.onprogress = function (e) {
                        t((e.loaded / e.total) * 100);
                    }),
                    (i.onerror = function () {
                        o("Image upload failed due to a XHR Transport error. Code: " + i.status);
                    }),
                    (i.onload = function () {
                        var e, t, n;
                        i.status < 200 || 300 <= i.status
                            ? o("HTTP Error: " + i.status)
                            : (e = JSON.parse(i.responseText)) && "string" == typeof e.location
                            ? r(((t = s.basePath), (n = e.location), t ? t.replace(/\/$/, "") + "/" + n.replace(/^\//, "") : n))
                            : o("Invalid JSON: " + i.responseText);
                    });
                var n = new FormData();
                n.append("file", e.blob(), e.filename()), i.send(n);
            },
            c = function (e, t) {
                return { url: t, blobInfo: e, status: !0 };
            },
            l = function (e, t, n) {
                return { url: "", blobInfo: e, status: !1, error: { message: t, options: n } };
            },
            f = function (e, t) {
                xt.each(o[e], function (e) {
                    e(t);
                }),
                    delete o[e];
            },
            r = function (e, r) {
                return (
                    (e = xt.grep(e, function (e) {
                        return !u.isUploaded(e.blobUri());
                    })),
                    _r.all(
                        xt.map(e, function (e) {
                            return u.isPending(e.blobUri())
                                ? ((t = e.blobUri()),
                                  new _r(function (e) {
                                      (o[t] = o[t] || []), o[t].push(e);
                                  }))
                                : ((i = e),
                                  (n = s.handler),
                                  (a = r),
                                  u.markPending(i.blobUri()),
                                  new _r(function (r) {
                                      var t;
                                      try {
                                          var o = function () {
                                              t && t.close();
                                          };
                                          n(
                                              i,
                                              function (e) {
                                                  o(), u.markUploaded(i.blobUri(), e), f(i.blobUri(), c(i, e)), r(c(i, e));
                                              },
                                              function (e, t) {
                                                  var n = t || {};
                                                  o(), u.removeFailed(i.blobUri()), f(i.blobUri(), l(i, e, n)), r(l(i, e, n));
                                              },
                                              function (e) {
                                                  e < 0 || 100 < e || (t = t || a()).progressBar.value(e);
                                              }
                                          );
                                      } catch (e) {
                                          r(l(i, e.message, {}));
                                      }
                                  }));
                            var i, n, a, t;
                        })
                    )
                );
            };
        return (
            !1 === A(s.handler) && (s.handler = n),
            {
                upload: function (e, t) {
                    return s.url || s.handler !== n
                        ? r(e, t)
                        : new _r(function (e) {
                              e([]);
                          });
                },
            }
        );
    }
    var Yy = 0,
        Gy = function (e) {
            return (
                e +
                Yy++ +
                ((t = function () {
                    return Math.round(4294967295 * Math.random()).toString(36);
                }),
                "s" + new Date().getTime().toString(36) + t() + t() + t())
            );
            var t;
        },
        Jy = function (s) {
            var n,
                o,
                e,
                t,
                r,
                i,
                a,
                u,
                c,
                l =
                    ((n = []),
                    (o = function (e) {
                        if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
                        var t = e.id || Gy("blobid"),
                            n = e.name || t;
                        return {
                            id: N(t),
                            name: N(n),
                            filename: N(n + "." + ({ "image/jpeg": "jpg", "image/jpg": "jpg", "image/gif": "gif", "image/png": "png" }[e.blob.type.toLowerCase()] || "dat")),
                            blob: N(e.blob),
                            base64: N(e.base64),
                            blobUri: N(e.blobUri || URL.createObjectURL(e.blob)),
                            uri: N(e.uri),
                        };
                    }),
                    {
                        create: function (e, t, n, r) {
                            if (q(e)) return o({ id: e, name: r, blob: t, base64: n });
                            if (_(e)) return o(e);
                            throw new Error("Unknown input type");
                        },
                        add: function (e) {
                            t(e.id()) || n.push(e);
                        },
                        get: (t = function (t) {
                            return e(function (e) {
                                return e.id() === t;
                            });
                        }),
                        getByUri: function (t) {
                            return e(function (e) {
                                return e.blobUri() === t;
                            });
                        },
                        getByData: function (t, n) {
                            return e(function (e) {
                                return e.base64() === t && e.blob().type === n;
                            });
                        },
                        findFirst: (e = function (e) {
                            return K(n, e).getOrUndefined();
                        }),
                        removeByUri: function (t) {
                            n = j(n, function (e) {
                                return e.blobUri() !== t || (URL.revokeObjectURL(e.blobUri()), !1);
                            });
                        },
                        destroy: function () {
                            $(n, function (e) {
                                URL.revokeObjectURL(e.blobUri());
                            }),
                                (n = []);
                        },
                    }),
                f =
                    ((a = {}),
                    (u = function (e, t) {
                        return { status: e, resultUri: t };
                    }),
                    {
                        hasBlobUri: (c = function (e) {
                            return e in a;
                        }),
                        getResultUri: function (e) {
                            var t = a[e];
                            return t ? t.resultUri : null;
                        },
                        isPending: function (e) {
                            return !!c(e) && 1 === a[e].status;
                        },
                        isUploaded: function (e) {
                            return !!c(e) && 2 === a[e].status;
                        },
                        markPending: function (e) {
                            a[e] = u(1, null);
                        },
                        markUploaded: function (e, t) {
                            a[e] = u(2, t);
                        },
                        removeFailed: function (e) {
                            delete a[e];
                        },
                        destroy: function () {
                            a = {};
                        },
                    }),
                d = [],
                m = function (t) {
                    return function (e) {
                        return s.selection ? t(e) : [];
                    };
                },
                p = function (e, t, n) {
                    for (var r = 0; -1 !== (r = e.indexOf(t, r)) && ((e = e.substring(0, r) + n + e.substr(r + t.length)), (r += n.length - t.length + 1)), -1 !== r; );
                    return e;
                },
                g = function (e, t, n) {
                    var r = 'src="' + n + '"' + (n === vt.transparentSrc ? ' data-mce-placeholder="1"' : "");
                    return (e = p(e, 'src="' + t + '"', r)), (e = p(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"'));
                },
                h = function (t, n) {
                    $(s.undoManager.data, function (e) {
                        "fragmented" === e.type
                            ? (e.fragments = F(e.fragments, function (e) {
                                  return g(e, t, n);
                              }))
                            : (e.content = g(e.content, t, n));
                    });
                },
                v = function () {
                    return s.notificationManager.open({ text: s.translate("Image uploading..."), type: "info", timeout: -1, progressBar: !0 });
                },
                y = function (e, t) {
                    var n,
                        r = s.convertURL(t, "src");
                    h(e.src, t), s.$(e).attr({ src: s.getParam("images_reuse_filename", !1, "boolean") ? (n = t) + (-1 === n.indexOf("?") ? "?" : "&") + new Date().getTime() : t, "data-mce-src": r });
                },
                b = function (n) {
                    return (
                        (r =
                            r ||
                            Xy(f, {
                                url: s.getParam("images_upload_url", "", "string"),
                                basePath: s.getParam("images_upload_base_path", "", "string"),
                                credentials: s.getParam("images_upload_credentials", !1, "boolean"),
                                handler: s.getParam("images_upload_handler", null, "function"),
                            })),
                        x().then(
                            m(function (u) {
                                var e = F(u, function (e) {
                                    return e.blobInfo;
                                });
                                return r.upload(e, v).then(
                                    m(function (e) {
                                        var a = [],
                                            t = F(e, function (e, t) {
                                                var n,
                                                    r,
                                                    o = u[t].blobInfo,
                                                    i = u[t].image;
                                                return (
                                                    e.status && s.getParam("images_replace_blob_uris", !0, "boolean")
                                                        ? (l.removeByUri(i.src), y(i, e.url))
                                                        : e.error &&
                                                          (e.error.options.remove && (h(i.getAttribute("src"), vt.transparentSrc), a.push(i)), (n = s), (r = e.error.message), Hy(n, Au.translate(["Failed to upload image: {0}", r]))),
                                                    { element: i, status: e.status, uploadUri: e.url, blobInfo: o }
                                                );
                                            });
                                        return (
                                            0 < a.length &&
                                                (xv(s)
                                                    ? console.error("Removing images on failed uploads is currently unsupported for RTC")
                                                    : s.undoManager.transact(function () {
                                                          $(a, function (e) {
                                                              s.dom.remove(e), l.removeByUri(e.src);
                                                          });
                                                      })),
                                            n && n(t),
                                            t
                                        );
                                    })
                                );
                            })
                        )
                    );
                },
                C = function (e) {
                    if (mc(s)) return b(e);
                },
                w = function (t) {
                    return (
                        !1 !==
                            G(d, function (e) {
                                return e(t);
                            }) &&
                        (0 !== t.getAttribute("src").indexOf("data:") || s.getParam("images_dataimg_filter", k, "function")(t))
                    );
                },
                x = function () {
                    return (i = i || jv(f, l)).findAll(s.getBody(), w).then(
                        m(function (e) {
                            return (
                                (e = j(e, function (e) {
                                    return "string" != typeof e || (Hy(s, e), !1);
                                })),
                                $(e, function (e) {
                                    h(e.image.src, e.blobInfo.blobUri()), (e.image.src = e.blobInfo.blobUri()), e.image.removeAttribute("data-mce-src");
                                }),
                                e
                            );
                        })
                    );
                },
                S = function (e) {
                    return e.replace(/src="(blob:[^"]+)"/g, function (e, n) {
                        var t = f.getResultUri(n);
                        if (t) return 'src="' + t + '"';
                        var r = l.getByUri(n);
                        return (r =
                            r ||
                            W(
                                s.editorManager.get(),
                                function (e, t) {
                                    return e || (t.editorUpload && t.editorUpload.blobCache.getByUri(n));
                                },
                                null
                            ))
                            ? 'src="data:' + r.blob().type + ";base64," + r.base64() + '"'
                            : e;
                    });
                };
            return (
                s.on("SetContent", function () {
                    (mc(s) ? C : x)();
                }),
                s.on("RawSaveContent", function (e) {
                    e.content = S(e.content);
                }),
                s.on("GetContent", function (e) {
                    e.source_view || "raw" === e.format || (e.content = S(e.content));
                }),
                s.on("PostRender", function () {
                    s.parser.addNodeFilter("img", function (e) {
                        $(e, function (e) {
                            var t,
                                n = e.attr("src");
                            l.getByUri(n) || ((t = f.getResultUri(n)) && e.attr("src", t));
                        });
                    });
                }),
                {
                    blobCache: l,
                    addFilter: function (e) {
                        d.push(e);
                    },
                    uploadImages: b,
                    uploadImagesAuto: C,
                    scanForImages: x,
                    destroy: function () {
                        l.destroy(), f.destroy(), (i = r = null);
                    },
                }
            );
        },
        Qy = function (r, e, t, n) {
            var o = ne(t.get()),
                i = {},
                a = {},
                u = j(uf(r.dom, e), function (e) {
                    return 1 === e.nodeType && !e.getAttribute("data-mce-bogus");
                });
            oe(n, function (e, n) {
                xt.each(u, function (t) {
                    return r.formatter.matchNode(t, n, {}, e.similar)
                        ? (-1 === o.indexOf(n) &&
                              ($(e.callbacks, function (e) {
                                  e(!0, { node: t, format: n, parents: u });
                              }),
                              (i[n] = e.callbacks)),
                          (a[n] = e.callbacks),
                          !1)
                        : !Vg(r, t, n) && void 0;
                });
            });
            var s = Zy(t.get(), a, e, u);
            t.set(xe(xe({}, i), s));
        },
        Zy = function (e, n, r, o) {
            return ce(e, function (e, t) {
                return (
                    !!me(n, t) ||
                    ($(e, function (e) {
                        e(!1, { node: r, format: t, parents: o });
                    }),
                    !1)
                );
            }).t;
        },
        eb = function (e, o, i, a, t) {
            var n, r, u, s, c, l, f, d;
            return (
                null === o.get() &&
                    ((r = e),
                    (u = ku({})),
                    (n = o).set({}),
                    r.on("NodeChange", function (e) {
                        Qy(r, e.element, u, n.get());
                    })),
                (c = i),
                (l = a),
                (f = t),
                (d = (s = o).get()),
                $(c.split(","), function (e) {
                    d[e] || (d[e] = { similar: f, callbacks: [] }), d[e].callbacks.push(l);
                }),
                s.set(d),
                {
                    unbind: function () {
                        return (
                            (t = i),
                            (n = a),
                            (r = (e = o).get()),
                            $(t.split(","), function (e) {
                                (r[e].callbacks = j(r[e].callbacks, function (e) {
                                    return e !== n;
                                })),
                                    0 === r[e].callbacks.length && delete r[e];
                            }),
                            void e.set(r)
                        );
                        var e, t, n, r;
                    },
                }
            );
        };
    function tb(e) {
        var r,
            t,
            n = {},
            o = function (e, t) {
                e &&
                    ("string" != typeof e
                        ? xt.each(e, function (e, t) {
                              o(t, e);
                          })
                        : (S(t) || (t = [t]),
                          xt.each(t, function (e) {
                              "undefined" == typeof e.deep && (e.deep = !e.selector),
                                  "undefined" == typeof e.split && (e.split = !e.selector || e.inline),
                                  "undefined" == typeof e.remove && e.selector && !e.inline && (e.remove = "none"),
                                  e.selector && e.inline && ((e.mixed = !0), (e.block_expand = !0)),
                                  "string" == typeof e.classes && (e.classes = e.classes.split(/\s+/));
                          }),
                          (n[e] = t)));
            };
        return (
            o(
                ((r = e.dom),
                (t = {
                    valigntop: [{ selector: "td,th", styles: { verticalAlign: "top" } }],
                    valignmiddle: [{ selector: "td,th", styles: { verticalAlign: "middle" } }],
                    valignbottom: [{ selector: "td,th", styles: { verticalAlign: "bottom" } }],
                    alignleft: [
                        { selector: "figure.image", collapsed: !1, classes: "align-left", ceFalseOverride: !0, preview: "font-family font-size" },
                        { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "left" }, inherit: !1, preview: !1, defaultBlock: "div" },
                        { selector: "img,table", collapsed: !1, styles: { float: "left" }, preview: "font-family font-size" },
                    ],
                    aligncenter: [
                        { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "center" }, inherit: !1, preview: "font-family font-size", defaultBlock: "div" },
                        { selector: "figure.image", collapsed: !1, classes: "align-center", ceFalseOverride: !0, preview: "font-family font-size" },
                        { selector: "img", collapsed: !1, styles: { display: "block", marginLeft: "auto", marginRight: "auto" }, preview: !1 },
                        { selector: "table", collapsed: !1, styles: { marginLeft: "auto", marginRight: "auto" }, preview: "font-family font-size" },
                    ],
                    alignright: [
                        { selector: "figure.image", collapsed: !1, classes: "align-right", ceFalseOverride: !0, preview: "font-family font-size" },
                        { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "right" }, inherit: !1, preview: "font-family font-size", defaultBlock: "div" },
                        { selector: "img,table", collapsed: !1, styles: { float: "right" }, preview: "font-family font-size" },
                    ],
                    alignjustify: [{ selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "justify" }, inherit: !1, defaultBlock: "div", preview: "font-family font-size" }],
                    bold: [
                        { inline: "strong", remove: "all", preserve_attributes: ["class", "style"] },
                        { inline: "span", styles: { fontWeight: "bold" } },
                        { inline: "b", remove: "all", preserve_attributes: ["class", "style"] },
                    ],
                    italic: [
                        { inline: "em", remove: "all", preserve_attributes: ["class", "style"] },
                        { inline: "span", styles: { fontStyle: "italic" } },
                        { inline: "i", remove: "all", preserve_attributes: ["class", "style"] },
                    ],
                    underline: [
                        { inline: "span", styles: { textDecoration: "underline" }, exact: !0 },
                        { inline: "u", remove: "all", preserve_attributes: ["class", "style"] },
                    ],
                    strikethrough: [
                        { inline: "span", styles: { textDecoration: "line-through" }, exact: !0 },
                        { inline: "strike", remove: "all", preserve_attributes: ["class", "style"] },
                    ],
                    forecolor: { inline: "span", styles: { color: "%value" }, links: !0, remove_similar: !0, clear_child_styles: !0 },
                    hilitecolor: { inline: "span", styles: { backgroundColor: "%value" }, links: !0, remove_similar: !0, clear_child_styles: !0 },
                    fontname: { inline: "span", toggle: !1, styles: { fontFamily: "%value" }, clear_child_styles: !0 },
                    fontsize: { inline: "span", toggle: !1, styles: { fontSize: "%value" }, clear_child_styles: !0 },
                    lineheight: { selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div", defaultBlock: "p", styles: { lineHeight: "%value" } },
                    fontsize_class: { inline: "span", attributes: { class: "%value" } },
                    blockquote: { block: "blockquote", wrapper: !0, remove: "all" },
                    subscript: { inline: "sub" },
                    superscript: { inline: "sup" },
                    code: { inline: "code" },
                    link: {
                        inline: "a",
                        selector: "a",
                        remove: "all",
                        split: !0,
                        deep: !0,
                        onmatch: function (e, t, n) {
                            return Nn(e) && e.hasAttribute("href");
                        },
                        onformat: function (n, e, t) {
                            xt.each(t, function (e, t) {
                                r.setAttrib(n, t, e);
                            });
                        },
                    },
                    removeformat: [
                        { selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins", remove: "all", split: !0, expand: !1, block_expand: !0, deep: !0 },
                        { selector: "span", attributes: ["style", "class"], remove: "empty", split: !0, expand: !1, deep: !0 },
                        { selector: "*", attributes: ["style", "class"], split: !1, expand: !1, deep: !0 },
                    ],
                }),
                xt.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/), function (e) {
                    t[e] = { block: e, remove: "all" };
                }),
                t)
            ),
            o(e.getParam("formats")),
            {
                get: function (e) {
                    return e ? n[e] : n;
                },
                has: function (e) {
                    return me(n, e);
                },
                register: o,
                unregister: function (e) {
                    return e && n[e] && delete n[e], n;
                },
            }
        );
    }
    var nb,
        rb,
        ob = xt.each,
        ib = bu.DOM,
        ab = function (e, t) {
            var n,
                o,
                r,
                m = (t && t.schema) || pi({}),
                p = function (e) {
                    o = "string" == typeof e ? { name: e, classes: [], attrs: {} } : e;
                    var t,
                        n,
                        r = ib.create(o.name);
                    return (t = r), (n = o).classes.length && ib.addClass(t, n.classes.join(" ")), ib.setAttribs(t, n.attrs), r;
                },
                g = function (n, e, t) {
                    var r,
                        o,
                        i,
                        a,
                        u,
                        s,
                        c,
                        l = 0 < e.length && e[0],
                        f = l && l.name,
                        d = ((a = f), (u = "string" != typeof (i = n) ? i.nodeName.toLowerCase() : i), (s = m.getElementRule(u)), !(!(c = s && s.parentsRequired) || !c.length) && (a && -1 !== xt.inArray(c, a) ? a : c[0]));
                    if (d) f === d ? ((o = e[0]), (e = e.slice(1))) : (o = d);
                    else if (l) (o = e[0]), (e = e.slice(1));
                    else if (!t) return n;
                    return (
                        o && (r = p(o)).appendChild(n),
                        t &&
                            (r || (r = ib.create("div")).appendChild(n),
                            xt.each(t, function (e) {
                                var t = p(e);
                                r.insertBefore(t, n);
                            })),
                        g(r, e, o && o.siblings)
                    );
                };
            return e && e.length ? ((o = e[0]), (n = p(o)), (r = ib.create("div")).appendChild(g(n, e.slice(1), o.siblings)), r) : "";
        },
        ub = function (e) {
            var t,
                a = { classes: [], attrs: {} };
            return (
                "*" !== (e = a.selector = xt.trim(e)) &&
                    (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function (e, t, n, r, o) {
                        switch (t) {
                            case "#":
                                a.attrs.id = n;
                                break;
                            case ".":
                                a.classes.push(n);
                                break;
                            case ":":
                                -1 !== xt.inArray("checked disabled enabled read-only required".split(" "), n) && (a.attrs[n] = n);
                        }
                        var i;
                        return "[" !== r || ((i = o.match(/([\w\-]+)(?:\=\"([^\"]+))?/)) && (a.attrs[i[1]] = i[2])), "";
                    })),
                (a.name = t || "div"),
                a
            );
        },
        sb = function (n, e) {
            var t,
                r,
                o,
                i = "",
                a = ((o = n.getParam("preview_styles", "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow")), q(o) ? o : "");
            if ("" === a) return "";
            var u = function (e) {
                return e.replace(/%(\w+)/g, "");
            };
            if ("string" == typeof e) {
                if (!(e = n.formatter.get(e))) return;
                e = e[0];
            }
            if ("preview" in e) {
                var s = de(e, "preview");
                if (s.is(!1)) return "";
                a = s.getOr(a);
            }
            t = e.block || e.inline || "span";
            var c,
                l =
                    (c = e.selector) && "string" == typeof c
                        ? ((c = (c = c.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1")),
                          xt
                              .map(c.split(/(?:>|\s+(?![^\[\]]+\]))/), function (e) {
                                  var t = xt.map(e.split(/(?:~\+|~|\+)/), ub),
                                      n = t.pop();
                                  return t.length && (n.siblings = t), n;
                              })
                              .reverse())
                        : [],
                f = l.length ? (l[0].name || (l[0].name = t), (t = e.selector), ab(l, n)) : ab([t], n),
                d = ib.select(t, f)[0] || f.firstChild;
            return (
                ob(e.styles, function (e, t) {
                    var n = u(e);
                    n && ib.setStyle(d, t, n);
                }),
                ob(e.attributes, function (e, t) {
                    var n = u(e);
                    n && ib.setAttrib(d, t, n);
                }),
                ob(e.classes, function (e) {
                    var t = u(e);
                    ib.hasClass(d, t) || ib.addClass(d, t);
                }),
                n.fire("PreviewFormats"),
                ib.setStyles(f, { position: "absolute", left: -65535 }),
                n.getBody().appendChild(f),
                (r = ib.getStyle(n.getBody(), "fontSize", !0)),
                (r = /px$/.test(r) ? parseInt(r, 10) : 0),
                ob(a.split(" "), function (e) {
                    var t = ib.getStyle(d, e, !0);
                    if (
                        !(
                            ("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && ((t = ib.getStyle(n.getBody(), e, !0)), "#ffffff" === ib.toHex(t).toLowerCase())) ||
                            ("color" === e && "#000000" === ib.toHex(t).toLowerCase())
                        )
                    ) {
                        if ("font-size" === e && /em|%$/.test(t)) {
                            if (0 === r) return;
                            t = (parseFloat(t) / (/%$/.test(t) ? 100 : 1)) * r + "px";
                        }
                        "border" === e && t && (i += "padding:0 2px;"), (i += e + ":" + t + ";");
                    }
                }),
                n.fire("AfterPreviewFormats"),
                ib.remove(f),
                i
            );
        },
        cb = function (s) {
            var e = tb(s),
                t = ku(null);
            return (
                (function (e) {
                    e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");
                    for (var t = 1; t <= 6; t++) e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
                    e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"]);
                })(s),
                sh(s),
                {
                    get: e.get,
                    has: e.has,
                    register: e.register,
                    unregister: e.unregister,
                    apply: function (e, t, n) {
                        var r, o, i;
                        (r = e), (o = t), (i = n), Nv(s).formatter.apply(r, o, i);
                    },
                    remove: function (e, t, n, r) {
                        var o, i, a, u;
                        (o = e), (i = t), (a = n), (u = r), Nv(s).formatter.remove(o, i, a, u);
                    },
                    toggle: function (e, t, n) {
                        var r, o, i;
                        (r = e), (o = t), (i = n), Nv(s).formatter.toggle(r, o, i);
                    },
                    match: E(Xg, s),
                    matchAll: E(Yg, s),
                    matchNode: E(Kg, s),
                    canApply: E(Gg, s),
                    formatChanged: E(eb, s, t),
                    getCssText: E(sb, s),
                }
            );
        },
        lb = function (n, r, o) {
            var i = ku(!1),
                a = function (e) {
                    gv(r, !1, o), r.add({}, e);
                };
            n.on("init", function () {
                r.add();
            }),
                n.on("BeforeExecCommand", function (e) {
                    var t = e.command.toLowerCase();
                    "undo" !== t && "redo" !== t && "mcerepaint" !== t && (hv(r, o), r.beforeChange());
                }),
                n.on("ExecCommand", function (e) {
                    var t = e.command.toLowerCase();
                    "undo" !== t && "redo" !== t && "mcerepaint" !== t && a(e);
                }),
                n.on("ObjectResizeStart cut", function () {
                    r.beforeChange();
                }),
                n.on("SaveContent ObjectResized blur", a),
                n.on("dragend", a),
                n.on("keyup", function (e) {
                    var t = e.keyCode;
                    e.isDefaultPrevented() ||
                        (((33 <= t && t <= 36) || (37 <= t && t <= 40) || 45 === t || e.ctrlKey) && (a(), n.nodeChanged()),
                        (46 !== t && 8 !== t) || n.nodeChanged(),
                        i.get() && r.typing && !1 === mv(cv(n), r.data[0]) && (!1 === n.isDirty() && (n.setDirty(!0), n.fire("change", { level: r.data[0], lastLevel: null })), n.fire("TypingUndo"), i.set(!1), n.nodeChanged()));
                }),
                n.on("keydown", function (e) {
                    var t,
                        n = e.keyCode;
                    e.isDefaultPrevented() ||
                        ((33 <= n && n <= 36) || (37 <= n && n <= 40) || 45 === n
                            ? r.typing && a(e)
                            : ((t = (e.ctrlKey && !e.altKey) || e.metaKey), !(n < 16 || 20 < n) || 224 === n || 91 === n || r.typing || t || (r.beforeChange(), gv(r, !0, o), r.add({}, e), i.set(!0))));
                }),
                n.on("mousedown", function (e) {
                    r.typing && a(e);
                });
            n.on("input", function (e) {
                var t, n;
                e.inputType && ("insertReplacementText" === e.inputType || ("insertText" === (n = e).inputType && null === n.data) || "insertFromPaste" === (t = e).inputType || "insertFromDrop" === t.inputType) && a(e);
            }),
                n.on("AddUndo Undo Redo ClearUndos", function (e) {
                    e.isDefaultPrevented() || n.nodeChanged();
                });
        },
        fb = function (s) {
            var e,
                c = ku(U.none()),
                l = ku(0),
                f = ku(0),
                d = {
                    data: [],
                    typing: !1,
                    beforeChange: function () {
                        var e, t;
                        (e = l), (t = c), Nv(s).undoManager.beforeChange(e, t);
                    },
                    add: function (e, t) {
                        return (n = d), (r = f), (o = l), (i = c), (a = e), (u = t), Nv(s).undoManager.addUndoLevel(n, r, o, i, a, u);
                        var n, r, o, i, a, u;
                    },
                    undo: function () {
                        return (e = d), (t = l), (n = f), Nv(s).undoManager.undo(e, t, n);
                        var e, t, n;
                    },
                    redo: function () {
                        return (e = s), (t = f), (n = d.data), Nv(e).undoManager.redo(t, n);
                        var e, t, n;
                    },
                    clear: function () {
                        var e, t;
                        (e = d), (t = f), Nv(s).undoManager.clear(e, t);
                    },
                    reset: function () {
                        var e;
                        (e = d), Nv(s).undoManager.reset(e);
                    },
                    hasUndo: function () {
                        return (e = d), (t = f), Nv(s).undoManager.hasUndo(e, t);
                        var e, t;
                    },
                    hasRedo: function () {
                        return (e = d), (t = f), Nv(s).undoManager.hasRedo(e, t);
                        var e, t;
                    },
                    transact: function (e) {
                        return (t = d), (n = l), (r = e), Nv(s).undoManager.transact(t, n, r);
                        var t, n, r;
                    },
                    ignore: function (e) {
                        var t, n;
                        (t = l), (n = e), Nv(s).undoManager.ignore(t, n);
                    },
                    extra: function (e, t) {
                        var n, r, o, i;
                        (n = d), (r = f), (o = e), (i = t), Nv(s).undoManager.extra(n, r, o, i);
                    },
                };
            return xv(s) || lb(s, d, l), (e = s).addShortcut("meta+z", "", "Undo"), e.addShortcut("meta+y,meta+shift+z", "", "Redo"), d;
        },
        db = [9, 27, Gf.HOME, Gf.END, 19, 20, 44, 144, 145, 33, 34, 45, 16, 17, 18, 91, 92, 93, Gf.DOWN, Gf.UP, Gf.LEFT, Gf.RIGHT].concat(vt.browser.isFirefox() ? [224] : []),
        mb = "data-mce-placeholder",
        pb = function (e) {
            return "keydown" === e.type || "keyup" === e.type;
        },
        gb = function (e) {
            var t = e.keyCode;
            return t === Gf.BACKSPACE || t === Gf.DELETE;
        },
        hb = function (a) {
            var e,
                u = a.dom,
                s = fc(a),
                c = (e = a).getParam("placeholder", sc.getAttrib(e.getElement(), "placeholder"), "string"),
                l = function (e, t) {
                    var n, r, o, i;
                    !(function (e) {
                        if (pb(e)) {
                            var t = e.keyCode;
                            return !gb(e) && (Gf.metaKeyPressed(e) || e.altKey || (112 <= t && t <= 123) || I(db, t));
                        }
                        return !1;
                    })(e) &&
                        ((n = a.getBody()),
                        (r =
                            !(pb((o = e)) && !(gb(o) || ("keyup" === o.type && 229 === o.keyCode))) &&
                            (function (e, t, n) {
                                if (Uo(Nt.fromDom(t), !1)) {
                                    var r = "" === n,
                                        o = t.firstElementChild;
                                    return !o || (!e.getStyle(t.firstElementChild, "padding-left") && !e.getStyle(t.firstElementChild, "padding-right") && (r ? !e.isBlock(o) : n === o.nodeName.toLowerCase()));
                                }
                                return !1;
                            })(u, n, s)),
                        (("" !== u.getAttrib(n, mb)) === r && !t) ||
                            (u.setAttrib(n, mb, r ? c : null), u.setAttrib(n, "aria-placeholder", r ? c : null), (i = r), a.fire("PlaceholderToggle", { state: i }), a.on(r ? "keydown" : "keyup", l), a.off(r ? "keyup" : "keydown", l)));
                };
            c &&
                a.on("init", function (e) {
                    l(e, !0),
                        a.on("change SetContent ExecCommand", l),
                        a.on("paste", function (e) {
                            return Fr.setEditorTimeout(a, function () {
                                return l(e);
                            });
                        });
                });
        },
        vb = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
        yb = function (e, t) {
            return kt(Nt.fromDom(t), e.getParam("inline_boundaries_selector", "a[href],code,.mce-annotation", "string"));
        },
        bb = function (e) {
            return "rtl" === bu.DOM.getStyle(e, "direction", !0) || ((t = e.textContent), vb.test(t));
            var t;
        },
        Cb = function (e, t, n) {
            var r,
                o,
                i,
                a = ((r = e), (o = t), (i = n), j(bu.DOM.getParents(i.container(), "*", o), r));
            return U.from(a[a.length - 1]);
        },
        wb = function (e, t) {
            if (!t) return t;
            var n = t.container(),
                r = t.offset();
            return e
                ? fo(n)
                    ? On(n.nextSibling)
                        ? Us(n.nextSibling, 0)
                        : Us.after(n)
                    : go(t)
                    ? Us(n, r + 1)
                    : t
                : fo(n)
                ? On(n.previousSibling)
                    ? Us(n.previousSibling, n.previousSibling.data.length)
                    : Us.before(n)
                : ho(t)
                ? Us(n, r - 1)
                : t;
        },
        xb = E(wb, !0),
        Sb = E(wb, !1),
        Nb = function (e, t) {
            return At(e, t)
                ? Sr(
                      t,
                      function (e) {
                          return Jr(e) || Zr(e);
                      },
                      ((n = e),
                      function (e) {
                          return Rt(n, Nt.fromDom(e.dom.parentNode));
                      })
                  )
                : U.none();
            var n;
        },
        Eb = function (e) {
            var t, n, r;
            e.dom.isEmpty(e.getBody()) && (e.setContent(""), (n = (t = e).getBody()), (r = n.firstChild && t.dom.isBlock(n.firstChild) ? n.firstChild : n), t.selection.setCursorLocation(r, 0));
        },
        kb = function (e, t) {
            return { from: e, to: t };
        },
        _b = function (e, t) {
            var n = Nt.fromDom(e),
                r = Nt.fromDom(t.container());
            return Nb(n, r).map(function (e) {
                return { block: e, position: t };
            });
        },
        Rb = function (o, i, e) {
            var t = _b(o, Us.fromRangeStart(e)),
                n = t.bind(function (e) {
                    return kl(i, o, e.position).bind(function (e) {
                        return _b(o, e).map(function (e) {
                            return (
                                (t = o),
                                (n = i),
                                In((r = e).position.getNode()) && !1 === Uo(r.block)
                                    ? Tl(!1, r.block.dom)
                                          .bind(function (e) {
                                              return e.isEqual(r.position)
                                                  ? kl(n, t, e).bind(function (e) {
                                                        return _b(t, e);
                                                    })
                                                  : U.some(r);
                                          })
                                          .getOr(r)
                                    : r
                            );
                            var t, n, r;
                        });
                    });
                });
            return as(t, n, kb).filter(function (e) {
                return (
                    !1 === Rt((r = e).from.block, r.to.block) &&
                    jt((n = e).from.block)
                        .bind(function (t) {
                            return jt(n.to.block).filter(function (e) {
                                return Rt(t, e);
                            });
                        })
                        .isSome() &&
                    !1 === Un((t = e).from.block.dom) &&
                    !1 === Un(t.to.block.dom)
                );
                var t, n, r;
            });
        },
        Tb = function (e) {
            var t,
                n =
                    ((t = Wt(e)),
                    X(t, Xr).fold(
                        function () {
                            return t;
                        },
                        function (e) {
                            return t.slice(0, e);
                        }
                    ));
            return $(n, ln), n;
        },
        Ab = function (e, t) {
            var n = up(t, e);
            return K(n.reverse(), function (e) {
                return Uo(e);
            }).each(ln);
        },
        Db = function (e, t, n, r) {
            if (Uo(n)) return rp(n), Ol(n.dom);
            0 ===
                j(qt(r), function (e) {
                    return !Uo(e);
                }).length &&
                Uo(t) &&
                rn(r, Nt.fromTag("br"));
            var o = Dl(n.dom, Us.before(r.dom));
            return (
                $(Tb(t), function (e) {
                    rn(r, e);
                }),
                Ab(e, t),
                o
            );
        },
        Ob = function (e, t, n) {
            if (Uo(n)) return ln(n), Uo(t) && rp(t), Ol(t.dom);
            var r = Bl(n.dom);
            return (
                $(Tb(t), function (e) {
                    un(n, e);
                }),
                Ab(e, t),
                r
            );
        },
        Bb = function (e, t) {
            return At(t, e) ? ((n = up(e, t)), U.from(n[n.length - 1])) : U.none();
            var n;
        },
        Pb = function (e, t) {
            Tl(e, t.dom)
                .map(function (e) {
                    return e.getNode();
                })
                .map(Nt.fromDom)
                .filter(Gr)
                .each(ln);
        },
        Lb = function (e, t, n) {
            return Pb(!0, t), Pb(!1, n), Bb(t, n).fold(E(Ob, e, t, n), E(Db, e, t, n));
        },
        Ib = function (e, t, n, r) {
            return t ? Lb(e, r, n) : Lb(e, n, r);
        },
        Mb = function (t, n) {
            var e,
                r,
                o,
                i = Nt.fromDom(t.getBody()),
                a =
                    ((e = i.dom),
                    (r = n),
                    ((o = t.selection.getRng()).collapsed ? Rb(e, r, o) : U.none()).bind(function (e) {
                        return Ib(i, n, e.from.block, e.to.block);
                    }));
            return (
                a.each(function (e) {
                    t.selection.setRng(e.toRange());
                }),
                a.isSome()
            );
        },
        Fb = function (e, t) {
            var n = Nt.fromDom(t),
                r = E(Rt, e);
            return xr(n, to, r).isSome();
        },
        Ub = function (e, t) {
            var n,
                r,
                o = Dl(e.dom, Us.fromRangeStart(t)).isNone(),
                i = Al(e.dom, Us.fromRangeEnd(t)).isNone();
            return !(Fb((n = e), (r = t).startContainer) || Fb(n, r.endContainer)) && o && i;
        },
        zb = function (e) {
            var n,
                r,
                o,
                t,
                i = Nt.fromDom(e.getBody()),
                a = e.selection.getRng();
            return Ub(i, a)
                ? ((t = e).setContent(""), t.selection.setCursorLocation(), !0)
                : ((n = i),
                  (r = e.selection),
                  (o = r.getRng()),
                  as(Nb(n, Nt.fromDom(o.startContainer)), Nb(n, Nt.fromDom(o.endContainer)), function (e, t) {
                      return (
                          !1 === Rt(e, t) &&
                          (o.deleteContents(),
                          Ib(n, !0, e, t).each(function (e) {
                              r.setRng(e.toRange());
                          }),
                          !0)
                      );
                  }).getOr(!1));
        },
        jb = function (e, t) {
            return !e.selection.isCollapsed() && zb(e);
        },
        Hb = Fn,
        Vb = Un,
        qb = function (e, t, n, r, o) {
            return U.from(t._selectionOverrides.showCaret(e, n, r, o));
        },
        $b = function (e, t) {
            var n, r;
            return e.fire("BeforeObjectSelected", { target: t }).isDefaultPrevented() ? U.none() : U.some(((r = (n = t).ownerDocument.createRange()).selectNode(n), r));
        },
        Wb = function (e, t, n) {
            var r = ol(1, e.getBody(), t),
                o = Us.fromRangeStart(r),
                i = o.getNode();
            if (zc(i)) return qb(1, e, i, !o.isAtEnd(), !1);
            var a = o.getNode(!0);
            if (zc(a)) return qb(1, e, a, !1, !1);
            var u = e.dom.getParent(o.getNode(), function (e) {
                return Vb(e) || Hb(e);
            });
            return zc(u) ? qb(1, e, u, !1, n) : U.none();
        },
        Kb = function (e, t, n) {
            return t.collapsed ? Wb(e, t, n).getOr(t) : t;
        },
        Xb = function (e) {
            return ep(e) || Gm(e);
        },
        Yb = function (e) {
            return tp(e) || Jm(e);
        },
        Gb = function (n, r, e, t, o, i) {
            var a, u;
            return (
                qb(t, n, i.getNode(!o), o, !0).each(function (e) {
                    var t;
                    r.collapsed ? ((t = r.cloneRange()), o ? t.setEnd(e.startContainer, e.startOffset) : t.setStart(e.endContainer, e.endOffset), t.deleteContents()) : r.deleteContents(), n.selection.setRng(e);
                }),
                (a = n.dom),
                On((u = e)) && 0 === u.data.length && a.remove(u),
                !0
            );
        },
        Jb = function (e, t) {
            var n = e.selection.getRng();
            if (!On(n.commonAncestorContainer)) return !1;
            var r = t ? Ms.Forwards : Ms.Backwards,
                o = wl(e.getBody()),
                i = E(sl, t ? o.next : o.prev),
                a = t ? Xb : Yb,
                u = al(r, e.getBody(), n),
                s = wb(t, i(u));
            if (!s || !cl(u, s)) return !1;
            if (a(s)) return Gb(e, n, u.getNode(), r, t, s);
            var c = i(s);
            return !!(c && a(c) && cl(s, c)) && Gb(e, n, u.getNode(), r, t, c);
        },
        Qb = gr([{ remove: ["element"] }, { moveToElement: ["element"] }, { moveToPosition: ["position"] }]),
        Zb = function (e, t, n, r) {
            var o = r.getNode(!1 === t);
            return Nb(Nt.fromDom(e), Nt.fromDom(n.getNode()))
                .map(function (e) {
                    return Uo(e) ? Qb.remove(e.dom) : Qb.moveToElement(o);
                })
                .orThunk(function () {
                    return U.some(Qb.moveToElement(o));
                });
        },
        eC = function (u, s, c) {
            return kl(s, u, c).bind(function (e) {
                return (
                    (a = e.getNode()),
                    to(Nt.fromDom(a)) || Zr(Nt.fromDom(a))
                        ? U.none()
                        : ((t = u),
                          (o = e),
                          (i = function (e) {
                              return Yr(Nt.fromDom(e)) && !Qc(r, o, t);
                          }),
                          il(!(n = s), (r = c)).fold(function () {
                              return il(n, o).fold(p, i);
                          }, i)
                              ? U.none()
                              : (s && Un(e.getNode())) || (!1 === s && Un(e.getNode(!0)))
                              ? Zb(u, s, c, e)
                              : (s && tp(c)) || (!1 === s && ep(c))
                              ? U.some(Qb.moveToPosition(e))
                              : U.none())
                );
                var t, n, r, o, i, a;
            });
        },
        tC = function (r, e, o) {
            return (
                (i = e),
                (a = o.getNode(!1 === i)),
                (u = i ? "after" : "before"),
                Nn(a) && a.getAttribute("data-mce-caret") === u
                    ? ((t = e),
                      (n = o.getNode(!1 === e)),
                      (t && Un(n.nextSibling) ? U.some(Qb.moveToElement(n.nextSibling)) : !1 === t && Un(n.previousSibling) ? U.some(Qb.moveToElement(n.previousSibling)) : U.none()).fold(function () {
                          return eC(r, e, o);
                      }, U.some))
                    : eC(r, e, o).bind(function (e) {
                          return (
                              (t = r),
                              (n = o),
                              e.fold(
                                  function (e) {
                                      return U.some(Qb.remove(e));
                                  },
                                  function (e) {
                                      return U.some(Qb.moveToElement(e));
                                  },
                                  function (e) {
                                      return Qc(n, e, t) ? U.none() : U.some(Qb.moveToPosition(e));
                                  }
                              )
                          );
                          var t, n;
                      })
            );
            var t, n, i, a, u;
        },
        nC = function (e, t) {
            return U.from(Xf(e.getBody(), t));
        },
        rC = function (a, u) {
            var e = a.selection.getNode();
            return nC(a, e)
                .filter(Un)
                .fold(function () {
                    return (
                        (e = a.getBody()),
                        (t = u),
                        (n = a.selection.getRng()),
                        (r = ol(t ? 1 : -1, e, n)),
                        (o = Us.fromRangeStart(r)),
                        (i = Nt.fromDom(e)),
                        (!1 === t && tp(o)
                            ? U.some(Qb.remove(o.getNode(!0)))
                            : t && ep(o)
                            ? U.some(Qb.remove(o.getNode()))
                            : !1 === t && ep(o) && bp(i, o)
                            ? Cp(i, o).map(function (e) {
                                  return Qb.remove(e.getNode());
                              })
                            : t && tp(o) && yp(i, o)
                            ? wp(i, o).map(function (e) {
                                  return Qb.remove(e.getNode());
                              })
                            : tC(e, t, o)
                        ).exists(function (e) {
                            return e.fold(
                                function (e) {
                                    return o._selectionOverrides.hideFakeCaret(), Gp(o, i, Nt.fromDom(e)), !0;
                                },
                                ((r = i = u),
                                function (e) {
                                    var t = r ? Us.before(e) : Us.after(e);
                                    return n.selection.setRng(t.toRange()), !0;
                                }),
                                ((t = n = o = a),
                                function (e) {
                                    return t.selection.setRng(e.toRange()), !0;
                                })
                            );
                            var t, n, r, o, i;
                        })
                    );
                    var e, t, n, r, o, i;
                }, k);
        },
        oC = function (t, n) {
            var e = t.selection.getNode();
            return (
                !!Un(e) &&
                nC(t, e.parentNode)
                    .filter(Un)
                    .fold(
                        function () {
                            var e;
                            return (e = Nt.fromDom(t.getBody())), $(qu(e, ".mce-offscreen-selection"), ln), Gp(t, n, Nt.fromDom(t.selection.getNode())), Eb(t), !0;
                        },
                        function () {
                            return !0;
                        }
                    )
            );
        },
        iC = function (e) {
            var t,
                n = e.dom,
                r = e.selection,
                o = Xf(e.getBody(), r.getNode());
            return Fn(o) && n.isBlock(o) && n.isEmpty(o) && ((t = n.create("br", { "data-mce-bogus": "1" })), n.setHTML(o, ""), o.appendChild(t), r.setRng(Us.before(t).toRange())), !0;
        },
        aC = function (e, t) {
            return (e.selection.isCollapsed() ? rC : oC)(e, t);
        },
        uC = function (e, t) {
            return (
                !!e.selection.isCollapsed() &&
                ((n = e),
                (r = t),
                (o = Us.fromRangeStart(n.selection.getRng())),
                kl(r, n.getBody(), o)
                    .filter(function (e) {
                        return (r ? Xm : Ym)(e);
                    })
                    .bind(function (e) {
                        return U.from(Zc(r ? 0 : -1, e));
                    })
                    .exists(function (e) {
                        return n.selection.select(e), !0;
                    }))
            );
            var n, r, o;
        },
        sC = On,
        cC = function (e) {
            return sC(e) && e.data[0] === io;
        },
        lC = function (e) {
            return sC(e) && e.data[e.data.length - 1] === io;
        },
        fC = function (e) {
            return e.ownerDocument.createTextNode(io);
        },
        dC = function (e, t) {
            return (e
                ? function (e) {
                      if (sC(e.previousSibling)) return lC(e.previousSibling) || e.previousSibling.appendData(io), e.previousSibling;
                      if (sC(e)) return cC(e) || e.insertData(0, io), e;
                      var t = fC(e);
                      return e.parentNode.insertBefore(t, e), t;
                  }
                : function (e) {
                      if (sC(e.nextSibling)) return cC(e.nextSibling) || e.nextSibling.insertData(0, io), e.nextSibling;
                      if (sC(e)) return lC(e) || e.appendData(io), e;
                      var t = fC(e);
                      return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t;
                  })(t);
        },
        mC = E(dC, !0),
        pC = E(dC, !1),
        gC = function (e, t) {
            return On(e.container()) ? dC(t, e.container()) : dC(t, e.getNode());
        },
        hC = function (e, t) {
            var n = t.get();
            return n && e.container() === n && fo(n);
        },
        vC = function (n, e) {
            return e.fold(
                function (e) {
                    Oc(n.get());
                    var t = mC(e);
                    return n.set(t), U.some(Us(t, t.length - 1));
                },
                function (e) {
                    return Ol(e).map(function (e) {
                        if (hC(e, n)) return Us(n.get(), 1);
                        Oc(n.get());
                        var t = gC(e, !0);
                        return n.set(t), Us(t, 1);
                    });
                },
                function (e) {
                    return Bl(e).map(function (e) {
                        if (hC(e, n)) return Us(n.get(), n.get().length - 1);
                        Oc(n.get());
                        var t = gC(e, !1);
                        return n.set(t), Us(t, t.length - 1);
                    });
                },
                function (e) {
                    Oc(n.get());
                    var t = pC(e);
                    return n.set(t), U.some(Us(t, 1));
                }
            );
        },
        yC = function (e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n].apply(null, t);
                if (r.isSome()) return r;
            }
            return U.none();
        },
        bC = gr([{ before: ["element"] }, { start: ["element"] }, { end: ["element"] }, { after: ["element"] }]),
        CC = function (e, t) {
            var n = Jc(t, e);
            return n || e;
        },
        wC = function (e, t, n) {
            var r = xb(n),
                o = CC(t, r.container());
            return Cb(e, o, r).fold(function () {
                return Al(o, r)
                    .bind(E(Cb, e, o))
                    .map(function (e) {
                        return bC.before(e);
                    });
            }, U.none);
        },
        xC = function (e, t) {
            return null === Il(e, t);
        },
        SC = function (e, t, n) {
            return Cb(e, t, n).filter(E(xC, t));
        },
        NC = function (e, t, n) {
            var r = Sb(n);
            return SC(e, t, r).bind(function (e) {
                return Dl(e, r).isNone() ? U.some(bC.start(e)) : U.none();
            });
        },
        EC = function (e, t, n) {
            var r = xb(n);
            return SC(e, t, r).bind(function (e) {
                return Al(e, r).isNone() ? U.some(bC.end(e)) : U.none();
            });
        },
        kC = function (e, t, n) {
            var r = Sb(n),
                o = CC(t, r.container());
            return Cb(e, o, r).fold(function () {
                return Dl(o, r)
                    .bind(E(Cb, e, o))
                    .map(function (e) {
                        return bC.after(e);
                    });
            }, U.none);
        },
        _C = function (e) {
            return !1 === bb(TC(e));
        },
        RC = function (e, t, n) {
            return yC([wC, NC, EC, kC], [e, t, n]).filter(_C);
        },
        TC = function (e) {
            return e.fold(o, o, o, o);
        },
        AC = function (e) {
            return e.fold(N("before"), N("start"), N("end"), N("after"));
        },
        DC = function (e) {
            return e.fold(bC.before, bC.before, bC.after, bC.after);
        },
        OC = function (e) {
            return e.fold(bC.start, bC.start, bC.end, bC.end);
        },
        BC = function (a, e, u, t, n, s) {
            return as(Cb(e, u, t), Cb(e, u, n), function (e, t) {
                return e !== t && ((r = t), (o = Jc(e, (n = u))), (i = Jc(r, n)), o && o === i) ? bC.after(a ? e : t) : s;
                var n, r, o, i;
            }).getOr(s);
        },
        PC = function (e, r) {
            return e.fold(k, function (e) {
                return (n = r), !(AC((t = e)) === AC(n) && TC(t) === TC(n));
                var t, n;
            });
        },
        LC = function (e, t) {
            return e ? t.fold(a(U.some, bC.start), U.none, a(U.some, bC.after), U.none) : t.fold(U.none, a(U.some, bC.before), U.none, a(U.some, bC.end));
        },
        IC = function (e, a, u, s) {
            var t = wb(e, s),
                c = RC(a, u, t);
            return RC(a, u, t)
                .bind(E(LC, e))
                .orThunk(function () {
                    return (
                        (n = a),
                        (r = u),
                        (o = c),
                        (i = wb((t = e), s)),
                        kl(t, r, i)
                            .map(E(wb, t))
                            .fold(
                                function () {
                                    return o.map(DC);
                                },
                                function (e) {
                                    return RC(n, r, e).map(E(BC, t, n, r, i, e)).filter(E(PC, o));
                                }
                            )
                            .filter(_C)
                    );
                    var t, n, r, o, i;
                });
        },
        MC =
            (E(IC, !1),
            E(IC, !0),
            function (e, t, n) {
                var r = e ? 1 : -1;
                return t.setRng(Us(n.container(), n.offset() + r).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0;
            }),
        FC = function (e, t) {
            var n = t.selection.getRng(),
                r = e ? Us.fromRangeEnd(n) : Us.fromRangeStart(n);
            return !!A(t.selection.getSel().modify) && (e && go(r) ? MC(!0, t.selection, r) : !(e || !ho(r)) && MC(!1, t.selection, r));
        },
        UC = function (e, t) {
            var n = e.dom.createRng();
            n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n);
        },
        zC = function (e, t) {
            e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected");
        },
        jC = function (t, e, n) {
            return vC(e, n).map(function (e) {
                return UC(t, e), n;
            });
        },
        HC = function (e, t) {
            var n, r;
            e.selection.isCollapsed() && !0 !== e.composing && t.get() && ((n = Us.fromRangeStart(e.selection.getRng())), Us.isTextPosition(n) && !1 === (go((r = n)) || ho(r)) && (UC(e, Dc(t.get(), n)), t.set(null)));
        },
        VC = function (e, t, n) {
            return (
                !!wc(e) &&
                ((o = t),
                (i = n),
                (a = (r = e).getBody()),
                (u = Us.fromRangeStart(r.selection.getRng())),
                (s = E(yb, r)),
                IC(i, s, a, u)
                    .bind(function (e) {
                        return jC(r, o, e);
                    })
                    .isSome())
            );
            var r, o, i, a, u, s;
        },
        qC = function (e, t, n) {
            return !!wc(t) && FC(e, t);
        },
        $C = function (d) {
            var m = ku(null),
                p = E(yb, d);
            return (
                d.on("NodeChange", function (e) {
                    var n, r, o, t, i, a, u, s, c, l, f;
                    !wc(d) ||
                        (vt.browser.isIE() && e.initial) ||
                        ((a = p),
                        (u = d.dom),
                        (s = e.parents),
                        (c = F(qu(Nt.fromDom(u.getRoot()), '*[data-mce-selected="inline-boundary"]'), function (e) {
                            return e.dom;
                        })),
                        (l = j(c, a)),
                        (f = j(s, a)),
                        $(Q(l, f), E(zC, !1)),
                        $(Q(f, l), E(zC, !0)),
                        HC(d, m),
                        (n = p),
                        (r = d),
                        (o = m),
                        (t = e.parents),
                        r.selection.isCollapsed() &&
                            ((i = j(t, n)),
                            $(i, function (e) {
                                var t = Us.fromRangeStart(r.selection.getRng());
                                RC(n, r.getBody(), t).bind(function (e) {
                                    return jC(r, o, e);
                                });
                            })));
                }),
                m
            );
        },
        WC = E(qC, !0),
        KC = E(qC, !1),
        XC = function (t, n) {
            return function (e) {
                return vC(n, e).exists(function (e) {
                    return UC(t, e), !0;
                });
            };
        },
        YC = function (r, o, i, a) {
            var u = r.getBody(),
                s = E(yb, r);
            r.undoManager.ignore(function () {
                var e, t, n;
                r.selection.setRng(((e = i), (t = a), (n = document.createRange()).setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n)),
                    r.execCommand("Delete"),
                    RC(s, u, Us.fromRangeStart(r.selection.getRng())).map(OC).map(XC(r, o));
            }),
                r.nodeChanged();
        },
        GC = function (n, r, i, o) {
            var e,
                t,
                a = ((e = n.getBody()), (t = o.container()), Jc(t, e) || e),
                u = E(yb, n),
                s = RC(u, a, o);
            return s
                .bind(function (e) {
                    return i ? e.fold(N(U.some(OC(e))), U.none, N(U.some(DC(e))), U.none) : e.fold(U.none, N(U.some(DC(e))), U.none, N(U.some(OC(e))));
                })
                .map(XC(n, r))
                .getOrThunk(function () {
                    var t = _l(i, a, o),
                        e = t.bind(function (e) {
                            return RC(u, a, e);
                        });
                    return as(s, e, function () {
                        return Cb(u, a, o).exists(function (e) {
                            return (
                                !!as(Ol((o = e)), Bl(o), function (e, t) {
                                    var n = wb(!0, e),
                                        r = wb(!1, t);
                                    return Al(o, n).forall(function (e) {
                                        return e.isEqual(r);
                                    });
                                }).getOr(!0) && (Gp(n, i, Nt.fromDom(e)), !0)
                            );
                            var o;
                        });
                    })
                        .orThunk(function () {
                            return e.bind(function (e) {
                                return t.map(function (e) {
                                    return i ? YC(n, r, o, e) : YC(n, r, e, o), !0;
                                });
                            });
                        })
                        .getOr(!1);
                });
        },
        JC = function (e, t, n) {
            if (e.selection.isCollapsed() && wc(e)) {
                var r = Us.fromRangeStart(e.selection.getRng());
                return GC(e, t, n, r);
            }
            return !1;
        },
        QC = function (e) {
            return 1 === Wt(e).length;
        },
        ZC = function (e, t, n, r) {
            var o,
                i,
                a,
                u,
                s,
                c = E(ch, t),
                l = F(j(r, c), function (e) {
                    return e.dom;
                });
            0 === l.length ? Gp(t, e, n) : ((i = n.dom), (a = l), (u = nh(!1)), (s = ah(a, u.dom)), rn(Nt.fromDom(i), u), ln(Nt.fromDom(i)), (o = Us(s, 0)), t.selection.setRng(o.toRange()));
        },
        ew = function (r, o) {
            var t,
                e = Nt.fromDom(r.getBody()),
                n = Nt.fromDom(r.selection.getStart()),
                s = j(
                    ((t = up(n, e)),
                    X(t, Xr).fold(N(t), function (e) {
                        return t.slice(0, e);
                    })),
                    QC
                );
            return ee(s).exists(function (e) {
                var t,
                    i,
                    a,
                    u,
                    n = Us.fromRangeStart(r.selection.getRng());
                return (
                    (i = o),
                    (a = n),
                    (u = e.dom),
                    !(
                        !as(Ol(u), Bl(u), function (e, t) {
                            var n = wb(!0, e),
                                r = wb(!1, t),
                                o = wb(!1, a);
                            return i
                                ? Al(u, o).exists(function (e) {
                                      return e.isEqual(r) && a.isEqual(n);
                                  })
                                : Dl(u, o).exists(function (e) {
                                      return e.isEqual(n) && a.isEqual(r);
                                  });
                        }).getOr(!0) ||
                        (Ll((t = e).dom) && eh(t.dom))
                    ) && (ZC(o, r, e, s), !0)
                );
            });
        },
        tw = function (e, t) {
            return !!e.selection.isCollapsed() && ew(e, t);
        },
        nw = function (e, t, n) {
            return e._selectionOverrides.hideFakeCaret(), Gp(e, t, Nt.fromDom(n)), !0;
        },
        rw = function (e, t) {
            return e.selection.isCollapsed()
                ? ((i = e),
                  (u = (a = t) ? Gm : Jm),
                  (s = a ? Ms.Forwards : Ms.Backwards),
                  (c = al(s, i.getBody(), i.selection.getRng())),
                  u(c)
                      ? nw(i, a, c.getNode(!a))
                      : U.from(wb(a, c))
                            .filter(function (e) {
                                return u(e) && cl(c, e);
                            })
                            .exists(function (e) {
                                return nw(i, a, e.getNode(!a));
                            }))
                : ((r = t), (o = (n = e).selection.getNode()), !!jn(o) && nw(n, r, o));
            var n, r, o, i, a, u, s, c;
        },
        ow = function (e) {
            var t = parseInt(e, 10);
            return isNaN(t) ? 0 : t;
        },
        iw = function (e, t) {
            return (e || "table" === Dt(t) ? "margin" : "padding") + ("rtl" === Yn(t, "direction") ? "-right" : "-left");
        },
        aw = function (e) {
            var r,
                t = sw(e);
            return (
                !e.mode.isReadOnly() &&
                (1 < t.length ||
                    ((r = e),
                    G(t, function (e) {
                        var t = iw(vc(r), e),
                            n = Jn(e, t).map(ow).getOr(0);
                        return "false" !== r.dom.getContentEditable(e.dom) && 0 < n;
                    })))
            );
        },
        uw = function (e) {
            return Qr(e) || Zr(e);
        },
        sw = function (e) {
            return j(F(e.selection.getSelectedBlocks(), Nt.fromDom), function (e) {
                return (
                    !uw(e) &&
                    !jt(e).map(uw).getOr(!1) &&
                    Sr(e, function (e) {
                        return Fn(e.dom) || Un(e.dom);
                    }).exists(function (e) {
                        return Fn(e.dom);
                    })
                );
            });
        },
        cw = function (e, c) {
            var l = e.dom,
                t = e.selection,
                n = e.formatter,
                r = e.getParam("indentation", "40px", "string"),
                f = /[a-z%]+$/i.exec(r)[0],
                d = parseInt(r, 10),
                m = vc(e),
                o = fc(e);
            e.queryCommandState("InsertUnorderedList") || e.queryCommandState("InsertOrderedList") || "" !== o || l.getParent(t.getNode(), l.isBlock) || n.apply("div"),
                $(sw(e), function (e) {
                    var t, n, r, o, i, a, u, s;
                    (t = l),
                        (n = c),
                        (r = m),
                        (o = d),
                        (i = f),
                        (a = e.dom),
                        (s = iw(r, Nt.fromDom(a))),
                        "outdent" === n ? ((u = Math.max(0, ow(a.style[s]) - o)), t.setStyle(a, s, u ? u + i : "")) : ((u = ow(a.style[s]) + o + i), t.setStyle(a, s, u));
                });
        },
        lw = function (e, t) {
            if (e.selection.isCollapsed() && aw(e)) {
                var n = e.dom,
                    r = e.selection.getRng(),
                    o = Us.fromRangeStart(r),
                    i = n.getParent(r.startContainer, n.isBlock);
                if (null !== i && dp(Nt.fromDom(i), o)) return cw(e, "outdent"), !0;
            }
            return !1;
        },
        fw = function (e, t) {
            e.getDoc().execCommand(t, !1, null);
        },
        dw = function (n, r) {
            n.addCommand("delete", function () {
                var e, t;
                (t = r), lw((e = n)) || aC(e, !1) || Jb(e, !1) || JC(e, t, !1) || Mb(e, !1) || Sg(e) || uC(e, !1) || rw(e, !1) || jb(e) || tw(e, !1) || (fw(e, "Delete"), Eb(e));
            }),
                n.addCommand("forwardDelete", function () {
                    var e, t;
                    (t = r), aC((e = n), !0) || Jb(e, !0) || JC(e, t, !0) || Mb(e, !0) || Sg(e) || uC(e, !0) || rw(e, !0) || jb(e) || tw(e, !0) || fw(e, "ForwardDelete");
                });
        },
        mw = function (e) {
            return e.touches === undefined || 1 !== e.touches.length ? U.none() : U.some(e.touches[0]);
        },
        pw = function (a) {
            var u = ku(U.none()),
                s = ku(!1),
                r = Lu(function (e) {
                    a.fire("longpress", xe(xe({}, e), { type: "longpress" })), s.set(!0);
                }, 400);
            a.on(
                "touchstart",
                function (n) {
                    mw(n).each(function (e) {
                        r.cancel();
                        var t = { x: e.clientX, y: e.clientY, target: n.target };
                        r.throttle(n), s.set(!1), u.set(U.some(t));
                    });
                },
                !0
            ),
                a.on(
                    "touchmove",
                    function (e) {
                        r.cancel(),
                            mw(e).each(function (i) {
                                u.get().each(function (e) {
                                    var t, n, r, o;
                                    (t = i), (n = e), (r = Math.abs(t.clientX - n.x)), (o = Math.abs(t.clientY - n.y)), (5 < r || 5 < o) && (u.set(U.none()), s.set(!1), a.fire("longpresscancel"));
                                });
                            });
                    },
                    !0
                ),
                a.on(
                    "touchend touchcancel",
                    function (t) {
                        r.cancel(),
                            "touchcancel" !== t.type &&
                                u
                                    .get()
                                    .filter(function (e) {
                                        return e.target.isEqualNode(t.target);
                                    })
                                    .each(function () {
                                        s.get() ? t.preventDefault() : a.fire("tap", xe(xe({}, t), { type: "tap" }));
                                    });
                    },
                    !0
                );
        },
        gw = function (e, t) {
            return e.hasOwnProperty(t.nodeName);
        },
        hw = function (e) {
            var t,
                n,
                r,
                o = e.dom,
                i = e.selection,
                a = e.schema,
                u = a.getBlockElements(),
                s = i.getStart(),
                c = e.getBody(),
                l = fc(e);
            if (s && Nn(s) && l) {
                var f = c.nodeName.toLowerCase();
                if (
                    a.isValidChild(f, l.toLowerCase()) &&
                    ((d = u),
                    (m = c),
                    (p = s),
                    !M(ap(Nt.fromDom(p), Nt.fromDom(m)), function (e) {
                        return gw(d, e.dom);
                    }))
                ) {
                    for (var d, m, p, g, h, v = i.getRng(), y = v.startContainer, b = v.startOffset, C = v.endContainer, w = v.endOffset, x = pm(e), s = c.firstChild; s; )
                        if (((g = u), On((h = s)) || (Nn(h) && !gw(g, h) && !$l(h)))) {
                            if (
                                (function (e, t) {
                                    if (On(t)) {
                                        if (0 === t.nodeValue.length) return !0;
                                        if (/^\s+$/.test(t.nodeValue) && (!t.nextSibling || gw(e, t.nextSibling))) return !0;
                                    }
                                    return !1;
                                })(u, s)
                            ) {
                                (s = (n = s).nextSibling), o.remove(n);
                                continue;
                            }
                            t || ((t = o.create(l, dc(e))), s.parentNode.insertBefore(t, s), (r = !0)), (s = (n = s).nextSibling), t.appendChild(n);
                        } else (t = null), (s = s.nextSibling);
                    r && x && (v.setStart(y, b), v.setEnd(C, w), i.setRng(v), e.nodeChanged());
                }
            }
        },
        vw = function (e, t) {
            var n;
            t.hasAttribute("data-mce-caret") && (Co(t), (n = e).selection.setRng(n.selection.getRng()), e.selection.scrollIntoView(t));
        },
        yw = function (e, t) {
            var n,
                r =
                    ((n = e),
                    Er(Nt.fromDom(n.getBody()), "*[data-mce-caret]").fold(N(null), function (e) {
                        return e.dom;
                    }));
            if (r) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void vw(e, r)) : void (po(r) && (vw(e, r), e.undoManager.add()));
        };
    ((rb = nb = nb || {})[(rb.Br = 0)] = "Br"), (rb[(rb.Block = 1)] = "Block"), (rb[(rb.Wrap = 2)] = "Wrap"), (rb[(rb.Eol = 3)] = "Eol");
    var bw,
        Cw,
        ww = function (e, t) {
            return e === Ms.Backwards ? J(t) : t;
        },
        xw = function (e, t, n, r) {
            for (var o, i, a, u, s, c, l = wl(n), f = r, d = []; f && ((s = l), (c = f), (o = t === Ms.Forwards ? s.next(c) : s.prev(c))); ) {
                if (In(o.getNode(!1))) return t === Ms.Forwards ? { positions: ww(t, d).concat([o]), breakType: nb.Br, breakAt: U.some(o) } : { positions: ww(t, d), breakType: nb.Br, breakAt: U.some(o) };
                if (o.isVisible()) {
                    if (e(f, o)) {
                        var m = ((i = t), (a = f), In((u = o).getNode(i === Ms.Forwards)) ? nb.Br : !1 === Qc(a, u) ? nb.Block : nb.Wrap);
                        return { positions: ww(t, d), breakType: m, breakAt: U.some(o) };
                    }
                    d.push(o), (f = o);
                } else f = o;
            }
            return { positions: ww(t, d), breakType: nb.Eol, breakAt: U.none() };
        },
        Sw = function (n, r, o, e) {
            return r(o, e)
                .breakAt.map(function (e) {
                    var t = r(o, e).positions;
                    return n === Ms.Backwards ? t.concat(e) : [e].concat(t);
                })
                .getOr([]);
        },
        Nw = function (e, i) {
            return W(
                e,
                function (e, o) {
                    return e.fold(
                        function () {
                            return U.some(o);
                        },
                        function (r) {
                            return as(Z(r.getClientRects()), Z(o.getClientRects()), function (e, t) {
                                var n = Math.abs(i - e.left);
                                return Math.abs(i - t.left) <= n ? o : r;
                            }).or(e);
                        }
                    );
                },
                U.none()
            );
        },
        Ew = function (t, e) {
            return Z(e.getClientRects()).bind(function (e) {
                return Nw(t, e.left);
            });
        },
        kw = E(xw, Is.isAbove, -1),
        _w = E(xw, Is.isBelow, 1),
        Rw = E(Sw, -1, kw),
        Tw = E(Sw, 1, _w),
        Aw = function (t) {
            var e = function (e) {
                return F(e, function (e) {
                    return ((e = ss(e)).node = t), e;
                });
            };
            if (Nn(t)) return e(t.getClientRects());
            if (On(t)) {
                var n = t.ownerDocument.createRange();
                return n.setStart(t, 0), n.setEnd(t, t.data.length), e(n.getClientRects());
            }
        },
        Dw = function (e) {
            return Y(e, Aw);
        };
    ((Cw = bw = bw || {})[(Cw.Up = -1)] = "Up"), (Cw[(Cw.Down = 1)] = "Down");
    var Ow = function (o, i, a, e, u, t) {
            var s = 0,
                c = [],
                n = function (e) {
                    var t,
                        n,
                        r = Dw([e]);
                    for (-1 === o && (r = r.reverse()), t = 0; t < r.length; t++)
                        if (((n = r[t]), !a(n, l))) {
                            if ((0 < c.length && i(n, we(c)) && s++, (n.line = s), u(n))) return !0;
                            c.push(n);
                        }
                },
                l = we(t.getClientRects());
            if (!l) return c;
            var r = t.getNode();
            return (
                n(r),
                (function (e, t, n, r) {
                    for (; (r = Gc(r, e, Do, t)); ) if (n(r)) return;
                })(o, e, n, r),
                c
            );
        },
        Bw = E(Ow, bw.Up, fs, ds),
        Pw = E(Ow, bw.Down, ds, fs),
        Lw = function (n) {
            return function (e) {
                return (t = n), e.line > t;
                var t;
            };
        },
        Iw = function (n) {
            return function (e) {
                return (t = n), e.line === t;
                var t;
            };
        },
        Mw = Un,
        Fw = Gc,
        Uw = function (e, t) {
            return Math.abs(e.left - t);
        },
        zw = function (e, t) {
            return Math.abs(e.right - t);
        },
        jw = function (e, t) {
            return e >= t.left && e <= t.right;
        },
        Hw = function (e, t) {
            return e >= t.top && e <= t.bottom;
        },
        Vw = function (e, o) {
            return be(e, function (e, t) {
                var n = Math.min(Uw(e, o), zw(e, o)),
                    r = Math.min(Uw(t, o), zw(t, o));
                return jw(o, t) || (!jw(o, e) && ((r === n && Mw(t.node)) || r < n)) ? t : e;
            });
        },
        qw = function (e, t, n, r, o) {
            var i = Fw(r, e, Do, t, !o);
            do {
                if (!i || n(i)) return;
            } while ((i = Fw(i, e, Do, t)));
        },
        $w = function (e, t, n) {
            var r,
                o,
                i = Dw(j(te(e.getElementsByTagName("*")), jc)),
                a = j(i, E(Hw, n));
            if ((u = Vw(a, t))) {
                var u,
                    s = !Tn(u.node) && !jn(u.node);
                if (
                    (u = Vw(
                        (function (e, r, t) {
                            void 0 === t && (t = !0);
                            var o = [],
                                n = function (t, e) {
                                    var n = j(Dw([e]), function (e) {
                                        return !t(e, r);
                                    });
                                    return (o = o.concat(n)), 0 === n.length;
                                };
                            return o.push(r), qw(bw.Up, e, E(n, fs), r.node, t), qw(bw.Down, e, E(n, ds), r.node, t), o;
                        })(e, u, s),
                        t
                    )) &&
                    jc(u.node)
                )
                    return (o = t), { node: (r = u).node, before: Uw(r, o) < zw(r, o) };
            }
            return null;
        },
        Ww = function (e, t) {
            e.selection.setRng(t), Md(e, e.selection.getRng());
        },
        Kw = function (e, t, n) {
            return U.some(Kb(e, t, n));
        },
        Xw = function (e, t, n, r, o, i) {
            var a = t === Ms.Forwards,
                u = wl(e.getBody()),
                s = E(sl, a ? u.next : u.prev),
                c = a ? r : o;
            if (!n.collapsed) {
                var l = ps(n);
                if (i(l)) return qb(t, e, l, t === Ms.Backwards, !1);
            }
            var f = al(t, e.getBody(), n);
            if (c(f)) return $b(e, f.getNode(!a));
            var d = wb(a, s(f)),
                m = lo(n.startContainer);
            if (!d) return m ? U.some(n) : U.none();
            if (c(d)) return qb(t, e, d.getNode(!a), a, !1);
            var p = s(d);
            return p && c(p) && cl(d, p) ? qb(t, e, p.getNode(!a), a, !1) : m ? Kw(e, d.toRange(), !1) : U.none();
        },
        Yw = function (t, e, n, r, o, i) {
            var a = al(e, t.getBody(), n),
                u = we(a.getClientRects()),
                s = e === bw.Down;
            if (!u) return U.none();
            var c,
                l = (s ? Pw : Bw)(t.getBody(), Lw(1), a),
                f = j(l, Iw(1)),
                d = u.left,
                m = Vw(f, d);
            if (m && i(m.node)) {
                var p = Math.abs(d - m.left),
                    g = Math.abs(d - m.right);
                return qb(e, t, m.node, p < g, !1);
            }
            if ((c = r(a) ? a.getNode() : o(a) ? a.getNode(!0) : ps(n))) {
                var h = (function (e, t, n, r) {
                        var o,
                            i,
                            a,
                            u,
                            s = wl(t),
                            c = [],
                            l = 0,
                            f = function (e) {
                                return we(e.getClientRects());
                            },
                            d = 1 === e ? ((o = s.next), (i = ds), (a = fs), Us.after(r)) : ((o = s.prev), (i = fs), (a = ds), Us.before(r)),
                            m = f(d);
                        do {
                            if (d.isVisible() && !a((u = f(d)), m)) {
                                if ((0 < c.length && i(u, we(c)) && l++, ((u = ss(u)).position = d), (u.line = l), n(u))) return c;
                                c.push(u);
                            }
                        } while ((d = o(d)));
                        return c;
                    })(e, t.getBody(), Lw(1), c),
                    v = Vw(j(h, Iw(1)), d);
                if (v) return Kw(t, v.position.toRange(), !1);
                if ((v = we(j(h, Iw(0))))) return Kw(t, v.position.toRange(), !1);
            }
            return 0 === f.length
                ? Gw(t, s)
                      .filter(s ? o : r)
                      .map(function (e) {
                          return Kb(t, e.toRange(), !1);
                      })
                : U.none();
        },
        Gw = function (e, t) {
            var n = e.selection.getRng(),
                r = e.getBody();
            if (t) {
                var o = Us.fromRangeEnd(n),
                    i = _w(r, o);
                return ee(i.positions);
            }
            (o = Us.fromRangeStart(n)), (i = kw(r, o));
            return Z(i.positions);
        },
        Jw = function (t, e, n) {
            return Gw(t, e)
                .filter(n)
                .exists(function (e) {
                    return t.selection.setRng(e.toRange()), !0;
                });
        },
        Qw = Un,
        Zw = function (e, t, n) {
            var r,
                o,
                i = wl(e.getBody()),
                a = E(sl, 1 === t ? i.next : i.prev);
            if (n.collapsed && "" !== fc(e)) {
                var u,
                    s = e.dom.getParent(n.startContainer, "PRE");
                if (!s) return;
                a(Us.fromRangeStart(n)) ||
                    ((o = (r = e).dom.create(fc(r))), (!vt.ie || 11 <= vt.ie) && (o.innerHTML = '<br data-mce-bogus="1">'), (u = o), 1 === t ? e.$(s).after(u) : e.$(s).before(u), e.selection.select(u, !0), e.selection.collapse());
            }
        },
        ex = function (e, t) {
            var n = t ? Ms.Forwards : Ms.Backwards,
                r = e.selection.getRng();
            return Xw(e, n, r, ep, tp, Qw).orThunk(function () {
                return Zw(e, n, r), U.none();
            });
        },
        tx = function (e, t) {
            var n = t ? 1 : -1,
                r = e.selection.getRng();
            return Yw(
                e,
                n,
                r,
                function (e) {
                    return ep(e) || Qm(e);
                },
                function (e) {
                    return tp(e) || Zm(e);
                },
                Qw
            ).orThunk(function () {
                return Zw(e, n, r), U.none();
            });
        },
        nx = function (t, e) {
            return ex(t, e).exists(function (e) {
                return Ww(t, e), !0;
            });
        },
        rx = function (t, e) {
            return tx(t, e).exists(function (e) {
                return Ww(t, e), !0;
            });
        },
        ox = function (e, t) {
            return Jw(e, t, t ? tp : ep);
        },
        ix = function (e) {
            return I(["figcaption"], Dt(e));
        },
        ax = function (e) {
            var t = document.createRange();
            return t.setStartBefore(e.dom), t.setEndBefore(e.dom), t;
        },
        ux = function (e, t, n) {
            (n ? un : an)(e, t);
        },
        sx = function (e, t, n, r) {
            return "" === t ? ((l = e), (f = r), (d = Nt.fromTag("br")), ux(l, d, f), ax(d)) : ((o = e), (i = r), (a = t), (u = n), (s = Nt.fromTag(a)), (c = Nt.fromTag("br")), $n(s, u), un(s, c), ux(o, s, i), ax(c));
            var o, i, a, u, s, c, l, f, d;
        },
        cx = function (e, t, n) {
            return t ? ((o = e.dom), _w(o, n).breakAt.isNone()) : ((r = e.dom), kw(r, n).breakAt.isNone());
            var r, o;
        },
        lx = function (t, n) {
            var e,
                r,
                o = Nt.fromDom(t.getBody()),
                i = Us.fromRangeStart(t.selection.getRng()),
                a = fc(t),
                u = dc(t);
            return (
                (e = i),
                (r = E(Rt, o)),
                Sr(Nt.fromDom(e.container()), Xr, r)
                    .filter(ix)
                    .exists(function () {
                        if (cx(o, n, i)) {
                            var e = sx(o, a, u, n);
                            return t.selection.setRng(e), !0;
                        }
                        return !1;
                    })
            );
        },
        fx = function (e, t) {
            return !!e.selection.isCollapsed() && lx(e, t);
        },
        dx = function (e, r) {
            return Y(
                F(e, function (e) {
                    return xe({ shiftKey: !1, altKey: !1, ctrlKey: !1, metaKey: !1, keyCode: 0, action: V }, e);
                }),
                function (e) {
                    return (t = e), (n = r).keyCode === t.keyCode && n.shiftKey === t.shiftKey && n.altKey === t.altKey && n.ctrlKey === t.ctrlKey && n.metaKey === t.metaKey ? [e] : [];
                    var t, n;
                }
            );
        },
        mx = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            return function () {
                return e.apply(null, t);
            };
        },
        px = function (e, t) {
            return K(dx(e, t), function (e) {
                return e.action();
            });
        },
        gx = function (t, e) {
            var n = e ? Ms.Forwards : Ms.Backwards,
                r = t.selection.getRng();
            return Xw(t, n, r, Gm, Jm, jn).exists(function (e) {
                return Ww(t, e), !0;
            });
        },
        hx = function (t, e) {
            var n = e ? 1 : -1,
                r = t.selection.getRng();
            return Yw(t, n, r, Gm, Jm, jn).exists(function (e) {
                return Ww(t, e), !0;
            });
        },
        vx = function (e, t) {
            return Jw(e, t, t ? Jm : Gm);
        },
        yx = function (o, e) {
            return Y(e, function (e) {
                var t,
                    n,
                    r = ((t = ss(e.getBoundingClientRect())), (n = -1), { left: t.left - n, top: t.top - n, right: t.right + 2 * n, bottom: t.bottom + 2 * n, width: t.width + n, height: t.height + n });
                return [
                    { x: r.left, y: o(r), cell: e },
                    { x: r.right, y: o(r), cell: e },
                ];
            });
        },
        bx = function (e, t, n, r, o) {
            var i,
                a,
                u = qu(Nt.fromDom(n), "td,th,caption").map(function (e) {
                    return e.dom;
                }),
                s = j(yx(e, u), function (e) {
                    return t(e, o);
                });
            return (
                (i = r),
                (a = o),
                W(
                    s,
                    function (e, r) {
                        return e.fold(
                            function () {
                                return U.some(r);
                            },
                            function (e) {
                                var t = Math.sqrt(Math.abs(e.x - i) + Math.abs(e.y - a)),
                                    n = Math.sqrt(Math.abs(r.x - i) + Math.abs(r.y - a));
                                return U.some(n < t ? r : e);
                            }
                        );
                    },
                    U.none()
                ).map(function (e) {
                    return e.cell;
                })
            );
        },
        Cx = E(
            bx,
            function (e) {
                return e.bottom;
            },
            function (e, t) {
                return e.y < t;
            }
        ),
        wx = E(
            bx,
            function (e) {
                return e.top;
            },
            function (e, t) {
                return e.y > t;
            }
        ),
        xx = function (t, n) {
            return Z(n.getClientRects())
                .bind(function (e) {
                    return Cx(t, e.left, e.top);
                })
                .bind(function (e) {
                    return Ew(
                        Bl((t = e))
                            .map(function (e) {
                                return kw(t, e).positions.concat(e);
                            })
                            .getOr([]),
                        n
                    );
                    var t;
                });
        },
        Sx = function (t, n) {
            return ee(n.getClientRects())
                .bind(function (e) {
                    return wx(t, e.left, e.top);
                })
                .bind(function (e) {
                    return Ew(
                        Ol((t = e))
                            .map(function (e) {
                                return [e].concat(_w(t, e).positions);
                            })
                            .getOr([]),
                        n
                    );
                    var t;
                });
        },
        Nx = function (e, t, n) {
            var r,
                o,
                i,
                a,
                u = e(t, n);
            return ((a = u).breakType === nb.Wrap && 0 === a.positions.length) || (!In(n.getNode()) && (i = u).breakType === nb.Br && 1 === i.positions.length)
                ? ((r = e),
                  (o = t),
                  !u.breakAt.exists(function (e) {
                      return r(o, e).breakAt.isSome();
                  }))
                : u.breakAt.isNone();
        },
        Ex = E(Nx, kw),
        kx = E(Nx, _w),
        _x = function (t, e, n, r) {
            var o,
                i,
                a,
                u,
                s = t.selection.getRng(),
                c = e ? 1 : -1;
            return (
                !(
                    !Uc() ||
                    ((o = e),
                    (i = s),
                    (a = n),
                    (u = Us.fromRangeStart(i)),
                    !Tl(!o, a).exists(function (e) {
                        return e.isEqual(u);
                    }))
                ) &&
                (qb(c, t, n, !e, !1).each(function (e) {
                    Ww(t, e);
                }),
                !0)
            );
        },
        Rx = function (e, t) {
            var n = t.getNode(e);
            return Nn(n) && "TABLE" === n.nodeName ? U.some(n) : U.none();
        },
        Tx = function (u, s, c) {
            var e = Rx(!!s, c),
                t = !1 === s;
            e.fold(
                function () {
                    return Ww(u, c.toRange());
                },
                function (a) {
                    return Tl(t, u.getBody())
                        .filter(function (e) {
                            return e.isEqual(c);
                        })
                        .fold(
                            function () {
                                return Ww(u, c.toRange());
                            },
                            function (e) {
                                return (
                                    (n = s),
                                    (o = a),
                                    (t = c),
                                    void ((i = fc((r = u)))
                                        ? r.undoManager.transact(function () {
                                              var e = Nt.fromTag(i);
                                              $n(e, dc(r)), un(e, Nt.fromTag("br")), (n ? on : rn)(Nt.fromDom(o), e);
                                              var t = r.dom.createRng();
                                              t.setStart(e.dom, 0), t.setEnd(e.dom, 0), Ww(r, t);
                                          })
                                        : Ww(r, t.toRange()))
                                );
                                var n, r, o, t, i;
                            }
                        );
                }
            );
        },
        Ax = function (e, t, n, r) {
            var o,
                i,
                a,
                u,
                s,
                c,
                l = e.selection.getRng(),
                f = Us.fromRangeStart(l),
                d = e.getBody();
            if (!t && Ex(r, f)) {
                var m =
                    ((u = d),
                    xx((s = n), (c = f))
                        .orThunk(function () {
                            return Z(c.getClientRects()).bind(function (e) {
                                return Nw(Rw(u, Us.before(s)), e.left);
                            });
                        })
                        .getOr(Us.before(s)));
                return Tx(e, t, m), !0;
            }
            if (t && kx(r, f)) {
                m =
                    ((o = d),
                    Sx((i = n), (a = f))
                        .orThunk(function () {
                            return Z(a.getClientRects()).bind(function (e) {
                                return Nw(Tw(o, Us.after(i)), e.left);
                            });
                        })
                        .getOr(Us.after(i)));
                return Tx(e, t, m), !0;
            }
            return !1;
        },
        Dx = function (n, r, o) {
            return U.from(n.dom.getParent(n.selection.getNode(), "td,th"))
                .bind(function (t) {
                    return U.from(n.dom.getParent(t, "table")).map(function (e) {
                        return o(n, r, e, t);
                    });
                })
                .getOr(!1);
        },
        Ox = function (e, t) {
            return Dx(e, t, _x);
        },
        Bx = function (e, t) {
            return Dx(e, t, Ax);
        },
        Px = function (i, a) {
            i.on("keydown", function (e) {
                var t, n, r, o;
                !1 === e.isDefaultPrevented() &&
                    ((t = i),
                    (n = a),
                    (r = e),
                    (o = st().os),
                    px(
                        [
                            { keyCode: Gf.RIGHT, action: mx(nx, t, !0) },
                            { keyCode: Gf.LEFT, action: mx(nx, t, !1) },
                            { keyCode: Gf.UP, action: mx(rx, t, !1) },
                            { keyCode: Gf.DOWN, action: mx(rx, t, !0) },
                            { keyCode: Gf.RIGHT, action: mx(Ox, t, !0) },
                            { keyCode: Gf.LEFT, action: mx(Ox, t, !1) },
                            { keyCode: Gf.UP, action: mx(Bx, t, !1) },
                            { keyCode: Gf.DOWN, action: mx(Bx, t, !0) },
                            { keyCode: Gf.RIGHT, action: mx(gx, t, !0) },
                            { keyCode: Gf.LEFT, action: mx(gx, t, !1) },
                            { keyCode: Gf.UP, action: mx(hx, t, !1) },
                            { keyCode: Gf.DOWN, action: mx(hx, t, !0) },
                            { keyCode: Gf.RIGHT, action: mx(VC, t, n, !0) },
                            { keyCode: Gf.LEFT, action: mx(VC, t, n, !1) },
                            { keyCode: Gf.RIGHT, ctrlKey: !o.isOSX(), altKey: o.isOSX(), action: mx(WC, t, n) },
                            { keyCode: Gf.LEFT, ctrlKey: !o.isOSX(), altKey: o.isOSX(), action: mx(KC, t, n) },
                            { keyCode: Gf.UP, action: mx(fx, t, !1) },
                            { keyCode: Gf.DOWN, action: mx(fx, t, !0) },
                        ],
                        r
                    ).each(function (e) {
                        r.preventDefault();
                    }));
            });
        },
        Lx = function (o, i) {
            o.on("keydown", function (e) {
                var t, n, r;
                !1 === e.isDefaultPrevented() &&
                    ((t = o),
                    (n = i),
                    (r = e),
                    px(
                        [
                            { keyCode: Gf.BACKSPACE, action: mx(lw, t, !1) },
                            { keyCode: Gf.BACKSPACE, action: mx(aC, t, !1) },
                            { keyCode: Gf.DELETE, action: mx(aC, t, !0) },
                            { keyCode: Gf.BACKSPACE, action: mx(Jb, t, !1) },
                            { keyCode: Gf.DELETE, action: mx(Jb, t, !0) },
                            { keyCode: Gf.BACKSPACE, action: mx(JC, t, n, !1) },
                            { keyCode: Gf.DELETE, action: mx(JC, t, n, !0) },
                            { keyCode: Gf.BACKSPACE, action: mx(Sg, t, !1) },
                            { keyCode: Gf.DELETE, action: mx(Sg, t, !0) },
                            { keyCode: Gf.BACKSPACE, action: mx(uC, t, !1) },
                            { keyCode: Gf.DELETE, action: mx(uC, t, !0) },
                            { keyCode: Gf.BACKSPACE, action: mx(rw, t, !1) },
                            { keyCode: Gf.DELETE, action: mx(rw, t, !0) },
                            { keyCode: Gf.BACKSPACE, action: mx(jb, t, !1) },
                            { keyCode: Gf.DELETE, action: mx(jb, t, !0) },
                            { keyCode: Gf.BACKSPACE, action: mx(Mb, t, !1) },
                            { keyCode: Gf.DELETE, action: mx(Mb, t, !0) },
                            { keyCode: Gf.BACKSPACE, action: mx(tw, t, !1) },
                            { keyCode: Gf.DELETE, action: mx(tw, t, !0) },
                        ],
                        r
                    ).each(function (e) {
                        r.preventDefault();
                    }));
            }),
                o.on("keyup", function (e) {
                    var t, n;
                    !1 === e.isDefaultPrevented() &&
                        ((t = o),
                        (n = e),
                        px(
                            [
                                { keyCode: Gf.BACKSPACE, action: mx(iC, t) },
                                { keyCode: Gf.DELETE, action: mx(iC, t) },
                            ],
                            n
                        ));
                });
        },
        Ix = function (e, t) {
            var n,
                r,
                o = t,
                i = e.dom,
                a = e.schema.getMoveCaretBeforeOnEnterElements();
            if (t) {
                !/^(LI|DT|DD)$/.test(t.nodeName) ||
                    ((r = (function (e) {
                        for (; e; ) {
                            if (1 === e.nodeType || (3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data))) return e;
                            e = e.nextSibling;
                        }
                    })(t.firstChild)) &&
                        /^(UL|OL|DL)$/.test(r.nodeName) &&
                        t.insertBefore(i.doc.createTextNode(oo), t.firstChild));
                var u = i.createRng();
                if ((t.normalize(), t.hasChildNodes())) {
                    for (var s = new Hr(t, t); (n = s.current()); ) {
                        if (On(n)) {
                            u.setStart(n, 0), u.setEnd(n, 0);
                            break;
                        }
                        if (a[n.nodeName.toLowerCase()]) {
                            u.setStartBefore(n), u.setEndBefore(n);
                            break;
                        }
                        (o = n), (n = s.next());
                    }
                    n || (u.setStart(o, 0), u.setEnd(o, 0));
                } else In(t) ? (t.nextSibling && i.isBlock(t.nextSibling) ? (u.setStartBefore(t), u.setEndBefore(t)) : (u.setStartAfter(t), u.setEndAfter(t))) : (u.setStart(t, 0), u.setEnd(t, 0));
                e.selection.setRng(u), Md(e, u);
            }
        },
        Mx = function (e) {
            return U.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock));
        },
        Fx = function (e, t) {
            return e && e.parentNode && e.parentNode.nodeName === t;
        },
        Ux = function (e) {
            return e && /^(OL|UL|LI)$/.test(e.nodeName);
        },
        zx = function (e) {
            var t = e.parentNode;
            return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e;
        },
        jx = function (e, t, n) {
            for (var r = e[n ? "firstChild" : "lastChild"]; r && !Nn(r); ) r = r[n ? "nextSibling" : "previousSibling"];
            return r === t;
        },
        Hx = function (e, t, n, r, o) {
            var i,
                a,
                u,
                s,
                c,
                l,
                f = e.dom,
                d = e.selection.getRng();
            n !== e.getBody() &&
                (Ux((i = n)) && Ux(i.parentNode) && (o = "LI"),
                (a = o ? t(o) : f.create("BR")),
                jx(n, r, !0) && jx(n, r, !1)
                    ? Fx(n, "LI")
                        ? f.insertAfter(a, zx(n))
                        : f.replace(a, n)
                    : jx(n, r, !0)
                    ? Fx(n, "LI")
                        ? (f.insertAfter(a, zx(n)), a.appendChild(f.doc.createTextNode(" ")), a.appendChild(n))
                        : n.parentNode.insertBefore(a, n)
                    : jx(n, r, !1)
                    ? f.insertAfter(a, zx(n))
                    : ((n = zx(n)),
                      (u = d.cloneRange()).setStartAfter(r),
                      u.setEndAfter(n),
                      (s = u.extractContents()),
                      "LI" === o && ((l = "LI"), (c = s).firstChild && c.firstChild.nodeName === l) ? ((a = s.firstChild), f.insertAfter(s, n)) : (f.insertAfter(s, n), f.insertAfter(a, n))),
                f.remove(r),
                Ix(e, a));
        },
        Vx = function (e) {
            e.innerHTML = '<br data-mce-bogus="1">';
        },
        qx = function (e, t) {
            return e.nodeName === t || (e.previousSibling && e.previousSibling.nodeName === t);
        },
        $x = function (e, t) {
            return t && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && "true" !== e.getContentEditable(t);
        },
        Wx = function (e, t, n) {
            return !1 === On(t) ? n : e ? (1 === n && t.data.charAt(n - 1) === io ? 0 : n) : n === t.data.length - 1 && t.data.charAt(n) === io ? t.data.length : n;
        },
        Kx = function (e, t) {
            for (var n, r = e.getRoot(), o = t; o !== r && "false" !== e.getContentEditable(o); ) "true" === e.getContentEditable(o) && (n = o), (o = o.parentNode);
            return o !== r ? n : r;
        },
        Xx = function (e, t) {
            var n = fc(e);
            n &&
                n.toLowerCase() === t.tagName.toLowerCase() &&
                (function (e, o, t) {
                    var i = e.dom;
                    U.from(t.style)
                        .map(i.parseStyle)
                        .each(function (e) {
                            var t = Qn(Nt.fromDom(o)),
                                n = xe(xe({}, t), e);
                            i.setStyles(o, n);
                        });
                    var n = U.from(t["class"]).map(function (e) {
                            return e.split(/\s+/);
                        }),
                        r = U.from(o.className).map(function (e) {
                            return j(e.split(/\s+/), function (e) {
                                return "" !== e;
                            });
                        });
                    as(n, r, function (t, e) {
                        var n = j(e, function (e) {
                                return !I(t, e);
                            }),
                            r = Se(t, n);
                        i.setAttrib(o, "class", r.join(" "));
                    });
                    var a = ["style", "class"],
                        u = le(t, function (e, t) {
                            return !I(a, t);
                        });
                    i.setAttribs(o, u);
                })(e, t, dc(e));
        },
        Yx = function (a, e) {
            var t,
                u,
                i,
                s,
                n,
                r,
                o,
                c,
                l,
                f = a.dom,
                d = a.schema,
                m = d.getNonEmptyElements(),
                p = a.selection.getRng(),
                g = function (e) {
                    var t,
                        n = u,
                        r = d.getTextInlineElements(),
                        o = e || "TABLE" === c || "HR" === c ? f.create(e || N) : s.cloneNode(!1),
                        i = o;
                    if (!1 === a.getParam("keep_styles", !0)) f.setAttrib(o, "style", null), f.setAttrib(o, "class", null);
                    else
                        do {
                            if (r[n.nodeName]) {
                                if (Ll(n) || $l(n)) continue;
                                (t = n.cloneNode(!1)), f.setAttrib(t, "id", ""), o.hasChildNodes() ? t.appendChild(o.firstChild) : (i = t), o.appendChild(t);
                            }
                        } while ((n = n.parentNode) && n !== E);
                    return Xx(a, o), Vx(i), o;
                },
                h = function (e) {
                    var t,
                        n,
                        r = Wx(e, u, i);
                    if (On(u) && (e ? 0 < r : r < u.nodeValue.length)) return !1;
                    if (u.parentNode === s && l && !e) return !0;
                    if (e && Nn(u) && u === s.firstChild) return !0;
                    if (qx(u, "TABLE") || qx(u, "HR")) return (l && !e) || (!l && e);
                    var o = new Hr(u, s);
                    for (On(u) && (e && 0 === r ? o.prev() : e || r !== u.nodeValue.length || o.next()); (t = o.current()); ) {
                        if (Nn(t)) {
                            if (!t.getAttribute("data-mce-bogus") && ((n = t.nodeName.toLowerCase()), m[n] && "br" !== n)) return !1;
                        } else if (On(t) && !Bo(t.nodeValue)) return !1;
                        e ? o.prev() : o.next();
                    }
                    return !0;
                },
                v = function () {
                    (n = /^(H[1-6]|PRE|FIGURE)$/.test(c) && "HGROUP" !== C ? g(N) : g()), a.getParam("end_container_on_empty_block", !1) && $x(f, o) && f.isEmpty(s) ? (n = f.split(o, s)) : f.insertAfter(n, s), Ix(a, n);
                };
            ud(f, p).each(function (e) {
                p.setStart(e.startContainer, e.startOffset), p.setEnd(e.endContainer, e.endOffset);
            }),
                (u = p.startContainer),
                (i = p.startOffset),
                (N = fc(a));
            var y = !(!e || !e.shiftKey),
                b = !(!e || !e.ctrlKey);
            Nn(u) && u.hasChildNodes() && ((l = i > u.childNodes.length - 1), (u = u.childNodes[Math.min(i, u.childNodes.length - 1)] || u), (i = l && On(u) ? u.nodeValue.length : 0));
            var C,
                w,
                x,
                S,
                N,
                E = Kx(f, u);
            E &&
                (((N && !y) || (!N && y)) &&
                    (u = (function (e, t, n, r, o) {
                        var i,
                            a,
                            u,
                            s,
                            c,
                            l,
                            f = t || "P",
                            d = e.dom,
                            m = Kx(d, r),
                            p = d.getParent(r, d.isBlock);
                        if (!p || !$x(d, p)) {
                            if (((c = (p = p || m) === e.getBody() || ((l = p) && /^(TD|TH|CAPTION)$/.test(l.nodeName)) ? p.nodeName.toLowerCase() : p.parentNode.nodeName.toLowerCase()), !p.hasChildNodes()))
                                return (i = d.create(f)), Xx(e, i), p.appendChild(i), n.setStart(i, 0), n.setEnd(i, 0), i;
                            for (u = r; u.parentNode !== p; ) u = u.parentNode;
                            for (; u && !d.isBlock(u); ) u = (a = u).previousSibling;
                            if (a && e.schema.isValidChild(c, f.toLowerCase())) {
                                for (i = d.create(f), Xx(e, i), a.parentNode.insertBefore(i, a), u = a; u && !d.isBlock(u); ) (s = u.nextSibling), i.appendChild(u), (u = s);
                                n.setStart(r, o), n.setEnd(r, o);
                            }
                        }
                        return r;
                    })(a, N, p, u, i)),
                (s = f.getParent(u, f.isBlock)),
                (o = s ? f.getParent(s.parentNode, f.isBlock) : null),
                (c = s ? s.nodeName.toUpperCase() : ""),
                "LI" !== (C = o ? o.nodeName.toUpperCase() : "") || b || ((o = (s = o).parentNode), (c = C)),
                /^(LI|DT|DD)$/.test(c) && f.isEmpty(s)
                    ? Hx(a, g, o, s, N)
                    : (N && s === a.getBody()) ||
                      ((N = N || "P"),
                      lo(s)
                          ? ((n = Co(s)), f.isEmpty(s) && Vx(s), Xx(a, n), Ix(a, n))
                          : h()
                          ? v()
                          : h(!0)
                          ? ((n = s.parentNode.insertBefore(g(), s)), Ix(a, qx(s, "HR") ? n : s))
                          : ((S = (x = p).cloneRange()).setStart(x.startContainer, Wx(!0, x.startContainer, x.startOffset)),
                            S.setEnd(x.endContainer, Wx(!1, x.endContainer, x.endOffset)),
                            (t = S.cloneRange()).setEndAfter(s),
                            (r = t.extractContents()),
                            (w = r),
                            $(Vu(Nt.fromDom(w), Lt), function (e) {
                                var t = e.dom;
                                t.nodeValue = uo(t.nodeValue);
                            }),
                            (function (e) {
                                for (; On(e) && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), (e = e.firstChild); );
                            })(r),
                            (n = r.firstChild),
                            f.insertAfter(r, s),
                            (function (e, t, n) {
                                var r,
                                    o,
                                    i,
                                    a = n,
                                    u = [];
                                if (a) {
                                    for (; (a = a.firstChild); ) {
                                        if (e.isBlock(a)) return;
                                        Nn(a) && !t[a.nodeName.toLowerCase()] && u.push(a);
                                    }
                                    for (r = u.length; r--; )
                                        !(a = u[r]).hasChildNodes() || (a.firstChild === a.lastChild && "" === a.firstChild.nodeValue) ? e.remove(a) : ((o = e), (i = a) && "A" === i.nodeName && o.isEmpty(i) && e.remove(a));
                                }
                            })(f, m, n),
                            (function (e, t) {
                                t.normalize();
                                var n = t.lastChild;
                                (n && !/^(left|right)$/gi.test(e.getStyle(n, "float", !0))) || e.add(t, "br");
                            })(f, s),
                            f.isEmpty(s) && Vx(s),
                            n.normalize(),
                            f.isEmpty(n) ? (f.remove(n), v()) : (Xx(a, n), Ix(a, n))),
                      f.setAttrib(n, "id", ""),
                      a.fire("NewBlock", { newBlock: n })));
        },
        Gx = function (e, t, n) {
            var r = e.create("span", {}, "&nbsp;");
            n.parentNode.insertBefore(r, n), t.scrollIntoView(r), e.remove(r);
        },
        Jx = function (e, t, n, r) {
            var o = e.createRng();
            r ? (o.setStartBefore(n), o.setEndBefore(n)) : (o.setStartAfter(n), o.setEndAfter(n)), t.setRng(o);
        },
        Qx = function (e, t) {
            var n,
                r,
                o = e.selection,
                i = e.dom,
                a = o.getRng();
            ud(i, a).each(function (e) {
                a.setStart(e.startContainer, e.startOffset), a.setEnd(e.endContainer, e.endOffset);
            });
            var u,
                s = a.startOffset,
                c = a.startContainer;
            1 === c.nodeType && c.hasChildNodes() && ((u = s > c.childNodes.length - 1), (c = c.childNodes[Math.min(s, c.childNodes.length - 1)] || c), (s = u && 3 === c.nodeType ? c.nodeValue.length : 0));
            var l = i.getParent(c, i.isBlock),
                f = l ? i.getParent(l.parentNode, i.isBlock) : null,
                d = f ? f.nodeName.toUpperCase() : "",
                m = !(!t || !t.ctrlKey);
            "LI" !== d || m || (l = f),
                c &&
                    3 === c.nodeType &&
                    s >= c.nodeValue.length &&
                    !(function (e, t, n) {
                        for (var r, o = new Hr(t, n), i = e.getNonEmptyElements(); (r = o.next()); ) if (i[r.nodeName.toLowerCase()] || 0 < r.length) return !0;
                    })(e.schema, c, l) &&
                    ((n = i.create("br")), a.insertNode(n), a.setStartAfter(n), a.setEndAfter(n), (r = !0)),
                (n = i.create("br")),
                js(i, a, n),
                Gx(i, o, n),
                Jx(i, o, n, r),
                e.undoManager.add();
        },
        Zx = function (e, t) {
            var n = Nt.fromTag("br");
            rn(Nt.fromDom(t), n), e.undoManager.add();
        },
        eS = function (e, t) {
            tS(e.getBody(), t) || on(Nt.fromDom(t), Nt.fromTag("br"));
            var n = Nt.fromTag("br");
            on(Nt.fromDom(t), n), Gx(e.dom, e.selection, n.dom), Jx(e.dom, e.selection, n.dom, !1), e.undoManager.add();
        },
        tS = function (e, t) {
            return (
                (n = Us.after(t)),
                !!In(n.getNode()) ||
                    Al(e, Us.after(t))
                        .map(function (e) {
                            return In(e.getNode());
                        })
                        .getOr(!1)
            );
            var n;
        },
        nS = function (e) {
            return e && "A" === e.nodeName && "href" in e;
        },
        rS = function (e) {
            return e.fold(p, nS, nS, p);
        },
        oS = function (e, t) {
            t.fold(V, E(Zx, e), E(eS, e), V);
        },
        iS = function (e, t) {
            var n,
                r,
                o,
                i = ((r = E(yb, (n = e))), (o = Us.fromRangeStart(n.selection.getRng())), RC(r, n.getBody(), o).filter(rS));
            i.isSome() ? i.each(E(oS, e)) : Qx(e, t);
        },
        aS = function (e, t) {
            return Mx(e)
                .filter(function (e) {
                    return 0 < t.length && kt(Nt.fromDom(e), t);
                })
                .isSome();
        },
        uS = gr([{ br: [] }, { block: [] }, { none: [] }]),
        sS = function (e, t) {
            return aS((n = e), n.getParam("no_newline_selector", ""));
            var n;
        },
        cS = function (n) {
            return function (e, t) {
                return ("" === fc(e)) === n;
            };
        },
        lS = function (n) {
            return function (e, t) {
                return (
                    Mx(e)
                        .filter(function (e) {
                            return Zr(Nt.fromDom(e));
                        })
                        .isSome() === n
                );
            };
        },
        fS = function (n, r) {
            return function (e, t) {
                return (
                    (Mx(e).fold(N(""), function (e) {
                        return e.nodeName.toUpperCase();
                    }) ===
                        n.toUpperCase()) ===
                    r
                );
            };
        },
        dS = function (e) {
            return fS("pre", e);
        },
        mS = function (n) {
            return function (e, t) {
                return e.getParam("br_in_pre", !0) === n;
            };
        },
        pS = function (e, t) {
            return aS((n = e), n.getParam("br_newline_selector", ".mce-toc h2,figcaption,caption"));
            var n;
        },
        gS = function (e, t) {
            return t;
        },
        hS = function (e) {
            var t = fc(e),
                n = (function (e, t) {
                    for (var n, r = e.getRoot(), o = t; o !== r && "false" !== e.getContentEditable(o); ) "true" === e.getContentEditable(o) && (n = o), (o = o.parentNode);
                    return o !== r ? n : r;
                })(e.dom, e.selection.getStart());
            return n && e.schema.isValidChild(n.nodeName, t || "P");
        },
        vS = function (e, t) {
            return function (n, r) {
                return W(
                    e,
                    function (e, t) {
                        return e && t(n, r);
                    },
                    !0
                )
                    ? U.some(t)
                    : U.none();
            };
        },
        yS = function (e, t) {
            return yC(
                [
                    vS([sS], uS.none()),
                    vS([fS("summary", !0)], uS.br()),
                    vS([dS(!0), mS(!1), gS], uS.br()),
                    vS([dS(!0), mS(!1)], uS.block()),
                    vS([dS(!0), mS(!0), gS], uS.block()),
                    vS([dS(!0), mS(!0)], uS.br()),
                    vS([lS(!0), gS], uS.br()),
                    vS([lS(!0)], uS.block()),
                    vS([cS(!0), gS, hS], uS.block()),
                    vS([cS(!0)], uS.br()),
                    vS([pS], uS.br()),
                    vS([cS(!1), gS], uS.br()),
                    vS([hS], uS.block()),
                ],
                [e, !(!t || !t.shiftKey)]
            ).getOr(uS.none());
        },
        bS = function (e, t) {
            yS(e, t).fold(
                function () {
                    iS(e, t);
                },
                function () {
                    Yx(e, t);
                },
                V
            );
        },
        CS = function (o) {
            o.on("keydown", function (e) {
                var t, n, r;
                e.keyCode === Gf.ENTER &&
                    ((t = o),
                    (n = e).isDefaultPrevented() ||
                        (n.preventDefault(),
                        (r = t.undoManager).typing && ((r.typing = !1), r.add()),
                        t.undoManager.transact(function () {
                            !1 === t.selection.isCollapsed() && t.execCommand("Delete"), bS(t, n);
                        })));
            });
        },
        wS = function (r) {
            r.on("keydown", function (e) {
                var t, n;
                !1 === e.isDefaultPrevented() &&
                    ((t = r),
                    (n = e),
                    px(
                        [
                            { keyCode: Gf.END, action: mx(ox, t, !0) },
                            { keyCode: Gf.HOME, action: mx(ox, t, !1) },
                            { keyCode: Gf.END, action: mx(vx, t, !0) },
                            { keyCode: Gf.HOME, action: mx(vx, t, !1) },
                        ],
                        n
                    ).each(function (e) {
                        n.preventDefault();
                    }));
            });
        },
        xS = st().browser,
        SS = function (t) {
            var e, n;
            (e = t),
                (n = Pu(function () {
                    e.composing || Lp(e);
                }, 0)),
                xS.isIE() &&
                    (e.on("keypress", function (e) {
                        n.throttle();
                    }),
                    e.on("remove", function (e) {
                        n.cancel();
                    })),
                t.on("input", function (e) {
                    !1 === e.isComposing && Lp(t);
                });
        },
        NS = function (n, r) {
            var e = r.container(),
                t = r.offset();
            return On(e)
                ? (e.insertData(t, n), U.some(Is(e, t + n.length)))
                : ul(r).map(function (e) {
                      var t = Nt.fromText(n);
                      return (r.isAtEnd() ? on : rn)(e, t), Is(t.dom, n.length);
                  });
        },
        ES = E(NS, oo),
        kS = E(NS, " "),
        _S = function (r, o) {
            return function (e) {
                return (t = r), (!kp((n = e)) && (_p(t, n) || Np(t, n) || Ep(t, n)) ? ES : kS)(o);
                var t, n;
            };
        },
        RS = function (e) {
            var t,
                n,
                r = Us.fromRangeStart(e.selection.getRng()),
                o = Nt.fromDom(e.getBody());
            if (e.selection.isCollapsed()) {
                var i = E(yb, e),
                    a = Us.fromRangeStart(e.selection.getRng());
                return RC(i, e.getBody(), a)
                    .bind(
                        ((n = o),
                        function (e) {
                            return e.fold(
                                function (e) {
                                    return Dl(n.dom, Us.before(e));
                                },
                                function (e) {
                                    return Ol(e);
                                },
                                function (e) {
                                    return Bl(e);
                                },
                                function (e) {
                                    return Al(n.dom, Us.after(e));
                                }
                            );
                        })
                    )
                    .bind(_S(o, r))
                    .exists(
                        ((t = e),
                        function (e) {
                            return t.selection.setRng(e.toRange()), t.nodeChanged(), !0;
                        })
                    );
            }
            return !1;
        },
        TS = function (r) {
            r.on("keydown", function (e) {
                var t, n;
                !1 === e.isDefaultPrevented() &&
                    ((t = r),
                    (n = e),
                    px([{ keyCode: Gf.SPACEBAR, action: mx(RS, t) }], n).each(function (e) {
                        n.preventDefault();
                    }));
            });
        },
        AS = function (e) {
            var t,
                n = $C(e);
            return (t = e).on("keyup compositionstart", E(yw, t)), Px(e, n), Lx(e, n), CS(e), TS(e), SS(e), wS(e), n;
        },
        DS =
            ((OS.prototype.nodeChanged = function (e) {
                var t,
                    n,
                    r,
                    o = this.editor.selection;
                this.editor.initialized &&
                    o &&
                    !this.editor.getParam("disable_nodechange") &&
                    !this.editor.mode.isReadOnly() &&
                    ((r = this.editor.getBody()),
                    ((t = o.getStart(!0) || r).ownerDocument === this.editor.getDoc() && this.editor.dom.isChildOf(t, r)) || (t = r),
                    (n = []),
                    this.editor.dom.getParent(t, function (e) {
                        return e === r || void n.push(e);
                    }),
                    ((e = e || {}).element = t),
                    (e.parents = n),
                    this.editor.fire("NodeChange", e));
            }),
            (OS.prototype.isSameElementPath = function (e) {
                var t,
                    n = this.editor.$(e).parentsUntil(this.editor.getBody()).add(e);
                if (n.length === this.lastPath.length) {
                    for (t = n.length; 0 <= t && n[t] === this.lastPath[t]; t--);
                    if (-1 === t) return (this.lastPath = n), !0;
                }
                return (this.lastPath = n), !1;
            }),
            OS);
    function OS(r) {
        var o;
        (this.lastPath = []), (this.editor = r);
        var t = this;
        "onselectionchange" in r.getDoc() ||
            r.on("NodeChange click mouseup keyup focus", function (e) {
                var t = r.selection.getRng(),
                    n = { startContainer: t.startContainer, startOffset: t.startOffset, endContainer: t.endContainer, endOffset: t.endOffset };
                ("nodechange" !== e.type && td(n, o)) || r.fire("SelectionChange"), (o = n);
            }),
            r.on("contextmenu", function () {
                r.fire("SelectionChange");
            }),
            r.on("SelectionChange", function () {
                var e = r.selection.getStart(!0);
                !e || (!vt.range && r.selection.isCollapsed()) || (Of(r) && !t.isSameElementPath(e) && r.dom.isChildOf(e, r.getBody()) && r.nodeChanged({ selectionChange: !0 }));
            }),
            r.on("mouseup", function (e) {
                !e.isDefaultPrevented() &&
                    Of(r) &&
                    ("IMG" === r.selection.getNode().nodeName
                        ? Fr.setEditorTimeout(r, function () {
                              r.nodeChanged();
                          })
                        : r.nodeChanged());
            });
    }
    var BS = function (e) {
            var t, n;
            (t = e).on("click", function (e) {
                t.dom.getParent(e.target, "details") && e.preventDefault();
            }),
                (n = e).parser.addNodeFilter("details", function (e) {
                    $(e, function (e) {
                        e.attr("data-mce-open", e.attr("open")), e.attr("open", "open");
                    });
                }),
                n.serializer.addNodeFilter("details", function (e) {
                    $(e, function (e) {
                        var t = e.attr("data-mce-open");
                        e.attr("open", q(t) ? t : null), e.attr("data-mce-open", null);
                    });
                });
        },
        PS = function (e) {
            return Nn(e) && Jr(Nt.fromDom(e));
        },
        LS = function (a) {
            a.on("click", function (e) {
                var t, n, r, o, i;
                3 <= e.detail &&
                    ((r = (t = a).selection.getRng()),
                    (o = Is.fromRangeStart(r)),
                    (i = Is.fromRangeEnd(r)),
                    Is.isElementPosition(o) &&
                        ((n = o.container()),
                        PS(n) &&
                            Ol(n).each(function (e) {
                                return r.setStart(e.container(), e.offset());
                            })),
                    Is.isElementPosition(i) &&
                        ((n = o.container()),
                        PS(n) &&
                            Bl(n).each(function (e) {
                                return r.setEnd(e.container(), e.offset());
                            })),
                    t.selection.setRng(Eg(r)));
            });
        },
        IS = function (e) {
            var t = e.getBoundingClientRect(),
                n = e.ownerDocument,
                r = n.documentElement,
                o = n.defaultView;
            return { top: t.top + o.pageYOffset - r.clientTop, left: t.left + o.pageXOffset - r.clientLeft };
        },
        MS = function (e, t) {
            return (
                (n = (u = e).inline ? IS(u.getBody()) : { left: 0, top: 0 }),
                (a = (i = e).getBody()),
                (r = i.inline ? { left: a.scrollLeft, top: a.scrollTop } : { left: 0, top: 0 }),
                {
                    pageX:
                        (o = (function (e, t) {
                            if (t.target.ownerDocument === e.getDoc()) return { left: t.pageX, top: t.pageY };
                            var n,
                                r,
                                o,
                                i,
                                a,
                                u = IS(e.getContentAreaContainer()),
                                s =
                                    ((r = (n = e).getBody()),
                                    (o = n.getDoc().documentElement),
                                    (i = { left: r.scrollLeft, top: r.scrollTop }),
                                    (a = { left: r.scrollLeft || o.scrollLeft, top: r.scrollTop || o.scrollTop }),
                                    n.inline ? i : a);
                            return { left: t.pageX - u.left + s.left, top: t.pageY - u.top + s.top };
                        })(e, t)).left -
                        n.left +
                        r.left,
                    pageY: o.top - n.top + r.top,
                }
            );
            var n, r, o, i, a, u;
        },
        FS = Un,
        US = Fn,
        zS = function (e) {
            e && e.parentNode && e.parentNode.removeChild(e);
        },
        jS = function (u, s) {
            return function (e) {
                var t, n, r, o, i, a;
                0 === e.button &&
                    ((t = K(
                        s.dom.getParents(e.target),
                        (function () {
                            for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                            return function (e) {
                                for (var t = 0; t < n.length; t++) if (n[t](e)) return !0;
                                return !1;
                            };
                        })(FS, US)
                    ).getOr(null)),
                    (i = s.getBody()),
                    FS((a = t)) &&
                        a !== i &&
                        ((n = s.dom.getPos(t)),
                        (r = s.getBody()),
                        (o = s.getDoc().documentElement),
                        u.set({
                            element: t,
                            dragging: !1,
                            screenX: e.screenX,
                            screenY: e.screenY,
                            maxX: (s.inline ? r.scrollWidth : o.offsetWidth) - 2,
                            maxY: (s.inline ? r.scrollHeight : o.offsetHeight) - 2,
                            relX: e.pageX - n.x,
                            relY: e.pageY - n.y,
                            width: t.offsetWidth,
                            height: t.offsetHeight,
                            ghost: (function (e, t, n, r) {
                                var o = e.dom,
                                    i = t.cloneNode(!0);
                                o.setStyles(i, { width: n, height: r }), o.setAttrib(i, "data-mce-selected", null);
                                var a = o.create("div", { class: "mce-drag-container", "data-mce-bogus": "all", unselectable: "on", contenteditable: "false" });
                                return (
                                    o.setStyles(a, { position: "absolute", opacity: 0.5, overflow: "hidden", border: 0, padding: 0, margin: 0, width: n, height: r }),
                                    o.setStyles(i, { margin: 0, boxSizing: "border-box" }),
                                    a.appendChild(i),
                                    a
                                );
                            })(s, t, t.offsetWidth, t.offsetHeight),
                        })));
            };
        },
        HS = function (e, h) {
            var v = Fr.throttle(function (e, t) {
                h._selectionOverrides.hideFakeCaret(), h.selection.placeCaretAt(e, t);
            }, 0);
            return function (g) {
                return e.on(function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i,
                        a,
                        u,
                        s,
                        c,
                        l,
                        f,
                        d,
                        m,
                        p = Math.max(Math.abs(g.screenX - e.screenX), Math.abs(g.screenY - e.screenY));
                    if (!e.dragging && 10 < p) {
                        if (h.fire("dragstart", { target: e.element }).isDefaultPrevented()) return;
                        (e.dragging = !0), h.focus();
                    }
                    e.dragging &&
                        ((d = e),
                        (t = { pageX: (m = MS(h, g)).pageX - d.relX, pageY: m.pageY + 5 }),
                        (l = e.ghost),
                        (f = h.getBody()),
                        l.parentNode !== f && f.appendChild(l),
                        (n = e.ghost),
                        (r = t),
                        (o = e.width),
                        (i = e.height),
                        (a = e.maxX),
                        (u = e.maxY),
                        (c = s = 0),
                        (n.style.left = r.pageX + "px"),
                        (n.style.top = r.pageY + "px"),
                        r.pageX + o > a && (s = r.pageX + o - a),
                        r.pageY + i > u && (c = r.pageY + i - u),
                        (n.style.width = o - s + "px"),
                        (n.style.height = i - c + "px"),
                        v(g.clientX, g.clientY));
                });
            };
        },
        VS = function (e, l) {
            return function (c) {
                e.on(function (e) {
                    var t, n, r, o, i, a, u, s;
                    e.dragging &&
                        ((u = (o = l).selection),
                        (s = u.getSel().getRangeAt(0).startContainer),
                        (i = 3 === s.nodeType ? s.parentNode : s),
                        (a = e.element),
                        i === a ||
                            o.dom.isChildOf(i, a) ||
                            FS(i) ||
                            ((n = e.element),
                            (r = n.cloneNode(!0)).removeAttribute("data-mce-selected"),
                            (t = r),
                            l.fire("drop", { clientX: c.clientX, clientY: c.clientY }).isDefaultPrevented() ||
                                l.undoManager.transact(function () {
                                    zS(e.element), l.insertContent(l.dom.getOuterHTML(t)), l._selectionOverrides.hideFakeCaret();
                                })));
                }),
                    qS(e);
            };
        },
        qS = function (e) {
            e.on(function (e) {
                zS(e.ghost);
            }),
                e.clear();
        },
        $S = function (e) {
            var t,
                n,
                r,
                o =
                    ((t = ku(U.none())),
                    {
                        clear: function () {
                            return t.set(U.none());
                        },
                        set: function (e) {
                            return t.set(U.some(e));
                        },
                        isSet: function () {
                            return t.get().isSome();
                        },
                        on: function (e) {
                            return t.get().each(e);
                        },
                    }),
                i = bu.DOM,
                a = document,
                u = jS(o, e),
                s = HS(o, e),
                c = VS(o, e),
                l =
                    ((n = o),
                    function () {
                        n.on(function (e) {
                            e.dragging && r.fire("dragend");
                        }),
                            qS(n);
                    });
            (r = e).on("mousedown", u),
                e.on("mousemove", s),
                e.on("mouseup", c),
                i.bind(a, "mousemove", s),
                i.bind(a, "mouseup", l),
                e.on("remove", function () {
                    i.unbind(a, "mousemove", s), i.unbind(a, "mouseup", l);
                });
        },
        WS = function (e) {
            var n, i, a, u, t;
            $S(e),
                (n = e).on("drop", function (e) {
                    var t = "undefined" != typeof e.clientX ? n.getDoc().elementFromPoint(e.clientX, e.clientY) : null;
                    (!FS(t) && "false" !== n.dom.getContentEditableParent(t)) || e.preventDefault();
                }),
                e.getParam("block_unsupported_drop", !0, "boolean") &&
                    ((a = function (e) {
                        var t;
                        e.defaultPrevented || ((t = e.dataTransfer) && (I(t.types, "Files") || 0 < t.files.length) && (e.preventDefault(), "drop" === e.type && Hy(i, "Dropped file type is not supported")));
                    }),
                    (u = function (e) {
                        am(i, e.target) && a(e);
                    }),
                    (t = function () {
                        var t = bu.DOM,
                            n = i.dom,
                            r = document,
                            o = i.inline ? i.getBody() : i.getDoc(),
                            e = ["drop", "dragover"];
                        $(e, function (e) {
                            t.bind(r, e, u), n.bind(o, e, a);
                        }),
                            i.on("remove", function () {
                                $(e, function (e) {
                                    t.unbind(r, e, u), n.unbind(o, e, a);
                                });
                            });
                    }),
                    (i = e).on("init", function () {
                        Fr.setEditorTimeout(i, t, 0);
                    }));
        },
        KS = Fn,
        XS = Un,
        YS = function (e, t) {
            return Xf(e.getBody(), t);
        },
        GS = function (u) {
            var s,
                c = u.selection,
                l = u.dom,
                f = l.isBlock,
                d = u.getBody(),
                m = Fc(u, d, f, function () {
                    return pm(u);
                }),
                p = "sel-" + l.uniqueId(),
                i = "data-mce-selected",
                g = function (e) {
                    return XS(e) || jn(e);
                },
                h = function (e) {
                    e && c.setRng(e);
                },
                r = c.getRng,
                v = function (e, t, n, r) {
                    return void 0 === r && (r = !0), u.fire("ShowCaret", { target: t, direction: e, before: n }).isDefaultPrevented() ? null : (r && c.scrollIntoView(t, -1 === e), m.show(n, t));
                },
                t = function (e) {
                    return mo(e) || yo(e) || bo(e);
                },
                y = function (e) {
                    return t(e.startContainer) || t(e.endContainer);
                },
                b = function (e) {
                    var t = u.schema.getShortEndedElements(),
                        n = l.createRng(),
                        r = e.startContainer,
                        o = e.startOffset,
                        i = e.endContainer,
                        a = e.endOffset;
                    return me(t, r.nodeName.toLowerCase()) ? (0 === o ? n.setStartBefore(r) : n.setStartAfter(r)) : n.setStart(r, o), me(t, i.nodeName.toLowerCase()) ? (0 === a ? n.setEndBefore(i) : n.setEndAfter(i)) : n.setEnd(i, a), n;
                },
                C = function (e) {
                    var t = e.cloneNode(!0),
                        n = u.fire("ObjectSelected", { target: e, targetClone: t });
                    if (n.isDefaultPrevented()) return null;
                    var r = (function (e, t, n) {
                            var r = u.$,
                                o = Er(Nt.fromDom(u.getBody()), "#" + p).fold(
                                    function () {
                                        return r([]);
                                    },
                                    function (e) {
                                        return r([e.dom]);
                                    }
                                );
                            0 === o.length && (o = r('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id", p)).appendTo(u.getBody());
                            var i = l.createRng();
                            t === n && vt.ie
                                ? (o.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(t), i.setStartAfter(o[0].firstChild.firstChild), i.setEndAfter(t))
                                : (o.empty().append(oo).append(t).append(oo), i.setStart(o[0].firstChild, 1), i.setEnd(o[0].lastChild, 0)),
                                o.css({ top: l.getPos(e, u.getBody()).y }),
                                o[0].focus();
                            var a = c.getSel();
                            return a.removeAllRanges(), a.addRange(i), i;
                        })(e, n.targetClone, t),
                        o = Nt.fromDom(e);
                    return (
                        $(qu(Nt.fromDom(u.getBody()), "*[data-mce-selected]"), function (e) {
                            Rt(o, e) || Kn(e, i);
                        }),
                        l.getAttrib(e, i) || e.setAttribute(i, "1"),
                        (s = e),
                        S(),
                        r
                    );
                },
                w = function (e, t) {
                    if (!e) return null;
                    if (e.collapsed) {
                        if (!y(e)) {
                            var n = t ? 1 : -1,
                                r = al(n, d, e),
                                o = r.getNode(!t);
                            if (jc(o)) return v(n, o, !!t && !r.isAtEnd(), !1);
                            var i = r.getNode(t);
                            if (jc(i)) return v(n, i, !t && !r.isAtEnd(), !1);
                        }
                        return null;
                    }
                    var a = e.startContainer,
                        u = e.startOffset,
                        s = e.endOffset;
                    if ((3 === a.nodeType && 0 === u && XS(a.parentNode) && ((a = a.parentNode), (u = l.nodeIndex(a)), (a = a.parentNode)), 1 !== a.nodeType)) return null;
                    if (s === u + 1 && a === e.endContainer) {
                        var c = a.childNodes[u];
                        if (g(c)) return C(c);
                    }
                    return null;
                },
                x = function () {
                    s && s.removeAttribute(i), Er(Nt.fromDom(u.getBody()), "#" + p).each(ln), (s = null);
                },
                S = function () {
                    m.hide();
                };
            return (
                vt.ceFalse &&
                    (function () {
                        u.on("mouseup", function (e) {
                            var t = r();
                            t.collapsed && Ly(u, e.clientX, e.clientY) && Wb(u, t, !1).each(h);
                        }),
                            u.on("click", function (e) {
                                var t = YS(u, e.target);
                                t && (XS(t) && (e.preventDefault(), u.focus()), KS(t) && l.isChildOf(t, c.getNode()) && x());
                            }),
                            u.on("blur NewBlock", x),
                            u.on("ResizeWindow FullscreenStateChanged", m.reposition);
                        var a = function (e) {
                                var t = wl(e);
                                if (!e.firstChild) return !1;
                                var n,
                                    r = Us.before(e.firstChild),
                                    o = t.next(r);
                                return o && !(ep((n = o)) || tp(n) || Gm(n) || Jm(n));
                            },
                            i = function (e, t) {
                                var n,
                                    r,
                                    o = l.getParent(e, f),
                                    i = l.getParent(t, f);
                                return !(!o || e === i || !l.isChildOf(o, i) || !1 !== XS(YS(u, o))) || (o && ((n = o), (r = i), !(l.getParent(n, f) === l.getParent(r, f))) && a(o));
                            };
                        u.on(
                            "tap",
                            function (e) {
                                var t = e.target,
                                    n = YS(u, t);
                                XS(n) ? (e.preventDefault(), $b(u, n).each(w)) : g(t) && $b(u, t).each(w);
                            },
                            !0
                        ),
                            u.on("mousedown", function (e) {
                                var t,
                                    n,
                                    r,
                                    o = e.target;
                                (o !== d && "HTML" !== o.nodeName && !l.isChildOf(o, d)) ||
                                    !1 === Ly(u, e.clientX, e.clientY) ||
                                    ((t = YS(u, o))
                                        ? XS(t)
                                            ? (e.preventDefault(), $b(u, t).each(w))
                                            : (x(), (KS(t) && e.shiftKey) || Yf(e.clientX, e.clientY, c.getRng()) || (S(), c.placeCaretAt(e.clientX, e.clientY)))
                                        : g(o)
                                        ? $b(u, o).each(w)
                                        : !1 === jc(o) && (x(), S(), (n = $w(d, e.clientX, e.clientY)) && (i(o, n.node) || (e.preventDefault(), (r = v(1, n.node, n.before, !1)), u.getBody().focus(), h(r)))));
                            }),
                            u.on("keypress", function (e) {
                                Gf.modifierPressed(e) || (XS(c.getNode()) && e.preventDefault());
                            }),
                            u.on("GetSelectionRange", function (e) {
                                var t = e.range;
                                if (s) {
                                    if (!s.parentNode) return void (s = null);
                                    (t = t.cloneRange()).selectNode(s), (e.range = t);
                                }
                            }),
                            u.on("SetSelectionRange", function (e) {
                                e.range = b(e.range);
                                var t = w(e.range, e.forward);
                                t && (e.range = t);
                            });
                        var n, e, o;
                        u.on("AfterSetSelectionRange", function (e) {
                            var t,
                                n = e.range,
                                r = n.startContainer.parentNode;
                            y(n) || "mcepastebin" === r.id || S(), (t = r), l.hasClass(t, "mce-offscreen-selection") || x();
                        }),
                            u.on("copy", function (e) {
                                var t,
                                    n,
                                    r = e.clipboardData;
                                e.isDefaultPrevented() ||
                                    !e.clipboardData ||
                                    vt.ie ||
                                    ((t = (n = l.get(p)) ? n.getElementsByTagName("*")[0] : n) && (e.preventDefault(), r.clearData(), r.setData("text/html", t.outerHTML), r.setData("text/plain", t.outerText || t.innerText)));
                            }),
                            WS(u),
                            (e = Pu(function () {
                                var e, t;
                                n.removed || !n.getBody().contains(document.activeElement) || ((e = n.selection.getRng()).collapsed && ((t = Kb(n, e, !1)), n.selection.setRng(t)));
                            }, 0)),
                            (n = u).on("focus", function () {
                                e.throttle();
                            }),
                            n.on("blur", function () {
                                e.cancel();
                            }),
                            (o = u).on("init", function () {
                                o.on("focusin", function (e) {
                                    var t,
                                        n,
                                        r = e.target;
                                    jn(r) &&
                                        ((t = Xf(o.getBody(), r)),
                                        (n = Un(t) ? t : r),
                                        o.selection.getNode() !== n &&
                                            $b(o, n).each(function (e) {
                                                return o.selection.setRng(e);
                                            }));
                                });
                            });
                    })(),
                {
                    showCaret: v,
                    showBlockCaretContainer: function (e) {
                        e.hasAttribute("data-mce-caret") && (Co(e), h(r()), c.scrollIntoView(e));
                    },
                    hideFakeCaret: S,
                    destroy: function () {
                        m.destroy(), (s = null);
                    },
                }
            );
        },
        JS = function (u) {
            var s,
                n,
                r,
                o = xt.each,
                c = Gf.BACKSPACE,
                l = Gf.DELETE,
                f = u.dom,
                d = u.selection,
                e = u.parser,
                t = vt.gecko,
                i = vt.ie,
                a = vt.webkit,
                m = "data:text/mce-internal,",
                p = i ? "Text" : "URL",
                g = function (e, t) {
                    try {
                        u.getDoc().execCommand(e, !1, t);
                    } catch (n) {}
                },
                h = function (e) {
                    return e.isDefaultPrevented();
                },
                v = function () {
                    u.shortcuts.add("meta+a", null, "SelectAll");
                },
                y = function () {
                    u.on("keydown", function (e) {
                        if (!h(e) && e.keyCode === c && d.isCollapsed() && 0 === d.getRng().startOffset) {
                            var t = d.getNode().previousSibling;
                            if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1;
                        }
                    });
                },
                b = function () {
                    u.inline ||
                        (u.contentStyles.push("body {min-height: 150px}"),
                        u.on("click", function (e) {
                            var t;
                            if ("HTML" === e.target.nodeName) {
                                if (11 < vt.ie) return void u.getBody().focus();
                                (t = u.selection.getRng()), u.getBody().focus(), u.selection.setRng(t), u.selection.normalize(), u.nodeChanged();
                            }
                        }));
                };
            return (
                u.on("keydown", function (e) {
                    var t;
                    if (!h(e) && e.keyCode === Gf.BACKSPACE) {
                        var n = (t = d.getRng()).startContainer,
                            r = t.startOffset,
                            o = f.getRoot(),
                            i = n;
                        if (t.collapsed && 0 === r) {
                            for (; i && i.parentNode && i.parentNode.firstChild === i && i.parentNode !== o; ) i = i.parentNode;
                            "BLOCKQUOTE" === i.tagName && (u.formatter.toggle("blockquote", null, i), (t = f.createRng()).setStart(n, 0), t.setEnd(n, 0), d.setRng(t));
                        }
                    }
                }),
                (s = function (e) {
                    var t = f.create("body"),
                        n = e.cloneContents();
                    return t.appendChild(n), d.serializer.serialize(t, { format: "html" });
                }),
                u.on("keydown", function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i,
                        a = e.keyCode;
                    if (!h(e) && (a === l || a === c)) {
                        if (((t = u.selection.isCollapsed()), (n = u.getBody()), t && !f.isEmpty(n))) return;
                        if (!t && ((r = u.selection.getRng()), (o = s(r)), (i = f.createRng()).selectNode(u.getBody()), o !== s(i))) return;
                        e.preventDefault(), u.setContent(""), n.firstChild && f.isBlock(n.firstChild) ? u.selection.setCursorLocation(n.firstChild, 0) : u.selection.setCursorLocation(n, 0), u.nodeChanged();
                    }
                }),
                vt.windowsPhone ||
                    u.on(
                        "keyup focusin mouseup",
                        function (e) {
                            Gf.modifierPressed(e) || d.normalize();
                        },
                        !0
                    ),
                a &&
                    (u.inline ||
                        f.bind(u.getDoc(), "mousedown mouseup", function (e) {
                            var t;
                            if (e.target === u.getDoc().documentElement)
                                if (((t = d.getRng()), u.getBody().focus(), "mousedown" === e.type)) {
                                    if (mo(t.startContainer)) return;
                                    d.placeCaretAt(e.clientX, e.clientY);
                                } else d.setRng(t);
                        }),
                    u.on("click", function (e) {
                        var t = e.target;
                        /^(IMG|HR)$/.test(t.nodeName) && "false" !== f.getContentEditableParent(t) && (e.preventDefault(), u.selection.select(t), u.nodeChanged()),
                            "A" === t.nodeName && f.hasClass(t, "mce-item-anchor") && (e.preventDefault(), d.select(t));
                    }),
                    fc(u) &&
                        u.on("init", function () {
                            g("DefaultParagraphSeparator", fc(u));
                        }),
                    u.on("init", function () {
                        u.dom.bind(u.getBody(), "submit", function (e) {
                            e.preventDefault();
                        });
                    }),
                    y(),
                    e.addNodeFilter("br", function (e) {
                        for (var t = e.length; t--; ) "Apple-interchange-newline" === e[t].attr("class") && e[t].remove();
                    }),
                    vt.iOS
                        ? (u.inline ||
                              u.on("keydown", function () {
                                  document.activeElement === document.body && u.getWin().focus();
                              }),
                          b(),
                          u.on("click", function (e) {
                              var t = e.target;
                              do {
                                  if ("A" === t.tagName) return void e.preventDefault();
                              } while ((t = t.parentNode));
                          }),
                          u.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}"))
                        : v()),
                11 <= vt.ie && (b(), y()),
                vt.ie &&
                    (v(),
                    g("AutoUrlDetect", !1),
                    u.on("dragstart", function (e) {
                        var t, n, r;
                        (t = e).dataTransfer &&
                            (u.selection.isCollapsed() && "IMG" === t.target.tagName && d.select(t.target), 0 < (n = u.selection.getContent()).length && ((r = m + escape(u.id) + "," + escape(n)), t.dataTransfer.setData(p, r)));
                    }),
                    u.on("drop", function (e) {
                        var t, n, r, o, i, a;
                        h(e) ||
                            ((t = (i = e).dataTransfer && (a = i.dataTransfer.getData(p)) && 0 <= a.indexOf(m) ? ((a = a.substr(m.length).split(",")), { id: unescape(a[0]), html: unescape(a[1]) }) : null) &&
                                t.id !== u.id &&
                                (e.preventDefault(),
                                (n = ed(e.x, e.y, u.getDoc())),
                                d.setRng(n),
                                (r = t.html),
                                (o = !0),
                                u.queryCommandSupported("mceInsertClipboardContent") ? u.execCommand("mceInsertClipboardContent", !1, { content: r, internal: o }) : u.execCommand("mceInsertContent", !1, r)));
                    })),
                t &&
                    (u.on("keydown", function (e) {
                        if (!h(e) && e.keyCode === c) {
                            if (!u.getBody().getElementsByTagName("hr").length) return;
                            if (d.isCollapsed() && 0 === d.getRng().startOffset) {
                                var t = d.getNode(),
                                    n = t.previousSibling;
                                if ("HR" === t.nodeName) return f.remove(t), void e.preventDefault();
                                n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (f.remove(n), e.preventDefault());
                            }
                        }
                    }),
                    Range.prototype.getClientRects ||
                        u.on("mousedown", function (e) {
                            var t;
                            h(e) ||
                                "HTML" !== e.target.nodeName ||
                                ((t = u.getBody()).blur(),
                                Fr.setEditorTimeout(u, function () {
                                    t.focus();
                                }));
                        }),
                    (n = function () {
                        var e = f.getAttribs(d.getStart().cloneNode(!1));
                        return function () {
                            var t = d.getStart();
                            t !== u.getBody() &&
                                (f.setAttrib(t, "style", null),
                                o(e, function (e) {
                                    t.setAttributeNode(e.cloneNode(!0));
                                }));
                        };
                    }),
                    (r = function () {
                        return !d.isCollapsed() && f.getParent(d.getStart(), f.isBlock) !== f.getParent(d.getEnd(), f.isBlock);
                    }),
                    u.on("keypress", function (e) {
                        var t;
                        if (!h(e) && (8 === e.keyCode || 46 === e.keyCode) && r()) return (t = n()), u.getDoc().execCommand("delete", !1, null), t(), e.preventDefault(), !1;
                    }),
                    f.bind(u.getDoc(), "cut", function (e) {
                        var t;
                        !h(e) &&
                            r() &&
                            ((t = n()),
                            Fr.setEditorTimeout(u, function () {
                                t();
                            }));
                    }),
                    u.getParam("readonly") ||
                        u.on("BeforeExecCommand mousedown", function () {
                            g("StyleWithCSS", !1), g("enableInlineTableEditing", !1), yc(u) || g("enableObjectResizing", !1);
                        }),
                    u.on("SetContent ExecCommand", function (e) {
                        ("setcontent" !== e.type && "mceInsertLink" !== e.command) ||
                            o(f.select("a"), function (e) {
                                var t = e.parentNode,
                                    n = f.getRoot();
                                if (t.lastChild === e) {
                                    for (; t && !f.isBlock(t); ) {
                                        if (t.parentNode.lastChild !== t || t === n) return;
                                        t = t.parentNode;
                                    }
                                    f.add(t, "br", { "data-mce-bogus": 1 });
                                }
                            });
                    }),
                    u.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"),
                    vt.mac &&
                        u.on("keydown", function (e) {
                            !Gf.metaKeyPressed(e) || e.shiftKey || (37 !== e.keyCode && 39 !== e.keyCode) || (e.preventDefault(), u.selection.getSel().modify("move", 37 === e.keyCode ? "backward" : "forward", "lineboundary"));
                        }),
                    y()),
                {
                    refreshContentEditable: function () {},
                    isHidden: function () {
                        if (!t || u.removed) return !1;
                        var e = u.selection.getSel();
                        return !e || !e.rangeCount || 0 === e.rangeCount;
                    },
                }
            );
        },
        QS = bu.DOM,
        ZS = function (e) {
            return le(e, function (e) {
                return !1 === R(e);
            });
        },
        eN = function (e) {
            var t,
                n = e.settings,
                r = e.editorUpload.blobCache;
            return ZS({
                allow_conditional_comments: n.allow_conditional_comments,
                allow_html_data_urls: n.allow_html_data_urls,
                allow_html_in_named_anchor: n.allow_html_in_named_anchor,
                allow_script_urls: n.allow_script_urls,
                allow_unsafe_link_target: n.allow_unsafe_link_target,
                convert_fonts_to_spans: n.convert_fonts_to_spans,
                fix_list_elements: n.fix_list_elements,
                font_size_legacy_values: n.font_size_legacy_values,
                forced_root_block: n.forced_root_block,
                forced_root_block_attrs: n.forced_root_block_attrs,
                padd_empty_with_br: n.padd_empty_with_br,
                preserve_cdata: n.preserve_cdata,
                remove_trailing_brs: n.remove_trailing_brs,
                inline_styles: n.inline_styles,
                root_name: (t = e).inline ? t.getElement().nodeName.toLowerCase() : undefined,
                validate: !0,
                blob_cache: r,
                images_dataimg_filter: n.images_dataimg_filter,
            });
        },
        tN = function (u) {
            var e = u.dom.getRoot();
            u.inline ||
                (Of(u) && u.selection.getStart(!0) !== e) ||
                Ol(e).each(function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i = e.getNode(),
                        a = Tn(i) ? Ol(i).getOr(e) : e;
                    vt.browser.isIE() ? ((t = u), (n = a.toRange()), (r = Nt.fromDom(t.getBody())), (o = (Gd(t) ? U.from(n) : U.none()).map(Jd).filter(Yd(r))), (t.bookmark = o.isSome() ? o : t.bookmark)) : u.selection.setRng(a.toRange());
                });
        },
        nN = function (e) {
            var t;
            e.bindPendingEventDelegates(),
                (e.initialized = !0),
                e.fire("Init"),
                e.focus(!0),
                tN(e),
                e.nodeChanged({ initial: !0 }),
                e.execCallback("init_instance_callback", e),
                (t = e).settings.auto_focus &&
                    Fr.setEditorTimeout(
                        t,
                        function () {
                            var e = !0 === t.settings.auto_focus ? t : t.editorManager.get(t.settings.auto_focus);
                            e.destroyed || e.focus();
                        },
                        100
                    );
        },
        rN = function (t, e) {
            var n = t.settings,
                r = t.getDoc(),
                o = t.getBody();
            n.browser_spellcheck || n.gecko_spellcheck || ((r.body.spellcheck = !1), QS.setAttrib(o, "spellcheck", "false")), (t.quirks = JS(t)), t.fire("PostRender");
            var i,
                a,
                u,
                s,
                c,
                l,
                f,
                d,
                m,
                p,
                g,
                h = t.getParam("directionality", Au.isRtl() ? "rtl" : undefined);
            h !== undefined && (o.dir = h),
                n.protect &&
                    t.on("BeforeSetContent", function (t) {
                        xt.each(n.protect, function (e) {
                            t.content = t.content.replace(e, function (e) {
                                return "\x3c!--mce:protected " + escape(e) + "--\x3e";
                            });
                        });
                    }),
                t.on("SetContent", function () {
                    t.addVisual(t.getBody());
                }),
                !1 === e && t.load({ initial: !0, format: "html" }),
                (t.startContent = t.getContent({ format: "raw" })),
                t.on("compositionstart compositionend", function (e) {
                    t.composing = "compositionstart" === e.type;
                }),
                0 < t.contentStyles.length &&
                    ((i = ""),
                    xt.each(t.contentStyles, function (e) {
                        i += e + "\r\n";
                    }),
                    t.dom.addStyle(i)),
                (u = (a = t).contentCSS),
                (c = (s = a).inline ? s.ui.styleSheetLoader : s.dom.styleSheetLoader),
                (l = function () {
                    a.on("remove", function () {
                        return c.unloadAll(u);
                    }),
                        nN(a);
                }),
                c.loadAll(u, l, l),
                n.content_style &&
                    ((f = t),
                    (d = n.content_style),
                    (m = Nt.fromDom(f.getBody())),
                    (p = en(Zt(m))),
                    (g = Nt.fromTag("style")),
                    qn(g, "type", "text/css"),
                    un(g, Nt.fromText(d)),
                    un(p, g),
                    f.on("remove", function () {
                        ln(g);
                    }));
        },
        oN = function (t, e) {
            var n = t.settings,
                r = t.getElement(),
                o = t.getDoc();
            n.inline || (t.getElement().style.visibility = t.orgVisibility),
                e || t.inline || (o.open(), o.write(t.iframeHTML), o.close()),
                t.inline && (QS.addClass(r, "mce-content-body"), (t.contentDocument = o = document), (t.contentWindow = window), (t.bodyElement = r), (t.contentAreaContainer = r));
            var u,
                i,
                a,
                s,
                c = t.getBody();
            (c.disabled = !0),
                (t.readonly = !!n.readonly),
                t.readonly || (t.inline && "static" === QS.getStyle(c, "position", !0) && (c.style.position = "relative"), (c.contentEditable = t.getParam("content_editable_state", !0))),
                (c.disabled = !1),
                (t.editorUpload = Jy(t)),
                (t.schema = pi(n)),
                (t.dom = bu(o, {
                    keep_values: !0,
                    url_converter: t.convertURL,
                    url_converter_scope: t,
                    hex_colors: n.force_hex_style_colors,
                    update_styles: !0,
                    root_element: t.inline ? t.getBody() : null,
                    collect: function () {
                        return t.inline;
                    },
                    schema: t.schema,
                    contentCssCors: t.getParam("content_css_cors", !1, "boolean"),
                    referrerPolicy: gc(t),
                    onSetAttrib: function (e) {
                        t.fire("SetAttrib", e);
                    },
                })),
                (t.parser =
                    ((i = Zv(eN((u = t)), u.schema)).addAttributeFilter("src,href,style,tabindex", function (e, t) {
                        for (var n, r, o = e.length, i = u.dom, a = "data-mce-" + t; o--; )
                            if ((r = (n = e[o]).attr(t)) && !n.attr(a)) {
                                if (0 === r.indexOf("data:") || 0 === r.indexOf("blob:")) continue;
                                "style" === t ? ((r = i.serializeStyle(i.parseStyle(r), n.name)).length || (r = null), n.attr(a, r), n.attr(t, r)) : "tabindex" === t ? (n.attr(a, r), n.attr(t, null)) : n.attr(a, u.convertURL(r, t, n.name));
                            }
                    }),
                    i.addNodeFilter("script", function (e) {
                        for (var t = e.length; t--; ) {
                            var n = e[t],
                                r = n.attr("type") || "no/type";
                            0 !== r.indexOf("mce-") && n.attr("type", "mce-" + r);
                        }
                    }),
                    u.settings.preserve_cdata &&
                        i.addNodeFilter("#cdata", function (e) {
                            for (var t = e.length; t--; ) {
                                var n = e[t];
                                (n.type = 8), (n.name = "#comment"), (n.value = "[CDATA[" + u.dom.encode(n.value) + "]]");
                            }
                        }),
                    i.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function (e) {
                        for (var t = e.length, n = u.schema.getNonEmptyElements(); t--; ) {
                            var r = e[t];
                            r.isEmpty(n) && 0 === r.getAll("br").length && (r.append(new Em("br", 1)).shortEnded = !0);
                        }
                    }),
                    i)),
                (t.serializer = oy(
                    ((s = (a = t).settings),
                    xe(
                        xe({}, eN(a)),
                        ZS({
                            url_converter: s.url_converter,
                            url_converter_scope: s.url_converter_scope,
                            element_format: s.element_format,
                            entities: s.entities,
                            entity_encoding: s.entity_encoding,
                            indent: s.indent,
                            indent_after: s.indent_after,
                            indent_before: s.indent_before,
                            block_elements: s.block_elements,
                            boolean_attributes: s.boolean_attributes,
                            custom_elements: s.custom_elements,
                            extended_valid_elements: s.extended_valid_elements,
                            invalid_elements: s.invalid_elements,
                            invalid_styles: s.invalid_styles,
                            move_caret_before_on_enter_elements: s.move_caret_before_on_enter_elements,
                            non_empty_elements: s.non_empty_elements,
                            schema: s.schema,
                            self_closing_elements: s.self_closing_elements,
                            short_ended_elements: s.short_ended_elements,
                            special: s.special,
                            text_block_elements: s.text_block_elements,
                            text_inline_elements: s.text_inline_elements,
                            valid_children: s.valid_children,
                            valid_classes: s.valid_classes,
                            valid_elements: s.valid_elements,
                            valid_styles: s.valid_styles,
                            verify_html: s.verify_html,
                            whitespace_elements: s.whitespace_elements,
                        })
                    )),
                    t
                )),
                (t.selection = Ov(t.dom, t.getWin(), t.serializer, t)),
                (t.annotator = qf(t)),
                (t.formatter = cb(t)),
                (t.undoManager = fb(t)),
                (t._nodeChangeDispatcher = new DS(t)),
                (t._selectionOverrides = GS(t)),
                pw(t),
                BS(t),
                xv(t) || LS(t);
            var l,
                f,
                d,
                m,
                p = xv((l = t)) ? ku(null) : AS(l);
            dw(t, p),
                fc((f = t)) && f.on("NodeChange", E(hw, f)),
                hb(t),
                t.fire("PreInit"),
                de((m = d = t).plugins, "rtc")
                    .fold(
                        function () {
                            return (m.rtcInstance = Cv(d)), U.none();
                        },
                        function (e) {
                            return U.some(
                                e.setup().then(function (e) {
                                    return (m.rtcInstance = wv(d, e)), e.isRemote;
                                })
                            );
                        }
                    )
                    .fold(
                        function () {
                            rN(t, !1);
                        },
                        function (e) {
                            t.setProgressState(!0),
                                e.then(function (e) {
                                    t.setProgressState(!1), rN(t, e);
                                });
                        }
                    );
        },
        iN = bu.DOM,
        aN = function (e) {
            var t = e.getParam("doctype", "<!DOCTYPE html>") + "<html><head>";
            e.getParam("document_base_url", "") !== e.documentBaseUrl && (t += '<base href="' + e.documentBaseURI.getURI() + '" />'), (t += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />');
            var n = cc(e, "body_id", "tinymce"),
                r = cc(e, "body_class", "");
            return lc(e) && (t += '<meta http-equiv="Content-Security-Policy" content="' + lc(e) + '" />'), (t += '</head><body id="' + n + '" class="mce-content-body ' + r + '" data-id="' + e.id + '"><br></body></html>');
        },
        uN = function (e, t) {
            var n,
                r,
                o,
                i,
                a = e.editorManager.translate("Rich Text Area. Press ALT-0 for help."),
                u =
                    ((n = e.id),
                    (r = a),
                    t.height,
                    (o = e.getParam("iframe_attrs", {})),
                    (i = Nt.fromTag("iframe")),
                    $n(i, o),
                    $n(i, { id: n + "_ifr", frameBorder: "0", allowTransparency: "true", title: r }),
                    zu(i, "tox-edit-area__iframe"),
                    i.dom);
            u.onload = function () {
                (u.onload = null), e.fire("load");
            };
            var s = (function (e, t) {
                if (document.domain !== window.location.hostname && vt.browser.isIE()) {
                    var n = Gy("mce");
                    e[n] = function () {
                        oN(e);
                    };
                    var r = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var ed = window.parent.tinymce.get("' + e.id + '");document.write(ed.iframeHTML);document.close();ed.' + n + "(true);})()";
                    return iN.setAttrib(t, "src", r), !0;
                }
                return !1;
            })(e, u);
            return (e.contentAreaContainer = t.iframeContainer), (e.iframeElement = u), (e.iframeHTML = aN(e)), iN.add(t.iframeContainer, u), s;
        },
        sN = bu.DOM,
        cN = function (t, n, e) {
            var r = Fy.get(e),
                o = Fy.urls[e] || t.documentBaseUrl.replace(/\/$/, "");
            if (((e = xt.trim(e)), r && -1 === xt.inArray(n, e))) {
                if (
                    (xt.each(Fy.dependencies(e), function (e) {
                        cN(t, n, e);
                    }),
                    t.plugins[e])
                )
                    return;
                try {
                    var i = new r(t, o, t.$);
                    (t.plugins[e] = i).init && (i.init(t, o), n.push(e));
                } catch (pk) {
                    !(function (e, t, n) {
                        var r = Au.translate(["Failed to initialize plugin: {0}", t]);
                        Wy(r, n), Hy(e, r);
                    })(t, e, pk);
                }
            }
        },
        lN = function (e) {
            return e.replace(/^\-/, "");
        },
        fN = function (e) {
            return { editorContainer: e, iframeContainer: e, api: {} };
        },
        dN = function (e) {
            var t,
                n,
                r = e.getElement();
            return e.inline ? fN(null) : ((t = r), (n = sN.create("div")), sN.insertAfter(n, t), fN(n));
        },
        mN = function (e) {
            var t,
                n,
                r,
                o = e.getElement();
            return (
                (e.orgDisplay = o.style.display),
                q(Cc(e))
                    ? e.theme.renderUI()
                    : A(Cc(e))
                    ? ((n = (t = e).getElement()),
                      (r = Cc(t)(t, n)).editorContainer.nodeType && (r.editorContainer.id = r.editorContainer.id || t.id + "_parent"),
                      r.iframeContainer && r.iframeContainer.nodeType && (r.iframeContainer.id = r.iframeContainer.id || t.id + "_iframecontainer"),
                      (r.height = r.iframeHeight ? r.iframeHeight : n.offsetHeight),
                      r)
                    : dN(e)
            );
        },
        pN = function (e) {
            var n, t, r, o, i, a, u, s, c;
            e.fire("ScriptsLoaded"),
                (n = e),
                (t = xt.trim(pc(n))),
                (r = n.ui.registry.getAll().icons),
                (o = xe(xe({}, Ry.get("default").icons), Ry.get(t).icons)),
                oe(o, function (e, t) {
                    me(r, t) || n.ui.registry.addIcon(t, e);
                }),
                (u = Cc((i = e))),
                q(u) ? ((i.settings.theme = lN(u)), (a = Uy.get(u)), (i.theme = new a(i, Uy.urls[u])), i.theme.init && i.theme.init(i, Uy.urls[u] || i.documentBaseUrl.replace(/\/$/, ""), i.$)) : (i.theme = {}),
                (s = e),
                (c = []),
                xt.each(xc(s).split(/[ ,]/), function (e) {
                    cN(s, c, lN(e));
                });
            var l = mN(e);
            e.ui = xe(xe({}, e.ui), l.api);
            var f,
                d,
                m,
                p,
                g = { editorContainer: l.editorContainer, iframeContainer: l.iframeContainer };
            return (
                (e.editorContainer = g.editorContainer ? g.editorContainer : null),
                ((f = e).contentCSS = f.contentCSS.concat(Ky(f))),
                e.inline
                    ? oN(e)
                    : ((p = uN((d = e), (m = g))),
                      m.editorContainer && ((iN.get(m.editorContainer).style.display = d.orgDisplay), (d.hidden = iN.isHidden(m.editorContainer))),
                      (d.getElement().style.display = "none"),
                      iN.setAttrib(d.id, "aria-hidden", "true"),
                      void (p || oN(d)))
            );
        },
        gN = bu.DOM,
        hN = function (e) {
            return "-" === e.charAt(0);
        },
        vN = function (e, t) {
            var n,
                r = hc(t),
                o = t.getParam("language_url", "", "string");
            !1 === Au.hasCode(r) &&
                "en" !== r &&
                ((n = "" !== o ? o : t.editorManager.baseURL + "/langs/" + r + ".js"),
                e.add(n, V, undefined, function () {
                    Vy(t, "LanguageLoadError", qy("language", n, r));
                }));
        },
        yN = function (t, e, n) {
            return U.from(e)
                .filter(function (e) {
                    return 0 < e.length && !Ry.has(e);
                })
                .map(function (e) {
                    return { url: t.editorManager.baseURL + "/icons/" + e + "/icons" + n + ".js", name: U.some(e) };
                });
        },
        bN = function (e, o, t) {
            var n,
                r = yN(o, "default", t),
                i =
                    ((n = o),
                    U.from(n.getParam("icons_url", "", "string"))
                        .filter(function (e) {
                            return 0 < e.length;
                        })
                        .map(function (e) {
                            return { url: e, name: U.none() };
                        })
                        .orThunk(function () {
                            return yN(o, pc(o), "");
                        }));
            $(
                (function (e) {
                    for (
                        var t = [],
                            n = function (e) {
                                t.push(e);
                            },
                            r = 0;
                        r < e.length;
                        r++
                    )
                        e[r].each(n);
                    return t;
                })([r, i]),
                function (r) {
                    e.add(r.url, V, undefined, function () {
                        var e, t, n;
                        (e = o), (t = r.url), (n = r.name.getOrUndefined()), Vy(e, "IconsLoadError", qy("icons", t, n));
                    });
                }
            );
        },
        CN = function (e, t) {
            var n,
                r,
                o,
                i,
                a,
                u,
                s = Su.ScriptLoader;
            (n = s),
                (o = t),
                (i = function () {
                    var r, o;
                    vN(s, e),
                        bN(s, e, t),
                        (r = e),
                        (o = t),
                        xt.each(r.getParam("external_plugins"), function (e, t) {
                            Fy.load(t, e, V, undefined, function () {
                                $y(r, e, t);
                            }),
                                (r.settings.plugins += " " + t);
                        }),
                        xt.each(xc(r).split(/[ ,]/), function (e) {
                            var t, n;
                            (e = xt.trim(e)) &&
                                !Fy.urls[e] &&
                                (hN(e)
                                    ? ((e = e.substr(1, e.length)),
                                      (t = Fy.dependencies(e)),
                                      xt.each(t, function (e) {
                                          var t = { prefix: "plugins/", resource: e, suffix: "/plugin" + o + ".js" },
                                              n = Fy.createUrl(t, e);
                                          Fy.load(n.resource, n, V, undefined, function () {
                                              $y(r, n.prefix + n.resource + n.suffix, n.resource);
                                          });
                                      }))
                                    : ((n = { prefix: "plugins/", resource: e, suffix: "/plugin" + o + ".js" }),
                                      Fy.load(e, n, V, undefined, function () {
                                          $y(r, n.prefix + n.resource + n.suffix, e);
                                      })));
                        }),
                        s.loadQueue(
                            function () {
                                e.removed || pN(e);
                            },
                            e,
                            function () {
                                e.removed || pN(e);
                            }
                        );
                }),
                (u = Cc((r = e))),
                q(u)
                    ? (hN(u) || Uy.urls.hasOwnProperty(u) || ((a = r.getParam("theme_url")) ? Uy.load(u, r.documentBaseURI.toAbsolute(a)) : Uy.load(u, "themes/" + u + "/theme" + o + ".js")),
                      n.loadQueue(function () {
                          Uy.waitFor(u, i);
                      }))
                    : i();
        },
        wN = function (t) {
            var e = t.id;
            Au.setCode(hc(t));
            var n,
                r,
                o,
                i,
                a,
                u = function () {
                    gN.unbind(window, "ready", u), t.render();
                };
            Ni.Event.domLoaded
                ? t.getElement() &&
                  vt.contentEditable &&
                  ((n = Nt.fromDom(t.getElement())),
                  (r = W(
                      n.dom.attributes,
                      function (e, t) {
                          return (e[t.name] = t.value), e;
                      },
                      {}
                  )),
                  t.on("remove", function () {
                      z(n.dom.attributes, function (e) {
                          return Kn(n, e.name), 0;
                      }),
                          $n(n, r);
                  }),
                  (t.ui.styleSheetLoader = ((o = n), (i = t), jr.forElement(o, { contentCssCors: i.getParam("content_css_cors"), referrerPolicy: gc(i) }))),
                  t.getParam("inline") ? (t.inline = !0) : ((t.orgVisibility = t.getElement().style.visibility), (t.getElement().style.visibility = "hidden")),
                  (a = t.getElement().form || gN.getParent(e, "form")) &&
                      ((t.formElement = a),
                      t.getParam("hidden_input") && !Dn(t.getElement()) && (gN.insertAfter(gN.create("input", { type: "hidden", name: e }), e), (t.hasHiddenInput = !0)),
                      (t.formEventDelegate = function (e) {
                          t.fire(e.type, e);
                      }),
                      gN.bind(a, "submit reset", t.formEventDelegate),
                      t.on("reset", function () {
                          t.resetContent();
                      }),
                      !t.getParam("submit_patch") ||
                          a.submit.nodeType ||
                          a.submit.length ||
                          a._mceOldSubmit ||
                          ((a._mceOldSubmit = a.submit),
                          (a.submit = function () {
                              return t.editorManager.triggerSave(), t.setDirty(!1), a._mceOldSubmit(a);
                          }))),
                  (t.windowManager = zy(t)),
                  (t.notificationManager = My(t)),
                  "xml" === t.getParam("encoding") &&
                      t.on("GetContent", function (e) {
                          e.save && (e.content = gN.encode(e.content));
                      }),
                  t.getParam("add_form_submit_trigger") &&
                      t.on("submit", function () {
                          t.initialized && t.save();
                      }),
                  t.getParam("add_unload_trigger") &&
                      ((t._beforeUnload = function () {
                          !t.initialized || t.destroyed || t.isHidden() || t.save({ format: "raw", no_events: !0, set_dirty: !1 });
                      }),
                      t.editorManager.on("BeforeUnload", t._beforeUnload)),
                  t.editorManager.add(t),
                  CN(t, t.suffix))
                : gN.bind(window, "ready", u);
        },
        xN = function (e) {
            return A(e) ? e : p;
        },
        SN = function (e, t, n) {
            var r = t(e),
                o = xN(n);
            return r.orThunk(function () {
                return o(e)
                    ? U.none()
                    : (function (e, t, n) {
                          for (var r = e.dom, o = xN(n); r.parentNode; ) {
                              r = r.parentNode;
                              var i = Nt.fromDom(r),
                                  a = t(i);
                              if (a.isSome()) return a;
                              if (o(i)) break;
                          }
                          return U.none();
                      })(e, t, o);
            });
        },
        NN = { "font-size": "size", "font-family": "face" },
        EN = function (e, t, n) {
            var r = function (r) {
                return Jn(r, e).orThunk(function () {
                    return "font" === Dt(r)
                        ? de(NN, e).bind(function (e) {
                              return (t = r), (n = e), U.from(Wn(t, n));
                              var t, n;
                          })
                        : U.none();
                });
            };
            return SN(Nt.fromDom(n), r, function (e) {
                return Rt(Nt.fromDom(t), e);
            });
        },
        kN = function (o) {
            return function (r, e) {
                return U.from(e)
                    .map(Nt.fromDom)
                    .filter(Pt)
                    .bind(function (e) {
                        return EN(o, r, e.dom).or(((t = o), (n = e.dom), U.from(bu.DOM.getStyle(n, t, !0))));
                        var t, n;
                    })
                    .getOr("");
            };
        },
        _N = kN("font-size"),
        RN = a(function (e) {
            return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",");
        }, kN("font-family")),
        TN = function (e) {
            return Ol(e.getBody()).map(function (e) {
                var t = e.container();
                return On(t) ? t.parentNode : t;
            });
        },
        AN = function (e, t) {
            return (
                (n = e),
                U.from(n.selection.getRng())
                    .bind(function (e) {
                        var t = n.getBody();
                        return e.startContainer === t && 0 === e.startOffset ? U.none() : U.from(n.selection.getStart(!0));
                    })
                    .orThunk(E(TN, e))
                    .map(Nt.fromDom)
                    .filter(Pt)
                    .map(t)
            );
            var n;
        },
        DN = function (e, t) {
            if (/^[0-9.]+$/.test(t)) {
                var n = parseInt(t, 10);
                if (1 <= n && n <= 7) {
                    var r = ((a = e), xt.explode(a.getParam("font_size_style_values", "xx-small,x-small,small,medium,large,x-large,xx-large"))),
                        o = ((i = e), xt.explode(i.getParam("font_size_classes", "")));
                    return o ? o[n - 1] || t : r[n - 1] || t;
                }
                return t;
            }
            return t;
            var i, a;
        },
        ON = function (e, t) {
            var n,
                r = DN(e, t);
            e.formatter.toggle("fontname", {
                value:
                    ((n = r.split(/\s*,\s*/)),
                    F(n, function (e) {
                        return -1 === e.indexOf(" ") || Ue(e, '"') || Ue(e, "'") ? e : "'" + e + "'";
                    }).join(",")),
            }),
                e.nodeChanged();
        },
        BN = function (e, t) {
            var n,
                r,
                o,
                i,
                a = "string" != typeof (n = t) ? ((r = xt.extend({ paste: n.paste, data: { paste: n.paste } }, n)), { content: n.content, details: r }) : { content: n, details: {} };
            (o = a.content), (i = a.details), Sv(e).editor.insertContent(o, i);
        },
        PN = xt.each,
        LN = xt.map,
        IN = xt.inArray,
        MN =
            ((FN.prototype.execCommand = function (t, n, r, e) {
                var o,
                    i,
                    a = !1,
                    u = this;
                if (!u.editor.removed) {
                    if (
                        (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(t) || (e && e.skip_focus)
                            ? ((i = u.editor),
                              tm(i).each(function (e) {
                                  return i.selection.setRng(e);
                              }))
                            : u.editor.focus(),
                        (e = u.editor.fire("BeforeExecCommand", { command: t, ui: n, value: r })).isDefaultPrevented())
                    )
                        return !1;
                    var s = t.toLowerCase();
                    if ((o = u.commands.exec[s])) return o(s, n, r), u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0;
                    if (
                        (PN(this.editor.plugins, function (e) {
                            if (e.execCommand && e.execCommand(t, n, r)) return u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !(a = !0);
                        }),
                        a)
                    )
                        return a;
                    if (u.editor.theme && u.editor.theme.execCommand && u.editor.theme.execCommand(t, n, r)) return u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0;
                    try {
                        a = u.editor.getDoc().execCommand(t, n, r);
                    } catch (c) {}
                    return !!a && (u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0);
                }
            }),
            (FN.prototype.queryCommandState = function (e) {
                var t;
                if (!this.editor.quirks.isHidden() && !this.editor.removed) {
                    if (((e = e.toLowerCase()), (t = this.commands.state[e]))) return t(e);
                    try {
                        return this.editor.getDoc().queryCommandState(e);
                    } catch (n) {}
                    return !1;
                }
            }),
            (FN.prototype.queryCommandValue = function (e) {
                var t;
                if (!this.editor.quirks.isHidden() && !this.editor.removed) {
                    if (((e = e.toLowerCase()), (t = this.commands.value[e]))) return t(e);
                    try {
                        return this.editor.getDoc().queryCommandValue(e);
                    } catch (n) {}
                }
            }),
            (FN.prototype.addCommands = function (e, n) {
                void 0 === n && (n = "exec");
                var r = this;
                PN(e, function (t, e) {
                    PN(e.toLowerCase().split(","), function (e) {
                        r.commands[n][e] = t;
                    });
                });
            }),
            (FN.prototype.addCommand = function (e, o, i) {
                var a = this;
                (e = e.toLowerCase()),
                    (this.commands.exec[e] = function (e, t, n, r) {
                        return o.call(i || a.editor, t, n, r);
                    });
            }),
            (FN.prototype.queryCommandSupported = function (e) {
                if (((e = e.toLowerCase()), this.commands.exec[e])) return !0;
                try {
                    return this.editor.getDoc().queryCommandSupported(e);
                } catch (t) {}
                return !1;
            }),
            (FN.prototype.addQueryStateHandler = function (e, t, n) {
                var r = this;
                (e = e.toLowerCase()),
                    (this.commands.state[e] = function () {
                        return t.call(n || r.editor);
                    });
            }),
            (FN.prototype.addQueryValueHandler = function (e, t, n) {
                var r = this;
                (e = e.toLowerCase()),
                    (this.commands.value[e] = function () {
                        return t.call(n || r.editor);
                    });
            }),
            (FN.prototype.hasCustomCommand = function (e) {
                return (e = e.toLowerCase()), !!this.commands.exec[e];
            }),
            (FN.prototype.execNativeCommand = function (e, t, n) {
                return t === undefined && (t = !1), n === undefined && (n = null), this.editor.getDoc().execCommand(e, t, n);
            }),
            (FN.prototype.isFormatMatch = function (e) {
                return this.editor.formatter.match(e);
            }),
            (FN.prototype.toggleFormat = function (e, t) {
                this.editor.formatter.toggle(e, t ? { value: t } : undefined), this.editor.nodeChanged();
            }),
            (FN.prototype.storeSelection = function (e) {
                this.selectionBookmark = this.editor.selection.getBookmark(e);
            }),
            (FN.prototype.restoreSelection = function () {
                this.editor.selection.moveToBookmark(this.selectionBookmark);
            }),
            (FN.prototype.setupCommands = function (i) {
                var a = this;
                this.addCommands({
                    "mceResetDesignMode,mceBeginUndoLevel": function () {},
                    "mceEndUndoLevel,mceAddUndoLevel": function () {
                        i.undoManager.add();
                    },
                    "Cut,Copy,Paste": function (e) {
                        var t,
                            n,
                            r = i.getDoc();
                        try {
                            a.execNativeCommand(e);
                        } catch (o) {
                            t = !0;
                        }
                        "paste" !== e || r.queryCommandEnabled(e) || (t = !0),
                            (!t && r.queryCommandSupported(e)) ||
                                ((n = i.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.")),
                                vt.mac && (n = n.replace(/Ctrl\+/g, "\u2318+")),
                                i.notificationManager.open({ text: n, type: "error" }));
                    },
                    unlink: function () {
                        var e;
                        i.selection.isCollapsed() ? (e = i.dom.getParent(i.selection.getStart(), "a")) && i.dom.remove(e, !0) : i.formatter.remove("link");
                    },
                    "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function (e) {
                        var t = e.substring(7);
                        "full" === t && (t = "justify"),
                            PN("left,center,right,justify".split(","), function (e) {
                                t !== e && i.formatter.remove("align" + e);
                            }),
                            "none" !== t && a.toggleFormat("align" + t);
                    },
                    "InsertUnorderedList,InsertOrderedList": function (e) {
                        var t;
                        a.execNativeCommand(e);
                        var n = i.dom.getParent(i.selection.getNode(), "ol,ul");
                        n && ((t = n.parentNode), /^(H[1-6]|P|ADDRESS|PRE)$/.test(t.nodeName) && (a.storeSelection(), i.dom.split(t, n), a.restoreSelection()));
                    },
                    "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (e) {
                        a.toggleFormat(e);
                    },
                    "ForeColor,HiliteColor": function (e, t, n) {
                        a.toggleFormat(e, n);
                    },
                    FontName: function (e, t, n) {
                        ON(i, n);
                    },
                    FontSize: function (e, t, n) {
                        var r, o;
                        (o = n), (r = i).formatter.toggle("fontsize", { value: DN(r, o) }), r.nodeChanged();
                    },
                    LineHeight: function (e, t, n) {
                        var r, o;
                        (o = n),
                            (r = i).undoManager.transact(function () {
                                r.formatter.toggle("lineheight", { value: String(o) }), r.nodeChanged();
                            });
                    },
                    RemoveFormat: function (e) {
                        i.formatter.remove(e);
                    },
                    mceBlockQuote: function () {
                        a.toggleFormat("blockquote");
                    },
                    FormatBlock: function (e, t, n) {
                        return a.toggleFormat(n || "p");
                    },
                    mceCleanup: function () {
                        var e = i.selection.getBookmark();
                        i.setContent(i.getContent()), i.selection.moveToBookmark(e);
                    },
                    mceRemoveNode: function (e, t, n) {
                        var r = n || i.selection.getNode();
                        r !== i.getBody() && (a.storeSelection(), i.dom.remove(r, !0), a.restoreSelection());
                    },
                    mceSelectNodeDepth: function (e, t, n) {
                        var r = 0;
                        i.dom.getParent(
                            i.selection.getNode(),
                            function (e) {
                                if (1 === e.nodeType && r++ === n) return i.selection.select(e), !1;
                            },
                            i.getBody()
                        );
                    },
                    mceSelectNode: function (e, t, n) {
                        i.selection.select(n);
                    },
                    mceInsertContent: function (e, t, n) {
                        BN(i, n);
                    },
                    mceInsertRawHTML: function (e, t, n) {
                        i.selection.setContent("tiny_mce_marker");
                        var r = i.getContent();
                        i.setContent(
                            r.replace(/tiny_mce_marker/g, function () {
                                return n;
                            })
                        );
                    },
                    mceInsertNewLine: function (e, t, n) {
                        bS(i, n);
                    },
                    mceToggleFormat: function (e, t, n) {
                        a.toggleFormat(n);
                    },
                    mceSetContent: function (e, t, n) {
                        i.setContent(n);
                    },
                    "Indent,Outdent": function (e) {
                        cw(i, e);
                    },
                    mceRepaint: function () {},
                    InsertHorizontalRule: function () {
                        i.execCommand("mceInsertContent", !1, "<hr />");
                    },
                    mceToggleVisualAid: function () {
                        (i.hasVisual = !i.hasVisual), i.addVisual();
                    },
                    mceReplaceContent: function (e, t, n) {
                        i.execCommand("mceInsertContent", !1, n.replace(/\{\$selection\}/g, i.selection.getContent({ format: "text" })));
                    },
                    mceInsertLink: function (e, t, n) {
                        "string" == typeof n && (n = { href: n });
                        var r = i.dom.getParent(i.selection.getNode(), "a");
                        (n.href = n.href.replace(/ /g, "%20")), (r && n.href) || i.formatter.remove("link"), n.href && i.formatter.apply("link", n, r);
                    },
                    selectAll: function () {
                        var e,
                            t = i.dom.getParent(i.selection.getStart(), Fn);
                        t && ((e = i.dom.createRng()).selectNodeContents(t), i.selection.setRng(e));
                    },
                    mceNewDocument: function () {
                        i.setContent("");
                    },
                    InsertLineBreak: function (e, t, n) {
                        return iS(i, n), !0;
                    },
                });
                var e = function (r) {
                    return function () {
                        var e = i.selection,
                            t = e.isCollapsed() ? [i.dom.getParent(e.getNode(), i.dom.isBlock)] : e.getSelectedBlocks(),
                            n = LN(t, function (e) {
                                return !!i.formatter.matchNode(e, r);
                            });
                        return -1 !== IN(n, !0);
                    };
                };
                a.addCommands(
                    {
                        JustifyLeft: e("alignleft"),
                        JustifyCenter: e("aligncenter"),
                        JustifyRight: e("alignright"),
                        JustifyFull: e("alignjustify"),
                        "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (e) {
                            return a.isFormatMatch(e);
                        },
                        mceBlockQuote: function () {
                            return a.isFormatMatch("blockquote");
                        },
                        Outdent: function () {
                            return aw(i);
                        },
                        "InsertUnorderedList,InsertOrderedList": function (e) {
                            var t = i.dom.getParent(i.selection.getNode(), "ul,ol");
                            return t && (("insertunorderedlist" === e && "UL" === t.tagName) || ("insertorderedlist" === e && "OL" === t.tagName));
                        },
                    },
                    "state"
                ),
                    a.addCommands({
                        Undo: function () {
                            i.undoManager.undo();
                        },
                        Redo: function () {
                            i.undoManager.redo();
                        },
                    }),
                    a.addQueryValueHandler(
                        "FontName",
                        function () {
                            return AN((t = i), function (e) {
                                return RN(t.getBody(), e.dom);
                            }).getOr("");
                            var t;
                        },
                        this
                    ),
                    a.addQueryValueHandler(
                        "FontSize",
                        function () {
                            return AN((t = i), function (e) {
                                return _N(t.getBody(), e.dom);
                            }).getOr("");
                            var t;
                        },
                        this
                    ),
                    a.addQueryValueHandler(
                        "LineHeight",
                        function () {
                            return AN((t = i), function (n) {
                                var e = Nt.fromDom(t.getBody());
                                return SN(
                                    n,
                                    function (e) {
                                        return Jn(e, "line-height");
                                    },
                                    E(Rt, e)
                                ).getOrThunk(function () {
                                    var e = parseFloat(Yn(n, "line-height")),
                                        t = parseFloat(Yn(n, "font-size"));
                                    return String(e / t);
                                });
                            }).getOr("");
                            var t;
                        },
                        this
                    );
            }),
            FN);
    function FN(e) {
        (this.commands = { state: {}, exec: {}, value: {} }), (this.editor = e), this.setupCommands(e);
    }
    var UN = "data-mce-contenteditable",
        zN = function (e, t, n) {
            var r, o;
            Hu(e, t) && !1 === n ? ((o = t), Mu((r = e)) ? r.dom.classList.remove(o) : Uu(r, o), ju(r)) : n && zu(e, t);
        },
        jN = function (e, t, n) {
            try {
                e.getDoc().execCommand(t, !1, String(n));
            } catch (r) {}
        },
        HN = function (e, t) {
            e.dom.contentEditable = t ? "true" : "false";
        },
        VN = function (e, t) {
            var n,
                r,
                o,
                i = Nt.fromDom(e.getBody());
            zN(i, "mce-content-readonly", t),
                t
                    ? (e.selection.controlSelection.hideResizeRect(),
                      e._selectionOverrides.hideFakeCaret(),
                      (o = e),
                      U.from(o.selection.getNode()).each(function (e) {
                          e.removeAttribute("data-mce-selected");
                      }),
                      (e.readonly = !0),
                      HN(i, !1),
                      $(qu(i, '*[contenteditable="true"]'), function (e) {
                          qn(e, UN, "true"), HN(e, !1);
                      }))
                    : ((e.readonly = !1),
                      HN(i, !0),
                      $(qu(i, "*[" + UN + '="true"]'), function (e) {
                          Kn(e, UN), HN(e, !0);
                      }),
                      jN(e, "StyleWithCSS", !1),
                      jN(e, "enableInlineTableEditing", !1),
                      jN(e, "enableObjectResizing", !1),
                      (pm((r = e)) || mm(r)) && e.focus(),
                      (n = e).selection.setRng(n.selection.getRng()),
                      e.nodeChanged());
        },
        qN = function (e) {
            return e.readonly;
        },
        $N = function (t) {
            t.parser.addAttributeFilter("contenteditable", function (e) {
                qN(t) &&
                    $(e, function (e) {
                        e.attr(UN, e.attr("contenteditable")), e.attr("contenteditable", "false");
                    });
            }),
                t.serializer.addAttributeFilter(UN, function (e) {
                    qN(t) &&
                        $(e, function (e) {
                            e.attr("contenteditable", e.attr(UN));
                        });
                }),
                t.serializer.addTempAttr(UN);
        },
        WN = xt.makeMap(
            "focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel",
            " "
        ),
        KN =
            ((XN.isNative = function (e) {
                return !!WN[e.toLowerCase()];
            }),
            (XN.prototype.fire = function (e, t) {
                var n = e.toLowerCase(),
                    r = t || {};
                (r.type = n),
                    r.target || (r.target = this.scope),
                    r.preventDefault ||
                        ((r.preventDefault = function () {
                            r.isDefaultPrevented = k;
                        }),
                        (r.stopPropagation = function () {
                            r.isPropagationStopped = k;
                        }),
                        (r.stopImmediatePropagation = function () {
                            r.isImmediatePropagationStopped = k;
                        }),
                        (r.isDefaultPrevented = p),
                        (r.isPropagationStopped = p),
                        (r.isImmediatePropagationStopped = p)),
                    this.settings.beforeFire && this.settings.beforeFire(r);
                var o = this.bindings[n];
                if (o)
                    for (var i = 0, a = o.length; i < a; i++) {
                        var u = o[i];
                        if ((u.once && this.off(n, u.func), r.isImmediatePropagationStopped())) return r.stopPropagation(), r;
                        if (!1 === u.func.call(this.scope, r)) return r.preventDefault(), r;
                    }
                return r;
            }),
            (XN.prototype.on = function (e, t, n, r) {
                if ((!1 === t && (t = p), t)) {
                    var o = { func: t };
                    r && xt.extend(o, r);
                    for (var i = e.toLowerCase().split(" "), a = i.length; a--; ) {
                        var u = i[a],
                            s = this.bindings[u];
                        s || ((s = this.bindings[u] = []), this.toggleEvent(u, !0)), n ? s.unshift(o) : s.push(o);
                    }
                }
                return this;
            }),
            (XN.prototype.off = function (e, t) {
                var n = this;
                if (e)
                    for (var r = e.toLowerCase().split(" "), o = r.length; o--; ) {
                        var i = r[o],
                            a = this.bindings[i];
                        if (!i)
                            return (
                                oe(this.bindings, function (e, t) {
                                    n.toggleEvent(t, !1), delete n.bindings[t];
                                }),
                                this
                            );
                        if (a) {
                            if (t) for (var u = a.length; u--; ) a[u].func === t && ((a = a.slice(0, u).concat(a.slice(u + 1))), (this.bindings[i] = a));
                            else a.length = 0;
                            a.length || (this.toggleEvent(e, !1), delete this.bindings[i]);
                        }
                    }
                else
                    oe(this.bindings, function (e, t) {
                        n.toggleEvent(t, !1);
                    }),
                        (this.bindings = {});
                return this;
            }),
            (XN.prototype.once = function (e, t, n) {
                return this.on(e, t, n, { once: !0 });
            }),
            (XN.prototype.has = function (e) {
                return (e = e.toLowerCase()), !(!this.bindings[e] || 0 === this.bindings[e].length);
            }),
            XN);
    function XN(e) {
        (this.bindings = {}), (this.settings = e || {}), (this.scope = this.settings.scope || this), (this.toggleEvent = this.settings.toggleEvent || p);
    }
    var YN,
        GN = function (n) {
            return (
                n._eventDispatcher ||
                    (n._eventDispatcher = new KN({
                        scope: n,
                        toggleEvent: function (e, t) {
                            KN.isNative(e) && n.toggleNativeEvent && n.toggleNativeEvent(e, t);
                        },
                    })),
                n._eventDispatcher
            );
        },
        JN = {
            fire: function (e, t, n) {
                if (this.removed && "remove" !== e && "detach" !== e) return t;
                var r = GN(this).fire(e, t);
                if (!1 !== n && this.parent) for (var o = this.parent(); o && !r.isPropagationStopped(); ) o.fire(e, r, !1), (o = o.parent());
                return r;
            },
            on: function (e, t, n) {
                return GN(this).on(e, t, n);
            },
            off: function (e, t) {
                return GN(this).off(e, t);
            },
            once: function (e, t) {
                return GN(this).once(e, t);
            },
            hasEventListeners: function (e) {
                return GN(this).has(e);
            },
        },
        QN = bu.DOM,
        ZN = function (e, t) {
            if ("selectionchange" === t) return e.getDoc();
            if (!e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)) return e.getDoc().documentElement;
            var n = bc(e);
            return n ? (e.eventRoot || (e.eventRoot = QN.select(n)[0]), e.eventRoot) : e.getBody();
        },
        eE = function (e, t, n) {
            var r, o, i, a, u;
            (u = e).hidden || qN(u) ? qN(e) && ((r = e), (a = (o = n).target), "click" !== o.type || Gf.metaKeyPressed(o) || ((i = a), null === r.dom.getParent(i, "a")) || o.preventDefault()) : e.fire(t, n);
        },
        tE = function (i, a) {
            var e;
            if ((i.delegates || (i.delegates = {}), !i.delegates[a] && !i.removed)) {
                var t = ZN(i, a);
                if (bc(i)) {
                    if (
                        (YN ||
                            ((YN = {}),
                            i.editorManager.on("removeEditor", function () {
                                i.editorManager.activeEditor ||
                                    (YN &&
                                        (oe(YN, function (e, t) {
                                            i.dom.unbind(ZN(i, t));
                                        }),
                                        (YN = null)));
                            })),
                        YN[a])
                    )
                        return;
                    (e = function (e) {
                        for (var t = e.target, n = i.editorManager.get(), r = n.length; r--; ) {
                            var o = n[r].getBody();
                            (o !== t && !QN.isChildOf(t, o)) || eE(n[r], a, e);
                        }
                    }),
                        (YN[a] = e),
                        QN.bind(t, a, e);
                } else
                    (e = function (e) {
                        eE(i, a, e);
                    }),
                        QN.bind(t, a, e),
                        (i.delegates[a] = e);
            }
        },
        nE = xe(xe({}, JN), {
            bindPendingEventDelegates: function () {
                var t = this;
                xt.each(t._pendingNativeEvents, function (e) {
                    tE(t, e);
                });
            },
            toggleNativeEvent: function (e, t) {
                var n = this;
                "focus" !== e &&
                    "blur" !== e &&
                    (t ? (n.initialized ? tE(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : (n._pendingNativeEvents = [e])) : n.initialized && (n.dom.unbind(ZN(n, e), e, n.delegates[e]), delete n.delegates[e]));
            },
            unbindAllNativeEvents: function () {
                var n = this,
                    e = n.getBody(),
                    t = n.dom;
                n.delegates &&
                    (oe(n.delegates, function (e, t) {
                        n.dom.unbind(ZN(n, t), t, e);
                    }),
                    delete n.delegates),
                    !n.inline && e && t && ((e.onload = null), t.unbind(n.getWin()), t.unbind(n.getDoc())),
                    t && (t.unbind(e), t.unbind(n.getContainer()));
            },
        }),
        rE = ["design", "readonly"],
        oE = function (e, t, n, r) {
            var o,
                i = n[t.get()],
                a = n[r];
            try {
                a.activate();
            } catch (pk) {
                return void console.error("problem while activating editor mode " + r + ":", pk);
            }
            i.deactivate(), i.editorReadOnly !== a.editorReadOnly && VN(e, a.editorReadOnly), t.set(r), (o = r), e.fire("SwitchMode", { mode: o });
        },
        iE = function (t) {
            var e,
                n,
                r = ku("design"),
                o = ku({ design: { activate: V, deactivate: V, editorReadOnly: !1 }, readonly: { activate: V, deactivate: V, editorReadOnly: !0 } });
            return (
                (e = t).serializer
                    ? $N(e)
                    : e.on("PreInit", function () {
                          $N(e);
                      }),
                (n = t).on("ShowCaret", function (e) {
                    qN(n) && e.preventDefault();
                }),
                n.on("ObjectSelected", function (e) {
                    qN(n) && e.preventDefault();
                }),
                {
                    isReadOnly: function () {
                        return qN(t);
                    },
                    set: function (e) {
                        return (function (e, t, n, r) {
                            if (r !== n.get()) {
                                if (!me(t, r)) throw new Error("Editor mode '" + r + "' is invalid");
                                e.initialized
                                    ? oE(e, n, t, r)
                                    : e.on("init", function () {
                                          return oE(e, n, t, r);
                                      });
                            }
                        })(t, o.get(), r, e);
                    },
                    get: function () {
                        return r.get();
                    },
                    register: function (e, t) {
                        o.set(
                            (function (e, t, n) {
                                var r;
                                if (I(rE, t)) throw new Error("Cannot override default mode " + t);
                                return xe(
                                    xe({}, e),
                                    (((r = {})[t] = xe(xe({}, n), {
                                        deactivate: function () {
                                            try {
                                                n.deactivate();
                                            } catch (pk) {
                                                console.error("problem while deactivating editor mode " + t + ":", pk);
                                            }
                                        },
                                    })),
                                    r)
                                );
                            })(o.get(), e, t)
                        );
                    },
                }
            );
        },
        aE = xt.each,
        uE = xt.explode,
        sE = { f1: 112, f2: 113, f3: 114, f4: 115, f5: 116, f6: 117, f7: 118, f8: 119, f9: 120, f10: 121, f11: 122, f12: 123 },
        cE = xt.makeMap("alt,ctrl,shift,meta,access"),
        lE =
            ((fE.prototype.add = function (e, n, t, r) {
                var o = this,
                    i = o.normalizeCommandFunc(t);
                return (
                    aE(uE(xt.trim(e)), function (e) {
                        var t = o.createShortcut(e, n, i, r);
                        o.shortcuts[t.id] = t;
                    }),
                    !0
                );
            }),
            (fE.prototype.remove = function (e) {
                var t = this.createShortcut(e);
                return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0);
            }),
            (fE.prototype.normalizeCommandFunc = function (e) {
                var t = this,
                    n = e;
                return "string" == typeof n
                    ? function () {
                          t.editor.execCommand(n, !1, null);
                      }
                    : xt.isArray(n)
                    ? function () {
                          t.editor.execCommand(n[0], n[1], n[2]);
                      }
                    : n;
            }),
            (fE.prototype.parseShortcut = function (e) {
                var t,
                    n = {};
                aE(uE(e.toLowerCase(), "+"), function (e) {
                    e in cE ? (n[e] = !0) : /^[0-9]{2,}$/.test(e) ? (n.keyCode = parseInt(e, 10)) : ((n.charCode = e.charCodeAt(0)), (n.keyCode = sE[e] || e.toUpperCase().charCodeAt(0)));
                });
                var r = [n.keyCode];
                for (t in cE) n[t] ? r.push(t) : (n[t] = !1);
                return (n.id = r.join(",")), n.access && ((n.alt = !0), vt.mac ? (n.ctrl = !0) : (n.shift = !0)), n.meta && (vt.mac ? (n.meta = !0) : ((n.ctrl = !0), (n.meta = !1))), n;
            }),
            (fE.prototype.createShortcut = function (e, t, n, r) {
                var o = xt.map(uE(e, ">"), this.parseShortcut);
                return (o[o.length - 1] = xt.extend(o[o.length - 1], { func: n, scope: r || this.editor })), xt.extend(o[0], { desc: this.editor.translate(t), subpatterns: o.slice(1) });
            }),
            (fE.prototype.hasModifier = function (e) {
                return e.altKey || e.ctrlKey || e.metaKey;
            }),
            (fE.prototype.isFunctionKey = function (e) {
                return "keydown" === e.type && 112 <= e.keyCode && e.keyCode <= 123;
            }),
            (fE.prototype.matchShortcut = function (e, t) {
                return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || (e.charCode && e.charCode === t.charCode)) && (e.preventDefault(), !0);
            }),
            (fE.prototype.executeShortcutAction = function (e) {
                return e.func ? e.func.call(e.scope) : null;
            }),
            fE);
    function fE(e) {
        (this.shortcuts = {}), (this.pendingPatterns = []), (this.editor = e);
        var n = this;
        e.on("keyup keypress keydown", function (t) {
            (!n.hasModifier(t) && !n.isFunctionKey(t)) ||
                t.isDefaultPrevented() ||
                (aE(n.shortcuts, function (e) {
                    if (n.matchShortcut(t, e)) return (n.pendingPatterns = e.subpatterns.slice(0)), "keydown" === t.type && n.executeShortcutAction(e), !0;
                }),
                n.matchShortcut(t, n.pendingPatterns[0]) && (1 === n.pendingPatterns.length && "keydown" === t.type && n.executeShortcutAction(n.pendingPatterns[0]), n.pendingPatterns.shift()));
        });
    }
    var dE = function () {
            var e,
                t,
                n,
                r,
                o,
                i,
                a,
                u,
                s =
                    ((t = {}),
                    (n = {}),
                    (r = {}),
                    (o = {}),
                    (i = {}),
                    (a = {}),
                    {
                        addButton: (u = function (n, r) {
                            return function (e, t) {
                                return (n[e.toLowerCase()] = xe(xe({}, t), { type: r }));
                            };
                        })((e = {}), "button"),
                        addGroupToolbarButton: u(e, "grouptoolbarbutton"),
                        addToggleButton: u(e, "togglebutton"),
                        addMenuButton: u(e, "menubutton"),
                        addSplitButton: u(e, "splitbutton"),
                        addMenuItem: u(t, "menuitem"),
                        addNestedMenuItem: u(t, "nestedmenuitem"),
                        addToggleMenuItem: u(t, "togglemenuitem"),
                        addAutocompleter: u(n, "autocompleter"),
                        addContextMenu: u(o, "contextmenu"),
                        addContextToolbar: u(i, "contexttoolbar"),
                        addContextForm: u(i, "contextform"),
                        addSidebar: u(a, "sidebar"),
                        addIcon: function (e, t) {
                            return (r[e.toLowerCase()] = t);
                        },
                        getAll: function () {
                            return { buttons: e, menuItems: t, icons: r, popups: n, contextMenus: o, contextToolbars: i, sidebars: a };
                        },
                    });
            return {
                addAutocompleter: s.addAutocompleter,
                addButton: s.addButton,
                addContextForm: s.addContextForm,
                addContextMenu: s.addContextMenu,
                addContextToolbar: s.addContextToolbar,
                addIcon: s.addIcon,
                addMenuButton: s.addMenuButton,
                addMenuItem: s.addMenuItem,
                addNestedMenuItem: s.addNestedMenuItem,
                addSidebar: s.addSidebar,
                addSplitButton: s.addSplitButton,
                addToggleButton: s.addToggleButton,
                addGroupToolbarButton: s.addGroupToolbarButton,
                addToggleMenuItem: s.addToggleMenuItem,
                getAll: s.getAll,
            };
        },
        mE = xt.each,
        pE = xt.trim,
        gE = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
        hE = { ftp: 21, http: 80, https: 443, mailto: 25 },
        vE =
            ((yE.parseDataUri = function (e) {
                var t,
                    n = decodeURIComponent(e).split(","),
                    r = /data:([^;]+)/.exec(n[0]);
                return r && (t = r[1]), { type: t, data: n[1] };
            }),
            (yE.getDocumentBaseUrl = function (e) {
                var t = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? e.href : e.protocol + "//" + e.host + e.pathname;
                return /^[^:]+:\/\/\/?[^\/]+\//.test(t) && ((t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")), /[\/\\]$/.test(t) || (t += "/")), t;
            }),
            (yE.prototype.setPath = function (e) {
                var t = /^(.*?)\/?(\w+)?$/.exec(e);
                (this.path = t[0]), (this.directory = t[1]), (this.file = t[2]), (this.source = ""), this.getURI();
            }),
            (yE.prototype.toRelative = function (e) {
                var t;
                if ("./" === e) return e;
                var n = new yE(e, { base_uri: this });
                if (("mce_host" !== n.host && this.host !== n.host && n.host) || this.port !== n.port || (this.protocol !== n.protocol && "" !== n.protocol)) return n.getURI();
                var r = this.getURI(),
                    o = n.getURI();
                return r === o || ("/" === r.charAt(r.length - 1) && r.substr(0, r.length - 1) === o) ? r : ((t = this.toRelPath(this.path, n.path)), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), t);
            }),
            (yE.prototype.toAbsolute = function (e, t) {
                var n = new yE(e, { base_uri: this });
                return n.getURI(t && this.isSameOrigin(n));
            }),
            (yE.prototype.isSameOrigin = function (e) {
                if (this.host == e.host && this.protocol == e.protocol) {
                    if (this.port == e.port) return !0;
                    var t = hE[this.protocol];
                    if (t && (this.port || t) == (e.port || t)) return !0;
                }
                return !1;
            }),
            (yE.prototype.toRelPath = function (e, t) {
                var n,
                    r,
                    o = 0,
                    i = "",
                    a = e.substring(0, e.lastIndexOf("/")).split("/"),
                    u = t.split("/");
                if (a.length >= u.length)
                    for (n = 0, r = a.length; n < r; n++)
                        if (n >= u.length || a[n] !== u[n]) {
                            o = n + 1;
                            break;
                        }
                if (a.length < u.length)
                    for (n = 0, r = u.length; n < r; n++)
                        if (n >= a.length || a[n] !== u[n]) {
                            o = n + 1;
                            break;
                        }
                if (1 === o) return t;
                for (n = 0, r = a.length - (o - 1); n < r; n++) i += "../";
                for (n = o - 1, r = u.length; n < r; n++) i += n !== o - 1 ? "/" + u[n] : u[n];
                return i;
            }),
            (yE.prototype.toAbsPath = function (e, t) {
                var n,
                    r,
                    o = 0,
                    i = [],
                    a = /\/$/.test(t) ? "/" : "",
                    u = e.split("/"),
                    s = t.split("/");
                for (
                    mE(u, function (e) {
                        e && i.push(e);
                    }),
                        u = i,
                        n = s.length - 1,
                        i = [];
                    0 <= n;
                    n--
                )
                    0 !== s[n].length && "." !== s[n] && (".." !== s[n] ? (0 < o ? o-- : i.push(s[n])) : o++);
                return 0 !== (r = (n = u.length - o) <= 0 ? J(i).join("/") : u.slice(0, n).join("/") + "/" + J(i).join("/")).indexOf("/") && (r = "/" + r), a && r.lastIndexOf("/") !== r.length - 1 && (r += a), r;
            }),
            (yE.prototype.getURI = function (e) {
                var t;
                return (
                    void 0 === e && (e = !1),
                    (this.source && !e) ||
                        ((t = ""),
                        e || (this.protocol ? (t += this.protocol + "://") : (t += "//"), this.userInfo && (t += this.userInfo + "@"), this.host && (t += this.host), this.port && (t += ":" + this.port)),
                        this.path && (t += this.path),
                        this.query && (t += "?" + this.query),
                        this.anchor && (t += "#" + this.anchor),
                        (this.source = t)),
                    this.source
                );
            }),
            yE);
    function yE(e, t) {
        (e = pE(e)), (this.settings = t || {});
        var n,
            r,
            o,
            i,
            a = this.settings.base_uri,
            u = this;
        /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e)
            ? (u.source = e)
            : ((n = 0 === e.indexOf("//")),
              0 !== e.indexOf("/") || n || (e = ((a && a.protocol) || "http") + "://mce_host" + e),
              /^[\w\-]*:?\/\//.test(e) ||
                  ((r = this.settings.base_uri ? this.settings.base_uri.path : new yE(document.location.href).directory),
                  (e = this.settings.base_uri && "" == this.settings.base_uri.protocol ? "//mce_host" + u.toAbsPath(r, e) : ((o = /([^#?]*)([#?]?.*)/.exec(e)), ((a && a.protocol) || "http") + "://mce_host" + u.toAbsPath(r, o[1]) + o[2]))),
              (e = e.replace(/@@/g, "(mce_at)")),
              (i = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e)),
              mE(gE, function (e, t) {
                  var n = (n = i[t]) && n.replace(/\(mce_at\)/g, "@@");
                  u[e] = n;
              }),
              a && (u.protocol || (u.protocol = a.protocol), u.userInfo || (u.userInfo = a.userInfo), u.port || "mce_host" !== u.host || (u.port = a.port), (u.host && "mce_host" !== u.host) || (u.host = a.host), (u.source = "")),
              n && (u.protocol = ""));
    }
    var bE = bu.DOM,
        CE = xt.extend,
        wE = xt.each,
        xE = xt.resolve,
        SE = vt.ie,
        NE =
            ((EE.prototype.render = function () {
                wN(this);
            }),
            (EE.prototype.focus = function (e) {
                var t, n;
                (n = e), (t = this).removed || (n ? hm : gm)(t);
            }),
            (EE.prototype.hasFocus = function () {
                return pm(this);
            }),
            (EE.prototype.execCallback = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                var r,
                    o = this.settings[e];
                if (o)
                    return (
                        this.callbackLookup && (r = this.callbackLookup[e]) && ((o = r.func), (r = r.scope)),
                        "string" == typeof o && ((r = (r = o.replace(/\.\w+$/, "")) ? xE(r) : 0), (o = xE(o)), (this.callbackLookup = this.callbackLookup || {}), (this.callbackLookup[e] = { func: o, scope: r })),
                        o.apply(r || this, t)
                    );
            }),
            (EE.prototype.translate = function (e) {
                return Au.translate(e);
            }),
            (EE.prototype.getParam = function (e, t, n) {
                return _y(this, e, t, n);
            }),
            (EE.prototype.hasPlugin = function (e, t) {
                return !(!I(xc(this).split(/[ ,]/), e) || (t && Fy.get(e) === undefined));
            }),
            (EE.prototype.nodeChanged = function (e) {
                this._nodeChangeDispatcher.nodeChanged(e);
            }),
            (EE.prototype.addCommand = function (e, t, n) {
                this.editorCommands.addCommand(e, t, n);
            }),
            (EE.prototype.addQueryStateHandler = function (e, t, n) {
                this.editorCommands.addQueryStateHandler(e, t, n);
            }),
            (EE.prototype.addQueryValueHandler = function (e, t, n) {
                this.editorCommands.addQueryValueHandler(e, t, n);
            }),
            (EE.prototype.addShortcut = function (e, t, n, r) {
                this.shortcuts.add(e, t, n, r);
            }),
            (EE.prototype.execCommand = function (e, t, n, r) {
                return this.editorCommands.execCommand(e, t, n, r);
            }),
            (EE.prototype.queryCommandState = function (e) {
                return this.editorCommands.queryCommandState(e);
            }),
            (EE.prototype.queryCommandValue = function (e) {
                return this.editorCommands.queryCommandValue(e);
            }),
            (EE.prototype.queryCommandSupported = function (e) {
                return this.editorCommands.queryCommandSupported(e);
            }),
            (EE.prototype.show = function () {
                this.hidden && ((this.hidden = !1), this.inline ? (this.getBody().contentEditable = "true") : (bE.show(this.getContainer()), bE.hide(this.id)), this.load(), this.fire("show"));
            }),
            (EE.prototype.hide = function () {
                var e = this,
                    t = e.getDoc();
                e.hidden ||
                    (SE && t && !e.inline && t.execCommand("SelectAll"),
                    e.save(),
                    e.inline ? ((e.getBody().contentEditable = "false"), e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (bE.hide(e.getContainer()), bE.setStyle(e.id, "display", e.orgDisplay)),
                    (e.hidden = !0),
                    e.fire("hide"));
            }),
            (EE.prototype.isHidden = function () {
                return !!this.hidden;
            }),
            (EE.prototype.setProgressState = function (e, t) {
                this.fire("ProgressState", { state: e, time: t });
            }),
            (EE.prototype.load = function (e) {
                var t = this.getElement();
                if (this.removed) return "";
                if (t) {
                    (e = e || {}).load = !0;
                    var n = Dn(t) ? t.value : t.innerHTML,
                        r = this.setContent(n, e);
                    return (e.element = t), e.no_events || this.fire("LoadContent", e), (e.element = t = null), r;
                }
            }),
            (EE.prototype.save = function (e) {
                var t,
                    n,
                    r = this,
                    o = r.getElement();
                if (o && r.initialized && !r.removed)
                    return (
                        ((e = e || {}).save = !0),
                        (e.element = o),
                        (e.content = r.getContent(e)),
                        e.no_events || r.fire("SaveContent", e),
                        "raw" === e.format && r.fire("RawSaveContent", e),
                        (t = e.content),
                        Dn(o)
                            ? (o.value = t)
                            : ((!e.is_removing && r.inline) || (o.innerHTML = t),
                              (n = bE.getParent(r.id, "form")) &&
                                  wE(n.elements, function (e) {
                                      if (e.name === r.id) return (e.value = t), !1;
                                  })),
                        (e.element = o = null),
                        !1 !== e.set_dirty && r.setDirty(!1),
                        t
                    );
            }),
            (EE.prototype.setContent = function (e, t) {
                return ay(this, e, t);
            }),
            (EE.prototype.getContent = function (e) {
                return iy(this, e);
            }),
            (EE.prototype.insertContent = function (e, t) {
                t && (e = CE({ content: e }, t)), this.execCommand("mceInsertContent", !1, e);
            }),
            (EE.prototype.resetContent = function (e) {
                e === undefined ? ay(this, this.startContent, { format: "raw" }) : ay(this, e), this.undoManager.reset(), this.setDirty(!1), this.nodeChanged();
            }),
            (EE.prototype.isDirty = function () {
                return !this.isNotDirty;
            }),
            (EE.prototype.setDirty = function (e) {
                var t = !this.isNotDirty;
                (this.isNotDirty = !e), e && e !== t && this.fire("dirty");
            }),
            (EE.prototype.getContainer = function () {
                return this.container || (this.container = bE.get(this.editorContainer || this.id + "_parent")), this.container;
            }),
            (EE.prototype.getContentAreaContainer = function () {
                return this.contentAreaContainer;
            }),
            (EE.prototype.getElement = function () {
                return this.targetElm || (this.targetElm = bE.get(this.id)), this.targetElm;
            }),
            (EE.prototype.getWin = function () {
                var e;
                return this.contentWindow || ((e = this.iframeElement) && (this.contentWindow = e.contentWindow)), this.contentWindow;
            }),
            (EE.prototype.getDoc = function () {
                var e;
                return this.contentDocument || ((e = this.getWin()) && (this.contentDocument = e.document)), this.contentDocument;
            }),
            (EE.prototype.getBody = function () {
                var e = this.getDoc();
                return this.bodyElement || (e ? e.body : null);
            }),
            (EE.prototype.convertURL = function (e, t, n) {
                var r = this.settings;
                return r.urlconverter_callback
                    ? this.execCallback("urlconverter_callback", e, n, !0, t)
                    : !r.convert_urls || (n && "LINK" === n.nodeName) || 0 === e.indexOf("file:") || 0 === e.length
                    ? e
                    : r.relative_urls
                    ? this.documentBaseURI.toRelative(e)
                    : (e = this.documentBaseURI.toAbsolute(e, r.remove_script_host));
            }),
            (EE.prototype.addVisual = function (e) {
                var n,
                    r = this,
                    o = r.settings,
                    i = r.dom;
                (e = e || r.getBody()),
                    r.hasVisual === undefined && (r.hasVisual = o.visual),
                    wE(i.select("table,a", e), function (e) {
                        var t;
                        switch (e.nodeName) {
                            case "TABLE":
                                return (n = o.visual_table_class || "mce-item-table"), void (((t = i.getAttrib(e, "border")) && "0" !== t) || !r.hasVisual ? i.removeClass(e, n) : i.addClass(e, n));
                            case "A":
                                return void (i.getAttrib(e, "href") || ((t = i.getAttrib(e, "name") || e.id), (n = o.visual_anchor_class || "mce-item-anchor"), t && r.hasVisual ? i.addClass(e, n) : i.removeClass(e, n)));
                        }
                    }),
                    r.fire("VisualAid", { element: e, hasVisual: r.hasVisual });
            }),
            (EE.prototype.remove = function () {
                cy(this);
            }),
            (EE.prototype.destroy = function (e) {
                ly(this, e);
            }),
            (EE.prototype.uploadImages = function (e) {
                return this.editorUpload.uploadImages(e);
            }),
            (EE.prototype._scanForImages = function () {
                return this.editorUpload.scanForImages();
            }),
            (EE.prototype.addButton = function () {
                throw new Error("editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead");
            }),
            (EE.prototype.addSidebar = function () {
                throw new Error("editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead");
            }),
            (EE.prototype.addMenuItem = function () {
                throw new Error("editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead");
            }),
            (EE.prototype.addContextToolbar = function () {
                throw new Error("editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead");
            }),
            EE);
    function EE(e, t, n) {
        var r = this;
        (this.plugins = {}),
            (this.contentCSS = []),
            (this.contentStyles = []),
            (this.loadedCSS = {}),
            (this.isNotDirty = !1),
            (this.editorManager = n),
            (this.documentBaseUrl = n.documentBaseURL),
            CE(this, nE),
            (this.settings = Ey(this, e, this.documentBaseUrl, n.defaultSettings, t)),
            this.settings.suffix && (n.suffix = this.settings.suffix),
            (this.suffix = n.suffix),
            this.settings.base_url && n._setBaseUrl(this.settings.base_url),
            (this.baseUri = n.baseURI),
            this.settings.referrer_policy && (Su.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy), bu.DOM.styleSheetLoader._setReferrerPolicy(this.settings.referrer_policy)),
            (Bu.languageLoad = this.settings.language_load),
            (Bu.baseURL = n.baseURL),
            (this.id = e),
            this.setDirty(!1),
            (this.documentBaseURI = new vE(this.settings.document_base_url, { base_uri: this.baseUri })),
            (this.baseURI = this.baseUri),
            (this.inline = !!this.settings.inline),
            (this.shortcuts = new lE(this)),
            (this.editorCommands = new MN(this)),
            this.settings.cache_suffix && (vt.cacheSuffix = this.settings.cache_suffix.replace(/^[\?\&]+/, "")),
            (this.ui = { registry: dE(), styleSheetLoader: undefined, show: V, hide: V });
        var o = iE(this);
        (this.mode = o),
            (this.setMode = o.set),
            n.fire("SetupEditor", { editor: this }),
            this.execCallback("setup", this),
            (this.$ = lu.overrideDefaults(function () {
                return { context: r.inline ? r.getBody() : r.getDoc(), element: r.getBody() };
            }));
    }
    var kE,
        _E = bu.DOM,
        RE = xt.explode,
        TE = xt.each,
        AE = xt.extend,
        DE = 0,
        OE = !1,
        BE = [],
        PE = [],
        LE = function (t) {
            var n = t.type;
            TE(UE.get(), function (e) {
                switch (n) {
                    case "scroll":
                        e.fire("ScrollWindow", t);
                        break;
                    case "resize":
                        e.fire("ResizeWindow", t);
                }
            });
        },
        IE = function (e) {
            e !== OE && (e ? lu(window).on("resize scroll", LE) : lu(window).off("resize scroll", LE), (OE = e));
        },
        ME = function (t) {
            var e = PE;
            delete BE[t.id];
            for (var n = 0; n < BE.length; n++)
                if (BE[n] === t) {
                    BE.splice(n, 1);
                    break;
                }
            return (
                (PE = j(PE, function (e) {
                    return t !== e;
                })),
                UE.activeEditor === t && (UE.activeEditor = 0 < PE.length ? PE[0] : null),
                UE.focusedEditor === t && (UE.focusedEditor = null),
                e.length !== PE.length
            );
        },
        FE = "CSS1Compat" !== document.compatMode,
        UE = xe(xe({}, JN), {
            baseURI: null,
            baseURL: null,
            defaultSettings: {},
            documentBaseURL: null,
            suffix: null,
            $: lu,
            majorVersion: "5",
            minorVersion: "5.1",
            releaseDate: "2020-10-01",
            editors: BE,
            i18n: Au,
            activeEditor: null,
            focusedEditor: null,
            settings: {},
            setup: function () {
                var e,
                    t = "",
                    n = vE.getDocumentBaseUrl(document.location);
                /^[^:]+:\/\/\/?[^\/]+\//.test(n) && ((n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")), /[\/\\]$/.test(n) || (n += "/"));
                var r,
                    o = window.tinymce || window.tinyMCEPreInit;
                if (o) (e = o.base || o.baseURL), (t = o.suffix);
                else {
                    for (var i, a = document.getElementsByTagName("script"), u = 0; u < a.length; u++) {
                        if ("" !== (i = a[u].src || "")) {
                            var s = i.substring(i.lastIndexOf("/"));
                            if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(i)) {
                                -1 !== s.indexOf(".min") && (t = ".min"), (e = i.substring(0, i.lastIndexOf("/")));
                                break;
                            }
                        }
                    }
                    !e && document.currentScript && (-1 !== (i = document.currentScript.src).indexOf(".min") && (t = ".min"), (e = i.substring(0, i.lastIndexOf("/"))));
                }
                (this.baseURL = new vE(n).toAbsolute(e)), (this.documentBaseURL = n), (this.baseURI = new vE(this.baseURL)), (this.suffix = t), (r = this).on("AddEditor", E(um, r)), r.on("RemoveEditor", E(sm, r));
            },
            overrideDefaults: function (e) {
                var t = e.base_url;
                t && this._setBaseUrl(t);
                var n = e.suffix;
                e.suffix && (this.suffix = n);
                var r = (this.defaultSettings = e).plugin_base_urls;
                r !== undefined &&
                    oe(r, function (e, t) {
                        Bu.PluginManager.urls[t] = e;
                    });
            },
            init: function (r) {
                var n,
                    u = this,
                    s = xt.makeMap(
                        "area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu",
                        " "
                    ),
                    c = function (e) {
                        var t = e.id;
                        return (
                            t ||
                                ((t = de(e, "name")
                                    .filter(function (e) {
                                        return !_E.get(e);
                                    })
                                    .getOrThunk(_E.uniqueId)),
                                e.setAttribute("id", t)),
                            t
                        );
                    },
                    l = function (e, t) {
                        return t.constructor === RegExp ? t.test(e.className) : _E.hasClass(e, t);
                    },
                    f = function (e) {
                        n = e;
                    },
                    e = function () {
                        var o,
                            i = 0,
                            a = [],
                            n = function (e, t, n) {
                                var r = new NE(e, t, u);
                                a.push(r),
                                    r.on("init", function () {
                                        ++i === o.length && f(a);
                                    }),
                                    (r.targetElm = r.targetElm || n),
                                    r.render();
                            };
                        _E.unbind(window, "ready", e),
                            (function (e) {
                                var t = r[e];
                                if (t) t.apply(u, Array.prototype.slice.call(arguments, 2));
                            })("onpageload"),
                            (o = lu.unique(
                                (function (t) {
                                    var n = [];
                                    if (vt.browser.isIE() && vt.browser.version.major < 11)
                                        return Wy("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"), [];
                                    if (FE) return Wy("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."), [];
                                    if (t.types)
                                        return (
                                            TE(t.types, function (e) {
                                                n = n.concat(_E.select(e.selector));
                                            }),
                                            n
                                        );
                                    if (t.selector) return _E.select(t.selector);
                                    if (t.target) return [t.target];
                                    switch (t.mode) {
                                        case "exact":
                                            var e = t.elements || "";
                                            0 < e.length &&
                                                TE(RE(e), function (t) {
                                                    var e = _E.get(t);
                                                    e
                                                        ? n.push(e)
                                                        : TE(document.forms, function (e) {
                                                              TE(e.elements, function (e) {
                                                                  e.name === t && ((t = "mce_editor_" + DE++), _E.setAttrib(e, "id", t), n.push(e));
                                                              });
                                                          });
                                                });
                                            break;
                                        case "textareas":
                                        case "specific_textareas":
                                            TE(_E.select("textarea"), function (e) {
                                                (t.editor_deselector && l(e, t.editor_deselector)) || (t.editor_selector && !l(e, t.editor_selector)) || n.push(e);
                                            });
                                    }
                                    return n;
                                })(r)
                            )),
                            r.types
                                ? TE(r.types, function (t) {
                                      xt.each(o, function (e) {
                                          return !_E.is(e, t.selector) || (n(c(e), AE({}, r, t), e), !1);
                                      });
                                  })
                                : (xt.each(o, function (e) {
                                      var t;
                                      (t = u.get(e.id)) && t.initialized && !(t.getContainer() || t.getBody()).parentNode && (ME(t), t.unbindAllNativeEvents(), t.destroy(!0), (t.removed = !0), (t = null));
                                  }),
                                  0 ===
                                  (o = xt.grep(o, function (e) {
                                      return !u.get(e.id);
                                  })).length
                                      ? f([])
                                      : TE(o, function (e) {
                                            var t;
                                            (t = e), r.inline && t.tagName.toLowerCase() in s ? Wy("Could not initialize inline editor on invalid inline target element", e) : n(c(e), r, e);
                                        }));
                    };
                return (
                    (u.settings = r),
                    _E.bind(window, "ready", e),
                    new _r(function (t) {
                        n
                            ? t(n)
                            : (f = function (e) {
                                  t(e);
                              });
                    })
                );
            },
            get: function (t) {
                return 0 === arguments.length
                    ? PE.slice(0)
                    : q(t)
                    ? K(PE, function (e) {
                          return e.id === t;
                      }).getOr(null)
                    : D(t) && PE[t]
                    ? PE[t]
                    : null;
            },
            add: function (e) {
                var n = this;
                return (
                    BE[e.id] === e ||
                        (null === n.get(e.id) && ("length" !== e.id && (BE[e.id] = e), BE.push(e), PE.push(e)),
                        IE(!0),
                        (n.activeEditor = e),
                        n.fire("AddEditor", { editor: e }),
                        kE ||
                            ((kE = function (e) {
                                var t = n.fire("BeforeUnload");
                                if (t.returnValue) return e.preventDefault(), (e.returnValue = t.returnValue), t.returnValue;
                            }),
                            window.addEventListener("beforeunload", kE))),
                    e
                );
            },
            createEditor: function (e, t) {
                return this.add(new NE(e, t, this));
            },
            remove: function (e) {
                var t,
                    n,
                    r = this;
                if (e) {
                    if (!q(e)) return (n = e), w(r.get(n.id)) ? null : (ME(n) && r.fire("RemoveEditor", { editor: n }), 0 === PE.length && window.removeEventListener("beforeunload", kE), n.remove(), IE(0 < PE.length), n);
                    TE(_E.select(e), function (e) {
                        (n = r.get(e.id)) && r.remove(n);
                    });
                } else for (t = PE.length - 1; 0 <= t; t--) r.remove(PE[t]);
            },
            execCommand: function (e, t, n) {
                var r = this.get(n);
                switch (e) {
                    case "mceAddEditor":
                        return this.get(n) || new NE(n, this.settings, this).render(), !0;
                    case "mceRemoveEditor":
                        return r && r.remove(), !0;
                    case "mceToggleEditor":
                        return r ? (r.isHidden() ? r.show() : r.hide(), !0) : (this.execCommand("mceAddEditor", 0, n), !0);
                }
                return !!this.activeEditor && this.activeEditor.execCommand(e, t, n);
            },
            triggerSave: function () {
                TE(PE, function (e) {
                    e.save();
                });
            },
            addI18n: function (e, t) {
                Au.add(e, t);
            },
            translate: function (e) {
                return Au.translate(e);
            },
            setActive: function (e) {
                var t = this.activeEditor;
                this.activeEditor !== e && (t && t.fire("deactivate", { relatedTarget: e }), e.fire("activate", { relatedTarget: t })), (this.activeEditor = e);
            },
            _setBaseUrl: function (e) {
                (this.baseURL = new vE(this.documentBaseURL).toAbsolute(e.replace(/\/+$/, ""))), (this.baseURI = new vE(this.baseURL));
            },
        });
    UE.setup();
    var zE,
        jE,
        HE,
        VE,
        qE = Math.min,
        $E = Math.max,
        WE = Math.round,
        KE = function (e, t, n) {
            var r = t.x,
                o = t.y,
                i = e.w,
                a = e.h,
                u = t.w,
                s = t.h,
                c = (n || "").split("");
            return (
                "b" === c[0] && (o += s),
                "r" === c[1] && (r += u),
                "c" === c[0] && (o += WE(s / 2)),
                "c" === c[1] && (r += WE(u / 2)),
                "b" === c[3] && (o -= a),
                "r" === c[4] && (r -= i),
                "c" === c[3] && (o -= WE(a / 2)),
                "c" === c[4] && (r -= WE(i / 2)),
                XE(r, o, i, a)
            );
        },
        XE = function (e, t, n, r) {
            return { x: e, y: t, w: n, h: r };
        },
        YE = {
            inflate: function (e, t, n) {
                return XE(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n);
            },
            relativePosition: KE,
            findBestRelativePosition: function (e, t, n, r) {
                for (var o, i = 0; i < r.length; i++) if ((o = KE(e, t, r[i])).x >= n.x && o.x + o.w <= n.w + n.x && o.y >= n.y && o.y + o.h <= n.h + n.y) return r[i];
                return null;
            },
            intersect: function (e, t) {
                var n = $E(e.x, t.x),
                    r = $E(e.y, t.y),
                    o = qE(e.x + e.w, t.x + t.w),
                    i = qE(e.y + e.h, t.y + t.h);
                return o - n < 0 || i - r < 0 ? null : XE(n, r, o - n, i - r);
            },
            clamp: function (e, t, n) {
                var r = e.x,
                    o = e.y,
                    i = e.x + e.w,
                    a = e.y + e.h,
                    u = t.x + t.w,
                    s = t.y + t.h,
                    c = $E(0, t.x - r),
                    l = $E(0, t.y - o),
                    f = $E(0, i - u),
                    d = $E(0, a - s);
                return (r += c), (o += l), n && ((i += c), (a += l), (r -= f), (o -= d)), XE(r, o, (i -= f) - r, (a -= d) - o);
            },
            create: XE,
            fromClientRect: function (e) {
                return XE(e.left, e.top, e.width, e.height);
            },
        },
        GE =
            ((zE = {}),
            (jE = {}),
            {
                load: function (r, o) {
                    var i = 'Script at URL "' + o + '" failed to load',
                        a = 'Script at URL "' + o + "\" did not call `tinymce.Resource.add('" + r + "', data)` within 1 second";
                    if (zE[r] !== undefined) return zE[r];
                    var e = new _r(function (e, t) {
                        var n = (function (e, t, n) {
                            void 0 === n && (n = 1e3);
                            var r = !1,
                                o = null,
                                i = function (n) {
                                    return function () {
                                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                        r || ((r = !0), null !== o && (clearTimeout(o), (o = null)), n.apply(null, e));
                                    };
                                },
                                a = i(e),
                                u = i(t);
                            return {
                                start: function () {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    r ||
                                        null !== o ||
                                        (o = setTimeout(function () {
                                            return u.apply(null, e);
                                        }, n));
                                },
                                resolve: a,
                                reject: u,
                            };
                        })(e, t);
                        (jE[r] = n.resolve),
                            Su.ScriptLoader.loadScript(
                                o,
                                function () {
                                    return n.start(a);
                                },
                                function () {
                                    return n.reject(i);
                                }
                            );
                    });
                    return (zE[r] = e);
                },
                add: function (e, t) {
                    jE[e] !== undefined && (jE[e](t), delete jE[e]), (zE[e] = _r.resolve(t));
                },
            }),
        JE = xt.each,
        QE = xt.extend,
        ZE = function () {};
    ZE.extend = HE = function (n) {
        var o = this.prototype,
            r = function () {
                var e, t, n;
                if (!VE && (this.init && this.init.apply(this, arguments), (t = this.Mixins))) for (e = t.length; e--; ) (n = t[e]).init && n.init.apply(this, arguments);
            },
            t = function () {
                return this;
            };
        VE = !0;
        var i = new this();
        return (
            (VE = !1),
            n.Mixins &&
                (JE(n.Mixins, function (e) {
                    for (var t in e) "init" !== t && (n[t] = e[t]);
                }),
                o.Mixins && (n.Mixins = o.Mixins.concat(n.Mixins))),
            n.Methods &&
                JE(n.Methods.split(","), function (e) {
                    n[e] = t;
                }),
            n.Properties &&
                JE(n.Properties.split(","), function (e) {
                    var t = "_" + e;
                    n[e] = function (e) {
                        return e !== undefined ? ((this[t] = e), this) : this[t];
                    };
                }),
            n.Statics &&
                JE(n.Statics, function (e, t) {
                    r[t] = e;
                }),
            n.Defaults && o.Defaults && (n.Defaults = QE({}, o.Defaults, n.Defaults)),
            oe(n, function (e, t) {
                var n, r;
                "function" == typeof e && o[t]
                    ? (i[t] =
                          ((n = t),
                          (r = e),
                          function () {
                              var e = this._super;
                              this._super = o[n];
                              var t = r.apply(this, arguments);
                              return (this._super = e), t;
                          }))
                    : (i[t] = e);
            }),
            (r.prototype = i),
            ((r.constructor = r).extend = HE),
            r
        );
    };
    var ek = Math.min,
        tk = Math.max,
        nk = Math.round,
        rk = {
            serialize: function (e) {
                var t = JSON.stringify(e);
                return q(t)
                    ? t.replace(/[\u0080-\uFFFF]/g, function (e) {
                          var t = e.charCodeAt(0).toString(16);
                          return "\\u" + "0000".substring(t.length) + t;
                      })
                    : t;
            },
            parse: function (e) {
                try {
                    return JSON.parse(e);
                } catch (t) {}
            },
        },
        ok = {
            callbacks: {},
            count: 0,
            send: function (t) {
                var n = this,
                    r = bu.DOM,
                    o = t.count !== undefined ? t.count : n.count,
                    i = "tinymce_jsonp_" + o;
                (n.callbacks[o] = function (e) {
                    r.remove(i), delete n.callbacks[o], t.callback(e);
                }),
                    r.add(r.doc.body, "script", { id: i, src: t.url, type: "text/javascript" }),
                    n.count++;
            },
        },
        ik = xe(xe({}, JN), {
            send: function (e) {
                var t,
                    n = 0,
                    r = function () {
                        !e.async || 4 === t.readyState || 1e4 < n++
                            ? (e.success && n < 1e4 && 200 === t.status ? e.success.call(e.success_scope, "" + t.responseText, t, e) : e.error && e.error.call(e.error_scope, 1e4 < n ? "TIMED_OUT" : "GENERAL", t, e), (t = null))
                            : Fr.setTimeout(r, 10);
                    };
                if (
                    ((e.scope = e.scope || this),
                    (e.success_scope = e.success_scope || e.scope),
                    (e.error_scope = e.error_scope || e.scope),
                    (e.async = !1 !== e.async),
                    (e.data = e.data || ""),
                    ik.fire("beforeInitialize", { settings: e }),
                    (t = new XMLHttpRequest()).overrideMimeType && t.overrideMimeType(e.content_type),
                    t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async),
                    e.crossDomain && (t.withCredentials = !0),
                    e.content_type && t.setRequestHeader("Content-Type", e.content_type),
                    e.requestheaders &&
                        xt.each(e.requestheaders, function (e) {
                            t.setRequestHeader(e.key, e.value);
                        }),
                    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    (t = ik.fire("beforeSend", { xhr: t, settings: e }).xhr).send(e.data),
                    !e.async)
                )
                    return r();
                Fr.setTimeout(r, 10);
            },
        }),
        ak = xt.extend,
        uk =
            ((sk.sendRPC = function (e) {
                return new sk().send(e);
            }),
            (sk.prototype.send = function (e) {
                var n = e.error,
                    r = e.success,
                    o = ak(this.settings, e);
                (o.success = function (e, t) {
                    void 0 === (e = rk.parse(e)) && (e = { error: "JSON Parse error." }), e.error ? n.call(o.error_scope || o.scope, e.error, t) : r.call(o.success_scope || o.scope, e.result);
                }),
                    (o.error = function (e, t) {
                        n && n.call(o.error_scope || o.scope, e, t);
                    }),
                    (o.data = rk.serialize({ id: e.id || "c" + this.count++, method: e.method, params: e.params })),
                    (o.content_type = "application/json"),
                    ik.send(o);
            }),
            sk);
    function sk(e) {
        (this.settings = ak({}, e)), (this.count = 0);
    }
    try {
        var ck,
            lk = "__storage_test__";
        (ck = window.localStorage).setItem(lk, lk), ck.removeItem(lk);
    } catch (pk) {
        ck = (function () {
            return (
                (n = {}),
                (r = []),
                (e = {
                    getItem: function (e) {
                        var t = n[e];
                        return t || null;
                    },
                    setItem: function (e, t) {
                        r.push(e), (n[e] = String(t));
                    },
                    key: function (e) {
                        return r[e];
                    },
                    removeItem: function (t) {
                        (r = r.filter(function (e) {
                            return e === t;
                        })),
                            delete n[t];
                    },
                    clear: function () {
                        (r = []), (n = {});
                    },
                    length: 0,
                }),
                Object.defineProperty(e, "length", {
                    get: function () {
                        return r.length;
                    },
                    configurable: !1,
                    enumerable: !1,
                }),
                e
            );
            var n, r, e;
        })();
    }
    var fk,
        dk = {
            geom: { Rect: YE },
            util: {
                Promise: _r,
                Delay: Fr,
                Tools: xt,
                VK: Gf,
                URI: vE,
                Class: ZE,
                EventDispatcher: KN,
                Observable: JN,
                I18n: Au,
                XHR: ik,
                JSON: rk,
                JSONRequest: uk,
                JSONP: ok,
                LocalStorage: ck,
                Color: function (e) {
                    var n = {},
                        u = 0,
                        s = 0,
                        c = 0,
                        t = function (e) {
                            var t;
                            return (
                                "object" == typeof e
                                    ? "r" in e
                                        ? ((u = e.r), (s = e.g), (c = e.b))
                                        : "v" in e &&
                                          (function (e, t, n) {
                                              if (((e = (parseInt(e, 10) || 0) % 360), (t = parseInt(t, 10) / 100), (n = parseInt(n, 10) / 100), (t = tk(0, ek(t, 1))), (n = tk(0, ek(n, 1))), 0 !== t)) {
                                                  var r = e / 60,
                                                      o = n * t,
                                                      i = o * (1 - Math.abs((r % 2) - 1)),
                                                      a = n - o;
                                                  switch (Math.floor(r)) {
                                                      case 0:
                                                          (u = o), (s = i), (c = 0);
                                                          break;
                                                      case 1:
                                                          (u = i), (s = o), (c = 0);
                                                          break;
                                                      case 2:
                                                          (u = 0), (s = o), (c = i);
                                                          break;
                                                      case 3:
                                                          (u = 0), (s = i), (c = o);
                                                          break;
                                                      case 4:
                                                          (u = i), (s = 0), (c = o);
                                                          break;
                                                      case 5:
                                                          (u = o), (s = 0), (c = i);
                                                          break;
                                                      default:
                                                          u = s = c = 0;
                                                  }
                                                  (u = nk(255 * (u + a))), (s = nk(255 * (s + a))), (c = nk(255 * (c + a)));
                                              } else u = s = c = nk(255 * n);
                                          })(e.h, e.s, e.v)
                                    : (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))
                                    ? ((u = parseInt(t[1], 10)), (s = parseInt(t[2], 10)), (c = parseInt(t[3], 10)))
                                    : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))
                                    ? ((u = parseInt(t[1], 16)), (s = parseInt(t[2], 16)), (c = parseInt(t[3], 16)))
                                    : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) && ((u = parseInt(t[1] + t[1], 16)), (s = parseInt(t[2] + t[2], 16)), (c = parseInt(t[3] + t[3], 16))),
                                (u = u < 0 ? 0 : 255 < u ? 255 : u),
                                (s = s < 0 ? 0 : 255 < s ? 255 : s),
                                (c = c < 0 ? 0 : 255 < c ? 255 : c),
                                n
                            );
                        };
                    return (
                        e && t(e),
                        (n.toRgb = function () {
                            return { r: u, g: s, b: c };
                        }),
                        (n.toHsv = function () {
                            return (
                                (e = u),
                                (t = s),
                                (n = c),
                                (o = 0),
                                (i = ek((e /= 255), ek((t /= 255), (n /= 255)))),
                                (a = tk(e, tk(t, n))),
                                i === a
                                    ? { h: 0, s: 0, v: 100 * (o = i) }
                                    : ((r = (a - i) / a), { h: nk(60 * ((e === i ? 3 : n === i ? 1 : 5) - (e === i ? t - n : n === i ? e - t : n - e) / ((o = a) - i))), s: nk(100 * r), v: nk(100 * o) })
                            );
                            var e, t, n, r, o, i, a;
                        }),
                        (n.toHex = function () {
                            var e = function (e) {
                                return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e;
                            };
                            return "#" + e(u) + e(s) + e(c);
                        }),
                        (n.parse = t),
                        n
                    );
                },
            },
            dom: {
                EventUtils: Ni,
                Sizzle: Na,
                DomQuery: lu,
                TreeWalker: Hr,
                TextSeeker: is,
                DOMUtils: bu,
                ScriptLoader: Su,
                RangeUtils: fd,
                Serializer: oy,
                StyleSheetLoader: Ur,
                ControlSelection: Qf,
                BookmarkManager: Kf,
                Selection: Ov,
                Event: Ni.Event,
            },
            html: { Styles: hi, Entities: ri, Node: Em, Schema: pi, SaxParser: Lm, DomParser: Zv, Writer: Rm, Serializer: Tm },
            Env: vt,
            AddOnManager: Bu,
            Annotator: qf,
            Formatter: cb,
            UndoManager: fb,
            EditorCommands: MN,
            WindowManager: zy,
            NotificationManager: My,
            EditorObservable: nE,
            Shortcuts: lE,
            Editor: NE,
            FocusManager: nm,
            EditorManager: UE,
            DOM: bu.DOM,
            ScriptLoader: Su.ScriptLoader,
            PluginManager: Fy,
            ThemeManager: Uy,
            IconManager: Ry,
            Resource: GE,
            trim: xt.trim,
            isArray: xt.isArray,
            is: xt.is,
            toArray: xt.toArray,
            makeMap: xt.makeMap,
            each: xt.each,
            map: xt.map,
            grep: xt.grep,
            inArray: xt.inArray,
            extend: xt.extend,
            create: xt.create,
            walk: xt.walk,
            createNS: xt.createNS,
            resolve: xt.resolve,
            explode: xt.explode,
            _addCacheSuffix: xt._addCacheSuffix,
            isOpera: vt.opera,
            isWebKit: vt.webkit,
            isIE: vt.ie,
            isGecko: vt.gecko,
            isMac: vt.mac,
        },
        mk = xt.extend(UE, dk);
    (fk = mk),
        (window.tinymce = fk),
        (window.tinyMCE = fk),
        (function (e) {
            if ("object" == typeof module)
                try {
                    module.exports = e;
                } catch (t) {}
        })(mk);
})();

/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.4.0-12
 */

!(function (a) {
    "use strict";
    var n,
        t,
        r,
        e,
        u = void 0 !== a.window ? a.window : Function("return this;")(),
        i = function (n, t) {
            return { isRequired: n, applyPatch: t };
        },
        c = function (i, o) {
            return function () {
                for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                var r = o.apply(this, n),
                    e = void 0 === r ? n : r;
                return i.apply(this, e);
            };
        },
        o = function (n, t) {
            if (n) for (var r = 0; r < t.length; r++) t[r].isRequired(n) && t[r].applyPatch(n);
            return n;
        },
        f = function () {},
        l = function (n) {
            return function () {
                return n;
            };
        },
        s = l(!1),
        g = l(!0),
        p = function () {
            return d;
        },
        d =
            ((n = function (n) {
                return n.isNone();
            }),
            (e = {
                fold: function (n, t) {
                    return n();
                },
                is: s,
                isSome: s,
                isNone: g,
                getOr: (r = function (n) {
                    return n;
                }),
                getOrThunk: (t = function (n) {
                    return n();
                }),
                getOrDie: function (n) {
                    throw new Error(n || "error: getOrDie called on none.");
                },
                getOrNull: l(null),
                getOrUndefined: l(void 0),
                or: r,
                orThunk: t,
                map: p,
                each: f,
                bind: p,
                exists: s,
                forall: g,
                filter: p,
                equals: n,
                equals_: n,
                toArray: function () {
                    return [];
                },
                toString: l("none()"),
            }),
            Object.freeze && Object.freeze(e),
            e),
        h = function (r) {
            var n = l(r),
                t = function () {
                    return i;
                },
                e = function (n) {
                    return n(r);
                },
                i = {
                    fold: function (n, t) {
                        return t(r);
                    },
                    is: function (n) {
                        return r === n;
                    },
                    isSome: g,
                    isNone: s,
                    getOr: n,
                    getOrThunk: n,
                    getOrDie: n,
                    getOrNull: n,
                    getOrUndefined: n,
                    or: t,
                    orThunk: t,
                    map: function (n) {
                        return h(n(r));
                    },
                    each: function (n) {
                        n(r);
                    },
                    bind: e,
                    exists: e,
                    forall: e,
                    filter: function (n) {
                        return n(r) ? i : d;
                    },
                    toArray: function () {
                        return [r];
                    },
                    toString: function () {
                        return "some(" + r + ")";
                    },
                    equals: function (n) {
                        return n.is(r);
                    },
                    equals_: function (n, t) {
                        return n.fold(s, function (n) {
                            return t(r, n);
                        });
                    },
                };
            return i;
        },
        v = p,
        y = function (n) {
            return null == n ? d : h(n);
        },
        m = function (t) {
            return function (n) {
                return (
                    (function (n) {
                        if (null === n) return "null";
                        var t = typeof n;
                        return "object" === t && (Array.prototype.isPrototypeOf(n) || (n.constructor && "Array" === n.constructor.name))
                            ? "array"
                            : "object" === t && (String.prototype.isPrototypeOf(n) || (n.constructor && "String" === n.constructor.name))
                            ? "string"
                            : t;
                    })(n) === t
                );
            };
        },
        w = m("object"),
        O = m("array"),
        b = m("undefined"),
        j = m("function"),
        A = (Array.prototype.slice, Array.prototype.indexOf),
        x = Array.prototype.push,
        E = function (n, t) {
            return (r = n), (e = t), -1 < A.call(r, e);
            var r, e;
        },
        S = function (n, t) {
            return (function (n) {
                for (var t = [], r = 0, e = n.length; r < e; ++r) {
                    if (!O(n[r])) throw new Error("Arr.flatten item " + r + " was not an array, input: " + n);
                    x.apply(t, n[r]);
                }
                return t;
            })(
                (function (n, t) {
                    for (var r = n.length, e = new Array(r), i = 0; i < r; i++) {
                        var o = n[i];
                        e[i] = t(o, i);
                    }
                    return e;
                })(n, t)
            );
        },
        M = (j(Array.from) && Array.from, Object.prototype.hasOwnProperty),
        _ = function (u) {
            return function () {
                for (var n = new Array(arguments.length), t = 0; t < n.length; t++) n[t] = arguments[t];
                if (0 === n.length) throw new Error("Can't merge zero objects");
                for (var r = {}, e = 0; e < n.length; e++) {
                    var i = n[e];
                    for (var o in i) M.call(i, o) && (r[o] = u(r[o], i[o]));
                }
                return r;
            };
        },
        D = _(function (n, t) {
            return w(n) && w(t) ? D(n, t) : t;
        }),
        P = _(function (n, t) {
            return t;
        }),
        U = Object.keys,
        N = Object.hasOwnProperty,
        R = function (n, t) {
            for (var r = U(n), e = 0, i = r.length; e < i; e++) {
                var o = r[e];
                t(n[o], o);
            }
        },
        T = function (n, t) {
            return q(n, t) ? y(n[t]) : v();
        },
        q = function (n, t) {
            return N.call(n, t);
        },
        C = function (n) {
            if (b(n) || "" === n) return [];
            var t = O(n)
                ? S(n, function (n) {
                      return n.split(/[\s+,]/);
                  })
                : n.split(/[\s+,]/);
            return S(t, function (n) {
                return 0 < n.length ? [n.trim()] : [];
            });
        },
        I = function (n, t) {
            var r,
                e,
                i,
                o = D(n, t),
                u = C(t.plugins),
                a = T(o, "custom_plugin_urls").getOr({}),
                c =
                    ((r = function (n, t) {
                        return E(u, t);
                    }),
                    (e = {}),
                    (i = {}),
                    R(a, function (n, t) {
                        (r(n, t) ? e : i)[t] = n;
                    }),
                    { t: e, f: i }),
                f = T(o, "external_plugins").getOr({}),
                l = {};
            R(c.t, function (n, t) {
                l[t] = n;
            });
            var s = P(l, f);
            return P(t, 0 === U(s).length ? {} : { external_plugins: s });
        },
        k = {
            getCustomPluginUrls: I,
            patch: i(
                function () {
                    return !0;
                },
                function (t) {
                    t.EditorManager.init = c(t.EditorManager.init, function (n) {
                        return [I(t.defaultSettings, n)];
                    });
                }
            ),
        },
        L = function (n, t) {
            return (function (n, t) {
                for (var r = null != t ? t : u, e = 0; e < n.length && null != r; ++e) r = r[n[e]];
                return r;
            })(n.split("."), t);
        },
        z = function (n) {
            return parseInt(n, 10);
        },
        V = function (n, t) {
            var r = n - t;
            return 0 === r ? 0 : 0 < r ? 1 : -1;
        },
        B = function (n, t, r) {
            return { major: n, minor: t, patch: r };
        },
        F = function (n) {
            var t = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n);
            return t ? B(z(t[1]), z(t[2]), z(t[3])) : B(0, 0, 0);
        },
        $ = function (n, t) {
            return (
                !!n &&
                -1 ===
                    (function (n, t) {
                        var r = V(n.major, t.major);
                        if (0 !== r) return r;
                        var e = V(n.minor, t.minor);
                        if (0 !== e) return e;
                        var i = V(n.patch, t.patch);
                        return 0 !== i ? i : 0;
                    })(F([(r = n).majorVersion, r.minorVersion].join(".").split(".").slice(0, 3).join(".")), F(t))
            );
            var r;
        },
        G = {
            patch: i(
                function (n) {
                    return $(n, "4.7.0");
                },
                function (n) {
                    var o;
                    n.EditorManager.init = c(
                        n.EditorManager.init,
                        ((o = n.EditorManager),
                        function (n) {
                            var t = L("tinymce.util.Tools", u),
                                r = C(n.plugins),
                                e = o.defaultSettings.forced_plugins || [],
                                i = 0 < e.length ? r.concat(e) : r;
                            return [t.extend({}, n, { plugins: i })];
                        })
                    );
                }
            ),
        },
        H = function () {
            return new Date().getTime();
        },
        J = function (n, t, r, e, i) {
            var o,
                u = H();
            o = a.setInterval(function () {
                n() && (a.clearInterval(o), t()), H() - u > i && (a.clearInterval(o), r());
            }, e);
        },
        K = function (i) {
            return function () {
                var n,
                    t,
                    r,
                    e = ((n = i), (t = "position"), (r = n.currentStyle ? n.currentStyle[t] : a.window.getComputedStyle(n, null)[t]), r || "").toLowerCase();
                return "absolute" === e || "fixed" === e;
            };
        },
        Q = function (n) {
            n.parentNode.removeChild(n);
        },
        W = function (n, t) {
            var r,
                e = (((r = a.document.createElement("div")).style.display = "none"), (r.className = "mce-floatpanel"), r);
            a.document.body.appendChild(e),
                J(
                    K(e),
                    function () {
                        Q(e), n();
                    },
                    function () {
                        Q(e), t();
                    },
                    10,
                    5e3
                );
        },
        X = function (n, t) {
            n.notificationManager ? n.notificationManager.open({ text: t, type: "warning", timeout: 0, icon: "" }) : n.windowManager.alert(t);
        },
        Y = function (n) {
            n.EditorManager.on("AddEditor", function (n) {
                var t = n.editor,
                    r = t.settings.service_message;
                r &&
                    W(
                        function () {
                            X(t, t.settings.service_message);
                        },
                        function () {
                            a.alert(r);
                        }
                    );
            });
        },
        Z = function (n) {
            var t,
                r,
                e = L("tinymce.util.URI", u);
            (t = n.base_url) && ((this.baseURL = new e(this.documentBaseURL).toAbsolute(t.replace(/\/+$/, ""))), (this.baseURI = new e(this.baseURL))), (r = n.suffix), n.suffix && (this.suffix = r), (this.defaultSettings = n);
        },
        nn = function (n) {
            return [L("tinymce.util.Tools", u).extend({}, this.defaultSettings, n)];
        },
        tn = {
            patch: i(
                function (n) {
                    return "function" != typeof n.overrideDefaults;
                },
                function (n) {
                    Y(n), (n.overrideDefaults = Z), (n.EditorManager.init = c(n.EditorManager.init, nn));
                }
            ),
        },
        rn = {
            patch: i(
                function (n) {
                    return $(n, "4.5.0");
                },
                function (n) {
                    var e;
                    n.overrideDefaults = c(
                        n.overrideDefaults,
                        ((e = n),
                        function (n) {
                            var t = n.plugin_base_urls;
                            for (var r in t) e.PluginManager.urls[r] = t[r];
                        })
                    );
                }
            ),
        },
        en = function (n) {
            o(n, [tn.patch, rn.patch, G.patch, k.patch]);
        };
    en(u.tinymce);
})(window);

(function (cloudSettings) {
    tinymce.overrideDefaults(cloudSettings);
})({
    imagetools_proxy: "https://imageproxy.tiny.cloud/2/image",
    suffix: ".min",
    linkchecker_service_url: "https://hyperlinking.tiny.cloud",
    spellchecker_rpc_url: "https://spelling.tiny.cloud",
    spellchecker_api_key: "invalid-origin",
    tinydrive_service_url: "https://catalog.tiny.cloud",
    api_key: "invalid-origin",
    imagetools_api_key: "invalid-origin",
    tinydrive_api_key: "invalid-origin",
    forced_plugins: ["chiffer"],
    referrer_policy: "origin",
    content_css_cors: true,
    custom_plugin_urls: {},
    chiffer_snowplow_service_url: "https://sp.tinymce.com/i",
    mediaembed_api_key: "invalid-origin",
    linkchecker_api_key: "invalid-origin",
    mediaembed_service_url: "https://hyperlinking.tiny.cloud",
    service_message: 'This domain is not registered with Tiny Cloud.  Please review \u003ca target="_blank" href="https://www.tiny.cloud/my-account"\u003eyour approved domains\u003c/a\u003e.',
});
tinymce.baseURL = "https://cdn.tiny.cloud/1/invalid-origin/tinymce/5.5.1-99";

/* Ephox chiffer plugin
 *
 * Copyright 2010-2019 Tiny Technologies Inc. All rights reserved.
 *
 * Version: 1.5.1-12
 */

!(function () {
    "use strict";
    function o() {}
    function c() {
        return new Date().getTime();
    }
    function t(t, n) {
        var r,
            i,
            e,
            n =
                ((r = t),
                (i = n),
                {
                    send: function (t, n, e) {
                        var t = "?aid=" + i + "&tna=tinymce_cloud&p=web&dtm=" + n + "&stm=" + c() + "&tz=" + ("undefined" != typeof Intl ? encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone) : "N%2FA") + "&e=se&se_ca=" + t,
                            o = document.createElement("img");
                        o.src = r.chiffer_snowplow_service_url + t;
                        t = function (t) {
                            return function () {
                                (o.onload = null), (o.onerror = null), e(t);
                            };
                        };
                        (o.onload = t(!0)), (o.onerror = t(!1));
                    },
                });
        return (
            (e = n),
            {
                sendStat: function (t) {
                    return function () {
                        e.send(t, c(), o);
                    };
                },
            }
        );
    }
    var e,
        n,
        r,
        i,
        u,
        a =
            ((e = "string"),
            function (t) {
                return (
                    (t = typeof (n = t)),
                    (null === n
                        ? "null"
                        : "object" == t && (Array.prototype.isPrototypeOf(n) || (n.constructor && "Array" === n.constructor.name))
                        ? "array"
                        : "object" == t && (String.prototype.isPrototypeOf(n) || (n.constructor && "String" === n.constructor.name))
                        ? "string"
                        : t) === e
                );
                var n;
            });
    (r = tinymce.defaultSettings),
        (i = { load: o }),
        (u = (function (t) {
            t = t.api_key;
            return a(t) ? t : void 0;
        })(r)),
        (i =
            void 0 === u
                ? i
                : ((n = t(r, u)).sendStat("script_load")(),
                  {
                      load: function (t) {
                          t.once("init", n.sendStat("init")), t.once("focus", n.sendStat("focus")), t.on("ExportPdf", n.sendStat("export_pdf"));
                      },
                  })),
        tinymce.PluginManager.add("chiffer", i.load);
})();
