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
                "agenda": false,
                "talks": true,
                "speakers": true,
                "volunteers": false
            },
            event: {
                title: 'Mobilization 2017',
                location: {
                    lat: 51.7505458,
                    lng: 19.4501351,
                    place: '(Nowa) Hala Expo',
                    street: 'al. Politechniki 4',
                    city: 'Łódź',
                    zip: '93-590',
                    country: 'Polska'
                },
                data: '21nd Oct 2017',
                time: '08:00-18:00'
            },
            sponsors: {
                diamond: [
                    {
                        "name": "TomTom",
                        "logo_url": "/images/sponsors/tomtom-on-white2.png",
                        "link": "https://www.tomtom.com/pl_pl/"
                    },
                ],
                platinum: [
                    {"name": "HTDevelopers", "logo_url": "/images/sponsors/htd.png", "link": "http://htdevelopers.com"},
                    {
                        "name": "Mobica",
                        "logo_url": "/images/sponsors/mobica.png",
                        "link": "http://www.mobica.com/"
                    },
                    {
                        "name": "Rndity",
                        "logo_url": "/images/sponsors/rndity.png",
                        "link": "http://rndity.com/"
                    },
                    {"name": "Seqr", "logo_url": "/images/sponsors/seqr.png", "link": "https://www.seqr.com/int/"},
                ],
                gold: [
                    {"name": "Comarch", "logo_url": "/images/sponsors/comarch.png", "link": "http://www.comarch.pl/"},
                    {
                        "name": "Exaco",
                        "logo_url": "/images/sponsors/exaco.png",
                        "link": "http://exaco.pl"
                    },
                    {
                        "name": "Harman",
                        "logo_url": "/images/sponsors/harman.jpeg",
                        "link": "http://services.harman.com/"
                    },
                    {"name": "Intive", "logo_url": "/images/sponsors/intive.png", "link": "https://www.intive.com/en"},
                    {
                        "name": "Oberthur Technologies R&D Poland",
                        "logo_url": "/images/sponsors/oberthur.png",
                        "link": "http://www.oberthur.com/"
                    },
                ],
                silver: [
                    {
                        "name": "Appyourself",
                        "logo_url": "/images/sponsors/appyourself.png",
                        "link": "https://appyourself.net/en/"
                    },
                    {
                        "name": "Billennium",
                        "logo_url": "/images/sponsors/billennium.png",
                        "link": "http://billennium.pl/oddzialy/lodz/"
                    },
                    {
                        "name": "CircleK Europe",
                        "logo_url": "/images/sponsors/circlek.png",
                        "link": "https://circlek.pl"
                    },
                    {
                        "name": "Cybercom",
                        "logo_url": "/images/sponsors/cybercom.png",
                        "link": "http://www.cybercom.com/pl/Poland/"
                    },

                ],
                "after-party": [
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
                        description_html: 'Łódź JUG is an association of Java developers, architects and enthusiasts of Java technology from Łódź, the city in the centre of Poland. The aim of the association is to promote exchange of knowledge and competence growth among Java professionals in the Łódź area. The main activity towards this goal is organisation of IT-related seminars and meetings that usually involve a presentation about chosen topic and then follow-up discussion. LJUG cooperates with other JUGs in Poland, like Polish JUG and Warsaw JUG. We encourage everyone interested in Java technologies to join and start participating in our expertise-sharing activities! Java User Group Łódź is main organizer of Mobilization event since 2011'
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
                   {
                       "name": "Let Swift",
                       "logo_url": "/images/partners/letswift.png",
                       "link": "https://www.facebook.com/letswiftwroclaw/"
                   },
                    {
                        "name": "Firmao",
                        "logo_url": "/images/partners/firmao.png",
                        "link": "https://firmao.pl"
                    },
                    {
                        "name": "Challenge Rocket",
                        "logo_url": "/images/partners/challenge-rocket.png",
                        "link": "http://ChallengeRocket.com"
                    },
                    {
                        "name": "Zwinna Łódź",
                        "logo_url": "/images/partners/zwinna_lodz.jpg",
                        "link": "http://zwinnalodz.eu/"
                    },
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
                        "name": "GDG Rzeszów",
                        "logo_url": "/images/partners/gdg-rzeszow.png",
                        "link": "http://devfest.pl/"
                    },
                    {
                        "name": "Stacja IT",
                        "logo_url": "/images/partners/logo_stacja_it.png",
                        "link": "http://stacja.it/"
                    },
                    {
                        "name": "Realm.io",
                        "logo_url": "/images/partners/realm.png",
                        "link": "http://realm.io/"
                    },
                    {
                        "name": "Droidcon Poland",
                        "logo_url": "/images/partners/droidcon.png",
                        "link": "http://droidcon.pl/"
                    },
                    {
                        "name": "Innovation Amazon",
                        "logo_url": "/images/partners/innovationamazon.png",
                        "link": "https://innovation-amazon.com/"
                    },
                    {
                        "name": "DevCamp",
                        "logo_url": "/images/partners/devcamp.png",
                        "link": "http://devcamp.nextapps.pl/"
                    },
                ],
                media: [

                    // {"name":"AK74","logo_url":"/images/partners/ak74.png","description_html":"Cześć! Nazywam się Artur Kurasiński i jestem autorem tego bloga. Na co dzień zajmuję się Fokusem. Jestem współtwórcą cyklu spotkań dla przedsiębiorców Aula Polska oraz konkursu Aulery. Jako vloger prowadzę program „Seria z AK74″. Czasami udzielam się jako mentor na imprezach z cyklu Seedcamp, Labstar, DemoCamp, Intel Challenge, i StartupFest. Więcej znajdziesz tutaj: LinkedIn.com czy Facebooku lub Twitterze Chcesz się ze mną skontaktować?: Wyślij maila na adres: artur@revolver.pl"},
                    // {"name":"Marketing Mobilny","logo_url":"/images/partners/marketing-mobilny.jpg","link":"http://marketingmobilny.pl"},
                    // {"name":"Dworzynska","logo_url":"/images/partners/dworzynska.png","link":"http://dworzynska.com"},
                    // {"name":"Praca IT","logo_url":"/images/partners/pracait.png","link":"http://pracait.com"},
                    // {"name":"Software Developer's Journal","logo_url":"/images/partners/sdj.png","link":"http://sdjournal.pl"},
                    // {"name":"GoMobi","logo_url":"/images/partners/gomobi.jpg","link":"http://gomobi.pl"},
                    {
                        "name": "Programista Magazine",
                        "logo_url": "/images/partners/programistamag.png",
                        "link": "http://programistamag.pl"
                    },
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
                    to: '10:15'
                },
                'slot-2': {
                    from: '10:15',
                    to: '11:00'
                },
                'slot-coffee-2': {
                    from: '11:00',
                    to: '11:15'
                },
                'slot-3': {
                    from: '11:15',
                    to: '12:00'
                },
                'slot-lunch': {
                    from: '12:00',
                    to: '13:00'
                },
                'slot-4': {
                    from: '13:00',
                    to: '13:45'
                },
                'slot-coffee-4': {
                    from: '13:45',
                    to: '14:00'
                },
                'slot-5': {
                    from: '14:00',
                    to: '14:45'
                },
                'slot-coffee-5': {
                    from: '14:45',
                    to: '15:00'
                },
                'slot-6': {
                    from: '15:00',
                    to: '15:45'
                },
                'slot-coffee-6': {
                    from: '15:45',
                    to: '16:00'
                },
                'slot-7': {
                    from: '16:00',
                    to: '16:45'
                },
                'slot-coffee-7': {
                    from: '16:45',
                    to: '17:00'
                },
                'slot-8': {
                    from: '17:00',
                    to: '17:45'
                },
                'slot-no-coffee-8': {
                    from: '17:45',
                    to: '17:50'
                },
                'slot-finally': {
                    from: '17:50',
                    to: '18:10  '
                },
                'slot-afterparty': {
                    from: '18:30',
                    to: '23:59'
                },
            },
            speakers: {
                "speaker-enrique-lopez-manas": {//1
                    "firstname": "Enrique",
                    "lastname": "Lopez Manas",
                    "bio_html": "<a href='bit.ly/EnriqueLopezManas'>EnriqueLopezManas</a> GDE, Android and Mobile developer since 2007. Author of a few books and freelancer.",
                    "www": "http://lopez-manas.com",
                    "twitter": "https://twitter.com/eenriquelopez",
                    "facebook": "",
                    "github": "https://github.com/kikoso",
                    "linkedin": "https://www.linkedin.com/in/eenriquelopez/?ppe=1",
                    "photo_url": "/images/speakers/enrique-lopez-manas.jpg"
                },
                "speaker-aleksander-grzyb": {//2
                    "firstname": "Aleksander",
                    "lastname": "Grzyb",
                    // "bio_html":"I am software engineer. Right now I live in Vancouver, Canada and I am working at <a href='https://www.clio.com/'>Clio</a> on <a href='https://itunes.apple.com/ca/app/clio/id686777370?mt=8'>Clio iOS application</a>. Previously I worked at <a href='https://allegro.pl'>Allegro</a> on <a href='https://itunes.apple.com/pl/app/allegro/id305659772?mt=8'>Allegro iOS application</a>. In my free time I am exploring computer vision, working on my own <a href='https://itunes.apple.com/us/app/bimba/id1076185539?mt=8'>Bimba iOS application</a>, and <a href='https://candyrent.com'>CandyRent</a> startup I co-funded with friends.",
                    "bio_html": "",
                    "twitter": "https://twitter.com/aleksandergrzyb",
                    "github": "https://github.com/aleksandergrzyb",
                    "www": "http://aleksandergrzyb.com/",
                    "photo_url": "/images/speakers/aleksander_grzyb.png"
                },
                "speaker-adam-zaczek": {//3
                    "firstname": "Adam",
                    "lastname": "Żaczek",
                    "bio_html": "Adam is a front-end developer who would not stop talking about new technologies or skateboarding. He finds spending time on programming or reading science articles just as fun as jumping from stairs on a piece of wood with wheels attached (i.e. a skateboard). He once felt like his eyes were bleeding when seeing Javascript code. Nowadays JS is all he wants to code in. Adam has recently found out about GraphQL and he plays with it whenever he can. He is responsible for creating one of the best skateparks in Poland. He is the holder of \nskateboarding Guinness World Record for most skateboard backside shuvits in one minute. ",
                    "photo_url": "/images/speakers/adam_z.jpg",
                    "www": "https://www.netguru.co/about-us/team/adam-4828293800",
                    "twitter": "https://twitter.com/ZaczekAdam",
                    "github": "https://github.com/adamzaczek",
                    "linkedin": "https://www.linkedin.com/in/adam-żaczek-a4a734110"
                },
                "speaker-jorge-castillo": {//4
                    "firstname": "Jorge",
                    "lastname": "Castillo",
                    "bio_html": "Jorge is an experienced Android Engineer from Spain. He is currently working for GoMore, a danish company from CPH. He is very focused on applying Functional Programing over Kotlin, and he is one of the most active contributors of KΛTEGORY, a library to provide FP constructs, data types and operations over the language`",
                    "photo_url": "/images/speakers/jorge-castillo.jpg",
                    "www": "https://medium.com/@jorgecastillopr",
                    "twitter": "https://twitter.com/jorgecastillopr",
                    "github": "https://github.com/jorgecastilloprz",
                    "linkedin": "https://www.linkedin.com/in/jorgecastilloprz"
                },
                "speaker-salomon-brys": {//5
                    "firstname": "Salomon",
                    "lastname": "Brys",
                    "bio_html": "Passionate about Kotlin for the last three years, I am the developer and maintainer of the Kodein library.\nDeeply rooted in the Open-Source philosophy, I am dedicated to making tools and libraries to make programming easier, safer, and more exciting.\nI also love boardgaming and flying small planes (which I have a license for).",
                    "photo_url": "/images/speakers/salomon_b.jpg",
                    "www": "https://github.com/SalomonBrys/",
                    "twitter": "https://twitter.com/",
                    "github": "https://github.com/SalomonBrys",
                    "linkedin": "https://www.linkedin.com/in/salomonbrys"
                },
                "speaker-sergi-martinez": {//6
                    "firstname": "Sergi",
                    "lastname": "Martinez",
                    "bio_html": "Working as Android dev at Schibsted and Google Developer Expert for Android. He loves to share, teach, discuss, learn with the community",
                    "photo_url": "/images/speakers/sergi_m.jpg",
                    "www": "http://sergiandreplace.com",
                    "twitter": "https://twitter.com/sergiandreplace",
                    "github": "https://github.com/sergiandreplace",
                    "linkedin": "https://www.linkedin.com/in/sergiandreplace"
                },
                "speaker-leandro-favarin": {//7
                    "firstname": "Leandro",
                    "lastname": "Favarin",
                    "bio_html": "Leandro has been working as a software engineer for mobile devices and portable technology for 7+ years. His focus is on the Android platform and everything around it.",
                    "photo_url": "/images/speakers/leandro-favarin.jpg",
                    "www": "http://leandrofavarin.com",
                    "twitter": "https://twitter.com/leandrofavarin",
                    "github": "https://github.com/leandrofavarin",
                    "linkedin": "https://www.linkedin.com/in/leandrofavarin"
                },
                "speaker-vasiliy-zukanov": {//8
                    "firstname": "Vasiliy",
                    "lastname": "Zukanov",
                    "bio_html": "Professional software engineer and blogger (www.techyourchance.com)",
                    "photo_url": "/images/speakers/vasiliy-zukanov.jpg",
                    "www": "http://www.techyourchance.com",
                    "twitter": "https://twitter.com/VasiliyZukanov",

                },
                "speaker-miguel-quinones": {//9
                    "firstname": "Miguel",
                    "lastname": "Quinones",
                    "bio_html": "Miguel is a control systems engineer who turned to iOS and Cocoa many years ago. Attracted by the simplicity and power of Apple’s ecosystem, he never looked back. He writes code for fun, generating profit as a nice side-effect. He\u0027s worked on apps with millions MAUs like Badoo, Bumble and currently, Peak Brain Training.",
                    "www": "https://miqu.me",
                    "photo_url": "/images/speakers/miguel-quinones.jpg",
                    "github": "https://github.com/DarthMike",
                    "linkedin": "https://www.linkedin.com/in/miguelquinon"
                },
                "speaker-yuliya-kaleda": {//10
                    "firstname": "Yuliya",
                    "lastname": "Kaleda",
                    "bio_html": "Yuliya is an Android developer at Jet.com, leading a team of 4 developers whose main focus is to build performant, scalable and cutting-edge Android projects. For the last few months Yuliya has been collaborating with Google to build the first multi-feature Instant App.",
                    "photo_url": "/images/speakers/yuliya_k.jpg",
                    "linkedin": "https://www.linkedin.com/in/yuliya-kaleda-b4525ab1"
                },
                "speaker-martin-mitrevski": {//11
                    "firstname": "Martin",
                    "lastname": "Mitrevski",
                    "bio_html": "Martin is working as a Technical Coordinator at Swiss Software Company Netcetera. He’s been working on mobile apps in the areas of virtual reality, transport, indoor navigation, insurance, weather, innovation tools and live event apps. Lately, he's been fascinated by the possibilities that conversational interfaces bring in simplifying the user experience and how they might change the way we think about apps. ",
                    "photo_url": "/images/speakers/mitrevski.png",
                    "www": "https://martinmitrevski.com/",
                    "twitter": "https://twitter.com/mitrevski",
                    "github": "https://github.com/martinmitrevski",
                    "linkedin": "https://www.linkedin.com/in/martin-mitrevski-01134755/"
                },
                "speaker-elviro-rocca": {//12
                    "firstname": "Elviro",
                    "lastname": "Rocca",
                    "bio_html": "Elviro worked for some years as a Materials Engineer before focusing on his true passion: functional programming. He is the lead iOS Developer @Facile.it and his main field of interest is applying functional concepts and techniques to real-world programming problems related to iOS and mobile platforms in general.",
                    "photo_url": "/images/speakers/rocca.jpg",
                    "www": "https://broomburgo.github.io/fun-ios/",
                    "twitter": "https://twitter.com/_logicist",
                    "github": "https://github.com/broomburgo",
                    "linkedin": "https://www.linkedin.com/in/elviro-rocca-045b1279"
                },
                "speaker-tomasz-gebarowski": {//13
                    "firstname": "Tomasz",
                    "lastname": "Gebarowski",
                    "bio_html": "Software Engineer, currently working as an iOS Architect at mBank. Working full time in Swift. Having background in C/C++ and distributed VoIP servers. Experienced in maintaining large and long term projects. Privately father of two kids and LEGO enthusiast.",
                    "photo_url": "/images/speakers/tomasz-gebarowski.jpg",
                    "www": "http://www.codica.pl",
                    "twitter": "https://twitter.com/tgebarowski",
                    "github": "https://github.com/tgebarowski",
                    "linkedin": "https://www.linkedin.com/in/tomaszgebarowski"
                },
                "speaker-gautier-mechling": {//14
                    "firstname": "Gautier",
                    "lastname": "Mechling",
                    "bio_html": "Software Developer",
                    "www": "http://nilhcem.com",
                    "photo_url": "/images/speakers/gautier-mechling.jpg",
                    "github": "https://github.com/Nilhcem",
                    "linkedin": "https://www.linkedin.com/in/gautier-mechling-9a0a7236/"
                },
                "speaker-michal-kowalczyk": {//15
                    "firstname": "Michał",
                    "lastname": "Kowalczyk",
                    "bio_html": "Michał has worked in various sectors of IT for last 12 years. He has created web applications as well as embedded systems. In his job, he likes to combine various technologies. For the last couple of years, he has used C++ with Java, Python and Swift mixed in. Currently, he works in TomTom developing a multiplatform engine for map visualisation.",
                    "photo_url": "/images/speakers/mkowalczyk.jpg",
                    "linkedin": "https://www.linkedin.com/in/michalkowalczyk/"
                },
                "speaker-kamil-czopek": {//16
                    "firstname": "Kamil",
                    "lastname": "Czopek",
                    "bio_html": "iOS developer, consultant, manager, online marketer. ",
                    "photo_url": "/images/speakers/czopek.jpg"
                },
                "speaker-rowdy-rabouw": {//17
                    "firstname": "Rowdy",
                    "lastname": "Rabouw",
                    "bio_html": "Rowdy Rabouw is a webdeveloper with over 20 years’ experience in HTML, CSS, JavaScript and PHP.\n\nHe\u0027s been working as a freelancer since 2004 and has been employed by the Dutch insurance company Nationale-Nederlanden since 1992. Currently he is working on various JavaScript and NativeScript projects as Senior Engineer. \n\nRowdy started developing NativeScript apps with Angular in 2016 and running the NativeScript NL website; a curated list of courses, tools and tips to help people code awesome apps with NativeScript. \n\nSince 2017 he is a Telerik Developer Expert for NativeScript and spreading his love for {N}.",
                    "www": "http://double-r.nl",
                    "photo_url": "/images/speakers/rowdy-rabouw.jpg",
                    "github": "https://github.com/nativescriptnl",
                    "linkedin": "https://www.linkedin.com/in/rowdyrabouw"
                },
                "speaker-stuart-kent": {//18
                    "firstname": "Stuart",
                    "lastname": "Kent",
                    "bio_html": "Hello! I'm a software developer with 3 years' mobile experience. I currently work at Detroit Labs creating native Android and iOS apps for national and international brands in the utilities, QSR, automotive, and pro audio industries. Before becoming a developer, I taught college and earned a Ph.D. in Applied Math. Likes: Enums. Dislikes: dogmatism.",
                    "www": "http://www.stkent.com",
                    "photo_url": "/images/speakers/stuart-kent.jpg",
                    "github": "https://github.com/stkent",
                    "linkedin": "https://www.linkedin.com/in/skentphd"
                },
                "speaker-olivier-destrebecq": {//19
                    "firstname": "Olivier",
                    "lastname": "Destrebecq",
                    "bio_html": "I provide mobile strategy & development for teams creating their first mobile app (particularly iOS).\nAfter working for very large companies in the US I'm taking all that I learned in software development and using this to help my clients build great apps.\nI also build apps for own business and co-organize the mobile development meetup for the french riviera.",
                    "photo_url": "/images/speakers/olivier.png",
                    "www": "http://www.mobdesignapps.fr",
                    "twitter": "https://twitter.com/@otusweb",
                    "github": "https://github.com/otusweb",
                    "linkedin": "https://www.linkedin.com/in/olivierdestrebecq/"
                },
                "speaker-ewa-ludwiczak": {//2.5
                    "firstname": "Ewa",
                    "lastname": "Ludwiczak",
                    "bio_html": "Ewa is software test engineer focused on mobile iOS app testing and development. In Allegro Group works in agile team where she continually improves her testing, programming and negotiation skills. Systematically shares her knowledge at local meetups like Geek Girls Carrots, PyLadies, PTAQ, WrotQA and conferences like Testwarez or Agile & Automation Days. Certified SCRUM devotee and dance lover.",
                    "photo_url": "/images/speakers/ewaludwiczak.png",
                    "twitter": "https://twitter.com/@ewabielskapoz",
                    "linkedin": "https://www.linkedin.com/in/ewa-ludwiczak-25268b54"
                },
                "speaker-lorenzo-quiroli": {//20
                    "firstname": "Lorenzo",
                    "lastname": "Quiroli",
                    "bio_html": "Lorenzo is Android Developer who started from Java and then saw the light thanks to Kotlin, which he has already used in several production apps. He is currently working in London @busuu",
                    "photo_url": "/images/speakers/lorenzo.png",
                    "twitter": "https://twitter.com/lorenzoquiroli",
                    "github": "https://github.com/quiro91",

                },
                "speaker-eliasz-sawicki": {//21
                    "firstname": "Eliasz",
                    "lastname": "Sawicki",
                    "bio_html": "I'm developer at Bright Inventions, focused on providing great iOS experience. I’m constantly looking for new ways to improve my solutions which is also main topic of my blog. When my Mac is sleeping, I’m probably playing guitar or reading books.",
                    "photo_url": "/images/speakers/eliasz-sawicki.png",
                    "www": "http://eliaszsawicki.com/",
                    "twitter": "https://twitter.com/@elisawic",
                    "github": "https://github.com/Eluss",
                    "linkedin": "https://www.linkedin.com/in/eliasz-sawicki-499953a2"
                },
                "speaker-saul-diaz": {//22
                    "firstname": "Saúl",
                    "lastname": "Díaz",
                    "bio_html": "Saúl Díaz has been developing Android since 2010. Currently he is working on Chicisimo, and Android app selected as one of the best of 2015 on Spain, and featured on Google Play by the Google Play Team. Previously he has worked as Android Lead on Fever and Android Developer on Tuenti, two renowned companies of Spain. He is an active member of the Spanish Android Development community and regularly participates in events and conferences.",
                    "photo_url": "/images/speakers/saul-diaz.jpg",
                    "twitter": "https://twitter.com/@sefford",
                    "github": "https://github.com/Sefford/",
                    "linkedin": "https://www.linkedin.com/in/sefford/"
                },
                "speaker-marcin-moskala": {//23
                    "firstname": "Marcin",
                    "lastname": "Moskała",
                    "bio_html": " Kotlin developer and passionate for over 2 years. Making open-source libraries (ActivityStarter, PreferenceHolder, KotlinDiscreteMathToolkit) and applications both for GameKit and as a freelancer. Also writing articles for programming magazines and making speeches on different events. ",
                    "photo_url": "/images/speakers/marcin-moskala.jpg",
                    "www": "http://marcinmoskala.com/",
                    "github": "https://github.com/MarcinMoskala"
                },
                "speaker-pawel-gajda": {//24
                    "firstname": "Paweł",
                    "lastname": "Gajda",
                    "bio_html": "Associated with Android since 2010, when platform was taking its first steps in the global market. Enthusiast of JetBrains products such as IntelliJ IDEA and Kotlin. Laureate of the national finals of Microsoft Imagine Cup 2013. Focuses on lifehacking and improving his productivity. Speaker at mobile conferences. After-hours open source contributor (author of KAndroid - a kotlin library for Android), amateur runner and guitar player.",
                    "photo_url": "/images/speakers/pawel-gajda.jpg",
                    "www": "http://www.pawegio.com/",
                    "twitter": "https://twitter.com/@pawegio",
                    "github": "https://github.com/pawegio",
                },
                "speaker-raul-portales": {//25
                    "firstname": "Raul",
                    "lastname": "Portales",
                    "bio_html": "Raul Portales is a Software Engineer working on mobile since the early times. He switched from Symbian to Android in 2009 (before Android versions had tasty names) and never looked back. He loves public speaking and has presented at several DroidCons, Game Developer Conferences and many GDGs.\n\nAfter working a lot on the front end - especially building games - Raul has developed a special interest in UX and UI.",
                    "www": "http://plattysoft.com",
                    "photo_url": "/images/speakers/raulportales.jpg",
                    "github": "https://github.com/plattysoft",
                    "linkedin": "https://www.linkedin.com/in/raulportales"
                },
                "speaker-marcin-zbijowski": {//26
                    "firstname": "Marcin",
                    "lastname": "Zbijowski",
                    "bio_html": "I'm iOS developer since iPhone OS 3 and doing apps since then.",
                    "photo_url": "/images/speakers/zbijowski.png",
                    "twitter": "https://twitter.com/zbiju",
                    "github": "https://github.com/marcin-zbijowski",
                    "linkedin": "https://www.linkedin.com/in/marcinzbijowski/"
                },
                "speaker-krzysztof-siejkowski": {//27
                    "firstname": "Krzysztof",
                    "lastname": "Siejkowski",
                    "bio_html": "iOS developer at Polidea, a hardware-friendly software house in Warsaw. Co-organizer of Mobile Warsaw, a community for mobile developers. Swift enthusiast. A cultural anthropologist by training, happy to discuss the human side of programming techniques.",
                    "photo_url": "/images/speakers/ksiejkowski.jpg",
                    "www": "https://siejkowski.net",
                    "twitter": "https://twitter.com/@_siejkowski",
                    "github": "https://github.com/siejkowski",
                    "linkedin": "https://www.linkedin.com/in/krzysztof-siejkowski-99828025"
                },
                "speaker-yusei-nishiyama": {//28
                    "firstname": "Yusei",
                    "lastname": "Nishiyama",
                    "bio_html": "Yusei Nishiyama is a senior iOS developer at Cookpad the largest recipe sharing service in the world with the aim of making everyday cooking fun! He majored in philosophy and aesthetics but the beauty of programming languages led him to become a programmer and he has now been working with iOS since 2012.\n\nWhen he isn’t coding, he is spending some time listening to and making music. You can find him playing jazz piano in a pub.",
                    "photo_url": "/images/speakers/yuseinishiyama.png",
                    "twitter": "https://twitter.com/@yuseinishiyama",
                    "github": "https://github.com/yuseinishiyama",
                    "linkedin": "https://www.linkedin.com/in/yusei-nishiyama-6b45299b"
                },
                "speaker-sam-bellen": {//29
                    "firstname": "Sam",
                    "lastname": "Bellen",
                    "bio_html": "I'm a front-end developer at madewithlove, a small app development company based in Belgium, but with employees all over the world. \n\nFor my day to day job I'm in charge of creating challenging user interfaces and make applications nice to work with. \nAfter office hours I like to play around with the web-audio API, and other \"exotic\" browser APIs. One of my side projects is a library to add audio effects to an audio input using JavaScript.\n\nWhen I'm not behind a computer, you can find me playing the guitar, having a beer at a concert, or trying to snap the next perfect picture.",
                    "www": "https://blog.sambego.be/",
                    "photo_url": "/images/speakers/sam-bellen.jpg",
                    "twitter": "https://twitter.com/sambego",
                    "github": "https://github.com/sambego"
                },
                "speaker-gabor-wnuk": {//30
                    "firstname": "Gabor",
                    "lastname": "Wnuk",
                    "bio_html": "For the last 10 years bonded with o2.pl and later Grupa Wirtualna Polska. Currently Mobile Tech Lead at Grupa Wirtualna Polska, busy with implementing React Native wherever possible.",
                    "photo_url": "/images/speakers/wnuk.jpg",
                    "www": "https://gabo.re/"
                },
                "speaker-kuba-mazur": {//31
                    "firstname": "Jakub",
                    "lastname": "Mazur",
                    "bio_html": "iOS Developer @wingu. Works with iBeacons since very beginning.",
                    "photo_url": "/images/speakers/jakub_mazur.png",
                    "www": "https://www.wingu.de/",
                    "twitter": "https://twitter.com/jkmazur",
                    "github": "https://github.com/JakubMazur",
                    "linkedin": "https://www.linkedin.com/in/jakub-mazur-8350b244"
                },
                "speaker-veselin-iliev": {//32
                    "firstname": "Veselin",
                    "lastname": "Iliev",
                    "bio_html": "Veselin moved to London 2 years ago to join the Android team at ASOS. An Android developer since Froyo (long long time ago), he’s current focus is combining RxJava, Kotlin and MVP / MVVM patterns to provide smooth and seamless user experiences. Passionate about testing and writing clean code in general. Loves to spend his free time cycling, skiing or listening to podcasts.",
                    "photo_url": "/images/speakers/veskoiliev.png",
                    "www": "http://veskoiliev.com/",
                    "twitter": "https://twitter.com/@ilievvesselin",
                    "linkedin": "https://www.linkedin.com/in/vesseliniliev/"
                },
                "speaker-daniel-tull": {//33
                    "firstname": "Daniel",
                    "lastname": "Tull",
                    "bio_html": "Daniel has been a Cocoa developer since the Java Bridge existed when macOS was known as OS X. He has since made his way up from developing apps for Sky, Tesco, BBC, Nespresso and Danone to the heights of Gok Wan’s glorious fashion app.",
                    "photo_url": "https://www.gravatar.com/avatar/a226c33300a88ba937d7a8f69a4b0b3d?s=400",
                    "www": "https://danieltull.co.uk",
                    "twitter": "https://twitter.com/danielctull",
                    "github": "https://github.com/danielctull"
                },
                "speaker-victor-okunev": {//34
                    "firstname": "Victor",
                    "lastname": "Okunev",
                    "bio_html": "With a successful more-than-20-year career in software development, Victor has extensive experience building enterprise solutions with the Java-based technology stack. Victor joined the devoted family of Android developers fairly early in the game, shipping his first app for the Android Donut release. As an experienced hands-on architect and educator, Victor now combines his expertise with his passion as a Samsung Developer Evangelist. Victor connects the worldwide developers community with the world of Samsung technologies for Android platform, namely Samsung Knox SDKs and lately Samsung DeX. When he's not travelling around the world to meet with developers, Victor bikes to work in his home-town Vancouver, two hours a day, rain or shine. He holds a Masters Degree in Computer Science from Moscow State Institute of Radio Engineering, Electronics and Automation.",
                    "photo_url": "/images/speakers/victor_okunev.png",
                    "linkedin": "https://www.linkedin.com/in/victorokunev/"
                },
                "speaker-tomasz-pajak": {//35
                    "firstname": "Tomasz",
                    "lastname": "Pająk",
                    "bio_html": "Tomek is Software Engineering Manager at fintech company Seqr. It is the place where on daily basis he faces challenges of developing a disruptive product and takes repsonsibility for dealing with them. Tomek shares his experience as a speaker at multiple international conferences (eg. Agile Cambridge, Agile Lean Europe, DevOpsDays, Agile Management Congress, Agile By Example etc.) and as a contributor to InfoQ. He specializes in navigating in complex adaptive systems, organizational culture and building high-performance organizations by Agile transformations and DevOps transformations. As a consultant and coach Tomek witnesses other organizations trying to transform their businesses by adoption of Lean Product Development, DevOps and Agile mindsets and practices.",
                    "photo_url": "/images/speakers/tomasz_pajak.png",
                    "twitter": "https://twitter.com/@tomekatwork",
                    "linkedin": "https://www.linkedin.com/in/tomekatwork/"
                },
                "speaker-nikola-irinchev": { //36
                    "firstname": "Nikola",
                    "lastname": "Irinchev",
                    "bio_html": "Nick has extensive experience with everything .NET - from architecting highly performant web servers to shipping cross platform mobile apps, you name it. Now he resides at Realm, delivering the best database in the world to .NET developers. When he’s not doing that, he speaks about cloud infrastructure and occasionally blogs about the hard problems he faces.",
                    "photo_url": "/images/speakers/nikola-irinchev.png",
                    "twitter": "https://twitter.comm/nirinchev",
                    "linkedin": "https://www.linkedin.com/in/nikola-irinchev-12443a80",
                    "github": "http://github.com/nirinchev"
                },
                 "speaker-bartosz-kraszewski": { //37
                       "firstname": "Bartosz",
                       "lastname": "Kraszewski",
                       "bio_html": "Software Engineer specialised in Mobile Applications development. Focused on code quality and standards, experienced working in fast paced, product-oriented environment - Silicon Valley startups. Co-founder of Mobile Bialystok - local mobile technology enthusiasts group. Also an amateur squash player.",
                       "photo_url": "/images/speakers/bartosz-kraszewski.png",
                       "twitter": "https://twitter.com/BartoszKraszew1",
                       "github": "https://github.com/bkraszewski",
                       "linkedin": "https://www.linkedin.com/in/bkraszewski/",
                       "www" : "https://about.me/bartoszk"
                 },
                 "speaker-maciej-puchalski": { //38
                       "firstname": "Maciej",
                       "lastname": "Puchalski",
                       "bio_html": "Enthusiast of mobile programming, especially on Android platform. He also has knowledge about writing apps for multiple platforms at once. Excluding mobile stuff, he also developed some .NET technology web pages. Despite all these niuances in his mobile career, he always gets back to Android as his target platform. The best part of his job is not writing code itself, but its design and applying various good practices, including Clean Code. He likes Google ecosystem and he's a very active Google Keep notes app user. This usage has been increased to the extent, that he discovered that yes, there is a limit of note categories in the app.  It gives an insight about how he likes his notes, and his code, to be well structured and clean. In private life he's an active player of tabletop Dungeons & Dragons with several years sank into it. What is more, his other passion is his bike and cycling in general.",
                       "photo_url": "/images/speakers/maciej-puchalski.png",
                       "linkedin": "https://www.linkedin.com/in/maciej-puchalski-5ab71a133/"
                },           
                // Not confirmed bellow:
                /*

                                 "speaker-rndity": { //37
                                   "firstname": "",
                                   "lastname": "",
                                   "bio_html": "",
                                   "photo_url": "/images/speakers/roberto-orgiu.png",
                                   "twitter": "https://twitter.com/_tiwiz",
                                   "github": "https://github.com/tiwiz"
                                 },
                                 "speaker-maciej-zywno": { //38
                                   "firstname": "Maciej",
                                   "lastname": "Żywno",
                                   "bio_html": "",
                                   "photo_url": "/images/speakers/maciej-zywno.png",
                                   "twitter": "https://twitter.com/_tiwiz",
                                   "github": "https://github.com/tiwiz"
                                 },
                                 "speaker-roberto-orgiu": { //20.5
                                   "firstname": "Roberto",
                                   "lastname": "Orgiu",
                                   "bio_html": "Born in Italy in 1987, passionate for everything that switches on and off and particularly for handheld and wearable devices.\nI love to learn new languages, patterns and everything Android-related.\nLately I have helping with the DroidCon Italy event and the release of the related app.",
                                   "photo_url": "/images/speakers/roberto-orgiu.png",
                                   "twitter": "https://twitter.com/_tiwiz",
                                   "github": "https://github.com/tiwiz"
                                 },


                                 */
            },
            talks: {
                "talk-tbd": {
                    "title": "TBD",
                    "description_html": "TBD",
                    "speakers_keys": [],
                    "language": "EN"
                },
                "talk-functional-approach": { //4
                    "title": "Functional approach to Android architecture using Kotlin",
                    "description_html": "Modern languages with functional colors are mainstream lately. Kotlin is arising as one of the most powerful ones, and developers around the world are using it for personal and professional projects.\n\nIt's time for Android devs to look forward and benefit from this fact, and start designing more advanced architectures based on the features provided by the language.\n\nOn this talk, I will showcase a Kotlin approach (plus a sample project) to learn how to move all our side effects in the edges of our system, and implement a functional oriented architecture for our Android apps based on purity. Testing will also take part on the talk.\n\nI will also showcase a functional programing lib we are working on in the spanish community, called kategory: https://github.com/kategory/kategory\n\nIf you feel OOP is just not enough and want to make a huge step forward, come to this talk. You will not regret!",
                    "audience_level": "Advanced",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-jorge-castillo"
                    ]
                },
                "talk-how-to-combine-swift": {//15
                    "title": "How to combine Swift/Kotlin with C/C++",
                    "description_html": "The appearance of Swift and Kotlin is a great change in mobile world. There is a number of advantages to using them. Still, one thing didn’t change: as embedded programmers, in order to provide better performance, reduce battery utilisation, etc. we sometimes need to operate on lower level.\nDuring the speech, I will provide you with ready-to-use tools that will let you utilise a huge codebase of C and C++ in your project and discuss differences between them.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-michal-kowalczyk"
                    ]
                },
                "talk-devops-in-mobile": {//35
                    "title": "DevOps in mobile?",
                    "description_html": "Developing an app being a consumer product means working under constant pressure to frequently release features that bring value to customers. Several-months-long development with no release to production happens very seldom in the aforementioned context. How to cope with a need for speed of releasing an app eg. once a week? If you look at what happens in a ‘backend world’, DevOps is the new hype giving a promise to deliver value in a stable way very often. However, DevOps is very often associated mistakenly only with Continuous Integration and Continuous Delivery. I will be talking about increasing overall flow of value to customers, shortening feedback loops from customers and building an organization which is optimized for speed and stability. Moreover, what practices considered with DevOps in a ‘backend world’ are valid in a 'mobile world'? On the other hand, what practices need to be re-thought taking into account the mobile context? I will not be able to answer all the questions as I don’t know all the answers. However, the answers I have are based on what Facebook, Netflix, Etsy and - where applicable - Seqr do, don’t do or were doing wrong. The goal of my talk is to help people to understand DevOps comprehensively and how it fits into mobile context. I will refer to certain technologies as examples but will not discuss them in detail.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-tomasz-pajak"
                    ]
                },
                "talk-att-video-opt": {//1
                    "title": "Optimizing Android App performance with AT&T Video Optimizer",
                    "description_html": "App performance matters. To achieve greatness we need to track and measure what we can't see with naked eye. I my talk, I'll introduce you to AT&T performance optimizer. Are you sure your Android app will pass strict security and performance tests?",
                    "audience_level": "Intermediate",
                    "speakers_keys": [
                        "speaker-bartosz-kraszewski"
                    ],
                    "language": "EN"
                },
                "talk-tensorflow": {//2
                    "title": "Tensorflow for Mobile Developers",
                    "description_html": "There is a lot of Hype with ML and AI lately, and TensorFlow is the framework of choice from Google. But as a Mobile Developer you might have asked yourself, how can I benefit from it? In this talk, you will learn your first steps into the fascinating ML world for mobile",
                    "speakers_keys": [
                        "speaker-enrique-lopez-manas"
                    ],
                    "language": "EN"
                },

                "talk-cebulowe-testy": {//3
                    "title": "Ogres and tests are like onions",
                    "description_html": "If you are curious how we test iOS mobile applications in Allegro, this lecture is for you. We think of app testing right after opening Xcode, creating user interface and writing final implementation. On different development stages, we test different subjects with different tools. Feel invited to learn our story about subsequent layers of testing, starting from unit, through snapshot and functional testing. <a href='https://youtu.be/GZpcwKEIRCI?t=33s'>True story</a> based on developer’s and tester’s experience.",
                    "audience_level": "Intermediate",
                    "speakers_keys": [
                        "speaker-aleksander-grzyb",
                        "speaker-ewa-ludwiczak",
                    ],
                    "language": "EN"
                },
                "talk-making-scriptable-iOS-apps": { //33
                    "title": "Making Scriptable iOS Apps",
                    "description_html": "I will discuss how we can provide a Javascript interface to an app's core functionailty, and how this can help during development time, as well as providing advanced users with increased powers.",
                    "audience_level": "Intermediate",
                    "language": "English",
                    "speakers_keys": [
                        "speaker-daniel-tull"
                    ]
                },
                "talk-kodein": { //5
                    "title": "The Kodein KOtlin DEpendency INjection library",
                    "description_html" :"Kodein is a library that allows for ideomatic & semantic dependency injection in Kotlin. In this talk, I will first present Kodein, its goals and achievements. I will then propose a live coding showing how to use Kodein in an Android application.", 
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-salomon-brys"
                    ]
                },
                "talk-database-handling-with-room": { //6
                    "title": "Database handling with Room",
                    "description_html": "Room is the new library from Google to speed up the database work and remove a lot of boilerplate. We will see and introduction to this library and how to structure your application to get the most of it.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-sergi-martinez"
                    ]
                },
                "talk-breaking-bug": { //22
                    "title": "Breaking Bug",
                    "description_html": "Breaking Bug is a post-mortem about how we handled in Chicisimo a bug which went largely undetected and of unknown scale. \n\nWe will explain how it did affect us, and which techniques and tools did we use to:\n\n1. Investigate what was going on.\n2. Properly diagnose and narrow it to the affected part in the app.\n3. Analyze its impact and affected people.\n4. Finally isolate it and fix it.\n\nIn the end we will give some conclusions about how was the real cost of fixing it, and in which ways the process gave us insight and helped us to understand and improve our quality processes.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-saul-diaz"
                    ]
                },
                "talk-zero-to-hero-in-ui-testing": { //32
                    "title": "Zero to hero in UI testing",
                    "description_html": "(or how to build a scalable testing suite). In this talk we'll discuss the problems around UI testing - why is it hard to write such tests, how to get started, how to make them part of your CI system. We'll present a recipe for building a scalable framework that makes writing UI tests a pleasure. Most of the common \"gotcha-s\" will be solved along the way, as well as giving a few best practices. Once the foundations are laid out, a whole new set of scaling problems arises, so we'll talk about possible solutions for them. \n\nWhether you still don't have any UI tests in your project, or you already have a good suite built, this talk will give you some useful tips & ideas.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-veselin-iliev"
                    ]
                },
                "talk-introduction-to-react-native": { //21
                    "title": "Introduction to React Native",
                    "description_html": "React Native has been a hot topic for some time now. Many people claim that it is revolution in mobile development, others treat it as another multi platform solution which will never replace the \"real\" native development. So... What is it then? In this talk I'll share my experience as iOS developer who got into React Native development and has many different feeling regarding the topic.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-eliasz-sawicki"
                    ]
                },
                "talk-android-architecture-components-considered-harmful": { //8
                    "title": "Android Architecture Components Considered Harmful",
                    "description_html": "Applications architecture is a broad and important topic in software development, which has been neglected by official guidelines for Android for a very long time. In spite of that, the interest in architecture among the members of Android community has been growing steadily over the years.\n\nOfficial guidelines and tools slowly caught up with the community interests, which culminated in a recent announcement of a set of libraries called Android Architecture Components by Google developers.\n\nWhile the motivation behind Android Architecture Components is clear, the relation between these libraries and application architecture is not so evident. Furthermore, the way these components address the issues that Android developers experienced over the years hides a new set of potential issues and gotchas under the hood.\n\nIn this session we will attempt to understand what software architecture is and what it isn't, and discuss several potential pitfalls associated with Android Architecture Components.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-vasiliy-zukanov"
                    ]
                },
                "talk-mvc": { //23
                    "title": "MVC vs MVP vs MVVM vs MVI",
                    "description_html": "Choose between this pattern is constant subject for discussions and fights. In the same time anyone perceives them differently. Is there any way out of this ideological problems? Let's talk about MVC, MVP and MVVM pragmatically. Let's answer \"Why?\" and \"What are the consequences?\". ",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-marcin-moskala"
                    ]
                },
                "talk-dont-fear-sql": { //7
                    "title": "Don’t fear SQL: A better way to store and handle data with SQLBrite && SQLDelight",
                    "description_html": "For many people, SQL can be intimidating when writing mobile apps. To avoid its complexity, various libraries started to implement techniques such as Object-Relational Mapping. They ease basic operations on complex objects, but come with a set of downsides such as decreased performance and the learning curve of a new library.\n\nSquare’s libraries SQLBrite and SQLDelight improve data manipulation by embracing all the powerful capabilities of SQLite while removing common frictions like runtime crashes, boilerplate code, and type-unsafe APIs.\n\nIn this talk I’ll present the reactive mindset behind SQLBrite and the code-generation capabilities of SQLDelight. When combined, these two libraries will help you architect and code safer and faster with queries autocompletion, code reuse, and much more.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-leandro-favarin"
                    ]
                },
                "talk-kotlin-tools": { //20,20.5
                    "title": "kotlin.tools() of the trade",
                    "description_html": "Kotlin is fairly known in the Android community nowadays, and it's really easy to make the switch from Java. Getting the most out of it though it's the difficult part. In this talk we will explore together the most amazing features it has to offer, from the simplest extension functions to the functional style tricks, the coroutines and a bunch of yet-to-discover amazing things!",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        // "speaker-roberto-orgiu",
                        "speaker-lorenzo-quiroli",
                    ]
                },
                "talk-using-android-things": { //14
                    "title": "Using Android Things to detect & exterminate Reptilians",
                    "description_html": "Whether you believe it or not, the Reptilians are everywhere, and we have never been ready to face them so far.\nWe WERE NOT ready... But this will finally change, now that Android Things has been released. Trust me, they didn't want to see that happen.\n\nTogether, we will discover Android Things and see how we can create a moving machine capable of detecting Reptilians (with touch/skin temperature sensors, and machine learning), but also capable of exterminating them (btw, I would appreciate if the staff could lend me a flame-thrower, it would make a great demo).\n\nHow? Using a Raspberry Pi, an Arduino, and discovering+using some specific Android Things APIs, such as gpio, pwm, i2c, spi, uart, allowing us to interact with physical components.\n\nCome see the power of Android Things.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-gautier-mechling"
                    ]
                },
                "talk-building-ci-pipeline": { //24
                    "title": "Building CI pipeline based on TeamCity & Docker in Android Team",
                    "description_html": "Nowadays, there are a lot of hosted CI solutions that offer quick integration with our repositories and need just few clicks to finish initial setup. Other services, coming with enhanced functionality, but requiring a server to maintain are often not given a try. First problems occur when we start coping with long compilation time and limited resources, especially during instrumented tests running on the Android Emulator. Here TeamCity comes with a rescue. With simplified setup (using Docker) and few tricks, reducing time for possible management, we do not need to hire a DevOps engineer.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-pawel-gajda"
                    ]
                },
                "talk-augmented-reality": { //16
                    "title": "Augmented Reality in the iOS World. What's in there for us?",
                    "description_html": "Augmented Reality in the iOS world (what's there for us, not only from Apple)",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-kamil-czopek"
                    ]
                },
                "talk-make-your-app-instant": { //10
                    "title": "Make your app instant",
                    "description_html": "Instant Apps is a bridge between seamless web experience not requiring installation and truly native user experience with material design and navigation. It absorbs the benefits of both worlds. \n\nAs Google's early access partner, Jet.com got access to Instant Apps API and tools in their early experimental stage. I was leading Instant Apps project for the last 8 months at Jet.com and would love to share the experience. Building Instant Apps required a lot of work on the architecture side, modularization and reducing the app size. \n\nIn my talk I will touch the following points:\n- Instant Apps types\n- Architecture changes\n- Size and feature constraints\n- Pain points and lessons learned\n- Ways to slim down the app and bring it down to 4 MB\n- Benefits",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-yuliya-kaleda"
                    ]
                },
                "talk-android-things-101": { //25
                    "title": "Android Things 101",
                    "description_html": "In this talk Raul will explain the basic concepts of Android Things (Android for IoT), explain how to setup the development environment for it and show how easy is to work with the different peripherals. For this, he'll use the most popular Dev Kit for Android Things: A Raspberry Pi with a Rainbow HAT (which has lots of sensors, input and output devices).",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-raul-portales"
                    ]
                },
                "talk-bluetooth-low-energy": { //18
                    "title": "Bluetooth Low Energy on Android: Top Tips for the Tricky Bits",
                    "description_html": "Now that 90% of Android consumer devices and 100% of Android Things devices run software that supports Bluetooth Low Energy (BLE), it’s the perfect time for Android developers to dive into the Internet of Things and start building companion apps or custom smart devices. Unfortunately, Android’s Bluetooth stack has a well-deserved reputation for being difficult to work with. Join me for a journey through battle-tested strategies and code that will provide you with a roadmap for navigating the nasty parts. No prior experience with BLE is required; a gentle introduction is included.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-stuart-kent"
                    ]
                },
                "talk-lets-framework": { //18
                    "title": "Let's framework everything!",
                    "description_html": "With tvOS introduced almost two years ago, we now have four platforms that can run your app. Of course, each requires tailored UI approach, but tests and deployment for each platform should be quite straightforward. Let’s talk about building a framework, writing tests for it and onwards preparation to use for all Apple devices.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-kuba-mazur"
                    ]
                },
                "talk-advanced-retrofit": { //39
                      "title": "Advanced Retrofit",
                      "description_html": "Retrofit library makes developers life easier. It serves for something very important these times - to connect to the Internet and get data from it. Everything in Retrofit is simplified to the required minimum of code to be written. In this talk there will be described advanced concepts, along with a little introduction to the library.",
                      "audience_level": "Intermediate",
                      "language": "EN",
                      "speakers_keys": [
                        "speaker-maciej-puchalski"
                      ]
                },
                "talk-optimizing-android-apps": { //34
                    "title": "Optimizing Android apps for desktop experience",
                    "description_html": "The mobile devices of the latest generation are now capable of powering the desktop user experience. Get your Android apps ready for the big screen. Learn what it takes to optimize your apps for enhanced interactions, desktop mode capabilities, and an overall amplified in-app experience. Stay for the quiz and for a Samsung DeX station giveaway at the end of the session!",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-victor-okunev"
                    ]
                },
                "talk-realm-database": { //26
                    "title": "Realm database in real life",
                    "description_html": "I'd like to present my actual case where I used Realm platform, both frontend (iOS) and backend (AWS cloud). ",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-marcin-zbijowski"
                    ]
                },
                "talk-unmaintainable-code": { //13
                    "title": "Unmaintainable code - iOS developer perspective",
                    "description_html": "Is code duplication the root of all evil? Should I always write a generic code? How to make others life harder? \n\nA subjective journey through common iOS anti-patterns, not so best practices and code smells from the perspective of an experienced Software Engineer.\nBased on +10 years of commercial experienced, thousands of code reviews, made with a dose of pragmatism.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-tomasz-gebarowski"
                    ]
                },
                "talk-lenses-and-prisms": { //12
                    "title": "Lenses and Prisms in Swift",
                    "description_html": "The concept of functional Lens has become pretty popular in functional programming circles, and there are already good contributions for applying lenses to other, traditionally imperative/OO contexts. I’d like to offer a more in depth view on why lenses can be useful in Swift, and also talk about an associated concept called Prism. Let’s consider some practical problems and confront an idiomatic/imperative approach to the one based on lenses and prisms.",
                    "audience_level": "Advanced",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-elviro-rocca"
                    ]
                },
                "talk-offline-first": { //9
                    "title": "Offline-first",
                    "description_html": "In this talk we'll explore architectural patterns you can use to organise applications that don't always require a server to function properly.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-miguel-quinones"
                    ]
                },
                "talk-rxswift-deep-cuts": { //27
                    "title": "RxSwift: Deep Cuts",
                    "description_html": "In the last few years reactive programming ideas have taken the iOS community by storm. Now that the dust has settled, we're more and more often coming across the most confusing, obscure and unreadable code we've possibly ever seen. The libraries like RxSwift bring the great power, but how to bear the burden of the great responsibility? I'll try to answer this question in my talk, drawing on experience of everyday use of RxSwift in a non-trivial app. Deep diving into implementation details and overview of battle-tested patterns will guide us along the way.",
                    "audience_level": "Advanced",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-krzysztof-siejkowski"
                    ]
                },
                "talk-building-ios-apps": { //28
                    "title": "Building iOS Apps at Scale",
                    "description_html": "Working with a large code base in a large distributed team involves a lot of challenges. You need to deal with complex workflows, slow build times, communications across different timezones, etc.\n\nIn this talk, Yusei will share how development teams can tackle these issues and speed up daily development. This talk will also cover the following topics:\n\n- Workflow automation with Fastlane\n- Code review with Danger and SwiftLint\n- Collecting and visualizing code metrics with InfluxDB and Grafana\n- Build time reduction\n- Code modularization",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-yusei-nishiyama"
                    ]
                },
                "talk-awesome-native-apps": { //17
                    "title": "Awesome native apps with NativeScript and Angular!",
                    "description_html": "Developing native iOS (and Android apps) can be very time consuming and expensive.\n\nWhat if you could build native apps with one code base and web techniques? Well, you can with NativeScript!\n\nIn this introduction, I’ll explain what NativeScript is and how it compares to other platforms. And in a live demo, I will show you how easy it is to get started and to make use of native capabilities.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-rowdy-rabouw"
                    ]
                },
                "talk-i-didnt-know-the-browser": { //29
                    "title": "I didn’t know the browser could do that!",
                    "description_html": "The times when a browser simply had to parse and show some markup are long gone. These days they are full of interesting api’s exposing various information and behaviour to web developers. This talk will walk you through a few of these api’s (speech, speech recognition, battery, location, ...), some of which you might know, some maybe not. I will show a quick example of what some of these api’s can do, and how to use them.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-sam-bellen"
                    ]
                },
                "talk-speech-analysis-techniques": { //11
                    "title": "Speech Analysis techniques",
                    "description_html": "The evolution of user interfaces in mobile apps continues with the most natural way of expressing the user’s wishes - their voice. Understanding what the users say is not an easy task. In this talk, we will see several speech analysis techniques used to help us in this challenging task, from Apple's brand new Core ML and SiriKit, to Google's api.ai, along with some well known Natural Language Processing algorithms like the TF-IDF.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-martin-mitrevski"
                    ]
                },
                "talk-predict-impending": { //30
                    "title": "Predict impending doom with IoT and ReactNative",
                    "description_html": "In short few slides i'll show you how to program an ESP32 microcontroller using JavaScript, create air quality sensor, and how to communicate with it using Bluetooth LE and ReactNative application.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-gabor-wnuk"
                    ]
                },
                "talk-dont-loose-your-users": { //19
                    "title": "Don't loose your users because of endless quality issues",
                    "description_html": "Getting someone to download your app is hard enough. Don't scare them away with constant crashes, bad behaviors and errors which make your app unusable.\nDuring my presentation, I'll go over techniques, habits and tools to keep your iOS app in tip top shape.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-olivier-destrebecq"
                    ]
                },
                "talk-graphql-vs-rest": { //3
                    "title": "GraphQL vs REST",
                    "description_html": "Introduction to GraphQL as the innovational way of thinking about data.\nBroad GraphQL vs REST comparison led by real life examples of working with each of the two concepts.\nBased on my article shared by <a href='https://twitter.com/GraphQL/status/841435480675692544'>GraphQL's Twitter</a>",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-adam-zaczek"
                    ]
                },
                "talk-database-driven-ui": { //36
                    "title": "Database driven UI with MVVM & Realm",
                    "description_html": "In this talk I'll show how to simplify your app's architecture by letting the database drive the UI. We'll explore powerful features of Realm such as change notifications and automatic updates to ensure we never have to manually update the UI again.",
                    "audience_level": "Intermediate",
                    "language": "EN",
                    "speakers_keys": [
                        "speaker-nikola-irinchev"
                    ]
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
                "venue-tomtom": {
                    "title": "TomTom"
                },
                "venue-htd": {
                    "title": "HTD"
                },
                "venue-mobica": {
                    "title": "Mobica"
                },
                "venue-rndity": {
                    "title": "Rndity"
                },
                "venue-seqr": {
                    "title": "SEQR"
                },
            },
            schedule: {
                "slot-registration": {"break_key": "break-registration"},
                "slot-hello-world": {"break_key": "break-hello-world"},
                "slot-1": {
                    "venue-tomtom": {
                        "talk_key": "talk-how-to-combine-swift"
                    },
                    "venue-htd": {
                        "talk_key": "talk-tbd" //mz
                    },
                    "venue-rndity": {
                        "talk_key": "talk-tbd" //bs
                    },
                    "venue-mobica": {
                        "talk_key": "talk-augmented-reality"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-devops-in-mobile"
                    }
                },
                "slot-coffee-1": {"break_key": "break-coffee"},
                "slot-2": {
                    "venue-tomtom": {
                        "talk_key": "talk-functional-approach"
                    },
                    "venue-htd": {
                        "talk_key": "talk-unmaintainable-code"
                    },
                    "venue-rndity": {
                        "talk_key": "talk-speech-analysis-techniques"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-make-your-app-instant"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-database-driven-ui"
                    }
                },
                "slot-coffee-2": {"break_key": "break-coffee"},
                "slot-3": {
                    "venue-tomtom": {
                        "talk_key": "talk-kodein"
                    },
                    "venue-htd": {
                        "talk_key": "talk-cebulowe-testy"
                    },
                    "venue-rndity": {
                        "talk_key": "talk-dont-loose-your-users"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-optimizing-android-apps"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-graphql-vs-rest"
                    }
                },
                "slot-lunch": {"break_key": "break-lunch"},
                "slot-4": {
                    "venue-tomtom": {
                        "talk_key": "talk-database-handling-with-room"
                    },
                    "venue-htd": {
                        "talk_key": "talk-offline-first"
                    },
                    "venue-rndity": {
                        "talk_key": "talk-realm-database"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-advanced-retrofit"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-introduction-to-react-native"
                    }
                },
                "slot-coffee-4": {"break_key": "break-coffee"},
                "slot-5": {
                    "venue-tomtom": {
                        "talk_key": "talk-breaking-bug"
                    },
                    "venue-htd": {
                        "talk_key": "talk-lenses-and-prisms"
                    },
                    "venue-rndity": {
                        "talk_key": "talk-making-scriptable-iOS-apps"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-dont-fear-sql"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-predict-impending"
                    }
                },
                "slot-coffee-5": {"break_key": "break-coffee"},
                "slot-6": {
                    "venue-tomtom": {
                        "talk_key": "talk-android-architecture-components-considered-harmful"
                    },
                    "venue-htd": {
                        "talk_key": "talk-rxswift-deep-cuts"
                    },
                    "venue-rndity": {
                        "talk_key": "talk-android-things-101"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-mvc"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-bluetooth-low-energy"
                    }
                },
                "slot-coffee-6": {"break_key": "break-coffee"},
                "slot-7": {
                    "venue-tomtom": {
                        "talk_key": "talk-kotlin-tools"
                    },
                    "venue-htd": {
                        "talk_key": "talk-building-ios-apps"
                    },
                    "venue-rndity": {
                        "talk_key": "talk-using-android-things"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-att-video-opt"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-awesome-native-apps"
                    }
                },
                "slot-coffee-7": {"break_key": "break-coffee"},
                "slot-8": {
                    "venue-tomtom": {
                        "talk_key": "talk-tensorflow"
                    },
                    "venue-htd": {
                        "talk_key": "talk-lets-framework"
                    },
                    "venue-rndity": {
                        "talk_key": "talk-zero-to-hero-in-ui-testing"
                    },
                    "venue-mobica": {
                        "talk_key": "talk-building-ci-pipeline"
                    },
                    "venue-seqr": {
                        "talk_key": "talk-i-didnt-know-the-browser"
                    }
                },
                "slot-no-coffee-8": {"break_key": "break-no-coffee"},
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
        },
        getOrderedSpeakersKeys: function () {
            var speakers = this.site.speakers;
            var items = Object.keys(speakers).map(function (key) {
                return [key, speakers[key]];
            });

            items.sort(function (a, b) {
                if (a[1].firstname < b[1].firstname) {
                    return -1;
                }
                if (a[1].firstname > b[1].firstname) {
                    return 1;
                }
                return 0;
            });

            return items.map(function (value) {
                return value[0];
            });
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
