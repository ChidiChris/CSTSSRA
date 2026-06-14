import commandantImg from "@/assets/commandant.jpeg";

// Staff photos — drop your image at the path on the right, keeping the same filename.
import staffAdeyemi from "@/assets/staff/person-4.png";
import staffEze from "@/assets/staff/person-4.png";
import staffMohammed from "@/assets/staff/person-4.png";
import staffOkafor from "@/assets/staff/person-4.png";
import staffIbrahim from "@/assets/staff/person-4.png";
import staffDanladi from "@/assets/staff/person-4.png";
import staffBassey from "@/assets/staff/person-4.png";

// Corper photos
import corperAdaeze from "@/assets/corpers/person-4.png";
import corperIbrahim from "@/assets/corpers/person-4.png";
import corperTolulope from "@/assets/corpers/person-4.png";
import corperYusuf from "@/assets/corpers/person-4.png";
import corperNgozi from "@/assets/corpers/person-4.png";
import corperAbdulrahman from "@/assets/corpers/person-4.png";

// Military photos
import militaryEze from "@/assets/military/person-4.png";
import militaryYakubu from "@/assets/military/person-4.png";
import militaryHassan from "@/assets/military/person-4.png";
import militaryAudu from "@/assets/military/person-4.png";

// Department head photos
import deptNwosu from "@/assets/departments/person-4.png";
import deptAdamu from "@/assets/departments/person-4.png";
import deptOtu from "@/assets/departments/person-4.png";
import deptMohammed from "@/assets/departments/person-4.png";
import deptAdeola from "@/assets/departments/person-4.png";
import deptOnuoha from "@/assets/departments/person-4.png";
import deptEtim from "@/assets/departments/person-4.png";
import deptGarba from "@/assets/departments/person-4.png";

export const SITE = {
  name: "Command Science and Technical Secondary School",
  short: "CSTSS",
  motto: "Discipline · Knowledge · Service",
  address: "Cantonment Road, Federal Capital Territory, Nigeria",
  email: "info@cstss.mil.ng",
  phone: "+234 800 000 0000",
  altPhone: "+234 800 000 0001",
  hours: "Mon – Fri · 08:00 – 16:00",
  visiting: "Saturdays · 10:00 – 16:00",
};

export const STATS = [
  { label: "Cadet Students", value: 1240 },
  { label: "Academic & Admin Staff", value: 186 },
  { label: "Departments", value: 12 },
  { label: "Years of Excellence", value: 38 },
];

export const ANNOUNCEMENTS = [
  { date: "2026-05-20", title: "2026/2027 Cadet Admission Examination Date Released", tag: "Admissions" },
  { date: "2026-05-12", title: "Inter-House Sports Competition – Final Standings", tag: "Sports" },
  { date: "2026-05-04", title: "Speech & Prize-Giving Day Postponed to June 14", tag: "Notice" },
  { date: "2026-04-28", title: "Mid-Term Break Schedule for All Cadets", tag: "Academic" },
];

export const COMMANDANT = {
  name: "Lt. Col. GA. ADEJUMO",
  rank: "Lieutenant Colonel",
  image: commandantImg,
  bio: "Lt. Col. GA. ADEJUMO is a decorated officer of the Nigerian Army with over 30 years of distinguished service. A graduate of the Nigerian Defence Academy and the Royal Military Academy Sandhurst, he holds advanced degrees in Strategic Studies and Educational Administration. He assumed command of CSTSS in 2024 with a mandate to consolidate the school's twin pillars of military discipline and academic excellence.",
  message:
    "On behalf of the staff and cadets, I welcome you to the Command Science and Technical Secondary School. For nearly four decades, this institution has shaped young Nigerians into leaders of character — disciplined, knowledgeable, and ready to serve. Our doors are open to families who seek a structured, values-driven, and academically rigorous environment for their children.",
};

export type Socials = {
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  whatsapp?: string;
};

export type Staff = {
  id: string;
  name: string;
  position: string;
  category: "Commandant" | "Vice Principal Admin" | "Vice Principal Academic" | "HODs" | "Teaching Staff" | "Administrative Staff";
  department?: string;
  qualification: string;
  years: number;
  responsibilities: string[];
  photo: string;
  email?: string;
  socials: Socials;
};


