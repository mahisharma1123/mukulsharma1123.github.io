import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Mahima",
    lastName: "Sharma",
    initials: "ms", // the example uses first and last, but feel free to use three or more if you like.
    position: "A Digital Marketing Expert",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'Based in Ireland'
        },
        {
            emoji: "💼",
            text: "Freelancer"
        },
        {
            emoji: "📧",
            text: "mahi.sharma1123@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/mahi.sharma.7 ",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/mahima_sharma10/?igshid=YmMyMTA2M2Y%3D",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://www.linkedin.com/in/mahima-creativewriter/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I am a highly motivated and versatile graduate of Mass Communication with excellent interpersonal skills, having more than one year of experience with a digital marketing company, where my responsibilities are client services and writing content for social media platforms such as Facebook, Instagram, LinkedIn, and Youtube. I am a focused and goal-oriented individual who can manage multiple tasks simultaneously. Excellent communication skills honed by comfortable interactions with clients from the telecom industries, media industries, and social media agencies. Recently I completed a Master of Science in Digital Marketing from IT Carlow, As part of my education I worked on real-world projects to improve the digital marketing strategies for firms such as FoodCloud, SelectAccess, WIT Arena, and CookingWithSapana based out of Ireland.",
    skills:
        {
            proficientWith: ['Social Media Marketing', 'Content Creation', 'Photo Content', 'Video Content', 'Content Marketing', 'Daily Social Media Management Service', 'Google Ads', 'Email Marketing'],
            exposedTo: ['Canva', 'Photoshop']
        }
    ,
    hobbies: [
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Eurasia Supermarket",
            live: "https://www.instagram.com/eurasiasupermarket/?igshid=YmMyMTA2M2Y%3D", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://www.facebook.com/eurasia.supermarkets",
            image: mock1
        },
        {
            title: "Sheela Palace",
            live: "https://www.instagram.com/sheelapalacerestaurant/?igshid=YmMyMTA2M2Y%3D",
            source: "https://www.facebook.com/SheelaPalaceRestaurant",
            image: mock2
        },
        {
            title: "Locus Occupational Therapy app",
            source: "https://www.facebook.com/occupationaltherapy.22/",
            image: mock3
        },
        {
            title: "Spice Seeker",
            live: "https://www.instagram.com/spiceseekerhere/?igshid=YmMyMTA2M2Y%3D",
            source: "https://www.facebook.com/SpiceSeekerhere",
            image: mock4
        },
    ]
}