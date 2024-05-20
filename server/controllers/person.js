import {db} from '../database.js'


export const getPersons = (_,res) => {
    const q = 'SELECT * FROM Persons'

    db.query(q,(err, data) => {
        if(err) return res.json(err)
        
        return res.status(200).json(data)
    })
}