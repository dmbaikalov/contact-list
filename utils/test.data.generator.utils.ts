import {
    randFirstName,
    randLastName,
    randEmail,
    randPassword,
} from "@ngneat/falso";

interface SignUpData {
    firstName: string;
    lastName: string;
    email: string;
    password: string | any;
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
