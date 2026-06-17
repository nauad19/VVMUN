const committees = [
  {
    id: "lok-sabha",
    name: "Lok Sabha",
    shortName: "Lok Sabha",
    agenda: "Agenda to be announced",
    description: "India's lower house of Parliament, built for sharp legislative debate, constitutional reasoning, and persuasive public policy.",
    difficulty: "Intermediate",
    delegates: "TBA",
    banner: "images/committee-banners/lok-sabha.svg"
  },
  {
    id: "aippm",
    name: "AIPPM",
    shortName: "AIPPM",
    agenda: "Agenda to be announced",
    description: "A political negotiation forum where delegates represent Indian political leadership and debate matters of national consequence.",
    difficulty: "Advanced",
    delegates: "TBA",
    banner: "images/committee-banners/aippm.svg"
  },
  {
    id: "urc",
    name: "URC",
    shortName: "URC",
    agenda: "Agenda to be announced",
    description: "A high-energy committee designed for urgent deliberation, fast thinking, and disciplined crisis response.",
    difficulty: "Intermediate",
    delegates: "TBA",
    banner: "images/committee-banners/urc.svg"
  },
  {
    id: "unhrc",
    name: "UNHRC",
    shortName: "UNHRC",
    agenda: "Agenda to be announced",
    description: "The United Nations Human Rights Council focuses on rights, accountability, humanitarian protection, and dignity in policy.",
    difficulty: "Intermediate",
    delegates: "TBA",
    banner: "images/committee-banners/unhrc.svg"
  },
  {
    id: "unsc",
    name: "UNSC",
    shortName: "UNSC",
    agenda: "Agenda to be announced",
    description: "The United Nations Security Council addresses peace, security, diplomacy, and urgent international crises.",
    difficulty: "Advanced",
    delegates: "TBA",
    banner: "images/committee-banners/unsc.svg"
  },
  {
    id: "ipl",
    name: "IPL",
    shortName: "IPL",
    agenda: "Agenda to be announced",
    description: "A specialised committee with a competitive, fast-paced format inspired by strategy, negotiation, and public spectacle.",
    difficulty: "Beginner to Intermediate",
    delegates: "TBA",
    banner: "images/committee-banners/ipl.svg"
  },
  {
    id: "ccc",
    name: "CCC",
    shortName: "CCC",
    agenda: "Agenda to be announced",
    description: "A crisis-oriented committee for delegates who enjoy quick turns, controlled chaos, and decisive committee-room judgement.",
    difficulty: "Advanced",
    delegates: "TBA",
    banner: "images/committee-banners/ccc.svg"
  },
  {
    id: "ip",
    name: "IP",
    shortName: "IP",
    agenda: "Agenda to be announced",
    description: "The International Press captures the conference through reporting, interviews, photography, and editorial analysis.",
    difficulty: "Beginner to Intermediate",
    delegates: "TBA",
    banner: "images/committee-banners/ip.svg"
  }
];

