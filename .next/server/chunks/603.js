exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 6063:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ContainerBlock; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(2517);
// EXTERNAL MODULE: ./constants/data.js
var data = __webpack_require__(1565);
;// CONCATENATED MODULE: ./components/Navbar.js







function Navbar() {
  const router = (0,router_.useRouter)(); // console.log(router.asPath);

  const {
    theme,
    setTheme
  } = (0,external_next_themes_.useTheme)();
  const {
    0: mounted,
    1: setMounted
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setMounted(true);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "max-w-6xl select-none  mx-auto px-4 py-10 md:py-20",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex  md:flex-row justify-between items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex select-none flex-col",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "font-semibold text-xl dark:text-gray-100",
              children: data/* default.name */.Z.name
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "text-base font-light text-gray-500 dark:text-gray-300",
              children: data/* default.designation */.Z.designation
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "space-x-8 hidden md:block",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/about",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: `text-base  ${router.asPath === "/about" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
            children: ["About", " ", router.asPath === "/about" && /*#__PURE__*/jsx_runtime_.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-down inline-block h-3 w-3",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/projects",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: `text-base  ${router.asPath === "/projects" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
            children: ["Projects", router.asPath === "/projects" && /*#__PURE__*/jsx_runtime_.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-down inline-block h-3 w-3",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/experience",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: `text-base  ${router.asPath === "/experience" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
            children: ["Experience", " ", router.asPath === "/experience" && /*#__PURE__*/jsx_runtime_.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-down inline-block h-3 w-3",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/contact",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: `text-base  ${router.asPath === "/contact" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
            children: ["Contact", router.asPath === "/contact" && /*#__PURE__*/jsx_runtime_.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-down inline-block h-3 w-3",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "space-x-4 flex flex-row items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: data/* default.socialLinks.instagram */.Z.socialLinks.instagram,
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-instagram h-5 w-5",
            viewBox: "0 0 16 16",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: data/* default.socialLinks.twitter */.Z.socialLinks.twitter,
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-twitter h-5 w-5",
            viewBox: "0 0 16 16",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: data/* default.socialLinks.linkedin */.Z.socialLinks.linkedin,
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-linkedin h-5 w-5",
            viewBox: "0 0 16 16",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          "aria-label": "Toggle Dark Mode",
          type: "button",
          className: "w-10 h-10 p-3 rounded focus:outline-none",
          onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
          children: mounted && /*#__PURE__*/jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            stroke: "currentColor",
            className: "w-4 h-4 text-yellow-500 dark:text-yellow-500",
            children: theme === "dark" ? /*#__PURE__*/jsx_runtime_.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            }) : /*#__PURE__*/jsx_runtime_.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            })
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "space-x-8 block md:hidden mt-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/about",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: "About"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/projects",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: "Projects"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/experience",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: "Experience"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/contact",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: "Contact"
        })
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/Footer.js




function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bg-[#F1F1F1] dark:bg-gray-900",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "max-w-6xl  mx-auto px-4 py-10 md:py-20",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "h-0.5 w-full bg-white dark:bg-gray-700"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["\xA9 ", new Date().getFullYear(), "  All Rights Reserved."]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "space-x-4 flex flex-row items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            href: data/* default.socialLinks.instagram */.Z.socialLinks.instagram,
            className: "text-base font-normal text-gray-600 dark:text-gray-300",
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-instagram h-5 w-5",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: data/* default.socialLinks.twitter */.Z.socialLinks.twitter,
            className: "text-base font-normal text-gray-600 dark:text-gray-300",
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-twitter h-5 w-5",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: data/* default.socialLinks.linkedin */.Z.socialLinks.linkedin,
            className: "text-base font-normal text-gray-600 dark:text-gray-300",
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-linkedin h-5 w-5",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
              })
            })
          })]
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/ContainerBlock.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function ContainerBlock(_ref) {
  let {
    children
  } = _ref,
      customMeta = _objectWithoutProperties(_ref, ["children"]);

  const router = (0,router_.useRouter)();

  const meta = _objectSpread({
    title: "Kshitij Sharma - Student, Developer, Writer & Designer",
    description: `I barely talk, code more! Get in touch with me to know more.`,
    image: "/avatar.png",
    type: "website"
  }, customMeta);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: meta.title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "robots",
        content: "follow, index"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        content: meta.description,
        name: "description"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: `https://kshitij-portfolio-i840vzqi3-kshtjsharma68.vercel.app${router.asPath}`
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "canonical",
        href: `https://kshitij-portfolio-i840vzqi3-kshtjsharma68.vercel.app${router.asPath}`
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:type",
        content: meta.type
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:site_name",
        content: "Kshitij Sharma"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: meta.description
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: meta.title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: meta.image
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:site",
        content: "@kshtjsharma68"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:title",
        content: meta.title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:description",
        content: meta.description
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:image",
        content: meta.image
      }), meta.date && /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "article:published_time",
        content: meta.date
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "dark:bg-gray-800 w-full",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Navbar, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: children
      }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
    })]
  });
}

