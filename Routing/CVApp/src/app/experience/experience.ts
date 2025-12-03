import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  workExperience = [
    {
      company: 'Danfoss Drives',
      location: 'Vaasa, Finland',
      position: 'Production',
      period: 'June 2022 – February 2024',
      description: [
        'Assembled frequency converters from frame to final product, including circuit boards, SKIIPs, and cabling',
        'Performed post-production quality checks using automated test ovens',
        'Logged all production steps in SAP, scanning barcodes to ensure traceability',
        'Rotated across stations, working both independently and as part of a team'
      ]
    },
    {
      company: 'InMedi Oy',
      location: 'Vaasa, Finland',
      position: 'Registered Nurse',
      period: 'October 2020 – June 2022',
      description: [
        'Provided overnight pediatric and hospice care for severely ill children',
        'Documented all care activities to ensure accurate and seamless handover to day teams',
        'Maintained clear communication with families and care teams'
      ]
    },
    {
      company: 'Bishop, White, Marshall & Weibel',
      location: 'Seattle, WA, USA',
      position: 'Lead Foreclosure Clerk',
      period: 'October 2012 – November 2014',
      description: [
        'Supervised the File Opening Department and served as liaison between banks and internal processing teams',
        'Designed and implemented an office-wide electronic tracking system',
        'Trained new staff and streamlined referral workflows through digital process improvements'
      ]
    },
    {
      company: 'United States Department of State',
      location: 'Seattle, WA, USA',
      position: 'Communications Specialist',
      period: 'March 2007 – July 2012',
      description: [
        'Acted as liaison between applicants, passport acceptance agents, and internal adjudication officers',
        'Managed emergency passport requests, call support, and front-desk interactions',
        'Edited the monthly newsletter for acceptance agents across the region'
      ]
    }
  ];

  projects = [
    {
      name: 'WhereIs – Personal Inventory Mobile App',
      tech: 'React Native, Expo, JavaScript, Google Maps API, Firebase',
      description: 'Created an Android app that allows users to track personal belongings by storing item names, photos, notes, GPS coordinates, and locations on an interactive map.',
      github: 'https://github.com/chelseanorrgard/WhereIs'
    },
    {
      name: 'Risk Simulation Game Enhancement',
      tech: 'JavaScript, React, XLSX, HTML/CSS',
      description: 'Led a team project to modernize and expand a basic risk simulation game by refining gameplay logic, redesigning the user interface, and enhancing overall code quality.',
      github: 'https://github.com/elifturhann/RiskSimuApp'
    },
    {
      name: 'Personal Portfolio Website',
      tech: 'React, Tailwind CSS',
      description: 'Developed a foundational personal portfolio website using React and Tailwind CSS with a modular component structure and responsive design.',
      github: 'https://github.com/chelseanorrgard/chelseaportfolio'
    }
  ];

  education = [
    {
      school: 'Vaasa University of Applied Sciences',
      degree: 'Bachelor of Engineering in Information Technology',
      period: 'Sep 2022 – Expected Dec 2025',
      gpa: 'GPA: 3.95 / 5',
      location: 'Vaasa, Finland'
    },
    {
      school: 'Novia University of Applied Sciences',
      degree: 'Bachelor of Nursing',
      period: 'Sep 2016 – Dec 2019',
      gpa: '',
      location: 'Vaasa, Finland'
    },
    {
      school: 'Washington State University',
      degree: 'Bachelor of Arts in Fine Art and Communications',
      period: 'Sep 2002 – Dec 2006',
      gpa: '',
      location: 'Pullman, WA, USA'
    }
  ];
}