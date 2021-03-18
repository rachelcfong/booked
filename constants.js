export const APPOINTMENTS = [
  {
    interpreter: "Gabrielle S",
    id: 1,
    apptId: 1,
    arrivalTime: "8:45am",
    startTime: "9:00am",
    dateString: "Saturday April 24, 2021",
    date: "4/24",
    location: "Palo Alto Hospital",
    hasReview: false,
  },
  {
    interpreter: "",
    id: 0,
    apptId: 2,
    arrivalTime: "1:45pm",
    startTime: "2:00pm",
    dateString: "Tuesday May 4, 2021",
    date: "3/4",
    location: "Palo Alto Hospital",
    hasReview: false,
  },
];

export const PAST_APPOINTMENTS = [
  {
    interpreter: "Victoria F",
    id: 2,
    apptId: 3,
    arrivalTime: "8:45am",
    startTime: "9:00am",
    dateString: "Friday March 5, 2021",
    date: "3/5",
    location: "Palo Alto Hospital",
    hasReview: false,
  },
  {
    interpreter: "Lampra L",
    id: 4,
    apptId: 4,
    arrivalTime: "10:45am",
    startTime: "11:00am",
    dateString: "Tuesday Feb 9, 2021",
    date: "2/9",
    location: "Sutter Health Oakland",
    hasReview: true,
  },
  {
    interpreter: "Emma S",
    id: 3,
    apptId: 5,
    arrivalTime: "12:45pm",
    startTime: "1:00pm",
    dateString: "Thursday Dec 31, 2020",
    date: "12/31",
    location: "Kaiser Piedmont",
    hasReview: false,
  },
];

