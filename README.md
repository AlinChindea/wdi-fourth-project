# WDI Project 4

## MERN stack app 
### This application was a paired project. The purpose of the application was to provide a platform upon which farmers can add themselves and post their target required for donations. In return they can provide an item for the user. The user has the ability to adopt farmers, to donate and to choose a product. Upon registering and adopting - they can then contact farmers to organise arrangements.

<img width="500" height="300" alt="screen shot 2018-03-07 at 13 20 43" src="https://user-images.githubusercontent.com/28264008/37094558-285c399e-220b-11e8-9f14-9be9f787fc94.png">    <img width="200" height="300" alt="screen shot 2018-03-07 at 13 21 11" src="https://user-images.githubusercontent.com/28264008/37094604-45f5fd32-220b-11e8-9b58-d60c3c9c9d55.png">

## Technologies Used

####Dependencies

* Axios
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


####Backbone

* HTML
* CSS
* SCSS
* JavaScript (ECMA6)
* Gulp
* Node.js
* Express.js
* React
* Mongo
* Zsh
* Git
* Github
* Heroku

##Installation
Access online via these links:

[GitHub](https://github.com/avadher510/wdi-fourth-project)

[HEROKU](https://farmer-friends.herokuapp.com/)

OR

Install Locally by downloading or cloning the GitHub repository here: [GitHub Repository](https://github.com/avadher510/wdi-fourth-project)

##Approach to the Project

This project was not without difficulties but was a very rewarding experience. Our aim was to showcase our skills but creating an application that has a good premise, easy to use for users and scalable.

Users will register/log in. Users will register and sign in using an email address and password that has been salted and hashed using Bcrypt:

<img width="500" height="300" alt="screen shot 2018-03-07 at 14 04 19" src="https://user-images.githubusercontent.com/28264008/37096448-88dcbdac-2210-11e8-98ca-f774333f4106.png">

From here, we have added a "How it works" to guide users through the process of using the site: 

<img width="500" height="300" alt="screen shot 2018-03-07 at 14 07 13" src="https://user-images.githubusercontent.com/28264008/37096551-dff4c116-2210-11e8-8393-0251ac9bcf28.png">

Once signed in - users have option to refer a farmer, in which they can add a farmer local to them.

Users can search and sort farmers: 

<img width="500" height="300" alt="screen shot 2018-03-07 at 14 11 53" src="https://user-images.githubusercontent.com/28264008/37096751-92d0b5a6-2211-11e8-8284-9d9881d99d2a.png">

There are feature that will not be rendered subject to the logged in/out status of the user. If the user is logged in, they have the "Find a Farmer near you" feature available: 

<img width="500" height="300" alt="screen shot 2018-03-07 at 14 14 49" src="https://user-images.githubusercontent.com/28264008/37096864-ed6ec778-2211-11e8-98e4-898221372e9a.png">

In addition users can see more details about farmers, including email and number (if logged in and they have adopted the farmer). They can also make donations. The user have this information available to them on their own profile:

<img width="500" height="250" alt="screen shot 2018-03-07 at 13 22 42" src="https://user-images.githubusercontent.com/28264008/37097049-684e59b8-2212-11e8-98ab-189f4c24c339.png">
<img width="500" height="250" alt="screen shot 2018-03-07 at 13 23 03" src="https://user-images.githubusercontent.com/28264008/37097099-840aeffe-2212-11e8-9a75-bd169fb7d725.png">

Due to the data that we would need for the immediate features required for MVP, planning was crucial so that we as a team could have a clear idea of what needed to be done. We had a very detailed planning session that enabled us to develop the models and wireframes for the site. This was key for our progress: 

<img width="500" height="250" alt="screen shot 2018-03-07 at 14 38 14" src="https://user-images.githubusercontent.com/28264008/37098204-356ddfa2-2215-11e8-9c99-48fe582f1f83.png">

##Challenges

The challenges that we faced were with the google maps. Particularly poulating farmers within a certain area. In addition, using React was  a challenge but it was very rewarding to produce the app using React. We encountered a few code conflicts but as we worked closely together, these were easily resolved. The trickiest part was deciding the models. The reason for this was because we needed to understand the MVP functionality and the next steps for the project. 

##Next Steps

If we had more time, we would like to implement a farmer profile to produce figures and statistics. Following this, to implement a payment system for the donations.