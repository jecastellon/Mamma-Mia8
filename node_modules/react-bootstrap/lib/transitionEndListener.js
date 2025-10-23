import transitionEnd from 'dom-helpers/transitionEnd';
function parseDuration(node, property) {
  const str = node.style.getPropertyValue(property);
  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}
export default function transitionEndListener(element, handler) {
  const duration = parseDuration(element, 'transition-duration');
  const delay = parseDuration(element, 'transition-delay');
  const remove = transitionEnd(element, e => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}