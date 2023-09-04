const showMoreData = document.querySelector(".showMoreData");
const show = document.querySelector(".show")

const generateID = () => {
  const timestamp = Date.now().toString(36);
  const randomValue = Math.random().toString(36).substring(2, 5);

  return `${timestamp} - ${randomValue}`;
};

const form = document.querySelector(".form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Obtener datos del usuario del formulario
  const username = document.querySelector("#username").value;
  const years = document.querySelector("#years").value;
  const altura = document.querySelector("#altura").value;
  const problemas = document.querySelector("#problemas").value;
  const actividades = document.querySelector("#actividades").value;

  const id = generateID();

  // & Datos del usuario a envíar
  const user = {
    _id: id,
    username: username,
    years: years,
    altura: altura,
    problemas: problemas,
    actividades: actividades,
  };

  console.log(user);
  try {
    const response = await fetch(
      "https://heart-graphic-microservice.onrender.com/auth/api/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    // render
    const responseData = await response.json();
    if (response.ok) {
      console.log("todo bien");
      console.log(responseData);
      username.value = "";
      years.value = "";
      altura.value = "";
      actividades.value = "";
      problemas.value = "";
    } else {
      console.log("error en la súbida de datos!", responseData.error);
    }
  } catch (error) {
    throw new Error(error);
  }
});

showMoreData.addEventListener("click", () => {
  console.log("llamando...");
  window.location.href = "./users.data.html";
});

// show.addEventListener("click", async ()=> {

// })