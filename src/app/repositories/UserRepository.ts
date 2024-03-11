import User from "../entities/User";
import IUser from "../interfaces/IUser";
import { AppDataSource } from "../../database/data-source";

//Habilitando os metodos do typeorm;

const userRepository = AppDataSource.getRepository(User);

const getUsers = (): Promise<IUser[]> => {
  return userRepository.find() // <= igual o SELECT * FROM User;
}

export default { getUsers };