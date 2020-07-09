import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JournalEntry } from '../models/journalentry';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public currentUser;
  public journalEntries: JournalEntry[] = [];
  private firebaseURL: string = 'https://messingaround-524ea.firebaseio.com/';

  constructor(private http: HttpClient, public db: AngularFirestore) { }

  getAvatars() {
    return this.db.collection('/avatar').valueChanges()
  }

  getUser(userKey) {
    // let r = this.http.get(`${this.firebaseURL}Users.json`);
    // r.subscribe(x => {
    //   console.log(x);
    // })
  }

  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('users').doc(userKey).set(value);
  }

  deleteUser(userKey) {
    return this.db.collection('users').doc(userKey).delete();
  }

  getUsers() {
    return this.db.collection('users').snapshotChanges();
  }

  searchUsers(searchValue) {
    return this.db.collection('users', ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByAge(value) {
    return this.db.collection('users', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }


  createUser(value, avatar) {
    return this.db.collection('users').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      surname: value.surname,
      age: parseInt(value.age),
      avatar: avatar
    });
  }

  public createJournalEntry(username, value) {
    return this.http.post<JournalEntry>(`${this.firebaseURL}Journal%20Entries/${username}.json`, value);
  }

  public deleteJournalEntry(username, value) {
    return this.http.delete<JournalEntry>(`${this.firebaseURL}Journal%20Entries/${username}/${value}.json`);
  }

  public getJournalEntries(username) {
    return this.http.get<JournalEntry[]>(`${this.firebaseURL}Journal%20Entries/${username}.json`).pipe(map(responseData => {
      const entryArray: JournalEntry[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          entryArray.push({ ...responseData[key], id: key })
        }
      }
      return entryArray;
    }));
  }
}