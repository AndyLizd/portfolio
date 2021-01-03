const config = [
  {
    name: "sfdispatch",
    thumbnail: '/img/thumbnail.png',
    head: 'San Francisco Dispatch',
    summary: 'dispatch & delivery management web app',
    details: [
      'Developed an web app for users to order unmanned vehicles to delivery packages in San Francisco area',
      'Developed a Node.js backend server to plan routes',
      'Built users management system backed by MongoDB',
      'Visualized routes in a map and built user interface in the frontend using React',
    ],
    headerFont: 'Hanalei Fill',
  },

  {
    name: "recommender",
    thumbnail: '/img/thumbnail.png',
    head: 'Job Recommendation',
    summary: 'job recommendation engine and web service',
    details: [
      'Developed a web page for users to search available job positions in interest',
      'Implemented RESTful APIs using Java servlets',
      'Used Monkey Learn API to extracts keywords from jobs descriptions found by Github API',
      'Implemented a matrix factorization recommendation algorithm',
      'Deployed the web service to AWS EC2',
    ],
    headerFont: 'Hanalei Fill',
  },

  {
    name: "glider",
    thumbnail: '/img/glider/glider_thumbnail.png',
    head: 'A.I. Soaring',
    summary: 'artificial intelligent research in aerial robotics decision-making algorithm',
    details: [
      'Developed AI algorithm for unmanned aerial vehicle to achieve powerless flight in shear wind field',
      'Built numerical simulation of flight dynamics',
      'Developed deep reinforcement learning algorithm in trajectory planning',
      'Applied non-linear Kalman Filter to estimate the wind field',
      'Published results in AIAA GNC conference as the first author.',
    ],
    headerFont: 'Hanalei Fill',
    link: 'https://doi.org/10.2514/6.2020-0856'
  },

  {
    name: "starlink",
    thumbnail: '/img/thumbnail.png',
    head: 'Star Link',
    summary: 'satellite trajectory live animation website based on React.js',
    details: [
      'Developed visualization dashboard using React to track satellites launched by Starlink in real time',
      'Built selector components based on the altitude, longitude, and duration to refine search',
      'Animated live trajectory of selected Satellites in a world map using D3 library',
    ],
    headerFont: 'Hanalei Fill',
  },

  {
    name: "ganart",
    thumbnail: '/img/thumbnail.png',
    head: 'Art by GANs',
    summary: 'classifier and artificial intelligent generator of paintings and visual art',
    details: [
      'Built generator to render artwork by Generative Adversarial Networks (GANs)',
      'Developed neural style transfer algorithm that style adoptation given any images',
      'Built an auxiliary neural network that maps feature keyworks to the latent space of GANs so that GANs can render artwork with designated features',
    ],
    headerFont: 'Hanalei Fill',
  },

  {
    name: "education",
    thumbnail: '/img/thumbnail.png',
    head: 'Education',
    summary: 'Gatech C.S. & Penn State Aero.',
    details: [
      'Georgia Institution of Technology, M.S. in Computer Science',                                                                                          
      'Pennsylvania State University, B.S & M.S. in Aerospace Engineering',
    ],
    headerFont: 'Hanalei Fill',
  },

  {
    name: "skill",
    thumbnail: '/img/thumbnail.png',
    head: 'Skills',
    summary: 'click thumbnail to find out what I\'ve got',
    details: [
      'Java, Python, JavaScript, Scala, HTML, CSS, React, Node.js, Express, Spring, Django',
      'Pytorch, Tensorflow, Matlab, MySQL, MongoDB',
      'Linux, git, Hadoop with Hive, Pig, and etc., Spark, AWS with Beanstalk, Codepipeline, Lambda, Sagemaker, and etc., Docker, Kubernetes',
      'algorithm, data structure, OOD, machine learning, deep reinforcement learning, big data, robotics, optimization, numerical method',
    ],
    headerFont: 'Hanalei Fill',
  },

  {
    name: "others",
    thumbnail: '/img/thumbnail.png',
    head: 'Certification, Reward, & More',
    summary: '',
    details: [
      'AWS Certified Developer – Associate',
      'Teaching assistant for Advanced Programming for Engineers, Big Data for Health Informatics, and etc.',
      '3rd place in 2018 American Helicopter Society Design Competition in the U.S. undergraduate division',
      'Schreyer Honors Scholar'
    ],
    headerFont: 'Hanalei Fill',
  },
];


export default config;

