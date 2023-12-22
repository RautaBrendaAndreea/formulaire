export interface Properties {
    label: string;
    postcode: string;
    city: string;
}
  
  export interface Feature {
    properties: Properties;
}
  
  export interface ApiResponse {
    features: Feature[];
}
  
  export interface AdresseComplet {
    adresse: string;
    postalCode: string;
    city: string;
    id: number;
}