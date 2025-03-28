'use client'
import React from 'react';
import Sidebar from '@/components/Sidebar';



const Dashboard = () => {
  
    
    if (isLoading) return (
        <div className="h-screen bg-blue-950 flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-400"></div>
            <p className="text-white ml-4 text-xl">Loading crypto data...</p>
        </div>
    );
    
    if (isError) return (
        <div className="h-screen bg-blue-950 flex flex-col items-center justify-center text-white">
            <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 max-w-md">
                <h2 className="text-xl font-bold mb-2">Error Loading Data</h2>
                <p>{error?.data?.message || error?.error || 'An unknown error occurred'}</p>
            </div>
            <button 
                onClick={() => window.location.reload()} 
                className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
                Try Again
            </button>
        </div>
    );
  
    return (
       <div>
        Home
       </div>
    );
};

export default Dashboard;