import db from "./SQLite";
import { parserDBQuery } from "../utils/parsers";
import { PlantProps } from "../interfaces/interfaces";

//initialization and table creation

export const plantConnect = () => {
db.transaction( tx => {
    try {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS "Plants" (
                "id"    INTEGER NOT NULL UNIQUE,
                "name"	TEXT NOT NULL,
                "subtitle"	TEXT NOT NULL,
                "arrivedate"	TEXT NOT NULL,
                "enviroment"	TEXT NOT NULL,
                "photosplant"	TEXT,
                "deleteMode"	INTEGER NOT NULL,
                "quarentenaMode"	INTEGER NOT NULL,
                "lastquarentena"	TEXT,
                PRIMARY KEY("id" AUTOINCREMENT)
            );`
        )
        console.log(`the plants table was read/created with success`)
    } catch (error) {
        console.log(`Wasn't possible create or read the table plants : ${error}`)
    }
})
}

//load the data from database

export function readPlantData(){
    return new Promise( (resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `SELECT * FROM PLANTS`, 
                [],
            //--------------------------------    
            ( sqltx, result ) => {
                console.log('table itens was read successfully')
                resolve (parserDBQuery([ ... result.rows._array]))
                
                
            },
            ( sqltx, error) => {
                console.log('An reading error occour' + error)
                reject('An error on read data accour')
                return false
                
            }
            )
        })
    })
}


/* export function readEspecificPlantData(id: string){
    return new Promise( (resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `SELECT * FROM PLANTS
                    WHERE id = (?)`, 
                [id],
            //--------------------------------    
            ( sqltx, result ) => {
                console.log(`the plant id ${id} was read`)
                resolve(result.rows._array)
                
                
            },
            ( sqltx, error) => {
                console.log('An reading error occour' + error)
                reject('An error on read data accour')
                return false
                
            }
            )
        })
    })
}
 */
//insert the data

export function createPlant(plant: PlantProps){
    
    return new Promise( (resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `INSERT INTO plants
	            (name, subtitle, arrivedate, enviroment, photosplant, deleteMode, quarentenaMode)
	            VALUES
	            (?, ?, ?, ?, ?, ?, ?)`,
                [plant.name, plant.subtitle, String(plant.arriveDate), plant.enviroment, plant.photoPlant.localUri, 0, 0],
            //------------------------
            (sqltx, result) => {
                console.log(`the line ${result.insertId} was inserted`)
            },
            (sqltx, error) => {
                console.log('An reading error occour' + error)
                reject('An error on read data accour')
                return false
            }
            );
        })
    })
}

export function DeleteAllPlants(){
    return new Promise( (resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `DELETE FROM plants`,
                [],
            //------------------------
            (sqltx, result) => {
                console.log(`All Plants ware deleted`)
            },
            (sqltx, error) => {
                console.log('An delete error occour' + error)
                reject('An error on delete plant data accour')
                return false
            }
            );
        })
    })
}


export function DeleteEspecificPlant(id: string){
    return new Promise( (resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `DELETE FROM plants
                    WHERE ID = (?)`,
                [id],
            //------------------------
            (sqltx, result) => {
                console.log(`All Plants ware deleted`)
            },
            (sqltx, error) => {
                console.log('An delete error occour' + error)
                reject('An error on delete plant data accour')
                return false
            }
            );
        })
    })
}
