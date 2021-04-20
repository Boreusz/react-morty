import React from 'react';
import PageButton from './PageButton';
import '../styles/BottomNavi.scss'
const BottomNavi = ({ activePage, setActivePage, pages }) => {
  if (pages <= 7) {
    let items = [];
    for (let i = 1; i <= pages; i++) {
      if(i === activePage){
        items.push(<PageButton key={i} page={i} setActivePage={setActivePage} active={'active'}/>)
      }else{
        items.push(<PageButton key={i} page={i} setActivePage={setActivePage} />);
      }
    }
    return (
      <nav className='pages'>
        <PageButton
          page={activePage}
          setActivePage={setActivePage}
          special='previous'
        />
        {items}
        <PageButton
          page={activePage}
          setActivePage={setActivePage}
          special='next'
          lastPage={pages}
        />
      </nav>
    );
  } else if (activePage < 5) {
    let items = [];
    for (let i = 1; i <= 5; i++) {
      if(i === activePage){
        items.push(<PageButton key={i} page={i} setActivePage={setActivePage} active={'active'}/>)
      }else{
        items.push(<PageButton key={i} page={i} setActivePage={setActivePage} />);
      }
    }
    return (
      <nav className='pages'>
        <PageButton
          page={activePage}
          setActivePage={setActivePage}
          special='previous'
        />
        {items}
        <PageButton page='...' />
        <PageButton page={pages} setActivePage={setActivePage} />
        <PageButton
          page={activePage}
          setActivePage={setActivePage}
          special='next'
          lastPage={pages}
        />
      </nav>
    );
  } else if (activePage > pages - 4) {
    let items = [];
    for (let i = pages-4; i <= pages; i++) {
      if(i === activePage){
        items.push(<PageButton key={i} page={i} setActivePage={setActivePage} active={'active'}/>)
      }else{
        items.push(<PageButton key={i} page={i} setActivePage={setActivePage} />);
      }
    }
    return (
      <nav className='pages'>
        <PageButton
          page={activePage}
          setActivePage={setActivePage}
          special='previous'
        />
        <PageButton page={1} setActivePage={setActivePage} />
        <PageButton page='...' />
        {items}
        <PageButton
          page={activePage}
          setActivePage={setActivePage}
          special='next'
          lastPage={pages}
        />
      </nav>
    );
  }
  return (
    <nav className='pages'>
      <PageButton
        page={activePage}
        setActivePage={setActivePage}
        special='previous'
      />
      <PageButton page={1} setActivePage={setActivePage} />
      <PageButton page='...' />
      <PageButton page={activePage - 1} setActivePage={setActivePage} />
      <PageButton page={activePage} setActivePage={setActivePage} active={'active'}/>
      <PageButton page={activePage + 1} setActivePage={setActivePage} />
      <PageButton page='...' />
      <PageButton page={pages} setActivePage={setActivePage} />
      <PageButton
        page={activePage}
        setActivePage={setActivePage}
        special='next'
        lastPage={pages}
      />
    </nav>
  );
};

export default BottomNavi;
