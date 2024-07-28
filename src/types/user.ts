export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  bio?: string;
  isHost: boolean;
  eventsHosted: number[];
  eventsAttending: number[];
}
