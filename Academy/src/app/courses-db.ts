import {Course} from './models';

export const COURSES: Course[] = [
  {
    id: 1,
    name: 'Angular',
    title: 'Angular - The Complete Guide (2021 Edition)',
    cost: 12.99,
    description: 'Master Angular 10 (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js',
    category: 1,
    imagepath: 'https://img-a.udemycdn.com/course/240x135/756150_c033_2.jpg?OzTkhR_c8AsdFSorFsUObl5CQMKnhvRkRFUwxWltfl8Y35cYCDNvMRfJ8xlqy_ok7LsfjF4qINbyDoyfoCN4tyFMlcPd66iaohswrld4Ev2wMU_2pij2S39qDgJKwvU'
  },
  {
    id: 2,
    name: 'JavaScript',
    title: 'The Complete JavaScript Course 2021: From Zero to Expert!',
    cost: 12.99,
    description: 'The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!',
    category: 1,
    imagepath: 'https://img-a.udemycdn.com/course/240x135/851712_fc61_6.jpg?HUStjO0WePR54GJX9ol7hfQvZ592uP8O3hH80ex8ZvwjldFGyqT7p5FHpiqltNq_RGV8eJWcOcmhVe1D0p-RSwSr7p6EKK8mX4LfMq65PFviQOaWTdX566SIvilSMaw'
  },
  {
    id: 3,
    name: 'React',
    title: 'Modern React with Redux [2020 Update]',
    cost: 13.99,
    description: 'Master React v16.6.3 and Redux with React Router, Webpack, and Create-React-App. Includes Hooks!',
    category: 1,
    imagepath: 'https://img-a.udemycdn.com/course/240x135/705264_caa9_11.jpg?rXS5oymYQsre0wMbM5LQJnlrHG85_OumnswNrurblUTvk9F-qOu-1v-ftpOu_PWm7Ps0rS8nc5jfNfahgLxS1915Z2H6m47kYMMBWdAiSXKLYnk7h_SDh_D6nzas2iLo'
  },
  {
    id: 4,
    name: 'Django',
    title: 'Python and Django Full Stack Web Developer Bootcamp',
    cost: 12.99,
    description: 'Learn to build websites with HTML , CSS , Bootstrap , Javascript , jQuery , Python 3 , and Django!',
    category: 1,
    imagepath: 'https://img-a.udemycdn.com/course/240x135/822444_a6db.jpg?lv-kYT0JrszIr6GXqt3_s0qYXv99S3AIILGgTN-PnNGXgnu4jT_56PeX3-oB0DMtYUBmimW-rDM8_-DRpJFuElc3K5dhJlwsdLLrZ890PspauuCRmn3eEgN437a9'
  },
  {
    id: 5,
    name: 'Vue JS',
    title: 'Vue - The Complete Guide (w/ Router, Vuex, Composition API)',
    cost: 12.99,
    description: 'Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!',
    category: 1,
    imagepath: 'https://img-a.udemycdn.com/course/240x135/995016_ebf4_3.jpg?5bqJGvw0_-QpQBy0LNvyWwjhynzUcPauew-nTrQswGAN6-9sIhIzrL1YJeBszdQ9u8SUinw_T0FfSab-_LOnnyuR5Zk3x5VFCS0uQCAxShTytO2KqGZgRFFqJ-BHi-Y'
  },
  {
    id: 6,
    name: 'Swift',
    title: 'iOS & Swift - The Complete iOS App Development Bootcamp',
    cost: 13.99,
    description: 'From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!',
    category: 3,
    imagepath: 'https://img-b.udemycdn.com/course/240x135/1778502_f4b9_12.jpg?secure=FcQtyreMhKndl-Cy8xSfQQ%3D%3D%2C1619258051'
  },
  {
    id: 7,
    name: 'Android Development',
    title: 'The Complete Android N Developer Course',
    cost: 12.99,
    description: 'Learn Android App Development with Android 7 Nougat by building real apps including Uber, Whatsapp and Instagram!',
    category: 3,
    imagepath: 'https://img-a.udemycdn.com/course/240x135/951618_0839_2.jpg?On5VBUwRtMS6SR5DLQ15qx33EZfpLnDhFsl7-qG9ouhaJaZhXFnZZgbSHTcNI_KmTEbEr6iMDca01B2L4SryhMDDLTkiDA_g4i-wqfBCQnYxafynxm1uGy7-88sBpn4'
  },
  {
    id: 8,
    name: 'React Native',
    title: 'React Native: Advanced Concepts',
    cost: 13.99,
    description: 'Master the advanced topics of React Native: Animations, Maps, Notifications, Navigation and More!',
    category: 1,
    imagepath: 'https://img-a.udemycdn.com/course/240x135/1172996_0241_5.jpg?OuEq7F7z_Lwghahj5GBu8HmHc3tVI7_hi3hntB9sVaBxiFtCAU-0Agz_5omFUVTdGoFSJn5jf3rlWk7zWE4Ol3Nn3sJwGvJd1iOcIzQLAU5TTTatXaw8g3rtdYnW5kbf'
  },
  {
    id: 9,
    name: 'Dart Programming Language',
    title: 'Flutter & Dart - The Complete Guide [2021 Edition]',
    cost: 12.99,
    description: 'A Complete Guide to the Flutter SDK & Flutter Framework for building native iOS and Android apps',
    category: 4,
    imagepath: 'https://img-b.udemycdn.com/course/240x135/1708340_7108_5.jpg?secure=Z-7rTgm3YyjRb8xJA07MMg%3D%3D%2C1619268037'
  },
  {
    id: 10,
    name: 'Ionic',
    title: 'Ionic - Build iOS, Android & Web Apps with Ionic & Angular',
    cost: 12.99,
    description: 'Build Native iOS & Android as well as Progressive Web Apps with Angular, Capacitor and the Ionic Framework (Ionic 4+).',
    category: 4,
    imagepath: 'https://img-b.udemycdn.com/course/240x135/1070124_3a0f_4.jpg?secure=bE8yFnM0XvKL_tsjCmf-dA%3D%3D%2C1619237780'
  },
  {
    id: 11,
    name: 'Game Development Fundamentals',
    title: 'Complete C# Unity Game Developer 2D',
    cost: 14.99,
    description: 'Learn Unity in C# & Code Your First Seven 2D Video Games for Web, Mac & PC. The Tutorials Cover Tilemap (35 hours)',
    category: 2,
    imagepath: 'https://img-a.udemycdn.com/course/240x135/2435666_0bbb_5.jpg?Tn6UT-T8fYGw0hfCzm3SFTn0RtR0nkodbkVzzIhqC4EUDfIXF8rs6lliy0yabY0sRRP_gMLdswIUF6V8V7SX6pd7OM8d-y8csA54dgJSgwrvv6R7VGUcpcMFsqNvRA'
  },
  {
    id: 12,
    name: 'Unreal Engine',
    title: 'Unreal Engine C++ Developer: Learn C++ and Make Video Games',
    cost: 12.99,
    description: 'Created in collaboration with Epic Games. Learn C++ from basics while making your first 4 video games in Unreal',
    category: 2,
    imagepath: 'https://img-a.udemycdn.com/course/240x135/657932_c7e0_4.jpg?jbv3i5sDkXmp9TWQGhQbZw8VimmfX1EiWA03W8cMsIKebA5gMfgSFz3_Io48v-MZgzeSXyOyyw5pUlvi8W1Qgt22aHoA9mgCw_JyHRtfj6co6_2iQ_AC4t-HXz-C9lI'
  },
  {
    id: 13,
    name: 'Unity',
    title: 'The Ultimate Guide to Game Development with Unity 2019',
    cost: 13.99,
    description: 'Created in partnership with Unity Technologies: learn C# by developing 2D & 3D games with this comprehensive guide',
    category: 2,
    imagepath: 'https://img-b.udemycdn.com/course/240x135/1328572_b05d_5.jpg?secure=4cqmpbcVxR5ywj-TJLO0Ug%3D%3D%2C1619254897'
  },
  {
    id: 14,
    name: '3D Animation',
    title: 'Blender Character Creator v2.0 for Video Games Design',
    cost: 13.99,
    description: 'Model Video Game Characters. Use The Sculpt Tool To Shape, Add Texture, Rig & Animate Video Game Characters',
    category: 2,
    imagepath: 'https://img-a.udemycdn.com/course/240x135/1356020_2c30_4.jpg?e4uj94gqC8qrPfXDMaE214JFW4i-tgE_9aWVhO1g4janj4r1gfsBXGFA9-MfP-FjiAIer5JrnBEW3i4kyh48PJ6Sogffo69NUbqwGqFZ28-jyTCWb742OSiDjikbDjyK'
  },
  {
    id: 15,
    name: 'Game Physics',
    title: 'Game Physics - Introducing Gravitation & Rotation in Unity',
    cost: 13.99,
    description: 'Step-by-step tutorial on how to create a basic rigid body motion physics from scratch. Taught in C# using Unity 3D free.',
    category: 2,
    imagepath: 'https://img-b.udemycdn.com/course/240x135/363854_e1bc_6.jpg?secure=MoOEqhdyL7SUfEp5JnfobQ%3D%3D%2C1619252458'
  }
];
