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

async function getUserRoles() {
    const responce =  await fetch('http://localhost:5000/auth/user', {
      
    })
}

const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}