/***/ }),

/***/ 1565:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const userData = {
  githubUsername: "kshitijzasya",
  name: "Kshitij Sharma",
  designation: "Full Stack Developer",
  avatarUrl: "/update_profile.jpg",
  // avatarUrl: "https://pbs.twimg.com/profile_images/1494703351149301760/GeuTvrEd_400x400.jpg",
  email: "kshtjsharma68@gmail.com",
  phone: "+919418009411",
  address: "Hamirpur Himachal Pradesh India.",
  projects: [{
    title: "Medium Clone",
    link: "https://medium-sanity-woad.vercel.app/",
    imgUrl: "projects/medium.png"
  }, {
    title: "Airbnb Clone",
    link: "https://airbnb-clone-sujeetag04.vercel.app/",
    imgUrl: "projects/airbnb.png"
  }, {
    title: "Hulu Clone",
    link: "https://hulu-clone-2832.vercel.app/",
    imgUrl: "projects/hulu.png"
  }, {
    title: "Static Portfolio",
    link: "https://sujeetgund.github.io/portfolio/",
    imgUrl: "projects/portfolio.png"
  }, {
    title: "Batch 23 Community",
    link: "https://sujeetgund.github.io/Batch-23/",
    imgUrl: "projects/batch23.png"
  }, {
    title: "Mojo TV",
    link: "https://mojo-tv.vercel.app/",
    imgUrl: "projects/mojotv.png"
  }, {
    title: "Starbucks Store API",
    link: "https://rapidapi.com/sujeetgund/api/starbucks-store-data/",
    imgUrl: "projects/starbucks-store.png"
  }, {
    title: "Cinemos API",
    link: "https://sujeetgund.github.io/cinemos-docs/",
    imgUrl: "projects/cinemos-api.png"
  }, {
    title: "Fastmedia",
    link: "https://fastmedia.vercel.app/",
    imgUrl: "projects/fastmedia.png"
  }],
  about: {
    title: "I'm a student of programming that loves building products and web applications. I barely talk, code more!",
    description: [`I've been developing full-stack application since I was 10 years old. I didn't know what full-stack meant at that time because the term was not coined back then.`, `After learning HTML and struggling with CSS, I came up with a brilliant idea of using tailwindCSS so that I don't have to style everything by myself and - for obvious reasons - if you knew tailwind, you were cool.`, `But now, I'm a legend. I've been coding in React, Node.js, Next.js, MongoDB, MySQL, Bootstrap, TailwindCSS, PHP, Strapi, Sanity etc to name a few. Although I barely know the syntax!`],
    currentProject: "Cinemos API",
    currentProjectUrl: "https://sujeetgund.github.io/cinemos-docs/"
  },
  experience: [{
    title: "Founder, Developer and Manager",
    company: "Initiative",
    year: "2016",
    companyLink: "#https://www.zasyasolutions.com/",
    desc: "Moving on, to live my own life! Will make wonders."
  }, {
    title: "Internship",
    company: "Holisol",
    year: "2015",
    companyLink: "#",
    desc: "Developed basic blocks of programming and created some projects to make fundamentals string. Loved working there."
  }, {
    title: "Graduation",
    company: "Rayat And Bahra",
    year: "2012",
    companyLink: "#",
    desc: "Major in Computers and Electronics Communication with good grades and fire, Nobody asks this but it's okay."
  }, {
    title: "High School",
    company: "Him Academy.",
    year: "2008",
    companyLink: "#",
    desc: "Luckily, hard study time"
  }],
  resumeUrl: "#",
  socialLinks: {
    instagram: "https://www.instagram.com/_kshitij_sharma68",
    twitter: "https://twitter.com/kshtjsharma68",
    linkedin: "https://www.linkedin.com/in/kshitij-sharma-a5ba6431/",
    github: "https://github.com/kshitijzasya" // facebook: "https://facebook.com/sujeet.gund.98",

  }
}; // TODO: nice work

/* harmony default export */ __webpack_exports__["Z"] = (userData);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;