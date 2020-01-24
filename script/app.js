
// Mocking our data
const data = [
  {
    name: 'Jane Doe',
    age: 32,
    gender: 'Female',
    lookingfor: 'Male & Female',
    location: 'Boston',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'Francine Smith',
    age: 22,
    gender: 'Female',
    lookingfor: 'Female',
    location: 'London',
    image: 'https://randomuser.me/api/portraits/women/83.jpg'
  },
  {
    name: 'Billie Ray',
    age: 46,
    gender: 'Male',
    lookingfor: 'Male & Female',
    location: 'Idaho',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Bob Hoskins',
    age: 61,
    gender: 'Non Binary',
    lookingfor: 'Male & Female',
    location: 'Edinburgh',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  },
];

// Setting the variable that will hold out profiles
const profiles = profileIterator(data);

// Manually calling the first profile
nextProfile();

// 'Next' on click  Event
document.getElementById('next').addEventListener('click', nextProfile);


// Next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
          <li class="list-group-item">Name: ${currentProfile.name}</li>
          <li class="list-group-item">Age: ${currentProfile.age}</li>
          <li class="list-group-item">Gender: ${currentProfile.gender}</li>
          <li class="list-group-item">Looking for: ${currentProfile.lookingfor}</li>
          <li class="list-group-item">Location: ${currentProfile.location}</li>
       </ul>
    `

    document.getElementById('imageDisplay').innerHTML = `
        <img src="${currentProfile.image}">
    `
  } else {
    // No more profiles
    window.location.reload();

  }
}


// Profile Iterator function
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ?
        {
          value: profiles[nextIndex++],
          done: false
        }
        :
        { done: true }

    }
  };
}



/* Notes

    We define our data

    set a variable profiles, that will run the profile
    itterator each time it's used, feeding in our data.

    Manualy calling the first profile so the page is
    initially populated

    Target our next button with an on click event, that runs
    the function for next profile.

    The next profile function first creates a variable to
    define the current profile, it targets profile (that has
    the generator function tied to it) and runs the next
    method, capturing the value. Each time this function is run
    that current profile variable will move one place
    through the list of profiles.

    The if statement will continue to loop through users as long
    as the user object we get back isn't undefined. If it is we
    re-start the loop by re-loading the page.

    We then target the HTML elements on the page, and fill them
    in with the details from the object returned to us in current
    profile

    Finally we define our Itterator function. We set an initial
    index of 0 so that we start at the begining, then we run
    our return with the return function and the done statuses.



*/