'use client'
import React, { useState, useEffect } from 'react';
import {useLoadingStore} from "../store";
const LoadingScreen = () => {
  const loading = useLoadingStore((state)=>state.loading);

  return (
    <div className={`flex 
    fixed top-0 left-0 h-screen w-screen
    z-30
    items-center justify-center  ${loading ? 'bg-gray-200' : 'bg-white'}`}>
      {loading && (
        // Loading spinner
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.313 0-6-2.687-6-6h-2zm15.297-2.707l-4-4a1 1 0 00-1.414 1.414L16.586 11H10a1 1 0 100 2h6.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414z" fill="currentColor"></path>
          </svg>
          <span className="text-indigo-600">Loading...</span>
        </div>
      ) }
    </div>
  );
};

export default LoadingScreen;