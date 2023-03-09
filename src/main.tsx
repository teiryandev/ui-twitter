import React from 'react'
import ReactDOM from 'react-dom/client'
import {Sparkle}  from 'phosphor-react'

import '/global.css';

import twitterLogo from './assets/logo-twitter.svg'
import { Tweet } from './components/Tweet';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Separator } from './components/Separator';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const tweets = [
  'Testandooo tweets',
  'Funciona!',
  '......'
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
