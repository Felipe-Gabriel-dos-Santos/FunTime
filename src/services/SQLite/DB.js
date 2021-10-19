import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('FunTime');

export default db;