import React from "react";
import { useState, useContext, useEffect} from 'react';
import FirebaseContext from '../context/firebase';
import { useHistory, Link } from "react-router-dom";
import * as ROUTES from '../constants/routes';
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Timeline from '../components/timeline'




export default function Dashboard() {
    useEffect(()=> {
        document.title = 'Instagram';
    }, []);

    return (
        <div className="bg-gray-background">
          <Header />
          <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
            <Timeline />
            <Sidebar />
          </div>
        </div>
        
    )

}