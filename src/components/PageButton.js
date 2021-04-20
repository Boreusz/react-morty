import React from 'react';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';
const PageButton = ({ page, setActivePage, special, lastPage, active }) => {
  if (special) {
    switch (special) {
      case 'previous':
        return (
          <button className={'button' + (page === 1 ? '' : ' special')}disabled={page === 1} onClick={() => setActivePage(page - 1)}>
            <VscTriangleLeft />
          </button>
        );
      case 'next':
        return (
          <button className={'button' + (page === lastPage ? '' : ' special')}
            disabled={page === lastPage}
            onClick={() => setActivePage(page + 1)}
          >
            <VscTriangleRight />
          </button>
        );
    }
  }
  if(page === '...'){
    return (
      <button className="button ">{page}</button>
    )
  }
  return <button className={"button " + active} onClick={() => setActivePage(page)}>{page}</button>;
};

export default PageButton;
