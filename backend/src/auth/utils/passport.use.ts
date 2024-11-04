import passport, { Strategy } from 'passport';

export function PassportUse<T extends Strategy>(
    name: string,
    Strategy: new (...args: any[]) => T,
    ...args: ConstructorParameters<typeof Strategy>
) {
    passport.use(name, new Strategy(...args));
}
