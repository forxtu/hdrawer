import { api, scope } from 'cssapi';
import PropTypes from 'prop-types';
import { both, filter, lensPath, pipe, test } from 'ramda';
import { isNotEmpty, isPlainObj, lensSatisfies } from 'ramda-adjunct';
import React from 'react';
import RehypeReact from 'rehype-react';
import styled, { withTheme } from 'styled-components';

// styles
import spaceChildrenV from 'src/styles/mixins/spaceChildrenV';

// components
import Blockquote from 'src/components/elements/BlockQuote';
import Cite from 'src/components/elements/Cite';
import FootnoteRef from './Footnotes/FootnoteRef';
import Footnotes from './Footnotes/Footnotes';
import HorizontalRule from 'src/components/elements/HorizontalRule';
import Table from 'src/components/elements/table/Table';
import ContentLink from 'src/components/elements/links/ContentLink';
import OrderedList from 'src/components/elements/lists/OrderedList';
import UnorderedList from 'src/components/elements/lists/UnorderedList';
import ContentTitlePrimary from 'src/components/elements/titles/ContentTitlePrimary';
import ContentTitleSecondary from 'src/components/elements/titles/ContentTitleSecondary';
import ContentTitleTertiary from 'src/components/elements/titles/ContentTitleTertiary';
import ContentTitleH4 from 'src/components/elements/titles/ContentTitleH4';

const hrefIsBackref = test(/^#fnref/);
const isClassedAsFootnoteRef = test(/footnote-ref/);
const isClassedAsFootnotes = test(/footnotes/);
const idIsFootnote = test(/^fn-/);
const lhasIdProp = lensSatisfies(idIsFootnote, lensPath([`props`, `id`]));
const isListOfFootnotes = pipe(
  filter(both(isPlainObj, lhasIdProp)),
  isNotEmpty
);

/* eslint-disable react/display-name, react/prop-types */
const resolveAnchor = theme => ({ className, href, ...rest }) => {
  let Component;

  if (isClassedAsFootnoteRef(className)) {
    Component = FootnoteRef;
  }

  if (hrefIsBackref(href)) {
    return null;
  }

  Component = Component || ContentLink;

  return <Component {...rest} theme={theme} href={href} />;
};

const resolveDiv = theme => ({ className, ...rest }) => {
  if (isClassedAsFootnotes(className)) {
    return <Footnotes {...rest} theme={theme} />;
  }
  return <div className={className} {...rest} />;
};

const resolveOl = theme => ({ children }) => (
  <OrderedList
    theme={theme}
    size={isListOfFootnotes(children) ? `small` : `default`}
  >
    {children}
  </OrderedList>
);
/* eslint-enable react/display-name, react/prop-types */

const renderAst = (theme, ast) =>
  new RehypeReact({
    createElement: React.createElement,
    components: {
      h1: ContentTitlePrimary,
      h2: ContentTitleSecondary,
      h3: ContentTitleTertiary,
      h4: ContentTitleH4,
      ol: resolveOl(theme),
      ul: UnorderedList,
      blockquote: Blockquote,
      cite: Cite,
      a: resolveAnchor(theme),
      hr: HorizontalRule,
      div: resolveDiv(theme),
      table: Table
    }
  }).Compiler(ast);

const PageText = styled.div`
  div {
    ${spaceChildrenV(scope`1ru`)};
  }

  div > p:first-of-type {
    ${api({
      baseline: scope`s:lede`
    })};
  }

  p {
    ${api({
      color: `c:contentText`
    })}
  }

  ${Blockquote}, ${OrderedList}, ${UnorderedList} {
    ${api({
      marginH: scope`1ru`
    })};
  }
`;
const MarkdownContent = ({ htmlAst, theme }) => (
  <PageText>{renderAst(theme, htmlAst)}</PageText>
);
MarkdownContent.propTypes = {
  htmlAst: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withTheme(MarkdownContent);
