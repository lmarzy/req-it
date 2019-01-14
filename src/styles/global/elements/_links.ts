// ========================================================================
// GLOBAL/ELEMENTS/LINKS
// ========================================================================

// Set default colour
// Remove the gray background on active links in IE 10.
// Set text decoration

export const links = `
  a {
    color: $col-links;
    background-color: transparent;
    text-decoration: none;
    transition: $transition;

    &:visited {
      color: $col-links-visited;
      text-decoration: none;
    }

    &:hover,
    &:focus {
      color: $col-links-hover;
    }

    &:active {
      color: $col-links-active;
    }
  }
`;
