import { Body, Controller, Get, Patch, Param, Post, UseGuards } from "@nestjs/common";
import { AdminApiKeyGuard } from "./admin-api-key.guard";
import { AdminService } from "./admin.service";
import { UpdateStatusDto } from "./dto/update-status.dto";
import { AdminLoginDto } from "./dto/admin-login.dto";

@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post("login")
  login(@Body() dto: AdminLoginDto) {
    return this.adminService.login(dto.apiKey);
  }

  @Get("stats")
  @UseGuards(AdminApiKeyGuard)
  stats() {
    return this.adminService.getStats();
  }

  @Get("contacts")
  @UseGuards(AdminApiKeyGuard)
  contacts() {
    return this.adminService.listContacts();
  }

  @Get("consultancy")
  @UseGuards(AdminApiKeyGuard)
  consultancy() {
    return this.adminService.listConsultancy();
  }

  @Patch("contacts/:id/status")
  @UseGuards(AdminApiKeyGuard)
  updateContactStatus(@Param("id") id: string, @Body() dto: UpdateStatusDto) {
    return this.adminService.updateContactStatus(id, dto.status);
  }

  @Patch("consultancy/:id/status")
  @UseGuards(AdminApiKeyGuard)
  updateConsultancyStatus(@Param("id") id: string, @Body() dto: UpdateStatusDto) {
    return this.adminService.updateConsultancyStatus(id, dto.status);
  }
}
