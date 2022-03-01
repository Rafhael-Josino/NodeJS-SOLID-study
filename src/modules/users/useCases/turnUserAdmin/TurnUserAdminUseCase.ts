import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const newAdmin = this.usersRepository.findById(user_id);
    if (!newAdmin) {
      throw new Error("User not cadastred");
    } else return this.usersRepository.turnAdmin(newAdmin);
  }
}

export { TurnUserAdminUseCase };
