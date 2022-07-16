// Generates all possible permutations of the provided scopes.
function permuteScopes(...scopes) {
  if (scopes.length <= 1) return scopes;
  return scopes.flatMap(s =>
    permuteScopes(...scopes.filter(t => t != s)).map(p => `${s} ${p}`)
  );
}

export const themes = ["light", "dark"];

export const colorThemeData = {
  $schema: "vscode://schemas/color-theme",
  name: {
    "theme:light": "Eirys Light",
    "theme:dark": "Eirys Dark",
  },
  colors: {
    "editor.background": {
      "theme:light": "#fff",
      "theme:dark": "#000",
    },
    "editor.foreground": {
      "theme:light": "#000",
      "theme:dark": "#fff",
    },
    // "activityBarBadge.background": "#007acc",
    // "sideBarTitle.foreground": "#bbbbbb"
  },
  tokenColors: [
    //#region -- Root Syntax ---------------------------------------------------
    {
      name: "Source Default",
      // Note: this includes all unstyled elements, such as punctuation.
      scope: ["source", "markup.fenced_code meta.embedded"],
      settings: {
        foreground: {
          "theme:light": "#666",
          "theme:dark": "#ccc",
        },
      },
    },
    {
      name: "Comment",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        fontStyle: "italic",
        // "foreground": "#008000"
        // "foreground": "#6A9955"
        foreground: {
          "theme:light": "#080",
          "theme:dark": "#0b0",
        },
      },
    },
    {
      name: "Invalid",
      scope: ["invalid", "invalid.illegal"],
      settings: {
        foreground: "#f00",
      },
    },
    //#endregion
    //#region -- Literals ------------------------------------------------------
    {
      name: "Number",
      scope: [
        "constant.numeric",
        // "keyword.other.unit",
        // "keyword.other"
      ],
      settings: {
        foreground: {
          "theme:light": "#c30",
          "theme:dark": "#f96",
        },
      },
    },
    {
      name: "String",
      scope: [
        "string",
        "meta.object-literal.key meta string", // String used in a computed key.
        // "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
      ],
      settings: {
        foreground: {
          "theme:light": "#c30",
          "theme:dark": "#f96",
        },
      },
    },
    {
      name: "Escape Character",
      scope: ["constant.character.escape"],
      settings: {
        foreground: {
          "theme:light": "#06c",
          "theme:dark": "#f3f",
        },
      },
    },
    {
      name: "Regular Expression",
      scope: ["string.regexp"],
      settings: {
        foreground: {
          "theme:light": "#c00",
          "theme:dark": "#f66",
        },
        // "fontStyle": "underline"
      },
    },
    // {
    //     "name": "Symbol",
    //     "scope": [
    //         "constant.other.symbol",
    //         "constant.other.key",
    //     ],
    //     "settings": {
    //         "foreground": "#e10000"
    //     }
    // },
    {
      name: "Language Constant",
      scope: ["constant.language", "support.constant"],
      settings: {
        foreground: {
          "theme:light": "#c30",
          "theme:dark": "#f96",
          // "theme:dark":"#ff3",
        },
      },
    },
    {
      name: "this",
      scope: ["variable.language.this"],
      settings: {
        foreground: {
          "theme:light": "#990",
          "theme:dark": "#ff3",
        },
      },
    },
    {
      name: "Color",
      scope: ["constant.other.color"],
      settings: {
        foreground: {
          "theme:light": "#c30",
          "theme:dark": "#f96",
        },
      },
    },
    //#endregion
    //#region -- Operations ----------------------------------------------------
    {
      name: "Control Flow Keyword",
      scope: [
        "keyword.control",
        "keyword.operator.logical",
        "keyword.generator",
      ],
      settings: {
        foreground: {
          "theme:light": "#a3a",
          "theme:dark": "#f8f",
        },
      },
    },
    {
      name: "Assignment",
      scope: ["keyword.operator.assignment", "punctuation.separator.key-value"],
      settings: {
        foreground: {
          "theme:light": "#a0a",
          "theme:dark": "#f0f",
        },
        fontStyle: "", // Prevent spillover from declaration formatting.
      },
    },
    {
      name: "Declaration",
      scope: [
        "meta.definition",
        "meta.parameters variable.parameter",
        "meta.object-literal.key",
      ],
      settings: {
        fontStyle: "underline",
      },
    },
    {
      name: "Operator",
      scope: ["keyword.operator"],
      settings: {
        foreground: {
          "theme:light": "#088",
          "theme:dark": "#0ff",
        },
      },
    },
    {
      name: "Function",
      scope: [
        "entity.name.function",
        "meta.function-call",
        "variable.function",
        "support.function",
        "keyword.other.special-method",
      ],
      settings: {
        foreground: {
          "theme:light": "#088",
          "theme:dark": "#6ff",
        },
      },
    },
    //#endregion
    //#region -- Variables -----------------------------------------------------
    {
      name: "Member",
      scope: [
        "variable.other.member",
        "variable.other.property",
        "variable.other.object.member",
        "variable.other.object.property",
        "variable.object.property",
        "meta.object-literal.key",
        // String used as a key.  Note: ideally we want to include only strings
        // that are directly used as keys, not those used in computed keys.
        // However, VS Code doesn't seem to currently support the selector
        // composition required to implement that here -- so instead we override
        // this in the String rule, which hopefully covers most situations.
        "meta.object-literal.key string",
        "support.variable.property",
        "support.type.property-name",
      ],
      settings: {
        foreground: {
          "theme:light": "#04a",
          "theme:dark": "#5bf",
        },
      },
    },
    {
      name: "Variable",
      scope: ["variable", "string constant.other.placeholder"],
      settings: {
        foreground: {
          "theme:light": "#000",
          "theme:dark": "#fff",
        },
      },
    },
    {
      name: "Constant Variable (Global/Default)",
      scope: ["variable.other.constant", "variable.other.enummember"],
      settings: {
        foreground: {
          "theme:light": "#a80",
          "theme:dark": "#fc0",
        },
      },
    },
    {
      name: "Local const Variable",
      scope: ["meta.block variable.other.constant"],
      settings: {
        foreground: {
          "theme:light": "#740",
          "theme:dark": "#ffa",
        },
      },
    },
    {
      name: "Storage",
      scope: ["storage.type", "storage.modifier"],
      settings: {
        "theme:light": {
          foreground: "#41a",
        },
        "theme:dark": {
          foreground: "#96f",
          fontStyle: "bold", // Compensate for reduced contrast.
        },
      },
    },
    {
      name: "Class, Support",
      scope: [
        "entity.name",
        "support.type",
        "support.class",
        "support.type.sys-types",
      ],
      settings: {
        foreground: {
          "theme:light": "#093",
          "theme:dark": "#0f9",
        },
      },
    },
    //#endregion
    {
      name: "Tag",
      scope: [
        "entity.name.tag",
        // "meta.tag.sgml",
        // "markup.deleted.git_gutter"
      ],
      settings: {
        // "foreground": "#f8f"
        foreground: {
          "theme:light": "#60c",
          "theme:dark": "#96f",
        },
      },
    },
    //#region -- HTML ----------------------------------------------------------
    {
      name: "HTML Attributes",
      scope: ["text.html entity.other.attribute-name"],
      settings: {
        // "foreground": "#fc6"
        // "foreground": "#39f"
        // "foreground": "#ffa"
        foreground: {
          "theme:light": "#17a",
          "theme:dark": "#6cf",
        },
      },
    },
    //#endregion
    //#region -- CSS -----------------------------------------------------------
    {
      name: "CSS Classes",
      scope: ["entity.other.attribute-name.class"],
      settings: {
        foreground: {
          "theme:light": "#088",
          "theme:dark": "#6ff",
        },
      },
    },
    {
      name: "CSS IDs",
      scope: ["entity.other.attribute-name.id"],
      settings: {
        foreground: {
          "theme:light": "#740",
          "theme:dark": "#ffa",
        },
      },
    },
    {
      name: "CSS Pseudo Element",
      scope: ["entity.other.attribute-name.pseudo-element"],
      settings: {
        foreground: {
          "theme:light": "#a80",
          "theme:dark": "#fc0",
        },
      },
    },
    //#endregion
    //#region -- Markdown ------------------------------------------------------
    {
      name: "Markdown - Punctuation",
      scope: [
        "markup punctuation.definition",
        "text.html.markdown punctuation.definition",
      ],
      settings: {
        foreground: {
          "theme:light": "#777",
          "theme:dark": "#aaa",
        },
      },
    },
    {
      name: "Markdown - List Punctuation",
      scope: ["markup punctuation.definition.list"],
      settings: {
        "theme:light": {
          foreground: "#41a",
        },
        "theme:dark": {
          // "foreground": "#5bf"
          // "foreground": "#f0f"
          foreground: "#96f",
          fontStyle: "bold", // Compensate for reduced contrast.
        },
      },
    },
    {
      name: "Markdown - Quote Punctuation",
      scope: ["markup.quote punctuation.definition.quote"],
      settings: {
        foreground: {
          "theme:light": "#04a",
          // "theme:dark": "#96f",
          "theme:dark": "#5bf",
        },
      },
    },
    {
      name: "Markdown - Raw",
      scope: [
        "text.html.markdown markup.inline.raw",
        "markup.fenced_code.block",
      ],
      settings: {
        // TODO
        foreground: {
          "theme:light": "#c30",
          "theme:dark": "#f96",
        },
      },
    },
    {
      name: "Code Block Language",
      scope: ["fenced_code.block.language"],
      settings: {
        foreground: {
          "theme:light": "#093",
          "theme:dark": "#0f9",
        },
      },
    },
    // {
    //   name: "Markdown - Heading",
    //   scope: ["markup.heading"],
    //   settings: {
    //     // foreground: "#",
    //     fontStyle: "underline",
    //   },
    // },
    {
      name: "Markup - Italic",
      scope: ["markup.italic"],
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "Markup - Bold",
      scope: ["markup.bold", "markup.bold string"],
      settings: {
        fontStyle: "bold",
      },
    },
    {
      name: "Markup - Bold-Italic",
      scope: permuteScopes("markup.bold", "markup.italic"),
      settings: {
        fontStyle: "bold italic",
      },
    },
    {
      name: "Markup - Strikethrough",
      scope: ["markup.strikethrough"],
      settings: {
        fontStyle: "strikethrough",
      },
    },
    {
      name: "Markup - Italic-Strikethrough",
      scope: permuteScopes("markup.italic", "markup.strikethrough"),
      settings: {
        fontStyle: "italic strikethrough",
      },
    },
    {
      name: "Markup - Bold-Strikethrough",
      scope: permuteScopes("markup.bold", "markup.strikethrough"),
      settings: {
        fontStyle: "bold strikethrough",
      },
    },
    {
      name: "Markup - Bold-Italic-Strikethrough",
      scope: permuteScopes(
        "markup.bold",
        "markup.italic",
        "markup.strikethrough"
      ),
      settings: {
        fontStyle: "bold italic strikethrough",
      },
    },
    // {
    //   "name": "Markup - Underline",
    //   "scope": [
    //     "markup.underline"
    //   ],
    //   "settings": {
    //     "fontStyle": "underline",
    //   }
    // },
    //#endregion
  ],
  semanticHighlighting: true,
  semanticTokenColors: {
    //#region -- Variables -----------------------------------------------------
    variable: {
      // Globals.
      italic: true,
    },
    "variable.readonly": {
      // Global constants.
      foreground: {
        "theme:light": "#a80",
        "theme:dark": "#fc0",
      },
    },
    "variable.local": {
      // Local variables.
      italic: false,
    },
    "variable.local.readonly": {
      // Local constants.
      foreground: {
        "theme:light": "#740",
        "theme:dark": "#ffa",
      },
    },
    "variable.defaultLibrary": {
      foreground: {
        "theme:light": "#a80",
        "theme:dark": "#fc0",
      },
    },
    //#endregion
  },
};
