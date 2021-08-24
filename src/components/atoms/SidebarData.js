import React from 'react'
import { GoChevronRight } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

export const SidebarData = [
    {
      title: 'Overview',
      path: '/overview',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,
    },
    {
      title: 'Real estate',
      path: '/real-estate',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,
    },
    {
      title: 'Arts',
      path: '/arts',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,


      subNav: [
        {
          title: '3.1. Art in Africa',
          path: '',
          
        },
        
      ]
    },
    {
      title: 'Education',
      path: '/education',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,


      subNav: [
        {
          title: '4.1 Education in Africa',
          path: '',
          
        },
        
      ]
    },
    
    {
      title: 'Blockchain: Revolutionizing The Market',
      path: '/blockchain',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,


      subNav: [
        {
          title: '5.1 Blockchain & Real Estate',
          path: '',
          
        },
        {
          title: '5.2 Blockchain & Art',
          path: '',
          
        },
        
        {
          title: '5.3 Blockchain & Education',
          path: '',
          
        },
        
      ]
    },

    {
      title: '6. AFEN: The Ultimate Combination',
      path: '/afen',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,


      subNav: [
        {
          title: '6.1 AFEN & Real Estate',
          path: '',
          
        },
        {
          title: '6.2. AFEN & Arts',
          path: '',
          
        },
        
        {
          title: '6.3. AFEN & Education',
          path: '',
          
        },
        
      ]
    },
    {
      title: 'AFEN Token Utilities',
      path: '/token',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,
    },
    {
      title: 'AFEN Services',
      path: '/token',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,
    },
    {
      title: 'AFEN Team',
      path: '/team',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,
    },


    {
      title: 'Reference',
      path: '/reference',
      iconClosed: <GoChevronRight />,
      iconOpened: <GoChevronDown />,

    },
    {
      title: 'Support',
      path: '/support',
      icon: <IoIcons.IoMdHelpCircle />
    }
  ];
  