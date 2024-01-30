import DelegateRepository from '../repositories/DelegateRepository';
import Delegates from '../entities/DelegateEntity';

class AddDelegateUseCase{

    constructor ( private readonly delegateRepository : DelegateRepository){}

    async execute ( delegate : Delegates) : Promise<any> {
        return this.delegateRepository.addNewDelegate(delegate);
    }

    async executeAll(){
        
    }
}

export default AddDelegateUseCase