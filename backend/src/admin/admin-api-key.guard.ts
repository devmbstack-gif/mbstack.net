import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

@Injectable()
export class AdminApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<{
      headers: Record<string, string | undefined>;
    }>();

    const apiKey = request.headers["x-admin-key"];
    const expected = process.env.ADMIN_API_KEY;

    if (!expected || apiKey !== expected) {
      throw new UnauthorizedException("Invalid admin credentials");
    }

    return true;
  }
}
