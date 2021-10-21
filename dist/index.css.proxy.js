// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/*! tailwindcss v2.2.7 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n\t--tw-translate-x: 0;\n\t--tw-translate-y: 0;\n\t--tw-rotate: 0;\n\t--tw-skew-x: 0;\n\t--tw-skew-y: 0;\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\t--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n\t--tw-blur: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-invert: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\r\n.absolute {\n\tposition: absolute;\n}\r\n.relative {\n\tposition: relative;\n}\r\n.right-0 {\n\tright: 0px;\n}\r\n.top-0 {\n\ttop: 0px;\n}\r\n.mt-3 {\n\tmargin-top: 0.75rem;\n}\r\n.mb-14 {\n\tmargin-bottom: 3.5rem;\n}\r\n.mt-6 {\n\tmargin-top: 1.5rem;\n}\r\n.mt-10 {\n\tmargin-top: 2.5rem;\n}\r\n.mt-8 {\n\tmargin-top: 2rem;\n}\r\n.mb-3 {\n\tmargin-bottom: 0.75rem;\n}\r\n.block {\n\tdisplay: block;\n}\r\n.flex {\n\tdisplay: flex;\n}\r\n.grid {\n\tdisplay: grid;\n}\r\n.hidden {\n\tdisplay: none;\n}\r\n.h-16 {\n\theight: 4rem;\n}\r\n.h-6 {\n\theight: 1.5rem;\n}\r\n.h-full {\n\theight: 100%;\n}\r\n.h-20 {\n\theight: 5rem;\n}\r\n.h-60 {\n\theight: 15rem;\n}\r\n.w-1\\/2 {\n\twidth: 50%;\n}\r\n.w-full {\n\twidth: 100%;\n}\r\n.w-40 {\n\twidth: 10rem;\n}\r\n.w-6 {\n\twidth: 1.5rem;\n}\r\n.w-20 {\n\twidth: 5rem;\n}\r\n.w-3\\/4 {\n\twidth: 75%;\n}\r\n@keyframes bounce {\n\n\t0%, 100% {\n\t\ttransform: translateY(-25%);\n\t\tanimation-timing-function: cubic-bezier(0.8,0,1,1);\n\t}\n\n\t50% {\n\t\ttransform: none;\n\t\tanimation-timing-function: cubic-bezier(0,0,0.2,1);\n\t}\n}\r\n.animate-bounce {\n\tanimation: bounce 1s infinite;\n}\r\n@keyframes ping {\n\n\t75%, 100% {\n\t\ttransform: scale(2);\n\t\topacity: 0;\n\t}\n}\r\n.animate-ping {\n\tanimation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\r\n.cursor-pointer {\n\tcursor: pointer;\n}\r\n.resize {\n\tresize: both;\n}\r\n.grid-cols-1 {\n\tgrid-template-columns: repeat(1, minmax(0, 1fr));\n}\r\n.grid-cols-2 {\n\tgrid-template-columns: repeat(2, minmax(0, 1fr));\n}\r\n.grid-rows-4 {\n\tgrid-template-rows: repeat(4, minmax(0, 1fr));\n}\r\n.flex-col {\n\tflex-direction: column;\n}\r\n.items-center {\n\talign-items: center;\n}\r\n.justify-center {\n\tjustify-content: center;\n}\r\n.justify-between {\n\tjustify-content: space-between;\n}\r\n.justify-items-center {\n\tjustify-items: center;\n}\r\n.rounded-lg {\n\tborder-radius: 0.5rem;\n}\r\n.rounded-full {\n\tborder-radius: 9999px;\n}\r\n.rounded-3xl {\n\tborder-radius: 1.5rem;\n}\r\n.rounded {\n\tborder-radius: 0.25rem;\n}\r\n.rounded-xl {\n\tborder-radius: 0.75rem;\n}\r\n.border {\n\tborder-width: 1px;\n}\r\n.bg-white {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\r\n.bg-yellow-500 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(245, 158, 11, var(--tw-bg-opacity));\n}\r\n.bg-black {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(0, 0, 0, var(--tw-bg-opacity));\n}\r\n.bg-red-600 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(220, 38, 38, var(--tw-bg-opacity));\n}\r\n.bg-green-200 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(167, 243, 208, var(--tw-bg-opacity));\n}\r\n.bg-yellow-300 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(252, 211, 77, var(--tw-bg-opacity));\n}\r\n.bg-gray-200 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(229, 231, 235, var(--tw-bg-opacity));\n}\r\n.bg-yellow-700 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(180, 83, 9, var(--tw-bg-opacity));\n}\r\n.bg-red-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(254, 226, 226, var(--tw-bg-opacity));\n}\r\n.bg-blue-700 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(29, 78, 216, var(--tw-bg-opacity));\n}\r\n.bg-blue-500 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n}\r\n.bg-gradient-to-r {\n\tbackground-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\r\n.from-purple-700 {\n\t--tw-gradient-from: #6d28d9;\n\t--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(109, 40, 217, 0));\n}\r\n.to-purple-500 {\n\t--tw-gradient-to: #8b5cf6;\n}\r\n.p-7 {\n\tpadding: 1.75rem;\n}\r\n.p-4 {\n\tpadding: 1rem;\n}\r\n.p-6 {\n\tpadding: 1.5rem;\n}\r\n.p-8 {\n\tpadding: 2rem;\n}\r\n.p-5 {\n\tpadding: 1.25rem;\n}\r\n.p-2 {\n\tpadding: 0.5rem;\n}\r\n.p-1 {\n\tpadding: 0.25rem;\n}\r\n.p-3 {\n\tpadding: 0.75rem;\n}\r\n.px-3 {\n\tpadding-left: 0.75rem;\n\tpadding-right: 0.75rem;\n}\r\n.py-5 {\n\tpadding-top: 1.25rem;\n\tpadding-bottom: 1.25rem;\n}\r\n.px-4 {\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\r\n.py-6 {\n\tpadding-top: 1.5rem;\n\tpadding-bottom: 1.5rem;\n}\r\n.px-10 {\n\tpadding-left: 2.5rem;\n\tpadding-right: 2.5rem;\n}\r\n.py-7 {\n\tpadding-top: 1.75rem;\n\tpadding-bottom: 1.75rem;\n}\r\n.px-8 {\n\tpadding-left: 2rem;\n\tpadding-right: 2rem;\n}\r\n.px-2 {\n\tpadding-left: 0.5rem;\n\tpadding-right: 0.5rem;\n}\r\n.py-8 {\n\tpadding-top: 2rem;\n\tpadding-bottom: 2rem;\n}\r\n.py-3 {\n\tpadding-top: 0.75rem;\n\tpadding-bottom: 0.75rem;\n}\r\n.py-2 {\n\tpadding-top: 0.5rem;\n\tpadding-bottom: 0.5rem;\n}\r\n.px-6 {\n\tpadding-left: 1.5rem;\n\tpadding-right: 1.5rem;\n}\r\n.px-5 {\n\tpadding-left: 1.25rem;\n\tpadding-right: 1.25rem;\n}\r\n.py-10 {\n\tpadding-top: 2.5rem;\n\tpadding-bottom: 2.5rem;\n}\r\n.px-1 {\n\tpadding-left: 0.25rem;\n\tpadding-right: 0.25rem;\n}\r\n.pl-8 {\n\tpadding-left: 2rem;\n}\r\n.pr-8 {\n\tpadding-right: 2rem;\n}\r\n.pb-3 {\n\tpadding-bottom: 0.75rem;\n}\r\n.pt-10 {\n\tpadding-top: 2.5rem;\n}\r\n.pb-10 {\n\tpadding-bottom: 2.5rem;\n}\r\n.pb-8 {\n\tpadding-bottom: 2rem;\n}\r\n.pb-6 {\n\tpadding-bottom: 1.5rem;\n}\r\n.text-center {\n\ttext-align: center;\n}\r\n.font-mono {\n\tfont-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\r\n.text-xl {\n\tfont-size: 1.25rem;\n\tline-height: 1.75rem;\n}\r\n.text-2xl {\n\tfont-size: 1.5rem;\n\tline-height: 2rem;\n}\r\n.text-4xl {\n\tfont-size: 2.25rem;\n\tline-height: 2.5rem;\n}\r\n.text-lg {\n\tfont-size: 1.125rem;\n\tline-height: 1.75rem;\n}\r\n.text-3xl {\n\tfont-size: 1.875rem;\n\tline-height: 2.25rem;\n}\r\n.text-5xl {\n\tfont-size: 3rem;\n\tline-height: 1;\n}\r\n.font-black {\n\tfont-weight: 900;\n}\r\n.font-extrabold {\n\tfont-weight: 800;\n}\r\n.font-bold {\n\tfont-weight: 700;\n}\r\n.text-white {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\r\n.text-gray-100 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(243, 244, 246, var(--tw-text-opacity));\n}\r\n.text-yellow-700 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(180, 83, 9, var(--tw-text-opacity));\n}\r\n.text-yellow-600 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(217, 119, 6, var(--tw-text-opacity));\n}\r\n.text-black {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(0, 0, 0, var(--tw-text-opacity));\n}\r\n.no-underline {\n\ttext-decoration: none;\n}\r\n.shadow-sm {\n\t--tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-xl {\n\t--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.filter {\n\tfilter: var(--tw-filter);\n}\r\n.transition {\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\r\n.duration-300 {\n\ttransition-duration: 300ms;\n}\r\n.ease-in-out {\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\r\n.hover\\:scale-105:hover {\n\t--tw-scale-x: 1.05;\n\t--tw-scale-y: 1.05;\n\ttransform: var(--tw-transform);\n}\r\n.hover\\:bg-blue-700:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(29, 78, 216, var(--tw-bg-opacity));\n}\r\n@media (min-width: 768px) {\n\n\t.md\\:mb-0 {\n\t\tmargin-bottom: 0px;\n\t}\n\n\t.md\\:block {\n\t\tdisplay: block;\n\t}\n\n\t.md\\:grid {\n\t\tdisplay: grid;\n\t}\n\n\t.md\\:hidden {\n\t\tdisplay: none;\n\t}\n\n\t.md\\:h-80 {\n\t\theight: 20rem;\n\t}\n\n\t.md\\:w-60 {\n\t\twidth: 15rem;\n\t}\n\n\t.md\\:w-auto {\n\t\twidth: auto;\n\t}\n\n\t.md\\:w-80 {\n\t\twidth: 20rem;\n\t}\n\n\t.md\\:grid-cols-2 {\n\t\tgrid-template-columns: repeat(2, minmax(0, 1fr));\n\t}\n\n\t.md\\:flex-row {\n\t\tflex-direction: row;\n\t}\n\n\t.md\\:flex-wrap {\n\t\tflex-wrap: wrap;\n\t}\n\n\t.md\\:gap-1 {\n\t\tgap: 0.25rem;\n\t}\n\n\t.md\\:gap-5 {\n\t\tgap: 1.25rem;\n\t}\n\n\t.md\\:gap-10 {\n\t\tgap: 2.5rem;\n\t}\n\n\t.md\\:p-6 {\n\t\tpadding: 1.5rem;\n\t}\n\n\t.md\\:py-4 {\n\t\tpadding-top: 1rem;\n\t\tpadding-bottom: 1rem;\n\t}\n\n\t.md\\:px-60 {\n\t\tpadding-left: 15rem;\n\t\tpadding-right: 15rem;\n\t}\n\n\t.md\\:py-7 {\n\t\tpadding-top: 1.75rem;\n\t\tpadding-bottom: 1.75rem;\n\t}\n\n\t.md\\:pt-4 {\n\t\tpadding-top: 1rem;\n\t}\n\n\t.md\\:pl-8 {\n\t\tpadding-left: 2rem;\n\t}\n\n\t.md\\:text-2xl {\n\t\tfont-size: 1.5rem;\n\t\tline-height: 2rem;\n\t}\n\n\t.md\\:text-xl {\n\t\tfont-size: 1.25rem;\n\t\tline-height: 1.75rem;\n\t}\n\n\t.md\\:text-8xl {\n\t\tfont-size: 6rem;\n\t\tline-height: 1;\n\t}\n\n\t.md\\:text-3xl {\n\t\tfont-size: 1.875rem;\n\t\tline-height: 2.25rem;\n\t}\n\n\t.md\\:text-6xl {\n\t\tfont-size: 3.75rem;\n\t\tline-height: 1;\n\t}\n\n\t.md\\:text-5xl {\n\t\tfont-size: 3rem;\n\t\tline-height: 1;\n\t}\n\n\t.md\\:text-lg {\n\t\tfont-size: 1.125rem;\n\t\tline-height: 1.75rem;\n\t}\n\n\t.md\\:text-4xl {\n\t\tfont-size: 2.25rem;\n\t\tline-height: 2.5rem;\n\t}\n}\r\n@media (min-width: 1024px) {\n\n\t.lg\\:grid-cols-5 {\n\t\tgrid-template-columns: repeat(5, minmax(0, 1fr));\n\t}\n\n\t.lg\\:grid-cols-3 {\n\t\tgrid-template-columns: repeat(3, minmax(0, 1fr));\n\t}\n\n\t.lg\\:px-60 {\n\t\tpadding-left: 15rem;\n\t\tpadding-right: 15rem;\n\t}\n\n\t.lg\\:py-20 {\n\t\tpadding-top: 5rem;\n\t\tpadding-bottom: 5rem;\n\t}\n\n\t.lg\\:px-80 {\n\t\tpadding-left: 20rem;\n\t\tpadding-right: 20rem;\n\t}\n\n\t.lg\\:text-xl {\n\t\tfont-size: 1.25rem;\n\t\tline-height: 1.75rem;\n\t}\n\n\t.lg\\:text-9xl {\n\t\tfont-size: 8rem;\n\t\tline-height: 1;\n\t}\n\n\t.lg\\:text-2xl {\n\t\tfont-size: 1.5rem;\n\t\tline-height: 2rem;\n\t}\n\n\t.lg\\:text-4xl {\n\t\tfont-size: 2.25rem;\n\t\tline-height: 2.5rem;\n\t}\n\n\t.lg\\:text-5xl {\n\t\tfont-size: 3rem;\n\t\tline-height: 1;\n\t}\n}\r\n\r\n.menu-card {\n\tdisplay: flex;\n\theight: 100vh;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n\tpadding-top: 10rem;\n\tpadding-bottom: 10rem;\n\tfont-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\r\n\r\n.center-content {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\r\n\r\n.boton {\r\n    width: fit-content;\r\n}\r\n\r\n.logo-text {\r\n    padding-top: 5rem;\r\n    font-family: \"Times New Roman\";\r\n}\r\n\r\n.portada {\r\n    background-image: url(\"https://github.com/sayyr1/personal/blob/master/images/hero.png?raw=true\");\r\n}\r\n\r\n.screen {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(1, minmax(0, 1fr));\n\talign-items: center;\n}\r\n\r\n@media (min-width: 768px) {\n\n\t.screen {\n\t\tgrid-template-columns: repeat(2, minmax(0, 1fr));\n\t}\n}\r\n\r\n@media (min-width: 1024px) {\n\n\t.screen {\n\t\tgrid-template-columns: repeat(3, minmax(0, 1fr));\n\t}\n}\r\n\r\n.volantes {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(1, minmax(0, 1fr));\n\talign-items: center;\n}\r\n\r\n@media (min-width: 768px) {\n\n\t.volantes {\n\t\tgrid-template-columns: repeat(2, minmax(0, 1fr));\n\t}\n}\r\n\r\n@media (min-width: 1024px) {\n\n\t.volantes {\n\t\tgrid-template-columns: repeat(3, minmax(0, 1fr));\n\t}\n}\r\n\r\n/*-------------------------------\r\n    CODIGOS PARA CRYPTOS\r\n----------------------------------*/\r\n\r\n\r\n/*Colores de los percentages*/\r\n.red {\r\n    color: #f00606;\r\n}\r\n\r\n.green {\r\n    color: #11d811;\r\n}\r\n\r\n/*!* DARK MODE*!*/\r\n/** {*/\r\n/*    box-sizing: border-box;*/\r\n/*    margin: 0;*/\r\n/*    padding: 0;*/\r\n/*    font-family: 'Montserrat', sans-serif;*/\r\n/*    background-color: #1a1a1c;*/\r\n/*    color: #fff;*/\r\n/*}*/\r\n\r\n/* INPUT */\r\n\r\n.coin-input {\r\n    padding-left: 16px;\r\n    width: 300px;\r\n    height: 50px;\r\n    border-radius: 4px;\r\n    border: none;\r\n    background-image: linear-gradient(\r\n            -225deg,\r\n            #ac32e4 0%,\r\n            #7918f2 48%,\r\n            #4801ff 100%\r\n    );\r\n\r\n    color: #e2e2e2;\r\n}\r\n\r\n/*NAV*/\r\n.navegacion {\r\n    background: rgb(8, 8, 8);\r\n    background: linear-gradient(90deg, rgba(8, 8, 8, 0.4718838218881303) 9%, rgba(36, 36, 36, 0.5531163148853291) 17%, rgba(28, 25, 25, 0.7772059507396709) 26%, rgba(0, 0, 0, 1) 64%);\r\n}\r\n\r\n/*Tarjetas de Infomacion*/\r\n\r\n\r\n@media (min-width: 801px) {\r\n    div.information section:nth-of-type(odd) {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    div.information section:nth-of-type(even) {\r\n        display: flex;\r\n        flex-direction: row-reverse;\r\n        align-items: flex-start;\r\n    }\r\n}\r\n\r\n.nav {\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 100;\r\n}\r\n\r\n.dropdown {\r\n    position: sticky;\r\n    top: 5rem;\r\n    z-index: 100;\r\n}\r\n\r\n/*CONFERENCIAS*/\r\n\r\n\r\n@media (min-width: 768px) {\r\n    .logo-conferencias{\r\n        width: 45rem;\r\n    }\r\n}\r\n.bg-1{\r\n    background-color: #1D1F3F;\r\n}\r\n.bg-2{\r\n    background-color: #6f42c1;\r\n}\r\n\r\n.pregunta-1{\r\n    line-height: 5rem;\r\n    color: #6f42c1;\r\n}\r\n.color-2{\r\n    color:  #1D1F3F ;\r\n}\r\n.mision-heading {\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n\ttext-align: center;\n\tfont-size: 1.5rem;\n\tline-height: 2rem;\n}\r\n@media (min-width: 768px) {\n\n\t.mision-heading {\n\t\tfont-size: 1.875rem;\n\t\tline-height: 2.25rem;\n\t}\n}\r\n.tarjetas-supscripcion{\r\n    box-shadow: 7px 10px 3px red;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}