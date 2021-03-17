export const APPOINTMENTS = [
  {
    interpreter: "Gabrielle S",
    interpreterId: "1",
    arrivalTime: "8:45am",
    startTime: "9:00am",
  },
  {
    interpreter: "",
    interpreterId: "1",
    arrivalTime: "1:45pm",
    startTime: "2:00pm",
  },
];

export const PAST_APPOINTMENTS = [
  {
    interpreter: "Rachel F",
    id: 2,
    arrivalTime: "8:45am",
    startTime: "9:00am",
    dateString: "Friday March 5, 2021",
    date: "3/5",
    location: "Palo Alto Hospital",
    hasReview: false,
  },
  {
    interpreter: "Alex L",
    id: 6,
    arrivalTime: "10:45am",
    startTime: "11:00am",
    dateString: "Friday March 5, 2021",
    date: "3/5",
    location: "Sutter Health Oakland",
    hasReview: true,
  },
  {
    interpreter: "Jianna S",
    id: 3,
    arrivalTime: "12:45pm",
    startTime: "1:00pm",
    dateString: "Friday March 5, 2021",
    date: "3/5",
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
    imgSource: "interpreter1.png",
    numAppts: 75,
    numPatients: 23,
    workLocation: "Sutter Health in Palo Alto",
    signLanguages: ["ASL", "BSL"],
    about:
      "Hi! My name is Moriah and I’m a Child of Deaf Adults (CODA) who grew up learning American Sign Language (ASL). During my London study abroad program in college, I learned British Sign Language (BSL).",
    certification: "ASL certified",
  },
  {
    name: "Rachel F",
    id: 2,
    gender: "Female",
    yearsExp: 1,
    rating: 3,
    numReviews: 98,
    imgSource: require("./assets/interpreter1.png"),
    numAppts: 75,
    numPatients: 23,
    workLocation: "Sutter Health in Palo Alto",
    signLanguages: ["ASL", "BSL"],
    about:
      "Hi! My name is Moriah and I’m a Child of Deaf Adults (CODA) who grew up learning American Sign Language (ASL). During my London study abroad program in college, I learned British Sign Language (BSL).",
    certification: "ASL certified",
  },
  {
    name: "Jianna S",
    id: 3,
    gender: "Female",
    yearsExp: 5,
    rating: 5,
    numReviews: 23,
    imgSource: require("./assets/interpreter1.png"),
    numAppts: 75,
    numPatients: 23,
    workLocation: "Sutter Health in Palo Alto",
    signLanguages: ["ASL", "BSL"],
    about:
      "Hi! My name is Moriah and I’m a Child of Deaf Adults (CODA) who grew up learning American Sign Language (ASL). During my London study abroad program in college, I learned British Sign Language (BSL).",
    certification: "ASL certified",
  },
  {
    name: "Mika L",
    id: 4,
    gender: "Female",
    yearsExp: 11,
    rating: 4,
    numReviews: 15,
    imgSource: "interpreter1.png",
    numAppts: 75,
    numPatients: 23,
    workLocation: "Sutter Health in Palo Alto",
    signLanguages: ["ASL", "BSL"],
    about:
      "Hi! My name is Moriah and I’m a Child of Deaf Adults (CODA) who grew up learning American Sign Language (ASL). During my London study abroad program in college, I learned British Sign Language (BSL).",
    certification: "ASL certified",
  },
  {
    name: "Alexis L",
    id: 5,
    gender: "Female",
    yearsExp: 4,
    rating: 4.5,
    numReviews: 78,
    imgSource: "interpreter1.png",
    numAppts: 75,
    numPatients: 23,
    workLocation: "Sutter Health in Palo Alto",
    signLanguages: ["ASL", "BSL"],
    about:
      "Hi! My name is Moriah and I’m a Child of Deaf Adults (CODA) who grew up learning American Sign Language (ASL). During my London study abroad program in college, I learned British Sign Language (BSL).",
    certification: "ASL certified",
  },
  {
    name: "Alex L",
    id: 6,
    gender: "Male",
    yearsExp: 8,
    rating: 4.5,
    numReviews: 78,
    imgSource: require("./assets/interpreter1.png"),
    numAppts: 75,
    numPatients: 23,
    workLocation: "Sutter Health in Palo Alto",
    signLanguages: ["ASL", "BSL"],
    about:
      "Hi! My name is Moriah and I’m a Child of Deaf Adults (CODA) who grew up learning American Sign Language (ASL). During my London study abroad program in college, I learned British Sign Language (BSL).",
    certification: "ASL certified",
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
      "I’ve been getting Moriah’s help for the past 2 years! She’s great :)",
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
];

export const INITIAL_REVIEWS = [
  {
    user: "You",
    id: 1,
    rating: 4,
    wouldRecc: true,
    onTime: "5 min late",
    doBetter: "Politeness",
    review: "This was a great appointment, a great interpreter",
    report: false,
    reportText: "",
    time: "15 min ago",
  },
  {
    user: "You",
    id: 1,
    wouldRecc: true,
    onTime: "5 min late",
    doBetter: "Politeness",
    review: "This was a great appointment, a great interpreter",
    report: false,
    reportText: "",
    time: "15 min ago",
  },
];
