import * as SQlite from 'expo-sqlite'

//create a dbfile
const db = SQlite.openDatabase('brotodb.db')

export default db