import { Strategy as JwtStr, StrategyOptions, ExtractJwt } from 'passport-jwt';
import { PassportUse } from '../utils/passport.use';
import { AuthService } from '../../services/auth.service';
import { PayloadToken } from '../../interfaces/auth.interface';

export class JwtStrategy extends AuthService {
    constructor() {
        super();
    }

    async validate(payload: PayloadToken, done: any) {
        return done(null, payload);
    }

    // Define estrategia JWT
    get use() {
        return PassportUse(
            "jwt",
            JwtStr,
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: process.env.JWT_SECRET!,
                ignoreExpiration: false,
            },
            this.validate.bind(this)
        );
    }
}

