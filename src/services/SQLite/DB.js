import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('FunTime.db');

export default db;