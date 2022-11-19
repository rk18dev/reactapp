import logo from './logo.svg';
import './App.css';
import Naviagation from './common/naviagation';
import Gallery from './Albums/Gallery';
import StateM from './Albums/StateM';
import MyErrorBoundary from './Albums/MyErrorBoundary';

const App=()=>{

  let titleList=[
      {
        Id:1,
        Name:"Home",
        Uri:"/Home"
      },
      {
        Id:1,
        Name:"About",
        Uri:"/About"
      },
      {
        Id:1,
        Name:"Contact",
        Uri:"/Contact"
      }
    ];
return <>
  <div className=''>
    <Naviagation titleList={titleList}/>
    <MyErrorBoundary>
    {/* <StateM/> */}
    <Gallery/>
    </MyErrorBoundary>
    
  </div>
  </>
}
export default App;