export const STAFF: Staff[] = [
  { id: "s1", name: "Brig. Gen. A. M. Bello", position: "Commandant", category: "Commandant", qualification: "MSc Strategic Studies, NDA", years: 30, responsibilities: ["Overall command of the school", "Strategic direction", "Liaison with Defence Headquarters"], photo: COMMANDANT.image, email: "commandant@cstss.mil.ng", socials: { linkedin: "in/am-bello", facebook: "fb.com/cstss.official" } },
  { id: "s2", name: "Mr. J. O. Adeyemi", position: "Vice Principal (Administration)", category: "Vice Principal Admin", qualification: "M.Ed Educational Administration", years: 22, responsibilities: ["Administrative oversight", "Staff welfare", "Records management"], photo: staffAdeyemi, email: "vp.admin@cstss.mil.ng", socials: { linkedin: "in/jo-adeyemi", facebook: "fb.com/jo.adeyemi", whatsapp: "+234 803 111 2201" } },
  { id: "s3", name: "Mrs. F. N. Eze", position: "Vice Principal (Academic)", category: "Vice Principal Academic", qualification: "M.Sc Mathematics, PGDE", years: 24, responsibilities: ["Curriculum delivery", "Teacher supervision", "Examinations"], photo: staffEze, email: "vp.academic@cstss.mil.ng", socials: { linkedin: "in/fn-eze", twitter: "@fn_eze", whatsapp: "+234 803 111 2202" } },
  { id: "s4", name: "Dr. S. K. Mohammed", position: "HOD, Sciences", category: "HODs", department: "Sciences", qualification: "PhD Chemistry", years: 18, responsibilities: ["Coordinate science departments", "Laboratory oversight"], photo: staffMohammed, email: "sciences@cstss.mil.ng", socials: { linkedin: "in/sk-mohammed", twitter: "@dr_sk_m", whatsapp: "+234 803 111 2203" } },
  { id: "s5", name: "Mr. T. O. Okafor", position: "HOD, Technical Studies", category: "HODs", department: "Technical", qualification: "M.Eng Mechanical Engineering", years: 16, responsibilities: ["Workshop & technical training", "TVET curriculum"], photo: staffOkafor, email: "technical@cstss.mil.ng", socials: { linkedin: "in/to-okafor", facebook: "fb.com/to.okafor", whatsapp: "+234 803 111 2204" } },
  { id: "s6", name: "Mrs. C. A. Ibrahim", position: "Senior Teacher – English", category: "Teaching Staff", department: "Languages", qualification: "M.A English Literature", years: 12, responsibilities: ["Senior literature classes", "Debate & Press Club"], photo: staffIbrahim, email: "english@cstss.mil.ng", socials: { instagram: "@ca.ibrahim", facebook: "fb.com/ca.ibrahim", whatsapp: "+234 803 111 2205" } },
  { id: "s7", name: "Mr. K. U. Danladi", position: "Teacher – Mathematics", category: "Teaching Staff", department: "Mathematics", qualification: "B.Sc Mathematics, PGDE", years: 8, responsibilities: ["JSS Mathematics", "Mathematics Olympiad coach"], photo: staffDanladi, socials: { twitter: "@ku_danladi", linkedin: "in/ku-danladi", whatsapp: "+234 803 111 2206" } },
  { id: "s8", name: "Mrs. R. T. Bassey", position: "Bursar", category: "Administrative Staff", qualification: "ICAN, MBA Finance", years: 14, responsibilities: ["Financial administration", "Procurement"], photo: staffBassey, email: "bursar@cstss.mil.ng", socials: { linkedin: "in/rt-bassey", facebook: "fb.com/rt.bassey", whatsapp: "+234 803 111 2207" } },
];

export type Corper = {
  id: string;
  name: string;
  stateCode: string;
  course: string;
  institution: string;
  department: string;
  skills: string[];
  photo: string;
  phone: string;
  socials: Socials;
};

