import validator from "validator/es";
import isAlpha from "validator/es/lib/isAlpha";

const passwordPattern = /^[A-Za-z0-9!@#$%&*_+,.:;` -]+$/;
const namePattern = /^[A-Za-z -]+$/;
export const validate = (field, value) => {
    switch (field) {
        case 'name':
            return validator.matches(value, namePattern);
        case 'username':
            return validator.isAlphanumeric(value)
        case 'email':
            return validator.isEmail(value);
        case 'password':
            return validator.isLength(value, {min: 8}) && validator.matches(value, passwordPattern);
        case 'streetAddress':
            return validator.matches(value, namePattern);
        case 'houseNum':
            return validator.isNumeric(value, {no_symbols: true});
        case 'apartmentSide':
            return validator.isAlphanumeric(value, {ignore: ' .,'});
        case 'zipCode':
            return validator.isAlphanumeric(value);
        case 'city':
            return validator.isAlpha(value, 'da-DK');
        case 'country':
            return validator.isAlpha(value, 'da-DK');
    }
}
