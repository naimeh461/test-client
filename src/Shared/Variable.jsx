const educations = [
    { id: 1, name: 'School' },
    { id: 2, name: 'High School' },
    { id: 3, name: 'Intermediate' },
    { id: 4, name: 'College' },
    { id: 5, name: 'Undergraduate' },
    { id: 6, name: 'Graduate' },
    { id: 7, name: "Other" }
];

const working_In = [
    { id: 1, name: 'Private Company' },
    { id: 2, name: 'Government' },
    { id: 3, name: 'Defense' },
    { id: 4, name: 'Business' },
    { id: 5, name: 'Self Employed' },
    { id: 6, name: 'Freelancer' },
    { id: 7, name: "Not Working" }
];

// Add more options as needed

const highestQualification = [
    { id: 1, name: 'High School Diploma' },
    { id: 2, name: 'Associate Degree' },
    { id: 3, name: 'Bachelor\'s Degree' },
    { id: 4, name: 'Master\'s Degree' },
    { id: 5, name: 'Ph.D.' },
    { id: 6, name: 'Professional Degree (e.g., MD, JD)' },
    { id: 7, name: 'Technical/Vocational Training' },
    { id: 8, name: 'Diploma' },
    { id: 9, name: 'Certificate Program' },
    { id: 10, name: 'Trade School' },
    { id: 11, name: 'Postdoctoral Fellowship' },
    { id: 12, name: 'High School Equivalency (GED)' },
    { id: 13, name: 'Non-Degree Program' },
    { id: 14, name: 'Apprenticeship' },
    { id: 15, name: 'Online Course Certification' },
    { id: 16, name: 'B.Sc' },
    { id: 17, name: 'B.Sc (Hons)' },
    { id: 18, name: 'M.Sc' },
    { id: 19, name: 'M.Sc (Hons)' },
    { id: 20, name: 'B.E/B.Tech' },
    { id: 21, name: 'M.E/M.Tech' },
    { id: 22, name: 'B.A' },
    { id: 23, name: 'M.A' },
    { id: 24, name: 'B.Ed' },
    { id: 25, name: 'B.Arch' },
    { id: 26, name: 'B.Com' },
    { id: 27, name: 'CPA' },
    { id: 28, name: 'CFA' },
    { id: 29, name: 'CS' },
    { id: 30, name: 'BCA' },
    { id: 31, name: 'BIT' },
    { id: 32, name: 'MBBS' },
    { id: 33, name: 'BDS' },
    { id: 34, name: 'BBA' },
    { id: 35, name: 'BBM' },
    { id: 36, name: 'LLB' },
    { id: 37, name: 'LPC' },
    { id: 38, name: 'MBA' },
    { id: 39, name: 'MCA' },
    { id: 40, name: 'MPH' },
    { id: 41, name: 'PharmD' },
    { id: 42, name: 'DPT' },
    { id: 43, name: 'DDS' },
    { id: 44, name: 'MSW' },
    { id: 45, name: 'RN' },
    { id: 46, name: 'Pharmacist' },
    { id: 47, name: 'Radiologic Technologist' },
    { id: 48, name: 'Chartered Accountant (CA)' },
    { id: 49, name: 'ICWA' },
    { id: 50, name: 'ACCA' },
    { id: 51, name: 'Other' },
];

