const config = [
  {
    name: "sfdispatch",
    thumbnail: 'portfolio/img/sfdispatch/sfdispatch_thumbnail.jpg',
    thumbnailType: 'img',
    head: 'San Francisco Dispatch',
    summary: 'dispatch & delivery management web app',
    details: [
      'Developed an web app for users to order unmanned vehicles to delivery packages in San Francisco area',
      'Developed a Node.js backend server to plan routes',
      'Built users management system backed by MongoDB',
      'Visualized routes in a map and built user interface in the frontend using React',
    ],
    headerFont: 'Redressed',
    hue: 360,
  },

  {
    name: "recommender",
    thumbnail: 'portfolio/img/recommender/recommender_thumbnail.jpg',
    thumbnailType: 'img',
    head: 'Job Recommendation',
    summary: 'job recommendation engine and web service',
    details: [
      'Developed a web page for users to search available job positions in interest',
      'Implemented RESTful APIs using Java servlets',
      'Used Monkey Learn API to extracts keywords from jobs descriptions found by Github API',
      'Implemented a matrix factorization recommendation algorithm',
      'Deployed the web service to AWS EC2',
    ],
    headerFont: 'Open Sans Condensed',
    hue: 320,
  },

  {
    name: "glider",
    thumbnail: 'portfolio/img/glider/glider_thumbnail.jpg',
    thumbnailType: 'img',
    head: 'A.I. Soaring',
    summary: 'A.I. research in aerial robotics decision-making algorithm',
    details: [
      'Developed AI algorithm for unmanned aerial vehicle to achieve powerless flight in shear wind field',
      'Built numerical simulation of flight dynamics',
      'Developed deep reinforcement learning algorithm in trajectory planning',
      'Applied non-linear Kalman Filter to estimate the wind field',
      'Published results in AIAA GNC conference as the first author.',
    ],
    headerFont: 'Hanalei Fill',
    link: 'https://doi.org/10.2514/6.2020-0856',
    hue: 200,
  },

  {
    name: "starlink",
    thumbnail: 'portfolio/img/starlink/starlink_thumbnail.jpg',
    thumbnailType: 'img',
    head: 'Star Link',
    summary: 'satellite trajectory live animation website based on React',
    details: [
      'Developed visualization dashboard using React to track satellites launched by Starlink in real time',
      'Built selector components based on the altitude, longitude, and duration to refine search',
      'Animated live trajectory of selected Satellites in a world map using D3 library',
    ],
    headerFont: 'Audiowide',
    hue: 290,
  },

  {
    name: "ganart",
    thumbnail: 'portfolio/img/ganart/ganart_thumbnail.jpg',
    thumbnailType: 'img',
    head: 'Art by GANs',
    summary: 'artificial intelligent generator of paintings and visual art',
    details: [
      'Built generator to render artwork by Generative Adversarial Networks (GANs)',
      'Developed neural style transfer algorithm that style adoptation given any images',
      'Built an auxiliary neural network that maps feature keyworks to the latent space of GANs so that GANs can render artwork with designated features',
    ],
    headerFont: 'Charmonman',
    hue: 60,
  },

  {
    name: "education",
    thumbnail: 'portfolio/img/education/education_thumbnail.jpg',
    thumbnailType: 'img',
    head: 'Education',
    summary: 'M.S. in Computer Science, Georgia Tech',
    details: [
      'Georgia Institution of Technology, M.S. in Computer Science',                                                                                          
      'Pennsylvania State University, B.S & M.S. in Aerospace Engineering',
    ],
    headerFont: 'Special Elite',
    hue: 50,
  },

  {
    name: "skills",
    // thumbnail: '/img/skills/skills_thumbnail.jpg',
    thumbnail: 'portfolio/Videos/ink_2.mp4',
    thumbanilType: 'video',
    head: 'Skills',
    summary: 'what I\'ve got',
    details: [
      'Java, Python, JavaScript, Scala, HTML, CSS, React, Node.js, Express, Spring, Django',
      'Pytorch, Tensorflow, Matlab, MySQL, MongoDB',
      'Linux, git, Hadoop with Hive, Pig, and etc., Spark',
      'AWS with Beanstalk, Codepipeline, Lambda, Sagemaker, and etc., Docker, Kubernetes',
      'algorithm, data structure, OOD, machine learning, deep reinforcement learning', 
      'big data, robotics, optimization, numerical method',
    ],
    headerFont: 'Open Sans Condensed',
    hue: 140,
  },

  {
    name: "others",
    thumbnail: 'portfolio/img/others/others_thumbnail.jpg',
    thumbnailType: 'img',
    head: 'Certification, Awards, & Others',
    summary: 'click thumbnail to find out more',
    details: [
      'AWS Certified Developer – Associate',
      '3rd place in 2018 American Helicopter Society Design Competition in the U.S. undergraduate division',
      'Schreyer Honors Scholar',
      'Teaching assistant for Advanced Programming for Engineers, Big Data for Health Informatics, and etc.',
    ],
    headerFont: 'Big Shoulders Inline Text',
    hue: 168,
  },
];


export default config;

