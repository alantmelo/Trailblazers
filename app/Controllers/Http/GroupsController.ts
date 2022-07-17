import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Group from 'App/Models/Group'
import Application from '@ioc:Adonis/Core/Application'

import { v4 as uuidv4 } from 'uuid'

export default class GroupsController {
  private validationOptions = {
    types: ['image'],
    size: '2mb',
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const image = request.file('logo', this.validationOptions)

    if (image) {
      const imageName = `${uuidv4()}.${image!.extname}`

      await image.move(Application.tmpPath('uploads'), {
        name: imageName,
      })

      body.logo = imageName
    }

    const group = await Group.create(body)

    response.status(201)

    return {
      message: 'Grupo criado com sucesso!',
      data: group,
    }
  }

  public async index() {
    const groups = await Group.query()

    return {
      data: groups,
    }
  }
  
    
}
