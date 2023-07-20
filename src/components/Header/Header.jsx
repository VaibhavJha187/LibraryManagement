import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";


const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
           <Navbar />
           <div className = 'header-content flex flex-c text-center text-white'>
            <h2 className='header-title text-capitalize'>Find Your Books of Choice.
            </h2><br />
            <p className='header-text fs-18 fw-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquam dignissimos ratione, illum iste dicta accusamus nam voluptates repellat ut architecto asperiores blanditiis omnis velit necessitatibus repudiandae itaque dolore delectus!
            </p>
            <SearchForm />

           </div>

        </header>

    </div>
  )
}

export default Header