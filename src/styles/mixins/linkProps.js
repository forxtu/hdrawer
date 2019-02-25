import { mixin } from 'cssapi'
import { css } from 'styled-components'

const linkProps = api => (defaultColor = `#333`, highlightColor = `#4fc08d`) => css`
  ${api({
    color: defaultColor
  })};
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &:link,
  &:visited,
  &:active {
    ${api({
      color: defaultColor
    })};
  }

  &:hover {
    transition: all 0.25s ease-in-out;
    ${api({
      color: highlightColor
    })};
  }

  html.feat-no-touchevents &:hover {
    transition: all 0.25s ease-in-out;
    ${api({
      color: highlightColor
    })};
  }
`

export default mixin(linkProps)
