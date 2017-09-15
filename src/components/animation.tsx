import app, { Component } from 'apprun';
export default function ({ animation }, children) {
  return <div className={animation}>{children}</div>
}

export const animate = async (el, animation) => {
  return new Promise(resolve => {
    const listener = el.addEventListener('animationend', () => {
      el.addEventListener('animationend', listener);
      el.classList.remove('animated', animation);
      resolve();
    });
    el.blur();
    el.classList.add('animated', animation);
  })
}