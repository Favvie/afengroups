import React from 'react'
import { GoChevronRight } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

export const SidebarData = [
    {
      title: 'Overview',
      path: '#overview',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,
    },
    {
      title: 'Real estate',
      path: '#real-estate',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,
    },
    {
      title: 'Arts',
      path: '#art',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,


      subNav: [
        {
          title: '3.1. Art in Africa',
          path: '#arts ',
          
        },
        
      ]
    },
    {
      title: 'Education',
      path: '#education',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,


      subNav: [
        {
          title: '4.1 Education in Africa',
          path: '#educations',
          
        },
        
      ]
    },
    
    {
      title: 'Blockchain: Revolutionizing The Market',
      path: '#blockchain',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,


      subNav: [
        {
          title: '5.1 Blockchain & Real Estate',
          path: '#blockchains',
          
        },
        {
          title: '5.2 Blockchain & Art',
          path: '#blockchainss',
          
        },
        
        {
          title: '5.3 Blockchain & Education',
          path: '#blockchainsss',
          
        },
        
      ]
    },

    {
      title: '6. AFEN: The Ultimate Combination',
      path: '#afen',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,


      subNav: [
        {
          title: '6.1 AFEN & Real Estate',
          path: '#afens',
          
        },
        {
          title: '6.2. AFEN & Arts',
          path: '#afenss',
          
        },
        
        {
          title: '6.3. AFEN & Education',
          path: '#afensss',
          
        },
        
      ]
    },
    {
      title: 'AFEN Token Utilities',
      path: '#afen_token',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,
    },
    {
      title: 'AFEN Services',
      path: '#afen_services',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,
    },
    {
      title: 'AFEN Team',
      path: '#afen_team',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,
    },


    {
      title: 'Reference',
      path: '#reference',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,

    },
    
  ];
  