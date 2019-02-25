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
      red: `#de4c4a`,
      lowRed: `#de4c4a7a`,
      green: `#4fc08d`,

      // main colors
      solar: '#FFFFF2',
      darkSolar: '#fbfbeb',
      lightGray: '#f9f9fa',
      darkerGray: '#e9e9e9',
      green: '#41D3BD',
      purple: '#791E94',
      orange: '#DE6449',
      lightOrange: '#de644980',
      fadeBlue: '#407899',
      turquise: '#42D9C8',
      rose: '#D72638',

      darkThemeBlack: `#1F1F1F`,
      darkThemeLowBlack: `#282828`,
      darkThemeLightGrey: `#E2E2E2`,
      // Aliases
      // - Default
      backgroundMain: `c:darkThemeBlack`,
      backgroundSides: `c:darkThemeLowBlack`,
      backgroundStart: `c:solar`,
      backgroundStop: `c:solar`,
      text: `c:darkThemeLightGrey`,
      contentText: `c:grey`,
      title: `c:white`,
      buttonBg: `c:darkThemeBlack`,
      buttonC: `c:white`,
      buttonShadow: `c:lowRed`,
      buttonShadowStatic: `c:red`,
      borderColor: `c:darkThemeLowBlack`,
      highlight: `c:rose`,
      greyHover: `c:offBlack`,
      active: `c:veryLightGrey`,
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
      default: `1px solid c:black`,
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

const darkApi = createApi(config);

// -----------------------------------------------------------------------------
// Export Theme
// -----------------------------------------------------------------------------

export default darkApi;
