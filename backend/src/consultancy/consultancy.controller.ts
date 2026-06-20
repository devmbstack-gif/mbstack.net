import { Body, Controller, Post } from "@nestjs/common";
import { ConsultancyService } from "./consultancy.service";
import { CreateConsultancyDto } from "./dto/create-consultancy.dto";

@Controller("consultancy")
export class ConsultancyController {
  constructor(private readonly consultancyService: ConsultancyService) {}

  @Post()
  create(@Body() dto: CreateConsultancyDto) {
    return this.consultancyService.create(dto);
  }
}
