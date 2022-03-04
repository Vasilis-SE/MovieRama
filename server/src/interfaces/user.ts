export interface IUserProperties {
    id?: number;
    email?: string;
    password?: string;
    firstname?: string;
    lastname?: string;
    created_at?: number;
}

export interface IUser extends IUserProperties {
    getId(): number;
    getUsername(): string;
    getPassword(): string;
    getCreatedAtStamp(): number;

    setId(id?: number): void;
    setUsername(usr?: string): void;
    setPassword(pass?: string): void;
    setCreatedAtStamp(ca?: number): void;
}

export enum UserGlobals {
    USERNAME_MAXLENGTH = 30,
    PASSWORD_MINLENGTH = 6,
    QUERY_LENGTH = 10,
    QUERY_ORDER_FIELD = 'id',
    QUERY_SORT_METHOD = 'ASC',
}

export interface IUserFilters {
    orderby?: string;
    limit?: string;
}

export type IListOfUsers = Array<IUserProperties>;

export interface IUserTokenContent {
    id: number;
    email: string;
}