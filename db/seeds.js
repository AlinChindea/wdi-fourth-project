const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const { env, db } = require('../config/environment');
const Farmer     = require('../models/farmer');
const User = require('../models/user');
User.collection.drop();
mongoose.connect(db[env]);
Farmer.collection.drop();
User
  .create([{
    username: 'test',
    email: 'test@mail.com',
    password: 'test',
    passwordConfirmation: 'test',
    farmerTrue: false
  }])
  .then((users) => {
    console.log(`${users.length} users created!!`);
    return Farmer
      .create([{
        name: 'Farmer Joe',
        image: 'https://goo.gl/YVsycK',
        address: '18 Coder Avenue',
        location: {
          lat: 50.331685,
          lng: -4.520443
        },
        story: 'Spicy jalapeno bacon ipsum dolor amet ullamco turkey hamburger tri-tip quis alcatra mollit. Boudin sint short loin andouille pork chop, nulla swine burgdoggen alcatra jerky velit. Picanha pariatur leberkas aute pork loin buffalo biltong chuck minim dolore. Deserunt porchetta sed venison beef pork loin shankle. Tail chuck cupim, excepteur nisi jerky drumstick bresaola veniam brisket ex picanha tri-tip ipsum irure. Excepteur spare ribs prosciutto fugiat occaecat leberkas eiusmod biltong chuck aliqua enim bresaola labore pariatur ribeye.',
        offer: {
          produce: true,
          weekendStay: true,
          farmExperience: false
        },
        target: 3000,
        sponsor: users[0],
        email: 'farmer.joe@fj.com',
        number: '0123456789',
        farmerTrue: true
      },{
        name: 'Farmer Mary',
        image: 'https://goo.gl/pdw93Z',
        address: '18 Coder Avenue',
        location: {
          lat: 50.990888,
          lng: -4.479449
        },
        story: 'Andouille nulla cow ham hock flank, deserunt aute. Quis ut pig sirloin andouille. Aliqua ex sirloin, shankle pork loin ham hock beef ribs. Non nisi anim, ground round short ribs shoulder buffalo meatball. Brisket in laboris, in dolore cow ipsum proident tenderloin alcatra sirloin chuck do anim pork belly. Bacon venison sint, pig ham labore aliqua consectetur incididunt capicola ut alcatra pariatur ullamco.',
        offer: {
          produce: true,
          weekendStay: false,
          farmExperience: false
        },
        target: 10000,
        sponsor: users[0],
        email: 'farmer.mary@fm.com',
        number: '0123456789',
        farmerTrue: true
      },{
        name: 'Farmer Steve',
        image: 'https://goo.gl/NKw2Rq',
        address: '18 Coder Avenue',
        location: {
          lat: 51.230881,
          lng: 1.133622
        },
        story: 'Cupidatat tongue mollit tail, id qui t-bone magna ea. Landjaeger dolore ground round, deserunt ipsum pig sirloin labore filet mignon consectetur t-bone biltong pancetta. Shankle shoulder jerky ut aliqua ad. Filet mignon burgdoggen culpa cupidatat jerky prosciutto fatback porchetta anim laborum alcatra in. Drumstick nisi swine flank adipisicing dolore. Ad minim spare ribs, consectetur shank deserunt cupim. Meatloaf ball tip spare ribs ut officia flank, aute corned beef laborum.',
        offer: {
          produce: true,
          weekendStay: true,
          farmExperience: false
        },
        target: 20000,
        sponsor: users[0],
        email: 'farmer.steve@fs.com',
        number: '0123456789',
        farmerTrue: true
      },{
        name: 'Farmer Alin',
        image: 'https://goo.gl/cRTdcV',
        address: '18 Coder Avenue',
        location: {
          lat: 51.770782,
          lng: -1.790823
        },
        story: 'Shoulder picanha flank fatback ut tempor. Culpa cupidatat beef ham porchetta shoulder meatloaf qui tenderloin ground round. Ham ribeye tongue, lorem hamburger laboris t-bone boudin flank ut. Eiusmod aliqua frankfurter duis prosciutto alcatra tri-tip meatloaf flank pariatur hamburger voluptate swine picanha. Excepteur leberkas est, elit t-bone bacon veniam swine. Ut dolore incididunt hamburger bacon pastrami, commodo sed picanha non ball tip chicken magna t-bone. Ullamco occaecat ex veniam leberkas hamburger minim tail in pork chop pork duis magna tempor fugiat.',
        offer: {
          produce: true,
          weekendStay: true,
          farmExperience: true
        },
        target: 2000,
        sponsor: users[0],
        email: 'farmer.alin@fa.com',
        number: '0123456789',
        farmerTrue: true
      },{
        name: 'Farmer Stephanie',
        image: 'https://goo.gl/jVEuE1',
        address: '18 Coder Avenue',
        location: {
          lat: 52.453836,
          lng: -1.629428
        },
        story: 'Buffalo laborum chicken turducken, sunt salami anim esse strip steak ut nostrud. Ea labore tail sirloin. Jerky veniam chuck in, buffalo quis nulla culpa shank. Ea venison short loin pariatur pork chop. Aliqua shankle exercitation ut kielbasa duis. Minim strip steak aliqua tempor t-bone short ribs nulla turducken buffalo pig cillum commodo ut veniam jowl.',
        offer: {
          produce: false,
          weekendStay: true,
          farmExperience: false
        },
        target: 80000,
        sponsor: users[0],
        email: 'farmer.stephanie@fs.com',
        number: '0123456789',
        farmerTrue: true
      },{
        name: 'Farmer Pedro',
        image: 'https://goo.gl/xgXcYw',
        address: '18 Coder Avenue',
        location: {
          lat: 54.910443,
          lng: -0.994911
        },
        story: 'Dolore officia turkey bresaola, sunt tongue adipisicing pig nulla shankle hamburger est in. In ham pork prosciutto. Deserunt doner lorem, excepteur venison elit pastrami. Magna irure dolore tenderloin andouille ball tip in biltong bresaola sunt short loin, reprehenderit turkey adipisicing. Picanha capicola fatback, sunt laborum velit culpa bacon aliqua ipsum. Cupim capicola doner corned beef reprehenderit bresaola est rump et.',
        offer: {
          produce: true,
          weekendStay: true,
          farmExperience: false
        },
        target: 50000,
        sponsor: users[0],
        email: 'farmer.pedro@fp.com',
        number: '0123456789',
        farmerTrue: true
      }]);
  })
  .then(farmers => console.log(`${farmers.length} farmers created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
