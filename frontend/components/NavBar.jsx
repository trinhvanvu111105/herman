import React from 'react'

const NavBar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">BLOG</a>
                </div>

                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 mr-4">
                        <li><a href="/" className="font-medium">TRANG CHỦ</a></li>
                        <li><a href="/products" className="font-medium">TÌM KIẾM</a></li>
                        <li><a href="/about" className="font-medium">ĐĂNG NHẬP</a></li>
                    </ul>

                    <div className="dropdown dropdown-end">
                        {/*<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                         <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar