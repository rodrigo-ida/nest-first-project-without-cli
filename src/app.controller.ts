import { Controller, Module, Get } from "@nestjs/common";


@Controller('/app')
export class AppController {
    @Get('/home')
    getRootController() {
        return 'hi there'
    }
}