import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  programmingSkills = [
    { name: 'JavaScript', level: 'Advanced', color: '#f7df1e' },
    { name: 'React & React Native', level: 'Advanced', color: '#61dafb' },
    { name: 'Node.js', level: 'Intermediate', color: '#339933' },
    { name: 'Python', level: 'Intermediate', color: '#3776ab' },
    { name: 'HTML5 & CSS3', level: 'Advanced', color: '#e34f26' },
    { name: 'MongoDB', level: 'Intermediate', color: '#47a248' },
    { name: 'Firebase', level: 'Intermediate', color: '#ffca28' }
  ];

  tools = [
    'Git & GitHub',
    'Figma',
    'Vista Create',
    'Azure',
    'Google Maps API',
    'RESTful APIs'
  ];

  languages = [
    { language: 'English', proficiency: 'Native' },
    { language: 'Swedish', proficiency: 'Good' },
    { language: 'Finnish', proficiency: 'Satisfactory' }
  ];
}