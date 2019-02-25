import createApi from 'cssapi';

// -----------------------------------------------------------------------------
// Define Breakpoints
// -----------------------------------------------------------------------------

const BREAKPOINT_NAMES = Object.freeze({
  SMALL_UP: `smallUp`,
  MEDIUM_UP: `mediumUp`,
  LARGE_UP: `largeUp`
});

const { SMALL_UP, MEDIUM_UP, LARGE_UP } = BREAKPOINT_NAMES;

const breakpoints = [
  [SMALL_UP, 600], // 900–1100
  [MEDIUM_UP, 900], // 900–1100
  [LARGE_UP, 1100] // 1100–
];

// -----------------------------------------------------------------------------
// Configure CSS API
// -----------------------------------------------------------------------------

const rhythmDefault = 21;
const rhythmSmallUp = 28;

const config = {
  breakpoints,
  data: {
    rhythm: rhythmDefault,
    baseline: {
      lineHeight: rhythmDefault // Baseline height
    },
    scale: {
      '-1': 10,
      '-0.5': 12,
      '0': 14,
      '1': 17,
      '2': 21,
      '3': 24,
      '4': 28,
      smallprint: `s:-1`,
      mediumprint: `s:-0.5`,
      body: `s:0`,
      lede: `s:1`,
      secondaryTitle: `s:1`,
      contentTertiaryTitle: `s:2`,
      contentSecondaryTitle: `s:3`,
      primaryTitle: `s:4`,
      contentPrimaryTitle: `s:4`,
      giant: 120
    },
    color: {
      // Colours
      black: `#333`,
      offBlack: `#222`,
      white: `#fff`,
      offWhite: `#EFEFEF`,
      darkGrey: `#888`,
      semiGrey: `#666`,
      grey: `#a0a0a0`,
      lightGrey: `#E4E4E4`,
      veryLightGrey: `#f6f5f3`,
      red: `#EA421B`,
      // green: `#4fc08d`,
      darkRed: `#B33951`,
      lowRed: `#DF7373`,
      lowGreen: `#2ee59d66`,
      // main colors
      solar: '#FFFFF2',
      darkSolar: '#fbfbeb',
      lightGray: '#f9f9fa',
      darkerGray: '#fdf9f3',
      green: '#41D3BD',
      purple: '#791E94',
      orange: '#DE6449',
      lightOrange: '#de644980',
      fadeBlue: '#407899',
      turquise: '#42D9C8',
      rose: '#D72638',

      lightThemeGrey: `#FAFAFA`,
      // Aliases
      // - Default
      backgroundMain: `c:lightGray`,
      backgroundSides: `c:darkerGray`,
      backgroundStart: `c:lightGray`,
      backgroundStop: `c:lightGray`,
      text: `c:black`,
      contentText: `c:semiGrey`,
      title: `c:black`,
      buttonBg: `c:white`,
      buttonC: `c:black`,
      borderColor: `c:grey`,
      buttonShadowStatic: `c:rose`,
      buttonShadow: `c:turquise`,
      highlight: `c:fadeBlue`,
      greyHover: `c:veryLightGrey`,
      active: `c:darkGrey`,
      disabled: `c:offWhite`,
      // - Inverted
      backgroundInvertedStart: `c:offBlack`,
      backgroundInvertedEnd: `c:black`,
      textInverted: `c:white`,
      activeInverted: `c:darkGrey`,
      highlightInverted: `c:highlight`
    },
    font: {
      // title: `Berkshire Swash, cursive`,
      title: `Lora`,
      default: `Fira Sans`
    },
    gradient: {
      background: `linear-gradient(to bottom, c:backgroundStart, c:backgroundStop 15ru)`,
      backgroundInverted: `linear-gradient(to bottom, c:backgroundInvertedStart, c:backgroundInvertedEnd)`,
      lightFade: `linear-gradient(to left ,transparent, c:borderColor 30%, c:borderColor 70%, transparent 100%)`
    },
    border: {
      default: `1px solid c:lightGrey`,
      black: `1px solid c:black`
    },
    // -------------------------------------------------------------------------
    // SCOPES
    // -------------------------------------------------------------------------
    scopes: [
      {
        resolve: [MEDIUM_UP, LARGE_UP],
        data: {
          rhythm: rhythmSmallUp,
          baseline: {
            lineHeight: rhythmSmallUp // Baseline height
          },
          scale: {
            '-1': 14,
            '-0.5': 16,
            '0': 18,
            '1': 22,
            '2': 28,
            '3': 33,
            '4': 38,
            smallprint: `s:-1`,
            mediumprint: `s:-0.5`,
            body: `s:0`,
            lede: `s:1`,
            secondaryTitle: `s:1`,
            contentTertiaryTitle: `s:2`,
            contentSecondaryTitle: `s:3`,
            primaryTitle: `s:4`,
            contentPrimaryTitle: `s:4`,
            giant: 180
          }
        }
      }
    ]
  }
};

const api = createApi(config);

// -----------------------------------------------------------------------------
// Export Theme
// -----------------------------------------------------------------------------

export default api;
