var docpadConfig;
var indexOf = [].indexOf || function (item) {
        for (var i = 0, l = this.length; i < l; i++) {
            if (i in this && this[i] === item) return i;
        }
        return -1;
    };

var imgBaseUrl = '/images/';
var sponsorsImgBaseUrl = imgBaseUrl + 'sponsors/';
var speakersImgBaseUrl = imgBaseUrl + 'speakers/';
var partnersImgBaseUrl = imgBaseUrl + 'partners/';

docpadConfig = {
    outPath: '../2017.mobilization.pl-gh-pages/',
    templateData: {
        site: {
            url: "http://2017.mobilization.pl",
            oldUrls: ['www.mobilization.pl'],
            title: "Mobilization 2017",
            description: "Mobilization is a conference dedicated to mobile technologies. The main scope is development of mobile solutions aimed at smartphones and tablets, with particular interest in Android and iOS mobile platforms.",
            keywords: "mobilization, conference, mobile conference, Łódź",
            styles: [],
            scripts: [],
            visibility: {
                "features": false,
                "agenda": true,
                "talks": false,
                "speakers": true,
                "volunteers": true
            },
            event: {
                title: 'Mobilization 2017',
                location: {
                    lat: 51.7505458,
                    lng: 19.4501351,
                    place: 'Expo-Łódź Sp. z o.o.',
                    street: 'al. Politechniki 4',
                    city: 'Łódź',
                    zip: '93-590',
                    country: 'Polska'
                },
                data: '21nd Oct 2017',
                time: '08:00-17:30'
            },
            sponsors: {
                diamond: [
                    // {"name": "TomTom", "logo_url": "/images/sponsors/tomtom-on-white.png", "link": "https://www.tomtom.com/pl_pl/"},
                ],
                platinum: [
                    // {"name": "Ericpol", "logo_url": "/images/sponsors/ericpol.jpeg", "link": "http://www.ericpol.pl"},

                    {
                        "name": "Mobica",
                        "logo_url": "/images/sponsors/mobica.png"
                    },
                    // {
                    //     "name": "Oberthur Technologies R&D Poland",
                    //     "logo_url": "/images/sponsors/oberthur.png",
                    //     "link": "http://www.oberthur.com/"
                    // },
                    // {"name": "Seqr", "logo_url": "/images/sponsors/seqr.png", "link": "https://www.seqr.com/int/"},
                    // {
                    //     "name": "TomTom",
                    //     "logo_url": "/images/sponsors/tomtom-on-white.png",
                    //     "link": "http://www.tomtom.com/pl_pl/"
                    // },
                ],
                gold: [
                  // {
                  //     "name": "Harman",
                  //     "logo_url": "/images/sponsors/harman.jpeg",
                  //     "link": "http://services.harman.com/"
                  // },
                    {
                        "name": "Exaco",
                        "logo_url": "/images/sponsors/exaco.png",
                        "link": "http://exaco.pl"
                    },
                    // {"name": "Intive", "logo_url": "/images/sponsors/intive.png", "link": "https://www.intive.com/en"},
                    // {"name": "Pracuj.pl", "logo_url": "/images/sponsors/pracujpl.png", "link": "http://www.pracuj.pl/"},
                ],
                silver: [
                  {
                      "name": "Appyourself",
                      "logo_url": "/images/sponsors/appyourself.png",
                      "link": "https://appyourself.net/en/"
                  },
                  // {
                  //     "name": "Cybercom",
                  //     "logo_url": "/images/sponsors/cybercom.png",
                  //     "link": "http://www.cybercom.com/pl/Poland/"
                  // },
                  //   {
                  //       "name": "ITKontrakt",
                  //       "logo_url": "/images/sponsors/itkontrakt.png",
                  //       "link": "https://www.itkontrakt.pl/"
                  //   },
                  //   {"name": "Sii", "logo_url": "/images/sponsors/sii.png", "link": "http://sii.pl/oddzialy/lodz/"},
                ],
                copper: [
                    // {
                    //     "name": "Jetbrains",
                    //     "logo_url": "/images/sponsors/jetbrains.png",
                    //     "link": "http://www.jetbrains.com/"
                    // }
                ],
            },
            partners: {
                organizers: [
                    {
                        name: 'Java User Group Łódź',
                        logo_url: partnersImgBaseUrl + 'juglodz.jpeg',
                        description_html: 'Łódź JUG is an association of Java developers, architects and enthusiasts of Java technology from Łódź, the city in the centre of Poland. The aim of the association is to promote exchange of knowledge and competence growth among Java professionals in the Łódźarea. The main activity towards this goal is organisation of IT-related seminars and meetings that usually involve a presentation about chosen topic and then follow-up discussion. LJUG cooperates with other JUGs in Poland, like Polish JUG and Warsaw JUG. We encourage everyone interested in Java technologies to join and start participating in our expertise-sharing activities! Java User Group Łódź is main organizer of Mobilization event since 2011'
                    }
                ],

                community: [
//                    {
//                        "name": "Łódź WiOSłuje",
//                        "logo_url": "/images/partners/lodz-wiosluje.png",
//                        "description_html": "The best place for iOS developers based in Łódź. A group with monthly meetings with tech talks, fantastic speakers and unbeatable atmosphere! Join us on facebook: www.facebook.com/lodzwiosluje",
//                        "link": "http://www.meetup.com/Lodz-w-iOS-luje/"
//                    },
//                     {
//                         "name": "Scala Wave IO",
//                         "logo_url": "/images/partners/scala-wawe.png",
//                         "description_html": "Scala Conf with the spirit of the sea Poland, Gdańsk, 7‑8.07.2017",
//                         "link":"http://www.scalawave.io"
//
//                     },
                    // {
                    //      "name":"Toruń JUG",
                    //      "logo_url":"/images/partners/jugtorun.png",
                    //      "description_html":"Toruń JUG is a group of JVM technologies developers and enthusiasts. The main goal of the group is to gather people interested in JVM languages both professionally and personally. Our group contains programmers from many companies, scientists working on Toruń university, students and other technology passionates. We are encouraging knowledge sharing and collaboration in open source projects. Although we are the youngest JUG in Poland we are growing fast already having several big partners supporting us. More about Toruń JUG you can find at: torun.jug.pl"
                    // },
                    {
                        "name": "Android Developer Group Poznań",
                        "logo_url": "/images/partners/adgp.jpeg",
                        "link": "http://www.meetup.com/Poznan-Android-Developer-Group/"
                    },
                    {
                          "name": "Mobile Optimized 2017",
                          "logo_url": "/images/partners/mo-logo.png",
                          "link": "http://mo.dev.by"
                        },
                    // {"name":"Polish Java User Group","logo_url":"/images/partners/polish-jug.png","description_html":"Polish Java User Group is a group of Java technology developers and enthusiasts. The main goal of the group is to popularize Java and modern software development methodologies. Since the beginning in 1999, the group had great impact on the Polish Java community growth. They main activity are meetings with students, programmers and project managers as well as conferences with famous professionals."},
                    // {"name":"Mobile Central Europe 2016","logo_url":"/images/partners/mce2016.png","description_html":"We put our best effort into creating a stimulating experience for everyone involved. Help us make it one of the best mobile events in Europe! MCE is about bringing together the greatest minds in tech to exchange groundbreaking ideas. For Mobilization attendees promo-code will be offered giving 20% discount. Code will be visible during Mobilization event so you have to be on Mobilization! With this discount and early bird the ticket for MCE is really good price."},
//                    {
//                        "name": "GDG Kraków",
//                        "logo_url": "/images/partners/gdgkrakow.jpeg",
//                        "link": "http://www.meetup.com/GDG-Krakow/"
//                    },
//                    {
//                        "name": "Let Swift",
//                        "logo_url": "/images/partners/letswift.png",
//                        "link": "https://www.facebook.com/letswiftwroclaw/"
//                    },
                    // {"name":"Dev Day 2015","logo_url":"/images/partners/abb-dev-day.png","link":"http://devday.pl"},
                    // {"name":"Codepot.pl","logo_url":"/images/partners/codepot-logo.png","link":"http://codepot.pl"},
//                    {
//                        "name": "Zwinna Łódź",
//                        "logo_url": "/images/partners/zwinna_lodz.jpeg",
//                        "link": "http://zwinnalodz.eu/"
//                    },
                    {
                        "name": "Mobile Warsaw",
                        "logo_url": "/images/partners/mw-logo.png",
                        "link": "http://mobile-warsaw.pl"
                    },
                    {
                        "name": "Meet Mobile",
                        "logo_url": "/images/partners/meet-mobile.png",
                        "link": "https://www.meetup.com/meet-mobile/"
                    },
                    {
                        "name": "Mobile Białystok",
                        "logo_url": "/images/partners/mobile-bialystok.png",
                        "link": "https://www.facebook.com/mobilebialystok/"
                    },
                    {
                        "name": "GDG Rzeszów`",
                        "logo_url": "/images/partners/gdg-rzeszow.png",
                        "link": "http://devfest.pl/"
                    },
                    {
                        "name": "Droidcon Poland",
                        "logo_url": "/images/partners/droidcon.png",
                        "link": "http://droidcon.pl/"
                    },
                ],
                media: [

                    // {"name":"AK74","logo_url":"/images/partners/ak74.png","description_html":"Cześć! Nazywam się Artur Kurasiński i jestem autorem tego bloga. Na co dzień zajmuję się Fokusem. Jestem współtwórcą cyklu spotkań dla przedsiębiorców Aula Polska oraz konkursu Aulery. Jako vloger prowadzę program „Seria z AK74″. Czasami udzielam się jako mentor na imprezach z cyklu Seedcamp, Labstar, DemoCamp, Intel Challenge, i StartupFest. Więcej znajdziesz tutaj: LinkedIn.com czy Facebooku lub Twitterze Chcesz się ze mną skontaktować?: Wyślij maila na adres: artur@revolver.pl"},
                    // {"name":"Marketing Mobilny","logo_url":"/images/partners/marketing-mobilny.jpg","link":"http://marketingmobilny.pl"},
                    // {"name":"Dworzynska","logo_url":"/images/partners/dworzynska.png","link":"http://dworzynska.com"},
                    // {"name":"Praca IT","logo_url":"/images/partners/pracait.png","link":"http://pracait.com"},
                    // {"name":"Software Developer's Journal","logo_url":"/images/partners/sdj.png","link":"http://sdjournal.pl"},
                    // {"name":"GoMobi","logo_url":"/images/partners/gomobi.jpg","link":"http://gomobi.pl"},
//                    {
//                        "name": "Programista Magazine",
//                        "logo_url": "/images/partners/programistamag.png",
//                        "link": "http://programistamag.pl"
//                    },
                    // {"name":"MyApple","logo_url":"/images/partners/myapple.jpg","link":"http://myapple.pl"},
                    // {"name":"4tech.tv","logo_url":"/images/partners/4techmobile.png","link":"http://testytelefonow.pl"},
                    // {"name":"StartUpTV","logo_url":"/images/partners/startuptv.png","link":"http://startuptv.pl"},
                    // {"name":"Linux Magazine","logo_url":"/images/partners/linuxmag.png","link":"http://www.linux-magazine.pl"},
//                    {
//                        "name": "Packt Publishing",
//                        "logo_url": "/images/partners/packt.png",
//                        "link": "https://www.packtpub.com/"
//                    },
                    // {"name":"Młodzi w Łodzi","logo_url":"/images/partners/mlodzi-w-lodzi.jpg","link":"http://mlodziwlodzi.pl"},
//                    {"name": "Helion", "logo_url": "/images/partners/helionpl.png", "link": "http://helion.pl"},
//                    {
//                        "name": "Manning Publications",
//                        "logo_url": "/images/partners/manning.png",
//                        "link": "http://www.manning.com"
//                    },
//                    {
//                        "name": "Pluralsight",
//                        "logo_url": "/images/partners/pluralsight.png",
//                        "link": "https://www.pluralsight.com/"
//                    }
                ],

                supporters: [
                                    // {"name": "Miliataria Łódź", "logo_url":"/images/partners/militaria.png", "link":"http://militaria.lodz.pl/"},
                                    {
                                        "name": "Krawka",
                                        "logo_url": "/images/partners/krawka.png",
                                        "link": "https://www.etsy.com/shop/Krawka?ref=hdr_shop_menu"
                                    },
                                    // {
                                    //     "name": "Medialab",
                                    //     "logo_url": "/images/partners/medialab.png",
                                    //     "link": "http://www.medialab.pl/"
                                    // },
                                ]
            },
            slots: {
                'slot-registration': {
                    from: '8:00',
                    to: '9:00'
                },
                'slot-hello-world': {
                    from: '9:00',
                    to: '9:15'
                },
                'slot-1': {
                    from: '9:15',
                    to: '10:00'
                },
                'slot-coffee-1': {
                    from: '10:00',
                    to: '10:20'
                },
                'slot-2': {
                    from: '10:20',
                    to: '11:05'
                },
                'slot-coffee-2': {
                    from: '11:05',
                    to: '11:20'
                },
                'slot-3': {
                    from: '11:20',
                    to: '12:05'
                },
                'slot-lunch': {
                    from: '12:05',
                    to: '13:00'
                },
                'slot-during-lunch': {
                    from: '12:05',
                    to: '12:50'
                },
                'slot-4': {
                    from: '13:00',
                    to: '13:45'
                },
                'slot-coffee-3': {
                    from: '13:45',
                    to: '14:00'
                },
                'slot-5': {
                    from: '14:00',
                    to: '14:45'
                },
                'slot-coffee-4': {
                    from: '14:45',
                    to: '15:00'
                },
                'slot-6': {
                    from: '15:00',
                    to: '15:45'
                },
                'slot-coffee-5': {
                    from: '15:45',
                    to: '16:00'
                },
                'slot-7': {
                    from: '16:00',
                    to: '16:45'
                },
                'slot-no-coffee-6': {
                    from: '16:45',
                    to: '16:50'
                },
                'slot-finally': {
                    from: '16:50',
                    to: '17:30  '
                },
                'slot-afterparty': {
                    from: '18:00',
                    to: '23:59'
                },

            },
            speakers: {

                // "speaker-enrique-lopez-manas": { //1
                //     "firstname": "Enrique",
                //     "lastname": "Lopez Manas",
                //     "bio_html": "bit.ly/EnriqueLopezManas GDE, Android and Mobile developer since 2007. Author of a few books and freelancer.",
                //     "www" : "http://lopez-manas.com",
                //     "twitter": "https://twitter.com/eenriquelopez",
                //     "facebook": "",
                //     "github": "https://github.com/kikoso",
                //     "linkedin": "https://www.linkedin.com/in/eenriquelopez/?ppe=1",
                //     "photo_url": "/images/speakers/enrique-lopez-manas.jpg"
                // },
                // "speaker-kamil-pyc": { //2
                //     "firstname": "Kamil",
                //     "lastname": "Pyć",
                //     "bio_html": "He is developing iOS applications for over 6 years. In work he strongly believes that everything can be automated and tested. In his free time he creates crazy projects during hackathons and travels around the world.",
                //     "www": "",
                //     "twitter": "https://twitter.com/KamilPyc",
                //     "facebook": "",
                //     "github": "https://github.com/PycKamil",
                //     "photo_url": "/images/speakers/kamil_pyc.jpg"
                // },
                // "speaker-bartosz-kraszewski": { //3
                //     "firstname": "Bartosz",
                //     "lastname": "Kraszewski",
                //     "bio_html": "Software Engineer specialised in Mobile Applications development. Focused on code quality and standards, experienced working in fast paced, product-oriented environment - Silicon Valley startups. Co-founder of Mobile Bialystok - local mobile technology enthusiasts group. Also an amateur squash player.",
                //     "www": "http://about.me/bartoszk",
                //     "twitter": "https://twitter.com/BartoszKraszew1",
                //     "facebook": "",
                //     "github": "https://github.com/bkraszewski",
                //     "linkedin": "https://www.linkedin.com/in/bkraszewski/",
                //     "photo_url": "/images/speakers/bartoszk_k.jpg"
                // },

                // "speaker-dmytro-khmelenko": { //4
                //     "firstname": "Dmytro",
                //     "lastname": " Khmelenko",
                //     "bio_html": "Software Engineer at Freeletics GmbH Area of interests: Functional Programming, Machine Learning, Internet of Things (IoT)",
                //     "www": "https://dkhmelenko.github.io/",
                //     "twitter": "",
                //     "facebook": "",
                //     "github": "https://github.com/dkhmelenko",
                //     "linkedin": "https://www.linkedin.com/in/dmytro-khmelenko-74401858/",
                //     "photo_url": "/images/speakers/dmytro_khmelenko.png"
                // },

                // "speaker-adam-zaczek": {
                //   "firstname": "Adam",
                //   "lastname": "Żaczek",
                //   "bio_html": "Adam is a front-end developer who would not stop talking about new technologies or skateboarding. He finds spending time on programming or reading science articles just as fun as jumping from stairs on a piece of wood with wheels attached (i.e. a skateboard). He once felt like his eyes were bleeding when seeing Javascript code. Nowadays JS is all he wants to code in. Adam has recently found out about GraphQL and he plays with it whenever he can. He is responsible for creating one of the best skateparks in Poland. He is the holder of \nskateboarding Guinness World Record for most skateboard backside shuvits in one minute. ",
                //   "photo_url": "/images/speakers/adam_z.jpg",
                //   "www": "https://www.netguru.co/about-us/team/adam-4828293800",
                //   "twitter": "https://twitter.com/ZaczekAdam",
                //   "github": "https://github.com/adamzaczek",
                //   "linkedin": "https://www.linkedin.com/in/adam-żaczek-a4a734110"
                // },

                    "krzysztof-kudrynski": {
                      "name": "Krzysztof",
                      "surname": "Kudrynski",
                      "bio_html": "08 AM - 05 PM: Passionate problem solver with 10+ years experience in software design, currently involved in projects related to self-driving cars in TomTom.\n05 PM - 10 PM: Loving husband and father of three \n10 PM - 01 AM: Enthusiast of technologies of the future including artificial intelligence, robotics and virtual reality. \n01 AM - 08 AM: Sleepwalker",
                      "webpage": "https://www.linkedin.com/in/krzysztof-kudrynski-b49a8344/",
                      "photo_url": "/images/speakers/krzysztof-kudrynski.jpg",
                      "twitter": "https://twitter.com/kriskudrynski",
                      "linkedin": "https://www.linkedin.com/in/krzysztof-kudrynski-b49a8344/"
                    },


                    "gautier-mechling": {
                      "name": "Gautier",
                      "surname": "Mechling",
                      "bio_html": "Software Developer",
                      "webpage": "http://nilhcem.com",
                      "photo_url": "/images/speakers/gautier-mechling.jpg",
                      "github": "https://github.com/Nilhcem",
                      "linkedin": "https://www.linkedin.com/in/gautier-mechling-9a0a7236/"

                  },

                    "bartosz-kraszewski": {
                      "name": "Bartosz",
                      "surname": "Kraszewski",
                      "bio_html": "Software Engineer specialised in Mobile Applications development. Focused on code quality and standards, experienced working in fast paced, product-oriented environment - Silicon Valley startups. \n\nCo-founder of Mobile Bialystok - local mobile technology enthusiasts group. Also an amateur squash player.",
                      "webpage": "http://about.me/bartoszk",
                      "photo_url": "/images/speakers/bartosz-kraszewski.jpg",
                      "twitter": "https://twitter.com/BartoszKraszew1",
                      "github": "https://github.com/bkraszewski",
                      "linkedin": "https://www.linkedin.com/in/bkraszewski/"

                  },

                    "tomasz-gebarowski": {
                      "name": "Tomasz",
                      "surname": "Gebarowski",
                      "bio_html": "Software Engineer, currently working as an iOS Architect at mBank. Working full time in Swift. Having background in C/C++ and distributed VoIP servers. Experienced in maintaining large and long term projects. Privately father of two kids and LEGO enthusiast.",
                      "webpage": "http://www.codica.pl",
                      "photo_url": "/images/speakers/tomasz-gebarowski.jpg",
                      "github": "https://github.com/tgebarowski",
                      "linkedin": "https://www.linkedin.com/in/tomaszgebarowski"

                  },

                    "enrique-lopez-manas": {
                      "name": "Enrique Lopez",
                      "surname": "Manas",
                      "bio_html": "bit.ly/EnriqueLopezManas \n\nGDE, Android and Mobile developer since 2007. Author of a few books and freelancer.",
                      "webpage": "http://lopez-manas.com",
                      "photo_url": "/images/speakers/enrique-lopez-manas.jpg",
                      "twitter": "https://twitter.com/eenriquelopez",
                      "github": "https://github.com/kikoso",
                      "linkedin": "https://www.linkedin.com/in/bit.ly/EnriqueLopezManas"

                  },

                    "enrique-aguilar-vargas": {
                      "name": "Enrique Aguilar",
                      "surname": "Vargas",
                      "bio_html": "First Latin America Xamarin MVP (Most Valuable Professional) and Microsoft MVP 2017 in Award Category Visual Studio and Development Technologies",
                      "webpage": "http://enriqueaguilarvargas.com",
                      "photo_url": "/images/speakers/mobilization-soldier.jpg",
                      "twitter": "https://twitter.com/enriqueaguilar",
                      "github": "https://github.com/enriqueaguilarvargas",
                      "linkedin": "https://www.linkedin.com/in/enriqueaguilarvargas/"

                  },

                    "roberto-orgiu": {
                      "name": "Roberto",
                      "surname": "Orgiu",
                      "bio_html": "Born in Italy in 1987, passionate for everything that switches on and off and particularly for handheld and wearable devices.\nI love to learn new languages, patterns and everything Android-related.\nLately I have helping with the DroidCon Italy event and the release of the related app.",
                      "photo_url": "/images/speakers/roberto-orgiu.png",
                      "twitter": "https://twitter.com/_tiwiz",
                      "github": "https://github.com/tiwiz"

                  },

                    "jorge-castillo": {
                      "name": "Jorge",
                      "surname": "Castillo",
                      "bio_html": "Jorge Castillo is an experienced Android Engineer from Spain, currently working at GoMore, an International product company from Copenhagen.\n\nHe is currently focused on promoting functional architectures for Android apps using Kotlin. He has talked about this topic on different events. He is also very active sharing Kotlin knowledge for the community on his Medium account:\n* https://medium.com/@JorgeCastilloPr/kotlin-purity-and-function-memoization-b12ab35d70a5\n* https://medium.com/@JorgeCastilloPr/tail-recursion-and-how-to-use-it-in-kotlin-97353993e17f\n* https://medium.com/@JorgeCastilloPr/kotlin-dependency-injection-with-the-reader-monad-7d52f94a482e\n\nHe will be attending Kotlinconf San Francisco 2017 with this same talk, and has also speaked in events like the Droidcon Greece 2016 at Thessaloniki, Mobilization Poland 2016, Codemotion Madrid 2016, Google I/O Extended Madrid 2016, or DevFest events from Jaén, Granada and Códoba.\n\n\n\n\n\n\n",
                      "webpage": "http://medium.com/@jorgecastillopr",
                      "photo_url": "/images/speakers/jorge-castillo.jpg",
                      "twitter": "https://twitter.com/jorgecastillopr",
                      "github": "https://github.com/jorgecastilloprz",
                      "linkedin": "https://www.linkedin.com/in/jorgecastilloprz"

                  },

                    "kamil-pyc": {
                      "name": "Kamil",
                      "surname": "Pyć",
                      "bio_html": "He is developing iOS applications for over 6 years. In work he strongly believes that everything can be automated and tested. In his free time he creates crazy projects during hackathons and travels around the world.",
                      "photo_url": "/images/speakers/kamil-pyc.jpg",
                      "github": "https://github.com/PycKamil"

                  },

                    "nitish-bhatt": {
                      "name": "Nitish",
                      "surname": "Bhatt",
                      "bio_html": "I am Android Developer at Fueled and was previously Software Engineer at Larsen \u0026 Toubro Technology Services. I am passionate about using technology to help better the lives of individuals.",
                      "photo_url": "/images/speakers/mobilization-soldier.jpg",
                      "twitter": "https://twitter.com/initishbhatt",
                      "github": "https://github.com/ https://github.com/codeofknaish",
                      "linkedin": "https://www.linkedin.com/in/iamnitishbhatt/"

                  },

                    "adam-zaczek": {
                      "name": "Adam",
                      "surname": "Żaczek",
                      "bio_html": "Adam is a front-end developer who would not stop talking about new technologies or skateboarding. He finds spending time on programming or reading science articles just as fun as jumping from stairs on a piece of wood with wheels attached (i.e. a skateboard). He once felt like his eyes were bleeding when seeing Javascript code. Nowadays JS is all he wants to code in. Adam has recently found out about GraphQL and he plays with it whenever he can. He is responsible for creating one of the best skateparks in Poland. He is the holder of \nskateboarding Guinness World Record for most skateboard backside shuvits in one minute. ",
                      "webpage": "https://www.netguru.co/about-us/team/adam-4828293800",
                      "photo_url": "/images/speakers/adam-zaczek.jpg",
                      "github": "https://github.com/adamzaczek",
                      "linkedin": "https://www.linkedin.com/in/adam-żaczek-a4a734110"

                  },

                    "stuart-kent": {
                      "name": "Stuart",
                      "surname": "Kent",
                      "bio_html": "Hello! I\u0027m a software developer with 3 years\u0027 mobile experience. I currently work at Detroit Labs creating native Android and iOS apps for national and international brands in the utilities, QSR, automotive, and pro audio industries. Before becoming a developer, I taught college and earned a Ph.D. in Applied Math. Likes: Enums. Dislikes: dogmatism.",
                      "webpage": "http://www.stkent.com",
                      "photo_url": "/images/speakers/stuart-kent.jpg",
                      "github": "https://github.com/stkent",
                      "linkedin": "https://www.linkedin.com/in/skentphd"

                  },

                    "miguel-quinones": {
                      "name": "Miguel",
                      "surname": "Quinones",
                      "bio_html": "Miguel is a control systems engineer who turned to iOS and Cocoa many years ago. Attracted by the simplicity and power of Apple’s ecosystem, he never looked back. He writes code for fun, generating profit as a nice side-effect. He\u0027s worked on apps with millions MAUs like Badoo, Bumble and currently, Peak Brain Training.",
                      "webpage": "https://miqu.me",
                      "photo_url": "/images/speakers/mobilization-soldier.jpg",
                      "github": "https://github.com/DarthMike",
                      "linkedin": "https://www.linkedin.com/in/miguelquinon"

                  },

                    "dmytro-khmelenko": {
                      "name": "Dmytro",
                      "surname": "Khmelenko",
                      "bio_html": "Software Engineer at Freeletics GmbH\nArea of interests: Functional Programming, Machine Learning, Internet of Things (IoT)",
                      "webpage": "https://dkhmelenko.github.io/",
                      "photo_url": "/images/speakers/dmytro_khmelenko.png",
                      "github": "https://github.com/dkhmelenko",
                      "linkedin": "https://www.linkedin.com/in/dmytro-khmelenko-74401858"

                  },

                    "aliaksandr-zhukovich": {
                      "name": "Aliaksandr",
                      "surname": "Zhukovich",
                      "bio_html": "Fan of Android development and testing. ",
                      "webpage": "http://alexzh.com/",
                      "photo_url": "/images/speakers/aliaksandr-zhukovich.jpg",
                      "twitter": "https://twitter.com/Alex_Zhukovich",
                      "github": "https://github.com/AlexZhukovich"

                  },

                    "raul-portales": {
                      "name": "Raul",
                      "surname": "Portales",
                      "bio_html": "Raul Portales is a Software Engineer working on mobile since the early times. He switched from Symbian to Android in 2009 (before Android versions had tasty names) and never looked back. He loves public speaking and has presented at several DroidCons, Game Developer Conferences and many GDGs.\n\nAfter working a lot on the front end - especially building games - Raul has developed a special interest in UX and UI.",
                      "webpage": "http://plattysoft.com",
                      "photo_url": "/images/speakers/mobilization-soldier.jpg",
                      "github": "https://github.com/plattysoft",
                      "linkedin": "https://www.linkedin.com/in/raul.portales"

                  },

                    "yuliya-kaleda": {
                      "name": "Yuliya",
                      "surname": "Kaleda",
                      "bio_html": "Yuliya is an Android developer at Jet.com, leading a team of 4 developers whose main focus is to build performant, scalable and cutting-edge Android projects. For the last few months Yuliya has been collaborating with Google to build the first multi-feature Instant App.",
                      "photo_url": "/images/speakers/mobilization-soldier.jpg",
                      "linkedin": "https://www.linkedin.com/in/yuliya-kaleda-b4525ab1"

                  },

                    "saket-narayan": {
                      "name": "Saket",
                      "surname": "Narayan",
                      "bio_html": "Saket is passionate about building personal, contextual software that is always aware of the user’s intentions. He started developing Android applications 4 years ago, when Ice Cream Sandwich was still the shiny new thing. He strives for perfection, especially when it comes to user experience. He will often tweak animations down to the millisecond to make them feel more natural.",
                      "webpage": "http://saket.me",
                      "photo_url": "/images/speakers/saket-narayan.jpg",
                      "twitter": "https://twitter.com/saketme",
                      "github": "https://github.com/saketme/"

                  },

                    "olmo-gallegos": {
                      "name": "Olmo",
                      "surname": "Gallegos",
                      "bio_html": "IT Engineer (University of Granada), Mobile Dev. since 2011. Open Source creator and contributor. Interested in Clean Code, good practices in programming, Patterns, Testing and sharing with the community.",
                      "photo_url": "/images/speakers/olmo-gallegos.jpg",
                      "twitter": "https://twitter.com/voghDev",
                      "github": "https://github.com/voghDev",
                      "linkedin": "https://www.linkedin.com/in/www.linkedin.com/in/voghdev"

                  },

                    "salomon-brys": {
                      "name": "Salomon",
                      "surname": "BRYS",
                      "bio_html": "Passionate about Kotlin for the last three years, I am the developper and maintainer of the Kodein library.\nDeeply rooted in the Open-Source philosophy, I am dedicated to making tools and libraries to make programming easier, safer, and more exciting.\nI also love boardgaming and flying small planes (which I have a license for).",
                      "webpage": "https://github.com/SalomonBrys/",
                      "photo_url": "/images/speakers/salomon-brys.jpg",
                      "github": "https://github.com/SalomonBrys",
                      "linkedin": "https://www.linkedin.com/in/salomonbrys"

                  },

                    "ellen-mey": {
                      "name": "Ellen",
                      "surname": "Mey",
                      "bio_html": "An educator turned developer, Ellen discovered her passion for programming while teaching her students how to code. In 2016, she took the plunge and decided to follow her passion by becoming an apprentice at Detroit Labs. Now an iOS developer, Ellen works on apps for a wide range of clients from financial institutions to the auto industry. Ellen often shares her laptop with her four cats. When she’s not in front of a computer Ellen can be found gallivanting the globe in search of new beers. \n",
                      "photo_url": "/images/speakers/ellen-mey.jpg",
                      "github": "https://github.com/eisforellen",
                      "linkedin": "https://www.linkedin.com/in/eisforellen"

                  },

                    "crystal-yan": {
                      "name": "Crystal",
                      "surname": "Yan",
                      "bio_html": "Crystal Yan is a product and design leader with international experience in emerging markets, committed to transforming organizations to be more customer centric, and with experience using behavioral design and artificial intelligence to create meaningful user experiences.\n\nCurrently, Crystal is a freelance product consultant and experience researcher/designer for clients in the technology, nonprofit, healthcare, education and travel industries. Clients include MyHealthEd\u0027s Real Talk, a storytelling-driven health education app for teens, and Rise, an international grassroots movement to pass civil rights legislation for survivors of sexual assault in the US, Canada, and Japan. Crystal also is a Product Manager and Design Lead at FiscalNote, an enterprise SaaS startup transforming how organizations interact with government. Crystal holds a degree in Economics from Amherst College and has worked in the US, India, China, and Cambodia.",
                      "webpage": "http://crystalcyan.github.io/",
                      "photo_url": "/images/speakers/crystal-yan.jpg",
                      "twitter": "https://twitter.com/crystalcy",
                      "github": "http://crystalcyan.github.io/",
                      "linkedin": "https://www.linkedin.com/in/crystalcyan/"

                  },

                    "sam-bellen": {
                      "name": "Sam",
                      "surname": "Bellen",
                      "bio_html": "I\u0027m a front-end developer at madewithlove, a small app development company based in Belgium, but with employees all over the world. \n\nFor my day to day job I\u0027m in charge of creating challenging user interfaces and make applications nice to work with. \nAfter office hours I like to play around with the web-audio API, and other \"exotic\" browser APIs. One of my side projects is a library to add audio effects to an audio input using JavaScript.\n\nWhen I\u0027m not behind a computer, you can find me playing the guitar, having a beer at a concert, or trying to snap the next perfect picture.",
                      "webpage": "https://blog.sambego.be/",
                      "photo_url": "/images/speakers/sam-bellen.jpg",
                      "twitter": "https://twitter.com/sambego",
                      "github": "https://github.com/sambego"

                  },

                    "ryszard-sulkowski": {
                      "name": "Ryszard",
                      "surname": "Sułkowski",
                      "bio_html": "Android Developer for several years with short stop on Spring/GWT and web development. Enthusiast of new technologies and languages. I\u0027m programming in Java and Kotlin and sometimes in Groovy. Personally, I\u0027m looking forward to see a grow and explosion of VR related games and technologies.",
                      "photo_url": "/images/speakers/ryszard-sulkowski.jpg"

                  },

                    "travis-himes": {
                      "name": "Travis",
                      "surname": "Himes",
                      "bio_html": "Travis Himes is a Senior Software Engineer specializing in Android development with more than 12 years of experience. Travis has given talks at the Philadelphia Android Alliance (Google Developer Group), and has taught fellow developers and developers-in-training the basics of Android development. Travis is a fan of keyboard shortcuts, and really anything that saves time and increases repeatability. If there is an opportunity for trying or learning something new, he\u0027s likely to be involved.",
                      "photo_url": "/images/speakers/travis-himes.jpg",
                      "twitter": "https://twitter.com/travis_himes",
                      "github": "https://github.com/thimes",
                      "linkedin": "https://www.linkedin.com/in/travishimes/"

                  },

                    "rowdy-rabouw": {
                      "name": "Rowdy",
                      "surname": "Rabouw",
                      "bio_html": "Rowdy Rabouw is a webdeveloper with over 20 years’ experience in HTML, CSS, JavaScript and PHP.\n\nHe\u0027s been working as a freelancer since 2004 and has been employed by the Dutch insurance company Nationale-Nederlanden since 1992. Currently he is working on various JavaScript and NativeScript projects as Senior Engineer. \n\nRowdy started developing NativeScript apps with Angular in 2016 and running the NativeScript NL website; a curated list of courses, tools and tips to help people code awesome apps with NativeScript. \n\nSince 2017 he is a Telerik Developer Expert for NativeScript and spreading his love for {N}.",
                      "webpage": "http://double-r.nl / nativescript.nl",
                      "photo_url": "/images/speakers/rowdy-rabouw.jpg",
                      "github": "https://github.com/nativescriptnl",
                      "linkedin": "https://www.linkedin.com/in/rowdyrabouw"

                  },

                    "piotr-tuszynski": {
                      "name": "Piotr",
                      "surname": "Tuszyński",
                      "bio_html": "Peter is a developer turned entrepreneur turned CTO. He currently works at inFullMobile delivering delightful mobile products.",
                      "photo_url": "/images/speakers/saket-narayan.jpg",
                      "webpage": "http://dusker.me",
                      "github": "https://github.com/dusker"

                  },

                    "sergi-martinez": {
                      "name": "Sergi",
                      "surname": "Martinez",
                      "bio_html": "Working as Android dev at Schibsted and Google Developer Expert for Android. He loves to share, teach, discuss, learn with the community",
                      "webpage": "http://sergiandreplace.com",
                      "photo_url": "/images/speakers/saket-narayan.jpg",
                      "github": "https://github.com/sergiandreplace",
                      "linkedin": "https://www.linkedin.com/in/sergiandreplace"

                  },

                    "dhiwakar-mani": {
                      "name": "Dhiwakar",
                      "surname": "Mani",
                      "bio_html": "Sr Mobile Application Developer @ Title Source, Detroit. I have been developing and architecting native Android apps with passion for last 8+ years. I am passionate about technology, mobile and helping people become their best. I decided the only way to race up with technology and potential of becoming an effective programmer can only be achieved by taking Computer Science as my undergraduate specialization. I gained in-depth knowledge in Java and Android and this laid the base for a strong foundation for my liking towards Mobile Tech space. Completed my MS in Software @ San Jose State. Started my Android world back at 2008 by implementing Android-based Mobile Social Networking Application Platform (Multiplayer Gaming Platform). ",
                      "photo_url": "/images/speakers/saket-narayan.jpg",
                      "twitter": "https://twitter.com/dhiwakarmani"

                  },

                    "cristian-serje": {
                      "name": "Cristian",
                      "surname": "Serje",
                      "bio_html": "Cristian is a Software Engineer, with experience getting his hands dirty with Android and the backend architecture. Currently working at Check24 GmbH as a Senior Android Developer, having a passion for develop productive and well architectured code. When not coding crazy ideas in his projects you might find him playing guitar or doing sports.",
                      "photo_url": "/images/speakers/cristian-serje.jpg",
                      "github": "https://github.com/serjec",
                      "linkedin": "https://www.linkedin.com/in/serjec"

                  },

                    "marcin-moskala": {
                      "name": "Marcin",
                      "surname": "Moskała",
                      "bio_html": " Kotlin developer and passionate for over 2 years. Making open-source libraries (ActivityStarter, PreferenceHolder, KotlinDiscreteMathToolkit) and applications both for GameKit and as a freelancer. Also writing articles for programming magazines and making speeches on different events. ",
                      "photo_url": "/images/speakers/saket-narayan.jpg",
                      "webpage": "http://marcinmoskala.com/",
                      "github": "https://github.com/MarcinMoskala"

                  },

                    "marcus-finley": {
                      "name": "Marcus",
                      "surname": "Finley",
                      "photo_url": "/images/speakers/saket-narayan.jpg",
                      "bio_html": "Marcus Finley is the CEO and Founder of FIN Digital, a full service digital application and innovation development firm. Marcus graduated from Florida State University where he majored in Mechanical Engineering and Public Administration"

                  },

                    "leandro-favarin": {
                      "name": "Leandro",
                      "surname": "Favarin",
                      "bio_html": "Leandro has been working as a software engineer for mobile devices and portable technology for 7+ years. His focus is on the Android platform and everything around it.",
                      "webpage": "http://leandrofavarin.com",
                      "photo_url": "/images/speakers/leandro-favarin.jpg",
                      "twitter": "https://twitter.com/leandrofavarin",
                      "github": "https://github.com/leandrofavarin",
                      "linkedin": "https://www.linkedin.com/in/leandrofavarin"

                  },

                    "vasiliy-zukanov": {
                      "name": "Vasiliy",
                      "surname": "Zukanov",
                      "bio_html": "Professional software engineer and blogger (www.techyourchance.com)",
                      "webpage": "http://www.techyourchance.com",
                      "photo_url": "/images/speakers/vasiliy-zukanov.jpg",
                      "twitter": "https://twitter.com/VasiliyZukanov"

                  },



                    "shem-magnezi": {
                      "name": "Shem",
                      "surname": "Magnezi",
                      "bio_html": "Shem has almost a decade of experience in developing in various domains: client and server side, real-time systems, Big Data and mobile. In the last 5 years he has been playing with mobile and in the past year he\u0027s been trying to figure out what it means to be a web developer. He was the first employee in MyRoll (acquired by AVG), where he designed and developed the platform for the app in both iOS and Android. Currently, Shem is doing what he loves at WeWork.",
                      "webpage": "http://shem8.github.com",
                      "photo_url": "/images/speakers/shemag8.png",
                      "twitter": "https://twitter.com/shemag8"

                  },
                      "speaker-tbd": { //last
                                          "firstname": "And ",
                                          "lastname": "more",
                                          "bio_html": "<a href='https://bit.ly/mobilization7-c4p'>Mobilize for mobilization!</a>",
                                          "www" : "",
                                          "twitter": "",
                                          "facebook": "",
                                          "github": "",
                                          "linkedin": "",
                                          "photo_url": "/images/speakers/mobilization-soldier.jpg"
                                      },
            },
            talks: {
                "talk-tbd": {
                    "title": "TBD",
                    "description_html": "TBD",
                    "speakers_keys": [
                         "speaker-tbd"
                    ],
                    "language": "EN"
                },
                "talk-att-video-opt": {//1
                    "title": "Optimizing Android App performance with AT&T Video Optimizer",
                    "description_html": "App performance matters. To achieve greatness we need to track and measure what we can't see with naked eye. I my talk, Ill introduce you to AT&T performance optimizer. Are you sure your Android app will pass strict security and performance tests?",
                    "speakers_keys": [
                        "speaker-bartosz-kraszewski"
                    ],
                    "language": "PL"
                },

                "talk-tensorflow": {//2
                                    "title": "Tensorflow for Mobile Developers",
                                    "description_html": "here is a lot of Hype with ML and AI lately, and TensorFlow is the framework of choice from Google. But as a Mobile Developer you might have asked yourself, how can I benefit from it? In this talk, you will learn your first steps into the fascinating ML world for mobile",
                                    "speakers_keys": [
                                        "speaker-enrique-lopez-manas"
                                    ],
                                    "language": "EN"
                                },

                "talk-cebulowe-testy": {//3
                    "title": "Cebulowe testy na iOS",
                    "description_html": "Jesteście ciekawi jak testujemy w Allegro aplikacje mobilne na system iOS? Począwszy od momentu otworzenia Xcode’a, poprzez stworzenie interfejsu użytkownika, skończywszy na finalnej implementacji, robimy to inaczej i za pomocą różnych narzędzi. Każdy z etapów rozwoju aplikacji, pozwala na sprawdzenie jej pod innym kątem. Poznajcie naszą historię na temat kolejnych warstw testów: jednostkowych, integracyjnych, snapshotowych i funkcjonalnych. Historia oparta na faktach, opowiedziana ze strony testera i dewelopera.",
                    "speakers_keys": [
                        "speaker-kamil-pyc"
                    ],
                    "language": "PL"
                },
                "talk-template": {//4
                    "title": "Migration to RxJava2: obstacles and solutions",
                    "description_html": "I would like to show experience and results of migrating a payment module from RxJava 1.x to RxJava 2.x",
                    "speakers_keys": [
                        "speaker-dmytro-khmelenko"
                    ],
                    "language": "EN"
                },


            },
            breaks: {
                'break-registration': {
                    title: 'Registration',
                    description_html: 'If you do not want to miss any presentation please register between 7:30-9:10. However, registration will be opened all day!'
                },
                'break-hello-world': {
                    title: 'Hello World',
                    description_html: 'This is couple of words about Mobilization. For community by community.'
                },
                'break-coffee': {
                    title: 'Coffee Break',
                    description_html: ''
                },
                'break-lunch': {
                    title: 'Lunch Break',
                    description_html: 'VIPs (Speakers, Sponsors) have lunch in Congresowa Restaurant on base floor.<br>Attendees will have soldiers\' soup outside the building!',
                },
                'break-no-coffee': {
                    title: 'No Coffee Break',
                    description_html: ''
                },
                'break-finally': {
                    title: 'Finally meeting',
                    description_html: 'Time to give thanks to all the sponsors and the organizer\'s team.'
                },
                'break-afterparty': {
                    title: 'AfterParty in All Star Klubokawiarnia',
                    description_html: 'Free pizza and beer and follow up talks.<br>15min from conference venue.<br>Piotrkowska 217 Łódź'
                }
            },
            venues: {
                "venue-rndity": {
                    "title": "Rndity"
                },
                "venue-ericpol": {
                    "title": "Ericpol"
                },
                "venue-mobica": {
                    "title": "Mobica"
                },
                "venue-seqr": {
                    "title": "SEQR"
                },
                "venue-tomtom": {
                    "title": "TomTom"
                }
            },
            schedule: {
                "slot-registration": {"break_key": "break-registration"},
                "slot-hello-world": {"break_key": "break-hello-world"},
                "slot-1": {
                    "venue-rndity": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-ericpol": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-tomtom": {
                        "talk_key": "talk-tbd"
                    }
                },
                "slot-coffee-1": {"break_key": "break-coffee"},
                "slot-2": {
                    "venue-rndity": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-ericpol": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-tomtom": {
                        "talk_key": "talk-tbd"
                    }
                },
                "slot-coffee-2": {"break_key": "break-coffee"},
                "slot-3": {
                    "venue-rndity": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-ericpol": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-tomtom": {
                        "talk_key": "talk-tbd"
                    }
                },
                "slot-lunch": {"break_key": "break-lunch"},
                "slot-during-lunch": {
                    "venue-tomtom": {
                        "talk_key": "talk-tbd"
                    }
                },
                "slot-4": {
                    "venue-rndity": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-ericpol": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-tomtom": {
                        "talk_key": "talk-tbd"
                    }
                },
                "slot-coffee-3": {"break_key": "break-coffee"},
                "slot-5": {
                    "venue-rndity": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-ericpol": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-tomtom": {
                        "talk_key": "talk-tbd"
                    }
                },
                "slot-coffee-4": {"break_key": "break-coffee"},
                "slot-6": {
                    "venue-rndity": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-ericpol": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-tomtom": {
                        "talk_key": "talk-tbd"
                    }
                },
                "slot-coffee-5": {"break_key": "break-coffee"},
                "slot-7": {
                    "venue-rndity": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-ericpol": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-tbd"
                    },
                    "venue-tomtom": {
                        "talk_key": "talk-tbd"
                    }
                },
                "slot-no-coffee-6": {"break_key": "break-no-coffee"},
                "slot-finally": {"break_key": "break-finally"},
                "slot-afterparty": {"break_key": "break-afterparty"}
            },
            volunteers: {
                //1
                "volunteer-marcin-iwanicki": {
                    "firstname": "Marcin",
                    "lastname": "Iwanicki",
                    "bio_html": "Created docpad generator for mobilization webpage. Deals with iOS talks.",
                    "www": "",
                    "twitter": "https://twitter.com/marciniwanicki",
                    "photo_url": "/images/team/marcin-iwanicki.jpeg"
                },
                //2
                "volunteer-marek-defecinski": {
                    "firstname": "Marek",
                    "lastname": "Defeciński",
                    "bio_html": "Coordinates all things with Mobilization. Seeks for speakers. The brain of Mobilization conference.",
                    "www": "",
                    "twitter": "https://twitter.com/marekdef",
                    "photo_url": "/images/team/marek-defecinski.jpeg"
                },
                //3
                "volunteer-karolina-draus": {
                    "firstname": "Karolina",
                    "lastname": "Draus",
                    "bio_html": "Coordinates promotion and contact with partners. Content Manager - Facebook & Twitter. Talented copywriter.",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/karolina-draus.jpeg"
                },
                //4
                "volunteer-mariusz-saramak": {
                    "firstname": "Mariusz",
                    "lastname": "Saramak",
                    "bio_html": "If Marek is the brain, he is the heart of Mobilization. Full of crazy ideas - the first one was this conference.",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/mariusz-saramak.jpeg"
                },
                //5
                "volunteer-tomasz-zielinski": {
                    "firstname": "Tomasz",
                    "lastname": "Zieliński",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/tomasz-zielinski.jpeg"
                },
                //6
                "volunteer-beata-nagorniewicz": {
                    "firstname": "Beata",
                    "lastname": "Nagórniewicz",
                    "bio_html": "Responsible for AfterParty :)",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/beata-nagorniewicz.jpeg"
                },
                //7
                "volunteer-cezary-draus": {
                    "firstname": "Cezary",
                    "lastname": "Draus",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/cezary-draus.jpeg"
                },
                //8
                "volunteer-agnieszka-saramak": {
                    "firstname": "Agnieszka",
                    "lastname": "Saramak",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/agnieszka-saramak.jpeg"
                },
                //9
                "volunteer-rafal-lenarczyk": {
                    "firstname": "Rafał",
                    "lastname": "Lenarczyk",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/rafal-lenarczyk.jpeg"
                },
                //10
                "volunteer-anna-defecinska": {
                    "firstname": "Anna",
                    "lastname": "Defecińska",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/anna-defecinska.jpeg"
                },
                //11
                "volunteer-andrzej-jozwiak": {
                    "firstname": "Andrzej",
                    "lastname": "Jóźwiak",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/andrzej-jozwiak.jpeg"
                },
                //12
                "volunteer-krzysztof-gutowski": {
                    "firstname": "Krzysztof",
                    "lastname": "Gutowski",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/krzysztof-gutowski.jpeg"
                },
                //13
                "volunteer-krystian-laskowski": {
                    "firstname": "Krystian",
                    "lastname": "Laskowski",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/krystian-laskowski.jpeg"
                },
            },
        },
        getPreparedTitle: function () {
            if (this.document.title) {
                return this.document.title + " | " + this.site.title;
            } else {
                return this.site.title;
            }
        },
        getPreparedDescription: function () {
            return this.document.description || this.site.description;
        },
        getPreparedKeywords: function () {
            return this.site.keywords.concat(this.document.keywords || []).join(', ');
        },
        getHtmlLangImg: function (_talk) {
            if (_talk.language == "EN") {
                return "<img src=\"/assets/img/page/lang_en.png\" alt=\"English\" class=\"language\" />";
            }
            if (_talk.language == "PL") {
                return "<img src=\"/assets/img/page/lang_pl.png\" alt=\"Polish\" class=\"language\" />";
            }
            return "";
        }
    },
    collections: {
        posts: function () {
            return this.getCollection('documents').findAllLive({
                relativeOutDirPath: 'posts'
            });
        }
    },
    environments: {
        development: {
            templateData: {
                site: {
                    url: false
                }
            }
        }
    },
    events: {
        serverExtend: function (opts) {
            var docpad, latestConfig, newUrl, oldUrls, server;
            server = opts.server;
            docpad = this.docpad;
            latestConfig = docpad.getConfig();
            oldUrls = latestConfig.templateData.site.oldUrls || [];
            newUrl = latestConfig.templateData.site.url;
            return server.use(function (req, res, next) {
                var ref;
                if (ref = req.headers.host, indexOf.call(oldUrls, ref) >= 0) {
                    return res.redirect(newUrl + req.url, 301);
                } else {
                    return next();
                }
            });
        }
    }
};

module.exports = docpadConfig;


// ---
// generated by coffee-script 1.9.2
