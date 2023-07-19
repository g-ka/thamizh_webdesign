
// hiding nav_bar on scroll_down

window.addEventListener('wheel', (event) =>
  {
    if(window.pageYOffset >= 73)
    {
      if (event.deltaY >= 0) 
      {
        //console.log('Scroll down');
        document.querySelector('header').classList.add('header_adder');
      }
      else 
      {
        //console.log('Scroll up');
        document.querySelector('header').classList.remove('header_adder');
      }
    }
  })

let start = 0;
let end = 0;
window.addEventListener('touchstart', () =>
{
  start = window.pageYOffset;
});
window.addEventListener('touchend', () =>
{
  end = window.pageYOffset;
});
window.addEventListener('touchmove', () =>
{
  if(window.pageYOffset >= 73)
  {
    if(start > end)
    document.querySelector('header').classList.add('header_adder');
    else 
    document.querySelector('header').classList.remove('header_adder');
  }
})

// hide nav_bar on dynamic scroll (and) color change of menu option

  let menu_links = document.querySelectorAll('.hide_nav');
  menu_links.forEach(link =>
    {
      link.addEventListener('click', () =>
      {
        menu_links.forEach(btn =>
          {
            if(btn === link)
            {
              btn.classList.add('on_action');
            }
            else
            {
              btn.classList.remove('on_action');
            }
          })
        document.querySelector('header').classList.add('header_adder');
      })
    })

    document.querySelector('.home_btn').addEventListener('click', (e) =>
    {
      e.preventDefault();
      window.scrollTo(0,0);
      document.querySelector('header').classList.remove('header_adder');
    });


    let mobile_menu_links = document.querySelectorAll('.hidden1');
    mobile_menu_links.forEach(link =>
      {
        link.addEventListener('click', () =>
        {
          menu_links.forEach(btn =>
            {
              if(btn === link)
              {
                btn.classList.add('on_action');
              }
              else
              {
                btn.classList.remove('on_action');
              }
            })
          document.querySelector('header').classList.add('header_adder');
        })
      })

      document.querySelector('.home_para').addEventListener('click', (e) =>
      {
        e.preventDefault();
        window.scrollTo(0,0);
        document.querySelector('header').classList.remove('header_adder');
      });

// automatic color change in menu_bar

document.querySelector('html').addEventListener('wheel', () =>
{
  let about_section = document.querySelector('.about_section');
  let roadmap_section = document.querySelector('.roadmap_section');
  let courses_section = document.querySelector('.courses_section');
  let contact_section = document.querySelector('.contact_section');

  let home_btn = document.querySelector('.home_btn');
  let about_btn = document.querySelector('.about_btn');
  let roadmap_btn = document.querySelector('.roadmap_btn');
  let courses_btn = document.querySelector('.courses_btn');
  let contact_btn = document.querySelector('.contact_btn');

  function remove_color()
  {
    menu_links.forEach(link =>
      {
        link.classList.remove('on_action');
      })
    document.querySelector('.home_btn').classList.remove('on_action');
  }

  if(window.pageYOffset >= 0 && window.pageYOffset < 0.8*about_section.offsetTop)
  {
    remove_color();
    home_btn.classList.add('on_action');
  } 
  else if(window.pageYOffset >= 0.8*about_section.offsetTop && window.pageYOffset < 0.8*roadmap_section.offsetTop)
  {
    remove_color();
    about_btn.classList.add('on_action');
  }
  else if(window.pageYOffset >= 0.8*roadmap_section.offsetTop && window.pageYOffset < 0.8*courses_section.offsetTop)
  {
    remove_color();
    roadmap_btn.classList.add('on_action');
  }
  else if(window.pageYOffset >= 0.8*courses_section.offsetTop && window.pageYOffset < 0.8*contact_section.offsetTop)
  {
    remove_color();
    courses_btn.classList.add('on_action');
  }
  else if(window.pageYOffset >= 0.8*contact_section.offsetTop)
  {
    remove_color();
    contact_btn.classList.add('on_action');
  }
});

document.querySelector('html').addEventListener('touchmove', () =>
{
  let about_section = document.querySelector('.about_section');
  let roadmap_section = document.querySelector('.roadmap_section');
  let courses_section = document.querySelector('.courses_section');
  let contact_section = document.querySelector('.contact_section');

  let home_btn = document.querySelector('.home_btn');
  let about_btn = document.querySelector('.about_btn');
  let roadmap_btn = document.querySelector('.roadmap_btn');
  let courses_btn = document.querySelector('.courses_btn');
  let contact_btn = document.querySelector('.contact_btn');

  function remove_color()
  {
    menu_links.forEach(link =>
      {
        link.classList.remove('on_action');
      })
    document.querySelector('.home_btn').classList.remove('on_action');
  }

  if(window.pageYOffset >= 0 && window.pageYOffset < 0.8*about_section.offsetTop)
  {
    remove_color();
    home_btn.classList.add('on_action');
  } 
  else if(window.pageYOffset >= 0.8*about_section.offsetTop && window.pageYOffset < 0.8*roadmap_section.offsetTop)
  {
    remove_color();
    about_btn.classList.add('on_action');
  }
  else if(window.pageYOffset >= 0.8*roadmap_section.offsetTop && window.pageYOffset < 0.8*courses_section.offsetTop)
  {
    remove_color();
    roadmap_btn.classList.add('on_action');
  }
  else if(window.pageYOffset >= 0.8*courses_section.offsetTop && window.pageYOffset < 0.8*contact_section.offsetTop)
  {
    remove_color();
    courses_btn.classList.add('on_action');
  }
  else if(window.pageYOffset >= 0.8*contact_section.offsetTop)
  {
    remove_color();
    contact_btn.classList.add('on_action');
  }
});

// mobile menu code

const observer1 = new IntersectionObserver(entries =>
  {
    entries.forEach(entry =>
    {
      if(entry.isIntersecting)
      {
        entry.target.classList.add('show1');
      }
      else
      {
        entry.target.classList.remove('show1');
      }
    });
  });

  const hidden1_elements = document.querySelectorAll('.hidden1');
  hidden1_elements.forEach(el =>
  {
    observer1.observe(el);
  })

  document.querySelector('.header__menu_icon').addEventListener('click', () =>
  {
      // document.querySelector('.mobile_menu').style.display = 'block';
      document.querySelector('.menu').style.left = '0';
      document.querySelector('.close').style.opacity = '1';
      document.querySelector('.close').style.cursor = 'pointer';
      document.querySelector('.close').style["pointer-events"] = 'auto';
  })

  document.querySelector('.close').addEventListener('click', () =>
  {
    // document.querySelector('.mobile_menu').style.display = 'none';
    document.querySelector('.menu').style.left = '100vw';
    document.querySelector('.close').style.opacity = '0';
    document.querySelector('.close').style["pointer-events"] = 'none';
  })

  let sets = document.querySelectorAll('.hidden1');
  sets.forEach(element =>
    {
      element.addEventListener('click', () =>
      {
        document.querySelector('.menu').style.left = '100vw';
        document.querySelector('.close').style.opacity = '0';
        document.querySelector('.close').style["pointer-events"] = 'none';
      })
    })


  
