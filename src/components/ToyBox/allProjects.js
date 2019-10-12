import React from 'react';
import thumbnail from '../../assets/img/onelineaday.png';

import MusicBox from './MusicBox';

const ProjectCardTemplate = () => {
  return (
    <div className="Portfolio__card">
      <header>WordUp</header>
      <div className="Portfolio__card-body">
        <img src={thumbnail} alt="thumbnail" />
      </div>
    </div>
  );
};

// const projectObject = {
//   name: 'WordUp',
//   c: ProjectCardTemplate,
//   text: 'A 3-Dimensional Word Game for 1-4 Players',
//   img: thumbnail
// };

const PROJECT_INFO = [
  {
    name: 'Music Box',
    c: MusicBox,
    text: 'Automated Drums & Guitar',
    img: thumbnail
  },
  {
    name: 'WordUp',
    c: ProjectCardTemplate,
    text: 'A 3-Dimensional Word Game for 1-4 Players',
    img: thumbnail
  }
];

const allProjects = PROJECT_INFO;
export default allProjects;
