$('.accordion').on('click', '.accordion-control', function(e){
    e.preventDefault(); // Prevents the default behavior of the button click
    $(this)
          .next('.accordion-panel') // Selects the next sibling (accordion panel) after the clicked control
          .not(':animated') // Ensures the accordion panel is not currently being animated
          .slideToggle(); // Toggles the sliding effect to show or hide the panel
});