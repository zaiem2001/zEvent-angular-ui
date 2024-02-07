export interface User {
  _id: string;

  username: string;
  email: string;

  password: string;

  phoneNumber: string;

  role: string;

  //  Event[] events = null;

  createdAt: string;
  updatedAt: string;
}
