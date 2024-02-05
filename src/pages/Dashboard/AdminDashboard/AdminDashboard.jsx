import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar2 from '../../../shared/Navbar2/Navbar2';

const AdminDashboard = () => {
    return (
        <div className='flex gap-2 h-screen'>
            {/* Dashboard */}
            <div className='space-y-5 bg-gray-100 primary-color py-3 w-2/12 pl-5 flex flex-col justify-between items-center h-[100vh]'>
                <div >
                    <h1 className='text-2xl font-bold'>VIP Tailors and Punjabi</h1>
                </div>
                <div>
                    <ul className='space-y-4'>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? "mr-6 text-[#3d48df] text-xl font-bold underline" : "mr-6 text-xl font-bold"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="productList"
                                className={({ isActive }) =>
                                    isActive ? "mr-6 text-[#3d48df] text-xl font-bold underline" : "mr-6 text-lg font-bold"
                                }
                            >
                                Product List
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="statement"
                                className={({ isActive }) =>
                                    isActive ? "mr-6 text-[#3d48df] text-xl font-bold underline" : "mr-6 text-xl font-bold"
                                }
                            >
                                Statement
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? "mr-6 text-[#3d48df] text-xl font-bold underline" : "mr-6 text-xl font-bold"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div >
                    <h1>icons</h1>
                </div>
            </div>
            {/* divider */}
            {/* <div className="divider pl-56 lg:divider-horizontal"></div> */}
            {/* components */}
            <div className='flex flex-col w-full '>
                <Navbar2></Navbar2>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminDashboard;