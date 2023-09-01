import userModel from "../models/user.model.js";

export const createUser = async (req, res) => {
  const { username, years, altura, problemas, actividades } = req.body;
  try {
    const dataUser = {
      username,
      years,
      altura,
      problemas,
      actividades,
    };

    // & validar si es sano o no
    let message = "";
    let condition = false;

    if (
      dataUser.problemas == "si" ||
      dataUser.problemas == "Si" ||
      dataUser.actividades == "no" ||
      dataUser.actividades == "No"
    ) {
      message = "problema cardiacos ó de salud detectados'";
      condition = true;
      console.log(condition);
    } else {
      message = "No, no tiene problemas cardiacos'";
      condition = false;
      console.log(condition);
    }

    // && save data
    const savedDataUser = await userModel.create(dataUser);

    if (savedDataUser) {
      res.status(200).json({ message });
    } else {
      res.status(204).json({ message: "Failed to save data user." });
    }
  } catch (error) {
    throw new Error(error);
  }
};

// TODO: mostrar todos los usuarios
export const showUsers = async (req, res) => {
  try {
    const data = await userModel.find();
    res.json({ message: data });
  } catch (error) {}
};
