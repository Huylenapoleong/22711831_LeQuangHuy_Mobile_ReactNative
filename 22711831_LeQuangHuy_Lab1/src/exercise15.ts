export class Book {
  constructor(
    public title: string,
    public author: string,
    public year: number
  ) {}
}

export class User15 {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }
}

export class Library {
  private books: Book[] = [];
  private users: User15[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  addUser(user: User15): void {
    this.users.push(user);
  }

  getBooks(): Book[] {
    return this.books;
  }

  getUsers(): User15[] {
    return this.users;
  }
}