const workingAsOptions = [
    { id: 1, name: 'Banking Professional' },
    { id: 2, name: 'Chartered Accountant' },
    { id: 3, name: 'Finance Professional' },
    { id: 4, name: 'Admin Professional' },
    { id: 5, name: 'Event Manager' },
    { id: 6, name: 'Actor' },
    { id: 7, name: 'Farming' },
    { id: 8, name: 'Journalist' },
    { id: 9, name: 'Pilot' },
    { id: 10, name: 'Air Hostess' },
    { id: 11, name: 'Animator' },
    { id: 12, name: 'Web Designer' },
    { id: 13, name: 'Web Developer' },
    { id: 14, name: 'Doctor' },
    { id: 15, name: 'Nurse' },
    { id: 16, name: 'Teacher' },
    { id: 17, name: 'Engineer' },
    { id: 18, name: 'Lawyer' },
    { id: 19, name: 'Architect' },
    { id: 20, name: 'Marketing Professional' },
    { id: 21, name: 'Sales Professional' },
    { id: 22, name: 'Consultant' },
    { id: 23, name: 'Designer' },
    { id: 24, name: 'Researcher' },
    { id: 25, name: 'Writer' },
    { id: 26, name: 'Photographer' },
    { id: 27, name: 'Chef' },
    { id: 28, name: 'Fitness Instructor' },
    { id: 29, name: 'Social Worker' },
    { id: 30, name: 'Travel Agent' },
    { id: 31, name: 'Artist' },
    { id: 32, name: 'Musician' },
    { id: 33, name: 'Graphic Designer' },
    { id: 34, name: 'HR Professional' },
    { id: 35, name: 'IT Professional' },
    { id: 36, name: 'Software Engineer' },
    { id: 37, name: 'Data Scientist' },
    { id: 38, name: 'Project Manager' },
    { id: 39, name: 'Entrepreneur' },
    { id: 40, name: 'Fashion Designer' },
    { id: 41, name: 'Interior Designer' },
    { id: 42, name: 'Archaeologist' },
    { id: 43, name: 'Biologist' },
    { id: 44, name: 'Chemist' },
    { id: 45, name: 'Physicist' },
    { id: 46, name: 'Astronomer' },
    { id: 47, name: 'Geologist' },
    { id: 48, name: 'Psychologist' },
    { id: 49, name: 'Sociologist' },
    { id: 50, name: 'Economist' },
    { id: 51, name: 'Historian' },
    { id: 52, name: 'Librarian' },
    { id: 53, name: 'Translator' },
    { id: 54, name: 'Veterinarian' },
    { id: 55, name: 'Zoologist' },
    { id: 56, name: 'Mechanic' },
    { id: 57, name: 'Electrician' },
    { id: 58, name: 'Plumber' },
    { id: 59, name: 'Carpenter' },
    { id: 60, name: 'Welder' },
    { id: 61, name: 'Fashion Model' },
    { id: 62, name: 'Fitness Trainer' },
    { id: 63, name: 'Yoga Instructor' },
    { id: 64, name: 'Archivist' },
    { id: 65, name: 'Curator' },
    { id: 66, name: 'Librarian' },
    { id: 67, name: 'Mechanical Engineer' },
    { id: 68, name: 'Civil Engineer' },
    { id: 69, name: 'Chemical Engineer' },
    { id: 70, name: 'Biomedical Engineer' },
    { id: 71, name: 'Electrical Engineer' },
    { id: 72, name: 'Environmental Scientist' },
    { id: 73, name: 'Social Media Manager' },
    { id: 74, name: 'Digital Marketer' },
    { id: 75, name: 'Content Writer' },
    { id: 76, name: 'UX/UI Designer' },
    { id: 77, name: 'Animator' },
    { id: 78, name: 'Video Editor' },
    { id: 79, name: 'Dentist' },
    { id: 80, name: 'Pharmacist' },
    { id: 81, name: 'Physician Assistant' },
    { id: 82, name: 'Physical Therapist' },
    { id: 83, name: 'Speech Therapist' },
    { id: 84, name: 'Occupational Therapist' },
    { id: 85, name: 'Financial Analyst' },
    { id: 86, name: 'Market Research Analyst' },
    { id: 87, name: 'Statistician' },
    { id: 88, name: 'Real Estate Agent' },
    { id: 89, name: 'Insurance Agent' },
    { id: 90, name: 'Flight Attendant' },
    { id: 91, name: 'Police Officer' },
    { id: 92, name: 'Firefighter' },
    { id: 93, name: 'Paramedic' },
    { id: 94, name: 'EMT' },
    { id: 95, name: 'Air Traffic Controller' },
    { id: 96, name: 'Marine Biologist' },
    { id: 97, name: 'Botanist' },
    { id: 98, name: 'Meteorologist' },
    { id: 99, name: 'Geographer' },
    { id: 100, name: 'Counselor' },
    { id: 101, name: 'Other' },
];

