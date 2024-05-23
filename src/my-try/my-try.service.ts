import { Injectable } from "@nestjs/common";
import { CreateMyTryDto } from "./dto/create-my-try.dto";
import { UpdateMyTryDto } from "./dto/update-my-try.dto";

@Injectable()
export class MyTryService {
    create(createMyTryDto: CreateMyTryDto) {
        return "This action adds a new myTry";
    }

    findAll() {
        return { data: [{ name: "myFirstTry" }, { name: "mySecondTry" }] };
    }

    findOne(id: number) {
        return `This action returns a #${id} myTry`;
    }

    update(id: number, updateMyTryDto: UpdateMyTryDto) {
        return `This action updates a #${id} myTry`;
    }

    remove(id: number) {
        return `This action removes a #${id} myTry`;
    }
}
