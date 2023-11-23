
export interface CreateYourAccount {
    firstName: string;
    lastName: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
}
  

  export interface CreateYourAccount2 extends CreateYourAccount {
    sexe:string;
    dateOfBirth: string;
    country: string;
    address: string;
    postalCode: string;
    phoneNumber: string;
}
  
  export interface Country {
    id: number,
    code: string,
    alpha2: string,
    alpha3: string,
    nom_fr_fr: string,
    nom_en_gb: string,
}