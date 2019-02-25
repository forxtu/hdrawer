import { mixin, scope } from 'cssapi'
import { css } from 'styled-components'

const elementBorder = api => () => css`
  ${api({
    borderLeft: scope`0.2ru solid c:text`
  })};
`

export default mixin(elementBorder)
