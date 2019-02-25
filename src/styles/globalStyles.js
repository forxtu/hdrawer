import { mixin, scope } from 'cssapi';
import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

// styles
import insetBorder from 'src/styles/mixins/insetBorder';
import BrandonReg from 'src/assets/fonts/brandon/Brandon_reg.otf';
import BrandonLight from 'src/assets/fonts/brandon/Brandon_light.otf';

const globalStyles = api => () =>
  /* eslint-disable no-unused-expressions */
  injectGlobal`

    /* ---------------------------------------------------------------------- */
    /* Normalize Styles
    /* ---------------------------------------------------------------------- */

    ${styledNormalize};

    /* ---------------------------------------------------------------------- */
    /* Reset Box Sizing
    /* ---------------------------------------------------------------------- */

    html {
      box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    /* ---------------------------------------------------------------------- */
    /* Page Setup
    /* ---------------------------------------------------------------------- */

    html {
      overflow-y: scroll;
      overflow-x: hidden;
      position: relative;
    }

    body {
      position:relative;
      z-index: 10;
      transition: .3s;
    }

    /* ---------------------------------------------------------------------- */
    /* Typography
    /* ---------------------------------------------------------------------- */

    @font-face {
      font-family: "Brandon-R";
      src: url(${BrandonReg});
      font-weight: 400;
    }
    @font-face {
      font-family: "Brandon-L";
      src: url(${BrandonLight});
      font-weight: 100;
    }

    body {
      word-spacing: -0.05em;
      ${api({
        fontFamily: `f:default`,
        baseline: scope`s:body`
      })}
    }

    b,
    strong {
      font-weight: bold;
    }

    i,
    em {
      font-style: italic;
    }

    cite {
      font-style: italic;
    }


    p {
      margin: 0;
      padding: 0;
      max-width: 60em;
      letter-spacing: 0.6px;
      line-height: 1.7 !important;
      font-size: 19px !important;
    }

    * + p {
      ${api({
        marginTop: scope`1ru`
      })}
    }


    /* ---------------------------------------------------------------------- */
    /* Headers
    /* ---------------------------------------------------------------------- */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      ${api({
        baseline: scope`s:body`,
        fontWeight: `400`,
        margin: 0
      })}
    }

    /* ---------------------------------------------------------------------- */
    /* List
    /* ---------------------------------------------------------------------- */

    ul,
    ol {
      padding-left: 0;
      margin: 0;
      list-style: none;
    }

    /* ---------------------------------------------------------------------- */
    /* Blockquote
    /* ---------------------------------------------------------------------- */
    
    blockquote {
      margin: 0;
    }

    /* ---------------------------------------------------------------------- */
    /* Prism Syntax Hightlightling
    /* ---------------------------------------------------------------------- */

    /**
    * Add back the container background-color, border-radius, padding, margin
    * and overflow that we removed from <pre>.
    */
    .gatsby-highlight {
      margin: 0;
      overflow: auto;

      ${api({
        borderRadius: scope`0.5ru`,
        padding: scope`1ru`,
        background: `c:black`
      })}
    }

    /**
    * Remove the default PrismJS theme background-color, border-radius, margin,
    * padding and overflow.
    * 1. Make the element just wide enough to fit its content.
    * 2. Always fill the visible space in .gatsby-highlight.
    */
    .gatsby-highlight pre[class*='language-'] {
      margin: 0;
      padding: 0;
      overflow: initial;
      float: left; /* 1 */
      min-width: 100%; /* 2 */
      background: transparent;
    }

    .gatsby-image {
      &-outer-wrapper {
        height: 100%;
      }
      &-wrapper {
        height: 100%;
      }
    }
`;

export default mixin(globalStyles);