const salaryOptions = [

    { id: 0, name: 'Below $10,000' },
    { id: 1, name: '$10,000 - $10,000' },
    { id: 2, name: '$20,000 - $30,000' },
    { id: 3, name: '$30,000 - $40,000' },
    { id: 4, name: '$40,000 - $50,000' },
    { id: 5, name: '$50,000 - $60,000' },
    { id: 6, name: '$60,000 - $70,000' },
    { id: 7, name: '$70,000 - $80,000' },
    { id: 8, name: '$80,000 - $90,000' },
    { id: 9, name: '$90,000 - $100,000' },
    { id: 10, name: '$100,000 - $150,000' },
    { id: 11, name: '$150,000 - $200,000' },
    { id: 19, name: '$200,000 - $250,000' },
    { id: 20, name: '$250,000 - $300,000' },
    { id: 21, name: '$300,000 - $400,000' },
    { id: 22, name: '$400,000 - $500,000' },
    { id: 23, name: '$500,000 - $1,000,000' },
    { id: 24, name: 'Above $1,000,000' },
];

const heightOptions = [
    { id: 1, name: '4 feet 8 inches' },
    { id: 2, name: '4 feet 9 inches' },
    { id: 3, name: '4 feet 10 inches' },
    { id: 4, name: '4 feet 11 inches' },
    { id: 5, name: '5 feet 0 inches' },
    { id: 6, name: '5 feet 1 inch' },
    { id: 7, name: '5 feet 2 inches' },
    { id: 8, name: '5 feet 3 inches' },
    { id: 9, name: '5 feet 4 inches' },
    { id: 10, name: '5 feet 5 inches' },
    { id: 11, name: '5 feet 6 inches' },
    { id: 12, name: '5 feet 7 inches' },
    { id: 13, name: '5 feet 8 inches' },
    { id: 14, name: '5 feet 9 inches' },
    { id: 15, name: '5 feet 10 inches' },
    { id: 16, name: '5 feet 11 inches' },
    { id: 17, name: '6 feet 0 inches' },
    { id: 18, name: '6 feet 1 inch' },
    { id: 19, name: '6 feet 2 inches' },
    { id: 20, name: '6 feet 3 inches' },
];

const weightOptions = [
    { id: 1, name: 'Below 40 kg' },
    { id: 2, name: '40 - 43 kg' },
    { id: 3, name: '43 - 46 kg' },
    { id: 4, name: '46 - 49 kg' },
    { id: 5, name: '49 - 52 kg' },
    { id: 6, name: '52 - 55 kg' },
    { id: 7, name: '55 - 58 kg' },
    { id: 8, name: '58 - 61 kg' },
    { id: 9, name: '61 - 64 kg' },
    { id: 10, name: '64 - 67 kg' },
    { id: 11, name: '67 - 70 kg' },
    { id: 12, name: '70 - 73 kg' },
    { id: 13, name: '73 - 76 kg' },
    { id: 14, name: '76 - 79 kg' },
    { id: 15, name: '79 - 82 kg' },
    { id: 16, name: '82 - 85 kg' },
    { id: 17, name: '85 - 88 kg' },
    { id: 18, name: '88 - 91 kg' },
    { id: 19, name: '91 - 94 kg' },
    { id: 20, name: '94 - 97 kg' },
    { id: 21, name: '97 - 100 kg' },
    { id: 22, name: '100 - 103 kg' },
    { id: 23, name: '103 - 106 kg' },
    { id: 24, name: '106 - 109 kg' },
    { id: 25, name: '109 - 112 kg' },
    { id: 26, name: '112 - 115 kg' },
    { id: 27, name: '115 - 118 kg' },
    { id: 28, name: '118 - 121 kg' },
    { id: 29, name: '121 - 124 kg' },
    { id: 30, name: '124 - 127 kg' },
    { id: 31, name: '127 - 130 kg' },
    { id: 32, name: '130 - 133 kg' },
    { id: 33, name: '133 - 136 kg' },
    { id: 34, name: '136 - 139 kg' },
    { id: 35, name: '139 - 142 kg' },
    { id: 36, name: '142 - 145 kg' },
    { id: 37, name: '145 - 148 kg' },
    { id: 38, name: '148 - 151 kg' },
    { id: 39, name: '151 - 154 kg' },
    { id: 40, name: 'Above 154 kg' },
];


const religiousValuesOptions = [
    { id: 1, name: 'Very Religious' },
    { id: 2, name: 'Average Religious' },
    { id: 3, name: 'Not Very Religious' },
    { id: 4, name: 'Atheist' },
    { id: 5, name: 'Agnostic' },
    { id: 6, name: 'Other' },
];

