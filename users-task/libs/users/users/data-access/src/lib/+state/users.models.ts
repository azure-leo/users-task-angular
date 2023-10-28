import {UserDTO} from "../user-dto.model";

/**
 * Interface for the 'Users' data
 */
export type UsersEntity = Omit<UserDTO, 'address'> & {
  address: Omit<UserDTO['address'],'geo'>
}
