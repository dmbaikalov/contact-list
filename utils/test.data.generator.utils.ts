import {
    randFirstName,
    randLastName,
    randEmail,
    randPassword,
    randPastDate,
    randPhoneNumber,
    randStreetAddress,
    randCity,
    randState,
    randZipCode,
    randCountry,
} from "@ngneat/falso";

interface SignUpData {
    firstName: string;
    lastName: string;
    email: string;
    password: string | any;
}

interface AddContactData {
    firstName: string;
    lastName: string;
    birthdayDate: Date;
    email: string;
    phone: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
}

export const signUpData: SignUpData = {
    firstName: randFirstName(),
    lastName: randLastName(),
    email: randEmail(),
    password: randPassword(),
};

export const userLoginData: { email: string; password: string } = {
    email: signUpData.email,
    password: signUpData.password,
};

export const contactData: AddContactData = {
    firstName: randFirstName(),
    lastName: randLastName(),
    birthdayDate: randPastDate(),
    email: randEmail(),
    phone: randPhoneNumber(),
    streetAddress1: randStreetAddress(),
    streetAddress2: randStreetAddress(),
    city: randCity(),
    state: randState(),
    zipcode: randZipCode(),
    country: randCountry(),
};