const smokingOptions = [
    { id: 1, name: 'Non-Smoker' },
    { id: 2, name: 'Occasional Smoker' },
    { id: 3, name: 'Regular Smoker' },
];

const drinkHabitsOptions = [
    { id: 1, name: 'Non-Drinker' },
    { id: 2, name: 'Social Drinker' },
    { id: 3, name: 'Regular Drinker' },
];

const dietOptions = [
    { id: 1, name: 'Vegetarian' },
    { id: 2, name: 'Vegan' },
    { id: 3, name: 'Non-Vegetarian' },
    { id: 4, name: 'Pescatarian' },
    { id: 5, name: 'Flexitarian' },
    { id: 6, name: 'Halal' },
    { id: 7, name: 'No Restrictions' },
];
const verifyOptions = [
    { id: 1, name: 'National Identity Card' },
    { id: 2, name: 'Voter ID' },
    { id: 3, name: 'Passport' },
    { id: 4, name: 'Driving License' },
    { id: 5, name: 'PAN' },
    { id: 6, name: 'Aadhaar Card' },
];

const marital_status = [
    { id: 1, name: 'Single' },
    { id: 2, name: 'Married' },
    { id: 3, name: 'Divorced' },
    { id: 4, name: 'Widowed' },
    { id: 5, name: 'Separated' },
    { id: 6, name: 'Other' }

];
const religions = [
    { id: 1, name: 'Muslim' },
    { id: 2, name: 'Hindu' },
    { id: 3, name: 'Christian' },
    { id: 4, name: 'Buddhist' },
    { id: 5, name: 'Jewish' },
    { id: 7, name: 'Non Religious' },
    { id: 6, name: 'Other' }

];