export const CORPERS: Corper[] = [
  { id: "c1", name: "Adaeze N. Okonkwo", stateCode: "FC/24A/1102", course: "Computer Science", institution: "University of Nigeria, Nsukka", department: "ICT", skills: ["Web development", "Data analysis", "Robotics club"], photo: corperAdaeze, phone: "+234 803 000 1102", socials: { twitter: "@adaeze_n", instagram: "@adaeze.codes", linkedin: "in/adaeze-okonkwo", facebook: "fb.com/adaeze.okonkwo", whatsapp: "+234 803 000 1102" } },
  { id: "c2", name: "Ibrahim Sule", stateCode: "FC/24A/0987", course: "Physics Education", institution: "Ahmadu Bello University", department: "Sciences", skills: ["Lab demonstration", "STEM mentoring"], photo: corperIbrahim, phone: "+234 805 000 0987", socials: { twitter: "@ibrahim_sule", linkedin: "in/ibrahim-sule", facebook: "fb.com/ibrahim.sule", whatsapp: "+234 805 000 0987" } },
  { id: "c3", name: "Tolulope Akinwale", stateCode: "FC/24A/1230", course: "English Language", institution: "Obafemi Awolowo University", department: "Languages", skills: ["Public speaking", "Drama coach"], photo: corperTolulope, phone: "+234 807 000 1230", socials: { instagram: "@tolu.akinwale", linkedin: "in/tolulope-akinwale", facebook: "fb.com/tolu.akinwale", whatsapp: "+234 807 000 1230" } },
  { id: "c4", name: "Yusuf M. Bello", stateCode: "FC/24A/1455", course: "Mechanical Engineering", institution: "University of Lagos", department: "Technical", skills: ["Workshop instruction", "CAD drawing"], photo: corperYusuf, phone: "+234 809 000 1455", socials: { twitter: "@yusuf_bello", instagram: "@yusuf.builds", facebook: "fb.com/yusuf.bello", whatsapp: "+234 809 000 1455" } },
  { id: "c5", name: "Ngozi Eberechukwu", stateCode: "FC/24A/1560", course: "Biochemistry", institution: "University of Ibadan", department: "Sciences", skills: ["Lab assistance", "Tutoring"], photo: corperNgozi, phone: "+234 802 000 1560", socials: { instagram: "@ngozi.e", linkedin: "in/ngozi-eberechukwu", facebook: "fb.com/ngozi.e", whatsapp: "+234 802 000 1560" } },
  { id: "c6", name: "Abdulrahman Musa", stateCode: "FC/24A/1675", course: "Electrical Engineering", institution: "Bayero University Kano", department: "Technical", skills: ["Electronics", "Solar systems"], photo: corperAbdulrahman, phone: "+234 806 000 1675", socials: { twitter: "@abdul_musa", linkedin: "in/abdulrahman-musa", facebook: "fb.com/abdul.musa", whatsapp: "+234 806 000 1675" } },
];

export type Military = {
  id: string;
  name: string;
  rank: string;
  unit: string;
  appointment: string;
  profile: string;
  photo: string;
  socials: Socials;
};

export const MILITARY: Military[] = [
  { id: "m1", name: "Brig. Gen. A. M. Bello", rank: "Brigadier General", unit: "Nigerian Army", appointment: "Commandant", profile: "Over 30 years of distinguished service. NDA graduate and Sandhurst alumnus.", photo: COMMANDANT.image, socials: { linkedin: "in/am-bello", facebook: "fb.com/cstss.official" } },
  { id: "m2", name: "Lt. Col. P. C. Eze", rank: "Lieutenant Colonel", unit: "Nigerian Army", appointment: "Administrative Officer (AO)", profile: "Heads day-to-day military administration of the cadet wing.", photo: militaryEze, socials: { linkedin: "in/pc-eze", facebook: "fb.com/pc.eze", whatsapp: "+234 803 222 3302" } },
  { id: "m3", name: "WO1 G. A. Yakubu", rank: "Regimental Sergeant Major", unit: "Nigerian Army", appointment: "RSM", profile: "Master of parade, drill, and cadet discipline.", photo: militaryYakubu, socials: { facebook: "fb.com/ga.yakubu", whatsapp: "+234 803 222 3303" } },
  { id: "m4", name: "Capt. L. O. Hassan", rank: "Captain", unit: "Nigerian Army", appointment: "Military Instructor", profile: "Leads physical training and field-craft instruction.", photo: militaryHassan, socials: { twitter: "@capt_hassan", linkedin: "in/lo-hassan", whatsapp: "+234 803 222 3304" } },
  { id: "m5", name: "Sgt. M. I. Audu", rank: "Sergeant", unit: "Nigerian Army", appointment: "Drill Instructor", profile: "Daily drill and ceremonial training for junior cadets.", photo: militaryAudu, socials: { facebook: "fb.com/mi.audu", whatsapp: "+234 803 222 3305" } },
];

