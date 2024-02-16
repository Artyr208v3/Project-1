const controllers = document.querySelectorAll('[class^=range]');
const radialProgresses = document.querySelectorAll('[class^=RadialProgress]');

const setProgress = (progress, index) => {
  const value = `${progress}%`;
  const postfix = index ? index : '';
  controllers[index].style.setProperty(`--progress${postfix}`, value);
  radialProgresses[index].innerHTML = value;
  radialProgresses[index].setAttribute(`aria-valuenow${postfix}`, value);
}

controllers.forEach((controller, index) => {
  setProgress(controller.value, index);

  controller.oninput = () => {
    setProgress(controller.value, index);
  };
})