import { Strategy as LocalStrat } from 'passport-local';
import { PassportUse } from '../utils/passport.use';
import { AuthService } from '../../services/auth.service';

export class LocalStrategy extends AuthService {
  constructor() {
    super();
  }

  async validate(username: string, password: string, done: any) {
    const user = await this.validateUser(username, password);
    if (!user) {
      return done(null, false, { message: 'Invalid username or password' });
    }
    return done(null, user);
  }

  // Define estrategia local
  get use() {
    return PassportUse(
      'local',
      LocalStrat,
      {
        usernameField: 'username',
        passwordField: 'password',
      },
      this.validate.bind(this)
    );
  }
}
