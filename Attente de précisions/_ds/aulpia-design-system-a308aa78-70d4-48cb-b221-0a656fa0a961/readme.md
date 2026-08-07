# Aulpia — Design System

## Overview

**Aulpia** is a French DTC brand launching the first energy pouch (gourde) for active dogs — *"la première gourde énergétique pour chiens actifs."* Founder: **Aurélia Tourneur**, ASV (assistante vétérinaire) specialized in animal nutrition (hello@aulpia.fr, www.aulpia.fr).

From the brand guidelines, verbatim:

> Aulpia est née d'un manque. Celui qu'Aurélia, ASV spécialisée en nutrition animale, a ressenti un jour sur un sentier : rien n'existait pour ravitailler sa chienne pendant l'effort. Alors elle a créé ce qui manquait. Deux ans de tests terrain plus tard, Aulpia est la première recharge énergétique formulée spécifiquement pour le chien actif. Une gourde souple, format reconnu et efficace, que le chien lèche directement au bec. Derrière chaque gourde, une expertise scientifique solide et une conviction forte : chaque chien qui donne tout sur le sentier mérite autant d'attention nutritionnelle que son maître.
>
> L'identité et la communication visuelle d'Aulpia doit retranscrire cet ancrage fort dans le monde du dehors, de l'effort partagé et de la nature. Un univers à la fois fiable et chaleureux, qui inspire confiance et complicité, et dans lequel chaque propriétaire de chien actif se reconnaît immédiatement.

The product: an 85g soft pouch — compote de pomme, miel, dextrose, pointe de sel — the dog licks directly from the spout ("que le chien lèche directement au bec"), for hiking, walking, canicross. Tagline: **"L'instant d'après…"**

**PROMESSE** — Un produit formulé avec expertise, pensé pour le terrain, par quelqu'un qui y est.
**MISSION** — Donner à chaque chien qui donne tout sur le sentier, autant d'attention nutritionnelle que son maître.
**VISION** — Devenir le produit de référence en nutrition canine sportive en France.

**Mots clés :** Bienveillance · Transparence · Expertise · Authenticité · Confiance

