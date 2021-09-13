const content = document.querySelector(".content");
const img = document.querySelector("img");
const nameAcc = document.querySelector(".name");
const time = document.querySelector(".time");
const progress = document.querySelector(".progress");

const persons = [{
        content: `"I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."`,
        imgSrc: "./images/people1.jfif",
        name: "Miyah Myles",
        time: "1 hour ago"
    },
    {
        content: `" This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him! "`,
        imgSrc: "./images/people2.jfif",
        name: "June Cha",
        time: "3 hours ago"
    },
    {
        content: `" This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him. "`,
        imgSrc: "./images/people3.jfif",
        name: "Iida Niskanen",
        time: "1 hour ago"
    },
    {
        content: `" This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future. "`,
        imgSrc: "./images/people4.jfif",
        name: "Renee Sims",
        time: "2 hours ago"
    },
    {
        content: `" I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again! "`,
        imgSrc: "./images/people5.jfif",
        name: "Jonathan Nunfiez",
        time: "1 hour ago"
    }
]
let index = 1;
function slideStory() {
    content.textContent = persons[index].content;
    img.src = persons[index].imgSrc;
    nameAcc.textContent = persons[index].name;
    time.textContent = persons[index].time;
    index++;
    if(index >= persons.length) {
        index = 0;
    }
    console.log(1)
}
setInterval(slideStory, 10000)