const muslimSectOptions = [
    { id: 1, name: 'Ahl al-Hadith' },
    { id: 2, name: 'Ahmadiyya' },
    { id: 3, name: 'Akbari' },
    { id: 4, name: 'Ansar al-Islam' },
    { id: 5, name: 'Ahl-e Tashi' },
    { id: 6, name: 'Ansar Allah' },
    { id: 7, name: 'Barelwi' },
    { id: 8, name: 'Bektashi Order' },
    { id: 9, name: 'Black Muslims' },
    { id: 10, name: 'Daroodi' },
    { id: 11, name: 'Deobandi' },
    { id: 12, name: 'Hizb ut-Tahrir' },
    { id: 13, name: 'Ibadi' },
    { id: 14, name: 'Ismaili' },
    { id: 15, name: 'Ismaili Nizaris' },
    { id: 16, name: 'Ismaili Mustaali' },
    { id: 17, name: 'Jafari' },
    { id: 18, name: 'Jahmiyya' },
    { id: 19, name: 'Kharijites' },
    { id: 20, name: 'Lahore Ahmadiyya Movement' },
    { id: 21, name: 'Morabitun' },
    { id: 22, name: 'Muʿtazila' },
    { id: 23, name: 'Nation of Islam' },
    { id: 24, name: 'Nuwaubian Nation' },
    { id: 25, name: 'Qadiriyya' },
    { id: 26, name: 'Qalandariyya' },
    { id: 27, name: 'Quranic Islam' },
    { id: 28, name: 'Quranists' },
    { id: 29, name: 'Sarwari Qadiri' },
    { id: 30, name: 'Sufi' },
    { id: 31, name: 'Sufi orders' },
    { id: 32, name: 'Tijaniyyah' },
    { id: 33, name: 'Umayyad' },
    { id: 34, name: 'Zahiri' },
    { id: 35, name: 'Zaidi' },
    { id: 36, name: 'Zikri' },
    { id: 37, name: 'Other' }
]
const hinduSectOptions = [
    { id: 1, name: 'Advaita Vedanta' },
    { id: 2, name: 'Arya Samaj' },
    { id: 3, name: 'Brahma Kumari' },
    { id: 4, name: 'Brahmoism' },
    { id: 5, name: 'Dashanami Sampradaya' },
    { id: 6, name: 'Dvaita Vedanta' },
    { id: 7, name: 'Gaudiya Vaishnavism' },
    { id: 8, name: 'Hare Krishna Movement' },
    { id: 9, name: 'ISCKON' },
    { id: 10, name: 'Hindu Reform Movements' },
    { id: 11, name: 'Smartism' },
    { id: 12, name: 'Shaktism' },
    { id: 13, name: 'Shaivism' },
    { id: 14, name: 'Vaishnavism' },
    { id: 15, name: 'Neo-Vedanta' },
    { id: 16, name: 'Pushtimarg' },
    { id: 17, name: 'Radha Soami Satsang Beas' },
    { id: 18, name: 'Ramakrishna Mission' },
    { id: 19, name: 'Ramakrishna Order' },
    { id: 20, name: 'Sahaj Marg' },
    { id: 21, name: 'Satya Dharma' },
    { id: 22, name: 'Satsangi' },
    { id: 23, name: 'Sauram' },
    { id: 24, name: 'Sri Aurobindo Ashram' },
    { id: 25, name: 'Swaminarayan Faith' },
    { id: 26, name: 'Tantrism' },
    { id: 27, name: 'Upanishads' },
    { id: 28, name: 'Vaikhanasas' },
    { id: 29, name: 'Vedanta' },
    { id: 30, name: 'Vipassana' },
    { id: 31, name: 'Yogmaya Temple' },
    { id: 32, name: 'Yoga' },
    { id: 33, name: 'Yogi' },
    { id: 34, name: 'Other' }
  
];
const christianSectOptions = [
    { id: 1, name: 'Adventism' },
    { id: 2, name: 'Anglicanism' },
    { id: 3, name: 'Anabaptism' },
    { id: 4, name: 'Baptism' },
    { id: 5, name: 'Calvinism' },
    { id: 6, name: 'Catholicism' },
    { id: 7, name: 'Christian Science' },
    { id: 8, name: 'Evangelicalism' },
    { id: 9, name: 'Hare Krishna Movement' },
    { id: 10, name: 'ISCKON' },
    { id: 11, name: 'Jehovah\'s Witnesses' },
    { id: 12, name: 'Messianic Judaism' },
    { id: 13, name: 'Methodism' },
    { id: 14, name: 'Neo-Vedanta' },
    { id: 15, name: 'Nontrinitarianism' },
    { id: 16, name: 'Oneness Pentecostalism' },
    { id: 17, name: 'Pentecostalism' },
    { id: 18, name: 'Protestantism' },
    { id: 19, name: 'Quakers' },
    { id: 20, name: 'Radha Soami Satsang Beas' },
    { id: 21, name: 'Other' }
   
];
const buddhistSectOptions = [
    { id: 1, name: 'Engaged Buddhism' },
    { id: 2, name: 'Falun Gong' },
    { id: 3, name: 'Forest Tradition' },
    { id: 4, name: 'Huayan' },
    { id: 5, name: 'Humanistic Buddhism' },
    { id: 6, name: 'Jodo Shinshu' },
    { id: 7, name: 'Maitreya Buddhist Centre' },
    { id: 8, name: 'Mahayana Buddhism' },
    { id: 9, name: 'New Kadampa Tradition' },
    { id: 10, name: 'Nichiren Buddhism' },
    { id: 11, name: 'Pure Land Buddhism' },
    { id: 12, name: 'Sahaj Marg' },
    { id: 13, name: 'Soka Gakkai' },
    { id: 14, name: 'Tendai' },
    { id: 15, name: 'Tiantai' },
    { id: 16, name: 'Tibetan Buddhism' },
    { id: 17, name: 'Theravada Buddhism' },
    { id: 18, name: 'Triratna Buddhist Community' },
    { id: 19, name: 'Vajrayana Buddhism' },
    { id: 20, name: 'Vipassana movement' },
    { id: 21, name: 'Other' }

];
const jewishSectOptions = [
    { id: 1, name: 'Ashkenazi Judaism' },
    { id: 2, name: 'Beta Israel' },
    { id: 3, name: 'Conservative Judaism' },
    { id: 4, name: 'Ethiopian Jewish community' },
    { id: 5, name: 'Hasidic Judaism' },
    { id: 6, name: 'Haredi Judaism' },
    { id: 7, name: 'Humanistic Judaism' },
    { id: 8, name: 'Karaite Judaism' },
    { id: 9, name: 'Mizrahi Judaism' },
    { id: 10, name: 'Modern Orthodox Judaism' },
    { id: 11, name: 'Orthodox Judaism' },
    { id: 12, name: 'Reform Judaism' },
    { id: 13, name: 'Reconstructionist Judaism' },
    { id: 14, name: 'Renewal Judaism' },
    { id: 15, name: 'Sephardic Judaism' },
    { id: 16, name: 'Ultra-Orthodox Judaism' },
    { id: 17, name: 'Zionist Judaism' },
    { id: 18, name: 'Other' }
   
];