**Personnalité** (from the brandbook's positioning sliders — leans toward the left/first term on each axis except Sérieuse): Chaleureuse ↔ Rationnelle (chaleureuse), Ludique ↔ Sérieuse (sérieuse), Généreuse ↔ Minimaliste (généreuse), Traditionnelle ↔ Moderne (moderne), Accessible ↔ Exclusive (très accessible).

> Aulpia est une marque bienveillante et accessible, qui ne juge pas le niveau et accompagne tous les binômes. Son ancrage fort dans un univers nature, généreux et authentique lui confère une personnalité sincère et incarnée. Portée par une expertise scientifique solide, elle allie sérieux et complicité pour créer un lien de confiance durable avec sa communauté, à l'image de la relation moderne qui unit aujourd'hui un chien à son propriétaire : celle de deux partenaires qui prennent soin l'un de l'autre.

## Sources

This system was assembled from the brand's official guidelines document plus supplied product/lifestyle photography and logo files (no Figma file or codebase was attached):
- Screenshots of the **Aulpia brand identity PDF** (34 pages, viewed in Acrobat) — brand story, promesse/mission/vision, mots clés, personality sliders, logo construction, color palette + exact hex/RVB/CMJN ramps, typography, monogram pattern, color-pairing rules.
- `uploads/Logo_Principal_*.png` — six logo color variants
- `uploads/Gourde.jpeg`, `Image1–4.jpeg`, `Visuel1–5.jpg` — product/lifestyle photography, website mockup, ad banner compositions

## Logo & icon

The primary logo pairs the wordmark with the tagline and should be used whenever space allows: site web, packaging, réseaux sociaux (hors photo de profil), supports imprimés, présentation professionnelle, signature d'email, goodies, habillage de stand/PLV.

> Ce logo s'appuie sur une typographie expressive aux courbes généreuses et aux hauteurs de caractères variables, évoquant à la fois les reliefs montagneux et les phases de l'effort. Du premier au dernier A, le logo raconte un chemin parcouru. Au centre, le P et sa baseline intégrée symbolisent la pause méritée, promesse d'Aulpia inscrite au cœur même de son identité. Le A d'ouverture... intègre une forme incurvée évoquant l'entrée dans un sentier de montagne et une truffe discrètement suggérée. Le dernier A se termine par une courbe ascendante qui suggère discrètement une queue de chien.

The **icon** (`assets/logos/Icon_A_Terracotta.png`) is the opening "A" extracted from the wordmark — used alone for profile pictures, favicon, stamps, and as the source shape for the monogram pattern. Six official logo color variants exist: Terracotta, Vert (olive), Noir, Miel, Beige, Blanc — see `guidelines/brand-logo-variants.html`.

## Color

Exact values from the brandbook's "nuancier de couleurs," each with a light-to-dark ramp:

| Family | 100/200 | 300 | 400 | **Principale** | 600/700 | 800 |
|---|---|---|---|---|---|---|
| Vert forêt | #D9D5C9 | #8F8664 | #6B6136 | **#473F08** | — | #201C04 |
| Miel doré | #F6CCA1 | #EDB373 | #E19B45 | **#D28300** | #7A4D11 | #513510 |
| Terracotta | #EBB799 | #DC9469 | #C9723A | **#B35000** | #8D4108 | #47240B |
| Beige clair | #FCFCFA | #F9F8F5 | — | **#EFEEE7** | — | — |

**Pairing rule (from the brandbook's "usages et bonnes pratiques"):** never combine **terracotta with olive**, and never combine **terracotta with miel** (in either direction, as a small element on a large field) — both read as low-contrast/clashing. Olive+miel and anything-on-beige are always safe. See `guidelines/colors-pairing.html`.

## Typography — three faces, three jobs

1. **TBJ Matte Nature** — the logo's typeface. *"Son usage est exclusif au logotype, afin de préserver la singularité et la reconnaissance de l'identité de marque."* Never use it for anything else. This is not a freely-licensed font — **substituted here with Google Fonts "Gluten"** (closest free bouncy/rounded match). Flagging for the user: please share the real TBJ Matte Nature files if you have them.
2. **Alan Sans** — the primary typeface, used for all titles, headlines and body copy. *"Alan Sans, typographie principale, dispose de plusieurs variantes de graisse, offrant une grande flexibilité d'utilisation."* Real brand font file, self-hosted in `assets/fonts/`.
3. **Abuget** — a handwritten accent face, used sparingly. *"Utilisée avec parcimonie, elle vient apporter une touche manuscrite et chaleureuse à certains éléments de communication, pour renforcer le côté humain et authentique de la marque."* Real brand font file, self-hosted in `assets/fonts/`.

## Iconography

No functional UI icon system exists in the brand guidelines. The brand's one graphic mark is the **"A" icon** (see above), which also generates the **monogram pattern** — a diagonal tessellation of the icon, used as background texture on packaging, the website, textiles and stand/PLV, always at reduced opacity so it never competes with the logo. No emoji, no icon font, no other iconography of any kind is specified.

## Content fundamentals

- **Language:** French.
- **Tone:** bienveillante et accessible — "qui ne juge pas le niveau et accompagne tous les binômes." Warm, expert, non-hype. "Pensé(e) pour…" recurs to signal considered, expert-led formulation.
- **Casing:** ALL CAPS for eyebrows/labels and ingredient lists; sentence case for headlines/body.
- **Recurring device:** the tagline "L'instant d'après…" and lines like "La pause méritée…" trail off with an ellipsis — the payoff arriving just after effort.
- **Vocabulary:** "binômes" (human+dog pairs, not just the dog), "sortie" (outing, not "workout"), "le bon geste, au bon moment."
- **Emoji:** none.

## Visual foundations

- **Palette:** warm, earthy, mountain-inspired — see Color above. Max 2 background colors per composition; alternate cream/olive full-bleed sections.
- **Type:** see Typography above — logo face is exclusive to the wordmark; Alan Sans carries everything else; Abuget appears sparingly for handwritten warmth (e.g. "La pause méritée…").
- **Backgrounds:** flat solid colors, no gradients. The monogram pattern is the brand's one decorative texture — low-opacity, background-only, never competing with the logo or type.
- **Corner radii:** pill-rounded buttons/badges; soft-rounded photo frames (~16–20px).
- **Buttons:** solid terracotta fill, pill-rounded, no border/gradient.
- **Animation:** none in source material — keep any added motion minimal (fades, color shifts), no bounce/spring.
- **Imagery mood:** dogs and their owners mid-hike, mid-summit, mid-swim — real trail moments, not studio pet photography. Backlit/golden-hour and overcast/blue-hour shots both recur; snow, alpine rock, forest, lake and coastline settings all belong. Wide landscape-first framings with the dog small in the frame read as "brand," tight portraits read as supporting detail. Never staged, never studio-lit, never cool sterile product-only shots.
- **Transparency/blur:** none — flat opaque fields throughout.
- **Reference photography:** `assets/photography/aurelia/` — 13 real shots of founder Aurélia and her dogs by photographer Fanny Blanc; use these first for anything founder- or brand-story-related. `assets/photography/stock/` — 42 curated stock/lifestyle images (dogs on trails, summits, lakes, snow) the founder selected as mood reference for social content and the kakémono; draw on these for supporting imagery, not the hero/founder shots.

## Index

- `styles.css` — root stylesheet, imports every token/font file below.
- `tokens/colors.css` — full brand color ramps + semantic aliases
- `tokens/typography.css` — `--font-display` (logo-only), `--font-body` (Alan Sans, primary), `--font-accent` (Abuget sub, sparing use)
- `tokens/spacing.css` — spacing/radius/shadow scale
- `tokens/fonts.css` — `@font-face` rules (self-hosted: Gluten, Alan Sans, Caveat)
- `assets/logos/` — 6 logo color variants + the standalone "A" icon mark
- `assets/photography/` — lifestyle + product photography
- `assets/patterns/` — the monogram pattern (clean brandbook crop + a real photographed variant)
- `assets/fonts/` — self-hosted webfont files
- `components/core/` — Button, Tag, Card, Input, NavBar
- `ui_kits/website/` — click-through recreation of the aulpia.fr marketing site
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `SKILL.md` — portable skill file for Claude Code

No component library, codebase, or Figma file was provided, so `components/` follows the standard-primitive path, sized to this single-product marketing brand (Button, Tag, Card, Input, NavBar) rather than a full app-style inventory.
