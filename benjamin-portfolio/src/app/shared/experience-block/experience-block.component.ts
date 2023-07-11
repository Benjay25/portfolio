import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-block',
  templateUrl: './experience-block.component.html',
  styleUrls: ['./experience-block.component.scss']
})
export class ExperienceBlockComponent implements OnInit {
  jobExperienceList = [
    {
      dateTitle: '2020 October - present',
      company: 'Bitcube',
      city: 'Bloemfontein',
      title: 'Junior Software Developer',
      experienceItems: [
        'Worked as a full stack developer on 2 different teams',
        'Worked on a project based on data analytics and querying big data sets',
        'Worked on a project in the Fintech industry',
        'Experience developing complex and dynamic shared components in Angular that adhere to strict coding practices',
        'Worked extensively with the HighCharts charting library',
        'Working with and communicating directly with clients on a regular basis',
        'Experience with agile development and SCRUM style task boards',
        'Conducted many code reviews and regularly contributed to sprint planning and retrospectives',
        'Implementation of localization in a web application (Angular i18n/Ngx-Translate)',
        'Experience learning how to work within large existing code bases',
        'Worked within guidelines for good coding practices',
        'Developed a functional 30-seconds style digital board in React for company event',
        'Regularly praised for my contribution to team spirit and communication',
      ]
    },
    {
      dateTitle: '2020 July - August',
      company: 'Bitcube',
      city: 'Bloemfontein',
      title: 'Software Developer Intern',
      experienceItems: [
        `The internship program taught me the basics of Angular, C# and .NET.`,
        `I was introduced to GitHub and learning how to use Git actions.`,
        `I created a property listing portfolio project using that learnt stack.`,
        `I was offered a permanent position at Bitcube as a result of my performance`,
        `during the internship`,
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
