import picture from './components/image/image2.jpg'
import pictureOne from './components/image/2.png'
import pictureTwo from './components/image/3.png'
import pictureThree from './components/image/4.png'
import pictureFour from './components/image/5.png'
import pictureFive from './components/image/6.png'
import pictureSix from './components/image/7.png'

let resumeData = {
    "navbar":[
        "BLOG","ABOUT","LINKS","PROJECTS"
    ],
    "feature":[
        {
            "picture":picture,
            "title":"A few words about this blog platform, Ghost, and how this site was made",
            "content":"Why Ghost (& Figma) instead of Medium, WordPress or other options?"
        }
    ],
    "allArticles":[
        {
            "picture":pictureOne,
            "content":"Here are some things you should know regarding how we work"
        },
        {
            "picture":pictureTwo,
            "content":"Granny gives everyone the finger, and other tips from OFFF Barcelona"
        },
        {
            "picture":pictureThree,
            "content":"Hello world, or, in other words, why this blog exists"
        },
        {
            "picture":pictureFour,
            "content":"Here are some things you should know regarding how we work"
        },
        {
            "picture":pictureFive,
            "content":"Connecting artificial intelligence with digital product design"
        },
        {
            "picture":pictureSix,
            "content":"It’s all about finding the perfect balance"
        },
    ],
    "element":[
        "Digital product design","Remote work","UX design","Distributed teams","Creativity","Strategy","Suspense","Growth"
    ],
    "socialMedia":["Twitter","Linkedln","RSS"],
    "footerInfo":[
        {
            "title":"NORDIC ROSE",
            "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.",
        },
    ]
}

export default resumeData;