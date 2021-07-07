import { extend } from 'vee-validate';
import { email, required } from 'vee-validate/dist/rules';


// By default no rule is included, rules need to be included manually
extend('required', required);
extend('email', email);
extend('password', {
    validate(value, args: any) {
        const length = value.length;
        return length >= 8;
    },
});
extend('confirmPassword', {
    validate(value, args: any) {
        return value === args.password;
    },
    params: ['password'],
});
