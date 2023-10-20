'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import React from "react";
import { FiCommand, FiSettings } from "react-icons/fi";
import styles from './style.module.scss';
function Navigation({ setOpenSetting }) {
 
	return (
		<>

		<nav className='bg-gray-800 text-white p-4 rounded-2xl glass_box'>
          <div className='container mx-auto flex justify-between items-center'>
            <div className='text-xl font-bold'>
              {/* codebyvedas */}
              logo
            </div>

 


            
            <ul className='flex space-x-4'>
              <li>
                <button 
                  onClick={() => setOpenSetting((value) => !value)}
                  className='flex items-center transition-transform transform hover:rotate-90'><img className='w-5' src='/1.png' />
                </button>
              </li>
            </ul>
          </div>
        </nav>
		</>
	);
}
export default React.memo(Navigation);
