
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
    { name: " I Casino", href: "/i-casino" ,icon:<GiIceSpellCast/>},
    { name: "Multi Market", href: "/events" ,icon:<SiMultisim/>},
   
  ];
  export const tabContent = [
    [ {
       category: "Match Odds Rules",
       rules: [
         "Match Odds & Book Maker Market will suspend if play stops due to rain or any other technical reasons."
       ]
     },
     {
       category: "Fancy Rules",
       rules: [
         "All Fancy Bets will be validated when the match has been tied.",
         "All advance Fancy will be suspended before toss or weather conditions.",
         "In case of technical error or any circumstances where any Fancy is suspended and does not resume, result will be given. All previous bets will be valid.",
         "If wrong rates or wrong commentary are given in Fancy, the particular bets will be cancelled.",
         "In any circumstances, management's decision will be final related to all exchange items.",
         "In case customers make bets in the wrong Fancy, we are not liable to delete or make changes, and bets will be considered as confirmed bets.",
         "Due to any technical error, if the market is open and the result has been announced, all bets after the result will be deleted.",
         "Four, Sixes, Wide, Wicket, Extra Run, Total Run, Highest Over, Top Batsman, Maiden Over, Caught-Out, No-Ball, Run-Out, Fifty, and Century are valid only if the match has been completed. In case of rain and over has been reduced, all other Fancy will be deleted. All complete events are valid (e.g., 1 Over Run Team A, etc.).",
         "Penalty runs will not be counted in any Fancy.",
         "Due to mistakes in the official scorecard, our scorecard and results will be valid.",
         "Our exchange is not responsible for misuse of Client ID, Master Account, and Super Master Account.",
         "A minimum number of legal overs must be bowled by the bowler mentioned in the event; otherwise, the same will not be considered as valid."
       ]
     },
     {
       category: "Player Bookmaker",
       rules: [
         "If either No1 or No2 player scores, compare their runs. Whichever player has the higher score wins.",
         "Explanation of Player Bookmaker: Compare both players' runs at the wicket. If V Kohli has 22 runs and R Sharma has 20 runs at the moment of the wicket, then V Kohli will be the winner.",
         "If both players' scores are level, and either player is out and the match is over, the game is tied.",
         "If the match is interrupted due to bad weather or anything else, the lower score player's runs are not counted, and the match is declared abandoned."
       ]
     },
     {
       category: "Cheating",
       rules: [
         "Cheating of any kind is not allowed. Customers' bets who are deemed to be cheating are liable to have bets made void. Cheating includes, but is not limited to, market price manipulation, court siding, sniping, and commission abuse.",
         "The site reserves the right to void any bets that are under review as part of any integrity investigation.",
         "The site may void certain bets in a market or void an entire market as a result of any integrity investigation.",
         "The site's decision in such integrity cases shall be final and binding upon the customer.",
         "Customers using VPN applications to mask location or proxy servers to mask devices are liable to having bets invalidated. Customers appearing from multiple IP locations are also liable to having bets invalidated."
       ]
     },
     {
       category: "Test Session",
       rules: [
         "Complete session valid in Test.",
         "If the session is not completed, for example: India 60 Over Run Session is running, and in case India team declares or is all-out at 55 overs, the next 5 over session will continue in England's innings.",
         "1st Day 1st Session: A minimum of 25 overs will be played for the result to be given; otherwise, the 1st Day 1st Session will be deleted.",
         "1st Day 2nd Session: A minimum of 25 overs will be played for the result to be given; otherwise, the 1st Day 2nd Session will be deleted.",
         "1st Day Total Run: A minimum of 80 overs will be played for the result to be given; otherwise, the 1st Day Total Run will be deleted.",
         "Test Match: Both advance sessions are valid.",
         "Test Lambi/ Innings Run: A mandatory 70 overs must be played in Test Lambi Paari/ Innings Run. If any team is all-out or declares, the Lambi Paari/ Innings Run is valid.",
         "In case the match is stopped due to weather conditions, all Lambi trades will be deleted.",
         "In Test, both Lambi Paari/ Inning Run is valid in advance Fancy."
       ]
     }],
    [ {
       category: "Football Rules",
       rules: [
         "Result will be given on the basis of 90+2/4 minutes.",
         "Match odds will suspend while penalty shootout & extra time between play.",
         "Extra time goal is not considered in result.",
         "Abandoned or postponed games are void unless rearranged and played in the same weekly schedule except for those bets that have already been determined at the time of abandonment or postponement.",
         "If a game venue is changed, bets already placed will stand, providing the home team is still designated as such.",
         "If the home and away team for a listed game are reversed, then bets placed based on the original listing will be void.",
         "In 2-way markets, push rules apply unless otherwise stated. Bet amounts on straight bets are returned, and in parlays, the selection is treated as a non-runner. For example - in handicap or totals betting where the index (value) of the market is a whole number, bets are void and will be refunded where the score lands on that number.",
         "All settlements are based on results and statistics provided by the relevant league’s governing body.",
         "We reserve the right to suspend any or all betting on a game at any time without notice.",
         "For settlement purposes, the team listed first in the event name is always considered the home team. Example: Team A vs Team B - Team A is the home team."
       ]
       ,
     },{
       category: "Cheating",
       rules: [
         "Cheating of any kind is not allowed, and customers' bets who are deemed to be cheating are liable to have bets made void. Cheating includes but is not limited to market price manipulation, court siding, sniping, and commission abuse.",
         "The site reserves the right to void any bets that are under review as part of any integrity investigation.",
         "The site may void certain bets in a market or void a whole market in its entirety as a result of any integrity investigation.",
         "The site's decision in such integrity cases shall be final and binding upon the customer.",
         "Customers using VPN applications to mask location or proxy servers to mask device are liable to having bets invalidated.",
         "Customers appearing from multiple IP locations are also liable to having bets invalidated."
       ]
     }],
     [
       {
         category: "Tennis Rules",
         rules: [
           "All bets will stand irrespective of a change of schedule (or day of match).",
           "All bets will be void in the event of a match starting but not being completed, except for bets where the outcome has already been determined. For example, if a game is abandoned at 6-4, 5-1, bets on the first set winner will be finalized as a winner.",
           "The only exception to this rule is where a player is disqualified, after which the player or team progressing to the next round will be deemed the winner.",
           "All games result given by trusted scoring sites and live TV reference.",
           "Trading bet will not be considered in our exchange.",
           "Bet will be void any time from our system."
         ]
       },
       {
         category: "Cheating",
         rules: [
           "Cheating of any kind is not allowed, and customers' bets who are deemed to be cheating are liable to have bets made void. Cheating includes but is not limited to market price manipulation, court siding, sniping, and commission abuse.",
           "The site reserves the right to void any bets that are under review as part of any integrity investigation.",
           "The site may void certain bets in a market or void a whole market in its entirety as a result of any integrity investigation.",
           "The site's decision in such integrity cases shall be final and binding upon the customer.",
           "Customers using VPN applications to mask location or proxy servers to mask device are liable to having bets invalidated.",
           "Customers appearing from multiple IP locations are also liable to having bets invalidated."
         ]
       }
     ],
      [
       {
         category: "Live Games",
         rules: [
           "Cheating of any kind is not allowed, and customers' bets who are deemed to be cheating are liable to have bets made void. Cheating includes but is not limited to market price manipulation, court siding, sniping, and commission abuse.",
           "The site reserves the right to void any bets that are under review as part of any integrity investigation.",
           "The site may void certain bets in a market or void a whole market in its entirety as a result of any integrity investigation.",
           "The site's decision in such integrity cases shall be final and binding upon the customer.",
           "Customers using VPN applications to mask location or proxy servers to mask device are liable to having bets invalidated.",
           "Customers appearing from multiple IP locations are also liable to having bets invalidated."
         ]
       }
     ],
     [
       {
         category: "Cricket Casino Rules",
         rules: [
           "Completed game is valid. In case due to rain overs are reduced or the match is abandoned, the particular game will be deleted.",
           "In any circumstances, management's decision will be final.",
           "The last digit of the run in all games will be valid in our exchange.",
          
         ]
       },
       {
         category: "Single Last Digit Game:-",
         rules: [
           "For example:- 6 over run Ind: 47 runs, so the result will be given as 7 for a single last digit game in our exchange.",
           "Double Last Digit Game:",
           "For example, 6 over run & 10 over run Ind: 45 runs & 83 runs respectively, so the result will be given as 53 for a double last digit game in our exchange.",
          
         ]
       },
      
       {
         category: "Triple Last Digit Game :-",
         rules: [
           "For Example:- 6 Over Run, 10 Over Run & 15 Over Run Ind : 43 Run ,80 Run And 125 Respectively So The Result Will Be Given As 305 For Triple Last Digit Game In Our Exchange.",
           "For Example:- 6 Over Run, 10 Over Run & Lambi Run Ind : 43 Run ,80 Run And 187 Respectively So The Result Will Be Given As 307 For Triple Last Digit Game In Our Exchange.",
           
         ]
       }
     ],
     [
       {
         category: "Election",
         rules: [
           "JDU & BJP alliance is a must in NDA, otherwise all bets of Bihar elections will be null and void.",
           "NDA mai JDU & BJP ka gathbandhan jaruri hai, agar kisi karan JDU & BJP ka gathbandhan nahi hota to saari bets cancel ho jayengi.",
           "Results declared by the Election Commission of India (ECI) will be valid."
         ]
       }
     ], [
       {
         category: "Rules Of Binary",
         rules: [
           "All session's bets will be confirmed at market rate only.",
           "All session's settlement price means result can be checked from the exchange's official sites.",
           "All session's result will be settlement price provided by exchange after market close.",
           "Every product has two types of prices: SPOT and FUTURE. We provide only the near month's FUTURE price in binary session. You can check it from the official website of that product.",
           "Session's timings: NFY, B-NFY - Monday to Friday 10:00 A.M. to 2:30 P.M. GOLD, SILVER, CRUDE - Monday to Friday 10:30 A.M. to 10:30 P.M."
         ]
       }
     ],
      [
       {
         category: "General",
         rules: [
           "Company reserves the right to SUSPEND/VOID any USER ID/BETS if found to be illegitimate (e.g., use of VPN/robot-use/multiple entry from the same IP/multiple bets at the same time (punching), market price manipulation, court siding, sniping, and/or commission abuse, etc.). (P.S. only winning bets will be voided). The decision will be at the sole and absolute discretion of the company.",
           "Any query with regards to the result or rates should be made within 5 days of the specific event. We will not entertain any queries after that and the same will not be considered valid post 5 days from the event.",
           "Company reserves the right to VOID any bets that are under review as part of any integrity investigation.",
           "Company may VOID certain bets in a market or VOID the whole market in its entirety as a result of any integrity investigation. Company’s decision in such integrity cases shall be final and binding upon the customer.",
           "Users using VPN applications to mask location or proxy servers to mask devices are liable to having their bets invalidated. Customers appearing from multiple IP locations are also liable to having their bets invalidated."
         ]
       },{
         category: "Football",
         rules: [
           "If a match is ABANDONED after it has kicked off, any bets where the outcome has already been decided will STAND (e.g., half-time result or first team to score). All other bets will be VOIDED regardless of the score-line at the time of abandonment.",
           "If confirmation of the rescheduled start time is not received within 3 hours of the original kick-off time, bets will be VOIDED. If kick-off time suffers from consecutive delays which is over the 3-hour period mentioned above, bets will still stand as long as the eventual reschedule is within 48 hours of the original kick-off time. If the match does not commence within 48 hours of the original kick-off time, bets will be VOIDED.",
           "Games which have their kick-off altered well in advance to accommodate live TV, or to ease fixture congestion will not be classed as postponed.",
           "If a match is forfeited or a team is given a walkover victory without the match having kicked off, then all bets will be VOIDED. Any subsequently awarded score line will not count for settlement purposes."
         ]
       },
       {
         category: "Fancy",
         rules: [
           "All fancy bets will be VALID when the match has been tied.",
           "All advance fancy bets will be suspended before toss or if there is weather condition.",
           "In case of any technical error or if any/all fancy bets are suspended and do not resume, result will be SETTLED, where all previous bets will be VALID (it will be deemed pure haar/jeet).",
           "If in any case, wrong rate gets printed in any/all fancy bets, bets placed on that rate will be VOIDED.",
           "In any/all circumstance, management decision will be FINAL related to all exchange markets. Our scorecard will be considered as VALID if there is any mismatch in any/all online portal.",
           "If a user places bets in the wrong fancy, we are not liable whatsoever. No changes will be made, and bets will be considered as VALID.",
           "Due to any technical error, if the market stays open or gets stuck at any given time while the game is in-play or has ended and result has been declared, bets placed in the given scenario will be VOIDED.",
           "Company reserves the right to VOID any bets (ONLY WINNING BETS) of any event at any given point of the match if the company believes there is any kind of cheating/wrongdoing in that particular event by the players (either batsman/bowler).",
           "Once we provide you with a username and password, it is your sole responsibility to CHANGE the password.",
           "Penalty runs will not be counted in any fancy.",
           "Warning: Live scores and other data on this site are sourced from third-party feeds and may be subject to time delays and/or be inaccurate. If you rely on this data to place bets, you do so at your own risk. We do not accept responsibility for loss suffered as a result of reliance on this data.",
           "Company is not responsible for any misuse of client ID."
         ]
       }
     ],[
       {
         category: "100 Ball Rules Women",
         rules: [
           "Each innings consists of 100 balls.",
           "The team that scores the most runs wins.",
           "The fielding side changes ends after every 10 balls.",
           "Bowlers deliver either five or ten consecutive balls as decided by the captain.",
           "Each bowler can deliver a maximum of 20 balls per match.",
           "Each bowling side gets a strategic timeout of up to two minutes.",
           "There is a 25-ball powerplay for each team.",
           "During the powerplay, two fielders are allowed outside of the initial 30-yard circle.",
           "RPB (Runs per ball) is used to measure scoring efficiency.",
           "RRPB (Required runs per ball) is used to calculate the required scoring rate.",
           "In case of a tie, a 5-ball super over will be played."
         ]
       }
     ],
     
     
   ];
 export const initialAmounts = [1000, 5000, 10000, 25000, 50000, 750000, 100000, 200000, 500000];
  export const dropdownItems = [
    { label: 'Profile', link: '/profile' },
    { label: 'Account Statement', link: '/account_statement' },
    { label: 'Stake Setting', link: '/stake_setting' },
    { label: 'Profit Loss', link: '/profit_loss' },
    { label: 'Unsettled Bets', link: '/unsettled_bets' },
    { label: 'Change Password', link: '/change_password' },
    { label: 'Rules', link: '/rules' },
    { label: 'Signout', link: '/' }
  ];
  export const coinsItems = [
    { label: 'Balance:', count:'0' },
    { label: 'Exposure:', count:'0' }
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