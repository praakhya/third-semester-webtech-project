import homeBg from './images/homeBg.png';
import './App.css';
function Home()
{
    return (
        <div>
            <img src={homeBg} className='homePic'/>
        </div>
    )
}
export default Home;