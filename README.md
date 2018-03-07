
![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# WDI Project 4

### "Farmer Friends" is a MERN stack application: MongoDB, Express.js, React, Node.js. This application was completed as a paired project. The purpose of the application is to provide a platform upon which farmers can add themselves and post their donations target. In return they can provide a benefit for the user. The user has the ability to adopt farmers, to donate and to choose a product. Upon registering and adopting - they can then contact farmers to organise arrangements.

<img width="500" height="300" alt="screen shot 2018-03-07 at 13 20 43" src="https://user-images.githubusercontent.com/28264008/37094558-285c399e-220b-11e8-9f14-9be9f787fc94.png">    <img width="200" height="300" alt="screen shot 2018-03-07 at 13 21 11" src="https://user-images.githubusercontent.com/28264008/37094604-45f5fd32-220b-11e8-9b58-d60c3c9c9d55.png">

## Technologies Used

#### Dependencies

* Axios
* Babel
* Bcrypt
* Body-parser
* Express
* Filestack-react
* Font-awesome
* Lodash
* Mongoose
* Mongoose-unique-validator
* Morgan
* React
* React-burger-menu
* React-dom
* React-router-dom
* Reactjs-popup
* Webpack and Webpack-dev-server


#### Backbone

* HTML5
* Bootstrap 4
* SCSS
* JavaScript (ECMA6)
* Gulp
* Node.js
* Express.js
* React
* MongoDB
* Zsh
* Git
* Github
* Heroku

#### TDD
* Chai
* Enzyme
* Mocha
* Sinon
* Nyc

## Installation
Access online via these links:

[GitHub](https://github.com/avadher510/wdi-fourth-project)

[HEROKU](https://farmer-friends.herokuapp.com/)

OR

Install Locally by downloading or cloning [Anish's GitHub Repository](https://github.com/avadher510/wdi-fourth-project) or [Alin's GitHub Repository](https://github.com/EagleEye182/wdi-fourth-project) 

## Approach to the Project

Built over five days, this project was a challenging albeit a very rewarding experience. Our aim was to showcase our skills by creating an application that has a good premise, responsive, user-friendly and scalable.

Our planning included wireframing via balsamiq.com and labour division in Trello. The team contributions and collaboration was managed using a **standard Git flow on Github**. We began with a very detailed planning session that enabled us to develop the models and wireframes for the site. This was key for our progress: 

<img width="500" height="250" alt="screen shot 2018-03-07 at 14 38 14" src="https://user-images.githubusercontent.com/28264008/37098204-356ddfa2-2215-11e8-9c99-48fe582f1f83.png">


![screen shot 2018-03-07 at 3 42 13 pm](https://user-images.githubusercontent.com/29477363/37101948-9f8df526-221e-11e8-9acd-3ea56474b82b.png)


Users will register and sign in using an email address and password that has been salted and hashed using Bcrypt:

<img width="500" height="300" alt="screen shot 2018-03-07 at 14 04 19" src="https://user-images.githubusercontent.com/28264008/37096448-88dcbdac-2210-11e8-98ca-f774333f4106.png">

From here, we have added a "How it works" to guide users through the process of using the site: 

<img width="500" height="300" alt="screen shot 2018-03-07 at 14 07 13" src="https://user-images.githubusercontent.com/28264008/37096551-dff4c116-2210-11e8-8393-0251ac9bcf28.png">

Once signed in - users have option to refer a farmer, in which they can add a farmer local to them.

Users can search and sort farmers: 

<img width="500" height="300" alt="screen shot 2018-03-07 at 14 11 53" src="https://user-images.githubusercontent.com/28264008/37096751-92d0b5a6-2211-11e8-8284-9d9881d99d2a.png">

There are features that will not be rendered subject to the logged in/out status of the user. For example, if the user is logged in, they have the "Find a Farmer near you" feature available, based on geolocation: 

![screen shot 2018-03-07 at 3 54 13 pm](https://user-images.githubusercontent.com/29477363/37102482-d42066ba-221f-11e8-9626-8ebacd446307.png)


In addition, users can see more details about farmers, including email and number (if logged in and they have adopted the farmer). They can also make donations. The user have this information available to them on their own profile:

<img width="500" height="250" alt="screen shot 2018-03-07 at 13 22 42" src="https://user-images.githubusercontent.com/28264008/37097049-684e59b8-2212-11e8-98ab-189f4c24c339.png">
<img width="500" height="250" alt="screen shot 2018-03-07 at 13 23 03" src="https://user-images.githubusercontent.com/28264008/37097099-840aeffe-2212-11e8-9a75-bd169fb7d725.png">


## Achievements 
The number of functionalities implemented over five days would not have been possible at this level without group work. Consuming the Google Maps API, including its places and geometry libraries, autocomplete functionality, and using geolocation to render farmers near an user was a daunting task. However, completing it was one of the highlights of our project. Using version control - a standard Git flow on GitHub - was a very useful practice, working on different branches and merging into develoment and later on into the master branch.

## Challenges

The most notable challenges that we faced were linked to the Google Maps API. Particularly poulating farmers within a certain area, using geolocation and the geometry library. In addition, using React was demanding but it was very rewarding to produce a MERN stack app. We encountered a few code conflicts but as we worked closely together, these were easily resolved. The trickiest part was deciding the models. The reason for this was because we needed to understand the MVP functionality and the next steps for the project. 

## Next Steps

If we had more time, we would like to implement a farmer profile to produce figures and statistics. Following this, to implement a payment system for the donations and an in-platform messaging app to provide an integrated service. 

## Acknowledgments 
This project would not have come to fruition without the brilliant support from General Assembly's instructional team. Kudos to Ben, Emily, Guy, and Rane.

![Thank you all](https://media.giphy.com/media/3og0ILgFOEXIL8Bsn6/giphy.gif)