import validator from "validator/es";
import isAlpha from "validator/es/lib/isAlpha";

const pattern = /^[A-Za-z0-9!@#$%&*_+,.:;`-]+$/;
export const validate = (input) => {
    switch (input) {
        case 'firstName':
            console.log(!!validator.isAlpha(input))
            return !!validator.isAlpha(input);
        case 'lastName':
            return !!validator.isAlpha(input);
        case 'email':
            return !!validator.isEmail(input);
        case 'password':
            return validator.isLength(input, {min: 8}) && validator.matches(input, pattern);
        case 'streetAddress':
            return !!validator.isAlpha(input, {locale: 'da-DK'});
        case 'houseNum':
            return !!validator.isNumeric(input, {no_symbols: true});
        case 'apartmentFloor':
            return !!validator.isAlphanumeric(input);
        case 'postNum':
            return !!validator.isAlphanumeric(input);
        case 'city':
            return !!validator.isAlpha(input, {locale: 'da-DK'});
        case 'country':
            return !!validator.isAlpha(input, {locale: 'da-DK'});
        case 'phoneNum':
            return !!validator.isMobilePhone(input, {locale: 'dk-DK', strictMode: true});
    }
}
