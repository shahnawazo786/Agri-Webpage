(function ($) {
  'use strict';

  // PRELOADER
  $(window).on('load', function () {
    $('#page-loader').fadeOut('slow', function () {
      $(this).remove();
    });
  });

  // navbarDropdown
  if ($(window).width() < 992) {
    $('.has-dropdown .dropdown-toggle').on('click', function () {
      $(this).siblings('.dropdown-menu').animate({
        height: 'toggle'
      }, 300);
    });
  }

  // SCROLL TO TOP
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
      $('.scroll-to-top').addClass('reveal');
    } else {
      $('.scroll-to-top').removeClass('reveal');
    }
  });

  // Fixed header
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
      $('.site-navigation,.trans-navigation').addClass('header-white');
    } else {
      $('.site-navigation,.trans-navigation').removeClass('header-white');
    }
  });

  // scroll-to-top
  if ($('#scroll-to-top').length) {
    $('#scroll-to-top').on('click', function () {
      $('body,html').animate({
        scrollTop: 0
      }, 600);
      return false;
    });
  }

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').on('click', function (event) {
    $('.navbar-collapse').collapse('hide');
  });

  // URL of your deployed backend API on Render
  const backendUrl = 'https://backend-18b6.onrender.com';

  // Function to handle user signup
  async function signup(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    try {
      const response = await fetch(`${backendUrl}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.text();
      console.log(data);
      if (response.ok) {
        // Handle successful signup (e.g., redirect to login page)
        window.location.href = 'login.html';
      } else {
        // Handle signup error
        alert(data);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Signup failed, please try again.');
    }
  }

  // Function to handle user login
  async function login(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    try {
      const response = await fetch(`${backendUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.text();
      console.log(data);
      if (response.ok) {
        // Handle successful login (e.g., redirect to another page)
        window.location.href = 'dashboard.html'; // or any other page you want to redirect to
      } else {
        // Handle login error
        alert(data);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed, please try again.');
    }
  }

  // Event listeners for the signup and login forms
  document.getElementById('signup-form').addEventListener('submit', signup);
  document.getElementById('login-form').addEventListener('submit', login);

})(jQuery);
