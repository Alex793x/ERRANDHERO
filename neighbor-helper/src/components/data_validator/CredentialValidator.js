import validator from "validator/es";

const pattern = /^[A-Za-z0-9!@#$%&*_+,.:;`-]+$/;
export const validate = (field, value) => {
    switch (field) {
        case 'firstName':
            console.log(validator.isAlpha(value))
            return validator.isAlpha(value);
        case 'lastName':
            return validator.isAlpha(value);
        case 'email':
            return validator.isEmail(value);
        case 'password':
            return validator.isLength(value, {min: 8}) && validator.matches(value, pattern);
        case 'streetAddress':
            return validator.isAlpha(value, 'da-DK');
        case 'houseNum':
            return validator.isNumeric(value, {no_symbols: true});
        case 'apartmentFloor':
            return validator.isAlphanumeric(value);
        case 'postNum':
            return validator.isAlphanumeric(value);
        case 'city':
            return validator.isAlpha(value, 'da-DK');
        case 'country':
            return validator.isAlpha(value, 'da-DK');
        case 'phoneNum':
            return validator.isMobilePhone(value, 'da-DK', {strictMode: true});
    }
}
