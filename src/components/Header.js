import React, { useState, useEffect } from 'react'
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import logo from './Shop/P_basket.svg'
import SearchIcon from '@material-ui/icons/Search';
import * as StateProvider from './StateProvider';
import MenuListComposition from './Cart';
import axios from '../axios';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cookies from 'universal-cookie';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();
    const [info, setinfo] = useState([]);
    const [search, setsearch] = useState('')
    const history = useHistory();
    var link = '/search?search='
    const [{ user }] = StateProvider.useStateValue();
    const [nav,setnav]=useState(false);

    const StyledBadge = withStyles((theme) => ({
        badge: {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }))(Badge);
    async function setter(e) {
        setsearch(e.target.value)
        var z = "/plants/suggest/" + e.target.value;
        const { data } = await axios.get(z);
        console.log(data)
        setinfo(data)


    }
    function handler(e) {
        console.log(e.target.id)
        history.push('/product/' + e.target.id)
    }
    function change() {
        if(window.scrollY>=100){
            setnav(true)
        }
        else{
            setnav(false)
        }
        
        
    }
    window.addEventListener('scroll',change)
    const API_URL = 'https://backend-plant.herokuapp.com/';
    //const API_URL = "http://localhost:5000/";
    return (

        <nav className={nav?"header active":"header"}>
            <div className="in">

           

            <Link to="/">
                <img className="header__logo" alt="" src={logo}></img>
            </Link>
            {user != null ? (<MenuListComposition />) : (<div className="auth">
                <Link to="/login" className="header__link">
                    <div className="header__option"><h5>login</h5></div>
                </Link>
                <Link to="/signup" className="header__link">
                    <div className="header__option"><h5>Signup</h5></div>
                </Link>
            </div>)}
            <div className="header__searchx">
                <div className="header__search">
                    <input className="form-control mr-sm-2 " value={search} onChange={setter} placeholder="Search" />
                    <Link to={link + search}>
                        <SearchIcon className='but' style={{ fontSize: 30 }} />
                    </Link>
                </div>
                {search == "" ? <div></div> :
                    <div className="headinfo">
                        {info.slice(0, 5).map((data) => (
                            <div className="showcontent" id={data._id} onClick={handler}>
                                <img src={API_URL+data.file_path}/>
                                <span  id={data._id} onClick={handler} >{data.name}</span>
                            </div>

                        ))}
                    </div>
                }


            </div> 
            <Link to="imagesearch">
                <button className="classify">Image_Search</button>
            </Link>
            <Link to="/CheckOut" className="header__link">
                <div className="header__cartoption">
                    <IconButton aria-label="cart" fontSize="large">
                        <StyledBadge badgeContent={Object.keys(basket).length} color="secondary">
                            <ShoppingCartIcon fontSize="large" color="primary" />
                        </StyledBadge>
                    </IconButton>



                </div>
            </Link>
            </div>




        </nav>
    )
}

export default Header
