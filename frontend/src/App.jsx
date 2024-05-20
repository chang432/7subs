import { useState } from 'react'

import MenuItem from './components/MenuItem';
import menuJson from './data/menu.json';
import HomePage from './components/HomePage';
import HoursPage from './components/HoursPage';
import ContactPage from './components/ContactPage';

import Scribble from './assets/scribble.png';
import Logo from './assets/logo.png';
import Dot from './assets/dot.png';

function App() {

  const [menuContentArray, setMenuContentArray] = useState(menuJson.subs);
  const [showSubsBackground, setShowSubsBackground] = useState(true);
  const [showWrapsBackground, setShowWrapsBackground] = useState(false);
  const [showSaladsBackground, setShowSaladsBackground] = useState(false);
  const [showHotDogsBackground, setShowHotDogsBackground] = useState(false);
  const [currentTab, setCurrentTab] = useState('subs');
  const allTabsBackground = [['subs', setShowSubsBackground], ['wraps', setShowWrapsBackground], ['salads', setShowSaladsBackground], ['hotdogs', setShowHotDogsBackground]];

  const [highlightHome, setHighlightHome] = useState(true);
  const [highlightMenu, setHighlightMenu] = useState(false);
  const [highlightHours, setHighlightHours] = useState(false);
  const [highlightContact, setHighlightContact] = useState(false);
  const [currentHighlightTab, setCurrentHighlightTab] = useState('home');
  const allTabsHighlight = [['home', setHighlightHome], ['menu', setHighlightMenu], ['hours', setHighlightHours], ['contact', setHighlightContact]];
  
  const [showHome, setShowHome] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showHours, setShowHours] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const allPages = [['home', setShowHome], ['menu', setShowMenu], ['hours', setShowHours], ['contact', setShowContact]];

  const mainDivStyle = {
    backgroundColor: '#CC3233',
    'z-index': '0'
  };
  
  const tabStyle = {
    'font-family': 'Tahoma',
    // 'font-size': '1rem',
    'font-weight': '900',
    // 'border': '1px solid',
    // 'padding': '1rem 2rem',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'contain'
  };

  const headerTabStyle = {
    'font-family': 'Knewave',
    'font-size': '1.2rem',
    'font-weight': '900',
  }

  const tabSubsStyle = {
    'background-image': showSubsBackground ? `url(${Scribble})` : 'none'
  };

  const tabWrapsStyle = {
    'backgroundImage': showWrapsBackground ? `url(${Scribble})` : 'none'
  };
  
  const tabSaladsStyle = {
    'backgroundImage': showSaladsBackground ? `url(${Scribble})` : 'none'
  };
  
  const tabHotDogsStyle = {
    'backgroundImage': showHotDogsBackground ? `url(${Scribble})` : 'none'
  };

  const headerTabMenuStyle = {
    'color': highlightMenu ? '#FFCC33' : 'black'
  }

  const headerTabHomeStyle = {
    'color': highlightHome ? '#FFCC33' : 'black'
  }

  const headerTabHoursStyle = {
    'color': highlightHours ? '#FFCC33' : 'black'
  }

  const headerTabContactStyle = {
    'color': highlightContact ? '#FFCC33' : 'black'
  }

  const homePageStyle = {
    'display': showHome ? 'flex' : 'none'
  }

  const menuPageStyle = {
    'display': showMenu ? 'contents' : 'none'
  }

  const hoursPageStyle = {
    'display': showHours ? 'flex' : 'none'
  }

  const contactPageStyle = {
    'display': showContact ? 'flex' : 'none'
  }

  const tabHovered = (tabName) => {
    if (tabName != currentTab) {
      for (var tab of allTabsBackground) {
        if (tab[0] == tabName) {
          tab[1](true)
        } 
      }
    }
  }

  const tabUnhovered = (tabName) => {
    if (tabName != currentTab) {
      for (var tab of allTabsBackground) {
        if (tab[0] == tabName) {
          tab[1](false)
        } 
      }
    }
  }

  const tabClicked = (data, tabName) => {
    setCurrentTab(tabName)
    setMenuContentArray(data)
    for (var tab of allTabsBackground) {
      if (tab[0] == tabName) {
        tab[1](true)
      } else {
        tab[1](false)
      }
    }
  }

  const headerTabHovered = (tabName) => {
    if (tabName != currentHighlightTab) {
      for (var tab of allTabsHighlight) {
        if (tab[0] == tabName) {
          tab[1](true)
        } 
      }
    }
  }

  const headerTabUnhovered = (tabName) => {
    if (tabName != currentHighlightTab) {
      for (var tab of allTabsHighlight) {
        if (tab[0] == tabName) {
          tab[1](false)
        } 
      }
    }
  }

  const headerTabClicked = (tabName) => {
    setCurrentHighlightTab(tabName)
    for (var tab of allTabsHighlight) {
      if (tab[0] == tabName) {
        tab[1](true)
      } else {
        tab[1](false)
      }
    }

    setCurrentPage(tabName)
    for (var page of allPages) {
      if (page[0] == tabName) {
        page[1](true)
      } else {
        page[1](false)
      }
    }
  }

  return (
    <div className='flex flex-col flex-shrink' style={mainDivStyle}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Knewave&display=swap"></link>
      <div className='flex flex-wrap justify-center md:justify-between items-center h-20 px-10 pt-10' style={{'z-index': '1'}}>
        <img className='w-80 flex-shrink-0' src={Logo}></img>
        <div className='flex justify-between items-center space-x-8 pr-0 md:pr-8 min-w-0 flex-shrink mt-4 md:mt-0'>
            <button className='min-w-0 flex-shrink' onClick={() => headerTabClicked('home')} onMouseEnter={() => headerTabHovered('home')} onMouseLeave={() => headerTabUnhovered('home')} style={{...headerTabStyle, ...headerTabHomeStyle}}>HOME</button>
            <img src={Dot} className='w-4 h-4 flex-shrink-0 hidden md:flex'/>
            <button className='min-w-0 flex-shrink' onClick={() => headerTabClicked('menu')} onMouseEnter={() => headerTabHovered('menu')} onMouseLeave={() => headerTabUnhovered('menu')} style={{...headerTabStyle, ...headerTabMenuStyle}}>MENU</button>
            <img src={Dot} className='w-4 h-4 flex-shrink-0 hidden md:flex'/>
            <button className='min-w-0 flex-shrink' onClick={() => headerTabClicked('hours')} onMouseEnter={() => headerTabHovered('hours')} onMouseLeave={() => headerTabUnhovered('hours')} style={{...headerTabStyle, ...headerTabHoursStyle}}>HOURS</button>
            <img src={Dot} className='w-4 h-4 flex-shrink-0 hidden md:flex'/>
            <button className='min-w-0 flex-shrink' onClick={() => headerTabClicked('contact')} onMouseEnter={() => headerTabHovered('contact')} onMouseLeave={() => headerTabUnhovered('contact')} style={{...headerTabStyle, ...headerTabContactStyle}}>CONTACT</button>
        </div>
      </div>
      <div className="flex flex-col mt-24 md:mt-16 mx-6 md:mx-12 min-h-screen" style={{'z-index': '0', 'border-radius': '0 0 0 0'}}>
        <div style={{...menuPageStyle}}>
          <div className='h-24 mb-1 flex justify-center items-center space-x-2' style={{'backgroundColor': 'rgb(239 223 208)', 'border-radius': '4rem 4rem 0 0'}}>
            <button className='py-4 text-sm w-28 h-16 md:px-8 md:w-52 md:text-lg' onClick={() => tabClicked(menuJson.subs, 'subs')} onMouseEnter={() => tabHovered('subs')} onMouseLeave={() => tabUnhovered('subs')} style={{...tabStyle, ...tabSubsStyle}}>Specialty Subs</button>
            <button className='py-4 text-sm w-24 h-16 md:px-8 md:w-52 md:text-lg' onClick={() => tabClicked(menuJson.wraps, 'wraps')} onMouseEnter={() => tabHovered('wraps')} onMouseLeave={() => tabUnhovered('wraps')} style={{...tabStyle, ...tabWrapsStyle}}>Wraps</button>
            <button className='py-4 text-sm w-24 h-16 md:px-8 md:w-52 md:text-lg' onClick={() => tabClicked(menuJson.salads, 'salads')} onMouseEnter={() => tabHovered('salads')} onMouseLeave={() => tabUnhovered('salads')} style={{...tabStyle, ...tabSaladsStyle}}>Salads</button>
            <button className='py-4 text-sm w-24 h-16 md:px-8 md:w-52 md:text-lg' onClick={() => tabClicked(menuJson.hot_dogs, 'hotdogs')} onMouseEnter={() => tabHovered('hotdogs')} onMouseLeave={() => tabUnhovered('hotdogs')} style={{...tabStyle, ...tabHotDogsStyle}}>Hot Dogs</button>
          </div>
          <div style={{"backgroundColor": "rgb(239 223 208)"}}>
            <div className="grid grid-cols-1 md:grid-cols-2 py-8" style={{"backgroundColor": "rgb(239 223 208)"}}>
              {menuContentArray.items.map(entry => {
                return <MenuItem name={entry.name} description={entry.description} price={entry.price}/>;
              })}
            </div>
          </div>
        </div>
        <HomePage style={homePageStyle}/>
        <HoursPage style={hoursPageStyle}/>
        <ContactPage style={contactPageStyle}/>
      </div>
    </div>
  )
}

export default App