export const DEPARTMENTS = [
  { slug: "ict", name: "ICT", head: "Mr. C. Nwosu", headPhoto: deptNwosu, description: "Computer literacy, programming fundamentals, and digital citizenship for all cadets.", facilities: ["50-seat computer lab", "Fibre internet", "Robotics kits"], functions: ["ICT curriculum", "Robotics club", "School IT support"] },
  { slug: "furniture", name: "Furniture Workshop", head: "Mr. B. Adamu", headPhoto: deptAdamu, description: "Hands-on training in carpentry, joinery, and furniture finishing.", facilities: ["Powered woodworking shop", "Hand-tool bay"], functions: ["TVET wood-trade training", "School furniture production"] },
  { slug: "studio", name: "Photo Studio", head: "Mr. E. Otu", headPhoto: deptOtu, description: "Photography, image editing, and event coverage training.", facilities: ["Studio lighting kit", "Digital cameras"], functions: ["Event documentation", "Yearbook production"] },
  { slug: "lab", name: "Science Laboratory", head: "Dr. S. K. Mohammed", headPhoto: deptMohammed, description: "Integrated laboratories for Physics, Chemistry, and Biology.", facilities: ["3 well-equipped labs", "Prep room"], functions: ["Practical classes", "Science fair"] },
  { slug: "library", name: "Library", head: "Mrs. H. Adeola", headPhoto: deptAdeola, description: "Quiet study, reference, and digital resource center.", facilities: ["10,000+ volumes", "E-library terminals"], functions: ["Reading programme", "Book club"] },
  { slug: "sports", name: "Sports Unit", head: "Mr. D. Onuoha", headPhoto: deptOnuoha, description: "Physical fitness, athletics, and competitive sports.", facilities: ["Football pitch", "Track", "Indoor sports hall"], functions: ["Inter-house sports", "External competitions"] },
  { slug: "counselling", name: "Guidance & Counselling", head: "Mrs. P. Etim", headPhoto: deptEtim, description: "Cadet welfare, career guidance, and mentoring.", facilities: ["Private counselling rooms"], functions: ["Individual counselling", "Career talks"] },
  { slug: "maintenance", name: "Maintenance / Block Unit", head: "Mr. A. Garba", headPhoto: deptGarba, description: "Estate, plumbing, electrical, and grounds upkeep.", facilities: ["Workshop bay", "Standby generators"], functions: ["Routine maintenance", "Emergency repairs"] },
];

import docCadetHandbook from "@/assets/documents/cadet-handbook-2026.pdf?url";
import docAdmissionGuidelines from "@/assets/documents/cadet-handbook-2026.pdf?url";
import docAcademicCalendar from "@/assets/documents/cadet-handbook-2026.pdf?url";
import docSchoolRules from "@/assets/documents/cadet-handbook-2026.pdf?url";
import docProspectus from "@/assets/documents/cadet-handbook-2026.pdf?url";
import docPtaConstitution from "@/assets/documents/cadet-handbook-2026.pdf?url";
import docPtaAnnualReport from "@/assets/documents/cadet-handbook-2026.pdf?url";

export const DOCUMENTS = [
  { name: "Cadet Handbook 2026", category: "Handbook", size: "2.4 MB", file: docCadetHandbook, filename: "cadet-handbook-2026.pdf" },
  { name: "Admission Guidelines 2026/2027", category: "Admissions", size: "812 KB", file: docAdmissionGuidelines, filename: "admission-guidelines-2026-2027.pdf" },
  { name: "Academic Calendar – 2026", category: "Academic", size: "412 KB", file: docAcademicCalendar, filename: "academic-calendar-2026.pdf" },
  { name: "School Rules and Regulations", category: "Rules", size: "1.1 MB", file: docSchoolRules, filename: "school-rules-and-regulations.pdf" },
  { name: "School Prospectus", category: "Prospectus", size: "5.6 MB", file: docProspectus, filename: "school-prospectus.pdf" },
  { name: "PTA Constitution", category: "PTA", size: "640 KB", file: docPtaConstitution, filename: "pta-constitution.pdf" },
  { name: "PTA Annual Report 2025", category: "PTA", size: "1.8 MB", file: docPtaAnnualReport, filename: "pta-annual-report-2025.pdf" },
];

