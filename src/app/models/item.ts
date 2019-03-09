export class Item {
    _id: number;
    name: string;
    description: string;
    kind: Kind;
    category: Category;
    color: string;
    create_time: Date;
    location: string;
    username: string;

}

export enum Category{
    Glasses = "Glasses",
    Phones = "Phones",
    Laptops = "Laptops",
    Wallets = "Wallets",
    Documents = "Documents"
}

export enum Kind{
    Lost = "Lost",
    Found = "Found",
}
