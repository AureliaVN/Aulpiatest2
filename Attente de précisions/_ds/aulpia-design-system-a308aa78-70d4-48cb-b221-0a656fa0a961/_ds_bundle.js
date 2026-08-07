/* @ds-bundle: {"format":4,"namespace":"AulpiaDesignSystem_a308aa","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"NavBar","sourcePath":"components/core/NavBar.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Button.jsx":"61ce17b272d4","components/core/Card.jsx":"c62033e4896d","components/core/Input.jsx":"9b3cdd17c3dc","components/core/NavBar.jsx":"1f7ce720c3de","components/core/Tag.jsx":"e0645127948a","ui_kits/website/Footer.jsx":"308fa914d6d3","ui_kits/website/Hero.jsx":"d8f8108dd3cf","ui_kits/website/PauseBand.jsx":"d656aef4a8bb","ui_kits/website/ProductShowcase.jsx":"e547ba10ce84"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AulpiaDesignSystem_a308aa = window.AulpiaDesignSystem_a308aa || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  style
}) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    border: 'none',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background-color var(--duration-standard) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    whiteSpace: 'nowrap',
    flex: 'none',
    width: 'max-content'
  };
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--fs-small)'
    },
    md: {
      padding: '12px 24px',
      fontSize: 'var(--fs-body)'
    },
    lg: {
      padding: '16px 32px',
      fontSize: 'var(--fs-body-l)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--accent-primary)',
      color: 'var(--white)'
    },
    secondary: {
      background: 'var(--accent-tertiary)',
      color: 'var(--text-on-inverse)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent-primary)',
      boxShadow: 'inset 0 0 0 1.5px var(--accent-primary)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    primary: 'var(--terracotta-dark)',
    secondary: 'var(--olive-dark)',
    ghost: 'rgba(179,80,0,0.08)'
  };
  return /*#__PURE__*/React.createElement("button", {
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...(hover && !disabled ? {
        background: hoverBg[variant]
      } : {}),
      ...style
    },
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  image,
  eyebrow,
  title,
  children,
  footer
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-surface)',
      borderRadius: 'var(--radius-m)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, image ? /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--accent-primary)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-heading)',
      fontWeight: 800,
      color: 'var(--text-primary)'
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-body)'
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      padding: '12px 16px',
      borderRadius: 'var(--radius-s)',
      border: `1.5px solid ${focus ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
      outline: 'none',
      background: 'var(--bg-surface)',
      color: 'var(--text-primary)',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/NavBar.jsx
try { (() => {
function NavBar({
  links = [],
  cta
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 32px',
      background: 'var(--bg-page)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/Logo_Principal_Terracotta.png",
    alt: "Aulpia",
    style: {
      height: '28px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-primary)',
      textDecoration: 'none'
    }
  }, l.label))), cta);
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = 'terracotta',
  size = 'md'
}) {
  const tones = {
    terracotta: {
      background: 'var(--accent-primary)',
      color: 'var(--white)'
    },
    olive: {
      background: 'var(--accent-tertiary)',
      color: 'var(--text-on-inverse)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      boxShadow: 'inset 0 0 0 1px var(--border-strong)'
    }
  };
  const sizes = {
    sm: {
      padding: '3px 10px',
      fontSize: '11px'
    },
    md: {
      padding: '5px 14px',
      fontSize: 'var(--fs-eyebrow)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      flex: 'none',
      width: 'max-content',
      ...tones[tone],
      ...sizes[size]
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
window.SiteFooter = function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '48px 64px',
      background: 'var(--bg-page)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/Logo_Principal_Terracotta.png",
    alt: "Aulpia",
    style: {
      height: '24px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-small)',
      color: 'var(--text-muted)'
    }
  }, "hello@aulpia.fr \xB7 www.aulpia.fr"));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
window.Hero = function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '64px',
      alignItems: 'center',
      padding: '80px 64px',
      maxWidth: '1280px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--accent-primary)'
    }
  }, "Pour les bin\xF4mes actifs"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '44px',
      fontWeight: 800,
      lineHeight: 'var(--lh-heading)',
      color: 'var(--olive)',
      margin: '16px 0'
    }
  }, "La recharge \xE9nerg\xE9tique pens\xE9e pour chaque sortie."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-l)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-body)',
      maxWidth: '440px'
    }
  }, "Une gourde souple de 85\xA0g pens\xE9e pour soutenir les chiens actifs pendant l'effort\xA0: en balade, randonn\xE9e ou canicross."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '28px'
    }
  }, /*#__PURE__*/React.createElement(window.AulpiaDesignSystem_a308aa.Button, {
    variant: "primary",
    size: "lg"
  }, "D\xE9couvrir la gourde"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-l)',
      overflow: 'hidden',
      aspectRatio: '4/3',
      backgroundImage: 'url(../../assets/photography/Image3.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PauseBand.jsx
try { (() => {
window.PauseBand = function PauseBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--olive)',
      color: 'var(--cream-warm)',
      padding: '80px 64px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--honey)'
    }
  }, "Le bon geste, au bon moment"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontWeight: 600,
      fontSize: '64px',
      margin: '16px 0'
    }
  }, "La pause m\xE9rit\xE9e\u2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-l)',
      opacity: 0.85
    }
  }, "Une gourde pens\xE9e pour son bien-\xEAtre, \xE0 chaque sortie."));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PauseBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductShowcase.jsx
try { (() => {
window.ProductShowcase = function ProductShowcase() {
  const {
    Tag
  } = window.AulpiaDesignSystem_a308aa;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '64px',
      alignItems: 'center',
      padding: '80px 64px',
      maxWidth: '1280px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/Gourde.jpeg",
    alt: "Aulpia \u2014 recharge \xE9nerg\xE9tique",
    style: {
      height: '440px',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--accent-primary)'
    }
  }, "Recharge \xE9nerg\xE9tique"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '32px',
      fontWeight: 800,
      color: 'var(--olive)',
      margin: '16px 0'
    }
  }, "85\xA0g, \xE0 glisser dans n'importe quelle poche."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      margin: '20px 0'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Compote de pomme"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Miel"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Dextrose"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Pointe de sel")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-body)'
    }
  }, "Formul\xE9e par une assistante v\xE9t\xE9rinaire sp\xE9cialis\xE9e en nutrition canine, pour accompagner chaque sortie active.")));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductShowcase.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tag = __ds_scope.Tag;

})();
