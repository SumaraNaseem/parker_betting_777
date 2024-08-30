
import { IoMdHome } from "react-icons/io";
import { IoMdPlay } from "react-icons/io";
import { GiCricketBat } from "react-icons/gi";
import { FaFootball } from "react-icons/fa6";
import { IoTennisballOutline } from "react-icons/io5";
import { FaHorse } from "react-icons/fa6";
import { FaDog } from "react-icons/fa";
import { MdOutlineCasino } from "react-icons/md";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { GiClick } from "react-icons/gi";
import { SiMultisim } from "react-icons/si";
import { GiIceSpellCast } from "react-icons/gi";

export const navbarLinks = [
    { name: "Home", href: "/dashboard" ,icon:<IoMdHome/> },
    { name: "INplay", href: "/inplay" ,icon:<IoMdPlay/>},
    { name: "Cricket", href: "/cricket",icon:<GiCricketBat/> },
    { name: "Football", href: "/football" ,icon:<FaFootball/>},
    { name: "Tennis", href: "/tennis" ,icon:<IoTennisballOutline/>},
    { name: "Casino", href: "/casino" ,icon:<MdOutlineCasino/>},
    { name: "Horse rasing", href: "/horse-rasing" ,icon:<FaHorse/>},
    { name: "Greyhound racing ", href: "/greyhound-racing" ,icon:<FaDog/>},
    { name: "Kabaddi", href: "/kabaddi",icon:<MdOutlineSportsKabaddi/> },
    { name: "Politics", href: "/politics" ,icon:<GiClick/>},
    { name: " I Casino", href: "/i-Casino" ,icon:<GiIceSpellCast/>},
    { name: "Multi Market", href: "/events" ,icon:<SiMultisim/>},
   
  ];
  export const sideBarLinks = [
    {
      name: "Cricket",
      icon: <GiCricketBat />,
      subLinks: [
        {
          name: "Gernel Compettion",
          subSubLinks: [
            { name: "Gorakhpur Lion V Luchnow Falcons", href: "/events" },
            { name: "Gulbaoge Mystics V Hubli trigers", href: "/events" },
            { name: "Noida Super Kings V Meerut Maverick", href: "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        {
          name: "Country Championship Division 1",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events" },
            { name: "SubSubLink 2", href:"/events" },
            // Add more sub-sublinks as needed
          ],
        },
        {
          name: "Test Match",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events" },
            { name: "SubSubLink 2", href : "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        {
          name: "Women's Canbbean Premier League",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events" },
            { name: "SubSubLink 2", href : "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        {
          name: "Canbbean Premier League",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events" },
            { name: "SubSubLink 2", href : "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        {
          name: "Icc World T20 Qualifiers",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events" },
            { name: "SubSubLink 2", href : "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        // Add more sublinks as needed
      ],
    },
    {
      name: "Football",
      icon: <FaFootball/>,
      subLinks: [
        {
          name: "SubLink 1",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events"  },
            { name: "SubSubLink 2", href: "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        {
          name: "SubLink 2",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events" },
            { name: "SubSubLink 2", href : "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        // Add more sublinks as needed
      ],
    },
    {
      name: "Tennis",
      icon: <IoTennisballOutline/>,
      subLinks: [
        {
          name: "SubLink 1",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events"  },
            { name: "SubSubLink 2", href: "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        {
          name: "SubLink 2",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events" },
            { name: "SubSubLink 2", href : "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        // Add more sublinks as needed
      ],
    },
    {
      name: "Casino",
      icon: <MdOutlineCasino/>,
      subLinks: [
        {
          name: "SubLink 1",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events"  },
            { name: "SubSubLink 2", href: "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        {
          name: "SubLink 2",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events" },
            { name: "SubSubLink 2", href : "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        // Add more sublinks as needed
      ],
    },
    {
      name: "Horse rasing",
      icon: <FaHorse/>,
      subLinks: [
        {
          name: "SubLink 1",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events"  },
            { name: "SubSubLink 2", href: "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        {
          name: "SubLink 2",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events" },
            { name: "SubSubLink 2", href : "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        // Add more sublinks as needed
      ],
    },
    {
      name: "Greyhound racing",
      icon: <FaDog/>,
      subLinks: [
        {
          name: "SubLink 1",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events"  },
            { name: "SubSubLink 2", href: "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        {
          name: "SubLink 2",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events" },
            { name: "SubSubLink 2", href : "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        // Add more sublinks as needed
      ],
    },
    {
      name: "Kabaddi",
      icon: <MdOutlineSportsKabaddi/>,
      subLinks: [
        {
          name: "SubLink 1",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events"  },
            { name: "SubSubLink 2", href: "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        {
          name: "SubLink 2",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events" },
            { name: "SubSubLink 2", href : "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        // Add more sublinks as needed
      ],
    },
    {
      name: "Politics",
      icon: <GiClick/>,
      subLinks: [
        {
          name: "SubLink 1",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events"  },
            { name: "SubSubLink 2", href: "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        {
          name: "SubLink 2",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events" },
            { name: "SubSubLink 2", href : "/events" },

            // Add more sub-sublinks as needed
          ],
        },
        // Add more sublinks as needed
      ],
    },
    {
      name: "I Casino",
      icon: <GiIceSpellCast/>,
      subLinks: [
        {
          name: "SubLink 1",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events"  },
            { name: "SubSubLink 2", href: "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        {
          name: "SubLink 2",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events" },
            { name: "SubSubLink 2", href : "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        // Add more sublinks as needed
      ],
    },
    {
      name: "Multi Market",
      icon: <SiMultisim/>,
      subLinks: [
        {
          name: "SubLink 1",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events" },
            { name: "SubSubLink 2", href: "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        {
          name: "SubLink 2",
          subSubLinks: [
            { name: "SubSubLink 1", href: "/events" },
            { name: "SubSubLink 2", href : "/events" },
            // Add more sub-sublinks as needed
          ],
        },
        // Add more sublinks as needed
      ],
    },
    // Add more main links as needed
  ];

  export const images = [
    {image_game:'https://parker777.io/assets/img/cricket.jpg', label:"Cricket"},
    { image_game:'https://parker777.io/assets/img/football.jpg',label:"Football"},
    {image_game:'https://parker777.io/assets/img/tennis.jpg',label:"Tennis"},
    {image_game:'https://parker777.io/assets/img/election.png',label:"election"},
    {image_game:'https://parker777.io/assets/img/horseracing.jpg',label:"Horse Racing"},
    {image_game:'https://parker777.io/assets/img/grayhound.jpg',label:"Grayhound Racing"},
    {image_game:'https://parker777.io/assets/img/casino.jpg',label:"casino"},
    {image_game:'https://parker777.io/assets/img/icasino.jpg',label:"i casino"},
    // Add more image URLs as needed
  ];
  
  export const MainGamesImage = [
    {image_game:'https://parker777.io/assets/img/casino/auragaming.png', label:"Click hare to play"},
    { image_game:'https://parker777.io/assets/img/casino/aviator.png',label:"Click hare to play"},
   
   
  ];

  export const images_card_game = [
    {image_game:'https://parker777.io/assets/img/casino/aviator.png', label:"aviator"},
    { image_game:'https://parker777.io/assets/img/casino/so.png',label:"super over"},
    {image_game:'https://parker777.io/assets/img/casino/lobby.png',label:"Lobby"},
    {image_game:'https://parker777.io/assets/img/casino/32card.jpg',label:"teenpatti"},
    {image_game:'https://parker777.io/assets/img/casino/teenpatti_t20.jpg',label:"teenpatti t20"},
    {image_game:'https://parker777.io/assets/img/casino/poker.jpg',label:"poker"},
    {image_game:'https://parker777.io/assets/img/casino/dt.jpg',label:"dragon tiger"},
    {image_game:'https://parker777.io/assets/img/casino/ab.jpg',label:"andar bahar"},
    {image_game:'https://parker777.io/assets/img/casino/7updown.jpg',label:"7Up Down"},
    {image_game:'https://parker777.io/assets/img/casino/32card.jpg',label:"32 cards"},
    // Add more image URLs as needed
  ];
  export const images_live_cards = [
    {image_game:'https://parker777.io/assets/img/casino/evolution.jpg', label:"evolution"},
    { image_game:'https://parker777.io/assets/img/casino/ezugi.jpg',label:"ezugi"},
    {image_game:'https://parker777.io/assets/img/casino/onetouch.jpg',label:"onetouch"},
    {image_game:'https://parker777.io/assets/img/casino/pplive.jpg',label:"bombay live"},
    {image_game:'https://parker777.io/assets/img/casino/bg.png',label:"betgamestv"},
    {image_game:'https://parker777.io/assets/img/casino/gamzix.jpg',label:"gamzix"},
    {image_game:'https://parker777.io/assets/img/casino/aviator.png',label:"aviator"},
    {image_game:'https://parker777.io/assets/img/casino/spribe.png',label:"spribe"},
    {image_game:'https://parker777.io/assets/img/casino/kingmaker.png',label:"king maker"},
    {image_game:'https://parker777.io/assets/img/casino/aesexy.png',label:"Ae sexy"},
    // Add more image URLs as needed
  ];
  export const images_royel_game = [
    {image_game:'https://parker777.io/assets/img/casino/lobby.jpg',label:"Lobby"},
    {image_game:'https://parker777.io/assets/img/casino/teen_patti.jpg',label:"teenpatti"},
    {image_game:'https://parker777.io/assets/img/casino/bollywood_casino.jpg',label:"bollywood casino"},
    {image_game:'https://parker777.io/assets/img/casino/2card_tp.jpg',label:"2 cards teenpatti"},
    {image_game:'https://parker777.io/assets/img/casino/cricket_war.jpg',label:"cricket war"},
    {image_game:'https://parker777.io/assets/img/casino/lucky7.jpg',label:"lucky7"},
    {image_game:'https://parker777.io/assets/img/casino/casino_war.jpg',label:"casino war"},
    {image_game:'https://parker777.io/assets/img/casino/muflis_teenpatti.jpg',label:"muflis teen patti"},,
    // Add more image URLs as needed
  ];
  export const ModelData =[
      "It is illegal for anybody under the age of 18 to gamble.",
      "It is an offence for anyone under the age of 18 to open an account or to gamble on PARKER777.",
      "PARKER777 takes its age-verification responsibilities very seriously.",
      "We carry out age-verification checks on all customers who use payment mechanisms which are available to under 18s and additionally perform random age-verification checks on customers using other forms of funding mechanisms",
      "We may ask for information to verify your age and could restrict or suspend your account until your age is confirmed",
      "PARKER777 advises and encourages its customers to prevent minors from accessing gambling websites.",
      "We encourage parents consider the use of internet use protection tools",
      "You may find following links useful ",
      
  ]