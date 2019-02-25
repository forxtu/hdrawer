import React, { Component, Fragment } from 'react';
import { api } from 'cssapi';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';
import styled from 'styled-components';
import { uniq } from 'ramda';

// utils
import { pushTagsToList } from 'src/store/ducks/fetch/actions';
import { fetchTags } from 'src/utils/fetchTags';

// styles
import flexJustifyCenter from 'src/styles/mixins/flexJustifyCenter';

// components
import HLayout from 'src/components/layouts/HLayout';
import TagsListItem from './TagsListItem';

const Layout = styled(HLayout)`
  ${flexJustifyCenter};
  flex-wrap: wrap;
`;

const FilterInput = styled.input`
  border: none;
  padding-bottom: 15px;
  outline: none;
  ${api({
    color: `c:text`,
    backgroundColor: `c:backgroundMain`,
    borderBottom: `1px solid c:borderColor`
  })};
`;

class TagsList extends Component {
  static propTypes = {
    allTags: array.isRequired,
    listOfTags: array.isRequired,
    pushTagsToList: func.isRequired
  };

  static defaultProps = {
    allTags: [],
    listOfTags: [],
    pushTagsToList: x => x
  };

  constructor(props) {
    super(props);

    this.filterList = this.filterList.bind(this);
  }

  state = {
    initialItemsState: uniq(fetchTags(this.props.allTags)),
    items: []
  };

  componentDidMount() {
    this.setState({ items: this.state.initialItemsState });
  }

  filterList(e) {
    let updatedList = this.state.initialItemsState;
    updatedList = updatedList.filter(
      item => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    this.setState({ items: updatedList });
  }

  render() {
    // const listOfTags = uniq(fetchTags(this.props.allTags));
    return (
      <Fragment>
        <label htmlFor="filterInput" />
        <FilterInput
          id="filterInput"
          type="text"
          placeholder="Type something..."
          onChange={this.filterList}
        />
        <Layout>
          {this.state.items.map(tag => (
            <TagsListItem key={tag} tag={tag} />
          ))}
        </Layout>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  listOfTags: state.fetch.listOfTags
});

const mapDispatchToProps = {
  pushTagsToList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsList);
