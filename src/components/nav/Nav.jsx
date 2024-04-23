import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import { useState } from 'react';
import { Link } from 'react-router-dom'
const navigation = [{
    name: "Home",
    path: "",
    icon: "clarity:home-solid"
},
{
    name: "About",
    path: "",
    icon: "mdi:about-circle-outline"
},
{
    name: "Contact",
    path: "",
    icon: "zondicons:envelope"
}

]

export default function Nav() {
    var [displayMenu, setDisplayMenu] = useState(true);

    //var border = "border-transparent"; 
    return (
        <div className='text-right md:h-screen'>
            <div className='text-right flex justify-between content-center'>
                <Link to=''
                    className='uppercase flex md:flex-col justify-center content-center w-full items-center title'>
                    <Icon icon="emojione:pot-of-food" className=' text-8xl mb-10' />
                    <h1 className=''>Foodies</h1>
                </Link>
                <div className='text-4xl cursor-pointer w-6 md:hidden flex justify-center items-center'
                    onClick={() => {
                        setDisplayMenu(prev => !prev)
                    }}
                >
                    <Icon icon="iconamoon:menu-burger-horizontal-bold" />
                </div>
            </div>
            <div className='border-gray-900 border-t mt-16 mb-24 hidden md:block'></div>
            <ul className={`text-right text-sm ${displayMenu && "hidden"} md:h-auto border-stone-100 md:border-0 bg-white absolute top-1 right-0 md:static
             border-2 rounded-md mt-16 md:m-2 md:block transition ease-out duration-1000 z-10`}>
                {navigation.map((item) => {
                    return (
                        <li key={item.name} className=''>
                            <Link
                                className='navLinks border-primary'
                                to={item.path}>
                                <Icon className=' inline-block' icon={item.icon} />
                                <span className=' inline-block'>{item.name}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