export const INTERPRETERS = [
  {
    name: "Gabrielle S",
    id: 1,
    gender: "Female",
    yearsExp: 3,
    rating: 4.5,
    numReviews: 131,
    imgSource: require("./assets/gabrielles.png"),
    videoSource: require("./assets/gabrielles.mp4"),
    numAppts: 75,
    numPatients: 23,
    workLocation: "Sutter Health in Palo Alto",
    signLanguages: ["ASL", "BSL"],
    about:
      "Hi! My name is Gabrielle and I’m a Child of Deaf Adults (CODA) who grew up learning American Sign Language (ASL). During my London study abroad program in college, I learned British Sign Language (BSL).",
    certification: "ASL certified",
    reccByFriend: false,
  },
  {
    name: "Victoria F",
    id: 2,
    gender: "Female",
    yearsExp: 1,
    rating: 3,
    numReviews: 98,
    imgSource: require("./assets/victoriaf.png"),
    videoSource: require("./assets/victoriaf.mp4"),
    numAppts: 75,
    numPatients: 23,
    workLocation: "Sutter Health in Palo Alto",
    signLanguages: ["ASL", "BSL"],
    about:
      "Hi! My name is Victoria and I’m a Child of Deaf Adults (CODA) who grew up learning American Sign Language (ASL). During my London study abroad program in college, I learned British Sign Language (BSL).",
    certification: "ASL certified",
    reccByFriend: false,
  },
  {
    name: "Danae S",
    id: 3,
    gender: "Female",
    yearsExp: 5,
    rating: 5,
    numReviews: 23,
    imgSource: require("./assets/danaes.png"),
    videoSource: require("./assets/danaes.mp4"),
    numAppts: 75,
    numPatients: 23,
    workLocation: "Sutter Health in Palo Alto",
    signLanguages: ["ASL", "BSL"],
    about:
      "Hi! My name is Danae and I’m a Child of Deaf Adults (CODA) who grew up learning American Sign Language (ASL). During my London study abroad program in college, I learned British Sign Language (BSL).",
    certification: "ASL certified",
    reccByFriend: false,
  },
  {
    name: "Lampra L",
    id: 4,
    gender: "Female",
    yearsExp: 11,
    rating: 4,
    numReviews: 15,
    imgSource: require("./assets/lampral.png"),
    videoSource: require("./assets/lampral.mp4"),
    numAppts: 75,
    numPatients: 23,
    workLocation: "Sutter Health in Palo Alto",
    signLanguages: ["ASL", "BSL"],
    about:
      "Hi! My name is Lampra and I’m a Child of Deaf Adults (CODA) who grew up learning American Sign Language (ASL). During my London study abroad program in college, I learned British Sign Language (BSL).",
    certification: "ASL certified",
    reccByFriend: false,
  },
  {
    name: "Jordan G",
    id: 5,
    gender: "Female",
    yearsExp: 4,
    rating: 4.5,
    numReviews: 78,
    imgSource: require("./assets/jordang.png"),
    videoSource: require("./assets/jordang.mp4"),
    numAppts: 75,
    numPatients: 23,
    workLocation: "Sutter Health in Palo Alto",
    signLanguages: ["ASL", "BSL"],
    about:
      "Hi! My name is Jordan and I’m a Child of Deaf Adults (CODA) who grew up learning American Sign Language (ASL). During my London study abroad program in college, I learned British Sign Language (BSL).",
    certification: "ASL certified",
    reccByFriend: false,
  },
  {
    name: "Scott M",
    id: 6,
    gender: "Male",
    yearsExp: 2,
    rating: 4.5,
    numReviews: 78,
    imgSource: require("./assets/scottm.png"),
    videoSource: require("./assets/scottm.mp4"),
    numAppts: 75,
    numPatients: 23,
    workLocation: "Sutter Health in Palo Alto",
    signLanguages: ["ASL", "BSL"],
    about:
      "Hi! My name is Scott and I’m a Child of Deaf Adults (CODA) who grew up learning American Sign Language (ASL). During my London study abroad program in college, I learned British Sign Language (BSL).",
    certification: "ASL certified",
    reccByFriend: false,
  },
  {
    name: "Kirsten F",
    id: 7,
    gender: "Female",
    yearsExp: 6,
    rating: 4,
    numReviews: 131,
    imgSource: require("./assets/kirstenf.png"),
    videoSource: require("./assets/kirstenf.mp4"),
    numAppts: 75,
    numPatients: 23,
    workLocation: "Sutter Health in Palo Alto",
    signLanguages: ["ASL"],
    about:
      "Hi! My name is Kirsten and I’m a Child of Deaf Adults (CODA) who grew up learning American Sign Language (ASL). During my London study abroad program in college, I learned British Sign Language (BSL).",
    certification: "ASL certified",
    reccByFriend: true,
  },
  {
    name: "Emma S",
    id: 8,
    gender: "Female",
    yearsExp: 7,
    rating: 4.5,
    numReviews: 98,
    imgSource: require("./assets/marianae.png"),
    videoSource: require("./assets/marianae.mp4"),
    numAppts: 40,
    numPatients: 10,
    workLocation: "Kaiser in Ridgecrest",
    signLanguages: ["BSL"],
    about:
      "Hi! My name is Emma and I’m a Child of Deaf Adults (CODA) who grew up learning American Sign Language (ASL). During my London study abroad program in college, I learned British Sign Language (BSL).",
    certification: "ASL certified",
    reccByFriend: true,
  },
  {
    name: "Penelope W",
    id: 9,
    gender: "Female",
    yearsExp: 2,
    rating: 5,
    numReviews: 23,
    imgSource: require("./assets/penelopew.png"),
    videoSource: require("./assets/penelopew.mp4"),
    numAppts: 75,
    numPatients: 23,
    workLocation: "Blue Shield in Piedmont",
    signLanguages: ["ASL", "BSL"],
    about:
      "Hi! My name is Penelope and I’m a Child of Deaf Adults (CODA) who grew up learning American Sign Language (ASL). During my London study abroad program in college, I learned British Sign Language (BSL).",
    certification: "ASL certified",
    reccByFriend: true,
  },
  {
    name: "Lisa B",
    id: 10,
    gender: "Male",
    yearsExp: 4,
    rating: 4.5,
    numReviews: 34,
    imgSource: require("./assets/lisab.png"),
    videoSource: require("./assets/lisab.mp4"),
    numAppts: 30,
    numPatients: 12,
    workLocation: "Sutter Health in Palo Alto",
    signLanguages: ["ASL", "BSL"],
    about:
      "Hi! My name is Lisa and I’m a Child of Deaf Adults (CODA) who grew up learning American Sign Language (ASL). During my London study abroad program in college, I learned British Sign Language (BSL).",
    certification: "ASL certified",
    reccByFriend: true,
  },
];

