import { Item, Kind, Category } from 'src/app/models/item';
import {User} from 'src/app/models/user';

export class Message {
    _id: number;
    fromUser: User;
    title: string;
    content: string;
    create_time: Date;
    isRead: boolean;
    item: Item;

}