const motherTongueOptions = [
    { id: 1, name: 'Afar' },
    { id: 2, name: 'Afrikaans' },
    { id: 3, name: 'Akan' },
    { id: 4, name: 'Albanian' },
    { id: 5, name: 'Amharic' },
    { id: 6, name: 'Arabic' },
    { id: 7, name: 'Armenian' },
    { id: 8, name: 'Assamese' },
    { id: 9, name: 'Azerbaijani' },
    { id: 10, name: 'Bambara' },
    { id: 11, name: 'Basque' },
    { id: 12, name: 'Belarusian' },
    { id: 13, name: 'Bangla' },
    { id: 14, name: 'Bhojpuri' },
    { id: 15, name: 'Bihari' },
    { id: 16, name: 'Bislama' },
    { id: 17, name: 'Bosnian' },
    { id: 18, name: 'Breton' },
    { id: 19, name: 'Bulgarian' },
    { id: 20, name: 'Burmese' },
    { id: 21, name: 'Cantonese' },
    { id: 22, name: 'Catalan' },
    { id: 23, name: 'Chamorro' },
    { id: 24, name: 'Chechen' },
    { id: 25, name: 'Chichewa' },
    { id: 26, name: 'Chuvash' },
    { id: 27, name: 'Cornish' },
    { id: 28, name: 'Corsican' },
    { id: 29, name: 'Cree' },
    { id: 30, name: 'Croatian' },
    { id: 31, name: 'Czech' },
    { id: 32, name: 'Danish' },
    { id: 33, name: 'Dari' },
    { id: 34, name: 'Dhivehi' },
    { id: 35, name: 'Dutch' },
    { id: 36, name: 'Dzongkha' },
    { id: 37, name: 'English' },
    { id: 38, name: 'Esperanto' },
    { id: 39, name: 'Estonian' },
    { id: 40, name: 'Ewe' },
    { id: 41, name: 'Faroese' },
    { id: 42, name: 'Fijian' },
    { id: 43, name: 'Finnish' },
    { id: 44, name: 'French' },
    { id: 45, name: 'Frisian' },
    { id: 46, name: 'Fula' },
    { id: 47, name: 'Galician' },
    { id: 48, name: 'Georgian' },
    { id: 49, name: 'German' },
    { id: 50, name: 'Greek' },
    { id: 51, name: 'Greenlandic' },
    { id: 52, name: 'Guarani' },
    { id: 53, name: 'Gujarati' },
    { id: 54, name: 'Haitian Creole' },
    { id: 55, name: 'Hausa' },
    { id: 56, name: 'Hebrew' },
    { id: 57, name: 'Herero' },
    { id: 58, name: 'Hindi' },
    { id: 59, name: 'Hiri Motu' },
    { id: 60, name: 'Hungarian' },
    { id: 61, name: 'Icelandic' },
    { id: 62, name: 'Igbo' },
    { id: 63, name: 'Indonesian' },
    { id: 64, name: 'Inuktitut' },
    { id: 65, name: 'Irish' },
    { id: 66, name: 'Italian' },
    { id: 67, name: 'Japanese' },
    { id: 68, name: 'Javanese' },
    { id: 69, name: 'Kabyle' },
    { id: 70, name: 'Kamba' },
    { id: 71, name: 'Kannada' },
    { id: 72, name: 'Kashmiri' },
    { id: 73, name: 'Kazakh' },
    { id: 74, name: 'Khmer' },
    { id: 75, name: 'Kikuyu' },
    { id: 76, name: 'Kinyarwanda' },
    { id: 77, name: 'Kirundi' },
    { id: 78, name: 'Komi' },
    { id: 79, name: 'Kongo' },
    { id: 80, name: 'Korean' },
    { id: 81, name: 'Kurdish' },
    { id: 82, name: 'Kyrgyz' },
    { id: 83, name: 'Lao' },
    { id: 84, name: 'Latin' },
    { id: 85, name: 'Latvian' },
    { id: 86, name: 'Lingala' },
    { id: 87, name: 'Lithuanian' },
    { id: 88, name: 'Luba-Katanga' },
    { id: 89, name: 'Luxembourgish' },
    { id: 90, name: 'Macedonian' },
    { id: 91, name: 'Malagasy' },
    { id: 92, name: 'Malay' },
    { id: 93, name: 'Malayalam' },
    { id: 94, name: 'Maltese' },
    { id: 95, name: 'Manx' },
    { id: 96, name: 'Maori' },
    { id: 97, name: 'Marathi' },
    { id: 98, name: 'Marshallese' },
    { id: 99, name: 'Mongolian' },
    { id: 100, name: 'Nahuatl' },
    { id: 101, name: 'Navajo' },
    { id: 102, name: 'Ndebele' },
    { id: 103, name: 'Nepali' },
    { id: 104, name: 'Nias' },
    { id: 105, name: 'Norwegian' },
    { id: 106, name: 'Occitan' },
    { id: 107, name: 'Ojibwe' },
    { id: 108, name: 'Oriya' },
    { id: 109, name: 'Oromo' },
    { id: 110, name: 'Ossetian' },
    { id: 111, name: 'Pali' },
    { id: 112, name: 'Pangasinan' },
    { id: 113, name: 'Papiamento' },
    { id: 114, name: 'Pashto' },
    { id: 115, name: 'Persian' },
    { id: 116, name: 'Polish' },
    { id: 117, name: 'Portuguese' },
    { id: 118, name: 'Punjabi' },
    { id: 119, name: 'Quechua' },
    { id: 120, name: 'Rohingya' },
    { id: 121, name: 'Romanian' },
    { id: 122, name: 'Romansh' },
    { id: 123, name: 'Rundi' },
    { id: 124, name: 'Russian' },
    { id: 125, name: 'Samoan' },
    { id: 126, name: 'Sango' },
    { id: 127, name: 'Sanskrit' },
    { id: 128, name: 'Sardinian' },
    { id: 129, name: 'Scottish Gaelic' },
    { id: 130, name: 'Serbian' },
    { id: 131, name: 'Shona' },
    { id: 132, name: 'Sichuan Yi' },
    { id: 133, name: 'Sindhi' },
    { id: 134, name: 'Sinhala' },
    { id: 135, name: 'Slovak' },
    { id: 136, name: 'Slovenian' },
    { id: 137, name: 'Somali' },
    { id: 138, name: 'Sotho' },
    { id: 139, name: 'Spanish' },
    { id: 140, name: 'Sundanese' },
    { id: 141, name: 'Swahili' },
    { id: 142, name: 'Swazi' },
    { id: 143, name: 'Swedish' },
    { id: 144, name: 'Tagalog' },
    { id: 145, name: 'Tahitian' },
    { id: 146, name: 'Tajik' },
    { id: 147, name: 'Tamil' },
    { id: 148, name: 'Tatar' },
    { id: 149, name: 'Telugu' },
    { id: 150, name: 'Thai' },
    { id: 151, name: 'Tibetan' },
    { id: 152, name: 'Tigrinya' },
    { id: 153, name: 'Tok Pisin' },
    { id: 154, name: 'Tonga' },
    { id: 155, name: 'Tsonga' },
    { id: 156, name: 'Tswana' },
    { id: 157, name: 'Tumbuka' },
    { id: 158, name: 'Turkish' },
    { id: 159, name: 'Turkmen' },
    { id: 160, name: 'Twi' },
    { id: 161, name: 'Ukrainian' },
    { id: 162, name: 'Urdu' },
    { id: 163, name: 'Uyghur' },
    { id: 164, name: 'Uzbek' },
    { id: 165, name: 'Venda' },
    { id: 166, name: 'Vietnamese' },
    { id: 167, name: 'Volapük' },
    { id: 168, name: 'Walloon' },
    { id: 169, name: 'Welsh' },
    { id: 170, name: 'Western Frisian' },
    { id: 171, name: 'Wolof' },
    { id: 172, name: 'Xhosa' },
    { id: 173, name: 'Yiddish' },
    { id: 174, name: 'Yoruba' },
    { id: 175, name: 'Zhuang' },
    { id: 176, name: 'Zulu' },
    { id: 176, name: 'Other' },
];