export const TAGS = [
  { id: "minThreeYears", label: "3+ years experience" },
  { id: "minThreeStars", label: "3+ stars" },
  { id: "minFourStars", label: "4+ stars" },
  { id: "sameGender", label: "same gender as me" },
];

export const REVIEWS = [
  {
    user: "Alexis L",
    interpreterId: 1,
    review:
      "I’ve been getting Gabrielle's help for the past 2 years! She’s great :)",
    time: "15 minutes ago",
  },
  {
    user: "Rachel F",
    interpreterId: 2,
    review:
      "My friend recommended Rachel and I always try to book her if she’s available!",
    time: "3 hours ago",
  },
  {
    user: "Karl C",
    interpreterId: 1,
    review:
      "I have a Deaf child and he loves having her as his interpreter for his appointments.",
    time: "6 hours ago",
  },
  {
    user: "Alexis L",
    interpreterId: 3,
    review:
      "I’ve been getting Gabrielle's help for the past 2 years! She’s great :)",
    time: "15 minutes ago",
  },
  {
    user: "Rachel F",
    interpreterId: 4,
    review:
      "My friend recommended Rachel and I always try to book her if she’s available!",
    time: "3 hours ago",
  },
  {
    user: "Karl C",
    interpreterId: 5,
    review:
      "I have a Deaf child and he loves having her as his interpreter for his appointments.",
    time: "6 hours ago",
  },
  {
    user: "Rachel F",
    interpreterId: 6,
    review:
      "My friend recommended Rachel and I always try to book her if she’s available!",
    time: "3 hours ago",
  },
  {
    user: "Karl C",
    interpreterId: 7,
    review:
      "I have a Deaf child and he loves having her as his interpreter for his appointments.",
    time: "6 hours ago",
  },
  {
    user: "Rachel F",
    interpreterId: 7,
    review:
      "My friend recommended Rachel and I always try to book her if she’s available!",
    time: "3 hours ago",
  },
  {
    user: "Karl C",
    interpreterId: 8,
    review:
      "I have a Deaf child and he loves having her as his interpreter for his appointments.",
    time: "6 hours ago",
  },
  {
    user: "Rachel F",
    interpreterId: 8,
    review:
      "My friend recommended Rachel and I always try to book her if she’s available!",
    time: "3 hours ago",
  },
  {
    user: "Karl C",
    interpreterId: 9,
    review:
      "I have a Deaf child and he loves having her as his interpreter for his appointments.",
    time: "6 hours ago",
  },
  {
    user: "Rachel F",
    interpreterId: 9,
    review:
      "My friend recommended Rachel and I always try to book her if she’s available!",
    time: "3 hours ago",
  },
  {
    user: "Karl C",
    interpreterId: 10,
    review:
      "I have a Deaf child and he loves having her as his interpreter for his appointments.",
    time: "6 hours ago",
  },
];

