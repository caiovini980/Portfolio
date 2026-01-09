import React, { useEffect, useState } from 'react'

const Themes = Object.freeze({
  LIGHT: "light",
  DARK: "dark"
})

const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-7 h-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    />
  </svg>
);

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="white"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
    />
  </svg>
);

function Header() {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark').matches) {
        setTheme(Themes.DARK);
        }
        else {
        setTheme(Themes.LIGHT)
        }
    }, []);

    const handleThemeSwitch = () => {
        setTheme(theme === Themes.DARK ? Themes.LIGHT : Themes.DARK);
    }

    useEffect(() => {
      if (theme === Themes.DARK) {
        document.documentElement.classList.add(Themes.DARK);
      }
      else
      {
        document.documentElement.classList.remove(Themes.DARK);
      }
    }, [theme]);

    return(
        <>
            {/* Background */}
            <div className="sticky top-0 pb-16 pr-14 pl-[5.4rem] pt-[1.7rem] bg-transparent dark:bg-transparent">
              <div className='flex h-full'>
                {/* Left side */}
                <a href="#" className="flex flex-1 font-semibold justify-start items-center text-2xl text-dark-200 dark:text-light-100 hover:text-dark-100 hover:dark:text-stone-500">
                    <img src="./logo.png" alt="" className='h-8 pr-4'/>
                    <div className="transition-colors duration-300 ease-in-out">
                      Caio Aguiar
                    </div>
                </a>

                {/* Right side */}
                <div className='flex flex-1 pr-6 justify-end items-center'>
                    <button
                        type="button"
                        onClick={ handleThemeSwitch }
                        className="flex justify-center items-center h-14 w-14 bg-purple-400 dark:bg-amber-400 text-lg p-1 rounded-md transition-transform duration-300 ease-in-out hover:scale-110"
                    >
                        {theme === Themes.DARK ? sunIcon : moonIcon}
                    </button>
                </div>
              </div>
            </div>
        </>
        
    )
}

export default Header; 