const creativeOptions = [
    { id: 1, name: 'Painting', selected: false },
    { id: 2, name: 'Drawing', selected: false },
    { id: 3, name: 'Photography', selected: false },
    { id: 4, name: 'Writing', selected: false },
    { id: 5, name: 'Crafting', selected: false },
    { id: 6, name: 'Sculpting', selected: false },
    { id: 7, name: 'Cooking and Baking', selected: false },
    { id: 8, name: 'Dancing', selected: false },
    { id: 9, name: 'Music Instrument', selected: false },
    { id: 10, name: 'Singing', selected: false },
    { id: 11, name: 'Acting', selected: false },
    { id: 12, name: 'Graphic Design', selected: false },
    { id: 13, name: 'Calligraphy', selected: false },
    { id: 14, name: 'Fashion Design', selected: false },
    { id: 15, name: 'Interior Decorating', selected: false },
    // ... Add more creative options
  ];
  
  const funOptions = [
    { id: 16, name: 'Gaming', selected: false },
    { id: 17, name: 'Watching Movies', selected: false },
    { id: 18, name: 'Reading', selected: false },
    { id: 19, name: 'Traveling', selected: false },
    { id: 20, name: 'Board Games', selected: false },
    { id: 21, name: 'Cooking Challenges', selected: false },
    { id: 22, name: 'Outdoor Activities', selected: false },
    { id: 23, name: 'Social Events', selected: false },
    { id: 24, name: 'Collecting', selected: false },
    { id: 25, name: 'Trivia Quizzes', selected: false },
    { id: 26, name: 'Photography Expeditions', selected: false },
    { id: 27, name: 'DIY Projects', selected: false },
    { id: 28, name: 'Escape Rooms', selected: false },
    { id: 29, name: 'Listening to Podcasts', selected: false },
    { id: 30, name: 'Playing Musical Instruments', selected: false },
  ];
  
  const fitnessOptions = [
    { id: 31, name: 'Running', selected: false },
    { id: 32, name: 'Yoga', selected: false },
    { id: 33, name: 'Weightlifting', selected: false },
    { id: 34, name: 'Swimming', selected: false },
    { id: 35, name: 'Cycling', selected: false },
    { id: 36, name: 'Martial Arts', selected: false },
    { id: 37, name: 'Dancing', selected: false },
    { id: 38, name: 'Hiking', selected: false },
    { id: 39, name: 'Pilates', selected: false },
    { id: 40, name: 'Aerobics', selected: false },
    { id: 41, name: 'Calisthenics', selected: false },
    { id: 42, name: 'Climbing', selected: false },
    { id: 43, name: 'Skiing', selected: false },
    { id: 44, name: 'Zumba', selected: false },
    { id: 45, name: 'Paddleboarding', selected: false },
  ];
  
  const otherInterestsOptions = [
    { id: 46, name: 'Volunteering', selected: false },
    { id: 47, name: 'Learning a New Language', selected: false },
    { id: 48, name: 'Gardening', selected: false },
    { id: 49, name: 'Cooking and Experimenting', selected: false },
    { id: 50, name: 'Astrology', selected: false },
    { id: 51, name: 'History', selected: false },
    { id: 52, name: 'Technology', selected: false },
    { id: 53, name: 'Fashion', selected: false },
    { id: 54, name: 'DIY Projects', selected: false },
    { id: 55, name: 'Mindfulness and Meditation', selected: false },
    { id: 56, name: 'Book Clubs', selected: false },
    { id: 57, name: 'Writing Poetry', selected: false },
    { id: 58, name: 'Philanthropy', selected: false },
    { id: 59, name: 'Chess', selected: false },
    { id: 60, name: 'Stargazing', selected: false },
  ];
  
export  { salaryOptions, workingAsOptions, highestQualification, working_In, educations, heightOptions, weightOptions, dietOptions, drinkHabitsOptions, smokingOptions, religiousValuesOptions, verifyOptions, marital_status, religions ,  motherTongueOptions ,  muslimSectOptions ,hinduSectOptions, christianSectOptions ,buddhistSectOptions  ,jewishSectOptions ,  otherInterestsOptions,fitnessOptions,funOptions,creativeOptions }