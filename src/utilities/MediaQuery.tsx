
export const smView = window.matchMedia("(max-width: 700px)");





export function mobileView() {
  if (smView.matches) {
    return true;
  } else {
    return false;
  }
}