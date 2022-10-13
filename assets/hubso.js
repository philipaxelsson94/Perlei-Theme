
$(function() {
  
  /* Header */
  const header = $('#siteHeader');
  const openMenu = $('#openMenu');
  
  function checkMenuOpen() {
    const headerMenu = $('#menu0');

    if (headerMenu.css('display') == 'none') {
      header.addClass('menu-is-open');
    } else {
      header.removeClass('menu-is-open');
    }
  }
  
  openMenu.click(checkMenuOpen);
  
  /* Sidebar */
  
  /*
  const menuDrawerToggle = $('button[data-menu-drawer-toggle]');
  const sidebarOverlay = $('#sidebarOverlay');
  let sidebarIsOpen = false;
  
  function checkSidebar() {
  	if ( menuDrawerToggle.attr('aria-expanded') === "true") {      
      setTimeout( function() {
        sidebarIsOpen = true;
      	console.log(sidebarIsOpen);
      }, 200);
  	} else {
      setTimeout( function() {
        sidebarIsOpen = false;
      	console.log(sidebarIsOpen);
      }, 200);
  	}
  }
  
  menuDrawerToggle.click(checkSidebar);
  $(document).on('keydown', function(e) {
    if ( e.key == "Escape" ) {
      checkSidebar();
    }
  });
  
  if ( sidebarIsOpen ) {
  	sidebarOverlay.css('display', 'block');
  } else {
  	sidebarOverlay.css('display', 'none');
  }
  */
  
});
