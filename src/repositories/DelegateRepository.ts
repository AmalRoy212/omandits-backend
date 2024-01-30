import { Db, InsertOneResult } from 'mongodb';
import Delegate from '../entities/DelegateEntity'

class DelegateRepository{
    constructor( private database : Db){}

    async addNewDelegate( delegate : Delegate ) : Promise<InsertOneResult<any>>{
        const result = await this.database.collection('delegates').insertOne(delegate);
       return result
    }

    async getAllDelegate () : Promise<any> {
        const allDeleagte = await this.database.collection('delegates').find();
        if(allDeleagte) return allDeleagte
        throw new Error('cannot get the delegates now')
    }
}

export default DelegateRepository