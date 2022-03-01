import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("User not cadastred");
    } else if (!user.admin) {
      throw new Error("User not admin tried to obtain list of users");
    } else return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
