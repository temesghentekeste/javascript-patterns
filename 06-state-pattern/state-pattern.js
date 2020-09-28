const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState)
  }


  this.change = function(state) {
    currentState = state;
  }
};

// Home State
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
      <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
  `
}

// About State
const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
      <p>This is the about page!</p>
  `
};

// Contact State
const contactState = function(page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  `
};

// Instantiate pagestate
const page = new PageState();

// Init the first state
page.init();

// UI Vars
const home = document.querySelector('#home'),
      about = document.querySelector('#about'),
      contact = document.querySelector('#contact');

// Event Listeners

// Home
home.addEventListener('click', e => {
  page.change(new homeState());
  e.preventDefault();
});

// About
about.addEventListener('click', e => {
  page.change(new aboutState());
  e.preventDefault();
});

// Contact
contact.addEventListener('click', e => {
  page.change(new contactState());
  e.preventDefault();
});
