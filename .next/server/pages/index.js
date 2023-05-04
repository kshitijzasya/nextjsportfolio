(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7019:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
// EXTERNAL MODULE: ./components/ContainerBlock.js + 2 modules
var ContainerBlock = __webpack_require__(6063);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/FavouriteProjects.js




function FavouriteProjects() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bg-[#F1F1F1] -mt-40 dark:bg-gray-900",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "max-w-6xl mx-auto",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
        className: "flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center",
          children: "Favourite Projects"
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/projects",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700",
            children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-up-right-square",
              stroke: "4",
              strokeWidth: "4",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "View all"
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "grid md:grid-cols-3 gap-8 lg:-mt-8 pb-40",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://medium-sanity-woad.vercel.app/",
          className: "w-full block col-span-3 shadow-2xl",
          title: "Medium Clone",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "relative overflow-hidden",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "projects/medium.png",
              alt: "portfolio",
              className: "transform hover:scale-125 transition duration-2000 ease-out"
            }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2",
              children: "Medium Clone"
            }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "absolute bottom-10 left-10 text-gray-50 font-bold text-xl",
              children: "01"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://hulu-clone-2832.vercel.app/",
          className: "w-full block col-span-3  sm:col-span-2 shadow-2xl",
          title: "Hulu Clone",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "relative overflow-hidden",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "projects/hulu.png",
              alt: "Hulu Clone Project",
              className: "transform hover:scale-125 transition duration-2000 ease-out"
            }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2",
              children: "Hulu Clone"
            }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "absolute bottom-10 left-10 text-gray-50 font-bold text-xl",
              children: "02"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://airbnb-clone-sujeetag04.vercel.app/",
          className: "w-full block col-span-3 sm:col-span-1  object-cover",
          title: "Airbnb Clone",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "relative overflow-hidden shadow-2xl",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "projects/airbnb.png",
              alt: "Airbnb Clone Project",
              className: "transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl"
            }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2",
              children: "Airbnb Clone"
            }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "absolute bottom-10 left-10 text-gray-50 font-bold text-xl",
              children: "03"
            })]
          })
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: external "axios"
var external_axios_namespaceObject = require("axios");;
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./lib/getLatestRepos.js


const getLatestRepos = async (data, token) => {
  // console.log("data", data);
  try {
    const username = data.githubUsername; // let token = `token ${process.env.GITHUB_AUTH_TOKEN}`;
    // console.log("TOKEN", token);

    if (token) {
      const res = await external_axios_default().get(`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`, {
        headers: {
          Authorization: `token ${token}`
        }
      });
      let repos = res.data.items;
      let latestSixRepos = repos.splice(0, 6); // console.log("LATEST 6 repos", latestSixRepos);

      return latestSixRepos;
    } else {
      const res = await external_axios_default().get(`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`);
      let repos = res.data.items;
      let latestSixRepos = repos.splice(0, 6);
      return latestSixRepos;
    }
  } catch (err) {
    console.log(err);
  }
};

/* harmony default export */ var lib_getLatestRepos = (getLatestRepos);
// EXTERNAL MODULE: ./constants/data.js
var data = __webpack_require__(1565);
;// CONCATENATED MODULE: ./components/LatestCode.js






function LatestCode({
  repositories
}) {
  const {
    0: repos,
    1: setRepos
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(async () => {
    // let latestRepos = await getLatestRepos(userData);
    // console.log("latestRepos", latestRepos);
    setRepos(repositories);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "bg-[#F1F1F1] -mt-40 dark:bg-gray-900 pb-40",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "max-w-6xl mx-auto",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center lg:text-left",
          children: "Latest Code"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          href: `https://github.com/${data/* default.githubUsername */.Z.githubUsername}`,
          className: "mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700",
          children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-arrow-up-right-square",
            stroke: "4",
            strokeWidth: "4",
            viewBox: "0 0 16 16",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              fillRule: "evenodd",
              d: "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "View GitHub"
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20",
      children: repos && repos.map((latestRepo, idx) => /*#__PURE__*/jsx_runtime_.jsx(GithubRepoCard, {
        latestRepo: latestRepo
      }, "idx"))
    })]
  });
}

const GithubRepoCard = ({
  latestRepo
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "github-repo",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "font-semibold text-xl dark:text-gray-200 text-gray-700",
      children: latestRepo.name
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-base font-normal my-4 text-gray-500",
      children: latestRepo.description
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      href: latestRepo.clone_url,
      className: "font-semibold group flex flex-row space-x-2 w-full items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "View Repository "
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "transform  group-hover:translate-x-2 transition duration-300",
        children: "\u2192"
      })]
    })]
  });
};
;// CONCATENATED MODULE: external "react-rough-notation"
var external_react_rough_notation_namespaceObject = require("react-rough-notation");;
;// CONCATENATED MODULE: ./components/RainbowHighlight.js



const RainbowHighlight = ({
  color,
  children
}) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * children.length);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_rough_notation_namespaceObject.RoughNotation, {
    type: "highlight",
    multiline: true,
    padding: [0, 2],
    iterations: 1,
    animationDuration: animationDuration,
    color: color,
    children: children
  });
};
;// CONCATENATED MODULE: ./components/Hero.js






function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-row justify-center items-start overflow-hidden",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_rough_notation_namespaceObject.RoughNotationGroup, {
        show: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx(RainbowHighlight, {
          color: colors[3],
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2",
            children: "Student."
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(RainbowHighlight, {
          color: colors[0],
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2",
            children: "Developer."
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(RainbowHighlight, {
          color: colors[1],
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2",
            children: "Designer."
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(RainbowHighlight, {
          color: colors[2],
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2",
            children: "Programmer."
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-3/4 ",
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: data/* default.avatarUrl */.Z.avatarUrl,
          alt: "avatar",
          className: " shadow"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex flex-row justify-between mt-4",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-row space-x-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-90deg-up",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "font-mono",
              children: "That's me"
            })]
          })
        })]
      })
    })]
  });
}
;// CONCATENATED MODULE: ./pages/index.js










function Home({
  repositories
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContainerBlock/* default */.Z, {
    title: "Kshitij Sharma- Developer, Writer, Creator",
    description: "I've been developing websites for 6 years straight. Get in touch with me to know more.",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Hero, {}), /*#__PURE__*/jsx_runtime_.jsx(FavouriteProjects, {}), /*#__PURE__*/jsx_runtime_.jsx(LatestCode, {
      repositories: repositories
    })]
  });
}
const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;
  const repositories = await lib_getLatestRepos(data/* default */.Z, token);
  return {
    props: {
      repositories
    }
  };
};

/***/ }),

/***/ 2517:
/***/ (function(module) {

"use strict";
module.exports = require("next-themes");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,603], function() { return __webpack_exec__(7019); });
module.exports = __webpack_exports__;

})();