import galMorningAssembly from "@/assets/gallery/person-4.png";
import galPassingOutParade from "@/assets/gallery/person-4.png";
import galInterHouseSportsOpening from "@/assets/gallery/person-4.png";
import galChemistryPractical from "@/assets/gallery/person-4.png";
import galHostelInspection from "@/assets/gallery/person-4.png";
import galAthleticsFinal from "@/assets/gallery/person-4.png";
import galFieldCraftExercise from "@/assets/gallery/person-4.png";
import galClassOf2025 from "@/assets/gallery/person-4.png";
import galNationalAssemblyVisit from "@/assets/gallery/person-4.png";
import galCulturalDay from "@/assets/gallery/person-4.png";
import galPhysicsLab from "@/assets/gallery/person-4.png";
import galDiningHall from "@/assets/gallery/person-4.png";
import galColourParty from "@/assets/gallery/person-4.png";
import galFootballMatch from "@/assets/gallery/person-4.png";
import galSpeechPrizeDay from "@/assets/gallery/person-4.png";
import galRifleDrill from "@/assets/gallery/person-4.png";
import galBiologyPractical from "@/assets/gallery/person-4.png";
import galIndustrialTour from "@/assets/gallery/person-4.png";

export const GALLERY = [
  { category: "Parade", title: "Morning Assembly", image: galMorningAssembly, description: "Cadets fall in at dawn for the daily muster and morning colours — the cornerstone of CSTSS routine." },
  { category: "Parade", title: "Passing-Out Parade", image: galPassingOutParade, description: "Graduating cadets pass in review before the Commandant and distinguished guests." },
  { category: "Events", title: "Inter-House Sports Opening", image: galInterHouseSportsOpening, description: "Houses parade their colours at the opening ceremony of the annual sports competition." },
  { category: "Laboratories", title: "Chemistry Practical", image: galChemistryPractical, description: "Senior cadets conduct titration experiments in the school's well-equipped chemistry laboratory." },
  { category: "Boarding", title: "Hostel Inspection", image: galHostelInspection, description: "Weekly hostel inspection ensures cleanliness, order, and adherence to standing orders." },
  { category: "Sports", title: "Athletics Final", image: galAthleticsFinal, description: "Track-and-field finalists compete during the inter-house athletics championship." },
  { category: "Military Drills", title: "Field-Craft Exercise", image: galFieldCraftExercise, description: "Cadets practice map reading, navigation, and field-craft under instructor supervision." },
  { category: "Graduation", title: "Class of 2025", image: galClassOf2025, description: "The graduating class of 2025 in their ceremonial dress on commissioning day." },
  { category: "Excursions", title: "Visit to National Assembly", image: galNationalAssemblyVisit, description: "An educational tour exposing senior cadets to the workings of the legislature." },
  { category: "Events", title: "Cultural Day", image: galCulturalDay, description: "Cadets showcase Nigeria's rich cultural heritage through dance, dress, and cuisine." },
  { category: "Laboratories", title: "Physics Lab", image: galPhysicsLab, description: "Junior cadets carry out experiments on motion and energy in the physics laboratory." },
  { category: "Boarding", title: "Dining Hall", image: galDiningHall, description: "Cadets share a structured meal in the central dining hall under the supervision of duty staff." },
  { category: "Parade", title: "Colour Party", image: galColourParty, description: "The school colour party rehearses for the upcoming national day ceremony." },
  { category: "Sports", title: "Football Match", image: galFootballMatch, description: "Inter-house football final fixture played at the main school pitch." },
  { category: "Events", title: "Speech & Prize Day", image: galSpeechPrizeDay, description: "Outstanding cadets receive academic and conduct awards from the chief guest." },
  { category: "Military Drills", title: "Rifle Drill", image: galRifleDrill, description: "Senior cadets perform precision rifle drill (training rifles only) on the parade square." },
  { category: "Laboratories", title: "Biology Practical", image: galBiologyPractical, description: "Microscopy session during a senior biology practical class." },
  { category: "Excursions", title: "Industrial Tour", image: galIndustrialTour, description: "Technical cadets tour a manufacturing facility as part of TVET exposure." },
];


export const FAQS = [
  { q: "Is CSTSS a boarding school?", a: "Yes. All cadets are full boarders. Boys and girls are housed in separate hostels under 24-hour supervision." },
  { q: "What is the admission process?", a: "Candidates sit a competitive entrance examination, followed by an oral interview and medical screening. See the Admission Guidelines for the current cycle." },
  { q: "Do cadets undergo military training?", a: "Cadets receive structured drill, physical training, and leadership instruction. There is no weapons training at the secondary level." },
  { q: "How often can parents visit?", a: "Visiting day is the second Saturday of each month, between 10:00 and 16:00." },
];

export const ACHIEVEMENTS = [
  "Best Disciplined Cadet Corps – National Cadet Championship 2024",
  "1st Position – National Mathematics Olympiad (Junior) 2024",
  "WAEC Distinction – 97% credit pass rate, 2024",
  "National Science Fair – Gold Medal in Engineering 2023",
];
