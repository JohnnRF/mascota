const {db} = require('../cnn')

const insertMascota = async (req, res) =>{
    const {mas_id, mas_nombre, mas_propietario, mas_raza} = req.body;
    const response = await db.one(`INSERT INTO public.mascota(mas_id, mas_nombre, mas_propietario, mas_raza ) VALUES ($1, $2, $3, $4) returning *;`, [mas_id, mas_nombre, mas_propietario, mas_raza]);
    
    res.json(response);
 }

 const getMascotaById = async (req, res) => {
    const id=req.params.id;
    const response = await db.any(`SELECT * FROM mascota WHERE mas_id=$1`, [id])
    res.json(response);

}

const UpdateMascota = async (req, resp) =>{
    const {mas_nombre, mas_propietario, mas_raza, mas_id} = req.body;
    const response = await db.query(`UPDATE public.mascota SET mas_nombre=$1, mas_propietario=$2, mas_raza=$3 WHERE mas_id = $4`, [mas_nombre, mas_propietario, mas_raza, mas_id]);

    resp.json(response);
}

const deleteMascota = async (req, resp) => {
    const mas_id= req.params.id;
    const response = await db.query(`DELETE FROM public.mascota
	WHERE mas_id=$1`, [mas_id]);

    resp.json(response);
}

module.exports = {

    insertMascota,
    getMascotaById,
    UpdateMascota,
    deleteMascota
}