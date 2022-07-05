const colorThemeData = {
  "$schema": "vscode://schemas/color-theme",
  "name": {
    "theme:light": "Eirys Light",
    "theme:dark": "Eirys Dark",
  },
  "colors": {
    "editor.background": {
      "theme:light": "#fff",
      "theme:dark": "#000",
    },
    "editor.foreground": {
      "theme:light": "#333",
      "theme:dark": "#ccc",
    },
    "activityBarBadge.background": "#007acc",
    "sideBarTitle.foreground": "#bbbbbb"
  },
  "tokenColors": [
    {
      "name": "Comment",
      "scope": [
        "comment",
        "punctuation.definition.comment"
      ],
      "settings": {
        "fontStyle": "italic",
        // "foreground": "#008000"
        // "foreground": "#6A9955"
        "foreground": "#0b0"
      }
    },
    {
      "name": "Invalid",
      "scope": [
        "invalid",
        "invalid.illegal"
      ],
      "settings": {
        "foreground": "#f00"
      }
    },
    {
      "name": "Number",
      "scope": [
        "constant.numeric",
        // "keyword.other.unit",
        // "keyword.other"
      ],
      "settings": {
        "foreground": "#f96"
      }
    },
    {
      "name": "String",
      "scope": [
        "string",
        // "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
      ],
      "settings": {
        "foreground": "#f96"
      }
    },
    {
      "name": "Escape Character",
      "scope": [
        "constant.character.escape"
      ],
      "settings": {
        "foreground": "#f3f"
      }
    },
    {
      "name": "Regular Expression",
      "scope": [
        "string.regexp"
      ],
      "settings": {
        "foreground": "#f66",
        // "fontStyle": "underline"
      }
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
      "name": "Language Constant",
      "scope": [
        "constant.language",
        "support.constant",
      ],
      "settings": {
        "foreground": "#f96",
        // "foreground": "#ff3",
      }
    },
    {
      "name": "this",
      "scope": [
        "variable.language.this",
      ],
      "settings": {
        "foreground": "#ff3",
      }
    },
    {
      "name": "Control Flow Keyword",
      "scope": [
        "keyword.control",
        "keyword.operator.logical",
        "keyword.generator"
      ],
      "settings": {
        "foreground": "#f8f"
      }
    },
    {
      "name": "Assignment",
      "scope": [
        "keyword.operator.assignment",
        "punctuation.separator.key-value"
      ],
      "settings": {
        "foreground": "#f0f",
        "fontStyle": "", // Prevent spillover from declaration formatting.
      }
    },
    {
      "name": "Declaration",
      "scope": [
        "meta.definition",
        "meta.parameters variable.parameter",
        "meta.object-literal.key",
      ],
      "settings": {
        "fontStyle": "underline"
      }
    },
    {
      "name": "Operator",
      "scope": [
        "keyword.operator"
      ],
      "settings": {
        "foreground": "#0ff"
      }
    },
    {
      "name": "Function",
      "scope": [
        "entity.name.function",
        "meta.function-call",
        "variable.function",
        "support.function",
        "keyword.other.special-method"
      ],
      "settings": {
        "foreground": "#6ff"
      }
    },
    {
      "name": "Member",
      "scope": [
        "variable.other.member",
        "variable.other.property",
        "variable.other.object.member",
        "variable.other.object.property",
        "variable.object.property",
        "meta.object-literal.key",
        "support.variable.property",
        "support.type.property-name",
      ],
      "settings": {
        "foreground": "#5bf"
      }
    },
    {
      "name": "Variable",
      "scope": [
        "variable",
        "string constant.other.placeholder"
      ],
      "settings": {
        "foreground": "#fff"
      }
    },
    {
      "name": "Constant Variable (Global/Default)",
      "scope": [
        "variable.other.constant",
        "variable.other.enummember",
      ],
      "settings": {
        "foreground": "#fc0",
      }
    },
    {
      "name": "Local const Variable",
      "scope": [
        "meta.block variable.other.constant",
      ],
      "settings": {
        "foreground": "#ffa",
      }
    },
    {
      "name": "Storage",
      "scope": [
        "storage.type",
        "storage.modifier"
      ],
      "settings": {
        "foreground": "#96f"
      }
    },
    {
      "name": "Class, Support",
      "scope": [
        "entity.name",
        "support.type",
        "support.class",
        "support.type.sys-types"
      ],
      "settings": {
        "foreground": "#0f9",
      }
    },
    {
      "name": "Tag",
      "scope": [
        "entity.name.tag",
        // "meta.tag.sgml",
        // "markup.deleted.git_gutter"
      ],
      "settings": {
        // "foreground": "#f8f"
        "foreground": "#96f"
      }
    },
    {
      "name": "HTML Attributes",
      "scope": [
        "text.html entity.other.attribute-name"
      ],
      "settings": {
        // "foreground": "#fc6"
        // "foreground": "#39f"
        "foreground": "#6cf"
        // "foreground": "#ffa"
      }
    },
    {
      "name": "CSS Classes",
      "scope": [
        "entity.other.attribute-name.class"
      ],
      "settings": {
        "foreground": "#6ff"
      }
    },
    {
      "name": "CSS IDs",
      "scope": [
        "entity.other.attribute-name.id"
      ],
      "settings": {
        "foreground": "#ffa"
      }
    },
    {
      "name": "CSS Pseudo Element",
      "scope": [
        "entity.other.attribute-name.pseudo-element"
      ],
      "settings": {
        "foreground": "#fc0"
      }
    },
  ],
  "semanticTokenColors": {
    "variable": {
      // Globals.
      "italic": true,
    },
    "variable.readonly": {
      // Global constants.
      "foreground": "#fc0",
    },
    "variable.local": {
      // Local variables.
      "italic": false,
    },
    "variable.local.readonly": {
      // Local constants.
      "foreground": "#ffa",
    },
    "variable.defaultLibrary": {
      "foreground": "#fc0",
    },
  }
};

exports.themes = ['light', 'dark'];
exports.colorThemeData = colorThemeData;