export const INITIAL_REVIEWS = [
  {
    user: "You",
    id: 1,
    rating: 4,
    wouldRecc: true,
    onTime: "5 min late",
    doBetter: "Politeness",
    review:
      "I have a Deaf child and he loves having her as his interpreter for his appointments.",
    report: false,
    reportText: "",
    time: "15 min ago",
  },
  {
    user: "You",
    id: 1,
    rating: 5,
    wouldRecc: true,
    onTime: "5 min late",
    doBetter: "Politeness",
    review:
      "My friend recommended Gabrielle and I always try to book her if she’s available!",
    report: false,
    reportText: "",
    time: "15 min ago",
  },
  {
    user: "Mika L",
    id: 6,
    wouldRecc: true,
    rating: 4.5,
    onTime: "5 min late",
    doBetter: "Politeness",
    review: "My friend recommended Scott! He's the best.",
    report: false,
    reportText: "",
    time: "20 min ago",
  },
  {
    user: "Bihan E",
    id: 3,
    rating: 5,
    wouldRecc: true,
    onTime: "5 min late",
    doBetter: "Politeness",
    review: "Danae is the sweetest. So patient and kind.",
    report: false,
    reportText: "",
    time: "30 min ago",
  },
  {
    user: "Sam B",
    id: 9,
    wouldRecc: true,
    rating: 3.5,
    onTime: "15 min late",
    doBetter: "Politeness",
    review: "Arrived 15 min late, but still great quality interpreteration.",
    report: false,
    reportText: "",
    time: "50 min ago",
  },
  {
    user: "Bihan E",
    id: 5,
    rating: 4,
    wouldRecc: true,
    onTime: "5 min late",
    doBetter: "Politeness",
    review: "Jordan is the best interpreter you could ask for.",
    report: false,
    reportText: "",
    time: "30 min ago",
  },
  {
    user: "Jaden C",
    id: 8,
    wouldRecc: true,
    rating: 4.5,
    onTime: "15 min late",
    doBetter: "Politeness",
    review: "Emma was so helpful. Would book her again!",
    report: false,
    reportText: "",
    time: "50 min ago",
  },
  {
    user: "Carter P",
    id: 4,
    rating: 5,
    wouldRecc: true,
    onTime: "5 min late",
    doBetter: "Politeness",
    review: "A fantastic person to work with.",
    report: false,
    reportText: "",
    time: "30 min ago",
  },
];

export const FRIENDS_REVIEWS = [
  {
    user: "Wendy D",
    id: 6,
    wouldRecc: true,
    rating: 4.5,
    onTime: "5 min late",
    doBetter: "Politeness",
    review: "Scott is the best you could ask for.",
    report: false,
    reportText: "",
    time: "20 min ago",
  },

  {
    user: "Manuel P",
    id: 1,
    rating: 5,
    wouldRecc: true,
    onTime: "5 min late",
    doBetter: "Politeness",
    review:
      "I've been working with Gabrielle for many years, always a pleasure.",
    report: false,
    reportText: "",
    time: "15 min ago",
  },
  {
    user: "Teddy V",
    id: 9,
    wouldRecc: true,
    rating: 3.5,
    onTime: "15 min late",
    doBetter: "Politeness",
    review: "Could be more prompt. Still overall a great experience.",
    report: false,
    reportText: "",
    time: "50 min ago",
  },
  {
    user: "Marissa C",
    id: 3,
    rating: 5,
    wouldRecc: true,
    onTime: "5 min late",
    doBetter: "Politeness",
    review: "Danae is so professional and kind. Please do work with her!",
    report: false,
    reportText: "",
    time: "30 min ago",
  },

  {
    user: "Ricky Y",
    id: 5,
    rating: 4,
    wouldRecc: true,
    onTime: "5 min late",
    doBetter: "Politeness",
    review: "Danae is the sweetest. So patient and kind.",
    report: false,
    reportText: "",
    time: "30 min ago",
  },
  {
    user: "Laura F",
    id: 1,
    rating: 4,
    wouldRecc: true,
    onTime: "5 min late",
    doBetter: "Politeness",
    review:
      "I have a Deaf child and he loves having her as his interpreter for his appointments.",
    report: false,
    reportText: "",
    time: "15 min ago",
  },
];