const ebMembers = [
  {
    id: "atharv-rai-saxena",
    committee: "lok-sabha",
    name: "Atharv Rai Saxena",
    position: "Lok Sabha - Co Speaker",
    photo: "images/eb-members/atharv-rai-saxena.png",
    experience: "Atharv brings parliamentary command, firm decorum, and a sharp sense of timing to the Lok Sabha dais.",
    achievements: "Co Speaker, Lok Sabha, VVMUN.",
    funBio: "Sadan ki maryada is not optional when he is holding the mic."
  },
  {
    id: "manas-pradhan",
    committee: "lok-sabha",
    name: "Manas Pradhan",
    position: "Lok Sabha - Co Speaker",
    photo: "images/eb-members/manas-pradhan.png",
    experience: "Manas adds authority, clarity, and controlled parliamentary energy to the Lok Sabha proceedings.",
    achievements: "Co Speaker, Lok Sabha, VVMUN.",
    funBio: "Does not create disorder; he gavels it into becoming democracy."
  },
  {
    id: "laskhya-sharma",
    committee: "aippm",
    name: "Laskhya Sharma",
    position: "AIPPM Chair",
    photo: "images/eb-members/laskhya-sharma.png",
    experience: "Laskhya leads AIPPM with political instinct, debate discipline, and a talent for turning ideas into pointed deliberation.",
    achievements: "Chair, AIPPM, VVMUN.",
    funBio: "Ideas laao, debate karo; predictable speeches may be adjourned on arrival."
  },
  {
    id: "anny-patel",
    committee: "aippm",
    name: "Anny Patel",
    position: "AIPPM Vice Chair",
    photo: "images/eb-members/anny-patel.png",
    experience: "Anny supports AIPPM with measured scrutiny, procedural focus, and a calm eye for political substance.",
    achievements: "Vice Chair, AIPPM, VVMUN.",
    funBio: "AIPPM hai, akhada nahi; fortunately, she can tell the difference quickly."
  },
  {
    id: "gargy-sinha",
    committee: "urc",
    name: "Gargy Sinha",
    position: "URC Vice Chair",
    photo: "images/eb-members/gargy-sinha.png",
    experience: "Gargy brings fairness, focus, and a steady procedural hand to URC's fast-moving debate room.",
    achievements: "Vice Chair, URC, VVMUN.",
    funBio: "Everyone gets a chance to speak; everyone also gets a chance to listen."
  },
  {
    id: "mani-singh",
    committee: "unhrc",
    name: "Mani Singh",
    position: "UNHRC Vice Chair",
    photo: "images/eb-members/mani-singh.png",
    experience: "Mani supports UNHRC with a rights-first lens, delegate sensitivity, and firm committee-room balance.",
    achievements: "Vice Chair, UNHRC, VVMUN.",
    funBio: "Human rights are for everyone, including the delegate about to be asked for sources."
  },
  {
    id: "anjali-mestry",
    committee: "unsc",
    name: "Anjali Mestry",
    position: "UNSC Co Chair",
    photo: "images/eb-members/anjali-mestry.png",
    experience: "Anjali brings UNSC-level seriousness, procedural control, and a clear command of security debate.",
    achievements: "Co Chair, UNSC, VVMUN.",
    funBio: "Permanent members may have vetoes; vague arguments do not."
  },
  {
    id: "sabri-seshadri",
    committee: "unsc",
    name: "Sabri Seshadri",
    position: "UNSC Co Chair",
    photo: "images/eb-members/sabri-seshadri.png",
    experience: "Sabri adds neutrality, strategic discipline, and a sharp standard for substantive UNSC debate.",
    achievements: "Co Chair, UNSC, VVMUN.",
    funBio: "Neutral rehna compromise nahi; it is the job description."
  },
  {
    id: "sahaj-sharma",
    committee: "ip",
    name: "Sahaj Sharma",
    position: "Press Corps HOP",
    photo: "images/eb-members/sahaj-sharma.png",
    experience: "Sahaj leads the press room with editorial authority, sharp observation, and a healthy suspicion of polished PR.",
    achievements: "Head of Press, Press Corps, VVMUN.",
    funBio: "Breaking news yahi milega; baaki sab PR hai."
  },
  {
    id: "siddhi-sharma",
    committee: "ipl",
    name: "Siddhi Sharma",
    position: "IPL Co Auctioneer",
    photo: "images/eb-members/siddhi-sharma.png",
    experience: "Siddhi manages IPL co-auction flow, bidding facilitation, and the kind of orderly pressure that makes strategy visible.",
    achievements: "Co Auctioneer, IPL, VVMUN.",
    funBio: "Kyu nahi ho rahi padhai? Because the auction room has entered a procedural crisis."
  }
];

const getCommitteeById = (id) => committees.find((committee) => committee.id === id);
const getMemberById = (id) => ebMembers.find((member) => member.id === id);
const getMembersByCommittee = (committeeId) => ebMembers.filter((member) => member.committee === committeeId);
