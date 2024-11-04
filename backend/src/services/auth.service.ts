import { PrismaClient } from "@prisma/client";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

export class AuthService {
  constructor(private readonly jwtInstance = jwt) { }

  public async validateUser(
    usernameOrEmail: string,
    password: string
  ): Promise<any | null> {
    // Busca el usuario por email o username
    const user = await prisma.users.findFirst({
      where: {
        OR: [
          { email: usernameOrEmail },
          { fullName: usernameOrEmail },
        ],
      },
    });

    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

  /**
   * Genera un token JWT con el payload proporcionado.
   */
  private signToken(payload: jwt.JwtPayload, secret: string) {
    return this.jwtInstance.sign(payload, secret, { expiresIn: "1h" });
  }

  /**
   * Genera un JWT y devuelve el usuario junto con el token.
   */
  public async generateJWT(
    user: any
  ): Promise<{ accessToken: string; user: any }> {
    const userWithRole = await prisma.users.findUnique({
      where: { id: user.id },
    });

    if (!userWithRole) {
      throw new Error("User not found");
    }

    // Define el payload del token
    const payload: jwt.JwtPayload = {
      role: userWithRole.role || "USER",
      sub: String(userWithRole.id),
    };

    // Genera y devuelve el token y el usuario
    return {
      accessToken: this.signToken(payload, process.env.JWT_SECRET!),
      user: { ...userWithRole, password: undefined },
    };
  }

  // Verifica el token JWT y devuelve el payload decodificado.
  public async verifyToken(token: string): Promise<jwt.JwtPayload> {
    try {
      const decoded = this.jwtInstance.verify(token, process.env.JWT_SECRET!);
      return decoded as jwt.JwtPayload;
    } catch (error) {
      throw new Error("Invalid or expired token");
    }
  }
}


