/**
 * Height of the fixed header. A section counts as active once it reaches this
 * line, and anything scrolled to by anchor has to stop this far above its own
 * top — mirrored by `section { scroll-margin-top }` in global.scss for the
 * browser's own anchor handling.
 */
export const HEADER_OFFSET = 112;
