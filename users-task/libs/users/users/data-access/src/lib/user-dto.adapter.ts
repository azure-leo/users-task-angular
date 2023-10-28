import { UsersEntity } from "./+state/users.models"
import { UserDTO } from "./user-dto.model"


type UserDTOAdapter = {
  DTOtoEntity(dto: UserDTO): UsersEntity,
  entityToDTO(entity: UsersEntity): UserDTO
}
export const userDTOAdapter: UserDTOAdapter = {
  DTOtoEntity(dto) {
    const { geo, ...otherAddressFields} = dto.address
    return {
      ...dto,
      address: {
        ...otherAddressFields,
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
