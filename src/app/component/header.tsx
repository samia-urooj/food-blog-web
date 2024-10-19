import Link from 'next/link';


const Header=()=>{
    return(

        <header>
            
           <nav className='childCont'>
           <div className='logo'><Link href="/"> <img src="https://cdn.vectorstock.com/i/preview-1x/69/34/food-blog-template-vector-26816934.jpg"></img></Link></div>
            <ul>
            <li><Link href="/"><span className='whitecolor'><b>Home</b></span></Link></li>
            <li><Link href="/about"><span className='whitecolor'><b>About us</b></span></Link></li>
            <li><Link href="/contact"><span className='whitecolor'><b>Contact us</b></span></Link></li>
            
          </ul>
          </nav>

          </header>
    );
}

export default Header;
