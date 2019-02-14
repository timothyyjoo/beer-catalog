import React, { Component, Fragment } from 'react';

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";


const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
}


class Pagination extends Component {
  constructor(props) {
    super(props);
    const { totalRecords = null, pageLImit = 30, pageNeighbors = 0 } = props;

    this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 30;
    this.totalRecords = typeof totalRecords === ' number' ? totalRecords : 0

    this.pageNeighbours = typeof pageNeighbours === 'number'
      ? Math.max(0, Math.min(pageNeighbours, 2))
      : 0;

    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

    this.state = { currentPage : 1 };
  };

  componentDidMount() {
    this.goToPage(1)
  };

  goToPage(page) {
    const { onPageChanged = (f) => f } = this.props;

    const currentPage = Math.max(0, Math.min(page, this.totalPages));

    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords,
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  };

  handleClick(page){
    return function(e) {
      e.preventDefault();
      this.goToPage(page);
    }
  }

  handleMoveLeft(e) {
    e.preventDefault();
    this.goToPage(this.state.currentPage = (this.pageNeighbours * 2) - 1 );
  }
  handleMoveRight(e) {
    e.preventDefault();
    this.goToPage(this.state.currentPage = (this.pageNeighbours * 2) + 1 );
  }

  fetchPageNumbers() {
    const totalPages = this.totalPages;
    const currentPage = this.state.currentPage;
    //pageneighbours indicates number of pages to show on each side of currentPage
    const pageNeighbours = this.pageNeighbours;

    const totalNumbers = (this.pageNumbers * 2) + 3;

    const hasLeftSpill = startPage > 2;
    const hasRightSpill = (totalPages - endPage) > 1;
    const spillOffset = totalNumbers - (pages.length + 1);

    switch(true) {
      case (hasLeftSpill && !hasRightSpill): {
        const extraPages = range(startPage - spillOffset, startPage - 1);
        pages = [LEFT_PAGE, ...extraPages, ...pages];
        break;
      }
      case (!hasLeftSpill && hasRightSpill): {
        const extraPages = range(endPage + 1, endPage + spillOffset);
        pages = [...pages, ...extraPages, RIGHT_PAGE];
        break;
      }
      case (hasLeftSpill && hasRightSpill):
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
    };

    return [1, ...pages, totalPages];
  };

  render() {
    if (!this.totalRecords || this.totalPages === 1) return null;
    const { currentPage } = this.state;
    const pages = this.fetchPageNumbers();
    return (
      <Fragment>
        <nav aria-label="Beer Pagination">
          <ul className="pagination">
            { pages.map((page, index) => {

              if (page === LEFT_PAGE) return (
                <li key={index} className="page-item">
                  <a className="page-link" href="#" aria-label="Previous" onClick={this.handleMoveLeft}>
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
              );

              if (page === RIGHT_PAGE) return (
                <li key={index} className="page-item">
                  <a className="page-link" href="#" aria-label="Next" onClick={this.handleMoveRight}>
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              );

              return (
                <li key={index} className={`page-item${ currentPage === page ? ' active' : ''}`}>
                  <a className="page-link" href="#" onClick={ this.handleClick(page) }>{ page }</a>
                </li>
              );

            }) }

          </ul>
        </nav>
      </Fragment>
    );

  }
}


export default Pagination;
