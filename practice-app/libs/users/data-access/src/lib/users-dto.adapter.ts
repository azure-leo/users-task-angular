import { UsersEntity } from "./+state/users.models";
import {UsersDTO} from "./users-dto.model";


type UsersDTOAdapter = {
  DTOtoEntity(dto: UsersDTO): UsersEntity,
  entityToDTO(entity: UsersEntity): UsersDTO
}
export const userDTOAdapter: UsersDTOAdapter = {
  DTOtoEntity(dto) {
    return {
      ...dto,
      address: {
        ...dto.address,
      }
    }
  },
  entityToDTO(entity) {
    return {
      ...entity,
      address: {
        ...entity.address,
        geo: {lat: '', lng: ''}
      }
    }
  }
}
