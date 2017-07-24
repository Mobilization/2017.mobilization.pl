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
                    {"name": "Rndity", "logo_url": "/images/sponsors/rndity.png", "link": "http://rndity.com/"},
                ],
                platinum: [
                    {
                        "name": "Cybercom",
                        "logo_url": "/images/sponsors/cybercom.png",
                        "link": "http://www.cybercom.com/pl/Poland/"
                    },
                    {"name": "Ericpol", "logo_url": "/images/sponsors/ericpol.jpeg", "link": "http://www.ericpol.pl"},
                    {
                        "name": "Harman",
                        "logo_url": "/images/sponsors/harman.jpeg",
                        "link": "http://services.harman.com/"
                    },
                    {
                        "name": "Mobica",
                        "logo_url": "/images/sponsors/mobica.png",
                        "description_html": "<p>Mobica provides high-end software development and integration services for consumer electronics manufacturers, operators, application vendors and platform providers. We work on all mainstream mobile platforms and operating systems and can work on virtually any component of a device: from embedded systems and device drivers, core multimedia components and middleware, through to innovative applications/UI design and connectivity solutions.</p><p>We have grown a world-class team of architects, project managers and software engineers based in our UK and Poland development centres, enabling us to provide consultancy services across the software and product lifecycle from initial concept definition and design, through to implementation and testing.</p><p>Mobica adds value to our customers through a combination of flexible consultancy services, the highest levels of technical expertise, and the creation of innovative, technically optimised software component design.</p><p>Mobica are listed in The Sunday Times Tech Track 100 as the 4th fastest growing private technology company in the UK in 2009. See: <a href='http://www.fasttrack.co.uk/fasttrack2002/bin/techreport.pdf'>http://www.fasttrack.co.uk/fasttrack2002/bin/techreport.pdf</a></p><p>Mobica is hiring and looking for talented engineers! Check our current job offers at <a href='http://www.mobica.com/careers'>http://www.mobica.com/careers</a></p><p>&nbsp;</p>"
                    },
                    {
                        "name": "Oberthur Technologies R&D Poland",
                        "logo_url": "/images/sponsors/oberthur.png",
                        "link": "http://www.oberthur.com/"
                    },
                    {"name": "Seqr", "logo_url": "/images/sponsors/seqr.png", "link": "https://www.seqr.com/int/"},
                    {
                        "name": "TomTom",
                        "logo_url": "/images/sponsors/tomtom-on-white.png",
                        "link": "http://www.tomtom.com/pl_pl/"
                    },
                ],
                gold: [
                    {
                        "name": "Appyourself",
                        "logo_url": "/images/sponsors/appyourself.png",
                        "link": "http://www.appyourself.net/"
                    },
                    {
                        "name": "Ceri International",
                        "logo_url": "/images/sponsors/ceri.png",
                        "link": "http://www.ceri.pl/"
                    },
                    {"name": "Intive", "logo_url": "/images/sponsors/intive.png", "link": "https://www.intive.com/en"},
                    {"name": "Pracuj.pl", "logo_url": "/images/sponsors/pracujpl.png", "link": "http://www.pracuj.pl/"},
                ],
                silver: [
                    {
                        "name": "ITKontrakt",
                        "logo_url": "/images/sponsors/itkontrakt.png",
                        "link": "https://www.itkontrakt.pl/"
                    },
                    {"name": "Sii", "logo_url": "/images/sponsors/sii.png", "link": "http://sii.pl/oddzialy/lodz/"},
                ],
                copper: [
                    {
                        "name": "Jetbrains",
                        "logo_url": "/images/sponsors/jetbrains.png",
                        "link": "http://www.jetbrains.com/"
                    }
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
//                    {
//                        "name": "Droidcon Poland",
//                        "logo_url": "/images/partners/droidcon.png",
//                        "link": "http://droidcon.pl/"
//                    },
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
                "speaker-tbd": { //0
                    "firstname": "TBD",
                    "lastname": "TBD",
                    "bio_html": "",
                    "www" : "",
                    "twitter": "",
                    "facebook": "",
                    "github": "",
                    "linkedin": "",
                    "photo_url": "/images/speakers/mobilization-soldier.jpg"
                },
                "speaker-enrique-lopez-manas": { //1
                    "firstname": "Enrique",
                    "lastname": "Lopez Manas",
                    "bio_html": "bit.ly/EnriqueLopezManas GDE, Android and Mobile developer since 2007. Author of a few books and freelancer.",
                    "www" : "http://lopez-manas.com",
                    "twitter": "https://twitter.com/eenriquelopez",
                    "facebook": "",
                    "github": "https://github.com/kikoso",
                    "linkedin": "https://www.linkedin.com/in/eenriquelopez/?ppe=1",
                    "photo_url": "/images/speakers/enrique-lopez-manas.jpg"
                },
                "speaker-kamil-pyc": { //2
                    "firstname": "Kamil",
                    "lastname": "Pyć",
                    "bio_html": "He is developing iOS applications for over 6 years. In work he strongly believes that everything can be automated and tested. In his free time he creates crazy projects during hackathons and travels around the world.",
                    "www": "",
                    "twitter": "https://twitter.com/KamilPyc",
                    "facebook": "",
                    "github": "https://github.com/PycKamil",
                    "photo_url": "/images/speakers/kamil_pyc.jpg"
                },
                "speaker-bartosz-kraszewski": { //3
                    "firstname": "Bartosz",
                    "lastname": "Kraszewski",
                    "bio_html": "Software Engineer specialised in Mobile Applications development. Focused on code quality and standards, experienced working in fast paced, product-oriented environment - Silicon Valley startups. Co-founder of Mobile Bialystok - local mobile technology enthusiasts group. Also an amateur squash player.",
                    "www": "http://about.me/bartoszk",
                    "twitter": "https://twitter.com/BartoszKraszew1",
                    "facebook": "",
                    "github": "https://github.com/bkraszewski",
                    "linkedin": "https://www.linkedin.com/in/bkraszewski/",
                    "photo_url": "/images/speakers/bartosz_k.jpg"
                },

                "speaker-dmytro-khmelenko": { //4
                    "firstname": "Dmytro",
                    "lastname": " Khmelenko",
                    "bio_html": "Software Engineer at Freeletics GmbH Area of interests: Functional Programming, Machine Learning, Internet of Things (IoT)",
                    "www": "https://dkhmelenko.github.io/",
                    "twitter": "",
                    "facebook": "",
                    "github": "https://github.com/dkhmelenko",
                    "linkedin": "https://www.linkedin.com/in/dmytro-khmelenko-74401858/",
                    "photo_url": "/images/speakers/dmytro_khmelenko.png"
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
