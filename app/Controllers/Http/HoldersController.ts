import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Holder from 'App/Models/Holder'

export default class HoldersController {

    public async index({inertia}: HttpContextContract){
        const asset = await Holder.all()
        return inertia.render('Holders/Index', {asset})
    }

    public async create({ inertia }: HttpContextContract)
    {
      return inertia.render('Holders/Create')
    }

    public async store({request,response}: HttpContextContract){
        const assetData = request.only(['name','parent'])
        await Holder.create(assetData)
        return response.redirect ('/holders')
    } 
  

    public async edit({params,inertia}: HttpContextContract){
        const asset = await Holder.findOrFail(params.id)
        return inertia.render('Holders/Edit',{asset})
    }

    public async update({ params, request, response }: HttpContextContract) {
        const asset = await Holder.findOrFail(params.id)
        asset.merge(request.only(['name', 'parent']))
        await asset.save()
        return response.redirect('/holders')
      }

      public async destroy({params,response}: HttpContextContract){
        const asset = await Holder.findOrFail(params.id)
        await asset.delete()
        return response.redirect('/holders')
      }
    
}
